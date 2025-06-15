// in prisma/seed.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  // Create Fiat Currencies using upsert to avoid duplicates on re-running
  const thb = await prisma.fiatCurrency.upsert({
    where: { symbol: 'THB' },
    update: {},
    create: { name: 'Thai Baht', symbol: 'THB' },
  });

  const usd = await prisma.fiatCurrency.upsert({
    where: { symbol: 'USD' },
    update: {},
    create: { name: 'United States Dollar', symbol: 'USD' },
  });

  // Create Cryptocurrencies
  const btc = await prisma.cryptocurrency.upsert({
    where: { symbol: 'BTC' },
    update: {},
    create: { name: 'Bitcoin', symbol: 'BTC', decimal_places: 8 },
  });

  const eth = await prisma.cryptocurrency.upsert({
    where: { symbol: 'ETH' },
    update: {},
    create: { name: 'Ethereum', symbol: 'ETH', decimal_places: 18 },
  });

  // Create a sample User
  const alice = await prisma.user.upsert({
    where: { email: 'userXample@example.com' },
    update: {},
    create: {
      username: 'userXample',
      email: 'userXample@example.com',
      password_hash: 'P@ssw0rd', 
      fiat_balance_thb: 100000.00,
      fiat_balance_usd: 3000.00,
      is_verified: true,
    },
  });

  console.log('Seeding finished.');
  console.log({ thb, usd, btc, eth, alice });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // Close the database connection
    await prisma.$disconnect();
  });