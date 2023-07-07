const message = {
    
    form: document.querySelector( '#form' ),

    init: function () {
        message.form.addEventListener( 'submit', message.handleFormSubmit );


    },

    handleFormSubmit: async function (e) {
        
        // changer le comportement par défault
        e.preventDefault();

        // creer un formData
        const formData = new FormData( message.form )

        // ajouter du son
        
        
        
        
        
        // on check les données
        if ( message.checkEntries( formData.get( 'nom' ), formData.get( 'email' ), formData.get( 'message' ) ) ) {
            
        

            // on lance l'appel ajax avec des données dynamiques
            const response = await fetch( window.location.protocol + "//" + window.location.host + "/api/message", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( {
                    nom: formData.get( 'nom' ),
                    email: formData.get( 'email' ),
                    message: formData.get( 'message' )
                } )
            
            } );
            
            var soundWin = new Audio( './autre/yeahoo.mp3' );
            soundWin.volume = 0.04;
            // jouer le son
            soundWin.play();

           
            setTimeout(function() {
                alert( "Message envoyé ! 💌" );
            }, 500);
        } else {

            var soundLoose = new Audio( './autre/failed.mp3' );
            soundLoose.volume = 0.04;
            // jouer le son
            soundLoose.play();

            setTimeout(function() {
                alert( "echec d'envoi, veuillez inscrire une adresse email, un nom et un message valide" );
            }, 500);
        }
        
    },

    checkEntries: function ( nom, email, message ) {
        
        // on vérifie les entrés (regex made in chat gpt)
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const regexNom = /^[a-zA-Z0-9\s]+$/;
        const regexMessage = /^[a-zA-Z0-9\s.,:'ÀÁÂÃÄÅàáâãäåÈÉÊËèéêëÎÏîïÔÕÖÙÚÛÜùúûüÿÇçŒœÆæØøœ]+$/u;

        if ( regexEmail.test( email ) && regexNom.test( nom ) && regexMessage.test( message ) ) {
            return true
        } else {
            return false
        }

    }
}

document.addEventListener( "DOMContentLoaded", message.init );