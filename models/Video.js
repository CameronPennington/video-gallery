const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
	path: {
		type: String,
		required: true,
	},
	tags: [String],
	title: {
		type: String,
	},
});

module.exports = Video = mongoose.model("video", VideoSchema);
