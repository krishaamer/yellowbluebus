Template.buttons.events({
  'click .button.keyword' (event, template) {
     
     const keyword = event.currentTarget.dataset.keyword;
     if (keyword) {
     	Session.set("current-keyword", [keyword]);

     	if (keyword == "first") {
     		Session.set('current-phrase', 'Hi, chilling out with my friends. I miss you!');
     	}
     	if (keyword == "second") {
     		Session.set('Miss you too.');
     	}
     	if (keyword == "third") {
     		Session.set('current-phrase', 'I wanna see you tonight');
     	}
     	if (keyword == "fourth") {
     		Session.set('current-phrase', 'Come to my place');
     	}
     	if (keyword == "fifth") {
     		Session.set('current-phrase', "Heading out. I'll be there soon!");
     	}
     }
  }
});