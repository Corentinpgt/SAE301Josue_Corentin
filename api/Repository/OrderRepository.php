<?php

require_once("Repository/EntityRepository.php");
require_once("Class/Order.php");


class OrderRepository extends EntityRepository {

    public function __construct(){
        parent::__construct();
    }

    public function find($id): ?Product{

    }

    public function findAll(): array {

    }

    public function AddOrder($prods){
        
        $requete = $this->cnx->prepare("INSERT INTO `Order`(`products`) VALUES (:prod)"); 
        $requete->bindParam(':prod', $prods); 
        $requete->execute(); 

    }  
}