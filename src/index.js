//  require ('dotenv').config ({path:'./env'}); not a good approach. instead we 
// will use the following 

import dotenv from "dotenv";

import connectDB from "./db/index.js";

 dotenv.config({
    path: "./.env",
  });

 connectDB()

 // Approach 1:

 // Connect to MongoDB
 // use async : because when connecting to database it takes time
//  use try and catch exceptions
// ;(async () => {
//      try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//        app.on("error", (error)=>{
//         console.log("ERR: ", error);
//        })

//      app.listen(process.env.PORT, ()=>{
//         console.log(`Server is running on  http://localhost:${process.env.PORT}`);
//      })

//      } catch(error){
//         console.error("ERROR: ", error);
//         throw err
//      }
// })()


// Aproach 2 in DB folder