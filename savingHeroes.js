import {data} from './data.js';

let savingHeroesButtons = document.getElementsByClassName('saveHero');
for(let i=0; i< data.length; i++){
    savingHeroesButtons[i].addEventListener('click', function() {
        const currentHeroButton = savingHeroesButtons[i];
        let savedClass = currentHeroButton.className.toString().slice(9, (currentHeroButton.length))
        if(savedClass == data[i]['name']){
            
           savedHeroesBase[0]['class'] = savedClass;
            savedHeroesBase[0]['image'] = data[i]['img'] + '/' + data[i]['currentPicture']
            let stats = document.getElementsByClassName(('quantity ' + savedClass + 'Spec'));
            for(let j=0; j < 6; j++){
                savedHeroesBase[1][j] = stats[j].value
            }
            console.log(savedHeroesBase);
            console.log(stats);
        }
        localStorage.setItem("savedCard",JSON.stringify(savedHeroesBase))
        console.log(savedClass)
    })
    const savedHeroesBase = JSON.parse(localStorage.getItem("savedCard"))
    document.getElementsByClassName('savedCardName').textContent =`${savedHeroesBase [0]['class']}`
    console.log(document.getElementsByClassName('savedCardName').textContent, ' suka')
}
