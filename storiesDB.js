require("dotenv").config();
const connectDB=require("./db/connect");
const Story=require("./models/stories");
const StoryJson=require("./stories.json");
const start=async()=>{
    try {
        await connectDB(process.env.MONGODB_URL);
        await Story.deleteMany();
  await Story.create(StoryJson);
  console.log("success");
    } catch (error) {
        console.log(error);
    }
}
start();