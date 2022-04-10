import { ArgumentsCamelCase, CommandModule } from 'yargs';
import { BaseCommand } from '../models/base-command';

export class InitilializeCommand extends BaseCommand implements CommandModule {
	command = 'init';
	aliases? = ['initialize'];
	describe = 'Initialize a new plugin';
	builder(thing) {
		return thing;
	}
	handler(args: ArgumentsCamelCase) {
		console.log('Initialize a new plugin', args);
	}
}
