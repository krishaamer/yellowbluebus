import {voice} from '/client/voice.js';

Template.speak.events({
  'click .button.speak' (event, template) {

    voice();
  },
});
