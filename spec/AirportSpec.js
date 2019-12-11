'use strict'

describe ('Airport', function() {

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane');
  });

  it('is an instance of an Airport', function () {
    expect(airport instanceof Airport).toBe(true)
  });


    describe("Land plane", function() {
      it('should allow a plane to land', function() {airport.land(plane);
        expect(airport.planes).toContain(plane);
      });
    });

    describe('taking off a plane', function() {
      it('should allow a plane to take off', function() {
        airport.land(plane);
        airport.takeOff(plane);
        expect(airport.planes).toBeLessThan(40);
      });
    });

    describe('Capacity', function() {
      it('should not allow a plane to land if full', function () {
      if (airport.planes.length >= 40)
      {expect(airport.land(plane)).toThrow("Airport is full, you cannot land")}

})
})
})
