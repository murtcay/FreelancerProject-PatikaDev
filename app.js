const express = require('express');

const app = express();

// Connect DB

// MIDDLEWARES

// ROUTES


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}...`);
});