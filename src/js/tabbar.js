forge.debug = true;

var myTabBar = {
  // Properties
  buttons: {},

  // Methods
  init: function() {
    var self = this;
    self.removeAllButtons();

    forge.tabbar.addButton({
      icon: "img/list.png",
      text: "List",
      index: 0
      }, function(button) {
        self.addButtonToBar('list',button);

        button.onPressed.addListener(function() {
          forge.prefs.set('curPage','list');
          window.location.href = "list.html";
        });
      }
    );

    forge.tabbar.addButton({
      icon: "img/camera.png",
      text: "Add Photo",
      index: 1
      }, function(button) {
        self.addButtonToBar('camera',button);

        button.onPressed.addListener(function() {
          forge.prefs.set('curPage','camera', function() {alert("worked");}, function(e) {alert(e);});
          window.location.href = "camera.html";
        }
      );
    });
  },
  removeAllButtons: function() {
    forge.tabbar.removeButtons();
  },
  addButtonToBar: function(identifier, button) {
    this.buttons[identifier] = button;
    if(this.getCurrentPage() === identifier)
      button.setActive();
  },
  removeButtonWithIdentifier: function(identifier) {
    this.buttons[identifier].remove();
  },
  getCurrentPage: function() {
    var page = null;
    forge.prefs.get('curPage',function(val) { page = val; });
    return page;
  }
};
 
myTabBar.init();
forge.logging.info("curPage: "+myTabBar.getCurrentPage());