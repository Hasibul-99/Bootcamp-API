// @dec     Get all bootcamps
// @routs   Get /api/v1/bootcamps
// access   public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({success: true, msg: "Show all bootcamps"});
}


// @dec     Get single bootcamp
// @routs   Get /api/v1/bootcamps/:id
// access   public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `Get bootcamp ${req.params.id}` });
}

// @dec     Create new bootcamp
// @routs   POST /api/v1/bootcamps
// access   Private
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: "Create new bootcamps "});
}

// @dec     Update bootcamp
// @routs   PUT /api/v1/bootcamp/:id
// access   Private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `Update bootcamp ${req.params.id}`});
}

// @dec     Delete bootcamp
// @routs   Delete /api/v1/bootcamp/:id
// access   Private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `Delete bootcamp ${req.params.id}`});
}