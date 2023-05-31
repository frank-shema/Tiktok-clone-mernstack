import mongoose from "mongoose";
const tiktokSchema=mongoose.Schema({
    url:String,
    channel:String,
    song:String,
    likes:String,
    messages:String,
    description:String,
    shares:String
})

const Videos=mongoose.model('Video', tiktokSchema)
export default Videos