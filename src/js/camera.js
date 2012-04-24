forge.debug = true;

$(document).ready(function() {
  $('.add-picture-button').bind('click', function(e) {
    forge.file.getImage({
        width: 320,
        height: $('.page').height()
      },
      function(file) {
        // success
        forge.logging.debug(file);
        var url = forge.file.URL(file, function(imageUrl) {
          if(imageUrl !== undefined) {
            $('#pictureList').append('<img src="'+imageUrl+'"/>');
          }
        });
      }, function(e) {
        // error
        alert("error! "+e);
      }
    );
  });

  forge.topbar.setTitle("Photo Gallery", function(){
    forge.logging.info("Topbar title set.");
  }, function(e){
    forge.logging.error("Topbar title not set: "+e.message);
  });

  forge.topbar.setTitleImage("../img/camera.png", function(){
    forge.logging.info("Topbar titleImage set.");
  }, function(e){
    forge.logging.error("Topbar titleImage not set: "+e.message);
  });

  forge.topbar.setTint([255,255,255], function(){
    forge.logging.info("Topbar tint set.");
  }, function(e){
    forge.logging.error("Topbar tint not set: "+e.message);
  });

  // $('.store-button').bind('click', function() {



  //   // forge.request.ajax({
  //   //   url: "http://localhost:9393/upload",
  //   //   files: [picture, picture],
  //   //   success: function() {
  //   //     window.location.href = 'list.html';
  //   //   }
  //   // });

  // });
});