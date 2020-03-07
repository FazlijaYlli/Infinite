//Structures
const name = {
    REDAPPLE: 'Red Apple',
    GREENAPPLE: 'Green Apple',
    PEAR: 'Pear',
    CUCUMBER: 'Cucumber',
    CARROT: 'Carrot',
    TOMATO: 'Tomato',
    CHERRYTOMATO : 'Cherry Tomato',
    WATERMELON: 'Watermelon',
    BANANA: 'Banana'
}
const color = {
    RED: 'Red',
    ORANGE: 'Orange',
    YELLOW: 'Yellow',
    GREEN: 'Green',
    EMPTY: 'Empty'
}
const shape = {
    ROUND: 'Round',
    CURVY: 'Curvy',
    STRAIGHT: 'Straight',
    EMPTY: 'Empty'
}

const size = {
    SMALL: 'Small',
    NORMAL: 'Normal',
    BIG: 'Straight',
    EMPTY: 'Empty'
}

var cnt = 0;

//Classe Fruit pouvant contenir des attributs venants des structures.
class Fruit {
    constructor(name, shape, color, size) {
        console.log("Entered the class Fruit")
        this._name = name;
        this._shape = shape;
        this._color = color;
        this._size = size;
        this._goodChoice = false;
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

    get GetShape() {
        return this._size;
    }
}

//Classe qui va stocker les choix de l'utilisateur.
class Choice {
    constructor() {
        console.log("Entered the Choice class")
        this._shape = shape.EMPTY;
        this._color = color.EMPTY;
        this._size = size.EMPTY;
        this._previousShape = shape.EMPTY;
        this._previousColor = shape.EMPTY;
    }

    //Méthode pour mettre à josur le choix de la forme de l'objet recherché.
    set SetShape(shape) {
        this._shape = shape;
    }

    set SetColor(color) {
        this._color = color;
    }

    set SetSize(size) {
        this._size = size;
    }
}

function Update(element) {
    console.log("Entered the function Update")
    var correctColor = false;
    var correctShape = false;
    var correctSize = false;

    if (element._shape == choice._shape) {
        correctShape = true;
    }

    if (element._color == choice._color) {
        correctColor = true;
    }

    if (element._size == choice._size) {
        correctSize = true;
    }

    if (correctColor == true) {
        document.write("La recherche a trouvé : " + element.GetName + "<br>")
    }
}

function ChoiceColor() {
    var buttonColorRed = document.createElement("button");
    buttonColorRed.innerHTML = "RED";
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(buttonColorRed);
    buttonColorRed.addEventListener("click", function() {
        choice.SetColor = color.RED; console.log("Bouton rouge appuyé");
        myFruits.forEach(element => Update(element));
    });

    var buttonColorGreen = document.createElement("button");
    buttonColorGreen.innerHTML = "GREEN";
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(buttonColorGreen);
    buttonColorGreen.addEventListener("click", function() {
        choice.SetColor = color.GREEN; console.log("Bouton vert appuyé");
        myFruits.forEach(element => Update(element));
    });
}






