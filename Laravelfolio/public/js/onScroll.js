//Module-changement de style du header au scroll
const headerOnScrollEffect = {
    nav: document.querySelector( '.nav-background' ),
    header: document.querySelector( '.header' ),

    init: function () {

        // gérer la couleur des element de menu au scroll
        headerOnScrollEffect.changeElementColor();

        document.addEventListener( "scroll", headerOnScrollEffect.handleScroll );
    },

    handleScroll: function () {
        // headerOnScrollEffect.header.style.backgroundColor = "#e7a631"
        
        
        if ( window.scrollY == 0 ) {
            headerOnScrollEffect.nav.classList.remove( 'scrolling-nav' );
        } else {
            headerOnScrollEffect.nav.classList.add( 'scrolling-nav' );
        }
    },

    // changer la couleur des nav-items au scroll
    changeElementColor: function () {

        
        
        document.addEventListener( 'scroll', headerOnScrollEffect.handleChangeElementColorScroll );
    
    },

    handleChangeElementColorScroll: function () {
        
        // ici je recupère la couleur d'un element de thème variable ( voir le code threejs je fais pareil)
        const colorOfCurrentTheme = getComputedStyle( document.querySelector( '.little-square' ) ).backgroundColor
        
        //ceci ne doit se produire que sur la page d'accueil, on va donc checker l'url
        var pathArray = window.location.pathname.split( '/' );
        
        
        console.log( window.pageYOffset )
        if ( window.pageYOffset>0 && window.pageYOffset<937 && pathArray[1] !== "projects" ) {
            document.querySelector( "#accueil" ).classList.add( "text-warning" );
        } else {
            document.querySelector( "#accueil" ).classList.remove( "text-warning" );
        }
        
        if (window.pageYOffset>937 && window.pageYOffset<1714 && pathArray[1] !== "projects") {
            document.querySelector( "#a_propos" ).classList.add( "text-warning" );
        } else {
            document.querySelector( "#a_propos" ).classList.remove( "text-warning" );
        }
        
        if (window.pageYOffset>1714 && window.pageYOffset<2523 && pathArray[1] !== "projects") {
            document.querySelector( "#projets" ).classList.add( "text-warning" );
        } else {
            document.querySelector( "#projets" ).classList.remove( "text-warning" );
        }
        
        if (window.pageYOffset>2523 && pathArray[1] !== "projects") {
            document.querySelector( "#contact_me" ).classList.add( "text-warning" );
        } else {
            document.querySelector( "#contact_me" ).classList.remove( "text-warning" );
        }
    }


}


document.addEventListener( 'DOMContentLoaded', headerOnScrollEffect.init )
