const express = require('express')
const router = express.Router()
const userController = require('../controllers/adminController')
const passport = require('passport')
const multer = require('multer')
//Image Upload File

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,'./assets/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "_" + file.originalname)
    }
  })
   
  var upload = multer({ storage: storage })

router.post('/register',userController.register);
router.post('/login',userController.login)
router.get('/all',userController.registerAll);
//Organization
router.post('/uploadOrgainzation',passport.authenticate('jwt',{session:false}),userController.OrganizationSave);
router.get('/showdata',passport.authenticate('jwt',{session:false}),userController.OrganizationAll)

//Volunteer
router.post('/uploadVoluteer',userController.VolunteerSave);
router.get('/showvolunteer',userController.VolunteerAll)

//Withdraw
router.post('/uploadpatient',userController.WithdrawSave);
router.get('/showpatient',userController.WithdrawAll)
// router.get('/patientreturn/:id',userController.WithdrawId)

//Return Amount
router.get('/uploadreturn/:id',userController.WithdrawId)
router.post('/uploadreturn/:id',userController.ReturnSave)
router.get('/returnshow/:id',userController.ReturnAll)

//Post Upload
router.post('/uploadpost',upload.single('image') , userController.PostSave)
router.get('/allpost',userController.PostAll)
router.get('/allpost/:id',userController.PostId)
module.exports = router