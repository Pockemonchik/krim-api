const ObjectDescription = require('../models/ObjectDescription')


exports.getObjectDescriptions = async (req, res, next) =>{
    try {
        const result = await ObjectDescription.find();
        return res.status(200).json({
            success: true,
            count: result.length,
            data: result
        })
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            error: `Error Getting Report: ${error.message}`
        })
    }
}

exports.addObjectDescription = async (req, res, next) => {
    try {
        const objectDescription = new ObjectDescription()
        objectDescription.name = req.body.name
        objectDescription.image = req.file.filename
        objectDescription.image_url = "http://localhost:8000/uploads/"+req.file.filename
        const result = await objectDescription.save();
        return res.status(201).json({
            success: true,
            data: result
        })
    }
    catch (error) {
        console.error(req)

        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);

            return res.status(400).json({
                success: false,
                error: messages
            })
        } else {
            return res.status(500).json({
                success: false,
                error: `Error Adding : ${error.message}`
            })
        }
    }
}