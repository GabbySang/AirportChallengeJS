'use strict';

describe('Weather',function(){
  var weather;

  beforeEach(function(){
    weather = new Weather();
  });


  describe('Stormy weather', function(){
    beforeEach(function(){
      Math.random > 0.2;

      it('will be stormy when conditions are bad', function(){
        { expect(function(){weather.isStormy}).toBe(true) }

      });


      describe('Good weather', function(){
        beforeEach(function(){
          Math.random < 0.2;
          it('will not be stormy when conditions are good', function(){
            { expect(function(){weather.isStormy}).toBe(false) }
          })
        })
      })
    })
  })
});
