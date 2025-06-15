import Event from '../moduls/eventModule.js';

const getEvents = (async (req, res) => {
    try{
        const events = await Event.find();        
        res.json(events);
    }
    catch(error) {
        res.status(500).send(error.message);
    }

});

const getEvent = (async (req, res) => {
    try{
        const event = await Event.findById(req.params.id);
        if(!event)
            res.status(400).send("event not found");
        res.json(event);
    }
    catch(error) {
        res.status(500).send(error.message);
    }
})

const createEvent = (async (req, res) => {
    try{
        const event = await Event.insertOne(req.body);
        res.json(event);
    }
    catch(error) {
        res.status(500).send(error.message);
    }
})

const updateEvent = (async (req, res) => {
    try{
        const event = await Event.updateOne({_id: req.body?._id}, req.body, {new: true});
        res.json(event);
    }
    catch(error) {
        res.status(500).send(error.message);
    }
})

const deleteEvent = (async (req, res) => {
    try{
        const result = await Event.deleteOne({_id: req.params.id});
        if (result.deletedCount === 0) 
            res.status(404).send('Event not found');
        res.status(200).send('Event deleted successfully');
    }
    catch(error) {
        res.status(500).send(error.message);
    }
})



export {
    getEvents, getEvent, createEvent, updateEvent, deleteEvent
}