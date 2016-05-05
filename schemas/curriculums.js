
import { Lessons } from './lessons.js';

let Curriculums = new Mongo.Collection("nh_home_pages");

let CurriculumSchema = new SimpleSchema({
  title: {
    type:String,
    min: 1,
    max: 40
  },
  lessons: {
    type:[String]
  }
});

Curriculums.attachSchema( CurriculumSchema );

Curriculums.helpers({
  getLessonDocuments: function() {
    if( this.lessons ) {
      return this.lessons.map( function( id ){
        return Lessons.findOne( {_id: id} );
      });
    } else
      return [];
  }
});

Ground.Collection( Curriculums );

module.exports.Curriculums = Curriculums;

