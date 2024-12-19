const path = require('path')

const newImagePath = (image) => {
    const getImageName = image.originalFilename;
      const randNumber = Math.floor(Math.random() * 99999);
      const newImageName = randNumber + getImageName;
    image.originalFilename = newImageName;
    
      const newPath =path.resolve(
        __dirname,
        '/Users/arpitkatiyar/Desktop/chatApp/frontend/public/image',
        image.originalFilename
      );
    return newPath;
}
module.exports={newImagePath}