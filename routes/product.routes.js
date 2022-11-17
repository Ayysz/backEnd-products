import express from 'express';
import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from '../controllers/product.controller.js';

// initialize router
const router = express.Router();

router.get('/', getProducts);
router.post('/', createProduct);
router.put('/:id',updateProduct);
router.delete('/:id', deleteProduct);

router.use('/products', router);
router.get('/product/:id', getProductById);

export default router;