const express = require('express');
const router = express.Router();


const { getObjectDescriptions, addObjectDescription} = require('../controllers/objectDescription-controller.js');



router
    .route('/objectDescriptions/')
    .get(getObjectDescriptions)
    .post(addObjectDescription)

// route
//     .route('/objectDescription/:id')
//     .get(getObjectDescriptionById)
//     .delete(deleteObjectDescription)
//     .put(updateObjectDescription)

module.exports = router;