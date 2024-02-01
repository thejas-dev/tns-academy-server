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
  		pool:true,
  		auth:{},
  		service:'gmail',
      from: {
        name:'21st Skills',
        address:'21stskills.com@gmail.com'
      },
      to: email,
      subject: `API Development Workshop - Final Reminder`,
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
				    <img class="banner" src="https://www.gethow.org/wp-content/uploads/2018/07/api.jpg" alt="Workshop Banner">

				    <h1>API Development Workshop - Final Reminder</h1>

				    <p>Hello ${name},</p>

				    <p>This is your gentle reminder for the API Development Workshop scheduled for today, 27th January 2024, at 7:00 PM.</p>

				    <h2>Session Details:</h2>
				    <ul>
				      <li><strong>Date:</strong> 27th January 2024 (Saturday)</li>
				      <li><strong>Time:</strong> 7:00 PM - 9:00 PM</li>
				      <li><strong>Duration:</strong> 2 hours</li>
				      <li><strong>Location:</strong> <a href="https://meet.google.com/sjz-wjsb-cgs" target="_blank">Google Meet Link</a></li>
				    </ul>

				    <h2>Preparation:</h2>
				    <p>Make sure you have Node.js installed on your machine before the session. If you haven't done so already, you can follow the installation instructions provided in this <a href="https://youtu.be/r2Oxzl4FhGk?si=8oGNKl3b1l6dTRBN" target="_blank">YouTube video</a>.</p>

				    <h3>Installation Video:</h3>
				    <p><a href="https://youtu.be/r2Oxzl4FhGk?si=8oGNKl3b1l6dTRBN" target="_blank">YouTube Video - How to Install Node.js</a></p>

				    <p>We look forward to having you join us for an insightful and hands-on learning experience. If you have any questions or encounter any issues, feel free to reach out to us.</p>

				    <p>Best regards,<br>
				      N.U.Thejas hari<br>
				      Founder, 21st Skills<br>
				      <a href="https://linkedin/in/thejashari" target="_blank">Linkedin</a></p>

				    <a class="cta-button" href="https://meet.google.com/sjz-wjsb-cgs" target="_blank">Join Workshop</a>
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

const getUnregisteredUsers = (allUsers, registeredUsers) => {
  const registeredEmails = registeredUsers.map(user => user.email);

	const unregisteredUsers = allUsers
    .filter(user => !registeredEmails.includes(user.email))
    .map(({ email, name }) => ({ email, name }));

  return unregisteredUsers;
};

const allUsers = async() => {
	const {data} = await axios.post('http://localhost:3333/api/auth/getAllUsers');
	const allUsers = data?.user;
	console.log(allUsers)
	const jsonString = JSON.stringify(allUsers, null, 2);
	fs.writeFileSync('allUsers.json', jsonString, 'utf-8');

  console.log('Data successfully stored in unregisteredUsers.json');

}

// allUsers();

const diffUsers = async() => {
	const {data} = await axios.post('http://localhost:3333/api/auth/getWorkshop/65b024e37df1619b5bfaef84')
	const registeredParticipants = data.obj[0]?.registeredParticipants;
	const data2 = await axios.post('http://localhost:3333/api/auth/getAllUsers');
	const allUsers = data2?.data?.user;
	const unregisteredUsers = getUnregisteredUsers(allUsers,registeredParticipants);
	if (unregisteredUsers && unregisteredUsers.length > 0) {
    // Convert the array to JSON string
    const jsonString = JSON.stringify(unregisteredUsers, null, 2);

    // Write the JSON string to a file
    fs.writeFileSync('unregisteredUsers.json', jsonString, 'utf-8');

    console.log('Data successfully stored in unregisteredUsers.json');
  } else {
    console.log('No registered participants found.');
  }

}
// diffUsers()

const fetchUsers = async() => {
	const {data} = await axios.post('http://localhost:3333/api/auth/getWorkshop/65b024e37df1619b5bfaef84')
	console.log(data.obj[0]?.registeredParticipants)
	const registeredParticipants = data.obj[0]?.registeredParticipants;
	console.log(registeredParticipants.length)
  if (registeredParticipants && registeredParticipants.length > 0) {
    // Convert the array to JSON string
    const jsonString = JSON.stringify(registeredParticipants, null, 2);

    // Write the JSON string to a file
    fs.writeFileSync('registeredUsers.json', jsonString, 'utf-8');

    console.log('Data successfully stored in registeredUsers.json');
  } else {
    console.log('No registered participants found.');
  }
}
// fetchUsers()


module.exports = app