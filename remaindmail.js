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
      subject: `Reminder: Day-2 of 2-days Web Development Bootcamp is starting today!`,
      html: `
				<!DOCTYPE html>
					<html lang="en">
					<head>
					    <meta charset="UTF-8">
					    <meta name="viewport" content="width=device-width, initial-scale=1.0">
					    <style>
					        body {
					            font-family: 'Arial', sans-serif;
					            margin: 0;
					            padding: 0;
					            background-color: #f4f4f4;
					        }

					        .container {
					            max-width: 600px;
					            margin: 20px auto;
					            background-color: #ffffff;
					            padding: 20px;
					            border-radius: 8px;
					            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
					        }

					        h1 {
					            color: #333333;
					        }

					        p {
					            color: #555555;
					        }

					        .cta-button {
					            display: inline-block;
					            padding: 10px 20px;
					            background-color: #3498db;
					            color: #ffffff;
					            text-decoration: none;
					            border-radius: 5px;
					            margin-top: 20px;
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
					        <img class="banner" src="https://21stskills.vercel.app/frontend-workshop" alt="Workshop Banner">
					        <h1>Reminder: 2nd day of your Registered 2-days bootcamp on web development was starting soon! 🌟</h1>
					        <p>Hello ${name},</p>
					        <p>We hope this message finds you well. Just a friendly reminder that day-2 of "2-days Web Development Bootcamp" which is starting at 7pm today!</p>
					        <p><strong>Bootcamp Details:</strong></p>
					        <ul>
					            <li><strong>Title:</strong> 2-days Web Development Bootcamp</li>
					            <li><strong>Date:</strong> 17/2/2024, 18/2/2024</li>
					            <li><strong>Timing:</strong> 7:00 PM - 9:00 PM</li>
					            <li><strong>Google Meet Link:</strong> <a href="https://meet.google.com/pch-smcr-jih">https://meet.google.com/pch-smcr-jih</a></li>
					        </ul>
					        <a href="https://meet.google.com/pch-smcr-jih" class="cta-button">Join Workshop</a>
					        <p>If you have any questions or need assistance, feel free to reach out.</p>
					        
					        <p>Best regards,</p>
					        <p>N.U.Thejas hari</p>
					        <p>Founder, 21st Skills</p>
					        <a href="https://linkedin.com/in/thejashari">Linkedin</a>
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

  console.log('Data successfully stored in allUsers.json');

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
	const {data} = await axios.post('http://localhost:3333/api/auth/getWorkshop/65cb91193c3df9bcecfa8446')
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