import {data} from './data.js';



window.addEventListener('load', () => {
  let inputs = document.getElementsByClassName('quantity');
  for(let i = 0; i<inputs.length; i++ )
  inputs[i].value = Math.floor((Math.random() * 20 )+ 1);
});



  let generates = document.getElementsByClassName('generate');
    for(let k = 0; k < generates.length; k++){
      generates[k].addEventListener('click', function() {
        generate(k)

})}





  let bt_minus = document.getElementsByClassName('bt_minus');
    for(let j = 0; j<bt_minus.length; j++){
      bt_minus[j].addEventListener('click', function() {
        if(bt_minus[j].nextElementSibling.value <= 1){
          bt_minus[j].nextElementSibling.value = 1;
        }
        else{
          bt_minus[j].nextElementSibling.value = bt_minus[j].nextElementSibling.value - 1 ;
          if(bt_minus[j].nextElementSibling.value >= 20){
            bt_minus[j].nextElementSibling.value = 20;
          }
        }
    })
  }

  let bt_plus = document.getElementsByClassName('bt_plus');
    for(let l= 0; l<bt_plus.length; l++){
      bt_plus[l].addEventListener('click', function() {
        if(bt_plus[l].previousElementSibling.value >= 20){
          bt_plus[l].previousElementSibling.value = 20;
        }
        else{
          bt_plus[l].previousElementSibling.value = bt_plus[l].previousElementSibling.value - (-1) ;
          if(bt_plus[l].previousElementSibling.value <= 1){
            bt_plus[l].previousElementSibling.value = 1;
          }
        }
    })
  }

  function generate (k){
    const generate = generates[k];
    for (let i = 0; i < 6; i++) {
    let genSrav = generate.parentNode.className.toString().slice(14, (generate.length));
    if (genSrav == (`${data[k]['name']}Spec`)){
      let input =  document.querySelectorAll(('.'+ genSrav));
      input[i].value = Math.floor((Math.random() * 20 )+ 1);}
  }
}