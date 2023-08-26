import {data} from './data.js';
import {stats} from './data.js';
export { d };



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




let elementsMassive = document.querySelectorAll(".image_case");
for (let e = 0; e <elementsMassive.length ; e++) d("div", `image ${data[e].name}`, elementsMassive[e]);



let images = document.querySelectorAll(".image");
for (let e = 0; e <images.length ; e++) {
    d("div", `slideButton_case_left`, images[e]);
elementsMassive = document.querySelectorAll(".slideButton_case_left");
for (let e = 0; e <elementsMassive.length ; e++) d("p", `left`, elementsMassive[e]);

elementsMassive = document.querySelectorAll( ".slideButton_case_left");
for (let e = 0; e <elementsMassive.length ; e++) {
    elementsMassive[e].innerHTML = "&#8249"
}
}
for (let e = 0; e <images.length ; e++) d("div", `costil`, images[e]);

elementsMassive = document.querySelectorAll( ".costil");
for (let e = 0; e <images.length ; e++) d("img", `frame ${data[e].name}`, elementsMassive[e]);

for (let e = 0; e <images.length ; e++) d("div", `slideButton_case_right`, images[e]);
elementsMassive = document.querySelectorAll(".slideButton_case_right");
for (let e = 0; e <elementsMassive.length ; e++) d("p", `right`, elementsMassive[e]);
elementsMassive = document.querySelectorAll( ".slideButton_case_right");
for (let e = 0; e <elementsMassive.length ; e++) {
    elementsMassive[e].innerHTML = "&#8250"
}


elementsMassive =  document.querySelectorAll(".specs");
for (let e = 0; e <elementsMassive.length ; e++) d("ul", `specs_text`, elementsMassive[e]);

elementsMassive =  document.querySelectorAll(".specs_text");

    for(let i = 0; i<6; i++){
        for (let e = 0; e <elementsMassive.length ; e++){ 
            d("li", `specs_li ${stats[i].stat}_text`, elementsMassive[e],  `${stats[i].stat} `);
            d("div", `quantity_inner`, elementsMassive[e]);
        }
}

elementsMassive =  document.querySelectorAll(".quantity_inner");
for (let i = 0; i <elementsMassive.length ; i++) d("button", `bt_minus`, elementsMassive[i]);

elementsMassive =  document.querySelectorAll(".quantity_inner");
    for (let e = 0; e <elementsMassive.length ; e++)
    {
         d("input", 'quantity', elementsMassive[e])
    }

    elementsMassive =  document.querySelectorAll(".quantity");
    for(let i = 0; i<elementsMassive.length; i++){
        elementsMassive[i].setAttribute('type', 'number');
        elementsMassive[i].setAttribute('size', '2');
        elementsMassive[i].setAttribute('max', '20');
        elementsMassive[i].setAttribute('min', '20');
        }


let inputsMassive = document.getElementsByClassName('quantity')
for (let i=0; i<inputsMassive.length; i++){
    let grandadClass = inputsMassive[i].parentNode.parentNode.parentNode.parentNode.className.toString().substring(11)
    for(let j = 0; j < data.length; j++){
        if( grandadClass == data[j]['name']){
            inputsMassive[i].classList.add(`${grandadClass}Spec`);
        }
    }
}

elementsMassive =  document.querySelectorAll(".bt_minus");    
for (let e = 0; e <elementsMassive.length ; e++) d("svg", `svgs`, elementsMassive[e]);

elementsMassive =  document.querySelectorAll(".svgs");    
for (let e = 0; e <elementsMassive.length ; e++) d("line", `line_d`, elementsMassive[e], "–");

elementsMassive =  document.querySelectorAll(".quantity_inner");
for (let e = 0; e <elementsMassive.length ; e++) d("button", `bt_plus`, elementsMassive[e]);

elementsMassive =  document.querySelectorAll(".bt_plus");    
for (let e = 0; e <elementsMassive.length ; e++) d("svg", `svg`, elementsMassive[e]);

let svg = document.querySelectorAll('svg');
for(let i = 0; i<svg.length; i++){
svg[i].setAttribute('viewBox',"0 0 24 24");
}

elementsMassive = document.querySelectorAll('.svg');

for (let e = 0; e <elementsMassive.length ; e++) d("line", `line_up`, elementsMassive[e], "+");


elementsMassive =  document.querySelectorAll(".specs_text");
for (let e = 0; e <elementsMassive.length ; e++) d("div", `activityButton`, elementsMassive[e]);

let activityButton =  document.querySelectorAll(".activityButton");
for (let e = 0; e <elementsMassive.length ; e++) d("div", `generate_case ${data[e].name}Spec`, activityButton[e]);

elementsMassive =  document.querySelectorAll(".generate_case");
for (let e = 0; e <elementsMassive.length ; e++) d("button", `generate`, elementsMassive[e]);

elementsMassive =  document.querySelectorAll(".generate");
for (let e = 0; e <elementsMassive.length ; e++) d("p", ``, elementsMassive[e]);

for (let e = 0; e <elementsMassive.length ; e++) d("button", `saveHero ${data[e].name}`, activityButton[e]);

elementsMassive =  document.querySelectorAll(".saveHero");
for (let e = 0; e <elementsMassive.length ; e++) d("p", ``, elementsMassive[e]);





