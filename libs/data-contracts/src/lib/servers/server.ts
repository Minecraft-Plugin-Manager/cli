import { IPlugin } from '../plugins/plugin';
import { ServerType } from './server-type';

export interface IServer {
	buildVersion: number;
	mcVersion: string;
	serverType: ServerType;
	plugins: IPlugin[];
}

export class Server implements IServer {
	constructor(
		public buildVersion: number,
		public mcVersion: string,
		public serverType: ServerType,
		public plugins: IPlugin[],
	) {}
}
