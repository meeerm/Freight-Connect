const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema


const UserSchema = new mongoose.Schema({
    company: String,
    
    first: String,
    last: String,
    phone: String,
    mc: Number,
    dot: Number,
    reviews:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
    
})

UserSchema.plugin(passportLocalMongoose);                    //add username and password field to our schema
module.exports = mongoose.model("User", UserSchema)