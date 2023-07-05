const animations = {
    bodychilds: document.body.getElementsByTagName( "*" ),
    hr: document.querySelectorAll( '.hr' ),
    init: function () {
        // activer check resize
        animations.checkResize()

        for ( const hr of animations.hr ) {

            // mettre le hr en scale 0 , voir la class css
            hr.classList.add( 'transformScaleOff' )
        
        }
        // creer la boucle qui rajoute la class opacityOff sur tous les element de la page
        for ( const bodychild of animations.bodychilds ) {

            if (!bodychild.classList.contains("curtain")) {
                bodychild.classList.add( 'opacityOff' )
            }
            

        }

    },
    // gérer le fait qu'au resize on n'est pas de ralentissement du à la propriété css "transition"
    checkResize: function () {
        window.addEventListener( "resize", animations.handleResize )
    },
    handleResize: function () {

        for ( const bodychild of animations.bodychilds ) {

            bodychild.classList.remove( 'opacityOff' )
            setTimeout( () => {
                bodychild.classList.add( 'opacityOff' )
            }, 2000 );

        }
    },
    
}

document.addEventListener( "DOMContentLoaded", animations.init )


// oberserver qui permet de gérer le fade au scroll
const observer = new IntersectionObserver( ( entries ) => {

    for ( const entry of entries ) {
        if ( entry.isIntersecting && !entry.target.classList.contains( 'curtain' )) {
            entry.target.classList.add( 'opacityOn' )
        } else {
            entry.target.classList.remove( 'opacityOn' )
        }

        if ( entry.isIntersecting && entry.target.classList.contains( 'hr' ) ) {
            entry.target.classList.add( 'transformScaleOn' )
        } else {
            entry.target.classList.remove( 'transformScaleOn' )
        }

        if ( entry.isIntersecting && entry.target.classList.contains( 'carousel-child' ) ) {
            entry.target.classList.add( 'myAnim' )
        } else {
            entry.target.classList.remove( 'myAnim' )
        }
    }
});


// boucle qui oberserve chaque élément de la page
for ( const element of animations.bodychilds ) {

    //oberser tout le monde
    observer.observe( element );
    
}