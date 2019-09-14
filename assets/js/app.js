/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
require('../css/app.css');

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
 const $ = require('jquery');
 const bootstrap = require('bootstrap');
 
 console.log('Hello Webpack Encore! Edit me in assets/js/app.js');

$(document).ready(function(){
     var name , password;
   

     $('button#submit').on('submit click',function(e){
        e.preventDefault();
        name = $('#email').val();
        password = $('#password').val();
        var data = {
            name : name,
            password : password
        };
        $.post('/decode_data',{
            data : JSON.stringify(data),
        }, function(response){
           if (typeof(response) == "object"){
               var name = response.name;
               var password = response.password;
               var text = 'Votre nom est '+name+' et votre mot de passe est '+password+' vous etes désormais connecté.';
               $($('div.modal-body')).empty().append(text);
               $('#exampleModalLong').modal('toggle');
               $('#exampleModalLong').modal('show');
           }else{
               alert('Veuillez reesayer svp, Mr/Mme');
           }
        });

       
     });
});
