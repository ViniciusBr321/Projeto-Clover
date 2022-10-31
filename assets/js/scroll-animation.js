const scrollanima = document.querySelector('[data-anima="scroll"]');

const metadeWindow = window.innerHeight * 3.2

function animarScroll(){
    const topoItem = scrollanima.getBoundingClientRect().top

    const itemVisivel = topoItem - metadeWindow < 0

    if(itemVisivel){
        scrollanima.classList.add('show-button')
    }
    else{
        scrollanima.classList.remove('show-button')
    }


}

window.addEventListener('scroll' ,animarScroll);