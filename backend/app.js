//console.log("hello world");
//admin
//Sh24K4cdbj3dl502
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const router = require("./router/book-router");

app.use(express.json());
app.use(cors());
app.use("/books", router);

mongoose.connect("mongodb+srv://admin:Sh24K4cdbj3dl502@cluster0.ja9d8kb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>console.log("Connected to database"))
.then(()=>{
    app.listen(5000);
})
.catch((err)=>console.log(err));