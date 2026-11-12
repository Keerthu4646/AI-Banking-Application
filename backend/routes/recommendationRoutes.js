const express = require("express");
const router = express.Router();

router.get("/", (req,res)=>{

 const balance = 300000;
 const monthlyExpense = 50000;

 let recommendations=[];

 if(balance > 200000){
   recommendations.push(
   "Eligible for Premium Credit Card");
 }

 if(monthlyExpense > 40000){
   recommendations.push(
   "Consider Monthly Expense Tracking");
 }

 if(balance > 500000){
   recommendations.push(
   "Start Mutual Fund SIP");
 }

 if(recommendations.length === 0){
   recommendations.push(
   "Maintain current spending habits");
 }

 res.json(recommendations);
});

module.exports = router;