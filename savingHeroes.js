import {data} from './data.js'
// import {savedHeroesBase} from './data.js'
import {d} from './generatecard.js';


let elementsMassive = document.querySelector('.toSecondPage');

let savingHeroesButtons = document.getElementsByClassName('saveHero');
for (let i=0; i < data.length; i++){
    savingHeroesButtons[i].addEventListener('click', function() {
        let number =  localStorage.getItem('number') - (-1);
        localStorage.setItem('number',`${number}`)
            d("h2", 'message', elementsMassive, "NEW")} 
    )
}



// localStorage.clear();


let valued = [];
let savedHeroesBase = {};

for(let i=0; i< data.length; i++){

    savingHeroesButtons[i].addEventListener('click', function() {

        const currentHeroButton = savingHeroesButtons[i];
        let savedClass = currentHeroButton.className.toString().slice(9, (currentHeroButton.length))
        if(savedClass == data[i]['name']){


            let stats_input = document.getElementsByClassName(('quantity ' + savedClass + 'Spec'));
            for(let j=0; j < 6; j++){
            valued[j] =+ stats_input[j].value;
            savedHeroesBase = [
                        {"valued" : valued},
                        {"img" : `${(data[i]['img'] + '/' + data[i]['currentPicture'])}`}, 
                        {"class" : `${savedClass}`}]
                        console.log(savedHeroesBase)
            }


        }
        return(localStorage.setItem(`card${localStorage.getItem("number") - 1}`, JSON.stringify(savedHeroesBase)));
    })

}

