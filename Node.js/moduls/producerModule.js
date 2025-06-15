import mongoose from 'mongoose';
const { Schema } = mongoose;

const producerSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    numberPhon:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
});

const Producer = mongoose.model('Producer', producerSchema);

export default Producer