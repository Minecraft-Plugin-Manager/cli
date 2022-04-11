import { ServerType } from '../enums/server-type.enum';
import { Plugin } from './plugin.config';

export class ServerLock {
	public mcVersion: string;
	public build: string;
	public serverType: ServerType;
	public plugins: Plugin[];
}
