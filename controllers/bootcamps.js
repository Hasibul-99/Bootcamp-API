const Bootcamp = require('../models/Bootcamp');

// @dec     Get all bootcamps
// @routs   Get /api/v1/bootcamps
// access   public
exports.getBootcamps = async (req, res, next) => {

    try {
        const bootcamps = await Bootcamp.find();
        res.status(200).json({
            success: true,
            count: bootcamps.length,
            data: bootcamps
        });
    } catch (err) {
        res.status(400).json({
            success: false
        });
    }
}

// @dec     Get single bootcamp
// @routs   Get /api/v1/bootcamps/:id
// access   public
exports.getBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);
        res.status(200).json({
            success: true,
            data: bootcamp
        });
    } catch (err) {
        // res.status(400).json({
        //     success: false,
        // });
        next(err);
    }
}

// @dec     Create new bootcamp
// @routs   POST /api/v1/bootcamps
// access   Private
exports.createBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.create(req.body);

        if (!bootcamp) {
            return res.status(400).json({
                success: false
            });
        }
        res.status(201).json({
            success: true,
            data: bootcamp
        });
    } catch (err) {
        res.status(400).json({
            success: false
        })
    }
}

// @dec     Update bootcamp
// @routs   PUT /api/v1/bootcamp/:id
// access   Private
exports.updateBootcamp = async (req, res, next) => {

    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!bootcamp) {
            return res.status(400).json({
                success: false
            });
        }

        res.status(200).json({
            success: true,
            data: bootcamp
        });
    } catch (err) {
        return res.status(400).json({
            success: false
        });
    }

}

// @dec     Delete bootcamp
// @routs   Delete /api/v1/bootcamp/:id
// access   Private
exports.deleteBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

        if (!bootcamp) {
            return res.status(400).json({
                success: false,
            });
        };

        res.status(200).json({
            success: true,
            data: {}
        });

    } catch (err) {
        res.status(400).json({
            success: false,
        });
    }

    res.status(200).json({
        success: true,
        msg: `Delete bootcamp ${req.params.id}`
    });
}