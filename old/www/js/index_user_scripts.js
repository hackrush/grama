/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #btnFacebookLogin */
    $(document).on("click", "#btnFacebookLogin", function(evt)
    {
         /*global activate_page */
         activate_page("#photosPage"); 
         return false;
    });
    
        /* button  #btnPhoto */
    $(document).on("click", "#btnPhoto", function(evt)
    {
        /* your code goes here */
       
       
         return false;
    });
    
        /* button  #btnVideo */
    $(document).on("click", "#btnVideo", function(evt)
    {

        

         return false;
    });
    
        /* button  #btnLoc */
    $(document).on("click", "#btnLoc", function(evt)
    {
         /*global activate_page */
         activate_page("#map"); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
