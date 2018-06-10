import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import annyang from 'annyang';

export function voice () {
    
    if (annyang) {
	    annyang.addCommands({
	      	'Hello' () {

	          	FlowRouter.go('speak');
	          	Session.set('current-phrase', 'Hi, chilling out with my friends. I miss you!');
	          	Session.set('current-keyword', ['first']);
	          	Session.set('current-avatar', 'boy');
	          	Session.set('start-speaking', false);
	      	},
	      	'Start the bus' () {

	          	FlowRouter.go('speak');
	          	Session.set('current-phrase', 'Hi, chilling out with my friends. I miss you!');
	          	Session.set('current-keyword', ['first']);
	          	Session.set('current-avatar', 'boy');
	          	Session.set('start-speaking', false);
	      	},
	      	'Hello, start the bus' () {

	          	FlowRouter.go('speak');
	          	Session.set('current-phrase', 'Hi, chilling out with my friends. I miss you!');
	          	Session.set('current-keyword', ['first']);
	          	Session.set('current-avatar', 'boy');
	          	Session.set('start-speaking', false);
	      	},
	      	'Hi, chilling out with my friends. I miss you!' () {

	      		FlowRouter.go('speak');
	      		Session.set('current-phrase', 'Hi, chilling out with my friends. I miss you!');
	          	Session.set('current-keyword', ['first']);
	          	Session.set('current-avatar', 'boy');
	          	Session.set('start-speaking', false);
	      	},
	      	'Hi, I miss you too' () {

	        	Session.set('current-phrase', 'Hi, I miss you too');
	        	Session.set('current-keyword', ['second']);
	        	Session.set('current-avatar', 'girl');
	        	Session.set('start-speaking', false);
	      	},
	      	'I wanna see you tonight' () {

		        Session.set('current-phrase', 'I wanna see you tonight');
		        Session.set('current-keyword', ['angry']);
		        Session.set('current-avatar', 'boy');
		        Session.set('start-speaking', false);
	      	},
	      	'Come to my place' () {

		        Session.set('current-phrase', 'Come to my place');
		        Session.set('current-keyword', ['fourth']);
		        Session.set('current-avatar', 'girl');
		        Session.set('start-speaking', false);
		      },

		    "Heading out. I'll be there soon!" () {
		    	Session.set('current-phrase', "Heading out. I'll be there soon!");
		        Session.set('current-keyword', ['fifth']);
		        Session.set('current-avatar', 'boy');
		        Session.set('start-speaking', false);
		    },
		    'See you' () {

		        Session.set('current-phrase', "Heading out. I'll be there soon!");
		        Session.set('current-keyword', ['fifth']);
		        Session.set('current-avatar', 'boy');
		        Session.set('start-speaking', false);
		    },
	    });
	    annyang.start();
	}
}