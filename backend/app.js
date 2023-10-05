const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const myUser = require('./routes/myUsers');

const cors = require('cors');
const app = express();
const path = require('path');
app.use(cors());

// Database connection
mongoose.connect('mongodb://localhost:27017/ibruser', { useNewUrlParser: true, useUnifiedTopology: true });
app.use("/backend/uploads",express.static(path.join(__dirname, 'uploads')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/api/user', myUser);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
