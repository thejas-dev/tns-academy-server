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
{
    "name": "KIRUTHICK RAJ BJ",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "email": "kiruthickrajbj@gmail.com",
    "id": "65be2af2f6974de0f148bf43"
  },
  {
    "name": "Dhamo Dharan",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "email": "dhamo4672@gmail.com",
    "id": "65bdf27f378b925d9343c23c"
  },
  {
    "name": "G.S visnudev",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "email": "gsvisnudev@gmail.com",
    "id": "65bdaea3341b9281a47d6b8c"
  },
  {
    "name": "Madderi Vasu",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_DNEsmsox3",
    "email": "madderivasu27@gmail.com",
    "id": "6499d4e91ef9a74b9e8d19a4"
  },
  {
    "name": "suresh kannan",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "email": "skkannan1695@gmail.com",
    "id": "65b12593e9fbaa90c28d8cf1"
  },
  {
    "name": "Nistul Premod",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "email": "nistul02@gmail.com",
    "id": "65b24a9eff0fc047dbbf79be"
  },
  {
    "name": "Kishore A",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "email": "kishorehack5214715@gmail.com",
    "id": "65b29f42ef8e7a8e376b2eca"
  },
  {
    "name": "Sathish K",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "email": "sathishcsc9629@gmail.com",
    "id": "65b22a5f464455b27a69292b"
  },
  {
    "name": "Saravanan K R",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_Vs4zd6CiG",
    "email": "saravananofficial18@gmail.com",
    "id": "649b0b9991faf1ac5ec3d606"
  },
  {
    "name": "Raghul",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "email": "raghulsoundararajan@gmail.com",
    "id": "65bbc5e3412e596b2f89d9fe"
  },
  {
    "name": "Vishnu Kumar",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_8Q7jVw-oyA",
    "email": "vishi08vishnu@gmail.com",
    "id": "649993f31059743a6be30136"
  },
  {
    "name": "XAI",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "email": "xai48360@gmail.com",
    "id": "658d74d8fb04d8aabd93418a"
  },
  {
    "name": "Prasanna BP",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "email": "prasannabp2004@gmail.com",
    "id": "64f73f5ffac9cb68f09a2477"
  },
  {
    "name": "TN Singam Gaming - Clash Me",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari__SHr-R6Lp",
    "email": "thejasgamerx123@gmail.com",
    "id": "649b090a6dbd7fb9297f151e"
  },
  {
    "name": "Yashwanthini R. M.",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "email": "rmyashwanthini1502@gmail.com",
    "id": "65b29e5493a88f8956c3596b"
  },
  {
    "name": "Shakila Yogavathi",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "email": "yogavathisekar3619@gmail.com",
    "id": "65b139fcad3de5872a55fb4a"
  },
  {
    "name": "Dineshkumar Madheswaran",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "email": "dineshkumar5683madheswaran@gmail.com",
    "id": "65b0ee307388cbc237538fa0"
  },
  {
    "name": "Vignesh C",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "email": "vigneshc200304@gmail.com",
    "id": "65b1deedde31e1ff9a80751d"
  },
  {
    "name": "Siva A K",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "email": "sivaak1703@gmail.com",
    "id": "6592f2f316ed1ce22ebae9cd"
  },
  {
    "name": "VISHNUPRIYA UNNIKRISHNAN",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "email": "22msrdf026@jainuniversity.ac.in",
    "id": "65bb2cc746fec6a3a9fab460"
  },
  {
    "name": "Barath Barath",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "email": "barath000001@gmail.com",
    "id": "65b1ebed602d27687dcb5495"
  },
  {
    "name": "Vignesh Vikky",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_P4IQF0d34",
    "email": "vikky4060@gmail.com",
    "id": "649b09a874b244d494d052b2"
  },
  {
    "name": "aakash researcher",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "email": "aakashresearcher@gmail.com",
    "id": "65b1dbe8de31e1ff9a807513"
  },
  {
    "name": "C DAYALAN",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "email": "dayalandob21012004@gmail.com",
    "id": "65baf7061854227203d13d58"
  },
  {
    "name": "Keerthi Vasan",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "email": "vdmkeerthi@gmail.com",
    "id": "65b258380bb237b3ba7a9ee2"
  },
  {
    "name": "logesh rav",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "email": "logiravi15@gmail.com",
    "id": "64a3fc636a55a3f872be9e8f"
  },
  {
    "name": "virat sasi",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "email": "viratsasi6063@gmail.com",
    "id": "65b24c71521d2151d158d7f6"
  },
  {
    "name": "VS creation",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "email": "vishalm2004smart@gmail.com",
    "id": "65ba8c5583e4912225521424"
  },
  {
    "name": "Gowtham Angayee",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "email": "gowthamangayee@gmail.com",
    "id": "65b0efbb4c798a09845c006a"
  },
  {
    "name": "Tarinisri TG",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_EvFAJACW_4",
    "email": "tarinisri43@gmail.com",
    "id": "649885ac7f3d4624598233ef"
  },
  {
    "name": "SANTHOSH AR",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "email": "santhoshar778@gmail.com",
    "id": "65b326c2d7b722b9342e3141"
  },
  {
    "name": "Karthikeyan Ranganathan",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "email": "karthikeyanranganathan731@gmail.com",
    "id": "65b206f9f020f12153e643ec"
  },
  {
    "name": "Afzal N",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "email": "mrtechie77@gmail.com",
    "id": "65b214aa85bfaca198667ac6"
  },
  {
    "name": "Thejas Hari",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_a07xjbDOH1",
    "email": "thejaskala308@gmail.com",
    "id": "649878bfece9acaff757d5ed"
  },
  {
    "name": "Kowshik Narayan",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "email": "kowshiknarayan16@gmail.com",
    "id": "65b104d571dd774757fd10cf"
  },
  {
    "name": "mathan Vpm",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "email": "mathanvpm577@gmail.com",
    "id": "65b1b2bc22f36d6f9061e4c5"
  },
  {
    "name": "Amarnath S M",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "email": "amaramarnath447@gmail.com",
    "id": "65b4e32b0b686a37688f43f9"
  }

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