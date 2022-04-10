import { ArgumentsCamelCase, CommandModule } from "yargs";
import { BaseCommand } from "../models/base-command";

export class InstallCommand extends BaseCommand implements CommandModule{

        aliases= ["i"];

        command = "install";

        describe = "Install one or multiple plugins"

        /** a function which will be passed the parsed argv. */
        handler(args){
          console.log("veux-tu bien manger ma chatte: ", args.values );
          this._core.checkPluginsFiles();
        }

        builder(args){
          return args;
        };

}
