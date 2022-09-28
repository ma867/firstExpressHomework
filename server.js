//IMPORTING REQUIRED MODULES
const express = require('express')
 
//CREATE EXPRESS APP OBJECT
const app = express()
 
//CONFIGURE EXPRESS APPS (app.set)
//Start Config
 
 
//End Config
 
//MOUNT MIDDLEWEAR (app.use)
//Start Middlewear
 
 
//End Middlewear
 
//MOUNT ROUTES
//Start Routes
app.get('/', (req, res) => {
   res.send('<h1>YERRR</h1>')
})

//greeting
app.get('/greeting', (req, res) => {
    res.send("Yerrrrr from Jerseyyyy")
})

app.get('/greeting/:name', (req, res) => {
    res.send("Yerrrrr! Sup " + req.params.name + "!!!!")
})
 
//End Routes
 
 
 
//TELL APP WHICH PORT TO LISTEN TOS
app.listen(3001, () => {
   console.log("listening on port 3001")
})