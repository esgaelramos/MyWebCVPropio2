// MENU MOBILE AND HAMBURGER MENU
function showMenuMobile(){
    var menuState = document.getElementById('menu-mobile-options');
    if (menuState.style.display === 'none'){
        menuState.style.display = 'block';
    } else {
        menuState.style.display = 'none';
    }}
    const nav = document.querySelector('#navbar-button button');
    nav.addEventListener('click', e =>{
    nav.classList.toggle('open');
    });



// document.write(f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());
// var mainCVP = new Vue({
//     el: '#main',
//     // --- DATA --- //
//     data: {
//         show_menu_mobile: false,
//     },
//     // --- COMPUTED --- //
//     computed: {

//     },
//     // --- WHATCHING --- //
//     watch: {

//     },
//     // --- METHODS --- //
//     methods: {

//     },
// })