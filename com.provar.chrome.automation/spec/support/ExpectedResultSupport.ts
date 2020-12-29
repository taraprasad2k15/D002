export class ExpectedResultSupport {

	private arrOfKeys: string[];
	private keysCompared: string[];
	private VALUE_CREATED: string;
	private VALUE_UPDATED: string;
	private VALUE_DELETED: string;
	private VALUE_UNCHANGED: string;

	constructor() {
		this.arrOfKeys = [];
		this.keysCompared = [];
		this.VALUE_CREATED = 'Created';
		this.VALUE_UPDATED = 'Changed';
		this.VALUE_DELETED = 'Deleted';
		this.VALUE_UNCHANGED = 'Unchanged';
	}

	public addCompareOptions(object, compareOptions) {
		object['compareOptions'] = compareOptions;
		return object;
	}

	public checkStringWithRegExps(str: string, ...regExps) {
		if (regExps && regExps.length && this.isArrayOfRegExps(regExps[0])) {
			regExps = regExps[0];
		}

		return regExps.every((e: RegExp) => e.test(str));
	}

	public compareObjects(compareOptions, actualValue: any, ...expectedValue: any[]): any {
		let result;
		if (actualValue instanceof Array) {
			result = [];
			if (compareOptions && compareOptions.strict) {
				result = this.strictCompareObjectRecursive(actualValue, expectedValue, compareOptions.inherit, compareOptions.ignoreAttributes);
			} else {
				for (let i = 0; i < expectedValue.length; i++) {
					result[i] = this.compareObjectRecursive(actualValue[i], expectedValue[i], compareOptions && compareOptions.ignoreAttributes);
				}
			}
		} else {
			if (compareOptions && compareOptions.strict) {
				result = this.strictCompareObjectRecursive(actualValue, expectedValue[0], compareOptions.inherit, compareOptions.ignoreAttributes);
			} else {
				result = this.compareObjectRecursive(actualValue, expectedValue[0], compareOptions && compareOptions.ignoreAttributes);
			}

		}

		return result;
	}

	private compareObjectRecursive(actualObj: any, expectedObj: any, ignoreAttributes: string[]) {
		if (this.isFunction(expectedObj) || this.isFunction(actualObj)) {
			throw new Error('Invalid argument. Function given, object expected.');
		}

		if ((expectedObj instanceof RegExp || this.isArrayOfRegExps(expectedObj)) && typeof actualObj === 'string') {
			if (this.checkStringWithRegExps(actualObj, expectedObj)) {
				return null;
			} else {
				return {
					Result: 'Changed',
					ExpectedValue: (expectedObj === undefined) ? undefined : expectedObj,
					ActualValue: (actualObj === undefined) ? undefined : actualObj,
				};
			}
		}

		if (this.isValue(expectedObj) || this.isValue(actualObj)) {
			const rslt = this.compareValues(expectedObj, actualObj);
			if (rslt !== 'Unchanged') {
				return {
					Result: rslt,
					ExpectedValue: (expectedObj === undefined) ? undefined : expectedObj,
					ActualValue: (actualObj === undefined) ? undefined : actualObj,
				};
			} else {
				return null;
			}
		}
		const diff = {};
		for (const key in expectedObj) {
			if (this.isFunction(expectedObj[key]) || key === 'compareOptions' || (ignoreAttributes && ignoreAttributes.find(e => e === key))) {
				continue;
			}

			if (this.isObject(actualObj[key])) {
				if (this.isObject(expectedObj[key])) {
					let result;
					let include = true;
					if (expectedObj[key].compareOptions && expectedObj[key].compareOptions.strict) {
						result = this.strictCompareObjectRecursive(actualObj[key], expectedObj[key], expectedObj[key].compareOptions.inherit, ignoreAttributes);
						if (this.isArray(expectedObj[key])) {
							if (!result['_length']) {
								include = false;
								for (const i in result) {
									if (result[i]) {
										include = true;
									}
								}
							}
						}
					} else if (expectedObj[key].compareOptions && expectedObj[key].compareOptions.partial) {
						result = this.comparePartialArrays(actualObj[key], expectedObj[key], ignoreAttributes);
					} else if (key == 'argument'){
						result = this.comparePartialArrays2(actualObj[key], expectedObj[key], ignoreAttributes);
					}else 	{
						result = this.compareObjectRecursive(actualObj[key], expectedObj[key], ignoreAttributes);
					}

					if (result !== null && include) {
						diff[key] = result;
					} else {
						this.arrOfKeys.push(key);
					}
				}
			} else {
				let result;
				if (expectedObj[key] && expectedObj[key].compareOptions && expectedObj[key].compareOptions.strict) {
					result = this.strictCompareObjectRecursive(actualObj[key], expectedObj[key], expectedObj[key].compareOptions.inherit, ignoreAttributes);
				} else {
					result = this.compareObjectRecursive(actualObj[key], expectedObj[key], ignoreAttributes);
				}

				if (result !== null) {
					diff[key] = result;
				} else {
					this.arrOfKeys.push(key);
				}
			}
		}

		if (Object.keys(diff).length === 0) {
			return null;
		}

		return diff;
	}

	private comparePartialArrays(actualArray: any[], expectedArray: any[], ignoreAttributes: string[]): any {
		const diff = {};
		const indexKey = expectedArray['compareOptions']['indexKey'];
		for (const key in expectedArray) {
			if (this.isFunction(expectedArray[key]) || key === 'compareOptions' || (ignoreAttributes && ignoreAttributes.find(e => e === key))) {
				continue;
			}
			const actualObj = actualArray.find(e => this.compareObjectRecursive(e[indexKey], expectedArray[key][indexKey], ignoreAttributes) === null);
			if (actualObj) {
				const result = this.compareObjectRecursive(actualObj, expectedArray[key], ignoreAttributes);
				if (result != null) {
					diff[key] = result;
				}
			} else {
				diff[key] = {
					Result: 'Deleted',
					ExpectedValue: (expectedArray[key] === undefined) ? undefined : expectedArray[key],
					ActualValue: (actualObj === undefined) ? undefined : actualObj,
				};
			}
		}
		if (Object.keys(diff).length === 0) {
			return null;
		}
		return diff;
	}
	private comparePartialArrays2(actualArray: any[], expectedArray: any[], ignoreAttributes: string[]): any {
		const diff = {};
		const indexKey = 'id';
		for (const key in expectedArray) {
			if (this.isFunction(expectedArray[key]) || key === 'compareOptions' || (ignoreAttributes && ignoreAttributes.find(e => e === key))) {
				continue;
			}
			const actualObj = actualArray.find(e => this.compareObjectRecursive(e[indexKey], expectedArray[key][indexKey], ignoreAttributes) === null);
			if (actualObj) {
				const result = this.compareObjectRecursive(actualObj, expectedArray[key], ignoreAttributes);
				if (result != null) {
					diff[key] = result;
				}
			} else {
				diff[key] = {
					Result: 'Deleted',
					ExpectedValue: (expectedArray[key] === undefined) ? undefined : expectedArray[key],
					ActualValue: (actualObj === undefined) ? undefined : actualObj,
				};
			}
		}
		if (Object.keys(diff).length === 0) {
			return null;
		}
		return diff;
	}
	private strictCompareObjectRecursive(actualObj: any, expectedObj: any, inherit: boolean, ignoreAttributes: string[]) {
		this.keysCompared = [];

		if (this.isValue(expectedObj) || this.isValue(actualObj)) {
			const rslt = this.compareValues(actualObj, expectedObj);
			if (rslt !== 'Unchanged') {
				return {
					Result: rslt,
					ExpectedValue: (expectedObj === undefined) ? undefined : expectedObj,
					ActualValue: (actualObj === undefined) ? undefined : actualObj,
				};
			} else {
				return null;
			}
		}

		const diff = {};
		if (this.isArray(expectedObj) && this.isArray(actualObj)) {
			if (expectedObj.length !== actualObj.length) {
				diff['_length'] = this.compareValues(expectedObj.length, actualObj.length);
			}
		}
		let result;
		for (const key in actualObj) {
			if (this.isFunction(expectedObj[key]) || (ignoreAttributes && ignoreAttributes.find(e => e === key))) {
				continue;
			}

			if (this.isObject(expectedObj[key])) {
				if (this.isObject(actualObj[key])) {
					if (inherit) {
						result = this.strictCompareObjectRecursive(actualObj[key], expectedObj[key], inherit, ignoreAttributes);
					} else if (expectedObj[key].compareOptions && expectedObj[key].compareOptions.strict) {
						result = this.strictCompareObjectRecursive(actualObj[key], expectedObj[key], expectedObj[key].compareOptions.inherit, ignoreAttributes);
					} else {
						result = this.compareObjectRecursive(actualObj[key], expectedObj[key], ignoreAttributes);
					}
					// Number check is added to handle array scenario
					if (result !== null || Number.isInteger(Number(key))) {
						diff[key] = result;
					} else {
						this.arrOfKeys.push(key);
					}
				}
			} else {
				// Key is not present in ExpectedObj
				result = this.compareObjectRecursive(actualObj[key], expectedObj[key], ignoreAttributes);
				// Number check is added to handle array scenario
				if (result !== null || Number.isInteger(Number(key))) {
					diff[key] = result;
				} else {
					this.arrOfKeys.push(key);
				}
			}
			this.keysCompared.push(key);
		}

		for (const key in expectedObj) {
			// Iterating keys which are not present in Actual Object
			if (this.keysCompared.indexOf(key) < 0) {
				if (this.isFunction(expectedObj[key]) || key === 'compareOptions' || (ignoreAttributes && ignoreAttributes.find(e => e === key))) {
					continue;
				}

				result = this.compareObjectRecursive(actualObj[key], expectedObj[key], ignoreAttributes);
				if (result !== null) {
					diff[key] = result;
				} else {
					this.arrOfKeys.push(key);
				}
			}
		}

		if (Object.keys(diff).length === 0) {
			return null;
		}

		return diff;
	}

	private compareValues(value1, value2): string {

		if (value1 === value2) {
			return this.VALUE_UNCHANGED;
		}

		if (this.isDate(value1) && this.isDate(value2) && value1.getTime() === value2.getTime()) {
			return this.VALUE_UNCHANGED;
		}

		if ('undefined' === typeof (value1)) {
			return this.VALUE_CREATED;
		}

		if ('undefined' === typeof (value2)) {
			return this.VALUE_DELETED;
		}
		if (typeof value1 === "string" && typeof value2 === "string"){
			let re = /:ui:target/gi;
			// if both values are in the URI format and are of equal length, go into the below validation check
			if (value1.search(re) !== -1 && value2.search(re) !== -1 && value1.length === value2.length) {
				// segregate all the individual key-value pairs and then do the comparision
				let value1Array: string[] = value1.split("?")[1].split("&"); 
				let value2Array: string[] = value2.split("?")[1].split("&"); 
				let urimatched = true;
				for(let i=0; i<value1Array.length; i++){
					let subattribmatched = false;
					for(let j=0; j<value2Array.length; j++){
						if (value1Array[i] === value2Array[j]){
							subattribmatched = true;
							break;
						}
					}
					if(!subattribmatched){
						urimatched = false;
						// console.log(" the value:",value1Array[i]," not found string:", value2);
						break;
					}
				}
				if(urimatched){
					return this.VALUE_UNCHANGED;
				}
				
			} else {
				let re1 = /ui:locator/gi;
				if (value1.search(re1) !== -1 && value2.search(re1) !== -1 && value1.length === value2.length) {
					// segregate all the individual key-value pairs and then do the comparision
					let value1Array: string[] = value1.split("?")[1].split("%"); 
					let value2Array: string[] = value2.split("?")[1].split("%"); 
					let urimatched = true;
					for(let i=0; i<value1Array.length; i++){
						let subattribmatched = false;
						for(let j=0; j<value2Array.length; j++){
							if (value1Array[i] === value2Array[j]){
								subattribmatched = true;
								break;
							}
						}
						if(!subattribmatched){
							urimatched = false;
							// console.log(" the value:",value1Array[i]," not found string:", value2);
							break;
						}
					}
					if(urimatched){
						return this.VALUE_UNCHANGED;
					}
					
				}
			}
		}

		return this.VALUE_UPDATED;
	}

	private isFunction(obj): boolean {
		return {}.toString.apply(obj) === '[object Function]';
	}

	private isArray(obj): boolean {
		return obj instanceof Array;
	}

	private isArrayOfRegExps(obj: RegExp[]): boolean {
		return this.isArray(obj) && obj.every(e => e instanceof RegExp);
	}

	private isObject(obj): boolean {
		return obj instanceof Object;
	}

	private isDate(obj): boolean {
		return {}.toString.apply(obj) === '[object Date]';
	}

	private isValue(obj): boolean {
		return !this.isObject(obj) && !this.isArray(obj);
	}
}