export interface IServerService {
	getVersions(): Promise<string[]>;
	getLatestBuild(version: string): Promise<string>;
	downLoadVersion(version: string, build: string): Promise<boolean>;
}
