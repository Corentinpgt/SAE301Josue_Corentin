import { Product } from "../class/product.js";

let getbasic = await fetch("templates/productcard.html.inc");
const templatebasic = await getbasic.text();

let getexpired = await fetch("templates/expired_productcard.html.inc");
const templateexpired = await getexpired.text();

let getsoon = await fetch("templates/soon_productcard.html.inc");
const templatesoon = await getsoon.text();

let getpage = await fetch("templates/productpage.html.inc");
const templatepagebasic = await getpage.text();

let getpagesoon = await fetch("templates/soon_productpage.html.inc");
const templatepagesoon = await getpagesoon.text();

let getpageexpired = await fetch("templates/expired_productpage.html.inc");
const templatepageexpired = await getpageexpired.text();

let getul = await fetch("templates/productpage-option.html.inc");
const templateul = await getul.text();

let getoption = await fetch("templates/productoption.html.inc");
const templateoption = await getoption.text();

let nav = document.querySelector("#nav").innerHTML;
  
let render = function(data){
    document.querySelector("#nav").innerHTML =nav;
    
    let html = "";
    let all = "";
    if (data instanceof Array === false) { 
        console.error( "data has to be an array of Products");
        return all;
    }

    for(let p of data){
        // on vérifie que p est bien un Product
        if (p instanceof Product){
            let  template = templatebasic;
            console.log(typeof(p.getQuantity()));
            if (p.getQuantity() == 0) {
                template = templateexpired;
            }
            if (p.getQuantity() <= 5 & p.getQuantity() >0) {
                template = templatesoon;
            }
            
            html = template.replaceAll("{{id}}", p.getId() );
            html = html.replaceAll("{{productname}}", p.getName() );
            html = html.replace("{{productprice}}", p.getPrice() + " €" );
            html = html.replace("{{src}}", p.getImg());
            all += html;
        }
    }

    return all;
}


let render2 = function(data){
    document.querySelector("#nav").innerHTML =nav;

    
    let html = "";
    let all = "";

    if (data instanceof Product){

        let  template = templatepagebasic;
        if (data.getQuantity() == 0) {
            template = templatepageexpired;
        }
        if (data.getQuantity() <= 5 & data.getQuantity() >0) {
            template = templatepagesoon;
        }

        html = template.replaceAll("{{id}}", data.getId() );
        html = html.replaceAll("{{productname}}", data.getName() );
        html = html.replace("{{price}}", data.getPrice() + " €" );
        html = html.replace("{{src}}", data.getImg());
        html = html.replace("{{productdesc}}", data.getDescription());

        let options = data.getOption();
        let name = options.shift();
        let optionname = templateul.replaceAll("{{optionname}}", name);
        html = html.replace("{{selecteur}}", optionname);

        

    
        let alloption = [];
    
        for (let opt of options) {

            let optioncode = JSON.parse(opt);
            
            alloption.push(optioncode);
        }

    
        let listeoption ="";

        let i=1;
        for (let elt of alloption){
            for (let element of elt) {
                listeoption += templateoption.replaceAll("{{option}}",element);
            }

            html = html.replace("{{here" +i+ "}}", listeoption);
            listeoption="";
            i++;

        }

        
        // console.log(select);
    }

    all += html;
    

    return all;
}





export {render as productRender};
export {render2 as pageRender};








// let op = templateoption.replaceAll("{{option}}",optioncode);


