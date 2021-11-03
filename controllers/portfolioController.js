exports.getIndexPage = async (req, res) => {
    try {
        res.status(200).json({
            'status': 'success',
            'pageName': 'index page'
        });
    } catch (error) {
        res.status(400).json({
            'status': 'failed'
        });
    }
};

exports.createPortfolio = async (req, res) => {
    try {
        res.status(200).json({
            'status': 'success',
            'pageName': 'add portfolio'
        });
    } catch (error) {
        res.status(400).json({
            'status': 'failed'
        });
    }
};

exports.editPortfolio = async (req, res) => {
    try {
        res.status(200).json({
            'status': 'success',
            'pageName': 'edit portfolio'
        });
    } catch (error) {
        res.status(400).json({
            'status': 'failed'
        });
    }
};

exports.deletePortfolio = async (req, res) => {
    try {
        res.status(200).json({
            'status': 'success',
            'pageName': 'delete portfolio'
        });
    } catch (error) {
        res.status(400).json({
            'status': 'failed'
        });
    }
};