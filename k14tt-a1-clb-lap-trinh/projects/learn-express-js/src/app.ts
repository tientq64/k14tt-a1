import express from 'express'

const app = express()

app.get('/', (_, res) => {
    res.send('Xin chào!')
})

app.listen(3000)
