const nodemailer = require('nodemailer');
const express = require('express')
const app = express();
require('dotenv').config();
const axios = require('axios');
const cors = require('cors');
const fs = require('fs');

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
	res.send(`<h1>Hello</h1>`)
})

let transporter = nodemailer.createTransport({
  service: 'gmail',
  pool:true,
  auth: {
    type: 'OAuth2',
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN
  }
});

const temp = [
{
	name:"Thejas hari",
	email:"thejaskala308@gmail.com"
},

]





const sendMail = async (name,email) => {
  let mailOptions = {
  		service:'gmail',
      from: {
        name:'21st Skills',
        address:'21stskills.com@gmail.com'
      },
      to: email,
      subject: `Linux Basics and Bash Scripting - 21st Skills`,
      html: `
				<!DOCTYPE html>
					<html lang="en">

					<head>
					  <meta charset="UTF-8">
					  <meta name="viewport" content="width=device-width, initial-scale=1.0">
					  <style>
					    body {
					      font-family: Arial, sans-serif;
					      margin: 0;
					      padding: 0;
					      background-color: #f5f5f5;
					    }

					    .container {
					      max-width: 600px;
					      margin: 20px auto;
					      background-color: #fff;
					      padding: 20px;
					      border-radius: 8px;
					      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
					    }

					    h1 {
					      color: #333;
					      text-align: center;
					    }

					    p {
					      color: #555;
					      line-height: 1.6;
					    }

					    .banner {
					      width: 100%;
					      max-height: 150px;
					      object-fit: cover;
					      border-radius: 8px;
					      margin-bottom: 20px;
					    }

					    .cta-button {
					      display: block;
					      margin: 20px auto;
					      padding: 10px 20px;
					      background-color: #3498db;
					      color: #fff;
					      text-decoration: none;
					      text-align: center;
					      border-radius: 5px;
					    }
					  </style>
					</head>

					<body>
					  <div class="container">
					    <img class="banner" src="https://21stskills.vercel.app/linux-workshop.jpg" alt="Workshop Banner">

					    <h1>Linux Basics and Bash Scripting - Starting Soon!</h1>

					    <p>Hello ${name},</p>

					    <p>This is a friendly reminder that the Linux workshop is starting soon. We're excited to have you join us for this insightful session.</p>

					    <h2>Session Details:</h2>
					    <ul>
					      <li><strong>Date:</strong> 3rd February 2024 (Saturday)</li>
					      <li><strong>Time:</strong> 7:00 PM - 9:00 PM</li>
					      <li><strong>Duration:</strong> 2 hours</li>
					      <li><strong>Location:</strong> <a href="https://meet.google.com/twt-hsyp-ocj" target="_blank">Google Meet Link</a></li>
					    </ul>

					    <p>Ensure that you have your device ready and click the link below to join the workshop:</p>

					    <a class="cta-button" href="https://meet.google.com/twt-hsyp-ocj" target="_blank">Join Workshop</a>

					    <p>We look forward to your active participation and hope you have a great learning experience!</p>

					    <p>Best regards,<br>
					      N.U.Thejas hari<br>
					      Founder<br>
					      21st Skills</p>
					  </div>
					</body>

					</html>

       


      `
    };
    transporter.sendMail(mailOptions, function(err, data) {
      if (err) {
        console.log("Error " + err);
      } else {
        console.log(`Email sent Successfully to ${email}`);
      }
    });
} 

for (let i = 0; i<temp.length; i++){
	sendMail(temp[i].name,temp[i].email) 
	// console.log(temp[i].name,temp[i].email)
}


module.exports = app