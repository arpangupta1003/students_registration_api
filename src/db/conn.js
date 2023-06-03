const mongoose=require("mongoose");
const dotenv=require('dotenv');
dotenv.config();

mongoose.connect(
    // "mongodb://127.0.0.1:27017/studentapi",
    process.env.MONGO_URL,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
        // useFindAndModify:true
    }).then(
    ()=>{
        console.log("Connected to db");
    }).catch(
    (err)=>{
        console.log(err);
    });

// mongoose.set("useFindAndModify",false);

