// JavaScript Document

let toggler = document.querySelector(".navbar-toggler"); 

console.log(toggler);

toggler.onclick = function() {
    let attribute = this.getAttribute("data-target");
	let navigation = document.querySelector(attribute);
	navigation.classList.toggle("open");
	console.log(navigation);
}


let dropdownToggler = document.querySelectorAll(".dropdown > a");

dropdownToggler.forEach(function(dropdown){
	dropdown.onclick = function (e) {
	e.preventDefault();
	this.closest(".dropdown").classList.toggle("open");
	}
	console.log(dropdown);
});