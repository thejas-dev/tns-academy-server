
const mongoose = require('mongoose')

const workshopSchema =  new mongoose.Schema({
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
	startsAt:{
		type:String,
		default:'',
	},
	duration:{
		type:String,
		default:'',
	},
	registeredParticipants:{
		type:Array,
		default:[]
	},
	datesAndTimings:{
		type:Array,
		default:[]
	},
	language:{
		type:String,
		default:'Tamil'
	},
	requirements:{
		type:Array,
		default:[
			'A laptop with sublime text or any text editors',
			'2 hours free time'
		]
	},
	learn:{
		type:Array,
		default:[]
	},
	joinForFree:{
		type:Boolean,
		default:true
	},
	price:{
		type:String,
		default:''
	},
	workshopBy:{
		type:String,
		default:'N.U.Thejas hari'
	},
	workshopByInsta:{
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
	}
	},
	{
		timestamps:true,
	}
)

module.exports = mongoose.model("Workshop",workshopSchema)