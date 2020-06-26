// import connection from './index';
const {connection} = require('./index');

const seedDatabase = (reviewCount, image, name, price, description, thumbnail, callback) => {

    connection.query('INSERT INTO product (customerReviewCount, image, name, regularPrice, thumbnailImage) VALUES (?, ?, ?, ?, ?)',[reviewCount, image, name, price, description, thumbnail],  (error, result) => {

        if (error) {
            console.error('error with query', error);
            callback(error, null);
        } else {
            console.log('query successful')
            callback(null, result);
        }
    })
}

const getProducts = (callback) => {

    connection.query('SELECT * FROM product', (error, result) => {

        if (error) {

            callback(error, null);
            console.error('error getting products at query level', error);
        } else {
            console.log(result)
            callback(null, result);
        }
    })
}

module.exports = {
    seedDatabase,
    getProducts
}