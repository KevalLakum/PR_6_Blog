const mongoose =require("mongoose")

const connect=async()=>{
   try {
    await mongoose.connect("mongodb+srv://lakumkeval:keval28@cluster0.ex8xtcw.mongodb.net/?retryWrites=true&w=majority")
    console.log("conncet to mongodb");
   } catch (error) {
    console.log(error);
   }
}

module.exports=connect