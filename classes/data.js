import {readFileSync,readFile,writeFileSync} from "fs"
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
        let rawdata = readFileSync(this.fichierClient);
        let recuperer = JSON.parse(rawdata);
        for(let i=0;i<recuperer.length;++i){
            if(recuperer[i]['id']===id){
                console.log( recuperer[i])
                return recuperer[i]
            }
        }
        return []
    }
    creerClient(nom,prenom,telephone){
        this.clients.push(new Client(this.compteurClient++,nom,prenom,telephone))
        writeFileSync(this.fichierClient, JSON.stringify(this.clients))
    }
    afficherProduit(id){
        let rawdata = readFileSync(this.fichierClient);
        let recuperer = JSON.parse(rawdata);
        for(let i=0;i<recuperer.length;++i){
            if(recuperer[i]['id']===id){
                console.log( recuperer[i])
                return recuperer[i]
            }
        }
        return []
    }
    creerProduit(titre,prix,stock){
        this.produits.push(new Client(this.compteurProduit++,titre,prix,stock))
        writeFileSync(this.fichierProduit, JSON.stringify(this.produits))
    }
    async afficherListeCommandes(){
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
        let rawdata = readFileSync(this.fichierCommande);
        let recuperer = JSON.parse(rawdata);
        for(let i=0;i<recuperer.length;++i){
            if(recuperer[i]['id']===id){
                console.log( recuperer[i])
                return recuperer[i]
            }
        }
        return []
    }
    creerCommande(client,listeProduits){
        this.commandes.push(new Commande(this.compteurCommande++,client,listeProduits))
        writeFileSync(this.fichierCommande, JSON.stringify(this.commandes))
    }
}