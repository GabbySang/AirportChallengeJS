
// function Weather () {
// this.Stormy = false;
//
//   Weather.prototype.isStormy = function () {
//     this.Stormy === false
//   }
// }


'use strict';

function Weather(){
  this._CHANCE_OF_STORMY = 0.2;
}

Weather.prototype.isStormy = function(){
  if (Math.random() > this.STORMPOTENTIAL){this.Stormy === true};
};

//potential code for a random weather scenario....
//random Math function if probability high?
//Weather.prototype.isStormy = function(){
  //return (Math.random() > this.STORMPOTENTIAL);};....oppose to = flase.
