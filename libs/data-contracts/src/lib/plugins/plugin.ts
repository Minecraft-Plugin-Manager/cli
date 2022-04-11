export interface IPlugin {
	name: string;
	version: string;
	description: string;
	compatibleMcVersions: string[];
	dependencies: Map<string, string>;
}

export class Plugin implements IPlugin {
	constructor(
		public name: string,
		public version: string,
		public description: string,
		public compatibleMcVersions: string[],
		public dependencies: Map<string, string>,
	) {}
}
