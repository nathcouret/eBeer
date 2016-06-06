$(document).ready(function(){
  $('input.autocomplete').each( function() {
    var $input = $(this);
    // Set-up the autocomplete widget.
    $(this).autocomplete({
        minLength: 3,
        source : function(req, resp) {
          $.getJSON("@{Beers.getBeersByName()}?term=" + req.term , req, function(data) {
            var suggestions = [];
            $.each(data, function(i, val) {
              var obj = {};
              obj.label = val.name;
              obj.id = val.id;
              suggestions.push(obj);
            });
            resp(suggestions);
          });
        }
      });
  });
});