const btn_activ = document.querySelectorAll(".reedFull") ;


for(let i =0; i<btn_activ.length; i++){
    btn_activ[i].addEventListener('click', function() {
        const number = btn_activ[i].parentNode.parentNode.className.toString().slice(10 , btn_activ[i].length);
        const card =  JSON.parse(localStorage.getItem(`card${number}`));
        const gg = document.querySelector(".classnameInput"); //dodelat jsonparse
        gg.value = card[2]["class"];
        for(let j=0; j<6; j++){
            document.getElementsByClassName('plusMinus')[j].innerHTML = card[0].valued[j];
            document.getElementsByClassName('stats')[j].innerHTML = Math.floor((card[0].valued[j]-10) /2);
        }



        document.querySelector(".none").classList.add("background")
        document.querySelector(".shadow_pop").classList.toggle("_active")
        document.querySelector("body").classList.toggle("_active")
    })
}

document.querySelector(".close").addEventListener('click', function() {
    document.querySelector(".none").classList.remove("background");
    document.querySelector(".shadow_pop").classList.remove("_active");
    document.querySelector("body").classList.remove('_active');

})
document.querySelector(".shadow_pop").addEventListener('click', function() {
    document.querySelector(".none").classList.remove("background");
    document.querySelector(".shadow_pop").classList.remove("_active");
    document.querySelector("body").classList.remove('_active');
})


function addHover() {
    document.querySelector(".close").style.border = "2px solid burlywood";
    document.querySelector(".close").style.backgroundColor = "burlywood";
 }
 
 function removeHover() {
    document.querySelector(".close").style.border = "2px solid burlywood";
    document.querySelector(".close").style.backgroundColor ="transparent";
 }
 
 document.querySelector(".close").addEventListener('mouseenter',addHover);
 document.querySelector(".none").addEventListener('mouseenter',removeHover);
 document.querySelector(".shadow_pop").addEventListener('mouseenter', addHover);

let nums = 0;
const input_check = document.querySelectorAll(".input_chek")
for(let i =0; i<input_check.length;i++){
input_check[i].addEventListener('click', function() {
    // if(input_check[i].checked == true){
    //    nums++
    //    console.log(nums)
    // }
    // else{   
    //     nums--
    //     console.log(nums)
    // }
    var checkboxes = document.querySelectorAll('.input_chek:checked');
    for (var input of checkboxes) {
        console.log("hell")
    }
  })
}
for(let i =0; i<input_check.length; i++){
    input_check[i].addEventListener('change', disable);
}
function disable(){
    for(let i =0; i<input_check.length; i++){
        input_check[i].addEventListener('change', disable_all);
    }
}

function disable_all(){
    for(let i=0; i<input_check.length; i++){
        input_check[i].disabled = input_check[i].name !=this.name;
        for(let j =0; j<input_check.length; j++){
            input_check[j].addEventListener('click', anable_all);
        }
        
    }
}
function anable_all(){
    for(let i=0; i<input_check.length; i++){
        input_check[i].removeAttribute(disabled);
    }
}