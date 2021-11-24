const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

const smp = new SpeedMeasurePlugin({
	outputFormat: "human",
});

module.exports = function override(config, env) {
	config = smp.wrap({
		...config,
	});
	return config;
};
