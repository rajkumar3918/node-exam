const Plan = require("../modal/subscriptionPlan");

const setPlan = async({body})=>{
    try {
        const date = new Date();
        const data = await Plan.create({
            ...body,
            createdAt: date,
            updatedAt: date, 
        });
        return data;
    } catch (error) {
        return error.message
    }
};

const getPlan = async()=>{
    try {
        const data = await Plan.find({});
        return data;
    } catch (error) {
        return error.message;
    }
};




module.exports = {setPlan, getPlan}