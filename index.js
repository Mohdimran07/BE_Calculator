const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}))

app.get('/',(req, res) => {
    res.sendFile(__dirname+'/index.html')
});

app.post('/', (req, res) => {
    console.log(req.body.Num1)
    var num1 = Number(req.body.Num1);
    var num2 = Number(req.body.Num2);
    var result = num1 + num2
    res.send("Your final result is:  " + result)
})

app.get('/about', (req, res) => {
    res.send('This is about page')
})

app.listen(5000, ()=> {
    console.log('Server started on port 5000')
})