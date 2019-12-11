'use strict'

describe ('Airport', function() {

  var airport;
  var plane;
  var weather;
  var planes = []

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane');
    weather = jasmine.createSpy('weather');
  });

  it('is an instance of an Airport', function () {
    expect(airport instanceof Airport).toBe(true)
  });


  describe("Landing the plane", function() {
    it('should allow a plane to land', function() {airport.land(plane);
      expect(airport.planes).toContain(plane);
    });
  });

  describe('A plane taking off', function() {
    it('should allow a plane to take off', function() {
      airport.land(plane);
      airport.takeOff(plane);
      expect(airport.planes).toBeLessThan(40);
    });
  });

  describe('Full capacity', function() {
    beforeEach(function(){
      airport.planes.length = 40
      it('should not allow a plane to land if full', function () {
        expect(function () {airport.land(plane)}).toThrow("Airport is full, you cannot land")}

      )
    });
  });

  describe('Weather conditions stormy', function() {
    beforeEach(function(){
      weather = new Weather ()
      weather.isStormy = true;

      it('will not permit plane to land during dangerous stormy weather',
      function()
      {expect(function() {airport.land(plane)}).toThrow("You cannot land, dangerous stormy weather");
    });

    it('will not permit a plane to take off during dangerous stormy weather', function() {
      airport.land(plane);
      if (airport.weather.isStormy() === true)
      expect(function() {airport.takeOff(plane);} ).toThrow("You cannot take off, dangerous stormy weather");
    });
  });
});
})
