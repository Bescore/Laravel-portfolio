//Module-changement de style du header au scroll
const headerOnScrollEffect = {
    nav: document.querySelector( '.nav-background' ),
    header: document.querySelector( '.header' ),

    init: function () {
        document.addEventListener( "scroll", headerOnScrollEffect.handleScroll )
    },

    handleScroll: function () {
        //headerOnScrollEffect.header.style.backgroundColor = "#e7a631"
        
        
        if ( window.scrollY == 0 ) {
            headerOnScrollEffect.nav.classList.remove('scrolling-nav')
        } else {
            headerOnScrollEffect.nav.classList.add('scrolling-nav')
        }
    }
}
document.addEventListener( 'DOMContentLoaded', headerOnScrollEffect.init )