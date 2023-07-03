import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.117.1/build/three.module.js';
// change theme

const theme = {
    changeThemeBtn: document.querySelector( '#light-mode' ),
    
    init: function () {
        // préférence dark/lightmode
        //localStorage.setItem( "lightMode", "0" )
        theme.checkTheme()
        
        theme.changeThemeBtn.addEventListener( 'click', theme.handleChangeTheme );

    },

    handleChangeTheme: function () {

        if ( localStorage.getItem( "lightMode" ) === "0" || !localStorage.getItem( "lightMode" ) ) {
            
            theme.purpleMode()

            

            localStorage.setItem( "lightMode","1" )
        } else {
            
            theme.yellowMode()

            localStorage.setItem( "lightMode","0" )
        } 
    },
    
    checkTheme: function () {
        
        if ( localStorage.getItem( "lightMode" ) == "1" ) {
            theme.purpleMode()
        } else {
            theme.yellowMode()

        }
    },

    yellowMode: function () {
        theme.setOfColor( '--primary-project-color', '#e7a631' );
        theme.setOfColor( '--secondary-project-color', '#1d2125' );
        theme.setOfColor( '--tertiary-project-color', '#ffffff' );
        theme.setOfColor( '--background-text-color', '#2d3135' );

        document.querySelector( '.body' ).style.color = "#ffffff"
    },

    purpleMode: function () {
        theme.setOfColor( '--secondary-project-color', '#33373c' );
        theme.setOfColor( '--tertiary-project-color', '#1d2125' );
        theme.setOfColor( '--primary-project-color', '#815E91' );
        theme.setOfColor( '--background-text-color', '#ffffff' );

        document.querySelector( '.body' ).style.color = "#ffffff"
        
    },

    setOfColor: function ( nameofcolor, thecolor ) {
        
        document.documentElement.style.setProperty(nameofcolor, thecolor);
    }
}

document.addEventListener("DOMContentLoaded",theme.init)