// JavaScript Document

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
	menu.classList.toggle("bx-x");
	navlist.classList.toggle("open");  
};

document.addEventListener('DOMContentLoaded', function () {
    var topLaneInfo = document.querySelector('.top-lane-info');
    var junLaneInfo = document.querySelector('.jung-lane-info');
    var midLaneInfo = document.querySelector('.mid-lane-info');
    var botLaneInfo = document.querySelector('.bot-lane-info');
    var suppLaneInfo = document.querySelector('.supp-lane-info');

    var svg1 = document.querySelector('.svg1');
    var svg2 = document.querySelector('.svg2');
    var svg3 = document.querySelector('.svg3');
    var svg4 = document.querySelector('.svg4');
    var svg5 = document.querySelector('.svg5');

    function closeAllLaneInfos() {
        topLaneInfo.classList.remove('show-info');
        junLaneInfo.classList.remove('show-info1');
        midLaneInfo.classList.remove('show-info2');
        botLaneInfo.classList.remove('show-info3');
        suppLaneInfo.classList.remove('show-info4');
    }

    function resetAllSVGColors() {
        svg1.style.fill = '#fff';
        svg2.style.fill = '#fff';
        svg3.style.fill = '#fff';
        svg4.style.fill = '#fff';
        svg5.style.fill = '#fff';
    }

    svg1.addEventListener('click', function () {
        closeAllLaneInfos();
        resetAllSVGColors();
        topLaneInfo.classList.toggle('show-info');
        svg1.style.fill = '#C89B3C';
    });

    svg2.addEventListener('click', function () {
        closeAllLaneInfos();
        resetAllSVGColors();
        junLaneInfo.classList.toggle('show-info1');
        svg2.style.fill = '#C89B3C'; 
    });

    svg3.addEventListener('click', function () {
        closeAllLaneInfos();
        resetAllSVGColors();
        midLaneInfo.classList.toggle('show-info2');
        svg3.style.fill = '#C89B3C';
    });

    svg4.addEventListener('click', function () {
        closeAllLaneInfos();
        resetAllSVGColors();
        botLaneInfo.classList.toggle('show-info3');
        svg4.style.fill = '#C89B3C';
    });

    svg5.addEventListener('click', function () {
        closeAllLaneInfos();
        resetAllSVGColors();
        suppLaneInfo.classList.toggle('show-info4');
        svg5.style.fill = '#C89B3C';
    });
});
