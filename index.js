const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Hey, I\'m a Node.js app!</h1><h3>I have changed</h3>')
})

app.listen(3000, () => {
    console.log('Server is up on 3000')
})
