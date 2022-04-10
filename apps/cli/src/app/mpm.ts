import { library } from '@minecraft-plugin-manager/library';
import { Core } from './core';

export function initialize(args): void {
	new Core();
	console.log(args);
	console.log(library());
}
