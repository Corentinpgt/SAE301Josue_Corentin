class CartItem {
    #product;
    #quantity = 1;
    #select;
    

    constructor(p) {
        this.#product = p;
        
    }

    getProduct() {
        return this.#product;
    }

    getProductId() {
        return this.#product.getId();
    }


    getQuantity() {
        return this.#quantity;
    }

    plus() {
        this.#quantity++;
    }

    minus() {
        this.#quantity--;
    }
    setSelect(s) {
        this.#select= s;
    }
    getSelect() {
        return this.#select;
    }

}


export {CartItem};