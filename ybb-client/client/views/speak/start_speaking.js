Template.start_speaking.helpers({
  start_speaking () {

  	if (Session.get('start-speaking')) {
  		return true;
  	} else {
  		return false;
  	}
    
    return false;
  },
});
