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
const base = [
    {
      "name": "barbarian",
      "img": "data/grid_cards/barbarian",
      "count": "5",
      "currentPicture": 1
    },
    {
      "name": "bard",
      "img": "data/grid_cards/bard",
      "count": "4",
      "currentPicture": 1
    },
    {
      "name": "druid",
      "img": "data/grid_cards/druid",
      "count": "5",
      "currentPicture": 1
    },
    {
      "name": "monach",
      "img": "data/grid_cards/monach",
      "count": "5",
      "currentPicture": 1
    },
    {
      "name": "paladin",
      "img": "data/grid_cards/paladin",
      "count": "6",
      "currentPicture": 1
    },
    {
      "name": "spy",
      "img": "data/grid_cards/spy",
      "count": "5",
      "currentPicture": 1
    },
    {
      "name": "witch",
      "img": "data/grid_cards/witch",
      "count": "5",
      "currentPicture": 1
    },
    {
      "name": "wizard",
      "img": "data/grid_cards/wizard",
      "count": "6",
      "currentPicture": 1
    }
  ]
// for(i=0; i<8; i++){
//     let picture = base[i]['img']
// }
// for(i=1; i< base[0]['count']; i++){
//     picture = picture + '/' + number;
// }

let leftButtonsMassiv = document.getElementsByClassName('slideButton_case_left')
let rightButtonsMassiv = document.getElementsByClassName('slideButton_case_right')
for(let i=0; i < leftButtonsMassiv.length; i++){
  var cardFirstImage = document.getElementsByClassName("image " + base[i]['name'])[0]
  cardFirstImage.style.backgroundImage = 'url' + '(' + base[i]['img'] + '/' + base[i]['currentPicture'] + '.jpg' + ')';
  console.log(i)
}
console.log(leftButtonsMassiv)

for(let i=0; i<leftButtonsMassiv.length; i++){
  leftButtonsMassiv[i].addEventListener('click', function() {
    const clickedLeftButton = leftButtonsMassiv[i];
    let buttonLeftSrav = clickedLeftButton.parentNode.className.toString().slice(6, (clickedLeftButton.length));
    for(let j=0; j < leftButtonsMassiv.length; j++){
      if(buttonLeftSrav == base[j]['name']){
        var picture = base[j]['img'] + '/' + base[j]['currentPicture'];
        base[j]['currentPicture'] = base[j]['currentPicture'] -1;
        if(base[j]['currentPicture']>= 1){
            pictureFill = picture.slice(0, -1);
            pictureFill = 'url' + '(' + pictureFill + base[j]['currentPicture'] + '.jpg' + ')';
            var slider = document.getElementsByClassName("image " + buttonLeftSrav)[0];
            slider.style.backgroundImage = pictureFill;
            console.log(pictureFill);
        }
        else{
          console.log('error2')
          base[j]['currentPicture']++;
          console.log(pictureFill)
        }
      }
      else{
        console.log('error1')
      }
    }
  })
}
for(let i=0; i<rightButtonsMassiv.length; i++){
  rightButtonsMassiv[i].addEventListener('click', function() {
    const clickedRightButton = rightButtonsMassiv[i];
    let buttonRightSrav = clickedRightButton.parentNode.className.toString().slice(6, (clickedRightButton.length));
    for(let j=0; j < rightButtonsMassiv.length; j++){
      if(buttonRightSrav == base[j]['name']){
        var picture = base[j]['img'] + '/' + base[j]['currentPicture'];
        base[j]['currentPicture'] = base[j]['currentPicture'] +1;
        if(base[j]['currentPicture'] < base[j]['count']){
            pictureFill = picture.slice(0, -1);
            pictureFill = 'url' + '(' + pictureFill + base[j]['currentPicture'] + '.jpg' + ')';
            var slider = document.getElementsByClassName("image " + buttonRightSrav)[0];
            slider.style.backgroundImage = pictureFill;
            console.log(pictureFill);
        }
        else{
          console.log('error2')
          base[j]['currentPicture']--;
          console.log(pictureFill)
        }
      }
      else{
        console.log('error1')
      }
    }
  })
}