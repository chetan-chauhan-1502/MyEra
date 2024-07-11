/* For the common folder all the componet's will get this js only */

$(document).ready(function(){
    $('#purpose').on('change', function() {
      if ( this.value == '2')
      {
        $("#business").show();
      }
      else
      {
        $("#business").hide();
      }
    });
});