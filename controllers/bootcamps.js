const Bootcamp = require('../models/Bootcamp');
const asynchandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');
// @dec     Get all bootcamps
// @routs   Get /api/v1/bootcamps
// access   public
exports.getBootcamps = asynchandler(async (req, res, next) => {
    const bootcamps = await Bootcamp.find();

    res.status(200).json({
        success: true,
        count: bootcamps.length,
        data: bootcamps
    });
})

// @dec     Get single bootcamp
// @routs   Get /api/v1/bootcamps/:id
// access   public
exports.getBootcamp = asynchandler(async (req, res, next) => {
    const bootcamp = await Bootcamp.findById(req.params.id);

    if (!bootcamp) {
        return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404));
    }

    res.status(200).json({
        success: true,
        data: bootcamp
    });
})

// @dec     Create new bootcamp
// @routs   POST /api/v1/bootcamps
// access   Private
exports.createBootcamp = asynchandler(async (req, res, next) => {
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
})

// @dec     Update bootcamp
// @routs   PUT /api/v1/bootcamp/:id
// access   Private
exports.updateBootcamp = asynchandler(async (req, res, next) => {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    if (!bootcamp) {
        return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404));
    }

    res.status(200).json({
        success: true,
        data: bootcamp
    });
})

// @dec     Delete bootcamp
// @routs   Delete /api/v1/bootcamp/:id
// access   Private
exports.deleteBootcamp = asynchandler(async (req, res, next) => {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

    if (!bootcamp) {
        return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404));
    };

    res.status(200).json({
        success: true,
        data: {}
    });
})