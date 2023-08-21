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
const data = [
    {
      "name": "barbarian",
      "img": "data/grid_cards/barbarian",
      "count": "5"
    },
    {
      "name": "bard",
      "img": "data/grid_cards/bard",
      "count": "4"
    },
    {
      "name": "druid",
      "img": "data/grid_cards/druid",
      "count": "5"
    },
    {
      "name": "monach",
      "img": "data/grid_cards/monach",
      "count": "5"
    },
    {
      "name": "paladin",
      "img": "data/grid_cards/paladin",
      "count": "6"
    },
    {
      "name": "spy",
      "img": "data/grid_cards/spy",
      "count": "5"
    },
    {
      "name": "witch",
      "img": "data/grid_cards/witch",
      "count": "5"
    },
    {
      "name": "wizard",
      "img": "data/grid_cards/wizard",
      "count": "6"
    }
  ]

const slider = document.querySelector('.image barbarian'),
    leftButton = document.querySelector( '.slideButton_case_left'),
    rightButton = document.querySelector('.slideButton_case_right')
leftButton.addEventListener('click', function prevSlide() {
    var slider = document.getElementsByClassName("image barbarian")[0]
    slider.style.backgroundImage = "url(https://s.mediasole.ru/images/724/724554/1.jpg)";
})
rightButton.addEventListener('click', function nextSlide() {
    var slider = document.getElementsByClassName("image barbarian")[0]
    slider.style.backgroundImage = "url(https://static.mk.ru/upload/iblock_mk/475/05/c5/96/DETAIL_PICTURE_732441_86611478.jpg)";
})