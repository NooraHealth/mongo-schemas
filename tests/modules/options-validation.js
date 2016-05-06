

import { Modules } from "meteor/noorahealth:mongo-schemas";
import { chai } from 'meteor/practicalmeteor:chai';

should = chai.should();

describe("Modules Options Validation", ()=> {

  it("Should allow 'Yes' and 'No' options for BINARY", (done) => {
    let module = {
      type: "BINARY",
      options: ['No', 'Yes']
    };

    Modules.insert( module, function(error, id){
      module = Modules.findOne({_id: id});
      setTimeout(function(){
        should.equal(null, error);
        should.not.equal(false, id);
        done();
      });
    });
  });

  it("Should reject correct_answers that are not 'Normal', 'CallDoc' or 'Call911' for SCENARIO", (done) => {
    let module = {
      type: "BINARY",
      options: ['Somethingelse', 'Yes']
    };

    Modules.insert( module, function(error, id){
      module = Modules.findOne({_id: id});
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject correct_answers that are not 'Yes' or 'No' for BINARY", (done) => {
    let module = {
      type: "BINARY",
      options: ['Somethingelse', 'Yes']
    };

    Modules.insert( module, function(error, id){
      module = Modules.findOne({_id: id});
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should automatically set options for SCENARIO to 'Normal', 'CallDoc', and 'Call911'", (done) => {
    let module = {
      type: "SCENARIO",
      question: "Question",
      image: "image.png",
      correct_answer: ['Normal'],
    };

    Modules.insert( module, function(error, id){
      module = Modules.findOne({_id: id});
      setTimeout(function(){
        should.equal(3, modules.options.length);
        should.not.equal(-1, modules.options.indexOf('Normal'));
        should.not.equal(-1, modules.options.indexOf('CallDoc'));
        should.not.equal(-1, modules.options.indexOf('Call911'));
        done();
      });
    });
  });

  it("Should automatically set options for BINARY to 'Yes' and 'No'", (done) => {
    let module = {
      type: "BINARY",
      question: "Question",
      image: "image.png",
      correct_answer: ['No']
    };

    Modules.insert( module, function(error, id){
      module = Modules.findOne({_id: id});
      setTimeout(function(){
        should.equal(2, modules.options.length);
        should.not.equal(-1, modules.options.indexOf('No'));
        should.not.equal(-1, modules.options.indexOf('Yes'));
        done();
      });
    });
  });

  it("Should reject MULTIPLE_CHOICE questions with 0 options", (done) => {
    let module = {
      type: "MULTIPLE_CHOICE",
      options: [],
      correct_answer: []
    };

    Modules.insert( module, function(error, id){
      module = Modules.findOne({_id: id});
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject MULTIPLE_CHOICE questions with 7 options", (done) => {

    options = [];
    for(var i = 0; i < 7; i++) {
      options.push("choice"+i+".png");
    }
    console.log("options:");
    console.log(options);
    let module = {
      type: "MULTIPLE_CHOICE",
      options: options, 
      correct_answer: ['choice0.png']
    };

    Modules.insert( module, function(error, id){
      module = Modules.findOne({_id: id});
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject MULTIPLE_CHOICE questions with 5 options", (done) => {
    let module = {
      type: "MULTIPLE_CHOICE",
      options: ['image.png', 'otherimage.png', 'thirdimage.jpg', 'fifth.png'],
      correct_answer: ['image.png']
    };

    Modules.insert( module, function(error, id){
      module = Modules.findOne({_id: id});
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should accept MULTIPLE_CHOICE questions with 6 options where the correct_answer can be found in the options", (done) => {
    let module = {
      type: "MULTIPLE_CHOICE",
      options: ['image.png', 'otherimage.png', 'thirdimage.jpg', 'fourth.png', 'fifth.png', 'sixth.png'],
      correct_answer: ['image.png']
    };

    Modules.insert( module, function(error, id){
      module = Modules.findOne({_id: id});
      setTimeout(function(){
        should.equal(null, error);
        should.not.equal(false, id);
        done();
      });
    });
  });

  it("Should reject MULTIPLE_CHOICE questions with 6 options where the correct_answer cannot be found in the options", (done) => {
    let module = {
      type: "MULTIPLE_CHOICE",
      options: ['image.png', 'otherimage.png', 'thirdimage.jpg', 'fourth.png', 'fifth.png', 'sixth.png'],
      correct_answer: ['somethingelse.png']
    };

    Modules.insert( module, function(error, id){
      module = Modules.findOne({_id: id});
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject MULTIPLE_CHOICE questions with 6 options that are not properly formatted filenames", (done) => {
    let module = {
      type: "MULTIPLE_CHOICE",
      options: ['image.png', 'otherimage.png', 'thirdimage.jpg', 'fourth.png', 'fifth.png', 'sixth.something'],
      correct_answer: ['image.png']
    };

    Modules.insert( module, function(error, id){
      module = Modules.findOne({_id: id});
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(false, id);
        done();
      });
    });
  });
});
