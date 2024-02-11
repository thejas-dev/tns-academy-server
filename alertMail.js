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
    "_id": "649878bfece9acaff757d5ed",
    "name": "Thejas Hari",
    "email": "thejaskala308@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_a07xjbDOH1",
    "level": "Novice",
    "registeredWorkshops": [
      "65b4bd00ed9d87145d75ebe2",
      "65b024e37df1619b5bfaef84"
    ],
    "createdAt": "2023-06-25T17:26:23.207Z",
    "updatedAt": "2024-01-27T16:39:05.767Z",
    "__v": 0,
    "certificates": {
      "101110": "https://ik.imagekit.io/d3kzbpbila/thejashari_HQ3L6Jr6V",
      "649d30748595dbbe4fb93695": "https://ik.imagekit.io/d3kzbpbila/15_c8NQdUCLJ.png?updatedAt=1688414233731"
    },
    "enrolledCoursesData": [
      {
        "_id": "65925f26f5f0ffa3b0e38586",
        "title": "Basics of Networking and HTML Beginner to Advanced Course",
        "description": "Learn web development fundamentals, covering frontend, backend, and database structures. Explore client-server dynamics, APIs, various IP types, DNS workings, and HTML essentials with an introduction to CSS for crafting interactive websites",
        "image": "/html.png",
        "content": [
          {
            "title": "Course Introduction",
            "video": "/htmlcourse/intro.m3u8",
            "duration": "0:32",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Welcome to the course! In this introductory module, you'll get a glimpse of what's in store. We'll outline the course structure, set expectations, and highlight the outcomes you can anticipate upon completion."
          },
          {
            "title": "Expectations & Outcomes",
            "video": "/htmlcourse/CourseOutcomes&Scope.m3u8",
            "duration": "1:21",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Understand the goals of this course and what you'll gain by the end. We'll discuss the skills you'll acquire, the knowledge you'll gain, and how it will benefit you in the realm of web development and networking."
          },
          {
            "title": "Web Development & Scopes",
            "video": "/htmlcourse/WebDevelopment&Scopes.m3u8",
            "duration": "8:54",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the vast landscape of web development careers. Learn about the diverse scopes and job opportunities available in the industry, providing you with insights to shape your career path."
          },
          {
            "title": "Frontend Backend Architecture",
            "video": "/htmlcourse/FrontendBackendArchitecture.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Delve into the intricacies of frontend and backend architecture. Understand how these components work together to create seamless and responsive web applications, laying the foundation for your development journey."
          },
          {
            "title": "Database",
            "video": "/htmlcourse/database.m3u8",
            "duration": "1:07",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Uncover the importance of databases in web development. Learn what are the types of database available and the free cloud services providing free database for developers."
          },
          {
            "title": "IP & Types",
            "video": "/htmlcourse/ip internal & external.m3u8",
            "duration": "9:35",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Navigate the world of Internet Protocol (IP) addresses. Gain a comprehensive understanding of IP types and their significance in the networking landscape."
          },
          {
            "title": "Static vs Dynamic IP",
            "video": "/htmlcourse/static_vs_dynamic_ip.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the distinction between static and dynamic IP addresses. Learn how each type is assigned and its impact on network configurations."
          },
          {
            "title": "Quiz 1",
            "quiz": true,
            "locked": false,
            "completed": true,
            "questions": [
              {
                "question": "What does \"frontend\" refer to in web development?",
                "options": [
                  "The part of a website users interact with",
                  "The server-side logic of a website",
                  "The database management system",
                  "The network infrastructure"
                ],
                "questionId": 100,
                "selected": "The part of a website users interact with"
              },
              {
                "question": "What is the primary role of \"backend\" in web development?",
                "options": [
                  "Managing the user interface",
                  "Handling server-side logic and databases",
                  "Designing responsive layouts",
                  "Implementing frontend styles"
                ],
                "questionId": 101,
                "selected": "Handling server-side logic and databases"
              },
              {
                "question": "What does \"IP\" stand for in networking?",
                "options": [
                  "Internet Provider",
                  "Internet Protocol",
                  "Information Processing",
                  "Interface Port"
                ],
                "questionId": 102,
                "selected": "Internet Protocol"
              },
              {
                "question": " What is the total range of each octet in an IPv4 address?",
                "options": [
                  "0-100",
                  "0-127",
                  "0-255",
                  "0-64"
                ],
                "questionId": 103,
                "selected": "0-255"
              }
            ]
          },
          {
            "title": "DNS",
            "video": "/htmlcourse/dns.m3u8",
            "duration": "10:11",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Dive into the Domain Name System (DNS) and unravel the process of translating domain names to IP addresses. Explore the role DNS plays in making web browsing seamless."
          },
          {
            "title": "What is API?",
            "video": "/htmlcourse/api.m3u8",
            "duration": "3:12",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Application Programming Interfaces (APIs). Understand their significance in web development, facilitating communication between different software systems."
          },
          {
            "title": "What is HTML",
            "video": "/htmlcourse/what_is_html.m3u8",
            "duration": "2:11",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Begin your journey into the core of web development with HTML. Learn the basics of structuring web content and creating the foundation for interactive websites."
          },
          {
            "title": "HTML Page Structure",
            "video": "/htmlcourse/HTML_page_structure.m3u8",
            "duration": "3:33",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Master the art of organizing your web pages. Explore HTML tags that define the structure of a webpage, providing a solid foundation for your coding endeavors."
          },
          {
            "title": "Quiz 2",
            "quiz": true,
            "locked": false,
            "completed": true,
            "questions": [
              {
                "question": "What is the primary function of DNS in web development?",
                "options": [
                  "To design responsive user interfaces",
                  "To translate domain names to IP addresses",
                  "To manage server-side logic",
                  "To encrypt website data"
                ],
                "questionId": 104,
                "selected": "To translate domain names to IP addresses"
              },
              {
                "question": "What does 'API' stand for in web development?",
                "options": [
                  "Advanced Programming Interface",
                  "Application Programming Interface",
                  "Automated Processing Interface",
                  "Advanced Protocol Integration"
                ],
                "questionId": 105,
                "selected": "Application Programming Interface"
              },
              {
                "question": "What is the main markup language used for creating web pages??",
                "options": [
                  "XML",
                  "XAMPP",
                  "HTML",
                  "CSS"
                ],
                "questionId": 106,
                "selected": "HTML"
              },
              {
                "question": "What does 'HTML' stand for?",
                "options": [
                  "Hyper Transfer Markup Language",
                  "High-Level Text Management Language",
                  "Hyperlink and Text Management Language",
                  "HyperText Markup Language"
                ],
                "questionId": 107,
                "selected": "HyperText Markup Language"
              }
            ]
          },
          {
            "title": "Text tags",
            "video": "/htmlcourse/text_tags.m3u8",
            "duration": "18:55",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the world of text manipulation in HTML. Discover tags that enhance the presentation of textual content on your web pages."
          },
          {
            "title": "List tags",
            "video": "/htmlcourse/list_tags.m3u8",
            "duration": "5:29",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore HTML's list tags to efficiently structure information. Learn how to create ordered and unordered lists for better content organization."
          },
          {
            "title": "Anchor tag",
            "video": "/htmlcourse/Anchor_tag.m3u8",
            "duration": "7:53",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Unlock the power of hyperlinking with the anchor tag. Understand how to connect different pages and resources within your website."
          },
          {
            "title": "Image tag",
            "video": "/htmlcourse/image_tag.m3u8",
            "duration": "6:48",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Bring visual appeal to your web pages with the image tag. Learn how to integrate images seamlessly into your HTML content."
          },
          {
            "title": "Audio & video tag",
            "video": "/htmlcourse/audio_and_video_tag.m3u8",
            "duration": "7:56",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Elevate user engagement with multimedia elements. Explore the audio and video tags to incorporate media seamlessly into your web projects."
          },
          {
            "title": "iframe & embed tag",
            "video": "/htmlcourse/iframe_and_embed_tag.m3u8",
            "duration": "7:47",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Harness the capabilities of iframe and embed tags. Understand how these tags enable the integration of external content within your web pages."
          },
          {
            "title": "Div tag",
            "video": "/htmlcourse/div_tag.m3u8",
            "duration": "3:26",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Master the versatile div tag. Learn how it acts as a container, allowing you to structure and style your HTML content effectively."
          },
          {
            "title": "Input tags",
            "video": "/htmlcourse/input_tag.m3u8",
            "duration": "14:01",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Dive into user interaction with HTML input tags. Explore various input types and understand how they enable user data input."
          },
          {
            "title": "Button tag",
            "video": "/htmlcourse/button_tag.m3u8",
            "duration": "1:43",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Elevate user experience with interactive buttons. Learn the ins and outs of the button tag and its various applications."
          },
          {
            "title": "Form part 1",
            "video": "/htmlcourse/form_tag_1.m3u8",
            "duration": "9:09",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Embark on the journey of web forms. In part one, explore the essential elements that make up a form, setting the stage for user data collection."
          },
          {
            "title": "Form part 2",
            "video": "/htmlcourse/form_tag_2.m3u8",
            "duration": "8:00",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Delve deeper into the world of web forms. In part two, learn about form validation, submission methods, and enhance the functionality of your forms."
          },
          {
            "title": "Table tag",
            "video": "/htmlcourse/table_tag.m3u8",
            "duration": "4:42",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Uncover the power of HTML tables. Learn how to structure and display data in a tabular format for improved readability."
          },
          {
            "title": "Semantic HTML - 1",
            "video": "/htmlcourse/semantic_html_1.m3u8",
            "duration": "5:13",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Embrace semantic HTML for enhanced accessibility and SEO. In part one, understand how semantic tags contribute to the meaning and structure of your content."
          },
          {
            "title": "Semantic HTML - 2",
            "video": "/htmlcourse/semantic_html_2.m3u8",
            "duration": "2:13",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Continue your journey into semantic HTML. In part two, explore additional tags that enrich the semantics of your web pages."
          },
          {
            "title": "Web Crawler",
            "video": "/htmlcourse/web_crawler.m3u8",
            "duration": "3:40",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Understand how websites are ranked to top by web crawling. Understand the fundamentals of how search engines navigate and index content across the vast web."
          },
          {
            "title": "Quiz 3",
            "quiz": true,
            "locked": false,
            "completed": true,
            "questions": [
              {
                "question": "What is the purpose of 'Text tags' in HTML?",
                "options": [
                  "To create lists of items",
                  "To structure webpage content",
                  "To manipulate text formatting",
                  "To embed multimedia elements"
                ],
                "questionId": 108,
                "selected": "To manipulate text formatting"
              },
              {
                "question": "Which HTML tags are used for creating ordered and unordered lists?",
                "options": [
                  "<ol> and <ul>",
                  "<ul> and <li>",
                  "<list> and <item>",
                  "<order> and <item>"
                ],
                "questionId": 109,
                "selected": "<ol> and <ul>"
              },
              {
                "question": "What does the 'Anchor tag' (<a>) primarily facilitate in HTML?",
                "options": [
                  "Embedding images",
                  "Creating hyperlinks",
                  "Styling webpage elements",
                  "Inserting audio content"
                ],
                "questionId": 110,
                "selected": "Creating hyperlinks"
              },
              {
                "question": "What does the term 'Web Crawler' refer to in the context of HTML?",
                "options": [
                  "A spider-like creature",
                  "A tool for organizing files",
                  "A script for automating tasks",
                  "A program for navigating and indexing web content"
                ],
                "questionId": 111,
                "selected": "A program for navigating and indexing web content"
              }
            ]
          },
          {
            "title": "More HTML tags",
            "video": "/htmlcourse/more_html_tags.m3u8",
            "duration": "1:39",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Expand your HTML toolkit with additional tags. Discover tags that cater to specific needs, enhancing the richness of your web pages."
          },
          {
            "title": "Project 1 - 1",
            "video": "/htmlcourse/project_1_1.m3u8",
            "duration": "7:38",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Apply your newfound HTML skills in a practical project. In part one, embark on a hands-on project to where we build a small FAQ page by using semantic HTML tags and using font awesome icons."
          },
          {
            "title": "Project 1 - 2",
            "video": "/htmlcourse/project_1_2.m3u8",
            "duration": "8:47",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Continue your project journey in part two. Apply advanced HTML concepts and solidify your skills through a comprehensive project that showcases your abilities."
          },
          {
            "title": "Project 2",
            "video": "/htmlcourse/project_2.m3u8",
            "duration": "9:05",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Level up with an in-depth project. Demonstrate your proficiency in HTML as you undertake a larger-scale project, integrating various elements learned throughout the course."
          },
          {
            "title": "Web Hosting",
            "video": "/htmlcourse/web_hosting.m3u8",
            "duration": "6:26",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Unravel the mysteries of web hosting. Learn how to take your web projects live by exploring different hosting options and understanding the basics of site configurations."
          },
          {
            "title": "CSS",
            "video": "/htmlcourse/intro_to_css.m3u8",
            "duration": "8:22",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Transition seamlessly from HTML to CSS. In this module, delve into the world of Cascading Style Sheets to add style and visual appeal to your web pages."
          },
          {
            "title": "HTML and Project Quiz",
            "quiz": true,
            "locked": false,
            "completed": true,
            "questions": [
              {
                "question": "In 'Project 1 - 1', what HTML semantic tags were primarily used for creating a FAQ page?",
                "options": [
                  "<div> and <span>",
                  "<details> and <summary>",
                  "<ul> and <li>",
                  "<section> and <article>"
                ],
                "questionId": 112,
                "selected": "<details> and <summary>",
                "wrong": false
              },
              {
                "question": "In 'Project 1 - 2', how did you make an image float using HTML?",
                "options": [
                  "Applied 'float' property in CSS",
                  "Used 'position: absolute'",
                  "Set 'display: inline-block'",
                  "Inserted a 'float' tag around the image"
                ],
                "questionId": 113,
                "selected": "Applied 'float' property in CSS",
                "wrong": true
              },
              {
                "question": "What was the focus of 'Project 2' in your HTML course?",
                "options": [
                  "Creating an FAQ page",
                  "Designing a personal portfolio",
                  "Developing a basic app documentation",
                  "Implementing a chat application"
                ],
                "questionId": 114,
                "selected": "Developing a basic app documentation",
                "wrong": false
              },
              {
                "question": "What is web hosting in the context of web development?",
                "options": [
                  "A service that allows individuals and organizations to make their websites accessible via the World Wide Web",
                  "A method of creating dynamic web pages",
                  "A technique for optimizing website performance",
                  "A module covered in the CSS section"
                ],
                "questionId": 115,
                "selected": "A service that allows individuals and organizations to make their websites accessible via the World Wide Web",
                "wrong": false
              }
            ],
            "everythingCorrect": false
          },
          {
            "title": "Wrap up",
            "video": "/htmlcourse/wrap_up.m3u8",
            "duration": "2:07",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Congratulations on completing the course! In this final module, recap your journey, reflect on your accomplishments, and gain insights into the next steps in your web development adventure."
          }
        ],
        "language": "Tamil",
        "requirements": [
          "Text editor for writing HTML code",
          "Web Browser to view the output of HTML code"
        ],
        "author": "N.U.Thejas hari",
        "authorInsta": "https://www.instagram.com/nuthejashari/",
        "meetingLink": "",
        "whatsappGroup": "",
        "recordedVideo": "",
        "courseId": "101110",
        "locked": false,
        "videos": "35",
        "projects": "2",
        "duration": "4 Hours",
        "paid": "",
        "cancellable": false,
        "createdAt": "2024-01-01T06:43:50.699Z",
        "updatedAt": "2024-01-01T06:43:50.699Z",
        "__v": 0,
        "completed": false,
        "enrolledOn": "2024-01-01T08:46:05.047Z",
        "certificate": "",
        "name": "Thejas Hari",
        "userId": "649878bfece9acaff757d5ed",
        "progress": 0,
        "allNotes": []
      },
      {
        "_id": "65925f26f5f0ffa3b0e38586",
        "title": "Basics of Networking and HTML Beginner to Advanced Course",
        "description": "Learn web development fundamentals, covering frontend, backend, and database structures. Explore client-server dynamics, APIs, various IP types, DNS workings, and HTML essentials with an introduction to CSS for crafting interactive websites",
        "image": "/html.png",
        "content": [
          {
            "title": "Course Introduction",
            "video": "/htmlcourse/intro.m3u8",
            "duration": "0:32",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Welcome to the course! In this introductory module, you'll get a glimpse of what's in store. We'll outline the course structure, set expectations, and highlight the outcomes you can anticipate upon completion."
          },
          {
            "title": "Expectations & Outcomes",
            "video": "/htmlcourse/CourseOutcomes&Scope.m3u8",
            "duration": "1:21",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Understand the goals of this course and what you'll gain by the end. We'll discuss the skills you'll acquire, the knowledge you'll gain, and how it will benefit you in the realm of web development and networking."
          },
          {
            "title": "Web Development & Scopes",
            "video": "/htmlcourse/WebDevelopment&Scopes.m3u8",
            "duration": "8:54",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the vast landscape of web development careers. Learn about the diverse scopes and job opportunities available in the industry, providing you with insights to shape your career path."
          },
          {
            "title": "Frontend Backend Architecture",
            "video": "/htmlcourse/FrontendBackendArchitecture.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Delve into the intricacies of frontend and backend architecture. Understand how these components work together to create seamless and responsive web applications, laying the foundation for your development journey."
          },
          {
            "title": "Database",
            "video": "/htmlcourse/database.m3u8",
            "duration": "1:07",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Uncover the importance of databases in web development. Learn what are the types of database available and the free cloud services providing free database for developers."
          },
          {
            "title": "IP & Types",
            "video": "/htmlcourse/ip internal & external.m3u8",
            "duration": "9:35",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Navigate the world of Internet Protocol (IP) addresses. Gain a comprehensive understanding of IP types and their significance in the networking landscape."
          },
          {
            "title": "IPv4 vs IPv6",
            "video": "/htmlcourse/ipv4 vs ipv6.m3u8",
            "duration": "7:12",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Compare IPv4 and IPv6, the two versions of the Internet Protocol. Understand the differences and advancements that IPv6 brings to address the limitations of IPv4."
          },
          {
            "title": "Static vs Dynamic IP",
            "video": "/htmlcourse/static_vs_dynamic_ip.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the distinction between static and dynamic IP addresses. Learn how each type is assigned and its impact on network configurations."
          },
          {
            "title": "Quiz 1",
            "quiz": true,
            "locked": false,
            "completed": false,
            "questions": [
              {
                "question": "What does \"frontend\" refer to in web development?",
                "options": [
                  "The part of a website users interact with",
                  "The server-side logic of a website",
                  "The database management system",
                  "The network infrastructure"
                ],
                "questionId": 100
              },
              {
                "question": "What is the primary role of \"backend\" in web development?",
                "options": [
                  "Managing the user interface",
                  "Handling server-side logic and databases",
                  "Designing responsive layouts",
                  "Implementing frontend styles"
                ],
                "questionId": 101
              },
              {
                "question": "What does \"IP\" stand for in networking?",
                "options": [
                  "Internet Provider",
                  "Internet Protocol",
                  "Information Processing",
                  "Interface Port"
                ],
                "questionId": 102
              },
              {
                "question": " What is the total range of each octet in an IPv4 address?",
                "options": [
                  "0-100",
                  "0-127",
                  "0-255",
                  "0-64"
                ],
                "questionId": 103
              }
            ]
          },
          {
            "title": "DNS",
            "video": "/htmlcourse/dns.m3u8",
            "duration": "10:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into the Domain Name System (DNS) and unravel the process of translating domain names to IP addresses. Explore the role DNS plays in making web browsing seamless."
          },
          {
            "title": "What is API?",
            "video": "/htmlcourse/api.m3u8",
            "duration": "3:12",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Application Programming Interfaces (APIs). Understand their significance in web development, facilitating communication between different software systems."
          },
          {
            "title": "What is HTML",
            "video": "/htmlcourse/what_is_html.m3u8",
            "duration": "2:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Begin your journey into the core of web development with HTML. Learn the basics of structuring web content and creating the foundation for interactive websites."
          },
          {
            "title": "HTML Page Structure",
            "video": "/htmlcourse/HTML_page_structure.m3u8",
            "duration": "3:33",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the art of organizing your web pages. Explore HTML tags that define the structure of a webpage, providing a solid foundation for your coding endeavors."
          },
          {
            "title": "Quiz 2",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the primary function of DNS in web development?",
                "options": [
                  "To design responsive user interfaces",
                  "To translate domain names to IP addresses",
                  "To manage server-side logic",
                  "To encrypt website data"
                ],
                "questionId": 104
              },
              {
                "question": "What does 'API' stand for in web development?",
                "options": [
                  "Advanced Programming Interface",
                  "Application Programming Interface",
                  "Automated Processing Interface",
                  "Advanced Protocol Integration"
                ],
                "questionId": 105
              },
              {
                "question": "What is the main markup language used for creating web pages??",
                "options": [
                  "XML",
                  "XAMPP",
                  "HTML",
                  "CSS"
                ],
                "questionId": 106
              },
              {
                "question": "What does 'HTML' stand for?",
                "options": [
                  "Hyper Transfer Markup Language",
                  "High-Level Text Management Language",
                  "Hyperlink and Text Management Language",
                  "HyperText Markup Language"
                ],
                "questionId": 107
              }
            ]
          },
          {
            "title": "Text tags",
            "video": "/htmlcourse/text_tags.m3u8",
            "duration": "18:55",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore the world of text manipulation in HTML. Discover tags that enhance the presentation of textual content on your web pages."
          },
          {
            "title": "Anchor tag",
            "video": "/htmlcourse/Anchor_tag.m3u8",
            "duration": "7:53",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unlock the power of hyperlinking with the anchor tag. Understand how to connect different pages and resources within your website."
          },
          {
            "title": "Image tag",
            "video": "/htmlcourse/image_tag.m3u8",
            "duration": "6:48",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Bring visual appeal to your web pages with the image tag. Learn how to integrate images seamlessly into your HTML content."
          },
          {
            "title": "Audio & video tag",
            "video": "/htmlcourse/audio_and_video_tag.m3u8",
            "duration": "7:56",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user engagement with multimedia elements. Explore the audio and video tags to incorporate media seamlessly into your web projects."
          },
          {
            "title": "iframe & embed tag",
            "video": "/htmlcourse/iframe_and_embed_tag.m3u8",
            "duration": "7:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Harness the capabilities of iframe and embed tags. Understand how these tags enable the integration of external content within your web pages."
          },
          {
            "title": "Div tag",
            "video": "/htmlcourse/div_tag.m3u8",
            "duration": "3:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the versatile div tag. Learn how it acts as a container, allowing you to structure and style your HTML content effectively."
          },
          {
            "title": "Input tags",
            "video": "/htmlcourse/input_tag.m3u8",
            "duration": "14:01",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into user interaction with HTML input tags. Explore various input types and understand how they enable user data input."
          },
          {
            "title": "Button tag",
            "video": "/htmlcourse/button_tag.m3u8",
            "duration": "1:43",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user experience with interactive buttons. Learn the ins and outs of the button tag and its various applications."
          },
          {
            "title": "Form part 1",
            "video": "/htmlcourse/form_tag_1.m3u8",
            "duration": "9:09",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embark on the journey of web forms. In part one, explore the essential elements that make up a form, setting the stage for user data collection."
          },
          {
            "title": "Form part 2",
            "video": "/htmlcourse/form_tag_2.m3u8",
            "duration": "8:00",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Delve deeper into the world of web forms. In part two, learn about form validation, submission methods, and enhance the functionality of your forms."
          },
          {
            "title": "Table tag",
            "video": "/htmlcourse/table_tag.m3u8",
            "duration": "4:42",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Uncover the power of HTML tables. Learn how to structure and display data in a tabular format for improved readability."
          },
          {
            "title": "Semantic HTML - 1",
            "video": "/htmlcourse/semantic_html_1.m3u8",
            "duration": "5:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embrace semantic HTML for enhanced accessibility and SEO. In part one, understand how semantic tags contribute to the meaning and structure of your content."
          },
          {
            "title": "Semantic HTML - 2",
            "video": "/htmlcourse/semantic_html_2.m3u8",
            "duration": "2:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your journey into semantic HTML. In part two, explore additional tags that enrich the semantics of your web pages."
          },
          {
            "title": "Web Crawler",
            "video": "/htmlcourse/web_crawler.m3u8",
            "duration": "3:40",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Understand how websites are ranked to top by web crawling. Understand the fundamentals of how search engines navigate and index content across the vast web."
          },
          {
            "title": "Quiz 3",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the purpose of 'Text tags' in HTML?",
                "options": [
                  "To create lists of items",
                  "To structure webpage content",
                  "To manipulate text formatting",
                  "To embed multimedia elements"
                ],
                "questionId": 108
              },
              {
                "question": "Which HTML tags are used for creating ordered and unordered lists?",
                "options": [
                  "<ol> and <ul>",
                  "<ul> and <li>",
                  "<list> and <item>",
                  "<order> and <item>"
                ],
                "questionId": 109
              },
              {
                "question": "What does the 'Anchor tag' (<a>) primarily facilitate in HTML?",
                "options": [
                  "Embedding images",
                  "Creating hyperlinks",
                  "Styling webpage elements",
                  "Inserting audio content"
                ],
                "questionId": 110
              },
              {
                "question": "What does the term 'Web Crawler' refer to in the context of HTML?",
                "options": [
                  "A spider-like creature",
                  "A tool for organizing files",
                  "A script for automating tasks",
                  "A program for navigating and indexing web content"
                ],
                "questionId": 111
              }
            ]
          },
          {
            "title": "More HTML tags",
            "video": "/htmlcourse/more_html_tags.m3u8",
            "duration": "1:39",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Expand your HTML toolkit with additional tags. Discover tags that cater to specific needs, enhancing the richness of your web pages."
          },
          {
            "title": "Project 1 - 1",
            "video": "/htmlcourse/project_1_1.m3u8",
            "duration": "7:38",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Apply your newfound HTML skills in a practical project. In part one, embark on a hands-on project to where we build a small FAQ page by using semantic HTML tags and using font awesome icons."
          },
          {
            "title": "Project 1 - 2",
            "video": "/htmlcourse/project_1_2.m3u8",
            "duration": "8:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your project journey in part two. Apply advanced HTML concepts and solidify your skills through a comprehensive project that showcases your abilities."
          },
          {
            "title": "Project 2",
            "video": "/htmlcourse/project_2.m3u8",
            "duration": "9:05",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Level up with an in-depth project. Demonstrate your proficiency in HTML as you undertake a larger-scale project, integrating various elements learned throughout the course."
          },
          {
            "title": "Web Hosting",
            "video": "/htmlcourse/web_hosting.m3u8",
            "duration": "6:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unravel the mysteries of web hosting. Learn how to take your web projects live by exploring different hosting options and understanding the basics of site configurations."
          },
          {
            "title": "CSS",
            "video": "/htmlcourse/intro_to_css.m3u8",
            "duration": "8:22",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Transition seamlessly from HTML to CSS. In this module, delve into the world of Cascading Style Sheets to add style and visual appeal to your web pages."
          },
          {
            "title": "HTML and Project Quiz",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "In 'Project 1 - 1', what HTML semantic tags were primarily used for creating a FAQ page?",
                "options": [
                  "<div> and <span>",
                  "<details> and <summary>",
                  "<ul> and <li>",
                  "<section> and <article>"
                ],
                "questionId": 112
              },
              {
                "question": "In 'Project 1 - 2', how did you make an image float using HTML?",
                "options": [
                  "Applied 'float' property in CSS",
                  "Used 'position: absolute'",
                  "Set 'display: inline-block'",
                  "Inserted a 'float' tag around the image"
                ],
                "questionId": 113
              },
              {
                "question": "What was the focus of 'Project 2' in your HTML course?",
                "options": [
                  "Creating an FAQ page",
                  "Designing a personal portfolio",
                  "Developing a basic app documentation",
                  "Implementing a chat application"
                ],
                "questionId": 114
              },
              {
                "question": "What is web hosting in the context of web development?",
                "options": [
                  "A service that allows individuals and organizations to make their websites accessible via the World Wide Web",
                  "A method of creating dynamic web pages",
                  "A technique for optimizing website performance",
                  "A module covered in the CSS section"
                ],
                "questionId": 115
              }
            ]
          },
          {
            "title": "Wrap up",
            "video": "/htmlcourse/wrap_up.m3u8",
            "duration": "2:07",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Congratulations on completing the course! In this final module, recap your journey, reflect on your accomplishments, and gain insights into the next steps in your web development adventure."
          }
        ],
        "language": "Tamil",
        "requirements": [
          "Text editor for writing HTML code",
          "Web Browser to view the output of HTML code"
        ],
        "author": "N.U.Thejas hari",
        "authorInsta": "https://www.instagram.com/nuthejashari/",
        "meetingLink": "",
        "whatsappGroup": "",
        "recordedVideo": "",
        "courseId": "101110",
        "locked": false,
        "videos": "35",
        "projects": "2",
        "duration": "4 Hours",
        "paid": "",
        "cancellable": false,
        "createdAt": "2024-01-01T06:43:50.699Z",
        "updatedAt": "2024-01-01T06:43:50.699Z",
        "__v": 0,
        "completed": false,
        "enrolledOn": "2024-01-26T05:42:22.630Z",
        "certificate": "",
        "name": "Thejas Hari",
        "userId": "649878bfece9acaff757d5ed",
        "progress": 0,
        "allNotes": []
      }
    ],
    "enrolledCoursesId": [
      "101110",
      "101110"
    ]
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "64987d87c51d78e5904129e2",
    "name": "BP Prasanna",
    "email": "bpp1757@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_E_4PUHZr0",
    "level": "Beginner",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695",
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-25T17:46:47.008Z",
    "updatedAt": "2023-07-03T20:14:19.776Z",
    "__v": 0,
    "certificates": {
      "649d30748595dbbe4fb93695": "https://ik.imagekit.io/d3kzbpbila/4_u6ib9aCGwu.png?updatedAt=1688414228666"
    }
  },
  {
    "_id": "649885ac7f3d4624598233ef",
    "name": "Tarinisri TG",
    "email": "tarinisri43@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_EvFAJACW_4",
    "level": "Beginner",
    "registeredWorkshops": [
      "65c4ec315a6594a5ea09b47f",
      "65b4bd00ed9d87145d75ebe2",
      "65b024e37df1619b5bfaef84",
      "649d30748595dbbe4fb93695",
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-25T18:21:32.880Z",
    "updatedAt": "2024-02-08T15:18:45.441Z",
    "__v": 0,
    "certificates": {
      "649d30748595dbbe4fb93695": "https://ik.imagekit.io/d3kzbpbila/1_lRPQYHMqjs.png?updatedAt=1688414228676"
    },
    "enrolledCoursesData": [
      {
        "_id": "65925f26f5f0ffa3b0e38586",
        "title": "Basics of Networking and HTML Beginner to Advanced Course",
        "description": "Learn web development fundamentals, covering frontend, backend, and database structures. Explore client-server dynamics, APIs, various IP types, DNS workings, and HTML essentials with an introduction to CSS for crafting interactive websites",
        "image": "/html.png",
        "content": [
          {
            "title": "Course Introduction",
            "video": "/htmlcourse/intro.m3u8",
            "duration": "0:32",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Welcome to the course! In this introductory module, you'll get a glimpse of what's in store. We'll outline the course structure, set expectations, and highlight the outcomes you can anticipate upon completion."
          },
          {
            "title": "Expectations & Outcomes",
            "video": "/htmlcourse/CourseOutcomes&Scope.m3u8",
            "duration": "1:21",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Understand the goals of this course and what you'll gain by the end. We'll discuss the skills you'll acquire, the knowledge you'll gain, and how it will benefit you in the realm of web development and networking."
          },
          {
            "title": "Web Development & Scopes",
            "video": "/htmlcourse/WebDevelopment&Scopes.m3u8",
            "duration": "8:54",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the vast landscape of web development careers. Learn about the diverse scopes and job opportunities available in the industry, providing you with insights to shape your career path."
          },
          {
            "title": "Frontend Backend Architecture",
            "video": "/htmlcourse/FrontendBackendArchitecture.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Delve into the intricacies of frontend and backend architecture. Understand how these components work together to create seamless and responsive web applications, laying the foundation for your development journey."
          },
          {
            "title": "Database",
            "video": "/htmlcourse/database.m3u8",
            "duration": "1:07",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Uncover the importance of databases in web development. Learn what are the types of database available and the free cloud services providing free database for developers."
          },
          {
            "title": "IP & Types",
            "video": "/htmlcourse/ip internal & external.m3u8",
            "duration": "9:35",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Navigate the world of Internet Protocol (IP) addresses. Gain a comprehensive understanding of IP types and their significance in the networking landscape."
          },
          {
            "title": "IPv4 vs IPv6",
            "video": "/htmlcourse/ipv4 vs ipv6.m3u8",
            "duration": "7:12",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Compare IPv4 and IPv6, the two versions of the Internet Protocol. Understand the differences and advancements that IPv6 brings to address the limitations of IPv4."
          },
          {
            "title": "Static vs Dynamic IP",
            "video": "/htmlcourse/static_vs_dynamic_ip.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the distinction between static and dynamic IP addresses. Learn how each type is assigned and its impact on network configurations."
          },
          {
            "title": "Quiz 1",
            "quiz": true,
            "locked": false,
            "completed": false,
            "questions": [
              {
                "question": "What does \"frontend\" refer to in web development?",
                "options": [
                  "The part of a website users interact with",
                  "The server-side logic of a website",
                  "The database management system",
                  "The network infrastructure"
                ],
                "questionId": 100
              },
              {
                "question": "What is the primary role of \"backend\" in web development?",
                "options": [
                  "Managing the user interface",
                  "Handling server-side logic and databases",
                  "Designing responsive layouts",
                  "Implementing frontend styles"
                ],
                "questionId": 101
              },
              {
                "question": "What does \"IP\" stand for in networking?",
                "options": [
                  "Internet Provider",
                  "Internet Protocol",
                  "Information Processing",
                  "Interface Port"
                ],
                "questionId": 102
              },
              {
                "question": " What is the total range of each octet in an IPv4 address?",
                "options": [
                  "0-100",
                  "0-127",
                  "0-255",
                  "0-64"
                ],
                "questionId": 103
              }
            ]
          },
          {
            "title": "DNS",
            "video": "/htmlcourse/dns.m3u8",
            "duration": "10:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into the Domain Name System (DNS) and unravel the process of translating domain names to IP addresses. Explore the role DNS plays in making web browsing seamless."
          },
          {
            "title": "What is API?",
            "video": "/htmlcourse/api.m3u8",
            "duration": "3:12",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Application Programming Interfaces (APIs). Understand their significance in web development, facilitating communication between different software systems."
          },
          {
            "title": "What is HTML",
            "video": "/htmlcourse/what_is_html.m3u8",
            "duration": "2:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Begin your journey into the core of web development with HTML. Learn the basics of structuring web content and creating the foundation for interactive websites."
          },
          {
            "title": "HTML Page Structure",
            "video": "/htmlcourse/HTML_page_structure.m3u8",
            "duration": "3:33",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the art of organizing your web pages. Explore HTML tags that define the structure of a webpage, providing a solid foundation for your coding endeavors."
          },
          {
            "title": "Quiz 2",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the primary function of DNS in web development?",
                "options": [
                  "To design responsive user interfaces",
                  "To translate domain names to IP addresses",
                  "To manage server-side logic",
                  "To encrypt website data"
                ],
                "questionId": 104
              },
              {
                "question": "What does 'API' stand for in web development?",
                "options": [
                  "Advanced Programming Interface",
                  "Application Programming Interface",
                  "Automated Processing Interface",
                  "Advanced Protocol Integration"
                ],
                "questionId": 105
              },
              {
                "question": "What is the main markup language used for creating web pages??",
                "options": [
                  "XML",
                  "XAMPP",
                  "HTML",
                  "CSS"
                ],
                "questionId": 106
              },
              {
                "question": "What does 'HTML' stand for?",
                "options": [
                  "Hyper Transfer Markup Language",
                  "High-Level Text Management Language",
                  "Hyperlink and Text Management Language",
                  "HyperText Markup Language"
                ],
                "questionId": 107
              }
            ]
          },
          {
            "title": "Text tags",
            "video": "/htmlcourse/text_tags.m3u8",
            "duration": "18:55",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore the world of text manipulation in HTML. Discover tags that enhance the presentation of textual content on your web pages."
          },
          {
            "title": "List tags",
            "video": "/htmlcourse/list_tags.m3u8",
            "duration": "5:29",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore HTML's list tags to efficiently structure information. Learn how to create ordered and unordered lists for better content organization."
          },
          {
            "title": "Anchor tag",
            "video": "/htmlcourse/Anchor_tag.m3u8",
            "duration": "7:53",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unlock the power of hyperlinking with the anchor tag. Understand how to connect different pages and resources within your website."
          },
          {
            "title": "Image tag",
            "video": "/htmlcourse/image_tag.m3u8",
            "duration": "6:48",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Bring visual appeal to your web pages with the image tag. Learn how to integrate images seamlessly into your HTML content."
          },
          {
            "title": "Audio & video tag",
            "video": "/htmlcourse/audio_and_video_tag.m3u8",
            "duration": "7:56",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user engagement with multimedia elements. Explore the audio and video tags to incorporate media seamlessly into your web projects."
          },
          {
            "title": "iframe & embed tag",
            "video": "/htmlcourse/iframe_and_embed_tag.m3u8",
            "duration": "7:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Harness the capabilities of iframe and embed tags. Understand how these tags enable the integration of external content within your web pages."
          },
          {
            "title": "Div tag",
            "video": "/htmlcourse/div_tag.m3u8",
            "duration": "3:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the versatile div tag. Learn how it acts as a container, allowing you to structure and style your HTML content effectively."
          },
          {
            "title": "Input tags",
            "video": "/htmlcourse/input_tag.m3u8",
            "duration": "14:01",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into user interaction with HTML input tags. Explore various input types and understand how they enable user data input."
          },
          {
            "title": "Button tag",
            "video": "/htmlcourse/button_tag.m3u8",
            "duration": "1:43",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user experience with interactive buttons. Learn the ins and outs of the button tag and its various applications."
          },
          {
            "title": "Form part 1",
            "video": "/htmlcourse/form_tag_1.m3u8",
            "duration": "9:09",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embark on the journey of web forms. In part one, explore the essential elements that make up a form, setting the stage for user data collection."
          },
          {
            "title": "Form part 2",
            "video": "/htmlcourse/form_tag_2.m3u8",
            "duration": "8:00",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Delve deeper into the world of web forms. In part two, learn about form validation, submission methods, and enhance the functionality of your forms."
          },
          {
            "title": "Table tag",
            "video": "/htmlcourse/table_tag.m3u8",
            "duration": "4:42",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Uncover the power of HTML tables. Learn how to structure and display data in a tabular format for improved readability."
          },
          {
            "title": "Semantic HTML - 1",
            "video": "/htmlcourse/semantic_html_1.m3u8",
            "duration": "5:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embrace semantic HTML for enhanced accessibility and SEO. In part one, understand how semantic tags contribute to the meaning and structure of your content."
          },
          {
            "title": "Semantic HTML - 2",
            "video": "/htmlcourse/semantic_html_2.m3u8",
            "duration": "2:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your journey into semantic HTML. In part two, explore additional tags that enrich the semantics of your web pages."
          },
          {
            "title": "Web Crawler",
            "video": "/htmlcourse/web_crawler.m3u8",
            "duration": "3:40",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Understand how websites are ranked to top by web crawling. Understand the fundamentals of how search engines navigate and index content across the vast web."
          },
          {
            "title": "Quiz 3",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the purpose of 'Text tags' in HTML?",
                "options": [
                  "To create lists of items",
                  "To structure webpage content",
                  "To manipulate text formatting",
                  "To embed multimedia elements"
                ],
                "questionId": 108
              },
              {
                "question": "Which HTML tags are used for creating ordered and unordered lists?",
                "options": [
                  "<ol> and <ul>",
                  "<ul> and <li>",
                  "<list> and <item>",
                  "<order> and <item>"
                ],
                "questionId": 109
              },
              {
                "question": "What does the 'Anchor tag' (<a>) primarily facilitate in HTML?",
                "options": [
                  "Embedding images",
                  "Creating hyperlinks",
                  "Styling webpage elements",
                  "Inserting audio content"
                ],
                "questionId": 110
              },
              {
                "question": "What does the term 'Web Crawler' refer to in the context of HTML?",
                "options": [
                  "A spider-like creature",
                  "A tool for organizing files",
                  "A script for automating tasks",
                  "A program for navigating and indexing web content"
                ],
                "questionId": 111
              }
            ]
          },
          {
            "title": "More HTML tags",
            "video": "/htmlcourse/more_html_tags.m3u8",
            "duration": "1:39",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Expand your HTML toolkit with additional tags. Discover tags that cater to specific needs, enhancing the richness of your web pages."
          },
          {
            "title": "Project 1 - 1",
            "video": "/htmlcourse/project_1_1.m3u8",
            "duration": "7:38",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Apply your newfound HTML skills in a practical project. In part one, embark on a hands-on project to where we build a small FAQ page by using semantic HTML tags and using font awesome icons."
          },
          {
            "title": "Project 1 - 2",
            "video": "/htmlcourse/project_1_2.m3u8",
            "duration": "8:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your project journey in part two. Apply advanced HTML concepts and solidify your skills through a comprehensive project that showcases your abilities."
          },
          {
            "title": "Project 2",
            "video": "/htmlcourse/project_2.m3u8",
            "duration": "9:05",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Level up with an in-depth project. Demonstrate your proficiency in HTML as you undertake a larger-scale project, integrating various elements learned throughout the course."
          },
          {
            "title": "Web Hosting",
            "video": "/htmlcourse/web_hosting.m3u8",
            "duration": "6:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unravel the mysteries of web hosting. Learn how to take your web projects live by exploring different hosting options and understanding the basics of site configurations."
          },
          {
            "title": "CSS",
            "video": "/htmlcourse/intro_to_css.m3u8",
            "duration": "8:22",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Transition seamlessly from HTML to CSS. In this module, delve into the world of Cascading Style Sheets to add style and visual appeal to your web pages."
          },
          {
            "title": "HTML and Project Quiz",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "In 'Project 1 - 1', what HTML semantic tags were primarily used for creating a FAQ page?",
                "options": [
                  "<div> and <span>",
                  "<details> and <summary>",
                  "<ul> and <li>",
                  "<section> and <article>"
                ],
                "questionId": 112
              },
              {
                "question": "In 'Project 1 - 2', how did you make an image float using HTML?",
                "options": [
                  "Applied 'float' property in CSS",
                  "Used 'position: absolute'",
                  "Set 'display: inline-block'",
                  "Inserted a 'float' tag around the image"
                ],
                "questionId": 113
              },
              {
                "question": "What was the focus of 'Project 2' in your HTML course?",
                "options": [
                  "Creating an FAQ page",
                  "Designing a personal portfolio",
                  "Developing a basic app documentation",
                  "Implementing a chat application"
                ],
                "questionId": 114
              },
              {
                "question": "What is web hosting in the context of web development?",
                "options": [
                  "A service that allows individuals and organizations to make their websites accessible via the World Wide Web",
                  "A method of creating dynamic web pages",
                  "A technique for optimizing website performance",
                  "A module covered in the CSS section"
                ],
                "questionId": 115
              }
            ]
          },
          {
            "title": "Wrap up",
            "video": "/htmlcourse/wrap_up.m3u8",
            "duration": "2:07",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Congratulations on completing the course! In this final module, recap your journey, reflect on your accomplishments, and gain insights into the next steps in your web development adventure."
          }
        ],
        "language": "Tamil",
        "requirements": [
          "Text editor for writing HTML code",
          "Web Browser to view the output of HTML code"
        ],
        "author": "N.U.Thejas hari",
        "authorInsta": "https://www.instagram.com/nuthejashari/",
        "meetingLink": "",
        "whatsappGroup": "",
        "recordedVideo": "",
        "courseId": "101110",
        "locked": false,
        "videos": "35",
        "projects": "2",
        "duration": "4 Hours",
        "paid": "",
        "cancellable": false,
        "createdAt": "2024-01-01T06:43:50.699Z",
        "updatedAt": "2024-01-01T06:43:50.699Z",
        "__v": 0,
        "completed": false,
        "enrolledOn": "2024-01-01T13:38:56.956Z",
        "certificate": "",
        "name": "Tarinisri TG",
        "userId": "649885ac7f3d4624598233ef",
        "progress": 0,
        "allNotes": []
      }
    ],
    "enrolledCoursesId": [
      "101110"
    ]
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649960bf3d3c15454d892328",
    "name": "V D V R",
    "email": "vishnuranjanofficial425@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_7r-ObCVE7",
    "level": "Novice",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84",
      "649d30748595dbbe4fb93695",
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-26T09:56:15.449Z",
    "updatedAt": "2024-01-24T12:26:14.752Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "64996ff289ce1bf055c76ab5",
    "name": "Sabarish babu T G",
    "email": "sabarishbabu026@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_vPzLb_H1z",
    "level": "Intermediate",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-26T11:01:06.912Z",
    "updatedAt": "2023-06-26T11:01:31.891Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649972f253a2485fb7b3bdab",
    "name": "ganesh Gk",
    "email": "gkganesh8838@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_atiuw2o9l",
    "level": "Beginner",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-26T11:13:54.297Z",
    "updatedAt": "2023-06-26T11:14:05.505Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649977ee3666fdfb749e91b3",
    "name": "YP Channel",
    "email": "kjvignesh27@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_xDcAZME29G",
    "level": "Beginner",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-26T11:35:10.067Z",
    "updatedAt": "2023-06-26T11:36:02.227Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "64997f96107bcf6ae8568fd1",
    "name": "Saravana Kumar GM",
    "email": "saravanakumargm00@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_c4Z76pY4T",
    "level": "Advanced",
    "registeredWorkshops": [],
    "createdAt": "2023-06-26T12:07:50.661Z",
    "updatedAt": "2023-06-26T12:07:50.661Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649987ca600bab6eb3e0e87e",
    "name": "Epic Talented",
    "email": "vishal.2004shooter@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_o_MquaRJR",
    "level": "Beginner",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-26T12:42:50.997Z",
    "updatedAt": "2023-06-26T12:43:03.194Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649989d3a994dea619e60946",
    "name": "Yazhin Manickam",
    "email": "yazhinmanickam@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_gquC59DNxi",
    "level": "Novice",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84",
      "649d30748595dbbe4fb93695",
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-26T12:51:31.635Z",
    "updatedAt": "2024-01-24T11:00:30.224Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "64998ce6be0871f9234136f2",
    "name": "Mounika Krishnan",
    "email": "mounikakrishnan72@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari__vMGeZvtJ",
    "level": "Beginner",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-26T13:04:38.026Z",
    "updatedAt": "2023-06-26T13:04:48.163Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "64998e61be0871f9234136fc",
    "name": "POONTHAMILAN M",
    "email": "20103087@hit.edu.in",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_BozlhMhG9",
    "level": "Intermediate",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695",
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-26T13:10:57.866Z",
    "updatedAt": "2023-06-30T09:06:35.627Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "64998f8cbe0871f923413707",
    "name": "Santhosh",
    "email": "cpbala4@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_iIHH5rVRE",
    "level": "Beginner",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-26T13:15:56.557Z",
    "updatedAt": "2023-06-26T13:16:06.578Z",
    "__v": 0
  },
  {
    "_id": "649993f31059743a6be30136",
    "name": "Vishnu Kumar",
    "email": "vishi08vishnu@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_8Q7jVw-oyA",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b4bd00ed9d87145d75ebe2",
      "65b024e37df1619b5bfaef84",
      "649d30748595dbbe4fb93695",
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-26T13:34:43.664Z",
    "updatedAt": "2024-02-01T15:19:50.357Z",
    "__v": 0,
    "enrolledCoursesData": [
      {
        "_id": "65925f26f5f0ffa3b0e38586",
        "title": "Basics of Networking and HTML Beginner to Advanced Course",
        "description": "Learn web development fundamentals, covering frontend, backend, and database structures. Explore client-server dynamics, APIs, various IP types, DNS workings, and HTML essentials with an introduction to CSS for crafting interactive websites",
        "image": "/html.png",
        "content": [
          {
            "title": "Course Introduction",
            "video": "/htmlcourse/intro.m3u8",
            "duration": "0:32",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Welcome to the course! In this introductory module, you'll get a glimpse of what's in store. We'll outline the course structure, set expectations, and highlight the outcomes you can anticipate upon completion."
          },
          {
            "title": "Expectations & Outcomes",
            "video": "/htmlcourse/CourseOutcomes&Scope.m3u8",
            "duration": "1:21",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Understand the goals of this course and what you'll gain by the end. We'll discuss the skills you'll acquire, the knowledge you'll gain, and how it will benefit you in the realm of web development and networking."
          },
          {
            "title": "Web Development & Scopes",
            "video": "/htmlcourse/WebDevelopment&Scopes.m3u8",
            "duration": "8:54",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the vast landscape of web development careers. Learn about the diverse scopes and job opportunities available in the industry, providing you with insights to shape your career path."
          },
          {
            "title": "Frontend Backend Architecture",
            "video": "/htmlcourse/FrontendBackendArchitecture.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Delve into the intricacies of frontend and backend architecture. Understand how these components work together to create seamless and responsive web applications, laying the foundation for your development journey."
          },
          {
            "title": "Database",
            "video": "/htmlcourse/database.m3u8",
            "duration": "1:07",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Uncover the importance of databases in web development. Learn what are the types of database available and the free cloud services providing free database for developers."
          },
          {
            "title": "IP & Types",
            "video": "/htmlcourse/ip internal & external.m3u8",
            "duration": "9:35",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Navigate the world of Internet Protocol (IP) addresses. Gain a comprehensive understanding of IP types and their significance in the networking landscape."
          },
          {
            "title": "IPv4 vs IPv6",
            "video": "/htmlcourse/ipv4 vs ipv6.m3u8",
            "duration": "7:12",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Compare IPv4 and IPv6, the two versions of the Internet Protocol. Understand the differences and advancements that IPv6 brings to address the limitations of IPv4."
          },
          {
            "title": "Static vs Dynamic IP",
            "video": "/htmlcourse/static_vs_dynamic_ip.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the distinction between static and dynamic IP addresses. Learn how each type is assigned and its impact on network configurations."
          },
          {
            "title": "Quiz 1",
            "quiz": true,
            "locked": false,
            "completed": false,
            "questions": [
              {
                "question": "What does \"frontend\" refer to in web development?",
                "options": [
                  "The part of a website users interact with",
                  "The server-side logic of a website",
                  "The database management system",
                  "The network infrastructure"
                ],
                "questionId": 100
              },
              {
                "question": "What is the primary role of \"backend\" in web development?",
                "options": [
                  "Managing the user interface",
                  "Handling server-side logic and databases",
                  "Designing responsive layouts",
                  "Implementing frontend styles"
                ],
                "questionId": 101
              },
              {
                "question": "What does \"IP\" stand for in networking?",
                "options": [
                  "Internet Provider",
                  "Internet Protocol",
                  "Information Processing",
                  "Interface Port"
                ],
                "questionId": 102
              },
              {
                "question": " What is the total range of each octet in an IPv4 address?",
                "options": [
                  "0-100",
                  "0-127",
                  "0-255",
                  "0-64"
                ],
                "questionId": 103
              }
            ]
          },
          {
            "title": "DNS",
            "video": "/htmlcourse/dns.m3u8",
            "duration": "10:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into the Domain Name System (DNS) and unravel the process of translating domain names to IP addresses. Explore the role DNS plays in making web browsing seamless."
          },
          {
            "title": "What is API?",
            "video": "/htmlcourse/api.m3u8",
            "duration": "3:12",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Application Programming Interfaces (APIs). Understand their significance in web development, facilitating communication between different software systems."
          },
          {
            "title": "What is HTML",
            "video": "/htmlcourse/what_is_html.m3u8",
            "duration": "2:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Begin your journey into the core of web development with HTML. Learn the basics of structuring web content and creating the foundation for interactive websites."
          },
          {
            "title": "HTML Page Structure",
            "video": "/htmlcourse/HTML_page_structure.m3u8",
            "duration": "3:33",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the art of organizing your web pages. Explore HTML tags that define the structure of a webpage, providing a solid foundation for your coding endeavors."
          },
          {
            "title": "Quiz 2",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the primary function of DNS in web development?",
                "options": [
                  "To design responsive user interfaces",
                  "To translate domain names to IP addresses",
                  "To manage server-side logic",
                  "To encrypt website data"
                ],
                "questionId": 104
              },
              {
                "question": "What does 'API' stand for in web development?",
                "options": [
                  "Advanced Programming Interface",
                  "Application Programming Interface",
                  "Automated Processing Interface",
                  "Advanced Protocol Integration"
                ],
                "questionId": 105
              },
              {
                "question": "What is the main markup language used for creating web pages??",
                "options": [
                  "XML",
                  "XAMPP",
                  "HTML",
                  "CSS"
                ],
                "questionId": 106
              },
              {
                "question": "What does 'HTML' stand for?",
                "options": [
                  "Hyper Transfer Markup Language",
                  "High-Level Text Management Language",
                  "Hyperlink and Text Management Language",
                  "HyperText Markup Language"
                ],
                "questionId": 107
              }
            ]
          },
          {
            "title": "Text tags",
            "video": "/htmlcourse/text_tags.m3u8",
            "duration": "18:55",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore the world of text manipulation in HTML. Discover tags that enhance the presentation of textual content on your web pages."
          },
          {
            "title": "List tags",
            "video": "/htmlcourse/list_tags.m3u8",
            "duration": "5:29",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore HTML's list tags to efficiently structure information. Learn how to create ordered and unordered lists for better content organization."
          },
          {
            "title": "Anchor tag",
            "video": "/htmlcourse/Anchor_tag.m3u8",
            "duration": "7:53",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unlock the power of hyperlinking with the anchor tag. Understand how to connect different pages and resources within your website."
          },
          {
            "title": "Image tag",
            "video": "/htmlcourse/image_tag.m3u8",
            "duration": "6:48",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Bring visual appeal to your web pages with the image tag. Learn how to integrate images seamlessly into your HTML content."
          },
          {
            "title": "Audio & video tag",
            "video": "/htmlcourse/audio_and_video_tag.m3u8",
            "duration": "7:56",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user engagement with multimedia elements. Explore the audio and video tags to incorporate media seamlessly into your web projects."
          },
          {
            "title": "iframe & embed tag",
            "video": "/htmlcourse/iframe_and_embed_tag.m3u8",
            "duration": "7:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Harness the capabilities of iframe and embed tags. Understand how these tags enable the integration of external content within your web pages."
          },
          {
            "title": "Div tag",
            "video": "/htmlcourse/div_tag.m3u8",
            "duration": "3:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the versatile div tag. Learn how it acts as a container, allowing you to structure and style your HTML content effectively."
          },
          {
            "title": "Input tags",
            "video": "/htmlcourse/input_tag.m3u8",
            "duration": "14:01",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into user interaction with HTML input tags. Explore various input types and understand how they enable user data input."
          },
          {
            "title": "Button tag",
            "video": "/htmlcourse/button_tag.m3u8",
            "duration": "1:43",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user experience with interactive buttons. Learn the ins and outs of the button tag and its various applications."
          },
          {
            "title": "Form part 1",
            "video": "/htmlcourse/form_tag_1.m3u8",
            "duration": "9:09",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embark on the journey of web forms. In part one, explore the essential elements that make up a form, setting the stage for user data collection."
          },
          {
            "title": "Form part 2",
            "video": "/htmlcourse/form_tag_2.m3u8",
            "duration": "8:00",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Delve deeper into the world of web forms. In part two, learn about form validation, submission methods, and enhance the functionality of your forms."
          },
          {
            "title": "Table tag",
            "video": "/htmlcourse/table_tag.m3u8",
            "duration": "4:42",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Uncover the power of HTML tables. Learn how to structure and display data in a tabular format for improved readability."
          },
          {
            "title": "Semantic HTML - 1",
            "video": "/htmlcourse/semantic_html_1.m3u8",
            "duration": "5:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embrace semantic HTML for enhanced accessibility and SEO. In part one, understand how semantic tags contribute to the meaning and structure of your content."
          },
          {
            "title": "Semantic HTML - 2",
            "video": "/htmlcourse/semantic_html_2.m3u8",
            "duration": "2:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your journey into semantic HTML. In part two, explore additional tags that enrich the semantics of your web pages."
          },
          {
            "title": "Web Crawler",
            "video": "/htmlcourse/web_crawler.m3u8",
            "duration": "3:40",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Understand how websites are ranked to top by web crawling. Understand the fundamentals of how search engines navigate and index content across the vast web."
          },
          {
            "title": "Quiz 3",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the purpose of 'Text tags' in HTML?",
                "options": [
                  "To create lists of items",
                  "To structure webpage content",
                  "To manipulate text formatting",
                  "To embed multimedia elements"
                ],
                "questionId": 108
              },
              {
                "question": "Which HTML tags are used for creating ordered and unordered lists?",
                "options": [
                  "<ol> and <ul>",
                  "<ul> and <li>",
                  "<list> and <item>",
                  "<order> and <item>"
                ],
                "questionId": 109
              },
              {
                "question": "What does the 'Anchor tag' (<a>) primarily facilitate in HTML?",
                "options": [
                  "Embedding images",
                  "Creating hyperlinks",
                  "Styling webpage elements",
                  "Inserting audio content"
                ],
                "questionId": 110
              },
              {
                "question": "What does the term 'Web Crawler' refer to in the context of HTML?",
                "options": [
                  "A spider-like creature",
                  "A tool for organizing files",
                  "A script for automating tasks",
                  "A program for navigating and indexing web content"
                ],
                "questionId": 111
              }
            ]
          },
          {
            "title": "More HTML tags",
            "video": "/htmlcourse/more_html_tags.m3u8",
            "duration": "1:39",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Expand your HTML toolkit with additional tags. Discover tags that cater to specific needs, enhancing the richness of your web pages."
          },
          {
            "title": "Project 1 - 1",
            "video": "/htmlcourse/project_1_1.m3u8",
            "duration": "7:38",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Apply your newfound HTML skills in a practical project. In part one, embark on a hands-on project to where we build a small FAQ page by using semantic HTML tags and using font awesome icons."
          },
          {
            "title": "Project 1 - 2",
            "video": "/htmlcourse/project_1_2.m3u8",
            "duration": "8:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your project journey in part two. Apply advanced HTML concepts and solidify your skills through a comprehensive project that showcases your abilities."
          },
          {
            "title": "Project 2",
            "video": "/htmlcourse/project_2.m3u8",
            "duration": "9:05",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Level up with an in-depth project. Demonstrate your proficiency in HTML as you undertake a larger-scale project, integrating various elements learned throughout the course."
          },
          {
            "title": "Web Hosting",
            "video": "/htmlcourse/web_hosting.m3u8",
            "duration": "6:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unravel the mysteries of web hosting. Learn how to take your web projects live by exploring different hosting options and understanding the basics of site configurations."
          },
          {
            "title": "CSS",
            "video": "/htmlcourse/intro_to_css.m3u8",
            "duration": "8:22",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Transition seamlessly from HTML to CSS. In this module, delve into the world of Cascading Style Sheets to add style and visual appeal to your web pages."
          },
          {
            "title": "HTML and Project Quiz",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "In 'Project 1 - 1', what HTML semantic tags were primarily used for creating a FAQ page?",
                "options": [
                  "<div> and <span>",
                  "<details> and <summary>",
                  "<ul> and <li>",
                  "<section> and <article>"
                ],
                "questionId": 112
              },
              {
                "question": "In 'Project 1 - 2', how did you make an image float using HTML?",
                "options": [
                  "Applied 'float' property in CSS",
                  "Used 'position: absolute'",
                  "Set 'display: inline-block'",
                  "Inserted a 'float' tag around the image"
                ],
                "questionId": 113
              },
              {
                "question": "What was the focus of 'Project 2' in your HTML course?",
                "options": [
                  "Creating an FAQ page",
                  "Designing a personal portfolio",
                  "Developing a basic app documentation",
                  "Implementing a chat application"
                ],
                "questionId": 114
              },
              {
                "question": "What is web hosting in the context of web development?",
                "options": [
                  "A service that allows individuals and organizations to make their websites accessible via the World Wide Web",
                  "A method of creating dynamic web pages",
                  "A technique for optimizing website performance",
                  "A module covered in the CSS section"
                ],
                "questionId": 115
              }
            ]
          },
          {
            "title": "Wrap up",
            "video": "/htmlcourse/wrap_up.m3u8",
            "duration": "2:07",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Congratulations on completing the course! In this final module, recap your journey, reflect on your accomplishments, and gain insights into the next steps in your web development adventure."
          }
        ],
        "language": "Tamil",
        "requirements": [
          "Text editor for writing HTML code",
          "Web Browser to view the output of HTML code"
        ],
        "author": "N.U.Thejas hari",
        "authorInsta": "https://www.instagram.com/nuthejashari/",
        "meetingLink": "",
        "whatsappGroup": "",
        "recordedVideo": "",
        "courseId": "101110",
        "locked": false,
        "videos": "35",
        "projects": "2",
        "duration": "4 Hours",
        "paid": "",
        "cancellable": false,
        "createdAt": "2024-01-01T06:43:50.699Z",
        "updatedAt": "2024-01-01T06:43:50.699Z",
        "__v": 0,
        "completed": false,
        "enrolledOn": "2024-02-01T15:19:47.185Z",
        "certificate": "",
        "name": "Vishnu Kumar",
        "userId": "649993f31059743a6be30136",
        "progress": 0,
        "allNotes": []
      }
    ],
    "enrolledCoursesId": [
      "101110"
    ]
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "64999581cacbaf768a8f6e5b",
    "name": "IRFAN UL HAQ .K",
    "email": "irfanulhaq8420@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_wyHlPKsFd",
    "level": "Beginner",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-26T13:41:21.448Z",
    "updatedAt": "2023-06-26T13:41:56.915Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "6499a1337d3523e7b0b27192",
    "name": "manilogu",
    "email": "manilogu005@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari__LyalwOew",
    "level": "Novice",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-26T14:31:15.390Z",
    "updatedAt": "2023-06-26T14:31:36.327Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "6499ac034b50e51ab000a845",
    "name": "Arjun V S",
    "email": "nujra0707@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_UMLUR9Bm6",
    "level": "Novice",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-26T15:17:23.515Z",
    "updatedAt": "2023-06-26T15:18:06.958Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "6499af0c2baf4375b52f64b4",
    "name": "Suvedha Udhayavani Selvakumar",
    "email": "suvedhaudhayavanirs@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_uNPYfizVT",
    "level": "Beginner",
    "registeredWorkshops": [],
    "createdAt": "2023-06-26T15:30:20.723Z",
    "updatedAt": "2023-06-26T15:30:20.723Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "6499af2d2baf4375b52f64b9",
    "name": "FM Radio",
    "email": "www.muthukumar.pl63@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_xw_rP9g2r",
    "level": "Novice",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-26T15:30:53.156Z",
    "updatedAt": "2023-06-26T15:31:51.405Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "6499ba0a05deaa48d2e38755",
    "name": "sudarshan r",
    "email": "rsudarshan259@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_qq7nSnZfb",
    "level": "Advanced",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-26T16:17:14.850Z",
    "updatedAt": "2023-06-26T16:17:37.204Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "6499bb944a494491a873cd3b",
    "name": "VISHNU BABU",
    "email": "kbvishnubabu6@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_ZgceGtXu8",
    "level": "Novice",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-26T16:23:48.636Z",
    "updatedAt": "2023-06-26T16:23:59.499Z",
    "__v": 0
  },
  {
    "_id": "6499be64adc0dc2d9741c4ae",
    "name": "Hemal",
    "email": "hemalhem1212@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_6y2E8CM7N",
    "level": "Novice",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84",
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-26T16:35:48.118Z",
    "updatedAt": "2024-01-25T01:53:40.917Z",
    "__v": 0,
    "enrolledCoursesData": [
      {
        "_id": "65925f26f5f0ffa3b0e38586",
        "title": "Basics of Networking and HTML Beginner to Advanced Course",
        "description": "Learn web development fundamentals, covering frontend, backend, and database structures. Explore client-server dynamics, APIs, various IP types, DNS workings, and HTML essentials with an introduction to CSS for crafting interactive websites",
        "image": "/html.png",
        "content": [
          {
            "title": "Course Introduction",
            "video": "/htmlcourse/intro.m3u8",
            "duration": "0:32",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Welcome to the course! In this introductory module, you'll get a glimpse of what's in store. We'll outline the course structure, set expectations, and highlight the outcomes you can anticipate upon completion."
          },
          {
            "title": "Expectations & Outcomes",
            "video": "/htmlcourse/CourseOutcomes&Scope.m3u8",
            "duration": "1:21",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Understand the goals of this course and what you'll gain by the end. We'll discuss the skills you'll acquire, the knowledge you'll gain, and how it will benefit you in the realm of web development and networking."
          },
          {
            "title": "Web Development & Scopes",
            "video": "/htmlcourse/WebDevelopment&Scopes.m3u8",
            "duration": "8:54",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the vast landscape of web development careers. Learn about the diverse scopes and job opportunities available in the industry, providing you with insights to shape your career path."
          },
          {
            "title": "Frontend Backend Architecture",
            "video": "/htmlcourse/FrontendBackendArchitecture.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Delve into the intricacies of frontend and backend architecture. Understand how these components work together to create seamless and responsive web applications, laying the foundation for your development journey."
          },
          {
            "title": "Database",
            "video": "/htmlcourse/database.m3u8",
            "duration": "1:07",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Uncover the importance of databases in web development. Learn what are the types of database available and the free cloud services providing free database for developers."
          },
          {
            "title": "IP & Types",
            "video": "/htmlcourse/ip internal & external.m3u8",
            "duration": "9:35",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Navigate the world of Internet Protocol (IP) addresses. Gain a comprehensive understanding of IP types and their significance in the networking landscape."
          },
          {
            "title": "IPv4 vs IPv6",
            "video": "/htmlcourse/ipv4 vs ipv6.m3u8",
            "duration": "7:12",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Compare IPv4 and IPv6, the two versions of the Internet Protocol. Understand the differences and advancements that IPv6 brings to address the limitations of IPv4."
          },
          {
            "title": "Static vs Dynamic IP",
            "video": "/htmlcourse/static_vs_dynamic_ip.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the distinction between static and dynamic IP addresses. Learn how each type is assigned and its impact on network configurations."
          },
          {
            "title": "Quiz 1",
            "quiz": true,
            "locked": false,
            "completed": false,
            "questions": [
              {
                "question": "What does \"frontend\" refer to in web development?",
                "options": [
                  "The part of a website users interact with",
                  "The server-side logic of a website",
                  "The database management system",
                  "The network infrastructure"
                ],
                "questionId": 100
              },
              {
                "question": "What is the primary role of \"backend\" in web development?",
                "options": [
                  "Managing the user interface",
                  "Handling server-side logic and databases",
                  "Designing responsive layouts",
                  "Implementing frontend styles"
                ],
                "questionId": 101
              },
              {
                "question": "What does \"IP\" stand for in networking?",
                "options": [
                  "Internet Provider",
                  "Internet Protocol",
                  "Information Processing",
                  "Interface Port"
                ],
                "questionId": 102
              },
              {
                "question": " What is the total range of each octet in an IPv4 address?",
                "options": [
                  "0-100",
                  "0-127",
                  "0-255",
                  "0-64"
                ],
                "questionId": 103
              }
            ]
          },
          {
            "title": "DNS",
            "video": "/htmlcourse/dns.m3u8",
            "duration": "10:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into the Domain Name System (DNS) and unravel the process of translating domain names to IP addresses. Explore the role DNS plays in making web browsing seamless."
          },
          {
            "title": "What is API?",
            "video": "/htmlcourse/api.m3u8",
            "duration": "3:12",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Application Programming Interfaces (APIs). Understand their significance in web development, facilitating communication between different software systems."
          },
          {
            "title": "What is HTML",
            "video": "/htmlcourse/what_is_html.m3u8",
            "duration": "2:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Begin your journey into the core of web development with HTML. Learn the basics of structuring web content and creating the foundation for interactive websites."
          },
          {
            "title": "HTML Page Structure",
            "video": "/htmlcourse/HTML_page_structure.m3u8",
            "duration": "3:33",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the art of organizing your web pages. Explore HTML tags that define the structure of a webpage, providing a solid foundation for your coding endeavors."
          },
          {
            "title": "Quiz 2",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the primary function of DNS in web development?",
                "options": [
                  "To design responsive user interfaces",
                  "To translate domain names to IP addresses",
                  "To manage server-side logic",
                  "To encrypt website data"
                ],
                "questionId": 104
              },
              {
                "question": "What does 'API' stand for in web development?",
                "options": [
                  "Advanced Programming Interface",
                  "Application Programming Interface",
                  "Automated Processing Interface",
                  "Advanced Protocol Integration"
                ],
                "questionId": 105
              },
              {
                "question": "What is the main markup language used for creating web pages??",
                "options": [
                  "XML",
                  "XAMPP",
                  "HTML",
                  "CSS"
                ],
                "questionId": 106
              },
              {
                "question": "What does 'HTML' stand for?",
                "options": [
                  "Hyper Transfer Markup Language",
                  "High-Level Text Management Language",
                  "Hyperlink and Text Management Language",
                  "HyperText Markup Language"
                ],
                "questionId": 107
              }
            ]
          },
          {
            "title": "Text tags",
            "video": "/htmlcourse/text_tags.m3u8",
            "duration": "18:55",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore the world of text manipulation in HTML. Discover tags that enhance the presentation of textual content on your web pages."
          },
          {
            "title": "List tags",
            "video": "/htmlcourse/list_tags.m3u8",
            "duration": "5:29",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore HTML's list tags to efficiently structure information. Learn how to create ordered and unordered lists for better content organization."
          },
          {
            "title": "Anchor tag",
            "video": "/htmlcourse/Anchor_tag.m3u8",
            "duration": "7:53",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unlock the power of hyperlinking with the anchor tag. Understand how to connect different pages and resources within your website."
          },
          {
            "title": "Image tag",
            "video": "/htmlcourse/image_tag.m3u8",
            "duration": "6:48",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Bring visual appeal to your web pages with the image tag. Learn how to integrate images seamlessly into your HTML content."
          },
          {
            "title": "Audio & video tag",
            "video": "/htmlcourse/audio_and_video_tag.m3u8",
            "duration": "7:56",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user engagement with multimedia elements. Explore the audio and video tags to incorporate media seamlessly into your web projects."
          },
          {
            "title": "iframe & embed tag",
            "video": "/htmlcourse/iframe_and_embed_tag.m3u8",
            "duration": "7:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Harness the capabilities of iframe and embed tags. Understand how these tags enable the integration of external content within your web pages."
          },
          {
            "title": "Div tag",
            "video": "/htmlcourse/div_tag.m3u8",
            "duration": "3:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the versatile div tag. Learn how it acts as a container, allowing you to structure and style your HTML content effectively."
          },
          {
            "title": "Input tags",
            "video": "/htmlcourse/input_tag.m3u8",
            "duration": "14:01",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into user interaction with HTML input tags. Explore various input types and understand how they enable user data input."
          },
          {
            "title": "Button tag",
            "video": "/htmlcourse/button_tag.m3u8",
            "duration": "1:43",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user experience with interactive buttons. Learn the ins and outs of the button tag and its various applications."
          },
          {
            "title": "Form part 1",
            "video": "/htmlcourse/form_tag_1.m3u8",
            "duration": "9:09",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embark on the journey of web forms. In part one, explore the essential elements that make up a form, setting the stage for user data collection."
          },
          {
            "title": "Form part 2",
            "video": "/htmlcourse/form_tag_2.m3u8",
            "duration": "8:00",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Delve deeper into the world of web forms. In part two, learn about form validation, submission methods, and enhance the functionality of your forms."
          },
          {
            "title": "Table tag",
            "video": "/htmlcourse/table_tag.m3u8",
            "duration": "4:42",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Uncover the power of HTML tables. Learn how to structure and display data in a tabular format for improved readability."
          },
          {
            "title": "Semantic HTML - 1",
            "video": "/htmlcourse/semantic_html_1.m3u8",
            "duration": "5:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embrace semantic HTML for enhanced accessibility and SEO. In part one, understand how semantic tags contribute to the meaning and structure of your content."
          },
          {
            "title": "Semantic HTML - 2",
            "video": "/htmlcourse/semantic_html_2.m3u8",
            "duration": "2:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your journey into semantic HTML. In part two, explore additional tags that enrich the semantics of your web pages."
          },
          {
            "title": "Web Crawler",
            "video": "/htmlcourse/web_crawler.m3u8",
            "duration": "3:40",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Understand how websites are ranked to top by web crawling. Understand the fundamentals of how search engines navigate and index content across the vast web."
          },
          {
            "title": "Quiz 3",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the purpose of 'Text tags' in HTML?",
                "options": [
                  "To create lists of items",
                  "To structure webpage content",
                  "To manipulate text formatting",
                  "To embed multimedia elements"
                ],
                "questionId": 108
              },
              {
                "question": "Which HTML tags are used for creating ordered and unordered lists?",
                "options": [
                  "<ol> and <ul>",
                  "<ul> and <li>",
                  "<list> and <item>",
                  "<order> and <item>"
                ],
                "questionId": 109
              },
              {
                "question": "What does the 'Anchor tag' (<a>) primarily facilitate in HTML?",
                "options": [
                  "Embedding images",
                  "Creating hyperlinks",
                  "Styling webpage elements",
                  "Inserting audio content"
                ],
                "questionId": 110
              },
              {
                "question": "What does the term 'Web Crawler' refer to in the context of HTML?",
                "options": [
                  "A spider-like creature",
                  "A tool for organizing files",
                  "A script for automating tasks",
                  "A program for navigating and indexing web content"
                ],
                "questionId": 111
              }
            ]
          },
          {
            "title": "More HTML tags",
            "video": "/htmlcourse/more_html_tags.m3u8",
            "duration": "1:39",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Expand your HTML toolkit with additional tags. Discover tags that cater to specific needs, enhancing the richness of your web pages."
          },
          {
            "title": "Project 1 - 1",
            "video": "/htmlcourse/project_1_1.m3u8",
            "duration": "7:38",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Apply your newfound HTML skills in a practical project. In part one, embark on a hands-on project to where we build a small FAQ page by using semantic HTML tags and using font awesome icons."
          },
          {
            "title": "Project 1 - 2",
            "video": "/htmlcourse/project_1_2.m3u8",
            "duration": "8:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your project journey in part two. Apply advanced HTML concepts and solidify your skills through a comprehensive project that showcases your abilities."
          },
          {
            "title": "Project 2",
            "video": "/htmlcourse/project_2.m3u8",
            "duration": "9:05",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Level up with an in-depth project. Demonstrate your proficiency in HTML as you undertake a larger-scale project, integrating various elements learned throughout the course."
          },
          {
            "title": "Web Hosting",
            "video": "/htmlcourse/web_hosting.m3u8",
            "duration": "6:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unravel the mysteries of web hosting. Learn how to take your web projects live by exploring different hosting options and understanding the basics of site configurations."
          },
          {
            "title": "CSS",
            "video": "/htmlcourse/intro_to_css.m3u8",
            "duration": "8:22",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Transition seamlessly from HTML to CSS. In this module, delve into the world of Cascading Style Sheets to add style and visual appeal to your web pages."
          },
          {
            "title": "HTML and Project Quiz",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "In 'Project 1 - 1', what HTML semantic tags were primarily used for creating a FAQ page?",
                "options": [
                  "<div> and <span>",
                  "<details> and <summary>",
                  "<ul> and <li>",
                  "<section> and <article>"
                ],
                "questionId": 112
              },
              {
                "question": "In 'Project 1 - 2', how did you make an image float using HTML?",
                "options": [
                  "Applied 'float' property in CSS",
                  "Used 'position: absolute'",
                  "Set 'display: inline-block'",
                  "Inserted a 'float' tag around the image"
                ],
                "questionId": 113
              },
              {
                "question": "What was the focus of 'Project 2' in your HTML course?",
                "options": [
                  "Creating an FAQ page",
                  "Designing a personal portfolio",
                  "Developing a basic app documentation",
                  "Implementing a chat application"
                ],
                "questionId": 114
              },
              {
                "question": "What is web hosting in the context of web development?",
                "options": [
                  "A service that allows individuals and organizations to make their websites accessible via the World Wide Web",
                  "A method of creating dynamic web pages",
                  "A technique for optimizing website performance",
                  "A module covered in the CSS section"
                ],
                "questionId": 115
              }
            ]
          },
          {
            "title": "Wrap up",
            "video": "/htmlcourse/wrap_up.m3u8",
            "duration": "2:07",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Congratulations on completing the course! In this final module, recap your journey, reflect on your accomplishments, and gain insights into the next steps in your web development adventure."
          }
        ],
        "language": "Tamil",
        "requirements": [
          "Text editor for writing HTML code",
          "Web Browser to view the output of HTML code"
        ],
        "author": "N.U.Thejas hari",
        "authorInsta": "https://www.instagram.com/nuthejashari/",
        "meetingLink": "",
        "whatsappGroup": "",
        "recordedVideo": "",
        "courseId": "101110",
        "locked": false,
        "videos": "35",
        "projects": "2",
        "duration": "4 Hours",
        "paid": "",
        "cancellable": false,
        "createdAt": "2024-01-01T06:43:50.699Z",
        "updatedAt": "2024-01-01T06:43:50.699Z",
        "__v": 0,
        "completed": false,
        "enrolledOn": "2024-01-25T01:53:39.271Z",
        "certificate": "",
        "name": "Hemal",
        "userId": "6499be64adc0dc2d9741c4ae",
        "progress": 0,
        "allNotes": []
      }
    ],
    "enrolledCoursesId": [
      "101110"
    ]
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "6499be8dadc0dc2d9741c4bd",
    "name": "Raja Kumar",
    "email": "natureraja123@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_DASMWxPXl",
    "level": "Novice",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-26T16:36:29.170Z",
    "updatedAt": "2023-06-26T16:37:19.782Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "6499beacadc0dc2d9741c4c4",
    "name": "Bharath",
    "email": "bharathgurusamy007@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_N1OSWKcjP",
    "level": "Beginner",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695",
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-26T16:37:00.509Z",
    "updatedAt": "2023-06-30T08:26:53.425Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "6499bf14fc91f38e7be9d49d",
    "name": "Chandralekha SB",
    "email": "sbchandralekha17@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_XrlTpbLlH",
    "level": "Beginner",
    "registeredWorkshops": [],
    "createdAt": "2023-06-26T16:38:44.717Z",
    "updatedAt": "2023-06-26T16:38:44.717Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "6499bf19fb0c8b1a5e7d03f3",
    "name": "Pradeep M.R",
    "email": "pradeepravi2004@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_PgBx1zjju",
    "level": "Beginner",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-26T16:38:49.637Z",
    "updatedAt": "2023-06-26T16:39:49.295Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "6499bf49fc91f38e7be9d4aa",
    "name": "Pavithra E",
    "email": "pavieswar03@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_xWtllPg8z",
    "level": "Beginner",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-26T16:39:37.671Z",
    "updatedAt": "2023-06-26T16:40:02.437Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "6499bf54fc91f38e7be9d4b2",
    "name": "Roshini Suresh",
    "email": "roshinisuresh04@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_b1OdYPWfQ",
    "level": "Beginner",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-26T16:39:48.539Z",
    "updatedAt": "2023-06-26T16:40:11.008Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "6499bf66fb0c8b1a5e7d0407",
    "name": "Anu Tejaswi",
    "email": "cravianu@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_pdoQFJvDp",
    "level": "Beginner",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-26T16:40:06.939Z",
    "updatedAt": "2023-06-26T16:40:22.333Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "6499c0534242189562f81601",
    "name": "PUNITHA P",
    "email": "punithaammu2816@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_uPi74c9z7",
    "level": "Beginner",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695",
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-26T16:44:03.405Z",
    "updatedAt": "2023-06-30T05:14:56.475Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "6499c06d4242189562f81605",
    "name": "Deepalakshmi S ECE-19-020",
    "email": "deepalashmis@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_Au3Lefewb",
    "level": "Novice",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-26T16:44:29.165Z",
    "updatedAt": "2023-06-26T16:44:44.630Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "6499c1314242189562f8161c",
    "name": "MANOJKUMAR .S",
    "email": "manojkumar290306@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_eMO7tjfV9",
    "level": "Novice",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-26T16:47:45.984Z",
    "updatedAt": "2023-06-26T16:48:09.865Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "6499c1434242189562f81621",
    "name": "Kirthivasa Jai",
    "email": "kvjai2000@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari__c3Rs0HvM",
    "level": "Novice",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-26T16:48:03.334Z",
    "updatedAt": "2023-06-26T16:48:45.521Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "6499c1634242189562f81628",
    "name": "praveen Kumar",
    "email": "pk572402@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_u2Q0DcUa8",
    "level": "Beginner",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-26T16:48:35.551Z",
    "updatedAt": "2023-06-26T16:48:44.849Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "6499c1f3fb0c8b1a5e7d0424",
    "name": "19EPCI029 Sri Sudharsan",
    "email": "19epci029@skcet.ac.in",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_PQAX1NGzY",
    "level": "Novice",
    "registeredWorkshops": [],
    "createdAt": "2023-06-26T16:50:59.759Z",
    "updatedAt": "2023-06-26T16:50:59.759Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "6499c49c4242189562f81642",
    "name": "DINAKAR SOWMIYAN R",
    "email": "dinakar0704@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_axfQR26-N",
    "level": "Beginner",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695",
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-26T17:02:20.082Z",
    "updatedAt": "2023-06-29T08:53:16.080Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "6499c6510a4ae6c78948c323",
    "name": "Yash Srivatsan",
    "email": "srivatsanyash@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_OTlRRnaHp",
    "level": "Beginner",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695"
    ],
    "createdAt": "2023-06-26T17:09:37.887Z",
    "updatedAt": "2023-07-01T03:28:22.484Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "6499c6bd0a4ae6c78948c32d",
    "name": "SATHISH KUMAR",
    "email": "sathishkumar1550908@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_f7RAgJ5j9",
    "level": "Novice",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695",
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-26T17:11:25.885Z",
    "updatedAt": "2023-07-03T20:15:27.231Z",
    "__v": 0,
    "certificates": {
      "649d30748595dbbe4fb93695": "https://ik.imagekit.io/d3kzbpbila/2_9OXesqbODJ.png?updatedAt=1688414228653"
    }
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "6499c75ffc91f38e7be9d4e0",
    "name": "Lokesh S",
    "email": "slokeshmani2001@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_YkWXq-yyS",
    "level": "Novice",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-26T17:14:07.376Z",
    "updatedAt": "2023-06-26T17:15:20.159Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "6499c83e0a4ae6c78948c344",
    "name": "bala Krishnan",
    "email": "tsbalakrishnan2000@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_CsKVhWINL",
    "level": "Beginner",
    "registeredWorkshops": [],
    "createdAt": "2023-06-26T17:17:50.719Z",
    "updatedAt": "2023-06-26T17:17:50.719Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "6499c9f3fc91f38e7be9d4f4",
    "name": "sarathy",
    "email": "sarathyvijay357@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_LC5NjlX-s",
    "level": "Beginner",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-26T17:25:07.201Z",
    "updatedAt": "2023-06-26T17:25:20.048Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "6499ce566624d2ee7ee904b5",
    "name": "Solo Boy1",
    "email": "soloboy585@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_MAnzslKNE",
    "level": "Beginner",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-26T17:43:50.392Z",
    "updatedAt": "2023-06-26T17:43:57.969Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "6499d238fc91f38e7be9d51d",
    "name": "Vignesh Kumar K",
    "email": "vigneshkumar.k.s.s@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_w5JYIkhbb",
    "level": "Beginner",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695",
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-26T18:00:24.550Z",
    "updatedAt": "2023-06-29T15:39:49.787Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "6499d4e91ef9a74b9e8d19a4",
    "name": "Madderi Vasu",
    "email": "madderivasu27@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_DNEsmsox3",
    "level": "Novice",
    "registeredWorkshops": [
      "65c4ec315a6594a5ea09b47f",
      "65b4bd00ed9d87145d75ebe2",
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-26T18:11:53.911Z",
    "updatedAt": "2024-02-08T16:08:28.837Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "6499d7776a9d71579a973bdb",
    "name": "Arunachalam S",
    "email": "arunarunachalam444@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_twoOHOY-z",
    "level": "Beginner",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-26T18:22:47.463Z",
    "updatedAt": "2023-06-26T18:23:03.919Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "6499d8dd6a9d71579a973be6",
    "name": "Lokesh S",
    "email": "lokilokesh7706@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_DC7CDqK09",
    "level": "Beginner",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-26T18:28:45.643Z",
    "updatedAt": "2023-06-26T18:28:57.010Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "6499df46a3d9db445661d8e1",
    "name": "MOHANA KRISHNAN D M",
    "email": "d.m.mohanakrishnan2001@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_ECYDz8wYk",
    "level": "Novice",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695",
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-26T18:56:06.657Z",
    "updatedAt": "2023-07-03T20:14:52.685Z",
    "__v": 0,
    "certificates": {
      "649d30748595dbbe4fb93695": "https://ik.imagekit.io/d3kzbpbila/8_SzMHYR-vQ.png?updatedAt=1688414228667"
    }
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "6499e198ccc38d713adb5882",
    "name": "Rishi Kumar",
    "email": "rishikumarmadanagopal@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_SNqGL7j0i",
    "level": "Beginner",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-26T19:06:00.247Z",
    "updatedAt": "2023-06-26T19:06:08.001Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "6499f999403426df310e5c16",
    "name": "Sheik Abdulla",
    "email": "sheikabdullasa7@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_txVUW1FGy",
    "level": "Novice",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-26T20:48:25.909Z",
    "updatedAt": "2023-06-26T20:50:09.596Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649a2f9d16995a474ac3afd1",
    "name": "sakthi sugesh",
    "email": "sugesh76652@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_5GgcLTDz4",
    "level": "Beginner",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T00:38:53.922Z",
    "updatedAt": "2023-06-27T00:39:04.115Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649a316216995a474ac3afda",
    "name": "Vasanth Kumar.R",
    "email": "vasa39988@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_XlNd7sQR7",
    "level": "Intermediate",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T00:46:26.516Z",
    "updatedAt": "2023-06-27T00:46:44.696Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649a3a1108c925458755851d",
    "name": "MOHAMED ARIF",
    "email": "arifmohamednov11@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_PWdtVMOCp",
    "level": "Novice",
    "registeredWorkshops": [],
    "createdAt": "2023-06-27T01:23:29.337Z",
    "updatedAt": "2023-06-27T01:23:29.337Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649a3a84bc828e452246060c",
    "name": "Vignesh Muruganantham",
    "email": "vigneshmuruganantham639@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_xjetXDQJC",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84",
      "649d30748595dbbe4fb93695",
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T01:25:24.487Z",
    "updatedAt": "2024-01-24T14:10:40.937Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649a3b5708c9254587558532",
    "name": "As Cooking",
    "email": "ascookingofficl@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_CajXrvKdf",
    "level": "Novice",
    "registeredWorkshops": [],
    "createdAt": "2023-06-27T01:28:55.191Z",
    "updatedAt": "2023-06-27T01:28:55.191Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649a3b6d51cd1f0a3fab99a8",
    "name": "Kavya",
    "email": "kavya101202kk@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_JdE8NVh_cH",
    "level": "Novice",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695"
    ],
    "createdAt": "2023-06-27T01:29:17.067Z",
    "updatedAt": "2023-06-29T13:26:44.266Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649a3d3951cd1f0a3fab99b6",
    "name": "Deleepkumar",
    "email": "deleepkumardeleepkumar109@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_0qEiJCX-E",
    "level": "Novice",
    "registeredWorkshops": [],
    "createdAt": "2023-06-27T01:36:57.570Z",
    "updatedAt": "2023-06-27T01:36:57.570Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649a3f6751cd1f0a3fab99bd",
    "name": "Free 123",
    "email": "free4495663@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_huGEwW76C",
    "level": "Beginner",
    "registeredWorkshops": [],
    "createdAt": "2023-06-27T01:46:15.568Z",
    "updatedAt": "2023-06-27T01:46:15.568Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649a411d6bcefe49a5de73fe",
    "name": "Durga",
    "email": "durgaa.1624@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_xZFe7pbL9",
    "level": "Beginner",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T01:53:33.834Z",
    "updatedAt": "2023-06-27T01:54:06.100Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649a42f66bcefe49a5de7407",
    "name": "Way of Learning",
    "email": "wayoflearning16@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_54ZNctiI3",
    "level": "Beginner",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T02:01:26.291Z",
    "updatedAt": "2023-06-27T02:01:39.042Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649a43916bcefe49a5de7415",
    "name": "Royal Justin",
    "email": "royaljustin205@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_FniThRtQZ",
    "level": "Novice",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T02:04:01.739Z",
    "updatedAt": "2023-06-27T02:04:13.905Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649a43ce677cd9f77a4e959a",
    "name": "Ajay Kumar",
    "email": "ak3238539@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_FAGOeflXQ",
    "level": "Beginner",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695",
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T02:05:02.467Z",
    "updatedAt": "2023-06-30T08:20:25.636Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649a44ee39753fe523f37be8",
    "name": "Naresh Naresh",
    "email": "sugunavalliramesh@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_8XsufaJU-",
    "level": "Beginner",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695",
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T02:09:50.829Z",
    "updatedAt": "2023-06-29T13:34:11.731Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649a4d5b42c50177ed9022ca",
    "name": "MANOJ V",
    "email": "manojvadivel20@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_xNc5RlECJ",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b4bd00ed9d87145d75ebe2",
      "65b024e37df1619b5bfaef84",
      "649d30748595dbbe4fb93695",
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T02:45:47.014Z",
    "updatedAt": "2024-01-31T17:42:57.413Z",
    "__v": 0,
    "certificates": {
      "649d30748595dbbe4fb93695": "https://ik.imagekit.io/d3kzbpbila/3_4PSVJ4BwWj.png?updatedAt=1688414228658"
    }
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649a4ea242c50177ed9022d6",
    "name": "Keerthana R",
    "email": "kikikeerthi07@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_q-MDdAf1K",
    "level": "Beginner",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T02:51:14.251Z",
    "updatedAt": "2023-06-27T02:51:21.800Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649a58780ad72947f52e902d",
    "name": "rakesh sakthivel",
    "email": "rakesh1998sakthivel@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_L9gKpgL9g",
    "level": "Novice",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T03:33:12.729Z",
    "updatedAt": "2023-06-27T03:33:29.069Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649a58f60ad72947f52e9037",
    "name": "Navas",
    "email": "navas861p@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_MZ0UBrHci",
    "level": "Novice",
    "registeredWorkshops": [],
    "createdAt": "2023-06-27T03:35:18.931Z",
    "updatedAt": "2023-06-27T03:35:18.931Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649a5dcb2a9234b026d25788",
    "name": "Hemanth Sundhar",
    "email": "hemanthsundhar08@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_6GmR4pnah",
    "level": "Beginner",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695",
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T03:55:55.583Z",
    "updatedAt": "2023-06-29T16:55:25.319Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649a604eb2d4b2650fde6709",
    "name": "M.S Dominic raja",
    "email": "dominicraja709@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_HB6eScFhB",
    "level": "Beginner",
    "registeredWorkshops": [],
    "createdAt": "2023-06-27T04:06:38.921Z",
    "updatedAt": "2023-06-27T04:06:38.921Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649a627950b220738d056136",
    "name": "Rishi Kumar",
    "email": "rrishikumar559@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_ajpVY5JGf",
    "level": "Beginner",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T04:15:53.209Z",
    "updatedAt": "2023-06-27T04:16:00.921Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649a628a50b220738d05613c",
    "name": "ASHOK ARUN",
    "email": "ashokarun4417@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_BV3e72Sgx",
    "level": "Beginner",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T04:16:10.719Z",
    "updatedAt": "2023-06-27T04:16:44.717Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649a63e9c6d159318f79d47e",
    "name": "Kishore A",
    "email": "kishore4242421@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_-EpTOSkGt",
    "level": "Beginner",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T04:22:01.836Z",
    "updatedAt": "2023-06-27T04:22:19.997Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649a671e51b8c7e1a37fbc7c",
    "name": "Deepa Kumar",
    "email": "deepalakshmipriya20@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_1JQVHE8jA",
    "level": "Novice",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T04:35:42.073Z",
    "updatedAt": "2023-06-27T04:37:21.255Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649a672051b8c7e1a37fbc80",
    "name": "Harshith B",
    "email": "harshithbubalan2@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_lJ2-NpAhN",
    "level": "Novice",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T04:35:44.471Z",
    "updatedAt": "2023-06-27T04:35:52.122Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649a680751b8c7e1a37fbc90",
    "name": "NINJA Gaming",
    "email": "gniranjanninja1465@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_1XCHNENEj",
    "level": "Beginner",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T04:39:35.706Z",
    "updatedAt": "2023-06-27T04:39:53.080Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649a68e39d30453dd9ff0cdd",
    "name": "Gopi Kiran",
    "email": "adgopikiran@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_1wNKj8SPl",
    "level": "Novice",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T04:43:15.390Z",
    "updatedAt": "2023-06-27T04:44:04.624Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649a6b4d51b8c7e1a37fbc9e",
    "name": "G Prem",
    "email": "premmesse1910@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_5YmmvEThe",
    "level": "Novice",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T04:53:33.306Z",
    "updatedAt": "2023-06-27T04:53:44.043Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649a73141614a92e72443f87",
    "name": "Pradeep Dhinakaran",
    "email": "pradeepjayanthi177@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_YyjiDZZKx",
    "level": "Novice",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T05:26:44.373Z",
    "updatedAt": "2023-06-27T05:28:32.399Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649a73491614a92e72443f8b",
    "name": "Indu Prakash",
    "email": "induprakash2192005@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_812oZsG1K",
    "level": "Novice",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695",
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T05:27:37.901Z",
    "updatedAt": "2023-06-29T13:33:25.647Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649a7c8d723db2bfcf6db9b6",
    "name": "crazy gamer",
    "email": "aktharmd221@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_aY3MK9FLsy",
    "level": "Beginner",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T06:07:09.308Z",
    "updatedAt": "2023-06-27T06:07:20.814Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649a89b48688b7d09be435af",
    "name": "Future Pianist MG",
    "email": "rukeshrukesh138@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_IZLJSXu1l",
    "level": "Beginner",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T07:03:16.573Z",
    "updatedAt": "2023-06-27T07:03:30.292Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649a8c33debe184ee230eda8",
    "name": "KALAIMATHI. M",
    "email": "kalaimathim1234@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_NeuKQvHEKL",
    "level": "Novice",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T07:13:55.110Z",
    "updatedAt": "2023-06-27T07:15:15.513Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649a98a8623663713e26307b",
    "name": "Allan dàniel",
    "email": "allanhk2005@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_veyaLl3kj",
    "level": "Novice",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T08:07:04.915Z",
    "updatedAt": "2023-06-27T08:07:31.443Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649a9c16c311b2c06306e8fb",
    "name": "Gokul D (Alonelover)",
    "email": "gokuld9597@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_zxbmB_ONl",
    "level": "Novice",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T08:21:42.516Z",
    "updatedAt": "2023-06-27T08:21:59.166Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649aae2de63e12a6162c4840",
    "name": "Sma Diya",
    "email": "smadiya0110@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_pYVXE4C4a",
    "level": "Beginner",
    "registeredWorkshops": [],
    "createdAt": "2023-06-27T09:38:53.533Z",
    "updatedAt": "2023-06-27T09:38:53.533Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649abf57d92ab5ecff06a802",
    "name": "RUBASHRI JAYAKUMAR",
    "email": "rubashrijayakumar@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_SwPcTR843",
    "level": "Novice",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695",
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T10:52:07.628Z",
    "updatedAt": "2023-06-29T14:02:10.930Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649ac0071339c56e90231dad",
    "name": "Rajesh Arya AP",
    "email": "rajesharya414@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_8jbaNOoRB",
    "level": "Beginner",
    "registeredWorkshops": [],
    "createdAt": "2023-06-27T10:55:03.577Z",
    "updatedAt": "2023-06-27T10:55:03.577Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649acd1864b2f9e77ae8ae8a",
    "name": "PradeepKumar Rajendran",
    "email": "pradeeprajendran32@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari__ekSsPyst",
    "level": "Novice",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T11:50:48.481Z",
    "updatedAt": "2023-06-27T11:51:00.539Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649acdcb445208ef00fac5f1",
    "name": "Divya .E",
    "email": "divya32818@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_wsg-KS9BW",
    "level": "Beginner",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T11:53:47.852Z",
    "updatedAt": "2023-06-27T11:55:09.027Z",
    "__v": 0
  },
  {
    "_id": "649acdfc445208ef00fac5f7",
    "name": "Pugazhenthi krishnamoorthy",
    "email": "pugazhenthiwebdesigner@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_4yJE6pUpN",
    "level": "Beginner",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695",
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T11:54:36.865Z",
    "updatedAt": "2024-01-01T13:58:00.079Z",
    "__v": 0,
    "certificates": {
      "649d30748595dbbe4fb93695": "https://ik.imagekit.io/d3kzbpbila/5_WXhhACEk1.png?updatedAt=1688414228647"
    },
    "enrolledCoursesData": [
      {
        "_id": "65925f26f5f0ffa3b0e38586",
        "title": "Basics of Networking and HTML Beginner to Advanced Course",
        "description": "Learn web development fundamentals, covering frontend, backend, and database structures. Explore client-server dynamics, APIs, various IP types, DNS workings, and HTML essentials with an introduction to CSS for crafting interactive websites",
        "image": "/html.png",
        "content": [
          {
            "title": "Course Introduction",
            "video": "/htmlcourse/intro.m3u8",
            "duration": "0:32",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Welcome to the course! In this introductory module, you'll get a glimpse of what's in store. We'll outline the course structure, set expectations, and highlight the outcomes you can anticipate upon completion."
          },
          {
            "title": "Expectations & Outcomes",
            "video": "/htmlcourse/CourseOutcomes&Scope.m3u8",
            "duration": "1:21",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Understand the goals of this course and what you'll gain by the end. We'll discuss the skills you'll acquire, the knowledge you'll gain, and how it will benefit you in the realm of web development and networking."
          },
          {
            "title": "Web Development & Scopes",
            "video": "/htmlcourse/WebDevelopment&Scopes.m3u8",
            "duration": "8:54",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the vast landscape of web development careers. Learn about the diverse scopes and job opportunities available in the industry, providing you with insights to shape your career path."
          },
          {
            "title": "Frontend Backend Architecture",
            "video": "/htmlcourse/FrontendBackendArchitecture.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Delve into the intricacies of frontend and backend architecture. Understand how these components work together to create seamless and responsive web applications, laying the foundation for your development journey."
          },
          {
            "title": "Database",
            "video": "/htmlcourse/database.m3u8",
            "duration": "1:07",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Uncover the importance of databases in web development. Learn what are the types of database available and the free cloud services providing free database for developers."
          },
          {
            "title": "IP & Types",
            "video": "/htmlcourse/ip internal & external.m3u8",
            "duration": "9:35",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Navigate the world of Internet Protocol (IP) addresses. Gain a comprehensive understanding of IP types and their significance in the networking landscape."
          },
          {
            "title": "IPv4 vs IPv6",
            "video": "/htmlcourse/ipv4 vs ipv6.m3u8",
            "duration": "7:12",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Compare IPv4 and IPv6, the two versions of the Internet Protocol. Understand the differences and advancements that IPv6 brings to address the limitations of IPv4."
          },
          {
            "title": "Static vs Dynamic IP",
            "video": "/htmlcourse/static_vs_dynamic_ip.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the distinction between static and dynamic IP addresses. Learn how each type is assigned and its impact on network configurations."
          },
          {
            "title": "Quiz 1",
            "quiz": true,
            "locked": false,
            "completed": false,
            "questions": [
              {
                "question": "What does \"frontend\" refer to in web development?",
                "options": [
                  "The part of a website users interact with",
                  "The server-side logic of a website",
                  "The database management system",
                  "The network infrastructure"
                ],
                "questionId": 100
              },
              {
                "question": "What is the primary role of \"backend\" in web development?",
                "options": [
                  "Managing the user interface",
                  "Handling server-side logic and databases",
                  "Designing responsive layouts",
                  "Implementing frontend styles"
                ],
                "questionId": 101
              },
              {
                "question": "What does \"IP\" stand for in networking?",
                "options": [
                  "Internet Provider",
                  "Internet Protocol",
                  "Information Processing",
                  "Interface Port"
                ],
                "questionId": 102
              },
              {
                "question": " What is the total range of each octet in an IPv4 address?",
                "options": [
                  "0-100",
                  "0-127",
                  "0-255",
                  "0-64"
                ],
                "questionId": 103
              }
            ]
          },
          {
            "title": "DNS",
            "video": "/htmlcourse/dns.m3u8",
            "duration": "10:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into the Domain Name System (DNS) and unravel the process of translating domain names to IP addresses. Explore the role DNS plays in making web browsing seamless."
          },
          {
            "title": "What is API?",
            "video": "/htmlcourse/api.m3u8",
            "duration": "3:12",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Application Programming Interfaces (APIs). Understand their significance in web development, facilitating communication between different software systems."
          },
          {
            "title": "What is HTML",
            "video": "/htmlcourse/what_is_html.m3u8",
            "duration": "2:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Begin your journey into the core of web development with HTML. Learn the basics of structuring web content and creating the foundation for interactive websites."
          },
          {
            "title": "HTML Page Structure",
            "video": "/htmlcourse/HTML_page_structure.m3u8",
            "duration": "3:33",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the art of organizing your web pages. Explore HTML tags that define the structure of a webpage, providing a solid foundation for your coding endeavors."
          },
          {
            "title": "Quiz 2",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the primary function of DNS in web development?",
                "options": [
                  "To design responsive user interfaces",
                  "To translate domain names to IP addresses",
                  "To manage server-side logic",
                  "To encrypt website data"
                ],
                "questionId": 104
              },
              {
                "question": "What does 'API' stand for in web development?",
                "options": [
                  "Advanced Programming Interface",
                  "Application Programming Interface",
                  "Automated Processing Interface",
                  "Advanced Protocol Integration"
                ],
                "questionId": 105
              },
              {
                "question": "What is the main markup language used for creating web pages??",
                "options": [
                  "XML",
                  "XAMPP",
                  "HTML",
                  "CSS"
                ],
                "questionId": 106
              },
              {
                "question": "What does 'HTML' stand for?",
                "options": [
                  "Hyper Transfer Markup Language",
                  "High-Level Text Management Language",
                  "Hyperlink and Text Management Language",
                  "HyperText Markup Language"
                ],
                "questionId": 107
              }
            ]
          },
          {
            "title": "Text tags",
            "video": "/htmlcourse/text_tags.m3u8",
            "duration": "18:55",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore the world of text manipulation in HTML. Discover tags that enhance the presentation of textual content on your web pages."
          },
          {
            "title": "List tags",
            "video": "/htmlcourse/list_tags.m3u8",
            "duration": "5:29",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore HTML's list tags to efficiently structure information. Learn how to create ordered and unordered lists for better content organization."
          },
          {
            "title": "Anchor tag",
            "video": "/htmlcourse/Anchor_tag.m3u8",
            "duration": "7:53",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unlock the power of hyperlinking with the anchor tag. Understand how to connect different pages and resources within your website."
          },
          {
            "title": "Image tag",
            "video": "/htmlcourse/image_tag.m3u8",
            "duration": "6:48",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Bring visual appeal to your web pages with the image tag. Learn how to integrate images seamlessly into your HTML content."
          },
          {
            "title": "Audio & video tag",
            "video": "/htmlcourse/audio_and_video_tag.m3u8",
            "duration": "7:56",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user engagement with multimedia elements. Explore the audio and video tags to incorporate media seamlessly into your web projects."
          },
          {
            "title": "iframe & embed tag",
            "video": "/htmlcourse/iframe_and_embed_tag.m3u8",
            "duration": "7:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Harness the capabilities of iframe and embed tags. Understand how these tags enable the integration of external content within your web pages."
          },
          {
            "title": "Div tag",
            "video": "/htmlcourse/div_tag.m3u8",
            "duration": "3:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the versatile div tag. Learn how it acts as a container, allowing you to structure and style your HTML content effectively."
          },
          {
            "title": "Input tags",
            "video": "/htmlcourse/input_tag.m3u8",
            "duration": "14:01",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into user interaction with HTML input tags. Explore various input types and understand how they enable user data input."
          },
          {
            "title": "Button tag",
            "video": "/htmlcourse/button_tag.m3u8",
            "duration": "1:43",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user experience with interactive buttons. Learn the ins and outs of the button tag and its various applications."
          },
          {
            "title": "Form part 1",
            "video": "/htmlcourse/form_tag_1.m3u8",
            "duration": "9:09",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embark on the journey of web forms. In part one, explore the essential elements that make up a form, setting the stage for user data collection."
          },
          {
            "title": "Form part 2",
            "video": "/htmlcourse/form_tag_2.m3u8",
            "duration": "8:00",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Delve deeper into the world of web forms. In part two, learn about form validation, submission methods, and enhance the functionality of your forms."
          },
          {
            "title": "Table tag",
            "video": "/htmlcourse/table_tag.m3u8",
            "duration": "4:42",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Uncover the power of HTML tables. Learn how to structure and display data in a tabular format for improved readability."
          },
          {
            "title": "Semantic HTML - 1",
            "video": "/htmlcourse/semantic_html_1.m3u8",
            "duration": "5:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embrace semantic HTML for enhanced accessibility and SEO. In part one, understand how semantic tags contribute to the meaning and structure of your content."
          },
          {
            "title": "Semantic HTML - 2",
            "video": "/htmlcourse/semantic_html_2.m3u8",
            "duration": "2:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your journey into semantic HTML. In part two, explore additional tags that enrich the semantics of your web pages."
          },
          {
            "title": "Web Crawler",
            "video": "/htmlcourse/web_crawler.m3u8",
            "duration": "3:40",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Understand how websites are ranked to top by web crawling. Understand the fundamentals of how search engines navigate and index content across the vast web."
          },
          {
            "title": "Quiz 3",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the purpose of 'Text tags' in HTML?",
                "options": [
                  "To create lists of items",
                  "To structure webpage content",
                  "To manipulate text formatting",
                  "To embed multimedia elements"
                ],
                "questionId": 108
              },
              {
                "question": "Which HTML tags are used for creating ordered and unordered lists?",
                "options": [
                  "<ol> and <ul>",
                  "<ul> and <li>",
                  "<list> and <item>",
                  "<order> and <item>"
                ],
                "questionId": 109
              },
              {
                "question": "What does the 'Anchor tag' (<a>) primarily facilitate in HTML?",
                "options": [
                  "Embedding images",
                  "Creating hyperlinks",
                  "Styling webpage elements",
                  "Inserting audio content"
                ],
                "questionId": 110
              },
              {
                "question": "What does the term 'Web Crawler' refer to in the context of HTML?",
                "options": [
                  "A spider-like creature",
                  "A tool for organizing files",
                  "A script for automating tasks",
                  "A program for navigating and indexing web content"
                ],
                "questionId": 111
              }
            ]
          },
          {
            "title": "More HTML tags",
            "video": "/htmlcourse/more_html_tags.m3u8",
            "duration": "1:39",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Expand your HTML toolkit with additional tags. Discover tags that cater to specific needs, enhancing the richness of your web pages."
          },
          {
            "title": "Project 1 - 1",
            "video": "/htmlcourse/project_1_1.m3u8",
            "duration": "7:38",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Apply your newfound HTML skills in a practical project. In part one, embark on a hands-on project to where we build a small FAQ page by using semantic HTML tags and using font awesome icons."
          },
          {
            "title": "Project 1 - 2",
            "video": "/htmlcourse/project_1_2.m3u8",
            "duration": "8:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your project journey in part two. Apply advanced HTML concepts and solidify your skills through a comprehensive project that showcases your abilities."
          },
          {
            "title": "Project 2",
            "video": "/htmlcourse/project_2.m3u8",
            "duration": "9:05",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Level up with an in-depth project. Demonstrate your proficiency in HTML as you undertake a larger-scale project, integrating various elements learned throughout the course."
          },
          {
            "title": "Web Hosting",
            "video": "/htmlcourse/web_hosting.m3u8",
            "duration": "6:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unravel the mysteries of web hosting. Learn how to take your web projects live by exploring different hosting options and understanding the basics of site configurations."
          },
          {
            "title": "CSS",
            "video": "/htmlcourse/intro_to_css.m3u8",
            "duration": "8:22",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Transition seamlessly from HTML to CSS. In this module, delve into the world of Cascading Style Sheets to add style and visual appeal to your web pages."
          },
          {
            "title": "HTML and Project Quiz",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "In 'Project 1 - 1', what HTML semantic tags were primarily used for creating a FAQ page?",
                "options": [
                  "<div> and <span>",
                  "<details> and <summary>",
                  "<ul> and <li>",
                  "<section> and <article>"
                ],
                "questionId": 112
              },
              {
                "question": "In 'Project 1 - 2', how did you make an image float using HTML?",
                "options": [
                  "Applied 'float' property in CSS",
                  "Used 'position: absolute'",
                  "Set 'display: inline-block'",
                  "Inserted a 'float' tag around the image"
                ],
                "questionId": 113
              },
              {
                "question": "What was the focus of 'Project 2' in your HTML course?",
                "options": [
                  "Creating an FAQ page",
                  "Designing a personal portfolio",
                  "Developing a basic app documentation",
                  "Implementing a chat application"
                ],
                "questionId": 114
              },
              {
                "question": "What is web hosting in the context of web development?",
                "options": [
                  "A service that allows individuals and organizations to make their websites accessible via the World Wide Web",
                  "A method of creating dynamic web pages",
                  "A technique for optimizing website performance",
                  "A module covered in the CSS section"
                ],
                "questionId": 115
              }
            ]
          },
          {
            "title": "Wrap up",
            "video": "/htmlcourse/wrap_up.m3u8",
            "duration": "2:07",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Congratulations on completing the course! In this final module, recap your journey, reflect on your accomplishments, and gain insights into the next steps in your web development adventure."
          }
        ],
        "language": "Tamil",
        "requirements": [
          "Text editor for writing HTML code",
          "Web Browser to view the output of HTML code"
        ],
        "author": "N.U.Thejas hari",
        "authorInsta": "https://www.instagram.com/nuthejashari/",
        "meetingLink": "",
        "whatsappGroup": "",
        "recordedVideo": "",
        "courseId": "101110",
        "locked": false,
        "videos": "35",
        "projects": "2",
        "duration": "4 Hours",
        "paid": "",
        "cancellable": false,
        "createdAt": "2024-01-01T06:43:50.699Z",
        "updatedAt": "2024-01-01T06:43:50.699Z",
        "__v": 0,
        "completed": false,
        "enrolledOn": "2024-01-01T13:57:58.263Z",
        "certificate": "",
        "name": "Pugazhenthi krishnamoorthy",
        "userId": "649acdfc445208ef00fac5f7",
        "progress": 0,
        "allNotes": []
      }
    ],
    "enrolledCoursesId": [
      "101110"
    ]
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649acf0b445208ef00fac60c",
    "name": "S.Meenakshi Sundaram",
    "email": "meenakshisundaram373@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_p-zmBxB3-",
    "level": "Intermediate",
    "registeredWorkshops": [
      "649d2564e25a8051582df4ba",
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T11:59:07.679Z",
    "updatedAt": "2023-07-03T20:15:00.042Z",
    "__v": 0,
    "certificates": {
      "649d30748595dbbe4fb93695": "https://ik.imagekit.io/d3kzbpbila/9_Z_W1_hlWbS.png?updatedAt=1688414228679"
    }
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649acf48445208ef00fac613",
    "name": "jack jagan",
    "email": "jackjagan1995@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_PldVFXwtX",
    "level": "Novice",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695",
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T12:00:08.538Z",
    "updatedAt": "2023-07-03T20:14:38.649Z",
    "__v": 0,
    "certificates": {
      "649d30748595dbbe4fb93695": "https://ik.imagekit.io/d3kzbpbila/6_yulvUWDl4.png?updatedAt=1688414228620"
    }
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649ad2ae19af2b5c8d58388e",
    "name": "Divyam Dr.NGP Itech",
    "email": "divyam@drngpit.ac.in",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_ccMTznZWV",
    "level": "Intermediate",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695",
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T12:14:38.290Z",
    "updatedAt": "2023-06-29T15:40:50.384Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649ad9f6a6e42ba20c9efc91",
    "name": "MANISHANKAR B",
    "email": "manishankarbpsrec@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_qglCJfkfP",
    "level": "Beginner",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T12:45:42.960Z",
    "updatedAt": "2023-06-27T12:46:04.143Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649ae60b9ee99c23c076ce54",
    "name": "Jeevanandams Dr.NGP Itech",
    "email": "jeevanandams@drngpit.ac.in",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_OfCRTs6yT",
    "level": "Intermediate",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T13:37:15.289Z",
    "updatedAt": "2023-06-27T13:37:44.599Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649ae8c534e7d343f417e089",
    "name": "Sooraj t",
    "email": "soorajtsn7@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_EgXTzfmFK",
    "level": "Beginner",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T13:48:53.458Z",
    "updatedAt": "2023-06-27T13:49:14.794Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649aeb24755d7c1ec0202116",
    "name": "Rithikaa Dr.NGP Itech",
    "email": "rithikaa@drngpit.ac.in",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_TLhhmThbC",
    "level": "Beginner",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T13:59:00.273Z",
    "updatedAt": "2023-06-27T13:59:15.923Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649aebb6755d7c1ec0202124",
    "name": "Sanjai Suresh",
    "email": "sanjaisuresh1062@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_1lNh4zpRd",
    "level": "Intermediate",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T14:01:26.930Z",
    "updatedAt": "2023-06-27T14:01:45.858Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649aed9df9c5a24481596788",
    "name": "Vikasini Ravi",
    "email": "vikasinivetha02@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_BpkifQAOI",
    "level": "Beginner",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T14:09:33.439Z",
    "updatedAt": "2023-06-27T14:09:52.284Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649af1d30a40162c65f54381",
    "name": "Lathifa Logeshwaran",
    "email": "lathifa51@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_uYic3rlaN",
    "level": "Novice",
    "registeredWorkshops": [],
    "createdAt": "2023-06-27T14:27:31.153Z",
    "updatedAt": "2023-06-27T14:27:31.153Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649af4d62b1a8312a004c834",
    "name": "Dharun Aadithya",
    "email": "aadithya2709@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_eT79o9tPl",
    "level": "Beginner",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695",
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T14:40:22.720Z",
    "updatedAt": "2023-06-29T13:29:13.833Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649af7259dd46fd1246944df",
    "name": "S. Pavithra",
    "email": "pavithrasuresh1209@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_1jOwOa92d",
    "level": "Beginner",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T14:50:13.213Z",
    "updatedAt": "2023-06-27T14:50:43.815Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649af9969dd46fd1246944f4",
    "name": "karthik karthi",
    "email": "karthi98karthik19@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_ZMPT2DtHk",
    "level": "Beginner",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T15:00:38.192Z",
    "updatedAt": "2023-06-27T15:01:35.599Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649af9b99dd46fd1246944fa",
    "name": "Sakthi kumaran",
    "email": "sakthikumaranofficial@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_XsegPtMUna",
    "level": "Beginner",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T15:01:13.391Z",
    "updatedAt": "2023-06-27T15:01:26.576Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649afb189dd46fd124694506",
    "name": "SENTHILKUMAR N S",
    "email": "senthilkumar682k1@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_Vn1_sILmM",
    "level": "Beginner",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695",
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T15:07:04.333Z",
    "updatedAt": "2023-06-29T16:57:36.313Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649afc2fe8141aa352f08377",
    "name": "22SPCS05 LOGESH S S",
    "email": "22spcs05@tcarts.in",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_gqXkdxsU4",
    "level": "Beginner",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T15:11:43.360Z",
    "updatedAt": "2023-06-27T15:12:09.345Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649afc59e8141aa352f0837e",
    "name": "PRADEEP RAJ D (RA2211031010165)",
    "email": "pd0110@srmist.edu.in",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_0P3LMImX6",
    "level": "Novice",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T15:12:25.550Z",
    "updatedAt": "2023-06-27T15:12:44.882Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649afcd59dd46fd124694525",
    "name": "Priya",
    "email": "priyabanu2310@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_evLKlnGfWt",
    "level": "Novice",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84",
      "649d30748595dbbe4fb93695",
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T15:14:29.267Z",
    "updatedAt": "2024-01-26T03:52:07.079Z",
    "__v": 0,
    "certificates": {
      "649d30748595dbbe4fb93695": "https://ik.imagekit.io/d3kzbpbila/10_HjVvyBDkra.png?updatedAt=1688414228691"
    }
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649afe06142b0faba0b88425",
    "name": "22SPCS07 N I V E T H S P",
    "email": "22spcs07@tcarts.in",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_VvUjpnmR_",
    "level": "Beginner",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T15:19:34.128Z",
    "updatedAt": "2023-06-27T15:19:44.896Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649b006a4ca2cd324e1c373b",
    "name": "gayathri ca2001",
    "email": "gayathrica2001@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_lvPf2FwzQ",
    "level": "Beginner",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T15:29:46.030Z",
    "updatedAt": "2023-06-27T15:38:30.102Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649b03c34ca2cd324e1c3753",
    "name": "Reshma Masudha",
    "email": "reshmamasudha0@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_ewBGWSxjb",
    "level": "Novice",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695",
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T15:44:03.876Z",
    "updatedAt": "2023-06-30T10:45:38.565Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649b03ec416ae0b1b4e2bd91",
    "name": "Aswin",
    "email": "aswinramesh2016@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_ymPRHkrFG",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84",
      "649d30748595dbbe4fb93695",
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T15:44:44.889Z",
    "updatedAt": "2024-01-26T05:12:41.180Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649b04004ca2cd324e1c375f",
    "name": "22SPCS03 KAMATCHI P",
    "email": "22spcs03@tcarts.in",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_0a0Cfm-gV",
    "level": "Beginner",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T15:45:04.270Z",
    "updatedAt": "2023-06-27T15:45:54.154Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649b04274ca2cd324e1c3764",
    "name": "Vishnu “V_sh__v__i” V2",
    "email": "vvishnu37442@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_27MRuIk1v",
    "level": "Advanced",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695",
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T15:45:43.912Z",
    "updatedAt": "2023-06-30T08:58:41.126Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649b047f91faf1ac5ec3d5b8",
    "name": "Sangeetha",
    "email": "114msangeetha@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_WlY4APhma",
    "level": "Novice",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T15:47:11.126Z",
    "updatedAt": "2023-06-27T15:47:48.443Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649b05356dbd7fb9297f14f4",
    "name": "JAGAN PS",
    "email": "psjagan2003@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_3tnBKfEbP",
    "level": "Beginner",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695",
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T15:50:13.769Z",
    "updatedAt": "2023-06-29T16:55:45.407Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649b0575416ae0b1b4e2bd9d",
    "name": "Muthu Raj",
    "email": "hellofmmuthuraj@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_CzpHixyE7",
    "level": "Novice",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695",
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T15:51:17.242Z",
    "updatedAt": "2023-06-30T07:08:14.155Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649b06b791faf1ac5ec3d5d0",
    "name": "Karthiga Thiru",
    "email": "karthigathiru786@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_L_QW8NSjh",
    "level": "Novice",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84",
      "649d30748595dbbe4fb93695"
    ],
    "createdAt": "2023-06-27T15:56:39.751Z",
    "updatedAt": "2024-01-26T11:25:27.091Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649b06de91faf1ac5ec3d5d6",
    "name": "Santhosh AR",
    "email": "arsanthosh441@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_aUBmTL6JG_",
    "level": "Beginner",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T15:57:18.083Z",
    "updatedAt": "2023-06-27T15:57:30.787Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649b08fe6dbd7fb9297f1519",
    "name": "Shanmugaraam S.k",
    "email": "shanmuga10552@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_rbYDnh5Ve",
    "level": "Beginner",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695",
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T16:06:22.956Z",
    "updatedAt": "2023-06-30T08:39:58.028Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649b090a6dbd7fb9297f151e",
    "name": "TN Singam Gaming - Clash Me",
    "email": "thejasgamerx123@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari__SHr-R6Lp",
    "level": "Novice",
    "registeredWorkshops": [
      "65b4bd00ed9d87145d75ebe2",
      "649d30748595dbbe4fb93695"
    ],
    "createdAt": "2023-06-27T16:06:34.601Z",
    "updatedAt": "2024-02-01T11:12:38.923Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649b09a874b244d494d052b2",
    "name": "Vignesh Vikky",
    "email": "vikky4060@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_P4IQF0d34",
    "level": "Beginner",
    "registeredWorkshops": [
      "65c4ec315a6594a5ea09b47f",
      "65b4bd00ed9d87145d75ebe2",
      "65b024e37df1619b5bfaef84",
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T16:09:12.184Z",
    "updatedAt": "2024-02-08T15:31:00.783Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649b09e96dbd7fb9297f152d",
    "name": "Raghul Raghul",
    "email": "raghul21502002@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_k_0Dnb2v6V",
    "level": "Beginner",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T16:10:17.356Z",
    "updatedAt": "2023-06-27T16:10:40.985Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649b0a3f6dbd7fb9297f1536",
    "name": "Veerashobanar Dr.NGP Itech",
    "email": "veerashobanar@drngpit.ac.in",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_bEZxZnWg3",
    "level": "Beginner",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T16:11:43.130Z",
    "updatedAt": "2023-06-27T16:12:09.713Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649b0a8d74b244d494d052c8",
    "name": "Dharsiniy Dr.NGP Itech",
    "email": "dharsiniy@drngpit.ac.in",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari__D4ykdxhZ",
    "level": "Beginner",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T16:13:01.614Z",
    "updatedAt": "2023-06-27T16:13:32.775Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649b0b1b91faf1ac5ec3d5f9",
    "name": "IRTT - MEIYARASI M",
    "email": "mownika32@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_d0thnpFL5",
    "level": "Beginner",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695",
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T16:15:23.867Z",
    "updatedAt": "2023-06-29T17:42:35.847Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649b0b9991faf1ac5ec3d606",
    "name": "Saravanan K R",
    "email": "saravananofficial18@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_Vs4zd6CiG",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b4bd00ed9d87145d75ebe2",
      "65b024e37df1619b5bfaef84",
      "649d30748595dbbe4fb93695",
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T16:17:29.829Z",
    "updatedAt": "2024-02-01T17:04:09.730Z",
    "__v": 0
  },
  {
    "_id": "649b0d3874b244d494d052d7",
    "name": "Thilothe Nattamai",
    "email": "thilots308@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_q3r73hDYb",
    "level": "Novice",
    "registeredWorkshops": [],
    "createdAt": "2023-06-27T16:24:24.816Z",
    "updatedAt": "2024-01-25T17:57:44.779Z",
    "__v": 0,
    "enrolledCoursesData": [
      {
        "_id": "65925f26f5f0ffa3b0e38586",
        "title": "Basics of Networking and HTML Beginner to Advanced Course",
        "description": "Learn web development fundamentals, covering frontend, backend, and database structures. Explore client-server dynamics, APIs, various IP types, DNS workings, and HTML essentials with an introduction to CSS for crafting interactive websites",
        "image": "/html.png",
        "content": [
          {
            "title": "Course Introduction",
            "video": "/htmlcourse/intro.m3u8",
            "duration": "0:32",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Welcome to the course! In this introductory module, you'll get a glimpse of what's in store. We'll outline the course structure, set expectations, and highlight the outcomes you can anticipate upon completion."
          },
          {
            "title": "Expectations & Outcomes",
            "video": "/htmlcourse/CourseOutcomes&Scope.m3u8",
            "duration": "1:21",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Understand the goals of this course and what you'll gain by the end. We'll discuss the skills you'll acquire, the knowledge you'll gain, and how it will benefit you in the realm of web development and networking."
          },
          {
            "title": "Web Development & Scopes",
            "video": "/htmlcourse/WebDevelopment&Scopes.m3u8",
            "duration": "8:54",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the vast landscape of web development careers. Learn about the diverse scopes and job opportunities available in the industry, providing you with insights to shape your career path."
          },
          {
            "title": "Frontend Backend Architecture",
            "video": "/htmlcourse/FrontendBackendArchitecture.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Delve into the intricacies of frontend and backend architecture. Understand how these components work together to create seamless and responsive web applications, laying the foundation for your development journey."
          },
          {
            "title": "Database",
            "video": "/htmlcourse/database.m3u8",
            "duration": "1:07",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Uncover the importance of databases in web development. Learn what are the types of database available and the free cloud services providing free database for developers."
          },
          {
            "title": "IP & Types",
            "video": "/htmlcourse/ip internal & external.m3u8",
            "duration": "9:35",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Navigate the world of Internet Protocol (IP) addresses. Gain a comprehensive understanding of IP types and their significance in the networking landscape."
          },
          {
            "title": "IPv4 vs IPv6",
            "video": "/htmlcourse/ipv4 vs ipv6.m3u8",
            "duration": "7:12",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Compare IPv4 and IPv6, the two versions of the Internet Protocol. Understand the differences and advancements that IPv6 brings to address the limitations of IPv4."
          },
          {
            "title": "Static vs Dynamic IP",
            "video": "/htmlcourse/static_vs_dynamic_ip.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the distinction between static and dynamic IP addresses. Learn how each type is assigned and its impact on network configurations."
          },
          {
            "title": "Quiz 1",
            "quiz": true,
            "locked": false,
            "completed": false,
            "questions": [
              {
                "question": "What does \"frontend\" refer to in web development?",
                "options": [
                  "The part of a website users interact with",
                  "The server-side logic of a website",
                  "The database management system",
                  "The network infrastructure"
                ],
                "questionId": 100
              },
              {
                "question": "What is the primary role of \"backend\" in web development?",
                "options": [
                  "Managing the user interface",
                  "Handling server-side logic and databases",
                  "Designing responsive layouts",
                  "Implementing frontend styles"
                ],
                "questionId": 101
              },
              {
                "question": "What does \"IP\" stand for in networking?",
                "options": [
                  "Internet Provider",
                  "Internet Protocol",
                  "Information Processing",
                  "Interface Port"
                ],
                "questionId": 102
              },
              {
                "question": " What is the total range of each octet in an IPv4 address?",
                "options": [
                  "0-100",
                  "0-127",
                  "0-255",
                  "0-64"
                ],
                "questionId": 103
              }
            ]
          },
          {
            "title": "DNS",
            "video": "/htmlcourse/dns.m3u8",
            "duration": "10:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into the Domain Name System (DNS) and unravel the process of translating domain names to IP addresses. Explore the role DNS plays in making web browsing seamless."
          },
          {
            "title": "What is API?",
            "video": "/htmlcourse/api.m3u8",
            "duration": "3:12",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Application Programming Interfaces (APIs). Understand their significance in web development, facilitating communication between different software systems."
          },
          {
            "title": "What is HTML",
            "video": "/htmlcourse/what_is_html.m3u8",
            "duration": "2:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Begin your journey into the core of web development with HTML. Learn the basics of structuring web content and creating the foundation for interactive websites."
          },
          {
            "title": "HTML Page Structure",
            "video": "/htmlcourse/HTML_page_structure.m3u8",
            "duration": "3:33",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the art of organizing your web pages. Explore HTML tags that define the structure of a webpage, providing a solid foundation for your coding endeavors."
          },
          {
            "title": "Quiz 2",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the primary function of DNS in web development?",
                "options": [
                  "To design responsive user interfaces",
                  "To translate domain names to IP addresses",
                  "To manage server-side logic",
                  "To encrypt website data"
                ],
                "questionId": 104
              },
              {
                "question": "What does 'API' stand for in web development?",
                "options": [
                  "Advanced Programming Interface",
                  "Application Programming Interface",
                  "Automated Processing Interface",
                  "Advanced Protocol Integration"
                ],
                "questionId": 105
              },
              {
                "question": "What is the main markup language used for creating web pages??",
                "options": [
                  "XML",
                  "XAMPP",
                  "HTML",
                  "CSS"
                ],
                "questionId": 106
              },
              {
                "question": "What does 'HTML' stand for?",
                "options": [
                  "Hyper Transfer Markup Language",
                  "High-Level Text Management Language",
                  "Hyperlink and Text Management Language",
                  "HyperText Markup Language"
                ],
                "questionId": 107
              }
            ]
          },
          {
            "title": "Text tags",
            "video": "/htmlcourse/text_tags.m3u8",
            "duration": "18:55",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore the world of text manipulation in HTML. Discover tags that enhance the presentation of textual content on your web pages."
          },
          {
            "title": "List tags",
            "video": "/htmlcourse/list_tags.m3u8",
            "duration": "5:29",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore HTML's list tags to efficiently structure information. Learn how to create ordered and unordered lists for better content organization."
          },
          {
            "title": "Anchor tag",
            "video": "/htmlcourse/Anchor_tag.m3u8",
            "duration": "7:53",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unlock the power of hyperlinking with the anchor tag. Understand how to connect different pages and resources within your website."
          },
          {
            "title": "Image tag",
            "video": "/htmlcourse/image_tag.m3u8",
            "duration": "6:48",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Bring visual appeal to your web pages with the image tag. Learn how to integrate images seamlessly into your HTML content."
          },
          {
            "title": "Audio & video tag",
            "video": "/htmlcourse/audio_and_video_tag.m3u8",
            "duration": "7:56",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user engagement with multimedia elements. Explore the audio and video tags to incorporate media seamlessly into your web projects."
          },
          {
            "title": "iframe & embed tag",
            "video": "/htmlcourse/iframe_and_embed_tag.m3u8",
            "duration": "7:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Harness the capabilities of iframe and embed tags. Understand how these tags enable the integration of external content within your web pages."
          },
          {
            "title": "Div tag",
            "video": "/htmlcourse/div_tag.m3u8",
            "duration": "3:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the versatile div tag. Learn how it acts as a container, allowing you to structure and style your HTML content effectively."
          },
          {
            "title": "Input tags",
            "video": "/htmlcourse/input_tag.m3u8",
            "duration": "14:01",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into user interaction with HTML input tags. Explore various input types and understand how they enable user data input."
          },
          {
            "title": "Button tag",
            "video": "/htmlcourse/button_tag.m3u8",
            "duration": "1:43",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user experience with interactive buttons. Learn the ins and outs of the button tag and its various applications."
          },
          {
            "title": "Form part 1",
            "video": "/htmlcourse/form_tag_1.m3u8",
            "duration": "9:09",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embark on the journey of web forms. In part one, explore the essential elements that make up a form, setting the stage for user data collection."
          },
          {
            "title": "Form part 2",
            "video": "/htmlcourse/form_tag_2.m3u8",
            "duration": "8:00",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Delve deeper into the world of web forms. In part two, learn about form validation, submission methods, and enhance the functionality of your forms."
          },
          {
            "title": "Table tag",
            "video": "/htmlcourse/table_tag.m3u8",
            "duration": "4:42",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Uncover the power of HTML tables. Learn how to structure and display data in a tabular format for improved readability."
          },
          {
            "title": "Semantic HTML - 1",
            "video": "/htmlcourse/semantic_html_1.m3u8",
            "duration": "5:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embrace semantic HTML for enhanced accessibility and SEO. In part one, understand how semantic tags contribute to the meaning and structure of your content."
          },
          {
            "title": "Semantic HTML - 2",
            "video": "/htmlcourse/semantic_html_2.m3u8",
            "duration": "2:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your journey into semantic HTML. In part two, explore additional tags that enrich the semantics of your web pages."
          },
          {
            "title": "Web Crawler",
            "video": "/htmlcourse/web_crawler.m3u8",
            "duration": "3:40",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Understand how websites are ranked to top by web crawling. Understand the fundamentals of how search engines navigate and index content across the vast web."
          },
          {
            "title": "Quiz 3",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the purpose of 'Text tags' in HTML?",
                "options": [
                  "To create lists of items",
                  "To structure webpage content",
                  "To manipulate text formatting",
                  "To embed multimedia elements"
                ],
                "questionId": 108
              },
              {
                "question": "Which HTML tags are used for creating ordered and unordered lists?",
                "options": [
                  "<ol> and <ul>",
                  "<ul> and <li>",
                  "<list> and <item>",
                  "<order> and <item>"
                ],
                "questionId": 109
              },
              {
                "question": "What does the 'Anchor tag' (<a>) primarily facilitate in HTML?",
                "options": [
                  "Embedding images",
                  "Creating hyperlinks",
                  "Styling webpage elements",
                  "Inserting audio content"
                ],
                "questionId": 110
              },
              {
                "question": "What does the term 'Web Crawler' refer to in the context of HTML?",
                "options": [
                  "A spider-like creature",
                  "A tool for organizing files",
                  "A script for automating tasks",
                  "A program for navigating and indexing web content"
                ],
                "questionId": 111
              }
            ]
          },
          {
            "title": "More HTML tags",
            "video": "/htmlcourse/more_html_tags.m3u8",
            "duration": "1:39",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Expand your HTML toolkit with additional tags. Discover tags that cater to specific needs, enhancing the richness of your web pages."
          },
          {
            "title": "Project 1 - 1",
            "video": "/htmlcourse/project_1_1.m3u8",
            "duration": "7:38",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Apply your newfound HTML skills in a practical project. In part one, embark on a hands-on project to where we build a small FAQ page by using semantic HTML tags and using font awesome icons."
          },
          {
            "title": "Project 1 - 2",
            "video": "/htmlcourse/project_1_2.m3u8",
            "duration": "8:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your project journey in part two. Apply advanced HTML concepts and solidify your skills through a comprehensive project that showcases your abilities."
          },
          {
            "title": "Project 2",
            "video": "/htmlcourse/project_2.m3u8",
            "duration": "9:05",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Level up with an in-depth project. Demonstrate your proficiency in HTML as you undertake a larger-scale project, integrating various elements learned throughout the course."
          },
          {
            "title": "Web Hosting",
            "video": "/htmlcourse/web_hosting.m3u8",
            "duration": "6:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unravel the mysteries of web hosting. Learn how to take your web projects live by exploring different hosting options and understanding the basics of site configurations."
          },
          {
            "title": "CSS",
            "video": "/htmlcourse/intro_to_css.m3u8",
            "duration": "8:22",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Transition seamlessly from HTML to CSS. In this module, delve into the world of Cascading Style Sheets to add style and visual appeal to your web pages."
          },
          {
            "title": "HTML and Project Quiz",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "In 'Project 1 - 1', what HTML semantic tags were primarily used for creating a FAQ page?",
                "options": [
                  "<div> and <span>",
                  "<details> and <summary>",
                  "<ul> and <li>",
                  "<section> and <article>"
                ],
                "questionId": 112
              },
              {
                "question": "In 'Project 1 - 2', how did you make an image float using HTML?",
                "options": [
                  "Applied 'float' property in CSS",
                  "Used 'position: absolute'",
                  "Set 'display: inline-block'",
                  "Inserted a 'float' tag around the image"
                ],
                "questionId": 113
              },
              {
                "question": "What was the focus of 'Project 2' in your HTML course?",
                "options": [
                  "Creating an FAQ page",
                  "Designing a personal portfolio",
                  "Developing a basic app documentation",
                  "Implementing a chat application"
                ],
                "questionId": 114
              },
              {
                "question": "What is web hosting in the context of web development?",
                "options": [
                  "A service that allows individuals and organizations to make their websites accessible via the World Wide Web",
                  "A method of creating dynamic web pages",
                  "A technique for optimizing website performance",
                  "A module covered in the CSS section"
                ],
                "questionId": 115
              }
            ]
          },
          {
            "title": "Wrap up",
            "video": "/htmlcourse/wrap_up.m3u8",
            "duration": "2:07",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Congratulations on completing the course! In this final module, recap your journey, reflect on your accomplishments, and gain insights into the next steps in your web development adventure."
          }
        ],
        "language": "Tamil",
        "requirements": [
          "Text editor for writing HTML code",
          "Web Browser to view the output of HTML code"
        ],
        "author": "N.U.Thejas hari",
        "authorInsta": "https://www.instagram.com/nuthejashari/",
        "meetingLink": "",
        "whatsappGroup": "",
        "recordedVideo": "",
        "courseId": "101110",
        "locked": false,
        "videos": "35",
        "projects": "2",
        "duration": "4 Hours",
        "paid": "",
        "cancellable": false,
        "createdAt": "2024-01-01T06:43:50.699Z",
        "updatedAt": "2024-01-01T06:43:50.699Z",
        "__v": 0,
        "completed": false,
        "enrolledOn": "2024-01-25T17:57:08.176Z",
        "certificate": "",
        "name": "Thilothe Nattamai",
        "userId": "649b0d3874b244d494d052d7",
        "progress": 0,
        "allNotes": []
      }
    ],
    "enrolledCoursesId": [
      "101110"
    ]
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649b0d5b07a584cd62ec6d05",
    "name": "Sathish Kumar M",
    "email": "sathishkumarkinglee@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_Qb-O_PU62",
    "level": "Novice",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T16:24:59.587Z",
    "updatedAt": "2023-06-27T16:25:15.964Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649b0dec12e56e31a00a4ba0",
    "name": "Jega",
    "email": "jegannathan772@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_NLLx3xk8R",
    "level": "Beginner",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T16:27:24.651Z",
    "updatedAt": "2023-06-27T16:27:58.291Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649b0e6512e56e31a00a4ba8",
    "name": "Abinai",
    "email": "abinaistreakz@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_UsJcmSoCC",
    "level": "Novice",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T16:29:25.155Z",
    "updatedAt": "2023-06-27T16:29:49.123Z",
    "__v": 0
  },
  {
    "_id": "649b0ef8e7afb262f2ece7ad",
    "name": "Priya Dharsini",
    "email": "dharsinipriya759@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_I1xXDYrdJ",
    "level": "Intermediate",
    "registeredWorkshops": [],
    "createdAt": "2023-06-27T16:31:52.255Z",
    "updatedAt": "2024-01-07T19:25:57.213Z",
    "__v": 0,
    "enrolledCoursesData": [
      {
        "_id": "65925f26f5f0ffa3b0e38586",
        "title": "Basics of Networking and HTML Beginner to Advanced Course",
        "description": "Learn web development fundamentals, covering frontend, backend, and database structures. Explore client-server dynamics, APIs, various IP types, DNS workings, and HTML essentials with an introduction to CSS for crafting interactive websites",
        "image": "/html.png",
        "content": [
          {
            "title": "Course Introduction",
            "video": "/htmlcourse/intro.m3u8",
            "duration": "0:32",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Welcome to the course! In this introductory module, you'll get a glimpse of what's in store. We'll outline the course structure, set expectations, and highlight the outcomes you can anticipate upon completion."
          },
          {
            "title": "Expectations & Outcomes",
            "video": "/htmlcourse/CourseOutcomes&Scope.m3u8",
            "duration": "1:21",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Understand the goals of this course and what you'll gain by the end. We'll discuss the skills you'll acquire, the knowledge you'll gain, and how it will benefit you in the realm of web development and networking."
          },
          {
            "title": "Web Development & Scopes",
            "video": "/htmlcourse/WebDevelopment&Scopes.m3u8",
            "duration": "8:54",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the vast landscape of web development careers. Learn about the diverse scopes and job opportunities available in the industry, providing you with insights to shape your career path."
          },
          {
            "title": "Frontend Backend Architecture",
            "video": "/htmlcourse/FrontendBackendArchitecture.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Delve into the intricacies of frontend and backend architecture. Understand how these components work together to create seamless and responsive web applications, laying the foundation for your development journey."
          },
          {
            "title": "Database",
            "video": "/htmlcourse/database.m3u8",
            "duration": "1:07",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Uncover the importance of databases in web development. Learn what are the types of database available and the free cloud services providing free database for developers."
          },
          {
            "title": "IP & Types",
            "video": "/htmlcourse/ip internal & external.m3u8",
            "duration": "9:35",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Navigate the world of Internet Protocol (IP) addresses. Gain a comprehensive understanding of IP types and their significance in the networking landscape."
          },
          {
            "title": "IPv4 vs IPv6",
            "video": "/htmlcourse/ipv4 vs ipv6.m3u8",
            "duration": "7:12",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Compare IPv4 and IPv6, the two versions of the Internet Protocol. Understand the differences and advancements that IPv6 brings to address the limitations of IPv4."
          },
          {
            "title": "Static vs Dynamic IP",
            "video": "/htmlcourse/static_vs_dynamic_ip.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the distinction between static and dynamic IP addresses. Learn how each type is assigned and its impact on network configurations."
          },
          {
            "title": "Quiz 1",
            "quiz": true,
            "locked": false,
            "completed": false,
            "questions": [
              {
                "question": "What does \"frontend\" refer to in web development?",
                "options": [
                  "The part of a website users interact with",
                  "The server-side logic of a website",
                  "The database management system",
                  "The network infrastructure"
                ],
                "questionId": 100
              },
              {
                "question": "What is the primary role of \"backend\" in web development?",
                "options": [
                  "Managing the user interface",
                  "Handling server-side logic and databases",
                  "Designing responsive layouts",
                  "Implementing frontend styles"
                ],
                "questionId": 101
              },
              {
                "question": "What does \"IP\" stand for in networking?",
                "options": [
                  "Internet Provider",
                  "Internet Protocol",
                  "Information Processing",
                  "Interface Port"
                ],
                "questionId": 102
              },
              {
                "question": " What is the total range of each octet in an IPv4 address?",
                "options": [
                  "0-100",
                  "0-127",
                  "0-255",
                  "0-64"
                ],
                "questionId": 103
              }
            ]
          },
          {
            "title": "DNS",
            "video": "/htmlcourse/dns.m3u8",
            "duration": "10:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into the Domain Name System (DNS) and unravel the process of translating domain names to IP addresses. Explore the role DNS plays in making web browsing seamless."
          },
          {
            "title": "What is API?",
            "video": "/htmlcourse/api.m3u8",
            "duration": "3:12",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Application Programming Interfaces (APIs). Understand their significance in web development, facilitating communication between different software systems."
          },
          {
            "title": "What is HTML",
            "video": "/htmlcourse/what_is_html.m3u8",
            "duration": "2:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Begin your journey into the core of web development with HTML. Learn the basics of structuring web content and creating the foundation for interactive websites."
          },
          {
            "title": "HTML Page Structure",
            "video": "/htmlcourse/HTML_page_structure.m3u8",
            "duration": "3:33",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the art of organizing your web pages. Explore HTML tags that define the structure of a webpage, providing a solid foundation for your coding endeavors."
          },
          {
            "title": "Quiz 2",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the primary function of DNS in web development?",
                "options": [
                  "To design responsive user interfaces",
                  "To translate domain names to IP addresses",
                  "To manage server-side logic",
                  "To encrypt website data"
                ],
                "questionId": 104
              },
              {
                "question": "What does 'API' stand for in web development?",
                "options": [
                  "Advanced Programming Interface",
                  "Application Programming Interface",
                  "Automated Processing Interface",
                  "Advanced Protocol Integration"
                ],
                "questionId": 105
              },
              {
                "question": "What is the main markup language used for creating web pages??",
                "options": [
                  "XML",
                  "XAMPP",
                  "HTML",
                  "CSS"
                ],
                "questionId": 106
              },
              {
                "question": "What does 'HTML' stand for?",
                "options": [
                  "Hyper Transfer Markup Language",
                  "High-Level Text Management Language",
                  "Hyperlink and Text Management Language",
                  "HyperText Markup Language"
                ],
                "questionId": 107
              }
            ]
          },
          {
            "title": "Text tags",
            "video": "/htmlcourse/text_tags.m3u8",
            "duration": "18:55",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore the world of text manipulation in HTML. Discover tags that enhance the presentation of textual content on your web pages."
          },
          {
            "title": "List tags",
            "video": "/htmlcourse/list_tags.m3u8",
            "duration": "5:29",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore HTML's list tags to efficiently structure information. Learn how to create ordered and unordered lists for better content organization."
          },
          {
            "title": "Anchor tag",
            "video": "/htmlcourse/Anchor_tag.m3u8",
            "duration": "7:53",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unlock the power of hyperlinking with the anchor tag. Understand how to connect different pages and resources within your website."
          },
          {
            "title": "Image tag",
            "video": "/htmlcourse/image_tag.m3u8",
            "duration": "6:48",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Bring visual appeal to your web pages with the image tag. Learn how to integrate images seamlessly into your HTML content."
          },
          {
            "title": "Audio & video tag",
            "video": "/htmlcourse/audio_and_video_tag.m3u8",
            "duration": "7:56",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user engagement with multimedia elements. Explore the audio and video tags to incorporate media seamlessly into your web projects."
          },
          {
            "title": "iframe & embed tag",
            "video": "/htmlcourse/iframe_and_embed_tag.m3u8",
            "duration": "7:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Harness the capabilities of iframe and embed tags. Understand how these tags enable the integration of external content within your web pages."
          },
          {
            "title": "Div tag",
            "video": "/htmlcourse/div_tag.m3u8",
            "duration": "3:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the versatile div tag. Learn how it acts as a container, allowing you to structure and style your HTML content effectively."
          },
          {
            "title": "Input tags",
            "video": "/htmlcourse/input_tag.m3u8",
            "duration": "14:01",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into user interaction with HTML input tags. Explore various input types and understand how they enable user data input."
          },
          {
            "title": "Button tag",
            "video": "/htmlcourse/button_tag.m3u8",
            "duration": "1:43",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user experience with interactive buttons. Learn the ins and outs of the button tag and its various applications."
          },
          {
            "title": "Form part 1",
            "video": "/htmlcourse/form_tag_1.m3u8",
            "duration": "9:09",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embark on the journey of web forms. In part one, explore the essential elements that make up a form, setting the stage for user data collection."
          },
          {
            "title": "Form part 2",
            "video": "/htmlcourse/form_tag_2.m3u8",
            "duration": "8:00",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Delve deeper into the world of web forms. In part two, learn about form validation, submission methods, and enhance the functionality of your forms."
          },
          {
            "title": "Table tag",
            "video": "/htmlcourse/table_tag.m3u8",
            "duration": "4:42",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Uncover the power of HTML tables. Learn how to structure and display data in a tabular format for improved readability."
          },
          {
            "title": "Semantic HTML - 1",
            "video": "/htmlcourse/semantic_html_1.m3u8",
            "duration": "5:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embrace semantic HTML for enhanced accessibility and SEO. In part one, understand how semantic tags contribute to the meaning and structure of your content."
          },
          {
            "title": "Semantic HTML - 2",
            "video": "/htmlcourse/semantic_html_2.m3u8",
            "duration": "2:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your journey into semantic HTML. In part two, explore additional tags that enrich the semantics of your web pages."
          },
          {
            "title": "Web Crawler",
            "video": "/htmlcourse/web_crawler.m3u8",
            "duration": "3:40",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Understand how websites are ranked to top by web crawling. Understand the fundamentals of how search engines navigate and index content across the vast web."
          },
          {
            "title": "Quiz 3",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the purpose of 'Text tags' in HTML?",
                "options": [
                  "To create lists of items",
                  "To structure webpage content",
                  "To manipulate text formatting",
                  "To embed multimedia elements"
                ],
                "questionId": 108
              },
              {
                "question": "Which HTML tags are used for creating ordered and unordered lists?",
                "options": [
                  "<ol> and <ul>",
                  "<ul> and <li>",
                  "<list> and <item>",
                  "<order> and <item>"
                ],
                "questionId": 109
              },
              {
                "question": "What does the 'Anchor tag' (<a>) primarily facilitate in HTML?",
                "options": [
                  "Embedding images",
                  "Creating hyperlinks",
                  "Styling webpage elements",
                  "Inserting audio content"
                ],
                "questionId": 110
              },
              {
                "question": "What does the term 'Web Crawler' refer to in the context of HTML?",
                "options": [
                  "A spider-like creature",
                  "A tool for organizing files",
                  "A script for automating tasks",
                  "A program for navigating and indexing web content"
                ],
                "questionId": 111
              }
            ]
          },
          {
            "title": "More HTML tags",
            "video": "/htmlcourse/more_html_tags.m3u8",
            "duration": "1:39",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Expand your HTML toolkit with additional tags. Discover tags that cater to specific needs, enhancing the richness of your web pages."
          },
          {
            "title": "Project 1 - 1",
            "video": "/htmlcourse/project_1_1.m3u8",
            "duration": "7:38",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Apply your newfound HTML skills in a practical project. In part one, embark on a hands-on project to where we build a small FAQ page by using semantic HTML tags and using font awesome icons."
          },
          {
            "title": "Project 1 - 2",
            "video": "/htmlcourse/project_1_2.m3u8",
            "duration": "8:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your project journey in part two. Apply advanced HTML concepts and solidify your skills through a comprehensive project that showcases your abilities."
          },
          {
            "title": "Project 2",
            "video": "/htmlcourse/project_2.m3u8",
            "duration": "9:05",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Level up with an in-depth project. Demonstrate your proficiency in HTML as you undertake a larger-scale project, integrating various elements learned throughout the course."
          },
          {
            "title": "Web Hosting",
            "video": "/htmlcourse/web_hosting.m3u8",
            "duration": "6:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unravel the mysteries of web hosting. Learn how to take your web projects live by exploring different hosting options and understanding the basics of site configurations."
          },
          {
            "title": "CSS",
            "video": "/htmlcourse/intro_to_css.m3u8",
            "duration": "8:22",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Transition seamlessly from HTML to CSS. In this module, delve into the world of Cascading Style Sheets to add style and visual appeal to your web pages."
          },
          {
            "title": "HTML and Project Quiz",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "In 'Project 1 - 1', what HTML semantic tags were primarily used for creating a FAQ page?",
                "options": [
                  "<div> and <span>",
                  "<details> and <summary>",
                  "<ul> and <li>",
                  "<section> and <article>"
                ],
                "questionId": 112
              },
              {
                "question": "In 'Project 1 - 2', how did you make an image float using HTML?",
                "options": [
                  "Applied 'float' property in CSS",
                  "Used 'position: absolute'",
                  "Set 'display: inline-block'",
                  "Inserted a 'float' tag around the image"
                ],
                "questionId": 113
              },
              {
                "question": "What was the focus of 'Project 2' in your HTML course?",
                "options": [
                  "Creating an FAQ page",
                  "Designing a personal portfolio",
                  "Developing a basic app documentation",
                  "Implementing a chat application"
                ],
                "questionId": 114
              },
              {
                "question": "What is web hosting in the context of web development?",
                "options": [
                  "A service that allows individuals and organizations to make their websites accessible via the World Wide Web",
                  "A method of creating dynamic web pages",
                  "A technique for optimizing website performance",
                  "A module covered in the CSS section"
                ],
                "questionId": 115
              }
            ]
          },
          {
            "title": "Wrap up",
            "video": "/htmlcourse/wrap_up.m3u8",
            "duration": "2:07",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Congratulations on completing the course! In this final module, recap your journey, reflect on your accomplishments, and gain insights into the next steps in your web development adventure."
          }
        ],
        "language": "Tamil",
        "requirements": [
          "Text editor for writing HTML code",
          "Web Browser to view the output of HTML code"
        ],
        "author": "N.U.Thejas hari",
        "authorInsta": "https://www.instagram.com/nuthejashari/",
        "meetingLink": "",
        "whatsappGroup": "",
        "recordedVideo": "",
        "courseId": "101110",
        "locked": false,
        "videos": "35",
        "projects": "2",
        "duration": "4 Hours",
        "paid": "",
        "cancellable": false,
        "createdAt": "2024-01-01T06:43:50.699Z",
        "updatedAt": "2024-01-01T06:43:50.699Z",
        "__v": 0,
        "completed": false,
        "enrolledOn": "2024-01-07T19:25:55.926Z",
        "certificate": "",
        "name": "Priya Dharsini",
        "userId": "649b0ef8e7afb262f2ece7ad",
        "progress": 0,
        "allNotes": []
      }
    ],
    "enrolledCoursesId": [
      "101110"
    ]
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649b18fa7d0f5ee65d3204ef",
    "name": "Id Number 16",
    "email": "inumber447@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Novice",
    "registeredWorkshops": [
      "649d2564e25a8051582df4ba"
    ],
    "createdAt": "2023-06-27T17:14:34.727Z",
    "updatedAt": "2023-06-29T07:08:28.222Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649b19417d0f5ee65d3204f8",
    "name": "Xai Queries",
    "email": "xai360queries@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_h03RI0oEP",
    "level": "Novice",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T17:15:45.534Z",
    "updatedAt": "2023-06-27T17:15:55.076Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649b194bc353a419c79a5228",
    "name": "Ramya Shree",
    "email": "ramyashreesampath@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T17:15:55.714Z",
    "updatedAt": "2023-06-27T17:16:17.621Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649b1a0a7d0f5ee65d320505",
    "name": "K.S. Achuthen",
    "email": "k.s.achuthen@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T17:19:06.323Z",
    "updatedAt": "2023-06-27T17:19:48.643Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649b207fc82a817041f88987",
    "name": "Prin Taehyung",
    "email": "princiajo7@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Novice",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-27T17:46:39.983Z",
    "updatedAt": "2023-06-27T17:48:06.672Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649b8a82e569a5e4b8eb82d1",
    "name": "Revathi .C",
    "email": "revathichinnasamycs@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-28T01:18:58.003Z",
    "updatedAt": "2023-06-28T01:19:12.604Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649b9add614745a8eeb65b06",
    "name": "Haripriya M",
    "email": "haripriyasathya08@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695",
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-28T02:28:45.041Z",
    "updatedAt": "2023-06-30T09:46:37.602Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649bafd3f8fe4fc2d8bb002f",
    "name": "Jenisadevi U",
    "email": "suryaamirtha28@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Intermediate",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-28T03:58:11.004Z",
    "updatedAt": "2023-06-28T03:58:27.370Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649bb02464b1c6d8c8632773",
    "name": "22SPCS06 MANIKANDAN S",
    "email": "22spcs06@tcarts.in",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-28T03:59:32.564Z",
    "updatedAt": "2023-06-28T03:59:53.203Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649bcf89c4d505a7ba42166b",
    "name": "Kowshik Narayan",
    "email": "kowshiknarayan274@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Novice",
    "registeredWorkshops": [],
    "createdAt": "2023-06-28T06:13:29.183Z",
    "updatedAt": "2023-06-28T06:13:29.183Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649bd528cc0158d47764c24e",
    "name": "S. Preethi",
    "email": "preethichan2543@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Novice",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695",
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-28T06:37:28.449Z",
    "updatedAt": "2023-06-29T17:41:03.396Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649be065bb90061d06b4f75b",
    "name": "Vignesh Vignesh",
    "email": "vignesh2105007@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "6495e8f59ee6c12361d226e2"
    ],
    "createdAt": "2023-06-28T07:25:25.395Z",
    "updatedAt": "2023-06-28T07:25:38.642Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649bfc7ffa307cab5b1d6ed5",
    "name": "Nagaraj _46",
    "email": "nagarajsivalingam1234@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [],
    "createdAt": "2023-06-28T09:25:19.515Z",
    "updatedAt": "2023-06-28T09:25:19.515Z",
    "__v": 0
  },
  {
    "_id": "649c17e9a88a1f489f52b3ce",
    "name": "tradity acc",
    "email": "tradity555@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Advanced",
    "registeredWorkshops": [],
    "createdAt": "2023-06-28T11:22:17.282Z",
    "updatedAt": "2024-01-24T12:00:56.418Z",
    "__v": 0,
    "enrolledCoursesData": [
      {
        "_id": "65925f26f5f0ffa3b0e38586",
        "title": "Basics of Networking and HTML Beginner to Advanced Course",
        "description": "Learn web development fundamentals, covering frontend, backend, and database structures. Explore client-server dynamics, APIs, various IP types, DNS workings, and HTML essentials with an introduction to CSS for crafting interactive websites",
        "image": "/html.png",
        "content": [
          {
            "title": "Course Introduction",
            "video": "/htmlcourse/intro.m3u8",
            "duration": "0:32",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Welcome to the course! In this introductory module, you'll get a glimpse of what's in store. We'll outline the course structure, set expectations, and highlight the outcomes you can anticipate upon completion."
          },
          {
            "title": "Expectations & Outcomes",
            "video": "/htmlcourse/CourseOutcomes&Scope.m3u8",
            "duration": "1:21",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Understand the goals of this course and what you'll gain by the end. We'll discuss the skills you'll acquire, the knowledge you'll gain, and how it will benefit you in the realm of web development and networking."
          },
          {
            "title": "Web Development & Scopes",
            "video": "/htmlcourse/WebDevelopment&Scopes.m3u8",
            "duration": "8:54",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the vast landscape of web development careers. Learn about the diverse scopes and job opportunities available in the industry, providing you with insights to shape your career path."
          },
          {
            "title": "Frontend Backend Architecture",
            "video": "/htmlcourse/FrontendBackendArchitecture.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Delve into the intricacies of frontend and backend architecture. Understand how these components work together to create seamless and responsive web applications, laying the foundation for your development journey."
          },
          {
            "title": "Database",
            "video": "/htmlcourse/database.m3u8",
            "duration": "1:07",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Uncover the importance of databases in web development. Learn what are the types of database available and the free cloud services providing free database for developers."
          },
          {
            "title": "IP & Types",
            "video": "/htmlcourse/ip internal & external.m3u8",
            "duration": "9:35",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Navigate the world of Internet Protocol (IP) addresses. Gain a comprehensive understanding of IP types and their significance in the networking landscape."
          },
          {
            "title": "IPv4 vs IPv6",
            "video": "/htmlcourse/ipv4 vs ipv6.m3u8",
            "duration": "7:12",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Compare IPv4 and IPv6, the two versions of the Internet Protocol. Understand the differences and advancements that IPv6 brings to address the limitations of IPv4."
          },
          {
            "title": "Static vs Dynamic IP",
            "video": "/htmlcourse/static_vs_dynamic_ip.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the distinction between static and dynamic IP addresses. Learn how each type is assigned and its impact on network configurations."
          },
          {
            "title": "Quiz 1",
            "quiz": true,
            "locked": false,
            "completed": false,
            "questions": [
              {
                "question": "What does \"frontend\" refer to in web development?",
                "options": [
                  "The part of a website users interact with",
                  "The server-side logic of a website",
                  "The database management system",
                  "The network infrastructure"
                ],
                "questionId": 100
              },
              {
                "question": "What is the primary role of \"backend\" in web development?",
                "options": [
                  "Managing the user interface",
                  "Handling server-side logic and databases",
                  "Designing responsive layouts",
                  "Implementing frontend styles"
                ],
                "questionId": 101
              },
              {
                "question": "What does \"IP\" stand for in networking?",
                "options": [
                  "Internet Provider",
                  "Internet Protocol",
                  "Information Processing",
                  "Interface Port"
                ],
                "questionId": 102
              },
              {
                "question": " What is the total range of each octet in an IPv4 address?",
                "options": [
                  "0-100",
                  "0-127",
                  "0-255",
                  "0-64"
                ],
                "questionId": 103
              }
            ]
          },
          {
            "title": "DNS",
            "video": "/htmlcourse/dns.m3u8",
            "duration": "10:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into the Domain Name System (DNS) and unravel the process of translating domain names to IP addresses. Explore the role DNS plays in making web browsing seamless."
          },
          {
            "title": "What is API?",
            "video": "/htmlcourse/api.m3u8",
            "duration": "3:12",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Application Programming Interfaces (APIs). Understand their significance in web development, facilitating communication between different software systems."
          },
          {
            "title": "What is HTML",
            "video": "/htmlcourse/what_is_html.m3u8",
            "duration": "2:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Begin your journey into the core of web development with HTML. Learn the basics of structuring web content and creating the foundation for interactive websites."
          },
          {
            "title": "HTML Page Structure",
            "video": "/htmlcourse/HTML_page_structure.m3u8",
            "duration": "3:33",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the art of organizing your web pages. Explore HTML tags that define the structure of a webpage, providing a solid foundation for your coding endeavors."
          },
          {
            "title": "Quiz 2",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the primary function of DNS in web development?",
                "options": [
                  "To design responsive user interfaces",
                  "To translate domain names to IP addresses",
                  "To manage server-side logic",
                  "To encrypt website data"
                ],
                "questionId": 104
              },
              {
                "question": "What does 'API' stand for in web development?",
                "options": [
                  "Advanced Programming Interface",
                  "Application Programming Interface",
                  "Automated Processing Interface",
                  "Advanced Protocol Integration"
                ],
                "questionId": 105
              },
              {
                "question": "What is the main markup language used for creating web pages??",
                "options": [
                  "XML",
                  "XAMPP",
                  "HTML",
                  "CSS"
                ],
                "questionId": 106
              },
              {
                "question": "What does 'HTML' stand for?",
                "options": [
                  "Hyper Transfer Markup Language",
                  "High-Level Text Management Language",
                  "Hyperlink and Text Management Language",
                  "HyperText Markup Language"
                ],
                "questionId": 107
              }
            ]
          },
          {
            "title": "Text tags",
            "video": "/htmlcourse/text_tags.m3u8",
            "duration": "18:55",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore the world of text manipulation in HTML. Discover tags that enhance the presentation of textual content on your web pages."
          },
          {
            "title": "List tags",
            "video": "/htmlcourse/list_tags.m3u8",
            "duration": "5:29",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore HTML's list tags to efficiently structure information. Learn how to create ordered and unordered lists for better content organization."
          },
          {
            "title": "Anchor tag",
            "video": "/htmlcourse/Anchor_tag.m3u8",
            "duration": "7:53",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unlock the power of hyperlinking with the anchor tag. Understand how to connect different pages and resources within your website."
          },
          {
            "title": "Image tag",
            "video": "/htmlcourse/image_tag.m3u8",
            "duration": "6:48",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Bring visual appeal to your web pages with the image tag. Learn how to integrate images seamlessly into your HTML content."
          },
          {
            "title": "Audio & video tag",
            "video": "/htmlcourse/audio_and_video_tag.m3u8",
            "duration": "7:56",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user engagement with multimedia elements. Explore the audio and video tags to incorporate media seamlessly into your web projects."
          },
          {
            "title": "iframe & embed tag",
            "video": "/htmlcourse/iframe_and_embed_tag.m3u8",
            "duration": "7:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Harness the capabilities of iframe and embed tags. Understand how these tags enable the integration of external content within your web pages."
          },
          {
            "title": "Div tag",
            "video": "/htmlcourse/div_tag.m3u8",
            "duration": "3:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the versatile div tag. Learn how it acts as a container, allowing you to structure and style your HTML content effectively."
          },
          {
            "title": "Input tags",
            "video": "/htmlcourse/input_tag.m3u8",
            "duration": "14:01",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into user interaction with HTML input tags. Explore various input types and understand how they enable user data input."
          },
          {
            "title": "Button tag",
            "video": "/htmlcourse/button_tag.m3u8",
            "duration": "1:43",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user experience with interactive buttons. Learn the ins and outs of the button tag and its various applications."
          },
          {
            "title": "Form part 1",
            "video": "/htmlcourse/form_tag_1.m3u8",
            "duration": "9:09",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embark on the journey of web forms. In part one, explore the essential elements that make up a form, setting the stage for user data collection."
          },
          {
            "title": "Form part 2",
            "video": "/htmlcourse/form_tag_2.m3u8",
            "duration": "8:00",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Delve deeper into the world of web forms. In part two, learn about form validation, submission methods, and enhance the functionality of your forms."
          },
          {
            "title": "Table tag",
            "video": "/htmlcourse/table_tag.m3u8",
            "duration": "4:42",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Uncover the power of HTML tables. Learn how to structure and display data in a tabular format for improved readability."
          },
          {
            "title": "Semantic HTML - 1",
            "video": "/htmlcourse/semantic_html_1.m3u8",
            "duration": "5:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embrace semantic HTML for enhanced accessibility and SEO. In part one, understand how semantic tags contribute to the meaning and structure of your content."
          },
          {
            "title": "Semantic HTML - 2",
            "video": "/htmlcourse/semantic_html_2.m3u8",
            "duration": "2:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your journey into semantic HTML. In part two, explore additional tags that enrich the semantics of your web pages."
          },
          {
            "title": "Web Crawler",
            "video": "/htmlcourse/web_crawler.m3u8",
            "duration": "3:40",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Understand how websites are ranked to top by web crawling. Understand the fundamentals of how search engines navigate and index content across the vast web."
          },
          {
            "title": "Quiz 3",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the purpose of 'Text tags' in HTML?",
                "options": [
                  "To create lists of items",
                  "To structure webpage content",
                  "To manipulate text formatting",
                  "To embed multimedia elements"
                ],
                "questionId": 108
              },
              {
                "question": "Which HTML tags are used for creating ordered and unordered lists?",
                "options": [
                  "<ol> and <ul>",
                  "<ul> and <li>",
                  "<list> and <item>",
                  "<order> and <item>"
                ],
                "questionId": 109
              },
              {
                "question": "What does the 'Anchor tag' (<a>) primarily facilitate in HTML?",
                "options": [
                  "Embedding images",
                  "Creating hyperlinks",
                  "Styling webpage elements",
                  "Inserting audio content"
                ],
                "questionId": 110
              },
              {
                "question": "What does the term 'Web Crawler' refer to in the context of HTML?",
                "options": [
                  "A spider-like creature",
                  "A tool for organizing files",
                  "A script for automating tasks",
                  "A program for navigating and indexing web content"
                ],
                "questionId": 111
              }
            ]
          },
          {
            "title": "More HTML tags",
            "video": "/htmlcourse/more_html_tags.m3u8",
            "duration": "1:39",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Expand your HTML toolkit with additional tags. Discover tags that cater to specific needs, enhancing the richness of your web pages."
          },
          {
            "title": "Project 1 - 1",
            "video": "/htmlcourse/project_1_1.m3u8",
            "duration": "7:38",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Apply your newfound HTML skills in a practical project. In part one, embark on a hands-on project to where we build a small FAQ page by using semantic HTML tags and using font awesome icons."
          },
          {
            "title": "Project 1 - 2",
            "video": "/htmlcourse/project_1_2.m3u8",
            "duration": "8:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your project journey in part two. Apply advanced HTML concepts and solidify your skills through a comprehensive project that showcases your abilities."
          },
          {
            "title": "Project 2",
            "video": "/htmlcourse/project_2.m3u8",
            "duration": "9:05",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Level up with an in-depth project. Demonstrate your proficiency in HTML as you undertake a larger-scale project, integrating various elements learned throughout the course."
          },
          {
            "title": "Web Hosting",
            "video": "/htmlcourse/web_hosting.m3u8",
            "duration": "6:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unravel the mysteries of web hosting. Learn how to take your web projects live by exploring different hosting options and understanding the basics of site configurations."
          },
          {
            "title": "CSS",
            "video": "/htmlcourse/intro_to_css.m3u8",
            "duration": "8:22",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Transition seamlessly from HTML to CSS. In this module, delve into the world of Cascading Style Sheets to add style and visual appeal to your web pages."
          },
          {
            "title": "HTML and Project Quiz",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "In 'Project 1 - 1', what HTML semantic tags were primarily used for creating a FAQ page?",
                "options": [
                  "<div> and <span>",
                  "<details> and <summary>",
                  "<ul> and <li>",
                  "<section> and <article>"
                ],
                "questionId": 112
              },
              {
                "question": "In 'Project 1 - 2', how did you make an image float using HTML?",
                "options": [
                  "Applied 'float' property in CSS",
                  "Used 'position: absolute'",
                  "Set 'display: inline-block'",
                  "Inserted a 'float' tag around the image"
                ],
                "questionId": 113
              },
              {
                "question": "What was the focus of 'Project 2' in your HTML course?",
                "options": [
                  "Creating an FAQ page",
                  "Designing a personal portfolio",
                  "Developing a basic app documentation",
                  "Implementing a chat application"
                ],
                "questionId": 114
              },
              {
                "question": "What is web hosting in the context of web development?",
                "options": [
                  "A service that allows individuals and organizations to make their websites accessible via the World Wide Web",
                  "A method of creating dynamic web pages",
                  "A technique for optimizing website performance",
                  "A module covered in the CSS section"
                ],
                "questionId": 115
              }
            ]
          },
          {
            "title": "Wrap up",
            "video": "/htmlcourse/wrap_up.m3u8",
            "duration": "2:07",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Congratulations on completing the course! In this final module, recap your journey, reflect on your accomplishments, and gain insights into the next steps in your web development adventure."
          }
        ],
        "language": "Tamil",
        "requirements": [
          "Text editor for writing HTML code",
          "Web Browser to view the output of HTML code"
        ],
        "author": "N.U.Thejas hari",
        "authorInsta": "https://www.instagram.com/nuthejashari/",
        "meetingLink": "",
        "whatsappGroup": "",
        "recordedVideo": "",
        "courseId": "101110",
        "locked": false,
        "videos": "35",
        "projects": "2",
        "duration": "4 Hours",
        "paid": "",
        "cancellable": false,
        "createdAt": "2024-01-01T06:43:50.699Z",
        "updatedAt": "2024-01-01T06:43:50.699Z",
        "__v": 0,
        "completed": false,
        "enrolledOn": "2024-01-24T12:00:21.856Z",
        "certificate": "",
        "name": "tradity acc",
        "userId": "649c17e9a88a1f489f52b3ce",
        "progress": 0,
        "allNotes": []
      }
    ],
    "enrolledCoursesId": [
      "101110"
    ]
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649c2e5fc554adfdba539dff",
    "name": "KALAIMATHI MUNIVEL (RA2211003011830)",
    "email": "km8733@srmist.edu.in",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Novice",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695"
    ],
    "createdAt": "2023-06-28T12:58:07.413Z",
    "updatedAt": "2023-06-30T14:33:49.596Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649c3d2183f4e2a18f4a8a3c",
    "name": "21CY028 Manikandan.C",
    "email": "manikandanmani8473@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [],
    "createdAt": "2023-06-28T14:01:05.931Z",
    "updatedAt": "2023-07-03T20:15:20.665Z",
    "__v": 0,
    "certificates": {
      "649d30748595dbbe4fb93695": "https://ik.imagekit.io/d3kzbpbila/12_b-dnUGVyW.png?updatedAt=1688414233393"
    }
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649c4366ab60427cdbe9ea10",
    "name": "Venkatesh J.M.",
    "email": "venkatesh91204@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695"
    ],
    "createdAt": "2023-06-28T14:27:50.306Z",
    "updatedAt": "2023-06-29T13:50:36.184Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649d27efc92cd78e5937c921",
    "name": "S Hemanth",
    "email": "hemanthhms70@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Novice",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695",
      "649d2564e25a8051582df4ba"
    ],
    "createdAt": "2023-06-29T06:42:55.859Z",
    "updatedAt": "2023-07-03T20:14:45.276Z",
    "__v": 0,
    "certificates": {
      "649d30748595dbbe4fb93695": "https://ik.imagekit.io/d3kzbpbila/7_hyWanoJNgn.png?updatedAt=1688414228728"
    }
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649d2e724d231c940b204309",
    "name": "3EC005 DHANASEKAR P",
    "email": "dhanasekarp09@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Novice",
    "registeredWorkshops": [
      "649d2564e25a8051582df4ba"
    ],
    "createdAt": "2023-06-29T07:10:42.095Z",
    "updatedAt": "2023-06-29T07:10:53.240Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649d6786c69cb598bb97edc1",
    "name": "Karthi 004",
    "email": "vishnukarthi674@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Intermediate",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695"
    ],
    "createdAt": "2023-06-29T11:14:14.906Z",
    "updatedAt": "2023-06-29T11:14:23.716Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649d8d7599c816572851a4b2",
    "name": "Barathi hendrick",
    "email": "barathihendrick@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Novice",
    "registeredWorkshops": [],
    "createdAt": "2023-06-29T13:56:05.014Z",
    "updatedAt": "2023-06-29T13:56:05.014Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649db4940857ff5f55c5f6f0",
    "name": "Praveenkumar",
    "email": "3214praveen@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_SZF9tUBEn",
    "level": "Novice",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695"
    ],
    "createdAt": "2023-06-29T16:43:00.557Z",
    "updatedAt": "2023-06-29T16:44:23.576Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649dc2c61b33174c509d2f5a",
    "name": "Aswin Kumar",
    "email": "aswinkumar2004136@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695"
    ],
    "createdAt": "2023-06-29T17:43:34.057Z",
    "updatedAt": "2023-06-29T17:43:40.755Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649dc4af0936923281f8b94b",
    "name": "Ashok Kumaran",
    "email": "ashokkumaran38@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695"
    ],
    "createdAt": "2023-06-29T17:51:43.823Z",
    "updatedAt": "2023-06-29T17:52:49.011Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649dd0321d0371e7ff3117d4",
    "name": "Leo Messi",
    "email": "leor8offi@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_Ko3jo1oIq",
    "level": "Beginner",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695"
    ],
    "createdAt": "2023-06-29T18:40:50.340Z",
    "updatedAt": "2023-06-29T18:42:06.966Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649e32af5cfd5fc6951679b6",
    "name": "Karthikai Kumaran",
    "email": "karthikaikumaran299@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695"
    ],
    "createdAt": "2023-06-30T01:41:03.307Z",
    "updatedAt": "2023-06-30T01:42:10.144Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649e33865cfd5fc6951679c1",
    "name": "BHAVANEESHWARAN S",
    "email": "727722euci008@skcet.ac.in",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695"
    ],
    "createdAt": "2023-06-30T01:44:38.353Z",
    "updatedAt": "2023-06-30T01:44:49.241Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649e344f7c40332dcca7485e",
    "name": "Ravi Shankar K.S",
    "email": "ayswarym04@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695"
    ],
    "createdAt": "2023-06-30T01:47:59.995Z",
    "updatedAt": "2023-06-30T01:48:10.184Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649e3f3945fa534afe51f0c5",
    "name": "kvaasan kvaasan",
    "email": "kvaasank@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695"
    ],
    "createdAt": "2023-06-30T02:34:33.821Z",
    "updatedAt": "2023-06-30T02:34:44.959Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649e428823385a92e662bb4c",
    "name": "Vigneshkumar",
    "email": "vigneshpanneer7@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695"
    ],
    "createdAt": "2023-06-30T02:48:40.363Z",
    "updatedAt": "2023-06-30T02:48:53.416Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649e58af2ce735ab48d63630",
    "name": "Sandeep Kumar",
    "email": "lyricsandeep@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [],
    "createdAt": "2023-06-30T04:23:11.064Z",
    "updatedAt": "2023-06-30T04:23:11.064Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649e5eecc1e01b173035b6d9",
    "name": "Naveen kumar",
    "email": "havocnaveen74@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695"
    ],
    "createdAt": "2023-06-30T04:49:48.156Z",
    "updatedAt": "2023-06-30T04:50:34.589Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649e8925bf34e2d77da8a27c",
    "name": "Vishwa",
    "email": "vishwakk17@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Novice",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695"
    ],
    "createdAt": "2023-06-30T07:49:57.789Z",
    "updatedAt": "2023-06-30T07:50:07.011Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649eaf9491551872f526b86e",
    "name": "Muthu Vignesh",
    "email": "muthuvigneshh50@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Novice",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695"
    ],
    "createdAt": "2023-06-30T10:33:56.809Z",
    "updatedAt": "2023-07-03T20:15:33.445Z",
    "__v": 0,
    "certificates": {
      "649d30748595dbbe4fb93695": "https://ik.imagekit.io/d3kzbpbila/13_e1GUzQzmn.png?updatedAt=1688414233537"
    }
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649eb01106a74eb026fac78f",
    "name": "Brindha D",
    "email": "brindhaduraisamy02@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Novice",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695"
    ],
    "createdAt": "2023-06-30T10:36:01.797Z",
    "updatedAt": "2023-06-30T10:36:30.498Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649eb160ddf5a9b055911f3f",
    "name": "Kathir Arul",
    "email": "arul9597499075@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Advanced",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695"
    ],
    "createdAt": "2023-06-30T10:41:36.600Z",
    "updatedAt": "2023-06-30T10:41:44.537Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649eb2a0ddf5a9b055911f54",
    "name": "Kishore M",
    "email": "saikishore1848@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695"
    ],
    "createdAt": "2023-06-30T10:46:56.658Z",
    "updatedAt": "2023-06-30T10:47:25.092Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649ed179e73108003d8cec8e",
    "name": "Amrees",
    "email": "amrees791@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695"
    ],
    "createdAt": "2023-06-30T12:58:33.477Z",
    "updatedAt": "2023-06-30T12:58:59.431Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649ed9ee263f2a84f066cd5b",
    "name": "Vaishu Vaishu",
    "email": "vaishuvaishu1231@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695"
    ],
    "createdAt": "2023-06-30T13:34:38.162Z",
    "updatedAt": "2023-06-30T13:34:50.318Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649edd770695c2164c99594c",
    "name": "BURNER FF",
    "email": "dgamers343@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695"
    ],
    "createdAt": "2023-06-30T13:49:43.337Z",
    "updatedAt": "2023-06-30T13:49:53.330Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649ee1980695c2164c995955",
    "name": "Thiru Murugan",
    "email": "thirusp68@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695"
    ],
    "createdAt": "2023-06-30T14:07:20.529Z",
    "updatedAt": "2023-06-30T14:08:34.117Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649ee4e10695c2164c99595e",
    "name": "deepan raja",
    "email": "deepan7raja@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_A3yImEqpA",
    "level": "Intermediate",
    "registeredWorkshops": [],
    "createdAt": "2023-06-30T14:21:21.003Z",
    "updatedAt": "2023-06-30T14:21:21.003Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649ee7c215b80968a9d2b906",
    "name": "MUKESH SARAVANAN",
    "email": "mukeshsaravanan2052@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695"
    ],
    "createdAt": "2023-06-30T14:33:38.031Z",
    "updatedAt": "2023-06-30T14:34:01.894Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649ee9c7f1e8ff8551fa205d",
    "name": "Janani Karunakaran",
    "email": "jananikarunakaran200611@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695"
    ],
    "createdAt": "2023-06-30T14:42:15.667Z",
    "updatedAt": "2023-07-03T20:15:14.031Z",
    "__v": 0,
    "certificates": {
      "649d30748595dbbe4fb93695": "https://ik.imagekit.io/d3kzbpbila/6_yulvUWDl4.png?updatedAt=1688414228620"
    }
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649eed5715b80968a9d2b918",
    "name": "It's me Vishnu",
    "email": "vishnu14082000@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695"
    ],
    "createdAt": "2023-06-30T14:57:27.093Z",
    "updatedAt": "2023-07-03T20:13:06.349Z",
    "__v": 0,
    "certificates": {
      "649d30748595dbbe4fb93695": "https://ik.imagekit.io/d3kzbpbila/14_rf4OPafGH.png?updatedAt=1688414137647"
    }
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649f01a958e5c8256b61f25d",
    "name": "Dk Deepak",
    "email": "dkdeepak2808@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695"
    ],
    "createdAt": "2023-06-30T16:24:09.539Z",
    "updatedAt": "2023-06-30T16:24:28.230Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649f0e6951ee46d4963c63dc",
    "name": "Syed Shahid",
    "email": "shahidsyed967@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695"
    ],
    "createdAt": "2023-06-30T17:18:33.959Z",
    "updatedAt": "2023-06-30T17:19:59.526Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649f16f9a8c7517c0a0654af",
    "name": "thilo nattanmai",
    "email": "thilonattanmai1507@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Novice",
    "registeredWorkshops": [],
    "createdAt": "2023-06-30T17:55:05.026Z",
    "updatedAt": "2023-06-30T17:55:05.026Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649f1bd60945164e1c3a5f94",
    "name": "SUDHAN S",
    "email": "sudhansasi01@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695"
    ],
    "createdAt": "2023-06-30T18:15:50.742Z",
    "updatedAt": "2023-06-30T18:16:22.517Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "649f3343d446264e18f83830",
    "name": "Arul mozhi Varman",
    "email": "arulmozhivarman50@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Novice",
    "registeredWorkshops": [
      "649d30748595dbbe4fb93695"
    ],
    "createdAt": "2023-06-30T19:55:47.906Z",
    "updatedAt": "2023-06-30T19:56:20.180Z",
    "__v": 0
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "64a01f1cb34e393cf020939a",
    "name": "Mohamed Abbas",
    "email": "mdabbas.it@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [],
    "createdAt": "2023-07-01T12:42:04.254Z",
    "updatedAt": "2023-07-01T12:42:04.254Z",
    "__v": 0
  },
  {
    "_id": "64a3fc636a55a3f872be9e8f",
    "name": "logesh rav",
    "email": "logiravi15@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65c4ec315a6594a5ea09b47f",
      "65b4bd00ed9d87145d75ebe2",
      "65b024e37df1619b5bfaef84"
    ],
    "createdAt": "2023-07-04T11:02:59.156Z",
    "updatedAt": "2024-02-08T15:46:16.945Z",
    "__v": 0,
    "enrolledCoursesData": [
      {
        "_id": "65925f26f5f0ffa3b0e38586",
        "title": "Basics of Networking and HTML Beginner to Advanced Course",
        "description": "Learn web development fundamentals, covering frontend, backend, and database structures. Explore client-server dynamics, APIs, various IP types, DNS workings, and HTML essentials with an introduction to CSS for crafting interactive websites",
        "image": "/html.png",
        "content": [
          {
            "title": "Course Introduction",
            "video": "/htmlcourse/intro.m3u8",
            "duration": "0:32",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Welcome to the course! In this introductory module, you'll get a glimpse of what's in store. We'll outline the course structure, set expectations, and highlight the outcomes you can anticipate upon completion."
          },
          {
            "title": "Expectations & Outcomes",
            "video": "/htmlcourse/CourseOutcomes&Scope.m3u8",
            "duration": "1:21",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Understand the goals of this course and what you'll gain by the end. We'll discuss the skills you'll acquire, the knowledge you'll gain, and how it will benefit you in the realm of web development and networking."
          },
          {
            "title": "Web Development & Scopes",
            "video": "/htmlcourse/WebDevelopment&Scopes.m3u8",
            "duration": "8:54",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Explore the vast landscape of web development careers. Learn about the diverse scopes and job opportunities available in the industry, providing you with insights to shape your career path."
          },
          {
            "title": "Frontend Backend Architecture",
            "video": "/htmlcourse/FrontendBackendArchitecture.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Delve into the intricacies of frontend and backend architecture. Understand how these components work together to create seamless and responsive web applications, laying the foundation for your development journey."
          },
          {
            "title": "Database",
            "video": "/htmlcourse/database.m3u8",
            "duration": "1:07",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Uncover the importance of databases in web development. Learn what are the types of database available and the free cloud services providing free database for developers."
          },
          {
            "title": "IP & Types",
            "video": "/htmlcourse/ip internal & external.m3u8",
            "duration": "9:35",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Navigate the world of Internet Protocol (IP) addresses. Gain a comprehensive understanding of IP types and their significance in the networking landscape."
          },
          {
            "title": "IPv4 vs IPv6",
            "video": "/htmlcourse/ipv4 vs ipv6.m3u8",
            "duration": "7:12",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Compare IPv4 and IPv6, the two versions of the Internet Protocol. Understand the differences and advancements that IPv6 brings to address the limitations of IPv4."
          },
          {
            "title": "Static vs Dynamic IP",
            "video": "/htmlcourse/static_vs_dynamic_ip.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Explore the distinction between static and dynamic IP addresses. Learn how each type is assigned and its impact on network configurations."
          },
          {
            "title": "Quiz 1",
            "quiz": true,
            "locked": false,
            "completed": true,
            "questions": [
              {
                "question": "What does \"frontend\" refer to in web development?",
                "options": [
                  "The part of a website users interact with",
                  "The server-side logic of a website",
                  "The database management system",
                  "The network infrastructure"
                ],
                "questionId": 100,
                "selected": "The part of a website users interact with",
                "wrong": false
              },
              {
                "question": "What is the primary role of \"backend\" in web development?",
                "options": [
                  "Managing the user interface",
                  "Handling server-side logic and databases",
                  "Designing responsive layouts",
                  "Implementing frontend styles"
                ],
                "questionId": 101,
                "selected": "Handling server-side logic and databases",
                "wrong": true
              },
              {
                "question": "What does \"IP\" stand for in networking?",
                "options": [
                  "Internet Provider",
                  "Internet Protocol",
                  "Information Processing",
                  "Interface Port"
                ],
                "questionId": 102,
                "selected": "Internet Protocol",
                "wrong": false
              },
              {
                "question": " What is the total range of each octet in an IPv4 address?",
                "options": [
                  "0-100",
                  "0-127",
                  "0-255",
                  "0-64"
                ],
                "questionId": 103,
                "selected": "0-255",
                "wrong": false
              }
            ],
            "everythingCorrect": false
          },
          {
            "title": "DNS",
            "video": "/htmlcourse/dns.m3u8",
            "duration": "10:11",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Dive into the Domain Name System (DNS) and unravel the process of translating domain names to IP addresses. Explore the role DNS plays in making web browsing seamless."
          },
          {
            "title": "What is API?",
            "video": "/htmlcourse/api.m3u8",
            "duration": "3:12",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Application Programming Interfaces (APIs). Understand their significance in web development, facilitating communication between different software systems."
          },
          {
            "title": "What is HTML",
            "video": "/htmlcourse/what_is_html.m3u8",
            "duration": "2:11",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Begin your journey into the core of web development with HTML. Learn the basics of structuring web content and creating the foundation for interactive websites."
          },
          {
            "title": "HTML Page Structure",
            "video": "/htmlcourse/HTML_page_structure.m3u8",
            "duration": "3:33",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Master the art of organizing your web pages. Explore HTML tags that define the structure of a webpage, providing a solid foundation for your coding endeavors."
          },
          {
            "title": "Quiz 2",
            "quiz": true,
            "locked": false,
            "completed": true,
            "questions": [
              {
                "question": "What is the primary function of DNS in web development?",
                "options": [
                  "To design responsive user interfaces",
                  "To translate domain names to IP addresses",
                  "To manage server-side logic",
                  "To encrypt website data"
                ],
                "questionId": 104,
                "selected": "To translate domain names to IP addresses"
              },
              {
                "question": "What does 'API' stand for in web development?",
                "options": [
                  "Advanced Programming Interface",
                  "Application Programming Interface",
                  "Automated Processing Interface",
                  "Advanced Protocol Integration"
                ],
                "questionId": 105,
                "selected": "Application Programming Interface"
              },
              {
                "question": "What is the main markup language used for creating web pages??",
                "options": [
                  "XML",
                  "XAMPP",
                  "HTML",
                  "CSS"
                ],
                "questionId": 106,
                "selected": "HTML"
              },
              {
                "question": "What does 'HTML' stand for?",
                "options": [
                  "Hyper Transfer Markup Language",
                  "High-Level Text Management Language",
                  "Hyperlink and Text Management Language",
                  "HyperText Markup Language"
                ],
                "questionId": 107,
                "selected": "HyperText Markup Language"
              }
            ]
          },
          {
            "title": "Text tags",
            "video": "/htmlcourse/text_tags.m3u8",
            "duration": "18:55",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Explore the world of text manipulation in HTML. Discover tags that enhance the presentation of textual content on your web pages."
          },
          {
            "title": "List tags",
            "video": "/htmlcourse/list_tags.m3u8",
            "duration": "5:29",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Explore HTML's list tags to efficiently structure information. Learn how to create ordered and unordered lists for better content organization."
          },
          {
            "title": "Anchor tag",
            "video": "/htmlcourse/Anchor_tag.m3u8",
            "duration": "7:53",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Unlock the power of hyperlinking with the anchor tag. Understand how to connect different pages and resources within your website."
          },
          {
            "title": "Image tag",
            "video": "/htmlcourse/image_tag.m3u8",
            "duration": "6:48",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Bring visual appeal to your web pages with the image tag. Learn how to integrate images seamlessly into your HTML content."
          },
          {
            "title": "Audio & video tag",
            "video": "/htmlcourse/audio_and_video_tag.m3u8",
            "duration": "7:56",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Elevate user engagement with multimedia elements. Explore the audio and video tags to incorporate media seamlessly into your web projects."
          },
          {
            "title": "iframe & embed tag",
            "video": "/htmlcourse/iframe_and_embed_tag.m3u8",
            "duration": "7:47",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Harness the capabilities of iframe and embed tags. Understand how these tags enable the integration of external content within your web pages."
          },
          {
            "title": "Div tag",
            "video": "/htmlcourse/div_tag.m3u8",
            "duration": "3:26",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Master the versatile div tag. Learn how it acts as a container, allowing you to structure and style your HTML content effectively."
          },
          {
            "title": "Input tags",
            "video": "/htmlcourse/input_tag.m3u8",
            "duration": "14:01",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Dive into user interaction with HTML input tags. Explore various input types and understand how they enable user data input."
          },
          {
            "title": "Button tag",
            "video": "/htmlcourse/button_tag.m3u8",
            "duration": "1:43",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Elevate user experience with interactive buttons. Learn the ins and outs of the button tag and its various applications."
          },
          {
            "title": "Form part 1",
            "video": "/htmlcourse/form_tag_1.m3u8",
            "duration": "9:09",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Embark on the journey of web forms. In part one, explore the essential elements that make up a form, setting the stage for user data collection."
          },
          {
            "title": "Form part 2",
            "video": "/htmlcourse/form_tag_2.m3u8",
            "duration": "8:00",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Delve deeper into the world of web forms. In part two, learn about form validation, submission methods, and enhance the functionality of your forms."
          },
          {
            "title": "Table tag",
            "video": "/htmlcourse/table_tag.m3u8",
            "duration": "4:42",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Uncover the power of HTML tables. Learn how to structure and display data in a tabular format for improved readability."
          },
          {
            "title": "Semantic HTML - 1",
            "video": "/htmlcourse/semantic_html_1.m3u8",
            "duration": "5:13",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Embrace semantic HTML for enhanced accessibility and SEO. In part one, understand how semantic tags contribute to the meaning and structure of your content."
          },
          {
            "title": "Semantic HTML - 2",
            "video": "/htmlcourse/semantic_html_2.m3u8",
            "duration": "2:13",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Continue your journey into semantic HTML. In part two, explore additional tags that enrich the semantics of your web pages."
          },
          {
            "title": "Web Crawler",
            "video": "/htmlcourse/web_crawler.m3u8",
            "duration": "3:40",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Understand how websites are ranked to top by web crawling. Understand the fundamentals of how search engines navigate and index content across the vast web."
          },
          {
            "title": "Quiz 3",
            "quiz": true,
            "locked": false,
            "completed": true,
            "questions": [
              {
                "question": "What is the purpose of 'Text tags' in HTML?",
                "options": [
                  "To create lists of items",
                  "To structure webpage content",
                  "To manipulate text formatting",
                  "To embed multimedia elements"
                ],
                "questionId": 108,
                "selected": "To manipulate text formatting",
                "wrong": false
              },
              {
                "question": "Which HTML tags are used for creating ordered and unordered lists?",
                "options": [
                  "<ol> and <ul>",
                  "<ul> and <li>",
                  "<list> and <item>",
                  "<order> and <item>"
                ],
                "questionId": 109,
                "selected": "<ol> and <ul>",
                "wrong": false
              },
              {
                "question": "What does the 'Anchor tag' (<a>) primarily facilitate in HTML?",
                "options": [
                  "Embedding images",
                  "Creating hyperlinks",
                  "Styling webpage elements",
                  "Inserting audio content"
                ],
                "questionId": 110,
                "selected": "Creating hyperlinks",
                "wrong": false
              },
              {
                "question": "What does the term 'Web Crawler' refer to in the context of HTML?",
                "options": [
                  "A spider-like creature",
                  "A tool for organizing files",
                  "A script for automating tasks",
                  "A program for navigating and indexing web content"
                ],
                "questionId": 111,
                "selected": "A program for navigating and indexing web content",
                "wrong": true
              }
            ],
            "everythingCorrect": false
          },
          {
            "title": "More HTML tags",
            "video": "/htmlcourse/more_html_tags.m3u8",
            "duration": "1:39",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Expand your HTML toolkit with additional tags. Discover tags that cater to specific needs, enhancing the richness of your web pages."
          },
          {
            "title": "Project 1 - 1",
            "video": "/htmlcourse/project_1_1.m3u8",
            "duration": "7:38",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Apply your newfound HTML skills in a practical project. In part one, embark on a hands-on project to where we build a small FAQ page by using semantic HTML tags and using font awesome icons."
          },
          {
            "title": "Project 1 - 2",
            "video": "/htmlcourse/project_1_2.m3u8",
            "duration": "8:47",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Continue your project journey in part two. Apply advanced HTML concepts and solidify your skills through a comprehensive project that showcases your abilities."
          },
          {
            "title": "Project 2",
            "video": "/htmlcourse/project_2.m3u8",
            "duration": "9:05",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Level up with an in-depth project. Demonstrate your proficiency in HTML as you undertake a larger-scale project, integrating various elements learned throughout the course."
          },
          {
            "title": "Web Hosting",
            "video": "/htmlcourse/web_hosting.m3u8",
            "duration": "6:26",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Unravel the mysteries of web hosting. Learn how to take your web projects live by exploring different hosting options and understanding the basics of site configurations."
          },
          {
            "title": "CSS",
            "video": "/htmlcourse/intro_to_css.m3u8",
            "duration": "8:22",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Transition seamlessly from HTML to CSS. In this module, delve into the world of Cascading Style Sheets to add style and visual appeal to your web pages."
          },
          {
            "title": "HTML and Project Quiz",
            "quiz": true,
            "locked": false,
            "completed": true,
            "questions": [
              {
                "question": "In 'Project 1 - 1', what HTML semantic tags were primarily used for creating a FAQ page?",
                "options": [
                  "<div> and <span>",
                  "<details> and <summary>",
                  "<ul> and <li>",
                  "<section> and <article>"
                ],
                "questionId": 112,
                "selected": "<details> and <summary>",
                "wrong": false
              },
              {
                "question": "In 'Project 1 - 2', how did you make an image float using HTML?",
                "options": [
                  "Applied 'float' property in CSS",
                  "Used 'position: absolute'",
                  "Set 'display: inline-block'",
                  "Inserted a 'float' tag around the image"
                ],
                "questionId": 113,
                "selected": "Applied 'float' property in CSS",
                "wrong": false
              },
              {
                "question": "What was the focus of 'Project 2' in your HTML course?",
                "options": [
                  "Creating an FAQ page",
                  "Designing a personal portfolio",
                  "Developing a basic app documentation",
                  "Implementing a chat application"
                ],
                "questionId": 114,
                "selected": "Developing a basic app documentation",
                "wrong": false
              },
              {
                "question": "What is web hosting in the context of web development?",
                "options": [
                  "A service that allows individuals and organizations to make their websites accessible via the World Wide Web",
                  "A method of creating dynamic web pages",
                  "A technique for optimizing website performance",
                  "A module covered in the CSS section"
                ],
                "questionId": 115,
                "selected": "A service that allows individuals and organizations to make their websites accessible via the World Wide Web",
                "wrong": true
              }
            ],
            "everythingCorrect": false
          },
          {
            "title": "Wrap up",
            "video": "/htmlcourse/wrap_up.m3u8",
            "duration": "2:07",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Congratulations on completing the course! In this final module, recap your journey, reflect on your accomplishments, and gain insights into the next steps in your web development adventure."
          }
        ],
        "language": "Tamil",
        "requirements": [
          "Text editor for writing HTML code",
          "Web Browser to view the output of HTML code"
        ],
        "author": "N.U.Thejas hari",
        "authorInsta": "https://www.instagram.com/nuthejashari/",
        "meetingLink": "",
        "whatsappGroup": "",
        "recordedVideo": "",
        "courseId": "101110",
        "locked": false,
        "videos": "35",
        "projects": "2",
        "duration": "4 Hours",
        "paid": "",
        "cancellable": false,
        "createdAt": "2024-01-01T06:43:50.699Z",
        "updatedAt": "2024-01-01T06:43:50.699Z",
        "__v": 0,
        "completed": false,
        "enrolledOn": "2024-01-01T15:54:48.246Z",
        "certificate": "",
        "name": "logesh rav",
        "userId": "64a3fc636a55a3f872be9e8f",
        "progress": 0,
        "allNotes": []
      }
    ],
    "enrolledCoursesId": [
      "101110"
    ],
    "certificates": {
      "101110": "https://ik.imagekit.io/d3kzbpbila/thejashari_gbOLYBp4g"
    }
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "64ac6da68ef937515a45f51b",
    "name": "22SPCS23 HEMALATHA T",
    "email": "22spcs23@tcarts.in",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Novice",
    "registeredWorkshops": [],
    "createdAt": "2023-07-10T20:44:22.650Z",
    "updatedAt": "2023-07-10T20:44:22.650Z",
    "__v": 0
  },
  {
    "_id": "64f73f5ffac9cb68f09a2477",
    "name": "Prasanna BP",
    "email": "prasannabp2004@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Intermediate",
    "registeredWorkshops": [
      "65c4ec315a6594a5ea09b47f",
      "65b4bd00ed9d87145d75ebe2",
      "65b024e37df1619b5bfaef84"
    ],
    "createdAt": "2023-09-05T14:46:55.226Z",
    "updatedAt": "2024-02-08T15:07:22.592Z",
    "__v": 0,
    "enrolledCoursesData": [
      {
        "_id": "65925f26f5f0ffa3b0e38586",
        "title": "Basics of Networking and HTML Beginner to Advanced Course",
        "description": "Learn web development fundamentals, covering frontend, backend, and database structures. Explore client-server dynamics, APIs, various IP types, DNS workings, and HTML essentials with an introduction to CSS for crafting interactive websites",
        "image": "/html.png",
        "content": [
          {
            "title": "Course Introduction",
            "video": "/htmlcourse/intro.m3u8",
            "duration": "0:32",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Welcome to the course! In this introductory module, you'll get a glimpse of what's in store. We'll outline the course structure, set expectations, and highlight the outcomes you can anticipate upon completion."
          },
          {
            "title": "Expectations & Outcomes",
            "video": "/htmlcourse/CourseOutcomes&Scope.m3u8",
            "duration": "1:21",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Understand the goals of this course and what you'll gain by the end. We'll discuss the skills you'll acquire, the knowledge you'll gain, and how it will benefit you in the realm of web development and networking."
          },
          {
            "title": "Web Development & Scopes",
            "video": "/htmlcourse/WebDevelopment&Scopes.m3u8",
            "duration": "8:54",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Explore the vast landscape of web development careers. Learn about the diverse scopes and job opportunities available in the industry, providing you with insights to shape your career path."
          },
          {
            "title": "Frontend Backend Architecture",
            "video": "/htmlcourse/FrontendBackendArchitecture.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Delve into the intricacies of frontend and backend architecture. Understand how these components work together to create seamless and responsive web applications, laying the foundation for your development journey."
          },
          {
            "title": "Database",
            "video": "/htmlcourse/database.m3u8",
            "duration": "1:07",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Uncover the importance of databases in web development. Learn what are the types of database available and the free cloud services providing free database for developers."
          },
          {
            "title": "IP & Types",
            "video": "/htmlcourse/ip internal & external.m3u8",
            "duration": "9:35",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Navigate the world of Internet Protocol (IP) addresses. Gain a comprehensive understanding of IP types and their significance in the networking landscape."
          },
          {
            "title": "IPv4 vs IPv6",
            "video": "/htmlcourse/ipv4 vs ipv6.m3u8",
            "duration": "7:12",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Compare IPv4 and IPv6, the two versions of the Internet Protocol. Understand the differences and advancements that IPv6 brings to address the limitations of IPv4."
          },
          {
            "title": "Static vs Dynamic IP",
            "video": "/htmlcourse/static_vs_dynamic_ip.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Explore the distinction between static and dynamic IP addresses. Learn how each type is assigned and its impact on network configurations."
          },
          {
            "title": "Quiz 1",
            "quiz": true,
            "locked": false,
            "completed": false,
            "questions": [
              {
                "question": "What does \"frontend\" refer to in web development?",
                "options": [
                  "The part of a website users interact with",
                  "The server-side logic of a website",
                  "The database management system",
                  "The network infrastructure"
                ],
                "questionId": 100
              },
              {
                "question": "What is the primary role of \"backend\" in web development?",
                "options": [
                  "Managing the user interface",
                  "Handling server-side logic and databases",
                  "Designing responsive layouts",
                  "Implementing frontend styles"
                ],
                "questionId": 101
              },
              {
                "question": "What does \"IP\" stand for in networking?",
                "options": [
                  "Internet Provider",
                  "Internet Protocol",
                  "Information Processing",
                  "Interface Port"
                ],
                "questionId": 102
              },
              {
                "question": " What is the total range of each octet in an IPv4 address?",
                "options": [
                  "0-100",
                  "0-127",
                  "0-255",
                  "0-64"
                ],
                "questionId": 103
              }
            ]
          },
          {
            "title": "DNS",
            "video": "/htmlcourse/dns.m3u8",
            "duration": "10:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into the Domain Name System (DNS) and unravel the process of translating domain names to IP addresses. Explore the role DNS plays in making web browsing seamless."
          },
          {
            "title": "What is API?",
            "video": "/htmlcourse/api.m3u8",
            "duration": "3:12",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Application Programming Interfaces (APIs). Understand their significance in web development, facilitating communication between different software systems."
          },
          {
            "title": "What is HTML",
            "video": "/htmlcourse/what_is_html.m3u8",
            "duration": "2:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Begin your journey into the core of web development with HTML. Learn the basics of structuring web content and creating the foundation for interactive websites."
          },
          {
            "title": "HTML Page Structure",
            "video": "/htmlcourse/HTML_page_structure.m3u8",
            "duration": "3:33",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the art of organizing your web pages. Explore HTML tags that define the structure of a webpage, providing a solid foundation for your coding endeavors."
          },
          {
            "title": "Quiz 2",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the primary function of DNS in web development?",
                "options": [
                  "To design responsive user interfaces",
                  "To translate domain names to IP addresses",
                  "To manage server-side logic",
                  "To encrypt website data"
                ],
                "questionId": 104
              },
              {
                "question": "What does 'API' stand for in web development?",
                "options": [
                  "Advanced Programming Interface",
                  "Application Programming Interface",
                  "Automated Processing Interface",
                  "Advanced Protocol Integration"
                ],
                "questionId": 105
              },
              {
                "question": "What is the main markup language used for creating web pages??",
                "options": [
                  "XML",
                  "XAMPP",
                  "HTML",
                  "CSS"
                ],
                "questionId": 106
              },
              {
                "question": "What does 'HTML' stand for?",
                "options": [
                  "Hyper Transfer Markup Language",
                  "High-Level Text Management Language",
                  "Hyperlink and Text Management Language",
                  "HyperText Markup Language"
                ],
                "questionId": 107
              }
            ]
          },
          {
            "title": "Text tags",
            "video": "/htmlcourse/text_tags.m3u8",
            "duration": "18:55",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore the world of text manipulation in HTML. Discover tags that enhance the presentation of textual content on your web pages."
          },
          {
            "title": "List tags",
            "video": "/htmlcourse/list_tags.m3u8",
            "duration": "5:29",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore HTML's list tags to efficiently structure information. Learn how to create ordered and unordered lists for better content organization."
          },
          {
            "title": "Anchor tag",
            "video": "/htmlcourse/Anchor_tag.m3u8",
            "duration": "7:53",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unlock the power of hyperlinking with the anchor tag. Understand how to connect different pages and resources within your website."
          },
          {
            "title": "Image tag",
            "video": "/htmlcourse/image_tag.m3u8",
            "duration": "6:48",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Bring visual appeal to your web pages with the image tag. Learn how to integrate images seamlessly into your HTML content."
          },
          {
            "title": "Audio & video tag",
            "video": "/htmlcourse/audio_and_video_tag.m3u8",
            "duration": "7:56",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user engagement with multimedia elements. Explore the audio and video tags to incorporate media seamlessly into your web projects."
          },
          {
            "title": "iframe & embed tag",
            "video": "/htmlcourse/iframe_and_embed_tag.m3u8",
            "duration": "7:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Harness the capabilities of iframe and embed tags. Understand how these tags enable the integration of external content within your web pages."
          },
          {
            "title": "Div tag",
            "video": "/htmlcourse/div_tag.m3u8",
            "duration": "3:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the versatile div tag. Learn how it acts as a container, allowing you to structure and style your HTML content effectively."
          },
          {
            "title": "Input tags",
            "video": "/htmlcourse/input_tag.m3u8",
            "duration": "14:01",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into user interaction with HTML input tags. Explore various input types and understand how they enable user data input."
          },
          {
            "title": "Button tag",
            "video": "/htmlcourse/button_tag.m3u8",
            "duration": "1:43",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user experience with interactive buttons. Learn the ins and outs of the button tag and its various applications."
          },
          {
            "title": "Form part 1",
            "video": "/htmlcourse/form_tag_1.m3u8",
            "duration": "9:09",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embark on the journey of web forms. In part one, explore the essential elements that make up a form, setting the stage for user data collection."
          },
          {
            "title": "Form part 2",
            "video": "/htmlcourse/form_tag_2.m3u8",
            "duration": "8:00",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Delve deeper into the world of web forms. In part two, learn about form validation, submission methods, and enhance the functionality of your forms."
          },
          {
            "title": "Table tag",
            "video": "/htmlcourse/table_tag.m3u8",
            "duration": "4:42",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Uncover the power of HTML tables. Learn how to structure and display data in a tabular format for improved readability."
          },
          {
            "title": "Semantic HTML - 1",
            "video": "/htmlcourse/semantic_html_1.m3u8",
            "duration": "5:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embrace semantic HTML for enhanced accessibility and SEO. In part one, understand how semantic tags contribute to the meaning and structure of your content."
          },
          {
            "title": "Semantic HTML - 2",
            "video": "/htmlcourse/semantic_html_2.m3u8",
            "duration": "2:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your journey into semantic HTML. In part two, explore additional tags that enrich the semantics of your web pages."
          },
          {
            "title": "Web Crawler",
            "video": "/htmlcourse/web_crawler.m3u8",
            "duration": "3:40",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Understand how websites are ranked to top by web crawling. Understand the fundamentals of how search engines navigate and index content across the vast web."
          },
          {
            "title": "Quiz 3",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the purpose of 'Text tags' in HTML?",
                "options": [
                  "To create lists of items",
                  "To structure webpage content",
                  "To manipulate text formatting",
                  "To embed multimedia elements"
                ],
                "questionId": 108
              },
              {
                "question": "Which HTML tags are used for creating ordered and unordered lists?",
                "options": [
                  "<ol> and <ul>",
                  "<ul> and <li>",
                  "<list> and <item>",
                  "<order> and <item>"
                ],
                "questionId": 109
              },
              {
                "question": "What does the 'Anchor tag' (<a>) primarily facilitate in HTML?",
                "options": [
                  "Embedding images",
                  "Creating hyperlinks",
                  "Styling webpage elements",
                  "Inserting audio content"
                ],
                "questionId": 110
              },
              {
                "question": "What does the term 'Web Crawler' refer to in the context of HTML?",
                "options": [
                  "A spider-like creature",
                  "A tool for organizing files",
                  "A script for automating tasks",
                  "A program for navigating and indexing web content"
                ],
                "questionId": 111
              }
            ]
          },
          {
            "title": "More HTML tags",
            "video": "/htmlcourse/more_html_tags.m3u8",
            "duration": "1:39",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Expand your HTML toolkit with additional tags. Discover tags that cater to specific needs, enhancing the richness of your web pages."
          },
          {
            "title": "Project 1 - 1",
            "video": "/htmlcourse/project_1_1.m3u8",
            "duration": "7:38",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Apply your newfound HTML skills in a practical project. In part one, embark on a hands-on project to where we build a small FAQ page by using semantic HTML tags and using font awesome icons."
          },
          {
            "title": "Project 1 - 2",
            "video": "/htmlcourse/project_1_2.m3u8",
            "duration": "8:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your project journey in part two. Apply advanced HTML concepts and solidify your skills through a comprehensive project that showcases your abilities."
          },
          {
            "title": "Project 2",
            "video": "/htmlcourse/project_2.m3u8",
            "duration": "9:05",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Level up with an in-depth project. Demonstrate your proficiency in HTML as you undertake a larger-scale project, integrating various elements learned throughout the course."
          },
          {
            "title": "Web Hosting",
            "video": "/htmlcourse/web_hosting.m3u8",
            "duration": "6:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unravel the mysteries of web hosting. Learn how to take your web projects live by exploring different hosting options and understanding the basics of site configurations."
          },
          {
            "title": "CSS",
            "video": "/htmlcourse/intro_to_css.m3u8",
            "duration": "8:22",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Transition seamlessly from HTML to CSS. In this module, delve into the world of Cascading Style Sheets to add style and visual appeal to your web pages."
          },
          {
            "title": "HTML and Project Quiz",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "In 'Project 1 - 1', what HTML semantic tags were primarily used for creating a FAQ page?",
                "options": [
                  "<div> and <span>",
                  "<details> and <summary>",
                  "<ul> and <li>",
                  "<section> and <article>"
                ],
                "questionId": 112
              },
              {
                "question": "In 'Project 1 - 2', how did you make an image float using HTML?",
                "options": [
                  "Applied 'float' property in CSS",
                  "Used 'position: absolute'",
                  "Set 'display: inline-block'",
                  "Inserted a 'float' tag around the image"
                ],
                "questionId": 113
              },
              {
                "question": "What was the focus of 'Project 2' in your HTML course?",
                "options": [
                  "Creating an FAQ page",
                  "Designing a personal portfolio",
                  "Developing a basic app documentation",
                  "Implementing a chat application"
                ],
                "questionId": 114
              },
              {
                "question": "What is web hosting in the context of web development?",
                "options": [
                  "A service that allows individuals and organizations to make their websites accessible via the World Wide Web",
                  "A method of creating dynamic web pages",
                  "A technique for optimizing website performance",
                  "A module covered in the CSS section"
                ],
                "questionId": 115
              }
            ]
          },
          {
            "title": "Wrap up",
            "video": "/htmlcourse/wrap_up.m3u8",
            "duration": "2:07",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Congratulations on completing the course! In this final module, recap your journey, reflect on your accomplishments, and gain insights into the next steps in your web development adventure."
          }
        ],
        "language": "Tamil",
        "requirements": [
          "Text editor for writing HTML code",
          "Web Browser to view the output of HTML code"
        ],
        "author": "N.U.Thejas hari",
        "authorInsta": "https://www.instagram.com/nuthejashari/",
        "meetingLink": "",
        "whatsappGroup": "",
        "recordedVideo": "",
        "courseId": "101110",
        "locked": false,
        "videos": "35",
        "projects": "2",
        "duration": "4 Hours",
        "paid": "",
        "cancellable": false,
        "createdAt": "2024-01-01T06:43:50.699Z",
        "updatedAt": "2024-01-01T06:43:50.699Z",
        "__v": 0,
        "completed": false,
        "enrolledOn": "2024-01-01T09:01:39.375Z",
        "certificate": "",
        "name": "Prasanna BP",
        "userId": "64f73f5ffac9cb68f09a2477",
        "progress": 0,
        "allNotes": []
      }
    ],
    "enrolledCoursesId": [
      "101110"
    ]
  },
  {
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "_id": "653d8b7665b0ca4610ba55a3",
    "name": "Mateus Alencar",
    "email": "mateuspsc157@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Novice",
    "registeredWorkshops": [],
    "createdAt": "2023-10-28T22:30:14.739Z",
    "updatedAt": "2023-10-28T22:30:14.739Z",
    "__v": 0
  },
  {
    "_id": "658d74d8fb04d8aabd93418a",
    "name": "XAI",
    "email": "xai48360@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Novice",
    "registeredWorkshops": [
      "65c4ec315a6594a5ea09b47f",
      "65b4bd00ed9d87145d75ebe2"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2023-12-28T13:15:05.002Z",
    "updatedAt": "2024-02-08T15:07:45.378Z",
    "__v": 0
  },
  {
    "_id": "658d7508fb04d8aabd934193",
    "name": "Hello Hello",
    "email": "hellohdllo157@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Novice",
    "registeredWorkshops": [],
    "enrolledCoursesId": [
      "101001",
      "101110"
    ],
    "enrolledCoursesData": [
      {
        "duration": "1 Hour",
        "paid": "",
        "cancellable": false,
        "_id": "658ada73bd9fefa8ae4fca3d",
        "title": "Basics of Networking and HTML Beginner to Advanced Course",
        "description": "Learn web development fundamentals, covering frontend, backend, and database structures. Explore client-server dynamics, APIs, various IP types, DNS workings, and HTML essentials with an introduction to CSS for crafting interactive websites",
        "image": "/html.png",
        "content": [
          {
            "title": "Course Introduction",
            "video": "https://ik.imagekit.io/d3kzbpbila/6%20-%20Trim_FvTTk12JRa.mp4?updatedAt=1703491496873",
            "duration": "4:10",
            "locked": false,
            "completed": true,
            "description": "An Introduction to the web development course"
          },
          {
            "title": "Why Web Development & Scopes",
            "video": "/pexels-skyler-ewing-10449329 (2160p).mp4",
            "duration": "12:30",
            "locked": false,
            "completed": true,
            "description": "Exploring the significance of web development and its scopes"
          },
          {
            "title": "Frontend Backend Database Architecture",
            "video": "https://ik.imagekit.io/d3kzbpbila/6%20-%20Trim_FvTTk12JRa.mp4?updatedAt=1703491496873",
            "duration": "15:45",
            "locked": false,
            "completed": false,
            "description": "Understanding the fundamental architecture of web development"
          },
          {
            "title": "Quiz",
            "quiz": true,
            "locked": false,
            "completed": false,
            "questions": [
              {
                "question": "What is Frontend ?",
                "options": [
                  "Dont Know",
                  "I know",
                  "You Know"
                ],
                "questionId": 110
              },
              {
                "question": "What is Frontend ?",
                "options": [
                  "Dont Know",
                  "I know",
                  "You Know"
                ],
                "questionId": 110
              }
            ]
          },
          {
            "title": "Client & Server Communication & API",
            "video": "/pexels-skyler-ewing-10449329 (2160p).mp4",
            "duration": "10:55",
            "locked": true,
            "completed": false,
            "description": "Exploring the dynamics of client-server communication and APIs"
          },
          {
            "title": "IP & Types",
            "video": "https://ik.imagekit.io/d3kzbpbila/6%20-%20Trim_FvTTk12JRa.mp4?updatedAt=1703491496873",
            "duration": "8:20",
            "locked": true,
            "completed": false,
            "description": "Understanding IP fundamentals and different IP types"
          },
          {
            "title": "DNS & Types",
            "video": "/pexels-skyler-ewing-10449329 (2160p).mp4",
            "duration": "9:40",
            "locked": true,
            "completed": false,
            "description": "Explaining DNS principles and different DNS types"
          },
          {
            "title": "IP & DNS Quiz",
            "quiz": true,
            "locked": true,
            "questions": [
              {
                "question": "What is Frontend ?",
                "options": [
                  "Dont Know",
                  "I know",
                  "You Know"
                ],
                "questionId": 110
              },
              {
                "question": "What is Frontend ?",
                "options": [
                  "Dont Know",
                  "I know",
                  "You Know"
                ],
                "questionId": 110
              }
            ]
          },
          {
            "title": "HTML",
            "video": "https://ik.imagekit.io/d3kzbpbila/6%20-%20Trim_FvTTk12JRa.mp4?updatedAt=1703491496873",
            "duration": "18:15",
            "locked": true,
            "completed": false,
            "description": "Learning the essentials of HTML for web development"
          },
          {
            "title": "Introduction to CSS",
            "video": "https://ik.imagekit.io/d3kzbpbila/6%20-%20Trim_FvTTk12JRa.mp4?updatedAt=1703491496873",
            "duration": "14:25",
            "locked": true,
            "completed": false,
            "description": "Getting introduced to the fundamental aspects of CSS"
          }
        ],
        "language": "Tamil",
        "requirements": [
          "A laptop with sublime text or any text editors",
          "Basic knowledge of HTML"
        ],
        "author": "N.U.Thejas hari",
        "authorInsta": "https://www.instagram.com/nuthejashari/",
        "meetingLink": "",
        "whatsappGroup": "",
        "recordedVideo": "",
        "courseId": "101001",
        "locked": false,
        "videos": "20",
        "projects": "2",
        "createdAt": "2023-12-26T13:51:47.940Z",
        "updatedAt": "2023-12-26T13:51:47.940Z",
        "__v": 0,
        "completed": false,
        "enrolledOn": "2023-12-28T13:19:00.340Z",
        "certificate": "",
        "name": "Hello Hello",
        "userId": "658d7508fb04d8aabd934193",
        "progress": 0,
        "allNotes": []
      },
      {
        "_id": "658d9bb193b630eb9244aa2c",
        "title": "Basics of Networking and HTML Beginner to Advanced Course",
        "description": "Learn web development fundamentals, covering frontend, backend, and database structures. Explore client-server dynamics, APIs, various IP types, DNS workings, and HTML essentials with an introduction to CSS for crafting interactive websites",
        "image": "/html.png",
        "content": [
          {
            "title": "Course Introduction",
            "video": "https://drive.google.com/uc?export=download&id=1wsItHhlAQl2ONFg-guh1Y5gcm1G2g0rd&confirm=t&uuid=c0f2dfe0-9610-45e5-90f6-2d3e871b0ac1&at=AB6BwCAa4kKJVBFy5UovKj7N88GV:1703698816342",
            "duration": "0:32",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Welcome to the course! In this introductory module, you'll get a glimpse of what's in store. We'll outline the course structure, set expectations, and highlight the outcomes you can anticipate upon completion."
          },
          {
            "title": "Expectations & Outcomes",
            "video": "https://drive.google.com/uc?export=download&id=1i15Dy92mNLsaoxP9th0uRr2-IDAyZLNP&confirm=t&uuid=c0f2dfe0-9610-45e5-90f6-2d3e871b0ac1&at=AB6BwCAa4kKJVBFy5UovKj7N88GV:1703698816342",
            "duration": "1:21",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Understand the goals of this course and what you'll gain by the end. We'll discuss the skills you'll acquire, the knowledge you'll gain, and how it will benefit you in the realm of web development and networking."
          },
          {
            "title": "Web Development & Scopes",
            "video": "https://drive.google.com/uc?export=download&id=17gqnw7eQVzVffNLmgxUCsRwzXNxv37Eq&confirm=t&uuid=c0f2dfe0-9610-45e5-90f6-2d3e871b0ac1&at=AB6BwCAa4kKJVBFy5UovKj7N88GV:1703698816342",
            "duration": "8:54",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the vast landscape of web development careers. Learn about the diverse scopes and job opportunities available in the industry, providing you with insights to shape your career path."
          },
          {
            "title": "Frontend Backend Architecture",
            "video": "https://drive.google.com/uc?export=download&id=1WT7bQvXamHHerZiE3d6wsleL9v8dejKS&confirm=t&uuid=c0f2dfe0-9610-45e5-90f6-2d3e871b0ac1&at=AB6BwCAa4kKJVBFy5UovKj7N88GV:1703698816342",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Delve into the intricacies of frontend and backend architecture. Understand how these components work together to create seamless and responsive web applications, laying the foundation for your development journey."
          },
          {
            "title": "Database",
            "video": "https://drive.google.com/uc?export=download&id=1Hojzg_gLdZa3R-w58WDyYwoKtXYpKnoh&confirm=t&uuid=c0f2dfe0-9610-45e5-90f6-2d3e871b0ac1&at=AB6BwCAa4kKJVBFy5UovKj7N88GV:1703698816342",
            "duration": "1:07",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Uncover the importance of databases in web development. Learn what are the types of database available and the free cloud services providing free database for developers."
          },
          {
            "title": "IP & Types",
            "video": "https://drive.google.com/uc?export=download&id=1JPA-gL2oYOsI_dQLgoJF8JuWdG6PeyrA&confirm=t&uuid=c0f2dfe0-9610-45e5-90f6-2d3e871b0ac1&at=AB6BwCAa4kKJVBFy5UovKj7N88GV:1703698816342",
            "duration": "9:35",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Navigate the world of Internet Protocol (IP) addresses. Gain a comprehensive understanding of IP types and their significance in the networking landscape."
          },
          {
            "title": "IPv4 vs IPv6",
            "video": "https://drive.google.com/uc?export=download&id=1WZyxOF4TIhbZRd6xv84V9BFWOfybI-Do&confirm=t&uuid=c0f2dfe0-9610-45e5-90f6-2d3e871b0ac1&at=AB6BwCAa4kKJVBFy5UovKj7N88GV:1703698816342",
            "duration": "7:12",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Compare IPv4 and IPv6, the two versions of the Internet Protocol. Understand the differences and advancements that IPv6 brings to address the limitations of IPv4."
          },
          {
            "title": "Static vs Dynamic IP",
            "video": "https://drive.google.com/uc?export=download&id=1AZ6g0BnJYJP3mNpuN63gS_LL2ttom9J4&confirm=t&uuid=c0f2dfe0-9610-45e5-90f6-2d3e871b0ac1&at=AB6BwCAa4kKJVBFy5UovKj7N88GV:1703698816342",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the distinction between static and dynamic IP addresses. Learn how each type is assigned and its impact on network configurations."
          },
          {
            "title": "Quiz",
            "quiz": true,
            "locked": false,
            "completed": false,
            "questions": [
              {
                "question": "What does \"frontend\" refer to in web development?",
                "options": [
                  "The part of a website users interact with",
                  "The server-side logic of a website",
                  "The database management system",
                  "The network infrastructure"
                ],
                "questionId": 100
              },
              {
                "question": "What is the primary role of \"backend\" in web development?",
                "options": [
                  "Managing the user interface",
                  "Handling server-side logic and databases",
                  "Designing responsive layouts",
                  "Implementing frontend styles"
                ],
                "questionId": 101
              },
              {
                "question": "What does \"IP\" stand for in networking?",
                "options": [
                  "Internet Provider",
                  "Internet Protocol",
                  "Information Processing",
                  "Interface Port"
                ],
                "questionId": 102
              },
              {
                "question": " What is the total range of each octet in an IPv4 address?",
                "options": [
                  "0-100",
                  "0-127",
                  "0-255",
                  "0-64"
                ],
                "questionId": 103
              }
            ]
          },
          {
            "title": "DNS",
            "video": "https://drive.google.com/uc?export=download&id=1sOIp0Omvc37eo8gLBPar6IOMDOwVBx1E&confirm=t&uuid=c0f2dfe0-9610-45e5-90f6-2d3e871b0ac1&at=AB6BwCAa4kKJVBFy5UovKj7N88GV:1703698816342",
            "duration": "10:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into the Domain Name System (DNS) and unravel the process of translating domain names to IP addresses. Explore the role DNS plays in making web browsing seamless."
          },
          {
            "title": "What is API?",
            "video": "https://drive.google.com/uc?export=download&id=1LQA16OVuRltbDfMyOLyXOC_71FwT5u4G&confirm=t&uuid=c0f2dfe0-9610-45e5-90f6-2d3e871b0ac1&at=AB6BwCAa4kKJVBFy5UovKj7N88GV:1703698816342",
            "duration": "3:12",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Application Programming Interfaces (APIs). Understand their significance in web development, facilitating communication between different software systems."
          },
          {
            "title": "What is HTML",
            "video": "https://drive.google.com/uc?export=download&id=11ddHwUKFjW3l-miwF_PkHdXhZHFunsou&confirm=t&uuid=c0f2dfe0-9610-45e5-90f6-2d3e871b0ac1&at=AB6BwCAa4kKJVBFy5UovKj7N88GV:1703698816342",
            "duration": "2:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Begin your journey into the core of web development with HTML. Learn the basics of structuring web content and creating the foundation for interactive websites."
          },
          {
            "title": "HTML Page Structure",
            "video": "https://drive.google.com/uc?export=download&id=1zMJ_kg46_f__0-r9p99LD-O9itSj6nAH&confirm=t&uuid=c0f2dfe0-9610-45e5-90f6-2d3e871b0ac1&at=AB6BwCAa4kKJVBFy5UovKj7N88GV:1703698816342",
            "duration": "3:33",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the art of organizing your web pages. Explore HTML tags that define the structure of a webpage, providing a solid foundation for your coding endeavors."
          },
          {
            "title": "Quiz",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the primary function of DNS in web development?",
                "options": [
                  "To design responsive user interfaces",
                  "To translate domain names to IP addresses",
                  "To manage server-side logic",
                  "To encrypt website data"
                ],
                "questionId": 104
              },
              {
                "question": "What is the primary role of 'backend' in web development?",
                "options": [
                  "Managing the user interface",
                  "Handling server-side logic and databases",
                  "Designing responsive layouts",
                  "Implementing frontend styles"
                ],
                "questionId": 105
              },
              {
                "question": "What does 'IP' stand for in networking?",
                "options": [
                  "Internet Provider",
                  "Internet Protocol",
                  "Information Processing",
                  "Interface Port"
                ],
                "questionId": 106
              },
              {
                "question": "What is the total range of each octet in an IPv4 address?",
                "options": [
                  "0-100",
                  "0-127",
                  "0-255",
                  "0-64"
                ],
                "questionId": 107
              }
            ]
          },
          {
            "title": "Text tags",
            "video": "https://drive.google.com/uc?export=download&id=1eaerVIo3CjyvbwRaNGZ6li2DD-50OS05&confirm=t&uuid=c0f2dfe0-9610-45e5-90f6-2d3e871b0ac1&at=AB6BwCAa4kKJVBFy5UovKj7N88GV:1703698816342",
            "duration": "18:55",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore the world of text manipulation in HTML. Discover tags that enhance the presentation of textual content on your web pages."
          },
          {
            "title": "List tags",
            "video": "https://drive.google.com/uc?export=download&id=1d2nFAzKXF-slB8l0woggjGMLvB9wNCh1&confirm=t&uuid=c0f2dfe0-9610-45e5-90f6-2d3e871b0ac1&at=AB6BwCAa4kKJVBFy5UovKj7N88GV:1703698816342",
            "duration": "5:29",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore HTML's list tags to efficiently structure information. Learn how to create ordered and unordered lists for better content organization."
          },
          {
            "title": "Anchor tag",
            "video": "https://drive.google.com/uc?export=download&id=1cB0BT2chGAI8CWblR54WiILG93QL0H5j&confirm=t&uuid=c0f2dfe0-9610-45e5-90f6-2d3e871b0ac1&at=AB6BwCAa4kKJVBFy5UovKj7N88GV:1703698816342",
            "duration": "7:53",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unlock the power of hyperlinking with the anchor tag. Understand how to connect different pages and resources within your website."
          },
          {
            "title": "Image tag",
            "video": "https://drive.google.com/uc?export=download&id=1CReuu9fVESvDLmvVv7-jGPNTW-bZibGX&confirm=t&uuid=c0f2dfe0-9610-45e5-90f6-2d3e871b0ac1&at=AB6BwCAa4kKJVBFy5UovKj7N88GV:1703698816342",
            "duration": "6:48",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Bring visual appeal to your web pages with the image tag. Learn how to integrate images seamlessly into your HTML content."
          },
          {
            "title": "Audio & video tag",
            "video": "https://drive.google.com/uc?export=download&id=1xlEVlZm8UxhV7rz2OTXk3Ir0OThxdZYo&confirm=t&uuid=c0f2dfe0-9610-45e5-90f6-2d3e871b0ac1&at=AB6BwCAa4kKJVBFy5UovKj7N88GV:1703698816342",
            "duration": "7:56",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user engagement with multimedia elements. Explore the audio and video tags to incorporate media seamlessly into your web projects."
          },
          {
            "title": "iframe & embed tag",
            "video": "https://drive.google.com/uc?export=download&id=1DIVRkQZvAmGKeA9r9K3svRGwC_7rMWsk&confirm=t&uuid=c0f2dfe0-9610-45e5-90f6-2d3e871b0ac1&at=AB6BwCAa4kKJVBFy5UovKj7N88GV:1703698816342",
            "duration": "7:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Harness the capabilities of iframe and embed tags. Understand how these tags enable the integration of external content within your web pages."
          },
          {
            "title": "Div tag",
            "video": "https://drive.google.com/uc?export=download&id=129XZHAw2ql-0jGwLG2E8d7m404dCv11a&confirm=t&uuid=c0f2dfe0-9610-45e5-90f6-2d3e871b0ac1&at=AB6BwCAa4kKJVBFy5UovKj7N88GV:1703698816342",
            "duration": "3:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the versatile div tag. Learn how it acts as a container, allowing you to structure and style your HTML content effectively."
          },
          {
            "title": "Input tags",
            "video": "https://drive.google.com/uc?export=download&id=1XuBepnGGacfSivsLsknYCKYrIizRoZFF&confirm=t&uuid=c0f2dfe0-9610-45e5-90f6-2d3e871b0ac1&at=AB6BwCAa4kKJVBFy5UovKj7N88GV:1703698816342",
            "duration": "14:01",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into user interaction with HTML input tags. Explore various input types and understand how they enable user data input."
          },
          {
            "title": "Button tag",
            "video": "https://drive.google.com/uc?export=download&id=12ZE_83UGzIS3p2pI-YbskLtfa8w2keTa&confirm=t&uuid=c0f2dfe0-9610-45e5-90f6-2d3e871b0ac1&at=AB6BwCAa4kKJVBFy5UovKj7N88GV:1703698816342",
            "duration": "1:43",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user experience with interactive buttons. Learn the ins and outs of the button tag and its various applications."
          },
          {
            "title": "Form part 1",
            "video": "https://drive.google.com/uc?export=download&id=1pfvBUm55bovs8tMFRoUe1TEzN3Uvm1sU&confirm=t&uuid=c0f2dfe0-9610-45e5-90f6-2d3e871b0ac1&at=AB6BwCAa4kKJVBFy5UovKj7N88GV:1703698816342",
            "duration": "9:09",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embark on the journey of web forms. In part one, explore the essential elements that make up a form, setting the stage for user data collection."
          },
          {
            "title": "Form part 2",
            "video": "https://drive.google.com/uc?export=download&id=1ecqJEOVEFePNQUY1Vw9cyev9mPqWa1VB&confirm=t&uuid=c0f2dfe0-9610-45e5-90f6-2d3e871b0ac1&at=AB6BwCAa4kKJVBFy5UovKj7N88GV:1703698816342",
            "duration": "8:00",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Delve deeper into the world of web forms. In part two, learn about form validation, submission methods, and enhance the functionality of your forms."
          },
          {
            "title": "Table tag",
            "video": "https://drive.google.com/uc?export=download&id=1uRAH9Tn1iNbyj-eNe-c7WCqpQEq27AIS&confirm=t&uuid=c0f2dfe0-9610-45e5-90f6-2d3e871b0ac1&at=AB6BwCAa4kKJVBFy5UovKj7N88GV:1703698816342",
            "duration": "4:42",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Uncover the power of HTML tables. Learn how to structure and display data in a tabular format for improved readability."
          },
          {
            "title": "Semantic HTML - 1",
            "video": "https://drive.google.com/uc?export=download&id=11SlSF4yerlY0UKAQEjq1FopXRoasgPM3&confirm=t&uuid=c0f2dfe0-9610-45e5-90f6-2d3e871b0ac1&at=AB6BwCAa4kKJVBFy5UovKj7N88GV:1703698816342",
            "duration": "5:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embrace semantic HTML for enhanced accessibility and SEO. In part one, understand how semantic tags contribute to the meaning and structure of your content."
          },
          {
            "title": "Semantic HTML - 2",
            "video": "https://drive.google.com/uc?export=download&id=1Q1GOSLSvpq-p45RKJWTRmFvO1VoZPPcs&confirm=t&uuid=c0f2dfe0-9610-45e5-90f6-2d3e871b0ac1&at=AB6BwCAa4kKJVBFy5UovKj7N88GV:1703698816342",
            "duration": "2:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your journey into semantic HTML. In part two, explore additional tags that enrich the semantics of your web pages."
          },
          {
            "title": "Web Crawler",
            "video": "https://drive.google.com/uc?export=download&id=1kk3NDWlJXsrTpoHBINYCv_H7wFo_gu0L&confirm=t&uuid=c0f2dfe0-9610-45e5-90f6-2d3e871b0ac1&at=AB6BwCAa4kKJVBFy5UovKj7N88GV:1703698816342",
            "duration": "3:40",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Understand how websites are ranked to top by web crawling. Understand the fundamentals of how search engines navigate and index content across the vast web."
          },
          {
            "title": "Quiz",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the purpose of 'Text tags' in HTML?",
                "options": [
                  "To create lists of items",
                  "To structure webpage content",
                  "To manipulate text formatting",
                  "To embed multimedia elements"
                ],
                "questionId": 108
              },
              {
                "question": "Which HTML tags are used for creating ordered and unordered lists?",
                "options": [
                  "<ol> and <li>",
                  "<ul> and <li>",
                  "<list> and <item>",
                  "<order> and <item>"
                ],
                "questionId": 109
              },
              {
                "question": "What does the 'Anchor tag' (<a>) primarily facilitate in HTML?",
                "options": [
                  "Embedding images",
                  "Creating hyperlinks",
                  "Styling webpage elements",
                  "Inserting audio content"
                ],
                "questionId": 110
              },
              {
                "question": "What does the term 'Web Crawler' refer to in the context of HTML?",
                "options": [
                  "A spider-like creature",
                  "A tool for organizing files",
                  "A script for automating tasks",
                  "A program for navigating and indexing web content"
                ],
                "questionId": 111
              }
            ]
          },
          {
            "title": "More HTML tags",
            "video": "https://drive.google.com/uc?export=download&id=1uHx6RhlIWMIO-oFuD_inJTqEBla7esRM&confirm=t&uuid=c0f2dfe0-9610-45e5-90f6-2d3e871b0ac1&at=AB6BwCAa4kKJVBFy5UovKj7N88GV:1703698816342",
            "duration": "1:39",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Expand your HTML toolkit with additional tags. Discover tags that cater to specific needs, enhancing the richness of your web pages. HTML reference website :- https://developer.mozilla.org/en-US/docs/Web/HTML "
          },
          {
            "title": "Project 1 - 1",
            "video": "https://drive.google.com/uc?export=download&id=1KONGhmlzlwXfIXrB-NPE2gNlXuA1neam&confirm=t&uuid=c0f2dfe0-9610-45e5-90f6-2d3e871b0ac1&at=AB6BwCAa4kKJVBFy5UovKj7N88GV:1703698816342",
            "duration": "7:38",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Apply your newfound HTML skills in a practical project. In part one, embark on a hands-on project to where we build a small FAQ page by using semantic HTML tags and using font awesome icons."
          },
          {
            "title": "Project 1 - 2",
            "video": "https://drive.google.com/uc?export=download&id=1r8STo_LGI8wZ4JFJRbluZEDsO8RdI67i&confirm=t&uuid=c0f2dfe0-9610-45e5-90f6-2d3e871b0ac1&at=AB6BwCAa4kKJVBFy5UovKj7N88GV:1703698816342",
            "duration": "8:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your project journey in part two. Apply advanced HTML concepts and solidify your skills through a comprehensive project that showcases your abilities."
          },
          {
            "title": "Project 2",
            "video": "https://drive.google.com/uc?export=download&id=18qttOIlkDpRD2k3cGDTPpp5Ld2SDoO-9&confirm=t&uuid=c0f2dfe0-9610-45e5-90f6-2d3e871b0ac1&at=AB6BwCAa4kKJVBFy5UovKj7N88GV:1703698816342",
            "duration": "9:05",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Level up with an in-depth project. Demonstrate your proficiency in HTML as you undertake a larger-scale project, integrating various elements learned throughout the course."
          },
          {
            "title": "Web Hosting",
            "video": "https://drive.google.com/uc?export=download&id=1abdc71ZO4_sACRMNG_J0qGjs8C1R9VS6&confirm=t&uuid=c0f2dfe0-9610-45e5-90f6-2d3e871b0ac1&at=AB6BwCAa4kKJVBFy5UovKj7N88GV:1703698816342",
            "duration": "6:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unravel the mysteries of web hosting. Learn how to take your web projects live by exploring different hosting options and understanding the basics of site configurations."
          },
          {
            "title": "CSS",
            "video": "https://drive.google.com/uc?export=download&id=1VNvQ8qX-llH1dKuKfZJZVDeIPashcBeC&confirm=t&uuid=c0f2dfe0-9610-45e5-90f6-2d3e871b0ac1&at=AB6BwCAa4kKJVBFy5UovKj7N88GV:1703698816342",
            "duration": "8:22",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Transition seamlessly from HTML to CSS. In this module, delve into the world of Cascading Style Sheets to add style and visual appeal to your web pages."
          },
          {
            "title": "HTML and Project Quiz",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "In 'Project 1 - 1', what HTML semantic tags were primarily used for creating a FAQ page?",
                "options": [
                  "<div> and <span>",
                  "<details> and <summary>",
                  "<ul> and <li>",
                  "<section> and <article>"
                ],
                "questionId": 112
              },
              {
                "question": "In 'Project 1 - 2', how did you make an image float using HTML?",
                "options": [
                  "Applied 'float' property in CSS",
                  "Used 'position: absolute'",
                  "Set 'display: inline-block'",
                  "Inserted a 'float' tag around the image"
                ],
                "questionId": 113
              },
              {
                "question": "What was the focus of 'Project 2' in your HTML course?",
                "options": [
                  "Creating an FAQ page",
                  "Designing a personal portfolio",
                  "Developing a basic app documentation",
                  "Implementing a chat application"
                ],
                "questionId": 114
              },
              {
                "question": "What is web hosting in the context of web development?",
                "options": [
                  "A service that allows individuals and organizations to make their websites accessible via the World Wide Web",
                  "A method of creating dynamic web pages",
                  "A technique for optimizing website performance",
                  "A module covered in the CSS section"
                ],
                "questionId": 115
              }
            ]
          },
          {
            "title": "Wrap up",
            "video": "https://drive.google.com/uc?export=download&id=1OanBpw2vjpEDJl6pZnSh3ETRsLwAmUhn&confirm=t&uuid=c0f2dfe0-9610-45e5-90f6-2d3e871b0ac1&at=AB6BwCAa4kKJVBFy5UovKj7N88GV:1703698816342",
            "duration": "2:07",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Congratulations on completing the course! In this final module, recap your journey, reflect on your accomplishments, and gain insights into the next steps in your web development adventure."
          }
        ],
        "language": "Tamil",
        "requirements": [
          "Basic text editor for writing HTML code",
          "Web Browser to view the output of HTML code"
        ],
        "author": "N.U.Thejas hari",
        "authorInsta": "https://www.instagram.com/nuthejashari/",
        "meetingLink": "",
        "whatsappGroup": "",
        "recordedVideo": "",
        "courseId": "101110",
        "locked": false,
        "videos": "35",
        "projects": "2",
        "duration": "4 hours",
        "paid": "",
        "cancellable": false,
        "createdAt": "2023-12-28T16:00:49.643Z",
        "updatedAt": "2023-12-28T16:00:49.643Z",
        "__v": 0,
        "completed": false,
        "enrolledOn": "2023-12-28T16:30:53.162Z",
        "certificate": "",
        "name": "Hello Hello",
        "userId": "658d7508fb04d8aabd934193",
        "progress": 0,
        "allNotes": []
      }
    ],
    "createdAt": "2023-12-28T13:15:52.138Z",
    "updatedAt": "2023-12-28T16:41:24.596Z",
    "__v": 0
  },
  {
    "_id": "6592c2eacb9c977da7dd7ef5",
    "name": "Dinakar Sowmiyan R",
    "email": "dinakar150901@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Novice",
    "registeredWorkshops": [
      "65c4ec315a6594a5ea09b47f"
    ],
    "enrolledCoursesId": [
      "101110"
    ],
    "enrolledCoursesData": [
      {
        "_id": "65925f26f5f0ffa3b0e38586",
        "title": "Basics of Networking and HTML Beginner to Advanced Course",
        "description": "Learn web development fundamentals, covering frontend, backend, and database structures. Explore client-server dynamics, APIs, various IP types, DNS workings, and HTML essentials with an introduction to CSS for crafting interactive websites",
        "image": "/html.png",
        "content": [
          {
            "title": "Course Introduction",
            "video": "/htmlcourse/intro.m3u8",
            "duration": "0:32",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Welcome to the course! In this introductory module, you'll get a glimpse of what's in store. We'll outline the course structure, set expectations, and highlight the outcomes you can anticipate upon completion."
          },
          {
            "title": "Expectations & Outcomes",
            "video": "/htmlcourse/CourseOutcomes&Scope.m3u8",
            "duration": "1:21",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Understand the goals of this course and what you'll gain by the end. We'll discuss the skills you'll acquire, the knowledge you'll gain, and how it will benefit you in the realm of web development and networking."
          },
          {
            "title": "Web Development & Scopes",
            "video": "/htmlcourse/WebDevelopment&Scopes.m3u8",
            "duration": "8:54",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the vast landscape of web development careers. Learn about the diverse scopes and job opportunities available in the industry, providing you with insights to shape your career path."
          },
          {
            "title": "Frontend Backend Architecture",
            "video": "/htmlcourse/FrontendBackendArchitecture.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Delve into the intricacies of frontend and backend architecture. Understand how these components work together to create seamless and responsive web applications, laying the foundation for your development journey."
          },
          {
            "title": "Database",
            "video": "/htmlcourse/database.m3u8",
            "duration": "1:07",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Uncover the importance of databases in web development. Learn what are the types of database available and the free cloud services providing free database for developers."
          },
          {
            "title": "IP & Types",
            "video": "/htmlcourse/ip internal & external.m3u8",
            "duration": "9:35",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Navigate the world of Internet Protocol (IP) addresses. Gain a comprehensive understanding of IP types and their significance in the networking landscape."
          },
          {
            "title": "IPv4 vs IPv6",
            "video": "/htmlcourse/ipv4 vs ipv6.m3u8",
            "duration": "7:12",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Compare IPv4 and IPv6, the two versions of the Internet Protocol. Understand the differences and advancements that IPv6 brings to address the limitations of IPv4."
          },
          {
            "title": "Static vs Dynamic IP",
            "video": "/htmlcourse/static_vs_dynamic_ip.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the distinction between static and dynamic IP addresses. Learn how each type is assigned and its impact on network configurations."
          },
          {
            "title": "Quiz 1",
            "quiz": true,
            "locked": false,
            "completed": false,
            "questions": [
              {
                "question": "What does \"frontend\" refer to in web development?",
                "options": [
                  "The part of a website users interact with",
                  "The server-side logic of a website",
                  "The database management system",
                  "The network infrastructure"
                ],
                "questionId": 100
              },
              {
                "question": "What is the primary role of \"backend\" in web development?",
                "options": [
                  "Managing the user interface",
                  "Handling server-side logic and databases",
                  "Designing responsive layouts",
                  "Implementing frontend styles"
                ],
                "questionId": 101
              },
              {
                "question": "What does \"IP\" stand for in networking?",
                "options": [
                  "Internet Provider",
                  "Internet Protocol",
                  "Information Processing",
                  "Interface Port"
                ],
                "questionId": 102
              },
              {
                "question": " What is the total range of each octet in an IPv4 address?",
                "options": [
                  "0-100",
                  "0-127",
                  "0-255",
                  "0-64"
                ],
                "questionId": 103
              }
            ]
          },
          {
            "title": "DNS",
            "video": "/htmlcourse/dns.m3u8",
            "duration": "10:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into the Domain Name System (DNS) and unravel the process of translating domain names to IP addresses. Explore the role DNS plays in making web browsing seamless."
          },
          {
            "title": "What is API?",
            "video": "/htmlcourse/api.m3u8",
            "duration": "3:12",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Application Programming Interfaces (APIs). Understand their significance in web development, facilitating communication between different software systems."
          },
          {
            "title": "What is HTML",
            "video": "/htmlcourse/what_is_html.m3u8",
            "duration": "2:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Begin your journey into the core of web development with HTML. Learn the basics of structuring web content and creating the foundation for interactive websites."
          },
          {
            "title": "HTML Page Structure",
            "video": "/htmlcourse/HTML_page_structure.m3u8",
            "duration": "3:33",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the art of organizing your web pages. Explore HTML tags that define the structure of a webpage, providing a solid foundation for your coding endeavors."
          },
          {
            "title": "Quiz 2",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the primary function of DNS in web development?",
                "options": [
                  "To design responsive user interfaces",
                  "To translate domain names to IP addresses",
                  "To manage server-side logic",
                  "To encrypt website data"
                ],
                "questionId": 104
              },
              {
                "question": "What does 'API' stand for in web development?",
                "options": [
                  "Advanced Programming Interface",
                  "Application Programming Interface",
                  "Automated Processing Interface",
                  "Advanced Protocol Integration"
                ],
                "questionId": 105
              },
              {
                "question": "What is the main markup language used for creating web pages??",
                "options": [
                  "XML",
                  "XAMPP",
                  "HTML",
                  "CSS"
                ],
                "questionId": 106
              },
              {
                "question": "What does 'HTML' stand for?",
                "options": [
                  "Hyper Transfer Markup Language",
                  "High-Level Text Management Language",
                  "Hyperlink and Text Management Language",
                  "HyperText Markup Language"
                ],
                "questionId": 107
              }
            ]
          },
          {
            "title": "Text tags",
            "video": "/htmlcourse/text_tags.m3u8",
            "duration": "18:55",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore the world of text manipulation in HTML. Discover tags that enhance the presentation of textual content on your web pages."
          },
          {
            "title": "List tags",
            "video": "/htmlcourse/list_tags.m3u8",
            "duration": "5:29",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore HTML's list tags to efficiently structure information. Learn how to create ordered and unordered lists for better content organization."
          },
          {
            "title": "Anchor tag",
            "video": "/htmlcourse/Anchor_tag.m3u8",
            "duration": "7:53",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unlock the power of hyperlinking with the anchor tag. Understand how to connect different pages and resources within your website."
          },
          {
            "title": "Image tag",
            "video": "/htmlcourse/image_tag.m3u8",
            "duration": "6:48",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Bring visual appeal to your web pages with the image tag. Learn how to integrate images seamlessly into your HTML content."
          },
          {
            "title": "Audio & video tag",
            "video": "/htmlcourse/audio_and_video_tag.m3u8",
            "duration": "7:56",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user engagement with multimedia elements. Explore the audio and video tags to incorporate media seamlessly into your web projects."
          },
          {
            "title": "iframe & embed tag",
            "video": "/htmlcourse/iframe_and_embed_tag.m3u8",
            "duration": "7:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Harness the capabilities of iframe and embed tags. Understand how these tags enable the integration of external content within your web pages."
          },
          {
            "title": "Div tag",
            "video": "/htmlcourse/div_tag.m3u8",
            "duration": "3:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the versatile div tag. Learn how it acts as a container, allowing you to structure and style your HTML content effectively."
          },
          {
            "title": "Input tags",
            "video": "/htmlcourse/input_tag.m3u8",
            "duration": "14:01",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into user interaction with HTML input tags. Explore various input types and understand how they enable user data input."
          },
          {
            "title": "Button tag",
            "video": "/htmlcourse/button_tag.m3u8",
            "duration": "1:43",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user experience with interactive buttons. Learn the ins and outs of the button tag and its various applications."
          },
          {
            "title": "Form part 1",
            "video": "/htmlcourse/form_tag_1.m3u8",
            "duration": "9:09",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embark on the journey of web forms. In part one, explore the essential elements that make up a form, setting the stage for user data collection."
          },
          {
            "title": "Form part 2",
            "video": "/htmlcourse/form_tag_2.m3u8",
            "duration": "8:00",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Delve deeper into the world of web forms. In part two, learn about form validation, submission methods, and enhance the functionality of your forms."
          },
          {
            "title": "Table tag",
            "video": "/htmlcourse/table_tag.m3u8",
            "duration": "4:42",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Uncover the power of HTML tables. Learn how to structure and display data in a tabular format for improved readability."
          },
          {
            "title": "Semantic HTML - 1",
            "video": "/htmlcourse/semantic_html_1.m3u8",
            "duration": "5:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embrace semantic HTML for enhanced accessibility and SEO. In part one, understand how semantic tags contribute to the meaning and structure of your content."
          },
          {
            "title": "Semantic HTML - 2",
            "video": "/htmlcourse/semantic_html_2.m3u8",
            "duration": "2:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your journey into semantic HTML. In part two, explore additional tags that enrich the semantics of your web pages."
          },
          {
            "title": "Web Crawler",
            "video": "/htmlcourse/web_crawler.m3u8",
            "duration": "3:40",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Understand how websites are ranked to top by web crawling. Understand the fundamentals of how search engines navigate and index content across the vast web."
          },
          {
            "title": "Quiz 3",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the purpose of 'Text tags' in HTML?",
                "options": [
                  "To create lists of items",
                  "To structure webpage content",
                  "To manipulate text formatting",
                  "To embed multimedia elements"
                ],
                "questionId": 108
              },
              {
                "question": "Which HTML tags are used for creating ordered and unordered lists?",
                "options": [
                  "<ol> and <ul>",
                  "<ul> and <li>",
                  "<list> and <item>",
                  "<order> and <item>"
                ],
                "questionId": 109
              },
              {
                "question": "What does the 'Anchor tag' (<a>) primarily facilitate in HTML?",
                "options": [
                  "Embedding images",
                  "Creating hyperlinks",
                  "Styling webpage elements",
                  "Inserting audio content"
                ],
                "questionId": 110
              },
              {
                "question": "What does the term 'Web Crawler' refer to in the context of HTML?",
                "options": [
                  "A spider-like creature",
                  "A tool for organizing files",
                  "A script for automating tasks",
                  "A program for navigating and indexing web content"
                ],
                "questionId": 111
              }
            ]
          },
          {
            "title": "More HTML tags",
            "video": "/htmlcourse/more_html_tags.m3u8",
            "duration": "1:39",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Expand your HTML toolkit with additional tags. Discover tags that cater to specific needs, enhancing the richness of your web pages."
          },
          {
            "title": "Project 1 - 1",
            "video": "/htmlcourse/project_1_1.m3u8",
            "duration": "7:38",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Apply your newfound HTML skills in a practical project. In part one, embark on a hands-on project to where we build a small FAQ page by using semantic HTML tags and using font awesome icons."
          },
          {
            "title": "Project 1 - 2",
            "video": "/htmlcourse/project_1_2.m3u8",
            "duration": "8:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your project journey in part two. Apply advanced HTML concepts and solidify your skills through a comprehensive project that showcases your abilities."
          },
          {
            "title": "Project 2",
            "video": "/htmlcourse/project_2.m3u8",
            "duration": "9:05",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Level up with an in-depth project. Demonstrate your proficiency in HTML as you undertake a larger-scale project, integrating various elements learned throughout the course."
          },
          {
            "title": "Web Hosting",
            "video": "/htmlcourse/web_hosting.m3u8",
            "duration": "6:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unravel the mysteries of web hosting. Learn how to take your web projects live by exploring different hosting options and understanding the basics of site configurations."
          },
          {
            "title": "CSS",
            "video": "/htmlcourse/intro_to_css.m3u8",
            "duration": "8:22",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Transition seamlessly from HTML to CSS. In this module, delve into the world of Cascading Style Sheets to add style and visual appeal to your web pages."
          },
          {
            "title": "HTML and Project Quiz",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "In 'Project 1 - 1', what HTML semantic tags were primarily used for creating a FAQ page?",
                "options": [
                  "<div> and <span>",
                  "<details> and <summary>",
                  "<ul> and <li>",
                  "<section> and <article>"
                ],
                "questionId": 112
              },
              {
                "question": "In 'Project 1 - 2', how did you make an image float using HTML?",
                "options": [
                  "Applied 'float' property in CSS",
                  "Used 'position: absolute'",
                  "Set 'display: inline-block'",
                  "Inserted a 'float' tag around the image"
                ],
                "questionId": 113
              },
              {
                "question": "What was the focus of 'Project 2' in your HTML course?",
                "options": [
                  "Creating an FAQ page",
                  "Designing a personal portfolio",
                  "Developing a basic app documentation",
                  "Implementing a chat application"
                ],
                "questionId": 114
              },
              {
                "question": "What is web hosting in the context of web development?",
                "options": [
                  "A service that allows individuals and organizations to make their websites accessible via the World Wide Web",
                  "A method of creating dynamic web pages",
                  "A technique for optimizing website performance",
                  "A module covered in the CSS section"
                ],
                "questionId": 115
              }
            ]
          },
          {
            "title": "Wrap up",
            "video": "/htmlcourse/wrap_up.m3u8",
            "duration": "2:07",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Congratulations on completing the course! In this final module, recap your journey, reflect on your accomplishments, and gain insights into the next steps in your web development adventure."
          }
        ],
        "language": "Tamil",
        "requirements": [
          "Text editor for writing HTML code",
          "Web Browser to view the output of HTML code"
        ],
        "author": "N.U.Thejas hari",
        "authorInsta": "https://www.instagram.com/nuthejashari/",
        "meetingLink": "",
        "whatsappGroup": "",
        "recordedVideo": "",
        "courseId": "101110",
        "locked": false,
        "videos": "35",
        "projects": "2",
        "duration": "4 Hours",
        "paid": "",
        "cancellable": false,
        "createdAt": "2024-01-01T06:43:50.699Z",
        "updatedAt": "2024-01-01T06:43:50.699Z",
        "__v": 0,
        "completed": false,
        "enrolledOn": "2024-01-01T13:49:37.982Z",
        "certificate": "",
        "name": "Dinakar Sowmiyan R",
        "userId": "6592c2eacb9c977da7dd7ef5",
        "progress": 0,
        "allNotes": []
      }
    ],
    "createdAt": "2024-01-01T13:49:30.115Z",
    "updatedAt": "2024-02-08T15:20:57.171Z",
    "__v": 0
  },
  {
    "_id": "6592c6f1a852d72c021806aa",
    "name": "Ilango T",
    "email": "lalithilango51@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Intermediate",
    "registeredWorkshops": [],
    "enrolledCoursesId": [
      "101110"
    ],
    "enrolledCoursesData": [
      {
        "_id": "65925f26f5f0ffa3b0e38586",
        "title": "Basics of Networking and HTML Beginner to Advanced Course",
        "description": "Learn web development fundamentals, covering frontend, backend, and database structures. Explore client-server dynamics, APIs, various IP types, DNS workings, and HTML essentials with an introduction to CSS for crafting interactive websites",
        "image": "/html.png",
        "content": [
          {
            "title": "Course Introduction",
            "video": "/htmlcourse/intro.m3u8",
            "duration": "0:32",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Welcome to the course! In this introductory module, you'll get a glimpse of what's in store. We'll outline the course structure, set expectations, and highlight the outcomes you can anticipate upon completion."
          },
          {
            "title": "Expectations & Outcomes",
            "video": "/htmlcourse/CourseOutcomes&Scope.m3u8",
            "duration": "1:21",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Understand the goals of this course and what you'll gain by the end. We'll discuss the skills you'll acquire, the knowledge you'll gain, and how it will benefit you in the realm of web development and networking."
          },
          {
            "title": "Web Development & Scopes",
            "video": "/htmlcourse/WebDevelopment&Scopes.m3u8",
            "duration": "8:54",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Explore the vast landscape of web development careers. Learn about the diverse scopes and job opportunities available in the industry, providing you with insights to shape your career path."
          },
          {
            "title": "Frontend Backend Architecture",
            "video": "/htmlcourse/FrontendBackendArchitecture.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Delve into the intricacies of frontend and backend architecture. Understand how these components work together to create seamless and responsive web applications, laying the foundation for your development journey."
          },
          {
            "title": "Database",
            "video": "/htmlcourse/database.m3u8",
            "duration": "1:07",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Uncover the importance of databases in web development. Learn what are the types of database available and the free cloud services providing free database for developers."
          },
          {
            "title": "IP & Types",
            "video": "/htmlcourse/ip internal & external.m3u8",
            "duration": "9:35",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Navigate the world of Internet Protocol (IP) addresses. Gain a comprehensive understanding of IP types and their significance in the networking landscape."
          },
          {
            "title": "IPv4 vs IPv6",
            "video": "/htmlcourse/ipv4 vs ipv6.m3u8",
            "duration": "7:12",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Compare IPv4 and IPv6, the two versions of the Internet Protocol. Understand the differences and advancements that IPv6 brings to address the limitations of IPv4."
          },
          {
            "title": "Static vs Dynamic IP",
            "video": "/htmlcourse/static_vs_dynamic_ip.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the distinction between static and dynamic IP addresses. Learn how each type is assigned and its impact on network configurations."
          },
          {
            "title": "Quiz 1",
            "quiz": true,
            "locked": false,
            "completed": false,
            "questions": [
              {
                "question": "What does \"frontend\" refer to in web development?",
                "options": [
                  "The part of a website users interact with",
                  "The server-side logic of a website",
                  "The database management system",
                  "The network infrastructure"
                ],
                "questionId": 100
              },
              {
                "question": "What is the primary role of \"backend\" in web development?",
                "options": [
                  "Managing the user interface",
                  "Handling server-side logic and databases",
                  "Designing responsive layouts",
                  "Implementing frontend styles"
                ],
                "questionId": 101
              },
              {
                "question": "What does \"IP\" stand for in networking?",
                "options": [
                  "Internet Provider",
                  "Internet Protocol",
                  "Information Processing",
                  "Interface Port"
                ],
                "questionId": 102
              },
              {
                "question": " What is the total range of each octet in an IPv4 address?",
                "options": [
                  "0-100",
                  "0-127",
                  "0-255",
                  "0-64"
                ],
                "questionId": 103
              }
            ]
          },
          {
            "title": "DNS",
            "video": "/htmlcourse/dns.m3u8",
            "duration": "10:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into the Domain Name System (DNS) and unravel the process of translating domain names to IP addresses. Explore the role DNS plays in making web browsing seamless."
          },
          {
            "title": "What is API?",
            "video": "/htmlcourse/api.m3u8",
            "duration": "3:12",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Application Programming Interfaces (APIs). Understand their significance in web development, facilitating communication between different software systems."
          },
          {
            "title": "What is HTML",
            "video": "/htmlcourse/what_is_html.m3u8",
            "duration": "2:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Begin your journey into the core of web development with HTML. Learn the basics of structuring web content and creating the foundation for interactive websites."
          },
          {
            "title": "HTML Page Structure",
            "video": "/htmlcourse/HTML_page_structure.m3u8",
            "duration": "3:33",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the art of organizing your web pages. Explore HTML tags that define the structure of a webpage, providing a solid foundation for your coding endeavors."
          },
          {
            "title": "Quiz 2",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the primary function of DNS in web development?",
                "options": [
                  "To design responsive user interfaces",
                  "To translate domain names to IP addresses",
                  "To manage server-side logic",
                  "To encrypt website data"
                ],
                "questionId": 104
              },
              {
                "question": "What does 'API' stand for in web development?",
                "options": [
                  "Advanced Programming Interface",
                  "Application Programming Interface",
                  "Automated Processing Interface",
                  "Advanced Protocol Integration"
                ],
                "questionId": 105
              },
              {
                "question": "What is the main markup language used for creating web pages??",
                "options": [
                  "XML",
                  "XAMPP",
                  "HTML",
                  "CSS"
                ],
                "questionId": 106
              },
              {
                "question": "What does 'HTML' stand for?",
                "options": [
                  "Hyper Transfer Markup Language",
                  "High-Level Text Management Language",
                  "Hyperlink and Text Management Language",
                  "HyperText Markup Language"
                ],
                "questionId": 107
              }
            ]
          },
          {
            "title": "Text tags",
            "video": "/htmlcourse/text_tags.m3u8",
            "duration": "18:55",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore the world of text manipulation in HTML. Discover tags that enhance the presentation of textual content on your web pages."
          },
          {
            "title": "List tags",
            "video": "/htmlcourse/list_tags.m3u8",
            "duration": "5:29",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore HTML's list tags to efficiently structure information. Learn how to create ordered and unordered lists for better content organization."
          },
          {
            "title": "Anchor tag",
            "video": "/htmlcourse/Anchor_tag.m3u8",
            "duration": "7:53",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unlock the power of hyperlinking with the anchor tag. Understand how to connect different pages and resources within your website."
          },
          {
            "title": "Image tag",
            "video": "/htmlcourse/image_tag.m3u8",
            "duration": "6:48",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Bring visual appeal to your web pages with the image tag. Learn how to integrate images seamlessly into your HTML content."
          },
          {
            "title": "Audio & video tag",
            "video": "/htmlcourse/audio_and_video_tag.m3u8",
            "duration": "7:56",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user engagement with multimedia elements. Explore the audio and video tags to incorporate media seamlessly into your web projects."
          },
          {
            "title": "iframe & embed tag",
            "video": "/htmlcourse/iframe_and_embed_tag.m3u8",
            "duration": "7:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Harness the capabilities of iframe and embed tags. Understand how these tags enable the integration of external content within your web pages."
          },
          {
            "title": "Div tag",
            "video": "/htmlcourse/div_tag.m3u8",
            "duration": "3:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the versatile div tag. Learn how it acts as a container, allowing you to structure and style your HTML content effectively."
          },
          {
            "title": "Input tags",
            "video": "/htmlcourse/input_tag.m3u8",
            "duration": "14:01",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into user interaction with HTML input tags. Explore various input types and understand how they enable user data input."
          },
          {
            "title": "Button tag",
            "video": "/htmlcourse/button_tag.m3u8",
            "duration": "1:43",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user experience with interactive buttons. Learn the ins and outs of the button tag and its various applications."
          },
          {
            "title": "Form part 1",
            "video": "/htmlcourse/form_tag_1.m3u8",
            "duration": "9:09",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embark on the journey of web forms. In part one, explore the essential elements that make up a form, setting the stage for user data collection."
          },
          {
            "title": "Form part 2",
            "video": "/htmlcourse/form_tag_2.m3u8",
            "duration": "8:00",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Delve deeper into the world of web forms. In part two, learn about form validation, submission methods, and enhance the functionality of your forms."
          },
          {
            "title": "Table tag",
            "video": "/htmlcourse/table_tag.m3u8",
            "duration": "4:42",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Uncover the power of HTML tables. Learn how to structure and display data in a tabular format for improved readability."
          },
          {
            "title": "Semantic HTML - 1",
            "video": "/htmlcourse/semantic_html_1.m3u8",
            "duration": "5:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embrace semantic HTML for enhanced accessibility and SEO. In part one, understand how semantic tags contribute to the meaning and structure of your content."
          },
          {
            "title": "Semantic HTML - 2",
            "video": "/htmlcourse/semantic_html_2.m3u8",
            "duration": "2:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your journey into semantic HTML. In part two, explore additional tags that enrich the semantics of your web pages."
          },
          {
            "title": "Web Crawler",
            "video": "/htmlcourse/web_crawler.m3u8",
            "duration": "3:40",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Understand how websites are ranked to top by web crawling. Understand the fundamentals of how search engines navigate and index content across the vast web."
          },
          {
            "title": "Quiz 3",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the purpose of 'Text tags' in HTML?",
                "options": [
                  "To create lists of items",
                  "To structure webpage content",
                  "To manipulate text formatting",
                  "To embed multimedia elements"
                ],
                "questionId": 108
              },
              {
                "question": "Which HTML tags are used for creating ordered and unordered lists?",
                "options": [
                  "<ol> and <ul>",
                  "<ul> and <li>",
                  "<list> and <item>",
                  "<order> and <item>"
                ],
                "questionId": 109
              },
              {
                "question": "What does the 'Anchor tag' (<a>) primarily facilitate in HTML?",
                "options": [
                  "Embedding images",
                  "Creating hyperlinks",
                  "Styling webpage elements",
                  "Inserting audio content"
                ],
                "questionId": 110
              },
              {
                "question": "What does the term 'Web Crawler' refer to in the context of HTML?",
                "options": [
                  "A spider-like creature",
                  "A tool for organizing files",
                  "A script for automating tasks",
                  "A program for navigating and indexing web content"
                ],
                "questionId": 111
              }
            ]
          },
          {
            "title": "More HTML tags",
            "video": "/htmlcourse/more_html_tags.m3u8",
            "duration": "1:39",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Expand your HTML toolkit with additional tags. Discover tags that cater to specific needs, enhancing the richness of your web pages."
          },
          {
            "title": "Project 1 - 1",
            "video": "/htmlcourse/project_1_1.m3u8",
            "duration": "7:38",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Apply your newfound HTML skills in a practical project. In part one, embark on a hands-on project to where we build a small FAQ page by using semantic HTML tags and using font awesome icons."
          },
          {
            "title": "Project 1 - 2",
            "video": "/htmlcourse/project_1_2.m3u8",
            "duration": "8:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your project journey in part two. Apply advanced HTML concepts and solidify your skills through a comprehensive project that showcases your abilities."
          },
          {
            "title": "Project 2",
            "video": "/htmlcourse/project_2.m3u8",
            "duration": "9:05",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Level up with an in-depth project. Demonstrate your proficiency in HTML as you undertake a larger-scale project, integrating various elements learned throughout the course."
          },
          {
            "title": "Web Hosting",
            "video": "/htmlcourse/web_hosting.m3u8",
            "duration": "6:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unravel the mysteries of web hosting. Learn how to take your web projects live by exploring different hosting options and understanding the basics of site configurations."
          },
          {
            "title": "CSS",
            "video": "/htmlcourse/intro_to_css.m3u8",
            "duration": "8:22",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Transition seamlessly from HTML to CSS. In this module, delve into the world of Cascading Style Sheets to add style and visual appeal to your web pages."
          },
          {
            "title": "HTML and Project Quiz",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "In 'Project 1 - 1', what HTML semantic tags were primarily used for creating a FAQ page?",
                "options": [
                  "<div> and <span>",
                  "<details> and <summary>",
                  "<ul> and <li>",
                  "<section> and <article>"
                ],
                "questionId": 112
              },
              {
                "question": "In 'Project 1 - 2', how did you make an image float using HTML?",
                "options": [
                  "Applied 'float' property in CSS",
                  "Used 'position: absolute'",
                  "Set 'display: inline-block'",
                  "Inserted a 'float' tag around the image"
                ],
                "questionId": 113
              },
              {
                "question": "What was the focus of 'Project 2' in your HTML course?",
                "options": [
                  "Creating an FAQ page",
                  "Designing a personal portfolio",
                  "Developing a basic app documentation",
                  "Implementing a chat application"
                ],
                "questionId": 114
              },
              {
                "question": "What is web hosting in the context of web development?",
                "options": [
                  "A service that allows individuals and organizations to make their websites accessible via the World Wide Web",
                  "A method of creating dynamic web pages",
                  "A technique for optimizing website performance",
                  "A module covered in the CSS section"
                ],
                "questionId": 115
              }
            ]
          },
          {
            "title": "Wrap up",
            "video": "/htmlcourse/wrap_up.m3u8",
            "duration": "2:07",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Congratulations on completing the course! In this final module, recap your journey, reflect on your accomplishments, and gain insights into the next steps in your web development adventure."
          }
        ],
        "language": "Tamil",
        "requirements": [
          "Text editor for writing HTML code",
          "Web Browser to view the output of HTML code"
        ],
        "author": "N.U.Thejas hari",
        "authorInsta": "https://www.instagram.com/nuthejashari/",
        "meetingLink": "",
        "whatsappGroup": "",
        "recordedVideo": "",
        "courseId": "101110",
        "locked": false,
        "videos": "35",
        "projects": "2",
        "duration": "4 Hours",
        "paid": "",
        "cancellable": false,
        "createdAt": "2024-01-01T06:43:50.699Z",
        "updatedAt": "2024-01-01T06:43:50.699Z",
        "__v": 0,
        "completed": false,
        "enrolledOn": "2024-01-01T14:06:54.131Z",
        "certificate": "",
        "name": "Ilango T",
        "userId": "6592c6f1a852d72c021806aa",
        "progress": 0,
        "allNotes": []
      }
    ],
    "createdAt": "2024-01-01T14:06:41.238Z",
    "updatedAt": "2024-01-06T10:28:43.452Z",
    "__v": 0
  },
  {
    "_id": "6592cfdc2238a04ed04147ab",
    "name": "Visnudev",
    "email": "glsgangasaravanan@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-01T14:44:44.959Z",
    "updatedAt": "2024-01-24T11:04:28.585Z",
    "__v": 0
  },
  {
    "_id": "6592cff10ffa1d42a9c8ed68",
    "name": "Keerthana G",
    "email": "kethypro234@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Intermediate",
    "registeredWorkshops": [],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-01T14:45:05.413Z",
    "updatedAt": "2024-01-01T14:45:05.413Z",
    "__v": 0
  },
  {
    "_id": "6592d47443cb917170c2f408",
    "name": "Hoo Gaa",
    "email": "hoogaa84@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Intermediate",
    "registeredWorkshops": [],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-01T15:04:20.205Z",
    "updatedAt": "2024-01-01T15:04:20.205Z",
    "__v": 0
  },
  {
    "_id": "6592f2f316ed1ce22ebae9cd",
    "name": "Siva A K",
    "email": "sivaak1703@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b4bd00ed9d87145d75ebe2",
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-01T17:14:27.355Z",
    "updatedAt": "2024-02-01T05:53:10.147Z",
    "__v": 0
  },
  {
    "_id": "6592f7cf542fa2c1e8ca912e",
    "name": "Sameerarif",
    "email": "sameerarif363@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [],
    "enrolledCoursesId": [
      "101110"
    ],
    "enrolledCoursesData": [
      {
        "_id": "65925f26f5f0ffa3b0e38586",
        "title": "Basics of Networking and HTML Beginner to Advanced Course",
        "description": "Learn web development fundamentals, covering frontend, backend, and database structures. Explore client-server dynamics, APIs, various IP types, DNS workings, and HTML essentials with an introduction to CSS for crafting interactive websites",
        "image": "/html.png",
        "content": [
          {
            "title": "Course Introduction",
            "video": "/htmlcourse/intro.m3u8",
            "duration": "0:32",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Welcome to the course! In this introductory module, you'll get a glimpse of what's in store. We'll outline the course structure, set expectations, and highlight the outcomes you can anticipate upon completion."
          },
          {
            "title": "Expectations & Outcomes",
            "video": "/htmlcourse/CourseOutcomes&Scope.m3u8",
            "duration": "1:21",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Understand the goals of this course and what you'll gain by the end. We'll discuss the skills you'll acquire, the knowledge you'll gain, and how it will benefit you in the realm of web development and networking."
          },
          {
            "title": "Web Development & Scopes",
            "video": "/htmlcourse/WebDevelopment&Scopes.m3u8",
            "duration": "8:54",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Explore the vast landscape of web development careers. Learn about the diverse scopes and job opportunities available in the industry, providing you with insights to shape your career path."
          },
          {
            "title": "Frontend Backend Architecture",
            "video": "/htmlcourse/FrontendBackendArchitecture.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Delve into the intricacies of frontend and backend architecture. Understand how these components work together to create seamless and responsive web applications, laying the foundation for your development journey."
          },
          {
            "title": "Database",
            "video": "/htmlcourse/database.m3u8",
            "duration": "1:07",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Uncover the importance of databases in web development. Learn what are the types of database available and the free cloud services providing free database for developers."
          },
          {
            "title": "IP & Types",
            "video": "/htmlcourse/ip internal & external.m3u8",
            "duration": "9:35",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Navigate the world of Internet Protocol (IP) addresses. Gain a comprehensive understanding of IP types and their significance in the networking landscape."
          },
          {
            "title": "IPv4 vs IPv6",
            "video": "/htmlcourse/ipv4 vs ipv6.m3u8",
            "duration": "7:12",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Compare IPv4 and IPv6, the two versions of the Internet Protocol. Understand the differences and advancements that IPv6 brings to address the limitations of IPv4."
          },
          {
            "title": "Static vs Dynamic IP",
            "video": "/htmlcourse/static_vs_dynamic_ip.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Explore the distinction between static and dynamic IP addresses. Learn how each type is assigned and its impact on network configurations."
          },
          {
            "title": "Quiz 1",
            "quiz": true,
            "locked": false,
            "completed": true,
            "questions": [
              {
                "question": "What does \"frontend\" refer to in web development?",
                "options": [
                  "The part of a website users interact with",
                  "The server-side logic of a website",
                  "The database management system",
                  "The network infrastructure"
                ],
                "questionId": 100,
                "selected": "The part of a website users interact with"
              },
              {
                "question": "What is the primary role of \"backend\" in web development?",
                "options": [
                  "Managing the user interface",
                  "Handling server-side logic and databases",
                  "Designing responsive layouts",
                  "Implementing frontend styles"
                ],
                "questionId": 101,
                "selected": "Handling server-side logic and databases"
              },
              {
                "question": "What does \"IP\" stand for in networking?",
                "options": [
                  "Internet Provider",
                  "Internet Protocol",
                  "Information Processing",
                  "Interface Port"
                ],
                "questionId": 102,
                "selected": "Internet Protocol"
              },
              {
                "question": " What is the total range of each octet in an IPv4 address?",
                "options": [
                  "0-100",
                  "0-127",
                  "0-255",
                  "0-64"
                ],
                "questionId": 103,
                "selected": "0-255"
              }
            ]
          },
          {
            "title": "DNS",
            "video": "/htmlcourse/dns.m3u8",
            "duration": "10:11",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Dive into the Domain Name System (DNS) and unravel the process of translating domain names to IP addresses. Explore the role DNS plays in making web browsing seamless."
          },
          {
            "title": "What is API?",
            "video": "/htmlcourse/api.m3u8",
            "duration": "3:12",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Application Programming Interfaces (APIs). Understand their significance in web development, facilitating communication between different software systems."
          },
          {
            "title": "What is HTML",
            "video": "/htmlcourse/what_is_html.m3u8",
            "duration": "2:11",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Begin your journey into the core of web development with HTML. Learn the basics of structuring web content and creating the foundation for interactive websites."
          },
          {
            "title": "HTML Page Structure",
            "video": "/htmlcourse/HTML_page_structure.m3u8",
            "duration": "3:33",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Master the art of organizing your web pages. Explore HTML tags that define the structure of a webpage, providing a solid foundation for your coding endeavors."
          },
          {
            "title": "Quiz 2",
            "quiz": true,
            "locked": false,
            "completed": true,
            "questions": [
              {
                "question": "What is the primary function of DNS in web development?",
                "options": [
                  "To design responsive user interfaces",
                  "To translate domain names to IP addresses",
                  "To manage server-side logic",
                  "To encrypt website data"
                ],
                "questionId": 104,
                "selected": "To translate domain names to IP addresses"
              },
              {
                "question": "What does 'API' stand for in web development?",
                "options": [
                  "Advanced Programming Interface",
                  "Application Programming Interface",
                  "Automated Processing Interface",
                  "Advanced Protocol Integration"
                ],
                "questionId": 105,
                "selected": "Application Programming Interface"
              },
              {
                "question": "What is the main markup language used for creating web pages??",
                "options": [
                  "XML",
                  "XAMPP",
                  "HTML",
                  "CSS"
                ],
                "questionId": 106,
                "selected": "HTML"
              },
              {
                "question": "What does 'HTML' stand for?",
                "options": [
                  "Hyper Transfer Markup Language",
                  "High-Level Text Management Language",
                  "Hyperlink and Text Management Language",
                  "HyperText Markup Language"
                ],
                "questionId": 107,
                "selected": "HyperText Markup Language"
              }
            ]
          },
          {
            "title": "Text tags",
            "video": "/htmlcourse/text_tags.m3u8",
            "duration": "18:55",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Explore the world of text manipulation in HTML. Discover tags that enhance the presentation of textual content on your web pages."
          },
          {
            "title": "List tags",
            "video": "/htmlcourse/list_tags.m3u8",
            "duration": "5:29",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Explore HTML's list tags to efficiently structure information. Learn how to create ordered and unordered lists for better content organization."
          },
          {
            "title": "Anchor tag",
            "video": "/htmlcourse/Anchor_tag.m3u8",
            "duration": "7:53",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Unlock the power of hyperlinking with the anchor tag. Understand how to connect different pages and resources within your website."
          },
          {
            "title": "Image tag",
            "video": "/htmlcourse/image_tag.m3u8",
            "duration": "6:48",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Bring visual appeal to your web pages with the image tag. Learn how to integrate images seamlessly into your HTML content."
          },
          {
            "title": "Audio & video tag",
            "video": "/htmlcourse/audio_and_video_tag.m3u8",
            "duration": "7:56",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Elevate user engagement with multimedia elements. Explore the audio and video tags to incorporate media seamlessly into your web projects."
          },
          {
            "title": "iframe & embed tag",
            "video": "/htmlcourse/iframe_and_embed_tag.m3u8",
            "duration": "7:47",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Harness the capabilities of iframe and embed tags. Understand how these tags enable the integration of external content within your web pages."
          },
          {
            "title": "Div tag",
            "video": "/htmlcourse/div_tag.m3u8",
            "duration": "3:26",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Master the versatile div tag. Learn how it acts as a container, allowing you to structure and style your HTML content effectively."
          },
          {
            "title": "Input tags",
            "video": "/htmlcourse/input_tag.m3u8",
            "duration": "14:01",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Dive into user interaction with HTML input tags. Explore various input types and understand how they enable user data input."
          },
          {
            "title": "Button tag",
            "video": "/htmlcourse/button_tag.m3u8",
            "duration": "1:43",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Elevate user experience with interactive buttons. Learn the ins and outs of the button tag and its various applications."
          },
          {
            "title": "Form part 1",
            "video": "/htmlcourse/form_tag_1.m3u8",
            "duration": "9:09",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Embark on the journey of web forms. In part one, explore the essential elements that make up a form, setting the stage for user data collection."
          },
          {
            "title": "Form part 2",
            "video": "/htmlcourse/form_tag_2.m3u8",
            "duration": "8:00",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Delve deeper into the world of web forms. In part two, learn about form validation, submission methods, and enhance the functionality of your forms."
          },
          {
            "title": "Table tag",
            "video": "/htmlcourse/table_tag.m3u8",
            "duration": "4:42",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Uncover the power of HTML tables. Learn how to structure and display data in a tabular format for improved readability."
          },
          {
            "title": "Semantic HTML - 1",
            "video": "/htmlcourse/semantic_html_1.m3u8",
            "duration": "5:13",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Embrace semantic HTML for enhanced accessibility and SEO. In part one, understand how semantic tags contribute to the meaning and structure of your content."
          },
          {
            "title": "Semantic HTML - 2",
            "video": "/htmlcourse/semantic_html_2.m3u8",
            "duration": "2:13",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Continue your journey into semantic HTML. In part two, explore additional tags that enrich the semantics of your web pages."
          },
          {
            "title": "Web Crawler",
            "video": "/htmlcourse/web_crawler.m3u8",
            "duration": "3:40",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Understand how websites are ranked to top by web crawling. Understand the fundamentals of how search engines navigate and index content across the vast web."
          },
          {
            "title": "Quiz 3",
            "quiz": true,
            "locked": false,
            "completed": true,
            "questions": [
              {
                "question": "What is the purpose of 'Text tags' in HTML?",
                "options": [
                  "To create lists of items",
                  "To structure webpage content",
                  "To manipulate text formatting",
                  "To embed multimedia elements"
                ],
                "questionId": 108,
                "selected": "To manipulate text formatting"
              },
              {
                "question": "Which HTML tags are used for creating ordered and unordered lists?",
                "options": [
                  "<ol> and <ul>",
                  "<ul> and <li>",
                  "<list> and <item>",
                  "<order> and <item>"
                ],
                "questionId": 109,
                "selected": "<ol> and <ul>"
              },
              {
                "question": "What does the 'Anchor tag' (<a>) primarily facilitate in HTML?",
                "options": [
                  "Embedding images",
                  "Creating hyperlinks",
                  "Styling webpage elements",
                  "Inserting audio content"
                ],
                "questionId": 110,
                "selected": "Creating hyperlinks"
              },
              {
                "question": "What does the term 'Web Crawler' refer to in the context of HTML?",
                "options": [
                  "A spider-like creature",
                  "A tool for organizing files",
                  "A script for automating tasks",
                  "A program for navigating and indexing web content"
                ],
                "questionId": 111,
                "selected": "A program for navigating and indexing web content"
              }
            ]
          },
          {
            "title": "More HTML tags",
            "video": "/htmlcourse/more_html_tags.m3u8",
            "duration": "1:39",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Expand your HTML toolkit with additional tags. Discover tags that cater to specific needs, enhancing the richness of your web pages."
          },
          {
            "title": "Project 1 - 1",
            "video": "/htmlcourse/project_1_1.m3u8",
            "duration": "7:38",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Apply your newfound HTML skills in a practical project. In part one, embark on a hands-on project to where we build a small FAQ page by using semantic HTML tags and using font awesome icons."
          },
          {
            "title": "Project 1 - 2",
            "video": "/htmlcourse/project_1_2.m3u8",
            "duration": "8:47",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Continue your project journey in part two. Apply advanced HTML concepts and solidify your skills through a comprehensive project that showcases your abilities."
          },
          {
            "title": "Project 2",
            "video": "/htmlcourse/project_2.m3u8",
            "duration": "9:05",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Level up with an in-depth project. Demonstrate your proficiency in HTML as you undertake a larger-scale project, integrating various elements learned throughout the course."
          },
          {
            "title": "Web Hosting",
            "video": "/htmlcourse/web_hosting.m3u8",
            "duration": "6:26",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Unravel the mysteries of web hosting. Learn how to take your web projects live by exploring different hosting options and understanding the basics of site configurations."
          },
          {
            "title": "CSS",
            "video": "/htmlcourse/intro_to_css.m3u8",
            "duration": "8:22",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Transition seamlessly from HTML to CSS. In this module, delve into the world of Cascading Style Sheets to add style and visual appeal to your web pages."
          },
          {
            "title": "HTML and Project Quiz",
            "quiz": true,
            "locked": false,
            "completed": true,
            "questions": [
              {
                "question": "In 'Project 1 - 1', what HTML semantic tags were primarily used for creating a FAQ page?",
                "options": [
                  "<div> and <span>",
                  "<details> and <summary>",
                  "<ul> and <li>",
                  "<section> and <article>"
                ],
                "questionId": 112,
                "selected": "<details> and <summary>",
                "wrong": true
              },
              {
                "question": "In 'Project 1 - 2', how did you make an image float using HTML?",
                "options": [
                  "Applied 'float' property in CSS",
                  "Used 'position: absolute'",
                  "Set 'display: inline-block'",
                  "Inserted a 'float' tag around the image"
                ],
                "questionId": 113,
                "selected": "Applied 'float' property in CSS",
                "wrong": true
              },
              {
                "question": "What was the focus of 'Project 2' in your HTML course?",
                "options": [
                  "Creating an FAQ page",
                  "Designing a personal portfolio",
                  "Developing a basic app documentation",
                  "Implementing a chat application"
                ],
                "questionId": 114,
                "selected": "Developing a basic app documentation",
                "wrong": false
              },
              {
                "question": "What is web hosting in the context of web development?",
                "options": [
                  "A service that allows individuals and organizations to make their websites accessible via the World Wide Web",
                  "A method of creating dynamic web pages",
                  "A technique for optimizing website performance",
                  "A module covered in the CSS section"
                ],
                "questionId": 115,
                "selected": "A service that allows individuals and organizations to make their websites accessible via the World Wide Web",
                "wrong": false
              }
            ],
            "everythingCorrect": false
          },
          {
            "title": "Wrap up",
            "video": "/htmlcourse/wrap_up.m3u8",
            "duration": "2:07",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Congratulations on completing the course! In this final module, recap your journey, reflect on your accomplishments, and gain insights into the next steps in your web development adventure."
          }
        ],
        "language": "Tamil",
        "requirements": [
          "Text editor for writing HTML code",
          "Web Browser to view the output of HTML code"
        ],
        "author": "N.U.Thejas hari",
        "authorInsta": "https://www.instagram.com/nuthejashari/",
        "meetingLink": "",
        "whatsappGroup": "",
        "recordedVideo": "",
        "courseId": "101110",
        "locked": false,
        "videos": "35",
        "projects": "2",
        "duration": "4 Hours",
        "paid": "",
        "cancellable": false,
        "createdAt": "2024-01-01T06:43:50.699Z",
        "updatedAt": "2024-01-01T06:43:50.699Z",
        "__v": 0,
        "completed": false,
        "enrolledOn": "2024-01-01T17:35:32.374Z",
        "certificate": "",
        "name": "Sameerarif",
        "userId": "6592f7cf542fa2c1e8ca912e",
        "progress": 0,
        "allNotes": []
      }
    ],
    "createdAt": "2024-01-01T17:35:11.954Z",
    "updatedAt": "2024-01-06T12:01:32.250Z",
    "__v": 0
  },
  {
    "_id": "6593dbed4c056ad2cf0de5e7",
    "name": "Vishnu Kumar",
    "email": "vishnu2134kumar@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Novice",
    "registeredWorkshops": [],
    "enrolledCoursesId": [
      "101110"
    ],
    "enrolledCoursesData": [
      {
        "_id": "65925f26f5f0ffa3b0e38586",
        "title": "Basics of Networking and HTML Beginner to Advanced Course",
        "description": "Learn web development fundamentals, covering frontend, backend, and database structures. Explore client-server dynamics, APIs, various IP types, DNS workings, and HTML essentials with an introduction to CSS for crafting interactive websites",
        "image": "/html.png",
        "content": [
          {
            "title": "Course Introduction",
            "video": "/htmlcourse/intro.m3u8",
            "duration": "0:32",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Welcome to the course! In this introductory module, you'll get a glimpse of what's in store. We'll outline the course structure, set expectations, and highlight the outcomes you can anticipate upon completion."
          },
          {
            "title": "Expectations & Outcomes",
            "video": "/htmlcourse/CourseOutcomes&Scope.m3u8",
            "duration": "1:21",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Understand the goals of this course and what you'll gain by the end. We'll discuss the skills you'll acquire, the knowledge you'll gain, and how it will benefit you in the realm of web development and networking."
          },
          {
            "title": "Web Development & Scopes",
            "video": "/htmlcourse/WebDevelopment&Scopes.m3u8",
            "duration": "8:54",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Explore the vast landscape of web development careers. Learn about the diverse scopes and job opportunities available in the industry, providing you with insights to shape your career path."
          },
          {
            "title": "Frontend Backend Architecture",
            "video": "/htmlcourse/FrontendBackendArchitecture.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Delve into the intricacies of frontend and backend architecture. Understand how these components work together to create seamless and responsive web applications, laying the foundation for your development journey."
          },
          {
            "title": "Database",
            "video": "/htmlcourse/database.m3u8",
            "duration": "1:07",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Uncover the importance of databases in web development. Learn what are the types of database available and the free cloud services providing free database for developers."
          },
          {
            "title": "IP & Types",
            "video": "/htmlcourse/ip internal & external.m3u8",
            "duration": "9:35",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Navigate the world of Internet Protocol (IP) addresses. Gain a comprehensive understanding of IP types and their significance in the networking landscape."
          },
          {
            "title": "IPv4 vs IPv6",
            "video": "/htmlcourse/ipv4 vs ipv6.m3u8",
            "duration": "7:12",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Compare IPv4 and IPv6, the two versions of the Internet Protocol. Understand the differences and advancements that IPv6 brings to address the limitations of IPv4."
          },
          {
            "title": "Static vs Dynamic IP",
            "video": "/htmlcourse/static_vs_dynamic_ip.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the distinction between static and dynamic IP addresses. Learn how each type is assigned and its impact on network configurations."
          },
          {
            "title": "Quiz 1",
            "quiz": true,
            "locked": false,
            "completed": false,
            "questions": [
              {
                "question": "What does \"frontend\" refer to in web development?",
                "options": [
                  "The part of a website users interact with",
                  "The server-side logic of a website",
                  "The database management system",
                  "The network infrastructure"
                ],
                "questionId": 100
              },
              {
                "question": "What is the primary role of \"backend\" in web development?",
                "options": [
                  "Managing the user interface",
                  "Handling server-side logic and databases",
                  "Designing responsive layouts",
                  "Implementing frontend styles"
                ],
                "questionId": 101
              },
              {
                "question": "What does \"IP\" stand for in networking?",
                "options": [
                  "Internet Provider",
                  "Internet Protocol",
                  "Information Processing",
                  "Interface Port"
                ],
                "questionId": 102
              },
              {
                "question": " What is the total range of each octet in an IPv4 address?",
                "options": [
                  "0-100",
                  "0-127",
                  "0-255",
                  "0-64"
                ],
                "questionId": 103
              }
            ]
          },
          {
            "title": "DNS",
            "video": "/htmlcourse/dns.m3u8",
            "duration": "10:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into the Domain Name System (DNS) and unravel the process of translating domain names to IP addresses. Explore the role DNS plays in making web browsing seamless."
          },
          {
            "title": "What is API?",
            "video": "/htmlcourse/api.m3u8",
            "duration": "3:12",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Application Programming Interfaces (APIs). Understand their significance in web development, facilitating communication between different software systems."
          },
          {
            "title": "What is HTML",
            "video": "/htmlcourse/what_is_html.m3u8",
            "duration": "2:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Begin your journey into the core of web development with HTML. Learn the basics of structuring web content and creating the foundation for interactive websites."
          },
          {
            "title": "HTML Page Structure",
            "video": "/htmlcourse/HTML_page_structure.m3u8",
            "duration": "3:33",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the art of organizing your web pages. Explore HTML tags that define the structure of a webpage, providing a solid foundation for your coding endeavors."
          },
          {
            "title": "Quiz 2",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the primary function of DNS in web development?",
                "options": [
                  "To design responsive user interfaces",
                  "To translate domain names to IP addresses",
                  "To manage server-side logic",
                  "To encrypt website data"
                ],
                "questionId": 104
              },
              {
                "question": "What does 'API' stand for in web development?",
                "options": [
                  "Advanced Programming Interface",
                  "Application Programming Interface",
                  "Automated Processing Interface",
                  "Advanced Protocol Integration"
                ],
                "questionId": 105
              },
              {
                "question": "What is the main markup language used for creating web pages??",
                "options": [
                  "XML",
                  "XAMPP",
                  "HTML",
                  "CSS"
                ],
                "questionId": 106
              },
              {
                "question": "What does 'HTML' stand for?",
                "options": [
                  "Hyper Transfer Markup Language",
                  "High-Level Text Management Language",
                  "Hyperlink and Text Management Language",
                  "HyperText Markup Language"
                ],
                "questionId": 107
              }
            ]
          },
          {
            "title": "Text tags",
            "video": "/htmlcourse/text_tags.m3u8",
            "duration": "18:55",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore the world of text manipulation in HTML. Discover tags that enhance the presentation of textual content on your web pages."
          },
          {
            "title": "List tags",
            "video": "/htmlcourse/list_tags.m3u8",
            "duration": "5:29",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore HTML's list tags to efficiently structure information. Learn how to create ordered and unordered lists for better content organization."
          },
          {
            "title": "Anchor tag",
            "video": "/htmlcourse/Anchor_tag.m3u8",
            "duration": "7:53",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unlock the power of hyperlinking with the anchor tag. Understand how to connect different pages and resources within your website."
          },
          {
            "title": "Image tag",
            "video": "/htmlcourse/image_tag.m3u8",
            "duration": "6:48",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Bring visual appeal to your web pages with the image tag. Learn how to integrate images seamlessly into your HTML content."
          },
          {
            "title": "Audio & video tag",
            "video": "/htmlcourse/audio_and_video_tag.m3u8",
            "duration": "7:56",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user engagement with multimedia elements. Explore the audio and video tags to incorporate media seamlessly into your web projects."
          },
          {
            "title": "iframe & embed tag",
            "video": "/htmlcourse/iframe_and_embed_tag.m3u8",
            "duration": "7:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Harness the capabilities of iframe and embed tags. Understand how these tags enable the integration of external content within your web pages."
          },
          {
            "title": "Div tag",
            "video": "/htmlcourse/div_tag.m3u8",
            "duration": "3:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the versatile div tag. Learn how it acts as a container, allowing you to structure and style your HTML content effectively."
          },
          {
            "title": "Input tags",
            "video": "/htmlcourse/input_tag.m3u8",
            "duration": "14:01",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into user interaction with HTML input tags. Explore various input types and understand how they enable user data input."
          },
          {
            "title": "Button tag",
            "video": "/htmlcourse/button_tag.m3u8",
            "duration": "1:43",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user experience with interactive buttons. Learn the ins and outs of the button tag and its various applications."
          },
          {
            "title": "Form part 1",
            "video": "/htmlcourse/form_tag_1.m3u8",
            "duration": "9:09",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embark on the journey of web forms. In part one, explore the essential elements that make up a form, setting the stage for user data collection."
          },
          {
            "title": "Form part 2",
            "video": "/htmlcourse/form_tag_2.m3u8",
            "duration": "8:00",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Delve deeper into the world of web forms. In part two, learn about form validation, submission methods, and enhance the functionality of your forms."
          },
          {
            "title": "Table tag",
            "video": "/htmlcourse/table_tag.m3u8",
            "duration": "4:42",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Uncover the power of HTML tables. Learn how to structure and display data in a tabular format for improved readability."
          },
          {
            "title": "Semantic HTML - 1",
            "video": "/htmlcourse/semantic_html_1.m3u8",
            "duration": "5:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embrace semantic HTML for enhanced accessibility and SEO. In part one, understand how semantic tags contribute to the meaning and structure of your content."
          },
          {
            "title": "Semantic HTML - 2",
            "video": "/htmlcourse/semantic_html_2.m3u8",
            "duration": "2:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your journey into semantic HTML. In part two, explore additional tags that enrich the semantics of your web pages."
          },
          {
            "title": "Web Crawler",
            "video": "/htmlcourse/web_crawler.m3u8",
            "duration": "3:40",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Understand how websites are ranked to top by web crawling. Understand the fundamentals of how search engines navigate and index content across the vast web."
          },
          {
            "title": "Quiz 3",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the purpose of 'Text tags' in HTML?",
                "options": [
                  "To create lists of items",
                  "To structure webpage content",
                  "To manipulate text formatting",
                  "To embed multimedia elements"
                ],
                "questionId": 108
              },
              {
                "question": "Which HTML tags are used for creating ordered and unordered lists?",
                "options": [
                  "<ol> and <ul>",
                  "<ul> and <li>",
                  "<list> and <item>",
                  "<order> and <item>"
                ],
                "questionId": 109
              },
              {
                "question": "What does the 'Anchor tag' (<a>) primarily facilitate in HTML?",
                "options": [
                  "Embedding images",
                  "Creating hyperlinks",
                  "Styling webpage elements",
                  "Inserting audio content"
                ],
                "questionId": 110
              },
              {
                "question": "What does the term 'Web Crawler' refer to in the context of HTML?",
                "options": [
                  "A spider-like creature",
                  "A tool for organizing files",
                  "A script for automating tasks",
                  "A program for navigating and indexing web content"
                ],
                "questionId": 111
              }
            ]
          },
          {
            "title": "More HTML tags",
            "video": "/htmlcourse/more_html_tags.m3u8",
            "duration": "1:39",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Expand your HTML toolkit with additional tags. Discover tags that cater to specific needs, enhancing the richness of your web pages."
          },
          {
            "title": "Project 1 - 1",
            "video": "/htmlcourse/project_1_1.m3u8",
            "duration": "7:38",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Apply your newfound HTML skills in a practical project. In part one, embark on a hands-on project to where we build a small FAQ page by using semantic HTML tags and using font awesome icons."
          },
          {
            "title": "Project 1 - 2",
            "video": "/htmlcourse/project_1_2.m3u8",
            "duration": "8:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your project journey in part two. Apply advanced HTML concepts and solidify your skills through a comprehensive project that showcases your abilities."
          },
          {
            "title": "Project 2",
            "video": "/htmlcourse/project_2.m3u8",
            "duration": "9:05",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Level up with an in-depth project. Demonstrate your proficiency in HTML as you undertake a larger-scale project, integrating various elements learned throughout the course."
          },
          {
            "title": "Web Hosting",
            "video": "/htmlcourse/web_hosting.m3u8",
            "duration": "6:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unravel the mysteries of web hosting. Learn how to take your web projects live by exploring different hosting options and understanding the basics of site configurations."
          },
          {
            "title": "CSS",
            "video": "/htmlcourse/intro_to_css.m3u8",
            "duration": "8:22",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Transition seamlessly from HTML to CSS. In this module, delve into the world of Cascading Style Sheets to add style and visual appeal to your web pages."
          },
          {
            "title": "HTML and Project Quiz",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "In 'Project 1 - 1', what HTML semantic tags were primarily used for creating a FAQ page?",
                "options": [
                  "<div> and <span>",
                  "<details> and <summary>",
                  "<ul> and <li>",
                  "<section> and <article>"
                ],
                "questionId": 112
              },
              {
                "question": "In 'Project 1 - 2', how did you make an image float using HTML?",
                "options": [
                  "Applied 'float' property in CSS",
                  "Used 'position: absolute'",
                  "Set 'display: inline-block'",
                  "Inserted a 'float' tag around the image"
                ],
                "questionId": 113
              },
              {
                "question": "What was the focus of 'Project 2' in your HTML course?",
                "options": [
                  "Creating an FAQ page",
                  "Designing a personal portfolio",
                  "Developing a basic app documentation",
                  "Implementing a chat application"
                ],
                "questionId": 114
              },
              {
                "question": "What is web hosting in the context of web development?",
                "options": [
                  "A service that allows individuals and organizations to make their websites accessible via the World Wide Web",
                  "A method of creating dynamic web pages",
                  "A technique for optimizing website performance",
                  "A module covered in the CSS section"
                ],
                "questionId": 115
              }
            ]
          },
          {
            "title": "Wrap up",
            "video": "/htmlcourse/wrap_up.m3u8",
            "duration": "2:07",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Congratulations on completing the course! In this final module, recap your journey, reflect on your accomplishments, and gain insights into the next steps in your web development adventure."
          }
        ],
        "language": "Tamil",
        "requirements": [
          "Text editor for writing HTML code",
          "Web Browser to view the output of HTML code"
        ],
        "author": "N.U.Thejas hari",
        "authorInsta": "https://www.instagram.com/nuthejashari/",
        "meetingLink": "",
        "whatsappGroup": "",
        "recordedVideo": "",
        "courseId": "101110",
        "locked": false,
        "videos": "35",
        "projects": "2",
        "duration": "4 Hours",
        "paid": "",
        "cancellable": false,
        "createdAt": "2024-01-01T06:43:50.699Z",
        "updatedAt": "2024-01-01T06:43:50.699Z",
        "__v": 0,
        "completed": false,
        "enrolledOn": "2024-01-02T09:49:09.395Z",
        "certificate": "",
        "name": "Vishnu Kumar",
        "userId": "6593dbed4c056ad2cf0de5e7",
        "progress": 0,
        "allNotes": []
      }
    ],
    "createdAt": "2024-01-02T09:48:29.515Z",
    "updatedAt": "2024-01-02T13:14:51.496Z",
    "__v": 0
  },
  {
    "_id": "659c1fc0dddccb84c81cf8b5",
    "name": "215108 IT",
    "email": "215108it@klnce.edu",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Novice",
    "registeredWorkshops": [],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-08T16:16:00.367Z",
    "updatedAt": "2024-01-08T16:16:00.367Z",
    "__v": 0
  },
  {
    "_id": "659d0f1f343af4d940a78666",
    "name": "Ray_range35",
    "email": "rayrange35@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [],
    "enrolledCoursesId": [
      "101110"
    ],
    "enrolledCoursesData": [
      {
        "_id": "65925f26f5f0ffa3b0e38586",
        "title": "Basics of Networking and HTML Beginner to Advanced Course",
        "description": "Learn web development fundamentals, covering frontend, backend, and database structures. Explore client-server dynamics, APIs, various IP types, DNS workings, and HTML essentials with an introduction to CSS for crafting interactive websites",
        "image": "/html.png",
        "content": [
          {
            "title": "Course Introduction",
            "video": "/htmlcourse/intro.m3u8",
            "duration": "0:32",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Welcome to the course! In this introductory module, you'll get a glimpse of what's in store. We'll outline the course structure, set expectations, and highlight the outcomes you can anticipate upon completion."
          },
          {
            "title": "Expectations & Outcomes",
            "video": "/htmlcourse/CourseOutcomes&Scope.m3u8",
            "duration": "1:21",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Understand the goals of this course and what you'll gain by the end. We'll discuss the skills you'll acquire, the knowledge you'll gain, and how it will benefit you in the realm of web development and networking."
          },
          {
            "title": "Web Development & Scopes",
            "video": "/htmlcourse/WebDevelopment&Scopes.m3u8",
            "duration": "8:54",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Explore the vast landscape of web development careers. Learn about the diverse scopes and job opportunities available in the industry, providing you with insights to shape your career path."
          },
          {
            "title": "Frontend Backend Architecture",
            "video": "/htmlcourse/FrontendBackendArchitecture.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Delve into the intricacies of frontend and backend architecture. Understand how these components work together to create seamless and responsive web applications, laying the foundation for your development journey."
          },
          {
            "title": "Database",
            "video": "/htmlcourse/database.m3u8",
            "duration": "1:07",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Uncover the importance of databases in web development. Learn what are the types of database available and the free cloud services providing free database for developers."
          },
          {
            "title": "IP & Types",
            "video": "/htmlcourse/ip internal & external.m3u8",
            "duration": "9:35",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Navigate the world of Internet Protocol (IP) addresses. Gain a comprehensive understanding of IP types and their significance in the networking landscape."
          },
          {
            "title": "IPv4 vs IPv6",
            "video": "/htmlcourse/ipv4 vs ipv6.m3u8",
            "duration": "7:12",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Compare IPv4 and IPv6, the two versions of the Internet Protocol. Understand the differences and advancements that IPv6 brings to address the limitations of IPv4."
          },
          {
            "title": "Static vs Dynamic IP",
            "video": "/htmlcourse/static_vs_dynamic_ip.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Explore the distinction between static and dynamic IP addresses. Learn how each type is assigned and its impact on network configurations."
          },
          {
            "title": "Quiz 1",
            "quiz": true,
            "locked": false,
            "completed": true,
            "questions": [
              {
                "question": "What does \"frontend\" refer to in web development?",
                "options": [
                  "The part of a website users interact with",
                  "The server-side logic of a website",
                  "The database management system",
                  "The network infrastructure"
                ],
                "questionId": 100,
                "selected": "The part of a website users interact with"
              },
              {
                "question": "What is the primary role of \"backend\" in web development?",
                "options": [
                  "Managing the user interface",
                  "Handling server-side logic and databases",
                  "Designing responsive layouts",
                  "Implementing frontend styles"
                ],
                "questionId": 101,
                "selected": "Handling server-side logic and databases"
              },
              {
                "question": "What does \"IP\" stand for in networking?",
                "options": [
                  "Internet Provider",
                  "Internet Protocol",
                  "Information Processing",
                  "Interface Port"
                ],
                "questionId": 102,
                "selected": "Internet Protocol"
              },
              {
                "question": " What is the total range of each octet in an IPv4 address?",
                "options": [
                  "0-100",
                  "0-127",
                  "0-255",
                  "0-64"
                ],
                "questionId": 103,
                "selected": "0-255"
              }
            ]
          },
          {
            "title": "DNS",
            "video": "/htmlcourse/dns.m3u8",
            "duration": "10:11",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Dive into the Domain Name System (DNS) and unravel the process of translating domain names to IP addresses. Explore the role DNS plays in making web browsing seamless."
          },
          {
            "title": "What is API?",
            "video": "/htmlcourse/api.m3u8",
            "duration": "3:12",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Application Programming Interfaces (APIs). Understand their significance in web development, facilitating communication between different software systems."
          },
          {
            "title": "What is HTML",
            "video": "/htmlcourse/what_is_html.m3u8",
            "duration": "2:11",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Begin your journey into the core of web development with HTML. Learn the basics of structuring web content and creating the foundation for interactive websites."
          },
          {
            "title": "HTML Page Structure",
            "video": "/htmlcourse/HTML_page_structure.m3u8",
            "duration": "3:33",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Master the art of organizing your web pages. Explore HTML tags that define the structure of a webpage, providing a solid foundation for your coding endeavors."
          },
          {
            "title": "Quiz 2",
            "quiz": true,
            "locked": false,
            "completed": false,
            "questions": [
              {
                "question": "What is the primary function of DNS in web development?",
                "options": [
                  "To design responsive user interfaces",
                  "To translate domain names to IP addresses",
                  "To manage server-side logic",
                  "To encrypt website data"
                ],
                "questionId": 104
              },
              {
                "question": "What does 'API' stand for in web development?",
                "options": [
                  "Advanced Programming Interface",
                  "Application Programming Interface",
                  "Automated Processing Interface",
                  "Advanced Protocol Integration"
                ],
                "questionId": 105
              },
              {
                "question": "What is the main markup language used for creating web pages??",
                "options": [
                  "XML",
                  "XAMPP",
                  "HTML",
                  "CSS"
                ],
                "questionId": 106
              },
              {
                "question": "What does 'HTML' stand for?",
                "options": [
                  "Hyper Transfer Markup Language",
                  "High-Level Text Management Language",
                  "Hyperlink and Text Management Language",
                  "HyperText Markup Language"
                ],
                "questionId": 107
              }
            ]
          },
          {
            "title": "Text tags",
            "video": "/htmlcourse/text_tags.m3u8",
            "duration": "18:55",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore the world of text manipulation in HTML. Discover tags that enhance the presentation of textual content on your web pages."
          },
          {
            "title": "List tags",
            "video": "/htmlcourse/list_tags.m3u8",
            "duration": "5:29",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore HTML's list tags to efficiently structure information. Learn how to create ordered and unordered lists for better content organization."
          },
          {
            "title": "Anchor tag",
            "video": "/htmlcourse/Anchor_tag.m3u8",
            "duration": "7:53",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unlock the power of hyperlinking with the anchor tag. Understand how to connect different pages and resources within your website."
          },
          {
            "title": "Image tag",
            "video": "/htmlcourse/image_tag.m3u8",
            "duration": "6:48",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Bring visual appeal to your web pages with the image tag. Learn how to integrate images seamlessly into your HTML content."
          },
          {
            "title": "Audio & video tag",
            "video": "/htmlcourse/audio_and_video_tag.m3u8",
            "duration": "7:56",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user engagement with multimedia elements. Explore the audio and video tags to incorporate media seamlessly into your web projects."
          },
          {
            "title": "iframe & embed tag",
            "video": "/htmlcourse/iframe_and_embed_tag.m3u8",
            "duration": "7:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Harness the capabilities of iframe and embed tags. Understand how these tags enable the integration of external content within your web pages."
          },
          {
            "title": "Div tag",
            "video": "/htmlcourse/div_tag.m3u8",
            "duration": "3:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the versatile div tag. Learn how it acts as a container, allowing you to structure and style your HTML content effectively."
          },
          {
            "title": "Input tags",
            "video": "/htmlcourse/input_tag.m3u8",
            "duration": "14:01",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into user interaction with HTML input tags. Explore various input types and understand how they enable user data input."
          },
          {
            "title": "Button tag",
            "video": "/htmlcourse/button_tag.m3u8",
            "duration": "1:43",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user experience with interactive buttons. Learn the ins and outs of the button tag and its various applications."
          },
          {
            "title": "Form part 1",
            "video": "/htmlcourse/form_tag_1.m3u8",
            "duration": "9:09",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embark on the journey of web forms. In part one, explore the essential elements that make up a form, setting the stage for user data collection."
          },
          {
            "title": "Form part 2",
            "video": "/htmlcourse/form_tag_2.m3u8",
            "duration": "8:00",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Delve deeper into the world of web forms. In part two, learn about form validation, submission methods, and enhance the functionality of your forms."
          },
          {
            "title": "Table tag",
            "video": "/htmlcourse/table_tag.m3u8",
            "duration": "4:42",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Uncover the power of HTML tables. Learn how to structure and display data in a tabular format for improved readability."
          },
          {
            "title": "Semantic HTML - 1",
            "video": "/htmlcourse/semantic_html_1.m3u8",
            "duration": "5:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embrace semantic HTML for enhanced accessibility and SEO. In part one, understand how semantic tags contribute to the meaning and structure of your content."
          },
          {
            "title": "Semantic HTML - 2",
            "video": "/htmlcourse/semantic_html_2.m3u8",
            "duration": "2:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your journey into semantic HTML. In part two, explore additional tags that enrich the semantics of your web pages."
          },
          {
            "title": "Web Crawler",
            "video": "/htmlcourse/web_crawler.m3u8",
            "duration": "3:40",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Understand how websites are ranked to top by web crawling. Understand the fundamentals of how search engines navigate and index content across the vast web."
          },
          {
            "title": "Quiz 3",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the purpose of 'Text tags' in HTML?",
                "options": [
                  "To create lists of items",
                  "To structure webpage content",
                  "To manipulate text formatting",
                  "To embed multimedia elements"
                ],
                "questionId": 108
              },
              {
                "question": "Which HTML tags are used for creating ordered and unordered lists?",
                "options": [
                  "<ol> and <ul>",
                  "<ul> and <li>",
                  "<list> and <item>",
                  "<order> and <item>"
                ],
                "questionId": 109
              },
              {
                "question": "What does the 'Anchor tag' (<a>) primarily facilitate in HTML?",
                "options": [
                  "Embedding images",
                  "Creating hyperlinks",
                  "Styling webpage elements",
                  "Inserting audio content"
                ],
                "questionId": 110
              },
              {
                "question": "What does the term 'Web Crawler' refer to in the context of HTML?",
                "options": [
                  "A spider-like creature",
                  "A tool for organizing files",
                  "A script for automating tasks",
                  "A program for navigating and indexing web content"
                ],
                "questionId": 111
              }
            ]
          },
          {
            "title": "More HTML tags",
            "video": "/htmlcourse/more_html_tags.m3u8",
            "duration": "1:39",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Expand your HTML toolkit with additional tags. Discover tags that cater to specific needs, enhancing the richness of your web pages."
          },
          {
            "title": "Project 1 - 1",
            "video": "/htmlcourse/project_1_1.m3u8",
            "duration": "7:38",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Apply your newfound HTML skills in a practical project. In part one, embark on a hands-on project to where we build a small FAQ page by using semantic HTML tags and using font awesome icons."
          },
          {
            "title": "Project 1 - 2",
            "video": "/htmlcourse/project_1_2.m3u8",
            "duration": "8:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your project journey in part two. Apply advanced HTML concepts and solidify your skills through a comprehensive project that showcases your abilities."
          },
          {
            "title": "Project 2",
            "video": "/htmlcourse/project_2.m3u8",
            "duration": "9:05",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Level up with an in-depth project. Demonstrate your proficiency in HTML as you undertake a larger-scale project, integrating various elements learned throughout the course."
          },
          {
            "title": "Web Hosting",
            "video": "/htmlcourse/web_hosting.m3u8",
            "duration": "6:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unravel the mysteries of web hosting. Learn how to take your web projects live by exploring different hosting options and understanding the basics of site configurations."
          },
          {
            "title": "CSS",
            "video": "/htmlcourse/intro_to_css.m3u8",
            "duration": "8:22",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Transition seamlessly from HTML to CSS. In this module, delve into the world of Cascading Style Sheets to add style and visual appeal to your web pages."
          },
          {
            "title": "HTML and Project Quiz",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "In 'Project 1 - 1', what HTML semantic tags were primarily used for creating a FAQ page?",
                "options": [
                  "<div> and <span>",
                  "<details> and <summary>",
                  "<ul> and <li>",
                  "<section> and <article>"
                ],
                "questionId": 112
              },
              {
                "question": "In 'Project 1 - 2', how did you make an image float using HTML?",
                "options": [
                  "Applied 'float' property in CSS",
                  "Used 'position: absolute'",
                  "Set 'display: inline-block'",
                  "Inserted a 'float' tag around the image"
                ],
                "questionId": 113
              },
              {
                "question": "What was the focus of 'Project 2' in your HTML course?",
                "options": [
                  "Creating an FAQ page",
                  "Designing a personal portfolio",
                  "Developing a basic app documentation",
                  "Implementing a chat application"
                ],
                "questionId": 114
              },
              {
                "question": "What is web hosting in the context of web development?",
                "options": [
                  "A service that allows individuals and organizations to make their websites accessible via the World Wide Web",
                  "A method of creating dynamic web pages",
                  "A technique for optimizing website performance",
                  "A module covered in the CSS section"
                ],
                "questionId": 115
              }
            ]
          },
          {
            "title": "Wrap up",
            "video": "/htmlcourse/wrap_up.m3u8",
            "duration": "2:07",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Congratulations on completing the course! In this final module, recap your journey, reflect on your accomplishments, and gain insights into the next steps in your web development adventure."
          }
        ],
        "language": "Tamil",
        "requirements": [
          "Text editor for writing HTML code",
          "Web Browser to view the output of HTML code"
        ],
        "author": "N.U.Thejas hari",
        "authorInsta": "https://www.instagram.com/nuthejashari/",
        "meetingLink": "",
        "whatsappGroup": "",
        "recordedVideo": "",
        "courseId": "101110",
        "locked": false,
        "videos": "35",
        "projects": "2",
        "duration": "4 Hours",
        "paid": "",
        "cancellable": false,
        "createdAt": "2024-01-01T06:43:50.699Z",
        "updatedAt": "2024-01-01T06:43:50.699Z",
        "__v": 0,
        "completed": false,
        "enrolledOn": "2024-01-09T09:17:55.043Z",
        "certificate": "",
        "name": "Ray_range35",
        "userId": "659d0f1f343af4d940a78666",
        "progress": 0,
        "allNotes": []
      }
    ],
    "createdAt": "2024-01-09T09:17:19.370Z",
    "updatedAt": "2024-01-10T09:52:43.619Z",
    "__v": 0
  },
  {
    "_id": "659d0fb7343af4d940a7866a",
    "name": "Jananapriya_DCFS",
    "email": "jananapriyapriya@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [],
    "enrolledCoursesId": [
      "101110"
    ],
    "enrolledCoursesData": [
      {
        "_id": "65925f26f5f0ffa3b0e38586",
        "title": "Basics of Networking and HTML Beginner to Advanced Course",
        "description": "Learn web development fundamentals, covering frontend, backend, and database structures. Explore client-server dynamics, APIs, various IP types, DNS workings, and HTML essentials with an introduction to CSS for crafting interactive websites",
        "image": "/html.png",
        "content": [
          {
            "title": "Course Introduction",
            "video": "/htmlcourse/intro.m3u8",
            "duration": "0:32",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Welcome to the course! In this introductory module, you'll get a glimpse of what's in store. We'll outline the course structure, set expectations, and highlight the outcomes you can anticipate upon completion."
          },
          {
            "title": "Expectations & Outcomes",
            "video": "/htmlcourse/CourseOutcomes&Scope.m3u8",
            "duration": "1:21",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Understand the goals of this course and what you'll gain by the end. We'll discuss the skills you'll acquire, the knowledge you'll gain, and how it will benefit you in the realm of web development and networking."
          },
          {
            "title": "Web Development & Scopes",
            "video": "/htmlcourse/WebDevelopment&Scopes.m3u8",
            "duration": "8:54",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the vast landscape of web development careers. Learn about the diverse scopes and job opportunities available in the industry, providing you with insights to shape your career path."
          },
          {
            "title": "Frontend Backend Architecture",
            "video": "/htmlcourse/FrontendBackendArchitecture.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Delve into the intricacies of frontend and backend architecture. Understand how these components work together to create seamless and responsive web applications, laying the foundation for your development journey."
          },
          {
            "title": "Database",
            "video": "/htmlcourse/database.m3u8",
            "duration": "1:07",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Uncover the importance of databases in web development. Learn what are the types of database available and the free cloud services providing free database for developers."
          },
          {
            "title": "IP & Types",
            "video": "/htmlcourse/ip internal & external.m3u8",
            "duration": "9:35",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Navigate the world of Internet Protocol (IP) addresses. Gain a comprehensive understanding of IP types and their significance in the networking landscape."
          },
          {
            "title": "IPv4 vs IPv6",
            "video": "/htmlcourse/ipv4 vs ipv6.m3u8",
            "duration": "7:12",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Compare IPv4 and IPv6, the two versions of the Internet Protocol. Understand the differences and advancements that IPv6 brings to address the limitations of IPv4."
          },
          {
            "title": "Static vs Dynamic IP",
            "video": "/htmlcourse/static_vs_dynamic_ip.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the distinction between static and dynamic IP addresses. Learn how each type is assigned and its impact on network configurations."
          },
          {
            "title": "Quiz 1",
            "quiz": true,
            "locked": false,
            "completed": false,
            "questions": [
              {
                "question": "What does \"frontend\" refer to in web development?",
                "options": [
                  "The part of a website users interact with",
                  "The server-side logic of a website",
                  "The database management system",
                  "The network infrastructure"
                ],
                "questionId": 100
              },
              {
                "question": "What is the primary role of \"backend\" in web development?",
                "options": [
                  "Managing the user interface",
                  "Handling server-side logic and databases",
                  "Designing responsive layouts",
                  "Implementing frontend styles"
                ],
                "questionId": 101
              },
              {
                "question": "What does \"IP\" stand for in networking?",
                "options": [
                  "Internet Provider",
                  "Internet Protocol",
                  "Information Processing",
                  "Interface Port"
                ],
                "questionId": 102
              },
              {
                "question": " What is the total range of each octet in an IPv4 address?",
                "options": [
                  "0-100",
                  "0-127",
                  "0-255",
                  "0-64"
                ],
                "questionId": 103
              }
            ]
          },
          {
            "title": "DNS",
            "video": "/htmlcourse/dns.m3u8",
            "duration": "10:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into the Domain Name System (DNS) and unravel the process of translating domain names to IP addresses. Explore the role DNS plays in making web browsing seamless."
          },
          {
            "title": "What is API?",
            "video": "/htmlcourse/api.m3u8",
            "duration": "3:12",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Application Programming Interfaces (APIs). Understand their significance in web development, facilitating communication between different software systems."
          },
          {
            "title": "What is HTML",
            "video": "/htmlcourse/what_is_html.m3u8",
            "duration": "2:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Begin your journey into the core of web development with HTML. Learn the basics of structuring web content and creating the foundation for interactive websites."
          },
          {
            "title": "HTML Page Structure",
            "video": "/htmlcourse/HTML_page_structure.m3u8",
            "duration": "3:33",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the art of organizing your web pages. Explore HTML tags that define the structure of a webpage, providing a solid foundation for your coding endeavors."
          },
          {
            "title": "Quiz 2",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the primary function of DNS in web development?",
                "options": [
                  "To design responsive user interfaces",
                  "To translate domain names to IP addresses",
                  "To manage server-side logic",
                  "To encrypt website data"
                ],
                "questionId": 104
              },
              {
                "question": "What does 'API' stand for in web development?",
                "options": [
                  "Advanced Programming Interface",
                  "Application Programming Interface",
                  "Automated Processing Interface",
                  "Advanced Protocol Integration"
                ],
                "questionId": 105
              },
              {
                "question": "What is the main markup language used for creating web pages??",
                "options": [
                  "XML",
                  "XAMPP",
                  "HTML",
                  "CSS"
                ],
                "questionId": 106
              },
              {
                "question": "What does 'HTML' stand for?",
                "options": [
                  "Hyper Transfer Markup Language",
                  "High-Level Text Management Language",
                  "Hyperlink and Text Management Language",
                  "HyperText Markup Language"
                ],
                "questionId": 107
              }
            ]
          },
          {
            "title": "Text tags",
            "video": "/htmlcourse/text_tags.m3u8",
            "duration": "18:55",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore the world of text manipulation in HTML. Discover tags that enhance the presentation of textual content on your web pages."
          },
          {
            "title": "List tags",
            "video": "/htmlcourse/list_tags.m3u8",
            "duration": "5:29",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore HTML's list tags to efficiently structure information. Learn how to create ordered and unordered lists for better content organization."
          },
          {
            "title": "Anchor tag",
            "video": "/htmlcourse/Anchor_tag.m3u8",
            "duration": "7:53",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unlock the power of hyperlinking with the anchor tag. Understand how to connect different pages and resources within your website."
          },
          {
            "title": "Image tag",
            "video": "/htmlcourse/image_tag.m3u8",
            "duration": "6:48",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Bring visual appeal to your web pages with the image tag. Learn how to integrate images seamlessly into your HTML content."
          },
          {
            "title": "Audio & video tag",
            "video": "/htmlcourse/audio_and_video_tag.m3u8",
            "duration": "7:56",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user engagement with multimedia elements. Explore the audio and video tags to incorporate media seamlessly into your web projects."
          },
          {
            "title": "iframe & embed tag",
            "video": "/htmlcourse/iframe_and_embed_tag.m3u8",
            "duration": "7:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Harness the capabilities of iframe and embed tags. Understand how these tags enable the integration of external content within your web pages."
          },
          {
            "title": "Div tag",
            "video": "/htmlcourse/div_tag.m3u8",
            "duration": "3:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the versatile div tag. Learn how it acts as a container, allowing you to structure and style your HTML content effectively."
          },
          {
            "title": "Input tags",
            "video": "/htmlcourse/input_tag.m3u8",
            "duration": "14:01",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into user interaction with HTML input tags. Explore various input types and understand how they enable user data input."
          },
          {
            "title": "Button tag",
            "video": "/htmlcourse/button_tag.m3u8",
            "duration": "1:43",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user experience with interactive buttons. Learn the ins and outs of the button tag and its various applications."
          },
          {
            "title": "Form part 1",
            "video": "/htmlcourse/form_tag_1.m3u8",
            "duration": "9:09",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embark on the journey of web forms. In part one, explore the essential elements that make up a form, setting the stage for user data collection."
          },
          {
            "title": "Form part 2",
            "video": "/htmlcourse/form_tag_2.m3u8",
            "duration": "8:00",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Delve deeper into the world of web forms. In part two, learn about form validation, submission methods, and enhance the functionality of your forms."
          },
          {
            "title": "Table tag",
            "video": "/htmlcourse/table_tag.m3u8",
            "duration": "4:42",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Uncover the power of HTML tables. Learn how to structure and display data in a tabular format for improved readability."
          },
          {
            "title": "Semantic HTML - 1",
            "video": "/htmlcourse/semantic_html_1.m3u8",
            "duration": "5:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embrace semantic HTML for enhanced accessibility and SEO. In part one, understand how semantic tags contribute to the meaning and structure of your content."
          },
          {
            "title": "Semantic HTML - 2",
            "video": "/htmlcourse/semantic_html_2.m3u8",
            "duration": "2:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your journey into semantic HTML. In part two, explore additional tags that enrich the semantics of your web pages."
          },
          {
            "title": "Web Crawler",
            "video": "/htmlcourse/web_crawler.m3u8",
            "duration": "3:40",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Understand how websites are ranked to top by web crawling. Understand the fundamentals of how search engines navigate and index content across the vast web."
          },
          {
            "title": "Quiz 3",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the purpose of 'Text tags' in HTML?",
                "options": [
                  "To create lists of items",
                  "To structure webpage content",
                  "To manipulate text formatting",
                  "To embed multimedia elements"
                ],
                "questionId": 108
              },
              {
                "question": "Which HTML tags are used for creating ordered and unordered lists?",
                "options": [
                  "<ol> and <ul>",
                  "<ul> and <li>",
                  "<list> and <item>",
                  "<order> and <item>"
                ],
                "questionId": 109
              },
              {
                "question": "What does the 'Anchor tag' (<a>) primarily facilitate in HTML?",
                "options": [
                  "Embedding images",
                  "Creating hyperlinks",
                  "Styling webpage elements",
                  "Inserting audio content"
                ],
                "questionId": 110
              },
              {
                "question": "What does the term 'Web Crawler' refer to in the context of HTML?",
                "options": [
                  "A spider-like creature",
                  "A tool for organizing files",
                  "A script for automating tasks",
                  "A program for navigating and indexing web content"
                ],
                "questionId": 111
              }
            ]
          },
          {
            "title": "More HTML tags",
            "video": "/htmlcourse/more_html_tags.m3u8",
            "duration": "1:39",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Expand your HTML toolkit with additional tags. Discover tags that cater to specific needs, enhancing the richness of your web pages."
          },
          {
            "title": "Project 1 - 1",
            "video": "/htmlcourse/project_1_1.m3u8",
            "duration": "7:38",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Apply your newfound HTML skills in a practical project. In part one, embark on a hands-on project to where we build a small FAQ page by using semantic HTML tags and using font awesome icons."
          },
          {
            "title": "Project 1 - 2",
            "video": "/htmlcourse/project_1_2.m3u8",
            "duration": "8:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your project journey in part two. Apply advanced HTML concepts and solidify your skills through a comprehensive project that showcases your abilities."
          },
          {
            "title": "Project 2",
            "video": "/htmlcourse/project_2.m3u8",
            "duration": "9:05",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Level up with an in-depth project. Demonstrate your proficiency in HTML as you undertake a larger-scale project, integrating various elements learned throughout the course."
          },
          {
            "title": "Web Hosting",
            "video": "/htmlcourse/web_hosting.m3u8",
            "duration": "6:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unravel the mysteries of web hosting. Learn how to take your web projects live by exploring different hosting options and understanding the basics of site configurations."
          },
          {
            "title": "CSS",
            "video": "/htmlcourse/intro_to_css.m3u8",
            "duration": "8:22",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Transition seamlessly from HTML to CSS. In this module, delve into the world of Cascading Style Sheets to add style and visual appeal to your web pages."
          },
          {
            "title": "HTML and Project Quiz",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "In 'Project 1 - 1', what HTML semantic tags were primarily used for creating a FAQ page?",
                "options": [
                  "<div> and <span>",
                  "<details> and <summary>",
                  "<ul> and <li>",
                  "<section> and <article>"
                ],
                "questionId": 112
              },
              {
                "question": "In 'Project 1 - 2', how did you make an image float using HTML?",
                "options": [
                  "Applied 'float' property in CSS",
                  "Used 'position: absolute'",
                  "Set 'display: inline-block'",
                  "Inserted a 'float' tag around the image"
                ],
                "questionId": 113
              },
              {
                "question": "What was the focus of 'Project 2' in your HTML course?",
                "options": [
                  "Creating an FAQ page",
                  "Designing a personal portfolio",
                  "Developing a basic app documentation",
                  "Implementing a chat application"
                ],
                "questionId": 114
              },
              {
                "question": "What is web hosting in the context of web development?",
                "options": [
                  "A service that allows individuals and organizations to make their websites accessible via the World Wide Web",
                  "A method of creating dynamic web pages",
                  "A technique for optimizing website performance",
                  "A module covered in the CSS section"
                ],
                "questionId": 115
              }
            ]
          },
          {
            "title": "Wrap up",
            "video": "/htmlcourse/wrap_up.m3u8",
            "duration": "2:07",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Congratulations on completing the course! In this final module, recap your journey, reflect on your accomplishments, and gain insights into the next steps in your web development adventure."
          }
        ],
        "language": "Tamil",
        "requirements": [
          "Text editor for writing HTML code",
          "Web Browser to view the output of HTML code"
        ],
        "author": "N.U.Thejas hari",
        "authorInsta": "https://www.instagram.com/nuthejashari/",
        "meetingLink": "",
        "whatsappGroup": "",
        "recordedVideo": "",
        "courseId": "101110",
        "locked": false,
        "videos": "35",
        "projects": "2",
        "duration": "4 Hours",
        "paid": "",
        "cancellable": false,
        "createdAt": "2024-01-01T06:43:50.699Z",
        "updatedAt": "2024-01-01T06:43:50.699Z",
        "__v": 0,
        "completed": false,
        "enrolledOn": "2024-01-09T09:21:11.563Z",
        "certificate": "",
        "name": "Jananapriya_DCFS",
        "userId": "659d0fb7343af4d940a7866a",
        "progress": 0,
        "allNotes": []
      }
    ],
    "createdAt": "2024-01-09T09:19:51.792Z",
    "updatedAt": "2024-01-09T09:24:09.099Z",
    "__v": 0
  },
  {
    "_id": "659d103a343af4d940a78674",
    "name": "Nivaash Jain",
    "email": "courseall8@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [],
    "enrolledCoursesId": [
      "101110"
    ],
    "enrolledCoursesData": [
      {
        "_id": "65925f26f5f0ffa3b0e38586",
        "title": "Basics of Networking and HTML Beginner to Advanced Course",
        "description": "Learn web development fundamentals, covering frontend, backend, and database structures. Explore client-server dynamics, APIs, various IP types, DNS workings, and HTML essentials with an introduction to CSS for crafting interactive websites",
        "image": "/html.png",
        "content": [
          {
            "title": "Course Introduction",
            "video": "/htmlcourse/intro.m3u8",
            "duration": "0:32",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Welcome to the course! In this introductory module, you'll get a glimpse of what's in store. We'll outline the course structure, set expectations, and highlight the outcomes you can anticipate upon completion."
          },
          {
            "title": "Expectations & Outcomes",
            "video": "/htmlcourse/CourseOutcomes&Scope.m3u8",
            "duration": "1:21",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Understand the goals of this course and what you'll gain by the end. We'll discuss the skills you'll acquire, the knowledge you'll gain, and how it will benefit you in the realm of web development and networking."
          },
          {
            "title": "Web Development & Scopes",
            "video": "/htmlcourse/WebDevelopment&Scopes.m3u8",
            "duration": "8:54",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the vast landscape of web development careers. Learn about the diverse scopes and job opportunities available in the industry, providing you with insights to shape your career path."
          },
          {
            "title": "Frontend Backend Architecture",
            "video": "/htmlcourse/FrontendBackendArchitecture.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Delve into the intricacies of frontend and backend architecture. Understand how these components work together to create seamless and responsive web applications, laying the foundation for your development journey."
          },
          {
            "title": "Database",
            "video": "/htmlcourse/database.m3u8",
            "duration": "1:07",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Uncover the importance of databases in web development. Learn what are the types of database available and the free cloud services providing free database for developers."
          },
          {
            "title": "IP & Types",
            "video": "/htmlcourse/ip internal & external.m3u8",
            "duration": "9:35",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Navigate the world of Internet Protocol (IP) addresses. Gain a comprehensive understanding of IP types and their significance in the networking landscape."
          },
          {
            "title": "IPv4 vs IPv6",
            "video": "/htmlcourse/ipv4 vs ipv6.m3u8",
            "duration": "7:12",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Compare IPv4 and IPv6, the two versions of the Internet Protocol. Understand the differences and advancements that IPv6 brings to address the limitations of IPv4."
          },
          {
            "title": "Static vs Dynamic IP",
            "video": "/htmlcourse/static_vs_dynamic_ip.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the distinction between static and dynamic IP addresses. Learn how each type is assigned and its impact on network configurations."
          },
          {
            "title": "Quiz 1",
            "quiz": true,
            "locked": false,
            "completed": false,
            "questions": [
              {
                "question": "What does \"frontend\" refer to in web development?",
                "options": [
                  "The part of a website users interact with",
                  "The server-side logic of a website",
                  "The database management system",
                  "The network infrastructure"
                ],
                "questionId": 100
              },
              {
                "question": "What is the primary role of \"backend\" in web development?",
                "options": [
                  "Managing the user interface",
                  "Handling server-side logic and databases",
                  "Designing responsive layouts",
                  "Implementing frontend styles"
                ],
                "questionId": 101
              },
              {
                "question": "What does \"IP\" stand for in networking?",
                "options": [
                  "Internet Provider",
                  "Internet Protocol",
                  "Information Processing",
                  "Interface Port"
                ],
                "questionId": 102
              },
              {
                "question": " What is the total range of each octet in an IPv4 address?",
                "options": [
                  "0-100",
                  "0-127",
                  "0-255",
                  "0-64"
                ],
                "questionId": 103
              }
            ]
          },
          {
            "title": "DNS",
            "video": "/htmlcourse/dns.m3u8",
            "duration": "10:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into the Domain Name System (DNS) and unravel the process of translating domain names to IP addresses. Explore the role DNS plays in making web browsing seamless."
          },
          {
            "title": "What is API?",
            "video": "/htmlcourse/api.m3u8",
            "duration": "3:12",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Application Programming Interfaces (APIs). Understand their significance in web development, facilitating communication between different software systems."
          },
          {
            "title": "What is HTML",
            "video": "/htmlcourse/what_is_html.m3u8",
            "duration": "2:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Begin your journey into the core of web development with HTML. Learn the basics of structuring web content and creating the foundation for interactive websites."
          },
          {
            "title": "HTML Page Structure",
            "video": "/htmlcourse/HTML_page_structure.m3u8",
            "duration": "3:33",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the art of organizing your web pages. Explore HTML tags that define the structure of a webpage, providing a solid foundation for your coding endeavors."
          },
          {
            "title": "Quiz 2",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the primary function of DNS in web development?",
                "options": [
                  "To design responsive user interfaces",
                  "To translate domain names to IP addresses",
                  "To manage server-side logic",
                  "To encrypt website data"
                ],
                "questionId": 104
              },
              {
                "question": "What does 'API' stand for in web development?",
                "options": [
                  "Advanced Programming Interface",
                  "Application Programming Interface",
                  "Automated Processing Interface",
                  "Advanced Protocol Integration"
                ],
                "questionId": 105
              },
              {
                "question": "What is the main markup language used for creating web pages??",
                "options": [
                  "XML",
                  "XAMPP",
                  "HTML",
                  "CSS"
                ],
                "questionId": 106
              },
              {
                "question": "What does 'HTML' stand for?",
                "options": [
                  "Hyper Transfer Markup Language",
                  "High-Level Text Management Language",
                  "Hyperlink and Text Management Language",
                  "HyperText Markup Language"
                ],
                "questionId": 107
              }
            ]
          },
          {
            "title": "Text tags",
            "video": "/htmlcourse/text_tags.m3u8",
            "duration": "18:55",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore the world of text manipulation in HTML. Discover tags that enhance the presentation of textual content on your web pages."
          },
          {
            "title": "List tags",
            "video": "/htmlcourse/list_tags.m3u8",
            "duration": "5:29",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore HTML's list tags to efficiently structure information. Learn how to create ordered and unordered lists for better content organization."
          },
          {
            "title": "Anchor tag",
            "video": "/htmlcourse/Anchor_tag.m3u8",
            "duration": "7:53",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unlock the power of hyperlinking with the anchor tag. Understand how to connect different pages and resources within your website."
          },
          {
            "title": "Image tag",
            "video": "/htmlcourse/image_tag.m3u8",
            "duration": "6:48",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Bring visual appeal to your web pages with the image tag. Learn how to integrate images seamlessly into your HTML content."
          },
          {
            "title": "Audio & video tag",
            "video": "/htmlcourse/audio_and_video_tag.m3u8",
            "duration": "7:56",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user engagement with multimedia elements. Explore the audio and video tags to incorporate media seamlessly into your web projects."
          },
          {
            "title": "iframe & embed tag",
            "video": "/htmlcourse/iframe_and_embed_tag.m3u8",
            "duration": "7:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Harness the capabilities of iframe and embed tags. Understand how these tags enable the integration of external content within your web pages."
          },
          {
            "title": "Div tag",
            "video": "/htmlcourse/div_tag.m3u8",
            "duration": "3:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the versatile div tag. Learn how it acts as a container, allowing you to structure and style your HTML content effectively."
          },
          {
            "title": "Input tags",
            "video": "/htmlcourse/input_tag.m3u8",
            "duration": "14:01",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into user interaction with HTML input tags. Explore various input types and understand how they enable user data input."
          },
          {
            "title": "Button tag",
            "video": "/htmlcourse/button_tag.m3u8",
            "duration": "1:43",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user experience with interactive buttons. Learn the ins and outs of the button tag and its various applications."
          },
          {
            "title": "Form part 1",
            "video": "/htmlcourse/form_tag_1.m3u8",
            "duration": "9:09",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embark on the journey of web forms. In part one, explore the essential elements that make up a form, setting the stage for user data collection."
          },
          {
            "title": "Form part 2",
            "video": "/htmlcourse/form_tag_2.m3u8",
            "duration": "8:00",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Delve deeper into the world of web forms. In part two, learn about form validation, submission methods, and enhance the functionality of your forms."
          },
          {
            "title": "Table tag",
            "video": "/htmlcourse/table_tag.m3u8",
            "duration": "4:42",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Uncover the power of HTML tables. Learn how to structure and display data in a tabular format for improved readability."
          },
          {
            "title": "Semantic HTML - 1",
            "video": "/htmlcourse/semantic_html_1.m3u8",
            "duration": "5:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embrace semantic HTML for enhanced accessibility and SEO. In part one, understand how semantic tags contribute to the meaning and structure of your content."
          },
          {
            "title": "Semantic HTML - 2",
            "video": "/htmlcourse/semantic_html_2.m3u8",
            "duration": "2:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your journey into semantic HTML. In part two, explore additional tags that enrich the semantics of your web pages."
          },
          {
            "title": "Web Crawler",
            "video": "/htmlcourse/web_crawler.m3u8",
            "duration": "3:40",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Understand how websites are ranked to top by web crawling. Understand the fundamentals of how search engines navigate and index content across the vast web."
          },
          {
            "title": "Quiz 3",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the purpose of 'Text tags' in HTML?",
                "options": [
                  "To create lists of items",
                  "To structure webpage content",
                  "To manipulate text formatting",
                  "To embed multimedia elements"
                ],
                "questionId": 108
              },
              {
                "question": "Which HTML tags are used for creating ordered and unordered lists?",
                "options": [
                  "<ol> and <ul>",
                  "<ul> and <li>",
                  "<list> and <item>",
                  "<order> and <item>"
                ],
                "questionId": 109
              },
              {
                "question": "What does the 'Anchor tag' (<a>) primarily facilitate in HTML?",
                "options": [
                  "Embedding images",
                  "Creating hyperlinks",
                  "Styling webpage elements",
                  "Inserting audio content"
                ],
                "questionId": 110
              },
              {
                "question": "What does the term 'Web Crawler' refer to in the context of HTML?",
                "options": [
                  "A spider-like creature",
                  "A tool for organizing files",
                  "A script for automating tasks",
                  "A program for navigating and indexing web content"
                ],
                "questionId": 111
              }
            ]
          },
          {
            "title": "More HTML tags",
            "video": "/htmlcourse/more_html_tags.m3u8",
            "duration": "1:39",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Expand your HTML toolkit with additional tags. Discover tags that cater to specific needs, enhancing the richness of your web pages."
          },
          {
            "title": "Project 1 - 1",
            "video": "/htmlcourse/project_1_1.m3u8",
            "duration": "7:38",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Apply your newfound HTML skills in a practical project. In part one, embark on a hands-on project to where we build a small FAQ page by using semantic HTML tags and using font awesome icons."
          },
          {
            "title": "Project 1 - 2",
            "video": "/htmlcourse/project_1_2.m3u8",
            "duration": "8:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your project journey in part two. Apply advanced HTML concepts and solidify your skills through a comprehensive project that showcases your abilities."
          },
          {
            "title": "Project 2",
            "video": "/htmlcourse/project_2.m3u8",
            "duration": "9:05",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Level up with an in-depth project. Demonstrate your proficiency in HTML as you undertake a larger-scale project, integrating various elements learned throughout the course."
          },
          {
            "title": "Web Hosting",
            "video": "/htmlcourse/web_hosting.m3u8",
            "duration": "6:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unravel the mysteries of web hosting. Learn how to take your web projects live by exploring different hosting options and understanding the basics of site configurations."
          },
          {
            "title": "CSS",
            "video": "/htmlcourse/intro_to_css.m3u8",
            "duration": "8:22",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Transition seamlessly from HTML to CSS. In this module, delve into the world of Cascading Style Sheets to add style and visual appeal to your web pages."
          },
          {
            "title": "HTML and Project Quiz",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "In 'Project 1 - 1', what HTML semantic tags were primarily used for creating a FAQ page?",
                "options": [
                  "<div> and <span>",
                  "<details> and <summary>",
                  "<ul> and <li>",
                  "<section> and <article>"
                ],
                "questionId": 112
              },
              {
                "question": "In 'Project 1 - 2', how did you make an image float using HTML?",
                "options": [
                  "Applied 'float' property in CSS",
                  "Used 'position: absolute'",
                  "Set 'display: inline-block'",
                  "Inserted a 'float' tag around the image"
                ],
                "questionId": 113
              },
              {
                "question": "What was the focus of 'Project 2' in your HTML course?",
                "options": [
                  "Creating an FAQ page",
                  "Designing a personal portfolio",
                  "Developing a basic app documentation",
                  "Implementing a chat application"
                ],
                "questionId": 114
              },
              {
                "question": "What is web hosting in the context of web development?",
                "options": [
                  "A service that allows individuals and organizations to make their websites accessible via the World Wide Web",
                  "A method of creating dynamic web pages",
                  "A technique for optimizing website performance",
                  "A module covered in the CSS section"
                ],
                "questionId": 115
              }
            ]
          },
          {
            "title": "Wrap up",
            "video": "/htmlcourse/wrap_up.m3u8",
            "duration": "2:07",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Congratulations on completing the course! In this final module, recap your journey, reflect on your accomplishments, and gain insights into the next steps in your web development adventure."
          }
        ],
        "language": "Tamil",
        "requirements": [
          "Text editor for writing HTML code",
          "Web Browser to view the output of HTML code"
        ],
        "author": "N.U.Thejas hari",
        "authorInsta": "https://www.instagram.com/nuthejashari/",
        "meetingLink": "",
        "whatsappGroup": "",
        "recordedVideo": "",
        "courseId": "101110",
        "locked": false,
        "videos": "35",
        "projects": "2",
        "duration": "4 Hours",
        "paid": "",
        "cancellable": false,
        "createdAt": "2024-01-01T06:43:50.699Z",
        "updatedAt": "2024-01-01T06:43:50.699Z",
        "__v": 0,
        "completed": false,
        "enrolledOn": "2024-01-09T09:24:02.893Z",
        "certificate": "",
        "name": "Nivaash Jain",
        "userId": "659d103a343af4d940a78674",
        "progress": 0,
        "allNotes": []
      }
    ],
    "createdAt": "2024-01-09T09:22:02.134Z",
    "updatedAt": "2024-01-09T09:24:03.472Z",
    "__v": 0
  },
  {
    "_id": "659d4b018668a4898672fb03",
    "name": "Saranya Ravi",
    "email": "ravisaranya751@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [],
    "enrolledCoursesId": [
      "101110"
    ],
    "enrolledCoursesData": [
      {
        "_id": "65925f26f5f0ffa3b0e38586",
        "title": "Basics of Networking and HTML Beginner to Advanced Course",
        "description": "Learn web development fundamentals, covering frontend, backend, and database structures. Explore client-server dynamics, APIs, various IP types, DNS workings, and HTML essentials with an introduction to CSS for crafting interactive websites",
        "image": "/html.png",
        "content": [
          {
            "title": "Course Introduction",
            "video": "/htmlcourse/intro.m3u8",
            "duration": "0:32",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Welcome to the course! In this introductory module, you'll get a glimpse of what's in store. We'll outline the course structure, set expectations, and highlight the outcomes you can anticipate upon completion."
          },
          {
            "title": "Expectations & Outcomes",
            "video": "/htmlcourse/CourseOutcomes&Scope.m3u8",
            "duration": "1:21",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Understand the goals of this course and what you'll gain by the end. We'll discuss the skills you'll acquire, the knowledge you'll gain, and how it will benefit you in the realm of web development and networking."
          },
          {
            "title": "Web Development & Scopes",
            "video": "/htmlcourse/WebDevelopment&Scopes.m3u8",
            "duration": "8:54",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the vast landscape of web development careers. Learn about the diverse scopes and job opportunities available in the industry, providing you with insights to shape your career path."
          },
          {
            "title": "Frontend Backend Architecture",
            "video": "/htmlcourse/FrontendBackendArchitecture.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Delve into the intricacies of frontend and backend architecture. Understand how these components work together to create seamless and responsive web applications, laying the foundation for your development journey."
          },
          {
            "title": "Database",
            "video": "/htmlcourse/database.m3u8",
            "duration": "1:07",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Uncover the importance of databases in web development. Learn what are the types of database available and the free cloud services providing free database for developers."
          },
          {
            "title": "IP & Types",
            "video": "/htmlcourse/ip internal & external.m3u8",
            "duration": "9:35",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Navigate the world of Internet Protocol (IP) addresses. Gain a comprehensive understanding of IP types and their significance in the networking landscape."
          },
          {
            "title": "IPv4 vs IPv6",
            "video": "/htmlcourse/ipv4 vs ipv6.m3u8",
            "duration": "7:12",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Compare IPv4 and IPv6, the two versions of the Internet Protocol. Understand the differences and advancements that IPv6 brings to address the limitations of IPv4."
          },
          {
            "title": "Static vs Dynamic IP",
            "video": "/htmlcourse/static_vs_dynamic_ip.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the distinction between static and dynamic IP addresses. Learn how each type is assigned and its impact on network configurations."
          },
          {
            "title": "Quiz 1",
            "quiz": true,
            "locked": false,
            "completed": false,
            "questions": [
              {
                "question": "What does \"frontend\" refer to in web development?",
                "options": [
                  "The part of a website users interact with",
                  "The server-side logic of a website",
                  "The database management system",
                  "The network infrastructure"
                ],
                "questionId": 100
              },
              {
                "question": "What is the primary role of \"backend\" in web development?",
                "options": [
                  "Managing the user interface",
                  "Handling server-side logic and databases",
                  "Designing responsive layouts",
                  "Implementing frontend styles"
                ],
                "questionId": 101
              },
              {
                "question": "What does \"IP\" stand for in networking?",
                "options": [
                  "Internet Provider",
                  "Internet Protocol",
                  "Information Processing",
                  "Interface Port"
                ],
                "questionId": 102
              },
              {
                "question": " What is the total range of each octet in an IPv4 address?",
                "options": [
                  "0-100",
                  "0-127",
                  "0-255",
                  "0-64"
                ],
                "questionId": 103
              }
            ]
          },
          {
            "title": "DNS",
            "video": "/htmlcourse/dns.m3u8",
            "duration": "10:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into the Domain Name System (DNS) and unravel the process of translating domain names to IP addresses. Explore the role DNS plays in making web browsing seamless."
          },
          {
            "title": "What is API?",
            "video": "/htmlcourse/api.m3u8",
            "duration": "3:12",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Application Programming Interfaces (APIs). Understand their significance in web development, facilitating communication between different software systems."
          },
          {
            "title": "What is HTML",
            "video": "/htmlcourse/what_is_html.m3u8",
            "duration": "2:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Begin your journey into the core of web development with HTML. Learn the basics of structuring web content and creating the foundation for interactive websites."
          },
          {
            "title": "HTML Page Structure",
            "video": "/htmlcourse/HTML_page_structure.m3u8",
            "duration": "3:33",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the art of organizing your web pages. Explore HTML tags that define the structure of a webpage, providing a solid foundation for your coding endeavors."
          },
          {
            "title": "Quiz 2",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the primary function of DNS in web development?",
                "options": [
                  "To design responsive user interfaces",
                  "To translate domain names to IP addresses",
                  "To manage server-side logic",
                  "To encrypt website data"
                ],
                "questionId": 104
              },
              {
                "question": "What does 'API' stand for in web development?",
                "options": [
                  "Advanced Programming Interface",
                  "Application Programming Interface",
                  "Automated Processing Interface",
                  "Advanced Protocol Integration"
                ],
                "questionId": 105
              },
              {
                "question": "What is the main markup language used for creating web pages??",
                "options": [
                  "XML",
                  "XAMPP",
                  "HTML",
                  "CSS"
                ],
                "questionId": 106
              },
              {
                "question": "What does 'HTML' stand for?",
                "options": [
                  "Hyper Transfer Markup Language",
                  "High-Level Text Management Language",
                  "Hyperlink and Text Management Language",
                  "HyperText Markup Language"
                ],
                "questionId": 107
              }
            ]
          },
          {
            "title": "Text tags",
            "video": "/htmlcourse/text_tags.m3u8",
            "duration": "18:55",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore the world of text manipulation in HTML. Discover tags that enhance the presentation of textual content on your web pages."
          },
          {
            "title": "List tags",
            "video": "/htmlcourse/list_tags.m3u8",
            "duration": "5:29",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore HTML's list tags to efficiently structure information. Learn how to create ordered and unordered lists for better content organization."
          },
          {
            "title": "Anchor tag",
            "video": "/htmlcourse/Anchor_tag.m3u8",
            "duration": "7:53",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unlock the power of hyperlinking with the anchor tag. Understand how to connect different pages and resources within your website."
          },
          {
            "title": "Image tag",
            "video": "/htmlcourse/image_tag.m3u8",
            "duration": "6:48",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Bring visual appeal to your web pages with the image tag. Learn how to integrate images seamlessly into your HTML content."
          },
          {
            "title": "Audio & video tag",
            "video": "/htmlcourse/audio_and_video_tag.m3u8",
            "duration": "7:56",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user engagement with multimedia elements. Explore the audio and video tags to incorporate media seamlessly into your web projects."
          },
          {
            "title": "iframe & embed tag",
            "video": "/htmlcourse/iframe_and_embed_tag.m3u8",
            "duration": "7:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Harness the capabilities of iframe and embed tags. Understand how these tags enable the integration of external content within your web pages."
          },
          {
            "title": "Div tag",
            "video": "/htmlcourse/div_tag.m3u8",
            "duration": "3:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the versatile div tag. Learn how it acts as a container, allowing you to structure and style your HTML content effectively."
          },
          {
            "title": "Input tags",
            "video": "/htmlcourse/input_tag.m3u8",
            "duration": "14:01",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into user interaction with HTML input tags. Explore various input types and understand how they enable user data input."
          },
          {
            "title": "Button tag",
            "video": "/htmlcourse/button_tag.m3u8",
            "duration": "1:43",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user experience with interactive buttons. Learn the ins and outs of the button tag and its various applications."
          },
          {
            "title": "Form part 1",
            "video": "/htmlcourse/form_tag_1.m3u8",
            "duration": "9:09",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embark on the journey of web forms. In part one, explore the essential elements that make up a form, setting the stage for user data collection."
          },
          {
            "title": "Form part 2",
            "video": "/htmlcourse/form_tag_2.m3u8",
            "duration": "8:00",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Delve deeper into the world of web forms. In part two, learn about form validation, submission methods, and enhance the functionality of your forms."
          },
          {
            "title": "Table tag",
            "video": "/htmlcourse/table_tag.m3u8",
            "duration": "4:42",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Uncover the power of HTML tables. Learn how to structure and display data in a tabular format for improved readability."
          },
          {
            "title": "Semantic HTML - 1",
            "video": "/htmlcourse/semantic_html_1.m3u8",
            "duration": "5:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embrace semantic HTML for enhanced accessibility and SEO. In part one, understand how semantic tags contribute to the meaning and structure of your content."
          },
          {
            "title": "Semantic HTML - 2",
            "video": "/htmlcourse/semantic_html_2.m3u8",
            "duration": "2:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your journey into semantic HTML. In part two, explore additional tags that enrich the semantics of your web pages."
          },
          {
            "title": "Web Crawler",
            "video": "/htmlcourse/web_crawler.m3u8",
            "duration": "3:40",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Understand how websites are ranked to top by web crawling. Understand the fundamentals of how search engines navigate and index content across the vast web."
          },
          {
            "title": "Quiz 3",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the purpose of 'Text tags' in HTML?",
                "options": [
                  "To create lists of items",
                  "To structure webpage content",
                  "To manipulate text formatting",
                  "To embed multimedia elements"
                ],
                "questionId": 108
              },
              {
                "question": "Which HTML tags are used for creating ordered and unordered lists?",
                "options": [
                  "<ol> and <ul>",
                  "<ul> and <li>",
                  "<list> and <item>",
                  "<order> and <item>"
                ],
                "questionId": 109
              },
              {
                "question": "What does the 'Anchor tag' (<a>) primarily facilitate in HTML?",
                "options": [
                  "Embedding images",
                  "Creating hyperlinks",
                  "Styling webpage elements",
                  "Inserting audio content"
                ],
                "questionId": 110
              },
              {
                "question": "What does the term 'Web Crawler' refer to in the context of HTML?",
                "options": [
                  "A spider-like creature",
                  "A tool for organizing files",
                  "A script for automating tasks",
                  "A program for navigating and indexing web content"
                ],
                "questionId": 111
              }
            ]
          },
          {
            "title": "More HTML tags",
            "video": "/htmlcourse/more_html_tags.m3u8",
            "duration": "1:39",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Expand your HTML toolkit with additional tags. Discover tags that cater to specific needs, enhancing the richness of your web pages."
          },
          {
            "title": "Project 1 - 1",
            "video": "/htmlcourse/project_1_1.m3u8",
            "duration": "7:38",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Apply your newfound HTML skills in a practical project. In part one, embark on a hands-on project to where we build a small FAQ page by using semantic HTML tags and using font awesome icons."
          },
          {
            "title": "Project 1 - 2",
            "video": "/htmlcourse/project_1_2.m3u8",
            "duration": "8:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your project journey in part two. Apply advanced HTML concepts and solidify your skills through a comprehensive project that showcases your abilities."
          },
          {
            "title": "Project 2",
            "video": "/htmlcourse/project_2.m3u8",
            "duration": "9:05",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Level up with an in-depth project. Demonstrate your proficiency in HTML as you undertake a larger-scale project, integrating various elements learned throughout the course."
          },
          {
            "title": "Web Hosting",
            "video": "/htmlcourse/web_hosting.m3u8",
            "duration": "6:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unravel the mysteries of web hosting. Learn how to take your web projects live by exploring different hosting options and understanding the basics of site configurations."
          },
          {
            "title": "CSS",
            "video": "/htmlcourse/intro_to_css.m3u8",
            "duration": "8:22",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Transition seamlessly from HTML to CSS. In this module, delve into the world of Cascading Style Sheets to add style and visual appeal to your web pages."
          },
          {
            "title": "HTML and Project Quiz",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "In 'Project 1 - 1', what HTML semantic tags were primarily used for creating a FAQ page?",
                "options": [
                  "<div> and <span>",
                  "<details> and <summary>",
                  "<ul> and <li>",
                  "<section> and <article>"
                ],
                "questionId": 112
              },
              {
                "question": "In 'Project 1 - 2', how did you make an image float using HTML?",
                "options": [
                  "Applied 'float' property in CSS",
                  "Used 'position: absolute'",
                  "Set 'display: inline-block'",
                  "Inserted a 'float' tag around the image"
                ],
                "questionId": 113
              },
              {
                "question": "What was the focus of 'Project 2' in your HTML course?",
                "options": [
                  "Creating an FAQ page",
                  "Designing a personal portfolio",
                  "Developing a basic app documentation",
                  "Implementing a chat application"
                ],
                "questionId": 114
              },
              {
                "question": "What is web hosting in the context of web development?",
                "options": [
                  "A service that allows individuals and organizations to make their websites accessible via the World Wide Web",
                  "A method of creating dynamic web pages",
                  "A technique for optimizing website performance",
                  "A module covered in the CSS section"
                ],
                "questionId": 115
              }
            ]
          },
          {
            "title": "Wrap up",
            "video": "/htmlcourse/wrap_up.m3u8",
            "duration": "2:07",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Congratulations on completing the course! In this final module, recap your journey, reflect on your accomplishments, and gain insights into the next steps in your web development adventure."
          }
        ],
        "language": "Tamil",
        "requirements": [
          "Text editor for writing HTML code",
          "Web Browser to view the output of HTML code"
        ],
        "author": "N.U.Thejas hari",
        "authorInsta": "https://www.instagram.com/nuthejashari/",
        "meetingLink": "",
        "whatsappGroup": "",
        "recordedVideo": "",
        "courseId": "101110",
        "locked": false,
        "videos": "35",
        "projects": "2",
        "duration": "4 Hours",
        "paid": "",
        "cancellable": false,
        "createdAt": "2024-01-01T06:43:50.699Z",
        "updatedAt": "2024-01-01T06:43:50.699Z",
        "__v": 0,
        "completed": false,
        "enrolledOn": "2024-01-09T13:33:07.778Z",
        "certificate": "",
        "name": "Saranya Ravi",
        "userId": "659d4b018668a4898672fb03",
        "progress": 0,
        "allNotes": []
      }
    ],
    "createdAt": "2024-01-09T13:32:49.917Z",
    "updatedAt": "2024-01-09T13:33:08.422Z",
    "__v": 0
  },
  {
    "_id": "659d55d3f0a036103d0a390e",
    "name": "gokul hacker",
    "email": "gokulhacker9999@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Novice",
    "registeredWorkshops": [],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-09T14:18:59.295Z",
    "updatedAt": "2024-01-09T14:18:59.295Z",
    "__v": 0
  },
  {
    "_id": "659e50c5e23215588bbbd566",
    "name": "Nathi Art",
    "email": "nathiart6@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-10T08:09:41.980Z",
    "updatedAt": "2024-01-10T08:09:41.980Z",
    "__v": 0
  },
  {
    "_id": "659e6e7b41a3a5e5c5d71697",
    "name": "Enoch Deva kumar",
    "email": "enochdevakumar0@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Intermediate",
    "registeredWorkshops": [],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-10T10:16:27.227Z",
    "updatedAt": "2024-01-10T10:16:27.227Z",
    "__v": 0
  },
  {
    "_id": "659e6e9941a3a5e5c5d7169c",
    "name": "enoch devakumar",
    "email": "enochdevakumarads@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Intermediate",
    "registeredWorkshops": [],
    "enrolledCoursesId": [
      "101110"
    ],
    "enrolledCoursesData": [
      {
        "_id": "65925f26f5f0ffa3b0e38586",
        "title": "Basics of Networking and HTML Beginner to Advanced Course",
        "description": "Learn web development fundamentals, covering frontend, backend, and database structures. Explore client-server dynamics, APIs, various IP types, DNS workings, and HTML essentials with an introduction to CSS for crafting interactive websites",
        "image": "/html.png",
        "content": [
          {
            "title": "Course Introduction",
            "video": "/htmlcourse/intro.m3u8",
            "duration": "0:32",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Welcome to the course! In this introductory module, you'll get a glimpse of what's in store. We'll outline the course structure, set expectations, and highlight the outcomes you can anticipate upon completion."
          },
          {
            "title": "Expectations & Outcomes",
            "video": "/htmlcourse/CourseOutcomes&Scope.m3u8",
            "duration": "1:21",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Understand the goals of this course and what you'll gain by the end. We'll discuss the skills you'll acquire, the knowledge you'll gain, and how it will benefit you in the realm of web development and networking."
          },
          {
            "title": "Web Development & Scopes",
            "video": "/htmlcourse/WebDevelopment&Scopes.m3u8",
            "duration": "8:54",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Explore the vast landscape of web development careers. Learn about the diverse scopes and job opportunities available in the industry, providing you with insights to shape your career path."
          },
          {
            "title": "Frontend Backend Architecture",
            "video": "/htmlcourse/FrontendBackendArchitecture.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Delve into the intricacies of frontend and backend architecture. Understand how these components work together to create seamless and responsive web applications, laying the foundation for your development journey."
          },
          {
            "title": "Database",
            "video": "/htmlcourse/database.m3u8",
            "duration": "1:07",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Uncover the importance of databases in web development. Learn what are the types of database available and the free cloud services providing free database for developers."
          },
          {
            "title": "IP & Types",
            "video": "/htmlcourse/ip internal & external.m3u8",
            "duration": "9:35",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Navigate the world of Internet Protocol (IP) addresses. Gain a comprehensive understanding of IP types and their significance in the networking landscape."
          },
          {
            "title": "IPv4 vs IPv6",
            "video": "/htmlcourse/ipv4 vs ipv6.m3u8",
            "duration": "7:12",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Compare IPv4 and IPv6, the two versions of the Internet Protocol. Understand the differences and advancements that IPv6 brings to address the limitations of IPv4."
          },
          {
            "title": "Static vs Dynamic IP",
            "video": "/htmlcourse/static_vs_dynamic_ip.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the distinction between static and dynamic IP addresses. Learn how each type is assigned and its impact on network configurations."
          },
          {
            "title": "Quiz 1",
            "quiz": true,
            "locked": false,
            "completed": false,
            "questions": [
              {
                "question": "What does \"frontend\" refer to in web development?",
                "options": [
                  "The part of a website users interact with",
                  "The server-side logic of a website",
                  "The database management system",
                  "The network infrastructure"
                ],
                "questionId": 100
              },
              {
                "question": "What is the primary role of \"backend\" in web development?",
                "options": [
                  "Managing the user interface",
                  "Handling server-side logic and databases",
                  "Designing responsive layouts",
                  "Implementing frontend styles"
                ],
                "questionId": 101
              },
              {
                "question": "What does \"IP\" stand for in networking?",
                "options": [
                  "Internet Provider",
                  "Internet Protocol",
                  "Information Processing",
                  "Interface Port"
                ],
                "questionId": 102
              },
              {
                "question": " What is the total range of each octet in an IPv4 address?",
                "options": [
                  "0-100",
                  "0-127",
                  "0-255",
                  "0-64"
                ],
                "questionId": 103
              }
            ]
          },
          {
            "title": "DNS",
            "video": "/htmlcourse/dns.m3u8",
            "duration": "10:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into the Domain Name System (DNS) and unravel the process of translating domain names to IP addresses. Explore the role DNS plays in making web browsing seamless."
          },
          {
            "title": "What is API?",
            "video": "/htmlcourse/api.m3u8",
            "duration": "3:12",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Application Programming Interfaces (APIs). Understand their significance in web development, facilitating communication between different software systems."
          },
          {
            "title": "What is HTML",
            "video": "/htmlcourse/what_is_html.m3u8",
            "duration": "2:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Begin your journey into the core of web development with HTML. Learn the basics of structuring web content and creating the foundation for interactive websites."
          },
          {
            "title": "HTML Page Structure",
            "video": "/htmlcourse/HTML_page_structure.m3u8",
            "duration": "3:33",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the art of organizing your web pages. Explore HTML tags that define the structure of a webpage, providing a solid foundation for your coding endeavors."
          },
          {
            "title": "Quiz 2",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the primary function of DNS in web development?",
                "options": [
                  "To design responsive user interfaces",
                  "To translate domain names to IP addresses",
                  "To manage server-side logic",
                  "To encrypt website data"
                ],
                "questionId": 104
              },
              {
                "question": "What does 'API' stand for in web development?",
                "options": [
                  "Advanced Programming Interface",
                  "Application Programming Interface",
                  "Automated Processing Interface",
                  "Advanced Protocol Integration"
                ],
                "questionId": 105
              },
              {
                "question": "What is the main markup language used for creating web pages??",
                "options": [
                  "XML",
                  "XAMPP",
                  "HTML",
                  "CSS"
                ],
                "questionId": 106
              },
              {
                "question": "What does 'HTML' stand for?",
                "options": [
                  "Hyper Transfer Markup Language",
                  "High-Level Text Management Language",
                  "Hyperlink and Text Management Language",
                  "HyperText Markup Language"
                ],
                "questionId": 107
              }
            ]
          },
          {
            "title": "Text tags",
            "video": "/htmlcourse/text_tags.m3u8",
            "duration": "18:55",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore the world of text manipulation in HTML. Discover tags that enhance the presentation of textual content on your web pages."
          },
          {
            "title": "List tags",
            "video": "/htmlcourse/list_tags.m3u8",
            "duration": "5:29",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore HTML's list tags to efficiently structure information. Learn how to create ordered and unordered lists for better content organization."
          },
          {
            "title": "Anchor tag",
            "video": "/htmlcourse/Anchor_tag.m3u8",
            "duration": "7:53",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unlock the power of hyperlinking with the anchor tag. Understand how to connect different pages and resources within your website."
          },
          {
            "title": "Image tag",
            "video": "/htmlcourse/image_tag.m3u8",
            "duration": "6:48",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Bring visual appeal to your web pages with the image tag. Learn how to integrate images seamlessly into your HTML content."
          },
          {
            "title": "Audio & video tag",
            "video": "/htmlcourse/audio_and_video_tag.m3u8",
            "duration": "7:56",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user engagement with multimedia elements. Explore the audio and video tags to incorporate media seamlessly into your web projects."
          },
          {
            "title": "iframe & embed tag",
            "video": "/htmlcourse/iframe_and_embed_tag.m3u8",
            "duration": "7:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Harness the capabilities of iframe and embed tags. Understand how these tags enable the integration of external content within your web pages."
          },
          {
            "title": "Div tag",
            "video": "/htmlcourse/div_tag.m3u8",
            "duration": "3:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the versatile div tag. Learn how it acts as a container, allowing you to structure and style your HTML content effectively."
          },
          {
            "title": "Input tags",
            "video": "/htmlcourse/input_tag.m3u8",
            "duration": "14:01",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into user interaction with HTML input tags. Explore various input types and understand how they enable user data input."
          },
          {
            "title": "Button tag",
            "video": "/htmlcourse/button_tag.m3u8",
            "duration": "1:43",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user experience with interactive buttons. Learn the ins and outs of the button tag and its various applications."
          },
          {
            "title": "Form part 1",
            "video": "/htmlcourse/form_tag_1.m3u8",
            "duration": "9:09",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embark on the journey of web forms. In part one, explore the essential elements that make up a form, setting the stage for user data collection."
          },
          {
            "title": "Form part 2",
            "video": "/htmlcourse/form_tag_2.m3u8",
            "duration": "8:00",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Delve deeper into the world of web forms. In part two, learn about form validation, submission methods, and enhance the functionality of your forms."
          },
          {
            "title": "Table tag",
            "video": "/htmlcourse/table_tag.m3u8",
            "duration": "4:42",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Uncover the power of HTML tables. Learn how to structure and display data in a tabular format for improved readability."
          },
          {
            "title": "Semantic HTML - 1",
            "video": "/htmlcourse/semantic_html_1.m3u8",
            "duration": "5:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embrace semantic HTML for enhanced accessibility and SEO. In part one, understand how semantic tags contribute to the meaning and structure of your content."
          },
          {
            "title": "Semantic HTML - 2",
            "video": "/htmlcourse/semantic_html_2.m3u8",
            "duration": "2:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your journey into semantic HTML. In part two, explore additional tags that enrich the semantics of your web pages."
          },
          {
            "title": "Web Crawler",
            "video": "/htmlcourse/web_crawler.m3u8",
            "duration": "3:40",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Understand how websites are ranked to top by web crawling. Understand the fundamentals of how search engines navigate and index content across the vast web."
          },
          {
            "title": "Quiz 3",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the purpose of 'Text tags' in HTML?",
                "options": [
                  "To create lists of items",
                  "To structure webpage content",
                  "To manipulate text formatting",
                  "To embed multimedia elements"
                ],
                "questionId": 108
              },
              {
                "question": "Which HTML tags are used for creating ordered and unordered lists?",
                "options": [
                  "<ol> and <ul>",
                  "<ul> and <li>",
                  "<list> and <item>",
                  "<order> and <item>"
                ],
                "questionId": 109
              },
              {
                "question": "What does the 'Anchor tag' (<a>) primarily facilitate in HTML?",
                "options": [
                  "Embedding images",
                  "Creating hyperlinks",
                  "Styling webpage elements",
                  "Inserting audio content"
                ],
                "questionId": 110
              },
              {
                "question": "What does the term 'Web Crawler' refer to in the context of HTML?",
                "options": [
                  "A spider-like creature",
                  "A tool for organizing files",
                  "A script for automating tasks",
                  "A program for navigating and indexing web content"
                ],
                "questionId": 111
              }
            ]
          },
          {
            "title": "More HTML tags",
            "video": "/htmlcourse/more_html_tags.m3u8",
            "duration": "1:39",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Expand your HTML toolkit with additional tags. Discover tags that cater to specific needs, enhancing the richness of your web pages."
          },
          {
            "title": "Project 1 - 1",
            "video": "/htmlcourse/project_1_1.m3u8",
            "duration": "7:38",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Apply your newfound HTML skills in a practical project. In part one, embark on a hands-on project to where we build a small FAQ page by using semantic HTML tags and using font awesome icons."
          },
          {
            "title": "Project 1 - 2",
            "video": "/htmlcourse/project_1_2.m3u8",
            "duration": "8:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your project journey in part two. Apply advanced HTML concepts and solidify your skills through a comprehensive project that showcases your abilities."
          },
          {
            "title": "Project 2",
            "video": "/htmlcourse/project_2.m3u8",
            "duration": "9:05",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Level up with an in-depth project. Demonstrate your proficiency in HTML as you undertake a larger-scale project, integrating various elements learned throughout the course."
          },
          {
            "title": "Web Hosting",
            "video": "/htmlcourse/web_hosting.m3u8",
            "duration": "6:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unravel the mysteries of web hosting. Learn how to take your web projects live by exploring different hosting options and understanding the basics of site configurations."
          },
          {
            "title": "CSS",
            "video": "/htmlcourse/intro_to_css.m3u8",
            "duration": "8:22",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Transition seamlessly from HTML to CSS. In this module, delve into the world of Cascading Style Sheets to add style and visual appeal to your web pages."
          },
          {
            "title": "HTML and Project Quiz",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "In 'Project 1 - 1', what HTML semantic tags were primarily used for creating a FAQ page?",
                "options": [
                  "<div> and <span>",
                  "<details> and <summary>",
                  "<ul> and <li>",
                  "<section> and <article>"
                ],
                "questionId": 112
              },
              {
                "question": "In 'Project 1 - 2', how did you make an image float using HTML?",
                "options": [
                  "Applied 'float' property in CSS",
                  "Used 'position: absolute'",
                  "Set 'display: inline-block'",
                  "Inserted a 'float' tag around the image"
                ],
                "questionId": 113
              },
              {
                "question": "What was the focus of 'Project 2' in your HTML course?",
                "options": [
                  "Creating an FAQ page",
                  "Designing a personal portfolio",
                  "Developing a basic app documentation",
                  "Implementing a chat application"
                ],
                "questionId": 114
              },
              {
                "question": "What is web hosting in the context of web development?",
                "options": [
                  "A service that allows individuals and organizations to make their websites accessible via the World Wide Web",
                  "A method of creating dynamic web pages",
                  "A technique for optimizing website performance",
                  "A module covered in the CSS section"
                ],
                "questionId": 115
              }
            ]
          },
          {
            "title": "Wrap up",
            "video": "/htmlcourse/wrap_up.m3u8",
            "duration": "2:07",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Congratulations on completing the course! In this final module, recap your journey, reflect on your accomplishments, and gain insights into the next steps in your web development adventure."
          }
        ],
        "language": "Tamil",
        "requirements": [
          "Text editor for writing HTML code",
          "Web Browser to view the output of HTML code"
        ],
        "author": "N.U.Thejas hari",
        "authorInsta": "https://www.instagram.com/nuthejashari/",
        "meetingLink": "",
        "whatsappGroup": "",
        "recordedVideo": "",
        "courseId": "101110",
        "locked": false,
        "videos": "35",
        "projects": "2",
        "duration": "4 Hours",
        "paid": "",
        "cancellable": false,
        "createdAt": "2024-01-01T06:43:50.699Z",
        "updatedAt": "2024-01-01T06:43:50.699Z",
        "__v": 0,
        "completed": false,
        "enrolledOn": "2024-01-10T10:17:38.136Z",
        "certificate": "",
        "name": "enoch devakumar",
        "userId": "659e6e9941a3a5e5c5d7169c",
        "progress": 0,
        "allNotes": []
      }
    ],
    "createdAt": "2024-01-10T10:16:57.839Z",
    "updatedAt": "2024-01-10T16:16:41.872Z",
    "__v": 0
  },
  {
    "_id": "65b0eda07388cbc237538f8f",
    "name": "Vishwa K K",
    "email": "vishwamspkvel@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Novice",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-24T10:59:44.459Z",
    "updatedAt": "2024-01-24T10:59:58.649Z",
    "__v": 0
  },
  {
    "_id": "65b0edb57efd73aec890b8cc",
    "name": "Suresh Kumar",
    "email": "saravanaghan@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Intermediate",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-24T11:00:05.458Z",
    "updatedAt": "2024-01-24T11:00:22.624Z",
    "__v": 0
  },
  {
    "_id": "65b0ede47efd73aec890b8d9",
    "name": "Tamil Selvan",
    "email": "tamilselvan0810a@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-24T11:00:52.734Z",
    "updatedAt": "2024-01-24T11:00:52.734Z",
    "__v": 0
  },
  {
    "_id": "65b0edfc7388cbc237538f99",
    "name": "Hari Haran",
    "email": "hariharanvj24@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_ltv2OFMPu",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-24T11:01:16.788Z",
    "updatedAt": "2024-01-24T11:01:36.369Z",
    "__v": 0
  },
  {
    "_id": "65b0ee307388cbc237538fa0",
    "name": "Dineshkumar Madheswaran",
    "email": "dineshkumar5683madheswaran@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Novice",
    "registeredWorkshops": [
      "65b4bd00ed9d87145d75ebe2",
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-24T11:02:08.204Z",
    "updatedAt": "2024-02-01T07:19:57.689Z",
    "__v": 0
  },
  {
    "_id": "65b0efbb4c798a09845c006a",
    "name": "Gowtham Angayee",
    "email": "gowthamangayee@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Intermediate",
    "registeredWorkshops": [
      "65b4bd00ed9d87145d75ebe2",
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-24T11:08:43.417Z",
    "updatedAt": "2024-01-31T18:07:07.666Z",
    "__v": 0
  },
  {
    "_id": "65b0f0664c798a09845c0074",
    "name": "Arun prakash",
    "email": "arunprakash7871@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-24T11:11:34.997Z",
    "updatedAt": "2024-01-24T11:11:45.906Z",
    "__v": 0
  },
  {
    "_id": "65b0f0901ab51ec27f179daf",
    "name": "Sankar Sankarram",
    "email": "sankarmsd2134@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Novice",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-24T11:12:16.023Z",
    "updatedAt": "2024-01-24T11:12:46.983Z",
    "__v": 0
  },
  {
    "_id": "65b0f0b04c798a09845c0082",
    "name": "G.Ramesh",
    "email": "rameshg200234@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-24T11:12:48.537Z",
    "updatedAt": "2024-01-24T11:13:04.173Z",
    "__v": 0
  },
  {
    "_id": "65b0f18b1ab51ec27f179dba",
    "name": "Harish K",
    "email": "harishk020401@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-24T11:16:27.619Z",
    "updatedAt": "2024-01-24T11:16:27.619Z",
    "__v": 0
  },
  {
    "_id": "65b0f2c67efd73aec890b8f9",
    "name": "T Ilango",
    "email": "ilangot2004@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Intermediate",
    "registeredWorkshops": [
      "65b4bd00ed9d87145d75ebe2",
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-24T11:21:42.856Z",
    "updatedAt": "2024-02-03T15:10:35.190Z",
    "__v": 0
  },
  {
    "_id": "65b0f37d2c4122057b7b869f",
    "name": "Sanjay Roman 378",
    "email": "sanjayrajamech17@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_g1SnaYtzro",
    "level": "Intermediate",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-24T11:24:45.323Z",
    "updatedAt": "2024-01-24T11:25:47.724Z",
    "__v": 0
  },
  {
    "_id": "65b0f6b003bad7eadfe7448a",
    "name": "Meiyarasi M",
    "email": "meiyarasi003@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-24T11:38:24.562Z",
    "updatedAt": "2024-01-24T11:38:33.613Z",
    "__v": 0
  },
  {
    "_id": "65b0ff8dff58883280c4bac4",
    "name": "siva sankar",
    "email": "bagavathisiva22051997@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-24T12:16:13.380Z",
    "updatedAt": "2024-01-24T12:16:28.071Z",
    "__v": 0
  },
  {
    "_id": "65b101e471dd774757fd10c7",
    "name": "sethu Krish",
    "email": "mrsethusharp@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-24T12:26:12.859Z",
    "updatedAt": "2024-01-24T12:26:37.981Z",
    "__v": 0
  },
  {
    "_id": "65b104d571dd774757fd10cf",
    "name": "Kowshik Narayan",
    "email": "kowshiknarayan16@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Intermediate",
    "registeredWorkshops": [
      "65b4bd00ed9d87145d75ebe2",
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-24T12:38:45.150Z",
    "updatedAt": "2024-01-27T14:51:15.928Z",
    "__v": 0
  },
  {
    "_id": "65b1062671dd774757fd10da",
    "name": "512- Santhosh Pandian SG",
    "email": "200701512@rajalakshmi.edu.in",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Novice",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-24T12:44:22.630Z",
    "updatedAt": "2024-01-24T12:45:03.338Z",
    "__v": 0
  },
  {
    "_id": "65b1083feaae8cc87217c560",
    "name": "Manikandan G",
    "email": "dmanirk07@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Intermediate",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-24T12:53:19.138Z",
    "updatedAt": "2024-01-24T12:53:39.419Z",
    "__v": 0
  },
  {
    "_id": "65b10aeb40a2147ebec90033",
    "name": "thirumalai kumar",
    "email": "thirumalaikumartenkasi007@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Novice",
    "registeredWorkshops": [],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-24T13:04:43.197Z",
    "updatedAt": "2024-01-24T13:04:43.197Z",
    "__v": 0
  },
  {
    "_id": "65b10c094596b88f6f21a3ef",
    "name": "Dhamotharan B",
    "email": "dhamotharansathyan@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Intermediate",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-24T13:09:29.319Z",
    "updatedAt": "2024-01-24T13:10:16.949Z",
    "__v": 0
  },
  {
    "_id": "65b10c194596b88f6f21a3f3",
    "name": "Nikhitha Vasudevan",
    "email": "nikhithavasudevan3@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Intermediate",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-24T13:09:45.449Z",
    "updatedAt": "2024-01-24T13:10:28.755Z",
    "__v": 0
  },
  {
    "_id": "65b1116aaec28ad6ad908b7d",
    "name": "Copyright Free Songs",
    "email": "flashymako@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Novice",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-24T13:32:26.964Z",
    "updatedAt": "2024-01-24T13:32:35.331Z",
    "__v": 0
  },
  {
    "_id": "65b11193e54dd51a00422a33",
    "name": "Hemanth S",
    "email": "hemanthcse30@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Novice",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-24T13:33:07.191Z",
    "updatedAt": "2024-01-24T13:33:32.483Z",
    "__v": 0
  },
  {
    "_id": "65b11883c351e3fcdd863721",
    "name": "Selva Murugan",
    "email": "selvakvs11@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Intermediate",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-24T14:02:43.907Z",
    "updatedAt": "2024-01-24T14:03:04.585Z",
    "__v": 0
  },
  {
    "_id": "65b11ca80b3b2402787e93cf",
    "name": "Rohi Rg",
    "email": "rohirece@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-24T14:20:24.097Z",
    "updatedAt": "2024-01-25T18:03:16.810Z",
    "__v": 0
  },
  {
    "_id": "65b12593e9fbaa90c28d8cf1",
    "name": "suresh kannan",
    "email": "skkannan1695@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Novice",
    "registeredWorkshops": [
      "65b4bd00ed9d87145d75ebe2",
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-24T14:58:27.239Z",
    "updatedAt": "2024-02-02T04:20:34.595Z",
    "__v": 0
  },
  {
    "_id": "65b126266e8ae1483c3e7b72",
    "name": "John Selva",
    "email": "johnselva23@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Novice",
    "registeredWorkshops": [],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-24T15:00:54.781Z",
    "updatedAt": "2024-01-24T15:00:54.781Z",
    "__v": 0
  },
  {
    "_id": "65b127299dc7bceb820ad236",
    "name": "Siva Subramanian.G",
    "email": "sivasujay392@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-24T15:05:13.366Z",
    "updatedAt": "2024-01-24T15:05:40.042Z",
    "__v": 0
  },
  {
    "_id": "65b12dd84b554af409835ba3",
    "name": "Karthick",
    "email": "jaikarthick418@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Novice",
    "registeredWorkshops": [],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-24T15:33:44.139Z",
    "updatedAt": "2024-01-24T15:33:44.139Z",
    "__v": 0
  },
  {
    "_id": "65b1360cb744dc33b9518d3b",
    "name": "rahul b",
    "email": "rahuldummy735@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65c4ec315a6594a5ea09b47f",
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [
      "101110"
    ],
    "enrolledCoursesData": [
      {
        "_id": "65925f26f5f0ffa3b0e38586",
        "title": "Basics of Networking and HTML Beginner to Advanced Course",
        "description": "Learn web development fundamentals, covering frontend, backend, and database structures. Explore client-server dynamics, APIs, various IP types, DNS workings, and HTML essentials with an introduction to CSS for crafting interactive websites",
        "image": "/html.png",
        "content": [
          {
            "title": "Course Introduction",
            "video": "/htmlcourse/intro.m3u8",
            "duration": "0:32",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Welcome to the course! In this introductory module, you'll get a glimpse of what's in store. We'll outline the course structure, set expectations, and highlight the outcomes you can anticipate upon completion."
          },
          {
            "title": "Expectations & Outcomes",
            "video": "/htmlcourse/CourseOutcomes&Scope.m3u8",
            "duration": "1:21",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Understand the goals of this course and what you'll gain by the end. We'll discuss the skills you'll acquire, the knowledge you'll gain, and how it will benefit you in the realm of web development and networking."
          },
          {
            "title": "Web Development & Scopes",
            "video": "/htmlcourse/WebDevelopment&Scopes.m3u8",
            "duration": "8:54",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the vast landscape of web development careers. Learn about the diverse scopes and job opportunities available in the industry, providing you with insights to shape your career path."
          },
          {
            "title": "Frontend Backend Architecture",
            "video": "/htmlcourse/FrontendBackendArchitecture.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Delve into the intricacies of frontend and backend architecture. Understand how these components work together to create seamless and responsive web applications, laying the foundation for your development journey."
          },
          {
            "title": "Database",
            "video": "/htmlcourse/database.m3u8",
            "duration": "1:07",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Uncover the importance of databases in web development. Learn what are the types of database available and the free cloud services providing free database for developers."
          },
          {
            "title": "IP & Types",
            "video": "/htmlcourse/ip internal & external.m3u8",
            "duration": "9:35",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Navigate the world of Internet Protocol (IP) addresses. Gain a comprehensive understanding of IP types and their significance in the networking landscape."
          },
          {
            "title": "IPv4 vs IPv6",
            "video": "/htmlcourse/ipv4 vs ipv6.m3u8",
            "duration": "7:12",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Compare IPv4 and IPv6, the two versions of the Internet Protocol. Understand the differences and advancements that IPv6 brings to address the limitations of IPv4."
          },
          {
            "title": "Static vs Dynamic IP",
            "video": "/htmlcourse/static_vs_dynamic_ip.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the distinction between static and dynamic IP addresses. Learn how each type is assigned and its impact on network configurations."
          },
          {
            "title": "Quiz 1",
            "quiz": true,
            "locked": false,
            "completed": false,
            "questions": [
              {
                "question": "What does \"frontend\" refer to in web development?",
                "options": [
                  "The part of a website users interact with",
                  "The server-side logic of a website",
                  "The database management system",
                  "The network infrastructure"
                ],
                "questionId": 100
              },
              {
                "question": "What is the primary role of \"backend\" in web development?",
                "options": [
                  "Managing the user interface",
                  "Handling server-side logic and databases",
                  "Designing responsive layouts",
                  "Implementing frontend styles"
                ],
                "questionId": 101
              },
              {
                "question": "What does \"IP\" stand for in networking?",
                "options": [
                  "Internet Provider",
                  "Internet Protocol",
                  "Information Processing",
                  "Interface Port"
                ],
                "questionId": 102
              },
              {
                "question": " What is the total range of each octet in an IPv4 address?",
                "options": [
                  "0-100",
                  "0-127",
                  "0-255",
                  "0-64"
                ],
                "questionId": 103
              }
            ]
          },
          {
            "title": "DNS",
            "video": "/htmlcourse/dns.m3u8",
            "duration": "10:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into the Domain Name System (DNS) and unravel the process of translating domain names to IP addresses. Explore the role DNS plays in making web browsing seamless."
          },
          {
            "title": "What is API?",
            "video": "/htmlcourse/api.m3u8",
            "duration": "3:12",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Application Programming Interfaces (APIs). Understand their significance in web development, facilitating communication between different software systems."
          },
          {
            "title": "What is HTML",
            "video": "/htmlcourse/what_is_html.m3u8",
            "duration": "2:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Begin your journey into the core of web development with HTML. Learn the basics of structuring web content and creating the foundation for interactive websites."
          },
          {
            "title": "HTML Page Structure",
            "video": "/htmlcourse/HTML_page_structure.m3u8",
            "duration": "3:33",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the art of organizing your web pages. Explore HTML tags that define the structure of a webpage, providing a solid foundation for your coding endeavors."
          },
          {
            "title": "Quiz 2",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the primary function of DNS in web development?",
                "options": [
                  "To design responsive user interfaces",
                  "To translate domain names to IP addresses",
                  "To manage server-side logic",
                  "To encrypt website data"
                ],
                "questionId": 104
              },
              {
                "question": "What does 'API' stand for in web development?",
                "options": [
                  "Advanced Programming Interface",
                  "Application Programming Interface",
                  "Automated Processing Interface",
                  "Advanced Protocol Integration"
                ],
                "questionId": 105
              },
              {
                "question": "What is the main markup language used for creating web pages??",
                "options": [
                  "XML",
                  "XAMPP",
                  "HTML",
                  "CSS"
                ],
                "questionId": 106
              },
              {
                "question": "What does 'HTML' stand for?",
                "options": [
                  "Hyper Transfer Markup Language",
                  "High-Level Text Management Language",
                  "Hyperlink and Text Management Language",
                  "HyperText Markup Language"
                ],
                "questionId": 107
              }
            ]
          },
          {
            "title": "Text tags",
            "video": "/htmlcourse/text_tags.m3u8",
            "duration": "18:55",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore the world of text manipulation in HTML. Discover tags that enhance the presentation of textual content on your web pages."
          },
          {
            "title": "List tags",
            "video": "/htmlcourse/list_tags.m3u8",
            "duration": "5:29",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore HTML's list tags to efficiently structure information. Learn how to create ordered and unordered lists for better content organization."
          },
          {
            "title": "Anchor tag",
            "video": "/htmlcourse/Anchor_tag.m3u8",
            "duration": "7:53",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unlock the power of hyperlinking with the anchor tag. Understand how to connect different pages and resources within your website."
          },
          {
            "title": "Image tag",
            "video": "/htmlcourse/image_tag.m3u8",
            "duration": "6:48",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Bring visual appeal to your web pages with the image tag. Learn how to integrate images seamlessly into your HTML content."
          },
          {
            "title": "Audio & video tag",
            "video": "/htmlcourse/audio_and_video_tag.m3u8",
            "duration": "7:56",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user engagement with multimedia elements. Explore the audio and video tags to incorporate media seamlessly into your web projects."
          },
          {
            "title": "iframe & embed tag",
            "video": "/htmlcourse/iframe_and_embed_tag.m3u8",
            "duration": "7:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Harness the capabilities of iframe and embed tags. Understand how these tags enable the integration of external content within your web pages."
          },
          {
            "title": "Div tag",
            "video": "/htmlcourse/div_tag.m3u8",
            "duration": "3:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the versatile div tag. Learn how it acts as a container, allowing you to structure and style your HTML content effectively."
          },
          {
            "title": "Input tags",
            "video": "/htmlcourse/input_tag.m3u8",
            "duration": "14:01",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into user interaction with HTML input tags. Explore various input types and understand how they enable user data input."
          },
          {
            "title": "Button tag",
            "video": "/htmlcourse/button_tag.m3u8",
            "duration": "1:43",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user experience with interactive buttons. Learn the ins and outs of the button tag and its various applications."
          },
          {
            "title": "Form part 1",
            "video": "/htmlcourse/form_tag_1.m3u8",
            "duration": "9:09",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embark on the journey of web forms. In part one, explore the essential elements that make up a form, setting the stage for user data collection."
          },
          {
            "title": "Form part 2",
            "video": "/htmlcourse/form_tag_2.m3u8",
            "duration": "8:00",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Delve deeper into the world of web forms. In part two, learn about form validation, submission methods, and enhance the functionality of your forms."
          },
          {
            "title": "Table tag",
            "video": "/htmlcourse/table_tag.m3u8",
            "duration": "4:42",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Uncover the power of HTML tables. Learn how to structure and display data in a tabular format for improved readability."
          },
          {
            "title": "Semantic HTML - 1",
            "video": "/htmlcourse/semantic_html_1.m3u8",
            "duration": "5:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embrace semantic HTML for enhanced accessibility and SEO. In part one, understand how semantic tags contribute to the meaning and structure of your content."
          },
          {
            "title": "Semantic HTML - 2",
            "video": "/htmlcourse/semantic_html_2.m3u8",
            "duration": "2:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your journey into semantic HTML. In part two, explore additional tags that enrich the semantics of your web pages."
          },
          {
            "title": "Web Crawler",
            "video": "/htmlcourse/web_crawler.m3u8",
            "duration": "3:40",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Understand how websites are ranked to top by web crawling. Understand the fundamentals of how search engines navigate and index content across the vast web."
          },
          {
            "title": "Quiz 3",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the purpose of 'Text tags' in HTML?",
                "options": [
                  "To create lists of items",
                  "To structure webpage content",
                  "To manipulate text formatting",
                  "To embed multimedia elements"
                ],
                "questionId": 108
              },
              {
                "question": "Which HTML tags are used for creating ordered and unordered lists?",
                "options": [
                  "<ol> and <ul>",
                  "<ul> and <li>",
                  "<list> and <item>",
                  "<order> and <item>"
                ],
                "questionId": 109
              },
              {
                "question": "What does the 'Anchor tag' (<a>) primarily facilitate in HTML?",
                "options": [
                  "Embedding images",
                  "Creating hyperlinks",
                  "Styling webpage elements",
                  "Inserting audio content"
                ],
                "questionId": 110
              },
              {
                "question": "What does the term 'Web Crawler' refer to in the context of HTML?",
                "options": [
                  "A spider-like creature",
                  "A tool for organizing files",
                  "A script for automating tasks",
                  "A program for navigating and indexing web content"
                ],
                "questionId": 111
              }
            ]
          },
          {
            "title": "More HTML tags",
            "video": "/htmlcourse/more_html_tags.m3u8",
            "duration": "1:39",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Expand your HTML toolkit with additional tags. Discover tags that cater to specific needs, enhancing the richness of your web pages."
          },
          {
            "title": "Project 1 - 1",
            "video": "/htmlcourse/project_1_1.m3u8",
            "duration": "7:38",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Apply your newfound HTML skills in a practical project. In part one, embark on a hands-on project to where we build a small FAQ page by using semantic HTML tags and using font awesome icons."
          },
          {
            "title": "Project 1 - 2",
            "video": "/htmlcourse/project_1_2.m3u8",
            "duration": "8:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your project journey in part two. Apply advanced HTML concepts and solidify your skills through a comprehensive project that showcases your abilities."
          },
          {
            "title": "Project 2",
            "video": "/htmlcourse/project_2.m3u8",
            "duration": "9:05",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Level up with an in-depth project. Demonstrate your proficiency in HTML as you undertake a larger-scale project, integrating various elements learned throughout the course."
          },
          {
            "title": "Web Hosting",
            "video": "/htmlcourse/web_hosting.m3u8",
            "duration": "6:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unravel the mysteries of web hosting. Learn how to take your web projects live by exploring different hosting options and understanding the basics of site configurations."
          },
          {
            "title": "CSS",
            "video": "/htmlcourse/intro_to_css.m3u8",
            "duration": "8:22",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Transition seamlessly from HTML to CSS. In this module, delve into the world of Cascading Style Sheets to add style and visual appeal to your web pages."
          },
          {
            "title": "HTML and Project Quiz",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "In 'Project 1 - 1', what HTML semantic tags were primarily used for creating a FAQ page?",
                "options": [
                  "<div> and <span>",
                  "<details> and <summary>",
                  "<ul> and <li>",
                  "<section> and <article>"
                ],
                "questionId": 112
              },
              {
                "question": "In 'Project 1 - 2', how did you make an image float using HTML?",
                "options": [
                  "Applied 'float' property in CSS",
                  "Used 'position: absolute'",
                  "Set 'display: inline-block'",
                  "Inserted a 'float' tag around the image"
                ],
                "questionId": 113
              },
              {
                "question": "What was the focus of 'Project 2' in your HTML course?",
                "options": [
                  "Creating an FAQ page",
                  "Designing a personal portfolio",
                  "Developing a basic app documentation",
                  "Implementing a chat application"
                ],
                "questionId": 114
              },
              {
                "question": "What is web hosting in the context of web development?",
                "options": [
                  "A service that allows individuals and organizations to make their websites accessible via the World Wide Web",
                  "A method of creating dynamic web pages",
                  "A technique for optimizing website performance",
                  "A module covered in the CSS section"
                ],
                "questionId": 115
              }
            ]
          },
          {
            "title": "Wrap up",
            "video": "/htmlcourse/wrap_up.m3u8",
            "duration": "2:07",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Congratulations on completing the course! In this final module, recap your journey, reflect on your accomplishments, and gain insights into the next steps in your web development adventure."
          }
        ],
        "language": "Tamil",
        "requirements": [
          "Text editor for writing HTML code",
          "Web Browser to view the output of HTML code"
        ],
        "author": "N.U.Thejas hari",
        "authorInsta": "https://www.instagram.com/nuthejashari/",
        "meetingLink": "",
        "whatsappGroup": "",
        "recordedVideo": "",
        "courseId": "101110",
        "locked": false,
        "videos": "35",
        "projects": "2",
        "duration": "4 Hours",
        "paid": "",
        "cancellable": false,
        "createdAt": "2024-01-01T06:43:50.699Z",
        "updatedAt": "2024-01-01T06:43:50.699Z",
        "__v": 0,
        "completed": false,
        "enrolledOn": "2024-02-08T15:13:10.241Z",
        "certificate": "",
        "name": "rahul b",
        "userId": "65b1360cb744dc33b9518d3b",
        "progress": 0,
        "allNotes": []
      }
    ],
    "createdAt": "2024-01-24T16:08:44.367Z",
    "updatedAt": "2024-02-08T15:13:12.077Z",
    "__v": 0
  },
  {
    "_id": "65b137a296de4cc307f4e16a",
    "name": "Kesavan (kesav)",
    "email": "kesavanplk7@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Intermediate",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-24T16:15:30.128Z",
    "updatedAt": "2024-01-24T16:16:12.494Z",
    "__v": 0
  },
  {
    "_id": "65b139fcad3de5872a55fb4a",
    "name": "Shakila Yogavathi",
    "email": "yogavathisekar3619@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b4bd00ed9d87145d75ebe2",
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-24T16:25:32.932Z",
    "updatedAt": "2024-02-01T09:48:16.310Z",
    "__v": 0
  },
  {
    "_id": "65b13e43f7892d0e7ea61fcd",
    "name": "karthikeyan Rajan",
    "email": "karthijan111@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-24T16:43:47.148Z",
    "updatedAt": "2024-01-24T16:43:47.148Z",
    "__v": 0
  },
  {
    "_id": "65b1430d93e4284cbcb55959",
    "name": "ROHITH V",
    "email": "rohithviswanathan30@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Intermediate",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-24T17:04:13.066Z",
    "updatedAt": "2024-01-24T17:04:24.769Z",
    "__v": 0
  },
  {
    "_id": "65b1454493e4284cbcb55960",
    "name": "Srilekha M",
    "email": "srilekhs2k3@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-24T17:13:40.622Z",
    "updatedAt": "2024-01-24T17:13:40.622Z",
    "__v": 0
  },
  {
    "_id": "65b1470cb4dd8bc89b60818d",
    "name": "Umar Farooq",
    "email": "umarabdul.0121@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Intermediate",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-24T17:21:16.857Z",
    "updatedAt": "2024-01-24T17:21:25.211Z",
    "__v": 0
  },
  {
    "_id": "65b147d210c681231cdf1cc6",
    "name": "Mathan Kumar005",
    "email": "mathankumar67890mmk@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-24T17:24:34.290Z",
    "updatedAt": "2024-01-24T17:24:46.926Z",
    "__v": 0
  },
  {
    "_id": "65b14a370d097aae73c655ae",
    "name": "Rahul Rahul",
    "email": "raghul9787b@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-24T17:34:47.641Z",
    "updatedAt": "2024-01-24T17:34:55.866Z",
    "__v": 0
  },
  {
    "_id": "65b14c2bbc3a22253c78cb04",
    "name": "Praveen S",
    "email": "praveenboss2015@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Novice",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-24T17:43:07.201Z",
    "updatedAt": "2024-01-24T17:43:15.346Z",
    "__v": 0
  },
  {
    "_id": "65b14dc9bc3a22253c78cb11",
    "name": "janani dcse",
    "email": "dcsejanani@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [
      "101110"
    ],
    "enrolledCoursesData": [
      {
        "_id": "65925f26f5f0ffa3b0e38586",
        "title": "Basics of Networking and HTML Beginner to Advanced Course",
        "description": "Learn web development fundamentals, covering frontend, backend, and database structures. Explore client-server dynamics, APIs, various IP types, DNS workings, and HTML essentials with an introduction to CSS for crafting interactive websites",
        "image": "/html.png",
        "content": [
          {
            "title": "Course Introduction",
            "video": "/htmlcourse/intro.m3u8",
            "duration": "0:32",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Welcome to the course! In this introductory module, you'll get a glimpse of what's in store. We'll outline the course structure, set expectations, and highlight the outcomes you can anticipate upon completion."
          },
          {
            "title": "Expectations & Outcomes",
            "video": "/htmlcourse/CourseOutcomes&Scope.m3u8",
            "duration": "1:21",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Understand the goals of this course and what you'll gain by the end. We'll discuss the skills you'll acquire, the knowledge you'll gain, and how it will benefit you in the realm of web development and networking."
          },
          {
            "title": "Web Development & Scopes",
            "video": "/htmlcourse/WebDevelopment&Scopes.m3u8",
            "duration": "8:54",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the vast landscape of web development careers. Learn about the diverse scopes and job opportunities available in the industry, providing you with insights to shape your career path."
          },
          {
            "title": "Frontend Backend Architecture",
            "video": "/htmlcourse/FrontendBackendArchitecture.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Delve into the intricacies of frontend and backend architecture. Understand how these components work together to create seamless and responsive web applications, laying the foundation for your development journey."
          },
          {
            "title": "Database",
            "video": "/htmlcourse/database.m3u8",
            "duration": "1:07",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Uncover the importance of databases in web development. Learn what are the types of database available and the free cloud services providing free database for developers."
          },
          {
            "title": "IP & Types",
            "video": "/htmlcourse/ip internal & external.m3u8",
            "duration": "9:35",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Navigate the world of Internet Protocol (IP) addresses. Gain a comprehensive understanding of IP types and their significance in the networking landscape."
          },
          {
            "title": "IPv4 vs IPv6",
            "video": "/htmlcourse/ipv4 vs ipv6.m3u8",
            "duration": "7:12",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Compare IPv4 and IPv6, the two versions of the Internet Protocol. Understand the differences and advancements that IPv6 brings to address the limitations of IPv4."
          },
          {
            "title": "Static vs Dynamic IP",
            "video": "/htmlcourse/static_vs_dynamic_ip.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the distinction between static and dynamic IP addresses. Learn how each type is assigned and its impact on network configurations."
          },
          {
            "title": "Quiz 1",
            "quiz": true,
            "locked": false,
            "completed": false,
            "questions": [
              {
                "question": "What does \"frontend\" refer to in web development?",
                "options": [
                  "The part of a website users interact with",
                  "The server-side logic of a website",
                  "The database management system",
                  "The network infrastructure"
                ],
                "questionId": 100
              },
              {
                "question": "What is the primary role of \"backend\" in web development?",
                "options": [
                  "Managing the user interface",
                  "Handling server-side logic and databases",
                  "Designing responsive layouts",
                  "Implementing frontend styles"
                ],
                "questionId": 101
              },
              {
                "question": "What does \"IP\" stand for in networking?",
                "options": [
                  "Internet Provider",
                  "Internet Protocol",
                  "Information Processing",
                  "Interface Port"
                ],
                "questionId": 102
              },
              {
                "question": " What is the total range of each octet in an IPv4 address?",
                "options": [
                  "0-100",
                  "0-127",
                  "0-255",
                  "0-64"
                ],
                "questionId": 103
              }
            ]
          },
          {
            "title": "DNS",
            "video": "/htmlcourse/dns.m3u8",
            "duration": "10:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into the Domain Name System (DNS) and unravel the process of translating domain names to IP addresses. Explore the role DNS plays in making web browsing seamless."
          },
          {
            "title": "What is API?",
            "video": "/htmlcourse/api.m3u8",
            "duration": "3:12",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Application Programming Interfaces (APIs). Understand their significance in web development, facilitating communication between different software systems."
          },
          {
            "title": "What is HTML",
            "video": "/htmlcourse/what_is_html.m3u8",
            "duration": "2:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Begin your journey into the core of web development with HTML. Learn the basics of structuring web content and creating the foundation for interactive websites."
          },
          {
            "title": "HTML Page Structure",
            "video": "/htmlcourse/HTML_page_structure.m3u8",
            "duration": "3:33",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the art of organizing your web pages. Explore HTML tags that define the structure of a webpage, providing a solid foundation for your coding endeavors."
          },
          {
            "title": "Quiz 2",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the primary function of DNS in web development?",
                "options": [
                  "To design responsive user interfaces",
                  "To translate domain names to IP addresses",
                  "To manage server-side logic",
                  "To encrypt website data"
                ],
                "questionId": 104
              },
              {
                "question": "What does 'API' stand for in web development?",
                "options": [
                  "Advanced Programming Interface",
                  "Application Programming Interface",
                  "Automated Processing Interface",
                  "Advanced Protocol Integration"
                ],
                "questionId": 105
              },
              {
                "question": "What is the main markup language used for creating web pages??",
                "options": [
                  "XML",
                  "XAMPP",
                  "HTML",
                  "CSS"
                ],
                "questionId": 106
              },
              {
                "question": "What does 'HTML' stand for?",
                "options": [
                  "Hyper Transfer Markup Language",
                  "High-Level Text Management Language",
                  "Hyperlink and Text Management Language",
                  "HyperText Markup Language"
                ],
                "questionId": 107
              }
            ]
          },
          {
            "title": "Text tags",
            "video": "/htmlcourse/text_tags.m3u8",
            "duration": "18:55",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore the world of text manipulation in HTML. Discover tags that enhance the presentation of textual content on your web pages."
          },
          {
            "title": "List tags",
            "video": "/htmlcourse/list_tags.m3u8",
            "duration": "5:29",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore HTML's list tags to efficiently structure information. Learn how to create ordered and unordered lists for better content organization."
          },
          {
            "title": "Anchor tag",
            "video": "/htmlcourse/Anchor_tag.m3u8",
            "duration": "7:53",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unlock the power of hyperlinking with the anchor tag. Understand how to connect different pages and resources within your website."
          },
          {
            "title": "Image tag",
            "video": "/htmlcourse/image_tag.m3u8",
            "duration": "6:48",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Bring visual appeal to your web pages with the image tag. Learn how to integrate images seamlessly into your HTML content."
          },
          {
            "title": "Audio & video tag",
            "video": "/htmlcourse/audio_and_video_tag.m3u8",
            "duration": "7:56",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user engagement with multimedia elements. Explore the audio and video tags to incorporate media seamlessly into your web projects."
          },
          {
            "title": "iframe & embed tag",
            "video": "/htmlcourse/iframe_and_embed_tag.m3u8",
            "duration": "7:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Harness the capabilities of iframe and embed tags. Understand how these tags enable the integration of external content within your web pages."
          },
          {
            "title": "Div tag",
            "video": "/htmlcourse/div_tag.m3u8",
            "duration": "3:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the versatile div tag. Learn how it acts as a container, allowing you to structure and style your HTML content effectively."
          },
          {
            "title": "Input tags",
            "video": "/htmlcourse/input_tag.m3u8",
            "duration": "14:01",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into user interaction with HTML input tags. Explore various input types and understand how they enable user data input."
          },
          {
            "title": "Button tag",
            "video": "/htmlcourse/button_tag.m3u8",
            "duration": "1:43",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user experience with interactive buttons. Learn the ins and outs of the button tag and its various applications."
          },
          {
            "title": "Form part 1",
            "video": "/htmlcourse/form_tag_1.m3u8",
            "duration": "9:09",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embark on the journey of web forms. In part one, explore the essential elements that make up a form, setting the stage for user data collection."
          },
          {
            "title": "Form part 2",
            "video": "/htmlcourse/form_tag_2.m3u8",
            "duration": "8:00",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Delve deeper into the world of web forms. In part two, learn about form validation, submission methods, and enhance the functionality of your forms."
          },
          {
            "title": "Table tag",
            "video": "/htmlcourse/table_tag.m3u8",
            "duration": "4:42",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Uncover the power of HTML tables. Learn how to structure and display data in a tabular format for improved readability."
          },
          {
            "title": "Semantic HTML - 1",
            "video": "/htmlcourse/semantic_html_1.m3u8",
            "duration": "5:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embrace semantic HTML for enhanced accessibility and SEO. In part one, understand how semantic tags contribute to the meaning and structure of your content."
          },
          {
            "title": "Semantic HTML - 2",
            "video": "/htmlcourse/semantic_html_2.m3u8",
            "duration": "2:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your journey into semantic HTML. In part two, explore additional tags that enrich the semantics of your web pages."
          },
          {
            "title": "Web Crawler",
            "video": "/htmlcourse/web_crawler.m3u8",
            "duration": "3:40",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Understand how websites are ranked to top by web crawling. Understand the fundamentals of how search engines navigate and index content across the vast web."
          },
          {
            "title": "Quiz 3",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the purpose of 'Text tags' in HTML?",
                "options": [
                  "To create lists of items",
                  "To structure webpage content",
                  "To manipulate text formatting",
                  "To embed multimedia elements"
                ],
                "questionId": 108
              },
              {
                "question": "Which HTML tags are used for creating ordered and unordered lists?",
                "options": [
                  "<ol> and <ul>",
                  "<ul> and <li>",
                  "<list> and <item>",
                  "<order> and <item>"
                ],
                "questionId": 109
              },
              {
                "question": "What does the 'Anchor tag' (<a>) primarily facilitate in HTML?",
                "options": [
                  "Embedding images",
                  "Creating hyperlinks",
                  "Styling webpage elements",
                  "Inserting audio content"
                ],
                "questionId": 110
              },
              {
                "question": "What does the term 'Web Crawler' refer to in the context of HTML?",
                "options": [
                  "A spider-like creature",
                  "A tool for organizing files",
                  "A script for automating tasks",
                  "A program for navigating and indexing web content"
                ],
                "questionId": 111
              }
            ]
          },
          {
            "title": "More HTML tags",
            "video": "/htmlcourse/more_html_tags.m3u8",
            "duration": "1:39",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Expand your HTML toolkit with additional tags. Discover tags that cater to specific needs, enhancing the richness of your web pages."
          },
          {
            "title": "Project 1 - 1",
            "video": "/htmlcourse/project_1_1.m3u8",
            "duration": "7:38",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Apply your newfound HTML skills in a practical project. In part one, embark on a hands-on project to where we build a small FAQ page by using semantic HTML tags and using font awesome icons."
          },
          {
            "title": "Project 1 - 2",
            "video": "/htmlcourse/project_1_2.m3u8",
            "duration": "8:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your project journey in part two. Apply advanced HTML concepts and solidify your skills through a comprehensive project that showcases your abilities."
          },
          {
            "title": "Project 2",
            "video": "/htmlcourse/project_2.m3u8",
            "duration": "9:05",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Level up with an in-depth project. Demonstrate your proficiency in HTML as you undertake a larger-scale project, integrating various elements learned throughout the course."
          },
          {
            "title": "Web Hosting",
            "video": "/htmlcourse/web_hosting.m3u8",
            "duration": "6:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unravel the mysteries of web hosting. Learn how to take your web projects live by exploring different hosting options and understanding the basics of site configurations."
          },
          {
            "title": "CSS",
            "video": "/htmlcourse/intro_to_css.m3u8",
            "duration": "8:22",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Transition seamlessly from HTML to CSS. In this module, delve into the world of Cascading Style Sheets to add style and visual appeal to your web pages."
          },
          {
            "title": "HTML and Project Quiz",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "In 'Project 1 - 1', what HTML semantic tags were primarily used for creating a FAQ page?",
                "options": [
                  "<div> and <span>",
                  "<details> and <summary>",
                  "<ul> and <li>",
                  "<section> and <article>"
                ],
                "questionId": 112
              },
              {
                "question": "In 'Project 1 - 2', how did you make an image float using HTML?",
                "options": [
                  "Applied 'float' property in CSS",
                  "Used 'position: absolute'",
                  "Set 'display: inline-block'",
                  "Inserted a 'float' tag around the image"
                ],
                "questionId": 113
              },
              {
                "question": "What was the focus of 'Project 2' in your HTML course?",
                "options": [
                  "Creating an FAQ page",
                  "Designing a personal portfolio",
                  "Developing a basic app documentation",
                  "Implementing a chat application"
                ],
                "questionId": 114
              },
              {
                "question": "What is web hosting in the context of web development?",
                "options": [
                  "A service that allows individuals and organizations to make their websites accessible via the World Wide Web",
                  "A method of creating dynamic web pages",
                  "A technique for optimizing website performance",
                  "A module covered in the CSS section"
                ],
                "questionId": 115
              }
            ]
          },
          {
            "title": "Wrap up",
            "video": "/htmlcourse/wrap_up.m3u8",
            "duration": "2:07",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Congratulations on completing the course! In this final module, recap your journey, reflect on your accomplishments, and gain insights into the next steps in your web development adventure."
          }
        ],
        "language": "Tamil",
        "requirements": [
          "Text editor for writing HTML code",
          "Web Browser to view the output of HTML code"
        ],
        "author": "N.U.Thejas hari",
        "authorInsta": "https://www.instagram.com/nuthejashari/",
        "meetingLink": "",
        "whatsappGroup": "",
        "recordedVideo": "",
        "courseId": "101110",
        "locked": false,
        "videos": "35",
        "projects": "2",
        "duration": "4 Hours",
        "paid": "",
        "cancellable": false,
        "createdAt": "2024-01-01T06:43:50.699Z",
        "updatedAt": "2024-01-01T06:43:50.699Z",
        "__v": 0,
        "completed": false,
        "enrolledOn": "2024-01-24T17:53:16.550Z",
        "certificate": "",
        "name": "janani dcse",
        "userId": "65b14dc9bc3a22253c78cb11",
        "progress": 0,
        "allNotes": []
      }
    ],
    "createdAt": "2024-01-24T17:50:01.456Z",
    "updatedAt": "2024-01-24T17:53:19.607Z",
    "__v": 0
  },
  {
    "_id": "65b158a4eb3dce4cd1ed0341",
    "name": "ANTONY DIVOTTA.J",
    "email": "divoantony21@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-24T18:36:20.521Z",
    "updatedAt": "2024-01-24T18:36:36.939Z",
    "__v": 0
  },
  {
    "_id": "65b1b2bc22f36d6f9061e4c5",
    "name": "mathan Vpm",
    "email": "mathanvpm577@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b4bd00ed9d87145d75ebe2",
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [
      "101110"
    ],
    "enrolledCoursesData": [
      {
        "_id": "65925f26f5f0ffa3b0e38586",
        "title": "Basics of Networking and HTML Beginner to Advanced Course",
        "description": "Learn web development fundamentals, covering frontend, backend, and database structures. Explore client-server dynamics, APIs, various IP types, DNS workings, and HTML essentials with an introduction to CSS for crafting interactive websites",
        "image": "/html.png",
        "content": [
          {
            "title": "Course Introduction",
            "video": "/htmlcourse/intro.m3u8",
            "duration": "0:32",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Welcome to the course! In this introductory module, you'll get a glimpse of what's in store. We'll outline the course structure, set expectations, and highlight the outcomes you can anticipate upon completion."
          },
          {
            "title": "Expectations & Outcomes",
            "video": "/htmlcourse/CourseOutcomes&Scope.m3u8",
            "duration": "1:21",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Understand the goals of this course and what you'll gain by the end. We'll discuss the skills you'll acquire, the knowledge you'll gain, and how it will benefit you in the realm of web development and networking."
          },
          {
            "title": "Web Development & Scopes",
            "video": "/htmlcourse/WebDevelopment&Scopes.m3u8",
            "duration": "8:54",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the vast landscape of web development careers. Learn about the diverse scopes and job opportunities available in the industry, providing you with insights to shape your career path."
          },
          {
            "title": "Frontend Backend Architecture",
            "video": "/htmlcourse/FrontendBackendArchitecture.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Delve into the intricacies of frontend and backend architecture. Understand how these components work together to create seamless and responsive web applications, laying the foundation for your development journey."
          },
          {
            "title": "Database",
            "video": "/htmlcourse/database.m3u8",
            "duration": "1:07",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Uncover the importance of databases in web development. Learn what are the types of database available and the free cloud services providing free database for developers."
          },
          {
            "title": "IP & Types",
            "video": "/htmlcourse/ip internal & external.m3u8",
            "duration": "9:35",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Navigate the world of Internet Protocol (IP) addresses. Gain a comprehensive understanding of IP types and their significance in the networking landscape."
          },
          {
            "title": "IPv4 vs IPv6",
            "video": "/htmlcourse/ipv4 vs ipv6.m3u8",
            "duration": "7:12",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Compare IPv4 and IPv6, the two versions of the Internet Protocol. Understand the differences and advancements that IPv6 brings to address the limitations of IPv4."
          },
          {
            "title": "Static vs Dynamic IP",
            "video": "/htmlcourse/static_vs_dynamic_ip.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the distinction between static and dynamic IP addresses. Learn how each type is assigned and its impact on network configurations."
          },
          {
            "title": "Quiz 1",
            "quiz": true,
            "locked": false,
            "completed": false,
            "questions": [
              {
                "question": "What does \"frontend\" refer to in web development?",
                "options": [
                  "The part of a website users interact with",
                  "The server-side logic of a website",
                  "The database management system",
                  "The network infrastructure"
                ],
                "questionId": 100
              },
              {
                "question": "What is the primary role of \"backend\" in web development?",
                "options": [
                  "Managing the user interface",
                  "Handling server-side logic and databases",
                  "Designing responsive layouts",
                  "Implementing frontend styles"
                ],
                "questionId": 101
              },
              {
                "question": "What does \"IP\" stand for in networking?",
                "options": [
                  "Internet Provider",
                  "Internet Protocol",
                  "Information Processing",
                  "Interface Port"
                ],
                "questionId": 102
              },
              {
                "question": " What is the total range of each octet in an IPv4 address?",
                "options": [
                  "0-100",
                  "0-127",
                  "0-255",
                  "0-64"
                ],
                "questionId": 103
              }
            ]
          },
          {
            "title": "DNS",
            "video": "/htmlcourse/dns.m3u8",
            "duration": "10:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into the Domain Name System (DNS) and unravel the process of translating domain names to IP addresses. Explore the role DNS plays in making web browsing seamless."
          },
          {
            "title": "What is API?",
            "video": "/htmlcourse/api.m3u8",
            "duration": "3:12",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Application Programming Interfaces (APIs). Understand their significance in web development, facilitating communication between different software systems."
          },
          {
            "title": "What is HTML",
            "video": "/htmlcourse/what_is_html.m3u8",
            "duration": "2:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Begin your journey into the core of web development with HTML. Learn the basics of structuring web content and creating the foundation for interactive websites."
          },
          {
            "title": "HTML Page Structure",
            "video": "/htmlcourse/HTML_page_structure.m3u8",
            "duration": "3:33",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the art of organizing your web pages. Explore HTML tags that define the structure of a webpage, providing a solid foundation for your coding endeavors."
          },
          {
            "title": "Quiz 2",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the primary function of DNS in web development?",
                "options": [
                  "To design responsive user interfaces",
                  "To translate domain names to IP addresses",
                  "To manage server-side logic",
                  "To encrypt website data"
                ],
                "questionId": 104
              },
              {
                "question": "What does 'API' stand for in web development?",
                "options": [
                  "Advanced Programming Interface",
                  "Application Programming Interface",
                  "Automated Processing Interface",
                  "Advanced Protocol Integration"
                ],
                "questionId": 105
              },
              {
                "question": "What is the main markup language used for creating web pages??",
                "options": [
                  "XML",
                  "XAMPP",
                  "HTML",
                  "CSS"
                ],
                "questionId": 106
              },
              {
                "question": "What does 'HTML' stand for?",
                "options": [
                  "Hyper Transfer Markup Language",
                  "High-Level Text Management Language",
                  "Hyperlink and Text Management Language",
                  "HyperText Markup Language"
                ],
                "questionId": 107
              }
            ]
          },
          {
            "title": "Text tags",
            "video": "/htmlcourse/text_tags.m3u8",
            "duration": "18:55",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore the world of text manipulation in HTML. Discover tags that enhance the presentation of textual content on your web pages."
          },
          {
            "title": "List tags",
            "video": "/htmlcourse/list_tags.m3u8",
            "duration": "5:29",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore HTML's list tags to efficiently structure information. Learn how to create ordered and unordered lists for better content organization."
          },
          {
            "title": "Anchor tag",
            "video": "/htmlcourse/Anchor_tag.m3u8",
            "duration": "7:53",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unlock the power of hyperlinking with the anchor tag. Understand how to connect different pages and resources within your website."
          },
          {
            "title": "Image tag",
            "video": "/htmlcourse/image_tag.m3u8",
            "duration": "6:48",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Bring visual appeal to your web pages with the image tag. Learn how to integrate images seamlessly into your HTML content."
          },
          {
            "title": "Audio & video tag",
            "video": "/htmlcourse/audio_and_video_tag.m3u8",
            "duration": "7:56",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user engagement with multimedia elements. Explore the audio and video tags to incorporate media seamlessly into your web projects."
          },
          {
            "title": "iframe & embed tag",
            "video": "/htmlcourse/iframe_and_embed_tag.m3u8",
            "duration": "7:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Harness the capabilities of iframe and embed tags. Understand how these tags enable the integration of external content within your web pages."
          },
          {
            "title": "Div tag",
            "video": "/htmlcourse/div_tag.m3u8",
            "duration": "3:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the versatile div tag. Learn how it acts as a container, allowing you to structure and style your HTML content effectively."
          },
          {
            "title": "Input tags",
            "video": "/htmlcourse/input_tag.m3u8",
            "duration": "14:01",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into user interaction with HTML input tags. Explore various input types and understand how they enable user data input."
          },
          {
            "title": "Button tag",
            "video": "/htmlcourse/button_tag.m3u8",
            "duration": "1:43",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user experience with interactive buttons. Learn the ins and outs of the button tag and its various applications."
          },
          {
            "title": "Form part 1",
            "video": "/htmlcourse/form_tag_1.m3u8",
            "duration": "9:09",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embark on the journey of web forms. In part one, explore the essential elements that make up a form, setting the stage for user data collection."
          },
          {
            "title": "Form part 2",
            "video": "/htmlcourse/form_tag_2.m3u8",
            "duration": "8:00",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Delve deeper into the world of web forms. In part two, learn about form validation, submission methods, and enhance the functionality of your forms."
          },
          {
            "title": "Table tag",
            "video": "/htmlcourse/table_tag.m3u8",
            "duration": "4:42",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Uncover the power of HTML tables. Learn how to structure and display data in a tabular format for improved readability."
          },
          {
            "title": "Semantic HTML - 1",
            "video": "/htmlcourse/semantic_html_1.m3u8",
            "duration": "5:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embrace semantic HTML for enhanced accessibility and SEO. In part one, understand how semantic tags contribute to the meaning and structure of your content."
          },
          {
            "title": "Semantic HTML - 2",
            "video": "/htmlcourse/semantic_html_2.m3u8",
            "duration": "2:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your journey into semantic HTML. In part two, explore additional tags that enrich the semantics of your web pages."
          },
          {
            "title": "Web Crawler",
            "video": "/htmlcourse/web_crawler.m3u8",
            "duration": "3:40",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Understand how websites are ranked to top by web crawling. Understand the fundamentals of how search engines navigate and index content across the vast web."
          },
          {
            "title": "Quiz 3",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the purpose of 'Text tags' in HTML?",
                "options": [
                  "To create lists of items",
                  "To structure webpage content",
                  "To manipulate text formatting",
                  "To embed multimedia elements"
                ],
                "questionId": 108
              },
              {
                "question": "Which HTML tags are used for creating ordered and unordered lists?",
                "options": [
                  "<ol> and <ul>",
                  "<ul> and <li>",
                  "<list> and <item>",
                  "<order> and <item>"
                ],
                "questionId": 109
              },
              {
                "question": "What does the 'Anchor tag' (<a>) primarily facilitate in HTML?",
                "options": [
                  "Embedding images",
                  "Creating hyperlinks",
                  "Styling webpage elements",
                  "Inserting audio content"
                ],
                "questionId": 110
              },
              {
                "question": "What does the term 'Web Crawler' refer to in the context of HTML?",
                "options": [
                  "A spider-like creature",
                  "A tool for organizing files",
                  "A script for automating tasks",
                  "A program for navigating and indexing web content"
                ],
                "questionId": 111
              }
            ]
          },
          {
            "title": "More HTML tags",
            "video": "/htmlcourse/more_html_tags.m3u8",
            "duration": "1:39",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Expand your HTML toolkit with additional tags. Discover tags that cater to specific needs, enhancing the richness of your web pages."
          },
          {
            "title": "Project 1 - 1",
            "video": "/htmlcourse/project_1_1.m3u8",
            "duration": "7:38",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Apply your newfound HTML skills in a practical project. In part one, embark on a hands-on project to where we build a small FAQ page by using semantic HTML tags and using font awesome icons."
          },
          {
            "title": "Project 1 - 2",
            "video": "/htmlcourse/project_1_2.m3u8",
            "duration": "8:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your project journey in part two. Apply advanced HTML concepts and solidify your skills through a comprehensive project that showcases your abilities."
          },
          {
            "title": "Project 2",
            "video": "/htmlcourse/project_2.m3u8",
            "duration": "9:05",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Level up with an in-depth project. Demonstrate your proficiency in HTML as you undertake a larger-scale project, integrating various elements learned throughout the course."
          },
          {
            "title": "Web Hosting",
            "video": "/htmlcourse/web_hosting.m3u8",
            "duration": "6:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unravel the mysteries of web hosting. Learn how to take your web projects live by exploring different hosting options and understanding the basics of site configurations."
          },
          {
            "title": "CSS",
            "video": "/htmlcourse/intro_to_css.m3u8",
            "duration": "8:22",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Transition seamlessly from HTML to CSS. In this module, delve into the world of Cascading Style Sheets to add style and visual appeal to your web pages."
          },
          {
            "title": "HTML and Project Quiz",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "In 'Project 1 - 1', what HTML semantic tags were primarily used for creating a FAQ page?",
                "options": [
                  "<div> and <span>",
                  "<details> and <summary>",
                  "<ul> and <li>",
                  "<section> and <article>"
                ],
                "questionId": 112
              },
              {
                "question": "In 'Project 1 - 2', how did you make an image float using HTML?",
                "options": [
                  "Applied 'float' property in CSS",
                  "Used 'position: absolute'",
                  "Set 'display: inline-block'",
                  "Inserted a 'float' tag around the image"
                ],
                "questionId": 113
              },
              {
                "question": "What was the focus of 'Project 2' in your HTML course?",
                "options": [
                  "Creating an FAQ page",
                  "Designing a personal portfolio",
                  "Developing a basic app documentation",
                  "Implementing a chat application"
                ],
                "questionId": 114
              },
              {
                "question": "What is web hosting in the context of web development?",
                "options": [
                  "A service that allows individuals and organizations to make their websites accessible via the World Wide Web",
                  "A method of creating dynamic web pages",
                  "A technique for optimizing website performance",
                  "A module covered in the CSS section"
                ],
                "questionId": 115
              }
            ]
          },
          {
            "title": "Wrap up",
            "video": "/htmlcourse/wrap_up.m3u8",
            "duration": "2:07",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Congratulations on completing the course! In this final module, recap your journey, reflect on your accomplishments, and gain insights into the next steps in your web development adventure."
          }
        ],
        "language": "Tamil",
        "requirements": [
          "Text editor for writing HTML code",
          "Web Browser to view the output of HTML code"
        ],
        "author": "N.U.Thejas hari",
        "authorInsta": "https://www.instagram.com/nuthejashari/",
        "meetingLink": "",
        "whatsappGroup": "",
        "recordedVideo": "",
        "courseId": "101110",
        "locked": false,
        "videos": "35",
        "projects": "2",
        "duration": "4 Hours",
        "paid": "",
        "cancellable": false,
        "createdAt": "2024-01-01T06:43:50.699Z",
        "updatedAt": "2024-01-01T06:43:50.699Z",
        "__v": 0,
        "completed": false,
        "enrolledOn": "2024-01-25T01:06:20.113Z",
        "certificate": "",
        "name": "mathan Vpm",
        "userId": "65b1b2bc22f36d6f9061e4c5",
        "progress": 0,
        "allNotes": []
      }
    ],
    "createdAt": "2024-01-25T01:00:44.285Z",
    "updatedAt": "2024-01-27T13:54:22.561Z",
    "__v": 0
  },
  {
    "_id": "65b1c08393a31b9262ffb8d4",
    "name": "Tharun S",
    "email": "tharunsankari007@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T01:59:31.230Z",
    "updatedAt": "2024-01-25T02:00:04.050Z",
    "__v": 0
  },
  {
    "_id": "65b1c08893a31b9262ffb8d8",
    "name": "deepan deepan",
    "email": "deepan79022@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Intermediate",
    "registeredWorkshops": [],
    "enrolledCoursesId": [
      "101110"
    ],
    "enrolledCoursesData": [
      {
        "_id": "65925f26f5f0ffa3b0e38586",
        "title": "Basics of Networking and HTML Beginner to Advanced Course",
        "description": "Learn web development fundamentals, covering frontend, backend, and database structures. Explore client-server dynamics, APIs, various IP types, DNS workings, and HTML essentials with an introduction to CSS for crafting interactive websites",
        "image": "/html.png",
        "content": [
          {
            "title": "Course Introduction",
            "video": "/htmlcourse/intro.m3u8",
            "duration": "0:32",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Welcome to the course! In this introductory module, you'll get a glimpse of what's in store. We'll outline the course structure, set expectations, and highlight the outcomes you can anticipate upon completion."
          },
          {
            "title": "Expectations & Outcomes",
            "video": "/htmlcourse/CourseOutcomes&Scope.m3u8",
            "duration": "1:21",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Understand the goals of this course and what you'll gain by the end. We'll discuss the skills you'll acquire, the knowledge you'll gain, and how it will benefit you in the realm of web development and networking."
          },
          {
            "title": "Web Development & Scopes",
            "video": "/htmlcourse/WebDevelopment&Scopes.m3u8",
            "duration": "8:54",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the vast landscape of web development careers. Learn about the diverse scopes and job opportunities available in the industry, providing you with insights to shape your career path."
          },
          {
            "title": "Frontend Backend Architecture",
            "video": "/htmlcourse/FrontendBackendArchitecture.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Delve into the intricacies of frontend and backend architecture. Understand how these components work together to create seamless and responsive web applications, laying the foundation for your development journey."
          },
          {
            "title": "Database",
            "video": "/htmlcourse/database.m3u8",
            "duration": "1:07",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Uncover the importance of databases in web development. Learn what are the types of database available and the free cloud services providing free database for developers."
          },
          {
            "title": "IP & Types",
            "video": "/htmlcourse/ip internal & external.m3u8",
            "duration": "9:35",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Navigate the world of Internet Protocol (IP) addresses. Gain a comprehensive understanding of IP types and their significance in the networking landscape."
          },
          {
            "title": "IPv4 vs IPv6",
            "video": "/htmlcourse/ipv4 vs ipv6.m3u8",
            "duration": "7:12",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Compare IPv4 and IPv6, the two versions of the Internet Protocol. Understand the differences and advancements that IPv6 brings to address the limitations of IPv4."
          },
          {
            "title": "Static vs Dynamic IP",
            "video": "/htmlcourse/static_vs_dynamic_ip.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the distinction between static and dynamic IP addresses. Learn how each type is assigned and its impact on network configurations."
          },
          {
            "title": "Quiz 1",
            "quiz": true,
            "locked": false,
            "completed": false,
            "questions": [
              {
                "question": "What does \"frontend\" refer to in web development?",
                "options": [
                  "The part of a website users interact with",
                  "The server-side logic of a website",
                  "The database management system",
                  "The network infrastructure"
                ],
                "questionId": 100
              },
              {
                "question": "What is the primary role of \"backend\" in web development?",
                "options": [
                  "Managing the user interface",
                  "Handling server-side logic and databases",
                  "Designing responsive layouts",
                  "Implementing frontend styles"
                ],
                "questionId": 101
              },
              {
                "question": "What does \"IP\" stand for in networking?",
                "options": [
                  "Internet Provider",
                  "Internet Protocol",
                  "Information Processing",
                  "Interface Port"
                ],
                "questionId": 102
              },
              {
                "question": " What is the total range of each octet in an IPv4 address?",
                "options": [
                  "0-100",
                  "0-127",
                  "0-255",
                  "0-64"
                ],
                "questionId": 103
              }
            ]
          },
          {
            "title": "DNS",
            "video": "/htmlcourse/dns.m3u8",
            "duration": "10:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into the Domain Name System (DNS) and unravel the process of translating domain names to IP addresses. Explore the role DNS plays in making web browsing seamless."
          },
          {
            "title": "What is API?",
            "video": "/htmlcourse/api.m3u8",
            "duration": "3:12",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Application Programming Interfaces (APIs). Understand their significance in web development, facilitating communication between different software systems."
          },
          {
            "title": "What is HTML",
            "video": "/htmlcourse/what_is_html.m3u8",
            "duration": "2:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Begin your journey into the core of web development with HTML. Learn the basics of structuring web content and creating the foundation for interactive websites."
          },
          {
            "title": "HTML Page Structure",
            "video": "/htmlcourse/HTML_page_structure.m3u8",
            "duration": "3:33",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the art of organizing your web pages. Explore HTML tags that define the structure of a webpage, providing a solid foundation for your coding endeavors."
          },
          {
            "title": "Quiz 2",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the primary function of DNS in web development?",
                "options": [
                  "To design responsive user interfaces",
                  "To translate domain names to IP addresses",
                  "To manage server-side logic",
                  "To encrypt website data"
                ],
                "questionId": 104
              },
              {
                "question": "What does 'API' stand for in web development?",
                "options": [
                  "Advanced Programming Interface",
                  "Application Programming Interface",
                  "Automated Processing Interface",
                  "Advanced Protocol Integration"
                ],
                "questionId": 105
              },
              {
                "question": "What is the main markup language used for creating web pages??",
                "options": [
                  "XML",
                  "XAMPP",
                  "HTML",
                  "CSS"
                ],
                "questionId": 106
              },
              {
                "question": "What does 'HTML' stand for?",
                "options": [
                  "Hyper Transfer Markup Language",
                  "High-Level Text Management Language",
                  "Hyperlink and Text Management Language",
                  "HyperText Markup Language"
                ],
                "questionId": 107
              }
            ]
          },
          {
            "title": "Text tags",
            "video": "/htmlcourse/text_tags.m3u8",
            "duration": "18:55",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore the world of text manipulation in HTML. Discover tags that enhance the presentation of textual content on your web pages."
          },
          {
            "title": "List tags",
            "video": "/htmlcourse/list_tags.m3u8",
            "duration": "5:29",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore HTML's list tags to efficiently structure information. Learn how to create ordered and unordered lists for better content organization."
          },
          {
            "title": "Anchor tag",
            "video": "/htmlcourse/Anchor_tag.m3u8",
            "duration": "7:53",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unlock the power of hyperlinking with the anchor tag. Understand how to connect different pages and resources within your website."
          },
          {
            "title": "Image tag",
            "video": "/htmlcourse/image_tag.m3u8",
            "duration": "6:48",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Bring visual appeal to your web pages with the image tag. Learn how to integrate images seamlessly into your HTML content."
          },
          {
            "title": "Audio & video tag",
            "video": "/htmlcourse/audio_and_video_tag.m3u8",
            "duration": "7:56",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user engagement with multimedia elements. Explore the audio and video tags to incorporate media seamlessly into your web projects."
          },
          {
            "title": "iframe & embed tag",
            "video": "/htmlcourse/iframe_and_embed_tag.m3u8",
            "duration": "7:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Harness the capabilities of iframe and embed tags. Understand how these tags enable the integration of external content within your web pages."
          },
          {
            "title": "Div tag",
            "video": "/htmlcourse/div_tag.m3u8",
            "duration": "3:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the versatile div tag. Learn how it acts as a container, allowing you to structure and style your HTML content effectively."
          },
          {
            "title": "Input tags",
            "video": "/htmlcourse/input_tag.m3u8",
            "duration": "14:01",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into user interaction with HTML input tags. Explore various input types and understand how they enable user data input."
          },
          {
            "title": "Button tag",
            "video": "/htmlcourse/button_tag.m3u8",
            "duration": "1:43",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user experience with interactive buttons. Learn the ins and outs of the button tag and its various applications."
          },
          {
            "title": "Form part 1",
            "video": "/htmlcourse/form_tag_1.m3u8",
            "duration": "9:09",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embark on the journey of web forms. In part one, explore the essential elements that make up a form, setting the stage for user data collection."
          },
          {
            "title": "Form part 2",
            "video": "/htmlcourse/form_tag_2.m3u8",
            "duration": "8:00",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Delve deeper into the world of web forms. In part two, learn about form validation, submission methods, and enhance the functionality of your forms."
          },
          {
            "title": "Table tag",
            "video": "/htmlcourse/table_tag.m3u8",
            "duration": "4:42",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Uncover the power of HTML tables. Learn how to structure and display data in a tabular format for improved readability."
          },
          {
            "title": "Semantic HTML - 1",
            "video": "/htmlcourse/semantic_html_1.m3u8",
            "duration": "5:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embrace semantic HTML for enhanced accessibility and SEO. In part one, understand how semantic tags contribute to the meaning and structure of your content."
          },
          {
            "title": "Semantic HTML - 2",
            "video": "/htmlcourse/semantic_html_2.m3u8",
            "duration": "2:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your journey into semantic HTML. In part two, explore additional tags that enrich the semantics of your web pages."
          },
          {
            "title": "Web Crawler",
            "video": "/htmlcourse/web_crawler.m3u8",
            "duration": "3:40",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Understand how websites are ranked to top by web crawling. Understand the fundamentals of how search engines navigate and index content across the vast web."
          },
          {
            "title": "Quiz 3",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the purpose of 'Text tags' in HTML?",
                "options": [
                  "To create lists of items",
                  "To structure webpage content",
                  "To manipulate text formatting",
                  "To embed multimedia elements"
                ],
                "questionId": 108
              },
              {
                "question": "Which HTML tags are used for creating ordered and unordered lists?",
                "options": [
                  "<ol> and <ul>",
                  "<ul> and <li>",
                  "<list> and <item>",
                  "<order> and <item>"
                ],
                "questionId": 109
              },
              {
                "question": "What does the 'Anchor tag' (<a>) primarily facilitate in HTML?",
                "options": [
                  "Embedding images",
                  "Creating hyperlinks",
                  "Styling webpage elements",
                  "Inserting audio content"
                ],
                "questionId": 110
              },
              {
                "question": "What does the term 'Web Crawler' refer to in the context of HTML?",
                "options": [
                  "A spider-like creature",
                  "A tool for organizing files",
                  "A script for automating tasks",
                  "A program for navigating and indexing web content"
                ],
                "questionId": 111
              }
            ]
          },
          {
            "title": "More HTML tags",
            "video": "/htmlcourse/more_html_tags.m3u8",
            "duration": "1:39",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Expand your HTML toolkit with additional tags. Discover tags that cater to specific needs, enhancing the richness of your web pages."
          },
          {
            "title": "Project 1 - 1",
            "video": "/htmlcourse/project_1_1.m3u8",
            "duration": "7:38",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Apply your newfound HTML skills in a practical project. In part one, embark on a hands-on project to where we build a small FAQ page by using semantic HTML tags and using font awesome icons."
          },
          {
            "title": "Project 1 - 2",
            "video": "/htmlcourse/project_1_2.m3u8",
            "duration": "8:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your project journey in part two. Apply advanced HTML concepts and solidify your skills through a comprehensive project that showcases your abilities."
          },
          {
            "title": "Project 2",
            "video": "/htmlcourse/project_2.m3u8",
            "duration": "9:05",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Level up with an in-depth project. Demonstrate your proficiency in HTML as you undertake a larger-scale project, integrating various elements learned throughout the course."
          },
          {
            "title": "Web Hosting",
            "video": "/htmlcourse/web_hosting.m3u8",
            "duration": "6:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unravel the mysteries of web hosting. Learn how to take your web projects live by exploring different hosting options and understanding the basics of site configurations."
          },
          {
            "title": "CSS",
            "video": "/htmlcourse/intro_to_css.m3u8",
            "duration": "8:22",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Transition seamlessly from HTML to CSS. In this module, delve into the world of Cascading Style Sheets to add style and visual appeal to your web pages."
          },
          {
            "title": "HTML and Project Quiz",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "In 'Project 1 - 1', what HTML semantic tags were primarily used for creating a FAQ page?",
                "options": [
                  "<div> and <span>",
                  "<details> and <summary>",
                  "<ul> and <li>",
                  "<section> and <article>"
                ],
                "questionId": 112
              },
              {
                "question": "In 'Project 1 - 2', how did you make an image float using HTML?",
                "options": [
                  "Applied 'float' property in CSS",
                  "Used 'position: absolute'",
                  "Set 'display: inline-block'",
                  "Inserted a 'float' tag around the image"
                ],
                "questionId": 113
              },
              {
                "question": "What was the focus of 'Project 2' in your HTML course?",
                "options": [
                  "Creating an FAQ page",
                  "Designing a personal portfolio",
                  "Developing a basic app documentation",
                  "Implementing a chat application"
                ],
                "questionId": 114
              },
              {
                "question": "What is web hosting in the context of web development?",
                "options": [
                  "A service that allows individuals and organizations to make their websites accessible via the World Wide Web",
                  "A method of creating dynamic web pages",
                  "A technique for optimizing website performance",
                  "A module covered in the CSS section"
                ],
                "questionId": 115
              }
            ]
          },
          {
            "title": "Wrap up",
            "video": "/htmlcourse/wrap_up.m3u8",
            "duration": "2:07",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Congratulations on completing the course! In this final module, recap your journey, reflect on your accomplishments, and gain insights into the next steps in your web development adventure."
          }
        ],
        "language": "Tamil",
        "requirements": [
          "Text editor for writing HTML code",
          "Web Browser to view the output of HTML code"
        ],
        "author": "N.U.Thejas hari",
        "authorInsta": "https://www.instagram.com/nuthejashari/",
        "meetingLink": "",
        "whatsappGroup": "",
        "recordedVideo": "",
        "courseId": "101110",
        "locked": false,
        "videos": "35",
        "projects": "2",
        "duration": "4 Hours",
        "paid": "",
        "cancellable": false,
        "createdAt": "2024-01-01T06:43:50.699Z",
        "updatedAt": "2024-01-01T06:43:50.699Z",
        "__v": 0,
        "completed": false,
        "enrolledOn": "2024-01-25T02:02:15.753Z",
        "certificate": "",
        "name": "deepan deepan",
        "userId": "65b1c08893a31b9262ffb8d8",
        "progress": 0,
        "allNotes": []
      }
    ],
    "createdAt": "2024-01-25T01:59:36.899Z",
    "updatedAt": "2024-01-25T02:03:03.458Z",
    "__v": 0
  },
  {
    "_id": "65b1ca39fc27782a26e504b7",
    "name": "Ramya Sreevarshini",
    "email": "ramyasreevarshini766@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T02:40:57.769Z",
    "updatedAt": "2024-01-25T02:41:10.937Z",
    "__v": 0
  },
  {
    "_id": "65b1d29d8ec75c89947d6472",
    "name": "Vasanth S",
    "email": "vasanthsubburaj99@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T03:16:45.351Z",
    "updatedAt": "2024-01-25T03:17:09.754Z",
    "__v": 0
  },
  {
    "_id": "65b1d3eb8ec75c89947d6483",
    "name": "Mohan Selvam",
    "email": "mohanselvam1111@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Novice",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T03:22:19.852Z",
    "updatedAt": "2024-01-25T03:22:31.793Z",
    "__v": 0
  },
  {
    "_id": "65b1d8b2de31e1ff9a807505",
    "name": "sathak yousuf",
    "email": "sathakkyousuff@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T03:42:42.983Z",
    "updatedAt": "2024-01-25T03:42:42.983Z",
    "__v": 0
  },
  {
    "_id": "65b1dbe8de31e1ff9a807513",
    "name": "aakash researcher",
    "email": "aakashresearcher@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b4bd00ed9d87145d75ebe2",
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T03:56:24.668Z",
    "updatedAt": "2024-02-01T02:04:25.683Z",
    "__v": 0
  },
  {
    "_id": "65b1dce752a9552fb828a726",
    "name": "U.MAGESH WARAN",
    "email": "uvmagesh3107@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Intermediate",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T04:00:39.213Z",
    "updatedAt": "2024-01-25T04:28:56.596Z",
    "__v": 0
  },
  {
    "_id": "65b1deedde31e1ff9a80751d",
    "name": "Vignesh C",
    "email": "vigneshc200304@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b4bd00ed9d87145d75ebe2",
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [
      "101110"
    ],
    "enrolledCoursesData": [
      {
        "_id": "65925f26f5f0ffa3b0e38586",
        "title": "Basics of Networking and HTML Beginner to Advanced Course",
        "description": "Learn web development fundamentals, covering frontend, backend, and database structures. Explore client-server dynamics, APIs, various IP types, DNS workings, and HTML essentials with an introduction to CSS for crafting interactive websites",
        "image": "/html.png",
        "content": [
          {
            "title": "Course Introduction",
            "video": "/htmlcourse/intro.m3u8",
            "duration": "0:32",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Welcome to the course! In this introductory module, you'll get a glimpse of what's in store. We'll outline the course structure, set expectations, and highlight the outcomes you can anticipate upon completion."
          },
          {
            "title": "Expectations & Outcomes",
            "video": "/htmlcourse/CourseOutcomes&Scope.m3u8",
            "duration": "1:21",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Understand the goals of this course and what you'll gain by the end. We'll discuss the skills you'll acquire, the knowledge you'll gain, and how it will benefit you in the realm of web development and networking."
          },
          {
            "title": "Web Development & Scopes",
            "video": "/htmlcourse/WebDevelopment&Scopes.m3u8",
            "duration": "8:54",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Explore the vast landscape of web development careers. Learn about the diverse scopes and job opportunities available in the industry, providing you with insights to shape your career path."
          },
          {
            "title": "Frontend Backend Architecture",
            "video": "/htmlcourse/FrontendBackendArchitecture.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Delve into the intricacies of frontend and backend architecture. Understand how these components work together to create seamless and responsive web applications, laying the foundation for your development journey."
          },
          {
            "title": "Database",
            "video": "/htmlcourse/database.m3u8",
            "duration": "1:07",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Uncover the importance of databases in web development. Learn what are the types of database available and the free cloud services providing free database for developers."
          },
          {
            "title": "IP & Types",
            "video": "/htmlcourse/ip internal & external.m3u8",
            "duration": "9:35",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Navigate the world of Internet Protocol (IP) addresses. Gain a comprehensive understanding of IP types and their significance in the networking landscape."
          },
          {
            "title": "IPv4 vs IPv6",
            "video": "/htmlcourse/ipv4 vs ipv6.m3u8",
            "duration": "7:12",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Compare IPv4 and IPv6, the two versions of the Internet Protocol. Understand the differences and advancements that IPv6 brings to address the limitations of IPv4."
          },
          {
            "title": "Static vs Dynamic IP",
            "video": "/htmlcourse/static_vs_dynamic_ip.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the distinction between static and dynamic IP addresses. Learn how each type is assigned and its impact on network configurations."
          },
          {
            "title": "Quiz 1",
            "quiz": true,
            "locked": false,
            "completed": false,
            "questions": [
              {
                "question": "What does \"frontend\" refer to in web development?",
                "options": [
                  "The part of a website users interact with",
                  "The server-side logic of a website",
                  "The database management system",
                  "The network infrastructure"
                ],
                "questionId": 100
              },
              {
                "question": "What is the primary role of \"backend\" in web development?",
                "options": [
                  "Managing the user interface",
                  "Handling server-side logic and databases",
                  "Designing responsive layouts",
                  "Implementing frontend styles"
                ],
                "questionId": 101
              },
              {
                "question": "What does \"IP\" stand for in networking?",
                "options": [
                  "Internet Provider",
                  "Internet Protocol",
                  "Information Processing",
                  "Interface Port"
                ],
                "questionId": 102
              },
              {
                "question": " What is the total range of each octet in an IPv4 address?",
                "options": [
                  "0-100",
                  "0-127",
                  "0-255",
                  "0-64"
                ],
                "questionId": 103
              }
            ]
          },
          {
            "title": "DNS",
            "video": "/htmlcourse/dns.m3u8",
            "duration": "10:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into the Domain Name System (DNS) and unravel the process of translating domain names to IP addresses. Explore the role DNS plays in making web browsing seamless."
          },
          {
            "title": "What is API?",
            "video": "/htmlcourse/api.m3u8",
            "duration": "3:12",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Application Programming Interfaces (APIs). Understand their significance in web development, facilitating communication between different software systems."
          },
          {
            "title": "What is HTML",
            "video": "/htmlcourse/what_is_html.m3u8",
            "duration": "2:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Begin your journey into the core of web development with HTML. Learn the basics of structuring web content and creating the foundation for interactive websites."
          },
          {
            "title": "HTML Page Structure",
            "video": "/htmlcourse/HTML_page_structure.m3u8",
            "duration": "3:33",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the art of organizing your web pages. Explore HTML tags that define the structure of a webpage, providing a solid foundation for your coding endeavors."
          },
          {
            "title": "Quiz 2",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the primary function of DNS in web development?",
                "options": [
                  "To design responsive user interfaces",
                  "To translate domain names to IP addresses",
                  "To manage server-side logic",
                  "To encrypt website data"
                ],
                "questionId": 104
              },
              {
                "question": "What does 'API' stand for in web development?",
                "options": [
                  "Advanced Programming Interface",
                  "Application Programming Interface",
                  "Automated Processing Interface",
                  "Advanced Protocol Integration"
                ],
                "questionId": 105
              },
              {
                "question": "What is the main markup language used for creating web pages??",
                "options": [
                  "XML",
                  "XAMPP",
                  "HTML",
                  "CSS"
                ],
                "questionId": 106
              },
              {
                "question": "What does 'HTML' stand for?",
                "options": [
                  "Hyper Transfer Markup Language",
                  "High-Level Text Management Language",
                  "Hyperlink and Text Management Language",
                  "HyperText Markup Language"
                ],
                "questionId": 107
              }
            ]
          },
          {
            "title": "Text tags",
            "video": "/htmlcourse/text_tags.m3u8",
            "duration": "18:55",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore the world of text manipulation in HTML. Discover tags that enhance the presentation of textual content on your web pages."
          },
          {
            "title": "List tags",
            "video": "/htmlcourse/list_tags.m3u8",
            "duration": "5:29",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore HTML's list tags to efficiently structure information. Learn how to create ordered and unordered lists for better content organization."
          },
          {
            "title": "Anchor tag",
            "video": "/htmlcourse/Anchor_tag.m3u8",
            "duration": "7:53",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unlock the power of hyperlinking with the anchor tag. Understand how to connect different pages and resources within your website."
          },
          {
            "title": "Image tag",
            "video": "/htmlcourse/image_tag.m3u8",
            "duration": "6:48",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Bring visual appeal to your web pages with the image tag. Learn how to integrate images seamlessly into your HTML content."
          },
          {
            "title": "Audio & video tag",
            "video": "/htmlcourse/audio_and_video_tag.m3u8",
            "duration": "7:56",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user engagement with multimedia elements. Explore the audio and video tags to incorporate media seamlessly into your web projects."
          },
          {
            "title": "iframe & embed tag",
            "video": "/htmlcourse/iframe_and_embed_tag.m3u8",
            "duration": "7:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Harness the capabilities of iframe and embed tags. Understand how these tags enable the integration of external content within your web pages."
          },
          {
            "title": "Div tag",
            "video": "/htmlcourse/div_tag.m3u8",
            "duration": "3:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the versatile div tag. Learn how it acts as a container, allowing you to structure and style your HTML content effectively."
          },
          {
            "title": "Input tags",
            "video": "/htmlcourse/input_tag.m3u8",
            "duration": "14:01",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into user interaction with HTML input tags. Explore various input types and understand how they enable user data input."
          },
          {
            "title": "Button tag",
            "video": "/htmlcourse/button_tag.m3u8",
            "duration": "1:43",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user experience with interactive buttons. Learn the ins and outs of the button tag and its various applications."
          },
          {
            "title": "Form part 1",
            "video": "/htmlcourse/form_tag_1.m3u8",
            "duration": "9:09",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embark on the journey of web forms. In part one, explore the essential elements that make up a form, setting the stage for user data collection."
          },
          {
            "title": "Form part 2",
            "video": "/htmlcourse/form_tag_2.m3u8",
            "duration": "8:00",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Delve deeper into the world of web forms. In part two, learn about form validation, submission methods, and enhance the functionality of your forms."
          },
          {
            "title": "Table tag",
            "video": "/htmlcourse/table_tag.m3u8",
            "duration": "4:42",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Uncover the power of HTML tables. Learn how to structure and display data in a tabular format for improved readability."
          },
          {
            "title": "Semantic HTML - 1",
            "video": "/htmlcourse/semantic_html_1.m3u8",
            "duration": "5:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embrace semantic HTML for enhanced accessibility and SEO. In part one, understand how semantic tags contribute to the meaning and structure of your content."
          },
          {
            "title": "Semantic HTML - 2",
            "video": "/htmlcourse/semantic_html_2.m3u8",
            "duration": "2:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your journey into semantic HTML. In part two, explore additional tags that enrich the semantics of your web pages."
          },
          {
            "title": "Web Crawler",
            "video": "/htmlcourse/web_crawler.m3u8",
            "duration": "3:40",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Understand how websites are ranked to top by web crawling. Understand the fundamentals of how search engines navigate and index content across the vast web."
          },
          {
            "title": "Quiz 3",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the purpose of 'Text tags' in HTML?",
                "options": [
                  "To create lists of items",
                  "To structure webpage content",
                  "To manipulate text formatting",
                  "To embed multimedia elements"
                ],
                "questionId": 108
              },
              {
                "question": "Which HTML tags are used for creating ordered and unordered lists?",
                "options": [
                  "<ol> and <ul>",
                  "<ul> and <li>",
                  "<list> and <item>",
                  "<order> and <item>"
                ],
                "questionId": 109
              },
              {
                "question": "What does the 'Anchor tag' (<a>) primarily facilitate in HTML?",
                "options": [
                  "Embedding images",
                  "Creating hyperlinks",
                  "Styling webpage elements",
                  "Inserting audio content"
                ],
                "questionId": 110
              },
              {
                "question": "What does the term 'Web Crawler' refer to in the context of HTML?",
                "options": [
                  "A spider-like creature",
                  "A tool for organizing files",
                  "A script for automating tasks",
                  "A program for navigating and indexing web content"
                ],
                "questionId": 111
              }
            ]
          },
          {
            "title": "More HTML tags",
            "video": "/htmlcourse/more_html_tags.m3u8",
            "duration": "1:39",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Expand your HTML toolkit with additional tags. Discover tags that cater to specific needs, enhancing the richness of your web pages."
          },
          {
            "title": "Project 1 - 1",
            "video": "/htmlcourse/project_1_1.m3u8",
            "duration": "7:38",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Apply your newfound HTML skills in a practical project. In part one, embark on a hands-on project to where we build a small FAQ page by using semantic HTML tags and using font awesome icons."
          },
          {
            "title": "Project 1 - 2",
            "video": "/htmlcourse/project_1_2.m3u8",
            "duration": "8:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your project journey in part two. Apply advanced HTML concepts and solidify your skills through a comprehensive project that showcases your abilities."
          },
          {
            "title": "Project 2",
            "video": "/htmlcourse/project_2.m3u8",
            "duration": "9:05",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Level up with an in-depth project. Demonstrate your proficiency in HTML as you undertake a larger-scale project, integrating various elements learned throughout the course."
          },
          {
            "title": "Web Hosting",
            "video": "/htmlcourse/web_hosting.m3u8",
            "duration": "6:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unravel the mysteries of web hosting. Learn how to take your web projects live by exploring different hosting options and understanding the basics of site configurations."
          },
          {
            "title": "CSS",
            "video": "/htmlcourse/intro_to_css.m3u8",
            "duration": "8:22",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Transition seamlessly from HTML to CSS. In this module, delve into the world of Cascading Style Sheets to add style and visual appeal to your web pages."
          },
          {
            "title": "HTML and Project Quiz",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "In 'Project 1 - 1', what HTML semantic tags were primarily used for creating a FAQ page?",
                "options": [
                  "<div> and <span>",
                  "<details> and <summary>",
                  "<ul> and <li>",
                  "<section> and <article>"
                ],
                "questionId": 112
              },
              {
                "question": "In 'Project 1 - 2', how did you make an image float using HTML?",
                "options": [
                  "Applied 'float' property in CSS",
                  "Used 'position: absolute'",
                  "Set 'display: inline-block'",
                  "Inserted a 'float' tag around the image"
                ],
                "questionId": 113
              },
              {
                "question": "What was the focus of 'Project 2' in your HTML course?",
                "options": [
                  "Creating an FAQ page",
                  "Designing a personal portfolio",
                  "Developing a basic app documentation",
                  "Implementing a chat application"
                ],
                "questionId": 114
              },
              {
                "question": "What is web hosting in the context of web development?",
                "options": [
                  "A service that allows individuals and organizations to make their websites accessible via the World Wide Web",
                  "A method of creating dynamic web pages",
                  "A technique for optimizing website performance",
                  "A module covered in the CSS section"
                ],
                "questionId": 115
              }
            ]
          },
          {
            "title": "Wrap up",
            "video": "/htmlcourse/wrap_up.m3u8",
            "duration": "2:07",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Congratulations on completing the course! In this final module, recap your journey, reflect on your accomplishments, and gain insights into the next steps in your web development adventure."
          }
        ],
        "language": "Tamil",
        "requirements": [
          "Text editor for writing HTML code",
          "Web Browser to view the output of HTML code"
        ],
        "author": "N.U.Thejas hari",
        "authorInsta": "https://www.instagram.com/nuthejashari/",
        "meetingLink": "",
        "whatsappGroup": "",
        "recordedVideo": "",
        "courseId": "101110",
        "locked": false,
        "videos": "35",
        "projects": "2",
        "duration": "4 Hours",
        "paid": "",
        "cancellable": false,
        "createdAt": "2024-01-01T06:43:50.699Z",
        "updatedAt": "2024-01-01T06:43:50.699Z",
        "__v": 0,
        "completed": false,
        "enrolledOn": "2024-02-01T06:11:32.579Z",
        "certificate": "",
        "name": "Vignesh C",
        "userId": "65b1deedde31e1ff9a80751d",
        "progress": 0,
        "allNotes": []
      }
    ],
    "createdAt": "2024-01-25T04:09:17.646Z",
    "updatedAt": "2024-02-01T07:00:42.908Z",
    "__v": 0
  },
  {
    "_id": "65b1e1a2cbb17982cb6c71f8",
    "name": "Cyber_Bevin",
    "email": "bevinbalaji@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T04:20:50.474Z",
    "updatedAt": "2024-01-25T04:20:59.666Z",
    "__v": 0
  },
  {
    "_id": "65b1e7b4602d27687dcb5483",
    "name": "webby web",
    "email": "webbywebie@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Intermediate",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T04:46:44.607Z",
    "updatedAt": "2024-01-25T04:46:58.938Z",
    "__v": 0
  },
  {
    "_id": "65b1ea40602d27687dcb548c",
    "name": "Shamuvel Sam",
    "email": "shamuvelsam514@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Intermediate",
    "registeredWorkshops": [],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T04:57:36.445Z",
    "updatedAt": "2024-01-25T04:57:36.445Z",
    "__v": 0
  },
  {
    "_id": "65b1ebed602d27687dcb5495",
    "name": "Barath Barath",
    "email": "barath000001@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65c4ec315a6594a5ea09b47f",
      "65b4bd00ed9d87145d75ebe2",
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T05:04:45.107Z",
    "updatedAt": "2024-02-08T15:16:00.505Z",
    "__v": 0
  },
  {
    "_id": "65b1ec18602d27687dcb549d",
    "name": "Treeone",
    "email": "treeonedemo@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T05:05:28.461Z",
    "updatedAt": "2024-01-25T05:07:06.811Z",
    "__v": 0
  },
  {
    "_id": "65b1ee50d69116f353bfe4cb",
    "name": "VINOTHKUMAR G",
    "email": "vinothkumar17799@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T05:14:56.828Z",
    "updatedAt": "2024-01-25T05:14:56.828Z",
    "__v": 0
  },
  {
    "_id": "65b1f069d69116f353bfe4d1",
    "name": "Loganayaki sv",
    "email": "snayaki1992@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Intermediate",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T05:23:53.683Z",
    "updatedAt": "2024-01-25T05:24:13.332Z",
    "__v": 0
  },
  {
    "_id": "65b1f33492ca65ce3e7ef550",
    "name": "Thameem Ansari",
    "email": "thameemafrin1983@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Novice",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T05:35:48.824Z",
    "updatedAt": "2024-01-25T05:36:13.593Z",
    "__v": 0
  },
  {
    "_id": "65b1f4ade31b294354046cb3",
    "name": "prabu paramashivam",
    "email": "prabuparamashivam@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T05:42:05.303Z",
    "updatedAt": "2024-01-25T05:42:05.303Z",
    "__v": 0
  },
  {
    "_id": "65b1f50cd69116f353bfe4e3",
    "name": "Lavania Madavan",
    "email": "lavaniamadavan@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T05:43:40.155Z",
    "updatedAt": "2024-01-25T05:44:32.334Z",
    "__v": 0
  },
  {
    "_id": "65b1faaedb80f6f115985b79",
    "name": "manoj babu",
    "email": "babumanojr@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Novice",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T06:07:42.421Z",
    "updatedAt": "2024-01-25T06:08:54.909Z",
    "__v": 0
  },
  {
    "_id": "65b1fb2bdb80f6f115985b80",
    "name": "Lakshminarasimhan A",
    "email": "lakshminarasimhan592@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_ECD3BsOvs",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T06:09:47.221Z",
    "updatedAt": "2024-01-25T06:11:25.203Z",
    "__v": 0
  },
  {
    "_id": "65b1fb7aabb570584edc758e",
    "name": "BEAST GAMERS",
    "email": "snaveen1600@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T06:11:06.286Z",
    "updatedAt": "2024-01-25T06:11:15.490Z",
    "__v": 0
  },
  {
    "_id": "65b1fd157adb686083820349",
    "name": "shanmuga priyan",
    "email": "shanmugapriyan045@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [
      "101110"
    ],
    "enrolledCoursesData": [
      {
        "_id": "65925f26f5f0ffa3b0e38586",
        "title": "Basics of Networking and HTML Beginner to Advanced Course",
        "description": "Learn web development fundamentals, covering frontend, backend, and database structures. Explore client-server dynamics, APIs, various IP types, DNS workings, and HTML essentials with an introduction to CSS for crafting interactive websites",
        "image": "/html.png",
        "content": [
          {
            "title": "Course Introduction",
            "video": "/htmlcourse/intro.m3u8",
            "duration": "0:32",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Welcome to the course! In this introductory module, you'll get a glimpse of what's in store. We'll outline the course structure, set expectations, and highlight the outcomes you can anticipate upon completion."
          },
          {
            "title": "Expectations & Outcomes",
            "video": "/htmlcourse/CourseOutcomes&Scope.m3u8",
            "duration": "1:21",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Understand the goals of this course and what you'll gain by the end. We'll discuss the skills you'll acquire, the knowledge you'll gain, and how it will benefit you in the realm of web development and networking."
          },
          {
            "title": "Web Development & Scopes",
            "video": "/htmlcourse/WebDevelopment&Scopes.m3u8",
            "duration": "8:54",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Explore the vast landscape of web development careers. Learn about the diverse scopes and job opportunities available in the industry, providing you with insights to shape your career path."
          },
          {
            "title": "Frontend Backend Architecture",
            "video": "/htmlcourse/FrontendBackendArchitecture.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Delve into the intricacies of frontend and backend architecture. Understand how these components work together to create seamless and responsive web applications, laying the foundation for your development journey."
          },
          {
            "title": "Database",
            "video": "/htmlcourse/database.m3u8",
            "duration": "1:07",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Uncover the importance of databases in web development. Learn what are the types of database available and the free cloud services providing free database for developers."
          },
          {
            "title": "IP & Types",
            "video": "/htmlcourse/ip internal & external.m3u8",
            "duration": "9:35",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Navigate the world of Internet Protocol (IP) addresses. Gain a comprehensive understanding of IP types and their significance in the networking landscape."
          },
          {
            "title": "IPv4 vs IPv6",
            "video": "/htmlcourse/ipv4 vs ipv6.m3u8",
            "duration": "7:12",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Compare IPv4 and IPv6, the two versions of the Internet Protocol. Understand the differences and advancements that IPv6 brings to address the limitations of IPv4."
          },
          {
            "title": "Static vs Dynamic IP",
            "video": "/htmlcourse/static_vs_dynamic_ip.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Explore the distinction between static and dynamic IP addresses. Learn how each type is assigned and its impact on network configurations."
          },
          {
            "title": "Quiz 1",
            "quiz": true,
            "locked": false,
            "completed": true,
            "questions": [
              {
                "question": "What does \"frontend\" refer to in web development?",
                "options": [
                  "The part of a website users interact with",
                  "The server-side logic of a website",
                  "The database management system",
                  "The network infrastructure"
                ],
                "questionId": 100,
                "selected": "The part of a website users interact with"
              },
              {
                "question": "What is the primary role of \"backend\" in web development?",
                "options": [
                  "Managing the user interface",
                  "Handling server-side logic and databases",
                  "Designing responsive layouts",
                  "Implementing frontend styles"
                ],
                "questionId": 101,
                "selected": "Handling server-side logic and databases"
              },
              {
                "question": "What does \"IP\" stand for in networking?",
                "options": [
                  "Internet Provider",
                  "Internet Protocol",
                  "Information Processing",
                  "Interface Port"
                ],
                "questionId": 102,
                "selected": "Internet Protocol"
              },
              {
                "question": " What is the total range of each octet in an IPv4 address?",
                "options": [
                  "0-100",
                  "0-127",
                  "0-255",
                  "0-64"
                ],
                "questionId": 103,
                "selected": "0-255"
              }
            ]
          },
          {
            "title": "DNS",
            "video": "/htmlcourse/dns.m3u8",
            "duration": "10:11",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Dive into the Domain Name System (DNS) and unravel the process of translating domain names to IP addresses. Explore the role DNS plays in making web browsing seamless."
          },
          {
            "title": "What is API?",
            "video": "/htmlcourse/api.m3u8",
            "duration": "3:12",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Application Programming Interfaces (APIs). Understand their significance in web development, facilitating communication between different software systems."
          },
          {
            "title": "What is HTML",
            "video": "/htmlcourse/what_is_html.m3u8",
            "duration": "2:11",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Begin your journey into the core of web development with HTML. Learn the basics of structuring web content and creating the foundation for interactive websites."
          },
          {
            "title": "HTML Page Structure",
            "video": "/htmlcourse/HTML_page_structure.m3u8",
            "duration": "3:33",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Master the art of organizing your web pages. Explore HTML tags that define the structure of a webpage, providing a solid foundation for your coding endeavors."
          },
          {
            "title": "Quiz 2",
            "quiz": true,
            "locked": false,
            "completed": false,
            "questions": [
              {
                "question": "What is the primary function of DNS in web development?",
                "options": [
                  "To design responsive user interfaces",
                  "To translate domain names to IP addresses",
                  "To manage server-side logic",
                  "To encrypt website data"
                ],
                "questionId": 104
              },
              {
                "question": "What does 'API' stand for in web development?",
                "options": [
                  "Advanced Programming Interface",
                  "Application Programming Interface",
                  "Automated Processing Interface",
                  "Advanced Protocol Integration"
                ],
                "questionId": 105
              },
              {
                "question": "What is the main markup language used for creating web pages??",
                "options": [
                  "XML",
                  "XAMPP",
                  "HTML",
                  "CSS"
                ],
                "questionId": 106
              },
              {
                "question": "What does 'HTML' stand for?",
                "options": [
                  "Hyper Transfer Markup Language",
                  "High-Level Text Management Language",
                  "Hyperlink and Text Management Language",
                  "HyperText Markup Language"
                ],
                "questionId": 107
              }
            ]
          },
          {
            "title": "Text tags",
            "video": "/htmlcourse/text_tags.m3u8",
            "duration": "18:55",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore the world of text manipulation in HTML. Discover tags that enhance the presentation of textual content on your web pages."
          },
          {
            "title": "List tags",
            "video": "/htmlcourse/list_tags.m3u8",
            "duration": "5:29",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore HTML's list tags to efficiently structure information. Learn how to create ordered and unordered lists for better content organization."
          },
          {
            "title": "Anchor tag",
            "video": "/htmlcourse/Anchor_tag.m3u8",
            "duration": "7:53",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unlock the power of hyperlinking with the anchor tag. Understand how to connect different pages and resources within your website."
          },
          {
            "title": "Image tag",
            "video": "/htmlcourse/image_tag.m3u8",
            "duration": "6:48",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Bring visual appeal to your web pages with the image tag. Learn how to integrate images seamlessly into your HTML content."
          },
          {
            "title": "Audio & video tag",
            "video": "/htmlcourse/audio_and_video_tag.m3u8",
            "duration": "7:56",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user engagement with multimedia elements. Explore the audio and video tags to incorporate media seamlessly into your web projects."
          },
          {
            "title": "iframe & embed tag",
            "video": "/htmlcourse/iframe_and_embed_tag.m3u8",
            "duration": "7:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Harness the capabilities of iframe and embed tags. Understand how these tags enable the integration of external content within your web pages."
          },
          {
            "title": "Div tag",
            "video": "/htmlcourse/div_tag.m3u8",
            "duration": "3:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the versatile div tag. Learn how it acts as a container, allowing you to structure and style your HTML content effectively."
          },
          {
            "title": "Input tags",
            "video": "/htmlcourse/input_tag.m3u8",
            "duration": "14:01",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into user interaction with HTML input tags. Explore various input types and understand how they enable user data input."
          },
          {
            "title": "Button tag",
            "video": "/htmlcourse/button_tag.m3u8",
            "duration": "1:43",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user experience with interactive buttons. Learn the ins and outs of the button tag and its various applications."
          },
          {
            "title": "Form part 1",
            "video": "/htmlcourse/form_tag_1.m3u8",
            "duration": "9:09",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embark on the journey of web forms. In part one, explore the essential elements that make up a form, setting the stage for user data collection."
          },
          {
            "title": "Form part 2",
            "video": "/htmlcourse/form_tag_2.m3u8",
            "duration": "8:00",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Delve deeper into the world of web forms. In part two, learn about form validation, submission methods, and enhance the functionality of your forms."
          },
          {
            "title": "Table tag",
            "video": "/htmlcourse/table_tag.m3u8",
            "duration": "4:42",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Uncover the power of HTML tables. Learn how to structure and display data in a tabular format for improved readability."
          },
          {
            "title": "Semantic HTML - 1",
            "video": "/htmlcourse/semantic_html_1.m3u8",
            "duration": "5:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embrace semantic HTML for enhanced accessibility and SEO. In part one, understand how semantic tags contribute to the meaning and structure of your content."
          },
          {
            "title": "Semantic HTML - 2",
            "video": "/htmlcourse/semantic_html_2.m3u8",
            "duration": "2:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your journey into semantic HTML. In part two, explore additional tags that enrich the semantics of your web pages."
          },
          {
            "title": "Web Crawler",
            "video": "/htmlcourse/web_crawler.m3u8",
            "duration": "3:40",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Understand how websites are ranked to top by web crawling. Understand the fundamentals of how search engines navigate and index content across the vast web."
          },
          {
            "title": "Quiz 3",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the purpose of 'Text tags' in HTML?",
                "options": [
                  "To create lists of items",
                  "To structure webpage content",
                  "To manipulate text formatting",
                  "To embed multimedia elements"
                ],
                "questionId": 108
              },
              {
                "question": "Which HTML tags are used for creating ordered and unordered lists?",
                "options": [
                  "<ol> and <ul>",
                  "<ul> and <li>",
                  "<list> and <item>",
                  "<order> and <item>"
                ],
                "questionId": 109
              },
              {
                "question": "What does the 'Anchor tag' (<a>) primarily facilitate in HTML?",
                "options": [
                  "Embedding images",
                  "Creating hyperlinks",
                  "Styling webpage elements",
                  "Inserting audio content"
                ],
                "questionId": 110
              },
              {
                "question": "What does the term 'Web Crawler' refer to in the context of HTML?",
                "options": [
                  "A spider-like creature",
                  "A tool for organizing files",
                  "A script for automating tasks",
                  "A program for navigating and indexing web content"
                ],
                "questionId": 111
              }
            ]
          },
          {
            "title": "More HTML tags",
            "video": "/htmlcourse/more_html_tags.m3u8",
            "duration": "1:39",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Expand your HTML toolkit with additional tags. Discover tags that cater to specific needs, enhancing the richness of your web pages."
          },
          {
            "title": "Project 1 - 1",
            "video": "/htmlcourse/project_1_1.m3u8",
            "duration": "7:38",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Apply your newfound HTML skills in a practical project. In part one, embark on a hands-on project to where we build a small FAQ page by using semantic HTML tags and using font awesome icons."
          },
          {
            "title": "Project 1 - 2",
            "video": "/htmlcourse/project_1_2.m3u8",
            "duration": "8:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your project journey in part two. Apply advanced HTML concepts and solidify your skills through a comprehensive project that showcases your abilities."
          },
          {
            "title": "Project 2",
            "video": "/htmlcourse/project_2.m3u8",
            "duration": "9:05",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Level up with an in-depth project. Demonstrate your proficiency in HTML as you undertake a larger-scale project, integrating various elements learned throughout the course."
          },
          {
            "title": "Web Hosting",
            "video": "/htmlcourse/web_hosting.m3u8",
            "duration": "6:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unravel the mysteries of web hosting. Learn how to take your web projects live by exploring different hosting options and understanding the basics of site configurations."
          },
          {
            "title": "CSS",
            "video": "/htmlcourse/intro_to_css.m3u8",
            "duration": "8:22",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Transition seamlessly from HTML to CSS. In this module, delve into the world of Cascading Style Sheets to add style and visual appeal to your web pages."
          },
          {
            "title": "HTML and Project Quiz",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "In 'Project 1 - 1', what HTML semantic tags were primarily used for creating a FAQ page?",
                "options": [
                  "<div> and <span>",
                  "<details> and <summary>",
                  "<ul> and <li>",
                  "<section> and <article>"
                ],
                "questionId": 112
              },
              {
                "question": "In 'Project 1 - 2', how did you make an image float using HTML?",
                "options": [
                  "Applied 'float' property in CSS",
                  "Used 'position: absolute'",
                  "Set 'display: inline-block'",
                  "Inserted a 'float' tag around the image"
                ],
                "questionId": 113
              },
              {
                "question": "What was the focus of 'Project 2' in your HTML course?",
                "options": [
                  "Creating an FAQ page",
                  "Designing a personal portfolio",
                  "Developing a basic app documentation",
                  "Implementing a chat application"
                ],
                "questionId": 114
              },
              {
                "question": "What is web hosting in the context of web development?",
                "options": [
                  "A service that allows individuals and organizations to make their websites accessible via the World Wide Web",
                  "A method of creating dynamic web pages",
                  "A technique for optimizing website performance",
                  "A module covered in the CSS section"
                ],
                "questionId": 115
              }
            ]
          },
          {
            "title": "Wrap up",
            "video": "/htmlcourse/wrap_up.m3u8",
            "duration": "2:07",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Congratulations on completing the course! In this final module, recap your journey, reflect on your accomplishments, and gain insights into the next steps in your web development adventure."
          }
        ],
        "language": "Tamil",
        "requirements": [
          "Text editor for writing HTML code",
          "Web Browser to view the output of HTML code"
        ],
        "author": "N.U.Thejas hari",
        "authorInsta": "https://www.instagram.com/nuthejashari/",
        "meetingLink": "",
        "whatsappGroup": "",
        "recordedVideo": "",
        "courseId": "101110",
        "locked": false,
        "videos": "35",
        "projects": "2",
        "duration": "4 Hours",
        "paid": "",
        "cancellable": false,
        "createdAt": "2024-01-01T06:43:50.699Z",
        "updatedAt": "2024-01-01T06:43:50.699Z",
        "__v": 0,
        "completed": false,
        "enrolledOn": "2024-01-25T06:19:13.563Z",
        "certificate": "",
        "name": "shanmuga priyan",
        "userId": "65b1fd157adb686083820349",
        "progress": 0,
        "allNotes": []
      }
    ],
    "createdAt": "2024-01-25T06:17:57.596Z",
    "updatedAt": "2024-01-25T11:11:42.270Z",
    "__v": 0
  },
  {
    "_id": "65b1fed57adb686083820352",
    "name": "Shyaam Sarvan",
    "email": "shyaamsarvan@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T06:25:25.804Z",
    "updatedAt": "2024-01-25T06:25:40.229Z",
    "__v": 0
  },
  {
    "_id": "65b201a27adb68608382035d",
    "name": "Sunitha V",
    "email": "sunithaviduran@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T06:37:22.047Z",
    "updatedAt": "2024-01-25T06:37:48.147Z",
    "__v": 0
  },
  {
    "_id": "65b205414149a8f0f718e76f",
    "name": "Dhanush",
    "email": "tharundhanush1802@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T06:52:49.601Z",
    "updatedAt": "2024-01-25T06:53:19.513Z",
    "__v": 0
  },
  {
    "_id": "65b206f9f020f12153e643ec",
    "name": "Karthikeyan Ranganathan",
    "email": "karthikeyanranganathan731@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b4bd00ed9d87145d75ebe2",
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [
      "101110"
    ],
    "enrolledCoursesData": [
      {
        "_id": "65925f26f5f0ffa3b0e38586",
        "title": "Basics of Networking and HTML Beginner to Advanced Course",
        "description": "Learn web development fundamentals, covering frontend, backend, and database structures. Explore client-server dynamics, APIs, various IP types, DNS workings, and HTML essentials with an introduction to CSS for crafting interactive websites",
        "image": "/html.png",
        "content": [
          {
            "title": "Course Introduction",
            "video": "/htmlcourse/intro.m3u8",
            "duration": "0:32",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Welcome to the course! In this introductory module, you'll get a glimpse of what's in store. We'll outline the course structure, set expectations, and highlight the outcomes you can anticipate upon completion."
          },
          {
            "title": "Expectations & Outcomes",
            "video": "/htmlcourse/CourseOutcomes&Scope.m3u8",
            "duration": "1:21",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Understand the goals of this course and what you'll gain by the end. We'll discuss the skills you'll acquire, the knowledge you'll gain, and how it will benefit you in the realm of web development and networking."
          },
          {
            "title": "Web Development & Scopes",
            "video": "/htmlcourse/WebDevelopment&Scopes.m3u8",
            "duration": "8:54",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the vast landscape of web development careers. Learn about the diverse scopes and job opportunities available in the industry, providing you with insights to shape your career path."
          },
          {
            "title": "Frontend Backend Architecture",
            "video": "/htmlcourse/FrontendBackendArchitecture.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Delve into the intricacies of frontend and backend architecture. Understand how these components work together to create seamless and responsive web applications, laying the foundation for your development journey."
          },
          {
            "title": "Database",
            "video": "/htmlcourse/database.m3u8",
            "duration": "1:07",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Uncover the importance of databases in web development. Learn what are the types of database available and the free cloud services providing free database for developers."
          },
          {
            "title": "IP & Types",
            "video": "/htmlcourse/ip internal & external.m3u8",
            "duration": "9:35",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Navigate the world of Internet Protocol (IP) addresses. Gain a comprehensive understanding of IP types and their significance in the networking landscape."
          },
          {
            "title": "IPv4 vs IPv6",
            "video": "/htmlcourse/ipv4 vs ipv6.m3u8",
            "duration": "7:12",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Compare IPv4 and IPv6, the two versions of the Internet Protocol. Understand the differences and advancements that IPv6 brings to address the limitations of IPv4."
          },
          {
            "title": "Static vs Dynamic IP",
            "video": "/htmlcourse/static_vs_dynamic_ip.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the distinction between static and dynamic IP addresses. Learn how each type is assigned and its impact on network configurations."
          },
          {
            "title": "Quiz 1",
            "quiz": true,
            "locked": false,
            "completed": false,
            "questions": [
              {
                "question": "What does \"frontend\" refer to in web development?",
                "options": [
                  "The part of a website users interact with",
                  "The server-side logic of a website",
                  "The database management system",
                  "The network infrastructure"
                ],
                "questionId": 100
              },
              {
                "question": "What is the primary role of \"backend\" in web development?",
                "options": [
                  "Managing the user interface",
                  "Handling server-side logic and databases",
                  "Designing responsive layouts",
                  "Implementing frontend styles"
                ],
                "questionId": 101
              },
              {
                "question": "What does \"IP\" stand for in networking?",
                "options": [
                  "Internet Provider",
                  "Internet Protocol",
                  "Information Processing",
                  "Interface Port"
                ],
                "questionId": 102
              },
              {
                "question": " What is the total range of each octet in an IPv4 address?",
                "options": [
                  "0-100",
                  "0-127",
                  "0-255",
                  "0-64"
                ],
                "questionId": 103
              }
            ]
          },
          {
            "title": "DNS",
            "video": "/htmlcourse/dns.m3u8",
            "duration": "10:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into the Domain Name System (DNS) and unravel the process of translating domain names to IP addresses. Explore the role DNS plays in making web browsing seamless."
          },
          {
            "title": "What is API?",
            "video": "/htmlcourse/api.m3u8",
            "duration": "3:12",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Application Programming Interfaces (APIs). Understand their significance in web development, facilitating communication between different software systems."
          },
          {
            "title": "What is HTML",
            "video": "/htmlcourse/what_is_html.m3u8",
            "duration": "2:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Begin your journey into the core of web development with HTML. Learn the basics of structuring web content and creating the foundation for interactive websites."
          },
          {
            "title": "HTML Page Structure",
            "video": "/htmlcourse/HTML_page_structure.m3u8",
            "duration": "3:33",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the art of organizing your web pages. Explore HTML tags that define the structure of a webpage, providing a solid foundation for your coding endeavors."
          },
          {
            "title": "Quiz 2",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the primary function of DNS in web development?",
                "options": [
                  "To design responsive user interfaces",
                  "To translate domain names to IP addresses",
                  "To manage server-side logic",
                  "To encrypt website data"
                ],
                "questionId": 104
              },
              {
                "question": "What does 'API' stand for in web development?",
                "options": [
                  "Advanced Programming Interface",
                  "Application Programming Interface",
                  "Automated Processing Interface",
                  "Advanced Protocol Integration"
                ],
                "questionId": 105
              },
              {
                "question": "What is the main markup language used for creating web pages??",
                "options": [
                  "XML",
                  "XAMPP",
                  "HTML",
                  "CSS"
                ],
                "questionId": 106
              },
              {
                "question": "What does 'HTML' stand for?",
                "options": [
                  "Hyper Transfer Markup Language",
                  "High-Level Text Management Language",
                  "Hyperlink and Text Management Language",
                  "HyperText Markup Language"
                ],
                "questionId": 107
              }
            ]
          },
          {
            "title": "Text tags",
            "video": "/htmlcourse/text_tags.m3u8",
            "duration": "18:55",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore the world of text manipulation in HTML. Discover tags that enhance the presentation of textual content on your web pages."
          },
          {
            "title": "List tags",
            "video": "/htmlcourse/list_tags.m3u8",
            "duration": "5:29",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore HTML's list tags to efficiently structure information. Learn how to create ordered and unordered lists for better content organization."
          },
          {
            "title": "Anchor tag",
            "video": "/htmlcourse/Anchor_tag.m3u8",
            "duration": "7:53",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unlock the power of hyperlinking with the anchor tag. Understand how to connect different pages and resources within your website."
          },
          {
            "title": "Image tag",
            "video": "/htmlcourse/image_tag.m3u8",
            "duration": "6:48",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Bring visual appeal to your web pages with the image tag. Learn how to integrate images seamlessly into your HTML content."
          },
          {
            "title": "Audio & video tag",
            "video": "/htmlcourse/audio_and_video_tag.m3u8",
            "duration": "7:56",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user engagement with multimedia elements. Explore the audio and video tags to incorporate media seamlessly into your web projects."
          },
          {
            "title": "iframe & embed tag",
            "video": "/htmlcourse/iframe_and_embed_tag.m3u8",
            "duration": "7:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Harness the capabilities of iframe and embed tags. Understand how these tags enable the integration of external content within your web pages."
          },
          {
            "title": "Div tag",
            "video": "/htmlcourse/div_tag.m3u8",
            "duration": "3:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the versatile div tag. Learn how it acts as a container, allowing you to structure and style your HTML content effectively."
          },
          {
            "title": "Input tags",
            "video": "/htmlcourse/input_tag.m3u8",
            "duration": "14:01",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into user interaction with HTML input tags. Explore various input types and understand how they enable user data input."
          },
          {
            "title": "Button tag",
            "video": "/htmlcourse/button_tag.m3u8",
            "duration": "1:43",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user experience with interactive buttons. Learn the ins and outs of the button tag and its various applications."
          },
          {
            "title": "Form part 1",
            "video": "/htmlcourse/form_tag_1.m3u8",
            "duration": "9:09",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embark on the journey of web forms. In part one, explore the essential elements that make up a form, setting the stage for user data collection."
          },
          {
            "title": "Form part 2",
            "video": "/htmlcourse/form_tag_2.m3u8",
            "duration": "8:00",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Delve deeper into the world of web forms. In part two, learn about form validation, submission methods, and enhance the functionality of your forms."
          },
          {
            "title": "Table tag",
            "video": "/htmlcourse/table_tag.m3u8",
            "duration": "4:42",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Uncover the power of HTML tables. Learn how to structure and display data in a tabular format for improved readability."
          },
          {
            "title": "Semantic HTML - 1",
            "video": "/htmlcourse/semantic_html_1.m3u8",
            "duration": "5:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embrace semantic HTML for enhanced accessibility and SEO. In part one, understand how semantic tags contribute to the meaning and structure of your content."
          },
          {
            "title": "Semantic HTML - 2",
            "video": "/htmlcourse/semantic_html_2.m3u8",
            "duration": "2:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your journey into semantic HTML. In part two, explore additional tags that enrich the semantics of your web pages."
          },
          {
            "title": "Web Crawler",
            "video": "/htmlcourse/web_crawler.m3u8",
            "duration": "3:40",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Understand how websites are ranked to top by web crawling. Understand the fundamentals of how search engines navigate and index content across the vast web."
          },
          {
            "title": "Quiz 3",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the purpose of 'Text tags' in HTML?",
                "options": [
                  "To create lists of items",
                  "To structure webpage content",
                  "To manipulate text formatting",
                  "To embed multimedia elements"
                ],
                "questionId": 108
              },
              {
                "question": "Which HTML tags are used for creating ordered and unordered lists?",
                "options": [
                  "<ol> and <ul>",
                  "<ul> and <li>",
                  "<list> and <item>",
                  "<order> and <item>"
                ],
                "questionId": 109
              },
              {
                "question": "What does the 'Anchor tag' (<a>) primarily facilitate in HTML?",
                "options": [
                  "Embedding images",
                  "Creating hyperlinks",
                  "Styling webpage elements",
                  "Inserting audio content"
                ],
                "questionId": 110
              },
              {
                "question": "What does the term 'Web Crawler' refer to in the context of HTML?",
                "options": [
                  "A spider-like creature",
                  "A tool for organizing files",
                  "A script for automating tasks",
                  "A program for navigating and indexing web content"
                ],
                "questionId": 111
              }
            ]
          },
          {
            "title": "More HTML tags",
            "video": "/htmlcourse/more_html_tags.m3u8",
            "duration": "1:39",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Expand your HTML toolkit with additional tags. Discover tags that cater to specific needs, enhancing the richness of your web pages."
          },
          {
            "title": "Project 1 - 1",
            "video": "/htmlcourse/project_1_1.m3u8",
            "duration": "7:38",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Apply your newfound HTML skills in a practical project. In part one, embark on a hands-on project to where we build a small FAQ page by using semantic HTML tags and using font awesome icons."
          },
          {
            "title": "Project 1 - 2",
            "video": "/htmlcourse/project_1_2.m3u8",
            "duration": "8:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your project journey in part two. Apply advanced HTML concepts and solidify your skills through a comprehensive project that showcases your abilities."
          },
          {
            "title": "Project 2",
            "video": "/htmlcourse/project_2.m3u8",
            "duration": "9:05",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Level up with an in-depth project. Demonstrate your proficiency in HTML as you undertake a larger-scale project, integrating various elements learned throughout the course."
          },
          {
            "title": "Web Hosting",
            "video": "/htmlcourse/web_hosting.m3u8",
            "duration": "6:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unravel the mysteries of web hosting. Learn how to take your web projects live by exploring different hosting options and understanding the basics of site configurations."
          },
          {
            "title": "CSS",
            "video": "/htmlcourse/intro_to_css.m3u8",
            "duration": "8:22",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Transition seamlessly from HTML to CSS. In this module, delve into the world of Cascading Style Sheets to add style and visual appeal to your web pages."
          },
          {
            "title": "HTML and Project Quiz",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "In 'Project 1 - 1', what HTML semantic tags were primarily used for creating a FAQ page?",
                "options": [
                  "<div> and <span>",
                  "<details> and <summary>",
                  "<ul> and <li>",
                  "<section> and <article>"
                ],
                "questionId": 112
              },
              {
                "question": "In 'Project 1 - 2', how did you make an image float using HTML?",
                "options": [
                  "Applied 'float' property in CSS",
                  "Used 'position: absolute'",
                  "Set 'display: inline-block'",
                  "Inserted a 'float' tag around the image"
                ],
                "questionId": 113
              },
              {
                "question": "What was the focus of 'Project 2' in your HTML course?",
                "options": [
                  "Creating an FAQ page",
                  "Designing a personal portfolio",
                  "Developing a basic app documentation",
                  "Implementing a chat application"
                ],
                "questionId": 114
              },
              {
                "question": "What is web hosting in the context of web development?",
                "options": [
                  "A service that allows individuals and organizations to make their websites accessible via the World Wide Web",
                  "A method of creating dynamic web pages",
                  "A technique for optimizing website performance",
                  "A module covered in the CSS section"
                ],
                "questionId": 115
              }
            ]
          },
          {
            "title": "Wrap up",
            "video": "/htmlcourse/wrap_up.m3u8",
            "duration": "2:07",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Congratulations on completing the course! In this final module, recap your journey, reflect on your accomplishments, and gain insights into the next steps in your web development adventure."
          }
        ],
        "language": "Tamil",
        "requirements": [
          "Text editor for writing HTML code",
          "Web Browser to view the output of HTML code"
        ],
        "author": "N.U.Thejas hari",
        "authorInsta": "https://www.instagram.com/nuthejashari/",
        "meetingLink": "",
        "whatsappGroup": "",
        "recordedVideo": "",
        "courseId": "101110",
        "locked": false,
        "videos": "35",
        "projects": "2",
        "duration": "4 Hours",
        "paid": "",
        "cancellable": false,
        "createdAt": "2024-01-01T06:43:50.699Z",
        "updatedAt": "2024-01-01T06:43:50.699Z",
        "__v": 0,
        "completed": false,
        "enrolledOn": "2024-01-25T07:02:44.411Z",
        "certificate": "",
        "name": "Karthikeyan Ranganathan",
        "userId": "65b206f9f020f12153e643ec",
        "progress": 0,
        "allNotes": []
      }
    ],
    "createdAt": "2024-01-25T07:00:09.141Z",
    "updatedAt": "2024-01-31T17:43:05.674Z",
    "__v": 0
  },
  {
    "_id": "65b2133dc23c1347926666bb",
    "name": "Pratheen S",
    "email": "techpratheen@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Advanced",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T07:52:29.134Z",
    "updatedAt": "2024-01-25T07:53:14.799Z",
    "__v": 0
  },
  {
    "_id": "65b214aa85bfaca198667ac6",
    "name": "Afzal N",
    "email": "mrtechie77@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b4bd00ed9d87145d75ebe2",
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T07:58:34.590Z",
    "updatedAt": "2024-01-31T07:54:44.513Z",
    "__v": 0
  },
  {
    "_id": "65b2155f7845ca470c69ee37",
    "name": "Hari Haran",
    "email": "hariharankrishnan1972@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T08:01:35.340Z",
    "updatedAt": "2024-01-25T08:01:51.334Z",
    "__v": 0
  },
  {
    "_id": "65b2159d7845ca470c69ee3e",
    "name": "Rakshith Gowda",
    "email": "rakshithdevasya1@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T08:02:37.402Z",
    "updatedAt": "2024-01-25T08:02:55.702Z",
    "__v": 0
  },
  {
    "_id": "65b225f64173f4d56c7a17d1",
    "name": "Dharshan Kumar",
    "email": "dharshankumar279@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T09:12:22.709Z",
    "updatedAt": "2024-01-25T09:12:51.698Z",
    "__v": 0
  },
  {
    "_id": "65b2269568f1b43b2d3c9616",
    "name": "Raju",
    "email": "mr.cheemsra@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T09:15:01.472Z",
    "updatedAt": "2024-01-25T09:15:24.817Z",
    "__v": 0
  },
  {
    "_id": "65b22a5f464455b27a69292b",
    "name": "Sathish K",
    "email": "sathishcsc9629@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Intermediate",
    "registeredWorkshops": [
      "65b4bd00ed9d87145d75ebe2",
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T09:31:11.096Z",
    "updatedAt": "2024-02-01T18:31:22.460Z",
    "__v": 0
  },
  {
    "_id": "65b232625df394d080325225",
    "name": "samjohn_offl",
    "email": "samjohn7845@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Intermediate",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T10:05:22.205Z",
    "updatedAt": "2024-01-25T10:05:33.301Z",
    "__v": 0
  },
  {
    "_id": "65b23e889b717ee836f2a8b3",
    "name": "Sweatha M S",
    "email": "sweathams27@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T10:57:12.240Z",
    "updatedAt": "2024-01-25T10:57:12.240Z",
    "__v": 0
  },
  {
    "_id": "65b242405aaeaf9ef9bd84ad",
    "name": "Mahendra Sethupathi",
    "email": "mahendrasethupathi6@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T11:13:04.365Z",
    "updatedAt": "2024-01-25T11:13:04.365Z",
    "__v": 0
  },
  {
    "_id": "65b2450df683a59e393157d4",
    "name": "Nandhees Nandhees",
    "email": "nandheesnandhees508@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T11:25:02.003Z",
    "updatedAt": "2024-01-25T11:26:35.427Z",
    "__v": 0
  },
  {
    "_id": "65b2460b3abdad6bd0d51f7a",
    "name": "Ram Kumar M",
    "email": "ramkumar2692000@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T11:29:15.600Z",
    "updatedAt": "2024-01-25T11:29:15.600Z",
    "__v": 0
  },
  {
    "_id": "65b24a5df6972023ec015b98",
    "name": "Thirumalai kumar",
    "email": "n.thirumalaikumar1998@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Novice",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T11:47:41.057Z",
    "updatedAt": "2024-01-25T11:50:45.689Z",
    "__v": 0
  },
  {
    "_id": "65b24a9eff0fc047dbbf79be",
    "name": "Nistul Premod",
    "email": "nistul02@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Intermediate",
    "registeredWorkshops": [
      "65c4ec315a6594a5ea09b47f",
      "65b4bd00ed9d87145d75ebe2",
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [
      "101110"
    ],
    "enrolledCoursesData": [
      {
        "_id": "65925f26f5f0ffa3b0e38586",
        "title": "Basics of Networking and HTML Beginner to Advanced Course",
        "description": "Learn web development fundamentals, covering frontend, backend, and database structures. Explore client-server dynamics, APIs, various IP types, DNS workings, and HTML essentials with an introduction to CSS for crafting interactive websites",
        "image": "/html.png",
        "content": [
          {
            "title": "Course Introduction",
            "video": "/htmlcourse/intro.m3u8",
            "duration": "0:32",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Welcome to the course! In this introductory module, you'll get a glimpse of what's in store. We'll outline the course structure, set expectations, and highlight the outcomes you can anticipate upon completion."
          },
          {
            "title": "Expectations & Outcomes",
            "video": "/htmlcourse/CourseOutcomes&Scope.m3u8",
            "duration": "1:21",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Understand the goals of this course and what you'll gain by the end. We'll discuss the skills you'll acquire, the knowledge you'll gain, and how it will benefit you in the realm of web development and networking."
          },
          {
            "title": "Web Development & Scopes",
            "video": "/htmlcourse/WebDevelopment&Scopes.m3u8",
            "duration": "8:54",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the vast landscape of web development careers. Learn about the diverse scopes and job opportunities available in the industry, providing you with insights to shape your career path."
          },
          {
            "title": "Frontend Backend Architecture",
            "video": "/htmlcourse/FrontendBackendArchitecture.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Delve into the intricacies of frontend and backend architecture. Understand how these components work together to create seamless and responsive web applications, laying the foundation for your development journey."
          },
          {
            "title": "Database",
            "video": "/htmlcourse/database.m3u8",
            "duration": "1:07",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Uncover the importance of databases in web development. Learn what are the types of database available and the free cloud services providing free database for developers."
          },
          {
            "title": "IP & Types",
            "video": "/htmlcourse/ip internal & external.m3u8",
            "duration": "9:35",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Navigate the world of Internet Protocol (IP) addresses. Gain a comprehensive understanding of IP types and their significance in the networking landscape."
          },
          {
            "title": "IPv4 vs IPv6",
            "video": "/htmlcourse/ipv4 vs ipv6.m3u8",
            "duration": "7:12",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Compare IPv4 and IPv6, the two versions of the Internet Protocol. Understand the differences and advancements that IPv6 brings to address the limitations of IPv4."
          },
          {
            "title": "Static vs Dynamic IP",
            "video": "/htmlcourse/static_vs_dynamic_ip.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the distinction between static and dynamic IP addresses. Learn how each type is assigned and its impact on network configurations."
          },
          {
            "title": "Quiz 1",
            "quiz": true,
            "locked": false,
            "completed": false,
            "questions": [
              {
                "question": "What does \"frontend\" refer to in web development?",
                "options": [
                  "The part of a website users interact with",
                  "The server-side logic of a website",
                  "The database management system",
                  "The network infrastructure"
                ],
                "questionId": 100
              },
              {
                "question": "What is the primary role of \"backend\" in web development?",
                "options": [
                  "Managing the user interface",
                  "Handling server-side logic and databases",
                  "Designing responsive layouts",
                  "Implementing frontend styles"
                ],
                "questionId": 101
              },
              {
                "question": "What does \"IP\" stand for in networking?",
                "options": [
                  "Internet Provider",
                  "Internet Protocol",
                  "Information Processing",
                  "Interface Port"
                ],
                "questionId": 102
              },
              {
                "question": " What is the total range of each octet in an IPv4 address?",
                "options": [
                  "0-100",
                  "0-127",
                  "0-255",
                  "0-64"
                ],
                "questionId": 103
              }
            ]
          },
          {
            "title": "DNS",
            "video": "/htmlcourse/dns.m3u8",
            "duration": "10:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into the Domain Name System (DNS) and unravel the process of translating domain names to IP addresses. Explore the role DNS plays in making web browsing seamless."
          },
          {
            "title": "What is API?",
            "video": "/htmlcourse/api.m3u8",
            "duration": "3:12",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Application Programming Interfaces (APIs). Understand their significance in web development, facilitating communication between different software systems."
          },
          {
            "title": "What is HTML",
            "video": "/htmlcourse/what_is_html.m3u8",
            "duration": "2:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Begin your journey into the core of web development with HTML. Learn the basics of structuring web content and creating the foundation for interactive websites."
          },
          {
            "title": "HTML Page Structure",
            "video": "/htmlcourse/HTML_page_structure.m3u8",
            "duration": "3:33",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the art of organizing your web pages. Explore HTML tags that define the structure of a webpage, providing a solid foundation for your coding endeavors."
          },
          {
            "title": "Quiz 2",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the primary function of DNS in web development?",
                "options": [
                  "To design responsive user interfaces",
                  "To translate domain names to IP addresses",
                  "To manage server-side logic",
                  "To encrypt website data"
                ],
                "questionId": 104
              },
              {
                "question": "What does 'API' stand for in web development?",
                "options": [
                  "Advanced Programming Interface",
                  "Application Programming Interface",
                  "Automated Processing Interface",
                  "Advanced Protocol Integration"
                ],
                "questionId": 105
              },
              {
                "question": "What is the main markup language used for creating web pages??",
                "options": [
                  "XML",
                  "XAMPP",
                  "HTML",
                  "CSS"
                ],
                "questionId": 106
              },
              {
                "question": "What does 'HTML' stand for?",
                "options": [
                  "Hyper Transfer Markup Language",
                  "High-Level Text Management Language",
                  "Hyperlink and Text Management Language",
                  "HyperText Markup Language"
                ],
                "questionId": 107
              }
            ]
          },
          {
            "title": "Text tags",
            "video": "/htmlcourse/text_tags.m3u8",
            "duration": "18:55",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore the world of text manipulation in HTML. Discover tags that enhance the presentation of textual content on your web pages."
          },
          {
            "title": "List tags",
            "video": "/htmlcourse/list_tags.m3u8",
            "duration": "5:29",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore HTML's list tags to efficiently structure information. Learn how to create ordered and unordered lists for better content organization."
          },
          {
            "title": "Anchor tag",
            "video": "/htmlcourse/Anchor_tag.m3u8",
            "duration": "7:53",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unlock the power of hyperlinking with the anchor tag. Understand how to connect different pages and resources within your website."
          },
          {
            "title": "Image tag",
            "video": "/htmlcourse/image_tag.m3u8",
            "duration": "6:48",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Bring visual appeal to your web pages with the image tag. Learn how to integrate images seamlessly into your HTML content."
          },
          {
            "title": "Audio & video tag",
            "video": "/htmlcourse/audio_and_video_tag.m3u8",
            "duration": "7:56",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user engagement with multimedia elements. Explore the audio and video tags to incorporate media seamlessly into your web projects."
          },
          {
            "title": "iframe & embed tag",
            "video": "/htmlcourse/iframe_and_embed_tag.m3u8",
            "duration": "7:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Harness the capabilities of iframe and embed tags. Understand how these tags enable the integration of external content within your web pages."
          },
          {
            "title": "Div tag",
            "video": "/htmlcourse/div_tag.m3u8",
            "duration": "3:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the versatile div tag. Learn how it acts as a container, allowing you to structure and style your HTML content effectively."
          },
          {
            "title": "Input tags",
            "video": "/htmlcourse/input_tag.m3u8",
            "duration": "14:01",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into user interaction with HTML input tags. Explore various input types and understand how they enable user data input."
          },
          {
            "title": "Button tag",
            "video": "/htmlcourse/button_tag.m3u8",
            "duration": "1:43",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user experience with interactive buttons. Learn the ins and outs of the button tag and its various applications."
          },
          {
            "title": "Form part 1",
            "video": "/htmlcourse/form_tag_1.m3u8",
            "duration": "9:09",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embark on the journey of web forms. In part one, explore the essential elements that make up a form, setting the stage for user data collection."
          },
          {
            "title": "Form part 2",
            "video": "/htmlcourse/form_tag_2.m3u8",
            "duration": "8:00",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Delve deeper into the world of web forms. In part two, learn about form validation, submission methods, and enhance the functionality of your forms."
          },
          {
            "title": "Table tag",
            "video": "/htmlcourse/table_tag.m3u8",
            "duration": "4:42",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Uncover the power of HTML tables. Learn how to structure and display data in a tabular format for improved readability."
          },
          {
            "title": "Semantic HTML - 1",
            "video": "/htmlcourse/semantic_html_1.m3u8",
            "duration": "5:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embrace semantic HTML for enhanced accessibility and SEO. In part one, understand how semantic tags contribute to the meaning and structure of your content."
          },
          {
            "title": "Semantic HTML - 2",
            "video": "/htmlcourse/semantic_html_2.m3u8",
            "duration": "2:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your journey into semantic HTML. In part two, explore additional tags that enrich the semantics of your web pages."
          },
          {
            "title": "Web Crawler",
            "video": "/htmlcourse/web_crawler.m3u8",
            "duration": "3:40",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Understand how websites are ranked to top by web crawling. Understand the fundamentals of how search engines navigate and index content across the vast web."
          },
          {
            "title": "Quiz 3",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the purpose of 'Text tags' in HTML?",
                "options": [
                  "To create lists of items",
                  "To structure webpage content",
                  "To manipulate text formatting",
                  "To embed multimedia elements"
                ],
                "questionId": 108
              },
              {
                "question": "Which HTML tags are used for creating ordered and unordered lists?",
                "options": [
                  "<ol> and <ul>",
                  "<ul> and <li>",
                  "<list> and <item>",
                  "<order> and <item>"
                ],
                "questionId": 109
              },
              {
                "question": "What does the 'Anchor tag' (<a>) primarily facilitate in HTML?",
                "options": [
                  "Embedding images",
                  "Creating hyperlinks",
                  "Styling webpage elements",
                  "Inserting audio content"
                ],
                "questionId": 110
              },
              {
                "question": "What does the term 'Web Crawler' refer to in the context of HTML?",
                "options": [
                  "A spider-like creature",
                  "A tool for organizing files",
                  "A script for automating tasks",
                  "A program for navigating and indexing web content"
                ],
                "questionId": 111
              }
            ]
          },
          {
            "title": "More HTML tags",
            "video": "/htmlcourse/more_html_tags.m3u8",
            "duration": "1:39",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Expand your HTML toolkit with additional tags. Discover tags that cater to specific needs, enhancing the richness of your web pages."
          },
          {
            "title": "Project 1 - 1",
            "video": "/htmlcourse/project_1_1.m3u8",
            "duration": "7:38",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Apply your newfound HTML skills in a practical project. In part one, embark on a hands-on project to where we build a small FAQ page by using semantic HTML tags and using font awesome icons."
          },
          {
            "title": "Project 1 - 2",
            "video": "/htmlcourse/project_1_2.m3u8",
            "duration": "8:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your project journey in part two. Apply advanced HTML concepts and solidify your skills through a comprehensive project that showcases your abilities."
          },
          {
            "title": "Project 2",
            "video": "/htmlcourse/project_2.m3u8",
            "duration": "9:05",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Level up with an in-depth project. Demonstrate your proficiency in HTML as you undertake a larger-scale project, integrating various elements learned throughout the course."
          },
          {
            "title": "Web Hosting",
            "video": "/htmlcourse/web_hosting.m3u8",
            "duration": "6:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unravel the mysteries of web hosting. Learn how to take your web projects live by exploring different hosting options and understanding the basics of site configurations."
          },
          {
            "title": "CSS",
            "video": "/htmlcourse/intro_to_css.m3u8",
            "duration": "8:22",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Transition seamlessly from HTML to CSS. In this module, delve into the world of Cascading Style Sheets to add style and visual appeal to your web pages."
          },
          {
            "title": "HTML and Project Quiz",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "In 'Project 1 - 1', what HTML semantic tags were primarily used for creating a FAQ page?",
                "options": [
                  "<div> and <span>",
                  "<details> and <summary>",
                  "<ul> and <li>",
                  "<section> and <article>"
                ],
                "questionId": 112
              },
              {
                "question": "In 'Project 1 - 2', how did you make an image float using HTML?",
                "options": [
                  "Applied 'float' property in CSS",
                  "Used 'position: absolute'",
                  "Set 'display: inline-block'",
                  "Inserted a 'float' tag around the image"
                ],
                "questionId": 113
              },
              {
                "question": "What was the focus of 'Project 2' in your HTML course?",
                "options": [
                  "Creating an FAQ page",
                  "Designing a personal portfolio",
                  "Developing a basic app documentation",
                  "Implementing a chat application"
                ],
                "questionId": 114
              },
              {
                "question": "What is web hosting in the context of web development?",
                "options": [
                  "A service that allows individuals and organizations to make their websites accessible via the World Wide Web",
                  "A method of creating dynamic web pages",
                  "A technique for optimizing website performance",
                  "A module covered in the CSS section"
                ],
                "questionId": 115
              }
            ]
          },
          {
            "title": "Wrap up",
            "video": "/htmlcourse/wrap_up.m3u8",
            "duration": "2:07",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Congratulations on completing the course! In this final module, recap your journey, reflect on your accomplishments, and gain insights into the next steps in your web development adventure."
          }
        ],
        "language": "Tamil",
        "requirements": [
          "Text editor for writing HTML code",
          "Web Browser to view the output of HTML code"
        ],
        "author": "N.U.Thejas hari",
        "authorInsta": "https://www.instagram.com/nuthejashari/",
        "meetingLink": "",
        "whatsappGroup": "",
        "recordedVideo": "",
        "courseId": "101110",
        "locked": false,
        "videos": "35",
        "projects": "2",
        "duration": "4 Hours",
        "paid": "",
        "cancellable": false,
        "createdAt": "2024-01-01T06:43:50.699Z",
        "updatedAt": "2024-01-01T06:43:50.699Z",
        "__v": 0,
        "completed": false,
        "enrolledOn": "2024-02-02T15:57:43.633Z",
        "certificate": "",
        "name": "Nistul Premod",
        "userId": "65b24a9eff0fc047dbbf79be",
        "progress": 0,
        "allNotes": []
      }
    ],
    "createdAt": "2024-01-25T11:48:46.235Z",
    "updatedAt": "2024-02-08T15:46:12.238Z",
    "__v": 0
  },
  {
    "_id": "65b24c71521d2151d158d7f6",
    "name": "virat sasi",
    "email": "viratsasi6063@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b4bd00ed9d87145d75ebe2",
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T11:56:33.830Z",
    "updatedAt": "2024-01-31T18:10:30.134Z",
    "__v": 0
  },
  {
    "_id": "65b24e37f73dcd12d17d3d6a",
    "name": "srinath sri",
    "email": "srinathsri853@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T12:04:07.413Z",
    "updatedAt": "2024-01-25T12:04:36.351Z",
    "__v": 0
  },
  {
    "_id": "65b24f42f071a801fead5654",
    "name": "Bala Sudharsan",
    "email": "balasudharsan385@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T12:08:34.176Z",
    "updatedAt": "2024-01-25T12:09:53.917Z",
    "__v": 0
  },
  {
    "_id": "65b258380bb237b3ba7a9ee2",
    "name": "Keerthi Vasan",
    "email": "vdmkeerthi@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b4bd00ed9d87145d75ebe2",
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [
      "101110"
    ],
    "enrolledCoursesData": [
      {
        "_id": "65925f26f5f0ffa3b0e38586",
        "title": "Basics of Networking and HTML Beginner to Advanced Course",
        "description": "Learn web development fundamentals, covering frontend, backend, and database structures. Explore client-server dynamics, APIs, various IP types, DNS workings, and HTML essentials with an introduction to CSS for crafting interactive websites",
        "image": "/html.png",
        "content": [
          {
            "title": "Course Introduction",
            "video": "/htmlcourse/intro.m3u8",
            "duration": "0:32",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Welcome to the course! In this introductory module, you'll get a glimpse of what's in store. We'll outline the course structure, set expectations, and highlight the outcomes you can anticipate upon completion."
          },
          {
            "title": "Expectations & Outcomes",
            "video": "/htmlcourse/CourseOutcomes&Scope.m3u8",
            "duration": "1:21",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Understand the goals of this course and what you'll gain by the end. We'll discuss the skills you'll acquire, the knowledge you'll gain, and how it will benefit you in the realm of web development and networking."
          },
          {
            "title": "Web Development & Scopes",
            "video": "/htmlcourse/WebDevelopment&Scopes.m3u8",
            "duration": "8:54",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the vast landscape of web development careers. Learn about the diverse scopes and job opportunities available in the industry, providing you with insights to shape your career path."
          },
          {
            "title": "Frontend Backend Architecture",
            "video": "/htmlcourse/FrontendBackendArchitecture.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Delve into the intricacies of frontend and backend architecture. Understand how these components work together to create seamless and responsive web applications, laying the foundation for your development journey."
          },
          {
            "title": "Database",
            "video": "/htmlcourse/database.m3u8",
            "duration": "1:07",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Uncover the importance of databases in web development. Learn what are the types of database available and the free cloud services providing free database for developers."
          },
          {
            "title": "IP & Types",
            "video": "/htmlcourse/ip internal & external.m3u8",
            "duration": "9:35",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Navigate the world of Internet Protocol (IP) addresses. Gain a comprehensive understanding of IP types and their significance in the networking landscape."
          },
          {
            "title": "IPv4 vs IPv6",
            "video": "/htmlcourse/ipv4 vs ipv6.m3u8",
            "duration": "7:12",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Compare IPv4 and IPv6, the two versions of the Internet Protocol. Understand the differences and advancements that IPv6 brings to address the limitations of IPv4."
          },
          {
            "title": "Static vs Dynamic IP",
            "video": "/htmlcourse/static_vs_dynamic_ip.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the distinction between static and dynamic IP addresses. Learn how each type is assigned and its impact on network configurations."
          },
          {
            "title": "Quiz 1",
            "quiz": true,
            "locked": false,
            "completed": false,
            "questions": [
              {
                "question": "What does \"frontend\" refer to in web development?",
                "options": [
                  "The part of a website users interact with",
                  "The server-side logic of a website",
                  "The database management system",
                  "The network infrastructure"
                ],
                "questionId": 100
              },
              {
                "question": "What is the primary role of \"backend\" in web development?",
                "options": [
                  "Managing the user interface",
                  "Handling server-side logic and databases",
                  "Designing responsive layouts",
                  "Implementing frontend styles"
                ],
                "questionId": 101
              },
              {
                "question": "What does \"IP\" stand for in networking?",
                "options": [
                  "Internet Provider",
                  "Internet Protocol",
                  "Information Processing",
                  "Interface Port"
                ],
                "questionId": 102
              },
              {
                "question": " What is the total range of each octet in an IPv4 address?",
                "options": [
                  "0-100",
                  "0-127",
                  "0-255",
                  "0-64"
                ],
                "questionId": 103
              }
            ]
          },
          {
            "title": "DNS",
            "video": "/htmlcourse/dns.m3u8",
            "duration": "10:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into the Domain Name System (DNS) and unravel the process of translating domain names to IP addresses. Explore the role DNS plays in making web browsing seamless."
          },
          {
            "title": "What is API?",
            "video": "/htmlcourse/api.m3u8",
            "duration": "3:12",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Application Programming Interfaces (APIs). Understand their significance in web development, facilitating communication between different software systems."
          },
          {
            "title": "What is HTML",
            "video": "/htmlcourse/what_is_html.m3u8",
            "duration": "2:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Begin your journey into the core of web development with HTML. Learn the basics of structuring web content and creating the foundation for interactive websites."
          },
          {
            "title": "HTML Page Structure",
            "video": "/htmlcourse/HTML_page_structure.m3u8",
            "duration": "3:33",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the art of organizing your web pages. Explore HTML tags that define the structure of a webpage, providing a solid foundation for your coding endeavors."
          },
          {
            "title": "Quiz 2",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the primary function of DNS in web development?",
                "options": [
                  "To design responsive user interfaces",
                  "To translate domain names to IP addresses",
                  "To manage server-side logic",
                  "To encrypt website data"
                ],
                "questionId": 104
              },
              {
                "question": "What does 'API' stand for in web development?",
                "options": [
                  "Advanced Programming Interface",
                  "Application Programming Interface",
                  "Automated Processing Interface",
                  "Advanced Protocol Integration"
                ],
                "questionId": 105
              },
              {
                "question": "What is the main markup language used for creating web pages??",
                "options": [
                  "XML",
                  "XAMPP",
                  "HTML",
                  "CSS"
                ],
                "questionId": 106
              },
              {
                "question": "What does 'HTML' stand for?",
                "options": [
                  "Hyper Transfer Markup Language",
                  "High-Level Text Management Language",
                  "Hyperlink and Text Management Language",
                  "HyperText Markup Language"
                ],
                "questionId": 107
              }
            ]
          },
          {
            "title": "Text tags",
            "video": "/htmlcourse/text_tags.m3u8",
            "duration": "18:55",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore the world of text manipulation in HTML. Discover tags that enhance the presentation of textual content on your web pages."
          },
          {
            "title": "List tags",
            "video": "/htmlcourse/list_tags.m3u8",
            "duration": "5:29",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore HTML's list tags to efficiently structure information. Learn how to create ordered and unordered lists for better content organization."
          },
          {
            "title": "Anchor tag",
            "video": "/htmlcourse/Anchor_tag.m3u8",
            "duration": "7:53",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unlock the power of hyperlinking with the anchor tag. Understand how to connect different pages and resources within your website."
          },
          {
            "title": "Image tag",
            "video": "/htmlcourse/image_tag.m3u8",
            "duration": "6:48",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Bring visual appeal to your web pages with the image tag. Learn how to integrate images seamlessly into your HTML content."
          },
          {
            "title": "Audio & video tag",
            "video": "/htmlcourse/audio_and_video_tag.m3u8",
            "duration": "7:56",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user engagement with multimedia elements. Explore the audio and video tags to incorporate media seamlessly into your web projects."
          },
          {
            "title": "iframe & embed tag",
            "video": "/htmlcourse/iframe_and_embed_tag.m3u8",
            "duration": "7:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Harness the capabilities of iframe and embed tags. Understand how these tags enable the integration of external content within your web pages."
          },
          {
            "title": "Div tag",
            "video": "/htmlcourse/div_tag.m3u8",
            "duration": "3:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the versatile div tag. Learn how it acts as a container, allowing you to structure and style your HTML content effectively."
          },
          {
            "title": "Input tags",
            "video": "/htmlcourse/input_tag.m3u8",
            "duration": "14:01",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into user interaction with HTML input tags. Explore various input types and understand how they enable user data input."
          },
          {
            "title": "Button tag",
            "video": "/htmlcourse/button_tag.m3u8",
            "duration": "1:43",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user experience with interactive buttons. Learn the ins and outs of the button tag and its various applications."
          },
          {
            "title": "Form part 1",
            "video": "/htmlcourse/form_tag_1.m3u8",
            "duration": "9:09",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embark on the journey of web forms. In part one, explore the essential elements that make up a form, setting the stage for user data collection."
          },
          {
            "title": "Form part 2",
            "video": "/htmlcourse/form_tag_2.m3u8",
            "duration": "8:00",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Delve deeper into the world of web forms. In part two, learn about form validation, submission methods, and enhance the functionality of your forms."
          },
          {
            "title": "Table tag",
            "video": "/htmlcourse/table_tag.m3u8",
            "duration": "4:42",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Uncover the power of HTML tables. Learn how to structure and display data in a tabular format for improved readability."
          },
          {
            "title": "Semantic HTML - 1",
            "video": "/htmlcourse/semantic_html_1.m3u8",
            "duration": "5:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embrace semantic HTML for enhanced accessibility and SEO. In part one, understand how semantic tags contribute to the meaning and structure of your content."
          },
          {
            "title": "Semantic HTML - 2",
            "video": "/htmlcourse/semantic_html_2.m3u8",
            "duration": "2:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your journey into semantic HTML. In part two, explore additional tags that enrich the semantics of your web pages."
          },
          {
            "title": "Web Crawler",
            "video": "/htmlcourse/web_crawler.m3u8",
            "duration": "3:40",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Understand how websites are ranked to top by web crawling. Understand the fundamentals of how search engines navigate and index content across the vast web."
          },
          {
            "title": "Quiz 3",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the purpose of 'Text tags' in HTML?",
                "options": [
                  "To create lists of items",
                  "To structure webpage content",
                  "To manipulate text formatting",
                  "To embed multimedia elements"
                ],
                "questionId": 108
              },
              {
                "question": "Which HTML tags are used for creating ordered and unordered lists?",
                "options": [
                  "<ol> and <ul>",
                  "<ul> and <li>",
                  "<list> and <item>",
                  "<order> and <item>"
                ],
                "questionId": 109
              },
              {
                "question": "What does the 'Anchor tag' (<a>) primarily facilitate in HTML?",
                "options": [
                  "Embedding images",
                  "Creating hyperlinks",
                  "Styling webpage elements",
                  "Inserting audio content"
                ],
                "questionId": 110
              },
              {
                "question": "What does the term 'Web Crawler' refer to in the context of HTML?",
                "options": [
                  "A spider-like creature",
                  "A tool for organizing files",
                  "A script for automating tasks",
                  "A program for navigating and indexing web content"
                ],
                "questionId": 111
              }
            ]
          },
          {
            "title": "More HTML tags",
            "video": "/htmlcourse/more_html_tags.m3u8",
            "duration": "1:39",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Expand your HTML toolkit with additional tags. Discover tags that cater to specific needs, enhancing the richness of your web pages."
          },
          {
            "title": "Project 1 - 1",
            "video": "/htmlcourse/project_1_1.m3u8",
            "duration": "7:38",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Apply your newfound HTML skills in a practical project. In part one, embark on a hands-on project to where we build a small FAQ page by using semantic HTML tags and using font awesome icons."
          },
          {
            "title": "Project 1 - 2",
            "video": "/htmlcourse/project_1_2.m3u8",
            "duration": "8:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your project journey in part two. Apply advanced HTML concepts and solidify your skills through a comprehensive project that showcases your abilities."
          },
          {
            "title": "Project 2",
            "video": "/htmlcourse/project_2.m3u8",
            "duration": "9:05",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Level up with an in-depth project. Demonstrate your proficiency in HTML as you undertake a larger-scale project, integrating various elements learned throughout the course."
          },
          {
            "title": "Web Hosting",
            "video": "/htmlcourse/web_hosting.m3u8",
            "duration": "6:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unravel the mysteries of web hosting. Learn how to take your web projects live by exploring different hosting options and understanding the basics of site configurations."
          },
          {
            "title": "CSS",
            "video": "/htmlcourse/intro_to_css.m3u8",
            "duration": "8:22",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Transition seamlessly from HTML to CSS. In this module, delve into the world of Cascading Style Sheets to add style and visual appeal to your web pages."
          },
          {
            "title": "HTML and Project Quiz",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "In 'Project 1 - 1', what HTML semantic tags were primarily used for creating a FAQ page?",
                "options": [
                  "<div> and <span>",
                  "<details> and <summary>",
                  "<ul> and <li>",
                  "<section> and <article>"
                ],
                "questionId": 112
              },
              {
                "question": "In 'Project 1 - 2', how did you make an image float using HTML?",
                "options": [
                  "Applied 'float' property in CSS",
                  "Used 'position: absolute'",
                  "Set 'display: inline-block'",
                  "Inserted a 'float' tag around the image"
                ],
                "questionId": 113
              },
              {
                "question": "What was the focus of 'Project 2' in your HTML course?",
                "options": [
                  "Creating an FAQ page",
                  "Designing a personal portfolio",
                  "Developing a basic app documentation",
                  "Implementing a chat application"
                ],
                "questionId": 114
              },
              {
                "question": "What is web hosting in the context of web development?",
                "options": [
                  "A service that allows individuals and organizations to make their websites accessible via the World Wide Web",
                  "A method of creating dynamic web pages",
                  "A technique for optimizing website performance",
                  "A module covered in the CSS section"
                ],
                "questionId": 115
              }
            ]
          },
          {
            "title": "Wrap up",
            "video": "/htmlcourse/wrap_up.m3u8",
            "duration": "2:07",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Congratulations on completing the course! In this final module, recap your journey, reflect on your accomplishments, and gain insights into the next steps in your web development adventure."
          }
        ],
        "language": "Tamil",
        "requirements": [
          "Text editor for writing HTML code",
          "Web Browser to view the output of HTML code"
        ],
        "author": "N.U.Thejas hari",
        "authorInsta": "https://www.instagram.com/nuthejashari/",
        "meetingLink": "",
        "whatsappGroup": "",
        "recordedVideo": "",
        "courseId": "101110",
        "locked": false,
        "videos": "35",
        "projects": "2",
        "duration": "4 Hours",
        "paid": "",
        "cancellable": false,
        "createdAt": "2024-01-01T06:43:50.699Z",
        "updatedAt": "2024-01-01T06:43:50.699Z",
        "__v": 0,
        "completed": false,
        "enrolledOn": "2024-01-25T12:47:37.121Z",
        "certificate": "",
        "name": "Keerthi Vasan",
        "userId": "65b258380bb237b3ba7a9ee2",
        "progress": 0,
        "allNotes": []
      }
    ],
    "createdAt": "2024-01-25T12:46:48.051Z",
    "updatedAt": "2024-02-01T00:22:46.700Z",
    "__v": 0
  },
  {
    "_id": "65b260ba1aaea6092f319bc7",
    "name": "mani patrik",
    "email": "mrkingmani2002@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Intermediate",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T13:23:06.402Z",
    "updatedAt": "2024-01-25T13:23:28.807Z",
    "__v": 0
  },
  {
    "_id": "65b267375dffb55540a6caf4",
    "name": "Vishal Bhaskar",
    "email": "vishalvichu369@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Intermediate",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T13:50:47.134Z",
    "updatedAt": "2024-01-25T13:50:58.559Z",
    "__v": 0
  },
  {
    "_id": "65b26d8cba92b3f19a9881d9",
    "name": "Pavankumar T",
    "email": "pavankumar.thiyagu@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T14:17:48.436Z",
    "updatedAt": "2024-01-25T14:17:48.436Z",
    "__v": 0
  },
  {
    "_id": "65b2719ea5b7696cb23641a4",
    "name": "ரோஜித்",
    "email": "rojithrojith92@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T14:35:10.079Z",
    "updatedAt": "2024-01-25T14:35:32.812Z",
    "__v": 0
  },
  {
    "_id": "65b27287a5b7696cb23641aa",
    "name": "Vimalathithan",
    "email": "viratvimal194@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Novice",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T14:39:03.202Z",
    "updatedAt": "2024-01-25T14:40:30.306Z",
    "__v": 0
  },
  {
    "_id": "65b276b0a66b99eb57271b56",
    "name": "Mokesh K",
    "email": "mokesh450415@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T14:56:48.409Z",
    "updatedAt": "2024-01-25T14:57:08.162Z",
    "__v": 0
  },
  {
    "_id": "65b27e3ea7acdb4449524c2d",
    "name": "Thaiyalnayaki angappan",
    "email": "thaiyalnayakiangappan@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T15:29:02.977Z",
    "updatedAt": "2024-01-25T15:30:03.211Z",
    "__v": 0
  },
  {
    "_id": "65b28052a7acdb4449524c3c",
    "name": "Mullai Venese",
    "email": "mullaivenese0307@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Intermediate",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T15:37:54.140Z",
    "updatedAt": "2024-01-25T15:38:16.613Z",
    "__v": 0
  },
  {
    "_id": "65b29e5493a88f8956c3596b",
    "name": "Yashwanthini R. M.",
    "email": "rmyashwanthini1502@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Novice",
    "registeredWorkshops": [
      "65b4bd00ed9d87145d75ebe2",
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T17:45:56.865Z",
    "updatedAt": "2024-02-01T10:53:24.560Z",
    "__v": 0
  },
  {
    "_id": "65b29f42ef8e7a8e376b2eca",
    "name": "Kishore A",
    "email": "kishorehack5214715@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Novice",
    "registeredWorkshops": [
      "65b4bd00ed9d87145d75ebe2",
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T17:49:54.913Z",
    "updatedAt": "2024-02-02T03:30:37.406Z",
    "__v": 0
  },
  {
    "_id": "65b2a05144da40fe0529329e",
    "name": "Sarvesh",
    "email": "kingjai156@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Novice",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-25T17:54:25.093Z",
    "updatedAt": "2024-01-25T17:54:34.487Z",
    "__v": 0
  },
  {
    "_id": "65b326c2d7b722b9342e3141",
    "name": "SANTHOSH AR",
    "email": "santhoshar778@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b4bd00ed9d87145d75ebe2",
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-26T03:28:02.865Z",
    "updatedAt": "2024-01-31T17:43:47.788Z",
    "__v": 0
  },
  {
    "_id": "65b32e1bb3ae63a62365441d",
    "name": "MOHAMED'S",
    "email": "mohamedathil2904@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-26T03:59:23.438Z",
    "updatedAt": "2024-01-26T03:59:39.630Z",
    "__v": 0
  },
  {
    "_id": "65b349b90f9e066038cd5d87",
    "name": "Thirumalai G",
    "email": "tthiru9025@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-26T05:57:13.647Z",
    "updatedAt": "2024-01-26T05:57:41.243Z",
    "__v": 0
  },
  {
    "_id": "65b3b8e750c57683ef70c529",
    "name": "Harivarman Mathiyalagan",
    "email": "harivarman5381@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Advanced",
    "registeredWorkshops": [],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-26T13:51:35.271Z",
    "updatedAt": "2024-01-26T13:51:35.271Z",
    "__v": 0
  },
  {
    "_id": "65b3ff226a9c2e54321d54ab",
    "name": "Alagu sundaram",
    "email": "alagusundaram6117@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-26T18:51:14.546Z",
    "updatedAt": "2024-01-26T18:51:24.024Z",
    "__v": 0
  },
  {
    "_id": "65b440a11f85ed725c2dcdc4",
    "name": "Parthi yt10k",
    "email": "parthiytk@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [],
    "enrolledCoursesId": [
      "101110"
    ],
    "enrolledCoursesData": [
      {
        "_id": "65925f26f5f0ffa3b0e38586",
        "title": "Basics of Networking and HTML Beginner to Advanced Course",
        "description": "Learn web development fundamentals, covering frontend, backend, and database structures. Explore client-server dynamics, APIs, various IP types, DNS workings, and HTML essentials with an introduction to CSS for crafting interactive websites",
        "image": "/html.png",
        "content": [
          {
            "title": "Course Introduction",
            "video": "/htmlcourse/intro.m3u8",
            "duration": "0:32",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Welcome to the course! In this introductory module, you'll get a glimpse of what's in store. We'll outline the course structure, set expectations, and highlight the outcomes you can anticipate upon completion."
          },
          {
            "title": "Expectations & Outcomes",
            "video": "/htmlcourse/CourseOutcomes&Scope.m3u8",
            "duration": "1:21",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Understand the goals of this course and what you'll gain by the end. We'll discuss the skills you'll acquire, the knowledge you'll gain, and how it will benefit you in the realm of web development and networking."
          },
          {
            "title": "Web Development & Scopes",
            "video": "/htmlcourse/WebDevelopment&Scopes.m3u8",
            "duration": "8:54",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the vast landscape of web development careers. Learn about the diverse scopes and job opportunities available in the industry, providing you with insights to shape your career path."
          },
          {
            "title": "Frontend Backend Architecture",
            "video": "/htmlcourse/FrontendBackendArchitecture.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Delve into the intricacies of frontend and backend architecture. Understand how these components work together to create seamless and responsive web applications, laying the foundation for your development journey."
          },
          {
            "title": "Database",
            "video": "/htmlcourse/database.m3u8",
            "duration": "1:07",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Uncover the importance of databases in web development. Learn what are the types of database available and the free cloud services providing free database for developers."
          },
          {
            "title": "IP & Types",
            "video": "/htmlcourse/ip internal & external.m3u8",
            "duration": "9:35",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Navigate the world of Internet Protocol (IP) addresses. Gain a comprehensive understanding of IP types and their significance in the networking landscape."
          },
          {
            "title": "IPv4 vs IPv6",
            "video": "/htmlcourse/ipv4 vs ipv6.m3u8",
            "duration": "7:12",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Compare IPv4 and IPv6, the two versions of the Internet Protocol. Understand the differences and advancements that IPv6 brings to address the limitations of IPv4."
          },
          {
            "title": "Static vs Dynamic IP",
            "video": "/htmlcourse/static_vs_dynamic_ip.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the distinction between static and dynamic IP addresses. Learn how each type is assigned and its impact on network configurations."
          },
          {
            "title": "Quiz 1",
            "quiz": true,
            "locked": false,
            "completed": false,
            "questions": [
              {
                "question": "What does \"frontend\" refer to in web development?",
                "options": [
                  "The part of a website users interact with",
                  "The server-side logic of a website",
                  "The database management system",
                  "The network infrastructure"
                ],
                "questionId": 100
              },
              {
                "question": "What is the primary role of \"backend\" in web development?",
                "options": [
                  "Managing the user interface",
                  "Handling server-side logic and databases",
                  "Designing responsive layouts",
                  "Implementing frontend styles"
                ],
                "questionId": 101
              },
              {
                "question": "What does \"IP\" stand for in networking?",
                "options": [
                  "Internet Provider",
                  "Internet Protocol",
                  "Information Processing",
                  "Interface Port"
                ],
                "questionId": 102
              },
              {
                "question": " What is the total range of each octet in an IPv4 address?",
                "options": [
                  "0-100",
                  "0-127",
                  "0-255",
                  "0-64"
                ],
                "questionId": 103
              }
            ]
          },
          {
            "title": "DNS",
            "video": "/htmlcourse/dns.m3u8",
            "duration": "10:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into the Domain Name System (DNS) and unravel the process of translating domain names to IP addresses. Explore the role DNS plays in making web browsing seamless."
          },
          {
            "title": "What is API?",
            "video": "/htmlcourse/api.m3u8",
            "duration": "3:12",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Application Programming Interfaces (APIs). Understand their significance in web development, facilitating communication between different software systems."
          },
          {
            "title": "What is HTML",
            "video": "/htmlcourse/what_is_html.m3u8",
            "duration": "2:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Begin your journey into the core of web development with HTML. Learn the basics of structuring web content and creating the foundation for interactive websites."
          },
          {
            "title": "HTML Page Structure",
            "video": "/htmlcourse/HTML_page_structure.m3u8",
            "duration": "3:33",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the art of organizing your web pages. Explore HTML tags that define the structure of a webpage, providing a solid foundation for your coding endeavors."
          },
          {
            "title": "Quiz 2",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the primary function of DNS in web development?",
                "options": [
                  "To design responsive user interfaces",
                  "To translate domain names to IP addresses",
                  "To manage server-side logic",
                  "To encrypt website data"
                ],
                "questionId": 104
              },
              {
                "question": "What does 'API' stand for in web development?",
                "options": [
                  "Advanced Programming Interface",
                  "Application Programming Interface",
                  "Automated Processing Interface",
                  "Advanced Protocol Integration"
                ],
                "questionId": 105
              },
              {
                "question": "What is the main markup language used for creating web pages??",
                "options": [
                  "XML",
                  "XAMPP",
                  "HTML",
                  "CSS"
                ],
                "questionId": 106
              },
              {
                "question": "What does 'HTML' stand for?",
                "options": [
                  "Hyper Transfer Markup Language",
                  "High-Level Text Management Language",
                  "Hyperlink and Text Management Language",
                  "HyperText Markup Language"
                ],
                "questionId": 107
              }
            ]
          },
          {
            "title": "Text tags",
            "video": "/htmlcourse/text_tags.m3u8",
            "duration": "18:55",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore the world of text manipulation in HTML. Discover tags that enhance the presentation of textual content on your web pages."
          },
          {
            "title": "List tags",
            "video": "/htmlcourse/list_tags.m3u8",
            "duration": "5:29",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore HTML's list tags to efficiently structure information. Learn how to create ordered and unordered lists for better content organization."
          },
          {
            "title": "Anchor tag",
            "video": "/htmlcourse/Anchor_tag.m3u8",
            "duration": "7:53",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unlock the power of hyperlinking with the anchor tag. Understand how to connect different pages and resources within your website."
          },
          {
            "title": "Image tag",
            "video": "/htmlcourse/image_tag.m3u8",
            "duration": "6:48",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Bring visual appeal to your web pages with the image tag. Learn how to integrate images seamlessly into your HTML content."
          },
          {
            "title": "Audio & video tag",
            "video": "/htmlcourse/audio_and_video_tag.m3u8",
            "duration": "7:56",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user engagement with multimedia elements. Explore the audio and video tags to incorporate media seamlessly into your web projects."
          },
          {
            "title": "iframe & embed tag",
            "video": "/htmlcourse/iframe_and_embed_tag.m3u8",
            "duration": "7:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Harness the capabilities of iframe and embed tags. Understand how these tags enable the integration of external content within your web pages."
          },
          {
            "title": "Div tag",
            "video": "/htmlcourse/div_tag.m3u8",
            "duration": "3:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the versatile div tag. Learn how it acts as a container, allowing you to structure and style your HTML content effectively."
          },
          {
            "title": "Input tags",
            "video": "/htmlcourse/input_tag.m3u8",
            "duration": "14:01",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into user interaction with HTML input tags. Explore various input types and understand how they enable user data input."
          },
          {
            "title": "Button tag",
            "video": "/htmlcourse/button_tag.m3u8",
            "duration": "1:43",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user experience with interactive buttons. Learn the ins and outs of the button tag and its various applications."
          },
          {
            "title": "Form part 1",
            "video": "/htmlcourse/form_tag_1.m3u8",
            "duration": "9:09",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embark on the journey of web forms. In part one, explore the essential elements that make up a form, setting the stage for user data collection."
          },
          {
            "title": "Form part 2",
            "video": "/htmlcourse/form_tag_2.m3u8",
            "duration": "8:00",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Delve deeper into the world of web forms. In part two, learn about form validation, submission methods, and enhance the functionality of your forms."
          },
          {
            "title": "Table tag",
            "video": "/htmlcourse/table_tag.m3u8",
            "duration": "4:42",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Uncover the power of HTML tables. Learn how to structure and display data in a tabular format for improved readability."
          },
          {
            "title": "Semantic HTML - 1",
            "video": "/htmlcourse/semantic_html_1.m3u8",
            "duration": "5:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embrace semantic HTML for enhanced accessibility and SEO. In part one, understand how semantic tags contribute to the meaning and structure of your content."
          },
          {
            "title": "Semantic HTML - 2",
            "video": "/htmlcourse/semantic_html_2.m3u8",
            "duration": "2:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your journey into semantic HTML. In part two, explore additional tags that enrich the semantics of your web pages."
          },
          {
            "title": "Web Crawler",
            "video": "/htmlcourse/web_crawler.m3u8",
            "duration": "3:40",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Understand how websites are ranked to top by web crawling. Understand the fundamentals of how search engines navigate and index content across the vast web."
          },
          {
            "title": "Quiz 3",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the purpose of 'Text tags' in HTML?",
                "options": [
                  "To create lists of items",
                  "To structure webpage content",
                  "To manipulate text formatting",
                  "To embed multimedia elements"
                ],
                "questionId": 108
              },
              {
                "question": "Which HTML tags are used for creating ordered and unordered lists?",
                "options": [
                  "<ol> and <ul>",
                  "<ul> and <li>",
                  "<list> and <item>",
                  "<order> and <item>"
                ],
                "questionId": 109
              },
              {
                "question": "What does the 'Anchor tag' (<a>) primarily facilitate in HTML?",
                "options": [
                  "Embedding images",
                  "Creating hyperlinks",
                  "Styling webpage elements",
                  "Inserting audio content"
                ],
                "questionId": 110
              },
              {
                "question": "What does the term 'Web Crawler' refer to in the context of HTML?",
                "options": [
                  "A spider-like creature",
                  "A tool for organizing files",
                  "A script for automating tasks",
                  "A program for navigating and indexing web content"
                ],
                "questionId": 111
              }
            ]
          },
          {
            "title": "More HTML tags",
            "video": "/htmlcourse/more_html_tags.m3u8",
            "duration": "1:39",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Expand your HTML toolkit with additional tags. Discover tags that cater to specific needs, enhancing the richness of your web pages."
          },
          {
            "title": "Project 1 - 1",
            "video": "/htmlcourse/project_1_1.m3u8",
            "duration": "7:38",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Apply your newfound HTML skills in a practical project. In part one, embark on a hands-on project to where we build a small FAQ page by using semantic HTML tags and using font awesome icons."
          },
          {
            "title": "Project 1 - 2",
            "video": "/htmlcourse/project_1_2.m3u8",
            "duration": "8:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your project journey in part two. Apply advanced HTML concepts and solidify your skills through a comprehensive project that showcases your abilities."
          },
          {
            "title": "Project 2",
            "video": "/htmlcourse/project_2.m3u8",
            "duration": "9:05",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Level up with an in-depth project. Demonstrate your proficiency in HTML as you undertake a larger-scale project, integrating various elements learned throughout the course."
          },
          {
            "title": "Web Hosting",
            "video": "/htmlcourse/web_hosting.m3u8",
            "duration": "6:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unravel the mysteries of web hosting. Learn how to take your web projects live by exploring different hosting options and understanding the basics of site configurations."
          },
          {
            "title": "CSS",
            "video": "/htmlcourse/intro_to_css.m3u8",
            "duration": "8:22",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Transition seamlessly from HTML to CSS. In this module, delve into the world of Cascading Style Sheets to add style and visual appeal to your web pages."
          },
          {
            "title": "HTML and Project Quiz",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "In 'Project 1 - 1', what HTML semantic tags were primarily used for creating a FAQ page?",
                "options": [
                  "<div> and <span>",
                  "<details> and <summary>",
                  "<ul> and <li>",
                  "<section> and <article>"
                ],
                "questionId": 112
              },
              {
                "question": "In 'Project 1 - 2', how did you make an image float using HTML?",
                "options": [
                  "Applied 'float' property in CSS",
                  "Used 'position: absolute'",
                  "Set 'display: inline-block'",
                  "Inserted a 'float' tag around the image"
                ],
                "questionId": 113
              },
              {
                "question": "What was the focus of 'Project 2' in your HTML course?",
                "options": [
                  "Creating an FAQ page",
                  "Designing a personal portfolio",
                  "Developing a basic app documentation",
                  "Implementing a chat application"
                ],
                "questionId": 114
              },
              {
                "question": "What is web hosting in the context of web development?",
                "options": [
                  "A service that allows individuals and organizations to make their websites accessible via the World Wide Web",
                  "A method of creating dynamic web pages",
                  "A technique for optimizing website performance",
                  "A module covered in the CSS section"
                ],
                "questionId": 115
              }
            ]
          },
          {
            "title": "Wrap up",
            "video": "/htmlcourse/wrap_up.m3u8",
            "duration": "2:07",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Congratulations on completing the course! In this final module, recap your journey, reflect on your accomplishments, and gain insights into the next steps in your web development adventure."
          }
        ],
        "language": "Tamil",
        "requirements": [
          "Text editor for writing HTML code",
          "Web Browser to view the output of HTML code"
        ],
        "author": "N.U.Thejas hari",
        "authorInsta": "https://www.instagram.com/nuthejashari/",
        "meetingLink": "",
        "whatsappGroup": "",
        "recordedVideo": "",
        "courseId": "101110",
        "locked": false,
        "videos": "35",
        "projects": "2",
        "duration": "4 Hours",
        "paid": "",
        "cancellable": false,
        "createdAt": "2024-01-01T06:43:50.699Z",
        "updatedAt": "2024-01-01T06:43:50.699Z",
        "__v": 0,
        "completed": false,
        "enrolledOn": "2024-01-26T23:31:09.136Z",
        "certificate": "",
        "name": "Parthi yt10k",
        "userId": "65b440a11f85ed725c2dcdc4",
        "progress": 0,
        "allNotes": []
      }
    ],
    "createdAt": "2024-01-26T23:30:41.962Z",
    "updatedAt": "2024-01-26T23:32:12.043Z",
    "__v": 0
  },
  {
    "_id": "65b4aefb722b0e93f1ce5df1",
    "name": "Lachu Lax",
    "email": "lachulax34@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65c4ec315a6594a5ea09b47f",
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-27T07:21:31.328Z",
    "updatedAt": "2024-02-08T17:18:57.062Z",
    "__v": 0
  },
  {
    "_id": "65b4e083554c3e12b21c094f",
    "name": "KARAN S",
    "email": "skaran2002@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b024e37df1619b5bfaef84"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-27T10:52:51.750Z",
    "updatedAt": "2024-01-27T10:53:08.736Z",
    "__v": 0
  },
  {
    "_id": "65b4e32b0b686a37688f43f9",
    "name": "Amarnath S M",
    "email": "amaramarnath447@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b4bd00ed9d87145d75ebe2"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-27T11:04:11.271Z",
    "updatedAt": "2024-01-27T11:05:03.114Z",
    "__v": 0
  },
  {
    "_id": "65b513ff5899ec34300a6075",
    "name": "Whitephenom",
    "email": "whitephenom005@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-27T14:32:31.066Z",
    "updatedAt": "2024-01-27T14:32:31.066Z",
    "__v": 0
  },
  {
    "_id": "65ba8c5583e4912225521424",
    "name": "VS creation",
    "email": "vishalm2004smart@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b4bd00ed9d87145d75ebe2"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-01-31T18:07:17.879Z",
    "updatedAt": "2024-01-31T18:07:27.413Z",
    "__v": 0
  },
  {
    "_id": "65baf7061854227203d13d58",
    "name": "C DAYALAN",
    "email": "dayalandob21012004@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b4bd00ed9d87145d75ebe2"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-02-01T01:42:30.401Z",
    "updatedAt": "2024-02-01T01:42:41.832Z",
    "__v": 0
  },
  {
    "_id": "65bb2cc746fec6a3a9fab460",
    "name": "VISHNUPRIYA UNNIKRISHNAN",
    "email": "22msrdf026@jainuniversity.ac.in",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Novice",
    "registeredWorkshops": [
      "65b4bd00ed9d87145d75ebe2"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-02-01T05:31:51.153Z",
    "updatedAt": "2024-02-01T05:32:01.724Z",
    "__v": 0
  },
  {
    "_id": "65bb32ef9a8bb7005a30b633",
    "name": "Anjaly",
    "email": "anjaly1559@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Novice",
    "registeredWorkshops": [],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-02-01T05:58:07.093Z",
    "updatedAt": "2024-02-01T05:58:07.093Z",
    "__v": 0
  },
  {
    "_id": "65bbc5e3412e596b2f89d9fe",
    "name": "Raghul",
    "email": "raghulsoundararajan@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Novice",
    "registeredWorkshops": [
      "65b4bd00ed9d87145d75ebe2"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-02-01T16:25:07.470Z",
    "updatedAt": "2024-02-01T16:25:23.340Z",
    "__v": 0
  },
  {
    "_id": "65bdaea3341b9281a47d6b8c",
    "name": "G.S visnudev",
    "email": "gsvisnudev@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b4bd00ed9d87145d75ebe2"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-02-03T03:10:27.429Z",
    "updatedAt": "2024-02-03T03:10:48.570Z",
    "__v": 0
  },
  {
    "_id": "65bdf27f378b925d9343c23c",
    "name": "Dhamo Dharan",
    "email": "dhamo4672@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Intermediate",
    "registeredWorkshops": [
      "65b4bd00ed9d87145d75ebe2"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-02-03T07:59:59.456Z",
    "updatedAt": "2024-02-03T08:00:10.889Z",
    "__v": 0
  },
  {
    "_id": "65be2af2f6974de0f148bf43",
    "name": "KIRUTHICK RAJ BJ",
    "email": "kiruthickrajbj@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Novice",
    "registeredWorkshops": [
      "65b4bd00ed9d87145d75ebe2"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-02-03T12:00:50.302Z",
    "updatedAt": "2024-02-03T12:01:05.752Z",
    "__v": 0
  },
  {
    "_id": "65c1f756416d43d5bd0d3b0f",
    "name": "HIMESHWARAN E",
    "email": "himeshwaran03@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65b4bd00ed9d87145d75ebe2"
    ],
    "enrolledCoursesId": [],
    "enrolledCoursesData": [],
    "createdAt": "2024-02-06T09:09:42.676Z",
    "updatedAt": "2024-02-06T09:10:05.592Z",
    "__v": 0
  },
  {
    "_id": "65c1f7a3416d43d5bd0d3b16",
    "name": "Abiram #phoenix",
    "email": "freefiregamingyt718@gmail.com",
    "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
    "level": "Beginner",
    "registeredWorkshops": [
      "65c4ec315a6594a5ea09b47f",
      "65b4bd00ed9d87145d75ebe2"
    ],
    "enrolledCoursesId": [
      "101110"
    ],
    "enrolledCoursesData": [
      {
        "_id": "65925f26f5f0ffa3b0e38586",
        "title": "Basics of Networking and HTML Beginner to Advanced Course",
        "description": "Learn web development fundamentals, covering frontend, backend, and database structures. Explore client-server dynamics, APIs, various IP types, DNS workings, and HTML essentials with an introduction to CSS for crafting interactive websites",
        "image": "/html.png",
        "content": [
          {
            "title": "Course Introduction",
            "video": "/htmlcourse/intro.m3u8",
            "duration": "0:32",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Welcome to the course! In this introductory module, you'll get a glimpse of what's in store. We'll outline the course structure, set expectations, and highlight the outcomes you can anticipate upon completion."
          },
          {
            "title": "Expectations & Outcomes",
            "video": "/htmlcourse/CourseOutcomes&Scope.m3u8",
            "duration": "1:21",
            "locked": false,
            "completed": true,
            "notes": [],
            "description": "Understand the goals of this course and what you'll gain by the end. We'll discuss the skills you'll acquire, the knowledge you'll gain, and how it will benefit you in the realm of web development and networking."
          },
          {
            "title": "Web Development & Scopes",
            "video": "/htmlcourse/WebDevelopment&Scopes.m3u8",
            "duration": "8:54",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the vast landscape of web development careers. Learn about the diverse scopes and job opportunities available in the industry, providing you with insights to shape your career path."
          },
          {
            "title": "Frontend Backend Architecture",
            "video": "/htmlcourse/FrontendBackendArchitecture.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Delve into the intricacies of frontend and backend architecture. Understand how these components work together to create seamless and responsive web applications, laying the foundation for your development journey."
          },
          {
            "title": "Database",
            "video": "/htmlcourse/database.m3u8",
            "duration": "1:07",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Uncover the importance of databases in web development. Learn what are the types of database available and the free cloud services providing free database for developers."
          },
          {
            "title": "IP & Types",
            "video": "/htmlcourse/ip internal & external.m3u8",
            "duration": "9:35",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Navigate the world of Internet Protocol (IP) addresses. Gain a comprehensive understanding of IP types and their significance in the networking landscape."
          },
          {
            "title": "IPv4 vs IPv6",
            "video": "/htmlcourse/ipv4 vs ipv6.m3u8",
            "duration": "7:12",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Compare IPv4 and IPv6, the two versions of the Internet Protocol. Understand the differences and advancements that IPv6 brings to address the limitations of IPv4."
          },
          {
            "title": "Static vs Dynamic IP",
            "video": "/htmlcourse/static_vs_dynamic_ip.m3u8",
            "duration": "7:36",
            "locked": false,
            "completed": false,
            "notes": [],
            "description": "Explore the distinction between static and dynamic IP addresses. Learn how each type is assigned and its impact on network configurations."
          },
          {
            "title": "Quiz 1",
            "quiz": true,
            "locked": false,
            "completed": false,
            "questions": [
              {
                "question": "What does \"frontend\" refer to in web development?",
                "options": [
                  "The part of a website users interact with",
                  "The server-side logic of a website",
                  "The database management system",
                  "The network infrastructure"
                ],
                "questionId": 100
              },
              {
                "question": "What is the primary role of \"backend\" in web development?",
                "options": [
                  "Managing the user interface",
                  "Handling server-side logic and databases",
                  "Designing responsive layouts",
                  "Implementing frontend styles"
                ],
                "questionId": 101
              },
              {
                "question": "What does \"IP\" stand for in networking?",
                "options": [
                  "Internet Provider",
                  "Internet Protocol",
                  "Information Processing",
                  "Interface Port"
                ],
                "questionId": 102
              },
              {
                "question": " What is the total range of each octet in an IPv4 address?",
                "options": [
                  "0-100",
                  "0-127",
                  "0-255",
                  "0-64"
                ],
                "questionId": 103
              }
            ]
          },
          {
            "title": "DNS",
            "video": "/htmlcourse/dns.m3u8",
            "duration": "10:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into the Domain Name System (DNS) and unravel the process of translating domain names to IP addresses. Explore the role DNS plays in making web browsing seamless."
          },
          {
            "title": "What is API?",
            "video": "/htmlcourse/api.m3u8",
            "duration": "3:12",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Application Programming Interfaces (APIs). Understand their significance in web development, facilitating communication between different software systems."
          },
          {
            "title": "What is HTML",
            "video": "/htmlcourse/what_is_html.m3u8",
            "duration": "2:11",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Begin your journey into the core of web development with HTML. Learn the basics of structuring web content and creating the foundation for interactive websites."
          },
          {
            "title": "HTML Page Structure",
            "video": "/htmlcourse/HTML_page_structure.m3u8",
            "duration": "3:33",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the art of organizing your web pages. Explore HTML tags that define the structure of a webpage, providing a solid foundation for your coding endeavors."
          },
          {
            "title": "Quiz 2",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the primary function of DNS in web development?",
                "options": [
                  "To design responsive user interfaces",
                  "To translate domain names to IP addresses",
                  "To manage server-side logic",
                  "To encrypt website data"
                ],
                "questionId": 104
              },
              {
                "question": "What does 'API' stand for in web development?",
                "options": [
                  "Advanced Programming Interface",
                  "Application Programming Interface",
                  "Automated Processing Interface",
                  "Advanced Protocol Integration"
                ],
                "questionId": 105
              },
              {
                "question": "What is the main markup language used for creating web pages??",
                "options": [
                  "XML",
                  "XAMPP",
                  "HTML",
                  "CSS"
                ],
                "questionId": 106
              },
              {
                "question": "What does 'HTML' stand for?",
                "options": [
                  "Hyper Transfer Markup Language",
                  "High-Level Text Management Language",
                  "Hyperlink and Text Management Language",
                  "HyperText Markup Language"
                ],
                "questionId": 107
              }
            ]
          },
          {
            "title": "Text tags",
            "video": "/htmlcourse/text_tags.m3u8",
            "duration": "18:55",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore the world of text manipulation in HTML. Discover tags that enhance the presentation of textual content on your web pages."
          },
          {
            "title": "List tags",
            "video": "/htmlcourse/list_tags.m3u8",
            "duration": "5:29",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Explore HTML's list tags to efficiently structure information. Learn how to create ordered and unordered lists for better content organization."
          },
          {
            "title": "Anchor tag",
            "video": "/htmlcourse/Anchor_tag.m3u8",
            "duration": "7:53",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unlock the power of hyperlinking with the anchor tag. Understand how to connect different pages and resources within your website."
          },
          {
            "title": "Image tag",
            "video": "/htmlcourse/image_tag.m3u8",
            "duration": "6:48",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Bring visual appeal to your web pages with the image tag. Learn how to integrate images seamlessly into your HTML content."
          },
          {
            "title": "Audio & video tag",
            "video": "/htmlcourse/audio_and_video_tag.m3u8",
            "duration": "7:56",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user engagement with multimedia elements. Explore the audio and video tags to incorporate media seamlessly into your web projects."
          },
          {
            "title": "iframe & embed tag",
            "video": "/htmlcourse/iframe_and_embed_tag.m3u8",
            "duration": "7:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Harness the capabilities of iframe and embed tags. Understand how these tags enable the integration of external content within your web pages."
          },
          {
            "title": "Div tag",
            "video": "/htmlcourse/div_tag.m3u8",
            "duration": "3:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Master the versatile div tag. Learn how it acts as a container, allowing you to structure and style your HTML content effectively."
          },
          {
            "title": "Input tags",
            "video": "/htmlcourse/input_tag.m3u8",
            "duration": "14:01",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Dive into user interaction with HTML input tags. Explore various input types and understand how they enable user data input."
          },
          {
            "title": "Button tag",
            "video": "/htmlcourse/button_tag.m3u8",
            "duration": "1:43",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Elevate user experience with interactive buttons. Learn the ins and outs of the button tag and its various applications."
          },
          {
            "title": "Form part 1",
            "video": "/htmlcourse/form_tag_1.m3u8",
            "duration": "9:09",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embark on the journey of web forms. In part one, explore the essential elements that make up a form, setting the stage for user data collection."
          },
          {
            "title": "Form part 2",
            "video": "/htmlcourse/form_tag_2.m3u8",
            "duration": "8:00",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Delve deeper into the world of web forms. In part two, learn about form validation, submission methods, and enhance the functionality of your forms."
          },
          {
            "title": "Table tag",
            "video": "/htmlcourse/table_tag.m3u8",
            "duration": "4:42",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Uncover the power of HTML tables. Learn how to structure and display data in a tabular format for improved readability."
          },
          {
            "title": "Semantic HTML - 1",
            "video": "/htmlcourse/semantic_html_1.m3u8",
            "duration": "5:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Embrace semantic HTML for enhanced accessibility and SEO. In part one, understand how semantic tags contribute to the meaning and structure of your content."
          },
          {
            "title": "Semantic HTML - 2",
            "video": "/htmlcourse/semantic_html_2.m3u8",
            "duration": "2:13",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your journey into semantic HTML. In part two, explore additional tags that enrich the semantics of your web pages."
          },
          {
            "title": "Web Crawler",
            "video": "/htmlcourse/web_crawler.m3u8",
            "duration": "3:40",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Understand how websites are ranked to top by web crawling. Understand the fundamentals of how search engines navigate and index content across the vast web."
          },
          {
            "title": "Quiz 3",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "What is the purpose of 'Text tags' in HTML?",
                "options": [
                  "To create lists of items",
                  "To structure webpage content",
                  "To manipulate text formatting",
                  "To embed multimedia elements"
                ],
                "questionId": 108
              },
              {
                "question": "Which HTML tags are used for creating ordered and unordered lists?",
                "options": [
                  "<ol> and <ul>",
                  "<ul> and <li>",
                  "<list> and <item>",
                  "<order> and <item>"
                ],
                "questionId": 109
              },
              {
                "question": "What does the 'Anchor tag' (<a>) primarily facilitate in HTML?",
                "options": [
                  "Embedding images",
                  "Creating hyperlinks",
                  "Styling webpage elements",
                  "Inserting audio content"
                ],
                "questionId": 110
              },
              {
                "question": "What does the term 'Web Crawler' refer to in the context of HTML?",
                "options": [
                  "A spider-like creature",
                  "A tool for organizing files",
                  "A script for automating tasks",
                  "A program for navigating and indexing web content"
                ],
                "questionId": 111
              }
            ]
          },
          {
            "title": "More HTML tags",
            "video": "/htmlcourse/more_html_tags.m3u8",
            "duration": "1:39",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Expand your HTML toolkit with additional tags. Discover tags that cater to specific needs, enhancing the richness of your web pages."
          },
          {
            "title": "Project 1 - 1",
            "video": "/htmlcourse/project_1_1.m3u8",
            "duration": "7:38",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Apply your newfound HTML skills in a practical project. In part one, embark on a hands-on project to where we build a small FAQ page by using semantic HTML tags and using font awesome icons."
          },
          {
            "title": "Project 1 - 2",
            "video": "/htmlcourse/project_1_2.m3u8",
            "duration": "8:47",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Continue your project journey in part two. Apply advanced HTML concepts and solidify your skills through a comprehensive project that showcases your abilities."
          },
          {
            "title": "Project 2",
            "video": "/htmlcourse/project_2.m3u8",
            "duration": "9:05",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Level up with an in-depth project. Demonstrate your proficiency in HTML as you undertake a larger-scale project, integrating various elements learned throughout the course."
          },
          {
            "title": "Web Hosting",
            "video": "/htmlcourse/web_hosting.m3u8",
            "duration": "6:26",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Unravel the mysteries of web hosting. Learn how to take your web projects live by exploring different hosting options and understanding the basics of site configurations."
          },
          {
            "title": "CSS",
            "video": "/htmlcourse/intro_to_css.m3u8",
            "duration": "8:22",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Transition seamlessly from HTML to CSS. In this module, delve into the world of Cascading Style Sheets to add style and visual appeal to your web pages."
          },
          {
            "title": "HTML and Project Quiz",
            "quiz": true,
            "locked": true,
            "completed": false,
            "questions": [
              {
                "question": "In 'Project 1 - 1', what HTML semantic tags were primarily used for creating a FAQ page?",
                "options": [
                  "<div> and <span>",
                  "<details> and <summary>",
                  "<ul> and <li>",
                  "<section> and <article>"
                ],
                "questionId": 112
              },
              {
                "question": "In 'Project 1 - 2', how did you make an image float using HTML?",
                "options": [
                  "Applied 'float' property in CSS",
                  "Used 'position: absolute'",
                  "Set 'display: inline-block'",
                  "Inserted a 'float' tag around the image"
                ],
                "questionId": 113
              },
              {
                "question": "What was the focus of 'Project 2' in your HTML course?",
                "options": [
                  "Creating an FAQ page",
                  "Designing a personal portfolio",
                  "Developing a basic app documentation",
                  "Implementing a chat application"
                ],
                "questionId": 114
              },
              {
                "question": "What is web hosting in the context of web development?",
                "options": [
                  "A service that allows individuals and organizations to make their websites accessible via the World Wide Web",
                  "A method of creating dynamic web pages",
                  "A technique for optimizing website performance",
                  "A module covered in the CSS section"
                ],
                "questionId": 115
              }
            ]
          },
          {
            "title": "Wrap up",
            "video": "/htmlcourse/wrap_up.m3u8",
            "duration": "2:07",
            "locked": true,
            "completed": false,
            "notes": [],
            "description": "Congratulations on completing the course! In this final module, recap your journey, reflect on your accomplishments, and gain insights into the next steps in your web development adventure."
          }
        ],
        "language": "Tamil",
        "requirements": [
          "Text editor for writing HTML code",
          "Web Browser to view the output of HTML code"
        ],
        "author": "N.U.Thejas hari",
        "authorInsta": "https://www.instagram.com/nuthejashari/",
        "meetingLink": "",
        "whatsappGroup": "",
        "recordedVideo": "",
        "courseId": "101110",
        "locked": false,
        "videos": "35",
        "projects": "2",
        "duration": "4 Hours",
        "paid": "",
        "cancellable": false,
        "createdAt": "2024-01-01T06:43:50.699Z",
        "updatedAt": "2024-01-01T06:43:50.699Z",
        "__v": 0,
        "completed": false,
        "enrolledOn": "2024-02-06T09:15:14.613Z",
        "certificate": "",
        "name": "Abiram #phoenix",
        "userId": "65c1f7a3416d43d5bd0d3b16",
        "progress": 0,
        "allNotes": []
      }
    ],
    "createdAt": "2024-02-06T09:10:59.139Z",
    "updatedAt": "2024-02-08T15:27:28.519Z",
    "__v": 0
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
      subject: `Grab your seat in the frontend interview preparation workshop`,
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
				    <img class="banner" src="https://ik.imagekit.io/d3kzbpbila/frontend-workshop_lnHOZ9iMx?updatedAt=1707412469036" alt="Workshop Banner">

				    <h1>New Workshop Reminder!</h1>

				    <p>Hello ${name},</p>

				    <p>We're excited to announce a new workshop that might interest you:</p>

				    <h2>Workshop Details:</h2>
				    <ul>
				      <li><strong>Title:</strong> Frontend Interview Preparation</li>
				      <li><strong>Date:</strong> 10th February 2024</li>
				      <li><strong>Time:</strong> 7:00 PM - 9:00 PM</li>
				    </ul>

				    <h3>Description:</h3>
				    <p>Are you gearing up for a frontend developer role and aiming to ace your interviews? Join us for an interactive workshop designed to sharpen your skills in HTML, CSS, and JavaScript – the foundational trio of frontend development.</p>

				    <p>Visit our platform to learn more and register for this workshop.</p>

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
	sendMail(temp[i].name,temp[i].email) 
	// console.log(temp[i].name,temp[i].email)
}


module.exports = app
