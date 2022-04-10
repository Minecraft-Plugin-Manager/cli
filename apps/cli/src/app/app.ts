import { InitilializeCommand } from './commands/initialize.command';
import { Core } from './core';

export function initialize(args): void {
	new InitilializeCommand().handler({ _: [''], values: ['yest'], $0: '' });
}
