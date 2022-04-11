import { container } from 'tsyringe';

import { ServerManager } from './managers/server.manager';

export class App {
	public static initialize(args): void {
		if (args?._?.length < 1) {
			return;
		}
		//
	}
	public static async exit() {
		await container.resolve(ServerManager).checkForUpdate();
		process.exit(0);
	}
}
