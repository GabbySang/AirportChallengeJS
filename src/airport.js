'use strict'

function Airport(){
  this.planes = []
  this.CAPACITY = 40

  Airport.prototype.land = function(plane){
    {this.planes.push(plane)}
    if (this.planes.length >= this.CAPACITY) {
      throw "Airport is full, you cannot land"}
    };
    

  Airport.prototype.takeOff = function(plane) {
    this.planes.splice(this.planes.indexOf(plane), 1);
  };

}
