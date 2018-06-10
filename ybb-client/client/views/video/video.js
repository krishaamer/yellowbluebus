import cloudinary from "cloudinary-core";
import "cloudinary-video-player";

cl = cloudinary.Cloudinary.new({ 
  cloud_name: Meteor.settings["public"].CLOUDINARY_CLOUD_NAME,
  api_key: Meteor.settings["public"].CLOUDINARY_API_KEY,
  api_secret: 'uvSoIevmAgWlI6bD1fkqkJ-OQH0',
  secret: true
});

Template.video.onCreated(() => {

	const self = Template.instance();
	self.autorun(() => {
		self.subscribe('films', Session.get('current-keyword'));
	});
});

Template.video.onRendered(() => {
  Template.instance().data.mp = cl.videoPlayer('video-player', {});
});

Template.video.helpers({
  mp () {
    return Template.instance().data.mp;
  },
  films () {

    return Films.findOne({
    	keywords: {
        $in: Session.get('current-keyword')
      }
    });
  },
});