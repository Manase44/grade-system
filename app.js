const express = require('express')
const app = express()
const port = process.env.PORT||4000

const mainRoutes = require('./routes/main')

app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use('/', mainRoutes);

app.listen(port, () => {
    console.log(`Server listening at port ${port}`);
})