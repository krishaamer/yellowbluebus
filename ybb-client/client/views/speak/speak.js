import {voice} from '/client/voice.js';

Template.speak.onRendered(() => {
  
});

Template.speak.events({
  'click .button.speak' (event, template) {

    voice();
  },
});
