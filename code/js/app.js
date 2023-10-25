import { ProductCollection } from "./class/product-manager.js"
import { productRender } from "./render/product-render";

let M = {
    products: new ProductCollection()
};

let V = {};

V.render = function(data) {
    document.querySelector("#content").innerHTML = productRender(data);

}



let C = {};

C.init = async function() {
    await M.products.load("https://mmi.unilim.fr/~pouget35/api/products");
    V.render(M.products.findAll());
    console.log(M.products.findAll());
}

C.init();
