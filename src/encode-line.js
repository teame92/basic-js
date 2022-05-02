const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let result = '';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        const curr = str[i];
        const next = str[i + 1];
        if (curr === next) {
            count += 1;
        } else {
            if (count) {
                result += count + 1;
                count = 0;
            }
            result += curr;
        }
    }
    return result;
}

module.exports = {
    encodeLine
};