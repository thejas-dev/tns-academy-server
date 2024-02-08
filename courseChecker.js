const axios = require('axios')
const fs = require('fs');

const fetchUsersCourseData = async(courseId) => {
	const {data} = await axios.post('http://localhost:3333/api/auth/getUsersByCourseId',{
		courseId,token:'JgWG+vM4jLsND0i25Dqo6Q=='
	});
	if(data.status){
		let completedUsers = []
		for(let i = 0; i<data?.user.length; i++){
			// console.log(data?.user[i])
			completed = true
			for (let j = 0; j < data?.user[i]?.enrolledCoursesData[0].content.length; j++){
				if(!data?.user[i]?.enrolledCoursesData[0].content[j].completed){
					completed = false
				}
			}
			console.log(completed)
			if(completed){
				completedUsers = [...completedUsers,data?.user[i]];
			}
		}
		const jsonData = JSON.stringify(completedUsers,null,2)
    	fs.writeFileSync(`courseRegisteredUsers-${courseId}.json`, jsonData, 'utf-8');
    	console.log("File Written Successfully!");
	}
}

fetchUsersCourseData('101110')