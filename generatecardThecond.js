import {stats} from './data.js';




function createElementSecond(e, t, o, r="") {
    const l = document.createElement(e);
    return t && l.classList.add(...t.split(" ")),r && (l.textContent = r), o.append(l)
}

let savedlist = document.querySelector(".savedList");
for (let e = 0; e < localStorage.getItem("number") ; e++) createElementSecond("div", `savedCard ${e}`, savedlist);

let savecard = document.querySelectorAll(".savedCard");
for (let e = 0; e < savecard.length; e++) createElementSecond("div", `savedCardName`, savecard[e]);

let aded = document.querySelectorAll(".savedCardName");
for (let e = 0; e < aded.length; e++) createElementSecond("h1", `savedCardNameText`, aded[e]);

for (let e = 0; e < savecard.length; e++) createElementSecond("div", `savedCardPicture`, savecard[e]);

aded = document.querySelectorAll(".savedCardPicture");
for (let e = 0; e < aded.length; e++) createElementSecond("img", `savedCardPictureImg`, aded[e]);

for (let e = 0; e < savecard.length; e++) createElementSecond("div", `savedCardSpecs`, savecard[e]);

aded = document.querySelectorAll(".savedCardSpecs");
for(let e = 0; e < aded.length; e++){
    for(let i = 0; i< 6; i++){
        createElementSecond("div", `specText ${stats[i].stat}`, aded[e]);
    }
}

aded = document.querySelectorAll(".specText");
for (let e = 0; e < aded.length; e++) createElementSecond("h2", `specName`, aded[e], "");

let cardsMassive = document.getElementsByClassName('specText');
let h2Fills = document.getElementsByClassName('specName');
for (let i=0; i < cardsMassive.length; i++){
    h2Fills[i].textContent = cardsMassive[i].classList.toString().substring(9);
}
for (let e = 0; e < h2Fills.length; e++) createElementSecond("p", `specValue`, aded[e], "1");


for (let e = 0; e < savecard.length; e++) createElementSecond("div", `activityButtons_case`, savecard[e]);

let activityButtons_case = document.querySelectorAll(".activityButtons_case");
for (let e = 0; e < activityButtons_case.length; e++) createElementSecond("div", `activityButton reedFull`, activityButtons_case[e]);

aded = document.querySelectorAll(".reedFull");
for (let e = 0; e < aded.length; e++) createElementSecond("img", `reedFullImg`, aded[e]);
aded = document.querySelectorAll(".reedFullImg");
for(let i = 0; i<aded.length; i++){
    aded[i].setAttribute('src', 'data/addit_images/free-file-icon-1453-thumb.png');
    }

for (let e = 0; e < activityButtons_case.length; e++) createElementSecond("div", `activityButton printTo`, activityButtons_case[e]);
aded = document.querySelectorAll(".printTo");
for (let e = 0; e < aded.length; e++) createElementSecond("img", `printToImg`, aded[e]);
aded = document.querySelectorAll(".printToImg");
for(let i = 0; i<aded.length; i++){
    aded[i].setAttribute('src', 'data/addit_images/4305625.png');
    }


for (let e = 0; e < activityButtons_case.length; e++) createElementSecond("div", `activityButton delete`, activityButtons_case[e]);
aded = document.querySelectorAll(".delete");
for (let e = 0; e < aded.length; e++) createElementSecond("img", `deleteImg`, aded[e]);
aded = document.querySelectorAll(".deleteImg");
for(let i = 0; i<aded.length; i++){
    aded[i].setAttribute('src', 'data/addit_images/3481306.png');
    }

    for (let i=0; i<=(localStorage.getItem("number") - 1); i++){
        let savedBase = JSON.parse(localStorage.getItem(`card${i}`));
        if(localStorage.getItem(`card${i}`) == undefined){i++ ;console.log("hell")}else{ //dodelat
        document.getElementsByClassName('savedCardNameText')[i].textContent = savedBase[2].class ;
        document.getElementsByClassName('savedCardPictureImg')[i].src = savedBase[1].img+ ".jpg";
        for(let j=0; j<6; j++){
            document.getElementsByClassName('savedCardSpecs')[i].children[j].lastChild.textContent = savedBase[0].valued[j];
        }
        }}
    
    