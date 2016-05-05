

import { Curriculums } from "meteor/noorahealth:mongo-schemas";
import { Lessons } from "meteor/noorahealth:mongo-schemas";
import { chai } from 'meteor/practicalmeteor:chai';
import { resetDatabase } from 'meteor/xolvio:cleaner';

should = chai.should();

describe("Curriculum Schema", ()=> {

  beforeEach(function() {
    //resetDatabase();
  });
  
  it("Should successfully insert a valid doc", (done) => {
    let validCurriculum = {
      title: "Something",
      lessons: ['id']
    };

    Curriculums.insert( validCurriculum, function(error, id){
      should.equal(null, error);
      should.exist(id);
      done();
    });
  });

  it("Should reject a curriculum with too long a title", (done) => {
    let titleTooLong = {
      title: "thistitleistoolongandshouldnotbeallowed",
      lessons: ['id']
    };

    Curriculums.insert( titleTooLong, function(error, id){
      setTimeout(function(){
        should.not.equal(null, error);
        should.not.exist(id);
        done();
      });
    });
  });

});




