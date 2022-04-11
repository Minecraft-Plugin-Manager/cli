import { singleton, container } from 'tsyringe';
import { Server, ServerLock } from './models/config';
import { ServerType } from './models/enums';
@singleton()
export class Core {
	public static get instance(): Core {
		return container.resolve(Core);
	}

	private _plugin: Server;
	public get plugin(): Server {
		if (!this._plugin) {
			this._plugin = {
				mcVersion: '1.18',
				serverType: ServerType.PAPERMC,
				plugins: {},
			};
		}

		return this._plugin;
	}
	public set plugin(v: Server) {
		this._plugin = v;
	}

	private _pluginLock: ServerLock;
	public get pluginLock(): ServerLock {
		if (!this._pluginLock) {
			this._pluginLock = {
				mcVersion: '1.18',
				build: '280',
				serverType: ServerType.PAPERMC,
				plugins: [],
			};
		}
		return this._pluginLock;
	}
	public set pluginLock(v: ServerLock) {
		this._pluginLock = v;
	}

	constructor() {
		// todo init data
	}
}
