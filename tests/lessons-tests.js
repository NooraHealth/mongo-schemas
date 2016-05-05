
import { Lessons } from "meteor/noorahealth:mongo-schemas";
import { Modules } from "meteor/noorahealth:mongo-schemas";
import { chai } from 'meteor/practicalmeteor:chai';
import { resetDatabase } from 'meteor/xolvio:cleaner';

should = chai.should();

describe("Lessons Schema", ()=> {

  it("Should successfully insert a valid doc", (done) => {
    let validLesson = {
      title: "Valid Title",
      image: "image.png",
      modules: []
    };

    Lessons.insert( validLesson, function(error, id){
      setTimeout(function(){
        should.equal(null, error);
        should.exist(id);
        done();
      });
    });
  });

  it("Should reject a lesson with no title", (done) => {
    let noTitle = {
      modules: [],
      image: "image.png"
    };

    Lessons.insert( noTitle, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject a lesson with too long a title", (done) => {
    let title = "";
    for(var i = 0; i <= 51; i++) {
      title += "x";
    }

    let titleTooLong = {
      title: title,
      lessons: []
    };

    Lessons.insert( titleTooLong, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject a lesson with no image", (done) => {
    let noImage = {
      title: "Valid title",
      modules: []
    };

    Lessons.insert( noImage, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject a lesson when the image has a colon in the name", (done) => {
    let withColon = {
      title: "Valid title",
      modules: [],
      image: "img:something.png"
    };


    Lessons.insert( withColon, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject a lesson when the image has a space in the name", (done) => {
    let withSpace = {
      title: "Valid title",
      modules: [],
      image: "img:something.png"
    };


    Lessons.insert( withSpace, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject a lesson when the image has a underscore in the name", (done) => {
    let withUnderscore = {
      title: "Valid title",
      modules: [],
      image: "img-some__thing.png"
    };

    Lessons.insert( withUnderscore, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject a lesson when the image has a dash in the name", (done) => {
    let withDash = {
      title: "Valid title",
      modules: [],
      image: "img-something.png"
    };

    Lessons.insert( withDash, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should accept images with numbers in the name", (done) => {
    let numbers = {
      title: "Valid title",
      modules: [],
      image: "1324234.png"
    };

    Lessons.insert( numbers, function(error, id){
      setTimeout(function(){
        should.equal(null, error);
        should.not.equal(false, id);
        done();
      });
    });
  });

  it("Should accept images of type .jpeg", (done) => {
    let jpeg = {
      title: "Valid title",
      modules: [],
      image: "image.jpeg"
    };

    Lessons.insert( jpeg, function(error, id){
      setTimeout(function(){
        should.equal(null, error);
        should.not.equal(false, id);
        done();
      });
    });
  });

  it("Should accept images of type .png", (done) => {
    let png = {
      title: "Valid title",
      modules: [],
      image: "image.png"
    };

    Lessons.insert( png, function(error, id){
      setTimeout(function(){
        should.equal(null, error);
        should.not.equal(false, id);
        done();
      });
    });
  });

  it("Should accept images of type .jpg", (done) => {
    let jpg = {
      title: "Valid title",
      modules: [],
      image: "image.jpg"
    };

    Lessons.insert( jpg, function(error, id){
      setTimeout(function(){
        should.equal(null, error);
        should.not.equal(false, id);
        done();
      });
    });
  });

  it("Should reject a lesson when modules DNE", (done) => {
    let noModules = {
      title: "Valid title",
      image: "image.png"
    };

    Lessons.insert( noModules, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject a lesson with wrong type for modules", (done) => {
    let shouldBeAnArray = {
      title: "Valid title",
      image: "image.png",
      modules: "Should be an array"
    };

    Lessons.insert( shouldBeAnArray, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(false, id);
        done();
      });
    });
  });
});

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
      question: "question",
      type: "SCENARIO",
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
      type: "BINARY"
    });
    modules.push(Modules.findOne({_id: moduleOneId}));

    moduleTwoId = Modules.insert({
      type: "MULTIPLE_CHOICE"
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
      console.log(docs);
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
