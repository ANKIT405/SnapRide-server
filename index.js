let mongoose = require("mongoose");
let express = require("express");
let app = express();
const nodemailer = require("nodemailer");
let cors = require("cors");
let connect=require("./config.js")
let Collection = require("./database.js");

let PORT = 7000;

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT"],
    credentials:true
  })
);

//---------------------------------------------------------

app.use(express.json());

app.route("/").get(async(req, res) => {
  await connect()
  res.json({ message: "HELLO I AM SERVER!" });
});

app.route("/login").post(async (req, res) => {
  let loginData = req.body; //required email or password
  // console.log( "dATA",  loginData)
  let email = await Collection.findOne({ email: loginData.email }); //{}
  let password = await Collection.findOne({ password: loginData.password }); //{}
  // console.log("tHrough password",password)

  if (email == null && password == null) {
    res.json({ message: "Record not found! please Signup " }); //if this message render occur in - signup page
  } else if (email != null && email.password != loginData.password) {
    res.json({ message: "password is incorrect " });
  } else if (password != null && password.email != loginData.email) {
    res.json({ message: "Email is incorrect " });
  } else {
    res.json({ message: "LoginSuccess", FirstLetter: email.name }); //if this message occur render in - HomePage
  }
});

app.route("/password/Correction").put(async (req, res) => {
  let details = req.body;
  console.log(details);
  let email_find = await Collection.updateOne(
    { email: details.email },
    { $set: { password: details.password } }
  );

  res.json({ message: "Correction Successfull" });
});

//Signup--------------------------✅
app.use(async (req, res, next) => {
  let email = req.body.email;
  let password = req.body.password;
  let Find_email = await Collection.findOne({ email: email });
  let Find_password = await Collection.findOne({ password: password });

  //Checking weather user Exists or not -------------------
  if (Find_email != null && Find_password != null) {
    res.send({ message: "User Allready Exists You need to Login " });
  } else if (Find_email == null && Find_password == null) {
    next();
  }
});

app.route("/signup").post(async (req, res) => {
  let details = req.body; // name , email , password , mob
  let data = Collection(details);
  await data.save();
  res.send({ message: "Success" });
});

//--------Details Email--------------------------------
app.route("/Email").post(async (req, res) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "a60454605@gmail.com",
      pass: "oxmddwpqatpkadux",
    },
  });

  let mailOptions = {
    from: "a60454605@gmail.com",
    to: "kankit3734@gmail.com",
    subject: "welcome to Node.js App",
    text: "this is an email using nodemailer in Node.js testing again",
  };
  try {
    let result = await transporter.sendMail(mailOptions);
    res.send("Booked");
  } catch (err) {
    res.send("Booking Failed", err);
  }
}); //end




//-----------------------------------------------------------------
app.listen(PORT, () => {
  console.log("server started");
});
