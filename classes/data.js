import {readFileSync,readFile} from "fs"
import { Client } from "./client.js"
import { Produit } from "./produit.js"
import { Commande } from "./commande.js"

export class Data{
    constructor(){
        this.commandes = []
        this.produits = []
        this.clients = []

        this.fichierClient = "client.json"
        this.fichierProduit = "produit.json"
        this.fichierCommande = "commande.json"

        this.compteurClient = 0
        this.compteurProduit = 0
        this.compteurCommande = 0
    }
    afficherListeClients(){
        readFile(this.fichierClient, (err, data) => {
            if(err == null){
                console.log(data.toString())
                return data.toString()
            }
            else{
                console.log(err)
                return "erreur chargement clients json"
            }
        })
    }
    afficherClient(id){

    }
    creerClient(nom,prenom,telephone){
        this.clients.push(new Client(++this.compteurClient,nom,prenom,telephone))
    }
    afficherProduit(id){
        
    }
    creerProduit(titre,prix,stock){
        this.produits.push(new Client(++this.compteurProduit,titre,prix,stock))
    }
    afficherListeCommandes(){
        readFile(this.fichierCommande, (err, data) => {
            if(err == null){
                console.log(data.toString())
                return data.toString()
            }
            else{
                console.log(err)
                return "erreur chargement commandes json"
            }
        })
    }
    afficherCommande(id){
        
    }
    creerCommande(client,listeProduits){
        this.produits.push(new Commande(++this.compteurProduit,client,listeProduits))
    }
}