export interface PurpurGetServerBuildsDto {
	builds: Builds;
	project: string;
	version: string;
}

interface Builds {
	all: string[];
	latest: string;
}
