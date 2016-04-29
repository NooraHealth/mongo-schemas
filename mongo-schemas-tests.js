// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by mongo-schemas.js.
import { name as packageName } from "meteor/mongo-schemas";
import { Curriculums } from "meteor/mongo-schemas";
import { Lessons } from "meteor/mongo-schemas";
import { Modules } from "meteor/mongo-schemas";
import { OfflineFiles } from "meteor/mongo-schemas";

// Write your tests here!
// Here is an example.
Tinytest.add('mongo-schemas', function (test) {
  test.equal(packageName, "mongo-schemas");
});
