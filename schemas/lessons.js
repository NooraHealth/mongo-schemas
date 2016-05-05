
import { Modules } from './modules.js';

let Lessons = new Mongo.Collection("nh_lessons");

let LessonSchema = new SimpleSchema({
  title: {
    type:String,
    max: 50
  },
  image: {
    type: String,
    optional:true
  },
  modules: {
    type: [String],
    optional:true
  }
});

Lessons.attachSchema( LessonSchema );

Lessons.helpers({
  getModulesSequence: function() {
    if( this.modules )
      return this.modules.map( ( id ) => {
        return Modules.findOne( {_id: id} );
      });
  }
});

Ground.Collection( Lessons );

module.exports.Lessons = Lessons;
