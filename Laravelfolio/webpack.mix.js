const mix = require( 'laravel-mix' );


mix.webpackConfig( {
    stats: {
        children: true,
    },
} );
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js( 'resources/js/app.js', 'public/js' )
    .copy( 'resources/img', 'public/img' )
    // .postCss( ['resources/css/app.css','resources/css/smallscreen.css'],'public/css', [
    //     //
    // ] );
mix.js( 'resources/js/message.js', 'public/js' );
mix.js( 'resources/js/webAnimation.js', 'public/js' );
mix.js( 'resources/js/onScroll.js', 'public/js' );
mix.js( 'resources/js/lightMode.js', 'public/js' );
mix.styles(['resources/css/app.css', 'resources/css/smallscreen.css'], 'public/css/app.css');
    
