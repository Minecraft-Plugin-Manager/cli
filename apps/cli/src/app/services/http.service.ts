import * as fs from 'fs';
import * as https from 'https';
import { injectable } from 'tsyringe';

@injectable()
export class HttpService {
	public get<T>(url: string): Promise<T> {
		return new Promise((resolve, reject) => {
			https.get(url, (response) => {
				let data = '';
				response.on('data', (chunk) => {
					data += chunk;
				});
				response.on('end', () => {
					resolve(JSON.parse(data));
				});
				response.on('error', (err) => reject(err));
			});
		});
	}

	public getFile(url: string, filePath: string): Promise<boolean> {
		return new Promise((resolve, reject) => {
			const file = fs.createWriteStream(filePath);
			try {
				https.get(url, (response) => {
					response.pipe(file);
					file.on('finish', () => {
						file.close();
						resolve(true);
					});
				});
			} catch (e) {
				file.close();
				reject(e);
			}
		});
	}
}
