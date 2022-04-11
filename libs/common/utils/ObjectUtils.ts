export class ObjectUtils {
	/**
	 * Check if the object is defined
	 *
	 * @param object
	 * @returns {boolean} true if the object is defined
	 */
	public static isDefined(obj: unknown): boolean {
		return !ObjectUtils.isNotDefined(obj);
	}

	/**
	 * Check if the object is not defined
	 *
	 * @param object
	 * @returns {boolean} true if the object is not defined
	 */
	public static isNotDefined(obj: unknown): boolean {
		return obj === undefined || obj === null;
	}
}
