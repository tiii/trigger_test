$('.upload-button').hide();

$('.add-picture-button').bind('click', function(e) {
  
  forge.file.getImage({
      width: 320,
      height: $('.page').height()
    }, function(file) {
      // success
      var url = forge.file.URL(file, function(imageUrl) {
      $('.picture-container').append('<img src="'+url+'">');
      $('.add-picture-button').hide();
      $('.upload-button').show();
    }, function(e) {
      // error
    });

  });
});