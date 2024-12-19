const validator = require('validator');
const {formidable} = require('formidable');
const registerModel = require('../models/authModel');
const fs = require('fs');
const { isValidUser } = require('./userRegisterSubtask/isValidUser');
const { newImagePath } = require('./userRegisterSubtask/setNewImagePath');
const { registerUser } = require('./userRegisterSubtask/register');

module.exports.userRegister = (req, res) => {

    const form = formidable();
    form.parse(req, async (err, fields, files) => {

        const userName = fields.userName[0],
          email = fields.email[0],
          password = fields.password[0],
          confirmPassword = fields.confirmPassword[0],
          image = files.image[0],
          error = isValidUser(fields, files);

    
    if (error.length > 0) {
      res.status(400).json({
        error: { errorMessage: error },
      });
    } else {
        
        const newPath=newImagePath(image);
        
      try {
        const checkUser = await registerModel.findOne({
          email: email,
        });
        if (checkUser) {
          res.status(404).json({
            error: {
              errorMessage: ["Your email already exist"],
            },
          });
        } else {
            
            const user = {
                userName,
                email,
                password,
                image,
                newPath,
            }
            await registerUser(user,req,res);          
        }
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