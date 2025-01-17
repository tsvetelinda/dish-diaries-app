const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const dishRoutes = require('./routes/dishes');
const userRoutes = require('./routes/users');

dotenv.config();
connectDB();

const app = express();

const corsOptions = {
    origin: 'http://localhost:4200',
    credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use('/dishes', dishRoutes);     /* the edit is here*/
app.use('/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
