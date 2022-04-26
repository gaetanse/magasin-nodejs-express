import express from "express"
const app = express()

app.use(express.json())


app.get('/clients')

app.get('/clients/:id' ,(req,res) => {
    res.json = dataService.FindClientsByID(req.params.id)
} )


















api.listen(888, () => {
})