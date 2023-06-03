const express = require('express');
const { default: mongoose, PromiseProvider } = require('mongoose');
require("./db/conn");
const Student = require("./models/students")
const app = express();
const port = 8000 || ProcessingInstruction.env.PORT;
app.use(express.json());
// app.get('/students', (req, res) => {
//     res.end("This is the home page");
// })


// create new student using promises

app.post('/students', async (req, res) => {
    console.log(req.body);
    const user = new Student(req.body);
    // console.log(user);
    await user.save().then(() => {
        res.send(user);
    }).catch((e) => {
        res.send(e);
    })
    // res.send('This is the student registration portal');
});

// create new user using async await
app.post('/students', async (req, res) => {
    try {
        const user = new Student(req.body);
        console.log(req.body);
        const createUser = await user.save();
        res.status(200).send(createUser);
    } catch (e) {

        res.status(400).send(e);
    }
});


// creating the get request for students data

app.get('/students', async (req, res) => {
    try {
        const studentsData = await Student.find();
        res.send(studentsData);
    } catch (e) {
        console.log(e);
    }
})


// creating get request for single student
app.get('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const userData = await Student.findById(_id);
        console.log(userData);
        res.send(userData);
    }
    catch (e) {
        console.log(e);
    }
})


// creating patch request for updating the student data
app.patch('/students/:id',async(req,res)=>{
    try{
        const _id=req.params.id;
        // console.log(_id);
        // console.log(req.body);
        const updatedUserData=await Student.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        console.log(updatedUserData);
        res.send(updatedUserData);
    }
    catch(e)
    {
        console.log(e);
    }
        
})


// deleting student data from api
app.delete("/students/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        // console.log(_id);
        const deleteData=await Student.findByIdAndDelete(_id);
        if(!_id)
        {
            return res.status(400).send();
        }
        console.log(deleteData);
        res.send(deleteData);
    }
    catch(e){
        console.log(e);
    }
})
app.listen(port, () => {
    console.log(`your server is running on the port ${port}`);

});


// express.json() is a method inbuilt in express to recognize the incoming request object as a json object. This method is called as a middleware in your application using the code : app.use(express.json());