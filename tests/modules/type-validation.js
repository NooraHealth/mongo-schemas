
import { Modules } from "meteor/noorahealth:mongo-schemas";
import { chai } from 'meteor/practicalmeteor:chai';

should = chai.should();

describe("Modules Type Validation", ()=> {

  it("Should accept docs of type SCENARIO", (done) => {
    let doc = {
      type: "SCENARIO",
      question: "Question",
      image: "image.png",
      correct_answer: ['Normal'],
      audio: "audio.wav",
      correct_audio: "correct.wav",
    };

    Modules.insert( doc, function(error, id){
      setTimeout(function(){
        should.equal(null, error);
        should.exist(id);
        done();
      });
    });
  });

  it("Should accept docs of type BINARY", (done) => {
    let doc = {
      type: "BINARY",
      question: "Question",
      image: "image.png",
      correct_answer: ['No'],
      audio: "audio.wav",
      correct_audio: "correct.wav",
    };

    Modules.insert( doc, function(error, id){
      setTimeout(function(){
        should.equal(null, error);
        should.exist(id);
        done();
      });
    });
  });

  it("Should accept docs of type SLIDE", (done) => {
    let doc = {
      type: "SLIDE",
      title: "title",
      audio: "audio.mp3",
      image: "image.png"
    };

    Modules.insert( doc, function(error, id){
      setTimeout(function(){
        should.equal(null, error);
        should.exist(id);
        done();
      });
    });
  });

  it("Should accept docs of type MULTIPLE_CHOICE", (done) => {
    let doc = {
      type: "MULTIPLE_CHOICE",
      question: "Question",
      options: ['one.png', 'two.png', 'three.png', 'four.png', 'five.png', 'six.png'],
      correct_answer: ['one.png'],
      audio: "audio.wav",
      correct_audio: "correctaudio.mp3"
    };

    Modules.insert( doc, function(error, id){
      setTimeout(function(){
        should.equal(null, error);
        should.exist(id);
        done();
      });
    });
  });

  it("Should accept docs of type VIDEO", (done) => {
    let doc = {
      type: "VIDEO",
      title: "title",
      video: "video.mp4"
    };

    Modules.insert( doc, function(error, id){
      setTimeout(function(){
        should.equal(null, error);
        should.exist(id);
        done();
      });
    });
  });

  it("Should reject docs of other types", (done) => {
    let doc = {
      type: "unknown"
    };

    Modules.insert( doc, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(false, id);
        should.exist(error.sanitizedError);
        should.equal(error.sanitizedError.reason, "Type failed regular expression validation");
        done();
      });
    });
  });
});
