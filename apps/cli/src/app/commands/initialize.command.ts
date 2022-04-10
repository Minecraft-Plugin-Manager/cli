import * as inquirer from 'inquirer';
import { ArgumentsCamelCase, CommandModule } from 'yargs';
import * as cliSpinners from 'cli-spinners';
import { BaseCommand } from '../models/base-command';
import { ServerType } from '../models/enums';
export class InitilializeCommand extends BaseCommand implements CommandModule {
	public command = 'init';
	public aliases = ['initialize'];
	public describe = 'Initialize a new plugin';
	public builder(thing) {
		return thing;
	}
	public async handler(args: ArgumentsCamelCase) {
		console.clear();
		const answer = await inquirer.prompt([
			{
				type: 'list',
				name: 'server',
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

		console.log('answer', answer);
	}
}
