Template.avatar.helpers({
  girl () {

  	if (Session.get('current-avatar') == 'girl') {
  		return true;
  	} else {
  		return false;
  	}
    
    return false;
  },
});
