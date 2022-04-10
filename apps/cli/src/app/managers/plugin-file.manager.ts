import * as fs from 'fs';
import { singleton } from 'tsyringe';
import { Server } from '../models/config';

@singleton()
export class PluginFileManager{
  serverPath = process.cwd()
  pluginFilePath:string = this.serverPath +  "/plugins.json";
  pluginLockFilePath:string = this.serverPath + "/plugins-lock.json"

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

  public getPluginFileConfig(): Server{
    const server: Server = JSON.parse(fs.readFileSync(this.pluginFilePath,"utf-8"));
    return server;
  }


  public saveToPluginFile(obj:any):void{ //TODO Change type once we have a solid PluginFile Object Model
    fs.writeFileSync(this.pluginFilePath,JSON.stringify(obj,null,"\t"));
  }

  public saveToPluginLockFile(obj:any):void{//Change type once we have a solid PluginLockFile Object Model
    fs.writeFileSync(this.pluginLockFilePath,JSON.stringify(obj,null,"\t"));
  }
}
