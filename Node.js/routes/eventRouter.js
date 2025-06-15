import express from 'express';
const router = express.Router();

import {
    getEvents, getEvent, createEvent, updateEvent, deleteEvent
} from '../controllers/eventController.js';

router.get('/', getEvents);
router.get('/:id', getEvent);
router.post('/', createEvent);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);

export default router