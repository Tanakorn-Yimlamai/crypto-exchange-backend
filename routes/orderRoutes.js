const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.post('/', orderController.createOrder);
router.get('/', orderController.getOpenOrders);
router.post('/:id/match', orderController.matchOrder);

module.exports = router;