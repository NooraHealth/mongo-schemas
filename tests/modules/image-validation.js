
import { Modules } from "meteor/noorahealth:mongo-schemas";
import { chai } from 'meteor/practicalmeteor:chai';

should = chai.should();

describe("Modules Image Validation", ()=> {

  it("Should reject the doc when the image has a colon in the name", (done) => {
    let withColon = {
      type: "SCENARIO",
      image: "img:something.png"
    };


    Modules.insert( withColon, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject the doc when the image has a space in the name", (done) => {
    let withSpace = {
      type: "SCENARIO",
      image: "img: something.png"
    };


    Modules.insert( withSpace, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject the doc when the image has a underscore in the name", (done) => {
    let withUnderscore = {
      type: "SCENARIO",
      image: "img_with__underscore.png"
    };

    Modules.insert( withUnderscore, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should reject the doc when the image has a dash in the name", (done) => {
    let withDash = {
      type: "BINARY",
      image: "img-something.png"
    };

    Modules.insert( withDash, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.equal(false, id);
        done();
      });
    });
  });

  it("Should accept images with numbers in the name", (done) => {
    let numbers = {
      type: "MULTIPLE_CHOICE",
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
      type: "MULTIPLE_CHOICE",
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
      type: "MULTIPLE_CHOICE",
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
      type: "MULTIPLE_CHOICE",
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

