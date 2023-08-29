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

import {data} from './data.js';

// if(data["currentPicture"] =1){
//     document.getElementsByClassName('slideButton_case_left')[i].classList.add("hiden");
// }
// if(data["currentPicture"] = data["count"]){
//   for(let i=0; i < data.length; i++){
//     document.getElementsByClassName('slideButton_case_right')[i].classList.add("hiden");
//   }
// }

let leftButtonsMassiv = document.getElementsByClassName('slideButton_case_left')
let rightButtonsMassiv = document.getElementsByClassName('slideButton_case_right')
for(let i=0; i < leftButtonsMassiv.length; i++){
  var cardFirstImage = document.getElementsByClassName("frame " + data[i]['name'])[0]
  cardFirstImage.src = data[i]['img'] + '/' + data[i]['currentPicture'] + '.jpg';
}

for(let i=0; i<leftButtonsMassiv.length; i++){
  leftButtonsMassiv[i].addEventListener('click', function() {
    const clickedLeftButton = leftButtonsMassiv[i];
    let buttonLeftSrav = clickedLeftButton.parentNode.className.toString().slice(6, (clickedLeftButton.length));
    for(let j=0; j < leftButtonsMassiv.length; j++){
      if(buttonLeftSrav == data[j]['name']){
        var picture = data[j]['img'] + '/' + data[j]['currentPicture'];
        data[j]['currentPicture'] = data[j]['currentPicture'] -1;
        if(data[j]['currentPicture']>= 1){
          let  pictureFill = picture.slice(0, -1);
            pictureFill = pictureFill + data[j]['currentPicture'] + '.jpg' ;
            var slider = document.getElementsByClassName("frame " + buttonLeftSrav)[0];
            slider.src = pictureFill;
        }
        else{
          data[j]['currentPicture']++;
        }
      }
      else{
      }
    }
    if(data[i].currentPicture == 1){
      leftButtonsMassiv[i].classList.add("hiden");
    }else{
      console.log("ya ne eby")
      rightButtonsMassiv[i].classList.remove("hiden")
    }
  })
  
}


for(let i=0; i<rightButtonsMassiv.length; i++){
  rightButtonsMassiv[i].addEventListener('click', function() {
    const clickedRightButton = rightButtonsMassiv[i];
    document.getElementsByClassName('frame')[i].classList.add('inAnimation');
    let buttonRightSrav = clickedRightButton.parentNode.className.toString().slice(6, (clickedRightButton.length));
    for(let j=0; j < rightButtonsMassiv.length; j++){
      if(buttonRightSrav == data[j]['name']){
        var picture = data[j]['img'] + '/' + data[j]['currentPicture'];
        data[j]['currentPicture'] = data[j]['currentPicture'] +1;
        if(data[j]['currentPicture'] < data[j]['count']){
           let pictureFill = picture.slice(0, -1);
            pictureFill = pictureFill + data[j]['currentPicture'] + '.jpg' ;
            var slider = document.getElementsByClassName("frame " + buttonRightSrav)[0];
            slider.src = pictureFill;
        }
        else{
          data[j]['currentPicture']--;
        }
      }
    }
    if(data[i].currentPicture + 1 == data[i]["count"]){
      rightButtonsMassiv[i].classList.add("hiden");
    }else{
      console.log("ya ne eby x2")
      leftButtonsMassiv[i].classList.remove("hiden")
    }
    // document.getElementsByClassName('frame')[i].classList.remove('inAnimation');
  })
}
for(let i=0; i<leftButtonsMassiv.length; i++){
  leftButtonsMassiv[i].addEventListener('click', function() {
    document.getElementsByClassName('frame')[i].classList.add('inAnimation');
    setTimeout( function (){
    document.getElementsByClassName('frame')[i].classList.remove('inAnimation');}, 1000)
  }
  )
  
}
for(let i=0; i<rightButtonsMassiv.length; i++){
  rightButtonsMassiv[i].addEventListener('click', function() {
    document.getElementsByClassName('frame')[i].classList.add('inAnimation');
    setTimeout( function (){
    document.getElementsByClassName('frame')[i].classList.remove('inAnimation');}, 1000)
  }
  )
  
}
