const express = require("express");
const router = express.Router();

router.post("/", async(req,res)=>{

 const {message} = req.body;

 let reply = "";

 if(message.includes("loan")){
   reply = "You are eligible for personal loan options.";
 }
 else if(message.includes("balance")){
   reply = "Your available balance is ₹50,000";
 }
 else{
   reply = "How can I assist you today?";
 }

 res.json({
   user: message,
   bot: reply
 });
});

module.exports = router;