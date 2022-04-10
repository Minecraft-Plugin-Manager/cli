import { ArgumentsCamelCase, CommandModule } from 'yargs';
import { BaseCommand } from '../models/base-command';

export class InitilializeCommand extends BaseCommand implements CommandModule {
	public command = 'init';
	public aliases = ['initialize'];
	public describe = 'Initialize a new plugin';
	public builder(thing) {
		return thing;
	}
	public handler(args: ArgumentsCamelCase) {
		console.log('Initialize a new plugin', args);
	}
}
