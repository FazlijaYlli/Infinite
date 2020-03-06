/* 
    ETML
    Auteur : Jeremiah Steiner
    Date : 06.03.2020
    Description : page de script du projet Infinite
*/




/**
 * permet d'afficher et de cacher des sections
 * @param {*} sectionToHide la section a cacher
 * @param {*} sectionToShow la section à afficher
 */
function showHide(sectionToHide, sectionToShow) {

    document.getElementById(sectionToHide).style.display = "none";
    document.getElementById(sectionToShow).style.display = "block";
}