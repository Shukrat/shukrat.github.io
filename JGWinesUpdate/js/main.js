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
  filesLoader: function(callback){
    this.winesJSON = $.getJSON("builderFiles/wines.json");
    this.regionsJSON = $.getJSON("builderFiles/wines.json");
    this.tastingsJSON = $.getJSON("builderFiles/wines.json");
    $(document).ajaxSuccess(function(){
      console.log("Files loader complete");
      callback();
    });
    console.log("Entered filesLoader");
  },

  init: function(){
    console.log("App.Main.init() called");
    this.filesLoader(function(){
      console.log("Wines:" + JSON.stringify(this.winesJSON));
      //console.log("Regions" + this.regionsJSON);
      //console.log("Tastings" + this.tastingsJSON);
    });
  }
};
