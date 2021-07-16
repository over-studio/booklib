// Modules
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const indexRouter = require('./routes');

// 'dotnet' setup
if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

// App setup
const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');

// Middlewares
app.use(expressLayouts);
app.use(express.static('public'));

// Routes
app.use('/', indexRouter);

// DB connection
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', error => console.log(error));
db.once('open', () => console.log('Connected to MongoDB database'));

// Server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
	console.log(`App running on port ${PORT}`);
});
