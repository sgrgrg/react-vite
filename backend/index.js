const express = require('express')
const app = express()
const port=5000

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello')
})

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
    
})