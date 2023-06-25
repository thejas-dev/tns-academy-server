const User = require("../models/userModels");
const nodemailer = require('nodemailer');

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

module.exports.register = async(req,res,next)=>{
	try{
		const {email,name,image,level} = req.body;
		const user = await User.create({
			email,name,image,level
		})
		let mailOptions = {
	      from: {
	        name:'TNS Academy',
	        address:'tnsacademy1@gmail.com'
	      },
	      to: email,
	      subject: `Welcome To TNS-ACADEMY`,
	      html: `
	      <!DOCTYPE html>
	      <html lang="en">

	      <head>
	        <meta charset="UTF-8">
	        <title>TNS-ACADEMY</title>
	      </head>

	      <body>
	        <div class="container">
	          <header>
	            <img src="https://ik.imagekit.io/d3kzbpbila/1687633138572_d14Nsb3Of.jpg?updatedAt=1687633153135" alt="">
	          </header>
	          <div class="content">
	            <h1 class="headline" >Greetings ${name}!</h1>
	            <p>We are delighted to have you join our vibrant web development community. Get ready to embark on an exhilarating journey of learning, growth, and innovation.</p>

	            <p>At TNS-ACADEMY, our mission is to empower passionate developers like you to excel in the dynamic world of web development. Whether you are a beginner seeking to master the basics, an experienced coder aiming to polish your skills, or interested in exploring hardware development, we offer a diverse range of resources tailored to meet your unique needs.</p>

	            <p>Here's what you can expect as a valued member of our academy:</p>

	            <h2>Engaging Workshops</h2>
	            <p>Immerse yourself in our interactive workshops led by industry experts. Gain hands-on experience, explore cutting-edge technologies, and collaborate with fellow enthusiasts. Stay tuned for upcoming workshops on Python, Java, and other exciting programming topics.</p>

	            <h2>Comprehensive Courses</h2>
	            <p>Deepen your knowledge through our meticulously designed courses. Our curriculum covers front-end development, back-end programming, and more, providing you with a well-rounded skill set to thrive in the field.</p>

	            <h2>Thriving Community</h2>
	            <p>Connect with like-minded individuals, engage in enriching discussions, and seek guidance from our supportive community of web developers. Share your projects, exchange ideas, and forge valuable connections to propel your professional growth.</p>

	            <h2>Hardware Development</h2>
	            <p>Explore the fascinating world of hardware development with our dedicated resources on Arduino, NodeMCU, ESP32, and more. Learn how to build and program your own smart devices, Internet of Things (IoT) projects, and unleash your creativity in physical computing.</p>

	            <p>We continuously update our platform with fresh content, industry insights, and practical exercises to ensure you stay ahead in the rapidly evolving web development and hardware domains. Explore the latest resources and stay informed about upcoming events by visiting our website at <a class="button" href="https://tnsacademy.vercel.app/#workshops">TNS-Academy</a>.</p>

	            <p>Should you have any questions, require assistance, or simply want to connect,we are here to assist you every step of the way.</p>

	            <p>Once again, welcome to TNS-ACADEMY ${name}! Know your true potential and embark on a transformative journey to elevate your skills and delve into the exciting realm of hardware development.</p>

	            <p>Happy coding and creating!</p>

	            <p>Best Regards,<br>Thejas hari<br>TNS-ACADEMY Team</p>
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

	        p {
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
		return res.json({status:true,user})
	}catch(ex){
		next(ex);
	}
}

module.exports.login = async(req,res,next)=>{
	try{
		const{email} = req.body;
		const user = await User.findOne({email})
		if(!user){
			return res.json({msg:"Account need to be Regitered",status:false});			
		}
		return res.json({status:true, user})
	}catch(ex){
		next(ex)
	}
}

module.exports.updateRegisteredWorkshops = async(req,res,next) => {
	try{
		const id = req.params.id;
		const {registeredWorkshops,currentWorkshop,email} = req.body;
		let mailOptions = {
		  from: {
	        name:'TNS Academy',
	        address:'tnsacademy1@gmail.com'
	      },
		  to: email,
		  subject: 'Workshop Registered Successfully',
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
				      <img src='https://ik.imagekit.io/d3kzbpbila/webdev_Z0TfmeIWE.png?updatedAt=1687367732190' alt="">
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
					        <a href="https://tnsacademy.vercel.app/#workshops"><button class="button">TNS-ACADEMY</button></a>
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
		const user = User.findByIdAndUpdate(id,{
			registeredWorkshops
		},{new:true},(err,obj)=>{
			console.log(obj)
			return res.json({status:true,obj})
		})
	}catch(ex){
		next(ex)
	}
}