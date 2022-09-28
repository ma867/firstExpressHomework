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


//tip calculator
app.get('/tip/:total/:tipPercentage', (req, res) => {
    let percentage = parseInt(req.params.tipPercentage)/100
    let tip = parseInt(req.params.total) * percentage
    res.send(tip.toString())
})
//magic 8 ball
const responses = ["It is certain", "It is decidedly so", "Without a doubt", 
                    "Yes definitely","You may rely on it", "As I see it yes", 
                    "Most likely", "Outlook good","Yes", "Signs point to yes", 
                    "Reply hazy try again", "Ask again later","Better not tell you now", 
                    "Cannot predict now", "Concentrate and ask again","Don't count on it", 
                    "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

 app.get('/magic/:question', (req, res) => {
    console.log(responses.length)
    let response = responses[Math.floor(Math.random() * 20)];
    res.send(`<h1>${response}</h1>`)
 })
//End Routes
 
 
 
//TELL APP WHICH PORT TO LISTEN TOS
app.listen(3001, () => {
   console.log("listening on port 3001")
})
