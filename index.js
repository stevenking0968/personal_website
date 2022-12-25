// api/server.js

const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())
app.get("/", function(req, res) {
  res.send({"name": "Jane Doe"}) // Should be json format
})

app.get('/resume_file', (req, res) => res.download('resume.pdf'));
app.get('/presentation', (req, res) => res.download('presentation.pdf'));

app.listen(5000, () => {
  console.log("app listening on port 3000")
})