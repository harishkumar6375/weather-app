const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 3000 ;

const partialPath = path.join(__dirname,"../partials")
const staticPath = path.join(__dirname,"../public")

app.set('view engine','hbs');
hbs.registerPartials(partialPath);
app.use(express.static(staticPath));

app.get("/",(req,res)=>{
    res.render('index');
})

app.get("/about",(req,res)=>{
    res.render('about');
})

app.get("/weather",(req,res)=>{
    res.render('weather');
})

app.get("*",(req,res)=>{
    res.render('404error');
})

app.listen(port,()=>{
    console.log(`listing to the port ${port}`);
})
