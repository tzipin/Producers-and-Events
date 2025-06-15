import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import eventRouter from './routes/eventRouter.js'
import producerRouter from './routes/producerRouter.js';

const app = express();
const uri = "mongodb://localhost:27017/EventProduction";

await mongoose.connect(uri)
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
});


app.use(cors());
app.use(express.json());

app.use('/event', eventRouter);
app.use('/producer', producerRouter);


app.listen(3000, () => {
    console.log("server is running on http://localhost:3000");
})



