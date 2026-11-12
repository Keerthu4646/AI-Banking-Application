const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const transactionRoutes = require("./routes/transactionRoutes");
const recommendationRoutes = require("./routes/recommendationRoutes");
const chatbotRoutes = require("./routes/chatbotRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
 process.env.MONGO_URI || "mongodb://localhost:27017/bankdb"
)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/transactions", transactionRoutes);
app.use("/recommendations", recommendationRoutes);
app.use("/chat", chatbotRoutes);

app.get("/", (req,res)=>{
 res.send("AI Banking Backend Running");
});

const PORT = 5000;

app.listen(PORT,()=>{
 console.log(`Server running on ${PORT}`);
});
