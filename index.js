import express from "express"
import { Data } from "./classes/data.js"
const app = express()
app.use(express.json())

const data = new Data()



app.get('/clients', (req, res)=>{
    res.send(data.afficherListeClients())
})

app.get('/clients/:id' ,(req,res) => {
    
})




app.get('/produits/:id' ,(req,res) => {
    
})




app.get('/commandes', (req, res)=>{
    res.send(data.afficherListeClients())
})

app.get('/commandes/:id' ,(req,res) => {
    
})

















app.listen(888, () => {
})