import express from 'express';
const router = express.Router();

import {
    getProducer, createProducer, updateProducer
} from '../controllers/producerController.js';
console.log("producerRouter");

router.get('/:email', getProducer);
router.post('/', createProducer);
router.put('/:email', updateProducer);

export default router;

