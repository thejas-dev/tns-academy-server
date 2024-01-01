const Quiz = require("../models/quizModel");


module.exports.createQuiz = async(req,res,next) => {
	try	{
		const {question,questionId,answer,key} = req.body;
		if(key === 'muQNSJ3xD0tPjcTDTSnVy0pr3mcsCenaEQCUmh1IxXk='){
			const quiz = await Quiz.create({
				question,questionId,answer
			})
			if(quiz){
				return res.json({status:true,quiz})
			}
			return res.json({status:false,msg:"Something went wrong!"})
		}else{
			return res.json({status:false,msg:"Something went wrong! Invalid Key"})
		}
	}catch(ex){
		next(ex)
	}
}

module.exports.getAllQuiz = async(req,res,next) => {
	try{
		const quiz = await Quiz.find();
		if(quiz){
			return res.json({status:true,quiz})
		}
		return res.json({status:false,msg:"Something went wrong!"});
	}catch(ex){
		next(ex)
	}
}

module.exports.verifyQuiz = async(req,res,next) => {
	try{
		const {quiz} = req.body;
		let questions = [];
		let everythingCorrect = true;
		for(let i = 0; i < quiz?.questions?.length; i++){
			const quizFetched = await Quiz.findOne({questionId:quiz?.questions[i]?.questionId});
			if(quiz?.questions[i]?.selected?.toLowerCase() === quizFetched?.answer?.toLowerCase()){
				questions = [...questions,{
					...quiz?.questions[i],
					wrong:false
				}];
			}else{
				questions = [...questions,{
					...quiz?.questions[i],
					wrong:true
				}];
				everythingCorrect = false;
			}
		}
		if(questions.length > 0){
			return res.json({status:true,quiz:{
				...quiz,
				questions,
				everythingCorrect
			}})
		}
		return res.json({status:false,msg:"Something went wrong!"})
	}catch(ex){
		next(ex)
	}
}