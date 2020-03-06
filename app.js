//Structures
const name = {
    REDAPPLE: 'Red Apple',
    GREENAPPLE: 'Green Apple',
    PEAR: 'Pear',
    CUCUMBER: 'Cucumber',
    CARROT: 'Carrot'
}
const color = {
    RED: 'Red',
    ORANGE: 'Orange',
    GREEN: 'Green',
    EMPTY: 'Empty'
}
const shape = {
    ROUND: 'Round',
    CURVY: 'Curvy',
    STRAIGHT: 'Straight',
    EMPTY: 'Empty'
}

//Classe Fruit pouvant contenir des attributs venants des structures.
class Fruit {
    constructor(name, shape, color) {
        console.log("Entered the class Fruit")
        this._name = name;
        this._shape = shape;
        this._color = color;
    }

    get GetName() {
        return this._name;
    }

    get GetColor() {
        return this._color;
    }

    get GetShape() {
        return this._shape;
    }
}

//Classe qui va stocker les choix de l'utilisateur.
class Choice {
    constructor() {
        console.log("Entered the Choice class")
        this._shape = shape.EMPTY;
        this._color = color.EMPTY;
    }

    //Méthode pour mettre à jour le choix de la forme de l'objet recherché.
    set SetShape(shape) {
        this._shape = shape;
    }

    set SetColor(color) {
        this._color = color;
    }

    get GetColor() {
        return this._color;
    }

    get GetShape() {
        return this._shape;
    }
}

function Update(element) {

    console.log("Entered the function Update")

    var correctColor = false;
    var correctShape = false;

    if (element._shape == choice._shape) {
        correctColor = true;
    }
    if (element._color == choice._color) {
        correctShape = true;
    }

    if (correctColor == true) {
        if(correctShape == true) {
            document.write(element.GetColor + " and " + element.GetShape + " : ")
            document.write(element.GetName + "<br>")
        }
    }
}

//Tableau de mes fruits possèdants différentes propriétés.
var myFruits = [
    new Fruit(name.REDAPPLE,shape.ROUND,color.RED),
    new Fruit(name.GREENAPPLE,shape.ROUND,color.GREEN),
    new Fruit(name.PEAR,shape.CURVY,color.GREEN),
    new Fruit(name.CUCUMBER,shape.CURVY,color.GREEN),
    new Fruit(name.CARROT,shape.STRAIGHT,color.ORANGE)
];



