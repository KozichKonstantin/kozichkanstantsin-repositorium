import {data} from './data.js';
import { savedHeroesBase } from './data.js';

let test = localStorage.getItem("savedClass");

document.getElementsByClassName('savedCardNameText')[0].textContent = localStorage.getItem("savedClass");

// function ready() {
// }
// document.addEventListener("DOMContentLoaded", ready());