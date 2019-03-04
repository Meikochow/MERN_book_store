const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const items = require('./routes/api/items');
const user = require('./routes/api/user');
const path = require('path');

const app = express();

//Bodyparser middleware
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;
// connect to Mongo
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => {
    console.log('MongoDB Connected...')
    })
    .catch(err => console.log(err));
//use routes
app.use('/api/items',items);
app.use('/api/user',user);

//Serve static assets if we are in production
if(process.env.NODE_ENV === 'production'){
    //set a static folder
    app.use(express.static('react-app/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'react-app', 'build', 'index.html'));
    });
}

    const port = process.env.PORT || 5000;

    app.listen(port, () => console.log(`Server started on port: ${port}`));