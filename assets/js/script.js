function menuOpened(){
    document.getElementById('listNav').style.display = 'block';
    
}

function menuClosed(){
    document.getElementById('listNav').style.display = 'none';
    
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



