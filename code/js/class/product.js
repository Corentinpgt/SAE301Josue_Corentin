class Product {
    #id;
    #name;
    #idcategory;
    #description;
    #price;
    #img;
    #couleur;
    #taille;
    #batterie;
    #poids;
    #matiere;

    constructor(id, name, idcategory, desc, price, img, clr, t, bt, p, m) {
        this.#id = id;
        this.#name = name;
        this.#idcategory = idcategory;
        this.#description = desc;
        this.#price = price;
        this.#img = img;
        this.#couleur = clr;
        this.#taille = t;
        this.#batterie = bt;
        this.#poids = p;
        this.#matiere = m;
    }

    getId() {
        return this.#id;
    }

    getName() {
        return this.#name;
    }

    getIdcategory() {
        return this.#idcategory;
    }

    getDescription() {
        return this.#description;
    }

    getPrice() {
        return this.#price;
    }

    getCouleur() {
        return this.#couleur;
    }

    getImg() {
        return this.#img;
    }

    getBatterie() {
        return this.#batterie;
    }

    getTaille() {
        return this.#taille;
    }

    getPoids() {
        return this.#poids;
    }

    getMatiere() {
        return this.#matiere;
    }

}


export {Product};