const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, 'public/images');
    },
    filename: (req,file,cb) =>{
        const timestamp = new Date().getTime();
        const fileName = file.originalname;
        cb(null, `${timestamp}_${fileName}`);
    }
});

const upload = multer({storage:storage,
                       limits:{
                        fileSize : 3 * 1000 * 1000 // 3 Mb
                       }})
module.exports = upload;