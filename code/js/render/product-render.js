import { Product } from "../class/product.js";

let get = await fetch("templates/productcard.html.inc");
const template = await get.text();
  
let render = function(data){
    
    let html = "";
    let all = "";
    if (data instanceof Array === false) { 
        console.error( "data has to be an array of Products");
        return all;
    }
    for(let p of data){
        // on vérifie que p est bien un Product
        if (p instanceof Product){
            html = template.replace("{{id}}", p.getId() );
            html = html.replaceAll("{{productname}}", p.getName() );
            html = html.replace("{{productprice}}", p.getPrice() + " €" );
            html = html.replace("{{src}}", p.getImg());
            all += html;
        }
    }

    return all;
}

export {render as productRender};

