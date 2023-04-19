const {Router} = require("express");
const { setPlan, getPlan } = require("../controllers/subscriptionController");

const subscribeRouter = new Router();

subscribeRouter.post("/setPlan", async(req,res)=>{
    try {
        const data = await setPlan(req);
        res.send(data);
    } catch (error) {
        res.send(error.message)
    }
});

subscribeRouter.get("/", async(req,res)=>{
    try {
        const data = await getPlan(req);
        res.send(data);
    } catch (error) {
        res.send(error.message)
    }
});

module.exports = subscribeRouter;