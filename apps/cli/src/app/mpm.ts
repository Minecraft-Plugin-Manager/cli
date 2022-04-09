import { library } from '@minecraft-plugin-manager/library';
import { Arguments, CamelCaseKey } from 'yargs';

export function initialize<T>(args: {
	[key in keyof Arguments<T> as key | CamelCaseKey<key>]: Arguments<T>[key];
}): void {
	console.log(args.install);
	console.log(library());
}
