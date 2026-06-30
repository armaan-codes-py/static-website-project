// JavaScript Document

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
	menu.classList.toggle("bx-x");
	navlist.classList.toggle("open");  
};

const sr = ScrollReveal ({
	distance: "65px",
	duration: 2600,
	delay: 450,
	reset: true
});

sr.reveal(".hero-text", {delay:200, origin:'top'});
sr.reveal(".hero-img", {delay:450, origin:'top'});
sr.reveal(".icons", {delay:500, origin:'left'});
sr.reveal(".scroll-down", {delay:500, origin:'right'});

//Animazioni per sezione Champion

let slideIndex = 0;

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("champion");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slideIndex++;
  
  if (slideIndex > slides.length) { 
    slideIndex = 1;
  }  
  
  slides[slideIndex - 1].style.display = "block";  
  slides[slideIndex - 1].classList.add("fade-in"); // Aggiungi la classe Fade-In
  
  // Remuovi l'effetto Fade-In dopo che l'animazione è finità
  setTimeout(() => {
    slides[slideIndex - 1].classList.remove("fade-in");
  }, 1500);
  
  setTimeout(showSlides, 5000); // Cambia Immagine ogni 3 secondi
}

document.addEventListener("DOMContentLoaded", showSlides);

// Selezionare Video cliccando sui SVG

document.getElementById('div1').addEventListener('click', function() {
	playVideo('../MOVIES/MP4/assassin.mp4');
	document.querySelectorAll('.svg-icons svg').forEach(function(svg) {
      svg.classList.remove('clicked');
    });
});
document.getElementById('div2').addEventListener('click', function() {
	playVideo('../MOVIES/MP4/fighter.mp4');
});
document.getElementById('div3').addEventListener('click', function() {
	playVideo('../MOVIES/MP4/mage.mp4');
});
document.getElementById('div4').addEventListener('click', function() {
	playVideo('../MOVIES/MP4/marksman.mp4');
});
document.getElementById('div5').addEventListener('click', function() {
	playVideo('../MOVIES/MP4/support.mp4');
});
document.getElementById('div6').addEventListener('click', function() {
	playVideo('../MOVIES/MP4/tank.mp4');
});

function playVideo(videoPath) {
	document.querySelectorAll('#video-bin video').forEach(function(video) {
		video.style.display = 'none';
	});
	
	var video = document.getElementById('video1');
	video.src = videoPath;
	video.style.display = 'block';
	video.play();
}

// Change color on Click

document.addEventListener('DOMContentLoaded', function () {
	var svgIconsDiv = document.querySelector('.svg-icons');
	
	svgIconsDiv.addEventListener('click', function (event) {
	  var clickedSVG = event.target.closest('svg');

	  if (clickedSVG) {
		svgIconsDiv.querySelectorAll('svg').forEach(function (svg) {
		  svg.classList.remove('clicked');
	  });
		
		clickedSVG.classList.toggle('clicked');
	}
  });
});














