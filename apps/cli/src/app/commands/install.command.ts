import path = require("path");
import {CommandModule, string } from "yargs";
import { PluginFileManager } from "../managers/plugin-file.manager";
import { BaseCommand } from "../models/base-command";
import { Plugin, Server } from "../models/config";
import { ServerType } from "../models/enums";

export class InstallCommand extends BaseCommand implements CommandModule{

        aliases= ["i"];

        command = "install";

        describe = "Install one or multiple plugins"

        /** a function which will be passed the parsed argv. */
        handler(args){
          const pfm : PluginFileManager = this._core.PluginFileManager;

          if(!pfm.pluginFileExists()){
            pfm.createPluginFile();
          }

          const testServer = new Server();
          testServer.mcVersion= "1.18";
          testServer.serverType = ServerType.BUKKIT;
          testServer.plugins["essentialsx"]= "2.19.4";
          testServer.plugins["luckperms"]= "5.4.18";
          pfm.saveToPluginFile(testServer);

          const testServer2 = pfm.getPluginFileConfig();

          console.log(testServer.plugins["essentialsx"]);
          console.log(testServer2.plugins["essentialsx"]);



        }

        builder(args){
          return args;
        };

}
