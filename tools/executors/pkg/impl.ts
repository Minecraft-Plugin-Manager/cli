import type { ExecutorContext } from '@nrwl/devkit';
import { exec } from 'pkg';

export interface EchoExecutorOptions {
	assets: string;
	scripts: string;
	entryFile: string;
}

export default async function echoExecutor(
	options: EchoExecutorOptions,
	context: ExecutorContext,
): Promise<{ success: boolean }> {
	const folder =
		context.root +
		'\\dist\\' +
		context.workspace.projects[context.projectName].root +
		'\\';
	try {
		await exec([
			folder + options.entryFile,
			'--out-path',
			context.root + '\\dist\\pkg',
			'--assets',
			folder + 'assets',
		]);
		return { success: true };
	} catch (e) {
		console.error(e);
		return { success: false };
	}
}
