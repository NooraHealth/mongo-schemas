
let Modules = new Mongo.Collection("nh_modules");

let ModuleSchema = new SimpleSchema({
  type: {
    type: String,
    regEx: /(MULTIPLE_CHOICE|SCENARIO|BINARY|VIDEO|SLIDE)/
  },
  title: {
    type: String,
    optional: true
  },
  image: {
    type: String,
    optional: true
  },
  question: {
    type: String,
    optional: true
  },
  options: {
    type: [String],
    optional: true
  },
  correct_answer: {
    type: [String],
    optional: true
  },
  correct_audio: {
    type: String,
    optional: true
  },
  video: {
    type: String,
    optional: true
  },
  audio: {
    type: String,
    optional: true
  }
});

Modules.attachSchema( ModuleSchema );

Modules.helpers({

  isEmbedded: function() {
    if( this.video_url )
      return this.video_url.startsWith( "http" );
    else
      return false;
  },

  isCorrectAnswer: function( response ){
    return this.correct_answer.includes( response );
  }

});

Ground.Collection( Modules );

module.exports.Modules = Modules;

