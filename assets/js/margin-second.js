const navContainer = document.querySelector('.second-margin');   
const submenu = document.querySelector('.submenu_niveles');
const menu = document.querySelector('.menu_items');
const body = document.querySelector('body');
navContainer.addEventListener('click', function(e) {
    if(e.target.classList.contains('btn_menu') || e.target.classList.contains('fas')){
    menu.classList.toggle('show')
    body.classList.toggle('hidden')
    }  if(e.target.classList.contains('submenu_item')){
    submenu.classList.remove('show-submenu')
    }    if(e.target.classList.contains('btn_submenu')){ 
        submenu.classList.toggle('show-submenu')
    }
})