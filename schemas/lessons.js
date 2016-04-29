
import { Modules } from './modules.js';

let Lessons = new Mongo.Collection("nh_lessons");

let LessonSchema = new SimpleSchema({
  title: {
    type:String
  },
  icon: {
    type: String,
    optional:true
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
  getModulesSequence: ()=> {
    if( this.modules )
      return this.modules.map( ( module ) => {
        return Modules.findOne( {_id: module._id} );
      });
  }
});

Ground.Collection( Lessons );

module.exports.Lessons = Lessons;
