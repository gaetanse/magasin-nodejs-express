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




app.post('/clients', (req, res) => {
    const {nom, prenom, telephone} = req.body
    if(nom != undefined && prenom && telephone != undefined) {
        data.creerClient(nom, prenom,telephone)
        res.json({message: "client ajouté"})
    }
    else
        res.json({message: "Merci de compléter les données du client"})
})

app.post('/produits', (req, res) => {
    const {titre, prix, stock} = req.body
    if(titre != undefined && prix && stock != undefined) {
        data.creerProduit (titre, prix, stock)
        res.json({message: "produit ajouté"})
    }
    else
        res.json({message: "Merci de compléter les données du produit"})
})

app.post('/commandes', (req, res) => {
    const {client, listeProduits} = req.body
    if(client != undefined && listeProduits != undefined) {
        data.creerCommande(client, listeProduits)
        res.json({message: "commande ajouté"})
    }
    else
        res.json({message: "Merci de compléter les données de la commande"})
})












app.listen(888, () => {
})