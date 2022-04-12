import { IPlugin } from '@minecraft-plugin-manager/data-contracts';
import { ArrayUtils } from '@minecraft-plugin-manager/utils';
import { container } from 'tsyringe';

import { Core } from '../../../core';

export interface IPluginVersionManager {
	getPluginVersionsFromPluginName(pluginName: string): Promise<string[]>;
	isPluginCompatible(plugin: IPlugin): Promise<boolean>;
	isPluginCompatibleByName(pluginName: string): Promise<boolean>;
}

export class PluginVersionManager implements IPluginVersionManager {
	private readonly mcVersion: string;
	private readonly plugins: IPlugin[];

  private readonly core = container.resolve(Core);

	constructor() {
    const server = this.core.serverLock;

		this.mcVersion = server.mcVersion;
		this.plugins = server.plugins;
	}

	private async getPluginByName(pluginName: string): Promise<IPlugin> {
		if (ArrayUtils.isEmpty(this.plugins)) {
			return null;
		}

		return this.plugins.find(
			(plugin: IPlugin): boolean => plugin.name === pluginName,
		);
	}

	/**
	 * Get the minecraft versions that the plugin is compatible with
	 *
	 * @param pluginName the name of the plugin
	 * @returns {Promise<string[]>} the minecraft versions
	 */
	public async getPluginVersionsFromPluginName(
		pluginName: string,
	): Promise<string[]> {
		const plugin: IPlugin = await this.getPluginByName(pluginName);

		return plugin?.compatibleMcVersions ?? [];
	}

	/**
	 * Check if the plugin is compatible with the server using the plugin's name
	 *
	 * @param pluginName the plugin name to check
	 * @returns {Promise<boolean>} true if the plugin is compatible
	 */
	public async isPluginCompatibleByName(
		pluginName: string,
	): Promise<boolean> {
		const plugin: IPlugin = await this.getPluginByName(pluginName);

		return plugin?.compatibleMcVersions.includes(this.mcVersion) ?? false;
	}

	/**
	 * Check if the plugin is compatible with the server
	 *
	 * @param plugin the plugin name to check
	 * @returns {Promise<boolean>} true if the plugin is compatible
	 */
	public async isPluginCompatible(plugin: IPlugin): Promise<boolean> {
			return plugin?.compatibleMcVersions.includes(this.mcVersion) ?? false;
	}
}