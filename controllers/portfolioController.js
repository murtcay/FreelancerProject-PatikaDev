const Portfolio = require('../models/Portfolio');

exports.getIndexPage = async (req, res) => {
    try {
        
        const portfolios = await Portfolio.find();

        res.status(200).json({
            'status': 'success',
            'portfolios': portfolios
        });
    } catch (err) {
        res.status(400).json({
            'status': 'failed',
            'error': err.message
        });
    }
};

exports.createPortfolio = async (req, res) => {
    try {
        console.log(req);

        const portfolio = await Portfolio.create({
            title: req.body.title,
            description: req.body.description,
            image: "imagePath"
        })

        res.status(200).json({
            'status': 'success',
            'pageName': 'add portfolio'
        });
    } catch (err) {
        res.status(400).json({
            'status': 'failed',
            'error': err.message
        });
    }
};

exports.editPortfolio = async (req, res) => {
    try {

        const portfolio = await Portfolio.findById(req.params.id);

        portfolio.title = req.body.title;
        portfolio.description = req.body.description;
        await portfolio.save();

        res.status(200).json({
            'status': 'success',
            'portfolio': portfolio
        });
    } catch (err) {
        res.status(400).json({
            'status': 'failed',
            'error': err.message
        });
    }
};

exports.deletePortfolio = async (req, res) => {
    try {
        
        await Portfolio.findByIdAndDelete(req.params.id);

        res.status(200).json({
            'status': 'success'
        });
    } catch (err) {
        res.status(400).json({
            'status': 'failed',
            'error': err.message
        });
    }
};