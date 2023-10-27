import { CartItem } from "./cartitem.js";

class CartCollection {

    #cart;

    constructor(){
        this.#cart = [];
    }

    add(c){
        if ( c instanceof CartItem) {
            this.#cart.push(c);
        }
    }

    getTotal() {
        let total = 0;
        for (let prod of this.#cart) {
            total+=prod.getProduct().getPrice();
        }
        return total;
    }

    getCart() {
        return this.#cart;
    }

    find(id){
        return this.#cart.find( c => c.getProductId()==id );
    }
    findAllId(id) {
        return this.#cart.filter( c => c.getProductId()==id );
    }




}


export {CartCollection};