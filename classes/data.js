export class Data{
    constructor(){
        this.commandes = []
        this.produits = []
        this.clients = []
    }
    afficherListeClients(){
        return this.clients
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