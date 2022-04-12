import { ServerType } from '@minecraft-plugin-manager/data-contracts';

export class Server {
	public mcVersion: string;
	public serverType: ServerType;
	public plugins: Map<string, string>;
}
