import express from 'express'
import { getAll, getById, createNewProduct } from '../controllers/products.js';

const router = express.Router();


router.get('/', getAll);

router.get('/:id', getById);

router.post('/', createNewProduct);

export default router;