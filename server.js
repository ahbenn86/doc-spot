const express = require("express");
const app = express();
require('dotenv').config();
const dbConfig = require("./config/dbConfig");
const userRoute = require("./routes/userRoute");
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/user', userRoute);

app.listen(port, () => console.log(`Node server started at port ${port}`));