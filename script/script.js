$(document).ready(function(){
    $('.carousel__inner').slick({
        prevArrow:'<button type="button" class="slick-prev"><img src="icons/arrowL.png" alt=""</button>',
        nextArrow:'<button type="button" class="slick-next"><img src="icons/arrowR.png" alt=""></button>',
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                  infinite: true,
                  dots: true,
                  arrows: false,
                  dotsClass: "my-dots"
                }
            }
        ]

    });
  });