const mongoose = require('mongoose');
const Item = require('../models/item');

mongoose
    .connect('mongodb://127.0.0.1:27017/item-db')
    .then(() => {
        console.log('connection open');
    })
    .catch((err) => {
        console.log('Error');
        console.log(err);
    });

const seedItems = [
    {
        name: 'iPhone 15',
        category: 'Smart Phone',
        quantity: 2,
        price: 20000,
        description: 'Hello test',
    },
    {
        name: 'HJC Rpha 11',
        category: 'Helmet',
        quantity: 5,
        price: 25000,
        description: 'Helmet Test',
    },
    {
        name: 'Oppo Ax3',
        category: 'Smart Phone',
        quantity: 2,
        price: 5500,
        description: 'Hello smart test 123',
    },
    {
        name: 'KYT Ballistic',
        category: 'Helmet',
        quantity: 10,
        price: 9000,
        description: 'Hello helmet test 123213',
    },
];

Item.insertMany(seedItems)
    .then((res) => {
        console.log(res);
        mongoose.connection.close();
    })
    .catch((err) => {
        console.log(err);
    });
