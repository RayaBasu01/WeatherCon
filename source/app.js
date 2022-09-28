const express=require('express');
const path  = require('path');
const app=express();
const hbs = require("hbs");

require("./db/conn");
const weatherContact =require("./models/weatherContact");

app.use(express.urlencoded({extended:false}));
app.use(express.json());

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

//data creating 
app.post("/contact", async (req,res)=>{
    try{
        const contact=new weatherContact({
            name:req.body.name,
            email:req.body.email,
            subject:req.body.subject,
            msg:req.body.msg
        })
        const contactForm =  await contact.save();
        res.status(201).render("index");
        
    }catch(er){
        res.status(400).render("contact");
    }

});





app.listen(port,()=>{
    console.log(`listening to the port ${port}`)
})