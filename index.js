const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')
const cart = require('./models/cartschema')

require('./connection/db')
app.use(cors())
app.use(express.json())
app.use(require('./routes/cart'))
app.get('/' , (req,res)=>{
   res.send("Home")
})


app.listen(port , ()=>{
    console.log(`Server started at ${port}`);
})
