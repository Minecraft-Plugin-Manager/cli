export interface IServerService {
	getVersions(): string;
	getLatestBuild(version: string): string;
	downLoadVersion(version: string): boolean;
	downLoadVersion(version: string, build: string): boolean;
}
