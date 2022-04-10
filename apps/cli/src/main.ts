import yargs from 'yargs';
import { initialize } from './app/mpm';

const args: any = yargs(process.argv.slice(2))
	.help()
	.command(['init', 'initialize'], 'Initialize a new plugin')
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



initialize(args);
