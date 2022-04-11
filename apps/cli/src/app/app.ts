import { container } from 'tsyringe';
import { ServerManager } from './managers/server.manager';

export function initialize(args): void {
	container.resolve(ServerManager).checkForUpdate();
}
