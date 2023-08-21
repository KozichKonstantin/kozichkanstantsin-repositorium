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
const leftButton = document.querySelector( '.slideButton_case_left')
const rightButton = document.querySelector( '.slideButton_case_right')

leftButton.addEventListener('click', function prevSlide() {
    var slider = document.getElementsByClassName("image barbarian")[0]
    slider.style.backgroundImage = "url(https://s.mediasole.ru/images/724/724554/1.jpg)";
})
rightButton.addEventListener('click', function nextSlide() {
    var slider = document.getElementsByClassName("image barbarian")[0]
    slider.style.backgroundImage = "url(https://static.mk.ru/upload/iblock_mk/475/05/c5/96/DETAIL_PICTURE_732441_86611478.jpg)";
})
// url(https://s.mediasole.ru/images/724/724554/1.jpg)