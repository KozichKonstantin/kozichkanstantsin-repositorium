import {data} from './data.js';
import { savedHeroesBase } from './data.js';


for(let i =0; i< document.querySelectorAll('.savedCardNameText').length; i++){
document.getElementsByClassName('savedCardNameText')[i].textContent = localStorage.getItem("savedClass");
for(let i=0; i < localStorage.getItem('number'); i++){
    document.getElementsByClassName('savedCardPictureImg')[i].src = localStorage.getItem("image") + '.jpg'
    for (let j=0; j < 6 ; j++){
        document.getElementsByClassName('specValue')[j].textContent = localStorage.getItem(`stats${j}`);
    }
}

}


// let cardNumber = document.getElementsByClassName('savedCard')[i].classList.toString().substring(10);
// cardNumber = cardNumber -(-1)
// console.log(cardNumber)
// console.log(document.getElementsByClassName('specName')[j].textContent.slice(0, -1))
//         let cuttedText = document.getElementsByClassName('specName')[j].textContent.slice(0, -1) 
//         cuttedText += localStorage.getItem(`stats${j}`);
//         console.log(cuttedText);