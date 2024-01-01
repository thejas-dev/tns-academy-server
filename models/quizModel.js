
const mongoose = require('mongoose')

const quizSchema =  new mongoose.Schema({
	question:{
		type: String,
		min:3,
		max:40,
	},	
	questionId:{
		type:String,
		default:'',
		unique:true
	},
	answer:{
		type:String,
		default:'',
	},
	},
	{
		timestamps:true,
	}
)

module.exports = mongoose.model("Quiz",quizSchema)

