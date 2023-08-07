// committed_part_video-----------------------------------------------------------
new VenoBox({
    selector: '.my-video-links',
});
// committed_part_video-----------------------------------------------------------


// Event_part_slider--------------------------------------------------------------
$('.event_img_slider').slick({
  slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode:true,
    centerPadding:0,
    asNavFor:'.event_tx_slider',
  responsive: [
    {
      breakpoint: 767.88,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.event_tx_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:'<i class="fa-solid fa-angle-left left"></i>',
    nextArrow:'<i class="fa-solid fa-angle-right right"></i>',
    asNavFor:'.event_img_slider',
  });
// Event_part_slider--------------------------------------------------------------


// Event_part_CountDown-----------------------------------------------------------

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "days " + hours + "hours "
  + minutes + "minutes " + seconds + "seconds ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
// Event_part_CountDown-----------------------------------------------------------


// Review_part_slider-------------------------------------------------------------
$('.review_slider').slick({
  arrows: true,
    prevArrow:'<div><img class=prev src=images/prevbtn.png></div>',
    nextArrow:'<div><img class=next src=images/nextbtn.png></div>',
  responsive: [
    {
      breakpoint: 991.68,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// Review_part_slider-------------------------------------------------------------



// Counter_part_slider------------------------------------------------------------
$('.counterup').counterUp({
    delay: 10,
    time: 1000
});
// Counter_part_slider------------------------------------------------------------



// Gallery_part_slider------------------------------------------------------------
new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});
// Gallery_part_slider------------------------------------------------------------
