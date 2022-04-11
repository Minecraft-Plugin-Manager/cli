import 'reflect-metadata';

import yargs from 'yargs';

import { App } from './app/app';
import { InitilializeCommand } from './app/commands/initialize.command';

const args: any = yargs(process.argv.slice(2))
	.help()
	.command(new InitilializeCommand())
	.command(
		['install [value]', 'i [value]'],
		'Install a new plugin',
		(instance) =>
			instance.positional('value', {
				describe: 'element to install',
				default: null,
			}),
	)
	.boolean('f')
	.parse();

try {
	App.initialize(args);
} catch (e) {
	console.trace(e);
}
