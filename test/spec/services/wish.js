'use strict';

describe('Service: Wish', function () {

  // load the service's module
  beforeEach(module('wihaApp'));

  // instantiate service
  var Wish;
  beforeEach(inject(function (_Wish_) {
    Wish = _Wish_;
  }));

  it('should do something', function () {
    expect(!!Wish).toBe(true);
  });

});
