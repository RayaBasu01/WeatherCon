const express=require('express');
const path  = require('path');
const app=express();
const hbs = require("hbs");

const port = process.env.PORT || 3000;
const tamplate_path=path.join(__dirname , "../tamplates/views")
const partials_path=path.join(__dirname , "../tamplates/partials")

// public static  path 
const stat_path=path.join(__dirname,"../public");
app.use(express.static(stat_path));


app.set("view engine", "hbs");
app.set("views",tamplate_path);
hbs.registerPartials(partials_path);



// routing 

app.get("/",(req,res)=>{
    res.render('index')

});
app.get("/contact",(req,res)=>{
    res.render('contact')

});
app.get("/weather",(req,res)=>{
    res.render("weather")

});
app.get("*",(req,res)=>{

    res.render("404error",{
        errorMsg:"Opps! Page Not Found "
    })

});



app.listen(port,()=>{
    console.log(`listening to the port ${port}`)
})