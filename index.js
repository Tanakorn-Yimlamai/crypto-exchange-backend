const express = require('express');
// Import the routes
const userRoutes = require('./routes/userRoutes'); 
const orderRoutes = require('./routes/orderRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Crypto Exchange API is running!');
});


app.use('/api/createUser', userRoutes);
app.use('/api/orders', orderRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});