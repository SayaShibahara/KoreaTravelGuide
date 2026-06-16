// ハンバーガーメニュー
let menuOpen = false;

$('#hamburger').click(function () {
  if (!menuOpen) {
    $('#line1').addClass('line_1');
    $('#line2').addClass('line_2');
    $('#line3').addClass('line_3');
    $('nav').addClass('active');

    menuOpen = true;
  } else {
    $('#line1').removeClass('line_1');
    $('#line2').removeClass('line_2');
    $('#line3').removeClass('line_3');
    $('nav').removeClass('active');

    menuOpen = false;
  }
});

$('nav a').click(function () {
  $('#line1').removeClass('line_1');
  $('#line2').removeClass('line_2');
  $('#line3').removeClass('line_3');
  $('nav').removeClass('active');

  menuOpen = false;
});

// メインビジュアルのスライダー
$(".slide-items").slick({
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  dots: true,
  infinite: true,
  fade: true,
  speed: 1000
});

// FOODのスライダー
$(".food-slide-items").slick({
  autoplay: true,
  autoplaySpeed: 2500,
  arrows: true,
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 800
});
