const Workshop = require("../models/workshopModel");
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

module.exports.createWorkshop = async(req,res,next) => {
	try{
		try{
		const {title,description,image,startsAt,duration,datesAndTimings,learn} = req.body;
		const workshop = await Workshop.create({
			title,description,image,startsAt,duration,datesAndTimings,learn
		})
		return res.json({status:true,workshop})
	}catch(ex){
		next(ex);
	}
	}catch(ex){
		next(ex)
	}
}

module.exports.getAllWorkshops = async(req,res,next) => {
	try{
		const data = await Workshop.find();
		return res.json({status:true,data});
	}catch(ex){
		next(ex)
	}
}


module.exports.updateWorkshop = async(req,res,next) => {
	try{
		const id = req.params.id
		const {registeredParticipants} = req.body;	
		const data = Workshop.findByIdAndUpdate(id,{
			registeredParticipants
		},{new:true},(err,obj)=>{
			console.log(obj)
			return res.json({status:true,obj})
		})
	}catch(ex){
		next(ex)
	}
}


module.exports.getWorkshop = async(req,res,next) => {
	try{
		const id = req.params.id;
		console.log(id)
		const obj = await Workshop.find({_id:id});
		return res.json({status:true,obj});


	}catch(e){
		next(e)
	}
}