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
	name:"Thejas Hari",
	email:"thejaskala308@gmail.com"
},

]





const sendMail = async (name,email) => {
  let mailOptions = {
  		pool:true,
  		auth:{},
  		service:'gmail',
      from: {
        name:'21st Skills',
        address:'21stskills.com@gmail.com'
      },
      to: email,
      subject: `Congratulations!`,
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
					  </style>
					</head>

					<body>
					  <div class="container">
					    <h1>Thank You for Your Participation in Hands-on Linux Basics and Bash Scripting Workshop!</h1>

					    <p>Hello ${name},</p>

					    <p>Here are some highlights from this workshop:</p>
					    <ul>
					      <li>Operating System Fundamentals</li>
					      <li>Linux Basic Commands, Networking Commands, Advanced Commands</li>
					      <li>Bash Scripting</li>
					      <li>Hands-on Bash Scripting Projects</li>
					    </ul>

					    <p>The PowerPoint presentations and source code for the hands-on projects are included in this email for your reference. <a target="_blank" href="https://docs.google.com/presentation/d/1_9z6E05COSE7NG3hWG-1AFAz3L8iah4pmb-NmNi15B4/edit#slide=id.g2b6382c5a66_0_0">https://docs.google.com/presentation/d/1_9z6E05COSE7NG3hWG-1AFAz3L8iah4pmb-NmNi15B4/edit#slide=id.g2b6382c5a66_0_0</a> <p>

					    <p>We appreciate your participation. As a token of acknowledgment, we are pleased to provide you with a participation certificate.</p>

					    <p>You can download your certificate by clicking on the following link:</p>

					    <a class="cta-button" href="https://workshop-certificates.vercel.app/543534534/${name}.png" target="_blank" download>Download Certificate</a>

					    <p>Feel free to explore more opportunities for learning and skill development. Check out our website for upcoming workshops and courses: <a href="https://21stskills.vercel.app" target="_blank">https://21stskills.vercel.app</a></p>


					    <p>Best regards,<br>
					      N.U.Thejas Hari<br>
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