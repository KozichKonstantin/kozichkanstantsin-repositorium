import {data} from './data.js';
import {stats} from './data.js';




function d(e, t, o, r="") {
    const l = document.createElement(e);
    return t && l.classList.add(...t.split(" ")),r && (l.textContent = r), o.append(l)
}

let savedlist = document.querySelector(".savedList");
for (let e = 0; e < localStorage.getItem("number") ; e++) d("div", `savedCard ${e}`, savedlist);

let savecard = document.querySelectorAll(".savedCard");
for (let e = 0; e < savecard.length; e++) d("div", `savedCardName`, savecard[e]);

let aded = document.querySelectorAll(".savedCardName");
for (let e = 0; e < aded.length; e++) d("h1", `savedCardNameText`, aded[e]);

for (let e = 0; e < savecard.length; e++) d("div", `savedCardPicture`, savecard[e]);

aded = document.querySelectorAll(".savedCardPicture");
for (let e = 0; e < aded.length; e++) d("img", `savedCardPictureImg`, aded[e]);

for (let e = 0; e < savecard.length; e++) d("div", `savedCardSpecs`, savecard[e]);

aded = document.querySelectorAll(".savedCardSpecs");
for(let e = 0; e < aded.length; e++){
    for(let i = 0; i< 6; i++){
    d("div", `specText ${stats[i].stat}`, aded[e]);
    }
}

aded = document.querySelectorAll(".specText");
for (let e = 0; e < aded.length; e++) d("h2", `specName`, aded[e], "");

let cardsMassive = document.getElementsByClassName('specText');
let h2Fills = document.getElementsByClassName('specName');
for (let i=0; i < cardsMassive.length; i++){
    h2Fills[i].textContent = cardsMassive[i].classList.toString().substring(9);
}
for (let e = 0; e < h2Fills.length; e++) d("p", ``, h2Fills[e], "1");


for (let e = 0; e < savecard.length; e++) d("div", `activityButtons_case`, savecard[e]);

let activityButtons_case = document.querySelectorAll(".activityButtons_case");
for (let e = 0; e < activityButtons_case.length; e++) d("div", `activityButton reedFull`, activityButtons_case[e]);

aded = document.querySelectorAll(".reedFull");
for (let e = 0; e < aded.length; e++) d("img", `reedFullImg`, aded[e]);
aded = document.querySelectorAll(".reedFullImg");
for(let i = 0; i<aded.length; i++){
    aded[i].setAttribute('src', 'data/addit_images/free-file-icon-1453-thumb.png');
    }

for (let e = 0; e < activityButtons_case.length; e++) d("div", `activityButton printTo`, activityButtons_case[e]);
aded = document.querySelectorAll(".printTo");
for (let e = 0; e < aded.length; e++) d("img", `printToImg`, aded[e]);
aded = document.querySelectorAll(".printToImg");
for(let i = 0; i<aded.length; i++){
    aded[i].setAttribute('src', 'data/addit_images/4305625.png');
    }


for (let e = 0; e < activityButtons_case.length; e++) d("div", `activityButton delete`, activityButtons_case[e]);
aded = document.querySelectorAll(".delete");
for (let e = 0; e < aded.length; e++) d("img", `deleteImg`, aded[e]);
aded = document.querySelectorAll(".deleteImg");
for(let i = 0; i<aded.length; i++){
    aded[i].setAttribute('src', 'data/addit_images/3481306.png');
    }

