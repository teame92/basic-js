const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    str = `${str}`;
    let additional = "";
    let newStr = "";
    if (!options.repeatTimes) {
        options.repeatTimes = 1;
    }
    if (!options.separator) {
        options.separator = "+";
    }
    if (options.addition === undefined) {
        options.addition = "";
    }
    if (!options.additionRepeatTimes) {
        options.additionRepeatTimes = 1;
    }
    if (!options.additionSeparator) {
        options.additionSeparator = "|";
    }
    for (let i = 1; i < options.additionRepeatTimes; i++) {
        additional += options.addition + options.additionSeparator;
    }
    additional += options.addition;
    for (let j = 1; j < options.repeatTimes; j++) {
        newStr += str + additional + options.separator;
    }
    newStr += str + additional;
    return newStr;
}

module.exports = {
    repeater
};