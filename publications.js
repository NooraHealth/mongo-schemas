
import { Curriculums } from "meteor/mongo-schemas";
import { Lessons } from "meteor/mongo-schemas";
import { Modules } from "meteor/mongo-schemas";
import { OfflineFiles } from "meteor/mongo-schemas";

Meteor.publish("modules.inLesson", (lessonId) =>
  if( !lessonId ) {
    return [];
  }
  let lesson = Lessons.findOne( {_id: lessonId} );
  return Modules.find( {_id: {$in: lesson.modules}} );
);

Meteor.publish "curriculums.all", ->
  return Curriculums.find({})

Meteor.publish "curriculum", (id) ->
  if id then Curriculums.find ({_id: id}) else []

Meteor.publish "lessons.inCurriculum", (curriculumId) ->
  if curriculumId
    curr = Curriculums.findOne {_id: curriculumId}
    if curr? then return Lessons.find {_id: {$in: curr.lessons}} else []
  else
    return []

Meteor.publish "lesson", (id) ->
  return Lessons.find ({_id: id})

