import express from 'express';
import { getProducts, getStockAndPriceBySKU } from '../services/products.js';

const router = express.Router();

router.get('/api/products', getProducts)
router.get('/api/stock-price/:sku', getStockAndPriceBySKU)

export default router;
