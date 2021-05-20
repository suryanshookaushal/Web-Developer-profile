const request = require('request')
const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public/')))
app.set("view engine", "ejs")

app.get('/', (req, res)=>{
    const url = 'https://api.wazirx.com/api/v2/tickers'

    request({url: url}, (error, response)=>{
        const d = JSON.parse(response.body)
        const data = Object.values(d)
        res.render('index', {data})
    })
})

const port = process.env.PORT || 3000
app.listen(port, (req, res)=>{
    console.log('App is up and running')
})