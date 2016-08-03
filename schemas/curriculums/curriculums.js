
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
  introduction: {
    type: String,
    optional: true
  },
  beginner: {
    type:[String],
    defaultValue: []
  },
  intermediate: {
    type:[String],
    defaultValue: []
  },
  advanced: {
    type:[String],
    defaultValue: []
  }
});

Curriculums.attachSchema( CurriculumSchema );

Curriculums.helpers({

  getLessonDocuments: function() {
    let filterEmptyValues = function(elem) {
      return elem !== null && elem != undefined && elem != "";
    };
    const ids = [this.introduction].concat(this.beginner).concat(this.intermediate).concat(this.advanced);
    const filtered = ids.filter(filterEmptyValues);
    let docs = filtered.map( id =>{
      return Lessons.findOne({_id: id});
    });

    return docs;
  }
});

Ground.Collection( Curriculums );

module.exports.Curriculums = Curriculums;

