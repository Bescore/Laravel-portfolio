const message = {

    form: document.querySelector( '#form' ),
    soundWin: new Audio( './autre/yeahoo.mp3' ),
    soundLoose: new Audio( './autre/failed.mp3' ),

    // on vérifie les entrées (regex made in chat gpt)
    regexEmail: /^[^<>()\[\]\\.,;:\s@"]+(?:\.[^<>()\[\]\\.,;:\s@"]+)*@(?:[^<>()\[\]\\.,;:\s@"]+\.)+[^<>()\[\]\\.,;:\s@"]+$/,
    regexNom: /^[a-zA-ZÀ-ÿ]+(?:[-' ][a-zA-ZÀ-ÿ]+)*$/,
    regexMessage: /^[a-zA-Z0-9\s.,:'ÀÁÂÃÄÅàáâãäåÈÉÊËèéêëÎÏîïÔÕÖÙÚÛÜùúûüÿÇçŒœÆæØøœ]+$/,

    init: function () {
        message.form.addEventListener( 'submit', message.handleFormSubmit );

        message.form.addEventListener( 'keyup', message.checEachEntries );

    },

    handleFormSubmit: async function ( e ) {

        // changer le comportement par défault
        e.preventDefault();

        // creer un formData
        const formData = new FormData( message.form )

        // on check les données
        if ( message.checkEntries( formData.get( 'nom' ), formData.get( 'email' ), formData.get( 'message' ) ) ) {


            // on lance l'appel ajax avec des données dynamiques
            const response = await fetch( window.location.protocol + "//" + window.location.host + "/api/message", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( {
                    nom: formData.get( 'nom' ).trim(),
                    email: formData.get( 'email' ).trim(),
                    message: formData.get( 'message' ).trim()
                } )

            } );

            message.soundWin.volume = 0.04;
            // jouer le son
            message.soundWin.play();

            setTimeout( function () {
                alert( "Message envoyé ! 💌" );
            }, 450 );

            //on vide les champs
            document.querySelector( '#nom' ).value = "";
            document.querySelector( '#email' ).value = "";
            document.querySelector( '#message' ).value = "";

        } else {


            message.soundLoose.volume = 0.04;
            // jouer le son
            message.soundLoose.play();

            setTimeout( function () {
                alert( "Echec d'envoi ⛔, veuillez inscrire une adresse email, un nom et un message valide" );
            }, 450 );
        }

    },

    checEachEntries: function ( e ) {

        message.changeOutlineColor( e.target, "nom", message.regexNom );
        message.changeOutlineColor( e.target, "email", message.regexEmail );
        message.changeOutlineColor( e.target, "message", message.regexMessage );
    },

    //cette fonction reutilisable permet de verifier chaque champs au moment ou le user lève son doigt de la touche
    changeOutlineColor: function ( target, nom, regex ) {

        if ( target.name == nom ) {

            if ( regex.test( target.value ) ) {
                target.style.outline = "green solid 1px";
            } else if ( !regex.test( target.value ) ) {
                target.style.outline = "red solid 1px";
            }

            if ( target.value == "" ) {
                target.style.outline = "#e7a631 solid 1px";
            }
        };

    },

    checkEntries: function ( nom, email, message ) {

        const regexEmail = /^[^<>()\[\]\\.,;:\s@"]+(?:\.[^<>()\[\]\\.,;:\s@"]+)*@(?:[^<>()\[\]\\.,;:\s@"]+\.)+[^<>()\[\]\\.,;:\s@"]+$/;
        const regexNom = /^[a-zA-ZÀ-ÿ]+(?:[-' ][a-zA-ZÀ-ÿ]+)*$/;
        const regexMessage = /^[a-zA-Z0-9\s.,:'ÀÁÂÃÄÅàáâãäåÈÉÊËèéêëÎÏîïÔÕÖÙÚÛÜùúûüÿÇçŒœÆæØøœ]+$/;

        //on utilise les regex ici qui on été déclarées plus haut !
        if ( regexEmail.test( email ) && regexNom.test( nom ) && regexMessage.test( message ) ) {
            return true
        } else {
            return false
        }
    },
}

document.addEventListener( "DOMContentLoaded", message.init );