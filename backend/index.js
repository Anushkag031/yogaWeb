const express = require('express') 
const app = express()
const port = 3000 // default port

app.get('/', (req, res) => { // redirect to the root URL
  res.send('Hello World!')
})

app.listen(port, () => { // listen on port 3000
  console.log(`Example app listening on port ${port}`)
})