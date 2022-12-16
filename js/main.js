let ele = document.getElementById('mainheader');
$(window).scroll(function(){
 if($(this).scrollTop() > 120){
 ele.classList.add('bg-red');
  }
else{
    ele.classList.remove('bg-red');
}



});

// $(window).scroll(function(){
//     if ($(this).scrollTop() > 120) {
//         $('.header').addClass('fixed');
//     } else {
//         $('.header').removeClass('fixed');
//     }
// });

