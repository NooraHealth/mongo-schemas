
import { Lessons } from "meteor/noorahealth:mongo-schemas";
import { Modules } from "meteor/noorahealth:mongo-schemas";
import { chai } from 'meteor/practicalmeteor:chai';

should = chai.should();

describe("Lessons Helpers", ()=> {

  it("Should have a helper getModulesSequence", (done) => {
    let validLesson = {
      title: "Valid Title",
      image: "image.png",
      modules: []
    };

    Lessons.insert( validLesson, function(error, id){
      lesson = Lessons.findOne({_id: id});
      setTimeout(function(){
        should.exist(id);
        should.exist(lesson.getModulesSequence);
        done();
      });
    });
  });

  it("getModulesSequence should return [] when lesson has no modules", (done) => {
    let validLesson = {
      title: "Valid Title",
      image: "image.png",
      modules: []
    };

    Lessons.insert( validLesson, function(error, id){
      lesson = Lessons.findOne({_id: id});
      setTimeout(function(){
        should.exist(id);
        should.exist(lesson.getModulesSequence);
        should.equal(lesson.getModulesSequence().length, 0);
        done();
      });
    });
  });

  it("getModulesSequence should return the correct document when the lesson has one module", (done) => {
    moduleId = Modules.insert({
      type: "SLIDE",
      title: "title",
      image: 'image.png',
      audio: 'audio.ogg'
    });
    module = Modules.findOne({_id: moduleId});

    let validLesson = {
      title: "Valid lesson",
      image: "image.png",
      modules:[moduleId]
    };

    Lessons.insert( validLesson, function(error, id){
      lesson = Lessons.findOne({_id: id});
      docs = lesson.getModulesSequence();
      setTimeout(function(){
        should.exist(id);
        should.exist(lesson.getModulesSequence);
        should.equal(docs.length, 1);
        should.equal(docs[0]._id, module._id);
        should.equal(docs[0].type, module.type);
        done();
      });
    });
  });

  it("getModulesSequence should return the correct documents when the lesson has two modules", (done) => {

    let modules = [];
    moduleOneId = Modules.insert({
      type: "SLIDE",
      title: "title",
      image: 'image.png',
      audio: 'audio.ogg'
    });
    modules.push(Modules.findOne({_id: moduleOneId}));

    moduleTwoId = Modules.insert({
      type: "SLIDE",
      title: "title",
      image: 'image.png',
      audio: 'audio.ogg'
    });

    modules.push(Modules.findOne({_id: moduleTwoId}));

    let validLesson = {
      title: "Valid Title",
      image: "image.png",
      modules: [moduleOneId, moduleTwoId]
    };

    Lessons.insert( validLesson, function(error, id){
      lesson = Lessons.findOne({_id: id});
      docs = lesson.getModulesSequence();
      setTimeout(function(){
        should.exist(id);
        should.not.exist(error);
        should.exist(lesson.getModulesSequence);
        should.equal(docs.length, 2);

        should.equal(docs[0]._id, modules[0]._id);
        should.equal(docs[0].type, modules[0].type);

        should.equal(docs[1]._id, modules[1]._id);
        should.equal(docs[1].type, modules[1].type);
        done();
      });
    });
  });
});
