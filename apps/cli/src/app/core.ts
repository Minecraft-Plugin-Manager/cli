import * as fs from 'fs';
import { environment } from "../environments/environment.prod";
export class Core {
	private static instance_: Core;

  serverPath = "~/fakeMinecraftServer"; //Might want to change for "./" in the prod env
  pluginFilePath:string = this.serverPath +  "/plugins.json";
  pluginLockFilePath:string = this.serverPath + "/plugins-lock.json"

	public static get instance(): Core {
		if (!Core.instance_) {
			Core.instance_ = new Core();
		}
		return Core.instance_;
	}

	constructor() {
		// todo init data
	}

  public pluginFileExists(): boolean{
    return fs.existsSync(this.pluginFilePath);
  }
  public pluginLockFileExists(): boolean{
    return fs.existsSync(this.pluginLockFilePath);
  }

  public createPluginFile():void{
    fs.writeFileSync(this.pluginFilePath,"");
  }

  public createPluginLockFile():void{
    fs.writeFileSync(this.pluginLockFilePath,"");
  }

  public saveToPluginFile(obj:any):void{
    fs.writeFileSync(this.pluginFilePath,JSON.stringify(obj));
  }

  // public checkPluginsFiles():void {
  //   console.log(this.pluginFilePath);

  //   const pluginFileExists = fs.existsSync(this.pluginFilePath);
  //   const pluginLockFileExists = fs.existsSync(this.pluginLockFilePath);

  //   if(!pluginFileExists && !pluginFileExists){
  //     console.log("Both .json don't exist")
  //   // eslint-disable-next-line no-dupe-else-if
  //   }else if(!pluginFileExists){
  //     console.log("Plugins.json doesn't exist");
  //   }else if(!pluginLockFileExists){
  //     console.log("Plugins-lock.json doesn't exist")
  //   }
  // }
}
