const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(express.static('public'));
app.use(express.json());

const products = [
  { id: 1, name: 'Laptop', price: 999.99, description: 'High-performance laptop' },
  { id: 2, name: 'Headphones', price: 149.99, description: 'Wireless noise-canceling headphones' },
  { id: 3, name: 'Keyboard', price: 79.99, description: 'Mechanical gaming keyboard' },
  { id: 4, name: 'Mouse', price: 49.99, description: 'Ergonomic wireless mouse' },
  { id: 5, name: 'Monitor', price: 299.99, description: '27-inch 4K display' },
  { id: 6, name: 'Webcam', price: 89.99, description: 'HD webcam with microphone' }
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Shop server running on http://0.0.0.0:${PORT}`);
});
