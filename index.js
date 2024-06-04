const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.post("/contact", (req, res) => {
  const { name, email, emailText } = req.body;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.MAIL_USERNAME,
    subject: `Nachricht von der Website`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${emailText}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.redirect("/?success=false");
    }
    console.log("Email sent successfully");
    res.redirect("/?success=true");
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`s ${PORT}`);
});
