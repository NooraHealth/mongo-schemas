
import { Modules } from './modules.js';

let Lessons = new Mongo.Collection("nh_lessons");

let LessonSchema = new SimpleSchema({
  title: {
    type:String,
    max: 50
  },
  image: {
    type: String,
    regEx: /^[A-Za-z1-9]+\.(?:jpg|jpeg|png)$/
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
