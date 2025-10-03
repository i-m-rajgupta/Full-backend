const express = require("express");

const app = express();

res.setHeader("Access-Control-Allow-Origin", "https://full-frontend-two.vercel.app/");


app.get("/api",(req,res)=>{
    res.send("Hello world");
})

app.get("/",(req,res)=>{
    res.send("Hello world");
})

app.get("/api/jokes",(req,res)=>{
    const jokes = [{
      id:1,
      title:"Good",
      joke : "Why don't skeletons fight each other? Because they don't have the guts."
    },
    {
        id :2 ,
        title:"thik",
        joke : "Why did the scarecrow win an award? Because he was outstanding in his field!"
    }
]
      res.send(jokes);
});



const port = process.env.PORT || 8080;

app.listen(port,(req,res)=>{
    console.log("Server is serving ");
})

module.exports = app;
