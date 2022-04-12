import { IPlugin } from "@minecraft-plugin-manager/data-contracts";

export class Plugin implements IPlugin {
	public name: string;
  public compatibleMcVersions: string[];
	public version: string;
	public dependencies: Map<string, string>;
}
