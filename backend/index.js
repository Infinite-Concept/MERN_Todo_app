const express = require("express")
const mongoose = require("mongoose")
const Todo = require("./models/todo")
const cors = require("cors")

mongoose.connect("mongodb://localhost/todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("mongodb successful connected");
}).catch((err) => {
    console.log("Error connecting to mongodb");
})

const app = express()
app.use(cors())
const port = 3500 || 3000

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get("/todo", async (req, res) => {
    try {
        const todo = await Todo.find()
    
        res.json(todo)
    } catch (error) {
        console.error(err);
        res.status(500).send('Error fetching todos.');
    }
})

app.post("/todo", async (req, res) => {
    try{
        const todo = req.body.todo 

        console.log(todo);

        const user = await Todo.create({
            todo: todo
        })

        await user.save()

        res.status(200).json({message: "todo successfull added"})
    

    }catch(err){
        res.status(500).json({message: "request not process"})
        console.log(err);
    }
})

// app.delete("/todo", async())

app.listen(port , () => {
    console.log(`server is listening on port ${port}`);
})