
const mongoose = require('mongoose')

const userSchema =  new mongoose.Schema({
	username:{
		type: String,
		min:3,
		max:40,
	},
	name:{
		type: String,
		required: true,
		max:40,
	},
	email: {
		type:String,
		default:'',
		required:true,
		unique:true
	},
	image: {
		type:String,
		default:'',
	},
	level:{
		type:String,
		default:'',
		required:true
	},
	registeredWorkshops:{
		type:Array,
		default:[]
	}
	},
	{
		timestamps:true,
	}
)

module.exports = mongoose.model("Users",userSchema)