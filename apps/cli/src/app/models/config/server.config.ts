import { ServerType } from '../enums';

export class Server {
	public mcVersion: string;
	public build: number;
	public serverType: ServerType;
	public plugins: { [key: string]: string };
}
