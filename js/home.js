$(document).ready(function(){
  let owl = $('.owl-carousel');
  owl.owlCarousel({

  loop:true,
  margin:15,
  autoplay:true,
  autoplayTimeout:5000,
  autoplayHoverPause:true,
  responsive:{
    356:{
        items:1,
        nav:false,
        loop:true
    },
    500:{
        items:2,
        nav:false,
        loop:true
    },
    1027:{
        items:4,
        nav:false,
        loop:true
    }
}
    });

        let btn_down_scroll = document.getElementById('btn_down_scroll');
        let about_top = document.getElementById('about').offsetTop;
        btn_down_scroll.addEventListener('click',function(){
            $('html , body').animate({scrollTop:about_top})
        })


        
  });///



/*-------- */
function resizewindow(widthscreen) {
    if (widthscreen.matches) 
    { 
      document.getElementById('demo').style.height = "1164px";

    } else {
        document.getElementById('demo').style.height = "588px";
    }
  }
  
  let widthscreen = window.matchMedia("(max-width: 768px)")
  resizewindow(widthscreen)

  widthscreen.addListener(resizewindow)
/*------------*/
  let typed = new Typed('.typed', {
    strings: ['Anything', 'Everything'],
    loop: true,
    backSpeed: 60,
    typeSpeed: 60,

  });

/*-------------------------*/

  /*---------------------*/
