const express = require('express');
const socketIo = require('socket.io');
const http = require('http');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.get('/', (req, res) => {
  res.send('Real-time E-commerce server running');
});

io.on('connection', (socket) => {
  console.log('A user connected');

  // Emit real-time product availability
  socket.emit('productUpdate', { productId: 1, available: true });

  // Broadcast price updates
  socket.on('priceUpdate', (price) => {
    io.emit('priceUpdate', price);
  });

  // Broadcast live order tracking
  socket.on('orderUpdate', (order) => {
    io.emit('orderUpdate', order);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
