'use strict'

describe ('Airport', function() {

  let airport;

  beforeEach(function() {
    airport = new Airport();
  });

  it('is an instance of an Airport', function () {
  expect(airport instanceof Airport).toBe(true)}

  // it('Can land a plane', function() {
  //   expect(airport.isLanded()).toBe(true);
  // });
);
})
