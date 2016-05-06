


import { Curriculums } from "meteor/noorahealth:mongo-schemas";
import { Lessons } from "meteor/noorahealth:mongo-schemas";
import { chai } from 'meteor/practicalmeteor:chai';
import { resetDatabase } from 'meteor/xolvio:cleaner';

should = chai.should();

describe("Curriculum Schema", ()=> {

  beforeEach(function() {
    //resetDatabase();
  });
  
  it("Should successfully insert a valid doc", (done) => {
    let validCurriculum = {
      title: "Valid Title",
      lessons: []
    };

    Curriculums.insert( validCurriculum, function(error, id){
      setTimeout(function(){
        should.equal(null, error);
        should.exist(id);
        done();
      });
    });
  });

  it("Should reject a curriculum with no title", (done) => {
    let noTitle = {
      lessons: []
    };

    Curriculums.insert( noTitle, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(error.invalidKeys.length, 1);
        should.equal(error.invalidKeys[0].name, "title");
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject a curriculum with too long a title", (done) => {
    let title = "";
    for(var i = 0; i <= 41; i++) {
      title += "x";
    }

    let titleTooLong = {
      title: title,
      lessons: []
    };

    Curriculums.insert( titleTooLong, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(error.invalidKeys.length, 1);
        should.equal(error.invalidKeys[0].name, "title");
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject a curriculum with wrong type for lessons", (done) => {
    let shouldBeAnArray = {
      title: "Valid title",
      lessons: "Should be an array"
    };

    Curriculums.insert( shouldBeAnArray, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(error.invalidKeys.length, 1);
        should.equal(error.invalidKeys[0].name, "lessons");
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject a curriculum with no title", (done) => {
    let noTitle = {
      title: "",
      lessons: []
    };

    Curriculums.insert( noTitle, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(error.invalidKeys.length, 1);
        should.equal(error.invalidKeys[0].name, "title");
        should.equal(false, id);
        done();
      });
    });
  });
});
