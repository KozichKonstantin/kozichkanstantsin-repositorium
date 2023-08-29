const delete_btn = document.querySelectorAll(".delete");


for(let i = 0; i< delete_btn.length; i++){
    delete_btn[i].addEventListener('click', function() {
    let cards = delete_btn[i].parentNode.parentNode;
    let number = delete_btn[i].parentNode.parentNode.className.toString().slice(10 , cards.length);
    cards.classList.add("none");

    localStorage.removeItem(`card${number}`)
    let num = (localStorage.getItem("number") -1);
    localStorage.setItem("number",num)
    })
}