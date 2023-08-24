const mongoose =require("mongoose");
const storiesSchema=new mongoose.Schema({
    categories:
    {
        type:String,
        required:true,
        enum:{
            values:["moral_stories" ,"animal_stories","fairy_tales"],
            message:`{VALUE} is not supported`,
        },
    },
    story_title: {
        type:String,
        required:[true,"story title must be there"],
    },
    story_tagline: {
        type:String,
        required:true,
    },
    story: {
        type:String,
        required:true,
    },
    moral: {
        type:String,
       
    },
    card_image: {
        type:String,
        required:true,
    },
})

module.exports=mongoose.model('Story',storiesSchema);