<?php
require_once "Controller.php";
require_once "Repository/ProductRepository.php" ;


// This class inherits the jsonResponse method  and the $cnx propertye from the parent class Controller
// Only the process????Request methods need to be (re)defined.

class ProductController extends Controller {

    private ProductRepository $products;

    public function __construct(){
        $this->products = new ProductRepository();
    }

   
    protected function processGetRequest(HttpRequest $request) {
        $id = $request->getId("id");
        if ($id){
            // URI is .../products/{id}
            $p = $this->products->find($id);
            return $p==null ? false :  $p;
        }
        else{
            // // URI is .../products
            // $cat = $request->getParam("category"); // is there a category parameter in the request ?
            // if ( $cat == false) // no request category, return all products
            //     return $this->products->findAll();
            // else // return only products of category $cat
            //     return $this->products->findAllByCategory($cat);
            return $this->products->findAll();

        }
    }

    protected function processCheckStock(HttpRequest $request) {
        $id = $request->getParam("check");
        $result = $this->products->Check($id);
        return $result;


    }
   
}

?>