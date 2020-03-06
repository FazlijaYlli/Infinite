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

    document.getElementById(sectionToHide).style.display = "none";
    document.getElementById(sectionToShow).style.display = "block";
    way += sectionToShow.substring(sectionToShow.length - 1, sectionToShow.length);
    console.log(way);
}

function returnToLastQuestion() {
    document.getElementById("question" + way.substring(way.length - 1, way.length)).style.display = "none";

    way = way.substring(0, way.length-1);

    document.getElementById("question" + way.substring(way.length - 1, way.length)).style.display = "block";

}