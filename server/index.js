const express = require("express")
const cors = require('cors')
const {userController}= require("./routes/user.routes")
const authRouter=require("./routes/signin.routes")

const app = express();
const PORT = process.env.PORT || 8080;

const Connection=require("./Config/db")

app.use(express.json());
app.use(cors());
app.use("/auth",authRouter)

app.use("/user", userController)

app.get("/", (req,res)=>{
    res.send("Welcome to homepage");
});

app.listen(PORT, async() => {
    try{
        await Connection;
        console.log("Server is connected to database")
        console.log(`server is running on ${PORT}`)
    }
    catch(err){
        console.log(err)
    }
    
})

