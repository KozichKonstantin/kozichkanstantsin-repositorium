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
// for(i=0; i<8; i++){
//     let picture = data[i]['img']
// }
// for(i=1; i< data[0]['count']; i++){
//     picture = picture + '/' + number;
// }
var number = 1;
var picture = data[0]['img'] + '/' + number
const slider = document.querySelector('.image barbarian'),
    leftButton = document.querySelector( '.slideButton_case_left'),
    rightButton = document.querySelector('.slideButton_case_right')
leftButton.addEventListener('click', function prevSlide() {
    var slider = document.getElementsByClassName("image barbarian")[0]
    number = number -1;
    if(number>= 1){
        pictureFill = picture.slice(0, -1);
        pictureFill = 'url' + '(' + pictureFill + number + '.jpg' + ')';
        slider.style.backgroundImage = pictureFill;
        console.log(pictureFill)
    }
    else{
        console.log('error')
        number++;
        console.log(number)
        console.log(pictureFill)
    }
})
rightButton.addEventListener('click', function nextSlide() {
    var slider = document.getElementsByClassName("image barbarian")[0]
    number = number + 1;
    if(number< data[0]['count']){
        pictureFill = picture.slice(0, -1);
        pictureFill = 'url' + '(' + pictureFill + number + '.jpg' + ')';
        slider.style.backgroundImage = pictureFill;
        console.log(pictureFill)
    }
    else{
        console.log('error')
        number--;
        console.log(number)
        console.log(pictureFill)
    }
})
