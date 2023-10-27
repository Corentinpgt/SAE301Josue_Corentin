<?php

require_once("Repository/EntityRepository.php");
require_once("Class/Order.php");


class OrderRepository extends EntityRepository {

    public function __construct(){
        parent::__construct();
    }

    public function Check($id): ?Order{

        $requete = $this->cnx->prepare("select quantity from Product where id=:value"); 
        $requete->bindParam(':value', $id); 
        $requete->execute(); 
        $answer = $requete->fetch(PDO::FETCH_OBJ);
        
        if ($answer==false) return null;
        
        return $answer;
    }

    
}