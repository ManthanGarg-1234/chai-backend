import dotenv from "dotenv"
import connectDB from "./db/index.js"
import { app } from "./app.js" // 👈 ADD THIS IMPORT LINE
// Inside src/app.js or src/index.js
import userRouter from "./routes/user.routes.js";

// Change this from app.use("/users", userRouter) to:
app.use("/api/v1/users", userRouter);

dotenv.config({
    path: './.env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})




/*
import express from 'express'
const app = express()
(async () => {
  try {
    mongoose.connect(`${process.env.MONGO_URI}`);
    app.on("error", (error) =>{
        console.log("ERR: ",error)
        throw error
    })
    app.listem(process.env.PORT, () =>{
        console.log(`App listening on port ${process.env.PORT}`)
    })
  } catch (error) {
    console.error("ERROR: ", error);
    throw err;
  }
})();
*/