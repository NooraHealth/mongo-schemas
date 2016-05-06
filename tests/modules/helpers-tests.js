
import { Modules } from "meteor/noorahealth:mongo-schemas";
import { chai } from 'meteor/practicalmeteor:chai';

should = chai.should();

describe("Modules Helpers", ()=> {

  it("Should have a helper isCorrectAnswer", (done) => {
    let validModule = {
      type: "SLIDE",
      title: "title",
      image: "image.png",
      audio: "audio.wav",
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
      question: "Question",
      image: "image.png",
      correct_answer: ['No'],
      audio: "audio.wav",
      correct_audio: "correct.wav",
    };

    Modules.insert( module, function(error, id){
      module = Modules.findOne({_id: id});
      setTimeout(function(){
        should.not.exist(error);
        should.equal(true, module.isCorrectAnswer("No"));
        should.equal(false, module.isCorrectAnswer("Yes"));
        should.equal(false, module.isCorrectAnswer("Other"));
        done();
      });
    });
  });
});
