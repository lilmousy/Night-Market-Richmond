var currentItem = 0;
var clicked = false;

$(document).ready(function(){
  
  $('nav, ul').addClass('entrance');
  
  setTimeout(function(){
    $('ul a, .dot').addClass('animate');
    $('.track').fadeIn();
  }, 1500);
  
  $('.link').on('click', function(){
    
    if(!clicked){
      clicked = true;
      var el = $(this);
      var index = $(el).index();

      navigate(el, index,  currentItem);

      currentItem = index;

      $('.link, .link .dot').removeClass('in');

      $(el).addClass('in').find('.dot').addClass('in');
    }
  });

});


function navigate(el, index, currentNav){
  var oldPos = $('.link').eq(currentNav).offset();
  var newPos = $('.link').eq(index).offset();
  
  if(index > currentNav){
     
    var velocity = (index - currentNav);
    var speed = ((velocity * 0.5) - (velocity-1)*0.3);
    var calc = (newPos.top - oldPos.top) + 15;
    
    TweenMax.to($('.track'), speed, {height: calc, ease:Expo.easeOut});
    
    setTimeout(function(){
      TweenMax.to($('.track'), speed, {height: 15, top: newPos.top - 65, ease:Expo.easeOut});
    }, (speed * 1000));
    
  }else{
    var bottomPos = $('ul').height() - (oldPos.top + 29);
    var newBottomPos = $('ul').height() - (newPos.top);

    var velocity = (currentNav - index);
    var speed = ((velocity * 0.5) - (velocity-1)*0.3);
    
    $('.track').css({'top' :'auto', 'bottom': bottomPos});

    TweenMax.to($('.track'), speed, {height: ((oldPos.top - newPos.top) + 14), ease:Expo.easeOut});

    setTimeout(function(){
      TweenMax.to($('.track'), speed, {height: 15, bottom: newBottomPos, ease:Expo.easeOut});
      $(el).addClass('in').find('.dot').addClass('in');

      var newPos = $('.link').eq(index).position();
      $('.track').css({'top': newPos.top + 5, 'bottom': 'auto'});

    }, (speed * 1000));
  }
  
  setTimeout(function(){
    clicked = false;
  }, 1200);
}