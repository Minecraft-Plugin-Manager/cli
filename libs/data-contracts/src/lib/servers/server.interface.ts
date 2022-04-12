import { IPlugin } from '../plugins/plugin.interface';
import { ServerType } from './server-type.enum';

export interface IServer {
	buildVersion: number;
	mcVersion: string;
	serverType: ServerType;
	plugins: IPlugin[];
}
