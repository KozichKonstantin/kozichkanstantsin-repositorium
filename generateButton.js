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
    for(let k = 0; k < generates.length; k++){
      generates[k].addEventListener('click', function() {
        const generate = generates[k];
    for (let i = 0; i < 6; i++) {
      genSrav = generate.parentNode.className.toString().slice(14, (generate.length));
    if (genSrav == "barbarianSpec" || genSrav == "wizardSpec" || genSrav == "witchSpec" || genSrav == "spySpec" || genSrav == "paladinSpec" || genSrav == "monachSpec" || genSrav == "druidSpec" || genSrav == "bardSpec"){
      let input =  document.querySelectorAll(('.'+ genSrav));
      input[i].value = Math.floor((Math.random() * 20 )+ 1);
    }
  }
})
}