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



  let generates = document.getElementsByClassName('generate');
    for(let k = 0; k<generates.length; k++){
      generates[k].addEventListener('click', function() {
        const generate = generates[k];
    for (let i = 0; i < 6; i++) {
      gensrav = generate.parentNode.className.toString().slice(14, (generate.length));
    if (gensrav == "barbarianSpec" || gensrav == "wizardSpec" || gensrav == "witchSpec" || gensrav == "spySpec" || gensrav == "paladinSpec" || gensrav == "monachSpec" || gensrav == "druidSpec" || gensrav == "bardSpec"){
      let input =  document.querySelectorAll(('.'+ gensrav));
      input[i].value = Math.floor((Math.random() * 20 )+ 1);
    }
  }
})
}

let bt_minus = document.getElementsByClassName('bt_minus');
    for(let j = 0; j<bt_minus.length; j++){
      bt_minus[j].addEventListener('click', function() {
        if(bt_minus[j].nextElementSibling.value == 1){
        }
        else{
          bt_minus[j].nextElementSibling.value = bt_minus[j].nextElementSibling.value - 1 ;
        }
    })
  }

  let bt_plus = document.getElementsByClassName('bt_plus');
    for(let l= 0; l<bt_plus.length; l++){
      bt_plus[l].addEventListener('click', function() {
        if(bt_plus[l].previousElementSibling.value == 20){
        }
        else{
          bt_plus[l].previousElementSibling.value = bt_plus[l].previousElementSibling.value - (-1) ;
        }
    })
  }