import {data} from './data.js';
import {stats} from './data.js';

console.log(data)



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
    d("div", `slideButton_case_left left`, images[e]);
y = document.querySelectorAll(".slideButton_case_left");
for (let e = 0; e <y.length ; e++) d("p", `left`, y[e]);

y = document.querySelectorAll( ".left");
for (let e = 0; e <y.length ; e++) {
    console.log(y)
    y[e].innerHTML = "&#8249"
}
}
for (let e = 0; e <images.length ; e++) d("div", `costil`, images[e]);
for (let e = 0; e <images.length ; e++) d("div", `slideButton_case_right right`, images[e]);
y = document.querySelectorAll(".slideButton_case_right");
for (let e = 0; e <y.length ; e++) d("p", `right`, y[e]);
y = document.querySelectorAll( ".right");
for (let e = 0; e <y.length ; e++) {
    console.log(y)
    y[e].innerHTML = "&#8250"
}





 y =  document.querySelectorAll(".specs");
for (let e = 0; e <y.length ; e++) d("ul", `specs_text`, y[e]);

y =  document.querySelectorAll(".specs_text");

    for(let i = 0; i<6; i++){
        for (let e = 0; e <y.length ; e++) d("li", `specs_li ${stats[i].stat}_text`, y[e],  `${stats[i].stat} `);

}

// y =  document.querySelectorAll(".specs_li");
// for(let i = 0; i<6; i++){
//     for (let e = 0; e <y.length ; e++) d("div", `quantity_inner`, y[e]);

// }




// for (let e = 0; e < 8; e++) d("div", `specs`, card[e]);

// let y = document.querySelectorAll(".card");
// for (let e = 0; e < y.length ; e++) d("div", "image_case", y[e]);

// y = document.querySelectorAll(".image_case");
// for (let e = 0; e <y.length ; e++) d("div", `image ${data[e].name}`, y[e]);

// y = document.querySelectorAll(".image");
// for (let e = 0; e <y.length ; e++) d("div", `slideButton_case_left left`, y[e]);