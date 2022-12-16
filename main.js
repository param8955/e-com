$('.home-slider .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    animateIn: 'fadeIn',
    autoplay:true,
    nav:true,
    dots:false,
    // mouseDrag: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('.sell-slider .owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    autoplay:true,
    slideTransition: 'ease-in-out',
   autoplayTimeout:4000,
   autoplaySpeed:2000,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:5
        }
    }
});

$('.Categories .owl-carousel').owlCarousel({
    loop:true,
    margin:25,
    animateIn: 'fadeIn',
    autoplay:true,
    nav:true,
    dots:false,
    // mouseDrag: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
$('.arivel .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    animateIn: 'fadeIn',
    autoplay:true,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});
$('.deal .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    // autoplay:true,
    slideTransition: 'ease-in-out',
   autoplayTimeout:4000,
   autoplaySpeed:2000,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
$('.sponcers .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    autoplay:true,
    slideTransition: 'ease-in-out',
   autoplayTimeout:4000,
   autoplaySpeed:2000,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});



// function countDown(){
//     let today = new Date();
//     let vDate = new Date(today.getFullYear(), 11, 16);
//     const t = vDate.getTime() - today.getTime()

//     const day = Math.floor(t / (1000*60*60*24));
//     const hour = Math.floor(((t) % (1000*60*60*24)) / (1000*60*60));
//     const minute = Math.floor(((t) % (1000*60*60)) / (1000*60));
//     const sec = Math.floor(((t) % (1000*60)) / (1000));
    
//     document.getElementById('year').innerText = today.getFullYear()
//     document.getElementById('day').innerText = day
//     document.getElementById('hour').innerText = hour
//     document.getElementById('min').innerText = minute
//     document.getElementById('sec').innerText = sec

//     if(t <= 0 ){
//         clearTimeout(counter)
//         document.querySelector('timers').innerText = 'Expired'
//     }
// }

// setInterval(countDown ,1000)































$(document).ready(function () {
    $('.countdown-box').each(function () {
        var element = '.countdown-product-' + $(this).data('id');
        var date = $(this).data('date');
        countdown(date, element);
    })
});

function countdown(date, element) {
    var countDownDate = new Date(date).getTime();

    // Get fixed todays date and time
    var now = new Date().getTime();

    // Find the fixed distance between now an the count down date
    var distance = countDownDate - now;

    if(distance && distance > 0) {
        var x = setInterval(function() {
            // Get todays date and time
            var nowRealTime = new Date().getTime();

            // Find the distance between now an the count down date
            var distanceRealTime = countDownDate - nowRealTime;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distanceRealTime / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distanceRealTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distanceRealTime % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distanceRealTime % (1000 * 60)) / 1000);

            $(element + ' .day').html(days);
            $(element + ' .hour').html(hours);
            $(element + ' .min').html(minutes);
            $(element + ' .sec').html(seconds);

            if (distance < 0) {
                $(element).html();
            }
        }, 1000);
    } else {
        $(element).html('');
    }
}

      $("#back-top").hide();
      $(function () {
        $(window).scroll(function () {
          if ($(this).scrollTop() > $('body').height()/20) {
            $('#back-top').fadeIn();
          } else {
            $('#back-top').fadeOut();
          }
        });
        $('#back-top').click(function () {
          $('body,html').animate({scrollTop: 0}, 800);
          return false;
        });
      });
    