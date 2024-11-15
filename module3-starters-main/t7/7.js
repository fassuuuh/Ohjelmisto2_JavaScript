'use strict';

// etsitään tarvittavat komponentit html-sivulta
const kuvaElem = document.querySelector('#target');
const tekstiElem = document.getElementById('trigger');

// määritellään tapahtumankäsittelijöiden funktiot
function hiiriPaalle(evt) {
    // kuvan sisältö vaihtuu picA --> picB
    kuvaElem.src = 'img/picB.jpg';
}
function hiiriPois(evt) {
    // kuvan sisältö vaihtuu takaisin
    kuvaElem.src = 'img/picA.jpg';
}

// määritellään p-elementille tapahtumakäsittelijä, kuuntelee, että tuleeko hiiri päälle
tekstiElem.addEventListener('mouseover', hiiriPaalle);
tekstiElem.addEventListener('mouseout', hiiriPois);
