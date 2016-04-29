
let OfflineFiles = new Ground.Collection( "offline_files", {connection: null} );

let OfflineFilesSchema = new SimpleSchema({
  fsPath: {
    type:String
  },
  url: {
    type:String
  },
  name: {
    type:String
  }
});

OfflineFiles.attachSchema( OfflineFilesSchema );

module.exports.OfflineFiles = OfflineFiles;

