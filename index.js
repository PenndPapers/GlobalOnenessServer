const express = require("express"); //import express "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoute = require("./routes/authRoute");
const app = express();
const port = 5000;

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

// heyy
// app.get("/", (req, res) => res.send("Hello World! from server"));

// mongoose.set("strictQuery", false);

// mongoose
//   .connect(process.env.MONGO_DB, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() =>
//     app.listen(process.env.PORT || port, () => {
//       console.log(`Server is running on ${process.env.PORT || port}`);
//       console.log("mongo connect ..");
//     })
//   )
//   .catch((error) => console.log(error.message));

//usage of routes
 app.use("/auth", authRoute);
// app.use("/admin", AdminRoute);
// app.use("/registration", Registstion);
// app.use("/student", StudentRoute);
// app.use("/teacher", TeacherRoute);

app.listen(port , ()=>{
    console.log("server started ")
})