import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

FlowRouter.globals.push({
  meta: {
    charset: {
      charset: 'UTF-8',
    },
    keywords: {
      name: 'keywords',
      itemprop: 'keywords',
      content: 'movies, video, chat',
    },
    description: {
      name: 'description',
      itemprop: 'description',
      property: 'og:description',
      content: Meteor.settings["public"].SITE_DESC,
    },
    image: {
      name: 'twitter:image',
      itemprop: 'image',
      property: 'og:image',
      content: Meteor.settings["public"].DEFAULT_SHARE_IMG,
    },
    google: {
      name: 'google-site-verification',
      content: Meteor.settings["public"].GOOGLE_SITE_VERIFICATION,
    },
    'og:type': 'website',
    'og:title' () {
      return document.title;
    },
    'og:site_name': Meteor.settings["public"].SITE_NAME,
    url: {
      property: 'og:url',
      itemprop: 'url',
      content () {
        return window.location.href;
      }
    },
    'twitter:card': 'summary',
    'twitter:title' () {
      return document.title;
    },
    'twitter:description': Meteor.settings["public"].SITE_DESC,
    'twitter:site': {
      name: 'twitter:site',
      value: Meteor.settings["public"].TWITTER_HANDLE,
    },
    'twitter:creator': {
      name: 'twitter:creator',
      value: Meteor.settings["public"].TWITTER_HANDLE,
    },
    'http-equiv': {
      'http-equiv': 'X-UA-Compatible',
      content: 'IE=edge,chrome=1'
    },
    robots: 'index, follow',
  },
});

FlowRouter.route('/', {
  name: 'welcome', 
  title: 'Yellow Blue Bus', 
  action () {
    
    BodyClass.add('home');
    this.render('layout', 'main', {
      
      header: "header",
      content: "welcome",
      footer: "footer",
    });

  },
});

FlowRouter.route('/speak', {
  name: 'speak', 
  title: 'Yellow Blue Bus', 
  action () {

    BodyClass.add('home');
    this.render('layout', 'main', {
      
      header: "header",
      content: "video",
      belowContent: "navigation",
      footer: "footer",
    });

  },
});

BodyClass.config({
  element: 'body',
  classes: [],
});

FlowRouter.triggers.enter([() => BodyClass.run()]);
FlowRouter.triggers.exit([() => BodyClass.cleanup()]);

import { FlowRouterMeta, FlowRouterTitle } from 'meteor/ostrio:flow-router-meta';
new FlowRouterMeta(FlowRouter);
new FlowRouterTitle(FlowRouter);
