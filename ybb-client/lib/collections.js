import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Films = new Mongo.Collection('films');

Films.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Question",
    optional: false
  },
  file: {
    type: String,
    label: "Answer",
    max: 2000,
    autoform: {
      rows: 10
    },
    optional: true
  },
}));
