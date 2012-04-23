$(document).ready(function() {
  var picture;

  $('.upload-button').hide();

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
            $('.picture-container').append('<img src="'+imageUrl+'">');
            $('.add-picture-button').hide();
            $('.upload-button').show();
          }
        });
        picture = file;
      }, function(e) {
        // error
        alert("error! "+e);
      }
    );
  });

  $('.upload-button').bind('click', function() {

    forge.request.ajax({
      type: "POST",
      url: "http://localhost:9393/upload",
      data: {
        name: picture.name,
        uuid: forge.tools.UUID()
      },
      files: [picture],
      success: function() {
        window.location.href = 'list.html';
      }
    });

  });
});