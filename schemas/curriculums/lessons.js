
import { Modules } from './modules.js';
import { define } from './define.js';

let Lessons = new Mongo.Collection("nh_lessons");

let LessonSchema = new SimpleSchema({
  title: {
    type:String,
    max: 50
  },
  image: {
    type: String,
    regEx: define.imageFileRegEx
  },
  modules: {
    type: [String]
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
