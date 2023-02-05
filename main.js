const express = require ('express')
const app = express()
const path = require('path')

app.use(express.urlencoded({extended:false}))
app.use(getWeather)

app.set("view engine", "ejs")
app.set("views", path.join(__dirname,"views"))


function getWeather(req,res,next){
    // req.visitorWeather = false
    // if (req.visitorWeather){
    //     res.send("Please come back to our app when it is not raining")
    // } else{
    //     next()
    // }
}

app.get('/',(req,res) => {
    res.render("home")
})
app.get('/', (req,res) => {
    res.render("form")
})

app.post("/result",(req,res,next) =>{
    //ATE IMPORTANT NA NAKA CAPS YUNG RESULTS NA GUSTO MO MAKUHA K
if(req.body.username.trim().toUpperCase()=== "ADMIN" && req.body.password.trim().toUpperCase()=== "123456"){
    res.send("Please proceed in filling up the form")
    next('/form')
} else {
    res.send("Incorrect, please try again")
}
})


app.post("/form",(req,res) =>{
    //ATE IMPORTANT NA NAKA CAPS YUNG RESULTS NA GUSTO MO MAKUHA K
    res.send("Thank you for filling up the form")
})


app.listen(3000);