

// IIFE
(function(){
	"use strict";

	var menuIsOpen = false;
	var navUL;
	var navMenu;

	function init(){
		navUL = document.querySelector("#navUL");
		navMenu = document.querySelector("#navMenu");
		
		navMenu.onclick = mobileMenu;
	}

	function mobileMenu(){
		if(menuIsOpen){
			navUL.style.display = "none";
			menuIsOpen = false;
		}
		else if(!menuIsOpen){
			navUL.style.display = "initial";
			menuIsOpen = true;
		}
	}
	
	
	window.addEventListener("load",init);
}());