Template.video.onCreated(() => {

	const self = Template.instance();
	self.autorun(() => {
		self.subscribe('films', Session.get('current-keyword'));
	});
});

Template.video.helpers({
  films () {

  	//console.log(Session.get('current-keyword'));

    return Films.findOne({
    	keywords: {
            $in: Session.get('current-keyword')
        }
    });
  },
});