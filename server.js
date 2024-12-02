const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// MongoDB connection
mongoose
    .connect('mongodb://mongo:27017/docker-demo', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define a schema and model for demonstration
const itemSchema = new mongoose.Schema({name: String});
const Item = mongoose.model('Item', itemSchema);

app.get('/', async (req, res) => {
    const items = await Item.find();
    res.send(items);
});

app.get('/add', async (req, res) => {
    const newItem = new Item({name: `Item ${Date.now()}`});
    await newItem.save();
    res.send('Item added');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});