import {data} from './data.js';
import { savedHeroesBase } from './data.js';

let test = localStorage.getItem("savedClass");
document.getElementsByClassName('savedCardNameText')[0].textContent = localStorage.getItem("savedClass")
document.getElementsByClassName('savedCardPictureImg')[0].src = localStorage.getItem("image") + '.jpg'
// function ready() {
// }
// document.addEventListener("DOMContentLoaded", ready());