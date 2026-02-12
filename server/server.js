import express from "express"

const app = express()
app.use(express.json())

const PORT = 5000

app.listen(PORT, () => {
    console.log(`Server is running on the port ${PORT}`)
})

app.get('/', (req, res) => {
    res.send('This is my first Server')
})

app.get('/products', (req, res) => {
    res.send('You can See list of all products here!')
})


export default app;