const express = require('express');
const app = express();
const cors = require("cors");
const pool = require("./db");


//MIDDLEWARE

app.use(cors());
app.use(express.json());


//ROUTES
//create a route for homepage, aboutpage, charts
app.post("/", async(req, res)=> {
    try {
        const {message} = req.body;
        const newmsg = await pool.query("INSERT INTO message (message) VALUES($1)", [message]);
        res.json(newmsg);

    }catch (err){
        
        console.log(err.message);
    }
});


app.listen(5000, ()=>{
    console.log("server has started");
});