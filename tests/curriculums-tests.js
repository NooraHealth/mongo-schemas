
// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by mongo-schemas.js.
import { Curriculums } from "meteor/mongo-schemas";

// Write your tests here!
// Here is an example.
Tinytest.add('Curriculums', function (test) {
  console.log("CURRICULMS LEGTH");
  console.log(Curriculums.find({}));
  test.equal(packageName, "mongo-schemas");
});
