import { container } from 'tsyringe';
import { ServerManager } from './managers/server.manager';

export function initialize(args): void {
	if (args._.length < 1) {
		return;
	}
	container.resolve(ServerManager).checkForUpdate();
}
