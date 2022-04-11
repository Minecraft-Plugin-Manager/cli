import {
	IServerService,
	PurpurGetServerBuildsDto,
	PurpurGetServerDto,
} from '../../models/servers';
import { HttpService } from '../http.service';
import { injectable } from 'tsyringe';

@injectable()
export class PurpurService implements IServerService {
	public get serverUrl(): string {
		return 'https://api.purpurmc.org/v2/purpur';
	}

	constructor(private _httpService?: HttpService) {}

	public async getVersions(): Promise<string[]> {
		return (
			await this._httpService.get<PurpurGetServerDto>(this.serverUrl)
		).versions.reverse();
	}

	public async getLatestBuild(version: string): Promise<string> {
		const data = await this._httpService.get<PurpurGetServerBuildsDto>(
			`${this.serverUrl}/${version}`,
		);
		return data.builds.latest;
	}
	public downLoadVersion(version: string, build: string): Promise<boolean> {
		const url = this.serverUrl + '/' + version + '/' + build + '/download';
		return this._httpService.getFile(url, 'server.jar');
	}
}
