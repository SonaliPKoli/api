const Story =require("../models/stories")

const getAllStories = async (req, res) => {
  const {categories,story_title,sort,select}=req.query;
  const queryObject={};
  if(categories){
    queryObject.categories={$regex:categories ,$options:"i"};
   
  }
  if(story_title){
    queryObject.story_title={$regex:story_title ,$options:"i"};
  }
  let apiData=Story.find(queryObject);
  if(sort){
    let sortFix=sort.split(",").join(" ");
    apiData=apiData.sort(sortFix);
   
  }
  if(select){
    let selectFix=select.split(",").join(" ");
    apiData=apiData.select(selectFix);
   
  }
  let page=Number(req.query.page) || 1;
  let limit=Number(req.query.limit) || 10;
  let skip =(page-1)*limit;
  apiData=apiData.skip(skip).limit(limit);
 
  const myStories=await apiData;
  res.status(200).json({myData,nbHits:myData.length });
};
const getAllStoriesTesting = async (req, res) => {
  const myData=await Story.find(req.query);
  res.status(200).json({myData });
};
module.exports = { getAllStories, getAllStoriesTesting };
