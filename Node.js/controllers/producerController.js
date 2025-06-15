import Producer from '../moduls/producerModule.js';

const getProducer = (async (req, res) => {
    try{
        const producer = await Producer.findOne({email: req.params.email});        
        res.json(producer);
    }
    catch(error) {
        res.status(500).send(error.message);
    }
})

const createProducer = (async (req, res) => {
    try{
        const producer = await Producer.insertOne(req.body);
        res.json(producer);
    }
    catch(error) {
        res.status(500).send(error.message);
    }
})

const updateProducer = (async (req, res) => {
    console.log("updateProducer");
    
    console.log(req.body);   
    console.log(req.params.email);    
 
    try{
        const producer = await Producer.updateOne({email: req.params.email}, req.body, {new: true})
        console.log(producer);
        
        res.json(producer);
    }
    catch(error) {
        res.status(500).send(error.message);
    }
})

export {
    getProducer, createProducer, updateProducer
}