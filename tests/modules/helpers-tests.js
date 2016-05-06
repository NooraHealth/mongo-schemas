
import { Modules } from "meteor/noorahealth:mongo-schemas";
import { chai } from 'meteor/practicalmeteor:chai';

should = chai.should();

describe("Modules Helpers", ()=> {

  it("Should have a helper isCorrectAnswer", (done) => {
    let validModule = {
      type: "SLIDE",
      title: "Title"
    };

    Modules.insert( validModule, function(error, id){
      module = Modules.findOne({_id: id});
      setTimeout(function(){
        should.exist(id);
        should.exist(module.isCorrectAnswer);
        done();
      });
    });
  });

  it("isCorrectAnswer should give true when response in correct answer array and false when it isn't", (done) => {
    let module = {
      type: "BINARY",
      correct_answer: ['No', 'Other']
    };

    Modules.insert( module, function(error, id){
      module = Modules.findOne({_id: id});
      setTimeout(function(){
        should.equal(true, module.isCorrectAnswer("No"));
        should.equal(false, module.isCorrectAnswer("Yes"));
        should.equal(true, module.isCorrectAnswer("Other"));
        done();
      });
    });
  });
});
