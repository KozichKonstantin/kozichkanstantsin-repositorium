import {data} from './data.js';
import {stats} from './data.js';




function d(e, t, o, r="") {
    const l = document.createElement(e);
    return t && l.classList.add(...t.split(" ")),r && (l.textContent = r), o.append(l)
}


let cards_grid = document.querySelector(".cards_grid");
for (let e = 0; e < data.length; e++) d("div", `card${e} card ${data[e].name}`, cards_grid);

let card = document.querySelectorAll(".card");
for (let e = 0; e < card.length ; e++) {
    d("div", "image_case", card[e])
    d("div", "specs", card[e])
};




let y = document.querySelectorAll(".image_case");
for (let e = 0; e <y.length ; e++) d("div", `image ${data[e].name}`, y[e]);



let images = document.querySelectorAll(".image");
for (let e = 0; e <images.length ; e++) {
    d("div", `slideButton_case_left`, images[e]);
y = document.querySelectorAll(".slideButton_case_left");
for (let e = 0; e <y.length ; e++) d("p", `left`, y[e]);

y = document.querySelectorAll( ".slideButton_case_left");
for (let e = 0; e <y.length ; e++) {
    y[e].innerHTML = "&#8249"
}
}
for (let e = 0; e <images.length ; e++) d("div", `costil`, images[e]);
for (let e = 0; e <images.length ; e++) d("div", `slideButton_case_right`, images[e]);
y = document.querySelectorAll(".slideButton_case_right");
for (let e = 0; e <y.length ; e++) d("p", `right`, y[e]);
y = document.querySelectorAll( ".slideButton_case_right");
for (let e = 0; e <y.length ; e++) {
    y[e].innerHTML = "&#8250"
}





 y =  document.querySelectorAll(".specs");
for (let e = 0; e <y.length ; e++) d("ul", `specs_text`, y[e]);

y =  document.querySelectorAll(".specs_text");

    for(let i = 0; i<6; i++){
        for (let e = 0; e <y.length ; e++){ 
            d("li", `specs_li ${stats[i].stat}_text`, y[e],  `${stats[i].stat} `);
            d("div", `quantity_inner`, y[e]);
        }
}

y =  document.querySelectorAll(".quantity_inner");
for (let e = 0; e <y.length ; e++) d("button", `bt_minus`, y[e]);








y =  document.querySelectorAll(".quantity_inner");
    for (let e = 0; e <y.length ; e++)
    {
         d("input", 'quantity', y[e])
    }

    y =  document.querySelectorAll(".quantity");
    for(let i = 0; i<y.length; i++){
        y[i].setAttribute('type', 'number');
        y[i].setAttribute('size', '2');
        y[i].setAttribute('max', '20');
        y[i].setAttribute('min', '20');
        }

      


let inputsMassive = document.getElementsByClassName('quantity')
for (let i=0; i<inputsMassive.length; i++){
    let grandadClass = inputsMassive[i].parentNode.parentNode.parentNode.parentNode.className.toString().substring(11)
    for(let j = 0; j < data.length; j++){
        if( grandadClass == data[j]['name']){
            inputsMassive[i].classList.add(`${grandadClass}spec`);
        }
    }
}

y =  document.querySelectorAll(".bt_minus");    
for (let e = 0; e <y.length ; e++) d("svg", `svgs`, y[e]);

y =  document.querySelectorAll(".svgs");    
for (let e = 0; e <y.length ; e++) d("line", `line_d`, y[e]);

let line_d =  document.querySelectorAll(".line_d");  
   
for(let i = 0; i<y.length; i++){
    line_d[i].setAttribute('x1', 5);
    line_d[i].setAttribute('y1', 12);
    line_d[i].setAttribute('x2', 19);
    line_d[i].setAttribute('y2', 12);
    }
 


y =  document.querySelectorAll(".quantity_inner");
for (let e = 0; e <y.length ; e++) d("button", `bt_plus`, y[e]);

y =  document.querySelectorAll(".bt_plus");    
for (let e = 0; e <y.length ; e++) d("svg", `svg`, y[e]);

let svg = document.querySelectorAll('svg');
for(let i = 0; i<svg.length; i++){
svg[i].setAttribute('viewBox',"0 0 24 24");
}

y = document.querySelectorAll('.svg');

for (let e = 0; e <y.length ; e++) d("line", `line_up`, y[e]);
for (let e = 0; e <y.length ; e++) d("line", `line_up2`, y[e]);
let line_up =  document.querySelectorAll(".line_up"); 
let line_up2 =  document.querySelectorAll(".line_up2"); 

for(let i = 0; i<line_up.length; i++){
    line_up[i].setAttribute('x1', 12);
    line_up[i].setAttribute('y1', 5);
    line_up[i].setAttribute('x2', 12);
    line_up[i].setAttribute('y2', 19);
    line_up2[i].setAttribute('x1', 5);
    line_up2[i].setAttribute('y1', 12);
    line_up2[i].setAttribute('x2', 19);
    line_up2[i].setAttribute('y2', 12);

    }



y =  document.querySelectorAll(".specs_text");
for (let e = 0; e <y.length ; e++) d("div", `generate_case ${data[e].name}spec`, y[e]);



y =  document.querySelectorAll(".generate_case");
for (let e = 0; e <y.length ; e++) d("button", `generate`, y[e]);

y =  document.querySelectorAll(".generate");
for (let e = 0; e <y.length ; e++) d("p", ``, y[e]);









