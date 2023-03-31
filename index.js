const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const { user } = require("./models/User");
const config = require('./config/key');

// bodyparser가 클라이언트에서 오는 정보를 서버에서 분석해서 가져올수 있게 해준다.
// aplication/x-www-form-urlencoded > ...urlencode형식으로 된 데이터 가져옴
app.use(bodyParser.urlencoded({ extended: true }));

//aplication/json > json형식으로 된 데이터 가져옴
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI)
    .then(() => console.log('MonggoDB Connected...'))
    .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World!~~안녕하세요~'))

app.post('/register'), (req, res) => {
    // 회원 가입 할때 필요한 정보들을 client에서 가져오면
    // 그것들을 데이터 베이스에 넣어준다.

    // {
    // bodyparser를 통해서 이 정보를 req.body로 받아온다.
    //     id : "hello"
    //     password : "sfjlsdkfj"
    // }
    const user = new User(req.body);

    user.save((err, userInfo) => { // 몽고db에서 온 method save()
        if (err) return res.json({ success: false, err })
        return res.status(200).json({
            success: true
        })
    })
}


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

