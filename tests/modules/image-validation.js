
import { Modules } from "meteor/noorahealth:mongo-schemas";
import { chai } from 'meteor/practicalmeteor:chai';

should = chai.should();

describe("Modules Image Validation", ()=> {

  it("Should reject a doc with no image if it is a SCENARIO", (done) => {
    let noImage = {
      type: "SCENARIO",
      correct_answer: ['Normal'],
      audio: "audio.wav",
      correct_audio: "correct.wav",
    };

    Modules.insert( noImage, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(error.invalidKeys[0].name, "image");
        should.equal( error.invalidKeys.length, 1);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject a doc with no image if it is a BINARY", (done) => {
    let noImage = {
      type: "BINARY",
      correct_answer: ['No'],
      audio: "audio.wav",
      correct_audio: "correct.wav",
    };

    Modules.insert( noImage, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(error.invalidKeys[0].name, "image");
        should.equal( error.invalidKeys.length, 1);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject a doc with no image if it is a SLIDE", (done) => {
    let noImage = {
      type: "SLIDE",
      title: 'Title',
      audio: 'audio.wav'
    };


    Modules.insert( noImage, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(error.invalidKeys[0].name, "image");
        should.equal( error.invalidKeys.length, 1);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject the doc when the image has a colon in the name", (done) => {
    let withColon = {
      type: "SLIDE",
      title: 'Title',
      audio: 'audio.wav',
      image: "img:something.png"
    };


    Modules.insert( withColon, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(error.invalidKeys[0].name, "image");
        should.equal( error.invalidKeys.length, 1);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject the doc when the image has a space in the name", (done) => {
    let withSpace = {
      type: "SLIDE",
      title: 'Title',
      audio: 'audio.wav',
      image: "img: something.png"
    };


    Modules.insert( withSpace, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(error.invalidKeys[0].name, "image");
        should.equal( error.invalidKeys.length, 1);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject the doc when the image has a underscore in the name", (done) => {
    let withUnderscore = {
      type: "SLIDE",
      title: 'Title',
      audio: 'audio.wav',
      image: "img_with__underscore.png"
    };

    Modules.insert( withUnderscore, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(error.invalidKeys[0].name, "image");
        should.equal( error.invalidKeys.length, 1);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject the doc when the image has a dash in the name", (done) => {
    let withDash = {
      type: "SLIDE",
      title: 'Title',
      audio: 'audio.wav',
      image: "img-something.png"
    };

    Modules.insert( withDash, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(error.invalidKeys[0].name, "image");
        should.equal( error.invalidKeys.length, 1);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should accept images with numbers in the name", (done) => {
    let numbers = {
      type: "SLIDE",
      title: 'Title',
      audio: 'audio.wav',
      image: "1324234.png"
    };

    Modules.insert( numbers, function(error, id){
      setTimeout(function(){
        should.equal(null, error);
        should.not.equal(false, id);
        done();
      });
    });
  });

  it("Should accept images of type .jpeg", (done) => {
    let jpeg = {
      type: "SLIDE",
      title: 'Title',
      audio: 'audio.wav',
      image: "image.jpeg"
    };

    Modules.insert( jpeg, function(error, id){
      setTimeout(function(){
        should.equal(null, error);
        should.not.equal(false, id);
        done();
      });
    });
  });

  it("Should accept images of type .png", (done) => {
    let png = {
      type: "SLIDE",
      title: 'Title',
      audio: 'audio.wav',
      image: "image.png"
    };

    Modules.insert( png, function(error, id){
      setTimeout(function(){
        should.equal(null, error);
        should.not.equal(false, id);
        done();
      });
    });
  });

  it("Should accept images of type .jpg", (done) => {
    let jpg = {
      type: "SLIDE",
      title: 'Title',
      audio: 'audio.wav',
      image: "image.jpg"
    };

    Modules.insert( jpg, function(error, id){
      setTimeout(function(){
        should.equal(null, error);
        should.not.equal(false, id);
        done();
      });
    });
  });
});

