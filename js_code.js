// let name = document.getElementById('barbarian');
// function consicFunction(){
//     let name = 'nameOfCard';
// }
// console.log(name)
//  $(document).ready(function(){
//     $(window).bind("resize", resizeWindow);
//     function resizeWindow(e){
//       var newWindowWidth = $(window).width();

//       // Если ширина меньше 600 px, используется таблица стилей для мобильного
//       if(newWindowWidth < 1100){
//         $("link[rel=stylesheet]").attr({href : "css_verst_mobile.css"});
//       } else if(newWindowWidth > 1100){
//         // Если ширина больше 600 px, используется таблица стилей для десктопа
//         $("link[rel=stylesheet]").attr({href : "css_verst.css"});
//       }
//     }
//   });
const slider = document.querySelector('.image barbarian'),
    leftButton = document.querySelectorAll( '.slideButton_case_left'),
    rightButton = document.querySelectorAll('.slideButton_case_right')
leftButton.addEventListener('click', function prevSlide() {
    document.getElementsByClassName('.image').style.backgroundColor = black;
})
//hell