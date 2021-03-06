 const express = require('express');
 const {
     register,
     login,
     getMe,
     forgotPassword,
     resetPassword,
     updateDetails,
     updatePassword
 } = require('../controllers/auth');

 const {
     protect
 } = require('../middleware/auth')

 const router = express.Router();

 router.get('/me', protect, getMe);

 router.post('/register', register);
 router.post('/login', login);
 router.post('/forgotpassword', forgotPassword);

 router.put('/resetPassword/:resettoken', resetPassword)
 router.put('/updatedetails', protect, updateDetails);
 router.put('/updatepassword', protect, updatePassword);

 module.exports = router;