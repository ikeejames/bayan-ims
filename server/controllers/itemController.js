const mongoose = require('mongoose');
const Item = require('../../models/item');

mongoose
    .connect('mongodb://127.0.0.1:27017/item-db')
    .then(() => {
        console.log('connection open');
    })
    .catch((err) => {
        console.log('Error');
        console.log(err);
    });

// sample category datas
const categories = ['Electronics', 'Clothing', 'Riding Gears'];

// List of all items
exports.items = async (req, res) => {
    const items = await Item.find({});
    res.render('index', { items });
};

// Add Item Form
exports.addItemForm = (req, res) => {
    res.render('new-item', { categories });
};

// Create Item
exports.addItem = async (req, res) => {
    const item = new Item(req.body);
    await item.save();
    res.redirect('/items');
};

// View Item
exports.viewItem = async (req, res) => {
    const { id } = req.params;
    const item = await Item.findById(id);
    res.render('show-item', { item });
};

//Edit Item Form
exports.editItemForm = async (req, res) => {
    const { id } = req.params;
    const item = await Item.findById(id);
    res.render('edit-item', { item, categories });
};

// Update Specific Item
exports.updateItem = async (req, res) => {
    const { id } = req.params;
    await Item.findByIdAndUpdate(id, { ...req.body });
    res.redirect(`/items/${id}`);
};

// Delete Specific Item
exports.deleteItem = async (req, res) => {
    const { id } = req.params;
    await Item.findByIdAndDelete(id);
    res.redirect('/items');
};
