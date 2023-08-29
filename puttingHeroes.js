import {data} from './data.js';



for (let i=0; i<=(localStorage.getItem("number") - 1); i++){
    let savedBase = JSON.parse(localStorage.getItem(`card${i}`));
    document.getElementsByClassName('savedCardNameText')[i].textContent = savedBase[2].class ;
    document.getElementsByClassName('savedCardPictureImg')[i].src = savedBase[1].img+ ".jpg";
    for(let j=0; j<6; j++){
        document.getElementsByClassName('savedCardSpecs')[i].children[j].lastChild.textContent = savedBase[0].valued[j];
    }
    }

