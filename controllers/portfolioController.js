const Portfolio = require('../models/Portfolio');

const fs = require('fs');

exports.getIndexPage = async (req, res) => {
    try {
        
        const portfolios = await Portfolio.find();

        res.status(200).render('index', {
            portfolios: portfolios
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

        const uploadDir = 'public/uploads';

        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
        }

        // When an image for project hasn't selected.
        const defaultImagePath = __dirname + '/../public/assets/img/portfolio/cabin.png';
        let uploadPath =  __dirname + '/../public/uploads/';
        let imagePath = '';

        if(req.files){
            uploadPath += req.files.image.name;
            imagePath = '/uploads/'+req.files.image.name;
        }
        else {
            uploadPath += 'cabin.png';
            imagePath = '/uploads/cabin.png';

            fs.copyFile(defaultImagePath, uploadPath, (err) => {
                if (err) throw err;
                console.log('Default image copied.');
            })
        }
    

        if(req.files){
            await req.files.image.mv(uploadPath);
        }

        const portfolio = await Portfolio.create({
            title: req.body.title,
            description: req.body.description,
            image: imagePath
        })

        res.status(200).redirect('/#portfolio');
    } catch (err) {
        res.status(400).json({
            'status': 'failed',
            'error': err.message
        });
    }
};

exports.editPortfolio = async (req, res) => {
    try {

        const uploadDir = 'public/uploads';

        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
        }

        let uploadPath =  __dirname + '/../public/uploads/';
        let imagePath = '';

        if(req.files){
            uploadPath += req.files.image.name;
            imagePath = '/uploads/'+req.files.image.name;
        }    

        if(req.files){
            await req.files.image.mv(uploadPath);
        }

        const portfolio = await Portfolio.findById(req.params.id);

        portfolio.title = req.body.title;
        portfolio.description = req.body.description;
        if(req.files){
            portfolio.image= imagePath;
            await req.files.image.mv(uploadPath);
        }
        await portfolio.save();

        res.status(200).redirect('/#portfolio');
        
    } catch (err) {
        res.status(400).json({
            'status': 'failed',
            'error': err.message
        });
    }
};

exports.deletePortfolio = async (req, res) => {
    try {

        const portfolio = await Portfolio.findById(req.params.id);
        let filePath = __dirname + '/../public' + portfolio.image;

        fs.unlinkSync(filePath);

        await Portfolio.findByIdAndDelete(req.params.id);
        res.status(200).redirect('/#portfolio');

    } catch (err) {
        res.status(400).json({
            'status': 'failed',
            'error': err.message
        });
    }
};