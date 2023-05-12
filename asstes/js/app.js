

// offer js section start
$('#offer_intro').countdown('3060/10/10', function (event) {
    var $this = $(this).html(event.strftime(''
      + ' '
      + '<div><h3>%d</h3><p> Days </p></div> '
      + '<div><h3>%H</h3><p> Hour </p></div> '
      + '<div><h3>%M</h3><p> Minute </p></div> '
      + '<div><h3>%S</h3><p> Sec </p></div>'));
  });
  // offer js section end


// team slick js start
$('.team_slider').slick({
  slidesToShow: 4,
  autoplay:true,
  autoplaySpeed:2000,
  arrows:false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow:3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow:2,
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
      }
    },
  ]
});
// team slick js end
