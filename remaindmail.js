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

{name:'Logesh rav',email:'logiravi15@gmail.com'}


]





const sendMail = async (name,email) => {
  let mailOptions = {
      from: {
        name:'TNS Academy',
        address:'tnsacademy1@gmail.com'
      },
      to: email,
      subject: `Congratulations, ${name}, on completing the course.`,
      html: `
       <!DOCTYPE html>
				<html lang="en">
				<head>
				  <meta charset="UTF-8">
				  <meta name="viewport" content="width=device-width, initial-scale=1.0">
				  <title>Congratulations on Completing the Course!</title>
				  <style>
				    body {
				      font-family: Arial, sans-serif;
				      background-color: #f4f4f4;
				      margin: 0;
				      padding: 0;
				    }

				    .container {
				      max-width: 600px;
				      margin: 20px auto;
				      background-color: #fff;
				      padding: 20px;
				      border-radius: 10px;
				      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
				    }

				    h1 {
				      color: #3498db;
				    }

				    p {
				      color: #555;
				    }

				    .button {
				      display: inline-block;
				      padding: 10px 20px;
				      background-color: #3498db;
				      color: #fff;
				      text-decoration: none;
				      border-radius: 5px;
				    }

				    .certificate-section {
				      margin-top: 20px;
				    }

				    .certificate-image {
				      max-width: 100%;
				      height: auto;
				    }

				    .download-link {
				      display: block;
				      margin-top: 20px;
				      text-align: center;
				    }

				    .download-button {
				      display: inline-block;
				      padding: 10px 20px;
				      background-color: #27ae60;
				      color: #fff;
				      text-decoration: none;
				      border-radius: 5px;
				    }
				  </style>
				</head>
				<body>
				  <div class="container">
				    <h1>Congratulations ${name}!</h1>
				    <p>You've successfully completed the Basics of Networking and HTML course. We applaud your dedication and effort in mastering these fundamental concepts.</p>
				    <p>Here are some highlights from the course:</p>
				    <ul>
				      <li>Understanding Web Development Scopes</li>
				      <li>Exploring Frontend, Backend, and Database Architecture</li>
				      <li>Mastering IP Types and DNS</li>
				      <li>Building a strong foundation in HTML</li>
				    </ul>
				    <p>We're pleased to present you with a certificate of completion. Below is your certificate:</p>
				     <div class="certificate-section">
				      <img src="https://ik.imagekit.io/d3kzbpbila/thejashari_gbOLYBp4g" alt="Certificate of Completion" class="certificate-image">
				    </div>
				    <div class="download-link">
				      <a href="https://ik.imagekit.io/d3kzbpbila/thejashari_gbOLYBp4g" class="download-button" download>Download Certificate</a>
				    </div>
				    <p>We hope you found the course enriching and valuable for your learning journey. Stay tuned for more exciting courses in the future!</p>
				    <p>Best regards,<br>TNS Academy</p>
				    <a href="https://tnsacademy.vercel.app" class="button">Explore More Courses</a>
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

// tempArr = [];
// for(let i=0;i<temp.length; i++){
// 	tempArr.push(temp[i].email);
// 	if(i+1 === temp.length){
// 		sendMail(tempArr.join(','));
// 	}
// }
for (let i = 0; i<temp.length; i++){
	sendMail(temp[i].name,temp[i].email) 
	// console.log(temp[i].name,temp[i].email)
}




module.exports = app