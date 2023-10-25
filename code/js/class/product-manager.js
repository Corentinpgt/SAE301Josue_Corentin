import { Product } from "./product.js";
import { getRequest, postRequest } from "../api-queries.js";

class ProductCollection {

    #uri;
    #products;

    constructor(){
        this.#uri = "";
        this.#products = [];
    }

    async load(uri){
        this.#uri = uri;
        let objects = await getRequest(uri);
        for(let item of objects){
            let p = new Product(item.id, item.name, item.category, item.description, item.price, item.img, item.couleur, item.taille, item.batterie, item.poids, item.matiere);
            this.#add(p);
        }
        return this.#products.length;
    }

    #add(p){
        if ( p instanceof Product)
            this.#products.push(p);
    }

    async create(name, idcat){
        if (this.#uri == "" ){
            console.log("Warning, the api server uri is not set.");
        }
        let object = await postRequest(this.#uri, {name: name, category: idcat});
        if (object){
            this.#add(new Product(object.id, object.name, object.category));
        }
        else{
            console.log("Fail to create the Product");
        }
    }

    find(id){
        return this.#products.find( p => p.getId()==id );
    }

    findAll(){
        return this.#products;
    }

    findByCategory(idcat){
        return this.#products.filter( p => p.getIdCategory()==idcat);
    }
}


export {ProductCollection}