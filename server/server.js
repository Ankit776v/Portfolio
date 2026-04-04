const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


// ================= API ROUTES =================

// TEST ROUTE
app.get("/api", (req, res) => {
  res.send("Server is running");
});

// CONTACT FORM ROUTE
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      }
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: "av357718@gmail.com",
      subject: `Message from ${name}`,
      text: `From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    res.json({ success: true, message: "Email sent!" });
  } catch (err) {
    res.json({ success: false, message: "Error sending email" });
    console.log(err);
  }
});


// ================= FRONTEND =================

// Serve static files
app.use(express.static(path.join(__dirname, "../dist")));

// React fallback (MUST BE LAST)
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});