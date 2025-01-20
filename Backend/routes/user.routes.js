const express = require('express')
const router = express.Router();
const { body } = require('express-validator')
const userController = require('../controllers/user.controller')
const userService = require('../services/user.service')
const authMiddleware =  require('../middlewares/user.middleware')

router.post('/register',[
    body('fullname.firstname').isLength({ min: 3 }).withMessage('Firstname length must be 3 characters long'),
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
],
    userController.registerUser
)

router.post('/login', [
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
],
    userController.loginUser
)

router.get('/profile', authMiddleware.authUser, userController.getUserProfile)


router.get('/logout', authMiddleware.authUser, userController.logoutUser)
module.exports = router;