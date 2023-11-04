process.env.TAMAGUI_TARGET = "native";

module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			[
				"module:react-native-dotenv",
				{
					moduleName: "@env",
					path: ".env",
					blacklist: null,
					whitelist: null,
					safe: false,
					allowUndefined: true,
				},
			],
			[
				"transform-inline-environment-variables",
				// NOTE: include is optional, you can leave this part out
				{
				  include: ["TAMAGUI_TARGET"]
				}
			],
			// NOTE: this is optional, you don't *need* the compiler
			[
				"@tamagui/babel-plugin",
				{
				components: ["tamagui"],
				config: "./tamagui.config.ts",
				logTimings: true,
				},
			],
			// NOTE: this is only necessary if you are using reanimated for animations
			"react-native-reanimated/plugin",
		],
	};
};
