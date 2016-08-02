
import { Lessons } from './lessons.js';

let Curriculums = new Mongo.Collection("nh_home_pages");

let CurriculumSchema = new SimpleSchema({
  title: {
    type:String,
    min: 1,
    max: 40
  },
  condition: {
    type: String,
    regEx: /^(Cardiac Surgery|Diabetes|Neonatology)$/
  },
  language: {
    type: String,
    regEx: /^(Hindi|English|Kannada|Tamil)$/
  },
  lessons: {
    type:[String]
  }
});

Curriculums.attachSchema( CurriculumSchema );

Curriculums.helpers({
  getLessonDocuments: function() {
    if( this.lessons ) {
      let lessons = this.lessons.map( function( id ){
        return Lessons.findOne( {_id: id} );
      });
      let filterNullValues = function(elem) {
        console.log(elem);
        return elem !== null;
      };
      return lessons.filter(filterNullValues);
    } else
      return [];
  }
});

Ground.Collection( Curriculums );

module.exports.Curriculums = Curriculums;

