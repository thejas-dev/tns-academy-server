const Course = require("../models/courseModel");

module.exports.createCourse = async(req,res,next) => {
	try{
		const {content,key,title,description,image,courseId,duration,requirements,locked,videos,projects} = req.body;
		if(key==='DWjO8xwOjufFQsx7vUI7Mw=='){
			const course = await Course.create({
				content,key,title,description,image,courseId,duration,requirements,locked,videos,projects
			})
			if(course){
				return res.json({status:true,course});
			}
			return res.json({status:false,msg:"Something went wrong!"});
		}else{
			return res.json({status:false,msg:'Something went wrong! Invalid Key'})
		}
	}catch(ex){
		next(ex)
	}
}

module.exports.fetchCourse = async(req,res,next) => {
	try{
		const {id,key} = req.body;
		if(key === 'DWjO8xwOjufFQsx7vUI7Mw=='){
			const course = await Course.findOne({courseId:id});
			if(course){
				return res.json({status:true,course})
			}
			return res.json({status:false,msg:"Something went wrong!"});
		}else{
			return res.json({status:false,msg:"Something went wrong!"})
		}
	}catch(ex){
		next(ex)
	}
}

module.exports.getAllCourses = async(req,res,next) => {
	try{	
		const course = await Course.find();
		if(course){
			return res.json({status:true,course})
		}
		return res.json({status:false,msg:"Something went wrong!"})
	}catch(ex){
		next(ex)
	}
}