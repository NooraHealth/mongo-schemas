

import { Modules } from "meteor/noorahealth:mongo-schemas";
import { chai } from 'meteor/practicalmeteor:chai';

should = chai.should();

describe("Modules Title Validation", ()=> {

  it("Should accept a module with a title less than 100chars", (done) => {
    let text = "";
    for(var i = 0; i < 98; i++) {
      text += "x";
    }

    let title = {
      title: text,
      type: "VIDEO"
    };

    Modules.insert( title, function(error, id){
      setTimeout(function(){
        should.equal(null, error);
        should.not.equal(false, id);
        done();
      });
    });
  });

  it("Should accept a module with a question less than 150chars", (done) => {

    let text = "";
    for(var i = 0; i < 148; i++) {
      text += "x";
    }

    let question = {
      question: text,
      type: "SCENARIO",
      correct_answer: ['Call911']
    };

    Modules.insert( question, function(error, id){
      setTimeout(function(){
        should.equal(null, error);
        should.not.equal(false, id);
        done();
      });
    });
  });

  it("Should reject a module with a question if it is a SLIDE", (done) => {
    let question = {
      type: "SLIDE",
      question: "Some Question"
    };

    Modules.insert( question, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject a module with a question if it is a VIDEO", (done) => {
    let question = {
      type: "VIDEO",
      question: "Some question"
    };

    Modules.insert( question, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject a module with a title if it is a MULTIPLE_CHOICE", (done) => {
    let title = {
      type: "MULTIPLE_CHOICE",
      title: "Some title",
      options: ['one.png', 'two.png', 'three.png', 'four.png', 'five.png', 'six.png'],
      correct_answer: ['one.png']
    };

    Modules.insert( title, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject a module with a title if it is a SCENARIO", (done) => {
    let title = {
      type: "SCENARIO",
      title: "Some title",
      correct_answer: ['Call911']
    };

    Modules.insert( title, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject a module with a title if it is a BINARY", (done) => {
    let title = {
      type: "BINARY",
      title: "Some title",
      correct_answer: ['No']
    };

    Modules.insert( title, function(error, id){
      setTimeout(function(){
        console.log("The error");
        console.log(error);
        should.not.equal(null, error);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject a module with no title if it is a VIDEO", (done) => {
    let noTitle = {
      type: "VIDEO"
    };

    Modules.insert( noTitle, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject a module with no title if it is a SLIDE", (done) => {
    let noTitle = {
      type: "SLIDE"
    };

    Modules.insert( noTitle, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject a module with too long a title", (done) => {
    let title = "";
    for(var i = 0; i <= 101; i++) {
      title += "x";
    }

    let titleTooLong = {
      title: title,
      type: "SLIDE"
    };

    Modules.insert( titleTooLong, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject a module with too long a question", (done) => {

    let question = "";
    for(var i = 0; i <= 151; i++) {
      question += "x";
    }

    let questionTooLong = {
      question: question,
      type: "SCENARIO",
    };

    Modules.insert( questionTooLong, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(false, id);
        done();
      });
    });
  });
});

