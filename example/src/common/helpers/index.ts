import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';

dayjs.extend(calendar);

/**
 * Timeout function that accepts a promise. Typically used inside a Refresh action
 * @param timeout - number
 * @returns Promise
 */
export const wait = (timeout: number) => {
	return new Promise((resolve) => setTimeout(resolve, timeout));
};

/**
 * Helper to upload any file to AWS S3
 * @param file file object
 * @param url
 * @returns Response from S3
 */
export const uploadFile = async (
	file: {
		uri: string;
		type: string;
		name: string;
	},
	url: string,
	setPercentage?: (percent: number) => void,
) =>
	new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open('PUT', url);
		xhr.onload = () => {
			if (xhr.status >= 200 && xhr.status < 300) {
				resolve(xhr.response);
			} else {
				reject(xhr.statusText);
			}
		};
		xhr.onerror = () => reject(xhr.statusText);
		xhr.upload.onprogress = ({ loaded, total }) => {
			if (!setPercentage) return;

			const percent = Math.floor((loaded * 100) / total);

			setPercentage(percent);
		};
		xhr.setRequestHeader('Content-Type', file.type);
		xhr.send({ uri: file.uri, type: file.type, name: file.name });
	});
