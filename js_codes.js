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

  const input  = document.querySelector('input');
   const button = document.querySelector('#button');
const generate = document.querySelector('.generate');

console.log('Привет от JavaScript!')
  
change = function () {
 
   
   button.addEventListener('click', function() {
   
   
 
}
   )
}



generate.addEventListener('click', function() {
input.value = +input.value + 1;

console.log(input.value);
})




 




  
  const nextArrow = document.querySelector('.btn_2');
  var slide = 0,
     slides = document.querySelectorAll('.firts_slider'),
     numSlides = slides.length;
  
  let dataA = [[], [], []];
  let random = Math.floor(data.length * Math.random());
  for (let i = 0; i < 3; i++) {
     for (let k = 0; k < 3; k++) {
        random = Math.floor(data.length * Math.random());
        if (i === 0) {
           while (dataA[i].indexOf(random) !== -1) {
              random = Math.floor(data.length * Math.random());
           }
        } else {
           while (dataA[i].indexOf(random) !== -1 || dataA[0].indexOf(random) !== -1) {
              random = Math.floor(data.length * Math.random());
           }
        }
        dataA[i].push(random)
     }
  }
  
  var itemToShow = Math.abs(slide % numSlides);
  
  //Functions!!
  let currentSlide = function () {
     itemToShow = Math.abs(slide % numSlides);
     [].forEach.call(slides, function (el) {
        el.classList.remove('Active')
     });
     slides[itemToShow].classList.add('Active');
  
     resetInterval();
  },
     next = function () {
        changeSlide('next', (itemToShow === 0) ? 2 : (itemToShow - 1))
        changeData((itemToShow === 2) ? 0 : (itemToShow + 1));
        slide++;
        currentSlide();
     },
     prev = function () {
        changeSlide('prev', (itemToShow === 2) ? 0 : (itemToShow + 1))
        changeData((itemToShow === 0) ? 2 : (itemToShow - 1));
        slide--;
        currentSlide(2);
     },
     changeSlide = function (direct, item) {
        if (direct === 'next') {
           for (let i = 0; i < 3; i++) {
              random = Math.floor(data.length * Math.random());
              while ((dataA[item].indexOf(random) !== -1) || dataA[item === 0 ? 2 : item - 1].indexOf(random) !== -1) {
                 random = Math.floor(data.length * Math.random());
              }
              dataA[item][i] = random;
           }
        }
        if (direct === 'prev') {
           for (let i = 0; i < 3; i++) {
              random = Math.floor(data.length * Math.random());
              while ((dataA[item].indexOf(random) !== -1) || dataA[item === 2 ? 0 : item + 1].indexOf(random) !== -1) {
                 random = Math.floor(data.length * Math.random());
              }
              dataA[item][i] = random;
           }
        }
     },
     changeData = function (itemChange) {
        slides[itemChange].querySelectorAll('.card_pets').forEach((item, index) => {
           item.querySelector('img').src = data[dataA[itemChange][index]].img;
           item.querySelector('p').innerHTML = data[dataA[itemChange][index]].name;
        })
     }
  
  
  //Buttons
  
  document.querySelector('#hello').addEventListener('click', function () {
     next();
  }, false);
  document.querySelector('#hello2').addEventListener('click', function () {
     prev();
  }, false);
  
  changeData(0)




const slider = document.querySelector('.image barbarian'),
    leftButton = document.querySelector( '.left'),
    rightButton = document.querySelector('.slideButton_case_right')
leftButton.addEventListener('click', function prevSlide() {
    document.getElementsByClassName('.image').;
})
