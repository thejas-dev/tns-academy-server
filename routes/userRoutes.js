const router = require('express').Router();
const {login,register,updateRegisteredWorkshops,updateCertificates} = require('../controllers/userControllers')
const {getAllWorkshops,createWorkshop,updateWorkshop,getWorkshop}  =require('../controllers/workshopControllers');


router.post('/login',login);
router.post('/register',register);
router.post('/updateRegisteredWorkshops/:id',updateRegisteredWorkshops)
router.get('/getAllWorkshops',getAllWorkshops);
router.post('/createWorkshop',createWorkshop);
router.post('/updateWorkshop/:id',updateWorkshop);
router.post('/updateCertificates/:id',updateCertificates);
router.post('/getWorkshop/:id',getWorkshop);

module.exports = router;