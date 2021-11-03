const express = require('express');

const portfolioController = require('./controllers/portfolioController');

const app = express();

// Connect DB

// MIDDLEWARES

// ROUTES

app.get('/' , portfolioController.getIndexPage);
app.post('/add' , portfolioController.createPortfolio);
app.put('/edit/:id' , portfolioController.editPortfolio);
app.delete('/delete/:id/' , portfolioController.deletePortfolio);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}...`);
});