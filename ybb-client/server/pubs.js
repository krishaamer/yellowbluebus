Meteor.publish('films', (keyword) => {

	check(keyword, Array);

	return Films.find({
    	keywords: {
            $in: keyword
        }
    });
});