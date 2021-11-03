const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PortfolioSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    image: String,
    description: {
        type: String,
        trim: true,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

const Portfolio = mongoose.model('Portfolio', PortfolioSchema);

module.exports = Portfolio;