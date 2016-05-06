
import { Modules } from "meteor/noorahealth:mongo-schemas";
import { chai } from 'meteor/practicalmeteor:chai';

should = chai.should();

describe("Modules Video Validation", ()=> {

  it("Should reject the doc when the video has a colon in the name", (done) => {
    let withColon = {
      type: "SCENARIO",
      video: "video:something.mp4"
    };


    Modules.insert( withColon, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject the doc when the video has a space in the name", (done) => {
    let withSpace = {
      type: "SCENARIO",
      video: "video something.mp4"
    };


    Modules.insert( withSpace, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject the doc when the video has a underscore in the name", (done) => {
    let withUnderscore = {
      type: "SCENARIO",
      video: "video_with__underscore.mp4"
    };

    Modules.insert( withUnderscore, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject the doc when the video has a dash in the name", (done) => {
    let withDash = {
      type: "BINARY",
      video: "video-something.mp4"
    };

    Modules.insert( withDash, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should accept video files with numbers in the name", (done) => {
    let numbers = {
      type: "MULTIPLE_CHOICE",
      video: "1324234.mp4"
    };

    Modules.insert( numbers, function(error, id){
      setTimeout(function(){
        should.equal(null, error);
        should.not.equal(false, id);
        done();
      });
    });
  });

  it("Should accept video of type .mov", (done) => {
    let mov = {
      type: "MULTIPLE_CHOICE",
      video: "video.mov"
    };

    Modules.insert( mov, function(error, id){
      setTimeout(function(){
        should.equal(null, error);
        should.not.equal(false, id);
        done();
      });
    });
  });

  it("Should accept video of type .mp4", (done) => {
    let mp4 = {
      type: "MULTIPLE_CHOICE",
      video: "video.mp4"
    };

    Modules.insert( mp4, function(error, id){
      setTimeout(function(){
        should.equal(null, error);
        should.not.equal(false, id);
        done();
      });
    });
  });
});
