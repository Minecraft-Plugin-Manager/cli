import { container } from 'tsyringe';
import { ArgumentsCamelCase, CommandModule } from 'yargs';

import { App } from '../app';
import { ServerManager } from '../managers/server.manager';
import { BaseCommand } from '../models/base-command';

export class InitilializeCommand extends BaseCommand implements CommandModule {
	public command = 'init';
	public aliases = ['initialize'];
	public describe = 'Initialize a new plugin';
	public builder(thing) {
		return thing;
	}
	public async handler(args: ArgumentsCamelCase) {
		await container.resolve(ServerManager).initialize();
		App.exit();
	}
}
