savingHeroesButtons = document.getElementsByClassName('saveHero');
for(let i=0; i< base.length; i++){
    savingHeroesButtons[i].addEventListener('click', function() {
        const currentHeroButton = savingHeroesButtons[i];
        let savedClass = currentHeroButton.className.toString().slice(9, (currentHeroButton.length))
        if(savedClass == base[i]['name']){
            savedHeroesBase[0]['class'] = savedClass;
            savedHeroesBase[0]['image'] = base[i]['img'] + '/' + base[i]['currentPicture']
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
