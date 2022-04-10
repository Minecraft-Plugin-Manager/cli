import { ServerType } from '../enums/server-type.enum';
import { Plugin } from './plugin.config';

export class ServerLock {
	public mcVersion: string;
	public build: number;
	public serverType: ServerType;
	public plugins: Plugin[];
}
