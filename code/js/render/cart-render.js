import { Product } from "../class/product.js";

let getPanier = await fetch("templates/productpanier.html.inc");
const templatePanier = await getPanier.text();

let getselect = await fetch("templates/productpanier-select.html.inc");
const templateselect = await getselect.text();

let gettoto = await fetch("templates/paniertotal.html.inc");
const templatepaniertoto = await gettoto.text();



let renderPanier = function(data){

    let nav = document.querySelector("#nav");
    nav.innerHTML="";

    let all = "";
    let totalprice=0;
    
    for (const cart of data.getCart()) {
        let temp = templatePanier;

        let prod = cart.getProduct();
        let calcul = cart.getQuantity()*prod.getPrice();

        console.log(calcul);

        temp = temp.replace("{{src}}", prod.getImg());
        temp = temp.replace("{{productname}}", prod.getName());
        temp = temp.replace("{{id}}", prod.getId());
        temp = temp.replace("{{price}}", calcul +" €");
        temp = temp.replace("{{total}}","X " +cart.getQuantity());
        
        let selected = cart.getSelect();
        
        let html = templateselect;
        let result = "";

        
        
        for (let elt of selected) {

            let name = elt[0];
            let value = elt[1];
            html = html.replace("{{name}}",name);
            html = html.replace("{{select}}",value);
            result+=html;
            html = templateselect;
        }
            
        temp = temp.replace("{{here}}",result);
        all += temp;

        totalprice+=calcul;

    
    }

    let toto = templatepaniertoto.replace("{{total}}",totalprice+" €");
    all+=toto;
    return all;
}



export {renderPanier};