import { container } from 'tsyringe';
import { Core } from '../core';

export class BaseCommand {
	protected _core: Core = container.resolve(Core);
}
