let express=require("express")
let requests=require("requests")
let hbs=require("hbs");
const path = require("path");
let app=express();
let Pupath=path.join(__dirname,"./public");
let Vpath=path.join(__dirname,"./temp/views");
let Ppath=path.join(__dirname,"./temp/partials");
app.set("view engine","hbs")
app.use(express.static(Pupath))
app.set("views",Vpath)
hbs.registerPartials(Ppath);
app.get("/f",(req,res)=>{
    res.render("index")
})


app.listen(8000,()=>{
    console.log("server is running")
})