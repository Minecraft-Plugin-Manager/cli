export class Core {
	private static instance_: Core;

	public static get instance(): Core {
		if (!Core.instance_) {
			Core.instance_ = new Core();
		}
		return Core.instance_;
	}

	constructor() {
		// todo init data
	}
}
