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
  "name": "KARAN S",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "skaran2002@gmail.com",
  "id": "65b4e083554c3e12b21c094f"
},
{
  "name": "Lachu Lax",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "lachulax34@gmail.com",
  "id": "65b4aefb722b0e93f1ce5df1"
},
{
  "name": "Alagu sundaram",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "alagusundaram6117@gmail.com",
  "id": "65b3ff226a9c2e54321d54ab"
},
{
  "name": "Karthiga Thiru",
  "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_L_QW8NSjh",
  "email": "karthigathiru786@gmail.com",
  "id": "649b06b791faf1ac5ec3d5d0"
},
{
  "name": "Thirumalai G",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "tthiru9025@gmail.com",
  "id": "65b349b90f9e066038cd5d87"
},
{
  "name": "Aswin",
  "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_ymPRHkrFG",
  "email": "aswinramesh2016@gmail.com",
  "id": "649b03ec416ae0b1b4e2bd91"
},
{
  "name": "MOHAMED'S",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "mohamedathil2904@gmail.com",
  "id": "65b32e1bb3ae63a62365441d"
},
{
  "name": "Priya",
  "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_evLKlnGfWt",
  "email": "priyabanu2310@gmail.com",
  "id": "649afcd59dd46fd124694525"
},
{
  "name": "SANTHOSH AR",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "santhoshar778@gmail.com",
  "id": "65b326c2d7b722b9342e3141"
},
{
  "name": "MANOJ V",
  "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_xNc5RlECJ",
  "email": "manojvadivel20@gmail.com",
  "id": "649a4d5b42c50177ed9022ca"
},
{
  "name": "Rohi Rg",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "rohirece@gmail.com",
  "id": "65b11ca80b3b2402787e93cf"
},
{
  "name": "Sarvesh",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "kingjai156@gmail.com",
  "id": "65b2a05144da40fe0529329e"
},
{
  "name": "Kishore A",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "kishorehack5214715@gmail.com",
  "id": "65b29f42ef8e7a8e376b2eca"
},
{
  "name": "Yashwanthini R. M.",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "rmyashwanthini1502@gmail.com",
  "id": "65b29e5493a88f8956c3596b"
},
{
  "name": "Mullai Venese",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "mullaivenese0307@gmail.com",
  "id": "65b28052a7acdb4449524c3c"
},
{
  "name": "Thaiyalnayaki angappan",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "thaiyalnayakiangappan@gmail.com",
  "id": "65b27e3ea7acdb4449524c2d"
},
{
  "name": "Mokesh K",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "mokesh450415@gmail.com",
  "id": "65b276b0a66b99eb57271b56"
},
{
  "name": "Vimalathithan",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "viratvimal194@gmail.com",
  "id": "65b27287a5b7696cb23641aa"
},
{
  "name": "ரோஜித்",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "rojithrojith92@gmail.com",
  "id": "65b2719ea5b7696cb23641a4"
},
{
  "name": "Vishal Bhaskar",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "vishalvichu369@gmail.com",
  "id": "65b267375dffb55540a6caf4"
},
{
  "name": "mani patrik",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "mrkingmani2002@gmail.com",
  "id": "65b260ba1aaea6092f319bc7"
},
{
  "name": "Dineshkumar Madheswaran",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "dineshkumar5683madheswaran@gmail.com",
  "id": "65b0ee307388cbc237538fa0"
},
{
  "name": "Keerthi Vasan",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "vdmkeerthi@gmail.com",
  "id": "65b258380bb237b3ba7a9ee2"
},
{
  "name": "Bala Sudharsan",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "balasudharsan385@gmail.com",
  "id": "65b24f42f071a801fead5654"
},
{
  "name": "Prasanna BP",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "prasannabp2004@gmail.com",
  "id": "64f73f5ffac9cb68f09a2477"
},
{
  "name": "srinath sri",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "srinathsri853@gmail.com",
  "id": "65b24e37f73dcd12d17d3d6a"
},
{
  "name": "virat sasi",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "viratsasi6063@gmail.com",
  "id": "65b24c71521d2151d158d7f6"
},
{
  "name": "Thirumalai kumar",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "n.thirumalaikumar1998@gmail.com",
  "id": "65b24a5df6972023ec015b98"
},
{
  "name": "Nistul Premod",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "nistul02@gmail.com",
  "id": "65b24a9eff0fc047dbbf79be"
},
{
  "name": "Nandhees Nandhees",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "nandheesnandhees508@gmail.com",
  "id": "65b2450df683a59e393157d4"
},
{
  "name": "samjohn_offl",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "samjohn7845@gmail.com",
  "id": "65b232625df394d080325225"
},
{
  "name": "Sathish K",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "sathishcsc9629@gmail.com",
  "id": "65b22a5f464455b27a69292b"
},
{
  "name": "Raju",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "mr.cheemsra@gmail.com",
  "id": "65b2269568f1b43b2d3c9616"
},
{
  "name": "Dharshan Kumar",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "dharshankumar279@gmail.com",
  "id": "65b225f64173f4d56c7a17d1"
},
{
  "name": "Rakshith Gowda",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "rakshithdevasya1@gmail.com",
  "id": "65b2159d7845ca470c69ee3e"
},
{
  "name": "Hari Haran",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "hariharankrishnan1972@gmail.com",
  "id": "65b2155f7845ca470c69ee37"
},
{
  "name": "Afzal N",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "mrtechie77@gmail.com",
  "id": "65b214aa85bfaca198667ac6"
},
{
  "name": "Pratheen S",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "techpratheen@gmail.com",
  "id": "65b2133dc23c1347926666bb"
},
{
  "name": "Karthikeyan Ranganathan",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "karthikeyanranganathan731@gmail.com",
  "id": "65b206f9f020f12153e643ec"
},
{
  "name": "Dhanush",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "tharundhanush1802@gmail.com",
  "id": "65b205414149a8f0f718e76f"
},
{
  "name": "Sunitha V",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "sunithaviduran@gmail.com",
  "id": "65b201a27adb68608382035d"
},
{
  "name": "Shyaam Sarvan",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "shyaamsarvan@gmail.com",
  "id": "65b1fed57adb686083820352"
},
{
  "name": "shanmuga priyan",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "shanmugapriyan045@gmail.com",
  "id": "65b1fd157adb686083820349"
},
{
  "name": "BEAST GAMERS",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "snaveen1600@gmail.com",
  "id": "65b1fb7aabb570584edc758e"
},
{
  "name": "Lakshminarasimhan A",
  "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_4lf813Hpy",
  "email": "lakshminarasimhan592@gmail.com",
  "id": "65b1fb2bdb80f6f115985b80"
},
{
  "name": "manoj babu",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "babumanojr@gmail.com",
  "id": "65b1faaedb80f6f115985b79"
},
{
  "name": "Lavania Madavan",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "lavaniamadavan@gmail.com",
  "id": "65b1f50cd69116f353bfe4e3"
},
{
  "name": "Thameem Ansari",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "thameemafrin1983@gmail.com",
  "id": "65b1f33492ca65ce3e7ef550"
},
{
  "name": "Loganayaki sv",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "snayaki1992@gmail.com",
  "id": "65b1f069d69116f353bfe4d1"
},
{
  "name": "Treeone",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "treeonedemo@gmail.com",
  "id": "65b1ec18602d27687dcb549d"
},
{
  "name": "Barath Barath",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "barath000001@gmail.com",
  "id": "65b1ebed602d27687dcb5495"
},
{
  "name": "webby web",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "webbywebie@gmail.com",
  "id": "65b1e7b4602d27687dcb5483"
},
{
  "name": "U.MAGESH WARAN",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "uvmagesh3107@gmail.com",
  "id": "65b1dce752a9552fb828a726"
},
{
  "name": "Cyber_Bevin",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "bevinbalaji@gmail.com",
  "id": "65b1e1a2cbb17982cb6c71f8"
},
{
  "name": "Vignesh C",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "vigneshc200304@gmail.com",
  "id": "65b1deedde31e1ff9a80751d"
},
{
  "name": "aakash researcher",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "aakashresearcher@gmail.com",
  "id": "65b1dbe8de31e1ff9a807513"
},
{
  "name": "Mohan Selvam",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "mohanselvam1111@gmail.com",
  "id": "65b1d3eb8ec75c89947d6483"
},
{
  "name": "Vasanth S",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "vasanthsubburaj99@gmail.com",
  "id": "65b1d29d8ec75c89947d6472"
},
{
  "name": "Ramya Sreevarshini",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "ramyasreevarshini766@gmail.com",
  "id": "65b1ca39fc27782a26e504b7"
},
{
  "name": "Tharun S",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "tharunsankari007@gmail.com",
  "id": "65b1c08393a31b9262ffb8d4"
},
{
  "name": "Hemal",
  "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_6y2E8CM7N",
  "email": "hemalhem1212@gmail.com",
  "id": "6499be64adc0dc2d9741c4ae"
},
{
  "name": "mathan Vpm",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "mathanvpm577@gmail.com",
  "id": "65b1b2bc22f36d6f9061e4c5"
},
{
  "name": "ANTONY DIVOTTA.J",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "divoantony21@gmail.com",
  "id": "65b158a4eb3dce4cd1ed0341"
},
{
  "name": "janani dcse",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "dcsejanani@gmail.com",
  "id": "65b14dc9bc3a22253c78cb11"
},
{
  "name": "Praveen S",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "praveenboss2015@gmail.com",
  "id": "65b14c2bbc3a22253c78cb04"
},
{
  "name": "Rahul Rahul",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "raghul9787b@gmail.com",
  "id": "65b14a370d097aae73c655ae"
},
{
  "name": "Mathan Kumar005",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "mathankumar67890mmk@gmail.com",
  "id": "65b147d210c681231cdf1cc6"
},
{
  "name": "Umar Farooq",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "umarabdul.0121@gmail.com",
  "id": "65b1470cb4dd8bc89b60818d"
},
{
  "name": "ROHITH V",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "rohithviswanathan30@gmail.com",
  "id": "65b1430d93e4284cbcb55959"
},
{
  "name": "Shakila Yogavathi",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "yogavathisekar3619@gmail.com",
  "id": "65b139fcad3de5872a55fb4a"
},
{
  "name": "Kesavan (kesav)",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "kesavanplk7@gmail.com",
  "id": "65b137a296de4cc307f4e16a"
},
{
  "name": "rahul b",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "rahuldummy735@gmail.com",
  "id": "65b1360cb744dc33b9518d3b"
},
{
  "name": "Tarinisri TG",
  "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_EvFAJACW_4",
  "email": "tarinisri43@gmail.com",
  "id": "649885ac7f3d4624598233ef"
},
{
  "name": "Siva Subramanian.G",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "sivasujay392@gmail.com",
  "id": "65b127299dc7bceb820ad236"
},
{
  "name": "suresh kannan",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "skkannan1695@gmail.com",
  "id": "65b12593e9fbaa90c28d8cf1"
},
{
  "name": "Vignesh Muruganantham",
  "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_xjetXDQJC",
  "email": "vigneshmuruganantham639@gmail.com",
  "id": "649a3a84bc828e452246060c"
},
{
  "name": "Selva Murugan",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "selvakvs11@gmail.com",
  "id": "65b11883c351e3fcdd863721"
},
{
  "name": "Hemanth S",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "hemanthcse30@gmail.com",
  "id": "65b11193e54dd51a00422a33"
},
{
  "name": "Copyright Free Songs",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "flashymako@gmail.com",
  "id": "65b1116aaec28ad6ad908b7d"
},
{
  "name": "Nikhitha Vasudevan",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "nikhithavasudevan3@gmail.com",
  "id": "65b10c194596b88f6f21a3f3"
},
{
  "name": "Saravanan K R",
  "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_Vs4zd6CiG",
  "email": "saravananofficial18@gmail.com",
  "id": "649b0b9991faf1ac5ec3d606"
},
{
  "name": "Manikandan G",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "dmanirk07@gmail.com",
  "id": "65b1083feaae8cc87217c560"
},
{
  "name": "512- Santhosh Pandian SG",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "200701512@rajalakshmi.edu.in",
  "id": "65b1062671dd774757fd10da"
},
{
  "name": "Kowshik Narayan",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "kowshiknarayan16@gmail.com",
  "id": "65b104d571dd774757fd10cf"
},
{
  "name": "sethu Krish",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "mrsethusharp@gmail.com",
  "id": "65b101e471dd774757fd10c7"
},
{
  "name": "V D V R",
  "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_7r-ObCVE7",
  "email": "vishnuranjanofficial425@gmail.com",
  "id": "649960bf3d3c15454d892328"
},
{
  "name": "siva sankar",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "bagavathisiva22051997@gmail.com",
  "id": "65b0ff8dff58883280c4bac4"
},
{
  "name": "Siva A K",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "sivaak1703@gmail.com",
  "id": "6592f2f316ed1ce22ebae9cd"
},
{
  "name": "Meiyarasi M",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "meiyarasi003@gmail.com",
  "id": "65b0f6b003bad7eadfe7448a"
},
{
  "name": "Sanjay Roman 378",
  "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_g1SnaYtzro",
  "email": "sanjayrajamech17@gmail.com",
  "id": "65b0f37d2c4122057b7b869f"
},
{
  "name": "Vignesh Vikky",
  "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_P4IQF0d34",
  "email": "vikky4060@gmail.com",
  "id": "649b09a874b244d494d052b2"
},
{
  "name": "Vishnu Kumar",
  "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_79xdbBD9g",
  "email": "vishi08vishnu@gmail.com",
  "id": "649993f31059743a6be30136"
},
{
  "name": "T Ilango",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "ilangot2004@gmail.com",
  "id": "65b0f2c67efd73aec890b8f9"
},
{
  "name": "G.Ramesh",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "rameshg200234@gmail.com",
  "id": "65b0f0b04c798a09845c0082"
},
{
  "name": "Sankar Sankarram",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "sankarmsd2134@gmail.com",
  "id": "65b0f0901ab51ec27f179daf"
},
{
  "name": "Arun prakash",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "arunprakash7871@gmail.com",
  "id": "65b0f0664c798a09845c0074"
},
{
  "name": "Gowtham Angayee",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "gowthamangayee@gmail.com",
  "id": "65b0efbb4c798a09845c006a"
},
{
  "name": "Visnudev",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "glsgangasaravanan@gmail.com",
  "id": "6592cfdc2238a04ed04147ab"
},
{
  "name": "Hari Haran",
  "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_ltv2OFMPu",
  "email": "hariharanvj24@gmail.com",
  "id": "65b0edfc7388cbc237538f99"
},
{
  "name": "Yazhin Manickam",
  "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_gquC59DNxi",
  "email": "yazhinmanickam@gmail.com",
  "id": "649989d3a994dea619e60946"
},
{
  "name": "Vishwa K K",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "vishwamspkvel@gmail.com",
  "id": "65b0eda07388cbc237538f8f"
},
{
  "name": "logesh rav",
  "image": "https://ik.imagekit.io/d3kzbpbila/default-user_qE1tzA4fP.jpg?updatedAt=1687883494785",
  "email": "logiravi15@gmail.com",
  "id": "64a3fc636a55a3f872be9e8f"
},
{
  "name": "Thejas Hari",
  "image": "https://ik.imagekit.io/d3kzbpbila/thejashari_a07xjbDOH1",
  "email": "thejaskala308@gmail.com",
  "id": "649878bfece9acaff757d5ed"
},

]





const sendMail = async (name,email) => {
  let mailOptions = {
  		service:'gmail',
      from: {
        name:'21st Skills',
        address:'21stskills.com@gmail.com'
      },
      to: email,
      subject: `API Development Workshop - 21st Skills`,
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

					    <h1>API Development Workshop - Starting Soon!</h1>

					    <p>Hello ${name},</p>

					    <p>This is a friendly reminder that the API Development Workshop is started. We're excited to have you join us for this insightful session.</p>

					    <h2>Session Details:</h2>
					    <ul>
					      <li><strong>Date:</strong> 27th January 2024 (Saturday)</li>
					      <li><strong>Time:</strong> 7:00 PM - 9:00 PM</li>
					      <li><strong>Duration:</strong> 2 hours</li>
					      <li><strong>Location:</strong> <a href="https://meet.google.com/sjz-wjsb-cgs" target="_blank">Google Meet Link</a></li>
					    </ul>

					    <p>Ensure that you have your device ready and click the link below to join the workshop:</p>

					    <a class="cta-button" href="https://meet.google.com/sjz-wjsb-cgs" target="_blank">Join Workshop</a>

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
	// sendMail(temp[i].name,temp[i].email) 
	// console.log(temp[i].name,temp[i].email)
}


module.exports = app