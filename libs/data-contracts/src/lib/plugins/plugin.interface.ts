export interface IPlugin {
	name: string;
	version: string;
	compatibleMcVersions: string[];
	dependencies: Map<string, string>;
}
