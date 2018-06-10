import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import annyang from 'annyang';

export function voice () {
    
    if (annyang) {
	    annyang.addCommands({
	      	'Hello' () {

	          	FlowRouter.go('speak');
	          	Session.set('current-phrase', 'Hi, chilling out with my friends. I miss you!');
	          	Session.set('current-keyword', ['first']);
	          	console.log("hello");
	      	},
	      	'Start the bus' () {

	          	FlowRouter.go('speak');
	          	Session.set('current-phrase', 'Hi, chilling out with my friends. I miss you!');
	          	Session.set('current-keyword', ['first']);
	          	console.log("start");
	      	},
	      	'Hello, start the bus' () {

	          	FlowRouter.go('speak');
	          	Session.set('current-phrase', 'Hi, chilling out with my friends. I miss you!');
	          	Session.set('current-keyword', ['first']);

	          	console.log("start");
	      	},
	      	'Hi, chilling out with my friends. I miss you!' () {

	      		FlowRouter.go('speak');
	      		Session.set('current-phrase', 'Hi, chilling out with my friends. I miss you!');
	          	Session.set('current-keyword', ['first']);
	      	},
	      	'Hi, I miss you too' () {

	        	Session.set('current-phrase', 'Hi, I miss you too');
	        	Session.set('current-keyword', ['second']);
	      	},
	      	'I wanna see you tonight' () {

		        Session.set('current-phrase', 'I wanna see you tonight');
		        Session.set('current-keyword', ['angry']);
	      	},
	      	'Come to my place' () {

		        Session.set('current-phrase', 'Come to my place');
		        Session.set('current-keyword', ['fourth']);
		      },

		    "Heading out. I'll be there soon!" () {
		    	Session.set('current-phrase', "Heading out. I'll be there soon!");
		        Session.set('current-keyword', ['fifth']);
		    },
	      'I miss you so much' () {

	        Session.set('current-phrase', 'I miss you so much');
	        Session.set('current-keyword', ['peaceful']);
	      },
	      'I want to spend the rest of my life with you' () {

	        Session.set('current-phrase', 'I want to spend the rest of my life with you');
	        Session.set('current-keyword', ['pretty']);
	      },
	      'I miss you too' () {

	        Session.set('current-phrase', 'I miss you too');
	        Session.set('current-keyword', ['lost']);
	      },
	      'Heading out' () {

	        Session.set('current-phrase', 'Heading out');
	        Session.set('current-keyword', ['courage']);
	      },
	      'You are so beautiful' () {

	        Session.set('current-phrase', 'You are so beautiful');
	        Session.set('current-keyword', ['encouraged', 'playful']);
	      },
	      'I love you' () {

	        Session.set('current-phrase', 'I love you');
	        Session.set('current-keyword', ['love']);
	      },
	      'You make me want to be a better man' () {

	        	Session.set('current-phrase', 'You make me want to be a better man');
	        	Session.set('current-keyword', ['dreaming']);
	      },
	      'I want to marry you' () {

	        Session.set('current-phrase', 'I want to marry you');
	        Session.set('current-keyword', ['love']);
	      },
	      'Why are you not talking to me?' () {

	        Session.set('current-phrase', 'Why are you not talking to me?');
	        Session.set('current-keyword', ['love']);
	      },
	      'I want to go home with you' () {

	        Session.set('current-phrase', 'I want to go home with you');
	        Session.set('current-keyword', ['love']);
	      },
	      'You are my heart and my everything' () {

	        Session.set('current-phrase', 'You are my heart and my everything');
	        Session.set('current-keyword', ['end']);
	      }
	    });
	    annyang.start();
	}
}