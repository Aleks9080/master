$('.row_slider').slick({
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
   
    dots:true,
    autoplaySpeed: 2000,
    nextArrow: '<img src="../img/left-next.svg" alt="" class="slick-prev slick-arrow">',
    prevArrow: '<img src="../img/rigth-next.svg" alt="" class="slick-next slick-arrow" >',
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          arrow: false,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          arrow: false,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
          arrow: false,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

              