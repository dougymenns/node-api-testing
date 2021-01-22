const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send("App running successfully");
});

app.get("/post-list", (req, res) => {
  if (!req.query.user_id || req.query.user_id == "") {
    res.status(401).send({ 'message': "User Id parameter is missing" });
  } else {
    res.status(200).json({ 
        userId: 1,
        id: 1,
        title: "lorem ipsum",
        body: "something new in my life",
     });
  }
});

app.post('/submit-data',(req,res)=>{
    if(!req.body.name || !req.body.email){
        res.status(401).json({
            message: "Mandatory params are missing"
        })
    }else{
        res.status(200).json({
            message: "data saved successfully"
        })
    }
})

app.listen(5000, ()=>{
    console.log('App listening on port 5000')
})

module.exports = app;
