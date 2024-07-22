import products from '../models/products.js';
import stock from '../models/stock-price.js';

export const getProducts = async (req, res) => {
    res.send(products);
}

export const getStockAndPriceBySKU = async (req, res) => {
    const { sku } = req.params;
    const stockPrice = stock[sku];
    if (!stockPrice) {
        res.status(404).send('Stock and price not found');
        return;
    }
    res.send(stockPrice);
};
