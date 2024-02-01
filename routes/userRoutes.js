const router = require('express').Router();
const {login,register,updateRegisteredWorkshops,updateCertificates,
	enrollCourse,updateUserCourses,updateImage,courseCompletedRoute,
	getAllUsers} = require('../controllers/userControllers')
const {getAllWorkshops,createWorkshop,updateWorkshop,getWorkshop}  =require('../controllers/workshopControllers');
const {createCourse,fetchCourse,getAllCourses} = require('../controllers/courseControllers');
const {createQuiz,verifyQuiz,getAllQuiz} = require('../controllers/quizControllers');

router.post('/login',login);
router.post('/register',register);
router.post('/updateRegisteredWorkshops/:id',updateRegisteredWorkshops)
router.get('/getAllWorkshops',getAllWorkshops);
router.post('/createWorkshop',createWorkshop);
router.post('/updateWorkshop/:id',updateWorkshop);
router.post('/updateCertificates/:id',updateCertificates);
router.post('/getWorkshop/:id',getWorkshop);
router.post('/createCourse',createCourse);
router.post('/fetchCourse',fetchCourse);
router.post('/enrollCourse/:id',enrollCourse);
router.post('/createQuiz',createQuiz);
router.post('/verifyQuiz',verifyQuiz);
router.get('/getAllQuiz',getAllQuiz);
router.post('/updateUserCourses/:id',updateUserCourses);
router.get('/getAllCourses',getAllCourses);
router.post('/updateImage/:id',updateImage);
router.post('/courseCompletedRoute',courseCompletedRoute);
router.post('/getAllUsers',getAllUsers)

module.exports = router;