const onloadAnimation = {

    body: document.querySelector( 'body' ),

    init: function () {

        //  desactiver le scroll au démarrage
        onloadAnimation.body.classList.add( 'stop-scrolling' );

        // creer le bouton qui va ouvrir les rideaux
        onloadAnimation.createCyrtainBtn();

        // activer l'effet du click sur le bouton open
        onloadAnimation.clickCurtainBtn()

        // faire un  scroll top pour eviter les bugs
        window.scrollTo({top: 0});
    },

    createCyrtainBtn: function () {

        let divCreated = document.createElement( 'div' );
        divCreated.classList.add( 'open-curtains-div' );
        divCreated.id = "curtainsBtn";
        onloadAnimation.body.prepend( divCreated );
    },

    clickCurtainBtn: function () {

        let curtBtn = document.querySelector( '#curtainsBtn' );

        curtBtn.addEventListener( 'click', onloadAnimation.handleCurtBtnClick );
    },

    handleCurtBtnClick: function () {

        // creer une balise style
        let styleElem = document.createElement( 'style' );

        // on l'ajoute au body
        document.body.prepend( styleElem );

        // on change indirectement le style des before/after pour ouvrir les rideaux
        styleElem.append( ".body:after{animation: onloadanimationafter 4s  forwards ;}" );
        styleElem.append( ".body:before{animation: onloadanimationbefore 4s  forwards ;}" );
        styleElem.append( "#curtainsBtn{cursor:pointer; transition:2sec}" );

        // on remet l'effet de scroll en retirant cette class
        onloadAnimation.body.classList.remove( 'stop-scrolling' );

        //on détruit le bouton open
        document.querySelector( '#curtainsBtn' ).style.opacity = "0.5";
        document.querySelector( '#curtainsBtn' ).style.display = "none";

        
    }
}

document.addEventListener( "DOMContentLoaded", onloadAnimation.init );