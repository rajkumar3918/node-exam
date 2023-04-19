const {Schema, SchemaTypes, model } = require("mongoose");

const userSchema = new Schema({
    name:{
        type: SchemaTypes.String,
        require:true
    },
    username:{
        type: SchemaTypes.String,
        require:true
    },
    email:{
        type: SchemaTypes.String,
        require:true
    },
    password:{
        type: SchemaTypes.String,
        require:true
    },
    phone:{
        type: SchemaTypes.Number,
        require:true
    },
    subscriptionPlan:{
        type: SchemaTypes.ObjectId,
        require:true,
        // ref:"subscribePlan"
    },
    createdAt:{
        type: SchemaTypes.String,
        require:true
    },
    updatedAt:{
        type: SchemaTypes.String,
        require:true
    },
});

module.exports = model("users", userSchema);

