"use strict";

var App = App || {};

App.Main = {
  // Constants

  // Variables
  winesJSON: undefined,
  regionsJSON: undefined,
  tastingsJSON: undefined,

  // Modules

  // Methods
  init: function(){
    console.log("App.Main.init() called");
    filesLoader(function(){
      console.log("Wines:" + winesJSON);
      console.log("Regions" + regionsJSON);
      console.log("Tastings" + tastingsJSON);
    });

  }

  filesLoader: function(callback){
    winesJSON = $.getJSON("JGWinesUpdate/builderFiles/wines.json");
    regionsJSON = $.getJSON("JGWinesUpdate/builderFiles/wines.json");
    tastingsJSON = $.getJSON("JGWinesUpdate/builderFiles/wines.json");
    onAjaxSuccess: function(){
      console.log("Files loader complete");
      callback();
    };
    console.log("Entered filesLoader");
  }


};
