const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override');

const portfolioController = require('./controllers/portfolioController');

const app = express();

// TEMPLATE ENGINE
app.set('view engine', 'ejs');

// MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(
    methodOverride('_method', {
        methods: ['GET', 'POST'],
    })
);

// ROUTES

app.get('/' , portfolioController.getIndexPage);
app.post('/add' , portfolioController.createPortfolio);
app.put('/edit/:id' , portfolioController.editPortfolio);
app.delete('/delete/:id/' , portfolioController.deletePortfolio);


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT} and trying to connect MongoDB.`);

    // Conenct DB
    mongoose.connect('mongodb://localhost/frelancer-project-db',{ 
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('DB Connected Successfully!')
    }).catch((error) => {
        console.log(error);
    });
});