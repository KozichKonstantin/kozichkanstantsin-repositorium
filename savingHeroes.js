import {data} from './data.js'
import {d} from './generatecard.js';



localStorage.clear();




let elementsMassive = document.querySelector('.toSecondPage');

let savingHeroesButtons = document.getElementsByClassName('saveHero');
for (let i=0; i < data.length; i++){
    savingHeroesButtons[i].addEventListener('click', function() {
        let number =  localStorage.getItem('number') - (-1);
        localStorage.setItem('number',`${number}`)
        if (number > 0 & number < 2){
            d("h2", 'message', elementsMassive, "NEW")} 
        }
    )
}







for(let i=0; i< data.length; i++){

    // localStorage.clear();
    savingHeroesButtons[i].addEventListener('click', function() {
        const currentHeroButton = savingHeroesButtons[i];
        let savedClass = currentHeroButton.className.toString().slice(9, (currentHeroButton.length))
        if(savedClass == data[i]['name']){
            
            savedHeroesBase[0]['class'] = savedClass;

            localStorage.setItem('savedClass',`${savedHeroesBase[0]['class']}`)

            savedHeroesBase[0]['image'] = data[i]['img'] + '/' + data[i]['currentPicture']
            localStorage.setItem('image',`${savedHeroesBase[0]['image']}`)

            let stats = document.getElementsByClassName(('quantity ' + savedClass + 'Spec'));
            for(let j=0; j < 6; j++){
                localStorage.setItem(`stats${j}`,`${stats[j].value}`)

            }
            document.getElementsByClassName('savedCardNameText').textContent =`${savedHeroesBase [0]['class']}`
            
        }
        // localStorage.setItem("savedCard",JSON.stringify(savedHeroesBase))
        // console.log(savedClass)
      
    })
    // const savedHeroesBase = JSON.parse(localStorage.getItem("savedCard"))
    
}

