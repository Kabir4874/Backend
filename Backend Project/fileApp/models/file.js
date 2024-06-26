const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const fileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  tags: {
    type: String,
  },
  email: {
    type: String,
  },
});

// post middleware

fileSchema.post("save", async function (doc) {
  try {
    console.log("DOC: ", doc);
    // transporter
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // send mail
    let info = await transporter.sendMail({
      from: `Kabir`,
      to: doc.email,
      subject: "New File Uploaded on Cloudinary",
      html: `<h2>Hello World</h2>
              <p>File Uploaded</p> 
              View here: <a href="${doc.imageUrl}">${doc.imageUrl}</a>`,
    });
    console.log("Info: ", info);
  } catch (err) {
    console.error(err);
  }
});

module.exports = mongoose.model("File", fileSchema);
