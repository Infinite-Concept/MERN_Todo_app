const express = require("express")


const app = express()
const port = 3500 || 3000

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get("/todo", () => {

})

app.post("/todo", async (req, res) => {
    try{

    

    }catch(err){
        res.status(404).json({message: "request not process"})
        console.log(err);
    }
})

app.listen(port , () => {
    console.log(`server is listening on port ${port}`);
})