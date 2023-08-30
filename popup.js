const btn_activ = document.querySelectorAll(".reedFull") ;

for(let i =0; i<btn_activ.length; i++){
    btn_activ[i].addEventListener('click', function() {
        console.log("gg")
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

function addHover() {
   
    document.querySelector(".close").style.border = "2px solid burlywood";
    document.querySelector(".close").style.backgroundColor = "burlywood";
 }
 
 function removeHover() {
    document.querySelector(".close").style.border = "2px solid burlywood";
    document.querySelector(".close").style.backgroundColor ="transparent";
 }
 
 
 
 
 document.querySelector(".close").addEventListener('mouseenter',addHover);
 document.querySelector(".none").addEventListener('mouseenter',removeHover)
 document.querySelector(".shadow_pop").addEventListener('mouseleave', addHover);
//  document.querySelector(".shadow_pop").addEventListener('mouseenter',removeHover);

