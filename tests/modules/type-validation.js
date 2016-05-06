
import { Modules } from "meteor/noorahealth:mongo-schemas";
import { chai } from 'meteor/practicalmeteor:chai';

should = chai.should();

describe("Modules Type Validation", ()=> {

  it("Should accept docs of type SCENARIO", (done) => {
    let doc = {
      type: "SCENARIO"
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
      type: "BINARY"
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
      type: "SLIDE"
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
      type: "MULTIPLE_CHOICE"
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
      type: "VIDEO"
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
        done();
      });
    });
  });
});
