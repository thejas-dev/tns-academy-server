const content = [
  {
    title: 'Course Introduction',
    quality_video:{
    	'480':'csscourse/Intro-480.m3u8',
    	'720':'csscourse/Intro-720.m3u8',
    	'1080':'csscourse/Intro-1080.m3u8',
    	'1440':'csscourse/Intro-1440.m3u8',
    },
    duration: '0:52',
    locked:false,
    completed: false,
    notes:[],
    description: "Welcome to the course! In this introductory module, you'll get a glimpse of what's in store. We'll outline the course structure, set expectations, and highlight the outcomes you can anticipate upon completion.",
  },
  {
    title: 'What is CSS',
    quality_video:{
    	'480':'csscourse/Whatiscss-480.m3u8',
    	'720':'csscourse/Whatiscss-720.m3u8',
    	'1080':'csscourse/Whatiscss-1080.m3u8',
    	'1440':'csscourse/Whatiscss-1440.m3u8',
    },
    duration: '1:50',
    locked:false,
    completed: false,
    notes:[],
    description: "Dive into the core principles of Cascading Style Sheets (CSS) and unravel its crucial role in shaping the visual presentation of web pages. Understand the basics and importance of styling in modern web development.",
  },
  {
    title: 'Types of css (1)',
    quality_video:{
    	'480':'csscourse/3) Types of css - 1-480.m3u8',
    	'720':'csscourse/3) Types of css - 1-720.m3u8',
    	'1080':'csscourse/3) Types of css - 1-1080.m3u8',
    	'1440':'csscourse/3) Types of css - 1-1440.m3u8',
    },
    duration: '8:48',
    locked:false,
    completed: false,
    notes:[],
    description: "Explore the various types of CSS, starting with Inline, Internal, and External styles. Learn how to apply these styles effectively to create a well-organized and maintainable code structure.",
  },
  {
    title: 'Types of css (2)',
    quality_video:{
    	'480':'csscourse/4) Types of css - 2 - 480.m3u8',
    	'720':'csscourse/4) Types of css - 2 - 720.m3u8',
    	'1080':'csscourse/4) Types of css - 2 - 1080.m3u8',
    	'1440':'csscourse/4) Types of css - 2 - 1440.m3u8',
    },
    duration: '5:00',
    locked:false,
    completed: false,
    notes:[],
    description: 'Continue your journey through the types of CSS, delving into more advanced techniques and best practices. Gain insights into the intricacies of styling and how to optimize your stylesheet for efficient web design.',
  },
  {

    title: 'Types of css (3)',
    quality_video:{
    	'480':'csscourse/5) Types of css - 3 - 480.m3u8',
    	'720':'csscourse/5) Types of css - 3 - 720.m3u8',
    	'1080':'csscourse/5) Types of css - 3 - 1080.m3u8',
    	'1440':'csscourse/5) Types of css - 3 - 1440.m3u8',
    },
    duration: '2:02',
    locked:false,
    completed: false,
    notes:[],
    description: 'Delve deeper into the diverse landscape of CSS types, covering essential concepts that elevate your styling capabilities. Master the art of combining different CSS styles for comprehensive and dynamic web design.',
  },
  {
    title: 'Types of Selectors',
    quality_video:{
    	'480':'csscourse/6) Types of Selectors - 480.m3u8',
    	'720':'csscourse/6) Types of Selectors - 720.m3u8',
    	'1080':'csscourse/6) Types of Selectors - 1080.m3u8',
    	'1440':'csscourse/6) Types of Selectors - 1440.m3u8',
    },
    duration: '12:34',
    locked:false,
    completed: false,
    notes:[],
    description: 'Uncover the power of CSS selectors and their role in targeting specific HTML elements. Learn how to effectively use selectors to apply styles precisely, enhancing your ability to craft visually appealing and responsive layouts.',
  },
  {
    title: 'CSS Box Model',
    quality_video:{
    	'480':'csscourse/7) CSS Box Models - 480.m3u8',
    	'720':'csscourse/7) CSS Box Models - 780.m3u8',
    	'1080':'csscourse/7) CSS Box Models - 1080.m3u8',
    	'1440':'csscourse/7) CSS Box Models - 1440.m3u8',
    },
    duration: '13:32',
    locked:false,
    completed: false,
    notes:[],
    description: "Demystify the CSS Box Model, a fundamental concept governing the layout of elements. Grasp the intricacies of content, padding, border, and margin, laying the foundation for precise control over element positioning and spacing.",
  },
  {
    title: 'Text Styling',
    quality_video:{
    	'480':'csscourse/8) Text Styling - 480.m3u8',
    	'720':'csscourse/8) Text Styling - 70.m3u8',
    	'1080':'csscourse/8) Text Styling - 1080.m3u8',
    	'1440':'csscourse/8) Text Styling - 1440.m3u8',
    },
    duration: '11:39',
    locked:false,
    completed: false,
    notes:[],
    description: "Discover advanced techniques for styling text in CSS. From font properties to text decoration, explore a range of styling options to create visually engaging and readable content on your web pages.",
  },
  {
  	title: 'Quiz',
  	quiz:true,
	locked:false,
  	completed:false,
  	questions:[
	  	{
	  		question:'Which website is user for demonstrating the css usage in websites in what is css video?',
	  		options:[
	  			'Google',
	  			'Flipkart',
	  			'Amazon',
	  			'Indigo flights'
	  		],
	  		questionId:116
	  	},
	  	{
	  		question:'Which css selector is used to select all the elements in a webpage?',
	  		options:[
	  			'Star selector',
	  			'Element selector',
	  			'Class Selector',
	  			'ID Selector'
	  		],
	  		questionId:117
	  	},
	  	{
	  		question:'What is the order of priority for different types of CSS styling? (highest to lowest)',
	  		options:[
	  			'Internal, Inline, External',
	  			'External, Internal, Inline',
	  			'Inline, Internal, External',
	  			'External, Inline, Internal'
	  		],
	  		questionId:118
	  	},
	  	{
	  		question:'What is margin and padding?',
	  		options:[
	  			'Margin is the inner space in a box and padding is the outer space in a box',
	  			'Margin is the inner space in a box and padding is the inner space in a box',
	  			'Padding is the inner space in a box and margin is the outer space in a box',
	  			'Padding is the inner space in a box and margin is the inner space in a box'
	  		],
	  		questionId:119
	  	},
  	]
  },
  {
    title: 'Text Formatting',
    quality_video:{
    	'480':'csscourse/9) Text Formatting - 480.m3u8',
    	'720':'csscourse/9) Text Formatting - 720.m3u8',
    	'1080':'csscourse/9) Text Formatting - 1080.m3u8',
    	'1440':'csscourse/9) Text Formatting - 1440.m3u8',
    },
    duration: '7:48',
    locked:true,
    completed: false,
    notes:[],
    description: "Take your text formatting skills to the next level. Explore advanced CSS properties for text manipulation, allowing you to fine-tune the appearance of your content for a polished and professional look.",
  },
  {
    title: 'Background Properties',
    quality_video:{
    	'480':'csscourse/10) Background Properties - 480.m3u8',
    	'720':'csscourse/10) Background Properties - 720.m3u8',
    	'1080':'csscourse/10) Background Properties - 1080.m3u8',
    	'1440':'csscourse/10) Background Properties - 1440.m3u8',
    },
    duration: '10:56',
    locked:true,
    completed: false,
    notes:[],
    description: "Dive into the world of CSS background properties. Learn how to customize backgrounds with color, images, and more, adding depth and visual appeal to your web pages.",
  },
  {
    title: 'Using External Fonts',
    quality_video:{
    	'480':'csscourse/11) Using External Fonts - 480.m3u8',
    	'720':'csscourse/11) Using External Fonts - 720.m3u8',
    	'1080':'csscourse/11) Using External Fonts - 1080.m3u8',
    	'1440':'csscourse/11) Using External Fonts - 1440.m3u8',
    },
    duration: '8:35',
    locked:true,
    completed: false,
    notes:[],
    description: "Enhance your web typography by incorporating external fonts with CSS. Understand the nuances of font linking and embedding, elevating the visual aesthetics and readability of your website.",
  },
  {
    title: 'Control Background Opacity',
    quality_video:{
    	'480':'csscourse/12) Control Background Opacity - 480.m3u8',
    	'720':'csscourse/12) Control Background Opacity - 720.m3u8',
    	'1080':'csscourse/12) Control Background Opacity - 1080.m3u8',
    	'1440':'csscourse/12) Control Background Opacity - 1440.m3u8',
    },
    duration: '2:35',
    locked:true,
    completed: false,
    notes:[],
    description: "Master the art of controlling background opacity in CSS. Explore techniques to create visually stunning overlays and effects, adding a layer of sophistication to your web design.",
  },
  {
  "title": "Quiz - 2",
  "quiz": true,
  "locked": true,
  "completed": false,
  "questions": [
    {
      "question": "What is the syntax to not wrap a text on whitespace?",
      "options": [
        "whitespace:nowrap;",
        "white-space:no-wrap",
        "white-space:nowrap",
        "space:no-wrap"
      ],
      "questionId": 120
    },
    {
      "question": "What is the syntax to align a text to center?",
      "options": [
        "text-align:center",
        "textalign:center",
        "text-center:true",
        "textcenter:true"
      ],
      "questionId": 121
    },
    {
      "question": "What is the correct syntax to provide a background image?",
      "options": [
        "background-image:'image.png'",
        "backgroundimage:'image.png'",
        "background-image:url('image.png')",
        "background-image:img('image.png')"
      ],
      "questionId": 122
    },
    {
      "question": "What is the correct syntax for providing a font to a text in css?",
      "options": [
        "fontfamily:'Exo 2', sans-serif",
        "font-family:'Exo 2', sans-serif",
        "font:'Exo 2', sans-serif",
        "font-style:'Exo 2', sans-serif",
      ],
      "questionId": 123
    }
  	]
	},
  {
    title: 'Icons',
    quality_video:{
    	'480':'csscourse/13) Icons - 480.m3u8',
    	'720':'csscourse/13) Icons - 720.m3u8',
    	'1080':'csscourse/13) Icons - 1080.m3u8',
    	'1440':'csscourse/13) Icons - 1440.m3u8',
    },
    duration: '12:13',
    locked:true,
    completed: false,
    notes:[],
    description: "Integrate icons seamlessly into your web projects. Learn how to use CSS to incorporate scalable vector icons, enhancing both the aesthetic appeal and user experience of your website",
  },
  {
    title: 'Display',
    quality_video:{
    	'480':'csscourse/14) Display - 480.m3u8',
    	'720':'csscourse/14) Display - 720.m3u8',
    	'1080':'csscourse/14) Display - 1080.m3u8',
    	'1440':'csscourse/14) Display - 1440.m3u8',
    },
    duration: '12:02',
    locked:true,
    completed: false,
    notes:[],
    description: "Gain a comprehensive understanding of the CSS 'display' property. Explore various display values and their impact on layout, enabling you to create versatile and responsive designs.",
  },
  {
    title: 'CSS Positions',
    quality_video:{
    	'480':'csscourse/15) CSS Position - 480.m3u8',
    	'720':'csscourse/15) CSS Position - 720.m3u8',
    	'1080':'csscourse/15) CSS Position - 1080.m3u8',
    	'1440':'csscourse/15) CSS Position - 1440.m3u8',
    },
    duration: '17:03',
    locked:true,
    completed: false,
    notes:[],
    description: "Unlock the power of CSS positioning. Explore static, relative, absolute, and fixed positioning, mastering the art of precise element placement for a well-structured and visually appealing layout.",
  },
  {
    title: 'Float',
    quality_video:{
    	'480':'csscourse/16) Float - 480.m3u8',
    	'720':'csscourse/16) Float - 720.m3u8',
    	'1080':'csscourse/16) Float - 1080.m3u8',
    	'1440':'csscourse/16) Float - 1440.m3u8',
    },
    duration: '8:52',
    locked:true,
    completed: false,
    notes:[],
    description: "Delve into the CSS float property. Learn how to create fluid layouts and implement text wrapping, providing you with the tools to achieve sophisticated and responsive design structures.",
  },
  {
    title: 'Live Server',
    quality_video:{
    	'480':'csscourse/17) Live Server - 480.m3u8',
    	'720':'csscourse/17) Live Server - 720.m3u8',
    	'1080':'csscourse/17) Live Server - 1080.m3u8',
    	'1440':'csscourse/17) Live Server - 1440.m3u8',
    },
    duration: '6:06',
    locked:true,
    completed: false,
    notes:[],
    description: "Explore the benefits of using Live Server in Visual Studio Code. Discover how this extension enhances your web development workflow by providing a live preview and automatic updates as you code.",
  },
  {
    title: 'Flexbox',
    quality_video:{
    	'480':'csscourse/18) Flexbox - 480.m3u8',
    	'720':'csscourse/18) Flexbox - 720.m3u8',
    	'1080':'csscourse/18) Flexbox - 1080.m3u8',
    	'1440':'csscourse/18) Flexbox - 1440.m3u8',
    },
    duration: '20:00',
    locked:true,
    completed: false,
    notes:[],
    description: "Master the Flexbox layout model in CSS. Understand how Flexbox revolutionizes the way you structure and align elements, simplifying complex layouts and improving responsiveness.",
  },
  {
    title: 'Grid Containers - 1',
    quality_video:{
    	'480':'csscourse/19) Grid Containers - 1 - 480.m3u8',
    	'720':'csscourse/19) Grid Containers - 1 - 720.m3u8',
    	'1080':'csscourse/19) Grid Containers - 1 - 1080.m3u8',
    	'1440':'csscourse/19) Grid Containers - 1 - 1440.m3u8',
    },
    duration: '18:24',
    locked:true,
    completed: false,
    notes:[],
    description: "Embark on a journey into CSS Grid layout. Begin with the basics of creating grid containers and understanding the core principles that make CSS Grid a powerful tool for designing complex layouts.",
  },
  {
    title: 'Grid Containers - 2',
    quality_video:{
    	'480':'csscourse/20) Grid Containers - 2 - 480.m3u8',
    	'720':'csscourse/20) Grid Containers - 2 - 720.m3u8',
    	'1080':'csscourse/20) Grid Containers - 2 - 1080.m3u8',
    	'1440':'csscourse/20) Grid Containers - 2 - 1440.m3u8',
    },
    duration: '8:17',
    locked:true,
    completed: false,
    notes:[],
    description: "Continue your exploration of CSS Grid layout with advanced techniques. Dive into grid item placement, spanning, and alignment, empowering you to create intricate and responsive grid-based designs.",
  },
  {
    title: 'Grid Containers - 3',
    quality_video:{
    	'480':'csscourse/21) Grid Containers - 3 - 480.m3u8',
    	'720':'csscourse/21) Grid Containers - 3 - 720.m3u8',
    	'1080':'csscourse/21) Grid Containers - 3 - 1080.m3u8',
    	'1440':'csscourse/21) Grid Containers - 3 - 1440.m3u8',
    },
    duration: '4:18',
    locked:true,
    completed: false,
    notes:[],
    description: "Continue your exploration of CSS Grid layout with advanced techniques. Dive into grid item placement, spanning, and alignment, empowering you to create intricate and responsive grid-based designs.",
  },
  {
    title: 'Alignment Properties',
    quality_video:{
    	'480':'csscourse/22) Alignment Properties - 480.m3u8',
    	'720':'csscourse/22) Alignment Properties - 720.m3u8',
    	'1080':'csscourse/22) Alignment Properties - 1080.m3u8',
    	'1440':'csscourse/22) Alignment Properties - 1440.m3u8',
    },
    duration: '8:16',
    locked:true,
    completed: false,
    notes:[],
    description: "Uncover the secrets of CSS alignment properties. Explore 'justify-content,' 'align-items,' and 'align-self,' gaining precise control over the positioning and spacing of elements within your layouts.",
  },
  {
    title: 'Card Stacking - 1',
    quality_video:{
    	'480':'csscourse/23) Card Stacking - 1 - 480.m3u8',
    	'720':'csscourse/23) Card Stacking - 1 - 720.m3u8',
    	'1080':'csscourse/23) Card Stacking - 1 - 1080.m3u8',
    	'1440':'csscourse/23) Card Stacking - 1 - 1440.m3u8',
    },
    duration: '10:27',
    locked:true,
    completed: false,
    notes:[],
    description: "Embark on a practical journey with the Card Stacking project. In this part, learn the foundations of creating visually appealing card-based layouts, setting the stage for more complex design projects.",
  },
  {
    title: 'Card Stacking - 2',
    quality_video:{
    	'480':'csscourse/24) Card Stacking - 2 - 480.m3u8',
    	'720':'csscourse/24) Card Stacking - 2 - 720.m3u8',
    	'1080':'csscourse/24) Card Stacking - 2 - 1080.m3u8',
    	'1440':'csscourse/24) Card Stacking - 2 - 1440.m3u8',
    },
    duration: '9:47',
    locked:true,
    completed: false,
    notes:[],
    description: "Advance your card stacking skills with the second part of the project. Dive deeper into styling individual cards, refining your design techniques, and achieving a polished and cohesive card-based layout.",
  },
  {
    title: 'Card Stacking - 3',
    quality_video:{
    	'480':'csscourse/25) Card Stacking - 3 - 480.m3u8',
    	'720':'csscourse/25) Card Stacking - 3 - 720.m3u8',
    	'1080':'csscourse/25) Card Stacking - 3 - 1080.m3u8',
    	'1440':'csscourse/25) Card Stacking - 3 - 1440.m3u8',
    },
    duration: '9:54',
    locked:true,
    completed: false,
    notes:[],
    description: "Conclude the Card Stacking project with the final installment. Enhance your understanding of CSS styling by completing the design of a comprehensive card-based layout, showcasing your newfound skills.",
  },
  {
    title: 'Responsive Design - 1',
    quality_video:{
    	'480':'csscourse/26) Responsive Design - 1 - 480.m3u8',
    	'720':'csscourse/26) Responsive Design - 1 - 720.m3u8',
    	'1080':'csscourse/26) Responsive Design - 1 - 1080.m3u8',
    	'1440':'csscourse/26) Responsive Design - 1 - 1440.m3u8',
    },
    duration: '2:28',
    locked:true,
    completed: false,
    notes:[],
    description: "Explore the principles and techniques of responsive design in this video. Learn how to create web layouts that seamlessly adapt to various screen sizes, ensuring a consistent and user-friendly experience across devices. Dive into media queries and build a reponsive website",
  },
  {
    title: 'Responsive Design - 2',
    quality_video:{
    	'480':'csscourse/27) Responsive Design - 2 - 480.m3u8',
    	'720':'csscourse/27) Responsive Design - 2 - 720.m3u8',
    	'1080':'csscourse/27) Responsive Design - 2 - 1080.m3u8',
    	'1440':'csscourse/27) Responsive Design - 2 - 1440.m3u8',
    },
    duration: '8:29',
    locked:true,
    completed: false,
    notes:[],
    description: "Explore the principles and techniques of responsive design in this video. Learn how to create web layouts that seamlessly adapt to various screen sizes, ensuring a consistent and user-friendly experience across devices. Dive into media queries and build a reponsive website",
  },
  {
	  "title": "Quiz - 3",
	  "quiz": true,
	  "locked": true,
	  "completed": false,
	  "questions": [
	    {
	      "question": "What is the purpose of media queries in CSS?",
	      "options": [
	        "To create animations and transitions",
	        "To define the structure and layout of HTML elements",
	        "To apply styles based on the characteristics of the device or viewport",
	        "To manage server-side queries for data retrieval"
	      ],
	      "questionId": 124
	    },
	    {
	      "question": "What is the position style used in the Card Stack project for stacking the cards?",
	      "options": [
	        "position:relative",
	        "position:absolute",
	        "position:fixed",
	        "position:sticky"
	      ],
	      "questionId": 125
	    },
	    {
	      "question": "What is the use of Live Server in VS Code?",
	      "options": [
	        "To automatically update the code editor with live changes",
	        "To provide real-time collaboration features",
	        "To debug server-side code",
	        "To host a local development server with live reloading"
	      ],
	      "questionId": 126
	    },
	    {
	      "question": "What is the correct syntax to apply styles to an element using media queries for a screen width of 300px to 800px?",
	      "options": [
	        "@media screen and (min-width: 300px) and (max-width: 800px)",
	        "@media (min-width: 300px) and (max-width: 800px)",
	        "@media only screen and (min-width: 300px) and (max-width: 800px)",
	        "@media only screen and (min-width: 300px)"
	      ],
	      "questionId": 127
	    }
	  ]
	},
  {
    title: 'Print Style',
    quality_video:{
    	'480':'csscourse/28) Print Style - 480.m3u8',
    	'720':'csscourse/28) Print Style - 720.m3u8',
    	'1080':'csscourse/28) Print Style - 1080.m3u8',
    	'1440':'csscourse/28) Print Style - 1440.m3u8',
    },
    duration: '1:22',
    locked:true,
    completed: false,
    notes:[],
    description: "Expand your knowledge on styling elements specifically for taking print of your web page",
  },
  {
    title: 'Responsive Design - 3',
    quality_video:{
    	'480':'csscourse/29) Responsive Design - 3 - 480.m3u8',
    	'720':'csscourse/29) Responsive Design - 3 - 720.m3u8',
    	'1080':'csscourse/29) Responsive Design - 3 - 1080.m3u8',
    	'1440':'csscourse/29) Responsive Design - 3 - 1440.m3u8',
    },
    duration: '15:37',
    locked:true,
    completed: false,
    notes:[],
    description: "Explore the principles and techniques of responsive design in this video. Learn how to create web layouts that seamlessly adapt to various screen sizes, ensuring a consistent and user-friendly experience across devices. Dive into media queries and build a reponsive website",
  },
  {
    title: 'Responsive Design - 4',
    quality_video:{
    	'480':'csscourse/30) Responsive Design - 4 - 480.m3u8',
    	'720':'csscourse/30) Responsive Design - 4 - 720.m3u8',
    	'1080':'csscourse/30) Responsive Design - 4 - 1080.m3u8',
    	'1440':'csscourse/30) Responsive Design - 4 - 1440.m3u8',
    },
    duration: '13:55',
    locked:true,
    completed: false,
    notes:[],
    description: "Explore the principles and techniques of responsive design in this video. Learn how to create web layouts that seamlessly adapt to various screen sizes, ensuring a consistent and user-friendly experience across devices. Dive into media queries and build a reponsive website",
  },
  {
    title: 'Responsive Navbar - 1',
    quality_video:{
    	'480':'csscourse/31) Responsive Navbar - 1 - 480.m3u8',
    	'720':'csscourse/31) Responsive Navbar - 1 - 720.m3u8',
    	'1080':'csscourse/31) Responsive Navbar - 1 - 1080.m3u8',
    	'1440':'csscourse/31) Responsive Navbar - 1 - 1440.m3u8',
    },
    duration: '11:59',
    locked:true,
    completed: false,
    notes:[],
    description: "In this video we will be creating a responsive navbar project. Learn how to design and implement a navigation bar that adapts seamlessly to different screen sizes. Explore the use of media queries and flexbox to ensure your navigation menu remains user-friendly and visually appealing across various devices, providing an optimal user experience.",
  },
  {
    title: 'Responsive Navbar - 2',
    quality_video:{
    	'480':'csscourse/32) Responsive Navbar - 2 - 480.m3u8',
    	'720':'csscourse/32) Responsive Navbar - 2 - 720.m3u8',
    	'1080':'csscourse/32) Responsive Navbar - 2 - 1080.m3u8',
    	'1440':'csscourse/32) Responsive Navbar - 2 - 1440.m3u8',
    },
    duration: '8:23',
    locked:true,
    completed: false,
    notes:[],
    description: "In this video we will be creating a responsive navbar project. Learn how to design and implement a navigation bar that adapts seamlessly to different screen sizes. Explore the use of media queries and flexbox to ensure your navigation menu remains user-friendly and visually appealing across various devices, providing an optimal user experience.",
  },
  {
    title: 'Responsive Navbar - 3',
    quality_video:{
    	'480':'csscourse/33) Responsive Navbar - 3 - 480.m3u8',
    	'720':'csscourse/33) Responsive Navbar - 3 - 720.m3u8',
    	'1080':'csscourse/33) Responsive Navbar - 3 - 1080.m3u8',
    	'1440':'csscourse/33) Responsive Navbar - 3 - 1440.m3u8',
    },
    duration: '9:54',
    locked:true,
    completed: false,
    notes:[],
    description: "In this video we will be creating a responsive navbar project. Learn how to design and implement a navigation bar that adapts seamlessly to different screen sizes. Explore the use of media queries and flexbox to ensure your navigation menu remains user-friendly and visually appealing across various devices, providing an optimal user experience.",
  },
  {
    title: 'Responsive Navbar - 4',
    quality_video:{
    	'480':'csscourse/34) Responsive Navbar - 4 - 480.m3u8',
    	'720':'csscourse/34) Responsive Navbar - 4 - 720.m3u8',
    	'1080':'csscourse/34) Responsive Navbar - 4 - 1080.m3u8',
    	'1440':'csscourse/34) Responsive Navbar - 4 - 1440.m3u8',
    },
    duration: '12:20',
    locked:true,
    completed: false,
    notes:[],
    description: "In this video we will be creating a responsive navbar project. Learn how to design and implement a navigation bar that adapts seamlessly to different screen sizes. Explore the use of media queries and flexbox to ensure your navigation menu remains user-friendly and visually appealing across various devices, providing an optimal user experience.",
  },
  {
    title: 'Responsive Navbar - 5',
    quality_video:{
    	'480':'csscourse/35) Responsive Navbar - 5 - 480.m3u8',
    	'720':'csscourse/35) Responsive Navbar - 5 - 720.m3u8',
    	'1080':'csscourse/35) Responsive Navbar - 5 - 1080.m3u8',
    	'1440':'csscourse/35) Responsive Navbar - 5 - 1440.m3u8',
    },
    duration: '12:45',
    locked:true,
    completed: false,
    notes:[],
    description: "In this video we will be creating a responsive navbar project. Learn how to design and implement a navigation bar that adapts seamlessly to different screen sizes. Explore the use of media queries and flexbox to ensure your navigation menu remains user-friendly and visually appealing across various devices, providing an optimal user experience.",
  },
  {
	  "title": "Quiz - 4",
	  "quiz": true,
	  "locked": true,
	  "completed": false,
	  "questions": [
	    {
	      "question": "What is the syntax to style elements for print in media queries?",
	      "options": [
	        "@media print { /* styles go here */ }",
	        "@media screen { /* styles go here */ }",
	        "@media print-screen { /* styles go here */ }",
	        "@media print: { /* styles go here */ }"
	      ],
	      "questionId": 128
	    },
	    {
	      "question": "What is the use of overflow:hidden in CSS?",
	      "options": [
	        "It adds a hidden scroll bar to the element.",
	        "It hides the content that overflows the element's box.",
	        "It triggers a visible overflow effect.",
	        "It enlarges the element to fit its content."
	      ],
	      "questionId": 129
	    },
	    {
	      "question": "From where did we import the icons in the previous project?",
	      "options": [
	        "Material Icons",
	        "FontAwesome Icons",
	        "Bootstrap Icons",
	        "Ionicons"
	      ],
	      "questionId": 130
	    },
	    {
	      "question": "What is web hosting in the context of web development?",
	      "options": [
	        "A service that allows individuals and organizations to make their websites accessible via the World Wide Web",
	        "A method of creating dynamic web pages",
	        "A technique for optimizing website performance",
	        "A module covered in the CSS section"
	      ],
	      "questionId": 131
	    }
	  ]
	},
	{
    title: 'Transition Properties',
    quality_video:{
    	'480':'csscourse/36) Transition Properties - 480 - Made with Clipchamp.m3u8',
    	'720':'csscourse/36) Transition Properties - 720 - Made with Clipchamp.m3u8',
    	'1080':'csscourse/36) Transition Properties - 1080 - Made with Clipchamp.m3u8',
    	'1440':'csscourse/36) Transition Properties - 1440 - Made with Clipchamp.m3u8',
    },
    duration: '10:22',
    locked:true,
    completed: false,
    notes:[],
    description: "Expand your knowledge on animating elements by using transition properties in a web page",
  },
  {
    title: 'Animation - 1',
    quality_video:{
    	'480':'csscourse/37) Animation - 1 - 480.m3u8',
    	'720':'csscourse/37) Animation - 1 - 720.m3u8',
    	'1080':'csscourse/37) Animation - 1 - 1080.m3u8',
    	'1440':'csscourse/37) Animation - 1 - 1440.m3u8',
    },
    duration: '6:35',
    locked:true,
    completed: false,
    notes:[],
    description: "Uncover the power of creating dynamic and visually appealing web experiences through smooth transitions and engaging animations. Learn key concepts, techniques, and best practices to bring your web projects to life, captivating users with enhanced interactivity and a polished design aesthetic.",
  },
  {
    title: 'Animation - 2',
    quality_video:{
    	'480':'csscourse/38) Animation - 2 - 480.m3u8',
    	'720':'csscourse/38) Animation - 2 - 720.m3u8',
    	'1080':'csscourse/38) Animation - 2 - 1080.m3u8',
    	'1440':'csscourse/38) Animation - 2 - 1440.m3u8',
    },
    duration: '10:19',
    locked:true,
    completed: false,
    notes:[],
    description: "Uncover the power of creating dynamic and visually appealing web experiences through smooth transitions and engaging animations. Learn key concepts, techniques, and best practices to bring your web projects to life, captivating users with enhanced interactivity and a polished design aesthetic.",
  },
  {
    title: 'Animation - 3',
    quality_video:{
    	'480':'csscourse/39) Animation - 3 - 480.m3u8',
    	'720':'csscourse/39) Animation - 3 - 720.m3u8',
    	'1080':'csscourse/39) Animation - 3 - 1080.m3u8',
    	'1440':'csscourse/39) Animation - 3 - 1440.m3u8',
    },
    duration: '10:58',
    locked:true,
    completed: false,
    notes:[],
    description: "Uncover the power of creating dynamic and visually appealing web experiences through smooth transitions and engaging animations. Learn key concepts, techniques, and best practices to bring your web projects to life, captivating users with enhanced interactivity and a polished design aesthetic.",
  },
  {
    title: 'Animation - 4',
    quality_video:{
    	'480':'csscourse/40) Animation - 4 - 480.m3u8',
    	'720':'csscourse/40) Animation - 4 - 720.m3u8',
    	'1080':'csscourse/40) Animation - 4 - 1080.m3u8',
    	'1440':'csscourse/40) Animation - 4 - 1440.m3u8',
    },
    duration: '7:34',
    locked:true,
    completed: false,
    notes:[],
    description: "Uncover the power of creating dynamic and visually appealing web experiences through smooth transitions and engaging animations. Learn key concepts, techniques, and best practices to bring your web projects to life, captivating users with enhanced interactivity and a polished design aesthetic.",
  },
  {
    title: 'Pseudo Class - 1',
    quality_video:{
    	'480':'csscourse/41) Pseudo Class - 1 - 480.m3u8',
    	'720':'csscourse/41) Pseudo Class - 1 - 720.m3u8',
    	'1080':'csscourse/41) Pseudo Class - 1 - 1080.m3u8',
    	'1440':'csscourse/41) Pseudo Class - 1 - 1440.m3u8',
    },
    duration: '12:08',
    locked:true,
    completed: false,
    notes:[],
    description: "Dive into the realm of CSS pseudo-classes, exploring a variety of selectors that enable you to style elements based on their state or position. Enhance your styling arsenal by understanding how pseudo-classes can be leveraged to create interactive and dynamic web designs with precision and flexibility.",
  },
  {
    title: 'Pseudo Class - 2',
    quality_video:{
    	'480':'csscourse/42) Pseudo Class - 2 - 480.m3u8',
    	'720':'csscourse/42) Pseudo Class - 2 - 720.m3u8',
    	'1080':'csscourse/42) Pseudo Class - 2 - 1080.m3u8',
    	'1440':'csscourse/42) Pseudo Class - 2 - 1440.m3u8',
    },
    duration: '16:14',
    locked:true,
    completed: false,
    notes:[],
    description: "Dive into the realm of CSS pseudo-classes, exploring a variety of selectors that enable you to style elements based on their state or position. Enhance your styling arsenal by understanding how pseudo-classes can be leveraged to create interactive and dynamic web designs with precision and flexibility.",
  },
  
  {
	  "title": "Pesudo Classes Quiz",
	  "quiz": true,
	  "locked": true,
	  "completed": false,
	  "questions": [
	    {
	      "question": "What does the :hover pseudo-class in CSS primarily target?",
	      "options": [
	        "Elements with focus",
	        "Elements when clicked",
	        "Elements when hovered over",
	        "Elements with specific classes"
	      ],
	      "questionId": 136
	    },
	    {
	      "question": "Which CSS property is responsible for specifying the number of times an animation should run?",
	      "options": [
	        "animation-repeat-count",
	        "animation-play-state",
	        "animation-iteration-count",
	        "animation-direction"
	      ],
	      "questionId": 137
	    },
	    {
	      "question": "What property in CSS is used to define keyframes for animations?",
	      "options": [
	        "animation-duration",
	        "animation-name",
	        "animation-timing-function",
	        "animation-delay"
	      ],
	      "questionId": 138
	    },
	    {
	      "question": "How is the :nth-child(odd) pseudo-class used in CSS?",
	      "options": [
	        "Selects every element",
	        "Selects only even-numbered elements",
	        "Selects only odd-numbered elements",
	        "Selects elements with a specific class"
	      ],
	      "questionId": 139
	    }
	  ]
	},
	{
    title: 'Card Project - 1',
    quality_video:{
    	'480':'csscourse/43) Card Project - 1 - 480.m3u8',
    	'720':'csscourse/43) Card Project - 1 - 720.m3u8',
    	'1080':'csscourse/43) Card Project - 1 - 1080.m3u8',
    	'1440':'csscourse/43) Card Project - 1 - 1440.m3u8',
    },
    duration: '9:36',
    locked:true,
    completed: false,
    notes:[],
    description: "Explore the art of crafting visually stunning cards with distinct styles and enchanting animations. ",
  },
  {
    title: 'Card Project - 2',
    quality_video:{
    	'480':'csscourse/44) Card Project - 2 - 480.m3u8',
    	'720':'csscourse/44) Card Project - 2 - 720.m3u8',
    	'1080':'csscourse/44) Card Project - 2 - 1080.m3u8',
    	'1440':'csscourse/44) Card Project - 2 - 1440.m3u8',
    },
    duration: '7:50',
    locked:true,
    completed: false,
    notes:[],
    description: "Explore the art of crafting visually stunning cards with distinct styles and enchanting animations. ",
  },
  {
    title: 'Card Project - 3',
    quality_video:{
    	'480':'csscourse/45) Card Project - 3 - 480.m3u8',
    	'720':'csscourse/45) Card Project - 3 - 720.m3u8',
    	'1080':'csscourse/45) Card Project - 3 - 1080.m3u8',
    	'1440':'csscourse/45) Card Project - 3 - 1440.m3u8',
    },
    duration: '10:00',
    locked:true,
    completed: false,
    notes:[],
    description: "Explore the art of crafting visually stunning cards with distinct styles and enchanting animations. ",
  },
  {
    title: 'Google Page Clone - 1',
    quality_video:{
    	'480':'csscourse/46) Google Page Clone - 1 - 480.m3u8',
    	'720':'csscourse/46) Google Page Clone - 1 - 720.m3u8',
    	'1080':'csscourse/46) Google Page Clone - 1 - 1080.m3u8',
    	'1440':'csscourse/46) Google Page Clone - 1 - 1440.m3u8',
    },
    duration: '3:12',
    locked:true,
    completed: false,
    notes:[],
    description: "Uncover the techniques behind cloning a familiar interface and enhance your skills in crafting pixel-perfect designs.",
  },
  {
    title: 'Google Page Clone - 2',
    quality_video:{
    	'480':'csscourse/47) Google Page Clone - 2 - 480.m3u8',
    	'720':'csscourse/47) Google Page Clone - 2 - 720.m3u8',
    	'1080':'csscourse/47) Google Page Clone - 2 - 1080.m3u8',
    	'1440':'csscourse/47) Google Page Clone - 2 - 1440.m3u8',
    },
    duration: '15:38',
    locked:true,
    completed: false,
    notes:[],
    description: "Uncover the techniques behind cloning a familiar interface and enhance your skills in crafting pixel-perfect designs.",
  },
  {
    title: 'Google Page Clone - 3',
    quality_video:{
    	'480':'csscourse/48) Google Page Clone - 3 - 480.m3u8',
    	'720':'csscourse/48) Google Page Clone - 3 - 720.m3u8',
    	'1080':'csscourse/48) Google Page Clone - 3 - 1080.m3u8',
    	'1440':'csscourse/48) Google Page Clone - 3 - 1440.m3u8',
    },
    duration: '10:16',
    locked:true,
    completed: false,
    notes:[],
    description: "Uncover the techniques behind cloning a familiar interface and enhance your skills in crafting pixel-perfect designs.",
  },
  {
    title: 'Google Page Clone - 4',
    quality_video:{
    	'480':'csscourse/49) Google Page Clone - 4 - 480.m3u8',
    	'720':'csscourse/49) Google Page Clone - 4 - 720.m3u8',
    	'1080':'csscourse/49) Google Page Clone - 4 - 1080.m3u8',
    	'1440':'csscourse/49) Google Page Clone - 4 - 1440.m3u8',
    },
    duration: '11:12',
    locked:true,
    completed: false,
    notes:[],
    description: "Uncover the techniques behind cloning a familiar interface and enhance your skills in crafting pixel-perfect designs.",
  },
  {
    title: 'Google Page Clone - 5',
    quality_video:{
    	'480':'csscourse/50) Google Page Clone - 5 - 480.m3u8',
    	'720':'csscourse/50) Google Page Clone - 5 - 720.m3u8',
    	'1080':'csscourse/50) Google Page Clone - 5 - 1080.m3u8',
    	'1440':'csscourse/50) Google Page Clone - 5 - 1440.m3u8',
    },
    duration: '12:34',
    locked:true,
    completed: false,
    notes:[],
    description: "Uncover the techniques behind cloning a familiar interface and enhance your skills in crafting pixel-perfect designs.",
  },
  {
    title: 'Facebook logo',
    quality_video:{
    	'480':'csscourse/51) Facebook Logo - 480.m3u8',
    	'720':'csscourse/51) Facebook Logo - 720.m3u8',
    	'1080':'csscourse/51) Facebook Logo - 1080.m3u8',
    	'1440':'csscourse/51) Facebook Logo - 1440.m3u8',
    },
    duration: '8:18',
    locked:true,
    completed: false,
    notes:[],
    description: "Explore the art of crafting a Facebook logo using Cascading Style Sheets (CSS). Immerse yourself in the world of creative styling as we break down the process of designing this iconic symbol, showcasing the power of CSS in shaping visually appealing elements. Elevate your design skills with this hands-on exploration of logo creation.",
  },
  {
    title: 'Marvel Gallery',
    quality_video:{
    	'480':'csscourse/52) Marvel Gallery - 480.m3u8',
    	'720':'csscourse/52) Marvel Gallery - 720.m3u8',
    	'1080':'csscourse/52) Marvel Gallery - 1080.m3u8',
    	'1440':'csscourse/52) Marvel Gallery - 1440.m3u8',
    },
    duration: '11:12',
    locked:true,
    completed: false,
    notes:[],
    description: "Creating a visually appealing gallery using html and css.",
  },
  {
    title: 'Weather App - 1',
    quality_video:{
    	'480':'csscourse/53) Weather App - 1 - 480.m3u8',
    	'720':'csscourse/53) Weather App - 1 - 720.m3u8',
    	'1080':'csscourse/53) Weather App - 1 - 1080.m3u8',
    	'1440':'csscourse/53) Weather App - 1 - 1440.m3u8',
    },
    duration: '1:14',
    locked:true,
    completed: false,
    notes:[],
    description: "Experience the Weather App project, where functionality meets aesthetics in web development. Discover the art of creating a visually captivating website that dynamically displays weather information for any city. Utilizing the OpenWeather API, this project not only provides real-time weather updates but also demonstrates the seamless integration of external APIs for enhanced user experiences in your web development journey.",
  },
  {
    title: 'Weather App - 2',
    quality_video:{
    	'480':'csscourse/54) Weather App - 2 - 480.m3u8',
    	'720':'csscourse/54) Weather App - 2 - 720.m3u8',
    	'1080':'csscourse/54) Weather App - 2 - 1080.m3u8',
    	'1440':'csscourse/54) Weather App - 2 - 1440.m3u8',
    },
    duration: '10:13',
    locked:true,
    completed: false,
    notes:[],
    description: "Experience the Weather App project, where functionality meets aesthetics in web development. Discover the art of creating a visually captivating website that dynamically displays weather information for any city. Utilizing the OpenWeather API, this project not only provides real-time weather updates but also demonstrates the seamless integration of external APIs for enhanced user experiences in your web development journey.",
  },
  {
    title: 'Weather App - 3',
    quality_video:{
    	'480':'csscourse/55) Weather App - 3 - 480.m3u8',
    	'720':'csscourse/55) Weather App - 3 - 720.m3u8',
    	'1080':'csscourse/55) Weather App - 3 - 1080.m3u8',
    	'1440':'csscourse/55) Weather App - 3 - 1440.m3u8',
    },
    duration: '10:20',
    locked:true,
    completed: false,
    notes:[],
    description: "Experience the Weather App project, where functionality meets aesthetics in web development. Discover the art of creating a visually captivating website that dynamically displays weather information for any city. Utilizing the OpenWeather API, this project not only provides real-time weather updates but also demonstrates the seamless integration of external APIs for enhanced user experiences in your web development journey.",
  },
  {
    title: 'Weather App - 4',
    quality_video:{
    	'480':'csscourse/56) Weather App - 4 - 480.m3u8',
    	'720':'csscourse/56) Weather App - 4 - 720.m3u8',
    	'1080':'csscourse/56) Weather App - 4 - 1080.m3u8',
    	'1440':'csscourse/56) Weather App - 4 - 1440.m3u8',
    },
    duration: '10:51',
    locked:true,
    completed: false,
    notes:[],
    description: "Experience the Weather App project, where functionality meets aesthetics in web development. Discover the art of creating a visually captivating website that dynamically displays weather information for any city. Utilizing the OpenWeather API, this project not only provides real-time weather updates but also demonstrates the seamless integration of external APIs for enhanced user experiences in your web development journey.",
  },
  {
    title: 'Weather App - 5',
    quality_video:{
    	'480':'csscourse/57) Weather App - 5 - 480.m3u8',
    	'720':'csscourse/57) Weather App - 5 - 720.m3u8',
    	'1080':'csscourse/57) Weather App - 5 - 1080.m3u8',
    	'1440':'csscourse/57) Weather App - 5 - 1440.m3u8',
    },
    duration: '9:55',
    locked:true,
    completed: false,
    notes:[],
    description: "Experience the Weather App project, where functionality meets aesthetics in web development. Discover the art of creating a visually captivating website that dynamically displays weather information for any city. Utilizing the OpenWeather API, this project not only provides real-time weather updates but also demonstrates the seamless integration of external APIs for enhanced user experiences in your web development journey.",
  },
  {
    title: 'Weather App - 6',
    quality_video:{
    	'480':'csscourse/58) Weather App - 6 - 480.m3u8',
    	'720':'csscourse/58) Weather App - 6 - 720.m3u8',
    	'1080':'csscourse/58) Weather App - 6 - 1080.m3u8',
    	'1440':'csscourse/58) Weather App - 6 - 1440.m3u8',
    },
    duration: '14:44',
    locked:true,
    completed: false,
    notes:[],
    description: "Experience the Weather App project, where functionality meets aesthetics in web development. Discover the art of creating a visually captivating website that dynamically displays weather information for any city. Utilizing the OpenWeather API, this project not only provides real-time weather updates but also demonstrates the seamless integration of external APIs for enhanced user experiences in your web development journey.",
  },
  {
	  "title": "Project Quiz",
	  "quiz": true,
	  "locked": true,
	  "completed": false,
	  "questions": [
	    {
	      "question": "What API was utilized in the Weather App project for fetching real-time weather data?",
	      "options": [
	        "OpenWeatherMap API",
	        "WeatherStack API",
	        "Dark Sky API",
	        "AccuWeather API"
	      ],
	      "questionId": 140
	    },
	    {
	      "question": "What does the Fetch API primarily facilitate in the Weather App project?",
	      "options": [
	        "Rendering complex layouts",
	        "Making API Requests",
	        "Applying CSS styles dynamically",
	        "Generating random data"
	      ],
	      "questionId": 141
	    },
	    {
	      "question": "In the context of CSS Flexbox, what does the flex: 1 syntax represent?",
	      "options": [
	        "Setting the font size to 1",
	        "Assigning a flex-grow value of 1",
	        "Specifying a margin of 1 pixel",
	        "Defining a padding of 1 unit"
	      ],
	      "questionId": 142
	    },
	    {
	      "question": "Where is the 'feels_like' temperature data located in the response of the OpenWeather API?",
	      "options": [
	        "Under the 'temperature' key",
	        "Within the 'main' key",
	        "Under the 'feels' key",
	        "Inside the 'weather' key"
	      ],
	      "questionId": 143
	    }
	  ]
	},
  {
    title: 'Portfolio - 1',
    quality_video:{
    	'480':'csscourse/59) Portfolio - 1 - 480.m3u8',
    	'720':'csscourse/59) Portfolio - 1 - 720.m3u8',
    	'1080':'csscourse/59) Portfolio - 1 - 1080.m3u8',
    	'1440':'csscourse/59) Portfolio - 1 - 1440.m3u8',
    },
    duration: '12:48',
    locked:true,
    completed: false,
    notes:[],
    description: "In this video, embark on a journey to craft a captivating and personalized online portfolio. Explore the essential elements and design principles that elevate your portfolio's visual appeal, making a lasting impression on potential viewers. Elevate your web development skills as you create a showcase of your work and accomplishments.",
  },
  {
    title: 'Portfolio - 2',
    quality_video:{
    	'480':'csscourse/60) Portfolio - 2 - 480.m3u8',
    	'720':'csscourse/60) Portfolio - 2 - 720.m3u8',
    	'1080':'csscourse/60) Portfolio - 2 - 1080.m3u8',
    	'1440':'csscourse/60) Portfolio - 2 - 1440.m3u8',
    },
    duration: '15:25',
    locked:true,
    completed: false,
    notes:[],
    description: "In this video, embark on a journey to craft a captivating and personalized online portfolio. Explore the essential elements and design principles that elevate your portfolio's visual appeal, making a lasting impression on potential viewers. Elevate your web development skills as you create a showcase of your work and accomplishments.",
  },
  {
    title: 'Portfolio - 3',
    quality_video:{
    	'480':'csscourse/61) Portfolio - 3 - 480.m3u8',
    	'720':'csscourse/61) Portfolio - 3 - 720.m3u8',
    	'1080':'csscourse/61) Portfolio - 3 - 1080.m3u8',
    	'1440':'csscourse/61) Portfolio - 3 - 1440.m3u8',
    },
    duration: '18:31',
    locked:true,
    completed: false,
    notes:[],
    description: "In this video, embark on a journey to craft a captivating and personalized online portfolio. Explore the essential elements and design principles that elevate your portfolio's visual appeal, making a lasting impression on potential viewers. Elevate your web development skills as you create a showcase of your work and accomplishments.",
  },
  {
    title: 'Portfolio - 4',
    quality_video:{
    	'480':'csscourse/62) Portfolio - 4 - 480.m3u8',
    	'720':'csscourse/62) Portfolio - 4 - 720.m3u8',
    	'1080':'csscourse/62) Portfolio - 4 - 1080.m3u8',
    	'1440':'csscourse/62) Portfolio - 4 - 1440.m3u8',
    },
    duration: '9:27',
    locked:true,
    completed: false,
    notes:[],
    description: "In this video, embark on a journey to craft a captivating and personalized online portfolio. Explore the essential elements and design principles that elevate your portfolio's visual appeal, making a lasting impression on potential viewers. Elevate your web development skills as you create a showcase of your work and accomplishments.",
  },
  {
    title: 'Portfolio - 5',
    quality_video:{
    	'480':'csscourse/63) Portfolio - 5 - 480.m3u8',
    	'720':'csscourse/63) Portfolio - 5 - 720.m3u8',
    	'1080':'csscourse/63) Portfolio - 5 - 1080.m3u8',
    	'1440':'csscourse/63) Portfolio - 5 - 1440.m3u8',
    },
    duration: '11:46',
    locked:true,
    completed: false,
    notes:[],
    description: "In this video, embark on a journey to craft a captivating and personalized online portfolio. Explore the essential elements and design principles that elevate your portfolio's visual appeal, making a lasting impression on potential viewers. Elevate your web development skills as you create a showcase of your work and accomplishments.",
  },
  {
    title: 'Portfolio - 6',
    quality_video:{
    	'480':'csscourse/64) Portfolio - 6 - 480.m3u8',
    	'720':'csscourse/64) Portfolio - 6 - 720.m3u8',
    	'1080':'csscourse/64) Portfolio - 6 - 1080.m3u8',
    	'1440':'csscourse/64) Portfolio - 6 - 1440.m3u8',
    },
    duration: '13:32',
    locked:true,
    completed: false,
    notes:[],
    description: "In this video, embark on a journey to craft a captivating and personalized online portfolio. Explore the essential elements and design principles that elevate your portfolio's visual appeal, making a lasting impression on potential viewers. Elevate your web development skills as you create a showcase of your work and accomplishments.",
  },
  {
    title: 'Portfolio - 7',
    quality_video:{
    	'480':'csscourse/65) Portfolio - 7 - 480.m3u8',
    	'720':'csscourse/65) Portfolio - 7 - 720.m3u8',
    	'1080':'csscourse/65) Portfolio - 7 - 1080.m3u8',
    	'1440':'csscourse/65) Portfolio - 7 - 1440.m3u8',
    },
    duration: '10:56',
    locked:true,
    completed: false,
    notes:[],
    description: "In this video, embark on a journey to craft a captivating and personalized online portfolio. Explore the essential elements and design principles that elevate your portfolio's visual appeal, making a lasting impression on potential viewers. Elevate your web development skills as you create a showcase of your work and accomplishments.",
  },
  {
    title: 'CSS Variables',
    quality_video:{
    	'480':'csscourse/66) CSS Variables - 480.m3u8',
    	'720':'csscourse/66) CSS Variables - 720.m3u8',
    	'1080':'csscourse/66) CSS Variables - 1080.m3u8',
    	'1440':'csscourse/66) CSS Variables - 1440.m3u8',
    },
    duration: '4:44',
    locked:true,
    completed: false,
    notes:[],
    description: "Dive into the world of CSS variables in this video, where you'll unravel the power and flexibility they bring to your stylesheets. Learn how to declare, manipulate, and apply variables to streamline your CSS code, allowing for easier maintenance and dynamic design changes. Enhance your proficiency in web development by mastering this fundamental feature of modern CSS.",
  },
  {
    title: 'Wrap up',
    quality_video:{
    	'480':'csscourse/67) Wrap up - 480.m3u8',
    	'720':'csscourse/67) Wrap up - 720.m3u8',
    	'1080':'csscourse/67) Wrap up - 1080.m3u8',
    	'1440':'csscourse/67) Wrap up - 1440.m3u8',
    },
    duration: '1:17',
    locked:true,
    completed: false,
    notes:[],
    description: "Congratulations, you have successfully completed this course. we celebrate your commitment to learning and mastering crucial web development skills. Reflect on the journey, recap key takeaways, and prepare to apply your newfound CSS expertise to real-world projects. Your dedication has brought you here, and the knowledge gained will undoubtedly propel you towards creating stunning, responsive, and visually captivating websites. Well done on completing the course!",
  },
];