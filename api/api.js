const express = require('express');
const router = express.Router();
const multer = require('multer')
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './uploads/');
    },
    // filename: function(req, file, cb) {
    //   cb(null, new Date().toISOString() + file.originalname);
    // }
  });
  
  const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
  
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
  });



const { getObjectDescriptions, addObjectDescription} = require('../controllers/objectDescription-controller.js');



router
    .route('/objectDescriptions/')
    .get(getObjectDescriptions)
    .post(upload.single("image"),addObjectDescription)

// route
//     .route('/objectDescription/:id')
//     .get(getObjectDescriptionById)
//     .delete(deleteObjectDescription)
//     .put(updateObjectDescription)

module.exports = router;