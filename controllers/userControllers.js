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

const sendCourseCompletedMail = (name,email) => {
	let mailOptions = {
    from: {
      name:'TNS Academy',
      address:'tnsacademy1@gmail.com'
    },
    to: 'tnsacademy1@gmail.com',
    subject: `Course completed by ${name}`,
    html: `
    <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8">
      <title>21st Skills</title>
    </head>

    <body>
      <div class="container">
        <header>
          <img src="https://ik.imagekit.io/d3kzbpbila/1687633138572_d14Nsb3Of.jpg?updatedAt=1687633153135" alt="">
        </header>
        <div class="content">
          <h1 class="headline" >Name:- ${name}!</h1>
          <h1 class="headline" >Email:- ${email}!</h1>
          
          <p>Best Regards,<br>Thejas hari<br>21st Skills Team</p>
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
}

module.exports.courseCompletedRoute = async(req,res,next) => {
	try{
		const {userName,email} = req.body;
		console.log(userName,email)
		sendCourseCompletedMail(userName,email);
		return res.json({status:true,msg:"Okay!"});
	}catch(ex){
		next(ex)
	}
}

module.exports.updateImage = async(req,res,next) => {
	try{
		const {id} = req.params;
		const {image} = req.body;
		const user = User.findByIdAndUpdate(id,{
			image
		},{new:true},(err,obj)=>{
			if(err){
				return res.json({status:false,msg:"Something went wrong!"})
			}
			return res.json({status:true,user:obj});
		})
	}catch(ex){
		next(ex)
	}
}

module.exports.enrollCourse = async(req,res,next) => {
	try{
		const {id} = req.params;
		const {enrolledCoursesId,enrolledCoursesData,key} = req.body
		if(key === 'B2hkk90amFQZd3cpTeidd2qmav+DYVjRTg43u6YZ1KU='){
			const user = User.findByIdAndUpdate(id,{
				enrolledCoursesId,enrolledCoursesData
			},{new:true},(err,obj)=>{
				if(err){
					return res.json({status:false,msg:'Something went wrong!'})
				}
				return res.json({status:true,user:obj});
			})
		}else{
			return res.json({status:false,msg:'Something went wrong! Ivalid Key'});
		}
	}catch(ex){
		next(ex)
	}
}

module.exports.updateUserCourses = async(req,res,next) => {
	try{
		const {id} = req.params;
		const {enrolledCoursesData,key} = req.body;
		if(key === 'B2hkk90amFQZd3cpTeidd2qmav+DYVjRTg43u6YZ1KU='){
			const user = User.findByIdAndUpdate(id,{
				enrolledCoursesData
			},{new:true},(err,obj)=>{
				if(err){
					return res.json({status:false,msg:"Something went wrong!"});
				}
				return res.json({status:true,user:obj})
			})
		}else{
			return res.json({status:false,msg:"Something went wrong!"})
		}
	}catch(ex){
		next(ex)
	}
}

module.exports.updateCertificates = async(req,res,next) => {
	try{
		const {certificates} = req.body;
		const id = req.params.id;
		const user = User.findByIdAndUpdate(id,{
			certificates
		},{new:true},(err,obj)=>{
			console.log(obj)
			return res.json({status:true,obj})
		})
	}catch(ex){
		next(ex)
	}
}

module.exports.register = async(req,res,next)=>{
	try{
		const {email,name,image,level} = req.body;
		const user = await User.create({
			email,name,image,level
		})
		let mailOptions = {
	      from: {
	        name:'21st Skills',
	        address:'tnsacademy1@gmail.com'
	      },
	      to: email,
	      subject: `Welcome To 21st Skills`,
	      html: `
	      <!DOCTYPE html>
	      <html lang="en">

	      <head>
	        <meta charset="UTF-8">
	        <title>21st Skills</title>
	      </head>

	      <body>
	        <div class="container">
	          <header>
	            <img src="https://ik.imagekit.io/d3kzbpbila/1687633138572_d14Nsb3Of.jpg?updatedAt=1687633153135" alt="">
	          </header>
	          <div class="content">
	            <h1 class="headline" >Greetings ${name}!</h1>
	            <p>We are delighted to have you join our vibrant web development community. Get ready to embark on an exhilarating journey of learning, growth, and innovation.</p>

	            <p>At 21st Skills, our mission is to empower passionate developers like you to excel in the dynamic world of web development. Whether you are a beginner seeking to master the basics, an experienced coder aiming to polish your skills, or interested in exploring hardware development, we offer a diverse range of resources tailored to meet your unique needs.</p>

	            <p>Here's what you can expect as a valued member of our academy:</p>

	            <h2>Engaging Workshops</h2>
	            <p>Immerse yourself in our interactive workshops led by industry experts. Gain hands-on experience, explore cutting-edge technologies, and collaborate with fellow enthusiasts. Stay tuned for upcoming workshops on Python, Java, and other exciting programming topics.</p>

	            <h2>Comprehensive Courses</h2>
	            <p>Deepen your knowledge through our meticulously designed courses. Our curriculum covers front-end development, back-end programming, and more, providing you with a well-rounded skill set to thrive in the field.</p>

	            <h2>Thriving Community</h2>
	            <p>Connect with like-minded individuals, engage in enriching discussions, and seek guidance from our supportive community of web developers. Share your projects, exchange ideas, and forge valuable connections to propel your professional growth.</p>

	            <h2>Hardware Development</h2>
	            <p>Explore the fascinating world of hardware development with our dedicated resources on Arduino, NodeMCU, ESP32, and more. Learn how to build and program your own smart devices, Internet of Things (IoT) projects, and unleash your creativity in physical computing.</p>

	            <p>We continuously update our platform with fresh content, industry insights, and practical exercises to ensure you stay ahead in the rapidly evolving web development and hardware domains. Explore the latest resources and stay informed about upcoming events by visiting our website at <a class="button" href="https://21skills.vercel.app/#workshops">21st Skills</a>.</p>

	            <p>Should you have any questions, require assistance, or simply want to connect,we are here to assist you every step of the way.</p>

	            <p>Once again, welcome to 21st Skill ${name}! Know your true potential and embark on a transformative journey to elevate your skills and delve into the exciting realm of hardware development.</p>

	            <p>Happy coding and creating!</p>

	            <p>Best Regards,<br>Thejas hari<br>21st Skills Team</p>
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

module.exports.getAllUsers = async(req,res,next) => {
	try{
		const user = await User.find();
		return res.json({status:true,user});
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
	        name:'21st Skills',
	        address:'tnsacademy1@gmail.com'
	      },
		  to: email,
		  subject: 'Workshop Registered Successfully',
		  html: `
		    <!DOCTYPE html>
			<html>
			<head>
				<meta charset="UTF-8">
			  	<title>Welcome to 21st Skills</title>
			  	<link rel="stylesheet" href="styles.css">
			</head>
			<body>
				<div class="container">
				    <header>
				      <img src='https://21stskills.com/website-development-workshop.png' alt="">
				    </header>
				    <div class="content">
				    	<h1 class="headline" >Thank you for registering for the 2 days bootcamp on Web Development</h1>
			    		<h2><strong>Join Workshop:</strong></h2>
			    		<ul>
				          <li>Google Meet :- Meeting link will be shared one day before the workshop in Mail Inbox and Whatsapp Group</li>
				          <li>Whatsapp group :- <a href='https://chat.whatsapp.com/EbYs8s2Me0gKgaYxfykVZT'>https://chat.whatsapp.com/EbYs8s2Me0gKgaYxfykVZT</a></li>
				        </ul>
				    	<h2><strong>Workshop Details:</strong></h2>
				    	<ul>
					        <li><strong>Description:</strong> Are you a beginner eager to explore the magic of web development, or someone looking to level up your skills? Join us for an exciting two-day bootcamp where we'll unravel the secrets of web networking, development, and dive into the endless possibilities of this vibrant field.</li>
					        <li><strong>Date and Time:</strong> 17/2 Saturday (Evening 7pm - 9pm) & 18/2 Sunday (Evening:7pm - 9pm)</li>
					        <li><strong>Duration:</strong>2 Hours</li>
					        <li><strong>Topics to be Covered:</strong></li>
					        <ul>
					        	<li>
					        		Day 1:- (17/2 Saturday)
					        		<ol>
					        			<li>Web Development fundamentals</li>
					        			<li>Introduction to web Networking</li>					        			
					        			<li>HTML Basics to Intermediate</li>
					        			<li>Semantic HTML</li>
					        		</ol>
					        	</li>
					        	<li>
					        		Day 1:- (18/2 Saturday)
					        		<ol>
					        			<li>Day - 1 Recap</li>
					        			<li>CSS Basics to Intermediate</li>					        			
					        			<li>CSS Libraries</li>
					        			<li>Hands-on exercises</li>
					        		</ol>
					        	</li>
						    </ul>
					        
					        <h2>For more information visit our website</h2>
					        <a href="https://21skills.com"><button class="button">21st Skills</button></a>
					    </ul>
					    <h2><strong>Requirements:</strong></h2>
				    	<ol>
				    		<li>No prerequisites required.</li>
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

module.exports.getUsersByCourseId = async(req,res,next) => {
	try{
		const {courseId,token} = req.body;
		if(token==='JgWG+vM4jLsND0i25Dqo6Q=='){
			const user = await User.find({enrolledCoursesId:courseId});
			if(user){
				return res.json({status:true,user})
			}
			return res.json({status:false,msg:"Something went wrong!"})
		}else{
			return res.json({error:"Error!"})
		}
	}catch(ex){
		next(ex)
	}
}