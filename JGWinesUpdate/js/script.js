

// IIFE
(function(){
	"use strict";

	var menuIsOpen = false;
	var navUL;
	var navMenu;
	var navMenuX;

	function init(){
		navUL = document.querySelector("#navUL");
		navMenu = document.querySelector("#navMenu");
		navMenuX = document.querySelector("#navMenuX");
		
		navMenu.onclick = mobileMenu;
		navMenuX.onclick = mobileMenu;
	}

	function mobileMenu(){
		if(menuIsOpen){
			navUL.style.display = "none";
			navMenu.style.display = "block";
			navMenuX.style.display = "none";
			menuIsOpen = false;
		}
		else if(!menuIsOpen){
			navUL.style.display = "initial";
			navMenu.style.display = "none";
			navMenuX.style.display = "block";
			menuIsOpen = true;
		}
	}
	
	
	window.addEventListener("load",init);
}());