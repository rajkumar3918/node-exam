const {model, Schema, SchemaTypes} = require("mongoose");

const subscriptionPlanSchema = new Schema({
    planName:{
        type: SchemaTypes.String,
        require:true
    },
    desc:{
        type: SchemaTypes.String,
        require:true
    },
    price:{
        type: SchemaTypes.Number,
        require:true
    },
    expireDate:{
        type: SchemaTypes.String,
        require:true
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

module.exports = model("subscribePlan", subscriptionPlanSchema);