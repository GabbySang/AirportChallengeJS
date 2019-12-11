'use strict'

describe ('Plane', function () {

  let plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it('is an instance of a plane', function () {
  expect(plane instanceof Plane).toBe(true)}


);
})
















// describe("Plane", function() {
//   var plane;
//   var airport;
//   var weather;
//
//   beforeEach(function() {
//     weather = new Weather();
//     airport = new Airport(weather);
//     plane = new Plane();
//   });
//
//   // As an air traffic controller
//   // So I can get passengers to a destination
//   // I want to instruct a plane to land at an airport and confirm that it has landed
//   describe("Land plane", function() {
//     it("changes plane state to landed", function(){
//       spyOn(weather, 'isStormy').and.returnValue(false);
//       airport.land(plane);
//       expect(plane.isLanded()).toEqual(true);
//     });
//   });
