import { InitilializeCommand } from './commands/initialize.command';

export function initialize(args): void {
	new InitilializeCommand().handler({ _: [''], values: ['yest'], $0: '' });
}
