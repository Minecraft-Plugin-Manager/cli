import { singleton, container } from 'tsyringe';
@singleton()
export class Core {
	public static get instance(): Core {
		return container.resolve(Core);
	}

	private _plugin: string;
	public get plugin(): string {
		return this._plugin;
	}
	public set plugin(v: string) {
		this._plugin = v;
	}

	private _pluginLock: string;
	public get pluginLock(): string {
		return this._pluginLock;
	}
	public set pluginLock(v: string) {
		this._pluginLock = v;
	}

	constructor() {
		// todo init data
	}
}
