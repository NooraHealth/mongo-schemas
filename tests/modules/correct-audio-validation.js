
import { Modules } from "meteor/noorahealth:mongo-schemas";
import { chai } from 'meteor/practicalmeteor:chai';

should = chai.should();

describe("Modules Correct Audio Validation", ()=> {

  it("Should reject the doc when the correct audio has a colon in the name", (done) => {
    let withColon = {
      type: "SCENARIO",
      correct_audio: "audio:something.wav"
    };


    Modules.insert( withColon, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject the doc when the correct audio has a space in the name", (done) => {
    let withSpace = {
      type: "SCENARIO",
      correct_audio: "correct_audio something.mp4"
    };


    Modules.insert( withSpace, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject the doc when the correct audio has a underscore in the name", (done) => {
    let withUnderscore = {
      type: "SCENARIO",
      correct_audio: "img_with__underscore.ogg"
    };

    Modules.insert( withUnderscore, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject the doc when the correct audio has a dash in the name", (done) => {
    let withDash = {
      type: "BINARY",
      correct_audio: "audio-something.m4a"
    };

    Modules.insert( withDash, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should accept correct audio files with numbers in the name", (done) => {
    let numbers = {
      type: "MULTIPLE_CHOICE",
      correct_audio: "1324234.m4a"
    };

    Modules.insert( numbers, function(error, id){
      setTimeout(function(){
        should.equal(null, error);
        should.not.equal(false, id);
        done();
      });
    });
  });

  it("Should accept correct audio of type .wav", (done) => {
    let wav = {
      type: "MULTIPLE_CHOICE",
      correct_audio: "audio.wav"
    };

    Modules.insert( wav, function(error, id){
      setTimeout(function(){
        should.equal(null, error);
        should.not.equal(false, id);
        done();
      });
    });
  });

  it("Should accept correct audio of type .mp3", (done) => {
    let mp3 = {
      type: "MULTIPLE_CHOICE",
      correct_audio: "audio.mp3"
    };

    Modules.insert( mp3, function(error, id){
      setTimeout(function(){
        should.equal(null, error);
        should.not.equal(false, id);
        done();
      });
    });
  });

  it("Should accept correct audio of type .m4a", (done) => {
    let m4a = {
      type: "MULTIPLE_CHOICE",
      correct_audio: "audio.aac"
    };

    Modules.insert( m4a, function(error, id){
      setTimeout(function(){
        should.equal(null, error);
        should.not.equal(false, id);
        done();
      });
    });
  });

  it("Should accept correct audio of type .aac", (done) => {
    let aac = {
      type: "MULTIPLE_CHOICE",
      correct_audio: "audio.aac"
    };

    Modules.insert( aac, function(error, id){
      setTimeout(function(){
        should.equal(null, error);
        should.not.equal(false, id);
        done();
      });
    });
  });
});
