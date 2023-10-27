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


}


export {CartCollection};