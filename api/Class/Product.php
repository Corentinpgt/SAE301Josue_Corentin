<?php
/**
 *  Class Product
 * 
 *  Représente un produit avec uniquement 3 propriétés (id, name, category)
 * 
 *  Implémente l'interface JsonSerializable 
 *  qui oblige à définir une méthode jsonSerialize. Cette méthode permet de dire comment les objets
 *  de la classe Product doivent être converti en JSON. Voire la méthode pour plus de détails.
 */
class Product implements JsonSerializable {
    private int $id; // id du produit
    private string $name; // nom du produit
    private int $idcategory;
    private string $description;
    private int $price;
    private string $img;
    private string $taille;
    private string $couleur;
    private string $batterie;
    private string $poids;
    private string $matiere;
    private int $quantity;



    public function __construct(int $id){
        $this->id = $id;
    }

    /**
     * Get the value of id
     */ 
    public function getId(): int
    {
        return $this->id;
    }

    /**
     *  Define how to convert/serialize a Product to a JSON format
     *  This method will be automatically invoked by json_encode when apply to a Product
     * 
     *  En français : On sait qu'on aura besoin de convertir des Product en JSON pour les
     *  envoyer au client. La fonction json_encode sait comment convertir en JSON des données
     *  de type élémentaire. A savoir : des chaînes de caractères, des nombres, des booléens
     *  des tableaux ou des objets standards (stdClass). 
     *  Mais json_encode ne saura pas convertir un objet de type Product dont les propriétés sont
     *  privées de surcroit. Sauf si on définit la méthode JsonSerialize qui doit retourner une
     *  représentation d'un Product dans un format que json_encode sait convertir (ici un tableau associatif)
     * 
     *  Le fait que Product "implémente" l'interface JsonSerializable oblige à définir la méthode
     *  JsonSerialize et permet à json_encode de savoir comment convertir un Product en JSON.
     * 
     *  Parenthèse sur les "interfaces" : Une interface est une classe (abstraite en générale) qui
     *  regroupe un ensemble de méthodes. On dit que "une classe implémente une interface" au lieu de dire 
     *  que "une classe hérite d'une autre" uniquement parce qu'il n'y a pas de propriétés dans une "classe interface".
     * 
     *  Voir aussi : https://www.php.net/manual/en/class.jsonserializable.php
     *  
     */
    public function JsonSerialize(): mixed{
        return ["id" => $this->id, "name" => $this->name, "category" => $this->idcategory, "price" => $this->price, "description" => $this->description, "img" => $this->img, "taille" => $this->taille, "couleur" => $this->couleur, "batterie" => $this->batterie, "poids" => $this->poids, "matiere" => $this->matiere, "quantity" => $this->quantity];
    }

    /**
     * Get the value of name
     */ 
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set the value of name
     *
     * @return  self
     */ 
    public function setName($name): self
    {
        $this->name = $name;
        return $this;
    }

    /**
     * Get the value of idcategory
     */ 
    public function getIdcategory()
    {
        return $this->idcategory;
    }

    /**
     * Set the value of idcategory
     *
     * @return  self
     */ 
    public function setIdcategory(int $idcategory): self
    {
        $this->idcategory = $idcategory;
        return $this;
    }

    /**
     * Set the value of id
     *
     * @return  self
     */ 
    public function setId($id): self
    {
        $this->id = $id;
        return $this;
    }

    /**
     * Get the value of description
     */ 
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set the value of description
     *
     * @return  self
     */ 
    public function setDescription($desc): self
    {
        $this->description = $desc;
        return $this;
    }

    /**
     * Get the value of price
     */ 
    public function getPrice()
    {
        return $this->price;
    }

    /**
     * Set the value of price
     *
     * @return  self
     */ 
    public function setPrice($price): self
    {
        $this->price = $price;
        return $this;
    }

    /**
     * Get the value of img
     */ 
    public function getImg()
    {
        return $this->price;
    }

    /**
     * Set the value of img
     *
     * @return  self
     */ 
    public function setImg($img): self
    {
        $this->img = $img;
        return $this;
    }

    /**
     * Get the value of taille
     */ 
    public function getTaille()
    {
        return $this->taille;
    }

    /**
     * Set the value of taille
     *
     * @return  self
     */ 
    public function setTaille($t): self
    {
        $this->taille = $t;
        return $this;
    }

    /**
     * Get the value of couleur
     */ 
    public function getCouleur()
    {
        return $this->couleur;
    }

    /**
     * Set the value of couleur
     *
     * @return  self
     */ 
    public function setCouleur($clr): self
    {
        $this->couleur = $clr;
        return $this;
    }

    /**
     * Get the value of batterie
     */ 
    public function getBatterie()
    {
        return $this->batterie;
    }

    /**
     * Set the value of batterie
     *
     * @return  self
     */ 
    public function setBatterie($btr): self
    {
        $this->batterie = $btr;
        return $this;
    }

    /**
     * Get the value of poids
     */ 
    public function getPoids()
    {
        return $this->poids;
    }

    /**
     * Set the value of poids
     *
     * @return  self
     */ 
    public function setPoids($p): self
    {
        $this->poids = $p;
        return $this;
    }

    /**
     * Get the value of matiere
     */ 
    public function getMatiere()
    {
        return $this->matiere;
    }

    /**
     * Set the value of matiere
     *
     * @return  self
     */ 
    public function setMatiere($m): self
    {
        $this->matiere = $m;
        return $this;
    }

    /**
     * Get the value of matiere
     */ 
    public function getQuantity()
    {
        return $this->quantity;
    }

    /**
     * Set the value of matiere
     *
     * @return  self
     */ 
    public function setQuantity($q): self
    {
        $this->quantity = $q;
        return $this;
    }
}