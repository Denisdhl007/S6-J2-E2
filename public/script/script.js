class Rectangle {
    constructor(hauteur,largeur){
        this.hauteur = hauteur;
        this.largeur = largeur;
    }
}

let newRectangle = new Rectangle(30,20);

console.log(newRectangle);

class Animal {
    constructor(pates){
        this.pates = pates;
    }
    parler(){
        console.log(`Je fais du bruit avec mes ${this.pates} pates`);
    }
}

class Chien extends Animal {
    constructor(pates,couleur){
        super(pates)
        this.couleur= couleur;
    }
    parler(){
        super.parler();
    }
}
// let Animal2 = new Animal(4);
let bulldog = new Chien(4,'orange');
bulldog.parler();
console.log(bulldog);
//


// ## EXO1
// ### Créer une class Personnage avec comme propriétés : 
// ### age , nom , ville
// ### Faire 2 instances de cette class.

// ## EXO2
// ### Rajouter la methode 'sePresenter' à la class Personnage qui dira "Bonjour, je m'appelle [nom-de-la-personne] !" via un console.log
// ### Lancer cette méthode sur les deux instances de l'exo1

class Personnage {
    constructor(age, nom, ville){
        this.age = age;
        this.nom = nom;
        this.ville = ville;
    }
    sePresenter(){
        console.log(`Bonjour, je m'appelle ${this.nom}!`);
    }
}

let perso1 = new Personnage (30, `Lola`, `Vilnius`);
let perso2 = new Personnage (28, `Ninou`, `Helsinki`);
console.log(perso1);
console.log(perso2);
perso1.sePresenter();
perso2.sePresenter();