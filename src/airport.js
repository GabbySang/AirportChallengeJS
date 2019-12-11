'use strict'

function Airport(){
  this.planes = []
  this.CAPACITY = 40
  this.weather = new Weather

  Airport.prototype.land = function(plane){
    {this.planes.push(plane)}
    if (this.planes.length >= this.CAPACITY) {
      throw "Airport is full, you cannot land"}
    if (this.weather.isStormy() === true) {
      throw "You cannot land, dangerous stormy weather"
    };
  };

  Airport.prototype.takeOff = function(plane) {
    this.planes.splice(this.planes.indexOf(plane), 1);
  };
  if (this.weather.isStormy() === true) { 
    throw "You cannot take off, dangerous stormy weather"
  };

}
