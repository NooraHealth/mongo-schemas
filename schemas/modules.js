
let Modules = new Mongo.Collection("nh_modules");

let ModuleSchema = new SimpleSchema({
  type: {
    type: String,
    regEx: /(MULTIPLE_CHOICE|SCENARIO|BINARY|VIDEO|SLIDE)/
  },
  title: {
    type: String,
    optional: true,
    max: 100
  },
  image: {
    type: String,
    optional: true,
    regEx: /^[A-Za-z1-9]+\.(?:jpg|jpeg|png)$/
  },
  question: {
    type: String,
    optional: true,
    max: 150
  },
  options: {
    type: [String],
    optional: true,
    custom: function() {
      console.log("In the custom validator for options");
      console.log(this);
    }
  },
  correct_answer: {
    type: [String],
    optional: true,
    custom: function() {
      //console.log("In the custom validator for options");
      //console.log(this);
    }
  },
  correct_audio: {
    type: String,
    optional: true,
    regEx: /^[A-Za-z1-9]+\.(?:m4a|mp3|wav|ogg|aac)$/
  },
  video: {
    type: String,
    optional: true,
    regEx: /^[A-Za-z1-9]+\.(mp4|mov)$/
  },
  audio: {
    type: String,
    optional: true,
    regEx: /^[A-Za-z1-9]+\.(m4a|mp3|wav|ogg|aac)$/
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
    return this.correct_answer.indexOf( response ) != -1;
  }

});

Ground.Collection( Modules );

module.exports.Modules = Modules;

