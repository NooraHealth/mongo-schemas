
import { Lessons } from './lessons.js';

let Curriculums = new Mongo.Collection("nh_home_pages");

let CurriculumSchema = new SimpleSchema({
  title: {
    type:String
  },
  lessons: {
    type:[String],
    minCount:1
  },
  condition: {
    type:String,
    min:0
  }
});

Curriculums.attachSchema( CurriculumSchema );

Curriculums.helpers({
  getLessonDocuments: function() {
    if( this.lessons )
      return this.lessons.map( function( lesson, index ){
        return Lessons.findOne( {_id: lesson._id} );
      });
    else
      return [];
  }
});

Ground.Collection( Curriculums );

module.exports.Curriculums = Curriculums;

