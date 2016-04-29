
###
# Module
#
# A single unit of instructional material, 
# such as a question, a slide, an audio clip, 
# or a video.
###

Modules = new Mongo.Collection("nh_modules")

ModuleSchema = new SimpleSchema
  type:
    type:String
  title:
    type:String
    optional:true
  image:
    type:String
    optional: true
  #QUESTION MODULE
  question:
    type:String
    optional:true
  explanation:
    type:String
    optional:true
  options:
    type:[String]
    optional:true
  correct_answer:
    type:[String]
    optional:true
  incorrect_audio:
    type:String
    optional:true
  correct_audio:
    type:String
    optional:true
  video:
    type:String
    optional:true
  audio:
    type:String
    optional:true

Modules.attachSchema ModuleSchema

Modules.helpers {

  isEmbedded: ->
    if this.video or !this.video_url then false
    else this.video_url.startsWith "http"

  isCorrectAnswer: (response) ->
    return response in @correct_answer

}

Ground.Collection Modules

module.exports.Modules = Modules

