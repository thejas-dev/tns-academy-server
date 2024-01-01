
const mongoose = require('mongoose')

const courseSchema =  new mongoose.Schema({
	title:{
		type: String,
		min:3,
		max:40,
	},	
	description:{
		type:String,
		default:'',
	},
	image:{
		type:String,
		default:'',
	},
	content:{
		type:Array,
		default:[]
	},
	language:{
		type:String,
		default:'Tamil'
	},
	requirements:{
		type:Array,
		default:[]
	},
	author:{
		type:String,
		default:'N.U.Thejas hari'
	},
	authorInsta:{
		type:String,
		default:'https://www.instagram.com/nuthejashari/'
	},
	meetingLink:{
		type:String,
		default:''
	},
	whatsappGroup:{
		type:String,
		default:''
	},
	recordedVideo:{
		type:String,
		default:''
	},
	courseId:{
		type:String,
		required:true
	},
	locked:{
		type:Boolean,
		default:false
	},
	videos:{
		type:String,
		default:'0'
	},
	projects:{
		type:String,
		default:'0'
	},
	duration:{
		type:String,
		default:'1 Hour'
	},
	paid:{
		type:String,
		default:''
	},
	cancellable:{
		type:Boolean,
		default:false
	}
	},
	{
		timestamps:true,
	}
)

module.exports = mongoose.model("Course",courseSchema)