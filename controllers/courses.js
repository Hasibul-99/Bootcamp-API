const Course = require("../models/Course");
const asynchandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");

// @dec     Get all Courses
// @route   Get /api/v1/courses
// @route   Get /api/v1/bootcamps/:bootcampId/courses
// access   public
exports.getCourses = asynchandler(async (req, res, next) => {
	let query;

	console.log("Hello", req.params);

	if (req.params.bootcampId) {
		query = Course.find({
			bootcamp: req.params.bootcampId,
		});
	} else {
		query = Course.find().populate({
			path: "bootcamp",
			select: "name description",
		});
	}

	const courses = await query;

	res.status(200).json({
		success: true,
		count: courses.length,
		data: courses,
	});
});
