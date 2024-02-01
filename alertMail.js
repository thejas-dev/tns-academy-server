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
      subject: `Secure your seat in the upcoming workshop`,
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

				    .banner {
				      width: 100%;
				      max-height: 150px;
				      object-fit: cover;
				      border-radius: 8px;
				      margin-bottom: 20px;
				    }
				  </style>
				</head>

				<body>
				  <div class="container">
				    <img class="banner" src="https://ik.imagekit.io/d3kzbpbila/thejashari_xBYRcXV8x" alt="Workshop Banner">

				    <h1>New Workshop Alert!</h1>

				    <p>Hello ${name},</p>

				    <p>We're excited to announce a new workshop that might interest you:</p>

				    <h2>Workshop Details:</h2>
				    <ul>
				      <li><strong>Title:</strong> Hands on Linux Basics and Bash Scripting</li>
				      <li><strong>Date:</strong> 3rd February 2024</li>
				      <li><strong>Time:</strong> 7:00 PM - 9:00 PM</li>
				    </ul>

				    <h3>Description:</h3>
				    <p>Know the Insights of of Linux and Bash scripting in this workshop. This session will equip you with essential skills to navigate the Linux operating system seamlessly and harness the power of Bash scripting for automation.</p>

				    <p>Visit our platform to learn more and register for this exciting workshop.</p>

				    <a class="cta-button" href="https://21stskills.vercel.app/#workshops" target="_blank">Register Now</a>

				    <p>We look forward to having you join us for an insightful and hands-on learning experience. Should you have any questions or encounter any issues during the installation process, feel free to reach out to us.</p>

				    <p>Best regards,<br>
				      N.U.Thejas hari<br>
				      Founder<br>
				      21stSkills<br>
				      <a href="https://linkedin.com/in/thejashari" target="_blank">linkedin</a></p>

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
	// sendMail(temp[i].name,temp[i].email) 
	// console.log(temp[i].name,temp[i].email)
}


module.exports = app
