import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import {voice} from '/client/voice.js';
import keyboardJS from 'keyboardjs';

Meteor.startup(() => {

	voice();

  	Session.set('current-keyword', ['hello']);
  	Session.set('start-speaking', true);
});

keyboardJS.bind('l', function(e) {
	
    FlowRouter.go('landing');
    jQuery('#video-player').remove();
    if (!jQuery('#video-player')) {
    	jQuery('.video-box').append('<video id="video-player" autoplay class="cld-video-player cld-fluid cld-video-player-skin-light"></video>');
    }
});

keyboardJS.bind('k', function(e) {
	
    FlowRouter.go('welcome');
    jQuery('#video-player').remove();
	if (!jQuery('#video-player')) {
    	jQuery('.video-box').append('<video id="video-player" autoplay class="cld-video-player cld-fluid cld-video-player-skin-light"></video>');
    }
});

keyboardJS.bind('q', function(e) {
	
    FlowRouter.go('speak');
});

keyboardJS.bind('w', function(e) {

    FlowRouter.go('welcome');
    jQuery('#video-player').remove();
	if (!jQuery('#video-player')) {
    	jQuery('.video-box').append('<video id="video-player" autoplay class="cld-video-player cld-fluid cld-video-player-skin-light"></video>');
    }
});

keyboardJS.bind('1', function(e) {

	FlowRouter.go('speak');
	Session.set('current-keyword', ['first']);
  	Session.set('current-phrase', 'Hi, chilling out with my friends. I miss you!');
   	Session.set('current-avatar', 'boy');
   	Session.set('start-speaking', false);
});

keyboardJS.bind('2', function(e) {

	FlowRouter.go('speak');
	Session.set('current-keyword', ['second']);
	Session.set('current-phrase', 'Miss you too.');
   	Session.set('current-avatar', 'girl');
   	Session.set('start-speaking', false);
});

keyboardJS.bind('3', function(e) {

	FlowRouter.go('speak');
	Session.set('current-keyword', ['third']);
	Session.set('current-phrase', 'I wanna see you tonight');
   	Session.set('current-avatar', 'boy');
   	Session.set('start-speaking', false);
});

keyboardJS.bind('4', function(e) {

	FlowRouter.go('speak');
	Session.set('current-keyword', ['fourth']);
	Session.set('current-phrase', 'Come to my place');
	Session.set('current-avatar', 'girl');
	Session.set('start-speaking', false);
});

keyboardJS.bind('5', function(e) {

	FlowRouter.go('speak');
	Session.set('current-keyword', ['fifth']);
	Session.set('current-phrase', "Heading out. I'll be there soon!");
	Session.set('current-avatar', 'boy');
	Session.set('start-speaking', false);
});
