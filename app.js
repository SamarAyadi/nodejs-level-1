const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');

app.use(express.urlencoded({ extended: true }));
const Article = require("./models/articleSchema.js");




 



app.get('/', (req, res) => {
  res.sendFile("./views/home.html", {root: __dirname})
})

app.post("/all-articles", (req, res) => {
  Article
    .create(req.body)
    .then( result => {
      res.redirect("/");
    })
    .catch( err => {
      console.log(err);
    });
});

mongoose.connect("mongodb+srv://samardev:12345@cluster0.tblkyye.mongodb.net/all-data?retryWrites=true&w=majority").then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
   })
   .catch((err) => {
     console.log(err);
   });