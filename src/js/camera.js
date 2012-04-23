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
      $('.upload-button').data('picture-file',file);
    }, function(e) {
      // error
    }
  );

  // fix tabbar
  myTabBar.init();
});

$('.upload-button').bind('click', function(e) {
  forge.request.ajax({
    url: "http://example.com/file_upload",
    files: [this.data('upload-button')],
    success: function() {
      window.location.href = 'list.html';
    }
  });
});