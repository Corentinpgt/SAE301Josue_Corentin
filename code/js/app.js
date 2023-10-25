import { ProductCollection } from "./class/product-manager.js"
import { productRender, pageRender } from "./render/product-render";

let M = {
    products: new ProductCollection()
};

let V = {};

V.renderCard = function(data) {
    document.querySelector("#content").innerHTML = productRender(data);
}

V.renderPage = function(data) {
    document.querySelector("#content").innerHTML = pageRender(data);
}



let C = {};


C.handlerClickNav = function (ev) {
    if (ev.target.tagName =="BUTTON") {
        let id = ev.target.dataset.id;
        V.renderCard(M.products.findByCategory(id));
    }
    C.listener();
}

C.handlerClickCard = function (ev) {
    let id = ev.target.dataset.id;
    V.renderPage(M.products.find(id));
}

C.init = async function() {
    await M.products.load("https://mmi.unilim.fr/~pouget35/api/products");
    V.renderCard(M.products.findAll());
    let nav = document.querySelector("#nav");
    nav.addEventListener("click", C.handlerClickNav);
    let pageacces = document.querySelectorAll(".productcard__btn");
    pageacces.forEach(elt => {
        elt.addEventListener("click", C.handlerClickCard);
    });

}

C.listener = function() {
    let pageacces = document.querySelectorAll(".productcard__btn");
    pageacces.forEach(elt => {
        elt.addEventListener("click", C.handlerClickCard);
    });
}

C.init();
