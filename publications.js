
import { Curriculums } from "meteor/mongo-schemas";
import { Lessons } from "meteor/mongo-schemas";
import { Modules } from "meteor/mongo-schemas";
import { OfflineFiles } from "meteor/mongo-schemas";

Meteor.publish("modules.inLesson", function(lessonId) {
  if( !lessonId ) {
    return [];
  }
  let lesson = Lessons.findOne( {_id: lessonId} );
  return Modules.find( {_id: {$in: lesson.modules}} );
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

