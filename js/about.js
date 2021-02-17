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