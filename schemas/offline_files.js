
let OfflineFiles = new Ground.Collection( "offline_files", {connection: null} );

let OfflineFilesSchema = new SimpleSchema({
  fsPath: {
    type:String
  },
  path: {
    type: String
  }
});

OfflineFiles.attachSchema( OfflineFilesSchema );

module.exports.OfflineFiles = OfflineFiles;

