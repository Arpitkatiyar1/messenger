const express = require('express')
const app = express();
const PORT = 8000;
const authRouter = require('./routes/authRoute')
const dotenv = require('dotenv')
const databaseConnect = require('./config/database')
dotenv.config({
     path : 'backend/config/config.env'
})

app.use('/api/messenger', authRouter);

databaseConnect();
app.listen(PORT, () => {
    console.log(`server is running at: http://localhost:${PORT}`)
});