const fs = require('fs')
const registerModel = require('../../models/authModel');
const bcrypt = require('bcrypt')
const jwt=require('jsonwebtoken')

const registerUser = async (user, req, res) => {
  
  const checkUser = await registerModel.findOne({
    email: user.email,
  });
  if (checkUser) {
    res.status(404).json({
      error: {
        errorMessage: ["Your email already exist"],
      },
    });
  }
  else {
    fs.copyFile(user.image.filepath, user.newPath, async (error) => {
        
      if (!error) {
        const USER = await registerModel.create({
          userName: user.userName,
          email: user.email,
          password: await bcrypt.hash(user.password, 10),
          image: user.image.originalFilename,
        });
        try {
          const userObj = {
            id: USER._id,
            userName: USER.userName,
            email: USER.email,
            image: USER.image,
            registeredAt: USER.createdAt,
          }
          const token = jwt.sign(userObj, process.env.SECRET_KEY, { expiresIn: process.env.TOKEN_EXP });
          const options = {
            expires: new Date(Date.now() + process.env.COOKIE_EXP * 24 * 60 * 60 * 1000),
          }
          res.status(201).cookie('authToken', token, options).json({
            successMessage: "registered successfully", token,
          })
        } catch (error) {
          res.status(500).json({
            error: {
              errorMessage: ["Interanl Server Error"],
            },
          });
        }
      }
    });
  }
}
module.exports = { registerUser };