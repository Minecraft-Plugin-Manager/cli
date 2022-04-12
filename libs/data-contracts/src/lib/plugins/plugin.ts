import { IPlugin } from './plugin.interface';

export class Plugin implements IPlugin {
	constructor(
		public name: string,
		public version: string,
		public compatibleMcVersions: string[],
		public dependencies: Map<string, string>,
	) {}
}
