export interface PaperGetServerBuildsDto {
	projectId: string;
	projectName: string;
	versionGroup: string;
	versions: string[];
	builds: Build[];
}

interface Build {
	version: string;
	build: number;
	time: string;
	channel: string;
	promoted: boolean;
	changes: Change[];
	downloads: Downloads;
}

interface Downloads {
	application: Application;
	mojangMappings: Application;
}

interface Application {
	name: string;
	sha256: string;
}

interface Change {
	commit: string;
	summary: string;
	message: string;
}
