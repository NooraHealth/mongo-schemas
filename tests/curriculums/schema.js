


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
      language: 'Hindi',
      condition: 'Cardiac Surgery',
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
      language: 'Hindi',
      condition: 'Cardiac Surgery',
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
      language: 'Hindi',
      condition: 'Cardiac Surgery',
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
      language: 'Hindi',
      condition: 'Cardiac Surgery',
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
      language: 'Hindi',
      condition: 'Cardiac Surgery',
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

  it("Should accept a curriculum with Kannada as the language", (done) => {
    let kannada = {
      title: "title",
      language: 'Kannada',
      condition: 'Cardiac Surgery',
      lessons: []
    };

    Curriculums.insert( kannada, function(error, id){
      setTimeout(function(){
        should.equal(null, error);
        should.not.equal(false, id);
        done();
      });
    });
  });

  it("Should accept a curriculum with English as the language", (done) => {
    let english = {
      title: "title",
      language: 'English',
      condition: 'Cardiac Surgery',
      lessons: []
    };

    Curriculums.insert( english, function(error, id){
      setTimeout(function(){
        should.equal(null, error);
        should.not.equal(false, id);
        done();
      });
    });
  });

  it("Should accept a curriculum with Hindi as the language", (done) => {
    let hindi = {
      title: "title",
      language: 'Hindi',
      condition: 'Cardiac Surgery',
      lessons: []
    };

    Curriculums.insert( hindi, function(error, id){
      setTimeout(function(){
        should.equal(null, error);
        should.not.equal(false, id);
        done();
      });
    });
  });

  it("Should accept a curriculum with Hindi as the language", (done) => {
    let hindi = {
      title: "title",
      language: 'Hindi',
      condition: 'Cardiac Surgery',
      lessons: []
    };

    Curriculums.insert( hindi, function(error, id){
      setTimeout(function(){
        should.equal(null, error);
        should.not.equal(false, id);
        done();
      });
    });
  });

  it("Should reject a curriculum with Hindil as the language", (done) => {
    let hindil = {
      title: "title",
      language: 'Hindil',
      condition: 'Cardiac Surgery',
      lessons: []
    };

    Curriculums.insert( hindil, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(error.invalidKeys.length, 1);
        should.equal(error.invalidKeys[0].name, "language");
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject a curriculum with Enlish as the language", (done) => {
    let enlish = {
      title: "title",
      language: 'Enlish',
      condition: 'Cardiac Surgery',
      lessons: []
    };

    Curriculums.insert( enlish, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(error.invalidKeys.length, 1);
        should.equal(error.invalidKeys[0].name, "language");
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject a curriculum with Kanada as the language", (done) => {
    let kanada = {
      title: "title",
      language: 'Kanada',
      condition: 'Cardiac Surgery',
      lessons: []
    };

    Curriculums.insert( kanada, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(error.invalidKeys.length, 1);
        should.equal(error.invalidKeys[0].name, "language");
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should accept a curriculum with Cardiac Surgery as the condition", (done) => {
    let cardiac = {
      title: "title",
      language: 'Kannada',
      condition: 'Cardiac Surgery',
      lessons: []
    };

    Curriculums.insert( cardiac, function(error, id){
      setTimeout(function(){
        should.equal(null, error);
        should.not.equal(false, id);
        done();
      });
    });
  });

  it("Should accept a curriculum with Diabetes as the condition", (done) => {
    let diabetes = {
      title: "title",
      language: 'Kannada',
      condition: 'Diabetes',
      lessons: []
    };

    Curriculums.insert( diabetes, function(error, id){
      setTimeout(function(){
        should.equal(null, error);
        should.not.equal(false, id);
        done();
      });
    });
  });

  it("Should accept a curriculum with Neonatology as the condition", (done) => {
    let neonatology = {
      title: "title",
      language: 'Kannada',
      condition: 'Neonatology',
      lessons: []
    };

    Curriculums.insert( neonatology, function(error, id){
      setTimeout(function(){
        should.equal(null, error);
        should.not.equal(false, id);
        done();
      });
    });
  });

  it("Should reject a curriculum with neonatology as the condition", (done) => {
    let neonatologyLowerCase = {
      title: "title",
      language: 'Kannada',
      condition: 'neonatology',
      lessons: []
    };

    Curriculums.insert( neonatologyLowerCase, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(error.invalidKeys.length, 1);
        should.equal(error.invalidKeys[0].name, "condition");
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject a curriculum with Neonatol as the condition", (done) => {
    let neonatol = {
      title: "title",
      language: 'Kannada',
      condition: 'Neonatol',
      lessons: []
    };

    Curriculums.insert( neonatol, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(error.invalidKeys.length, 1);
        should.equal(error.invalidKeys[0].name, "condition");
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject a curriculum with CardiacSurgery as the condition", (done) => {
    let cardiacNoSpace = {
      title: "title",
      language: 'Kannada',
      condition: 'CardiacSurgery',
      lessons: []
    };

    Curriculums.insert( cardiacNoSpace, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(error.invalidKeys.length, 1);
        should.equal(error.invalidKeys[0].name, "condition");
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject a curriculum with cardiac surgery as the condition", (done) => {
    let cardiacLowerCase = {
      title: "title",
      language: 'Kannada',
      condition: 'cardiac surgery',
      lessons: []
    };

    Curriculums.insert( cardiacLowerCase, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(error.invalidKeys.length, 1);
        should.equal(error.invalidKeys[0].name, "condition");
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject a curriculum with diabetes as the condition", (done) => {
    let diabetesLowerCase = {
      title: "title",
      language: 'Kannada',
      condition: 'diabetes',
      lessons: []
    };

    Curriculums.insert( diabetesLowerCase, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(error.invalidKeys.length, 1);
        should.equal(error.invalidKeys[0].name, "condition");
        should.equal(false, id);
        done();
      });
    });
  });
});
