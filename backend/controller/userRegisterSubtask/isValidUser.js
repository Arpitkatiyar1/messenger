const isValidUser = (fields, files) => { 

    const userName = fields.userName[0],
      email = fields.email[0],
      password = fields.password[0],
      confirmPassword = fields.confirmPassword[0],
      error = [];
    
    if (!userName) {
        error.push("Please provide a valid userName");
      }
      if (!email) {
        error.push("Please provide a valid email address");
      }
      if (!password) {
        error.push("Please provide a password");
      }
      if (!confirmPassword) {
        error.push("Please provide confirm password");
      }
      if (password && confirmPassword && password !== confirmPassword) {
        error.push(
          `Password and confirm Password doesn't match`
        );
      }
      if (password && password.length < 12) {
        error.push(
          `Password must be at least 12 characters long`
        );
      }
      if (Object.keys(files).length === 0) {
        error.push("Please provide user image");
      }
    return error;
}
module.exports = {isValidUser};