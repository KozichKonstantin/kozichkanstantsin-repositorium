let btn_activ = document.querySelectorAll(".reedFull") ;



for(let i =0; i<btn_activ.length; i++){
    btn_activ[i].addEventListener('click', function() {
        let number = btn_activ[i].parentNode.parentNode.className.toString().slice(10 , btn_activ[i].length);
        console.log(number)
        const card =  JSON.parse(localStorage.getItem(`card${number}`));
        const gg = document.querySelector(".classnameInput");
        gg.value = card[2]["class"];
        for(let j=0; j<6; j++){
            document.getElementsByClassName('plusMinus')[j].innerHTML = card[0].valued[j];
            document.getElementsByClassName('stats')[j].innerHTML = Math.floor((card[0].valued[j]-10) /2);
            document.getElementsByClassName('stats_fix')[j].innerHTML = Math.floor((card[0].valued[j]-10) /2);
        }
        let change = document.getElementsByClassName('Str');
        for(let k=0; k<change.length; k++){
            change[k].innerHTML = card[0].valued[0]  ;
        }
        change = document.getElementsByClassName('Dex');
        for(let k=0; k<change.length; k++){
            change[k].innerHTML = card[0].valued[1]  ;
        }
        change = document.getElementsByClassName('Con');
        for(let k=0; k<change.length; k++){
            change[k].innerHTML = card[0].valued[2]  ;
        }
        change = document.getElementsByClassName('Int');
        for(let k=0; k<change.length; k++){
            change[k].innerHTML = card[0].valued[3]  ;
        }
        change = document.getElementsByClassName('Wis');
        for(let k=0; k<change.length; k++){
            change[k].innerHTML = card[0].valued[4]  ;
        }
        change = document.getElementsByClassName('Cha');
        for(let k=0; k<change.length; k++){
            change[k].innerHTML = card[0].valued[5]  ;
        }


        document.querySelector(".none").classList.add("background")
        document.querySelector(".shadow_pop").classList.toggle("_active")
        document.querySelector("body").classList.toggle("_active")
 } )

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
const stats_fix = document.querySelectorAll(".stats_fix")

localStorage.setItem('counter', 0) ;
for(let i =0; i<input_check.length; i++){
    input_check[i].addEventListener('click', ()=>{
        if(localStorage.getItem('counter') == 1){
            for(let j =0; j < input_check.length; j++){
                if(input_check[j].checked == false){
                    input_check[j].disabled = true;
                }
            }
            console.log('opa')
        } 
        let fix = document.querySelectorAll(`.${stats_fix[i].classList.toString().slice(10, 13)}`);
        if(input_check[i].checked == true){
            localStorage.setItem('counter', localStorage.getItem('counter')-(-1)) ;
            stats_fix[i].textContent = stats_fix[i].textContent - (-3);
            for(let j = 0; j<fix.length;j++ ){
            fix[j].textContent = fix[j].textContent -(-3);
            }
        }else{
            // let fix = document.querySelectorAll(`.${stats_fix[i].classList.toString().slice(10, 13)}`);
            stats_fix[i].textContent = stats_fix[i].textContent -3;
            for(let j = 0; j<fix.length ;j++ ){
                fix[j].textContent = fix[j].textContent -3;
                console.log("hello")
            }
            localStorage.setItem('counter', localStorage.getItem('counter')-1)
            for(let j =0; j < input_check.length; j++){
                if(input_check[j].checked == false){
                    input_check[j].disabled = false;
                    
                }
            }
        }
        
    })
}



















let coins = document.querySelectorAll('.coin');
for (let i=0; i< coins.length; i++){
    coins[0].style.backgroundColor = '#b87333';
    coins[1].style.backgroundColor = 'silver';
    coins[2].style.backgroundColor = '#8b784A';
    coins[3].style.backgroundColor = 'gold';
    coins[4].style.backgroundColor = '#e5e4e2';
}

