(function($){
  $(window).on('scroll resize load',function(){
    var scrollTop = $(this).scrollTop();
    $('.gradient').each(function(index){
      var height = $(window).height()*2;
      var scrollPer = scrollTop/height;
      // $(this).fadeTo(0,scrollPer);
      var a = ((scrollTop-(height*index))+height)/height;
      $(this).fadeTo(0,a);
    });
    $('body').height(function(){
       return ($(window).height() * $('.gradient').length)*2
    });
  })
})(jQuery);