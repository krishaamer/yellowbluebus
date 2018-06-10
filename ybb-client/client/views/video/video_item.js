Template.video_item.onRendered(() => {

  self = Template.instance();
  console.log(self);
  player = self.data.mp;
  if (player) {

    player.source(self.data.films.file, { sourceTypes: ['hls', 'mp4', 'webm', 'mov'] }).play();
    player.on('sourcechanged', () => console.log("sourcechanged"));
  }
});

Template.video_item.helpers({
  title () {
    return Template.instance().data.films.title;
  },
  phrase () {
    return Session.get('current-phrase');
  },
});