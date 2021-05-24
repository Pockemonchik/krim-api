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
        const result = await ObjectDescription.create(req.body);
        console.log(req.body,"body")
        console.log(req.file,"file")
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