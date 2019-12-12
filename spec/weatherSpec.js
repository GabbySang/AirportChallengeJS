'use strict';

describe('Weather',function(){
  var weather;

  beforeEach(function(){
    weather = new Weather();
  });


  it('will be stormy when conditions are bad', function(){
    if (Math.random > 0.2){ expect(function(){weather.isStormy}).toBe(true) }

  });

  it('will not be stormy when conditions are good', function(){
    if (Math.random < 0.2){ expect(function(){weather.isStormy}).toBe(false) }
})
});
