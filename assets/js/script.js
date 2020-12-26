function menuOpened(){
    let openMenu = document.getElementById('listNav');

    if(openMenu.classList.contains('displayNav')==true){
        openMenu.classList.remove('displayNav');
    }else{
        openMenu.classList.add('displayNav');
    }
    
}



function scrollTo(element){
    document.querySelector(element).scrollIntoView({behavior:'smooth'});
}


document.querySelector('#About').addEventListener('click', function(event){
    event.preventDefault();
    scrollTo('#receiverAbout');
})

document.querySelector('#Services').addEventListener('click', function(event){
    event.preventDefault();
    scrollTo('#receiverServices');
})

document.querySelector('#ourProjects').addEventListener('click', function(event){
    event.preventDefault();
    scrollTo('#receiverProjects');
})


document.querySelector('#ourTeam').addEventListener('click', function(event){
    event.preventDefault();
    scrollTo('#receiverTeam');
})

document.querySelector('#happyClients').addEventListener('click', function(event){
    event.preventDefault();
    scrollTo('#receiverClients');
})

document.querySelector('#price').addEventListener('click', function(event){
    event.preventDefault();
    scrollTo('#receiverPrice');
})

document.querySelector('#someFacts').addEventListener('click', function(event){
    event.preventDefault();
    scrollTo('#receiverFacts');
})

document.querySelector('#contactUs').addEventListener('click', function(event){
    event.preventDefault();
    scrollTo('#receiverContact');
})



currentSlide = 0;


let totalSlides = document.querySelectorAll('.slide--item').length;

document.querySelector('.slider-width').style.width = `calc(100vw * ${totalSlides})`;

document.querySelector('.slider--controls').style.height = 
    `${document.querySelector('.slider-width').clientHeight}px`;




function goPrev(){
    currentSlide--;
    if(currentSlide < 0){
        currentSlide = totalSlides -1;
    }

    updateMargin();
}


function goNext(){
    currentSlide++;
    if(currentSlide > (totalSlides -1)) {
        currentSlide = 0;
    }
    updateMargin();
}


function updateMargin(){
    let sliderItemWidth = document.querySelector('.slide--item').clientWidth;
    let newMargin = (currentSlide * sliderItemWidth);
    document.querySelector('.slider-width').style.marginLeft = 
    `-${newMargin}px`
}

setInterval(goNext, 8500);






window.onscroll = function(){
    scroll();
}


function scroll(){
    let dqs = document.getElementById('toUp');


    if(document.documentElement.scrollTop > 50) {
        dqs.style.display = "block";
    } else {
        dqs.style.display = "none";
    }
    
}

function backToTop(){
    document.documentElement.scrollTop = 0;
    
}



