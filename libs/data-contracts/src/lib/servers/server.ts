import { IPlugin } from '../plugins/plugin.interface';
import { IServer } from './server.interface';
import { ServerType } from './server-type.enum';

export class Server implements IServer {
	constructor(
		public buildVersion: number,
		public mcVersion: string,
		public serverType: ServerType,
		public plugins: IPlugin[],
	) {}
}
