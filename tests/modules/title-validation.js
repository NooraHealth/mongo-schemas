

import { Modules } from "meteor/noorahealth:mongo-schemas";
import { chai } from 'meteor/practicalmeteor:chai';

should = chai.should();

describe("Modules Title and Question Validation", ()=> {

  it("Should accept a module with a title less than 100chars", (done) => {
    let text = "";
    for(var i = 0; i < 98; i++) {
      text += "x";
    }

    let title = {
      type: "VIDEO",
      title: text,
      video: "video.mp4"
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
      type: "BINARY",
      image: "image.png",
      correct_answer: ['No'],
      audio: "audio.wav",
      correct_audio: "correct.wav",
      question: text,
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
      title: "title",
      question: "Some Question",
      audio: "audio.mp3",
      image: "image.png"
    };

    Modules.insert( question, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal("question", error.invalidKeys[0].name);
        should.equal( error.invalidKeys.length, 1);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject a module with a question if it is a VIDEO", (done) => {
    let question = {
      type: "VIDEO",
      title: "Title",
      video: "video.mp4",
      question: "Some question"
    };

    Modules.insert( question, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal("question", error.invalidKeys[0].name);
        should.equal( error.invalidKeys.length, 1);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject a module with a title if it is a MULTIPLE_CHOICE", (done) => {
    let title = {
      type: "MULTIPLE_CHOICE",
      question: "Question",
      title: "Some title",
      options: ['one.png', 'two.png', 'three.png', 'four.png', 'five.png', 'six.png'],
      correct_answer: ['one.png'],
      audio: "audio.wav",
      correct_audio: "correctaudio.mp3"
    };

    Modules.insert( title, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal("title", error.invalidKeys[0].name);
        should.equal( error.invalidKeys.length, 1);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject a module with a title if it is a SCENARIO", (done) => {
    let title = {
      type: "SCENARIO",
      title: "Some title",
      image: "image.png",
      question: "Question",
      correct_answer: ['Call911'],
      audio: "audio.wav",
      correct_audio: "correctaudio.mp3"
    };

    Modules.insert( title, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal("title", error.invalidKeys[0].name);
        should.equal( error.invalidKeys.length, 1);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject a module with a title if it is a BINARY", (done) => {
    let title = {
      type: "BINARY",
      title: "Some title",
      question: "Question",
      image: "image.png",
      correct_answer: ['No'],
      audio: "audio.wav",
      correct_audio: "correctaudio.mp3"
    };

    Modules.insert( title, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal("title", error.invalidKeys[0].name);
        should.equal( error.invalidKeys.length, 1);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject a module with no title if it is a VIDEO", (done) => {
    let noTitle = {
      type: "VIDEO",
      video: "video.mp4"
    };

    Modules.insert( noTitle, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal("title", error.invalidKeys[0].name);
        should.equal( error.invalidKeys.length, 1);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject a module with no title if it is a SLIDE", (done) => {
    let noTitle = {
      type: "SLIDE",
      audio: "audio.ogg",
      image: "image.png"
    };

    Modules.insert( noTitle, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal("title", error.invalidKeys[0].name);
        should.equal( error.invalidKeys.length, 1);
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
      type: "SLIDE",
      audio: "audio.ogg",
      image: "image.png"
    };

    Modules.insert( titleTooLong, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal("title", error.invalidKeys[0].name);
        should.equal( error.invalidKeys.length, 1);
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
      type: "SCENARIO",
      question: question,
      correct_answer: ['Normal'],
      audio: "audio.ogg",
      correct_audio: "correct.ogg",
      image: "image.png"
    };

    Modules.insert( questionTooLong, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal("question", error.invalidKeys[0].name);
        should.equal( error.invalidKeys.length, 1);
        should.equal(false, id);
        done();
      });
    });
  });
});

