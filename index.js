const express = require('express');
const methodOverride = require('method-override');
const path = require('path');
const itemRoutes = require('./server/routes/itemRoutes');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Execute Routes
app.use('/items', itemRoutes);

app.listen(port, () => {
    console.log('Listening on port 3000');
});
