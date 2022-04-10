import * as fs from 'fs';
import path = require('path');
import { singleton, container } from 'tsyringe';
import { PluginFileManager } from './managers/plugin-file.manager';
@singleton()
export class Core {

  serverPath = process.cwd()
  pluginFilePath:string = this.serverPath +  "/plugins.json";
  pluginLockFilePath:string = this.serverPath + "/plugins-lock.json"

	public static get instance(): Core {
		return container.resolve(Core);
	}

	constructor() {
		// todo init data
	}


  public get PluginFileManager(): PluginFileManager{
    return container.resolve(PluginFileManager);
  }


}
