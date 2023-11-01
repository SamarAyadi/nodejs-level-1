const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');


app.get('/', (req, res) => {
  res.sendFile("./views/home.html", {root: __dirname})
})


mongoose.connect("mongodb+srv://samardev:12345@cluster0.tblkyye.mongodb.net/all-data?retryWrites=true&w=majority").then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
   })
   .catch((err) => {
     console.log(err);
   });