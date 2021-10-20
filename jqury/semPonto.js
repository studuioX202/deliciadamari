jQuery(function($) {
    $(document).on('keypress', 'input.only-number', function(e) {
      var $this = $(this);
      var key = (window.event)?event.keyCode:e.which;
      var dataAcceptDot = $this.data('accept-dot');
      var dataAcceptComma = $this.data('accept-comma');
      var acceptDot = (typeof dataAcceptDot !== 'undefined' && (dataAcceptDot == true || dataAcceptDot == 1)?true:false);
      var acceptComma = (typeof dataAcceptComma !== 'undefined' && (dataAcceptComma == true || dataAcceptComma == 1)?true:false);
  
          if((key > 47 && key < 58)
        || (key == 46 && acceptDot)
        || (key == 44 && acceptComma)) {
          return true;
        } else {
               return (key == 8 || key == 0)?true:false;
           }
    });
  });