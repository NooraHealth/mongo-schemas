

import { Modules } from "meteor/noorahealth:mongo-schemas";
import { chai } from 'meteor/practicalmeteor:chai';

should = chai.should();

describe("Modules Options Validation", ()=> {

  it("Should allow 'Yes' and 'No' options for BINARY", (done) => {
    let module = {
      type: "BINARY",
      question: "question",
      image: "image.png",
      correct_answer: ['No'],
      audio: "audio.wav",
      correct_audio: "audiosomething.wav",
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
      type: "SCENARIO",
      question: "question",
      image: "image.png",
      correct_answer: ['Somethingelse'],
      audio: "audio.wav",
      correct_audio: "audiosomething.wav",
    };

    Modules.insert( module, function(error, id){
      module = Modules.findOne({_id: id});
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal("correct_answer", error.invalidKeys[0].name);
        should.equal(error.invalidKeys.length, 1);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject correct_answers that are not 'Yes' or 'No' for BINARY", (done) => {
    let module = {
      type: "BINARY",
      question: "question",
      image: "image.png",
      correct_answer: ['Somethingelse'],
      audio: "audio.wav",
      correct_audio: "audiosomething.wav",
    };

    Modules.insert( module, function(error, id){
      module = Modules.findOne({_id: id});
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal("correct_answer", error.invalidKeys[0].name);
        should.equal(error.invalidKeys.length, 1);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should automatically set options for SCENARIO to 'Normal', 'CallDoc', and 'Call911'", (done) => {
    let module = {
      type: "SCENARIO",
      question: "question",
      image: "image.png",
      correct_answer: ['Normal'],
      audio: "audio.wav",
      correct_audio: "audiosomething.wav",
    };

    Modules.insert( module, function(error, id){
      module = Modules.findOne({_id: id});
      setTimeout(function(){
        console.log(error);
        should.equal(3, module.options.length);
        should.not.equal(-1, module.options.indexOf('Normal'));
        should.not.equal(-1, module.options.indexOf('CallDoc'));
        should.not.equal(-1, module.options.indexOf('Call911'));
        done();
      });
    });
  });

  it("Should automatically set options for BINARY to 'Yes' and 'No'", (done) => {
    let module = {
      type: "BINARY",
      question: "question",
      image: "image.png",
      correct_answer: ['No'],
      audio: "audio.wav",
      correct_audio: "audiosomething.wav",
    };

    Modules.insert( module, function(error, id){
      module = Modules.findOne({_id: id});
      setTimeout(function(){
        should.equal(error, null);
        should.exist(id);
        should.equal(2, module.options.length);
        should.not.equal(-1, module.options.indexOf('No'));
        should.not.equal(-1, module.options.indexOf('Yes'));
        done();
      });
    });
  });

  it("Should reject MULTIPLE_CHOICE questions with 0 options", (done) => {
    let module = {
      type: "MULTIPLE_CHOICE",
      question: "question",
      image: "image.png",
      audio: "audio.wav",
      correct_audio: "audiosomething.wav",
      correct_answer: [],
      options: []
    };

    Modules.insert( module, function(error, id){
      module = Modules.findOne({_id: id});
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal("options", error.invalidKeys[0].name);
        should.equal(error.invalidKeys.length, 1);
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

    let module = {
      type: "MULTIPLE_CHOICE",
      question: "question",
      image: "image.png",
      audio: "audio.wav",
      correct_audio: "audiosomething.wav",
      options: options, 
      correct_answer: ['choice0.png']
    };

    Modules.insert( module, function(error, id){
      module = Modules.findOne({_id: id});
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal("options", error.invalidKeys[0].name);
        should.equal(error.invalidKeys.length, 1);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject MULTIPLE_CHOICE questions with 5 options", (done) => {

    options = [];
    for(var i = 0; i < 5; i++) {
      options.push("choice"+i+".png");
    }

    let module = {
      type: "MULTIPLE_CHOICE",
      question: "question",
      image: "image.png",
      audio: "audio.wav",
      correct_audio: "audiosomething.wav",
      options: options, 
      correct_answer: ['choice0.png']
    };

    Modules.insert( module, function(error, id){
      module = Modules.findOne({_id: id});
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal("options", error.invalidKeys[0].name);
        should.equal(error.invalidKeys.length, 1);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should accept MULTIPLE_CHOICE questions with 6 options where the correct_answer can be found in the options", (done) => {
    let module = {
      type: "MULTIPLE_CHOICE",
      question: "question",
      image: "image.png",
      audio: "audio.wav",
      correct_audio: "audiosomething.wav",
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
      question: "question",
      image: "image.png",
      audio: "audio.wav",
      correct_audio: "audiosomething.wav",
      options: ['image.png', 'otherimage.png', 'thirdimage.jpg', 'fourth.png', 'fifth.png', 'sixth.png'],
      correct_answer: ['somethingelse.png']
    };

    Modules.insert( module, function(error, id){
      module = Modules.findOne({_id: id});
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal("correct_answer", error.invalidKeys[0].name);
        should.equal(error.invalidKeys.length, 1);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject MULTIPLE_CHOICE questions with 6 options that are not properly formatted filenames", (done) => {
    let module = {
      type: "MULTIPLE_CHOICE",
      question: "question",
      image: "image.png",
      audio: "audio.wav",
      correct_audio: "audiosomething.wav",
      options: ['image.png', 'otherimage.png', 'thirdimage.jpg', 'fourth.png', 'fifth.png', 'sixth.something'],
      correct_answer: ['image.png']
    };

    Modules.insert( module, function(error, id){
      module = Modules.findOne({_id: id});
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(false, id);
        should.equal("options", error.invalidKeys[0].name);
        should.equal(error.invalidKeys.length, 1);
        done();
      });
    });
  });
});
