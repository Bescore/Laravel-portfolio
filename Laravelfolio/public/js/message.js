const message = {
    
    form: document.querySelector( '#form' ),
    soundWin: new Audio( './autre/yeahoo.mp3' ),
    soundLoose : new Audio( './autre/failed.mp3' ),

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
            
            message.soundWin.volume = 0.04;
            // jouer le son
            message.soundWin.play();

            setTimeout(function() {
                alert( "Message envoyé ! 💌" );
            }, 450);
        } else {

            
            message.soundLoose.volume = 0.04;
            // jouer le son
            message.soundLoose.play();

            setTimeout(function() {
                alert( "Echec d'envoi ⛔, veuillez inscrire une adresse email, un nom et un message valide" );
            }, 450);
        }
        
    },

    checkEntries: function ( nom, email, message ) {
        
        // on vérifie les entrées (regex made in chat gpt)
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