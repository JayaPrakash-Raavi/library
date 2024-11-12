import mongoose from "mongoose";

const connectDB = async()=>{
    if(mongoose.connections[0].readyState){
        return true
    }
    try{
await mongoose.connect("mongodb://localhost:27017/library");
console.log("mongodb connected");
return true;
    }catch(error){
console.log(error)
    }
}

export default connectDB;