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
        objectDescription.category = req.body.category
        objectDescription.image = req.file.filename
        objectDescription.image_url = "http://83.136.233.145/uploads/"+req.file.filename
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

exports.deleteObjectDescription = async (req, res, next) => {
    try {
        const objectDescription = await ObjectDescription.findById(req.params.id);
        if (!objectDescription) {
            return res.status(404).json( {
                success: false,
                error: 'objectDescription Not Found'
            })
        }

        await objectDescription.remove();

        return res.status(200).json({
            success: true,
            data: {}
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: `Error Deleting objectDescription: ${error.message}`
        })
    }
}

exports.getObjectDescriptionById = async (req, res, next) => {
    try {
        const objectDescription = await ObjectDescription.findById(req.params.id);
        if (!objectDescription) {
            return res.status(404).json( {
                success: false,
                error: 'objectDescription Not Found'
            })
        }
        return res.status(200).json({
            success: true,
            data: objectDescription
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: `Error Getting objectDescription ${req.params.id}: ${error.message}`
        })
    }
}

exports.updateObjectDescription = async (req, res, next) => {
    try {
        const objectDescription = await ObjectDescription.findById(req.params.id).exec();
        if (!objectDescription) {
            return res.status(404).json( {
                success: false,
                error: 'objectDescription Not Found'
            })
        }
        console.log(req.body)
        console.log(req.file)
        objectDescription.image = req.file.filename
        objectDescription.image_url = "http://83.136.233.145/uploads/"+req.file.filename
        objectDescription.set(req.body);
        var update = await objectDescription.save();
        return res.status(200).json({
            success: true,
            data: update
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: `Error Getting objectDescription ${req.params.id}: ${error.message}`
        })
    }
}