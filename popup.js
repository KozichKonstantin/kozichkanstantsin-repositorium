const btn_activ = document.querySelectorAll(".reedFull") ;


for(let i =0; i<btn_activ.length; i++){
    btn_activ[i].addEventListener('click', function() {
        const number = btn_activ[i].parentNode.parentNode.className.toString().slice(10 , btn_activ[i].length);
        const card = localStorage.getItem(`card${number}`)
        const gg = document.querySelector(".classname"); //dodelat jsonparse
        gg.value = card[2];
        console.log(card[1]);

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
