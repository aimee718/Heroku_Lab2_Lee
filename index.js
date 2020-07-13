let HTTP_PORT = process.env.PORT || 3000;
let express = require("express");
let app = express();

//default URL path
app.get ("/",(req,res)=>{
    res.send("Hello Heroku!");
});

//listen
app.listen(HTTP_PORT);