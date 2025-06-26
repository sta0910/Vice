const express = require('express')
const app = express()
const path = require('path')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.get('/studies', (req, res) => {
  res.send('勉強した一覧')
})

app.get('/', (req, res) => {
  res.send('勉強した一覧')
})

app.get('/sub', (req, res) => {
    res.render('math');
})

// expressの最新パッチだとエラーになるからもしエラーになるなら↓実行
// npm uninstall express
// npm install express@4
app.get('*', (req, res) => {
  res.send('正しいパスを入力してください！')
})

app.listen(3000, () => {
    console.log('ポート3000を起動しました！')
})