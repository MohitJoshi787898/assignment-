"use server"
import mongoose from "mongoose";
let isConnected = false;

export async function connectToDB(){
 mongoose.set("strictQuery",false);
 if(!process.env.MONGOOSE_CONNECTION_URL){
    return console.log("MONGOOSE_CONNECTION_URL not specified")
 }   
 if(isConnected){
     return console.log("Already connected")}
try {
    await mongoose.connect(process.env.MONGOOSE_CONNECTION_URL)
    console.log("Connected")
    isConnected=true
} catch (error) {
    console.log(error)
}
    
}