let ubicationPrincipal = window.pageYOffset;
showNav = function(){
    let Scroll_Now = window.pageYOffset;
    if(ubicationPrincipal >= Scroll_Now || ubicationPrincipal < 350){
        document.getElementById('header_navbar').style.top = '0';
    }
    else {
        document.getElementById('header_navbar').style.top = '-49vh';
    }
    ubicationPrincipal = Scroll_Now;
}
window.addEventListener('scroll', showNav)
