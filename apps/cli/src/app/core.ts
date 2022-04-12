import { ServerType } from '@minecraft-plugin-manager/data-contracts';
import { container,singleton } from 'tsyringe';

import { Server, ServerLock } from './models/config';

@singleton()
export class Core {
	public static get instance(): Core {
		return container.resolve(Core);
	}

	private _server: Server;
	public get server(): Server {
		if (!this._server) {
			this._server = {
				mcVersion: '1.18',
				serverType: ServerType.PAPERMC,
				plugins: new Map(),
			};
		}

		return this._server;
	}
	public set server(v: Server) {
		this._server = v;
	}

	private _serverLock: ServerLock;
	public get serverLock(): ServerLock {
		if (!this._serverLock) {
			this._serverLock = {
				mcVersion: '1.18',
				build: '280',
				serverType: ServerType.PAPERMC,
				plugins: [],
			};
		}
		return this._serverLock;
	}
	public set serverLock(v: ServerLock) {
		this._serverLock = v;
	}

	constructor() {
		// todo init data
	}
}
