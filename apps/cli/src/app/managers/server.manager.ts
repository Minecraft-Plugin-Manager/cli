import inquirer = require('inquirer');
import { container } from 'tsyringe';

import { Core } from '../core';
import { ServerType } from '../models/enums';
import { IServerService } from '../models/servers';
import { PaperMcService, PurpurService } from '../services/servers';

export class ServerManager {
	private get _service(): IServerService {
		switch (Core.instance.plugin.serverType) {
			case ServerType.PAPERMC:
			case ServerType.VELOCITY:
			case ServerType.WATERFALL:
				return container.resolve(PaperMcService);
			case ServerType.PURPUR:
				return container.resolve(PurpurService);
		}
	}

	public async initialize() {
		console.clear();
		const { serverType } = await inquirer.prompt([
			{
				type: 'list',
				name: 'serverType',
				message: 'What server jar do you want to install?',
				choices: [
					...Object.values(ServerType).map(
						(name) =>
							name[0].toUpperCase() +
							name.substring(1).toLowerCase(),
					),
				],
			},
		]);
		Core.instance.plugin.serverType =
			serverType.toLowerCase() as ServerType;
		const versions = await this._service.getVersions();

		const { serverVersion } = await inquirer.prompt([
			{
				type: 'list',
				name: 'serverVersion',
				message:
					'What version of Minecraft do you want the server to be on?',
				choices: versions,
			},
		]);
		Core.instance.plugin.mcVersion = serverVersion;
		Core.instance.pluginLock.mcVersion = serverVersion;
		const build = await this._service.getLatestBuild(serverVersion);
		Core.instance.pluginLock.build = build;
		const success = await this._service.downLoadVersion(
			serverVersion,
			build,
		);
		if (success) {
			console.log('Installed server jar successfully');
		} else {
			console.log('Failed to install server jar');
		}
		return success;
	}

	public async checkForUpdate() {
		const build = await this._service.getLatestBuild(
			Core.instance.plugin.mcVersion,
		);
		if (Number(build) > Number(Core.instance.pluginLock.build)) {
			inquirer
				.prompt({
					name: 'update',
					type: 'confirm',
					message:
						'A new version of the server is available. Do you want to update?',
				})
				.then(async ({ update }) => {
					if (update) {
						await this.update();
					}
				});
		}
	}

	public async update() {
		const build = await this._service.getLatestBuild(
			Core.instance.plugin.mcVersion,
		);
		Core.instance.pluginLock.build = build;
		const success = await this._service.downLoadVersion(
			Core.instance.plugin.mcVersion,
			build,
		);
		if (success) {
			Core.instance.pluginLock.build = build;
			console.log('Updated server jar successfully');
		}
	}
}
