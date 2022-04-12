import { IPlugin, ServerType } from '@minecraft-plugin-manager/data-contracts';

export class ServerLock {
	public mcVersion: string;
	public build: string;
	public serverType: ServerType;
	public plugins: IPlugin[];
}
