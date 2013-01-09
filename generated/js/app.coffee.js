(function() {
  var root,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  root = this;

  root.app || (root.app = {});

  app.View = (function(_super) {

    __extends(View, _super);

    function View() {
      return View.__super__.constructor.apply(this, arguments);
    }

    View.prototype.template = JST["app/templates/fibonacci.us"];

    View.prototype.render = function() {
      $('#content').html(this.template());
      return this;
    };

    return View;

  })(Backbone.View);

  $(function() {
    return new app.View().render();
  });

}).call(this);

(function() {

  $(document).ready(function() {
    window.fib = {
      setup: function() {
        return $('.calculate').on('click', function(e) {
          var i;
          e.preventDefault();
          i = parseInt($("#index").val(), 10);
          return $.post('/fibonacci', {
            index: i
          }, fib.fibResponse);
        });
      },
      fibResponse: function(data) {
        return $(".result").text(data);
      }
    };
    return fib.setup();
  });

}).call(this);
