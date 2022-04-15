const express=require("express");
const cors=require("cors");


const app=express();



app.use(cors());

app.get("/",(req,res)=>{


    res.send("success");
})

app.post("/checkapi",(req,res)=>{
    res.send("Data Fetched Successfully");
})

app.listen(4000);