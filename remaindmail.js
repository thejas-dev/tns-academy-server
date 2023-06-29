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

{name:'thejas hari',email:'thejaskala308@gmail.com'}


]





const sendMail = async (name,email) => {
  let mailOptions = {
      from: {
        name:'TNS Academy',
        address:'tnsacademy1@gmail.com'
      },
      to: email,
      subject: `Thank You for Attending Day 1 of the Kickstart Web Dev Workshop!`,
      html: `
       <!DOCTYPE html>
		<html>
		<head>
		    <title>Thank You for Attending Day 1 of the Kickstart Web Dev Workshop!</title>
		    <style>
		        body {
		            font-family: Arial, sans-serif;
		            line-height: 1.5;
		            color: #333333;
		            margin: 0;
		            padding: 0;
		        }

		        .container {
		            max-width: 600px;
		            margin: 0 auto;
		            padding: 20px;
		        }

		        h1 {
		            color: #007bff;
		            margin-top: 0;
		        }

		        p {
		            margin-bottom: 20px;
		        }

		        .button {
		            display: inline-block;
		            background-color: #007bff;
		            color: #ffffff;
		            text-decoration: none;
		            padding: 10px 20px;
		            border-radius: 4px;
		            margin-top: 10px;
		        }

		        .footer {
		            background-color: #f5f5f5;
		            padding: 10px;
		            text-align: center;
		        }

		        .footer p {
		            margin-bottom: 0;
		        }
		        header {
		            text-align: center;
		            margin-bottom: 20px;
		          }

		          header img {
		            max-width: 100%;
		            height: auto;
		            border-radius: 15px;
		          }
		    </style>
		</head>
		<body>
		    <div class="container">
		        <h1>Thank You for Attending Day 1 of the Kickstart Web Dev Workshop!</h1>
		        
		        <p>Hello ${name}, We hope this email finds you well. We wanted to extend our heartfelt thanks for attending Day 1 of the Kickstart Web Dev workshop. It was a pleasure having you as part of the learning journey.</p>

		        <p>Firstly, we would like to provide you with the Day 1 workshop resources for your reference and practice. You can download the resources through the following link: <a href="https://ik.imagekit.io/d3kzbpbila/Pdfs/Kickstart_Web_Dev__1__rNjZlOCJO.pdf" class="button" download>Download</a>.<br><br>These materials will be valuable for reviewing the concepts covered and reinforcing your understanding.</p>

		        <p>We're excited to inform you that Day 2 of the workshop is scheduled for tomorrow, 29-6-2023, from 7pm to 9pm. We have an engaging agenda planned, which includes the following topics:</p>

		        <ul>
		            <li>Recap of Day 1 :- We will briefly review the key concepts covered in Day 1 to ensure everyone is on the same page.</li>
		            <li>Enhancing Webpages with CSS :-  Dive deeper into CSS and explore various techniques to style and enhance webpages.</li>
		            <li>Simple Project :- Apply your newfound CSS skills to a simple project. This hands-on activity will allow you to practice what you've learned and create an interactive and visually appealing webpage.</li>
		            <li>Recap and Next Steps :- Summarize the key takeaways from the workshop and provide additional resources and suggestions for further learning and practice.</li>
		            <li>Q&A Session :-  Engage in a live Q&A session where you can ask any questions related to the workshop content or web development in general. Our instructors will be there to provide guidance and clarification</li>
		        </ul>

		        <p>We encourage you to come prepared with any questions or doubts you may have from Day 1. Remember, active participation is key to enhancing your learning experience.</p>

		        <p>We look forward to seeing you tomorrow for Day 2 of the workshop. Be sure to mark your calendar and join us at 7pm. We're confident that it will be another insightful and engaging session.</p>

		        <p>If you have any questions or need any assistance before the workshop, please feel free to reach out to our team. We are here to support you every step of the way.</p>

		        <p>Once again, thank you for your participation and enthusiasm. We appreciate your dedication to expanding your web development skills and look forward to continuing this learning journey together.</p>
		        <header>
		            <img src="https://ik.imagekit.io/d3kzbpbila/webdev_Z0TfmeIWE.png?updatedAt=1687367732190" alt="Banner Image">
		          </header>
		        <div class="footer">
		            <p>Best regards,</p>
		            <p>Thejas hari<br>TNS Academy</p>
		            <p><a href="https://tnsacademy.vercel.app">https://tnsacademy.vercel.app</a></p>
		        </div>
		        <p><em>Note: This email is intended for registered participants of the Kickstart Web Dev workshop. If you have received this email by mistake, please let us know by replying to this email.</em></p>
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