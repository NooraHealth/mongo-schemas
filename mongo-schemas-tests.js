// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by mongo-schemas.js.
import { name as packageName } from "meteor/mongo-schemas";

// Write your tests here!
// Here is an example.
Tinytest.add('mongo-schemas - example', function (test) {
  test.equal(packageName, "mongo-schemas");
});
