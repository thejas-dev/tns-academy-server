const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const userRoutes = require("./routes/userRoutes")
const nodemailer = require('nodemailer');
const axios = require('axios');

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

let title = 'Frontend Interview Preparation';
let description = "Are you gearing up for a frontend developer role and aiming to ace your interviews? Join us for an interactive workshop designed to sharpen your skills in HTML, CSS, and JavaScript – the foundational trio of frontend development.";
let image = 'frontend-workshop';
let startsAt = '10-2-24 (Saturday)';
let duration = '1 Day';
let datesAndTimings = [
	'10/2 Saturday (Evening:7pm - 9pm)',
]
const workshopStructure = [
  {
    day: "Day 1",
    date: "10/2 Saturday",
    time: "Evening: 7pm-9pm",
    sessions: [
      {
        sessionNumber: 1,
        title: "HTML Interview Quesions",
        duration: "30 mins",
        topics:[
        	'Learn the core structure of web pages, learn about semantic markup, and understand the essential tags that form the backbone of every web document.'
        ]
      },
      {
        sessionNumber: 2,
        title: "CSS Interview Quesions",
        duration: "45 mins",
        topics: [
          "Learn the secrets of styling as we explore selectors, cascading styles, and responsive design techniques. Get hands-on experience in crafting visually appealing and responsive user interfaces.",
        ]
      },
      {
        sessionNumber: 3,
        title: "Javascipt Interview Quesions",
        duration: "40 mins",
        topics: [
          "Elevate your JavaScript expertise with a focus on essential concepts like variables, loops, functions, and closures. Explore real-world scenarios to strengthen your problem-solving skills.",
        ]
      },
      {
        sessionNumber: 10,
        title: "Q&A Session",
        duration: "5 mins"
      }
    ]
  },
  
];
const meetingLink = 'https://meet.google.com/fia-fego-knm'

// const {data} = axios.post('http://localhost:3333/api/auth/createWorkshop',{
// 	title,description,image,startsAt,duration,datesAndTimings,learn:workshopStructure,meetingLink
// })

// let mailOptions = {
//   from: 'tnsacademy1@gmail.com',
//   to: 'thejaskala308@gmail.com',
//   subject: 'Welcome to TNS Academy',
//   html: `Welcome to TNS-ACADEMY 
// Dear Prasanna,

// Welcome to TNS-ACADEMY! We are delighted to have you join our vibrant community. Get ready to embark on an exhilarating journey of learning, growth, and innovation.

// <img src="https://ik.imagekit.io/d3kzbpbila/login_img_mM5BWvh_v.avif?updatedAt=1687367596612" alt="Welcome Banner" style="display: block; max-width: 100%; height: auto; margin-bottom: 20px;">

// At TNS-ACADEMY, our mission is to empower passionate developers like you to excel in the dynamic world of web development and programming. Whether you are a beginner seeking to master the basics or an experienced coder aiming to polish your skills, we offer a diverse range of resources tailored to meet your unique needs.

// Here's what you can expect as a valued member of our academy:

// 1. Engaging Workshops: Immerse yourself in our interactive workshops led by us. Gain hands-on experience, explore a wide range of technologies, and collaborate with fellow enthusiasts. Stay tuned for upcoming workshops on Python, Java, and other exciting programming topics.

// 2. Comprehensive Courses: Deepen your knowledge through our meticulously designed courses. Our curriculum covers front-end development, back-end programming, and more, providing you with a well-rounded skill set to thrive in the field.

// 3. Thriving Community: Connect with like-minded individuals, engage in enriching discussions, and seek guidance from our supportive community of web developers. Share your projects, exchange ideas, and forge valuable connections to propel your professional growth.

// 4.Learn Hardwares: Beyond the software knowledge explore the fascinating world of hardware development with our dedicated resources on Arduino, NodeMCU, ESP32, and more. Learn how to build and program your own smart devices, Internet of Things (IoT) projects, and unleash your creativity in physical computing

// We continuously update our platform with fresh content, industry insights, and practical exercises to ensure you stay ahead in the rapidly evolving web development landscape. Explore the latest resources and stay informed about upcoming events by visiting our website at [Insert Dummy URL].

// Should you have any questions, require assistance, or simply want to connect, our dedicated support team is here to assist you every step of the way.

// Once again, welcome to TNS-ACADEMY! Know your true potential and embark on a transformative journey to elevate your web development and programming skills.

// Happy coding!

// Best Regards,
// Thejas hari
// TNS-ACADEMY Team
// `
// };



// transporter.sendMail(mailOptions, function(err, data) {
//   if (err) {
//     console.log("Error " + err);
//   } else {
//     console.log("Email sent successfully");
//   }
// });

