import {data} from './data.js';




// console.log(savedHeroesBase[3]["class"]);




let savedHeroesBase = JSON.parse(localStorage.getItem(`help${i}`));

for(let j =0; j< document.querySelectorAll('.savedCardNameText').length; j++){
    document.getElementsByClassName('savedCardNameText')[j].textContent = savedHeroesBase[i].class;
    console.log("lox")
    }



console.log(savedHeroesBase)
// for(let k=0; k < localStorage.getItem('number'); k++){
//     document.getElementsByClassName('savedCardPictureImg')[k].src = savedHeroesBase["bard1"].img + '.jpg';
//     for (let h=0; h < 6 ; h++){
//         document.getElementsByClassName('specValue')[h].textContent = savedHeroesBase["bard1"].valued[j];
//     }
// }


// let cardNumber = document.getElementsByClassName('savedCard')[i].classList.toString().substring(10);
// cardNumber = cardNumber -(-1)
// console.log(cardNumber)
// console.log(document.getElementsByClassName('specName')[j].textContent.slice(0, -1))
//         let cuttedText = document.getElementsByClassName('specName')[j].textContent.slice(0, -1) 
//         cuttedText += localStorage.getItem(`stats${j}`);
//         console.log(cuttedText);