import {voice} from '/client/voice.js';
import keyboardJS from 'keyboardjs';

Meteor.startup(() => {

	voice();

  	Session.set('current-keyword', ['hello']);
  	Session.set('start-speaking', true);
});


keyboardJS.bind('1', function(e) {
  	Session.set('current-phrase', 'Hi, chilling out with my friends. I miss you!');
   	Session.set('current-avatar', 'boy');
   	Session.set('start-speaking', false);
});

keyboardJS.bind('2', function(e) {
	Session.set('current-phrase', 'Miss you too.');
   	Session.set('current-avatar', 'girl');
   	Session.set('start-speaking', false);
});

keyboardJS.bind('3', function(e) {
	Session.set('current-phrase', 'I wanna see you tonight');
   	Session.set('current-avatar', 'boy');
   	Session.set('start-speaking', false);
});

keyboardJS.bind('4', function(e) {
	Session.set('current-phrase', 'Come to my place');
	Session.set('current-avatar', 'girl');
	Session.set('start-speaking', false);
});

keyboardJS.bind('5', function(e) {
	Session.set('current-phrase', "Heading out. I'll be there soon!");
	Session.set('current-avatar', 'boy');
	Session.set('start-speaking', false);
});
