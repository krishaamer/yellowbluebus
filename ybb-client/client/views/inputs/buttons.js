Template.buttons.events({
  'click .button.keyword' (event, template) {
     
     const keyword = event.currentTarget.dataset.keyword;
     if (keyword) {
     	Session.set("current-keyword", [keyword]);

     	if (keyword == "first") {
     		Session.set('current-phrase', 'Hi, chilling out with my friends. I miss you!');
               Session.set('current-avatar', 'boy');
               Session.set('start-speaking', false);
     	}
     	if (keyword == "second") {
     		Session.set('current-phrase', 'Miss you too.');
               Session.set('current-avatar', 'girl');
               Session.set('start-speaking', false);
     	}
     	if (keyword == "third") {
     		Session.set('current-phrase', 'I wanna see you tonight');
               Session.set('current-avatar', 'boy');
               Session.set('start-speaking', false);
     	}
     	if (keyword == "fourth") {
     		Session.set('current-phrase', 'Come to my place');
               Session.set('current-avatar', 'girl');
               Session.set('start-speaking', false);
     	}
     	if (keyword == "fifth") {
     		Session.set('current-phrase', "Heading out. I'll be there soon!");
               Session.set('current-avatar', 'boy');
               Session.set('start-speaking', false);
     	}
     }
  }
});