const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const result = {};

    for (let i of domains) {
        const domain = i.split('.').map(val => '.' + val).reverse();
        let dns = '';
        let j = 0;
        while (j < domain.length) {
            dns += domain[j];
            if (!result.hasOwnProperty(dns)) {
                result[dns] = 0;
            }
            result[dns] += 1;
            j++;
        }
    }

    return result;
}

module.exports = {
    getDNSStats
};