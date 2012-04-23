forge.debug = true;

forge.logging.info("curPage: "+forge.prefs.get('curPage'));

var myTabBar = {
  // Properties
  buttons: {},

  // Methods
  init: function() {
    var self = this;
    this.removeAllButtons();

    forge.tabbar.addButton({
      icon: "img/list.png",
      text: "List",
      index: 0
      }, function(button) {
        self.addButtonToBar('list',button);

        button.onPressed.addListener(function() {
          forge.logging.info("Set curPage: "+"list");
          forge.prefs.set('curPage','list');
          forge.logging.info("curPage: "+forge.prefs.get('curPage'));
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
          forge.prefs.set('curPage','camera');

          window.location.href = "camera.html";
          // forge.tabs.openWithOptions({
          //     url: "camera.html",
          //     title: "Take Snapshot"
          //   },
          //   function(data) {
          //     forge.logging.log(data.url);
          //   }
          // );
        }
      );
    });
  },
  removeAllButtons: function() {
    forge.tabbar.removeButtons();
  },
  addButtonToBar: function(identifier, button) {
    page = null;
    forge.prefs.get('curPage',function(val) {
      page = val;
    });
    this.buttons[identifier] = button;
    if(page === identifier)
      button.setActive();
  },
  removeButtonWithIdentifier: function(identifier) {
    this.buttons[identifier].remove();
  }
};

myTabBar.init();