import { IServerService } from '../../models/servers';
import * as fs from 'fs';
import * as http from 'http';
import { Core } from '../../core';

export class PaperMcService implements IServerService {
	public get serverUrl(): string {
		switch (Core.instance.plugin) {
			case PAPERMC:
				return 'https://papermc.io/api/v2/projects/paper';
				break;
			case WATERFALL:
				return 'https://papermc.io/api/v2/projects/waterfall';
				break;
			case VELOCITY:
				return 'https://papermc.io/api/v2/projects/velocity';
				break;
			default:
				throw new IllegalArgumentException('Invalid server type');
		}
	}

	constructor() {}

	getVersions(): string {
		const file = fs.createWriteStream('file.jpg');
		const request = http.get(
			'http://i3.ytimg.com/vi/J---aiyznGQ/mqdefault.jpg',
			function (response) {
				response.pipe(file);

				// after download completed close filestream
				file.on('finish', () => {
					file.close();
					console.log('Download Completed');
				});
			},
		);
		// try {
		//   String data = HttpUtils.get(API_URL);
		//   GetWaterfallVersionsReponseDto dto = new Gson()
		//   .fromJson(data, GetWaterfallVersionsReponseDto.class);
		//   return dto.versions;
		// } catch (IOException e) {
		//   App.LOGGER.log(
		//     Level.SEVERE,
		//     String.format("Failed to fetch server versions.%n %s", API_URL)
		//   );
		// }
		// return new ArrayList<>();
	}
	getLatestBuild(version: string): string {
		throw new Error('Method not implemented.');
	}
	downLoadVersion(version: string): boolean;
	downLoadVersion(version: string, build: string): boolean;
	downLoadVersion(version: any, build?: any): boolean {
		throw new Error('Method not implemented.');
	}
}
