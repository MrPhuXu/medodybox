const express = require("express");
const app = express();
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.static('public'));
app.use('/images', express.static('images'));
app.use(express.static('public'));
app.use('/audios', express.static('audios'));

require('dotenv').config();

const mongoString = process.env.MUSIC_DB_URI

mongoose.connect(mongoString);
const database = mongoose.connection
database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected');
})

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});

const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

const songsRoutes = require('./routes/songsRoutes');
app.use('/api', songsRoutes)

const categoriesRouter = require('./routes/categoriesRouter');
app.use('/api/categories', categoriesRouter);



