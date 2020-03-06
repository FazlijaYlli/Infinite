var nouveauTest = 
[document.getElementById("question1"),
document.getElementById("question2"), 
document.getElementById("question3"),
document.getElementById("question4"),
document.getElementById("question5")];

//var blabla = documen

let avance = 1;

let boutonOui = 1;

function MaFonction() {
    let questions = [true, false, false, false, false];

    switch(questions[boutonOui])
        {
            case 1:
                questions[0] = false;
                questions[1] = true;
                break;
            case 2:
                questions[1] = false;
                questions[2] = true;
                break;
            case 3:
                questions[2] = false;
                questions[3] = true;
                break;
            case 4:
                questions[3] = false;
                questions[4] = true;
                break;

        }

        for (let x = 0; x < 5; x++){
            switch (questions[x]) {
                case 0:
                    document.getElementById("question1").style.display = block;
                    break;
                case 1:
                    document.getElementById("question2").style.display = block;
                    break;
                case 2:
                    document.getElementById("question3").style.display = block;
                    break;
                case 3:
                    document.getElementById("question4").style.display = block;
                    break;
                case 4:
                    document.getElementById("question5").style.display = block;
                    break;
        }
    }

}

function MaReponse() {
    this.MaFonction();
}

function ReponseOui() {

}

function MaFonctionTest() {
    if (avance > 0 && avance < nouveauTest.length){
        nouveauTest[avance-1].style.display = "none";
    }

    if (avance < nouveauTest.length){
        nouveauTest[avance].style.display = "block";
    }

    /*if (avance == 4){
        document.getElementsByClassName("button").style.display = "none";
        document.getElementById("annuler").style.display = "block";
    }*/
    avance++;

    if (avance == 6){
        document.getElementById("question6").style.display = "block";
    }
}

function MaFonctionTestRetour() {
    
    avance--;

    if (avance > 0 && avance < nouveauTest.length){
        nouveauTest[avance-1].style.display = "none";
    }

    if (avance < nouveauTest.length){
        nouveauTest[avance].style.display = "block";
    }
}