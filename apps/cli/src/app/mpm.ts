import { library } from '@minecraft-plugin-manager/library';
import { Arguments, CamelCaseKey } from 'yargs';
import { InstallCommand } from './commands/install.command';

export function initialize<T>(args) {
	new InstallCommand().handler({values:["essentials-x"]});
}
