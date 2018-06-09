Template.buttons.events({
  'click .button' (event, template) {
     
     const keyword = event.currentTarget.dataset.keyword;
     if (keyword) {
     	Session.set("current-keyword", [keyword]);
     }
  }
});