
import { Curriculums } from "meteor/noorahealth:mongo-schemas";
import { Lessons } from "meteor/noorahealth:mongo-schemas";
import { chai } from 'meteor/practicalmeteor:chai';

should = chai.should();

describe("Curriculum Helpers", function() {
  it("Should have a helper getLessonDocuments", (done) => {
    let validCurriculum = {
      title: "Valid Title",
      language: 'Kannada',
      condition: 'Neonatology',
      lessons: []
    };

    Curriculums.insert( validCurriculum, function(error, id){
      curr = Curriculums.findOne({_id: id});
      setTimeout(function(){
        should.exist(id);
        should.exist(curr.getLessonDocuments);
        done();
      });
    });
  });

  it("getLessonDocuments should return [] when curriculum has no lessons", (done) => {
    let validCurriculum = {
      title: "Valid Title",
      language: 'Kannada',
      condition: 'Neonatology',
      lessons: []
    };

    Curriculums.insert( validCurriculum, function(error, id){
      curr = Curriculums.findOne({_id: id});
      setTimeout(function(){
        should.exist(id);
        should.exist(curr.getLessonDocuments);
        should.equal(curr.getLessonDocuments().length, 0);
        done();
      });
    });
  });

  it("getLessonDocuments should return the correct document when the curriculum has one lesson", (done) => {
    lessonId = Lessons.insert({
      title: "Valid lesson",
      image: "image.png",
      modules:[]
    });
    lesson = Lessons.findOne({_id: lessonId});

    let validCurriculum = {
      title: "Valid Title",
      language: 'Kannada',
      condition: 'Neonatology',
      lessons: [lesson._id]
    };

    Curriculums.insert( validCurriculum, function(error, id){
      curr = Curriculums.findOne({_id: id});
      docs = curr.getLessonDocuments();
      setTimeout(function(){
        should.exist(id);
        should.exist(curr.getLessonDocuments);
        should.equal(docs.length, 1);
        should.equal(docs[0]._id, lesson._id);
        should.equal(docs[0].title, lesson.title);
        should.equal(docs[0].image, lesson.image);
        should.equal(docs[0].modules.length, lesson.modules.length);
        done();
      });
    });
  });

  it("getLessonDocuments should return the correct documents when the curriculum has two lessons", (done) => {

    let lessons = [];
    lessonOneId = Lessons.insert({
      title: "Valid lesson",
      image: "image.png",
      modules:[]
    });
    lessons.push(Lessons.findOne({_id: lessonOneId}));

    lessonTwoId = Lessons.insert({
      title: "Another valid lesson",
      image: "image.png",
      modules:[]
    });
    lessons.push(Lessons.findOne({_id: lessonTwoId}));


    let validCurriculum = {
      title: "Valid Title",
      language: 'Kannada',
      condition: 'Neonatology',
      lessons: [lessonOneId, lessonTwoId]
    };

    Curriculums.insert( validCurriculum, function(error, id){
      curr = Curriculums.findOne({_id: id});
      docs = curr.getLessonDocuments();
      setTimeout(function(){
        should.exist(id);
        should.not.exist(error);
        should.exist(curr.getLessonDocuments);
        should.equal(docs.length, 2);

        should.equal(docs[0]._id, lessons[0]._id);
        should.equal(docs[0].title, lessons[0].title);
        should.equal(docs[0].image, lessons[0].image);
        should.equal(docs[0].modules.length, lessons[0].modules.length);

        should.equal(docs[1]._id, lessons[1]._id);
        should.equal(docs[1].title, lessons[1].title);
        should.equal(docs[1].image, lessons[1].image);
        should.equal(docs[1].modules.length, lessons[1].modules.length);
        done();
      });
    });
  });
});


