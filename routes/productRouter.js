const router = require('express').Router();

const Products = require('../data/models/productModel');
const { errorMessage, newEntry, existingEntry, updatedEntry } = require('../helpers/variables');

router.post('/post', async (req, res) => {
    const {name, description, price, condition, category} = req.body;
    try {
        const product = await Products.addNewProduct(req.body);
        res.status(201).json({product, message: newEntry})
    } catch (error) {
        res.status(500).json({message: errorMessage, error: error.message})
    }
})

router.get('/:id', async (req,res) => {
    const productId = req.params.id;
    try {
        const product = await Products.findProductById(productId)
        res.status(200).json({product, message: existingEntry})
    }  catch (error) {
        res.status(500).json({message: errorMessage, error: error.message})
    }
})

module.exports = router;