// $('.slide').slick({
//     autoplay: true,
//     arrows: false,
//     dots: false,
//     autoplaySpeed: 4000,
//     slidesToShow: 1,
//     infinite: true,
//     speed: 1000,
//     fade: true,
//     cssEase: 'linear',
// });

$('.slide').slick({
    infinite: true,
    arrows: true,
    autoplay: false,
    speed: 1000,
    centerMode: true,
    centerPadding: '400px',
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 1400,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            infinite: true,
            arrows: true,
            autoplay: true,
            speed: 1000,
            centerMode: true,
            centerPadding: '100px',
            autoplaySpeed: 4000,
        }
    },{
      breakpoint: 640,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          infinite: true,
          arrows: false,
          autoplay: true,
          speed: 1000,
          centerMode: false,
          centerPadding: '0px',
          autoplaySpeed: 4000,
      }
  }, ]
});


function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.031 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 8,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;