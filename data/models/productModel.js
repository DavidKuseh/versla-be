const db = require('../../config/dbConfig');

async function addNewProduct(item) {
    try {
        const ids = await db('products').insert(item, 'id');
        const id = ids[0];
        const response = await findProductById(id);
        return response;
    } catch (error) {
        console.log(error);
    }
}

async function findProductById(id) {
    try {
        const product = await db('products')
            .select('id', 'name', 'description', 'price', 'category')
            .where({id: id})
            .first();
            return product;
    } catch (error) {
        console.log(error)
    }
}

async function getBy(filter) {
    try {
        const product = await db('products')
        .select('id', 'name', 'description', 'price', 'condition', 'category')
        .where(filter)
        .first()
        return product;
    } catch(error) {
        console.log(error)
    }
}


async function findProducts() {
    try {
        const products = await db('products')
            .select('id', 'name', 'description')
        return products;
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    addNewProduct,
    findProductById,
    getBy,
    findProducts
}