const sendMail = async (name,email) => {
  let mailOptions = {
      from: {
        name:'TNS Academy',
        address:'tnsacademy1@gmail.com'
      },
      to: email,
      subject: `Workshop Registered Successfully`,
      html: `
       <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
          <title>Welcome to TNS-ACADEMY</title>
          <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        <div class="container">
            <header>
              <img src='https://ik.imagekit.io/d3kzbpbila/webdev_Z0TfmeIWE.png?updatedAt=1687367732190' alt="TNS-ACADEMY Banner">
            </header>
            <div class="content">
              <h1 class="headline" >Thank you for registering for the workshop: Kickstart Web Dev</h1>
              <h2><strong>Join Workshop:</strong></h2>
              <ul>
                  <li>Google Meet :- Meeting link will be shared one day before the workshop in Mail Inbox and Whatsapp Group</li>
                  <li>Whatsapp group :- <a href='https://chat.whatsapp.com/EbYs8s2Me0gKgaYxfykVZT'>https://chat.whatsapp.com/EbYs8s2Me0gKgaYxfykVZT</a></li>
                </ul>
              <h2><strong>Workshop Details:</strong></h2>
              <ul>
                  <li><strong>Description:</strong> Gain knowledge about how websites work and the basics of HTML & CSS.</li>
                  <li><strong>Date and Time:</strong> 28/6 Wednesday (Evening:7pm - 9pm), 29/6 Thursday (Evening:7pm - 9pm)</li>
                  <li><strong>Duration:</strong> 2 Days</li>
                  <li><strong>Topics to be Covered:</strong></li>
                  <ul>
                    <li>
                      Day 1:- (28/6 Wednesday)
                      <ol>
                        <li>Introduction and Workshop Overview</li>
                        <li>Networking Fundamentals</li>                        
                        <li>Basic HTML</li>
                        <li>Introduction to CSS</li>
                        <li>Q&A Session</li>
                      </ol>
                    </li>
                    <li>
                      Day 2:- (29/6 Thursday)
                      <ol>
                        <li>Recap of Day 1/li>
                        <li>Enhancing Webpages with CSS</li>                        
                        <li>Simple project</li>
                        <li>Recap and Next Steps</li>
                        <li>Q&A Session</li>
                      </ol>
                    </li>
                </ul>
                  
                  <h2>For more information visit our website</h2>
                  <a href="https://tnsacademy.vercel.app"><button class="button">TNS-ACADEMY</button></a>
              </ul>
              <h2><strong>Requirements:</strong></h2>
              <ol>
                <li>A PC with text editor (visual studio, sublime etc.) for practical sessions</li>
                <li>2 hours of free time</li>
              </ol>
            </div>
        </div>
      </body>
      <style type="text/css">
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }

        header {
          text-align: center;
          margin-bottom: 20px;
        }

        header img {
          max-width: 100%;
          height: auto;
        }

        ul{
          margin-top: 10px;
        }

        h1 {
          font-size: 24px;
          margin-bottom: 10px;
          font-family: Verdana;
        }

        h2 {
          font-size: 20px;
          margin-top: 20px;
          font-family: Calibri;
        }

        p ,li{
          margin-bottom: 10px;
          line-height: 1.5;
          font-family: Cambria
        }

        a {
          color: #007bff;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }

        li{
          margin-top: 10px;
        }

        .button {
          display: inline-block;
          padding: 2px 10px;
          margin-left: 6px;
          background-color: #007bff;
          color: #fff;
          border-radius: 4px;
          text-decoration: none;
          transition: background-color 0.3s ease;
        }

        .button:hover {
          background-color: #0056b3;
        }
        .headline {
          font-size: 24px;
          background: linear-gradient(to right, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
          font-weight: bolder;
        }
      </style>
      </html>
      `
    };
    transporter.sendMail(mailOptions, function(err, data) {
      if (err) {
        console.log("Error " + err);
      } else {
        console.log("Email sent successfully");
      }
    });
} 

// sendMail('Thejas hari','thejaskala308@gmail.com')
app.use(cors())
app.use(cors({
  origin: ['http://tnsacademy.vercel.app','https://21stskills.vercel.app','https://21stskills.com','https://university.21stskills.com'], 
  credentials: true,
}));
// app.use(express.json());

app.use('/api/auth',userRoutes);

mongoose.connect("mongodb+srv://thejashari:letmegoin@tns-academy.oc6yct8.mongodb.net/?retryWrites=true&w=majority",{
	useNewUrlParser:true,
	useUnifiedTopology:true,
}).then(()=>{
	console.log("db connected successfully")
}).catch((err)=>{
	console.log(err,'DB not connected');
});

let PORT = process.env.PORT || 3333;

app.get('/',(req,res)=>{
	res.send(`<h1>Hello</h1>`)
})

const server = app.listen(PORT,()=>{
	console.log(`Server Started on ${PORT} `);
})

module.exports = app