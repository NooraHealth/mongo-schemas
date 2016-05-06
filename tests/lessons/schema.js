
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

