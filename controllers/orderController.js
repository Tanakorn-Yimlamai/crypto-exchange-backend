const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createOrder = async (req, res) => {
  try {
    const {
      maker_user_id,
      order_type,
      crypto_currency_id,
      fiat_currency_id,
      crypto_amount,
      price_per_crypto,
    } = req.body;

    const total_fiat_amount = crypto_amount * price_per_crypto;

    const newOrder = await prisma.order.create({
      data: {
        maker_user_id: maker_user_id,
        order_type: order_type,
        crypto_currency_id: crypto_currency_id,
        fiat_currency_id: fiat_currency_id,
        crypto_amount: crypto_amount,
        price_per_crypto: price_per_crypto,
        total_fiat_amount: total_fiat_amount,
        status: 'pending',
      },
    });
    

    res.status(201).json(newOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating the order.' });
  }
};

exports.getOpenOrders = async (req, res) => {
  try {
    const openOrders = await prisma.order.findMany({
      include: {
        maker: true,           // Includes related user data
        crypto_currency: true, // Includes crypto data
        fiat_currency: true,   // Includes fiat data
      },
      orderBy: { created_at: 'desc' },
    });
    res.status(200).json(openOrders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching orders.' });
  }
};

exports.matchOrder = async (req, res) => {
  // ID of the order to be matched with URL parameters
  const { id } = req.params; 
  // ID of the user TAKING the order from request body
  const { taker_user_id } = req.body;

  try {
    // Step 1: Find order still "pending"
    const orderToMatch = await prisma.order.findFirst({
      where: {
        order_id: parseInt(id),
        status: 'pending',
      },
    });

    if (!orderToMatch) {
      return res.status(404).json({ error: 'Pending order not found.' });
    }

    // self match prevention
    if (orderToMatch.maker_user_id === taker_user_id) {
      return res.status(400).json({ error: 'You cannot match your own order.' });
    }
    
    // Step 2: Use transaction to update order AND create transaction record
    // ensures that if one step fails, both are rolled back.
    const result = await prisma.$transaction(async (tx) => {

      // Update the order's status and assign the taker
      const updatedOrder = await tx.order.update({
        where: { order_id: parseInt(id) },
        data: {
          status: 'completed',
          taker_user_id: taker_user_id,
        },
      });

      // Create the transaction record 
      const newTransaction = await tx.transaction.create({
        data: {
          order_id: updatedOrder.order_id,
          transaction_type: `p2p_${updatedOrder.order_type}`, // 'p2p_buy', 'p2p_sell'
          amount: updatedOrder.crypto_amount,
          status: 'completed',
          // Link all relevant parties to this transaction
          sender_user_id: updatedOrder.order_type === 'sell' ? updatedOrder.maker_user_id : taker_user_id,
          receiver_user_id: updatedOrder.order_type === 'sell' ? taker_user_id : updatedOrder.maker_user_id,
          crypto_currency_id: updatedOrder.crypto_currency_id,
          fiat_currency_id: updatedOrder.fiat_currency_id,
          transaction_fee: 0 // Assuming no fee
        },
      });
      
      // for future reference, you can also update user balances here if needed

      return { updatedOrder, newTransaction };
    });

    res.status(200).json(result);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while matching the order.' });
  }
};