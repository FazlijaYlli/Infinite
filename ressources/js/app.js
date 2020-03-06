/* 
    ETML
    Auteur : Jeremiah Steiner
    Date : 06.03.2020
    Description : page de script du projet Infinite
*/

var way = "1";



/**
 * permet d'afficher et de cacher des sections
 * @param {*} sectionToHide la section a cacher
 * @param {*} sectionToShow la section à afficher
 */
function showHide(sectionToHide, sectionToShow) {

    document.getElementById("question" + sectionToHide).style.display = "none";
    document.getElementById("question" + sectionToShow).style.display = "block";
    way += "." + sectionToShow;

    console.log(way);
}

function returnToLastQuestion() {

    waySplit = way.split('.');

    document.getElementById("question" + waySplit[waySplit.length - 1]).style.display = "none";

    way = "";
    for (i = 0; i < waySplit.length - 1; i++) {
        way += waySplit[i] + ".";
    }

    way = way.substring(0, way.length-1);

    document.getElementById("question" + waySplit[waySplit.length - 2]).style.display = "block";

    console.log(way);
}