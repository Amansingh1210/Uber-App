const userModel = require('../models/user.model')
const blacklistTokenModel = require('../models/blacklistToken.model');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports.authUser = async (req,res, next) =>{
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    
    if(!token){
        return res.status(401).json({message: 'Not authenticated'})
    }

    const isBlackListed = await blacklistTokenModel.findOne({  token })

    if(isBlackListed){
        return res.status(401).json({message: 'Not authenticated'})
    }
    
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = await userModel.findById(decoded._id)
        
        user = req.user;
        return next()
    }catch(error){ 
        return res.status(401).json({message: 'Not authenticated'})
    }
 
}
