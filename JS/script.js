
window.onload = function() {
  const loader = document.getElementById('loading-wrapper');
  loader.classList.add('completed');
}

var
  cursor = $(".cursor"),
  follower = $(".follower"),
  cWidth = 8,
  fWidth = 40,
  delay = 10,
  mouseX = 0,
  mouseY = 0,
  posX = 0,
  posY = 0;

  TweenMax.to({}, .001, {
    repeat: -1,
    onRepeat: function() {
      posX += (mouseX - posX) / delay;
      posY += (mouseY - posY) / delay;
      
      TweenMax.set(follower, {
          css: {
            left: posX - (fWidth / 2),
            top: posY - (fWidth / 2)
          }
      });
      
      TweenMax.set(cursor, {
          css: {
            left: mouseX - (cWidth / 2),
            top: mouseY - (cWidth / 2)
          }
      });
    }
  });

  $(document).on("mousemove", function(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
  });
  
  $("a").on({
    "mouseenter": function() {
      cursor.addClass("is-active");
      follower.addClass("is-active");
    },
    "mouseleave": function() {
      cursor.removeClass("is-active");
      follower.removeClass("is-active");
    }
  });

  $(window).scroll(function(){
    //Header
    if($(window).scrollTop()>= 100){
       $('.header').addClass('fixed-top');
    }
    else {
      $('.header').removeClass('fixed-top');
    }
  });
