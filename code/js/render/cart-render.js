import { Product } from "../class/product.js";

let getPanier = await fetch("templates/productpanier.html.inc");
const templatePanier = await getPanier.text();

let getselect = await fetch("templates/productpanier-select.html.inc");
const templateselect = await getselect.text();

let gettoto = await fetch("templates/paniertotal.html.inc");
const templatepaniertoto = await gettoto.text();

let renderPanier = function(data){

    let all = "";
    
    for (const cart of data.getCart()) {
        let temp = templatePanier;

        let prod = cart.getProduct();

        temp = temp.replace("{{src}}", prod.getImg());
        temp = temp.replace("{{productname}}", prod.getName());
        temp = temp.replace("{{price}}", prod.getPrice() +" €");
        
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
    
    }


    let toto = templatepaniertoto.replace("{{total}}",data.getTotal()+" €")
    all+=toto;
    return all;
}



export {renderPanier};