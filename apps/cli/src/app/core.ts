<<<<<<< HEAD
import * as fs from 'fs';
import { environment } from "../environments/environment.prod";
export class Core {
	private static instance_: Core;

  serverPath = "~/fakeMinecraftServer"; //Might want to change for "./" in the prod env
  pluginFilePath:string = this.serverPath +  "/plugins.json";
  pluginLockFilePath:string = this.serverPath + "/plugins-lock.json"

=======
import { singleton, container } from 'tsyringe';
@singleton()
export class Core {
>>>>>>> 70ff30e40a0cb606d714ec5abd4ade99878af415
	public static get instance(): Core {
		return container.resolve(Core);
	}

	private _plugin: string;
	public get plugin(): string {
		return this._plugin;
	}
	public set plugin(v: string) {
		this._plugin = v;
	}

	private _pluginLock: string;
	public get pluginLock(): string {
		return this._pluginLock;
	}
	public set pluginLock(v: string) {
		this._pluginLock = v;
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
