(function() {

  describe('fibonacci calculator', function() {
    Given(function() {
      affix('input#index[value=4]');
      affix('form button.calculate');
      fib.setup();
      return spyOn($, 'post');
    });
    When(function() {
      return $('.calculate').trigger('click');
    });
    Then(function() {
      return expect($.post).toHaveBeenCalledWith('/fibonacci', {
        index: 4
      }, fib.fibResponse);
    });
    Given(function() {
      return affix('span.result');
    });
    When(function() {
      return fib.fibResponse(13);
    });
    return Then(function() {
      return expect($(".result").text()).toEqual('13');
    });
  });

}).call(this);
