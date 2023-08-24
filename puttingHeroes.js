import {data} from './data.js';
import { savedHeroesBase } from './data.js';

let test = localStorage.getItem("savedClass");
document.getElementsByClassName('savedCardNameText')[0].textContent = localStorage.getItem("savedClass")
document.getElementsByClassName('savedCardPictureImg')[0].src = localStorage.getItem("image") + '.jpg'
for (let i=0; i < 6; i++){
    document.getElementsByClassName('spec')[i].textContent = localStorage.getItem(`stats${i}`)
}
// function ready() {
// }
// document.addEventListener("DOMContentLoaded", ready());