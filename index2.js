const express = require('express')
const app = express()
const product = [{
    id: 1,
    Name: "iphone 13 pro max",
    category: "electronics",
    price: 9900,
    currency: "usd",
    image: "",
    stars: 4,
    review: "this is an amzing product"

}]
app.get('/', function(req, res) {

    res.json('Hello World')
})
app.get('/category', (req, res) => {

    res.send('category')
})
app.get('/stars', (req, res) => {

    res.json('stars')
})
app.get('/review', (req, res) => {

    res.send('review')
})

app.get('/', function(req, res) {
    res.send('Hello World')
})

app.listen(3000, () => { console.log("server is up and runing smoothly") });