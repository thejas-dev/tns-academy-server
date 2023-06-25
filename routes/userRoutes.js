const router = require('express').Router();
const {login,register,updateRegisteredWorkshops} = require('../controllers/userControllers')
const {getAllWorkshops,createWorkshop,updateWorkshop}  =require('../controllers/workshopControllers');


router.post('/login',login);
router.post('/register',register);
router.post('/updateRegisteredWorkshops/:id',updateRegisteredWorkshops)
router.get('/getAllWorkshops',getAllWorkshops);
router.post('/createWorkshop',createWorkshop);
router.post('/updateWorkshop/:id',updateWorkshop);

module.exports = router;