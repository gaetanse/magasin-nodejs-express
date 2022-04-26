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
                return "erreur chargement clien json"
            }
        })
    }
    afficherClient(id){

    }
    creerClient(id,nom,prenom,telephone){
        
    }
    afficherProduit(id){
        
    }
    creerProduit(id,titre,prix,stock){

    }
    afficherListeCommandes(){

    }
    afficherCommande(id){
        
    }
    creerCommande(id,client,listeProduits){

    }
}