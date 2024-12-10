const express = require('express')
const app = express();
const PORT = process.env.PORT || 8001;
const authRouter = require('./routes/authRoute')
const dotenv = require('dotenv')
const databaseConnect = require('./config/database')
dotenv.config({
     path : 'backend/config/config.env'
})

app.get('/', (req, res) => {
    res.send(`Server is Running`);
})
databaseConnect();
app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`)
});