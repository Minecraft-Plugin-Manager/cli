import yargs from 'yargs';
import { InstallCommand } from './app/commands/install.command';
import { initialize } from './app/mpm';


// let argvSplit = process.argv.slice(2);

// if(argvSplit.length > 0){
//   yargs(process).help();
// }


const args: any = yargs(process.argv.slice(2))
	.help()
	.command(['init', 'initialize'], 'Initialize a new plugin')
<<<<<<< HEAD
  .command(new InstallCommand())
	// .command(
	// 	['install [value]', 'i [value]'],
	// 	'Install a new plugin',
	// 	(instance) =>
	// 		instance.positional('value', {
	// 			describe: 'element to install',
	// 			default: null,
	// 		}),
	// )
	.boolean('f').argv;

initialize(args);
