<?php
require_once "Controller.php";
require_once "Repository/OrderRepository.php" ;


class OrderController extends Controller {

    private OrderRepository $order;

    public function __construct(){
        $this->order = new OrderRepository();
    }

   
    protected function processPutOrder(HttpRequest $request) {
        $products = $request->getParam("prods");
        echo $products;
        $this->order->AddOrder($products);


    }

   
}

?>