'use strict'

describe ('Airport', function() {

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane');
  });

  it('is an instance of an Airport', function () {
    expect(airport instanceof Airport).toBe(true)});


    describe("Land plane", function() {
      var plane = jasmine.createSpyObj('plane', ['tempMethod']);
      it('should allow a plane to land', function() {
        airport.land(plane);
        expect(airport.planes).toContain(plane);
      });
    });

    describe('taking off a plane', function() {
      // var plane = jasmine.createSpyObj('plane', ['tempMethod']);
      it('should allow a plane to take off', function() {
        airport.land(plane);
        airport.takeOff(plane);
        expect(airport.planes).not.toContain(plane);
      });
    });
  });

// let planes = []
// expect(planes.length).toEqual(0)
// airport.land(plane)
// expect(planes).toEqual(plane)

// var plane;
//
// beforeEach(function() {
//   plane = new Plane();
// });
