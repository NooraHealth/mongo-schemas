

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
      type: "SCENARIO"
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
      type: "SCENARIO"
    };

    Modules.insert( question, function(error, id){
      setTimeout(function(){
        should.equal(null, error);
        should.not.equal(false, id);
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
      type: "SCENARIO"
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
      type: "SCENARIO"
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

