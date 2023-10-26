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
    #quantity;

    constructor(id, name, idcategory, desc, price, img, clr, t, bt, p, m, q) {
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
        this.#quantity = q;
    }

    getId() {
        return this.#id;
    }

    getName() {
        return this.#name;
    }

    getIdCategory() {
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

    getQuantity() {
        return this.#quantity;
    }
    getOption() {
        let result = [];
        if (this.#batterie == "" & this.#poids == "") {
            result.push("Matière", this.#taille, this.#couleur, this.#matiere);

        }
        if (this.#batterie == "" & this.#matiere == "") {
            result.push("Poids", this.#taille, this.#couleur, this.#poids);
        }
        if (this.#matiere == "" & this.#poids == "") {
            result.push("Batterie", this.#taille, this.#couleur, this.#batterie);
        }
        return result;
    }

}


export {Product};