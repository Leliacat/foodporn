window.onload = function(){


const header_menu = document.getElementById('header_menu');
const header_icon = document.getElementById('header_icon');
const menu = document.getElementById('header_menu');

header_icon.addEventListener('click', ()=>{
    console.log('arrête de me cliquer');
    menu.classList.toggle('width_sidebar');
});

}