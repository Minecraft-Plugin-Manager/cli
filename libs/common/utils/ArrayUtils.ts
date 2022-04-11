export class ArrayUtils {
	/**
	 * Check if the array is empty
	 * Safe check on null or undefined
	 *
	 * @param array
	 * @returns {boolean} true if the array is empty
	 */
	public static isEmpty(array: unknown[]): boolean {
		return array === null || array === undefined || array.length === 0;
	}

	/**
	 * Check if the array is not empty
	 * Safe check on null or undefined
	 *
	 * @param array
	 * @returns {boolean} true if the array is not empty
	 */
	public static isNotEmpty(array: unknown[]): boolean {
		return !ArrayUtils.isEmpty(array);
	}
}
