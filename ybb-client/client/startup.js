import {voice} from '/client/voice.js';

Meteor.startup(() => {

	voice();

  	Session.set('current-keyword', ['hello']);
  	Session.set('start-speaking', true);
});
