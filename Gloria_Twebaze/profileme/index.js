const express = require('express')
const app = express()
const student = require('./routes/regstudent')
const mongoose = require('mongoose')



// middlewares
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'pug')
app.set('views', './views')
app.use(express.urlencoded({extended: true}))




// routes
app.use('/',student)


// creating server
app.listen(3000, () => console.log('server started at 3000'))