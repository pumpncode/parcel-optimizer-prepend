const {
	promises: fs
} = require("fs");
const {
	resolve
} = require("path");

const {
	Optimizer
} = require("@parcel/plugin");

const {
	readFile
} = fs;

module.exports = new Optimizer({
	/**
	 * @param options
	 * @param options.bundle
	 * @param options.contents
	 * @param options.map
	 * @param options.map.projectRoot
	 * @example
	 */
	async optimize({
		contents,
		map,
		map: {
			projectRoot
		}
	}) {
		const packageJson = await readFile(resolve(projectRoot, "./package.json"), "utf8");
		const prependText = JSON.parse(packageJson)["parcel-optimizer-prepend"];

		return {
			contents: `${prependText}${contents}`,
			map
		};
	}
});
