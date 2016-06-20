
import { Curriculums } from '../schemas/curriculums/curriculums.js';
import { Lessons } from '../schemas/curriculums/lessons.js';
import { Modules } from '../schemas/curriculums/modules.js';
import { OfflineFiles } from '../schemas/offline_files.js';
import { Conditions } from '../schemas/conditions.js';
import { Facilities } from '../schemas/facilities.js';

Meteor.publish("modules.inLesson", function(lessonId) {
  if( !lessonId ) {
    return [];
  }
  let lesson = Lessons.findOne( {_id: lessonId} );
  return Modules.find( {_id: {$in: lesson.modules}} );
});

Meteor.publish("lessons.all", function() {
  return Lessons.find({});
});

Meteor.publish("modules.all", function() {
  return Modules.find({});
});

Meteor.publish("curriculums.all", function() {
  return Curriculums.find({});
});

Meteor.publish("curriculums", function(id) {
  if( id )
    return Curriculums.find ({_id: id});
  else
    return [];
});

Meteor.publish("lessons.inCurriculum", function(curriculumId) {
  if( curriculumId ) {
    let curr = Curriculums.findOne( {_id: curriculumId} );
    if( curr )
      return Lessons.find( {_id: {$in: curr.lessons}} );
  }

  return [];
});


Meteor.publish( "lesson", function(id) {
  return Lessons.find({_id: id});
});

Meteor.publish("facilities.all", function() {
  return Facilities.find({});
});

Meteor.publish("conditions.all", function() {
  return Conditions.find({});
});


