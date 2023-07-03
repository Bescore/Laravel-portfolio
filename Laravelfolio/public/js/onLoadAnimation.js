const onloadAnimation = {

    body: document.querySelector( 'body' ),

    init: function () {

        //  desactiver le scroll au démarrage
        onloadAnimation.body.classList.add( 'stop-scrolling' );

        // creer le bouton qui va ouvrir les rideaux
        onloadAnimation.createCyrtainBtn();

        // activer l'effet du click sur le bouton open
        onloadAnimation.clickCurtainBtn()

    },

    createCyrtainBtn: function () {

        let divCreated = document.createElement( 'div' );
        divCreated.classList.add( 'open-curtains-div' );
        divCreated.id = "curtainsBtn";
        onloadAnimation.body.prepend( divCreated );
    },

    clickCurtainBtn: function () {

        // cibler les curtains ( rideaux)
        const curtainOne=document.querySelector('.curtain-1')
        const curtainTwo=document.querySelector('.curtain-2')

        let curtBtn = document.querySelector( '#curtainsBtn' );
        if ( !localStorage.getItem( "hasVisited" ) ) {
            // faire un  scroll top pour eviter les bugs
            window.scrollTo( { top: 0 } );
            
            curtBtn.addEventListener( 'click', onloadAnimation.handleCurtBtnClick );
        } else {
            // on fait disparaitre les rideaux
            curtainOne.style.display = "none";
            curtainTwo.style.display = "none";

            //on fait disparaitre le bouton
            document.querySelector( '#curtainsBtn' ).style.display = "none";

            // on remet l'effet de scroll en retirant cette class
            onloadAnimation.body.classList.remove( 'stop-scrolling' );
        }
    },

    handleCurtBtnClick: function () {

        // cibler les curtains ( rideaux)
        const curtainOne=document.querySelector('.curtain-1')
        const curtainTwo=document.querySelector('.curtain-2')
        
        // ajouter les animations aux div "curtain-1 et 2"
        curtainOne.classList.add('curtain-1-animation')
        curtainTwo.classList.add('curtain-2-animation')

        // on remet l'effet de scroll en retirant cette class
        onloadAnimation.body.classList.remove( 'stop-scrolling' );

        //on détruit le bouton open
        document.querySelector( '#curtainsBtn' ).style.opacity = "0.5";
        document.querySelector( '#curtainsBtn' ).style.display = "none";

        // le prospect a visité le site
        localStorage.setItem("hasVisited","1")
        
    }
}

document.addEventListener( "DOMContentLoaded", onloadAnimation.init );