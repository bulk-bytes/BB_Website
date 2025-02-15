const Contact = require("../models/contactus");
const nodemailer = require("nodemailer");

const sendMessage = async (req, res) => {
  const { name, email, subject, phone, message } = req.body;
  console.log(req.body);

  try {
    // Save the message to the database
    const user_message = new Contact({
      name,
      phone,
      email,
      subject,
      message,
    });
    await user_message.save();

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: email,
      service: "gmail", // You can use any email service you prefer
      auth: {
        user: process.env.EMAIL_USER, // Your email address (server's Gmail)
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });

    // Email options
    const mailOptions = {
      from: `"${name}" <${email}>`, // This will show the user's name and email as the sender
      to: process.env.EMAIL_USER, // The email where you'll receive the messages (your email)
      replyTo: email, // This will ensure that the reply goes to the user's email
      subject: `New Contact Form Submission: ${subject}`,
      text: `You have received a new message from your official website:

Name: ${name}
Email: ${email}
Phone Number: ${phone}
Subject: ${subject}
Message: ${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "The message has been sent successfully and emailed.",
      user_message,
    });
  } catch (error) {
    console.log("error", error);
    res
      .status(500)
      .json({ success: false, message: "Some error occurred.", error });
  }
};

module.exports = sendMessage;
