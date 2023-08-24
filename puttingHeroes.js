import {data} from './data.js';
import { savedHeroesBase } from './data.js';


for(let i =0; i< document.querySelectorAll('.savedCardNameText').length; i++){
document.getElementsByClassName('savedCardNameText')[i].textContent = localStorage.getItem("savedClass");
document.getElementsByClassName('savedCardPictureImg')[i].src = localStorage.getItem("image") + '.jpg'
    for (let j=0; j < 6; j++){
    document.getElementsByClassName('specName')[j].textContent = localStorage.getItem(`stats${j}`)
    }
}
