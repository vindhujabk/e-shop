const express = require('express')
const app = express();
const port = 3000;
const bodyParser = require('body-parser')
const morgan = require('morgan');
const {Product}= require('./models/product');
const mongoose =require('mongoose')
const api = process.env.API_URL;


require('dotenv/config');

app.use(bodyParser.json())
app.use(morgan('tiny'))

const productsRouter = require('./routers/products')
const categoriesRouter = require('./routers/categories')
const usersRouter = require('./routers/users')
const ordersRouter = require('./routers/orders')


app.use(`${api}/products`,productsRouter)
app.use(`${api}/categories`,categoriesRouter)
app.use(`${api}/users`,usersRouter)
app.use(`${api}/orders`,ordersRouter)


mongoose.connect(process.env.CONNECTION_STRING)
.then(()=>{console.log("dB connected")})
.catch((err)=>{console.log(err)})


app.listen(port,(req,res)=>{
    console.log(`Server is running on ${port}`)})