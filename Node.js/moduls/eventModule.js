import mongoose from 'mongoose';

const { Schema } = mongoose;

const eventSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    producerId: {
        type: String,
        required: true
    }
});

const Event = mongoose.model('Event', eventSchema);

export default Event
