const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');

// express 객체생셩
const app = express()

// 미들웨어 등록
app.use(bodyParser.json());
app.use(cors({ origin: true }));

const myToken = functions.config().github.token;


app.get('/repos', (req, res) => {
  return fetch('https://api.github.com/user/repos', { // Github에서 저장소 정보 가져오기, 노드버전이 6이라 비동기 then메소드릀 사용.
    headers: {
      Authorization: `token ${myToken}`
    }
  })
  .then(res => res.json())
  .then(data => {
    res.send(data)
  });
})


exports.github = functions.https.onRequest(app);
