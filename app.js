const express = require('express');
const mongoose = require('mongoose')

const portfolioController = require('./controllers/portfolioController');

const app = express();

// MIDDLEWARES
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES

app.get('/' , portfolioController.getIndexPage);
app.post('/add' , portfolioController.createPortfolio);
app.put('/edit/:id' , portfolioController.editPortfolio);
app.delete('/delete/:id/' , portfolioController.deletePortfolio);


const PORT = process.env.PORT || 3000;

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