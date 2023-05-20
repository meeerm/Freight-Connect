const mongoose = require("mongoose"); 


//trucking lane schema 
const LaneSchema = new mongoose.Schema({
    rate: Number, 
    weight: Number,
    length: Number,                                              
    company: String,
    l_city: String,
    l_state: String,
    d_city: String,
    d_state: String,
    equipment: String,
    pickup: String,
    deliver: String,

    origin_geo: {
        type:{
            type: String,
            enum: ['Point'],
            
        },
        coordinates:{
            type:[Number],
            
        }
    },

    dest_geo: {
        type:{
            type: String,
            enum: ['Point'],
            
        },
        coordinates:{
            type:[Number],
            
        }        
    },

    distance: Number,

    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    notes: String



}, {timestamps: true})

module.exports = mongoose.model("Lane", LaneSchema)      //compile model and export it 