const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection string
const dbURI = 'mongodb+srv://aainswo2:Shayla21!!@cluster0.ictgh5f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

// Add this line before app.listen
const productRoutes = require('./routes/productRoutes');
app.use('/api', productRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
