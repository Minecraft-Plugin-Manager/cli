import { ServerType } from '@minecraft-plugin-manager/data-contracts';
import { injectable } from 'tsyringe';

import { Core } from '../../core';
import {
	IServerService,
	PaperGetServerBuildsDto,
	PaperGetServerDto,
} from '../../models/servers';
import { HttpService } from '../http.service';

@injectable()
export class PaperMcService implements IServerService {
	public get serverUrl(): string {
		switch (Core.instance.server.serverType) {
			case ServerType.PAPERMC:
				return 'https://papermc.io/api/v2/projects/paper';
			case ServerType.WATERFALL:
				return 'https://papermc.io/api/v2/projects/waterfall';
			case ServerType.VELOCITY:
				return 'https://papermc.io/api/v2/projects/velocity';
			default:
				throw new Error('Invalid server type');
		}
	}

	constructor(private _httpService?: HttpService) {}

	public async getVersions(): Promise<string[]> {
		return (
			await this._httpService.get<PaperGetServerDto>(this.serverUrl)
		).version_groups.reverse();
	}

	public async getLatestBuild(version: string): Promise<string> {
		const data = await this._httpService.get<PaperGetServerBuildsDto>(
			`${this.serverUrl}/version_group/${version}/builds`,
		);
		return data.builds[data.builds.length - 1].build.toString();
	}
	public downLoadVersion(version: string, build: string): Promise<boolean> {
		const url =
			this.serverUrl +
			'/versions/' +
			version +
			'/builds/' +
			build +
			'/downloads/paper-' +
			version +
			'-' +
			build +
			'.jar';
		return this._httpService.getFile(url, 'server.jar');
	}
}
