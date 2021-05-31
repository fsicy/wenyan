(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Render"] = factory();
	else
		root["Render"] = factory();
})((typeof self !== "undefined" ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var NumberTokenType;
(function (NumberTokenType) {
    NumberTokenType[NumberTokenType["SIGN"] = 0] = "SIGN";
    NumberTokenType[NumberTokenType["DIGIT"] = 1] = "DIGIT";
    NumberTokenType[NumberTokenType["DECIMAL"] = 2] = "DECIMAL";
    NumberTokenType[NumberTokenType["INT_MULT"] = 3] = "INT_MULT";
    NumberTokenType[NumberTokenType["FRAC_MULT"] = 4] = "FRAC_MULT";
    NumberTokenType[NumberTokenType["DELIM"] = 5] = "DELIM";
    NumberTokenType[NumberTokenType["ZERO"] = 6] = "ZERO";
    // pseudo tokens
    NumberTokenType[NumberTokenType["BEGIN"] = 7] = "BEGIN";
    NumberTokenType[NumberTokenType["END"] = 8] = "END"; // <END>
})(NumberTokenType = exports.NumberTokenType || (exports.NumberTokenType = {}));
var NUM_TOKENS = (_a = {
        負: { type: NumberTokenType.SIGN, sign: -1 },
        "·": { type: NumberTokenType.DECIMAL, exp: 0 },
        又: { type: NumberTokenType.DELIM },
        有: { type: NumberTokenType.DELIM },
        零: { type: NumberTokenType.ZERO, digit: "0" },
        一: { type: NumberTokenType.DIGIT, digit: "1" },
        二: { type: NumberTokenType.DIGIT, digit: "2" },
        三: { type: NumberTokenType.DIGIT, digit: "3" },
        四: { type: NumberTokenType.DIGIT, digit: "4" },
        五: { type: NumberTokenType.DIGIT, digit: "5" },
        六: { type: NumberTokenType.DIGIT, digit: "6" },
        七: { type: NumberTokenType.DIGIT, digit: "7" },
        八: { type: NumberTokenType.DIGIT, digit: "8" },
        九: { type: NumberTokenType.DIGIT, digit: "9" },
        十: { type: NumberTokenType.INT_MULT, exp: 1 },
        百: { type: NumberTokenType.INT_MULT, exp: 2 },
        千: { type: NumberTokenType.INT_MULT, exp: 3 },
        萬: { type: NumberTokenType.INT_MULT, exp: 4 },
        億: { type: NumberTokenType.INT_MULT, exp: 8 },
        兆: { type: NumberTokenType.INT_MULT, exp: 12 },
        京: { type: NumberTokenType.INT_MULT, exp: 16 },
        垓: { type: NumberTokenType.INT_MULT, exp: 20 },
        秭: { type: NumberTokenType.INT_MULT, exp: 24 },
        穰: { type: NumberTokenType.INT_MULT, exp: 28 },
        溝: { type: NumberTokenType.INT_MULT, exp: 32 },
        澗: { type: NumberTokenType.INT_MULT, exp: 36 },
        正: { type: NumberTokenType.INT_MULT, exp: 40 },
        載: { type: NumberTokenType.INT_MULT, exp: 44 },
        極: { type: NumberTokenType.INT_MULT, exp: 48 },
        分: { type: NumberTokenType.FRAC_MULT, exp: -1 },
        釐: { type: NumberTokenType.FRAC_MULT, exp: -2 },
        毫: { type: NumberTokenType.FRAC_MULT, exp: -3 },
        絲: { type: NumberTokenType.FRAC_MULT, exp: -4 },
        忽: { type: NumberTokenType.FRAC_MULT, exp: -5 },
        微: { type: NumberTokenType.FRAC_MULT, exp: -6 },
        纖: { type: NumberTokenType.FRAC_MULT, exp: -7 },
        沙: { type: NumberTokenType.FRAC_MULT, exp: -8 },
        塵: { type: NumberTokenType.FRAC_MULT, exp: -9 },
        埃: { type: NumberTokenType.FRAC_MULT, exp: -10 },
        渺: { type: NumberTokenType.FRAC_MULT, exp: -11 },
        漠: { type: NumberTokenType.FRAC_MULT, exp: -12 }
    },
    // eslint-disable-next-line no-useless-computed-key
    _a["〇"] = { type: NumberTokenType.DIGIT, digit: "0" } // U+3007 Ideographic Number Zero
,
    _a);
var NEG_WORD = "負";
var INF_WORD = "無限大數";
var NAN_WORD = "不可算數";
var DECIMAL_WORD = {
    readout: "又"
};
var DIGIT_WORDS = {
    readout: {
        0: "零",
        1: "一",
        2: "二",
        3: "三",
        4: "四",
        5: "五",
        6: "六",
        7: "七",
        8: "八",
        9: "九"
    }
};
var MULT_WORDS = {
    readout: [
        { str: "極", exp: 48 },
        { str: "載", exp: 44 },
        { str: "正", exp: 40 },
        { str: "澗", exp: 36 },
        { str: "溝", exp: 32 },
        { str: "穰", exp: 28 },
        { str: "秭", exp: 24 },
        { str: "垓", exp: 20 },
        { str: "京", exp: 16 },
        { str: "兆", exp: 12 },
        { str: "億", exp: 8 },
        { str: "萬", exp: 4 },
        { str: "千", exp: 3 },
        { str: "百", exp: 2 },
        { str: "十", exp: 1 },
        { str: "", exp: 0 },
        { str: "分", exp: -1 },
        { str: "釐", exp: -2 },
        { str: "毫", exp: -3 },
        { str: "絲", exp: -4 },
        { str: "忽", exp: -5 },
        { str: "微", exp: -6 },
        { str: "纖", exp: -7 },
        { str: "沙", exp: -8 },
        { str: "塵", exp: -9 },
        { str: "埃", exp: -10 },
        { str: "渺", exp: -11 },
        { str: "漠", exp: -12 }
    ]
};
var eMultState = {
    NONE: "NONE",
    FRAC: "FRAC",
    INT: "INT",
    DONE: "DONE",
    SIGN: "SIGN"
};
var eDigitState = {
    NONE: "NONE",
    MULT: "MULT",
    MULT_AMBIG: "MULT_AMBIG",
    DIGIT: "DIGIT",
    DIGIT_WITH_ZERO: "DIGIT_WITH_ZERO",
    DELIM: "DELIM",
    ZERO: "ZERO",
    SIGN: "SIGN",
    ZERO_MULT_AMBIG: "ZERO_MULT_AMBIG" // 零十 (ambiguous: 零一十 or 零十 or 〇十)
};
var RESULT_2_TO_63 = {
    sign: 1,
    exp: 0,
    digits: "9223372036854775808".split("").reverse()
};
function hanzi2numstr(s) {
    // returns array of tokens on success, null on invalid string
    function tokenize(s) {
        var result = [{ type: NumberTokenType.BEGIN }];
        for (var i = 0; i < s.length; ++i) {
            var tokenStr = s.charAt(i);
            if (!NUM_TOKENS[tokenStr]) {
                return null;
            }
            result.push(NUM_TOKENS[tokenStr]);
        }
        result.push({ type: NumberTokenType.END });
        return result;
    }
    // returns:
    //   on success: {
    //     sign:   +1/-1/+Infinity/-Infinity/NaN,
    //     exp:    power of 10,
    //     digits: array of digit chars from lowest to highest, with leading and trailing zeros
    //   }
    //   on invalid string: null
    // result = sign * {digits[length-1..0]} * 10^exp
    // e.g. 負零又五毫零絲 = { sign: -1, exp: -4, digits: ["0", "5", "0", "0, "0"] } = -00050e-4 = -0.005
    function parse(tokens) {
        // parses the number string backwards, from lowest to highest digit
        // parser state
        var digitState = eDigitState.NONE;
        // multiplier stack, keep track of all active multiplier exponents
        var multStack = {
            isEmpty: function () {
                return this._exps.length === 0;
            },
            total: function () {
                return this._expAdd;
            },
            top: function () {
                return this._exps[this._exps.length - 1];
            },
            state: function () {
                if (this.isEmpty()) {
                    return eMultState.NONE;
                }
                else if (this._exps[0] < 0) {
                    return eMultState.FRAC;
                }
                else if (this._exps[0] < Infinity) {
                    return eMultState.INT;
                }
                else {
                    return eMultState.DONE;
                }
            },
            push: function (exp) {
                this._expAdd += exp;
                this._exps.push(exp);
            },
            pop: function () {
                this._expAdd -= this.top();
                this._exps.pop();
            },
            clear: function () {
                this._expAdd = 0;
                this._exps = [];
            },
            markDone: function () {
                this.clear();
                this.push(Infinity);
            },
            _exps: [],
            _expAdd: 0
        };
        // result, with different convension of exp for internal use
        var result = {
            sign: function () {
                return this._sign;
            },
            exp: function () {
                return this._exp;
            },
            digits: function () {
                return this._digits;
            },
            applySign: function (newSign) {
                this._sign *= newSign;
            },
            // digit: number or array of numbers
            push: function (digit) {
                if (Array.isArray(digit)) {
                    this._digits = this._digits.concat(digit);
                    this._exp += digit.length;
                }
                else {
                    this._digits.push(digit);
                    ++this._exp;
                }
            },
            fillZeros: function (newExp) {
                this.push(Array(newExp - this._exp).fill("0"));
            },
            resetExp: function (newExp) {
                this._exp = newExp;
            },
            // the result is sign * 0.{digits[length-1..0]} * 10^exp
            _sign: 1,
            _exp: 0,
            _digits: [] // lowest to highest
        };
        var _loop_1 = function (i) {
            var token = tokens[i - 1];
            // sign should be the first char
            if (multStack.state() === eMultState.SIGN &&
                token.type !== NumberTokenType.BEGIN) {
                return { value: null };
            }
            // disambiguate omitted 一
            switch (digitState) {
                case eDigitState.MULT_AMBIG:
                    switch (token.type) {
                        // <BEGIN>(一?)十 -> <BEGIN>一十
                        // 負(一?)十 -> 負一十
                        // 又(一?)十 -> 又一十
                        // ·(一?)十 -> ·一十
                        // 分(一?)十絲 -> 分一十絲
                        case NumberTokenType.BEGIN:
                        case NumberTokenType.SIGN:
                        case NumberTokenType.DELIM:
                        case NumberTokenType.DECIMAL:
                        case NumberTokenType.FRAC_MULT:
                            result.push("1");
                            digitState = eDigitState.DIGIT;
                            break;
                        // 一(一?)十 -> 一十
                        case NumberTokenType.DIGIT:
                            digitState = eDigitState.MULT;
                            break;
                        // 百(一?)十 -> 百一十
                        // 千(一?)十 -> 千一十
                        // 百(一?)萬 -> 百萬
                        case NumberTokenType.INT_MULT:
                            if (multStack.top() < (token.exp || 1)) {
                                result.push("1");
                                digitState = eDigitState.DIGIT;
                            }
                            else {
                                digitState = eDigitState.MULT;
                            }
                            break;
                        // 零(一?)十 -> 零(一?)十
                        case NumberTokenType.ZERO:
                            digitState = eDigitState.MULT_AMBIG;
                            break;
                        default:
                            break;
                    }
                    break;
                case eDigitState.ZERO_MULT_AMBIG:
                    switch (token.type) {
                        // <BEGIN>(零一|零|〇)十 -> <BEGIN>〇十
                        // 負(零一|零|〇)十 -> 負〇十
                        // 一(零一|零|〇)十 -> 一〇十
                        // 又(零一|零|〇)十 -> 又〇十
                        // 零(零一|零|〇)十 -> 〇〇十
                        case NumberTokenType.BEGIN:
                        case NumberTokenType.SIGN:
                        case NumberTokenType.DIGIT:
                        case NumberTokenType.DELIM:
                        case NumberTokenType.ZERO:
                            result.push("0");
                            digitState = eDigitState.DIGIT_WITH_ZERO;
                            break;
                        // ·(零一|零|〇)十絲 -> ·零一十絲
                        // ·(零一|零|〇)十釐 -> ·〇十釐
                        // ·(零一|零|〇)十分 -> error
                        // ·(零一|零|〇)百分 -> error
                        // 分(零一|零|〇)十絲 -> 分零一十絲
                        // 分(零一|零|〇)十毫 -> 分〇十絲
                        // 分(零一|零|〇)十釐 -> error
                        // 分(零一|零|〇)十分 -> error
                        case NumberTokenType.DECIMAL:
                        case NumberTokenType.FRAC_MULT:
                            if (multStack.total() + 1 < token.exp) {
                                result.push("1");
                                result.push("0");
                                digitState = eDigitState.ZERO;
                            }
                            else if (multStack.total() + 1 === token.exp) {
                                result.push("0");
                                digitState = eDigitState.DIGIT_WITH_ZERO;
                            }
                            else {
                                return { value: null };
                            }
                            break;
                        // 千(零一|零|〇)十 -> 千零一十
                        // 百(零一|零|〇)十 -> 百〇十
                        // 萬(零一|零|〇)萬 -> 萬零萬
                        // 百(零一|零|〇)萬 -> 百零萬
                        case NumberTokenType.INT_MULT:
                            if (token.exp == null) {
                                return { value: null };
                            }
                            if (multStack.top() + 1 < token.exp) {
                                result.push("1");
                                result.push("0");
                                digitState = eDigitState.ZERO;
                            }
                            else if (multStack.top() + 1 === token.exp) {
                                result.push("0");
                                digitState = eDigitState.DIGIT_WITH_ZERO;
                            }
                            else {
                                result.push("0");
                                digitState = eDigitState.ZERO;
                            }
                            break;
                        default:
                            break;
                    }
                    break;
                default:
                    break;
            }
            // determine the exponent of tail digits
            if (multStack.state() === eMultState.NONE) {
                switch (token.type) {
                    case NumberTokenType.INT_MULT:
                        // exponent is correct
                        break;
                    case NumberTokenType.DECIMAL:
                    case NumberTokenType.FRAC_MULT:
                        if (token.exp != null) {
                            result.resetExp(token.exp);
                        }
                        break;
                    default:
                        break;
                }
            }
            // determine the current exponent and update exponent stack
            var currExp = (function () {
                switch (token.type) {
                    case NumberTokenType.BEGIN:
                    case NumberTokenType.SIGN:
                        switch (digitState) {
                            // <BEGIN>微 -> error
                            // 負微 -> error
                            case eDigitState.MULT:
                                return null;
                            default:
                                multStack.markDone();
                                return multStack.total();
                        }
                    case NumberTokenType.DIGIT:
                    case NumberTokenType.ZERO:
                        switch (digitState) {
                            // 一又 -> 一·
                            // 零又 -> 零·
                            case eDigitState.DELIM:
                                multStack.clear();
                                multStack.push(0);
                                return multStack.total();
                            default:
                                return result.exp();
                        }
                    case NumberTokenType.DELIM:
                        switch (digitState) {
                            // 又又 -> error
                            case eDigitState.DELIM:
                                return null;
                            default:
                                return result.exp();
                        }
                    // ·...絲 -> ·
                    // 釐...絲 -> 釐
                    // ·絲 -> error
                    // 釐絲 -> error
                    case NumberTokenType.DECIMAL:
                    case NumberTokenType.FRAC_MULT:
                        if (digitState === eDigitState.MULT) {
                            return null;
                        }
                        else {
                            multStack.clear();
                            multStack.push(token.exp);
                            return multStack.total();
                        }
                    case NumberTokenType.INT_MULT:
                        switch (digitState) {
                            // 百又...絲 -> 百
                            // 萬又...百萬億 -> 萬萬億
                            case eDigitState.DELIM:
                                if (multStack.state() === eMultState.FRAC) {
                                    multStack.clear();
                                    multStack.push(token.exp);
                                }
                                else {
                                    while (!multStack.isEmpty() && multStack.top() < token.exp) {
                                        multStack.pop();
                                    }
                                    multStack.push(token.exp);
                                }
                                break;
                            // 萬...百萬億 -> 萬萬億
                            // 萬零...百萬億 -> 萬萬億
                            // 百...十絲 -> 百絲
                            // 千零...十絲 -> 千絲
                            case eDigitState.NONE:
                            case eDigitState.MULT:
                            case eDigitState.MULT_AMBIG:
                            case eDigitState.DIGIT:
                            case eDigitState.DIGIT_WITH_ZERO:
                            case eDigitState.ZERO:
                            case eDigitState.ZERO_MULT_AMBIG:
                                while (!multStack.isEmpty() &&
                                    multStack.top() < token.exp &&
                                    multStack.top() >= 0) {
                                    multStack.pop();
                                }
                                multStack.push(token.exp);
                                break;
                        }
                        return multStack.total();
                }
            })();
            if (currExp == null) {
                return { value: null };
            }
            // check for overlapping decimal places
            if (currExp < result.exp()) {
                return { value: null };
            }
            // check for disallowed missing decimal places
            if (currExp > result.exp()) {
                var check = function () {
                    if (token.type === NumberTokenType.BEGIN ||
                        token.type === NumberTokenType.SIGN) {
                        return true;
                    }
                    if (digitState === eDigitState.DELIM ||
                        digitState === eDigitState.ZERO) {
                        return true;
                    }
                    if (token.type === NumberTokenType.INT_MULT) {
                        return true;
                    }
                    if (token.type === NumberTokenType.FRAC_MULT ||
                        token.type === NumberTokenType.DECIMAL) {
                        return true;
                    }
                    return false;
                };
                if (!check()) {
                    return { value: null };
                }
                if (multStack.state() !== eMultState.DONE) {
                    result.fillZeros(currExp);
                }
            }
            // push the digit, update parser state
            switch (token.type) {
                case NumberTokenType.BEGIN:
                    break;
                case NumberTokenType.SIGN:
                    result.applySign(token.sign);
                    digitState = eDigitState.SIGN;
                    break;
                case NumberTokenType.DIGIT:
                    result.push(token.digit);
                    if (digitState === eDigitState.ZERO ||
                        digitState === eDigitState.DIGIT_WITH_ZERO) {
                        digitState = eDigitState.DIGIT_WITH_ZERO;
                    }
                    else {
                        digitState = eDigitState.DIGIT;
                    }
                    break;
                case NumberTokenType.DECIMAL:
                    digitState = eDigitState.NONE;
                    break;
                case NumberTokenType.INT_MULT:
                    digitState = eDigitState.MULT_AMBIG;
                    break;
                case NumberTokenType.FRAC_MULT:
                    digitState = eDigitState.MULT;
                    break;
                case NumberTokenType.DELIM:
                    digitState = eDigitState.DELIM;
                    break;
                case NumberTokenType.ZERO:
                    switch (digitState) {
                        case eDigitState.NONE:
                        case eDigitState.MULT:
                        case eDigitState.DIGIT:
                        case eDigitState.DELIM:
                            result.push(token.digit);
                            digitState = eDigitState.ZERO;
                            break;
                        case eDigitState.DIGIT_WITH_ZERO:
                        case eDigitState.ZERO:
                            result.push(token.digit);
                            digitState = eDigitState.ZERO;
                            break;
                        case eDigitState.MULT_AMBIG:
                            digitState = eDigitState.ZERO_MULT_AMBIG;
                            break;
                    }
                    break;
            }
        };
        // parses the number string backwards, discarding <END>
        for (var i = tokens.length - 1; i > 0; --i) {
            var state_1 = _loop_1(i);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        if (result.digits().length === 0) {
            return null;
        }
        return {
            sign: result.sign(),
            exp: result.exp() - result.digits().length,
            digits: result.digits()
        };
    }
    function getDigit(result, exp) {
        var idx = exp - result.exp;
        if (idx >= 0 && idx < result.digits.length) {
            return result.digits[idx];
        }
        else {
            return "0";
        }
    }
    function compareMagnitude(resultA, resultB) {
        var getMaxExp = function (result) {
            return result.exp + (result.digits.length - 1);
        };
        var maxExp = Math.max(getMaxExp(resultA), getMaxExp(resultB));
        for (var i = maxExp; i >= resultA.exp || i >= resultB.exp; --i) {
            var digitA = Number(getDigit(resultA, i));
            var digitB = Number(getDigit(resultB, i));
            if (digitA > digitB) {
                return 1;
            }
            else if (digitA < digitB) {
                return -1;
            }
        }
        return 0;
    }
    // parse
    var tokens = tokenize(s);
    if (tokens == null) {
        return null;
    }
    var result = parse(tokens);
    if (result == null) {
        return null;
    }
    // build decimal string
    if (!Number.isFinite(result.sign)) {
        // infinity/NaN
        return result.sign.toString();
    }
    var str = result.sign < 0 ? "-" : "";
    // no fractional digits (including zero) and fits in int64?
    var printAsInt = (function () {
        if (result.exp < 0) {
            return false;
        }
        var c = compareMagnitude(result, RESULT_2_TO_63);
        return result.sign < 0 ? c <= 0 : c < 0;
    })();
    // digit range, leading and trailing zeros trimmed
    var rend = result.digits.findIndex(function (x) { return x !== "0"; });
    if (rend < 0) {
        str += "0";
        return str;
    }
    var rendExp = result.exp + rend;
    var rbegin = result.digits.length;
    while (result.digits[rbegin - 1] === "0") {
        --rbegin;
    }
    var rbeginExp = result.exp + rbegin;
    // compute length of fixed and scientific format
    var expStr = "";
    var printAsScientific = false;
    if (!printAsInt) {
        var scientificExp = result.exp + (rbegin - 1);
        expStr =
            (scientificExp < 0 ? "e-" : "e+") + Math.abs(scientificExp).toString();
        var fixedLen = rendExp < 0 ? Math.max(rbeginExp, 1) - rendExp + 1 : rbeginExp;
        var scientificMagLen = rbegin - rend > 1 ? rbegin - rend + 1 : 1;
        if (scientificMagLen + expStr.length < fixedLen) {
            printAsScientific = true;
        }
    }
    if (printAsScientific) {
        str += result.digits[rbegin - 1];
        if (rbegin - 1 > rend) {
            str += ".";
            for (var i = rbegin - 1; i > rend; --i) {
                str += result.digits[i - 1];
            }
        }
        str += expStr;
        return str;
    }
    else {
        for (var i = Math.max(rbeginExp, 1); i > 0; --i) {
            str += getDigit(result, i - 1);
        }
        if (rendExp < 0) {
            str += ".";
            for (var i = 0; i > rendExp; --i) {
                str += getDigit(result, i - 1);
            }
        }
        return str;
    }
}
exports.hanzi2numstr = hanzi2numstr;
function hanzi2num(s) {
    var str = hanzi2numstr(s);
    if (str == null) {
        return NaN;
    }
    else {
        return Number(str);
    }
}
exports.hanzi2num = hanzi2num;
function num2hanzi(n, format, precision) {
    if (format === void 0) { format = ""; }
    if (precision === void 0) { precision = undefined; }
    if (!Number.isFinite(n)) {
        if (n === Infinity) {
            return INF_WORD;
        }
        else if (n === -Infinity) {
            return NEG_WORD + INF_WORD;
        }
        else {
            return NAN_WORD;
        }
    }
    // the same format as hanzi2numstr.parse
    function parseNumStr(str) {
        function myIndexOf(str, val) {
            var idx = str.indexOf(val);
            return idx < 0 ? str.length : idx;
        }
        var sign = str.charAt(0) === "-" ? -1 : 1;
        var digitIndex = "+-".includes(str.charAt(0)) ? 1 : 0;
        var expIndex = myIndexOf(str, "e");
        var scientificExp = expIndex === str.length ? 0 : Number(str.substring(expIndex + 1));
        var decimalIndex = myIndexOf(str.substring(0, expIndex), ".");
        var intStr = str.substring(digitIndex, decimalIndex);
        var intDigits = intStr.split("").reverse();
        var fracStr = str.substring(Math.min(decimalIndex + 1, expIndex), expIndex);
        var fracDigits = fracStr.split("").reverse();
        return {
            sign: sign,
            exp: scientificExp - fracDigits.length,
            digits: fracDigits.concat(intDigits)
        };
    }
    // reserved for future extension
    var chineseFormat = "readout";
    var multWords = MULT_WORDS[chineseFormat];
    var digitWords = DIGIT_WORDS[chineseFormat];
    var decimalWord = DECIMAL_WORD[chineseFormat];
    var numStr = precision === undefined ? n.toString() : n.toFixed(precision);
    var result = parseNumStr(numStr);
    var signStr = result.sign < 0 ? NEG_WORD : "";
    var rend = result.digits.findIndex(function (x) { return x !== "0"; });
    if (rend < 0) {
        return signStr + digitWords["0"];
    }
    var rbegin = result.digits.length;
    while (result.digits[rbegin - 1] === "0") {
        --rbegin;
    }
    // is this beyond the lowest fractional unit we can represent?
    var minMultExp = multWords[multWords.length - 1].exp;
    if (result.exp + rend < minMultExp) {
        // cap to lowest fractional unit and retry
        numStr = n.toFixed(-minMultExp);
        result = parseNumStr(numStr);
        signStr = result.sign < 0 ? NEG_WORD : "";
        rend = result.digits.findIndex(function (x) { return x !== "0"; });
        if (rend < 0) {
            return signStr + digitWords["0"];
        }
        rbegin = result.digits.length;
        while (result.digits[rbegin - 1] === "0") {
            --rbegin;
        }
    }
    // convert digits to readout format
    var str = signStr;
    var pendingZero = false;
    var i = rbegin;
    var intToReadout = function (expBias) {
        if (expBias === void 0) { expBias = 0; }
        var hasOutput = false;
        while (i !== rend) {
            var mult = multWords.find(function (x) { return x.exp + expBias <= result.exp + (i - 1); });
            if (mult === undefined || mult.exp < 0) {
                // done with int part
                break;
            }
            else if (mult.exp > 0) {
                // needs higher multiplier
                if (intToReadout(expBias + mult.exp)) {
                    // 零 is omitted here (100 0000 -> 一百萬)
                    pendingZero = false;
                    // write the multiplier
                    str += mult.str;
                    hasOutput = true;
                }
            }
            else if (mult.exp === 0) {
                if (result.digits[i - 1] !== "0") {
                    // insert 零 if necessary
                    if (pendingZero) {
                        str += digitWords["0"];
                        pendingZero = false;
                    }
                    // write the digit
                    str += digitWords[result.digits[i - 1]];
                    hasOutput = true;
                }
                else {
                    // mark that there are zero(s) not written yet
                    // 零 will be added later if necessary
                    pendingZero = true;
                }
                --i;
                break;
            }
        }
        return hasOutput;
    };
    var fracToReadout = function () {
        // eslint-disable-next-line no-unmodified-loop-condition
        while (i !== rend) {
            var mult = multWords.find(function (x) { return x.exp <= result.exp + (i - 1); });
            if (mult === undefined) {
                break;
            }
            if (intToReadout(mult.exp)) {
                str += mult.str;
                pendingZero = false;
            }
        }
    };
    var hasInt = intToReadout();
    pendingZero = false;
    if (i !== rend) {
        if (hasInt) {
            str += decimalWord;
        }
        // avoid 又零
        while (i !== rend && result.digits[i - 1] === "0") {
            --i;
        }
        fracToReadout();
    }
    return str;
}
exports.num2hanzi = num2hanzi;
function bool2hanzi(b) {
    return b ? "陽" : "陰";
}
exports.bool2hanzi = bool2hanzi;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * To check match of a part of string
 */
function match(src, startAt, target) {
    var length = target.length;
    for (var i = 0; i < length; i++) {
        if (src[startAt + i] !== target[i])
            return false;
    }
    return true;
}
exports.match = match;
exports.defaultAssertLogger = console.log;
exports.defaultAssert = function (logger) {
    if (logger === void 0) { logger = exports.defaultAssertLogger; }
    return function (msg, pos, b) {
        if (!b)
            logger("ERROR@" + pos + ": " + msg);
    };
};
function isRoman(x) {
    return x.replace(/[ -~]/g, "").length == 0;
}
exports.isRoman = isRoman;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var BaseTranspiler = /** @class */ (function () {
    function BaseTranspiler(asc) {
        this.tmpVarCnt = 0;
        this.randVarCnt = 0;
        this.lib = "";
        this.asc = asc;
    }
    BaseTranspiler.prototype.randVar = function () {
        return "_rand" + ++this.randVarCnt;
    };
    BaseTranspiler.prototype.currTmpVar = function () {
        return "_ans" + this.tmpVarCnt;
    };
    BaseTranspiler.prototype.nextTmpVar = function () {
        return "_ans" + ++this.tmpVarCnt;
    };
    BaseTranspiler.prototype.transpile = function (options) {
        if (options === void 0) { options = {}; }
        throw Error("No Implementation");
    };
    BaseTranspiler.prototype.wrapModule = function (name, src) {
        var moduleName = name.replace(/\//g, "_");
        var scopeName = name.split("/").slice(-1)[0];
        var markerStart = "/*___wenyan_module_" + moduleName + "_start___*/";
        var markerEnd = "/*___wenyan_module_" + moduleName + "_end___*/";
        return this.moduleWrapper({
            src: src,
            moduleName: moduleName,
            scopeName: scopeName,
            markerStart: markerStart,
            markerEnd: markerEnd
        });
    };
    BaseTranspiler.prototype.moduleWrapper = function (_a) {
        var src = _a.src;
        return src;
    };
    return BaseTranspiler;
}());
exports.BaseTranspiler = BaseTranspiler;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.NUMBER_KEYWORDS = Array.from("負·又零〇一二三四五六七八九十百千萬億兆京垓秭穰溝澗正載極分釐毫絲忽微纖沙塵埃渺漠");
exports.KEYWORDS_DEFINE = {
    吾有: ["decl", "uninit"],
    今有: ["decl", "public"],
    物之: ["decl", "prop"],
    有: ["decl", "init"],
    數: ["type", "num"],
    列: ["type", "arr"],
    言: ["type", "str"],
    術: ["type", "fun"],
    爻: ["type", "bol"],
    物: ["type", "obj"],
    元: ["type", "any"],
    書之: ["print", undefined],
    名之曰: ["name", undefined],
    施: ["call", "r"],
    以施: ["call", "l"],
    曰: ["assgn", undefined],
    噫: ["discard", undefined],
    取: ["take", undefined],
    昔之: ["rassgn", "a"],
    今: ["rassgn", "b"],
    是矣: ["rassgn", "c"],
    不復存矣: ["rassgn", "delete"],
    其: ["ans", undefined],
    乃得: ["ctrl", "ret"],
    乃得矣: ["ctrl", "retprev"],
    乃歸空無: ["ctrl", "retvoid"],
    是謂: ["ctrl", "bigend"],
    之術也: ["ctrl", "funend"],
    必先得: ["ctrl", "funarg"],
    是術曰: ["ctrl", "funbody"],
    乃行是術曰: ["ctrl", "funbody"],
    欲行是術: ["ctrl", "funstart"],
    也: ["ctrl", "end"],
    云云: ["ctrl", "end"],
    凡: ["ctrl", "for"],
    中之: ["ctrl", "forin"],
    恆為是: ["ctrl", "whiletrue"],
    為是: ["ctrl", "whilen0"],
    遍: ["ctrl", "whilen1"],
    乃止: ["ctrl", "break"],
    乃止是遍: ["ctrl", "continue"],
    若非: ["ctrl", "else"],
    若: ["ctrl", "if"],
    者: ["ctrl", "conj"],
    若其然者: ["ctrl", "iftrue"],
    若其不然者: ["ctrl", "iffalse"],
    或若: ["ctrl", "elseif"],
    其物如是: ["ctrl", "objbody"],
    之物也: ["ctrl", "objend"],
    夫: ["expr", undefined],
    等於: ["cmp", "=="],
    不等於: ["cmp", "!="],
    不大於: ["cmp", "<="],
    不小於: ["cmp", ">="],
    大於: ["cmp", ">"],
    小於: ["cmp", "<"],
    加: ["op", "+"],
    減: ["op", "-"],
    乘: ["op", "*"],
    除: ["op", "/"],
    中有陽乎: ["lop", "||"],
    中無陰乎: ["lop", "&&"],
    變: ["not", undefined],
    所餘幾何: ["mod", undefined],
    以: ["opord", "l"],
    於: ["opord", "r"],
    之長: ["ctnr", "len"],
    之: ["ctnr", "subs"],
    充: ["ctnr", "push"],
    銜: ["ctnr", "cat"],
    其餘: ["ctnr", "rest"],
    陰: ["bool", "false"],
    陽: ["bool", "true"],
    吾嘗觀: ["import", "file"],
    中: ["import", "in"],
    之書: ["import", "fileend"],
    方悟: ["import", "iden"],
    之義: ["import", "idenend"],
    嗚呼: ["throw", "a"],
    之禍: ["throw", "b"],
    姑妄行此: ["try", "try"],
    如事不諧: ["try", "catch"],
    豈: ["try", "catcherr0"],
    之禍歟: ["try", "catcherr1"],
    不知何禍歟: ["try", "catchall"],
    乃作罷: ["try", "end"],
    或云: ["macro", "from"],
    蓋謂: ["macro", "to"],
    注曰: ["comment", undefined],
    疏曰: ["comment", undefined],
    批曰: ["comment", undefined]
};
var ke = Object.entries(exports.KEYWORDS_DEFINE);
ke.sort(function (a, b) { return b[0].length - a[0].length; });
if (!Object.fromEntries) {
    Object.fromEntries = function (l) {
        var o = {};
        l.map(function (x) { return (o[x[0]] = x[1]); });
        return o;
    };
}
exports.KEYWORDS = Object.fromEntries(ke);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var hanzi2num_1 = __webpack_require__(0);
exports.hanzi2num = hanzi2num_1.hanzi2num;
exports.hanzi2numstr = hanzi2num_1.hanzi2numstr;
exports.num2hanzi = hanzi2num_1.num2hanzi;
exports.bool2hanzi = hanzi2num_1.bool2hanzi;
var hanzi2pinyin_1 = __webpack_require__(8);
exports.hanzi2pinyin = hanzi2pinyin_1.hanzi2pinyin;
var reader_1 = __webpack_require__(5);
var macro_1 = __webpack_require__(11);
var version_1 = __webpack_require__(12);
exports.version = version_1.version;
var keywords_1 = __webpack_require__(3);
exports.NUMBER_KEYWORDS = keywords_1.NUMBER_KEYWORDS;
exports.KEYWORDS = keywords_1.KEYWORDS;
var stdlib_1 = __webpack_require__(14);
exports.STDLIB = stdlib_1.STDLIB;
var typecheck_1 = __webpack_require__(32);
var transpilers_1 = __importDefault(__webpack_require__(34));
var utils_1 = __webpack_require__(1);
var execute_1 = __webpack_require__(38);
exports.evalCompiled = execute_1.evalCompiled;
var defaultTrustedHosts = [
    "https://raw.githubusercontent.com/LingDong-/wenyan-lang/master"
];
var IGNORE_SYMBOLS = "。、\n\r\t ";
function wy2tokens(txt, assert) {
    if (assert === void 0) { assert = utils_1.defaultAssert(); }
    var tokens = [];
    var tok = "";
    var idt = false;
    var num = false;
    var litlvl = 0;
    var data = false;
    var i = 0;
    function enddata() {
        if (data) {
            tokens.push(["data", tok, i]);
            data = false;
            tok = "";
        }
    }
    function endnum() {
        if (num) {
            var numStr = hanzi2num_1.hanzi2numstr(tok);
            assert("Invalid number \"" + tok + "\".", i, numStr != null);
            tokens.push(["num", numStr, i]);
            tok = "";
            num = false;
        }
    }
    while (i < txt.length) {
        if (IGNORE_SYMBOLS.includes(txt[i])) {
            if (idt || data) {
                tok += txt[i];
            }
        }
        else if (utils_1.match(txt, i, "「「") || txt[i] == "『") {
            var is_sin = txt[i] == "「";
            if (litlvl == 0) {
                enddata();
                endnum();
                idt = true;
                tok = "";
            }
            else {
                tok += txt[i];
                if (is_sin) {
                    tok += txt[i + 1];
                }
            }
            litlvl++;
            if (is_sin) {
                i++;
            }
        }
        else if ((txt[i] == "」" &&
            txt[i + 1] == "」" &&
            (txt[i + 2] != "」" || txt[i + 3] == "」")) ||
            txt[i] == "』") {
            var is_sin = txt[i] == "」";
            litlvl--;
            if (litlvl == 0) {
                // escape double quote and new lines
                tok = tok.replace(/"/g, '\\"').replace(/\n/g, "\\n");
                tokens.push(["lit", "\"" + tok + "\"", i + 1]);
                idt = false;
                tok = "";
            }
            else {
                tok += txt[i];
                if (is_sin) {
                    tok += txt[i + 1];
                }
            }
            if (is_sin) {
                i++;
            }
        }
        else if (litlvl > 0) {
            tok += txt[i];
        }
        else {
            if (txt[i] == "「") {
                enddata();
                endnum();
                idt = true;
                tok = "";
            }
            else if (txt[i] == "」") {
                tokens.push(["iden", tok, i]);
                idt = false;
                tok = "";
            }
            else {
                if (idt) {
                    tok += txt[i];
                }
                else if (num) {
                    if (keywords_1.NUMBER_KEYWORDS.includes(txt[i])) {
                        tok += txt[i];
                    }
                    else {
                        endnum();
                        i--;
                    }
                }
                else {
                    var ok = false;
                    for (var k in keywords_1.KEYWORDS) {
                        ok = utils_1.match(txt, i, k);
                        if (ok) {
                            enddata();
                            var kinfo = keywords_1.KEYWORDS[k];
                            i += k.length - 1;
                            tokens.push(__spreadArrays(kinfo, [i]));
                            break;
                        }
                    }
                    if (!ok) {
                        if (keywords_1.NUMBER_KEYWORDS.includes(txt[i])) {
                            num = true;
                            tok = txt[i];
                        }
                        else {
                            tok += txt[i];
                            data = true;
                        }
                    }
                }
            }
        }
        i++;
    }
    if (tok.length) {
        if (num) {
            var numStr = hanzi2num_1.hanzi2numstr(tok);
            assert("Invalid number \"" + tok + "\".", i, numStr != null);
            tokens.push(["num", numStr, i]);
        }
        else if (data) {
            tokens.push(["data", tok, i]);
        }
        else {
            assert("Unterminated identifier.", i, false);
        }
    }
    return tokens;
}
exports.wy2tokens = wy2tokens;
var idenMap = {};
function tokenRomanize(tokens, system) {
    function noDup(x) {
        for (var k in idenMap) {
            if (idenMap[k] == x) {
                return false;
            }
        }
        return true;
    }
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (token[0] == "iden" && !utils_1.isRoman(token[1])) {
            var r = idenMap[token[1]];
            var key = token[1];
            if (r !== undefined) {
                token[1] = r;
            }
            else {
                r = hanzi2pinyin_1.hanzi2pinyin(token[1], system);
                while (!noDup(r)) {
                    r += "_";
                }
                token[1] = r;
            }
            idenMap[key] = r;
        }
    }
}
function defaultLogCallback(x) {
    return typeof x == "string"
        ? console.log(x)
        : console.dir(x, { depth: null, maxArrayLength: null });
}
function defaultErrorCallback(e) {
    console.error(e);
    process.exit(e);
}
function tokens2asc(tokens, assert) {
    if (assert === void 0) { assert = utils_1.defaultAssert(); }
    var asc = [];
    var i = 0;
    while (i < tokens.length) {
        var pos = gettok(i, 2);
        var cmd = gettok(i, 0);
        // @ts-ignore
        function gettok(idx, jdx) {
            if (tokens[idx] === undefined) {
                assert("Unexpected EOF", pos, false);
            }
            return tokens[idx][jdx];
        }
        var typeassert = function (idx, good, reason) {
            var typ = gettok(idx, 0);
            assert("<" + cmd + "> Expecting " + good.join("/") + (reason ? " for " + reason : "") + ", found " + typ, pos, good.includes(typ));
        };
        if (gettok(i, 0) == "decl" &&
            (gettok(i, 1) == "uninit" || gettok(i, 1) == "public")) {
            typeassert(i + 1, ["num"], "variable count");
            typeassert(i + 2, ["type"], "variable type");
            var cnt_1 = Number(gettok(i + 1, 1));
            assert("Invalid variable count " + cnt_1, pos, Number.isSafeInteger(cnt_1) && cnt_1 > 0);
            var x = {
                op: "var",
                count: cnt_1,
                type: gettok(i + 2, 1),
                values: [],
                names: [],
                public: gettok(i, 1) == "public",
                pos: pos
            };
            i += 3;
            while (tokens[i] && gettok(i, 0) == "assgn") {
                x.values.push(tokens[i + 1]);
                i += 2;
            }
            if (tokens[i] && gettok(i, 0) == "name") {
                x.names.push(gettok(i + 1, 1));
                i += 2;
            }
            while (tokens[i] && gettok(i, 0) == "assgn") {
                x.names.push(gettok(i + 1, 1));
                i += 2;
            }
            asc.push(x);
        }
        else if (gettok(i, 0) == "decl" && gettok(i, 1) == "init") {
            typeassert(i + 1, ["type"], "variable type");
            typeassert(i + 2, ["data", "num", "lit", "iden", "bool", "any"], "variable initialization");
            var x = {
                op: "var",
                count: 1,
                type: gettok(i + 1, 1),
                values: [tokens[i + 2]],
                public: false,
                pos: pos
            };
            i += 3;
            if (tokens[i] !== undefined && gettok(i, 0) == "name") {
                x.names = [gettok(i + 1, 1)];
                i += 2;
            }
            asc.push(x);
        }
        else if (gettok(i, 0) == "decl" && gettok(i, 1) == "prop") {
            typeassert(i + 1, ["lit"], "property key");
            typeassert(i + 3, ["type"], "property type");
            typeassert(i + 4, ["assgn"], "property value");
            var x = {
                op: "prop",
                type: gettok(i + 3, 1),
                name: tokens[i + 1][1],
                value: tokens[i + 5],
                pos: pos
            };
            i += 6;
            asc.push(x);
        }
        else if (gettok(i, 0) == "print") {
            asc.push({ op: "print", pos: pos });
            i++;
        }
        else if (gettok(i, 0) == "ctrl" && gettok(i, 1) == "funstart") {
            var x = { op: "fun", arity: 0, args: [], pos: pos };
            i++;
            if (gettok(i, 0) == "ctrl" && gettok(i, 1) == "funarg") {
                i++;
                while (!(gettok(i, 0) == "ctrl" && gettok(i, 1) == "funbody")) {
                    typeassert(i, ["num"], "argument count");
                    typeassert(i + 1, ["type"], "argument type");
                    var typ = gettok(i + 1, 1);
                    var cnt = Number(gettok(i, 1));
                    assert("Invalid argument count " + cnt + ".", pos, Number.isSafeInteger(cnt) && cnt > 0);
                    x.arity += cnt;
                    i += 2;
                    for (var j = 0; j < cnt; j++) {
                        typeassert(i + j * 2, ["assgn"], "another argument");
                        typeassert(i + j * 2 + 1, ["iden"], "argument");
                        x.args.push({ name: tokens[i + j * 2 + 1][1], type: typ });
                    }
                    i += cnt * 2;
                }
            }
            asc.push(x);
        }
        else if (gettok(i, 0) == "ctrl" && gettok(i, 1) == "funbody") {
            asc.push({ op: "funbody", pos: pos });
            i++;
        }
        else if (gettok(i, 0) == "ctrl" && gettok(i, 1) == "bigend") {
            assert("<" + cmd + "> Incorrect function/object end", pos, gettok(i + 2, 0) == "ctrl" && gettok(i + 1, 0) == "iden");
            asc.push({ op: gettok(i + 2, 1), pos: pos });
            i += 3;
        }
        else if (gettok(i, 0) == "ctrl" && gettok(i, 1) == "objbody") {
            asc.push({ op: "objbody", pos: pos });
            i++;
        }
        else if (gettok(i, 0) == "ctrl" && gettok(i, 1) == "if") {
            var x = { op: "if", test: [], pos: pos };
            i++;
            while (!(gettok(i, 0) == "ctrl" && gettok(i, 1) == "conj")) {
                x.test.push(tokens[i]);
                i++;
            }
            i++;
            asc.push(x);
        }
        else if (gettok(i, 0) == "ctrl" && gettok(i, 1) == "iftrue") {
            asc.push({ op: "if", test: [["ans"]], pos: pos });
            i++;
        }
        else if (gettok(i, 0) == "ctrl" && gettok(i, 1) == "iffalse") {
            asc.push({ op: "if", test: [["ans"]], not: true, pos: pos });
            i++;
        }
        else if (gettok(i, 0) == "ctrl" && gettok(i, 1) == "elseif") {
            var x = { op: "if", test: [], elseif: true, pos: pos };
            i++;
            while (!(gettok(i, 0) == "ctrl" && gettok(i, 1) == "conj")) {
                x.test.push(tokens[i]);
                i++;
            }
            i++;
            asc.push(x);
        }
        else if (gettok(i, 0) == "ctrl" && gettok(i, 1) == "end") {
            asc.push({ op: "end", pos: pos });
            i++;
        }
        else if (gettok(i, 0) == "ctrl" && gettok(i, 1) == "ret") {
            asc.push({ op: "return", value: tokens[i + 1], pos: pos });
            i += 2;
        }
        else if (gettok(i, 0) == "ctrl" && gettok(i, 1) == "retprev") {
            asc.push({ op: "return", value: ["ans"], pos: pos });
            i += 1;
        }
        else if (gettok(i, 0) == "ctrl" && gettok(i, 1) == "retvoid") {
            asc.push({ op: "return", pos: pos });
            i += 1;
        }
        else if (gettok(i, 0) == "ctrl" && gettok(i, 1) == "break") {
            asc.push({ op: "break", pos: pos });
            i += 1;
        }
        else if (gettok(i, 0) == "ctrl" && gettok(i, 1) == "continue") {
            asc.push({ op: "continue", pos: pos });
            i += 1;
        }
        else if (gettok(i, 0) == "ctrl" && gettok(i, 1) == "else") {
            asc.push({ op: "else", pos: pos });
            i += 1;
        }
        else if (gettok(i, 0) == "op") {
            typeassert(i + 2, ["opord"]);
            var x = { op: "op+", pos: pos };
            if (gettok(i + 2, 1) == "l") {
                x.lhs = tokens[i + 1];
                x.rhs = tokens[i + 3];
            }
            else {
                x.lhs = tokens[i + 3];
                x.rhs = tokens[i + 1];
            }
            if (gettok(i, 1) == "/" && tokens[i + 4] && gettok(i + 4, 0) == "mod") {
                x.op = "op%";
                i += 5;
            }
            else {
                x.op = ("op" + gettok(i, 1));
                i += 4;
            }
            asc.push(x);
        }
        else if (gettok(i, 0) == "not") {
            asc.push({ op: "not", value: tokens[i + 1], pos: pos });
            i += 2;
        }
        else if (gettok(i, 0) == "name") {
            typeassert(i + 1, ["iden"]);
            var x = { op: "name", names: [gettok(i + 1, 1)], pos: pos };
            i += 2;
            while (tokens[i] && gettok(i, 0) == "assgn") {
                x.names.push(gettok(i + 1, 1));
                i += 2;
            }
            asc.push(x);
        }
        else if (gettok(i, 0) == "call" && gettok(i, 1) == "r") {
            var x = { op: "call", fun: tokens[i + 1], args: [], pos: pos };
            i += 2;
            while (tokens[i] && gettok(i, 0) == "opord" && gettok(i, 1) == "r") {
                typeassert(i + 1, ["data", "num", "lit", "iden", "bool", "ans"]);
                x.args.push(tokens[i + 1]);
                i += 2;
            }
            asc.push(x);
        }
        else if (gettok(i, 0) == "call" && gettok(i, 1) == "l") {
            asc.push({ op: "call", pop: true, fun: tokens[i + 1], pos: pos });
            i += 2;
        }
        else if (gettok(i, 0) == "ctnr" && gettok(i, 1) == "push") {
            typeassert(i + 2, ["opord"]);
            assert("<" + cmd + "> Only opord l allowed", pos, gettok(i + 2, 1) == "l");
            var x = {
                op: "push",
                container: tokens[i + 1],
                values: [tokens[i + 3]],
                pos: pos
            };
            i += 4;
            while (tokens[i] && gettok(i, 0) == "opord" && gettok(i, 1) == "l") {
                x.values.push(tokens[i + 1]);
                i += 2;
            }
            asc.push(x);
        }
        else if (gettok(i, 0) == "expr" &&
            tokens[i + 2] &&
            gettok(i + 2, 0) == "ctnr" &&
            gettok(i + 2, 1) == "subs") {
            typeassert(i + 1, ["iden", "lit", "ans"]);
            var x = {
                op: "subscript",
                container: tokens[i + 1],
                value: tokens[i + 3],
                pos: pos
            };
            asc.push(x);
            i += 4;
        }
        else if (gettok(i, 0) == "expr" &&
            tokens[i + 2] &&
            gettok(i + 2, 0) == "ctnr" &&
            gettok(i + 2, 1) == "len") {
            typeassert(i + 1, ["iden", "lit", "subs"]);
            var x = { op: "length", container: tokens[i + 1], pos: pos };
            asc.push(x);
            i += 3;
        }
        else if (gettok(i, 0) == "expr" &&
            tokens[i + 3] &&
            gettok(i + 3, 0) == "lop") {
            var x = {
                op: ("op" + gettok(i + 3, 1)),
                lhs: tokens[i + 1],
                rhs: tokens[i + 2],
                pos: pos
            };
            asc.push(x);
            i += 4;
        }
        else if (gettok(i, 0) == "expr") {
            asc.push({ op: "temp", iden: tokens[i + 1], pos: pos });
            i += 2;
        }
        else if (gettok(i, 0) == "ctnr" && gettok(i, 1) == "cat") {
            var x = { op: "cat", containers: [tokens[i + 1]], pos: pos };
            i += 2;
            while (gettok(i, 0) == "opord" && gettok(i, 1) == "l") {
                x.containers.push(tokens[i + 1]);
                i += 2;
            }
            asc.push(x);
        }
        else if (gettok(i, 0) == "ctrl" &&
            gettok(i, 1) == "for" &&
            gettok(i + 2, 0) == "ctrl" &&
            gettok(i + 2, 1) == "forin") {
            var x = {
                op: "for",
                container: tokens[i + 1],
                iterator: gettok(i + 3, 1),
                pos: pos
            };
            i += 4;
            asc.push(x);
        }
        else if (gettok(i, 0) == "ctrl" && gettok(i, 1) == "whiletrue") {
            asc.push({ op: "whiletrue", pos: pos });
            i++;
        }
        else if (gettok(i, 0) == "ctrl" && gettok(i, 1) == "whilen0") {
            assert("<" + cmd + "> Incorrect loop start", pos, gettok(i + 2, 1) == "whilen1");
            asc.push({ op: "whilen", value: tokens[i + 1], pos: pos });
            i += 3;
        }
        else if (gettok(i, 0) == "rassgn" && gettok(i, 1) == "a") {
            var x = { op: "reassign", lhs: tokens[i + 1], pos: pos };
            if (gettok(i + 2, 0) == "ctnr" && gettok(i + 2, 1) == "subs") {
                x.lhssubs = tokens[i + 3];
                if (gettok(i + 6, 0) == "rassgn" && gettok(i + 6, 1) == "delete") {
                    x.rhs = undefined;
                    x.del = true;
                    i += 7;
                }
                else {
                    x.rhs = tokens[i + 6];
                    if (tokens[i + 7] &&
                        gettok(i + 7, 0) == "ctnr" &&
                        gettok(i + 7, 1) == "subs") {
                        x.rhssubs = tokens[i + 8];
                        i += 10;
                    }
                    else {
                        i += 8;
                    }
                }
            }
            else {
                assert("<" + cmd + "> Missing conj", pos, gettok(i + 2, 0) == "ctrl" && gettok(i + 2, 1) == "conj");
                x.rhs = tokens[i + 4];
                if (tokens[i + 5] &&
                    gettok(i + 5, 0) == "ctnr" &&
                    gettok(i + 5, 1) == "subs") {
                    x.rhssubs = tokens[i + 6];
                    i += 8;
                }
                else {
                    i += 6;
                }
            }
            asc.push(x);
        }
        else if (gettok(i, 0) == "discard") {
            asc.push({ op: "discard", pos: pos });
            i++;
        }
        else if (gettok(i, 0) == "take") {
            typeassert(i + 1, ["num"], "argument count");
            var cnt_2 = Number(gettok(i + 1, 1));
            assert("Invalid argument count " + cnt_2, pos, Number.isSafeInteger(cnt_2) && cnt_2 > 0);
            asc.push({ op: "take", count: cnt_2, pos: pos });
            i += 2;
        }
        else if (gettok(i, 0) == "import" && gettok(i, 1) == "file") {
            var x = { op: "import", file: gettok(i + 1, 1), iden: [], pos: pos };
            i += 2;
            while (gettok(i, 0) == "import" && gettok(i, 1) == "in") {
                x.file += "/" + gettok(i + 1, 1);
                i += 2;
            }
            i += 1;
            if (tokens[i] && gettok(i, 0) == "import" && gettok(i, 1) == "iden") {
                i++;
                while (!(gettok(i, 0) == "import" && gettok(i, 1) == "idenend")) {
                    typeassert(i, ["iden"]);
                    x.iden.push(gettok(i, 1));
                    i++;
                }
                i++;
            }
            asc.push(x);
        }
        else if (gettok(i, 0) == "try" && gettok(i, 1) == "try") {
            asc.push({ op: "try", pos: pos });
            i++;
        }
        else if (gettok(i, 0) == "try" && gettok(i, 1) == "catch") {
            asc.push({ op: "catch", pos: pos });
            i++;
        }
        else if (gettok(i, 0) == "try" && gettok(i, 1) == "catcherr0") {
            typeassert(i + 2, ["try"]);
            if (tokens[i + 3] && gettok(i + 3, 0) == "name") {
                asc.push({
                    op: "catcherr",
                    error: tokens[i + 1],
                    name: gettok(i + 4, 1),
                    pos: pos
                });
                i += 5;
            }
            else {
                asc.push({
                    op: "catcherr",
                    error: tokens[i + 1],
                    name: undefined,
                    pos: pos
                });
                i += 3;
            }
        }
        else if (gettok(i, 0) == "try" && gettok(i, 1) == "catchall") {
            if (tokens[i + 1] && gettok(i + 1, 0) == "name") {
                asc.push({
                    op: "catcherr",
                    error: undefined,
                    name: gettok(i + 2, 1),
                    pos: pos
                });
                i += 3;
            }
            else {
                asc.push({ op: "catcherr", error: undefined, name: undefined, pos: pos });
                i++;
            }
        }
        else if (gettok(i, 0) == "try" && gettok(i, 1) == "end") {
            asc.push({ op: "tryend", pos: pos });
            i++;
        }
        else if (gettok(i, 0) == "throw" && gettok(i, 1) == "a") {
            typeassert(i + 2, ["throw"]);
            if (tokens[i + 3] && gettok(i + 3, 0) == "assgn") {
                asc.push({
                    op: "throw",
                    error: tokens[i + 1],
                    message: tokens[i + 4],
                    pos: pos
                });
                i += 5;
            }
            else {
                asc.push({ op: "throw", error: tokens[i + 1], pos: pos });
                i += 3;
            }
        }
        else if (gettok(i, 0) == "comment") {
            asc.push({ op: "comment", value: tokens[i + 1], pos: pos });
            i += 2;
        }
        else if (gettok(i, 0) == "macro") {
            i += 2;
        }
        else {
            //console.log("Unrecognized",tokens[i])
            i++;
        }
    }
    return asc;
}
exports.tokens2asc = tokens2asc;
function compile(txt, options) {
    if (options === void 0) { options = {}; }
    var _a = options.lang, lang = _a === void 0 ? "js" : _a, _b = options.romanizeIdentifiers, romanizeIdentifiers = _b === void 0 ? "none" : _b, _c = options.resetVarCnt, resetVarCnt = _c === void 0 ? true : _c, _d = options.logCallback, logCallback = _d === void 0 ? defaultLogCallback : _d, _e = options.errorCallback, errorCallback = _e === void 0 ? defaultErrorCallback : _e, _f = options.lib, lib = _f === void 0 ? stdlib_1.STDLIB : _f, _g = options.strict, strict = _g === void 0 ? false : _g, 
    // import options
    _h = options.entryFilepath, 
    // import options
    entryFilepath = _h === void 0 ? undefined : _h, _j = options.importPaths, importPaths = _j === void 0 ? [] : _j, _k = options.importCache, importCache = _k === void 0 ? {} : _k, _l = options.importContext, importContext = _l === void 0 ? {} : _l, _m = options.allowHttp, allowHttp = _m === void 0 ? false : _m, _o = options.trustedHosts, trustedHosts = _o === void 0 ? [] : _o, _p = options.requestTimeout, requestTimeout = _p === void 0 ? 2000 : _p;
    trustedHosts.push.apply(trustedHosts, defaultTrustedHosts);
    var importOptions = {
        entryFilepath: entryFilepath,
        importPaths: importPaths,
        importCache: importCache,
        importContext: importContext,
        allowHttp: allowHttp,
        trustedHosts: trustedHosts,
        requestTimeout: requestTimeout
    };
    if (resetVarCnt)
        idenMap = {};
    txt = (txt || "").replace(/\r\n/g, "\n");
    var txtlines = txt.split("\n");
    function assert(msg, pos, b) {
        var errmsg = "";
        if (!b) {
            errmsg += "[Syntax Error] " + msg + "\n";
            var l = 0;
            for (var i = 0; i < txtlines.length; i++) {
                l += txtlines[i].length + 1;
                if (l > pos) {
                    errmsg += "Line " + (1 + i) + ", Character " + (1 +
                        pos -
                        (l - txtlines[i].length)) + ":" + txtlines[i];
                    break;
                }
            }
            logCallback(errmsg);
        }
        if (errmsg.length) {
            if (errorCallback) {
                errorCallback(errmsg);
            }
            return errmsg;
        }
        return 0;
    }
    var macros = macro_1.extractMacros(txt, {
        lib: lib,
        lang: lang,
        importOptions: importOptions
    });
    txt = macro_1.expandMacros(txt, macros);
    logCallback("\n\n=== [PASS 0] EXPAND-MACROS ===");
    logCallback(macros);
    // logCallback(txt);
    var tokens = wy2tokens(txt, assert);
    logCallback("\n\n=== [PASS 1] TOKENIZER ===");
    logCallback(tokens);
    if (romanizeIdentifiers != "none") {
        tokenRomanize(tokens, romanizeIdentifiers);
    }
    var asc = tokens2asc(tokens, assert);
    logCallback("\n\n=== [PASS 2] ABSTRACT SYNTAX CHAIN ===");
    logCallback(asc);
    if (strict) {
        logCallback("\n\n=== [PASS 2.5] TYPECHECK ===");
        logCallback(typecheck_1.printSignature(typecheck_1.typecheck(asc, assert)));
    }
    logCallback("\n\n=== [PASS 3] COMPILER ===");
    if (!transpilers_1.default[lang]) {
        new Error("Target language not supported.");
    }
    var transpiler = new transpilers_1.default[lang](asc);
    var _q = transpiler.transpile({ imports: imports }), imports = _q.imports, result = _q.result;
    var targ = result;
    logCallback(targ);
    imports = imports || [];
    imports = Array.from(new Set(imports));
    logCallback("Loading imports " + imports.join(", "));
    reader_1.bundleImports(imports, { lib: lib, lang: lang }, importOptions).forEach(function (_a) {
        var src = _a.src, moduleName = _a.moduleName, entry = _a.entry;
        var compiledModule = compile(src, __assign(__assign({}, options), { entryFilepath: entry, resetVarCnt: false, strict: false }));
        targ = transpiler.wrapModule(moduleName, compiledModule) + targ;
    });
    return targ;
}
exports.compile = compile;
function execute(source, options) {
    if (options === void 0) { options = {}; }
    var _a = options.lang, lang = _a === void 0 ? "js" : _a;
    execute_1.isLangSupportedForEval(lang);
    var compiled = compile(source, options);
    execute_1.evalCompiled(compiled, options);
}
exports.execute = execute;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var INDEX_FILENAME = "序";
function isHostTrusted(url, trustedHosts) {
    for (var _i = 0, trustedHosts_1 = trustedHosts; _i < trustedHosts_1.length; _i++) {
        var host = trustedHosts_1[_i];
        // FIXME: it can be bypassed by relative path resolving,
        // for examples: https://trusted.com/a/../../hijack.com/a/
        if (url.startsWith(host))
            return true;
    }
    return false;
}
function isHttpURL(uri) {
    return !!uri.match(/^https?\:\/\//);
}
function fetchTextSync(url, timeout) {
    var XHR;
    if (typeof window !== "undefined" && "XMLHttpRequest" in window)
        XHR = window.XMLHttpRequest;
    else
        XHR = eval("require")("xmlhttprequest").XMLHttpRequest;
    var xmlHttp = new XHR();
    // xmlHttp.timeout = timeout;
    xmlHttp.open("GET", url, false); // false for synchronous request
    xmlHttp.send(null);
    if (xmlHttp.status >= 200 && xmlHttp.status < 300)
        return xmlHttp.responseText;
    throw new URIError(xmlHttp.responseText);
}
function fetchSync(uri, cache, requestTimeout) {
    if (cache[uri])
        return cache[uri];
    var data = isHttpURL(uri)
        ? fetchTextSync(uri, requestTimeout)
        : eval("require")("fs").readFileSync(uri, "utf-8");
    cache[uri] = data;
    return data;
}
function importReader(moduleName, importOptions) {
    if (importOptions === void 0) { importOptions = {}; }
    var _a = importOptions.allowHttp, allowHttp = _a === void 0 ? false : _a, entryFilepath = importOptions.entryFilepath, _b = importOptions.importPaths, importPaths = _b === void 0 ? [] : _b, _c = importOptions.importCache, importCache = _c === void 0 ? {} : _c, _d = importOptions.importContext, importContext = _d === void 0 ? {} : _d, _e = importOptions.trustedHosts, trustedHosts = _e === void 0 ? [] : _e, _f = importOptions.requestTimeout, requestTimeout = _f === void 0 ? 2000 : _f;
    var context = importContext[moduleName];
    if (context) {
        if (typeof context === "string") {
            return {
                src: context,
                moduleName: moduleName
            };
        }
        if (context.entry) {
            return {
                moduleName: moduleName,
                entry: context.entry,
                src: context.src
                    ? context.src
                    : fetchSync(context.entry, importCache, requestTimeout)
            };
        }
        throw new SyntaxError("Failed to parse context: " + context);
    }
    var pathes = [];
    if (typeof importPaths === "string") {
        pathes.push(importPaths);
    }
    else {
        pathes.push.apply(pathes, importPaths);
    }
    if (entryFilepath)
        pathes.push(entryFilepath
            .replace(/\\/g, "/")
            .split("/")
            .slice(0, -1)
            .join("/"));
    for (var _i = 0, pathes_1 = pathes; _i < pathes_1.length; _i++) {
        var dir = pathes_1[_i];
        var uri = dir;
        var entries = [];
        var src = void 0;
        if (uri.endsWith("/"))
            uri = uri.slice(0, -1);
        if (isHttpURL(uri)) {
            if (!allowHttp && !isHostTrusted(uri, trustedHosts)) {
                throw new URIError("URL request \"" + uri + "\" is blocked by default for security purpose. " +
                    "You can turn it on by specify the \"allowHttp\" option.");
            }
            entries = [
                uri + "/" + encodeURIComponent(moduleName) + ".wy",
                uri + "/" + encodeURIComponent(moduleName) + "/" + encodeURIComponent(INDEX_FILENAME) + ".wy"
            ];
        }
        else {
            entries = [
                uri + "/" + moduleName + ".wy",
                uri + "/" + moduleName + "/" + INDEX_FILENAME + ".wy"
            ];
        }
        for (var _g = 0, entries_1 = entries; _g < entries_1.length; _g++) {
            var entry = entries_1[_g];
            try {
                src = fetchSync(entry, importCache, requestTimeout);
                return { src: src, entry: entry, moduleName: moduleName };
            }
            catch (e) { }
        }
    }
    throw new ReferenceError("Module \"" + moduleName + "\" is not found. Searched in " + importPaths);
}
exports.importReader = importReader;
function bundleImports(imports, options, importOptions) {
    var lib = options.lib, lang = options.lang;
    return imports.map(function (moduleName) {
        if (lib[lang][moduleName]) {
            return {
                moduleName: moduleName,
                src: lib[lang][moduleName]
            };
        }
        if (lib[moduleName]) {
            return {
                moduleName: moduleName,
                src: lib[moduleName]
            };
        }
        return importReader(moduleName, importOptions);
    });
}
exports.bundleImports = bundleImports;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var highlight_1 = __webpack_require__(7);
var hanzi2num_1 = __webpack_require__(0);
var parser_1 = __webpack_require__(4);
var FONT = "'I.Ming', 'Source Han Serif KR', 'Noto Serif CJK KR', serif"; //"Source Han Serif TC"
var RED = "#E53";
var BLACK = "#222";
var BOOK_COLORS = {
    ctrl: RED,
    lop: BLACK,
    name: BLACK,
    cmp: BLACK,
    decl: BLACK,
    print: BLACK,
    rassgn: BLACK,
    ctnr: BLACK,
    comment: RED,
    type: BLACK,
    call: BLACK,
    assgn: BLACK,
    discard: BLACK,
    endl: BLACK,
    ans: BLACK,
    expr: BLACK,
    op: BLACK,
    not: BLACK,
    operand: BLACK,
    bool: BLACK,
    data: "#666",
    iden: "#248",
    quot: BLACK,
    num: "#872"
};
exports.BOOK_COLORS = BOOK_COLORS;
function render(fname, txt, _a) {
    var _b = (_a === void 0 ? {} : _a).plotResult, plotResult = _b === void 0 ? false : _b;
    var svgs = [];
    var W2 = 792;
    var W = W2 / 2;
    var H = 612;
    var X0 = W - 30;
    var Y0 = 120;
    var X1 = 10;
    var Y1 = H - 20;
    var CW = (X0 - X1) / 13;
    var CH = 18;
    var CS = 20;
    var CO = 4;
    var PCT = 40;
    var PCB = 5;
    var PSH = 0; //-2;
    var MA = 0; //10;
    txt = txt.replace(/\r\n/g, "\n");
    txt = txt.replace(/\n+/g, "");
    txt = txt.replace(/\t+/g, "");
    txt = txt.replace(/ +/g, "");
    txt = txt.replace(/『/g, "「「");
    txt = txt.replace(/』/g, "」」");
    // txt = txt + txt + txt;
    var tokens = parser_1.wy2tokens(txt);
    var side = 0;
    var pageno = 0;
    var commentx = W2;
    var sm = highlight_1.semantic(txt);
    var svg = "";
    function makeBorder() {
        var p = 5;
        var vo = Y0 + (Y1 - Y0) * 0.2;
        var vh = 10;
        var vp = 3;
        var uo = Y0 + (Y1 - Y0) * 0.7;
        if (!side) {
            svg += "<path d=\"M" + W2 + " " + Y0 + " L" + (W2 - X0 - p) + " " + Y0 + " L" + (W2 -
                X0 -
                p) + " " + Y1 + " L" + W2 + " " + Y1 + "\" stroke=\"" + BLACK + "\" fill=\"none\" stroke-width=\"3\"></path>";
            svg += "<path d=\"M" + W2 + " " + vo + " L" + (W2 - X1) + " " + vo + " L" + (W2 - X1) + " " + (vo +
                vh) + " L" + W2 + " " + (vo + vh / 2) + "\" fill=\"" + BLACK + "\" stroke=\"none\"></path>";
            svg += "<path d=\"M" + W2 + " " + (vo - vp) + " L" + (W2 - X1) + " " + (vo -
                vp) + "\" fill=\"none\" stroke=\"" + BLACK + "\"></path>";
            svg += "<path d=\"M" + (W2 - X1) + " " + (vo + vh + vp) + " L" + W2 + " " + (vo +
                vh / 2 +
                vp) + "\" fill=\"none\" stroke=\"" + BLACK + "\"></path>";
            svg += "<path d=\"M" + W2 + " " + uo + " L" + (W2 -
                X1) + " " + uo + "\" fill=\"none\" stroke=\"" + BLACK + "\"></path>";
        }
        else {
            svg += "<path d=\"M" + 0 + " " + Y0 + " L" + (X0 + p) + " " + Y0 + " L" + (X0 +
                p) + " " + Y1 + " L" + 0 + " " + Y1 + "\" stroke=\"" + BLACK + "\" fill=\"none\" stroke-width=\"3\"></path>";
            svg += "<path d=\"M" + 0 + " " + vo + " L" + X1 + " " + vo + " L" + X1 + " " + (vo + vh) + " L" + 0 + " " + (vo +
                vh / 2) + "\" fill=\"" + BLACK + "\" stroke=\"none\"></path>";
            svg += "<path d=\"M" + 0 + " " + (vo - vp) + " L" + X1 + " " + (vo -
                vp) + "\" fill=\"none\" stroke=\"" + BLACK + "\"></path>";
            svg += "<path d=\"M" + X1 + " " + (vo + vh + vp) + " L" + 0 + " " + (vo +
                vh / 2 +
                vp) + "\" fill=\"none\" stroke=\"" + BLACK + "\"></path>";
            svg += "<path d=\"M" + 0 + " " + uo + " L" + X1 + " " + uo + "\" fill=\"none\" stroke=\"" + BLACK + "\"></path>";
        }
        if (!plotResult) {
            for (var i = side ? X0 : W2 - X1; i >= (side ? X1 : W2 - X0) - p; i -= CW) {
                svg += "<line x1=\"" + i + "\" y1=\"" + Y0 + "\" x2=\"" + i + "\" y2=\"" + Y1 + "\" stroke=\"" + BLACK + "\"></line>";
            }
        }
        else {
            if (!side) {
                svg += "<line x1=\"" + (W2 - X1) + "\" y1=\"" + Y0 + "\" x2=\"" + (W2 -
                    X1) + "\" y2=\"" + Y1 + "\" stroke=\"" + BLACK + "\"></line>";
                svg += "<line x1=\"" + (W2 - X0) + "\" y1=\"" + Y0 + "\" x2=\"" + (W2 -
                    X0) + "\" y2=\"" + Y1 + "\" stroke=\"" + BLACK + "\"></line>";
            }
            else {
                svg += "<line x1=\"" + X1 + "\" y1=\"" + Y0 + "\" x2=\"" + X1 + "\" y2=\"" + Y1 + "\" stroke=\"" + BLACK + "\"></line>";
                svg += "<line x1=\"" + X0 + "\" y1=\"" + Y0 + "\" x2=\"" + X0 + "\" y2=\"" + Y1 + "\" stroke=\"" + BLACK + "\"></line>";
            }
        }
        for (var i = 0; i < fname.length; i++) {
            svg += "<text x=\"" + ((side ? 0 : W2 - X1) + X1 * 0.1) + "\" y=\"" + (vo +
                30 +
                i * X1 * 1.5) + "\" font-size=\"" + X1 *
                0.8 + "\" font-family=\"" + FONT + "\" fill=\"" + BLACK + "\">" + fname[i] + "</text>";
        }
        var hpg = hanzi2num_1.num2hanzi(pageno + 1);
        for (var i = 0; i < hpg.length; i++) {
            svg += "<text x=\"" + ((side ? 0 : W2 - X1) + X1 * 0.1) + "\" y=\"" + (uo +
                30 +
                i * X1 * 1.5) + "\" font-size=\"" + X1 *
                0.8 + "\" font-family=\"" + FONT + "\" fill=\"" + BLACK + "\">" + hpg[i] + "</text>";
        }
    }
    var x;
    var y;
    function newSvg() {
        svg = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"" + W2 + "\" height=\"" + H + "\" viewBox=\"" + -MA + " " + -MA + " " + (W2 +
            MA * 2) + " " + (H + MA * 2) + "\">";
        if (MA) {
            svg += "<rect x=\"" + -MA + "\" y=\"" + -MA + "\" width=\"" + (W2 + MA * 2) + "\" height=\"" + (H +
                MA * 2) + "\" stroke=\"none\" fill=\"white\"></rect>";
        }
        svg += "<rect x=\"" + 0 + "\" y=\"" + 0 + "\" width=\"" + W + "\" height=\"" + H + "\" stroke=\"" + BLACK + "\" fill=\"linen\"></rect>";
        svg += "<rect x=\"" + W + "\" y=\"" + 0 + "\" width=\"" + W + "\" height=\"" + H + "\" stroke=\"" + BLACK + "\" fill=\"linen\"></rect>";
        if (side == 0) {
            x = W2 - X1 - CW;
        }
        else {
            x = X0 - CW;
        }
        y = Y0 + CH;
        commentx = W2;
    }
    newSvg();
    makeBorder();
    function managePage() {
        if ((side == 0 && x < W2 - X0 - 0.1) || (side == 1 && x < X1 - 0.1)) {
            side = side == 0 ? 1 : 0;
            pageno++;
            if (side == 0) {
                x = W + X0 - CW;
                svg += "</svg>";
                svgs.push(svg);
                newSvg();
            }
            else {
                x = X0 - CW;
            }
            y = Y0 + CH;
            makeBorder();
        }
    }
    function makeLine() {
        if (plotResult) {
            if (Math.abs(x - X1) > 0.1 && Math.abs(x - (W2 - X0)) > 0.1) {
                svg += "<line x1=\"" + x + "\" y1=\"" + Y0 + "\" x2=\"" + x + "\" y2=\"" + Y1 + "\" stroke=\"" + BLACK + "\"></line>";
            }
        }
    }
    function nextLine() {
        makeLine();
        x -= CW;
        y = Y0 + CH;
        managePage();
    }
    function resultPlotter() {
        var out = "";
        var js = parser_1.compile(txt, { lang: "js" })
            .replace(/console.log\(\)/g, "out+=\"\\n\";")
            .replace(/console.log\((.+?)\)/g, function (_, p1) {
            return "out+=" + p1.split(",").join("+") + "+\"\\n\";";
        });
        eval(js);
        makeLine();
        x -= CW / 2;
        y = Y0 + CH;
        for (var i = 0; i < out.length; i++) {
            if (out[i] == "\n") {
                y = Y0 + CH;
                x -= CW / 3.7;
            }
            else {
                svg += "<text x=\"" + x + "\" y=\"" + y + "\" font-size=\"" + CS /
                    3 + "\" font-family=\"" + FONT + "\" fill=\"rgba(0,0,0,0.7)\">" + out[i] + "</text>";
                y += CH / 2.5;
                if (y >= Y1) {
                    y = Y0 + CH;
                    x -= CW / 3.7;
                }
            }
        }
    }
    var iden = false;
    for (var i = 0; i < txt.length; i++) {
        if (txt[i] == "\n") {
            nextLine();
        }
        else {
            if (!iden && txt[i] == "批" && txt[i + 1] == "曰") {
                for (var j = 0; j < tokens.length; j++) {
                    if (tokens[j][2] > i + 1) {
                        var cmt = tokens[j][1].replace(/^\"\"*/, "").replace(/\"\"*$/, "");
                        console.log(cmt);
                        var ky = PCT + CH / 2;
                        var kx = Math.min(commentx, x + CO + CW / 2);
                        for (var k = 0; k < cmt.length; k++) {
                            if (cmt[k] == "。" || cmt[k] == "、") {
                                svg += "<circle cx=\"" + (kx + CW / 2 - CO) + "\" cy=\"" + (ky -
                                    CH / 2) + "\" r=\"" + CH /
                                    12 + "\" stroke=\"" + RED + "\" fill=\"none\" stroke-width=\"0.5\"></circle>";
                            }
                            else {
                                svg += "<text x=\"" + kx + "\" y=\"" + ky + "\" font-size=\"" + CS /
                                    2.2 + "\" font-family=\"" + FONT + "\" fill=\"" + BOOK_COLORS.comment + "\">" + cmt[k] + "</text>";
                                ky += CH / 1.5;
                                if (ky > Y0 - PCB) {
                                    ky = PCT + CH / 2;
                                    kx -= CW / 2;
                                }
                            }
                        }
                        commentx = kx - CW / 2;
                        i = tokens[j][2];
                        break;
                    }
                }
            }
            else if (txt[i] == "。") {
                // svg += `<text x="${x+CW*0.6+CO}" y="${y-CH}" font-size="${CS}" font-family="${FONT}" fill="${RED}">${txt[i]}</text>`
                svg += "<circle cx=\"" + (x + CW - 3) + "\" cy=\"" + (y - CH + PSH) + "\" r=\"" + CH /
                    7 + "\" stroke=\"" + RED + "\" fill=\"none\" stroke-width=\"1\" wy-data=\"" + txt[i] + "\"></circle>";
            }
            else if (txt[i] == "、" && !iden) {
                svg += "<text x=\"" + (x + CW - 6) + "\" y=\"" + (y -
                    CH +
                    PSH) + "\" fill=\"" + RED + "\" wy-data=\"" + txt[i] + "\">\u3001</text>";
            }
            else if (txt[i] == "「") {
                iden = true;
                if (y > Y1) {
                    nextLine();
                }
                var h = CH / 4;
                svg += "<path d=\"M" + x + " " + (y - CH / 2 + h / 2 + PSH) + " L" + (x + CW / 5) + " " + (y -
                    CH / 2 -
                    h / 2 +
                    PSH) + " L" + (x + (4 * CW) / 5) + " " + (y - CH / 2 - h / 2 + PSH) + " L" + (x + CW) + " " + (y -
                    CH / 2 +
                    h / 2 +
                    PSH) + "\" stroke=\"" + BLACK + "\" fill=\"none\" stroke-width=\"0.5\" wy-data=\"" + txt[i] + "\"></path>";
                // svg += `<text x="${x+CO}" y="${y-CH/2}" font-size="${CS}" font-family="${FONT}">︹</text>`
                y += CH / 2;
            }
            else if (txt[i] == "」") {
                iden = false;
                if (y > Y1) {
                    nextLine();
                }
                var h = CH / 4;
                svg += "<path d=\"M" + x + " " + (y - CH / 2 - h + PSH) + " L" + (x + CW / 5) + " " + (y -
                    CH / 2 +
                    PSH) + " L" + (x + (4 * CW) / 5) + " " + (y - CH / 2 + PSH) + " L" + (x + CW) + " " + (y -
                    CH / 2 -
                    h +
                    PSH) + "\" stroke=\"" + BLACK + "\" fill=\"none\" stroke-width=\"0.5\" wy-data=\"" + txt[i] + "\"></path>";
                // svg += `<text x="${x+CO}" y="${y}" font-size="${CS}" font-family="${FONT}">︺</text>`
                y += CH / 2;
            }
            else {
                if (y >= Y1) {
                    nextLine();
                }
                svg += "<text x=\"" + (x +
                    CO) + "\" y=\"" + y + "\" font-size=\"" + CS + "\" font-family=\"" + FONT + "\" fill=\"" + BOOK_COLORS[sm[i]] + "\" wy-data=\"" + txt[i] + "\">" + txt[i] + "</text>";
                y += CH;
            }
        }
    }
    if (plotResult) {
        resultPlotter();
    }
    // makeLine();
    svg += "</svg>";
    svgs.push(svg);
    return svgs;
}
exports.render = render;
function unrender(svgs) {
    var txt = "";
    for (var i = 0; i < svgs.length; i++) {
        svgs[i].replace(/wy-data="(.*?)"/g, function (_, p) {
            txt += p;
        });
    }
    return txt;
}
exports.unrender = unrender;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var { num2hanzi } = __webpack_require__(0);
var { NUMBER_KEYWORDS, KEYWORDS } = __webpack_require__(3);

var DEFAULT_COLORS = {
  ctrl: "#F92672",
  lop: "#FFF",
  name: "#FFF",
  cmp: "#FFF",
  decl: "#FFF",
  print: "#FFF",
  rassgn: "#FFF",
  ctnr: "#66D9EF",
  comment: "#FFF",
  type: "#66D9EF",
  call: "#FFF",
  assgn: "#FFF",
  discard: "#FFF",
  endl: "#75715E",
  ans: "#A6E22E",
  expr: "#FFF",
  op: "#FFF",
  not: "#FFF",
  operand: "#FFF",
  bool: "#AE81FF",
  data: "#75715E",
  iden: "#A6E22E",
  quot: "#A6E22E",
  num: "#AE81FF"
};

var setTheme = function(theme) {
  DEFAULT_COLORS = theme;
};

var semantic = function(txt) {
  var off = 0;
  var out = [];
  var i = 0;
  while (i < txt.length) {
    if (txt[i] == "「" || txt[i] == "『") {
      off++;
      out.push("quot");
    } else if (txt[i] == "」" || txt[i] == "』") {
      off--;
      out.push("quot");
    } else {
      if (off) {
        out.push("iden");
      } else {
        var ok = false;
        for (var k in KEYWORDS) {
          ok = true;
          for (var j = 0; j < k.length; j++) {
            if (k[j] != txt[i + j]) {
              ok = false;
              break;
            }
          }
          if (ok) {
            for (var j = 0; j < k.length; j++) {
              out.push(KEYWORDS[k][0]);
              i++;
            }
            i--;
            break;
          }
        }
        if (ok == false) {
          if (NUMBER_KEYWORDS.includes(txt[i])) {
            out.push("num");
          } else {
            out.push("data");
          }
        }
      }
    }
    i++;
  }
  return out;
};

var NNL = 0;

function newEditor(txt) {
  var div = document.createElement("pre");
  div.contentEditable = "true";
  div.autoComplete = "off";
  div.autoCorrect = "off";
  div.autoCapitalize = "off";
  div.spellCheck = "off";
  div.onkeyup = function() {
    if (event.keyCode == 13) {
      NNL += 1;
    }
  };
  div.innerHTML = txt;
  highlight([div]);
  // setInterval(()=>highlight([div]),20000);
  return div;
}

var highlight = function(codes) {
  function getCaretPosition(element, mode) {
    var caretOffset = 0;
    var doc = element.ownerDocument || element.document;
    var win = doc.defaultView || doc.parentWindow;
    var sel;

    sel = win.getSelection();
    if (sel.rangeCount > 0) {
      var range = win.getSelection().getRangeAt(0);
      var preCaretRange = range.cloneRange();
      preCaretRange.selectNodeContents(element);
      if (mode == "start") {
        preCaretRange.setEnd(range.endContainer, range.endOffset);
      } else {
        preCaretRange.setEnd(range.startContainer, range.startOffset);
      }
      caretOffset = preCaretRange.toString().length;
    }
    return caretOffset;
  }

  function setCaretPosition(element, i, j, ie, je) {
    var range = document.createRange();
    var sel = window.getSelection();
    range.setStart(element.childNodes[i], j);
    range.setEnd(element.childNodes[ie], je);
    sel.removeAllRanges();
    sel.addRange(range);
  }

  for (var i = 0; i < codes.length; i++) {
    var c = getCaretPosition(codes[i], "start") + NNL;
    var ce = getCaretPosition(codes[i], "end") + NNL;
    NNL = 0;
    var cc = codes[i].innerText;
    var nc = "";
    var sm = semantic(cc);

    for (var j = 0; j < cc.length; j++) {
      nc += `<x style="color:${DEFAULT_COLORS[sm[j]]}">${cc[j]}</x>`;
    }
    // console.log(cc);
    // console.log(nc);
    codes[i].innerHTML = nc;
    if (document.activeElement == codes[i]) {
      var c0 = Math.min(c, ce);
      var c1 = Math.max(c, ce);
      try {
        setCaretPosition(codes[i], c0, 0, c1, 0);
        // console.log(c0,0,c1,0)
      } catch (e) {
        for (var eee = 0; eee < 10; eee++) {
          try {
            codes[i].innerHTML += "<i></i>";
            setCaretPosition(codes[i], c0, 0, c1, 0);
            break;
          } catch (e) {}
        }
      }
    }
  }
};

function newLineNo(ed) {
  var div = document.createElement("pre");
  div.style.float = "left";
  div.style.textAlign = "right";
  div.style.color = DEFAULT_COLORS.endl;
  function isRoman(x) {
    return x.replace(/[ -~\t]/g, "").length == 0;
  }
  function genLineNo() {
    var ls = ed.innerText.split("\n");
    var n = ls.length;
    div.innerText = "";
    for (var i = 0; i < n; i++) {
      if (!isRoman(ls[i])) {
        div.innerText += num2hanzi(i + 1) + " ";
      }
      if (i != n - 1) {
        div.innerText += "\n";
      }
    }
  }
  setInterval(genLineNo, 1000);
  genLineNo();
  return div;
}

module.exports = {
  semantic,
  highlight,
  newLineNo,
  DEFAULT_COLORS,
  newEditor,
  setTheme
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var hanzi2roman_map_pinyin_json_1 = __importDefault(__webpack_require__(9));
var hanzi2roman_map_baxter_json_1 = __importDefault(__webpack_require__(10));
function hanzi2unicodeEntry(s) {
    var y = "";
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var c = s_1[_i];
        y += "U";
        y += c
            .charCodeAt(0)
            .toString(16)
            .toUpperCase();
    }
    return y;
}
exports.hanzi2unicodeEntry = hanzi2unicodeEntry;
function hanzi2pinyin(a, system) {
    if (system === void 0) { system = "pinyin"; }
    if (system === "unicode")
        return hanzi2unicodeEntry(a);
    var tab = { pinyin: hanzi2roman_map_pinyin_json_1.default, baxter: hanzi2roman_map_baxter_json_1.default }[system];
    var s = "";
    for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
        var x = a_1[_i];
        var key = x
            .charCodeAt(0)
            .toString(16)
            .toUpperCase();
        var r = tab[key];
        if (r == undefined) {
            r = "_";
        }
        s += r.split(" ")[0];
    }
    return s;
}
exports.hanzi2pinyin = hanzi2pinyin;


/***/ }),
/* 9 */
/***/ (function(module) {

module.exports = JSON.parse("{\"3400\":\"QIU1\",\"3401\":\"TIAN3 TIAN4\",\"3404\":\"KUA4\",\"3405\":\"WU3\",\"3406\":\"YIN3\",\"3416\":\"YE4\",\"3421\":\"NUO4\",\"3424\":\"QIU2\",\"3428\":\"XU4\",\"3429\":\"XING2\",\"3430\":\"XIN4\",\"3431\":\"ZHEN3\",\"3432\":\"DAI4\",\"3433\":\"WU4\",\"3434\":\"PAN1\",\"3437\":\"MA3 MA4 MIAN2\",\"3438\":\"QIAN4\",\"3439\":\"YI4\",\"3441\":\"ZHUO1\",\"3442\":\"FANG3 PANG2\",\"3443\":\"AO3\",\"3444\":\"WU3\",\"3445\":\"ZUO4\",\"3447\":\"ZHOU4\",\"3448\":\"DONG4\",\"3449\":\"SU4\",\"3454\":\"XU3\",\"3458\":\"JIE4\",\"3459\":\"DIE2 YONG3\",\"3463\":\"LAN2\",\"3464\":\"MIAO2\",\"3465\":\"YI4\",\"3466\":\"LI4\",\"3467\":\"JI4\",\"3468\":\"YU3\",\"3469\":\"LUO2\",\"3470\":\"HUI4\",\"3471\":\"RAO3\",\"3473\":\"ZHOU4\",\"3475\":\"HAN4 JI2 JIE2 ZHA3 ZI2\",\"3476\":\"XI4\",\"3477\":\"TAI4 TIAN4 ZHUAN4\",\"3478\":\"AI3 YAO2 YOU2\",\"3479\":\"HUI4\",\"3480\":\"ZHA3\",\"3481\":\"YU3 YUN4\",\"3482\":\"KU4 ZHUO2\",\"3483\":\"ER4\",\"3484\":\"NANG4 NEN4 RAN3\",\"3485\":\"QI3\",\"3486\":\"CHI4 KE4 XI4 XIAO4 YAN4\",\"3487\":\"MU4 WU3\",\"3488\":\"HAN4\",\"3489\":\"TANG3\",\"3491\":\"HUI4 KUI3\",\"3492\":\"PU2\",\"3493\":\"TA4\",\"3494\":\"SHU3\",\"3496\":\"OU3\",\"3497\":\"TAI2\",\"3499\":\"MIAN2\",\"3500\":\"LVE4 QING2\",\"3502\":\"LIN2\",\"3503\":\"JUE2 PI4\",\"3504\":\"SU4\",\"3505\":\"XIAO4\",\"3506\":\"CHAN2\",\"3509\":\"ZHU2\",\"3511\":\"CHI4 DAO4 QI4 SHUI4\",\"3512\":\"XI2\",\"3513\":\"JIAN3 XIAN4\",\"3515\":\"JI2 YI4\",\"3517\":\"FEI4\",\"3518\":\"CHU4\",\"3519\":\"BANG3 PENG2\",\"3520\":\"HE2 JIA2\",\"3522\":\"JUE2\",\"3523\":\"LEI2 LEI4\",\"3524\":\"SHEN3\",\"3525\":\"PI2\",\"3526\":\"YANG3\",\"3527\":\"LV4 XUE4\",\"3528\":\"BEI4\",\"3529\":\"E4\",\"3530\":\"HENG2\",\"3531\":\"YU3\",\"3533\":\"GUI3 GUN4 HUAN2 JUE2\",\"3534\":\"YI4\",\"3535\":\"XIAN4 XUAN3\",\"3536\":\"GONG4\",\"3537\":\"LOU4\",\"3539\":\"LE4\",\"3541\":\"QUE4\",\"3542\":\"YIN2\",\"3544\":\"ZHI4\",\"3545\":\"JIA3\",\"3546\":\"HU4\",\"3547\":\"LA2\",\"3548\":\"HOU4 YI3\",\"3549\":\"KE4\",\"3550\":\"XIE3\",\"3551\":\"CHU2\",\"3552\":\"WEI2 WEI3\",\"3555\":\"HUAN4\",\"3556\":\"SU4\",\"3557\":\"YOU4\",\"3559\":\"JUN4 RUI4\",\"3561\":\"HE2 HE4 HUO4\",\"3562\":\"GAI4 HAI4 JU4 LUN3 NOU3\",\"3563\":\"YAN3 YAN4\",\"3564\":\"QIU2\",\"3565\":\"YI3\",\"3566\":\"HUA4\",\"3568\":\"FAN4\",\"3569\":\"ZHANG4\",\"3570\":\"HE4\",\"3571\":\"YOU2\",\"3572\":\"HUA2 YING2\",\"3574\":\"CHEN2\",\"3575\":\"GUO2 HUN2 LUO3\",\"3576\":\"NG4\",\"3577\":\"HUA4\",\"3578\":\"LI4\",\"3579\":\"FA2\",\"3580\":\"LE4 LUO4\",\"3581\":\"LIN4\",\"3582\":\"YI4\",\"3583\":\"HOU3\",\"3585\":\"XU4\",\"3586\":\"QU2 QU3\",\"3587\":\"ER2\",\"3590\":\"WEI3\",\"3591\":\"XIE4\",\"3592\":\"TI2\",\"3593\":\"HONG2\",\"3594\":\"TUN3\",\"3595\":\"BO4 NIE4\",\"3596\":\"NIE4\",\"3597\":\"YIN2\",\"3600\":\"ZUO4\",\"3601\":\"YI4\",\"3602\":\"CI2\",\"3605\":\"XIAN2\",\"3606\":\"TAI2\",\"3607\":\"RONG2\",\"3608\":\"YI1\",\"3609\":\"ZHI4\",\"3610\":\"PAO4 PENG3\",\"3611\":\"LI4\",\"3613\":\"LAN2\",\"3614\":\"CAN3 SAI3\",\"3615\":\"HAN3 LAN2\",\"3616\":\"YAN2\",\"3619\":\"YAN2 YAN3\",\"3620\":\"BI4 MI4\",\"3621\":\"XIA2\",\"3622\":\"WENG3\",\"3623\":\"XUAN2 YUAN2\",\"3625\":\"YOU2\",\"3626\":\"QIN2\",\"3627\":\"XU4\",\"3628\":\"NEI4\",\"3629\":\"BI4\",\"3632\":\"JU2\",\"3634\":\"ZUO4\",\"3635\":\"BU4\",\"3636\":\"JIE2\",\"3637\":\"AI4\",\"3638\":\"ZANG4\",\"3639\":\"CI2\",\"3640\":\"LIU4\",\"3641\":\"MANG3 MEI2 MEI4 MU4 NA4\",\"3642\":\"DUI4\",\"3644\":\"BI4\",\"3645\":\"BAO3\",\"3647\":\"CHU4\",\"3648\":\"HAN2 XIA4\",\"3649\":\"TIAN3\",\"3650\":\"DUO3\",\"3651\":\"YU3\",\"3652\":\"YE3\",\"3653\":\"KUI2\",\"3654\":\"HAN2\",\"3655\":\"KUAI4\",\"3657\":\"KUAI4\",\"3659\":\"LONG3\",\"3660\":\"YI4\",\"3662\":\"MAN2 MEN2\",\"3663\":\"ZHANG4\",\"3664\":\"XIA4\",\"3665\":\"GUN3\",\"3668\":\"JI4 QI2\",\"3669\":\"LIAO2\",\"3670\":\"XIE4\",\"3671\":\"HAO4\",\"3672\":\"YONG3\",\"3673\":\"HAN3 HE2 KAN3\",\"3674\":\"CHAN4 ZHAN4\",\"3675\":\"TAI2\",\"3676\":\"TANG2\",\"3677\":\"ZHI2\",\"3678\":\"BAO4 BO2 PU2\",\"3679\":\"MENG2\",\"3681\":\"QIAO2 QIAO4 QU4\",\"3682\":\"RANG2\",\"3683\":\"YUN2 YUN4\",\"3685\":\"LONG2\",\"3686\":\"FU4\",\"3689\":\"GU3\",\"3690\":\"TAO4\",\"3692\":\"SHAN3\",\"3693\":\"LAI2 LAI3\",\"3694\":\"NIE4\",\"3695\":\"FU2\",\"3696\":\"GAO3\",\"3697\":\"QIE2 XIE2\",\"3698\":\"BAN4\",\"3703\":\"LIAN4 LIAO2 MANG2\",\"3704\":\"XUN2\",\"3705\":\"XU4\",\"3706\":\"MI4\",\"3707\":\"HUI4 YE4\",\"3708\":\"MU4\",\"3710\":\"SHU4\",\"3711\":\"FU2 PO2\",\"3712\":\"YI4\",\"3713\":\"DA2\",\"3715\":\"LIAN2\",\"3716\":\"CAO2\",\"3717\":\"CAN3 CHU2 XUAN4\",\"3718\":\"JU4\",\"3719\":\"LU4\",\"3723\":\"RAN2\",\"3724\":\"SHEN3\",\"3725\":\"MAI2 MO2\",\"3726\":\"HAN4 NIE4 SI4 XIE2 XIN2\",\"3727\":\"YUE4\",\"3728\":\"ER2 NAI2\",\"3729\":\"AO4 BIE2\",\"3730\":\"YUE4\",\"3731\":\"DONG4 ZHI4\",\"3732\":\"WENG3 YING2\",\"3733\":\"HUAI2\",\"3734\":\"MENG4\",\"3735\":\"NIAO3\",\"3736\":\"WAN3\",\"3737\":\"MI2 NAI3 XIAN3\",\"3738\":\"NIE4\",\"3739\":\"QU2\",\"3740\":\"HAO4\",\"3741\":\"XUN2\",\"3742\":\"ZHI4\",\"3743\":\"FAN4 MIAN3 WAN3\",\"3744\":\"CHUN2 QI4 RUN4\",\"3745\":\"GOU4\",\"3747\":\"CHUN2\",\"3748\":\"LUAN2\",\"3749\":\"ZHU4\",\"3750\":\"RONG2\",\"3751\":\"MANG2 PANG2\",\"3753\":\"GE2 KE4\",\"3754\":\"YAO4\",\"3755\":\"NING2\",\"3756\":\"YI2 YIN2\",\"3757\":\"LANG2\",\"3758\":\"YONG2\",\"3759\":\"YIN2\",\"3760\":\"MING2\",\"3761\":\"ZUI4\",\"3762\":\"YU3\",\"3763\":\"YE4 YI4\",\"3764\":\"GOU4\",\"3765\":\"MI3\",\"3766\":\"JUN4 YA2\",\"3767\":\"WEN3\",\"3770\":\"MIAN2\",\"3771\":\"MENG4\",\"3772\":\"QIN3\",\"3774\":\"WAN2\",\"3775\":\"DE2 AI4\",\"3776\":\"AI4 DE2\",\"3778\":\"BIAN4\",\"3779\":\"NOU2\",\"3781\":\"YAO4\",\"3782\":\"TUI3\",\"3783\":\"JI2\",\"3785\":\"GUO3\",\"3786\":\"JI3\",\"3787\":\"WEI3\",\"3790\":\"JU1\",\"3791\":\"WEI3\",\"3792\":\"XI4 XIE4\",\"3793\":\"QI3 QI4\",\"3794\":\"YI2\",\"3795\":\"XIE4\",\"3796\":\"CI4\",\"3797\":\"QIU2\",\"3798\":\"TUN2\",\"3799\":\"NIAO4\",\"3800\":\"DAO3\",\"3802\":\"AO2\",\"3804\":\"XI2\",\"3805\":\"FU2 FU4\",\"3807\":\"JIU4\",\"3808\":\"RUN4\",\"3809\":\"TONG2\",\"3810\":\"JIAO4\",\"3811\":\"ZUI4\",\"3812\":\"BIAO3\",\"3813\":\"MENG2\",\"3814\":\"BAI4\",\"3815\":\"WEI3\",\"3816\":\"JI4 YI3\",\"3817\":\"AO4 WO4\",\"3818\":\"YU3\",\"3819\":\"HAO2\",\"3820\":\"LU2\",\"3821\":\"NIAO3\",\"3822\":\"HUA4 HUAI2 HUAN4 MO4\",\"3823\":\"LAI4 LI4\",\"3825\":\"LV4\",\"3827\":\"MI2 MI3\",\"3828\":\"YU4\",\"3831\":\"JI4 QI3\",\"3832\":\"BI3\",\"3834\":\"REN4\",\"3836\":\"FAN2\",\"3837\":\"GE2\",\"3838\":\"KU4\",\"3839\":\"JIE4\",\"3840\":\"BI4\",\"3841\":\"KAI3 KUA4\",\"3842\":\"LI4\",\"3844\":\"SUN3 XUN2\",\"3845\":\"NUO3\",\"3847\":\"JI2 ZHE2\",\"3848\":\"MEN2 WEN4\",\"3849\":\"XIAN2 YAN2\",\"3851\":\"QIAO3\",\"3854\":\"WU4\",\"3856\":\"CHUANG2\",\"3857\":\"TI2\",\"3858\":\"LIAN2\",\"3859\":\"BI4 PI2\",\"3860\":\"ZHENG4\",\"3861\":\"CHU2\",\"3862\":\"MAN4\",\"3863\":\"LONG2\",\"3865\":\"YIN3\",\"3867\":\"ZHENG4\",\"3868\":\"QIAN1\",\"3869\":\"LUAN2\",\"3870\":\"YU3\",\"3871\":\"JIU3\",\"3872\":\"HUAN2\",\"3873\":\"DI3 ZHE2 ZHI3\",\"3875\":\"LING2\",\"3876\":\"JI4 ZHI3\",\"3877\":\"BEN3\",\"3878\":\"ZHA3 ZHA4\",\"3879\":\"CI4\",\"3880\":\"CI4 ZI4\",\"3881\":\"CHI3\",\"3882\":\"YAN3\",\"3883\":\"LANG2\",\"3884\":\"DOU4\",\"3885\":\"LONG4\",\"3886\":\"CHAN2\",\"3888\":\"TUI2\",\"3889\":\"CHA2\",\"3891\":\"TUI2\",\"3892\":\"CHA2\",\"3893\":\"YAO3 ZHANG4\",\"3894\":\"ZONG3\",\"3897\":\"QIAO4\",\"3898\":\"LIAN2\",\"3899\":\"QIN2\",\"3901\":\"MIAN3 TIAN3\",\"3902\":\"JI2\",\"3903\":\"FANG2\",\"3904\":\"PEI4\",\"3905\":\"AI4\",\"3906\":\"FAN4\",\"3907\":\"AO3 FO2 WU4\",\"3908\":\"QIN4\",\"3909\":\"QIA4 YA2\",\"3911\":\"YOU4\",\"3913\":\"BEN4\",\"3914\":\"FU2 FU4\",\"3915\":\"CHU4\",\"3916\":\"ZHU4\",\"3918\":\"CHU4 CU4 ZHOU4\",\"3920\":\"LIE4\",\"3921\":\"LI4\",\"3922\":\"XU4 YU4\",\"3924\":\"YU2 YU3\",\"3925\":\"HAI4\",\"3926\":\"LI4\",\"3927\":\"HOU2 HOU4\",\"3928\":\"GONG3 QIONG2\",\"3929\":\"KE4\",\"3930\":\"ZAN3 ZUO4\",\"3931\":\"FU4\",\"3932\":\"QIE4 QU4\",\"3933\":\"BEI3\",\"3934\":\"XI2\",\"3935\":\"CI2\",\"3936\":\"PANG2\",\"3938\":\"XI4\",\"3939\":\"QIU2\",\"3940\":\"DE2\",\"3941\":\"DE2 ZHI2 ZHOU4\",\"3942\":\"TE4\",\"3943\":\"MEN4\",\"3944\":\"LING2\",\"3945\":\"SHOU4\",\"3946\":\"DIAN4 TUI4\",\"3947\":\"CAN2 CAN4\",\"3948\":\"DIE2\",\"3949\":\"CHE4 CHI4\",\"3950\":\"YUAN4\",\"3952\":\"CAI3\",\"3953\":\"QI3\",\"3954\":\"YU2 YU4\",\"3955\":\"LIAN2\",\"3960\":\"XU3\",\"3961\":\"XI4\",\"3962\":\"QIU2\",\"3963\":\"HUI4\",\"3965\":\"YU2\",\"3966\":\"QIE4 XIA2 XIAN3\",\"3967\":\"SHUN4\",\"3968\":\"CHUI2 SHUI4 WEI3\",\"3969\":\"DUO3\",\"3971\":\"FEI3\",\"3972\":\"SHEN4 YIN2\",\"3973\":\"YUAN2\",\"3974\":\"YI2\",\"3975\":\"HUN4\",\"3976\":\"SE4\",\"3977\":\"YE4 YI4\",\"3978\":\"MIN3\",\"3979\":\"FEN3\",\"3980\":\"FENG2\",\"3981\":\"LIAN2\",\"3982\":\"CHANG2 TANG4\",\"3983\":\"CHAN3\",\"3984\":\"MA2 MI4\",\"3985\":\"DI4\",\"3987\":\"LU4\",\"3989\":\"YI4\",\"3990\":\"NI4\",\"3991\":\"LIAN3 XIAN4\",\"3992\":\"LI2\",\"3993\":\"XIAN4\",\"3994\":\"YAN4\",\"3995\":\"LONG2\",\"3996\":\"MEN4\",\"3997\":\"JIAN4 JIN4\",\"4000\":\"FAN2\",\"4001\":\"YOU4\",\"4003\":\"TUI2\",\"4004\":\"MENG2\",\"4005\":\"SHE4 ZHE2\",\"4006\":\"JIN4\",\"4007\":\"GU3 QUE4\",\"4008\":\"QI4\",\"4009\":\"QIAO2 SHA4\",\"4010\":\"SAN3\",\"4011\":\"NA4 NI4 WO4\",\"4013\":\"HUAN4\",\"4014\":\"NIU2 REN4\",\"4015\":\"CHENG4 ZHEN4\",\"4017\":\"JUE2\",\"4018\":\"XI2 XIE2\",\"4019\":\"QI4\",\"4020\":\"QU2\",\"4021\":\"CHAN4 TAN4\",\"4022\":\"SHUN4\",\"4023\":\"BI4 MI4\",\"4024\":\"MAO4\",\"4025\":\"SHUO4\",\"4026\":\"GU3\",\"4027\":\"HONG3\",\"4028\":\"HUAN4\",\"4029\":\"LUO4\",\"4030\":\"GU3 YING2\",\"4032\":\"MU4\",\"4033\":\"AI4 LA4 LAI4\",\"4034\":\"YING3\",\"4035\":\"SHUN4\",\"4036\":\"LANG3 LIANG4\",\"4037\":\"JIE2\",\"4038\":\"DI4 ZHI4\",\"4039\":\"JIA2 SHE4\",\"4041\":\"LANG3 LIANG4\",\"4042\":\"XIAN4\",\"4044\":\"XING4\",\"4045\":\"BEI4 BI4 MENG3 MENG4\",\"4046\":\"AN3 YI4\",\"4047\":\"MI4\",\"4048\":\"QI4\",\"4049\":\"QI4\",\"4050\":\"YING4\",\"4051\":\"YANG2\",\"4052\":\"JI2\",\"4053\":\"JIE4 ZONG3\",\"4054\":\"HAN4 HUAN3\",\"4055\":\"MIN2\",\"4056\":\"LOU1\",\"4057\":\"KAI3\",\"4058\":\"YAO3\",\"4059\":\"YAN3 YAN4\",\"4060\":\"LIAN2\",\"4062\":\"XUAN2\",\"4063\":\"CHUAN2\",\"4064\":\"CHE4 CHENG4\",\"4065\":\"NI4\",\"4066\":\"QU4\",\"4067\":\"MIAO2\",\"4068\":\"HUO4\",\"4069\":\"YU2\",\"4070\":\"JIANG3\",\"4071\":\"AO4\",\"4072\":\"MAI2\",\"4073\":\"MANG3\",\"4074\":\"ZHAN3\",\"4075\":\"BIAN3\",\"4076\":\"JIAO3\",\"4077\":\"JUE2 WO4\",\"4078\":\"NONG2\",\"4079\":\"BI4\",\"4080\":\"XI1\",\"4081\":\"CHAN2\",\"4082\":\"QU2\",\"4083\":\"JIAO4 JIE2\",\"4084\":\"HUO4 KUANG4\",\"4086\":\"XU4\",\"4087\":\"NANG2 NIU3 NONG3 PANG2\",\"4088\":\"TONG2\",\"4089\":\"HOU2\",\"4090\":\"CHUO4\",\"4092\":\"JIE2 QIA4 YA4\",\"4094\":\"XING4\",\"4095\":\"HUI4\",\"4096\":\"SHI2 SI4\",\"4100\":\"HUO4\",\"4101\":\"YI4\",\"4102\":\"LIU4\",\"4105\":\"JUAN4\",\"4106\":\"HUO2 KUO4\",\"4107\":\"CHENG2\",\"4108\":\"DOU4\",\"4109\":\"E2\",\"4110\":\"QUAN4\",\"4111\":\"HUO2 KUO4\",\"4112\":\"NIE4 REN3\",\"4113\":\"HENG2 HUANG2\",\"4114\":\"JU3\",\"4115\":\"SHE4 SHEN4 TIAN3\",\"4118\":\"PENG2\",\"4119\":\"MING2\",\"4120\":\"SHAN4\",\"4122\":\"QI2\",\"4124\":\"LAI4\",\"4125\":\"LING2\",\"4126\":\"LIAO3\",\"4127\":\"RENG2 RONG3\",\"4128\":\"YU2 YU3\",\"4129\":\"NAO2 YI4\",\"4130\":\"YA2 ZHA2\",\"4132\":\"CHUI2\",\"4136\":\"BI4\",\"4137\":\"DAN4 DIAO3 SHI2\",\"4138\":\"PO4\",\"4139\":\"NIAN2 TIAN3\",\"4140\":\"LIE4\",\"4141\":\"AN4\",\"4142\":\"HE2\",\"4143\":\"QIONG2\",\"4144\":\"LI4\",\"4146\":\"ZI4\",\"4147\":\"SU4\",\"4148\":\"YUAN4\",\"4149\":\"YA4\",\"4150\":\"JIAN3 QIAN2\",\"4151\":\"RUI2 SUI2\",\"4152\":\"MANG2\",\"4153\":\"JU3 QU4\",\"4156\":\"AN3\",\"4157\":\"SUI4\",\"4158\":\"LAI2\",\"4159\":\"HUN4\",\"4160\":\"TI2\",\"4161\":\"XU3\",\"4162\":\"JIU4\",\"4163\":\"HUANG2\",\"4164\":\"QI4\",\"4165\":\"JIE2\",\"4166\":\"MAO2\",\"4167\":\"YAN4\",\"4169\":\"ZHI3\",\"4170\":\"EN3\",\"4171\":\"HUN4\",\"4172\":\"QI2\",\"4173\":\"CHU2\",\"4174\":\"SUO3\",\"4175\":\"ZHUO2\",\"4176\":\"NOU4 WU3\",\"4177\":\"TU2\",\"4178\":\"ZU2\",\"4179\":\"LOU2 LOU3\",\"4180\":\"MEI3\",\"4182\":\"LIAN2 QIAN4\",\"4183\":\"DAO3 DAO4\",\"4184\":\"SHAN4\",\"4185\":\"CI2 JI3\",\"4188\":\"ZHI4\",\"4189\":\"BA4\",\"4190\":\"GUO2\",\"4191\":\"CHENG2\",\"4192\":\"JIU4\",\"4193\":\"E4 RUAN3\",\"4195\":\"JUE2\",\"4196\":\"HONG2\",\"4197\":\"JIAO4\",\"4198\":\"CUAN2\",\"4199\":\"YAO2\",\"4201\":\"LUN2 LUO4\",\"4202\":\"BING4 PING2\",\"4203\":\"ZHAO3\",\"4204\":\"HAN2\",\"4205\":\"YU4\",\"4206\":\"DAI4\",\"4207\":\"ZHAO4\",\"4208\":\"FEI2\",\"4209\":\"SHA4\",\"4210\":\"KUI4\",\"4211\":\"GUA3 JUE2\",\"4212\":\"NAN3\",\"4213\":\"GE2\",\"4215\":\"CHI2 SHI5 TI2\",\"4217\":\"SUO3\",\"4218\":\"CI2\",\"4219\":\"ZHOU4\",\"4220\":\"HUAN3\",\"4222\":\"SAI3\",\"4223\":\"ZHENG4\",\"4224\":\"QIAN2\",\"4227\":\"WEI3\",\"4232\":\"PAN2\",\"4233\":\"TA4\",\"4234\":\"QIAN4 ZHAN3\",\"4236\":\"RONG2\",\"4237\":\"LUO4\",\"4238\":\"HU2\",\"4239\":\"SOU3\",\"4240\":\"SHU4\",\"4241\":\"LING2\",\"4242\":\"LEI3\",\"4243\":\"JIANG3\",\"4244\":\"LENG2\",\"4245\":\"ZHI4\",\"4246\":\"DIAO3\",\"4248\":\"SAN3\",\"4249\":\"HU2\",\"4251\":\"MO2 WU2\",\"4252\":\"FAN2\",\"4253\":\"LEI2 LUO4\",\"4255\":\"CENG2\",\"4256\":\"LING2\",\"4258\":\"CONG2\",\"4259\":\"YUN2\",\"4260\":\"WEI2\",\"4261\":\"TAN2\",\"4262\":\"SE4\",\"4263\":\"XIE4\",\"4264\":\"SOU3\",\"4265\":\"SONG3\",\"4267\":\"LIU2 LIU3\",\"4268\":\"YI4\",\"4270\":\"YAO2\",\"4272\":\"BIE4 MI2\",\"4273\":\"XIAN3\",\"4274\":\"RANG2 RANG3\",\"4275\":\"ZHUAN4\",\"4277\":\"DAN4 JIN4 YAN2\",\"4278\":\"BIAN4\",\"4279\":\"LING2 LIU3\",\"4280\":\"HU2\",\"4282\":\"CE4 SE4\",\"4283\":\"PEI4\",\"4284\":\"QIONG2\",\"4285\":\"MING2\",\"4286\":\"JIU4 QIU3\",\"4287\":\"BU4\",\"4288\":\"MEI2\",\"4289\":\"SAN3\",\"4290\":\"EN4 HUA2 HUAN4 HUN2\",\"4291\":\"XIANG3\",\"4293\":\"SHI4\",\"4296\":\"LAN3 NAN3\",\"4297\":\"HUANG2 HUANG3\",\"4298\":\"JIU4\",\"4299\":\"YAN2\",\"4302\":\"OU4\",\"4303\":\"SHUO4\",\"4304\":\"GENG3\",\"4305\":\"TANG2\",\"4306\":\"GUI4\",\"4307\":\"HUI4 SUO3\",\"4308\":\"TA4\",\"4310\":\"MI4\",\"4312\":\"LU4\",\"4313\":\"FAN2\",\"4314\":\"OU4\",\"4315\":\"MI2 MO2\",\"4316\":\"JIE2\",\"4317\":\"FU3\",\"4318\":\"MI2\",\"4319\":\"HUANG3\",\"4320\":\"QING4 YAN3 YIN4\",\"4321\":\"TI3\",\"4322\":\"LING2\",\"4323\":\"ZUAN3\",\"4324\":\"ZHI3\",\"4325\":\"YIN3\",\"4326\":\"DAO3\",\"4327\":\"CHOU2\",\"4328\":\"CAI4\",\"4329\":\"MI4 MIE4\",\"4330\":\"SHE4\",\"4331\":\"LUO4\",\"4334\":\"LUO4\",\"4335\":\"ZHU2 ZHU3\",\"4337\":\"CHOU2 CHOU1\",\"4338\":\"JUAN4\",\"4339\":\"JIONG3\",\"4340\":\"LAN2\",\"4341\":\"SUI4\",\"4342\":\"YU2\",\"4343\":\"YAO2 YOU2\",\"4344\":\"DIAN3\",\"4345\":\"LING2\",\"4346\":\"ZHU4\",\"4347\":\"TA4\",\"4348\":\"PING2\",\"4349\":\"QIAN2 ZHAI3\",\"4350\":\"HAN3 HAN4\",\"4351\":\"HAN3\",\"4352\":\"MOU3\",\"4353\":\"HU4 YA2\",\"4354\":\"HONG2\",\"4355\":\"DI3\",\"4356\":\"FU2 FU4 HAI4 XIE4\",\"4357\":\"XUAN4\",\"4358\":\"MI2\",\"4359\":\"MEI2\",\"4360\":\"LI2\",\"4361\":\"LIAO4 LU4\",\"4362\":\"WU2 WU3\",\"4363\":\"LEI2\",\"4364\":\"JI3\",\"4365\":\"LEI4 LI4\",\"4366\":\"LI2\",\"4368\":\"BO2 FEI4\",\"4369\":\"ANG3 YANG3\",\"4371\":\"XU2\",\"4372\":\"NAI2 NI2 NI4\",\"4373\":\"CHUO4 JUE2 QUE4\",\"4374\":\"DUO4 RUI2 WEI3\",\"4376\":\"DONG4\",\"4377\":\"GUI4 HUI4 WEI3\",\"4378\":\"BO2\",\"4380\":\"XUE4 YUE4\",\"4381\":\"HU2\",\"4382\":\"BAO3\",\"4383\":\"RAN3\",\"4384\":\"TIAO2\",\"4385\":\"FU4 LUO4 PO4\",\"4386\":\"LIAO4\",\"4388\":\"YI4\",\"4389\":\"SHU4 YU4\",\"4390\":\"CHAO3\",\"4391\":\"LU4\",\"4392\":\"ZHAN3\",\"4393\":\"TA4\",\"4397\":\"QIAO2\",\"4398\":\"SU4\",\"4400\":\"JI4\",\"4401\":\"NIAO3 ZHUO2\",\"4402\":\"LU4\",\"4403\":\"JIONG3\",\"4404\":\"HAN4 LIAN3 XIAN4\",\"4405\":\"YI2\",\"4406\":\"CAI3 CAI4\",\"4407\":\"CHUN2\",\"4408\":\"ZHI2\",\"4409\":\"ZI4\",\"4411\":\"ZHE2\",\"4413\":\"ROU2 RU4\",\"4414\":\"BIN4\",\"4415\":\"JI2\",\"4416\":\"YI2\",\"4417\":\"DU3\",\"4418\":\"JUE2\",\"4419\":\"GE2 YI4\",\"4420\":\"HUANG3\",\"4421\":\"QI2\",\"4422\":\"ZHU4\",\"4423\":\"CUO4 SUN3\",\"4424\":\"CHI2 CUO2 QI4 ZHAN4\",\"4425\":\"WENG3\",\"4427\":\"KAO4\",\"4428\":\"GU3\",\"4429\":\"KAI3\",\"4432\":\"ZHE2\",\"4433\":\"YU2\",\"4434\":\"GUI4\",\"4435\":\"HUANG2\",\"4436\":\"JIN3\",\"4438\":\"GUO2 HUO4\",\"4439\":\"SAO4\",\"4440\":\"PI4\",\"4441\":\"WU4\",\"4442\":\"AI3 XI4\",\"4443\":\"MENG2\",\"4444\":\"PI4 YI4\",\"4445\":\"MENG2\",\"4446\":\"YANG3\",\"4447\":\"ZHI4\",\"4448\":\"BO2\",\"4449\":\"YING2\",\"4450\":\"ZHEN3\",\"4451\":\"PU2\",\"4453\":\"TAI2 TAI3\",\"4454\":\"FEI4\",\"4455\":\"SHU3\",\"4457\":\"DANG4\",\"4458\":\"CHA2 CUO2\",\"4459\":\"RAN2\",\"4460\":\"LIAO3\",\"4464\":\"JIN4 JING4\",\"4465\":\"E4 SA4\",\"4467\":\"FU2\",\"4468\":\"DUO4\",\"4470\":\"BU4\",\"4471\":\"MAN2 WAN3\",\"4472\":\"CHE4 ZHAI2 ZHAO4\",\"4473\":\"LUN2\",\"4474\":\"QI2\",\"4475\":\"MU4\",\"4476\":\"CAN2 QIAN4\",\"4480\":\"FU2\",\"4481\":\"JI4 XI2 XIAO4 YA4\",\"4482\":\"JIANG3 XIANG3\",\"4483\":\"CAO4 ZAO4\",\"4484\":\"BO2 FU4\",\"4485\":\"TENG2\",\"4486\":\"CHE4\",\"4487\":\"FU4\",\"4488\":\"BU3 FE4 FEI4\",\"4489\":\"WU3\",\"4490\":\"MENG2\",\"4491\":\"CAO3\",\"4492\":\"TIAO2 YAO3 YOU2\",\"4493\":\"KAI3\",\"4494\":\"BAI4\",\"4495\":\"XIAO3\",\"4496\":\"XIN4\",\"4497\":\"QI4\",\"4501\":\"LI4\",\"4502\":\"ZI3\",\"4503\":\"ZU3\",\"4504\":\"YAO2\",\"4506\":\"LI2\",\"4507\":\"QI3 YI3\",\"4508\":\"GAN3 GONG4 NOU3\",\"4509\":\"LI4\",\"4511\":\"XIE2 YE2\",\"4512\":\"BEI4\",\"4513\":\"XU3\",\"4514\":\"JING4 QIAN3 QIU2 YING3\",\"4515\":\"PU2\",\"4516\":\"LING2\",\"4517\":\"XIANG2\",\"4518\":\"ZUO4\",\"4519\":\"DIAO4\",\"4520\":\"SHAO3\",\"4521\":\"YU2\",\"4522\":\"HUA2 HUA4\",\"4523\":\"LI2\",\"4527\":\"LI2 LI4\",\"4530\":\"FU2 FU4\",\"4532\":\"CHENG2 ZHUO2\",\"4533\":\"NAN3 RAN2\",\"4534\":\"CE4 CUI4\",\"4536\":\"TI2\",\"4537\":\"QIN2\",\"4538\":\"BIAO3\",\"4539\":\"SUI4\",\"4540\":\"KUAN3\",\"4541\":\"FEI3\",\"4543\":\"YIN4\",\"4545\":\"SAO3\",\"4546\":\"DOU4\",\"4547\":\"HUI4\",\"4548\":\"XIE4\",\"4549\":\"ZE2\",\"4551\":\"JUN4\",\"4553\":\"CHA2 CHUI4\",\"4554\":\"XIAN2\",\"4555\":\"MAN4\",\"4557\":\"BI4 PEI4\",\"4558\":\"LING2\",\"4559\":\"JIE2\",\"4560\":\"FEI4\",\"4561\":\"LU3 LV2\",\"4562\":\"ZHA3\",\"4563\":\"HE2 KE3 SHE2\",\"4565\":\"NI3 YI2\",\"4566\":\"YING2\",\"4567\":\"XIAO4\",\"4568\":\"TENG2\",\"4569\":\"LAO3 LAO4\",\"4570\":\"BAN4 FAN2 FAN4\",\"4571\":\"DOU3 DOU4 TOU2\",\"4572\":\"LIN3\",\"4573\":\"MI2\",\"4574\":\"ZHUO2\",\"4575\":\"XIE2 XIE4\",\"4576\":\"HU4\",\"4577\":\"MI2\",\"4579\":\"ZA2\",\"4581\":\"YI4\",\"4582\":\"LUAN2\",\"4583\":\"YUE4\",\"4584\":\"RAN2\",\"4585\":\"LING2\",\"4586\":\"NIANG4\",\"4587\":\"YU4\",\"4588\":\"NVE4\",\"4590\":\"JIN4 YIN2\",\"4591\":\"MI4\",\"4593\":\"NA4\",\"4594\":\"HAN4 KAN3\",\"4595\":\"ZU3\",\"4596\":\"XIA2\",\"4597\":\"YAN2 YAN4\",\"4598\":\"TU2\",\"4600\":\"FU4\",\"4601\":\"GE2 JIE2 KE3\",\"4603\":\"MO4\",\"4604\":\"FU4 ZHU4\",\"4605\":\"NAI2 NAI4 NENG3\",\"4606\":\"XIAN3\",\"4607\":\"WEN2 WEN4\",\"4608\":\"LI4\",\"4609\":\"CAN2\",\"4610\":\"NV4\",\"4611\":\"MAI4 MO4\",\"4613\":\"KAN4 KAO4\",\"4615\":\"HANG2\",\"4618\":\"YU4\",\"4619\":\"WEI4\",\"4620\":\"FU2 PO4\",\"4621\":\"BI3\",\"4622\":\"ZHU3\",\"4623\":\"ZI3\",\"4624\":\"SHU4\",\"4625\":\"XIA2\",\"4626\":\"NI2 NI3\",\"4628\":\"JIAO3\",\"4629\":\"XUAN4 XUN2\",\"4631\":\"YU4\",\"4635\":\"LU4\",\"4636\":\"HAN4 YAN3\",\"4638\":\"YI4\",\"4639\":\"ZUI4\",\"4640\":\"BENG3\",\"4641\":\"CAN2\",\"4643\":\"DUO4 KUO4 PAN2 RUAN2\",\"4644\":\"QI4 ZHA3\",\"4645\":\"YAO4\",\"4646\":\"GUI4 KUI4\",\"4647\":\"NUAN3 RUAN2\",\"4648\":\"HOU2\",\"4649\":\"XUN2 ZAN3\",\"4650\":\"KE4\",\"4652\":\"XU4\",\"4653\":\"BAI3 HE4\",\"4655\":\"CHU4 ZONG3\",\"4657\":\"TI4\",\"4658\":\"CHU3 ZU2\",\"4659\":\"CHI2\",\"4660\":\"JUE2 WO4\",\"4661\":\"HUI4 KUI4\",\"4662\":\"ZENG4\",\"4663\":\"SA4\",\"4664\":\"DUO3 DUO4\",\"4665\":\"LING2\",\"4666\":\"MENG2\",\"4668\":\"GUO3 LUO3\",\"4669\":\"MENG2\",\"4670\":\"LI2\",\"4671\":\"DU2 SHU3\",\"4673\":\"E4\",\"4677\":\"DE2 ZHE2\",\"4678\":\"DE2 DE5\",\"4679\":\"JIANG3 NAO3 XIAN4 XIANG3\",\"4682\":\"HE4 XI4\",\"4683\":\"YOU2\",\"4684\":\"LU4\",\"4685\":\"LAI2 LAI4\",\"4686\":\"OU3 YAO3 YING3\",\"4687\":\"SHENG3 ZHI4\",\"4688\":\"JUAN4 WU4 ZHUAN4\",\"4689\":\"QI4 XI4\",\"4690\":\"JI2\",\"4691\":\"MAI2\",\"4692\":\"CHUANG2 ZHUANG4\",\"4693\":\"NIAN3 SHEN3\",\"4695\":\"LI4 LUAN2\",\"4696\":\"LING2\",\"4698\":\"CHEN2 CHENG2\",\"4700\":\"NAO3\",\"4701\":\"XI4\",\"4704\":\"CHI2\",\"4705\":\"WEI2\",\"4706\":\"MO4 NEI4 SHE2 SUI4 ZHE2\",\"4707\":\"GUN3 GUN4\",\"4711\":\"QIA4 WU4\",\"4712\":\"AO4\",\"4713\":\"NIE4 SHE4\",\"4714\":\"SUI2\",\"4715\":\"MAI4\",\"4716\":\"TAN4\",\"4717\":\"XIN4\",\"4718\":\"JING3\",\"4719\":\"AN2\",\"4720\":\"CHE4 ZHI4\",\"4721\":\"XU4 XUE4 YU4\",\"4722\":\"XIAN3\",\"4723\":\"XIN1 XI1 YIN2\",\"4727\":\"NAO3\",\"4729\":\"YAN4\",\"4731\":\"MAN3\",\"4732\":\"LIE4\",\"4734\":\"CHU4 SHI4\",\"4735\":\"CHI3 SHI4\",\"4736\":\"XIANG2\",\"4738\":\"MEI3\",\"4739\":\"SHU4\",\"4740\":\"LIAO2 LIU2\",\"4741\":\"LAO2\",\"4742\":\"SHU4\",\"4743\":\"ZHE2\",\"4748\":\"E4\",\"4750\":\"WEI2\",\"4752\":\"ZHU4\",\"4753\":\"LA4 LIE4\",\"4755\":\"ZHE2\",\"4756\":\"ZHAO3\",\"4758\":\"YI4\",\"4760\":\"HUAN2 YUAN2\",\"4761\":\"MAN4\",\"4762\":\"MAN4 MENG2\",\"4763\":\"QU2\",\"4764\":\"LAO3\",\"4765\":\"HAO2\",\"4767\":\"MEN2 MIN2\",\"4768\":\"XIAN2\",\"4769\":\"ZHEN4\",\"4770\":\"TI2 ZHI4\",\"4772\":\"JIN4\",\"4773\":\"CAN2\",\"4775\":\"BU4\",\"4776\":\"LIANG2\",\"4777\":\"ZHI4\",\"4778\":\"JI4\",\"4779\":\"WAN3 YUAN4\",\"4780\":\"GOU4 HOU4 MIN3\",\"4781\":\"XIAN4 YAN4 YANG3 YANG4\",\"4782\":\"RUAN3\",\"4783\":\"ZHI4\",\"4784\":\"BIAO4\",\"4785\":\"YI2\",\"4786\":\"SUO3\",\"4787\":\"DIE2 ZHI4\",\"4788\":\"GUI3 GUI4\",\"4789\":\"SHENG4\",\"4790\":\"CHUN3 SHUN3\",\"4791\":\"HONG2\",\"4792\":\"DONG4\",\"4793\":\"CHENG1\",\"4794\":\"WEI3\",\"4795\":\"DIE2 NA3 NIE4 RU2 XIE4 YU2\",\"4796\":\"SHU3\",\"4798\":\"JI2\",\"4799\":\"ZA2\",\"4800\":\"CHANG3\",\"4802\":\"CHU2 CHU3\",\"4803\":\"LIANG3\",\"4804\":\"TIAN3\",\"4805\":\"KUN3 TA4\",\"4806\":\"CHANG2\",\"4807\":\"JUE2\",\"4808\":\"TU2\",\"4809\":\"HUA4 HUAN4 HUI3\",\"4810\":\"QU4\",\"4811\":\"KUI3\",\"4812\":\"HU2\",\"4813\":\"CU4 JIU4 QU4\",\"4814\":\"SUI4\",\"4817\":\"QIU4\",\"4818\":\"PI4\",\"4819\":\"BEI4 PANG2 PAO2\",\"4820\":\"CHI4\",\"4821\":\"CUO2\",\"4822\":\"MENG4\",\"4823\":\"XUAN3 XUAN4\",\"4824\":\"DUO3 DUO4\",\"4825\":\"BIE2\",\"4826\":\"ZHE4 ZHI4\",\"4827\":\"CHU2\",\"4828\":\"CHAN4 MA4\",\"4829\":\"GUI4\",\"4830\":\"QUAN2\",\"4831\":\"SHU3 ZHU2\",\"4832\":\"LING2\",\"4834\":\"QIN3 YIN3 ZHEN3\",\"4835\":\"FU4\",\"4836\":\"SHE4\",\"4837\":\"TIAO3\",\"4839\":\"AI2 HAI2\",\"4840\":\"ZHAN3\",\"4841\":\"LONG3\",\"4842\":\"JIU4\",\"4843\":\"LI4\",\"4845\":\"MIN3 XIAN3 XUN2 ZHEN4 ZUAN3\",\"4846\":\"RONG2 RONG3\",\"4847\":\"YUE4\",\"4848\":\"JUE2\",\"4849\":\"KANG3\",\"4850\":\"TUO2\",\"4851\":\"MIN2\",\"4852\":\"TIAN2\",\"4853\":\"JUAN4\",\"4854\":\"QI3\",\"4855\":\"ZHENG3\",\"4856\":\"JING4\",\"4857\":\"GONG3\",\"4858\":\"TIAN2\",\"4859\":\"LANG2\",\"4861\":\"XIE2\",\"4862\":\"BIAN4\",\"4865\":\"RONG2\",\"4866\":\"SANG3\",\"4867\":\"WU3\",\"4868\":\"CHA4 CHAI2 YIN2\",\"4869\":\"GU3 HOU4 TOU3 ZHEN3\",\"4870\":\"KENG3\",\"4871\":\"ZHUAN3\",\"4872\":\"CHAN2\",\"4874\":\"CHUANG2\",\"4875\":\"SUI4\",\"4876\":\"BEI4 PI4\",\"4877\":\"KAI4\",\"4879\":\"ZHI4\",\"4880\":\"QI4\",\"4881\":\"YUE4\",\"4883\":\"YI4\",\"4884\":\"XI3\",\"4885\":\"CHEN2\",\"4887\":\"RONG3 ROU3\",\"4888\":\"CHEN2 QIN2\",\"4889\":\"NONG2\",\"4890\":\"CU2\",\"4891\":\"DI3\",\"4893\":\"YU2\",\"4894\":\"GE2 HE2 JIA2\",\"4895\":\"XU4\",\"4896\":\"LV4 YU4\",\"4897\":\"HE2 QU3\",\"4899\":\"BAI4\",\"4901\":\"CEN2 CHE4 SHE4\",\"4902\":\"MEI2\",\"4903\":\"YIN4\",\"4904\":\"MIAN3 ZHUAN4\",\"4905\":\"TU2\",\"4906\":\"KUI2\",\"4909\":\"MI4 MING2 MO4 RU2\",\"4910\":\"JIN3\",\"4911\":\"WANG4\",\"4912\":\"JI3 JI4\",\"4913\":\"MENG2\",\"4914\":\"JIAN4 NIU2 XIANG4\",\"4915\":\"XUE4\",\"4916\":\"BAO4\",\"4917\":\"GAN3\",\"4918\":\"CHAN3 QIAN3\",\"4919\":\"LI4\",\"4920\":\"JI1 ZHI3\",\"4921\":\"RAN3\",\"4923\":\"LVE4\",\"4925\":\"GUI3\",\"4926\":\"YUE4\",\"4927\":\"HUI4\",\"4928\":\"PI4\",\"4929\":\"CHA2\",\"4930\":\"WENG3 YING2\",\"4931\":\"SHI4\",\"4932\":\"CHI4\",\"4933\":\"YE4\",\"4934\":\"HAN2\",\"4935\":\"FEI4\",\"4936\":\"YE4\",\"4937\":\"YAN2 YAN3\",\"4938\":\"ZUAN4\",\"4940\":\"CHAN3\",\"4941\":\"HAN2\",\"4942\":\"MENG4\",\"4943\":\"YUE4\",\"4944\":\"CU4 ZAN3 ZAN4\",\"4945\":\"QIAN4 QIN2\",\"4946\":\"JIN3 QIN2 ROU4 WEI4\",\"4947\":\"SHAN4\",\"4948\":\"MU3\",\"4950\":\"MOU2\",\"4951\":\"WAN4\",\"4952\":\"CHOU2 JIANG4\",\"4954\":\"SU4\",\"4955\":\"PIE3\",\"4956\":\"TIAN2\",\"4957\":\"KUAN3\",\"4958\":\"CU4 CUO4\",\"4959\":\"SUI4\",\"4961\":\"YE4\",\"4962\":\"LONG2\",\"4963\":\"ZAO2\",\"4964\":\"BAO2 FU2\",\"4965\":\"LIAN2\",\"4967\":\"HUAN2 XUAN2\",\"4968\":\"LV4\",\"4969\":\"WEI2\",\"4970\":\"MENG4\",\"4971\":\"XIE3\",\"4975\":\"XIAO3\",\"4976\":\"LI4\",\"4977\":\"ZHA2\",\"4978\":\"MI2\",\"4982\":\"SHAN4\",\"4985\":\"SHAN4 ZHAN3\",\"4986\":\"JUE2\",\"4987\":\"JI4\",\"4988\":\"FANG3 HAN3 JI2 MOU3 ZA2 ZUO3\",\"4990\":\"TING3\",\"4991\":\"XIE4\",\"4992\":\"DANG4\",\"4994\":\"TAN3\",\"4996\":\"XIA2 XIE2\",\"4997\":\"XU4\",\"4998\":\"BI4 XIAN3 XIAN4\",\"4999\":\"SI4\",\"5000\":\"CHANG1\",\"5001\":\"CHI2\",\"5002\":\"BING4\",\"5003\":\"ZAN2 ZA2\",\"5004\":\"YAO2\",\"5005\":\"CUI4\",\"5006\":\"LIA3 LIANG3\",\"5007\":\"WAN3\",\"5008\":\"LAI2 LAI4\",\"5009\":\"CANG1\",\"5010\":\"SHU1\",\"5011\":\"MEN5\",\"5012\":\"DAO3 DAO4\",\"5013\":\"TAN2\",\"5014\":\"JUE2 JUE4\",\"5015\":\"CHUI2\",\"5016\":\"XING4\",\"5017\":\"PENG2\",\"5018\":\"TANG3 CHANG2\",\"5019\":\"HOU4\",\"5020\":\"SUI1\",\"5021\":\"CHANG4 CHANG1\",\"5022\":\"JIE2\",\"5023\":\"FANG3 PANG2\",\"5024\":\"ZHI2\",\"5025\":\"KONG1 KONG3\",\"5026\":\"JUAN4\",\"5027\":\"ZONG1\",\"5028\":\"JU4\",\"5029\":\"QIAN4 QING4\",\"5030\":\"LENG2 LENG4 LING2\",\"5031\":\"HUN4\",\"5032\":\"DONG1\",\"5033\":\"ZI4\",\"5034\":\"BEN4\",\"5035\":\"WU3\",\"5036\":\"JU4 JU1\",\"5037\":\"NAI4\",\"5038\":\"CAI3\",\"5039\":\"JIAN3\",\"5040\":\"YING1\",\"5041\":\"CHENG1\",\"5042\":\"JIAN1\",\"5043\":\"YAN3\",\"5044\":\"NUAN4\",\"5045\":\"ZHONG4\",\"5046\":\"CHUN3\",\"5047\":\"JIA3 JIA4 XIA2\",\"5048\":\"JIE2 QI4 JI4\",\"5049\":\"WEI3\",\"5050\":\"YAN4\",\"5051\":\"FENG1\",\"5052\":\"TANG3 DANG4\",\"5053\":\"WO4\",\"5054\":\"E4\",\"5055\":\"XIE2 JIE1\",\"5056\":\"CHE3\",\"5057\":\"SHENG3\",\"5058\":\"KAN3\",\"5059\":\"DI4\",\"5060\":\"YAO3\",\"5061\":\"ZHAN4\",\"5062\":\"CHOU3\",\"5063\":\"YAN1\",\"5064\":\"YOU3\",\"5065\":\"JIAN4\",\"5066\":\"XU1\",\"5067\":\"ZHA1\",\"5068\":\"CI1\",\"5069\":\"FU4\",\"5070\":\"XIE4\",\"5071\":\"XUN2\",\"5072\":\"SI1\",\"5073\":\"DUAN1\",\"5074\":\"CE4 ZE4\",\"5075\":\"ZHEN1 ZHENG1\",\"5076\":\"OU3\",\"5077\":\"TOU1\",\"5078\":\"TOU1\",\"5079\":\"BEI4\",\"5080\":\"GUI1 KUI3\",\"5081\":\"SOU3\",\"5082\":\"ZHI4\",\"5083\":\"SU4\",\"5084\":\"XIA1\",\"5085\":\"FU4 FU1\",\"5086\":\"YUAN4\",\"5087\":\"RONG3\",\"5088\":\"LI4\",\"5089\":\"RU4\",\"5090\":\"HAO4\",\"5091\":\"JIE2\",\"5092\":\"XI1 XI2 XI4\",\"5093\":\"SHAN4\",\"5094\":\"QIAN4\",\"5095\":\"JUE2\",\"5096\":\"CANG1 CHENG2\",\"5097\":\"CHU4\",\"5098\":\"SAN3\",\"5099\":\"BEI4\",\"5100\":\"YI2\",\"5101\":\"JUN4\",\"5102\":\"NONG2\",\"5103\":\"CHAN2 TAN3\",\"5104\":\"YI4\",\"5105\":\"DANG1 DANG4\",\"5106\":\"JING3\",\"5107\":\"XUAN1\",\"5108\":\"KUAI4\",\"5109\":\"JIAN3\",\"5110\":\"BIN4 BIN1\",\"5111\":\"AN4 E4\",\"5112\":\"RU2\",\"5113\":\"TAI2\",\"5114\":\"CHOU2\",\"5115\":\"CHAI2\",\"5116\":\"LAN2\",\"5117\":\"NI3\",\"5118\":\"JIN3\",\"5119\":\"QIAN4\",\"5120\":\"LIE4\",\"5121\":\"LEI3\",\"5122\":\"LV3\",\"5123\":\"KUANG4\",\"5124\":\"BAO4\",\"5125\":\"DU2\",\"5126\":\"BIAO1\",\"5127\":\"ZAN3\",\"5128\":\"ZHI2\",\"5129\":\"SI4\",\"5130\":\"WEI3\",\"5131\":\"LONG3\",\"5132\":\"CHU3 CHU2\",\"5133\":\"CHAN4\",\"5134\":\"RANG2\",\"5135\":\"SHU1\",\"5136\":\"HUI4\",\"5137\":\"LI4\",\"5138\":\"LUO2\",\"5139\":\"ZAN3\",\"5140\":\"WU4\",\"5141\":\"YUN3\",\"5142\":\"ZAN1 ZAN3\",\"5143\":\"YUAN2\",\"5144\":\"XIONG1\",\"5145\":\"CHONG1\",\"5146\":\"ZHAO4\",\"5147\":\"XIONG1\",\"5148\":\"XIAN1\",\"5149\":\"GUANG1\",\"5150\":\"ER2\",\"5151\":\"DUI4 YUE4 RUI4\",\"5152\":\"ER2 ER5\",\"5153\":\"XIN1\",\"5154\":\"TU4\",\"5155\":\"SI4\",\"5156\":\"YAN3\",\"5157\":\"YAN3\",\"5158\":\"SHI3\",\"5160\":\"DOU1\",\"5162\":\"JING1\",\"5163\":\"LI3 KE4\",\"5164\":\"HUANG2\",\"5165\":\"RU4\",\"5166\":\"WANG2\",\"5167\":\"NEI4 NA4\",\"5168\":\"QUAN2\",\"5169\":\"LIANG3 LIANG4\",\"5170\":\"LAN2\",\"5171\":\"GONG4 GONG1\",\"5172\":\"TIAN1\",\"5173\":\"GUAN1 WAN1\",\"5174\":\"XING1 XING4\",\"5175\":\"BING1\",\"5176\":\"QI2 JI1\",\"5177\":\"JU4\",\"5178\":\"DIAN3\",\"5179\":\"ZI1 CI2\",\"5180\":\"JI4\",\"5181\":\"CHAN3\",\"5182\":\"JIONG1\",\"5184\":\"RAN3\",\"5185\":\"NEI4\",\"5187\":\"MAO3\",\"5188\":\"GANG1\",\"5189\":\"RAN3\",\"5190\":\"MAO4 MO4\",\"5191\":\"ZHOU4\",\"5192\":\"MAO4 MOU4 MO4\",\"5193\":\"GOU4 GOU1\",\"5194\":\"XU3\",\"5195\":\"MIAN3\",\"5196\":\"MI4\",\"5197\":\"RONG3\",\"5198\":\"YIN2 YOU2\",\"5199\":\"XIE3\",\"5200\":\"DAO1\",\"5201\":\"DIAO1\",\"5202\":\"DAO1\",\"5203\":\"REN4\",\"5204\":\"REN4\",\"5205\":\"CHUANG1\",\"5206\":\"FEN1 FEN4\",\"5207\":\"QIE1 QIE4 QI4\",\"5208\":\"YI4\",\"5209\":\"JI1\",\"5210\":\"DAN3\",\"5211\":\"XING2\",\"5212\":\"HUA2 HUA4\",\"5213\":\"WAN2\",\"5214\":\"JUE2\",\"5215\":\"LI2\",\"5216\":\"YUE4\",\"5217\":\"LIE4\",\"5218\":\"LIU2\",\"5219\":\"ZE2\",\"5220\":\"SHAN1\",\"5221\":\"MIN3\",\"5222\":\"LING2\",\"5223\":\"ZHONG1\",\"5224\":\"PAN4\",\"5225\":\"BIE2\",\"5226\":\"JIE2\",\"5227\":\"JIE2\",\"5228\":\"BAO4 PAO2\",\"5229\":\"LI4\",\"5230\":\"DAO4\",\"5231\":\"CHUANG4 CHUANG1\",\"5232\":\"KUI1\",\"5233\":\"KU1\",\"5234\":\"DUO4\",\"5235\":\"ER4\",\"5236\":\"ZHI4\",\"5237\":\"SHUA1 SHUA4\",\"5238\":\"QUAN4\",\"5239\":\"CHA4 SHA1\",\"5240\":\"KAI3\",\"5241\":\"DUO4\",\"5242\":\"JI4\",\"5243\":\"TI4\",\"5244\":\"JING3\",\"5245\":\"LOU2\",\"5246\":\"GEN1\",\"5247\":\"ZE2\",\"5248\":\"YUAN1\",\"5249\":\"CUO4\",\"5250\":\"GUA3\",\"5251\":\"JIAN4\",\"5252\":\"CUO4\",\"5253\":\"LI2\",\"5254\":\"TI1\",\"5255\":\"FEI4\",\"5256\":\"POU1\",\"5257\":\"CHAN3\",\"5258\":\"QI2\",\"5259\":\"CHUANG4 CHUANG1\",\"5260\":\"QING2 LVE4\",\"5261\":\"YAN3 SHAN4\",\"5262\":\"ZHUO2\",\"5263\":\"JIAN4\",\"5264\":\"JI4\",\"5265\":\"BO1 BAO1 PU1\",\"5266\":\"YAN1\",\"5267\":\"JU4\",\"5268\":\"HUO4\",\"5269\":\"SHENG4\",\"5270\":\"SHENG4\",\"5271\":\"JIAN4\",\"5272\":\"GE1\",\"5273\":\"ZHA1\",\"5274\":\"KAI3\",\"5275\":\"CHUANG4 CHUANG1\",\"5276\":\"JUAN1\",\"5277\":\"CHAN3\",\"5278\":\"TUAN2 ZHUAN1\",\"5279\":\"LU4\",\"5280\":\"GUA1\",\"5281\":\"QIAO1\",\"5282\":\"JUE2\",\"5283\":\"HUA4 HUA2\",\"5284\":\"ZHA2 DA2\",\"5285\":\"ZHUO4\",\"5286\":\"LIAN2\",\"5287\":\"JU4\",\"5288\":\"PI1 PI3\",\"5289\":\"LIU2\",\"5290\":\"HUO1\",\"5291\":\"JI4\",\"5292\":\"JIAN4\",\"5293\":\"YI4\",\"5294\":\"JIAN4\",\"5295\":\"ZHI2\",\"5296\":\"CHAN2\",\"5297\":\"CUAN2 JIAN3\",\"5298\":\"MO2\",\"5299\":\"LI2\",\"5300\":\"YUN2\",\"5303\":\"GAI4\",\"5304\":\"GAI4\",\"5305\":\"BAO1\",\"5306\":\"CONG1\",\"5308\":\"XIONG1\",\"5309\":\"PENG1\",\"5310\":\"FU2\",\"5311\":\"GONG1\",\"5312\":\"DA2\",\"5313\":\"JIU4\",\"5314\":\"QIONG1 QIONG2\",\"5315\":\"BI3\",\"5316\":\"HUA4 HUA1\",\"5317\":\"BEI3 BEI4\",\"5318\":\"NAO3\",\"5319\":\"CHI2 SHI5\",\"5320\":\"JIANG4\",\"5321\":\"KUANG1\",\"5322\":\"HU1\",\"5323\":\"XIA2\",\"5324\":\"QU1\",\"5325\":\"BIAN4\",\"5326\":\"GUI3\",\"5327\":\"QIE4\",\"5328\":\"ZANG1 CANG2\",\"5329\":\"KUANG1\",\"5330\":\"DAN1\",\"5331\":\"GUI4 KUI4\",\"5332\":\"LIAN2\",\"5333\":\"LIAN2\",\"5334\":\"SUAN3\",\"5335\":\"DU2\",\"5336\":\"JIU4\",\"5337\":\"QU2\",\"5338\":\"XI3\",\"5339\":\"PI3\",\"5340\":\"QU1 OU1\",\"5341\":\"SHI2\",\"5342\":\"XIN4\",\"5343\":\"QIAN1\",\"5344\":\"NIAN4\",\"5345\":\"SA4\",\"5346\":\"ZU2\",\"5347\":\"SHENG1\",\"5348\":\"WU3\",\"5349\":\"HUI4\",\"5350\":\"WAN4\",\"5351\":\"BEI1\",\"5352\":\"ZU2 CU4\",\"5353\":\"ZHUO1\",\"5354\":\"XIE2\",\"5355\":\"DAN1 SHAN4 CHAN2\",\"5356\":\"MAI4\",\"5357\":\"NAN2 NA1\",\"5358\":\"DAN1\",\"5359\":\"JI2\",\"5360\":\"ZHAN1 ZHAN4\",\"5361\":\"QIA3 KA3\",\"5362\":\"LU2\",\"5363\":\"YOU3\",\"5364\":\"LU3\",\"5365\":\"XI1\",\"5366\":\"GUA4\",\"5367\":\"WO4\",\"5368\":\"XIE4\",\"5369\":\"JIE2 BU4\",\"5370\":\"YIN4\",\"5371\":\"WEI1 WEI2\",\"5372\":\"SHAO4\",\"5373\":\"JI2\",\"5374\":\"QUE4\",\"5375\":\"LUAN3\",\"5376\":\"SHI4\",\"5377\":\"JUAN4 QUAN2\",\"5378\":\"XIE4\",\"5379\":\"XU4\",\"5380\":\"XI1\",\"5382\":\"CHANG3 HAN4 AN1\",\"5383\":\"ZHAN1\",\"5384\":\"E4\",\"5385\":\"TING1\",\"5386\":\"LI4\",\"5387\":\"ZHE2\",\"5388\":\"HAN3 AN4\",\"5389\":\"LI4\",\"5390\":\"PANG2\",\"5392\":\"HE2\",\"5393\":\"YA2 YAI2\",\"5394\":\"ZHI4\",\"5395\":\"CE4\",\"5396\":\"PANG2 MANG2\",\"5397\":\"TI2\",\"5398\":\"LI2\",\"5399\":\"SHE4\",\"5400\":\"MIE1\",\"5401\":\"XU1 YU4\",\"5402\":\"MANG2\",\"5403\":\"CHI1 JI1\",\"5404\":\"GE4\",\"5405\":\"XUAN1\",\"5406\":\"YAO1\",\"5407\":\"ZI3\",\"5408\":\"HE2 GE3\",\"5409\":\"JI2\",\"5410\":\"TU3 TU4\",\"5411\":\"XIANG4\",\"5412\":\"ZHA4 CHA4 ZHA1\",\"5413\":\"XIA4 HE4\",\"5414\":\"YE3\",\"5415\":\"LV3\",\"5416\":\"A1\",\"5417\":\"MA5 MA2 MA3\",\"5418\":\"OU3\",\"5419\":\"XUE1\",\"5420\":\"FEI4\",\"5421\":\"BI3\",\"5422\":\"QIN4\",\"5423\":\"QIN4\",\"5424\":\"JIE4\",\"5425\":\"BU4\",\"5426\":\"FOU3 PI3\",\"5427\":\"BA5 BA1\",\"5428\":\"DUN1\",\"5429\":\"FEN1\",\"5430\":\"HONG2\",\"5431\":\"ZHI1 ZI1\",\"5432\":\"SHEN3 YIN3\",\"5433\":\"WU2\",\"5434\":\"WU2\",\"5435\":\"CHAO3\",\"5436\":\"NE5 NE4 NA4\",\"5437\":\"XUE4\",\"5438\":\"XI1\",\"5439\":\"CHUI1 CHUI4\",\"5440\":\"YA1 YA5\",\"5441\":\"JUN4\",\"5442\":\"LV3\",\"5443\":\"E4\",\"5444\":\"GE2\",\"5445\":\"MEI2\",\"5446\":\"DAI1 AI2\",\"5447\":\"QI3\",\"5448\":\"CHENG2\",\"5449\":\"WU2\",\"5450\":\"NE4 NA4\",\"5451\":\"TUN1\",\"5452\":\"FU3\",\"5453\":\"YI4\",\"5454\":\"DAI1\",\"5455\":\"OU1 OU3 OU4\",\"5456\":\"LI4\",\"5457\":\"BAI4 BEI5\",\"5458\":\"YUAN2 YUN4\",\"5459\":\"KUAI1 GUO1 WAI1\",\"5460\":\"PEN1\",\"5461\":\"WEN3\",\"5462\":\"NI2 NE5\",\"5464\":\"LING2 LING4 LING3\",\"5465\":\"RAN3 RAN2\",\"5466\":\"YOU1\",\"5467\":\"DI3\",\"5468\":\"ZHOU1\",\"5469\":\"SHI4\",\"5470\":\"ZI3\",\"5471\":\"GU1 GUA1\",\"5472\":\"ZI1\",\"5473\":\"WEI4\",\"5474\":\"XU1 HOU3 HOU1\",\"5475\":\"HE1\",\"5476\":\"NAO2\",\"5477\":\"XIA1\",\"5478\":\"PEI1\",\"5479\":\"YI4\",\"5480\":\"JU3 ZU3\",\"5482\":\"ZA1\",\"5483\":\"TUO1\",\"5484\":\"DUO1\",\"5485\":\"POU4\",\"5486\":\"PAO2\",\"5487\":\"BI4\",\"5488\":\"FU2\",\"5489\":\"YANG1\",\"5490\":\"FU4\",\"5491\":\"QUE4 QUE1 JUE2\",\"5492\":\"ZHOU4\",\"5493\":\"WA3\",\"5494\":\"KA3\",\"5495\":\"GU1\",\"5496\":\"KA1 GA1\",\"5497\":\"ZUO3\",\"5498\":\"BU4\",\"5499\":\"LONG2\",\"5500\":\"YOU3\",\"5501\":\"YAN4\",\"5502\":\"GU3\",\"5503\":\"GU3\",\"5504\":\"BAI4 BEI5\",\"5505\":\"HAN1 HAN2 HAN4\",\"5506\":\"SUO1\",\"5507\":\"CHUN2\",\"5508\":\"YI4\",\"5509\":\"AI1 AI4\",\"5510\":\"TANG2\",\"5511\":\"ZUO4\",\"5512\":\"QIU2\",\"5513\":\"CHE1\",\"5514\":\"WU2\",\"5515\":\"ZAO4\",\"5516\":\"YA3\",\"5517\":\"DOU1\",\"5518\":\"QI3\",\"5519\":\"DI2\",\"5520\":\"LAO2\",\"5521\":\"LIANG3\",\"5522\":\"SUO3\",\"5523\":\"ZAO4\",\"5524\":\"HUAN4\",\"5526\":\"SHA1\",\"5527\":\"JI1\",\"5528\":\"ZUO3 ZU3\",\"5529\":\"WO1\",\"5530\":\"SHUA1\",\"5531\":\"CHANG4\",\"5532\":\"ER2\",\"5533\":\"LI4\",\"5534\":\"QIANG4\",\"5535\":\"AN3\",\"5536\":\"JIE4 JI2 ZE4\",\"5537\":\"YO1\",\"5538\":\"NIAN4\",\"5539\":\"YU1 YO1\",\"5540\":\"AI2\",\"5541\":\"ZHOU1 ZHAO1\",\"5542\":\"NOU4\",\"5543\":\"KEN3\",\"5544\":\"ZHUO2 ZHOU4\",\"5545\":\"ZHUO2\",\"5546\":\"SHANG1\",\"5547\":\"DI2\",\"5548\":\"HENG4\",\"5549\":\"LAN2 LIN2\",\"5550\":\"CUI4\",\"5551\":\"SHA4 DIE2\",\"5552\":\"HU1\",\"5553\":\"QI3\",\"5554\":\"QI3\",\"5555\":\"TAO2\",\"5556\":\"DAN4\",\"5557\":\"DAN4\",\"5558\":\"YE4 WA1\",\"5559\":\"ZI3\",\"5560\":\"ZHE2\",\"5561\":\"FEI1 PEI1\",\"5562\":\"LIANG3\",\"5563\":\"XIAN2\",\"5564\":\"PI2\",\"5565\":\"SHA4\",\"5566\":\"LA5 LA1\",\"5567\":\"ZE2\",\"5568\":\"QING1\",\"5569\":\"GUA4\",\"5570\":\"LUO1 LUO2 LUO5\",\"5571\":\"YAN1\",\"5572\":\"DI4\",\"5573\":\"QUAN2 JUE2\",\"5574\":\"TAN1 CHAN3\",\"5575\":\"BO5\",\"5576\":\"DING4\",\"5577\":\"LANG1 LANG2\",\"5578\":\"XIAO4\",\"5580\":\"KA1 KE4 KE5\",\"5581\":\"YONG2 YU2\",\"5582\":\"WEI4\",\"5583\":\"NAN2\",\"5584\":\"SHAN4\",\"5585\":\"YU4\",\"5586\":\"ZHE2\",\"5587\":\"LA3\",\"5588\":\"JIE1\",\"5589\":\"HOU2\",\"5590\":\"YU4\",\"5591\":\"YIN1 YIN4\",\"5592\":\"ZAN2\",\"5593\":\"YAO1\",\"5594\":\"O1 WO1\",\"5595\":\"MIAN3\",\"5596\":\"HU2\",\"5597\":\"YUN3\",\"5598\":\"CHUAN3\",\"5599\":\"HUI4\",\"5600\":\"DI2\",\"5601\":\"QI1\",\"5602\":\"JIAO4\",\"5603\":\"CHONG1\",\"5604\":\"JIAO1\",\"5605\":\"KAI3\",\"5606\":\"TAN4\",\"5607\":\"SAN1\",\"5608\":\"CAO2\",\"5609\":\"JIA1\",\"5610\":\"XIAO1 JIAO1\",\"5611\":\"HU1 HU4 LA4\",\"5612\":\"HUI4\",\"5613\":\"GUO1\",\"5614\":\"OU1 OU3 OU4 XU1 OU5\",\"5615\":\"XIAN1\",\"5616\":\"ZE2\",\"5617\":\"CHANG2\",\"5618\":\"XU1\",\"5619\":\"PO2\",\"5620\":\"GA1 GA3\",\"5621\":\"TANG1\",\"5622\":\"YE3\",\"5623\":\"BENG1\",\"5624\":\"YING1\",\"5626\":\"JIAO4\",\"5627\":\"MI4\",\"5628\":\"XIAO4 CHI4\",\"5629\":\"HUA1 HUA2\",\"5630\":\"JI1\",\"5631\":\"ZHU3\",\"5632\":\"CHAO2 ZHAO1\",\"5633\":\"KUI4\",\"5634\":\"ZUI3\",\"5635\":\"XIAO1\",\"5636\":\"SI1 XI1\",\"5637\":\"HAO2\",\"5638\":\"FU3\",\"5639\":\"LIAO2 LIAO4\",\"5640\":\"XUN4\",\"5641\":\"E3 WU4\",\"5642\":\"ZUN3\",\"5643\":\"FAN1\",\"5644\":\"CHI1\",\"5645\":\"HUI1\",\"5646\":\"ZAN3\",\"5647\":\"CHUANG2\",\"5648\":\"CU4\",\"5649\":\"DAN4\",\"5650\":\"QI4\",\"5651\":\"HAO2\",\"5652\":\"LIAN2\",\"5653\":\"XU1\",\"5654\":\"DENG1\",\"5655\":\"HUI1\",\"5656\":\"YIN2\",\"5657\":\"PU1\",\"5658\":\"JUE1\",\"5659\":\"QIN2\",\"5660\":\"DA1\",\"5661\":\"DAN1 ZHAN1\",\"5662\":\"O1 YU3\",\"5663\":\"ZHOU4 ZHUO2\",\"5664\":\"JIN4\",\"5665\":\"NONG2\",\"5666\":\"YUE3 HUI4\",\"5667\":\"HUI4\",\"5668\":\"QI4\",\"5669\":\"E4\",\"5670\":\"YONG1\",\"5671\":\"JUE2 XUE2\",\"5672\":\"KUAI4\",\"5673\":\"YU3\",\"5674\":\"PEN1 PEN4\",\"5675\":\"DAO4\",\"5676\":\"GE2 GA2\",\"5677\":\"XIN1 HEN1\",\"5678\":\"DUN1\",\"5679\":\"DANG1\",\"5680\":\"NING2\",\"5681\":\"DI2\",\"5682\":\"LAN4 HAN3 LAN2\",\"5683\":\"TA4\",\"5684\":\"HUO4 HUO1\",\"5685\":\"RU2\",\"5686\":\"HAO1\",\"5687\":\"XIA4 HE4\",\"5688\":\"YA4\",\"5689\":\"DUO1\",\"5690\":\"CHANG2\",\"5693\":\"CA1\",\"5694\":\"TI4\",\"5695\":\"LU1\",\"5696\":\"HUI4\",\"5697\":\"BO2\",\"5698\":\"YOU1\",\"5699\":\"NIE4\",\"5700\":\"GUO2\",\"5701\":\"YIN2\",\"5702\":\"HUN4\",\"5703\":\"PU3\",\"5704\":\"YU3\",\"5705\":\"HAN2\",\"5706\":\"YUAN2\",\"5707\":\"LUN2\",\"5708\":\"QUAN1 JUAN4\",\"5709\":\"YU3\",\"5710\":\"KU1\",\"5711\":\"FU4\",\"5712\":\"YUAN2\",\"5713\":\"YUAN2\",\"5714\":\"E4\",\"5716\":\"TU2\",\"5717\":\"TU2\",\"5718\":\"TUAN2\",\"5719\":\"LVE4\",\"5720\":\"YA4\",\"5721\":\"TU3\",\"5722\":\"TING1 TING3\",\"5723\":\"SHENG4 KU1\",\"5724\":\"PU3 PU2\",\"5725\":\"LU4\",\"5727\":\"YA1\",\"5728\":\"ZAI4\",\"5729\":\"WEI2 YU2 XU1\",\"5730\":\"DI4 DE5\",\"5731\":\"QIAN1\",\"5732\":\"QIAN1\",\"5733\":\"ZHEN4\",\"5734\":\"ZHUO2\",\"5735\":\"DANG4\",\"5736\":\"QIA4\",\"5739\":\"KUANG4\",\"5740\":\"ZHI3\",\"5741\":\"ZHI3\",\"5742\":\"BAN3\",\"5743\":\"XUN1 XUN4\",\"5744\":\"TOU2\",\"5745\":\"QIN3\",\"5746\":\"FEN2\",\"5747\":\"JUN1 YUN4\",\"5748\":\"KENG1\",\"5749\":\"TUN2\",\"5750\":\"ZUO4\",\"5751\":\"KENG1\",\"5752\":\"BI4\",\"5753\":\"XING2\",\"5754\":\"DI4\",\"5755\":\"JING1\",\"5756\":\"JI4\",\"5757\":\"KUAI4\",\"5758\":\"DI3\",\"5759\":\"JING1\",\"5760\":\"ZHUI4\",\"5761\":\"PO1\",\"5762\":\"PAN3 PAN4\",\"5763\":\"TANG1\",\"5764\":\"KUN1\",\"5765\":\"QU1\",\"5766\":\"TAN3\",\"5767\":\"ZHI1\",\"5768\":\"TUO2\",\"5769\":\"GAN1\",\"5770\":\"JIONG1\",\"5771\":\"YANG3\",\"5772\":\"FO2\",\"5773\":\"AO4 AO1\",\"5774\":\"LIU4\",\"5775\":\"QIU1\",\"5776\":\"MU4\",\"5777\":\"KE3 KE1\",\"5778\":\"GOU4\",\"5779\":\"XUE4\",\"5780\":\"HU1\",\"5781\":\"ZHI4\",\"5782\":\"CHUI2\",\"5783\":\"LA1 LA5\",\"5784\":\"LONG3\",\"5785\":\"LONG3\",\"5786\":\"LU2\",\"5787\":\"AO4 AO1\",\"5789\":\"PAO2\",\"5790\":\"CI2\",\"5791\":\"CHI3\",\"5792\":\"LEI3 LEI4 LEI2 LV4\",\"5793\":\"GAI1\",\"5794\":\"YIN1\",\"5795\":\"HOU4\",\"5796\":\"DUI1\",\"5797\":\"ZHAO4\",\"5798\":\"FU2\",\"5799\":\"GUANG1\",\"5800\":\"KU1\",\"5801\":\"KE4\",\"5802\":\"TANG2\",\"5803\":\"KUN1\",\"5804\":\"NI4\",\"5805\":\"JIAN1\",\"5806\":\"DUI1\",\"5807\":\"JIN3\",\"5808\":\"GANG1\",\"5809\":\"YU4\",\"5810\":\"YA2\",\"5811\":\"QIAN4\",\"5813\":\"AN4\",\"5815\":\"DUO4 HUI1\",\"5816\":\"NAO3\",\"5817\":\"TU1\",\"5818\":\"CHENG2\",\"5819\":\"YIN1\",\"5820\":\"HOU4\",\"5821\":\"BAO3 BU3 PU4\",\"5822\":\"BAO3\",\"5823\":\"YU2\",\"5824\":\"DI1 TI2\",\"5825\":\"MAO2\",\"5826\":\"JIE1\",\"5827\":\"RUAN2\",\"5828\":\"E4 AI4 YE4\",\"5829\":\"GENG4\",\"5830\":\"YAN4\",\"5831\":\"BAO4\",\"5832\":\"JI2\",\"5833\":\"MEI2\",\"5834\":\"CHANG2 CHANG3\",\"5835\":\"DU3\",\"5836\":\"TUO2\",\"5837\":\"YIN4 POU3\",\"5838\":\"FENG2\",\"5839\":\"ZHONG4\",\"5842\":\"XIANG4 JIANG3\",\"5843\":\"HUANG1\",\"5844\":\"LENG2\",\"5845\":\"DUAN4\",\"5847\":\"XUAN1\",\"5848\":\"JI4 XI4\",\"5849\":\"JI2\",\"5850\":\"SU4\",\"5851\":\"SU4\",\"5852\":\"SHI2\",\"5853\":\"MI4\",\"5854\":\"TA3\",\"5855\":\"WENG3\",\"5856\":\"CHENG2\",\"5857\":\"TU2\",\"5858\":\"TANG2\",\"5859\":\"QUE4\",\"5860\":\"DUI1\",\"5861\":\"TIAN2\",\"5862\":\"WU4\",\"5863\":\"CHENG3\",\"5864\":\"XUN1 XUAN1\",\"5865\":\"GE2\",\"5866\":\"ZHEN4\",\"5867\":\"AI4\",\"5868\":\"GONG1\",\"5869\":\"YAN2\",\"5871\":\"LANG3\",\"5872\":\"CHANG2 CHANG3\",\"5873\":\"PENG2\",\"5874\":\"BENG4\",\"5875\":\"CHEN2\",\"5876\":\"CU4\",\"5877\":\"LU3\",\"5878\":\"OU3 OU1\",\"5879\":\"QIAN4\",\"5880\":\"CHI2\",\"5881\":\"MAN4\",\"5882\":\"BIAO1\",\"5883\":\"JING4\",\"5884\":\"QI1\",\"5885\":\"SHU4\",\"5886\":\"DI4 DIE2\",\"5887\":\"ZHANG1\",\"5888\":\"KAN4\",\"5889\":\"YONG1 YONG2\",\"5890\":\"JIN4\",\"5891\":\"DI1\",\"5892\":\"SHANG1\",\"5893\":\"MU4\",\"5894\":\"CUI1\",\"5895\":\"YAN4\",\"5896\":\"TA3\",\"5897\":\"ZENG1\",\"5898\":\"QI2\",\"5899\":\"QIANG2\",\"5900\":\"SHOU4\",\"5901\":\"YI1 YIN1\",\"5902\":\"ZHI3\",\"5903\":\"GU1\",\"5904\":\"CHU4 CHU3\",\"5905\":\"JIANG4\",\"5906\":\"FENG2 PANG2\",\"5907\":\"BEI4\",\"5909\":\"BIAN4\",\"5910\":\"XIONG4\",\"5912\":\"NAO2\",\"5913\":\"XIA4\",\"5914\":\"KUI2\",\"5915\":\"XI1 XI4\",\"5916\":\"WAI4\",\"5917\":\"YUAN4 WAN3\",\"5918\":\"MAO3\",\"5919\":\"SU4\",\"5920\":\"GOU4\",\"5921\":\"QI4\",\"5922\":\"MENG4 MENG2\",\"5923\":\"MENG4\",\"5924\":\"YIN2\",\"5925\":\"HUO3\",\"5926\":\"CHEN4\",\"5927\":\"DA4 DAI4 TAI4\",\"5928\":\"ZE4\",\"5929\":\"TIAN1\",\"5930\":\"GAO3\",\"5931\":\"SHI1\",\"5932\":\"BEN3 TAO1\",\"5933\":\"TAI4\",\"5934\":\"TOU2 TOU5\",\"5935\":\"YAN3\",\"5936\":\"BI3\",\"5937\":\"YI2\",\"5938\":\"KUA1\",\"5939\":\"JIA1 JIA2\",\"5940\":\"EN1 MANG2\",\"5941\":\"LIAN2\",\"5942\":\"HUAN4\",\"5943\":\"DI4 DI1\",\"5944\":\"YAN3 YAN1\",\"5945\":\"PAO4\",\"5946\":\"QUAN3\",\"5947\":\"QI2 JI1\",\"5948\":\"NAI4\",\"5949\":\"FENG4\",\"5950\":\"HUAN4\",\"5951\":\"QI4 QIE4 XIE4\",\"5952\":\"KAI1 ZHA1 ZHA4\",\"5953\":\"SHE1 CHI3 ZHA4 ZHA1\",\"5954\":\"BEN1 BEN4\",\"5955\":\"YI4\",\"5956\":\"JIANG3\",\"5957\":\"TAO4\",\"5958\":\"ZANG4 ZHUANG3\",\"5959\":\"BEN3\",\"5960\":\"DIAN4\",\"5961\":\"AO4\",\"5962\":\"SHE1\",\"5963\":\"WENG3\",\"5964\":\"PAN3 HA3 TAI3\",\"5965\":\"AO4\",\"5966\":\"WU4\",\"5967\":\"AO4 YU4\",\"5968\":\"JIANG3\",\"5969\":\"LIAN2\",\"5970\":\"BI4\",\"5971\":\"LIAN2\",\"5972\":\"DUO3\",\"5973\":\"NV3 RU3\",\"5974\":\"NU2\",\"5975\":\"DING1\",\"5976\":\"NAI3\",\"5977\":\"QIAN1\",\"5978\":\"JIAN1\",\"5979\":\"TA1\",\"5980\":\"JI3\",\"5981\":\"SHUO4\",\"5982\":\"RU2\",\"5983\":\"FEI1 PEI4\",\"5984\":\"WANG4\",\"5985\":\"HONG2\",\"5986\":\"ZHUANG1\",\"5987\":\"FU4\",\"5988\":\"MA1\",\"5989\":\"DAN1\",\"5990\":\"ZHONG1\",\"5991\":\"PA1\",\"5992\":\"DU4\",\"5993\":\"JI4\",\"5994\":\"KENG1\",\"5995\":\"ZHONG4\",\"5996\":\"YAO1\",\"5997\":\"JIN4\",\"5998\":\"YUN2\",\"5999\":\"MIAO4\",\"6000\":\"HUAI2\",\"6001\":\"TAI4\",\"6002\":\"SONG3\",\"6003\":\"WU3\",\"6004\":\"OU4\",\"6005\":\"CHANG4\",\"6006\":\"CHUANG4\",\"6007\":\"JU4\",\"6008\":\"YI4\",\"6009\":\"BAO3\",\"6010\":\"KOU4\",\"6011\":\"BAN4\",\"6012\":\"NU4\",\"6013\":\"NAO2\",\"6014\":\"ZHENG1\",\"6015\":\"PA4\",\"6016\":\"BU4\",\"6017\":\"TIE1\",\"6018\":\"GU4\",\"6019\":\"HU4\",\"6020\":\"DAI4\",\"6021\":\"YI2\",\"6022\":\"TU2 TU1\",\"6023\":\"YOU2\",\"6024\":\"FU1\",\"6025\":\"JI2\",\"6026\":\"PENG1\",\"6027\":\"XING4\",\"6028\":\"YUAN4\",\"6029\":\"NI2\",\"6030\":\"XUAN4\",\"6031\":\"CONG1\",\"6032\":\"BING3\",\"6033\":\"HUANG3\",\"6034\":\"XU4\",\"6035\":\"CHU4\",\"6036\":\"PI1\",\"6037\":\"XI1\",\"6038\":\"XI1\",\"6039\":\"TAN1\",\"6040\":\"CHI3 SHI4\",\"6041\":\"REN4\",\"6042\":\"XUN2\",\"6043\":\"SHI4\",\"6044\":\"XI4\",\"6045\":\"LAO3\",\"6046\":\"HENG2\",\"6047\":\"KUANG1\",\"6048\":\"MU2 MOU2\",\"6049\":\"ZHI3\",\"6050\":\"KONG3\",\"6051\":\"GUI3\",\"6052\":\"HENG2\",\"6053\":\"XI1\",\"6054\":\"XIAO4\",\"6055\":\"SHU4\",\"6057\":\"KUA3\",\"6058\":\"QIU1\",\"6059\":\"YANG4\",\"6060\":\"GUAI4\",\"6061\":\"LIN4\",\"6062\":\"HUI1\",\"6063\":\"ZI4 CI1\",\"6064\":\"XU4\",\"6065\":\"CHI3\",\"6066\":\"XIANG4\",\"6067\":\"NV4\",\"6068\":\"HEN4\",\"6069\":\"EN1\",\"6070\":\"QIA4\",\"6071\":\"YUE4\",\"6072\":\"PENG1\",\"6073\":\"KEN3\",\"6074\":\"DE2\",\"6075\":\"HUI4\",\"6076\":\"E4 WU4 WU1\",\"6078\":\"TONG4\",\"6079\":\"YAN4\",\"6080\":\"YONG3\",\"6081\":\"YUAN1 JUAN4\",\"6082\":\"PI1\",\"6083\":\"KUN3\",\"6084\":\"QIAO3\",\"6085\":\"YUE4\",\"6086\":\"YU4\",\"6087\":\"YU4 TU2\",\"6088\":\"JIE4\",\"6089\":\"XI1\",\"6090\":\"TI4\",\"6091\":\"BU4\",\"6092\":\"YI4\",\"6093\":\"QIAN4\",\"6094\":\"HUI3\",\"6095\":\"XI1\",\"6096\":\"BEI4 BO2\",\"6097\":\"MAN2 MEN4\",\"6098\":\"YI1\",\"6099\":\"HENG1\",\"6100\":\"QIAO3\",\"6101\":\"CHOU2\",\"6102\":\"BEI4 BEI3\",\"6103\":\"XUAN1 XUAN3\",\"6104\":\"WEI1\",\"6105\":\"GE2\",\"6106\":\"QIAN1\",\"6107\":\"WEI3\",\"6108\":\"YU4\",\"6109\":\"YU2 TOU1\",\"6110\":\"MIAN3\",\"6111\":\"YONG3\",\"6112\":\"KAI4 QI4\",\"6113\":\"DANG4 SHANG1\",\"6114\":\"YIN1\",\"6115\":\"E4\",\"6116\":\"CHEN2\",\"6117\":\"MOU4\",\"6118\":\"KE4\",\"6119\":\"KE4\",\"6120\":\"YUN4 WEN3\",\"6121\":\"ZONG3\",\"6122\":\"SAI1\",\"6123\":\"LENG4 LENG2\",\"6124\":\"FEN4\",\"6126\":\"KUI4\",\"6127\":\"KUI4\",\"6128\":\"QUE4\",\"6129\":\"GONG1\",\"6130\":\"HUANG3\",\"6131\":\"JI2\",\"6132\":\"GU3\",\"6133\":\"JU4\",\"6134\":\"CHUANG4\",\"6135\":\"NI4\",\"6136\":\"XIE2\",\"6137\":\"KAI3\",\"6138\":\"ZHENG3\",\"6139\":\"YONG3\",\"6140\":\"XIE2\",\"6141\":\"HUN4\",\"6142\":\"YONG3\",\"6143\":\"YANG3\",\"6144\":\"LI4\",\"6145\":\"SAO1 CAO3\",\"6146\":\"TAO1\",\"6147\":\"YIN1\",\"6148\":\"CI2\",\"6149\":\"XU4\",\"6151\":\"SHE4 ZHE2\",\"6152\":\"CONG2\",\"6153\":\"PIAO4\",\"6154\":\"MO4\",\"6155\":\"MU4\",\"6156\":\"GUO2\",\"6157\":\"CHI4\",\"6158\":\"CAN3\",\"6159\":\"CAN2\",\"6160\":\"AO4\",\"6161\":\"SHUANG3\",\"6162\":\"MAN4\",\"6163\":\"GUAN4\",\"6164\":\"QUE4\",\"6165\":\"ZAO4 CAO4\",\"6166\":\"JIU4\",\"6167\":\"HUI4\",\"6168\":\"KAI3\",\"6169\":\"LIAN2\",\"6170\":\"WEI4\",\"6171\":\"TUAN2\",\"6172\":\"MAN2\",\"6173\":\"QIAN1\",\"6174\":\"SHE4 ZHE2\",\"6175\":\"YONG1 YONG2\",\"6176\":\"QING4\",\"6177\":\"KANG1 KANG3\",\"6178\":\"DI4\",\"6179\":\"ZHI2 ZHE2\",\"6180\":\"LIAO2\",\"6181\":\"CONG1 ZONG3\",\"6182\":\"YOU1\",\"6183\":\"CHONG1\",\"6184\":\"ZHI4\",\"6185\":\"TONG4\",\"6186\":\"CHENG1 ZHENG4\",\"6187\":\"QI4\",\"6188\":\"QU1\",\"6189\":\"PENG2\",\"6190\":\"LIAN2\",\"6191\":\"PING2\",\"6192\":\"KUI4\",\"6193\":\"HUI4\",\"6194\":\"QIAO2\",\"6195\":\"CHENG2\",\"6196\":\"YIN4\",\"6197\":\"YIN4\",\"6198\":\"XI3\",\"6199\":\"XI3\",\"6200\":\"LIAN4\",\"6201\":\"NAN3\",\"6202\":\"MI2\",\"6203\":\"TANG3 CHANG3\",\"6204\":\"JUE2\",\"6205\":\"GANG4 ZHUANG4\",\"6206\":\"GANG4 ZHUANG4\",\"6207\":\"GANG4 ZHUANG4\",\"6208\":\"GE1\",\"6209\":\"YUE4\",\"6210\":\"CHENG2\",\"6211\":\"WO3\",\"6212\":\"JIE4\",\"6213\":\"GE1\",\"6214\":\"JIAN1\",\"6215\":\"QIANG1 QIANG2\",\"6216\":\"HUO4 YU4\",\"6217\":\"QIANG1 QIANG4\",\"6218\":\"ZHAN4\",\"6219\":\"DONG4\",\"6220\":\"SHI4\",\"6221\":\"KAN1\",\"6222\":\"JI2\",\"6223\":\"KUI2\",\"6224\":\"GAI4\",\"6225\":\"DENG3\",\"6226\":\"ZHAN4\",\"6227\":\"CHUANG1 QIANG1 QIANG4\",\"6228\":\"GE1\",\"6229\":\"JIAN3\",\"6230\":\"ZHAN4\",\"6231\":\"XI4 XI1 HU1 HUI1\",\"6232\":\"XI4 XI1\",\"6233\":\"CHUO1\",\"6234\":\"DAI4\",\"6235\":\"QU2\",\"6236\":\"HU4\",\"6237\":\"HU4\",\"6238\":\"HU4\",\"6239\":\"E4 AI4\",\"6240\":\"SUO3\",\"6241\":\"BIAN3 PIAN1 BIAN4\",\"6242\":\"DIAN4\",\"6243\":\"JIONG1 JIONG3\",\"6244\":\"SHANG3\",\"6245\":\"YI2\",\"6246\":\"YI3\",\"6247\":\"SHAN4 SHAN1\",\"6248\":\"HU4\",\"6249\":\"FEI1\",\"6250\":\"LE4\",\"6251\":\"PU1 BU1\",\"6252\":\"BA1 PA1 PA2\",\"6253\":\"DA3 DA2\",\"6254\":\"RENG1 RENG4\",\"6255\":\"FU2\",\"6257\":\"ZAI4\",\"6258\":\"TUO1\",\"6259\":\"ZHANG4\",\"6260\":\"CHA1 ZHA3\",\"6261\":\"YI3 CHI3 TUO1\",\"6262\":\"GU3 GE1 XI4\",\"6263\":\"KOU4\",\"6264\":\"WU4\",\"6265\":\"TUO1\",\"6266\":\"QIAN1\",\"6267\":\"ZHI2\",\"6268\":\"REN4\",\"6269\":\"KUO4\",\"6270\":\"RAO3 ROU2\",\"6271\":\"XI1 CHA1\",\"6272\":\"QIAN2\",\"6273\":\"BAN1 PAN1\",\"6274\":\"JIA2\",\"6275\":\"YU2\",\"6276\":\"FU2 PU2\",\"6277\":\"AO4\",\"6278\":\"XI1\",\"6279\":\"PI1\",\"6280\":\"JI4\",\"6281\":\"YAN3\",\"6282\":\"KUANG2\",\"6283\":\"BIAN4 PAN4\",\"6284\":\"CHAO1\",\"6285\":\"JU1\",\"6286\":\"WEN4 WEN3\",\"6287\":\"HU2 GU3 JUE2\",\"6288\":\"YUE4\",\"6289\":\"JUE2\",\"6290\":\"NU4\",\"6291\":\"YI4\",\"6292\":\"SHU1\",\"6293\":\"ZHUA1 ZHAO1\",\"6294\":\"POU2 BAO4\",\"6295\":\"TOU2\",\"6296\":\"DOU3\",\"6297\":\"KANG4 KANG2\",\"6298\":\"ZHE2 SHE2 ZHE1\",\"6299\":\"POU2 POU1 FU1\",\"6300\":\"BO4\",\"6301\":\"CHI2\",\"6302\":\"GUA4\",\"6303\":\"ZHI4\",\"6304\":\"KUO4\",\"6305\":\"DUO3\",\"6306\":\"DUO3\",\"6307\":\"ZHI3\",\"6308\":\"QIE4 QI4\",\"6309\":\"AN4\",\"6310\":\"RU2 NA2 NU2 RAO2\",\"6311\":\"TIAO1 TIAO3 TAO1\",\"6312\":\"LIE4\",\"6313\":\"ZHA1\",\"6314\":\"LV3\",\"6315\":\"DIE2\",\"6316\":\"WA1\",\"6317\":\"JUE2\",\"6319\":\"JU3\",\"6320\":\"NAO2\",\"6321\":\"DANG3 DANG4 TANG3\",\"6322\":\"JIAO3\",\"6323\":\"ZHENG1 ZHENG4\",\"6324\":\"JI3\",\"6325\":\"HUI1\",\"6326\":\"XUN2 XIAN2\",\"6328\":\"AI1 AI2\",\"6329\":\"TUO1 SHUI4\",\"6330\":\"CHENG2\",\"6331\":\"SUO1\",\"6332\":\"SUO1\",\"6333\":\"KENG1 QIAN1\",\"6334\":\"MEI3\",\"6335\":\"LONG4 NONG4\",\"6336\":\"JU2\",\"6337\":\"PENG2 BENG1 BANG4 BANG3\",\"6338\":\"JIAN3\",\"6339\":\"YI4\",\"6340\":\"FENG1\",\"6341\":\"JIAO3\",\"6342\":\"WU3\",\"6343\":\"JUN4\",\"6344\":\"JIU4 JIU1 JU1 QIU2\",\"6345\":\"TONG3\",\"6346\":\"KUN3\",\"6347\":\"HUO4\",\"6348\":\"TU2\",\"6349\":\"ZHUO1\",\"6350\":\"JUAN1 YUAN2\",\"6351\":\"ZE2\",\"6352\":\"SONG3\",\"6353\":\"YE2\",\"6354\":\"JUE2\",\"6355\":\"BU3\",\"6356\":\"HUAN2 GUA1 WAN2\",\"6357\":\"BU4\",\"6358\":\"ZUN4\",\"6359\":\"YI4\",\"6360\":\"BANG1\",\"6361\":\"JIAN3 LIAN4\",\"6362\":\"HUAN4\",\"6363\":\"DAO3\",\"6365\":\"WAN4\",\"6366\":\"QIN2\",\"6367\":\"PENG3\",\"6368\":\"SHE3\",\"6369\":\"LIE4 LI4\",\"6370\":\"WO3\",\"6371\":\"AI2\",\"6372\":\"JUAN3 QUAN2\",\"6373\":\"YUE4\",\"6374\":\"ZONG3\",\"6375\":\"CHEN3 CHEN1\",\"6376\":\"CHUI2\",\"6377\":\"JIE2 QIE4\",\"6378\":\"TU1\",\"6379\":\"BEN4\",\"6380\":\"XIAN1\",\"6381\":\"CHENG2\",\"6382\":\"DIAN1\",\"6383\":\"SAO3 SAO4\",\"6384\":\"LUN1 LUN2\",\"6385\":\"QING4\",\"6386\":\"GANG1\",\"6387\":\"DUO2 DUO1\",\"6388\":\"SHOU4\",\"6389\":\"DIAO4\",\"6390\":\"QIA1\",\"6391\":\"QI2\",\"6392\":\"PAI2 PAI3 BEI4\",\"6393\":\"SHU2\",\"6394\":\"QIAN1\",\"6395\":\"LING4\",\"6396\":\"YE4 YE1 YI4 YE3\",\"6397\":\"YA4\",\"6398\":\"JUE2\",\"6399\":\"ZHENG1 ZHENG4\",\"6400\":\"CHAN1\",\"6401\":\"GE1 GE2\",\"6402\":\"LOU3 LOU1 LOU2\",\"6403\":\"ZONG3\",\"6404\":\"GENG1\",\"6405\":\"JIAO3\",\"6406\":\"GOU4\",\"6407\":\"QIN4\",\"6408\":\"YONG3\",\"6409\":\"QUE4\",\"6410\":\"CHU4 CHOU1\",\"6411\":\"RONG3\",\"6412\":\"BENG4 BANG4 PENG2\",\"6413\":\"CUO1\",\"6414\":\"SAO1 ZHAO3\",\"6415\":\"KE4\",\"6416\":\"YAO2\",\"6417\":\"DAO3\",\"6418\":\"ZHI1\",\"6419\":\"NU4\",\"6420\":\"SHUO4\",\"6421\":\"SANG3\",\"6422\":\"JIN4\",\"6423\":\"MIE4\",\"6424\":\"E4\",\"6425\":\"CHUI2\",\"6426\":\"NUO4\",\"6427\":\"SHAN1\",\"6428\":\"TA4 DA1\",\"6429\":\"JIE2\",\"6430\":\"HU2 GU3\",\"6431\":\"ZHI4\",\"6432\":\"WA1\",\"6433\":\"XIA2 HUA2\",\"6434\":\"QIAN1\",\"6435\":\"WEN4\",\"6436\":\"QIANG3 QIANG1 CHENG1\",\"6437\":\"TIAN2 SHEN1\",\"6438\":\"ZHEN1\",\"6439\":\"E4\",\"6440\":\"WU3\",\"6441\":\"EN4\",\"6442\":\"SHE4 NIE4\",\"6443\":\"KANG2 GANG1\",\"6444\":\"SHE4 NIE4\",\"6445\":\"SHU1\",\"6446\":\"BAI3\",\"6447\":\"YAO2\",\"6448\":\"BIN4\",\"6449\":\"SOU1\",\"6450\":\"CHUANG1\",\"6451\":\"GUO2\",\"6452\":\"BING4\",\"6453\":\"FENG2\",\"6454\":\"SHUAI1\",\"6455\":\"DI4\",\"6456\":\"QI4\",\"6458\":\"ZHAI1 ZHE2\",\"6459\":\"LIAN3\",\"6460\":\"ZONG3 ZONG1\",\"6461\":\"GAI4 XI4\",\"6462\":\"HU4\",\"6463\":\"ZHA1 ZA1\",\"6464\":\"CHUANG3\",\"6465\":\"TANG4\",\"6466\":\"HUA4\",\"6467\":\"CUI1 CUO4\",\"6468\":\"NAI2\",\"6469\":\"MO2 MA1\",\"6470\":\"NIE4\",\"6471\":\"MAN2\",\"6472\":\"SHAN4 ZHAN4\",\"6473\":\"KOU1\",\"6474\":\"SHU1\",\"6475\":\"SUO3 SHE4\",\"6476\":\"TUAN2 ZHUAN1\",\"6477\":\"JIAO3\",\"6478\":\"MO1 MO2\",\"6479\":\"MO2\",\"6480\":\"GOU4\",\"6481\":\"QIAN1\",\"6482\":\"LIAO4 LVE4 LIAO1 LIAO2\",\"6483\":\"JI2\",\"6484\":\"YING1\",\"6485\":\"JUE1 JUE2 GUI4\",\"6486\":\"PIE1 PIE3\",\"6487\":\"PIE1 PIE3\",\"6488\":\"LAO1\",\"6489\":\"DUN1\",\"6490\":\"CHENG1\",\"6491\":\"CHENG1\",\"6492\":\"SA1 SA3\",\"6493\":\"NAO2\",\"6494\":\"HENG4\",\"6495\":\"SI1 XI1\",\"6496\":\"QIAN3 HAN4\",\"6497\":\"HUANG2\",\"6498\":\"DA1\",\"6499\":\"ZUN3\",\"6500\":\"PAN1\",\"6501\":\"YANG3\",\"6502\":\"LEI4 LEI2\",\"6503\":\"SA4\",\"6504\":\"SHU1\",\"6505\":\"ZAN3\",\"6506\":\"NIAN3\",\"6507\":\"XIAN3\",\"6508\":\"JUN4\",\"6509\":\"HUO4 HUO1 QUE4\",\"6510\":\"QIAN1\",\"6511\":\"QIAN1\",\"6512\":\"ZAN3\",\"6513\":\"QIAN1\",\"6514\":\"LAN2\",\"6515\":\"SAN1 XIAN1\",\"6516\":\"YING1\",\"6517\":\"MEI2\",\"6518\":\"RANG4 RANG3 NING2 XIANG3 RANG2\",\"6519\":\"CHAN1\",\"6520\":\"MI2 MA1 MO2\",\"6521\":\"LI2 CHI1\",\"6522\":\"ZAN3 CUAN2 ZUAN1\",\"6523\":\"LUAN2 LIAN4\",\"6524\":\"TAN1\",\"6525\":\"ZUAN4\",\"6526\":\"LI4 XI3\",\"6527\":\"DIAN1 DIE2\",\"6528\":\"WA1\",\"6529\":\"DANG3 TANG3\",\"6530\":\"GUI4\",\"6531\":\"GUI3\",\"6532\":\"QI1 JI1 YI1\",\"6533\":\"XIN2\",\"6534\":\"PU1 PO1\",\"6535\":\"SUI1\",\"6536\":\"SHOU1\",\"6537\":\"KAO3 KAO2\",\"6538\":\"YOU1\",\"6539\":\"GAI3\",\"6540\":\"BO2\",\"6541\":\"DIAN1\",\"6542\":\"KOU4\",\"6543\":\"MIN3\",\"6544\":\"WU4 MOU4\",\"6545\":\"GU4 GU3\",\"6546\":\"HE2\",\"6547\":\"CE4\",\"6548\":\"XIAO4\",\"6549\":\"MI3\",\"6550\":\"CHEN2\",\"6551\":\"JIU4\",\"6552\":\"ZHEN4\",\"6553\":\"DUO2\",\"6554\":\"YU3\",\"6555\":\"CHI4\",\"6556\":\"AO2 AO4\",\"6557\":\"BAI4\",\"6558\":\"XU4\",\"6559\":\"JIAO4 JIAO1\",\"6560\":\"DUO2\",\"6561\":\"YI4\",\"6562\":\"GAN3\",\"6563\":\"SAN4 SAN3\",\"6564\":\"KE3\",\"6565\":\"YAN4\",\"6566\":\"DUN1 DUI4 DIAO1 DUI1 TUAN2 TUN2\",\"6567\":\"QI3\",\"6568\":\"DOU3\",\"6569\":\"XIAO4\",\"6570\":\"SHU4 SHU3 CU4 SHUO4\",\"6571\":\"AI2 ZHU2\",\"6572\":\"QIAO1\",\"6573\":\"AI2\",\"6574\":\"ZHENG3\",\"6575\":\"DI2\",\"6576\":\"ZHEN4\",\"6577\":\"FU1\",\"6578\":\"SHU4 SHU3 CU4 SHUO4\",\"6579\":\"LIAO2\",\"6580\":\"ZHUO2\",\"6581\":\"YI4 DU4\",\"6582\":\"LIAN3 LIAN2 LIAN4\",\"6583\":\"BI4\",\"6584\":\"LI4 LI2 TAI2\",\"6585\":\"XIAO4 JIAO3\",\"6586\":\"XIAO4 JIAO3\",\"6587\":\"WEN2 WEN4\",\"6588\":\"XUE2\",\"6589\":\"QI2\",\"6590\":\"FEI3 FEI1\",\"6591\":\"BAN1\",\"6592\":\"BAN1\",\"6593\":\"LAN2\",\"6594\":\"YU3\",\"6595\":\"LAN2\",\"6596\":\"WEI3\",\"6597\":\"DOU3 DOU4\",\"6598\":\"SHENG1\",\"6599\":\"LIAO4 LIAO2\",\"6600\":\"YUN2\",\"6601\":\"BEI4\",\"6602\":\"ANG2\",\"6603\":\"ZE4\",\"6604\":\"BAN3\",\"6605\":\"JIE2\",\"6606\":\"KUN1 HUN4\",\"6607\":\"SHENG1\",\"6608\":\"HU4\",\"6609\":\"FANG3\",\"6610\":\"FEN1\",\"6611\":\"QIN3\",\"6612\":\"HU1\",\"6613\":\"YI4\",\"6614\":\"XI1 CUO4 XI2\",\"6615\":\"XIN1\",\"6616\":\"YAN2\",\"6617\":\"ZE4\",\"6618\":\"FANG3\",\"6619\":\"TAN2\",\"6620\":\"YING4\",\"6621\":\"XUAN4\",\"6622\":\"PEI3 PEI4\",\"6623\":\"ZHEN3\",\"6624\":\"LING1\",\"6625\":\"CHUN1 CHUN3\",\"6626\":\"HAO4\",\"6627\":\"MEI4\",\"6628\":\"ZUO2\",\"6629\":\"MO4\",\"6630\":\"SHI4 XIA4\",\"6631\":\"YU4 YI4\",\"6632\":\"FEI4\",\"6633\":\"DIE2 YI4\",\"6634\":\"MAO3\",\"6635\":\"NI4 NI3 ZHI4\",\"6636\":\"CHANG3 CHANG4\",\"6637\":\"WEN1 YUN4\",\"6638\":\"DONG1\",\"6639\":\"AI3\",\"6640\":\"TIAO3\",\"6641\":\"CHAO2\",\"6642\":\"SHI2\",\"6643\":\"HUANG3 HUANG4\",\"6644\":\"HUANG3\",\"6645\":\"XUAN1 XIAN3\",\"6646\":\"KUI2\",\"6647\":\"XU1 KUA1\",\"6648\":\"JIAO3\",\"6649\":\"JIN4\",\"6650\":\"GAI1\",\"6651\":\"XIANG3\",\"6652\":\"SHAI4\",\"6653\":\"XIAO3\",\"6654\":\"YE1 YE4\",\"6655\":\"YUN1 YUN4\",\"6656\":\"HUI1\",\"6657\":\"HAN2\",\"6658\":\"HAN4\",\"6659\":\"JUN4\",\"6660\":\"SHENG2\",\"6661\":\"BU1\",\"6662\":\"ZHE2 ZHE1 XI1 ZHI4\",\"6663\":\"ZHE1 ZHE2 ZHI4\",\"6664\":\"WU4\",\"6665\":\"HAN4\",\"6666\":\"HUI4\",\"6667\":\"HAO4\",\"6668\":\"CHEN2\",\"6669\":\"WAN3\",\"6670\":\"XI1\",\"6671\":\"SHAN3\",\"6672\":\"YI3 NI4\",\"6673\":\"XI4 XI1\",\"6674\":\"QING2\",\"6675\":\"QI3\",\"6676\":\"JING1\",\"6677\":\"GUI3\",\"6678\":\"ZHEN3 ZHENG3\",\"6679\":\"YI4\",\"6680\":\"WANG3 WANG4\",\"6681\":\"XIAO3\",\"6682\":\"ZAN4\",\"6684\":\"XUAN1\",\"6685\":\"XUAN3 GENG4 GENG3\",\"6686\":\"YI2\",\"6687\":\"XIA2 XIA4\",\"6688\":\"YUN1 YUN4\",\"6689\":\"HUI1\",\"6690\":\"WEI3\",\"6691\":\"SHU3\",\"6692\":\"QING2\",\"6693\":\"MAO4\",\"6694\":\"NAN2\",\"6695\":\"JIAN3 LAN2\",\"6696\":\"NUAN3 XUAN1\",\"6697\":\"AN4\",\"6698\":\"YANG2\",\"6699\":\"CHUN1\",\"6700\":\"ZUI4\",\"6701\":\"CAN3\",\"6702\":\"XU4\",\"6703\":\"HUI4 KUAI4 GUI4\",\"6704\":\"YIN4 YIN3\",\"6705\":\"QIE4\",\"6706\":\"FEN1\",\"6707\":\"PI2\",\"6708\":\"YUE4\",\"6709\":\"YOU3 YOU4\",\"6710\":\"QU2\",\"6712\":\"NV4\",\"6713\":\"TIAO4 TIAO3\",\"6714\":\"SHUO4\",\"6715\":\"ZHEN4\",\"6716\":\"LANG3\",\"6717\":\"LANG3\",\"6718\":\"JUAN1\",\"6719\":\"MING2\",\"6720\":\"YING1\",\"6721\":\"ZONG1\",\"6722\":\"WANG4\",\"6723\":\"TONG2\",\"6724\":\"LANG3\",\"6726\":\"MENG2\",\"6727\":\"LONG2 LONG3\",\"6728\":\"MU4\",\"6729\":\"DENG3\",\"6731\":\"ZHU1 SHU2\",\"6732\":\"REN2\",\"6733\":\"BA1\",\"6734\":\"PO4 PU2 PO1 PIAO2 PU3\",\"6735\":\"DUO3\",\"6736\":\"DUO3\",\"6737\":\"DAO1\",\"6738\":\"LI4 LE4\",\"6739\":\"QIU2 GUI3\",\"6740\":\"SHA1 SA4 SHAI4 SHE4\",\"6742\":\"ZA2\",\"6743\":\"QUAN2\",\"6744\":\"QIAN1\",\"6745\":\"YU2\",\"6746\":\"GAN1 GAN3\",\"6747\":\"WU1\",\"6748\":\"CHA1 CHA4\",\"6749\":\"SHAN1 SHA1\",\"6750\":\"CAI2\",\"6751\":\"CUN1\",\"6752\":\"REN4\",\"6753\":\"SHAO2 BIAO1 SHUO2\",\"6754\":\"TUO1\",\"6755\":\"DI4 DUO4\",\"6756\":\"ZHANG4\",\"6757\":\"MANG2\",\"6758\":\"CHI4 CHI1\",\"6759\":\"YI4\",\"6760\":\"GANG1 GANG4\",\"6761\":\"TIAO2\",\"6765\":\"LAI2 LAI4\",\"6767\":\"MANG2\",\"6768\":\"YANG2\",\"6769\":\"MA4 MA3\",\"6770\":\"JIE2\",\"6771\":\"DONG1\",\"6772\":\"GAO3\",\"6773\":\"YAO3\",\"6774\":\"XIAN1\",\"6775\":\"CHU3\",\"6776\":\"CHUN1 QUN1\",\"6777\":\"PA2 BA4\",\"6778\":\"SHU1\",\"6779\":\"HUA4\",\"6780\":\"SONG1\",\"6781\":\"JI2\",\"6782\":\"YUE4\",\"6783\":\"JIN4\",\"6784\":\"GOU1 GOU4\",\"6785\":\"JI1 JIAN1\",\"6786\":\"MAO2\",\"6787\":\"PI2 BI3 BI4\",\"6788\":\"BI4\",\"6789\":\"WANG3\",\"6790\":\"XI1\",\"6791\":\"HU4\",\"6792\":\"YA2 YA1\",\"6793\":\"DOU3 ZHU3\",\"6794\":\"XUN2\",\"6795\":\"ZHEN3 ZHEN4\",\"6796\":\"YAO1\",\"6797\":\"LIN2\",\"6798\":\"RUI4\",\"6799\":\"E3 E4 E2\",\"6800\":\"ZHI1\",\"6801\":\"LIU3\",\"6802\":\"MEI2\",\"6804\":\"RONG2\",\"6805\":\"ZHA4 CE4 SHA4 SHAN1\",\"6807\":\"BIAO1\",\"6808\":\"ZHAN4\",\"6809\":\"JIE2 ZHI4\",\"6810\":\"YONG3\",\"6811\":\"SHU4\",\"6812\":\"XUN2 SUN3\",\"6813\":\"SHUAN1\",\"6814\":\"QI4\",\"6815\":\"ZHEN1\",\"6816\":\"QI1 XI1\",\"6817\":\"LI4\",\"6818\":\"YI3 YI2\",\"6819\":\"XIANG2\",\"6820\":\"REN3\",\"6821\":\"XIAO4 JIAO3 JIAO4 XIAO2\",\"6822\":\"BO2 BO4 BAI3\",\"6823\":\"REN3\",\"6824\":\"BING4\",\"6825\":\"ZI1\",\"6826\":\"CHOU2\",\"6827\":\"YI4\",\"6828\":\"JIE2\",\"6829\":\"XU3\",\"6830\":\"FA2\",\"6831\":\"GONG3\",\"6832\":\"KAO3\",\"6833\":\"LAO3\",\"6834\":\"ZHAN1\",\"6835\":\"LI4\",\"6837\":\"YANG2 YANG4 XIANG4\",\"6838\":\"HE2 HU2\",\"6839\":\"GEN1\",\"6840\":\"JIE2\",\"6841\":\"HENG2 HANG2 HANG4\",\"6842\":\"GUI4\",\"6843\":\"TAO2\",\"6844\":\"GUANG4 GUANG1\",\"6845\":\"WEI2\",\"6846\":\"KUANG4 KUANG1\",\"6847\":\"RU2\",\"6848\":\"AN4\",\"6849\":\"AN1 AN4\",\"6850\":\"TONG2\",\"6851\":\"SANG1\",\"6852\":\"SANG1\",\"6853\":\"HUAN2\",\"6854\":\"JIE2 JU2 XIE2\",\"6855\":\"JIU4 GAO1\",\"6856\":\"XUE4\",\"6857\":\"DUO4 DUO3\",\"6858\":\"ZHUI4 CHUI2 DUI1\",\"6859\":\"YU2 MOU2\",\"6860\":\"YA2\",\"6861\":\"NAO2 RAO2\",\"6862\":\"ZHEN1 ZHENG1\",\"6863\":\"DANG3 DANG4\",\"6864\":\"QI1\",\"6865\":\"QIAO2\",\"6866\":\"HUA4\",\"6867\":\"KUAI4 GUI4 HUI4\",\"6868\":\"JIANG3\",\"6869\":\"ZHUANG1 CHONG1\",\"6870\":\"GUA1\",\"6871\":\"JING4\",\"6872\":\"BO2 PO5\",\"6873\":\"BEN4\",\"6874\":\"FU2\",\"6875\":\"RUI3\",\"6876\":\"TONG3\",\"6877\":\"JUE2\",\"6878\":\"XI1\",\"6879\":\"LANG2\",\"6880\":\"CU4\",\"6881\":\"LIANG2\",\"6882\":\"QIU2\",\"6883\":\"TING3 TING4\",\"6884\":\"YOU3\",\"6885\":\"MEI2\",\"6886\":\"BANG1\",\"6887\":\"LONG4\",\"6888\":\"PENG1\",\"6889\":\"ZHUANG1\",\"6890\":\"BI4\",\"6891\":\"DI2\",\"6892\":\"HAN2\",\"6893\":\"ZI3\",\"6894\":\"ZHI1\",\"6895\":\"REN4\",\"6896\":\"BEI4\",\"6897\":\"GENG3\",\"6898\":\"JIAN4 JIAN3\",\"6899\":\"HUAN4\",\"6900\":\"WAN3\",\"6901\":\"GUO3\",\"6902\":\"LU4\",\"6903\":\"HAO2\",\"6904\":\"JIE1\",\"6905\":\"YI3 YI1\",\"6906\":\"CHOU2\",\"6907\":\"JU3\",\"6908\":\"JU2\",\"6909\":\"CHENG2 SHENG4\",\"6910\":\"JU1\",\"6911\":\"BEI1 PI2 PI4\",\"6912\":\"JIAO1\",\"6913\":\"ZHUO2\",\"6914\":\"ZI1 ZI4\",\"6915\":\"BIN1\",\"6916\":\"PENG2\",\"6917\":\"DING4\",\"6918\":\"CHU3\",\"6920\":\"QIAN4\",\"6924\":\"LUO2\",\"6925\":\"ZHI1\",\"6930\":\"YE2 YE1\",\"6931\":\"FOU4\",\"6932\":\"WEI3\",\"6933\":\"WEI1\",\"6934\":\"DUAN4\",\"6935\":\"JIA3 JIA1\",\"6936\":\"ZONG1\",\"6937\":\"JIAN1 HAN2\",\"6938\":\"YI2\",\"6939\":\"SHEN4 ZHEN1\",\"6940\":\"YU3 JU3\",\"6941\":\"HE2\",\"6942\":\"ZHA1 CHA2 CHA1\",\"6943\":\"WO4\",\"6944\":\"PIAN2\",\"6945\":\"BI4\",\"6946\":\"YAO1\",\"6947\":\"HUO4\",\"6948\":\"XU1\",\"6949\":\"RUO4\",\"6950\":\"JIE4\",\"6951\":\"KUI2 KUI3\",\"6952\":\"SI1\",\"6953\":\"FENG1\",\"6954\":\"XIE1 XIE4\",\"6955\":\"TUO3\",\"6956\":\"ZHI4 JI2\",\"6957\":\"JIAN4 JIAN3\",\"6958\":\"MU4\",\"6959\":\"MAO4\",\"6960\":\"NAN2\",\"6961\":\"YU2\",\"6962\":\"YOU2\",\"6963\":\"MEI2\",\"6964\":\"SONG3\",\"6965\":\"XUAN4 YUAN2\",\"6966\":\"XUAN4\",\"6967\":\"YING1\",\"6968\":\"ZHEN1 ZHENG1\",\"6969\":\"PIAN2\",\"6970\":\"YU2\",\"6971\":\"COU4 ZOU4\",\"6972\":\"WEI1\",\"6973\":\"MEI2\",\"6974\":\"DI4\",\"6975\":\"JI2\",\"6976\":\"JIE2\",\"6977\":\"KAI3 JIE1\",\"6978\":\"QIU1\",\"6979\":\"YING2\",\"6980\":\"PIN3\",\"6982\":\"GAI4 GUI4 JIE2\",\"6983\":\"TAN2\",\"6984\":\"LAN3\",\"6985\":\"YUN2\",\"6986\":\"YU2\",\"6987\":\"CHEN4\",\"6988\":\"LV2\",\"6989\":\"JU3\",\"6990\":\"ZHAN3\",\"6991\":\"FU4 FU2\",\"6992\":\"NAI4\",\"6993\":\"MI4\",\"6994\":\"LANG2 LANG3\",\"6995\":\"RONG2\",\"6996\":\"GU3\",\"6997\":\"JIAN4\",\"6998\":\"JU3\",\"6999\":\"TA3\",\"7000\":\"YOU1\",\"7001\":\"YANG4 YANG3\",\"7002\":\"LU3\",\"7003\":\"SI4\",\"7004\":\"JIE2\",\"7005\":\"YING4 JIONG1 YING2\",\"7006\":\"DU2 DOU4\",\"7007\":\"WANG3\",\"7008\":\"HUI1\",\"7009\":\"XIE4\",\"7010\":\"JIAN1\",\"7011\":\"PU4 BAO4 BO2\",\"7012\":\"SE4\",\"7013\":\"CHENG2\",\"7014\":\"GU3\",\"7015\":\"BIN1\",\"7016\":\"HUO4\",\"7017\":\"XIAN4\",\"7018\":\"LU2\",\"7019\":\"QIN1 QIN4\",\"7020\":\"YING2\",\"7021\":\"SUI3\",\"7022\":\"WEI2\",\"7023\":\"XIE4\",\"7024\":\"HUAI2\",\"7025\":\"HAO4\",\"7026\":\"ZHU1\",\"7027\":\"LONG2 SHUANG1\",\"7028\":\"LAI4\",\"7029\":\"DUI4\",\"7030\":\"MI2 MI3\",\"7031\":\"JI4\",\"7032\":\"LIAN4\",\"7033\":\"JIAN4\",\"7034\":\"YING3 YING1 YING4\",\"7035\":\"FEN4\",\"7036\":\"LIN2\",\"7037\":\"YI4\",\"7038\":\"JIAN1\",\"7039\":\"YUE4 YAO4\",\"7040\":\"SHUANG4\",\"7041\":\"YUAN1\",\"7042\":\"ZHUO2 JIAO4\",\"7043\":\"FENG1\",\"7044\":\"SHE4 NI4\",\"7045\":\"LEI3\",\"7046\":\"LAN2\",\"7047\":\"CONG2\",\"7048\":\"QU2\",\"7049\":\"YONG1\",\"7051\":\"SA3 LI2 XIAN3 XI3 SHI1\",\"7052\":\"ZAN4\",\"7053\":\"LUAN2\",\"7054\":\"YAN4\",\"7055\":\"LI2\",\"7056\":\"MI3\",\"7057\":\"SHAN4\",\"7058\":\"TAN1 HAN4 NAN4\",\"7059\":\"DANG3\",\"7060\":\"LAN3\",\"7061\":\"LAN2\",\"7062\":\"NANG3\",\"7063\":\"WAN1\",\"7064\":\"LUAN2\",\"7065\":\"XUN2\",\"7066\":\"XIAN3\",\"7067\":\"YAN4\",\"7068\":\"GAN3 GAN4 GONG4\",\"7069\":\"YAN4\",\"7070\":\"HUI1\",\"7071\":\"XIAO1\",\"7072\":\"XIAO1\",\"7074\":\"HONG2\",\"7075\":\"LING2 LING4\",\"7076\":\"ZAO4\",\"7077\":\"ZHUAN4\",\"7078\":\"JIU3\",\"7079\":\"ZHA4\",\"7080\":\"YANG2 YANG4\",\"7081\":\"QI4\",\"7082\":\"ZHONG1\",\"7083\":\"FEN2\",\"7084\":\"NIU3\",\"7085\":\"JIONG3 GENG3 GUI4\",\"7086\":\"WEN2\",\"7087\":\"PO4\",\"7088\":\"YI4\",\"7089\":\"LU2\",\"7090\":\"PANG4\",\"7091\":\"MU4\",\"7092\":\"CHAO3\",\"7093\":\"LIAO4\",\"7094\":\"GUI4 XUE4 QUE1 GENG3\",\"7095\":\"KANG4 HANG1\",\"7096\":\"TUN2 DUN4 TUN1\",\"7097\":\"GUANG1\",\"7098\":\"XIN1\",\"7099\":\"ZHI4\",\"7100\":\"HU2\",\"7102\":\"SHU2\",\"7103\":\"HE4\",\"7104\":\"XUN1 HUN1\",\"7105\":\"KU4\",\"7106\":\"JUE2\",\"7107\":\"XIAO1\",\"7108\":\"XI1 YI2\",\"7109\":\"YAN1 YI2\",\"7110\":\"WU4\",\"7113\":\"HAN2\",\"7114\":\"YAN4\",\"7115\":\"HUAN4\",\"7116\":\"MEN4\",\"7117\":\"JU2\",\"7118\":\"CHOU2 TAO1\",\"7119\":\"BEI4\",\"7120\":\"CUI4\",\"7121\":\"WU2 MO2\",\"7122\":\"HONG1\",\"7123\":\"JU4\",\"7124\":\"FU3\",\"7125\":\"WO4\",\"7126\":\"JIAO1 QIAO2\",\"7127\":\"CONG1\",\"7128\":\"FENG4\",\"7129\":\"PING1\",\"7130\":\"YAN4\",\"7131\":\"YAN4 BIAO1 YI4\",\"7132\":\"YI4\",\"7133\":\"JUE2 JIAO1\",\"7134\":\"YU4\",\"7135\":\"GANG4\",\"7136\":\"RAN2\",\"7137\":\"PI2\",\"7138\":\"GU3\",\"7141\":\"CHEN2 SHEN2\",\"7142\":\"HE4\",\"7143\":\"KUI3\",\"7144\":\"ZHONG1\",\"7145\":\"DUAN4\",\"7146\":\"XIA1 XIA4\",\"7147\":\"HUI1 XUN1 YUN4\",\"7148\":\"FENG4\",\"7149\":\"LIAN4 LAN4\",\"7150\":\"YING1\",\"7151\":\"ZHU3\",\"7152\":\"WEI3 HUI1\",\"7153\":\"TUAN1\",\"7154\":\"TIAN4 QIAN2 SHAN1 SHAN3\",\"7155\":\"XI1\",\"7156\":\"NUAN3 XUAN1\",\"7157\":\"NUAN3\",\"7158\":\"CHAN2\",\"7159\":\"YAN1\",\"7160\":\"YE4 ZHA2\",\"7161\":\"XIN4\",\"7162\":\"QIONG2\",\"7163\":\"ROU3\",\"7164\":\"MEI2\",\"7165\":\"HUAN4\",\"7166\":\"XU3 XU4 XIU1\",\"7167\":\"ZHAO4\",\"7168\":\"WEI1 YU4\",\"7169\":\"FAN2\",\"7170\":\"GAO4\",\"7171\":\"GUA1\",\"7172\":\"BAO1 BAO4\",\"7173\":\"HU2\",\"7174\":\"YUN1 YUN4 WEN3\",\"7175\":\"XIA1\",\"7178\":\"BIAN1\",\"7179\":\"GOU4\",\"7180\":\"HUANG3\",\"7181\":\"XIE2\",\"7182\":\"XI4\",\"7183\":\"WU4\",\"7184\":\"XI2 XI1\",\"7185\":\"YUN4 YUN2 YUN1\",\"7186\":\"HE2\",\"7187\":\"HE4\",\"7188\":\"XI1\",\"7189\":\"YUN2\",\"7190\":\"MI4\",\"7191\":\"LIAN2\",\"7192\":\"YING2 XING2 JIONG3\",\"7193\":\"WU3 WEN4\",\"7194\":\"RONG2\",\"7197\":\"QIANG4\",\"7198\":\"LIU1 LIU4\",\"7199\":\"XI1 YI2\",\"7200\":\"HE4\",\"7201\":\"LAN4\",\"7202\":\"BIAO1\",\"7203\":\"RONG2\",\"7204\":\"LI4\",\"7205\":\"MO4\",\"7206\":\"BAO4 BO2\",\"7207\":\"RUO4 RE4\",\"7208\":\"LV2\",\"7209\":\"LA4 LIE4\",\"7210\":\"LU2\",\"7211\":\"JUE2\",\"7212\":\"LIAO4\",\"7213\":\"YAN4 QIAN2 XUN2\",\"7214\":\"XI1\",\"7215\":\"XIE4\",\"7216\":\"LONG2\",\"7217\":\"YE4\",\"7219\":\"RANG3\",\"7221\":\"CHE4\",\"7222\":\"MI2\",\"7223\":\"TANG3\",\"7224\":\"LAN4\",\"7225\":\"ZHU2\",\"7227\":\"LING2\",\"7228\":\"CUAN4\",\"7229\":\"YU4\",\"7230\":\"YUAN2\",\"7231\":\"AI4\",\"7232\":\"WEI4 WEI2\",\"7234\":\"JUE2\",\"7235\":\"JUE2\",\"7236\":\"FU4 FU3\",\"7237\":\"YE2\",\"7238\":\"BA4\",\"7239\":\"DIE1\",\"7240\":\"CHUANG2\",\"7241\":\"GE1\",\"7242\":\"ZANG1\",\"7243\":\"DIE2\",\"7244\":\"QIANG1\",\"7245\":\"YONG2\",\"7246\":\"QIANG2\",\"7247\":\"PIAN4 PIAN1 PAN4\",\"7248\":\"BAN3\",\"7249\":\"PAN4\",\"7250\":\"ZHA2\",\"7251\":\"BIAN1\",\"7252\":\"DIE2\",\"7253\":\"BANG3\",\"7254\":\"BO2\",\"7255\":\"CHUANG1 CONG1\",\"7256\":\"YOU3\",\"7258\":\"DU2\",\"7259\":\"YA2 YA4\",\"7260\":\"TUO2 TA1 TUO1\",\"7261\":\"MU3\",\"7262\":\"LAO2 LAO4 LOU2\",\"7263\":\"REN4\",\"7264\":\"MANG2 MANG1\",\"7265\":\"FANG1\",\"7266\":\"MAO2 LI2\",\"7267\":\"MU4\",\"7268\":\"GANG1\",\"7269\":\"WU4\",\"7270\":\"YOU4 CHOU1\",\"7271\":\"GE1\",\"7272\":\"SHENG1\",\"7273\":\"MU3\",\"7274\":\"DI3\",\"7275\":\"QIAN1 QIAN4\",\"7276\":\"QUAN4\",\"7277\":\"QUAN2\",\"7278\":\"ZI4\",\"7279\":\"TE4\",\"7280\":\"XI1\",\"7281\":\"LI2\",\"7282\":\"LI2\",\"7283\":\"POU3\",\"7284\":\"JI1 YI1\",\"7285\":\"GANG1\",\"7286\":\"ZHI2 TE4\",\"7287\":\"BEN1\",\"7288\":\"QUAN2\",\"7289\":\"RUN2\",\"7290\":\"KE1\",\"7291\":\"JU2\",\"7292\":\"KAO4\",\"7293\":\"CHU2\",\"7294\":\"XI4\",\"7295\":\"BEI4\",\"7296\":\"LUO4\",\"7297\":\"JIE4\",\"7298\":\"MA2\",\"7299\":\"SAN1\",\"7300\":\"SHA1\",\"7301\":\"LI4\",\"7302\":\"HAN4\",\"7303\":\"XIAN3\",\"7304\":\"JING1\",\"7305\":\"PAI2\",\"7306\":\"FEI1\",\"7307\":\"YAO2 XIAO1\",\"7308\":\"BA4\",\"7309\":\"QI2\",\"7310\":\"QIANG1\",\"7311\":\"KUN1\",\"7312\":\"YAN1 YA1 YAN4\",\"7313\":\"GUO3 LUO3\",\"7314\":\"ZONG4\",\"7315\":\"MI2\",\"7316\":\"CHANG1\",\"7317\":\"YI1 E1 WEI1 YI3 JI4\",\"7318\":\"ZHI4\",\"7319\":\"ZHENG1\",\"7321\":\"LUO2\",\"7322\":\"HU2\",\"7323\":\"ZONG1\",\"7324\":\"JI4\",\"7325\":\"WEI3 WEI4\",\"7326\":\"FENG1\",\"7327\":\"WO1\",\"7328\":\"YUAN2\",\"7329\":\"XING1\",\"7330\":\"YA4\",\"7331\":\"NAO2\",\"7332\":\"XIE1 XIE2 HE4\",\"7333\":\"JIA1\",\"7334\":\"HOU2\",\"7335\":\"BIAN1\",\"7336\":\"YOU2 YAO2\",\"7337\":\"YOU2\",\"7338\":\"MEI2\",\"7339\":\"ZHA1\",\"7340\":\"SOU1\",\"7341\":\"MA4 MA3\",\"7342\":\"YUAN2 HUAN2\",\"7343\":\"DAI1 AI2\",\"7344\":\"YU4\",\"7345\":\"SHI1\",\"7346\":\"HAO2\",\"7348\":\"YI4\",\"7349\":\"ZHEN1\",\"7350\":\"ZHANG1\",\"7351\":\"CHAN2\",\"7352\":\"AO2\",\"7353\":\"AO2\",\"7354\":\"HAO2\",\"7355\":\"CUI1\",\"7356\":\"FEN2 BEN4\",\"7357\":\"JUE2\",\"7358\":\"BI4\",\"7359\":\"BI4\",\"7360\":\"LIAO2 LAO3\",\"7361\":\"SHUO4 XI1 QUE4\",\"7362\":\"XIAO1\",\"7365\":\"XI2\",\"7366\":\"GE2\",\"7367\":\"JUAN4\",\"7368\":\"DU2\",\"7369\":\"HUI4\",\"7370\":\"NING2\",\"7371\":\"PIN2 BIAN1 BIN1\",\"7372\":\"HUO4\",\"7373\":\"NOU4\",\"7374\":\"MENG2 MENG3\",\"7375\":\"LIE4\",\"7376\":\"NAO2\",\"7377\":\"GUANG3 JING3\",\"7378\":\"SHOU4\",\"7379\":\"LU2\",\"7380\":\"LUO2 E3\",\"7381\":\"XIAN3\",\"7382\":\"QI2\",\"7383\":\"JUE2\",\"7384\":\"XUAN2 XUAN4\",\"7385\":\"MIAO4\",\"7386\":\"ZI1 CI1 XUAN2\",\"7387\":\"LV4 SHUAI4 LVE4\",\"7388\":\"LU2\",\"7389\":\"YU4\",\"7390\":\"BA1\",\"7391\":\"JI1\",\"7392\":\"HONG2\",\"7393\":\"DI4\",\"7394\":\"CHUAN4 QUAN4\",\"7395\":\"GAN1\",\"7396\":\"JIU3\",\"7397\":\"YU2\",\"7398\":\"JI3 QI3\",\"7399\":\"YU2\",\"7400\":\"HAN2 HAN4\",\"7401\":\"XUAN2\",\"7402\":\"YAN2\",\"7403\":\"QIU2\",\"7404\":\"QUAN3 JUAN1 XUAN4\",\"7405\":\"LANG2 LANG4\",\"7406\":\"LI3\",\"7407\":\"XIU4\",\"7408\":\"FU2\",\"7409\":\"LIU2\",\"7410\":\"SUO3\",\"7413\":\"WAN2\",\"7414\":\"DIAN4\",\"7415\":\"PIN2 BING3\",\"7416\":\"ZHAN3\",\"7417\":\"CUI4\",\"7418\":\"MIN2\",\"7419\":\"YU4\",\"7420\":\"DIAN3\",\"7421\":\"CHU4\",\"7422\":\"ZHUO2 ZUO2\",\"7423\":\"PEI3\",\"7424\":\"CHENG1\",\"7425\":\"HU3\",\"7426\":\"QI2\",\"7427\":\"E4\",\"7428\":\"KUN1\",\"7429\":\"CHANG1\",\"7430\":\"YAN3\",\"7431\":\"DIAO1\",\"7432\":\"BEI4\",\"7433\":\"LIN2\",\"7434\":\"QIN2\",\"7435\":\"PI2\",\"7436\":\"PA2\",\"7437\":\"QUE4\",\"7438\":\"ZHUO2\",\"7439\":\"QIN2\",\"7440\":\"YU3\",\"7441\":\"MAO4 MEI4\",\"7442\":\"MEI2\",\"7444\":\"XUAN1\",\"7445\":\"TI2\",\"7446\":\"XING1\",\"7447\":\"DAI4\",\"7448\":\"ROU2\",\"7449\":\"MIN2\",\"7450\":\"JIAN3\",\"7451\":\"ZHUAN4\",\"7452\":\"YANG2 CHANG4 DANG4\",\"7453\":\"LIAN4\",\"7454\":\"QUAN2\",\"7455\":\"XIA2\",\"7456\":\"DUAN4\",\"7457\":\"YUAN4 HUAN2\",\"7458\":\"YE2\",\"7459\":\"NAO3\",\"7460\":\"LIU2\",\"7462\":\"RONG2\",\"7463\":\"SUO3\",\"7464\":\"YAO2\",\"7465\":\"WEN1\",\"7466\":\"WU1\",\"7467\":\"JIN1\",\"7468\":\"JIN4\",\"7469\":\"YING2 YING3\",\"7470\":\"GUI1\",\"7471\":\"TIAN4 ZHEN4\",\"7472\":\"QIANG1\",\"7473\":\"CUO3 CUO1\",\"7474\":\"JUE2\",\"7475\":\"ZHAO3\",\"7476\":\"YAO2\",\"7477\":\"AI4\",\"7478\":\"BIN1\",\"7479\":\"TU2\",\"7480\":\"CUI3\",\"7481\":\"CONG1\",\"7482\":\"QI2\",\"7483\":\"LI2 LI5\",\"7484\":\"YING3\",\"7485\":\"SUO3\",\"7486\":\"QIU2\",\"7487\":\"XUAN2\",\"7488\":\"AO2\",\"7489\":\"LIAN2 LIAN3\",\"7490\":\"LU4\",\"7491\":\"WU2\",\"7492\":\"DENG1\",\"7494\":\"ZENG1\",\"7495\":\"XUN2\",\"7496\":\"QU2\",\"7497\":\"DANG4\",\"7498\":\"LIN2\",\"7499\":\"LIAO2\",\"7500\":\"ZHUI4\",\"7501\":\"PING2\",\"7502\":\"BIAN1 PIAN1\",\"7503\":\"ZHOU4\",\"7504\":\"ZHEN1 ZHEN4 JUAN4\",\"7506\":\"CI2\",\"7507\":\"YING1\",\"7508\":\"QI4\",\"7509\":\"XIAN2\",\"7510\":\"LIN2\",\"7511\":\"ZENG4\",\"7512\":\"WU3\",\"7513\":\"PI4\",\"7514\":\"DAN1\",\"7515\":\"WENG4\",\"7516\":\"YING1\",\"7517\":\"YAN3\",\"7518\":\"GAN1\",\"7519\":\"DAI4\",\"7520\":\"QING2\",\"7521\":\"SHEN1 SHENG1\",\"7522\":\"CHAN3\",\"7523\":\"CHAN3\",\"7524\":\"RUI2\",\"7525\":\"SHENG1\",\"7526\":\"SU1\",\"7527\":\"SEN1\",\"7528\":\"YONG4\",\"7529\":\"SHUAI3\",\"7530\":\"TIAN2\",\"7531\":\"YOU2 YAO1\",\"7532\":\"JIA3\",\"7533\":\"SHEN1\",\"7534\":\"ZHA2\",\"7535\":\"DIAN4\",\"7536\":\"FU2\",\"7537\":\"NAN2\",\"7538\":\"DIAN4 SHENG4 TIAN2 YING4\",\"7539\":\"PING2 PING1\",\"7540\":\"BI4\",\"7541\":\"QI2 BI4\",\"7542\":\"LIU4 JIU4 MU3\",\"7543\":\"XUN2\",\"7544\":\"LIU2\",\"7545\":\"CHANG4\",\"7546\":\"MU3\",\"7547\":\"YUN2\",\"7548\":\"FAN4\",\"7549\":\"FU2\",\"7550\":\"FU2\",\"7551\":\"TIAN2\",\"7552\":\"MU3\",\"7554\":\"PAN4\",\"7555\":\"JIANG1\",\"7556\":\"WA1\",\"7557\":\"DA2 FU2\",\"7558\":\"NAN2\",\"7559\":\"LIU2 LIU3 LIU4\",\"7561\":\"GAI1\",\"7562\":\"BI4\",\"7563\":\"DA2\",\"7564\":\"ZHI4\",\"7565\":\"LVE4\",\"7566\":\"QI2 XI2\",\"7567\":\"LVE4\",\"7568\":\"PAN1 FAN1\",\"7570\":\"YI4\",\"7571\":\"LIU2 LIU3\",\"7572\":\"YU2 SHE1\",\"7573\":\"DIE2\",\"7574\":\"CHOU2\",\"7575\":\"HUA4\",\"7576\":\"DANG1 DANG4\",\"7577\":\"CHUO4 ZHUO2\",\"7578\":\"JI1 QI2\",\"7579\":\"WAN3 YUAN4\",\"7580\":\"CHA1\",\"7581\":\"LIU2\",\"7583\":\"TUAN3\",\"7584\":\"LIN2\",\"7585\":\"JIANG1\",\"7586\":\"JIANG1 QIANG2 JIANG4\",\"7587\":\"CHOU2\",\"7588\":\"BO4 PI4\",\"7589\":\"DIE2\",\"7590\":\"ZHI4 DI4\",\"7591\":\"YI2 NI3 NING2\",\"7592\":\"CHUANG2\",\"7593\":\"NAI3\",\"7594\":\"DING1 NE4\",\"7595\":\"BI3\",\"7596\":\"JIE2\",\"7597\":\"LIAO2\",\"7598\":\"GANG1 GONG1\",\"7599\":\"GE1 YI4\",\"7600\":\"YU1\",\"7601\":\"CUI4\",\"7602\":\"YA3\",\"7603\":\"ZHU2 ZHU3\",\"7604\":\"CU4\",\"7605\":\"DAN4 DAN3 DAN1\",\"7606\":\"SHEN4\",\"7607\":\"ZHONG3\",\"7608\":\"JI4 CHI4 ZHI4\",\"7609\":\"YU4\",\"7610\":\"YU3\",\"7611\":\"GUA1\",\"7612\":\"WEN2\",\"7613\":\"HUAN4\",\"7614\":\"KU4\",\"7615\":\"JIA3 XIA2 XIA1\",\"7616\":\"YIN1\",\"7617\":\"YI4\",\"7618\":\"LV2 LOU4\",\"7619\":\"SAO1 SAO4\",\"7620\":\"JI2 ZI4\",\"7621\":\"CHUANG1\",\"7622\":\"BAN1\",\"7623\":\"LEI3\",\"7624\":\"LIU2\",\"7625\":\"CHAI4 CUO2\",\"7626\":\"SHOU4\",\"7627\":\"NVE4 YAO4\",\"7628\":\"DIAN1\",\"7629\":\"DA5 DA1 DA2\",\"7630\":\"LUO3\",\"7631\":\"YI4\",\"7632\":\"ZONG4\",\"7633\":\"CHOU1 LU4\",\"7634\":\"ZHANG4\",\"7635\":\"ZHAI4 JI4\",\"7636\":\"SOU4\",\"7637\":\"SUO3\",\"7638\":\"QUE2\",\"7639\":\"DIAO4\",\"7640\":\"HUANG2\",\"7641\":\"FU2\",\"7642\":\"LIAO2 SHUO4\",\"7643\":\"LONG2\",\"7644\":\"QIAO2\",\"7645\":\"LIU2\",\"7646\":\"LAO2 LAO4\",\"7647\":\"XIAN2\",\"7648\":\"FEI4\",\"7649\":\"DAN4 DAN1 DAN3 TAN2\",\"7650\":\"GUAI4\",\"7651\":\"NONG2\",\"7652\":\"YU4\",\"7653\":\"WEI2\",\"7654\":\"YI4\",\"7655\":\"YONG1\",\"7656\":\"PI3\",\"7657\":\"LEI3\",\"7658\":\"LI4\",\"7659\":\"SHU3\",\"7660\":\"JI4 JI2\",\"7661\":\"CHI1\",\"7662\":\"YANG3\",\"7663\":\"XIAN3 XUAN3\",\"7664\":\"JIE2\",\"7665\":\"ZHENG1\",\"7667\":\"LI4\",\"7668\":\"HUO4\",\"7669\":\"LAI4 LA4\",\"7670\":\"YONG1\",\"7671\":\"TAN1\",\"7672\":\"DIAN1\",\"7673\":\"LUO3\",\"7674\":\"LUAN2\",\"7675\":\"LUAN2\",\"7676\":\"BO1\",\"7678\":\"GUI3\",\"7679\":\"PO1 BA2\",\"7680\":\"BI1 JI2\",\"7681\":\"ZAO4\",\"7682\":\"ZAO4\",\"7683\":\"MAO4\",\"7684\":\"DE5 DI2 DI4\",\"7685\":\"PA1\",\"7686\":\"JIE1\",\"7687\":\"HUANG2 WANG3\",\"7688\":\"GUI1\",\"7689\":\"CI3\",\"7690\":\"GAO1\",\"7691\":\"AI2\",\"7692\":\"E2\",\"7693\":\"HAO4 HUI1\",\"7694\":\"HAN4\",\"7695\":\"BI1\",\"7696\":\"WAN3 HUAN4\",\"7697\":\"CHOU2\",\"7698\":\"QIAN4\",\"7699\":\"XI1\",\"7700\":\"MING2\",\"7701\":\"SHENG3 XIAN3 XING3\",\"7702\":\"SHI4\",\"7703\":\"YUN2\",\"7704\":\"MIAN3\",\"7705\":\"PAN1\",\"7706\":\"FANG3\",\"7707\":\"MIAO3 MIAO4\",\"7708\":\"DAN1 TAN2 CHEN3\",\"7709\":\"MEI2\",\"7710\":\"ZHENG1\",\"7711\":\"YAO3\",\"7712\":\"SHEN4\",\"7713\":\"HUO4\",\"7714\":\"DA4\",\"7715\":\"ZHEN3\",\"7716\":\"KUANG4\",\"7717\":\"JU1\",\"7718\":\"SHEN4\",\"7719\":\"CHI4 YI2 DENG4\",\"7720\":\"MIAN2 MIAN3 MIN3\",\"7721\":\"DI1\",\"7722\":\"YUAN1\",\"7723\":\"DIE2\",\"7724\":\"YI2\",\"7725\":\"ZI4\",\"7726\":\"ZI4\",\"7727\":\"CHAO3\",\"7728\":\"ZHA3\",\"7729\":\"XUAN4 HUAN4 JUAN4\",\"7730\":\"DIE2\",\"7731\":\"YI2\",\"7732\":\"ER4 NE4\",\"7733\":\"MING3 MING2\",\"7734\":\"XUAN4 SHUN4\",\"7735\":\"CHI1\",\"7736\":\"KUANG4\",\"7737\":\"JUAN4\",\"7738\":\"MOU2\",\"7739\":\"ZHEN4\",\"7740\":\"ZHAO2 ZHE5 ZHAO1 ZHUO2\",\"7741\":\"ZHENG1\",\"7742\":\"MEI2\",\"7743\":\"JUN4 SUO1\",\"7744\":\"SHAO4 QIAO2\",\"7745\":\"HAN4\",\"7746\":\"HUAN3\",\"7747\":\"DI4 TI1 TI2\",\"7748\":\"CHENG3\",\"7749\":\"CUO1\",\"7750\":\"LAI4\",\"7751\":\"JIAN3\",\"7752\":\"SHAN3\",\"7753\":\"TIAN3\",\"7754\":\"HUN3 GUN3\",\"7755\":\"WAN3 WAN1\",\"7756\":\"LING2 LENG4\",\"7757\":\"SHI4\",\"7758\":\"QIONG2\",\"7759\":\"LIE4\",\"7760\":\"JUAN4\",\"7761\":\"SHUI4\",\"7762\":\"SUI1\",\"7763\":\"DU1\",\"7764\":\"BI4\",\"7765\":\"BI4 PI4\",\"7766\":\"MU4\",\"7767\":\"HUN1\",\"7768\":\"NI4\",\"7769\":\"LU4\",\"7770\":\"MA4\",\"7771\":\"XIA4 JIA3\",\"7772\":\"XING3\",\"7773\":\"XI1\",\"7774\":\"GUN4\",\"7776\":\"CHUN3\",\"7777\":\"JIAN1\",\"7778\":\"MEI4\",\"7779\":\"DU3\",\"7780\":\"MAO4 WU2 MOU4\",\"7781\":\"XU4\",\"7782\":\"FA1 FA2\",\"7783\":\"WEN1\",\"7784\":\"MIAO2\",\"7785\":\"CHOU3\",\"7786\":\"KUI4 GUI4\",\"7787\":\"MI1\",\"7788\":\"WENG3\",\"7789\":\"KOU4\",\"7790\":\"MAO4\",\"7791\":\"MING2 MING3 MIAN2 MIAN4 MENG2\",\"7792\":\"MAN2 MEN2 MEN4\",\"7793\":\"SHUI4\",\"7794\":\"ZE2\",\"7795\":\"ZHANG4\",\"7796\":\"YI4\",\"7797\":\"DIAO1\",\"7798\":\"OU1\",\"7799\":\"MO4\",\"7800\":\"DANG4\",\"7801\":\"MA3\",\"7802\":\"SHA1\",\"7803\":\"DAN1\",\"7804\":\"JUE2\",\"7805\":\"LI4\",\"7806\":\"FU1\",\"7807\":\"MIN2\",\"7808\":\"NUO3\",\"7809\":\"HUO4 HUA1 XU1\",\"7810\":\"E4\",\"7811\":\"YA4\",\"7812\":\"PI1\",\"7813\":\"ZHE2\",\"7814\":\"YAN2 YAN4 XING2\",\"7815\":\"SUI4\",\"7816\":\"ZHUAN1 TUAN2 TUO2\",\"7817\":\"CHE1\",\"7818\":\"DUN4\",\"7819\":\"PAN1\",\"7820\":\"QU1 JU1\",\"7821\":\"YU4\",\"7822\":\"LUO3 KE1\",\"7823\":\"TUO2\",\"7824\":\"TUO2\",\"7825\":\"DI3 ZHI3\",\"7826\":\"ZHAI4\",\"7827\":\"ZHEN1\",\"7828\":\"AI4\",\"7829\":\"FEI4 FU2\",\"7830\":\"PENG1 PING1 PENG4\",\"7831\":\"LING2\",\"7832\":\"PAO4\",\"7833\":\"LE4\",\"7834\":\"PO4\",\"7835\":\"BO1\",\"7836\":\"PO4\",\"7837\":\"SHEN1\",\"7838\":\"ZA2\",\"7839\":\"NUO3 AI4\",\"7840\":\"CHU3\",\"7841\":\"KENG1\",\"7842\":\"QUAN2\",\"7843\":\"ZHU1\",\"7844\":\"KUANG1\",\"7845\":\"GUI1 HUO4 HE4\",\"7846\":\"E4\",\"7847\":\"NAO2\",\"7848\":\"JIA2\",\"7849\":\"LU4\",\"7850\":\"TONG2 DONG3 DONG4\",\"7851\":\"PENG1\",\"7852\":\"XI1\",\"7854\":\"HONG2\",\"7855\":\"SHUO4 SHI2\",\"7856\":\"XIA2\",\"7857\":\"QIAO1\",\"7859\":\"WEI4 AI2 WEI2\",\"7860\":\"LANG3 LANG2\",\"7861\":\"HONG2 HONG1\",\"7862\":\"YU2\",\"7863\":\"XIAO1\",\"7864\":\"XIA2\",\"7865\":\"MANG3\",\"7866\":\"LONG4\",\"7867\":\"YONG3 TONG2\",\"7868\":\"CHE1\",\"7869\":\"CHE4\",\"7870\":\"SHA1\",\"7871\":\"KUN3\",\"7872\":\"YU4\",\"7875\":\"LU3\",\"7876\":\"CHEN3 CEN2\",\"7877\":\"JIAN3\",\"7878\":\"NVE4\",\"7879\":\"SONG1\",\"7880\":\"CENG2\",\"7881\":\"QI2\",\"7882\":\"ZONG4\",\"7883\":\"QING4\",\"7884\":\"LIN2\",\"7885\":\"JUN1\",\"7886\":\"BO1\",\"7887\":\"DING4\",\"7888\":\"MIN2\",\"7889\":\"DIAO1\",\"7890\":\"LING2 LENG2\",\"7891\":\"BEI1\",\"7892\":\"YIN2\",\"7893\":\"DUI4 DUI1\",\"7894\":\"WU3\",\"7895\":\"QI2\",\"7896\":\"LUN4\",\"7897\":\"WAN3\",\"7898\":\"DIAN3\",\"7899\":\"GANG1\",\"7901\":\"JIAO1\",\"7903\":\"ZHANG3\",\"7904\":\"QIAO2\",\"7905\":\"DUN1\",\"7906\":\"XIAN3 JIAN3\",\"7907\":\"YU4\",\"7908\":\"ZHUI4\",\"7909\":\"HE2\",\"7910\":\"QUE4\",\"7911\":\"DANG4\",\"7912\":\"YI3\",\"7913\":\"JIANG1\",\"7914\":\"PI4\",\"7915\":\"PI1\",\"7916\":\"YU4\",\"7917\":\"PIN1\",\"7918\":\"QI4\",\"7919\":\"AI4\",\"7920\":\"CI2\",\"7921\":\"BO2\",\"7923\":\"MIE4\",\"7924\":\"CA3\",\"7925\":\"XIAN2\",\"7926\":\"KUANG4\",\"7927\":\"LEI4 LEI2 LEI3\",\"7928\":\"LEI3\",\"7929\":\"ZHI4\",\"7930\":\"LI4\",\"7931\":\"LONG2\",\"7932\":\"LONG2\",\"7933\":\"MO4\",\"7934\":\"BO2\",\"7935\":\"SHUANG1\",\"7936\":\"GUAN4\",\"7937\":\"LAN2\",\"7938\":\"ZAN3\",\"7939\":\"YAN2\",\"7940\":\"SI4\",\"7941\":\"QI2 ZHI3\",\"7942\":\"TA1\",\"7943\":\"MA4\",\"7944\":\"XIE4\",\"7945\":\"YAO1 XIAN1\",\"7946\":\"XIAN1 YAO1\",\"7947\":\"QI2 CHI2 ZHI1 ZHI3\",\"7948\":\"QI2 GUI3\",\"7949\":\"ZHI3\",\"7950\":\"YOU4\",\"7951\":\"ZHI4\",\"7952\":\"TIAO2\",\"7953\":\"FU2 FEI4\",\"7954\":\"FU4\",\"7955\":\"MI4\",\"7956\":\"ZU3 JIE1\",\"7957\":\"ZHI1\",\"7958\":\"SUAN4\",\"7959\":\"MEI4\",\"7960\":\"CI2 SI4\",\"7961\":\"CHAI2\",\"7962\":\"MI2 NI3\",\"7963\":\"LV3\",\"7964\":\"YU3 XU3\",\"7965\":\"XIANG2\",\"7966\":\"WU2\",\"7967\":\"TIAO1\",\"7968\":\"PIAO4 PIAO1\",\"7969\":\"ZHU1\",\"7970\":\"GAO4\",\"7971\":\"SHUI4\",\"7972\":\"JIN1 JIN4\",\"7973\":\"CHEN3\",\"7974\":\"GAI1\",\"7975\":\"KUN3 HUN2\",\"7976\":\"DI4\",\"7977\":\"DAO3\",\"7978\":\"HUO4\",\"7979\":\"TAO2\",\"7980\":\"BING3 BIN3 LIN3\",\"7981\":\"JIN4 JIN1\",\"7982\":\"DAO3\",\"7983\":\"ZHI2\",\"7984\":\"LU4\",\"7985\":\"SHAN4 CHAN2\",\"7986\":\"BEI1\",\"7987\":\"ZHE3 ZHU3 CHU3\",\"7988\":\"HUI1\",\"7989\":\"YOU3 CHAO3\",\"7990\":\"YUAN4\",\"7991\":\"WU2\",\"7992\":\"XIAN3\",\"7993\":\"YANG2\",\"7994\":\"TI2 ZHI1\",\"7995\":\"YI1\",\"7996\":\"MEI2\",\"7997\":\"SI1\",\"7998\":\"DI4\",\"8000\":\"YAO4\",\"8001\":\"LAO3\",\"8003\":\"KAO3\",\"8004\":\"MAO4\",\"8005\":\"ZHE3 ZHU1\",\"8006\":\"QI2 SHI4 ZHI3\",\"8007\":\"GOU3\",\"8008\":\"GOU3\",\"8009\":\"GOU3\",\"8010\":\"NAI4 NENG2\",\"8011\":\"ZHUAN1 DUAN1\",\"8012\":\"LEI3\",\"8013\":\"TING1\",\"8014\":\"ZI3\",\"8015\":\"GENG1\",\"8016\":\"CHAO4\",\"8017\":\"HAO4 MAO2 MAO4\",\"8018\":\"YUN2\",\"8019\":\"BA4 PA2 BA3\",\"8020\":\"HE2 HUO1\",\"8021\":\"CHU2\",\"8022\":\"LAO4\",\"8023\":\"LUN3\",\"8024\":\"JI2 JIE4\",\"8025\":\"TANG3\",\"8026\":\"OU3\",\"8027\":\"LOU2\",\"8028\":\"NOU4\",\"8029\":\"JIANG3 GOU1\",\"8030\":\"YOU1\",\"8031\":\"MO4\",\"8032\":\"HUAI2\",\"8033\":\"ER3 RENG2\",\"8034\":\"ZHE2\",\"8035\":\"TING1 DING1 DING3\",\"8036\":\"YE2 YE1 XIE2\",\"8037\":\"DA1 ZHE2\",\"8038\":\"SONG3\",\"8039\":\"QIN2\",\"8040\":\"ZHI2 ZHI4\",\"8042\":\"NIE4 ZHE4\",\"8043\":\"DAN1\",\"8044\":\"ZHEN3\",\"8045\":\"CHE4\",\"8046\":\"LING2\",\"8047\":\"ZHENG1\",\"8048\":\"YOU3\",\"8049\":\"WA1\",\"8050\":\"YA4\",\"8051\":\"DIE2\",\"8052\":\"GUA1 GUO1\",\"8054\":\"LIAN2\",\"8055\":\"HAO4\",\"8056\":\"SHENG4\",\"8057\":\"LIE4\",\"8058\":\"PIN4 PING4\",\"8059\":\"JING1\",\"8060\":\"PING2\",\"8061\":\"CONG1\",\"8064\":\"TING2\",\"8065\":\"YU3\",\"8066\":\"CONG1\",\"8067\":\"KUI2\",\"8069\":\"KUI4\",\"8070\":\"CONG1\",\"8071\":\"AO2 YOU2\",\"8072\":\"SHENG1\",\"8073\":\"SONG3\",\"8074\":\"TING1\",\"8075\":\"KUI4\",\"8076\":\"NIE4 ZHE4 SHE4 ZHE2 YE4\",\"8077\":\"ZHI2 ZHI4 TE4\",\"8078\":\"DAN1\",\"8079\":\"NING2 NING3\",\"8080\":\"YU4\",\"8081\":\"ZHAO4\",\"8082\":\"SI4\",\"8083\":\"SU4\",\"8084\":\"YI4 SI4\",\"8085\":\"SU4\",\"8086\":\"SI4 TI4\",\"8087\":\"ZHAO4\",\"8088\":\"ZHAO4\",\"8089\":\"ROU4 RU4\",\"8090\":\"GE1\",\"8091\":\"DI4\",\"8092\":\"HUAN2\",\"8093\":\"HUANG1\",\"8094\":\"YI3\",\"8095\":\"REN4\",\"8096\":\"XIAO4 XIAO1\",\"8097\":\"RU3\",\"8098\":\"ZHOU3\",\"8099\":\"YUAN1\",\"8100\":\"CHENG2 ZHENG1\",\"8101\":\"TIAO4 TIAO3\",\"8102\":\"ZHI1 ZHI3\",\"8103\":\"CUI4\",\"8104\":\"MEI2\",\"8105\":\"XIE2 XIAN4 XI1\",\"8106\":\"CUI4\",\"8107\":\"XIE2\",\"8108\":\"MAI4 MO4\",\"8109\":\"MAI4 MO4\",\"8110\":\"QI2\",\"8111\":\"NAO3\",\"8112\":\"MI3\",\"8113\":\"NONG2\",\"8114\":\"LUAN2 JI1\",\"8115\":\"WAN3 WAN4\",\"8116\":\"BO2\",\"8117\":\"WEN3\",\"8118\":\"GUAN3 WAN3 HUAN4\",\"8119\":\"QIU2\",\"8120\":\"SHAN1 CHAN1\",\"8121\":\"TING3\",\"8122\":\"MEI2\",\"8123\":\"CHUN2\",\"8124\":\"SHEN4\",\"8125\":\"QIAN3 QU1 JIA2 XIE2\",\"8126\":\"TE4\",\"8127\":\"ZUI1 JUAN1\",\"8128\":\"CU4\",\"8129\":\"XIU1 TIAO2\",\"8130\":\"DOU4\",\"8131\":\"TUO1\",\"8132\":\"NIAO4\",\"8134\":\"PI3\",\"8135\":\"GU3\",\"8136\":\"GUA1 LUO2\",\"8137\":\"LI4\",\"8138\":\"LIAN3\",\"8139\":\"ZHANG4 CHANG2\",\"8140\":\"LUN2\",\"8141\":\"PIAN2\",\"8142\":\"GUO4\",\"8143\":\"KUI4 QUAN1 QUAN2 JUAN4\",\"8144\":\"CHUI2 HOU2 CHUAI2\",\"8145\":\"DAN4\",\"8146\":\"TIAN3\",\"8147\":\"NEI3\",\"8148\":\"JING1\",\"8149\":\"JIE1\",\"8150\":\"FU3\",\"8151\":\"FU3\",\"8152\":\"JU1\",\"8153\":\"FEI2\",\"8154\":\"QIANG1 KONG4\",\"8155\":\"WAN4\",\"8156\":\"DONG4\",\"8157\":\"PI2 PAI2 PI4\",\"8158\":\"GUO2\",\"8159\":\"ZONG1\",\"8160\":\"COU4\",\"8161\":\"GUA1 LUO2\",\"8162\":\"OU3\",\"8163\":\"DI4\",\"8164\":\"AN1\",\"8165\":\"XING1\",\"8166\":\"NAO3 NAO4\",\"8167\":\"YU2 SHU4\",\"8168\":\"CHUAN3\",\"8169\":\"NAN3\",\"8170\":\"YAO1\",\"8171\":\"JIAN4 QIAN2\",\"8172\":\"WEI3\",\"8173\":\"JIAO3 JUE2\",\"8174\":\"YU2\",\"8175\":\"JIA1\",\"8176\":\"DUAN4\",\"8177\":\"BI4\",\"8178\":\"CHANG2\",\"8179\":\"FU4\",\"8180\":\"BANG3 BANG4 PANG1 PANG2 PANG3\",\"8181\":\"QIAN1 LIAN2\",\"8182\":\"LV3\",\"8183\":\"WA4\",\"8184\":\"SOU4\",\"8185\":\"TANG2\",\"8186\":\"SU4\",\"8187\":\"ZHUI4\",\"8188\":\"GE2\",\"8189\":\"YI4\",\"8190\":\"LV3\",\"8191\":\"BIN4\",\"8193\":\"CHANG2\",\"8194\":\"LU4\",\"8195\":\"GUO2\",\"8196\":\"PANG1\",\"8197\":\"CHUAI2\",\"8198\":\"PIAO3 BIAO1\",\"8199\":\"JIANG3\",\"8200\":\"YAO3\",\"8201\":\"YU2\",\"8202\":\"CHONG1 CHUANG1 ZHONG1\",\"8203\":\"XI4 QIAO3 TUO1 QUE4\",\"8204\":\"XI4 QIAO3\",\"8205\":\"JIU4\",\"8206\":\"YU2\",\"8207\":\"YU3 YU4 YU2\",\"8208\":\"XING1 XING4\",\"8209\":\"JU3\",\"8210\":\"SHI4\",\"8211\":\"TAN1\",\"8212\":\"SHU1 YU4\",\"8213\":\"SHI4\",\"8214\":\"TIAN3 TAN1\",\"8215\":\"DAN4 TAN4\",\"8216\":\"PU4 PU1\",\"8217\":\"PU4 PU1\",\"8218\":\"GUAN3\",\"8219\":\"HUA4\",\"8220\":\"DAO1\",\"8221\":\"GANG1 CHUAN2 XIANG1\",\"8222\":\"SHAN1\",\"8223\":\"YI3\",\"8225\":\"PA1\",\"8226\":\"TAI4\",\"8227\":\"FAN2\",\"8228\":\"BAN3\",\"8229\":\"CHUAN2\",\"8230\":\"JIAN4\",\"8231\":\"CANG1\",\"8232\":\"LING2\",\"8233\":\"ZHU2 ZHOU4\",\"8234\":\"ZE2\",\"8235\":\"DUO4 TUO2\",\"8236\":\"BO2\",\"8237\":\"XIAN2\",\"8238\":\"GE3\",\"8239\":\"CHUAN2\",\"8240\":\"FU2\",\"8241\":\"ZAO4\",\"8242\":\"FENG2\",\"8243\":\"LI2\",\"8244\":\"SHAO1 SHAO4\",\"8245\":\"YU2\",\"8246\":\"LANG2\",\"8247\":\"TING3\",\"8249\":\"WEI3\",\"8250\":\"ZONG1\",\"8251\":\"BIAN4\",\"8252\":\"MAO4 MU4\",\"8253\":\"DIE2\",\"8255\":\"BANG4\",\"8256\":\"CHA1\",\"8257\":\"YI4\",\"8258\":\"SAO1 SOU1\",\"8259\":\"CANG1\",\"8261\":\"DANG1\",\"8262\":\"TAN2 QIANG2\",\"8263\":\"LU3\",\"8264\":\"YI3\",\"8265\":\"JIE4\",\"8266\":\"JIAN4\",\"8267\":\"HUO4\",\"8268\":\"MENG2\",\"8269\":\"QI2\",\"8270\":\"JIAN1\",\"8271\":\"JIAN1\",\"8272\":\"SE4 SHAI3\",\"8273\":\"YAN4\",\"8274\":\"FU2 BO2 PEI4\",\"8275\":\"PING2\",\"8276\":\"YAN4\",\"8277\":\"YAN4\",\"8278\":\"CAO3 ZAO4\",\"8280\":\"TIAO2\",\"8281\":\"JIAO1\",\"8282\":\"JIE2 JIE1\",\"8283\":\"PENG2\",\"8284\":\"WAN2\",\"8285\":\"YI4\",\"8286\":\"CHAI1\",\"8287\":\"MIAN2\",\"8288\":\"MIE1 MI3\",\"8289\":\"GAN1\",\"8290\":\"XIA4 HU4\",\"8291\":\"QI3\",\"8292\":\"MANG2 WANG2 HUANG3 HUANG1\",\"8293\":\"ZI3 ZI4\",\"8294\":\"HUI3 HUI4\",\"8295\":\"SUI1 WEI3\",\"8296\":\"ZHI4\",\"8297\":\"XIANG1 XIANG3\",\"8298\":\"PI2 BI4 BI1\",\"8299\":\"FU2\",\"8300\":\"FU2 BO2\",\"8301\":\"ZHUO2 ZHU2\",\"8302\":\"MAO4\",\"8303\":\"FAN4\",\"8304\":\"QIE2 JIA1\",\"8305\":\"MAO2\",\"8306\":\"MAO3 MAO2\",\"8307\":\"BA2 PEI4\",\"8308\":\"ZI3 CHAI2 CI2 CI3\",\"8309\":\"MO4\",\"8311\":\"NIAO3\",\"8313\":\"XUE2\",\"8314\":\"YING2\",\"8315\":\"QIONG2\",\"8316\":\"GE2 GE4\",\"8317\":\"MING2 MING3\",\"8318\":\"LI4\",\"8319\":\"RONG2\",\"8320\":\"XIU1 HAO1\",\"8321\":\"ZI4\",\"8322\":\"LIE4\",\"8323\":\"WU2\",\"8324\":\"JI4 DUO1\",\"8325\":\"GUI1 GUI4 KUI1\",\"8326\":\"CE4\",\"8327\":\"CHONG2 JIAN3\",\"8328\":\"CI2\",\"8329\":\"GOU3 HOU4\",\"8330\":\"YU2\",\"8331\":\"ZHU1\",\"8332\":\"ZI1 CI1\",\"8333\":\"JIANG1\",\"8334\":\"HUI2\",\"8335\":\"YIN1\",\"8336\":\"CHA2\",\"8337\":\"FA2 FEI4\",\"8338\":\"RONG2 RONG3\",\"8339\":\"RU2\",\"8340\":\"XUN2\",\"8341\":\"HUAN2\",\"8342\":\"KUA1\",\"8343\":\"QUAN2 CHUO4\",\"8344\":\"GAI1\",\"8345\":\"DA1 DA2 TA4\",\"8346\":\"JING1\",\"8347\":\"XING4\",\"8348\":\"CHUAN3 QUAN4\",\"8349\":\"CAO3 ZAO4\",\"8350\":\"JIAN4\",\"8351\":\"TI2 YI2\",\"8352\":\"HUANG1 HUANG3 KANG1\",\"8353\":\"PING2 PING1\",\"8354\":\"LI4\",\"8355\":\"JIN1\",\"8356\":\"LAO3 CHA1\",\"8357\":\"SHU4\",\"8358\":\"ZHUANG1\",\"8359\":\"DA2\",\"8360\":\"QI2 JI4 QI5\",\"8361\":\"DANG4\",\"8363\":\"RONG2\",\"8364\":\"HUN1 XUN1\",\"8365\":\"YING2\",\"8366\":\"LUO4\",\"8367\":\"YING2\",\"8368\":\"XUN2 QIAN2 TAN2\",\"8369\":\"JIN4\",\"8370\":\"DU4\",\"8371\":\"WEI3\",\"8372\":\"CHU4\",\"8373\":\"DOU4\",\"8374\":\"FU1\",\"8375\":\"REN3\",\"8376\":\"YIN2\",\"8377\":\"HE2 HE4 KE1 HE1\",\"8378\":\"BI2 BO2\",\"8379\":\"BU4\",\"8380\":\"CHEN2\",\"8381\":\"WU2\",\"8382\":\"BIE2\",\"8383\":\"XI1\",\"8384\":\"GENG3\",\"8385\":\"LI4\",\"8386\":\"FU3 PU2\",\"8387\":\"ZHU4\",\"8388\":\"MO4\",\"8389\":\"LI4 LI2 CHI2\",\"8390\":\"CHEN2\",\"8391\":\"FENG1\",\"8392\":\"JU3\",\"8393\":\"MEI2 MEI4\",\"8394\":\"MENG2\",\"8395\":\"XING4\",\"8396\":\"JING1 YING1\",\"8397\":\"CHE1\",\"8398\":\"SHEN1 XIN1\",\"8399\":\"JUN1\",\"8400\":\"HU3\",\"8401\":\"QI2 JI1\",\"8402\":\"HE2\",\"8403\":\"CUI4\",\"8404\":\"TAO2\",\"8405\":\"CHUN1 CHUN3\",\"8406\":\"PI4 BI4 BEI1 BA2\",\"8407\":\"CHANG2\",\"8408\":\"HUAN2\",\"8409\":\"FEI2\",\"8410\":\"SHA4\",\"8411\":\"HUAN2 TUI1 ZHUI1\",\"8412\":\"YAN3\",\"8413\":\"YI2\",\"8414\":\"TIAO2\",\"8415\":\"QI2\",\"8416\":\"WAN3\",\"8417\":\"CE4\",\"8418\":\"NAI4\",\"8420\":\"MENG2\",\"8424\":\"YING2\",\"8425\":\"YING2\",\"8426\":\"YING2\",\"8427\":\"XIAO1\",\"8428\":\"SA4\",\"8429\":\"QIU1\",\"8430\":\"LIAN4\",\"8431\":\"XUAN1\",\"8432\":\"YUAN2 XUAN1\",\"8433\":\"NAN2\",\"8434\":\"ZE2 CE4\",\"8435\":\"WO1\",\"8436\":\"CHUN3\",\"8437\":\"XIAO1\",\"8438\":\"YU2\",\"8439\":\"PIAN1 BIAN1\",\"8440\":\"GUA1\",\"8441\":\"JIANG1\",\"8442\":\"MIAN3\",\"8443\":\"ZUO2\",\"8444\":\"ZUO4\",\"8445\":\"JU1 ZU1\",\"8446\":\"BAO3 BAO1\",\"8447\":\"ROU2\",\"8448\":\"XI3\",\"8449\":\"YE4 XIE2 SHE4\",\"8450\":\"PEN2\",\"8451\":\"FENG1 FENG4\",\"8452\":\"HONG2\",\"8453\":\"HONG2\",\"8454\":\"HOU2\",\"8455\":\"YAN2\",\"8456\":\"TU2 TU1\",\"8457\":\"ZHU4 ZHUO2 CHU2 ZHAO1 ZHAO2 ZHE5\",\"8458\":\"ZI1\",\"8459\":\"XIANG1\",\"8460\":\"SHEN1\",\"8461\":\"PU2 BEI4\",\"8462\":\"GAI4 GE3 HE2\",\"8463\":\"DONG3 ZHONG3\",\"8464\":\"ZHOU4\",\"8465\":\"QIAN2\",\"8466\":\"WEI3\",\"8467\":\"BO2\",\"8468\":\"WEI1\",\"8469\":\"PA1\",\"8470\":\"JUN4 SUI1\",\"8471\":\"CONG1 CHUANG1\",\"8472\":\"QUAN2\",\"8473\":\"WEI1\",\"8474\":\"ZHEN1 QIAN2 XIAN2\",\"8475\":\"KUI2\",\"8476\":\"TING2 DING3\",\"8477\":\"HUN1 XUN1\",\"8478\":\"XI3\",\"8479\":\"SHI1\",\"8480\":\"YUN1\",\"8481\":\"SHU4\",\"8482\":\"DI4\",\"8483\":\"ZHUAN4\",\"8484\":\"GUAN1\",\"8486\":\"XUE1\",\"8487\":\"CHAN3\",\"8488\":\"KAI3\",\"8489\":\"KUI4 KUAI4\",\"8490\":\"SOU1\",\"8491\":\"YIN1\",\"8492\":\"SHI1\",\"8493\":\"CHUN2\",\"8494\":\"SHI2 SHI4\",\"8495\":\"YUN1\",\"8496\":\"ZHEN1\",\"8497\":\"LANG4\",\"8498\":\"NU2\",\"8499\":\"MENG2 MENG1 MENG3 MANG2\",\"8500\":\"BU4 POU3\",\"8501\":\"ZHANG1\",\"8502\":\"LUO2\",\"8503\":\"JIANG4\",\"8504\":\"MAN4\",\"8505\":\"YAN2\",\"8506\":\"LING2\",\"8507\":\"JI4 XI4\",\"8508\":\"PIAO3 BIAO1\",\"8509\":\"GUN3\",\"8510\":\"DI2\",\"8511\":\"MIE4\",\"8512\":\"XUN1\",\"8513\":\"MAN4 WAN4 MAN2\",\"8514\":\"BO5 BO2\",\"8515\":\"DI4\",\"8516\":\"CUO2\",\"8517\":\"ZHE4\",\"8518\":\"SEN1 SAN1 SHEN1\",\"8519\":\"XUAN4\",\"8520\":\"ZHONG1\",\"8521\":\"CAI4 SA4 CA1\",\"8522\":\"PO2\",\"8523\":\"JIANG3 JIANG1\",\"8524\":\"MI4\",\"8525\":\"CONG1\",\"8526\":\"NIAO3\",\"8527\":\"HUI4 SUI4\",\"8528\":\"JUN4\",\"8529\":\"YIN2\",\"8530\":\"HU4\",\"8531\":\"SHA1\",\"8532\":\"KOU4\",\"8533\":\"QIAN4\",\"8534\":\"MA2\",\"8535\":\"ZANG1 CANG2\",\"8537\":\"QIANG2 SE4\",\"8538\":\"DOU1\",\"8539\":\"LIAN4 LIAN2\",\"8540\":\"JI2\",\"8541\":\"XUN2 QIAN2 TAN2\",\"8542\":\"SHENG4\",\"8543\":\"FAN2 FAN1 BO2 PI2 BO1\",\"8544\":\"MENG2\",\"8545\":\"OU3\",\"8546\":\"CHAN3\",\"8547\":\"DIAN3\",\"8548\":\"XUN4 TAN2\",\"8549\":\"JIAO1 QIAO2 QIAO1\",\"8550\":\"HUA2\",\"8551\":\"JIAN1\",\"8552\":\"MAI3\",\"8553\":\"YUN2\",\"8554\":\"BAO1\",\"8555\":\"YOU2\",\"8556\":\"QU2\",\"8557\":\"LU4\",\"8558\":\"RAO2 YAO2\",\"8559\":\"HUI4\",\"8560\":\"RU2\",\"8561\":\"FEN2\",\"8562\":\"KUI4 KUAI4\",\"8563\":\"SHUN4\",\"8564\":\"RUI2\",\"8565\":\"YA3\",\"8566\":\"XU1\",\"8567\":\"FU4\",\"8568\":\"JUE2\",\"8569\":\"DANG4 TANG1 TANG4\",\"8570\":\"YUN4 WEN1\",\"8572\":\"QI2\",\"8573\":\"JIAN1\",\"8574\":\"YUN4\",\"8575\":\"SUN1\",\"8576\":\"LING2\",\"8577\":\"YU4\",\"8578\":\"XIA2\",\"8579\":\"YONG1 WENG4\",\"8580\":\"YUN4\",\"8581\":\"YU4\",\"8582\":\"XI2\",\"8583\":\"HAO4 HAO3\",\"8584\":\"BO2 BAO2 BO4 BU4\",\"8585\":\"HAO1\",\"8586\":\"AI4\",\"8587\":\"WEI2 WEI1\",\"8588\":\"HUI4\",\"8589\":\"WEI4 HUI4\",\"8590\":\"LENG2\",\"8591\":\"JIANG1\",\"8592\":\"CAN4\",\"8593\":\"SHEN1\",\"8594\":\"QIANG2 SE4\",\"8595\":\"LIAN2\",\"8596\":\"KE1\",\"8597\":\"YUAN2\",\"8598\":\"DA2\",\"8599\":\"TI4\",\"8600\":\"TUO4\",\"8601\":\"WU4 E4\",\"8602\":\"RUI3\",\"8603\":\"RUI3\",\"8604\":\"QI2 JI1 QIN2\",\"8605\":\"HENG2\",\"8606\":\"LU2\",\"8607\":\"SU1 SU4\",\"8608\":\"TUI2\",\"8609\":\"MANG2\",\"8610\":\"XIAN1 XUAN1\",\"8611\":\"MO2\",\"8613\":\"SU1\",\"8614\":\"JIONG1 JIONG3\",\"8616\":\"NIE4 BI4 BO4\",\"8617\":\"BO4\",\"8618\":\"RANG2\",\"8619\":\"YI4\",\"8620\":\"QIANG2\",\"8621\":\"YING1\",\"8622\":\"LONG2 LONG3 LONG4\",\"8623\":\"TONG4\",\"8624\":\"WEI3 HUA1\",\"8625\":\"YUE4\",\"8626\":\"LING2\",\"8627\":\"QU2 QU4\",\"8628\":\"YAO2\",\"8629\":\"FAN2\",\"8631\":\"LEI4\",\"8632\":\"LEI2\",\"8633\":\"HUA3\",\"8634\":\"FENG1\",\"8635\":\"ZHI2\",\"8636\":\"WEI4\",\"8637\":\"KUI2\",\"8638\":\"ZHAN4\",\"8639\":\"HUAI4 HUAI2\",\"8640\":\"JI1\",\"8641\":\"KUI2\",\"8642\":\"LU4\",\"8643\":\"JIAN1\",\"8646\":\"LEI2\",\"8647\":\"QUAN3\",\"8648\":\"XIAO1\",\"8649\":\"YI4\",\"8650\":\"NVE4\",\"8651\":\"LV4\",\"8652\":\"SI1 ZHAI4 YI2\",\"8653\":\"XIAO1\",\"8654\":\"QIAN2\",\"8655\":\"CHU4 CHU3\",\"8656\":\"HU1 HU4 HU2\",\"8657\":\"XU1\",\"8658\":\"CUO2\",\"8659\":\"FU2\",\"8660\":\"JIAO3\",\"8661\":\"JU4\",\"8662\":\"GUO2\",\"8663\":\"BAO4\",\"8664\":\"YAN2\",\"8665\":\"ZHAN4\",\"8666\":\"ZHAN4\",\"8667\":\"KUI1\",\"8668\":\"BAN1\",\"8669\":\"XI4\",\"8670\":\"CHENG2\",\"8671\":\"SHI1\",\"8673\":\"DI4\",\"8674\":\"ZHE2 ZHA4\",\"8675\":\"SHE2 YI2\",\"8676\":\"YU1\",\"8677\":\"GAN1 HAN2\",\"8678\":\"ZI3\",\"8679\":\"HONG2 JIANG4 HONG4 GONG4\",\"8680\":\"SHI2\",\"8681\":\"YI3\",\"8682\":\"MA3 MA1 MA4\",\"8683\":\"XIANG4 XIANG3\",\"8684\":\"FANG1\",\"8685\":\"E4\",\"8686\":\"PA1\",\"8687\":\"CHI3\",\"8688\":\"QIAN1\",\"8689\":\"WEN2\",\"8690\":\"JUN1\",\"8691\":\"QI2\",\"8692\":\"TONG2 RAN2\",\"8693\":\"YIN3\",\"8694\":\"QI2\",\"8695\":\"CAN2 TIAN3\",\"8696\":\"YUAN2\",\"8697\":\"JUE2\",\"8698\":\"HUI2\",\"8699\":\"QIN2\",\"8700\":\"SHU3\",\"8701\":\"XUAN2\",\"8702\":\"FENG1\",\"8703\":\"SHEN4\",\"8704\":\"ZHEN4\",\"8705\":\"FU3\",\"8706\":\"XIAN4 XIAN3\",\"8707\":\"ZHE2 ZHE1\",\"8708\":\"WU2\",\"8709\":\"FU2\",\"8710\":\"JIE2\",\"8711\":\"DAN4\",\"8712\":\"YAN2 YAN4 DAN4\",\"8713\":\"TING2 DIAN4\",\"8714\":\"DIAN4\",\"8715\":\"SHUI4\",\"8716\":\"HUI2\",\"8717\":\"GUA1 WO1\",\"8718\":\"ZHI1\",\"8719\":\"SONG1\",\"8720\":\"JUN3\",\"8721\":\"LA4 ZHA4 CHA4 QU4 JI2\",\"8722\":\"MENG3 MENG4\",\"8723\":\"QIANG1\",\"8724\":\"SI1\",\"8725\":\"XI1\",\"8726\":\"LUN2\",\"8727\":\"LI4\",\"8728\":\"DIE2\",\"8729\":\"TIAO2 DIAO4\",\"8730\":\"FEI2\",\"8731\":\"PI2 MIAO2\",\"8732\":\"WEI3\",\"8733\":\"DUN1\",\"8734\":\"YI4 XI2\",\"8735\":\"YUAN1\",\"8736\":\"SU4\",\"8737\":\"QUAN2 JUAN3\",\"8738\":\"QIAN3\",\"8739\":\"RUI4\",\"8740\":\"DONG1 DONG4\",\"8741\":\"E4\",\"8742\":\"BAN3\",\"8743\":\"DI4\",\"8744\":\"WANG3\",\"8745\":\"CAN2\",\"8746\":\"YANG3 YANG2\",\"8747\":\"YING2\",\"8748\":\"GUO1\",\"8749\":\"CHAN2\",\"8750\":\"MAI4 MEI4\",\"8751\":\"XU1\",\"8752\":\"MIAN2\",\"8753\":\"YU2\",\"8754\":\"JIE1\",\"8755\":\"SHI2 LI4 LONG2\",\"8756\":\"XUAN1\",\"8757\":\"HUANG2\",\"8758\":\"YAN3 YAN4\",\"8759\":\"BIAN1 PIAN2\",\"8760\":\"FU2\",\"8761\":\"RUAN3 RU2\",\"8762\":\"XIE2\",\"8763\":\"YOU2\",\"8764\":\"QIU2 JIU1 YOU2\",\"8765\":\"MAO2 MOU2 WU2 WU4\",\"8766\":\"XIA1 HA2 JIA3\",\"8767\":\"YING1\",\"8768\":\"SHI1\",\"8769\":\"CHONG2\",\"8770\":\"HUI3 KUI2\",\"8771\":\"MENG2\",\"8772\":\"LA4\",\"8773\":\"DU2 DAI4\",\"8774\":\"HU2\",\"8775\":\"QIU1\",\"8776\":\"DIE2 TIE1\",\"8777\":\"LI4\",\"8778\":\"GUA1 WO1 LUO2 GUO3\",\"8779\":\"YUN1\",\"8780\":\"JIANG1\",\"8782\":\"LANG2\",\"8783\":\"PANG2 BANG3\",\"8784\":\"SI1\",\"8785\":\"XI1 CI4\",\"8786\":\"CI4\",\"8787\":\"XI1\",\"8788\":\"YUAN2\",\"8789\":\"WENG1\",\"8790\":\"WU1\",\"8791\":\"QIU4\",\"8792\":\"HAN4\",\"8793\":\"QIN2\",\"8794\":\"YI2\",\"8795\":\"BI1\",\"8796\":\"HUA2\",\"8797\":\"TANG2\",\"8798\":\"YI3\",\"8799\":\"DU4\",\"8800\":\"CI1\",\"8801\":\"XIANG4 XIANG3\",\"8802\":\"SHE4\",\"8803\":\"LUO3 LUO2 GUO3\",\"8804\":\"QIN2\",\"8805\":\"YING2\",\"8806\":\"CHAI4\",\"8807\":\"LI4\",\"8808\":\"ZE2\",\"8809\":\"XUAN1\",\"8810\":\"QI2\",\"8811\":\"RONG2\",\"8812\":\"JIAN3\",\"8813\":\"MENG3\",\"8814\":\"HAO2\",\"8815\":\"RU2 RUAN3\",\"8816\":\"HUO4 YUE4\",\"8817\":\"ZHUO2\",\"8818\":\"JIE2\",\"8819\":\"BIN1 PIN2\",\"8820\":\"MI4\",\"8821\":\"LI3 LI2 LUO2 LUO3 LI4\",\"8822\":\"CHUN3\",\"8823\":\"LI4\",\"8824\":\"QIU1\",\"8825\":\"NIE4\",\"8826\":\"LU2\",\"8827\":\"DU4\",\"8828\":\"XIAO1\",\"8829\":\"ZHU1\",\"8830\":\"SHANG4 SHANG1 NANG2 RANG2\",\"8831\":\"GU3\",\"8832\":\"JUAN1\",\"8833\":\"YING1\",\"8835\":\"XI1 XI2\",\"8836\":\"CAN2\",\"8837\":\"QU2\",\"8838\":\"QUAN2\",\"8839\":\"DU4\",\"8840\":\"XIE3 XUE4\",\"8841\":\"HUANG1\",\"8842\":\"NIU4 NV4\",\"8843\":\"PEI1\",\"8844\":\"NV4\",\"8845\":\"XIN4\",\"8846\":\"ZHONG4\",\"8847\":\"MO4 MAI4\",\"8848\":\"ER4 ER3\",\"8849\":\"KE4\",\"8851\":\"LING2\",\"8852\":\"XUAN4\",\"8853\":\"SHU4\",\"8854\":\"XIAN2\",\"8855\":\"TONG4 DONG4\",\"8856\":\"LONG4\",\"8857\":\"JIE1\",\"8858\":\"XIAN2 YU4\",\"8859\":\"YA2 YU2 YU3 YU4\",\"8860\":\"ZHUN1\",\"8861\":\"HENG2\",\"8862\":\"QU2\",\"8863\":\"YI1 YI4\",\"8865\":\"BU3\",\"8866\":\"GAN3\",\"8867\":\"YU2\",\"8868\":\"BIAO3\",\"8869\":\"CHA4 CHA3\",\"8870\":\"SHUAI1 CUI1 SUO1\",\"8871\":\"JIE2\",\"8872\":\"NA4\",\"8873\":\"ZHONG1\",\"8874\":\"DAN3\",\"8875\":\"RI4 NI4\",\"8876\":\"ZHONG4 ZHONG3 CHONG1\",\"8877\":\"ZHONG1 ZHONG4\",\"8878\":\"XIE4\",\"8879\":\"QI2 ZHI3\",\"8880\":\"JUN1\",\"8881\":\"YUAN2\",\"8882\":\"MEI4 YI4\",\"8883\":\"CHAI4\",\"8884\":\"AO3\",\"8885\":\"NIAO3\",\"8886\":\"HUI1\",\"8887\":\"RAN2\",\"8888\":\"JIA1\",\"8889\":\"TUO2\",\"8890\":\"BI4\",\"8891\":\"SHAO4\",\"8892\":\"TAN3 ZHAN4\",\"8893\":\"JU3\",\"8894\":\"HE4\",\"8895\":\"SHU4\",\"8896\":\"XIU4\",\"8897\":\"ZHEN3 ZHEN1\",\"8898\":\"YI2 YI4\",\"8899\":\"PA4\",\"8900\":\"JI4\",\"8901\":\"ZHI2\",\"8902\":\"GUA4\",\"8903\":\"KEN4\",\"8905\":\"TI4\",\"8906\":\"TI2\",\"8907\":\"FU4\",\"8908\":\"CHONG2 CHONG1 ZHONG4\",\"8909\":\"XIE1\",\"8910\":\"HE2 HE4\",\"8911\":\"YUAN4\",\"8912\":\"BAO1\",\"8913\":\"BAO3\",\"8914\":\"FU4\",\"8915\":\"YU2\",\"8916\":\"TUAN4\",\"8917\":\"YAN3\",\"8918\":\"HUI1\",\"8919\":\"BEI4\",\"8920\":\"GOU1\",\"8921\":\"DA1\",\"8922\":\"HUAI2\",\"8923\":\"RONG2\",\"8924\":\"YUAN4\",\"8925\":\"RU4 NU4\",\"8926\":\"NAI4\",\"8927\":\"JIONG3\",\"8928\":\"SUO3\",\"8929\":\"BAN1\",\"8930\":\"QIAN1\",\"8931\":\"HUAI2\",\"8932\":\"KU4\",\"8933\":\"LIAN2\",\"8934\":\"BAO3 LAN2\",\"8935\":\"LI2\",\"8936\":\"ZHE2 ZHE3 DIE2 XI2\",\"8937\":\"SHI1\",\"8938\":\"LV3\",\"8939\":\"YI4\",\"8940\":\"JI1\",\"8941\":\"JIANG3 QIANG3\",\"8942\":\"SEN1 SHAN1 SHEN1\",\"8943\":\"BAO1\",\"8944\":\"XIANG1\",\"8946\":\"PU2 FU2\",\"8947\":\"JIAN3\",\"8948\":\"ZHUAN4\",\"8949\":\"JIAN4\",\"8950\":\"XIANG4\",\"8951\":\"XIN2\",\"8952\":\"BIE2\",\"8953\":\"RAO2\",\"8954\":\"MAN3\",\"8955\":\"LAN2\",\"8956\":\"AO3\",\"8957\":\"DUO2 ZE4\",\"8958\":\"GUI4\",\"8959\":\"CAO4\",\"8960\":\"DANG1\",\"8961\":\"SHU2 SHU3 DU2\",\"8962\":\"TAN3 ZHAN4\",\"8963\":\"BI4 BI2\",\"8964\":\"LAN2\",\"8965\":\"PU2\",\"8966\":\"RU2\",\"8967\":\"ZHI3\",\"8969\":\"SHU3\",\"8970\":\"LAI4\",\"8971\":\"LONG2 LONG3\",\"8972\":\"XI2\",\"8973\":\"XIAN1 SHEN1\",\"8974\":\"LAN2\",\"8975\":\"ZHE2 ZHE3\",\"8976\":\"DAI4\",\"8978\":\"ZAN4\",\"8979\":\"SHI1\",\"8980\":\"XI1\",\"8981\":\"YAO4 YAO1 YAO3\",\"8982\":\"FENG3\",\"8983\":\"TAN2 QIN2 YAN3\",\"8985\":\"BIAO4\",\"8986\":\"FU4\",\"8987\":\"BA4 PO4\",\"8988\":\"HE2\",\"8989\":\"JI1\",\"8990\":\"JUE2 JIAO4\",\"8991\":\"PIAN3\",\"8992\":\"MAO2\",\"8993\":\"MI4\",\"8994\":\"MI4\",\"8995\":\"MIE4 PIE1\",\"8996\":\"SHI4\",\"8997\":\"SI1 SI4\",\"8998\":\"ZHAN1 CHAN1 DAN1 JI1\",\"8999\":\"LUO2\",\"9000\":\"TUI4\",\"9001\":\"SONG4\",\"9002\":\"SHI4 GUA1 KUO4\",\"9003\":\"TAO2\",\"9004\":\"PANG2 FENG2\",\"9005\":\"HOU4 GOU4\",\"9006\":\"NI4\",\"9007\":\"DUN4\",\"9008\":\"JIONG3\",\"9009\":\"XUAN3 SUAN4\",\"9010\":\"ZHU2 DI2 ZHOU4 TUN2\",\"9011\":\"QIU2\",\"9012\":\"DI4 DAI4\",\"9013\":\"DI4\",\"9014\":\"TU2\",\"9015\":\"JING4\",\"9016\":\"TI4\",\"9017\":\"DOU4 ZHU4 TOU2 QI2\",\"9018\":\"YI3\",\"9019\":\"ZHE4 ZHEI4 YAN4\",\"9020\":\"ZAO4 CAO4 CAO1\",\"9021\":\"QUN1 JUN4 XUN4 SUO1\",\"9022\":\"FENG2 PANG2 PENG2\",\"9023\":\"LIAN2 LIAN3 LIAN4 LAN4\",\"9024\":\"SUO4\",\"9025\":\"HUI2\",\"9026\":\"LI3\",\"9028\":\"LAI2\",\"9029\":\"BEN4 BEN1\",\"9030\":\"YOU2\",\"9031\":\"ZHOU1\",\"9032\":\"JIN4\",\"9033\":\"YU4\",\"9034\":\"CHUO4\",\"9035\":\"KUI2\",\"9036\":\"WEI1\",\"9037\":\"TI4\",\"9038\":\"YI4\",\"9039\":\"DA2\",\"9040\":\"SUI2\",\"9041\":\"DUN4 XUN2 QUN1\",\"9042\":\"SUI4 SUI2\",\"9043\":\"YAN3\",\"9044\":\"CHUAN2\",\"9045\":\"CHI2\",\"9046\":\"TI2\",\"9047\":\"YU4\",\"9048\":\"SHI2\",\"9049\":\"ZHEN1 ZHENG1\",\"9050\":\"XIA2\",\"9051\":\"HUANG2\",\"9052\":\"QIU2 QIU1\",\"9053\":\"DAO4 DAO3\",\"9054\":\"DA2 TA4 TI4\",\"9055\":\"WEI2 HUI2\",\"9057\":\"YI2 WEI4\",\"9058\":\"GOU4\",\"9059\":\"YAO2\",\"9060\":\"YUAN3 YUAN4\",\"9061\":\"SU4\",\"9062\":\"TA4\",\"9063\":\"QIAN3 QIAN4\",\"9065\":\"YAO2\",\"9066\":\"GUAN4\",\"9067\":\"ZHANG1\",\"9068\":\"AO2\",\"9069\":\"SHI4 DI2 TI4 ZHE2\",\"9070\":\"DI4 SHI4\",\"9071\":\"LOU2\",\"9072\":\"CHI2 ZHI4 XI1 ZHI2\",\"9073\":\"CUO1\",\"9074\":\"LIN2 LIN4\",\"9075\":\"ZUN1\",\"9076\":\"RAO4 RAO3\",\"9077\":\"QIAN1\",\"9078\":\"XUAN3 SUAN4 XUAN4\",\"9079\":\"YU4\",\"9080\":\"YAO1\",\"9081\":\"MAI4\",\"9082\":\"XIE4\",\"9083\":\"SUI4\",\"9084\":\"HUAN2 HAI2 XUAN2\",\"9085\":\"ZHAN1\",\"9086\":\"TENG2\",\"9087\":\"ER3\",\"9088\":\"MIAO3 MIAO2\",\"9089\":\"BIAN1\",\"9090\":\"LI3\",\"9091\":\"YI4 E4\",\"9092\":\"TING2\",\"9093\":\"DENG4\",\"9094\":\"QI3 JI4\",\"9095\":\"YONG1 YONG3\",\"9096\":\"SHAN1\",\"9097\":\"HAN2\",\"9098\":\"YU2\",\"9099\":\"MANG2\",\"9100\":\"RUO4\",\"9101\":\"BEI4\",\"9102\":\"E4\",\"9103\":\"YU2 SHU1\",\"9104\":\"JUAN4\",\"9105\":\"YU3\",\"9106\":\"YUN4\",\"9107\":\"HOU4\",\"9108\":\"KUI2\",\"9109\":\"XIANG1 XIANG3 XIANG4\",\"9110\":\"CHU4\",\"9111\":\"ZI1\",\"9112\":\"ZOU1 JU4\",\"9113\":\"JU2\",\"9114\":\"WU1\",\"9115\":\"XIANG1 XIANG3 XIANG4\",\"9116\":\"YUN2\",\"9117\":\"HAO4\",\"9118\":\"YONG1 YONG2\",\"9119\":\"BI3\",\"9120\":\"HU4\",\"9121\":\"QIAO1\",\"9122\":\"YAN1\",\"9123\":\"ZHANG1 ZHANG4\",\"9124\":\"MAN4 WAN4 FAN4\",\"9125\":\"QIAO1\",\"9126\":\"XU3\",\"9127\":\"DENG4\",\"9128\":\"BI4\",\"9129\":\"XIN2 XUN2\",\"9130\":\"LIN2 LIN4\",\"9131\":\"PO2 PI2 PAN2\",\"9132\":\"DAN1 DUO1\",\"9133\":\"MENG2\",\"9134\":\"YE4\",\"9135\":\"CAO1 CAO4\",\"9136\":\"KUAI4\",\"9137\":\"FENG1\",\"9138\":\"MENG2\",\"9139\":\"ZOU1 JU4\",\"9140\":\"YAN1\",\"9141\":\"CHAN2\",\"9142\":\"ZAN4 DA2\",\"9143\":\"LING2\",\"9144\":\"HUAN1\",\"9145\":\"XI1\",\"9146\":\"FENG1\",\"9147\":\"ZAN4 DA2\",\"9148\":\"LI4 ZHI2 LI2\",\"9149\":\"YOU3\",\"9150\":\"HANG4 GAN1 HANG3 HAN2\",\"9151\":\"YU3\",\"9152\":\"JIU3\",\"9153\":\"YAN3\",\"9154\":\"ZUI4\",\"9155\":\"MAO2\",\"9156\":\"DAN1 ZHEN4\",\"9157\":\"XU4\",\"9158\":\"TOU2\",\"9159\":\"ZHEN1\",\"9160\":\"QIA3\",\"9161\":\"TUO2\",\"9162\":\"ZUO4 CU4\",\"9163\":\"HAN1 HAN4\",\"9164\":\"GU1\",\"9165\":\"SU1\",\"9166\":\"PO4 PO1\",\"9167\":\"CHOU2\",\"9168\":\"ZAI4 ZUI4\",\"9169\":\"MING2 MING3\",\"9170\":\"XIAN1\",\"9171\":\"JIANG4\",\"9172\":\"CHENG2\",\"9173\":\"YIN4\",\"9174\":\"TU2\",\"9175\":\"JIAO4 XIAO4\",\"9176\":\"MEI2\",\"9177\":\"KU4\",\"9178\":\"SUAN1\",\"9179\":\"LEI4\",\"9180\":\"WEI2\",\"9181\":\"LU4\",\"9182\":\"LAN3\",\"9183\":\"YAN1\",\"9184\":\"TAO2\",\"9185\":\"PEI1\",\"9186\":\"ZHAN3\",\"9187\":\"CHUN2\",\"9188\":\"TAN2\",\"9189\":\"ZUI4\",\"9190\":\"HU2\",\"9191\":\"XU3\",\"9192\":\"XING3 XING1 CHENG2 JING1\",\"9193\":\"TAN3\",\"9194\":\"JIU1\",\"9195\":\"CHUN2\",\"9196\":\"YUN4\",\"9197\":\"PO4\",\"9198\":\"KE4\",\"9199\":\"SOU1\",\"9200\":\"BA3 PA2 BA1\",\"9201\":\"FANG1\",\"9202\":\"CHEN2\",\"9203\":\"XING2 JIAN1\",\"9204\":\"TOU3\",\"9205\":\"YUE4\",\"9206\":\"YAN2 QIAN1\",\"9207\":\"FU1 FU3\",\"9208\":\"PI1 BU4\",\"9209\":\"NA4 RUI4\",\"9210\":\"QIAN2 HAN2\",\"9211\":\"BAN3\",\"9212\":\"JI2 SA4\",\"9213\":\"REN2\",\"9214\":\"CHAO1 MIAO3 CHAO3\",\"9215\":\"NIU3 CHOU3\",\"9216\":\"FEN1\",\"9217\":\"YUN3\",\"9218\":\"JI3\",\"9219\":\"QIN2\",\"9220\":\"YI4\",\"9221\":\"ZHONG1\",\"9222\":\"NIE1\",\"9223\":\"GAI4\",\"9224\":\"RI4\",\"9225\":\"HUO3 HUO2\",\"9226\":\"TAI4\",\"9227\":\"KANG4\",\"9230\":\"SHI4\",\"9231\":\"MIN2\",\"9232\":\"GU1\",\"9233\":\"KE1 E1\",\"9234\":\"LING2\",\"9235\":\"BING4\",\"9236\":\"YI2\",\"9237\":\"GU3 GU1 GU2 GU4 HU2\",\"9238\":\"BO2 BA2\",\"9239\":\"PI1 PI2\",\"9240\":\"JIA3 HE2 GE2\",\"9241\":\"ZHEN1\",\"9242\":\"SHI3\",\"9243\":\"SHI4\",\"9244\":\"TIE3\",\"9245\":\"JU4\",\"9246\":\"CHAN1 QIAN2 TIE1 ZHAN1 QIN2\",\"9247\":\"SHI1 YI2 SHE2\",\"9248\":\"SHI1 SHE2 YI2 TUO2 TA1\",\"9249\":\"XUAN4\",\"9250\":\"SHI2\",\"9251\":\"BO2\",\"9252\":\"ZHU4\",\"9253\":\"CHI4\",\"9254\":\"ZA1\",\"9255\":\"PO1 PO3\",\"9256\":\"TONG2\",\"9257\":\"QIAN2 AN1\",\"9258\":\"FU2\",\"9259\":\"ZHAI3\",\"9260\":\"YANG1\",\"9261\":\"BAN4\",\"9262\":\"BO1\",\"9263\":\"JIE2\",\"9264\":\"GOU1 GOU4 QU2\",\"9265\":\"SHU4\",\"9266\":\"ZHENG1\",\"9267\":\"MU3\",\"9268\":\"NI3 NIE3 XI3\",\"9269\":\"NIE1 XI3\",\"9270\":\"SI1\",\"9271\":\"KUANG4\",\"9272\":\"KA3\",\"9273\":\"BEI3\",\"9274\":\"JIAN4\",\"9275\":\"TONG2\",\"9276\":\"XING2\",\"9277\":\"HONG2\",\"9278\":\"JIAO3\",\"9279\":\"CHI3\",\"9280\":\"YIN2\",\"9281\":\"JUN1\",\"9282\":\"ZHOU1\",\"9283\":\"CHONG4\",\"9284\":\"SHANG4\",\"9285\":\"TONG2\",\"9286\":\"MO4\",\"9287\":\"LEI4\",\"9288\":\"JI1\",\"9289\":\"YU4\",\"9290\":\"CHI4\",\"9291\":\"XIAN3 XI3 XIAN1\",\"9292\":\"XING2 JIAN1\",\"9293\":\"QUAN2\",\"9294\":\"PI1\",\"9295\":\"TIE3 YI2\",\"9296\":\"ZHU1\",\"9297\":\"HOU2 HOU4 XIANG4\",\"9298\":\"MING2\",\"9299\":\"KUA3\",\"9300\":\"LUN2\",\"9301\":\"GUO3 KUA3 KE4\",\"9302\":\"LING2\",\"9303\":\"BEI1\",\"9304\":\"LU4\",\"9305\":\"LI2\",\"9306\":\"QIANG1\",\"9307\":\"POU2 PEI2 FU2\",\"9308\":\"JUAN4\",\"9309\":\"MIN2\",\"9310\":\"ZHUI1\",\"9311\":\"LEI4\",\"9312\":\"A1 KE1\",\"9313\":\"KONG1\",\"9314\":\"TA4\",\"9315\":\"KUN1 GUN3\",\"9316\":\"DU3\",\"9317\":\"WEI4\",\"9318\":\"CHUI2\",\"9319\":\"ZI1\",\"9320\":\"DING4\",\"9321\":\"QI2 YI3\",\"9322\":\"QIAN2 JIAN3\",\"9323\":\"ZHUO2 ZHUI4\",\"9324\":\"QI2 JI1\",\"9325\":\"YU4\",\"9326\":\"JIN3\",\"9327\":\"GUAN3\",\"9328\":\"MAO2\",\"9329\":\"CHANG1\",\"9330\":\"SHU4\",\"9331\":\"ZHEN1\",\"9332\":\"LU4 LV4\",\"9333\":\"MENG3\",\"9334\":\"LU4\",\"9335\":\"HUA1\",\"9336\":\"BIAO3\",\"9337\":\"GA2\",\"9338\":\"LAI2\",\"9339\":\"KEN3\",\"9340\":\"DE2\",\"9341\":\"XIAN1\",\"9343\":\"HUO1 HUO4\",\"9344\":\"LIANG4\",\"9346\":\"MEN2\",\"9347\":\"KAI3 JIE1 JIE3\",\"9348\":\"YING1\",\"9349\":\"DI1 CHI2 DI2 SHI2\",\"9350\":\"CONG1\",\"9351\":\"FU4\",\"9352\":\"ROU2\",\"9353\":\"JI2\",\"9354\":\"E4\",\"9355\":\"ROU2\",\"9356\":\"CHEN3 ZHEN1\",\"9357\":\"TI2\",\"9358\":\"ZHA2\",\"9359\":\"HONG4\",\"9360\":\"HUANG2\",\"9361\":\"WEI3\",\"9362\":\"FU4\",\"9363\":\"ZHAO1\",\"9364\":\"CHA2 CHA1\",\"9365\":\"QIE4\",\"9366\":\"SHE2 SHI1\",\"9367\":\"HONG1\",\"9368\":\"KUI2\",\"9369\":\"TIAN3 NUO4\",\"9370\":\"HUAN2\",\"9371\":\"YE4\",\"9372\":\"MIN2\",\"9373\":\"JIAN4\",\"9374\":\"DUAN1\",\"9375\":\"JIAN4\",\"9376\":\"SI1 SONG1\",\"9377\":\"KUI1\",\"9378\":\"HU2\",\"9379\":\"XUAN1\",\"9380\":\"XIU1\",\"9381\":\"YE2\",\"9382\":\"MEI3\",\"9383\":\"PAI4\",\"9384\":\"AI1\",\"9385\":\"JIE4\",\"9387\":\"MEI2\",\"9388\":\"CHUO1\",\"9389\":\"TA4\",\"9390\":\"ZU2 YAO2\",\"9391\":\"YE4\",\"9392\":\"NOU4\",\"9393\":\"WENG1\",\"9394\":\"RONG2\",\"9395\":\"TANG2\",\"9396\":\"SUO3\",\"9397\":\"QIANG1 QIANG4 CHENG1\",\"9398\":\"GE2 LI4\",\"9399\":\"SHUO4\",\"9400\":\"KUI4 GUI4\",\"9401\":\"SI1\",\"9402\":\"LIU4 LIU2\",\"9403\":\"NAO2 NAO4\",\"9404\":\"HENG2\",\"9405\":\"PIE3\",\"9406\":\"SUI4\",\"9407\":\"FAN2\",\"9408\":\"QIAO2\",\"9409\":\"QUAN1\",\"9410\":\"LIAO2 LIAO4\",\"9411\":\"JIE2\",\"9412\":\"LAO2\",\"9413\":\"DUI4 DUI1 DUN1\",\"9414\":\"TAN2 XIN1 XIN2\",\"9415\":\"ZAN1\",\"9416\":\"JI1\",\"9417\":\"JIAN3\",\"9418\":\"ZHONG1\",\"9419\":\"DENG4 DENG1\",\"9420\":\"PU3\",\"9421\":\"TIE3\",\"9424\":\"DING3 ZHEN1\",\"9425\":\"SHAN4\",\"9426\":\"KAI1\",\"9427\":\"JIAN3 JIAN4 JIAN1\",\"9428\":\"FEI4\",\"9429\":\"SUI4\",\"9430\":\"QIAO1\",\"9431\":\"QIAN1\",\"9432\":\"ZHUO2 SHU3\",\"9433\":\"LEI2\",\"9434\":\"BI4\",\"9435\":\"TIE3 DIE2\",\"9436\":\"HUAN2\",\"9437\":\"YE4\",\"9438\":\"DUO2\",\"9439\":\"GUO3\",\"9440\":\"AI4\",\"9441\":\"ZONG1\",\"9442\":\"XUN4\",\"9443\":\"DIAO4\",\"9444\":\"ZHU4\",\"9445\":\"HENG2\",\"9446\":\"ZHUI4\",\"9447\":\"JI1\",\"9448\":\"NIE1\",\"9449\":\"TA4\",\"9450\":\"XU1 RU2\",\"9451\":\"JIAN4\",\"9452\":\"JIAN4\",\"9454\":\"CHA3\",\"9455\":\"ZHI4\",\"9456\":\"MIE4 MI4\",\"9457\":\"LI2\",\"9458\":\"LEI2\",\"9459\":\"JI1\",\"9460\":\"SHUO4 YUE4 LI4\",\"9461\":\"CHUO4\",\"9462\":\"LV4\",\"9463\":\"BIAO1\",\"9464\":\"BAO4 PAO2\",\"9465\":\"LU3\",\"9468\":\"LONG2\",\"9469\":\"E4\",\"9470\":\"YAO4 YUE4\",\"9471\":\"CHAN2\",\"9472\":\"XIANG1 RANG2\",\"9473\":\"JIAN4\",\"9474\":\"XI1 HUI1\",\"9475\":\"GUAN4\",\"9476\":\"CANG2\",\"9477\":\"NIE4\",\"9478\":\"LEI3\",\"9479\":\"CUAN4 CUAN1\",\"9480\":\"NIE4\",\"9481\":\"JUE2\",\"9482\":\"TANG3\",\"9483\":\"SHU3 ZHU2\",\"9484\":\"LAN2\",\"9485\":\"JIN1\",\"9486\":\"QIU2 GA2\",\"9487\":\"YI3\",\"9488\":\"ZHEN1\",\"9489\":\"DING1 DING4\",\"9490\":\"SHAN4 SHAN1 XIAN1\",\"9491\":\"JI2 SA4\",\"9492\":\"FAN2\",\"9493\":\"DIAO4\",\"9494\":\"MEN2\",\"9495\":\"NV3\",\"9496\":\"XI2 XI1\",\"9497\":\"CHAI1\",\"9498\":\"XING2 JIAN1\",\"9499\":\"GAI4\",\"9500\":\"XIAO1\",\"9501\":\"SUO3\",\"9502\":\"LI3\",\"9503\":\"ZHENG4 ZENG4\",\"9504\":\"CHU2\",\"9505\":\"GUO1\",\"9506\":\"GAO4\",\"9507\":\"TIE3 E2\",\"9508\":\"XIU4\",\"9509\":\"CUO4\",\"9510\":\"RUI4 DUI4 YUE4\",\"9511\":\"TI4 TI1\",\"9512\":\"LANG2\",\"9513\":\"QIAN1 QIN3\",\"9514\":\"JU2 JU1\",\"9515\":\"A1\",\"9516\":\"QIANG1\",\"9517\":\"DUO3 ZHE3\",\"9518\":\"TIAN3 NUO4\",\"9519\":\"CUO4 CU4\",\"9520\":\"CHANG1\",\"9521\":\"XI2 TI4\",\"9522\":\"GU4\",\"9523\":\"LUO2\",\"9524\":\"CHUI2\",\"9525\":\"ZHUI1\",\"9526\":\"JIN3\",\"9527\":\"ZHI4\",\"9528\":\"XIAN1\",\"9529\":\"JUAN4\",\"9530\":\"MENG3\",\"9531\":\"ZI1\",\"9532\":\"QIE4\",\"9533\":\"YING1\",\"9534\":\"KAI3 JIE1\",\"9535\":\"QIANG1\",\"9536\":\"SONG1 SI1\",\"9537\":\"E4\",\"9538\":\"CHA2\",\"9539\":\"QIAO1\",\"9540\":\"DU4\",\"9541\":\"MEI3\",\"9542\":\"LOU4\",\"9543\":\"ZI1\",\"9544\":\"FEI4\",\"9545\":\"MEI2\",\"9546\":\"MO4\",\"9547\":\"ZHEN4\",\"9548\":\"BO2\",\"9549\":\"GE2 LI4\",\"9550\":\"HAO4 GAO3\",\"9551\":\"BANG4\",\"9552\":\"YI4\",\"9553\":\"JIA1\",\"9554\":\"BIN1\",\"9555\":\"RONG2\",\"9556\":\"BIAO1\",\"9557\":\"TANG1\",\"9558\":\"MAN4\",\"9559\":\"LUO2\",\"9560\":\"LIU2\",\"9561\":\"TAN2 XIN2\",\"9562\":\"JUE2\",\"9563\":\"LIAO2 LIAO4\",\"9564\":\"PU2\",\"9565\":\"LU3\",\"9566\":\"DUI4\",\"9567\":\"LAN4 LAN2\",\"9568\":\"PU3\",\"9569\":\"CUAN4 CUAN1\",\"9570\":\"LIAN2\",\"9571\":\"YI4\",\"9572\":\"CHA3\",\"9573\":\"BIAO1\",\"9574\":\"LA4\",\"9575\":\"CHAN2\",\"9576\":\"XIANG1 RANG2\",\"9577\":\"CHANG2 ZHANG3 ZHANG4\",\"9578\":\"CHANG2\",\"9579\":\"JIU3\",\"9580\":\"MEN2\",\"9581\":\"MA4\",\"9582\":\"SHUAN1\",\"9583\":\"SHAN3\",\"9584\":\"HUO4\",\"9585\":\"MEN2\",\"9586\":\"YAN2 YAN3 YAN4\",\"9587\":\"BI4\",\"9588\":\"HAN4\",\"9589\":\"BI4\",\"9590\":\"SAN4\",\"9591\":\"XIAN2\",\"9592\":\"XIAN2 JIAN1 JIAN4\",\"9593\":\"JIAN1 JIAN4 JIAN3\",\"9594\":\"MIN3 MIN2\",\"9595\":\"XIA1 XIA4\",\"9597\":\"DOU4\",\"9598\":\"ZHA2 YA1 GE2\",\"9599\":\"NAO4\",\"9600\":\"FA2\",\"9601\":\"GE2\",\"9602\":\"HE2 GAI1\",\"9603\":\"KUN3\",\"9604\":\"JIU1\",\"9605\":\"YUE4\",\"9606\":\"LANG3 LANG4 LANG2 LIANG3\",\"9607\":\"DU1 SHE2\",\"9608\":\"YU4\",\"9609\":\"YAN1\",\"9610\":\"CHAN3\",\"9611\":\"LAN2\",\"9612\":\"QU4\",\"9613\":\"HUI4\",\"9614\":\"KUO4\",\"9615\":\"QUE4\",\"9616\":\"GE2 HE2\",\"9617\":\"TIAN2\",\"9618\":\"TA4\",\"9619\":\"QUE4 JUE2 QUE1\",\"9620\":\"XIN4\",\"9621\":\"QIAN1\",\"9622\":\"WU4 WEI4\",\"9623\":\"YI4\",\"9624\":\"TUO2 YI3 ZHI4\",\"9625\":\"YIN1 YIN4 AN1\",\"9626\":\"YANG2\",\"9627\":\"DOU3\",\"9628\":\"E4 AI4\",\"9629\":\"SHENG1\",\"9630\":\"PI2\",\"9631\":\"JING3\",\"9632\":\"FANG2\",\"9633\":\"YANG2\",\"9634\":\"YIN1 YIN4 AN1\",\"9635\":\"ZHEN4\",\"9636\":\"JIE1\",\"9637\":\"CHENG1\",\"9638\":\"E4 AI4\",\"9639\":\"QU1\",\"9640\":\"TUO2 DUO4\",\"9641\":\"TUO2 YI3\",\"9642\":\"BEI1 BI4 PO1 PI2\",\"9643\":\"BING3\",\"9644\":\"FU4 POU3 BU4 FU1\",\"9645\":\"JI4\",\"9646\":\"LU4 LIU4\",\"9647\":\"LONG3\",\"9648\":\"CHEN2 ZHEN4\",\"9649\":\"XING2 JING4\",\"9650\":\"XIAN4 WEN3\",\"9651\":\"ER2\",\"9652\":\"GUI3\",\"9653\":\"YU1 WU1\",\"9654\":\"GAI1\",\"9655\":\"SHAN3\",\"9656\":\"XUN4 JUN4\",\"9657\":\"QIAO4\",\"9658\":\"XING2 JING4\",\"9659\":\"CHUN2\",\"9660\":\"PU1\",\"9661\":\"DOU3\",\"9662\":\"YUAN4\",\"9663\":\"ZHEN4\",\"9664\":\"CHU2 ZHU4 SHU1\",\"9665\":\"XIAN4\",\"9667\":\"NIE4\",\"9668\":\"YUN3 YUAN2\",\"9669\":\"XIAN3 YAN2\",\"9670\":\"YIN1 YIN4 AN1\",\"9671\":\"JU1\",\"9672\":\"CHUI2\",\"9673\":\"CHEN2 ZHEN4\",\"9674\":\"PI2 BI4\",\"9675\":\"LING2\",\"9676\":\"TAO2 DAO4 YAO2\",\"9677\":\"XIAN4\",\"9678\":\"LU4 LIU4\",\"9680\":\"CHONG2\",\"9681\":\"YAN4\",\"9682\":\"YIN1 AN1 YIN4\",\"9683\":\"YU2 YAO2\",\"9684\":\"DI1 TI2\",\"9685\":\"YU2\",\"9686\":\"LONG2 LONG1\",\"9687\":\"WEI1\",\"9688\":\"WEI1\",\"9689\":\"NIE4\",\"9690\":\"YIN3 YIN4\",\"9691\":\"GAI1 GAI4 QI2\",\"9692\":\"YAN3\",\"9693\":\"HUI1\",\"9694\":\"GE2 RONG3 JI1\",\"9695\":\"YUN3 YUAN2\",\"9696\":\"WU4\",\"9697\":\"WEI3 GUI1 KUI2\",\"9698\":\"AI4 E4\",\"9699\":\"XI4\",\"9700\":\"XU1 NUO4 RUAN3 RU2\",\"9701\":\"JI4\",\"9702\":\"MU4\",\"9703\":\"CHEN2\",\"9704\":\"XIAO1 XIAO4\",\"9705\":\"ZHA2 XIA2 ZHA4 SHA4\",\"9706\":\"TING2\",\"9707\":\"ZHEN4 SHEN1\",\"9708\":\"PEI4\",\"9709\":\"MEI2\",\"9710\":\"WENG1\",\"9711\":\"ZHAN1\",\"9712\":\"YIN1\",\"9713\":\"NI2\",\"9714\":\"ZHU4\",\"9715\":\"TUN2\",\"9716\":\"LIN2\",\"9718\":\"DONG4\",\"9719\":\"YING1\",\"9720\":\"YIN1\",\"9721\":\"MO4 MAI4\",\"9722\":\"MAI4\",\"9723\":\"YUN3\",\"9724\":\"LIU4\",\"9725\":\"MENG4\",\"9726\":\"BIN1\",\"9727\":\"WU4 MENG2\",\"9728\":\"WEI4\",\"9729\":\"HUO4 KUO4\",\"9730\":\"XIAN4\",\"9731\":\"YU4\",\"9732\":\"LU4 LOU4\",\"9733\":\"LONG2\",\"9734\":\"DAI4\",\"9735\":\"JI2\",\"9736\":\"PANG2 PANG1\",\"9737\":\"YANG2\",\"9738\":\"BA4 PO4\",\"9739\":\"PI1\",\"9740\":\"MENG2\",\"9741\":\"LEI2 LEI4\",\"9742\":\"LI4\",\"9743\":\"HUO4 SUI3\",\"9744\":\"AI3\",\"9745\":\"FEI4\",\"9746\":\"DAI4\",\"9747\":\"LONG2\",\"9748\":\"LING2 LING4\",\"9749\":\"AI4\",\"9750\":\"BING4\",\"9751\":\"QING1\",\"9752\":\"QING1 JING1\",\"9753\":\"JING4\",\"9754\":\"TIAN1\",\"9755\":\"ZHEN1\",\"9756\":\"JING4 JING1\",\"9757\":\"CHENG4\",\"9758\":\"QING4\",\"9759\":\"JING4\",\"9760\":\"KAO4\",\"9761\":\"MI3 MI2 MA2 MEI2 MO2\",\"9762\":\"MIAN4\",\"9763\":\"MIAN4\",\"9764\":\"PAO4\",\"9765\":\"YE4\",\"9766\":\"TIAN3 MIAN3\",\"9767\":\"HUI4\",\"9768\":\"YE4 YAN3\",\"9769\":\"GE2 JI2 JI3\",\"9770\":\"WU4\",\"9771\":\"REN4\",\"9772\":\"QIN2 JIN4\",\"9773\":\"JIN4\",\"9774\":\"XUE1\",\"9775\":\"NIU3\",\"9776\":\"BA3 BA4\",\"9777\":\"YIN3\",\"9778\":\"SA3 TA1\",\"9779\":\"NA4\",\"9780\":\"TAO2\",\"9781\":\"TUO2 BEI4\",\"9782\":\"JIA2\",\"9783\":\"HONG2\",\"9784\":\"PAO2 BAO4\",\"9785\":\"YANG3 YANG1\",\"9787\":\"YIN1\",\"9788\":\"JIA2 GE2 TA4\",\"9789\":\"TAO2\",\"9791\":\"DA2\",\"9792\":\"QIAO1\",\"9793\":\"TING1\",\"9794\":\"WAN3 MAN2 MEN4\",\"9795\":\"YING4\",\"9796\":\"SUI1\",\"9797\":\"TIAO2\",\"9798\":\"QIAO4 SHAO1\",\"9799\":\"XUAN4 JUAN1\",\"9800\":\"HU4 HUO4\",\"9801\":\"YE4 XIE2\",\"9802\":\"DING3\",\"9803\":\"QING3 KUI3 QING1\",\"9804\":\"KUI2 QIU2 PAN4\",\"9805\":\"XIANG4\",\"9806\":\"SHUN4\",\"9807\":\"HAN1 AN4\",\"9808\":\"XU1\",\"9809\":\"YI2\",\"9810\":\"YU4\",\"9811\":\"WAN2 KUN1\",\"9812\":\"BAN1 FEN2\",\"9813\":\"DUN4 DU2 ZHUN1\",\"9814\":\"DI2\",\"9815\":\"DAN1\",\"9816\":\"PAN4\",\"9817\":\"PO1 PO3 PO4 PI2\",\"9818\":\"LING3\",\"9819\":\"CE4\",\"9820\":\"WEI3\",\"9821\":\"JIE2 JIA2 XIE2\",\"9822\":\"GUA1\",\"9823\":\"SHEN3\",\"9824\":\"YI2\",\"9825\":\"SHEN3\",\"9826\":\"HAI2 KE1 KE2\",\"9827\":\"DUI1\",\"9828\":\"PIAN1\",\"9829\":\"PING1\",\"9830\":\"JIA2\",\"9831\":\"LE4\",\"9832\":\"TING3 TIAN5\",\"9833\":\"CHENG1\",\"9834\":\"YING3\",\"9835\":\"JUN1 YUN1\",\"9836\":\"HU2\",\"9837\":\"HAN4\",\"9838\":\"JING3 GENG3\",\"9839\":\"TUI2\",\"9840\":\"CHUI2\",\"9841\":\"DING4\",\"9842\":\"LAI4\",\"9843\":\"YAN2\",\"9844\":\"HAN4\",\"9845\":\"JIAN1\",\"9846\":\"KE1 KE3 KUAN3\",\"9847\":\"CUI4\",\"9848\":\"JIONG3\",\"9849\":\"QIN1 HAN4\",\"9850\":\"HUN2 HUN4\",\"9851\":\"KAN3\",\"9852\":\"YONG2\",\"9853\":\"ZHUAN1\",\"9854\":\"YAN2 YA2\",\"9855\":\"XIAN3\",\"9856\":\"XIN4\",\"9857\":\"YI3\",\"9858\":\"YUAN4\",\"9859\":\"SANG3\",\"9860\":\"PIAO4 PIAO3 PIAO1\",\"9861\":\"YI4\",\"9862\":\"MAN2 MAN1\",\"9863\":\"QI1 CU4\",\"9864\":\"RAO4\",\"9865\":\"HAO4\",\"9866\":\"QIAO2\",\"9867\":\"GU4\",\"9868\":\"XUN4\",\"9869\":\"QIAN1 QIN1 YAN3\",\"9870\":\"PIN2\",\"9871\":\"LU2\",\"9872\":\"LAN3\",\"9873\":\"NIE4\",\"9874\":\"QUAN2\",\"9875\":\"YE4\",\"9876\":\"DING3\",\"9877\":\"QING3 KUI3 QING1\",\"9878\":\"HAN1\",\"9879\":\"XIANG4\",\"9880\":\"QI2 KEN3\",\"9881\":\"BAN1 FEN2\",\"9882\":\"SONG4 RONG2\",\"9883\":\"HANG2 GANG1\",\"9884\":\"YU4\",\"9885\":\"LU2\",\"9886\":\"LING3\",\"9887\":\"PO3 PO1\",\"9888\":\"JING3 GENG3\",\"9889\":\"JIE2 JIA2 XIE2\",\"9890\":\"YI2\",\"9891\":\"PIN2 BIN1\",\"9892\":\"HUI4\",\"9893\":\"TUI2\",\"9894\":\"HAN4\",\"9895\":\"YING3\",\"9896\":\"YING3\",\"9897\":\"KE1 KE3 KUAN3\",\"9898\":\"TI2 DI4\",\"9899\":\"YONG2\",\"9900\":\"HAI4\",\"9901\":\"REN4\",\"9902\":\"TIAN3\",\"9903\":\"JIAO3 JIAO4\",\"9904\":\"JIA2 HE2\",\"9905\":\"BING3\",\"9906\":\"YAO2\",\"9907\":\"TONG2\",\"9908\":\"CI2 ZI1\",\"9909\":\"XIANG3\",\"9910\":\"CAN1 SUN4\",\"9911\":\"BO1 BO2\",\"9912\":\"NEI3\",\"9913\":\"E4\",\"9914\":\"BU1 BU3\",\"9915\":\"JUN4\",\"9916\":\"DOU4\",\"9917\":\"SU4\",\"9918\":\"YU2 YE2\",\"9919\":\"SHI4\",\"9920\":\"BING3\",\"9921\":\"XIAN4 KAN4\",\"9922\":\"BU4\",\"9923\":\"YE4\",\"9924\":\"TAN2 DAN4\",\"9925\":\"FEI3\",\"9926\":\"ZHANG1\",\"9927\":\"WEI4 NEI3\",\"9928\":\"GUAN3\",\"9929\":\"E4\",\"9930\":\"JIAN1 ZHAN1\",\"9931\":\"HOU2\",\"9932\":\"HE2 AI4\",\"9933\":\"XING2 TANG2\",\"9934\":\"FEN1\",\"9935\":\"WEI4\",\"9936\":\"GU3\",\"9937\":\"CHA1\",\"9938\":\"SONG4\",\"9939\":\"TANG2\",\"9940\":\"TAO2\",\"9941\":\"YE4\",\"9942\":\"YUN2\",\"9943\":\"MO2\",\"9944\":\"TANG2\",\"9945\":\"MAN2\",\"9946\":\"BI4\",\"9947\":\"YU4\",\"9948\":\"XIU1\",\"9949\":\"JIN3\",\"9950\":\"YI4\",\"9951\":\"JI1 QI2\",\"9952\":\"RAO2\",\"9953\":\"CHENG1\",\"9954\":\"YONG1\",\"9955\":\"TAO1\",\"9956\":\"HUI4\",\"9957\":\"XIANG3\",\"9958\":\"ZHAN1\",\"9959\":\"FEN1\",\"9960\":\"LUO2\",\"9961\":\"ZUAN4 ZAN4\",\"9962\":\"NANG3 NANG2\",\"9963\":\"SHI2\",\"9964\":\"DING4\",\"9965\":\"JI1\",\"9966\":\"TUO1\",\"9967\":\"XING2\",\"9968\":\"TUN2 TUN5\",\"9969\":\"XI4\",\"9970\":\"SHI4\",\"9971\":\"BAO3\",\"9972\":\"SI4\",\"9973\":\"DUO4\",\"9974\":\"YI2 SI4\",\"9975\":\"ER3\",\"9976\":\"RAO2\",\"9977\":\"XIANG3\",\"9978\":\"JIA2 HE2\",\"9979\":\"LE5\",\"9980\":\"YU2\",\"9981\":\"NEI3\",\"9982\":\"JUN4\",\"9983\":\"GUO3\",\"9984\":\"HUN2\",\"9985\":\"XIAN4\",\"9986\":\"GUAN3\",\"9987\":\"CHA1\",\"9988\":\"KUI4\",\"9989\":\"GU3\",\"9990\":\"XIU1\",\"9991\":\"JIN3\",\"9992\":\"MAN2\",\"9993\":\"SAN3\",\"9994\":\"ZHUAN4 XUAN3\",\"9995\":\"NANG3 NANG2\",\"9996\":\"SHOU3\",\"9997\":\"KUI2 QIU2\",\"9998\":\"GUO2 XU4\",\"9999\":\"XIANG1\",\"20000\":\"HA1\",\"20001\":\"QI1\",\"20005\":\"HAI4\",\"20009\":\"QIU1\",\"20065\":\"GA3 GAI4\",\"20094\":\"ZI3\",\"20503\":\"XI1\",\"20509\":\"JUAN4\",\"21014\":\"LU4\",\"21219\":\"YOU2\",\"21484\":\"LAN3\",\"21681\":\"BI4\",\"21731\":\"JI4\",\"22091\":\"SHI4\",\"22136\":\"HUA1\",\"22156\":\"LIAN2\",\"22638\":\"JIANG4\",\"22738\":\"NAO2\",\"22833\":\"BIE1\",\"22835\":\"TANG3 CHANG3\",\"23012\":\"CHONG4\",\"23119\":\"HUANG3\",\"23626\":\"YI1\",\"24364\":\"ZHANG1\",\"24455\":\"XUN1 XUN4\",\"25134\":\"XUE2\",\"25275\":\"MA3\",\"25418\":\"SHI2\",\"25725\":\"YI4\",\"25762\":\"LI4\",\"25874\":\"JI4\",\"26007\":\"JING1\",\"26102\":\"DAI4\",\"26246\":\"CHA2 CHA4\",\"26408\":\"FEN1\",\"26675\":\"WAN4\",\"26693\":\"PING2\",\"27313\":\"FU4\",\"27602\":\"CHONG1 CHONG4\",\"27701\":\"SHA1 SHA4\",\"28329\":\"TANG4\",\"28373\":\"YAO2 DIAO1\",\"28452\":\"TU2\",\"29517\":\"LEI4 LI4\",\"29707\":\"JUAN3\",\"29760\":\"QIU1\",\"29811\":\"DING3\",\"340C\":\"SI4 YI2\",\"341C\":\"CHOU2\",\"342B\":\"XIONG1\",\"342C\":\"LIU2\",\"342D\":\"LIN3\",\"342E\":\"XIANG1\",\"342F\":\"YONG1\",\"343A\":\"ZHONG4\",\"343B\":\"N3 NEI4 NG3\",\"343C\":\"CHENG4 ZHENG3\",\"344A\":\"YI4\",\"344B\":\"JIONG4 KONG3 QIONG2\",\"344C\":\"WANG1 KUANG1\",\"344D\":\"LEI3 LEI4\",\"344E\":\"NAO3\",\"344F\":\"ZHU4\",\"345A\":\"NUO2\",\"345B\":\"SU4\",\"345C\":\"YI4\",\"345D\":\"LONG4\",\"345E\":\"YING4\",\"345F\":\"BENG3 BO2 PENG3\",\"346A\":\"CHAI2\",\"346E\":\"HUN2\",\"346F\":\"XU3\",\"347A\":\"JUN4\",\"347B\":\"MA4\",\"347C\":\"LVE4\",\"347D\":\"TANG2\",\"347E\":\"XIAO2 YAO2\",\"347F\":\"TIAO2 ZHAO4\",\"348A\":\"SE4\",\"348C\":\"QIONG2\",\"348D\":\"LEI2 LEI3\",\"348E\":\"SA3 SA4 TAN4\",\"349A\":\"WEN3\",\"349B\":\"DIAO4\",\"349C\":\"YU2 YU3\",\"349D\":\"MIE4 WA4\",\"349E\":\"JUN4 KE3\",\"349F\":\"NIAO3\",\"34A0\":\"XIE4\",\"34A1\":\"YOU2\",\"34A4\":\"SHE4\",\"34A6\":\"LEI3\",\"34A7\":\"LI4\",\"34A9\":\"LUO3\",\"34AB\":\"JI4\",\"34B0\":\"QUAN2\",\"34B2\":\"CAI2\",\"34B3\":\"LIANG3\",\"34B4\":\"GU3\",\"34B5\":\"MAO4\",\"34B7\":\"GUA3 XING4 XU3\",\"34B8\":\"SUI4 XUAN2\",\"34BB\":\"MAO4\",\"34BC\":\"MAN2\",\"34BE\":\"SHI4\",\"34BF\":\"LI2 LI4\",\"34C1\":\"WANG3\",\"34C2\":\"KOU4\",\"34C3\":\"CHUI2 DU4 ZHA4\",\"34C4\":\"ZHEN4\",\"34C8\":\"BING4 BEI4 FEI4 YE4\",\"34C9\":\"HUAN4 HUO2 HUO4\",\"34CA\":\"DONG4\",\"34CB\":\"GONG4\",\"34CE\":\"LIAN2 QIN3 QIN4\",\"34CF\":\"JIONG3\",\"34D0\":\"LU4\",\"34D1\":\"XING4\",\"34D3\":\"NAN2\",\"34D4\":\"XIE4\",\"34D6\":\"BI4 BIE2\",\"34D7\":\"JIE2 QI3\",\"34D8\":\"SU4\",\"34DC\":\"YOU4\",\"34DD\":\"XING2\",\"34DE\":\"QI4 QIA4 YAO2\",\"34E0\":\"DIAN4\",\"34E1\":\"FU3\",\"34E2\":\"LUO4\",\"34E3\":\"QIA4\",\"34E4\":\"JIE2 QIA4\",\"34E7\":\"YAN3\",\"34E8\":\"CI2 CI4\",\"34EA\":\"LANG3\",\"34ED\":\"HE2\",\"34EF\":\"LI2\",\"34F0\":\"HUA4\",\"34F1\":\"TOU2\",\"34F2\":\"PIAN4\",\"34F4\":\"JUN4 RUAN3\",\"34F5\":\"E4\",\"34F6\":\"QIE4\",\"34F7\":\"YI4\",\"34F8\":\"JUE2 ZHUO2\",\"34F9\":\"RUI4\",\"34FA\":\"JIAN4\",\"34FC\":\"CHI4 CHONG4\",\"34FD\":\"CHONG2\",\"34FE\":\"CHI2\",\"350A\":\"DAN3\",\"350B\":\"JIAN4 LAN2 LAN4\",\"350C\":\"ZHOU4\",\"350D\":\"DUO3 ZHA2\",\"350E\":\"XIE4 YI4\",\"350F\":\"LI4\",\"351A\":\"KOU3\",\"351C\":\"BA2 BO2\",\"351D\":\"LIANG3\",\"351E\":\"KUAI4 KUANG4 WANG4\",\"352A\":\"LU3\",\"352D\":\"CHE4 CHI2 YI2\",\"352E\":\"NUO2\",\"352F\":\"SUAN3 XUAN2\",\"353A\":\"SHI4\",\"353C\":\"SUN3\",\"353D\":\"YAO4 YOU3\",\"353E\":\"JIE2\",\"353F\":\"ZOU4\",\"354B\":\"JING4 QIN2\",\"354C\":\"AI4\",\"354E\":\"E4 KE4 KUN3\",\"354F\":\"CHU2\",\"355A\":\"ZHAO3\",\"355B\":\"XU4 YOU3 YOU4\",\"355C\":\"SHI3\",\"355F\":\"KUI4\",\"356A\":\"DAN3\",\"356B\":\"FANG3\",\"356C\":\"SONG4\",\"356D\":\"AO4 BI4\",\"356E\":\"FU3 TIAO4\",\"356F\":\"NEI4\",\"357A\":\"HAO2\",\"357B\":\"POU3 TOU4\",\"357D\":\"SI4\",\"358F\":\"NEI4\",\"359E\":\"WAI1\",\"359F\":\"SHOU4\",\"35A0\":\"BA4 NUO4\",\"35A1\":\"YE4\",\"35A2\":\"JI2 QI2\",\"35A3\":\"TOU4\",\"35A4\":\"HAN2\",\"35A5\":\"JIONG3\",\"35A6\":\"DONG3\",\"35A7\":\"WEN3\",\"35A8\":\"LU4\",\"35A9\":\"SOU3\",\"35AA\":\"GUO2\",\"35AB\":\"LING2\",\"35AD\":\"TIAN3\",\"35AE\":\"LUN2\",\"35B6\":\"YE4\",\"35B7\":\"SHI2 TI2\",\"35B8\":\"XUE2\",\"35B9\":\"FEN4\",\"35BA\":\"CHUN3\",\"35BB\":\"ROU2\",\"35BC\":\"DUO3 LIN2 MOU2\",\"35BD\":\"ZE2 ZEI2\",\"35BE\":\"E4\",\"35BF\":\"XIE2\",\"35C1\":\"E4\",\"35C2\":\"SHENG3\",\"35C3\":\"WEN3 YIN4\",\"35C4\":\"MAN2 MAN4\",\"35C5\":\"HU2\",\"35C6\":\"GE2 KAI4\",\"35C7\":\"XIA2\",\"35C8\":\"MAN4\",\"35C9\":\"BI4 E4 LVE4\",\"35CA\":\"JI2\",\"35CB\":\"HOU2\",\"35CC\":\"ZHI4\",\"35D1\":\"BAI4\",\"35D2\":\"AI4\",\"35D5\":\"GOU4\",\"35D6\":\"DAN4\",\"35D7\":\"BAI3\",\"35D8\":\"BO2 FU4\",\"35D9\":\"NA4\",\"35DA\":\"LI4\",\"35DB\":\"XIAO4\",\"35DC\":\"XIU4\",\"35E2\":\"DONG4\",\"35E3\":\"TI4\",\"35E4\":\"CU4\",\"35E5\":\"KUO4\",\"35E6\":\"LAO2\",\"35E7\":\"ZHI4\",\"35E8\":\"AI3\",\"35E9\":\"XI1\",\"35EB\":\"QIE4\",\"35F0\":\"CHU4 CONG2\",\"35F1\":\"JI2\",\"35F2\":\"HUO4 XI4\",\"35F3\":\"TA3\",\"35F4\":\"YAN2\",\"35F5\":\"XU4\",\"35F7\":\"SAI3\",\"35FC\":\"YE4\",\"35FD\":\"XIANG3\",\"35FF\":\"XIA4\",\"360A\":\"YI4\",\"360B\":\"XIAN2\",\"360C\":\"JU4\",\"360D\":\"JI2 QI4\",\"360E\":\"HAN3 HAN4\",\"361A\":\"HAN3\",\"361C\":\"CHI3 CHOU2 CHU4\",\"361D\":\"NIAN3 NIE4\",\"361E\":\"HUO4\",\"362A\":\"HAO4\",\"362B\":\"JING3\",\"362C\":\"AO4\",\"362D\":\"AO4\",\"363A\":\"FA2\",\"363F\":\"NIE4\",\"364A\":\"CHANG2 ZHANG4\",\"364F\":\"FU4\",\"365B\":\"BU3\",\"365C\":\"CHI2 TAI2\",\"365D\":\"XIE2\",\"365E\":\"NIE4\",\"365F\":\"LANG3\",\"366A\":\"YE4 YI4\",\"366B\":\"JI2\",\"366C\":\"YIN2\",\"366E\":\"DA1 DA5\",\"366F\":\"YI4\",\"367A\":\"GUI4 KUI2\",\"367B\":\"CHAN2 QIE4 ZAN4\",\"367C\":\"LEI3\",\"367E\":\"XI4 XUE2\",\"368C\":\"HUA4 HUO3\",\"368D\":\"GUO2 KUI3 KUI4\",\"368F\":\"GAO3\",\"369B\":\"XI4\",\"369C\":\"XU4 YU4\",\"369D\":\"KUI2\",\"369E\":\"MENG3 SHEN3 YING4 YUN4\",\"369F\":\"CHUO4\",\"36A1\":\"JI3\",\"36A2\":\"NU2\",\"36A3\":\"XIAO2\",\"36A4\":\"YI4\",\"36A5\":\"YU2\",\"36A6\":\"YI2\",\"36A7\":\"YAN3\",\"36A9\":\"RAN3\",\"36AA\":\"HAO4\",\"36AB\":\"SHA4 ZHA4\",\"36AD\":\"YOU2\",\"36AF\":\"XIN2 XUN2\",\"36B0\":\"BI3\",\"36B2\":\"DIAN3 SHAN4\",\"36B4\":\"BU4\",\"36B6\":\"SI4\",\"36B7\":\"ER3 NAI3\",\"36B9\":\"MAO3\",\"36BA\":\"YUN4\",\"36BD\":\"QIAO3\",\"36BF\":\"PAO2\",\"36C2\":\"NUO3\",\"36C3\":\"JIE2\",\"36C5\":\"ER4\",\"36C6\":\"DUO3\",\"36CA\":\"DUO3\",\"36CD\":\"QIE4\",\"36CF\":\"OU4 QIU2\",\"36D0\":\"SOU3 XUAN2\",\"36D1\":\"CAN4\",\"36D2\":\"DOU4\",\"36D4\":\"PENG2\",\"36D5\":\"YI4\",\"36D7\":\"ZUO4\",\"36D8\":\"PO4\",\"36D9\":\"QIE4 QIN2 SHEN3 SHEN4\",\"36DA\":\"TONG3\",\"36DB\":\"XIN4 ZHEN4\",\"36DC\":\"YOU2\",\"36DD\":\"BEI4 BENG4\",\"36DE\":\"LONG4\",\"36E5\":\"TA4\",\"36E6\":\"LAN3\",\"36E7\":\"MAN3\",\"36E8\":\"QIANG3\",\"36E9\":\"ZHOU2\",\"36EA\":\"YAN4 YUAN2\",\"36EC\":\"LU4\",\"36EE\":\"SAO3\",\"36EF\":\"MIAN3\",\"36F1\":\"RUI4 WEI3\",\"36F2\":\"FA4\",\"36F3\":\"CHA4 YI4\",\"36F4\":\"NAO3\",\"36F6\":\"CHOU2 TAN2 TAN4\",\"36F8\":\"SHU4\",\"36F9\":\"PIAN2\",\"36FB\":\"KUI3\",\"36FC\":\"SHA4\",\"36FE\":\"XIAN2\",\"36FF\":\"ZHI4\",\"370A\":\"PANG4 ZHAN3\",\"370B\":\"YI4\",\"370C\":\"GOU4\",\"370D\":\"TANG2\",\"370E\":\"QI2 XI4\",\"370F\":\"YUN2\",\"371A\":\"SU4\",\"371B\":\"NEN4 RUAN3\",\"371C\":\"AO4\",\"371D\":\"AN3 AN4\",\"371E\":\"QIAN4\",\"372A\":\"XIAN3\",\"372B\":\"MA4 MEI2 MEI3\",\"372E\":\"LAN4\",\"373A\":\"ZAN4\",\"373B\":\"LIAN4\",\"373C\":\"ZHI2 ZHI4\",\"373D\":\"ZI3\",\"373E\":\"HAI2\",\"373F\":\"XU4\",\"374A\":\"SHOU3\",\"374B\":\"LIAO2 LIAO3 LIU2\",\"374C\":\"JIE2 JIU4 ZHOU4\",\"374D\":\"XIE3\",\"374E\":\"DING4\",\"374F\":\"JIE4\",\"375B\":\"SU4\",\"375D\":\"LIN2\",\"375E\":\"YA4\",\"375F\":\"MAO2 MAO4 WU3\",\"376A\":\"DIAN4 DING3\",\"376B\":\"LONG2\",\"376D\":\"XING3\",\"376E\":\"CUI4\",\"376F\":\"QIAO2\",\"377A\":\"LIAN2 LIN2\",\"377B\":\"JIN3\",\"377D\":\"CHUI2 SHUI3 ZHUI3\",\"377E\":\"ZUO3\",\"377F\":\"BO2 BO3 FU4 QIAN4\",\"378A\":\"XU4\",\"378B\":\"NIAN3\",\"378C\":\"YUN4\",\"378E\":\"BA3 FU2 PA2\",\"378F\":\"ZHE2\",\"379A\":\"QI4 ZHA3\",\"379B\":\"JI3\",\"379F\":\"DIAN4\",\"37A0\":\"LAO2 LIAO2\",\"37A1\":\"ZHAN3\",\"37A4\":\"YIN2\",\"37A5\":\"CEN2\",\"37A6\":\"JI3\",\"37A7\":\"HUI4\",\"37A8\":\"ZAI3 ZI3\",\"37A9\":\"LAN2\",\"37AA\":\"NAO2\",\"37AB\":\"JU4 ZOU3\",\"37AC\":\"QIN4\",\"37AD\":\"DAI4\",\"37AF\":\"JIE2\",\"37B0\":\"XU3\",\"37B2\":\"YONG4\",\"37B3\":\"DOU3\",\"37B4\":\"CHI2\",\"37B6\":\"MIN3\",\"37B7\":\"HUANG2\",\"37B8\":\"SUI4\",\"37B9\":\"KE3\",\"37BA\":\"ZU2\",\"37BB\":\"HAO4\",\"37BC\":\"CHENG2 SHENG4 ZHE2\",\"37BD\":\"XUE4\",\"37BE\":\"NI2 YI4\",\"37BF\":\"CHI4 QI2\",\"37C0\":\"LIAN2\",\"37C1\":\"AN4\",\"37C2\":\"CHI3 MU3\",\"37C4\":\"XIANG2\",\"37C5\":\"YANG2\",\"37C6\":\"HUA2\",\"37C7\":\"CUO2 CUO3\",\"37C8\":\"QIU2\",\"37C9\":\"LAO2\",\"37CA\":\"FU2\",\"37CB\":\"DUI4\",\"37CC\":\"MANG2\",\"37CD\":\"LANG2\",\"37CE\":\"TUO3\",\"37CF\":\"HAN2\",\"37D0\":\"MANG3\",\"37D1\":\"BO2\",\"37D3\":\"QI2\",\"37D4\":\"HAN2\",\"37D6\":\"LONG4\",\"37D8\":\"TIAO2\",\"37D9\":\"LAO3 ZE2 ZHAI2\",\"37DA\":\"QI2\",\"37DB\":\"ZAN4\",\"37DC\":\"MI2\",\"37DD\":\"PEI2 POU3\",\"37DE\":\"ZHAN4\",\"37DF\":\"XIANG4\",\"37E0\":\"GANG3\",\"37E2\":\"QI2\",\"37E4\":\"LU4\",\"37E6\":\"YUN4\",\"37E7\":\"E4 NIE4 XUN4\",\"37E8\":\"QUAN2\",\"37E9\":\"MIN2 MIN3 WEN3\",\"37EA\":\"WEI3\",\"37EB\":\"QUAN2\",\"37EC\":\"SHU3 SOU3\",\"37ED\":\"MIN2\",\"37F0\":\"MING3\",\"37F1\":\"YAO3\",\"37F2\":\"JUE2 YUAN2\",\"37F3\":\"LI4\",\"37F4\":\"KUAI4 KUI3 WEI3\",\"37F5\":\"GANG3\",\"37F6\":\"YUAN2\",\"37F7\":\"DA5\",\"37F9\":\"LAO2\",\"37FA\":\"LOU2\",\"37FB\":\"QIAN4\",\"37FC\":\"AO2\",\"37FD\":\"BIAO3\",\"37FF\":\"MANG2 MANG3\",\"380A\":\"QU1\",\"380B\":\"E4\",\"380D\":\"JI2 JIE2 QI4\",\"380E\":\"JI2 QI4\",\"380F\":\"HUA2\",\"381A\":\"DUI4 ZHUO2\",\"381B\":\"WO4\",\"381C\":\"NI4\",\"381D\":\"CUAN2\",\"381F\":\"LI2\",\"382A\":\"JU4\",\"382D\":\"ZHAN3 ZHAN4\",\"382F\":\"YI3\",\"383A\":\"MIAO2\",\"383D\":\"TONG2\",\"383F\":\"CI3\",\"384A\":\"QIA4 QIAN3\",\"384B\":\"E4 YE2\",\"384C\":\"MAO4 MEI4\",\"384F\":\"TOU2\",\"385B\":\"MANG2\",\"385C\":\"XUE3\",\"385D\":\"FENG4 FU2\",\"385E\":\"LEI3 LOU2 LV3\",\"386A\":\"NIE2\",\"386B\":\"YI4\",\"386D\":\"JI4 KUI2\",\"386E\":\"JI2\",\"386F\":\"ZHAI2\",\"387A\":\"DAN4\",\"387B\":\"LIAO4\",\"387C\":\"YI4\",\"387D\":\"ZHAO4\",\"387E\":\"XIAN4\",\"387F\":\"CHI4\",\"388A\":\"AI3\",\"388B\":\"CHI3\",\"388D\":\"YING2 YING3\",\"388E\":\"CHA4 ZE2 ZHAI2 ZHE2\",\"388F\":\"TOU2\",\"389A\":\"LU3\",\"389B\":\"YAN4\",\"389E\":\"YI4\",\"389F\":\"CHAN3\",\"38A0\":\"JIONG3 JUN4\",\"38A1\":\"JIANG3\",\"38A3\":\"JING4 QING2\",\"38A5\":\"DONG4\",\"38A7\":\"JUAN4\",\"38A8\":\"HAN4\",\"38A9\":\"DI4\",\"38AC\":\"HONG2\",\"38AE\":\"CHI2\",\"38AF\":\"MIN2\",\"38B0\":\"BI4 HUAN2\",\"38B2\":\"XUN4\",\"38B3\":\"LU2 LV4\",\"38B5\":\"SHE4 XIE2\",\"38B6\":\"BI4\",\"38B8\":\"BI4\",\"38BA\":\"XIAN2\",\"38BB\":\"WEI3\",\"38BC\":\"BIE4\",\"38BD\":\"ER3\",\"38BE\":\"JUAN4\",\"38C0\":\"ZHEN4\",\"38C1\":\"BEI4\",\"38C2\":\"YI4\",\"38C3\":\"YU3 YU4\",\"38C4\":\"QU2\",\"38C5\":\"ZAN4\",\"38C6\":\"MI2 PEI4\",\"38C7\":\"NI3 YI4\",\"38C8\":\"SI4\",\"38CC\":\"SHAN4\",\"38CD\":\"TAI2\",\"38CE\":\"MU4\",\"38CF\":\"JING4\",\"38D0\":\"BIAN4\",\"38D1\":\"RONG2\",\"38D2\":\"CENG4\",\"38D3\":\"CAN4\",\"38D9\":\"DI2\",\"38DA\":\"TONG2 TONG3\",\"38DB\":\"TA4\",\"38DC\":\"XING2\",\"38DE\":\"DUO2 DUO4\",\"38DF\":\"XI4\",\"38E0\":\"TONG2\",\"38E2\":\"TI2\",\"38E3\":\"SHAN3 SHAN4\",\"38E4\":\"JIAN4\",\"38E5\":\"ZHI4\",\"38E7\":\"YIN4 YONG3\",\"38EA\":\"HUAN3 KUO4\",\"38EB\":\"ZHONG3\",\"38EC\":\"QI4\",\"38EF\":\"XIE4\",\"38F0\":\"XIE4\",\"38F1\":\"ZE2 ZUO4\",\"38F2\":\"WEI2\",\"38F5\":\"TA4\",\"38F6\":\"ZHAN1\",\"38F7\":\"NING4\",\"38FB\":\"YI4\",\"38FC\":\"REN3\",\"38FD\":\"SHU4\",\"38FE\":\"CHA4\",\"38FF\":\"ZHUO2\",\"390A\":\"XIAO4 YAO2\",\"390D\":\"QIAO3\",\"390F\":\"TONG2\",\"391A\":\"HANG2\",\"391B\":\"NIN2 REN4\",\"391C\":\"JUE2 YU4\",\"391E\":\"CHA4\",\"391F\":\"KONG3 TOU4\",\"392A\":\"YUAN4\",\"392B\":\"DE2\",\"392C\":\"HUI4 KUI4\",\"392E\":\"KUANG2\",\"392F\":\"JIONG3 JUN4\",\"393A\":\"HUANG3\",\"393D\":\"CHOU2\",\"393E\":\"SAN4\",\"394A\":\"PENG2\",\"394C\":\"JU2\",\"394D\":\"JI4\",\"394E\":\"LAI2 LI2\",\"394F\":\"TIAN3\",\"395A\":\"YU2\",\"395B\":\"JI2 KE4 SU4\",\"395C\":\"WEI4\",\"395D\":\"MI3 MIAN3\",\"395E\":\"CUI4 QIAN4 SUI4\",\"395F\":\"XIE2\",\"396A\":\"LOU2\",\"396C\":\"PANG2\",\"396D\":\"TAI4\",\"396E\":\"ZHOU4\",\"396F\":\"YIN3\",\"397A\":\"HE2 HE4\",\"397C\":\"YIN3\",\"397D\":\"CE4 ZE2\",\"397E\":\"NI4\",\"397F\":\"AO4\",\"398A\":\"HUA2\",\"398C\":\"TUI4 XU4\",\"398D\":\"E4\",\"398E\":\"HUA4\",\"398F\":\"SUN3 XUAN4\",\"399A\":\"BIAN3\",\"399B\":\"YU2 YU3\",\"399C\":\"HUO4 XUE4\",\"399D\":\"MIAO3\",\"399E\":\"CHOU2\",\"399F\":\"HAI4 MAI2\",\"39A1\":\"LE4\",\"39A2\":\"JIE2 QI4\",\"39A3\":\"WEI4\",\"39A4\":\"YI4\",\"39A5\":\"HUAN2 XIAN3\",\"39A6\":\"HE4\",\"39A7\":\"CAN3\",\"39A8\":\"LAN2 LAN4\",\"39A9\":\"YIN3\",\"39AA\":\"XIE4\",\"39AC\":\"LUO3\",\"39AD\":\"LING2\",\"39AE\":\"QIAN2\",\"39AF\":\"HUO4\",\"39B1\":\"WO3\",\"39B4\":\"GE2 QIA4\",\"39B6\":\"DIE2\",\"39B7\":\"YONG3\",\"39B8\":\"JI3\",\"39B9\":\"ANG4 YANG2 YING3\",\"39BA\":\"RU3 RU4\",\"39BB\":\"XI2 ZHE2\",\"39BC\":\"SHUANG4\",\"39BD\":\"XU4 YU4\",\"39BE\":\"YI2\",\"39BF\":\"HU4\",\"39C0\":\"JI2\",\"39C1\":\"QU4\",\"39C2\":\"TIAN2\",\"39C4\":\"QIAN3 QIU2\",\"39C5\":\"MU4\",\"39C7\":\"MAO3\",\"39C8\":\"YIN3 YIN4\",\"39C9\":\"GAI4 KUI4\",\"39CA\":\"BA2\",\"39CB\":\"XIAN3 XUAN3\",\"39CC\":\"MAO4\",\"39CD\":\"FANG3\",\"39CE\":\"YA2\",\"39D0\":\"SONG3\",\"39D1\":\"WEI2 WEI3\",\"39D2\":\"XUE2 YU4 YUE4\",\"39D4\":\"GUAI4\",\"39D5\":\"JIU4 LIU3 YU2\",\"39D6\":\"E4\",\"39D7\":\"ZI3\",\"39D8\":\"CUI4 NAO3 ZI4\",\"39D9\":\"BI4\",\"39DA\":\"WA3\",\"39DC\":\"LIE4\",\"39DF\":\"KUAI3\",\"39E1\":\"HAI4\",\"39E3\":\"ZHU4\",\"39E4\":\"CHONG4\",\"39E5\":\"XIAN3\",\"39E6\":\"XUAN4\",\"39E8\":\"QIU2\",\"39E9\":\"PEI4\",\"39EA\":\"GUI3\",\"39EB\":\"ER2\",\"39EC\":\"GONG3\",\"39ED\":\"QIONG2\",\"39EF\":\"LAO3\",\"39F0\":\"LI4\",\"39F1\":\"CHEN4 NA2 NI4 TIAN4\",\"39F2\":\"SAN3\",\"39F3\":\"BO2 ZHUO4\",\"39F4\":\"WO3\",\"39F5\":\"POU2 POU3\",\"39F7\":\"DUO4 TUN4\",\"39F9\":\"TE4\",\"39FA\":\"TA4\",\"39FB\":\"ZHI3 ZHUO2 ZU2\",\"39FC\":\"BIAO4\",\"39FD\":\"GU4 HU2\",\"3A00\":\"BING3\",\"3A01\":\"ZHI2 ZHI4\",\"3A02\":\"DONG3\",\"3A03\":\"CHENG2 DUI3\",\"3A04\":\"ZHAO4\",\"3A05\":\"NEI4 RUI4\",\"3A06\":\"LIN3\",\"3A07\":\"PO2\",\"3A08\":\"JI3\",\"3A09\":\"MIN3\",\"3A0A\":\"WEI3\",\"3A0B\":\"CHE3 LE4 ZHEN4\",\"3A0C\":\"GOU4 RU2 RU3\",\"3A0E\":\"RU2 RUAN2\",\"3A10\":\"BU3 PEI2\",\"3A12\":\"KUI2 WEI3 XIE2\",\"3A13\":\"LAO2 LIAO2\",\"3A14\":\"HAN4\",\"3A15\":\"YING2\",\"3A16\":\"ZHI4\",\"3A17\":\"JIE2\",\"3A18\":\"XING3\",\"3A19\":\"XIE2\",\"3A1A\":\"XUN2\",\"3A1B\":\"SHAN3\",\"3A1C\":\"QIAN2\",\"3A1D\":\"XIE4\",\"3A1E\":\"SU4\",\"3A1F\":\"HAI2\",\"3A20\":\"MI4\",\"3A21\":\"HUN2\",\"3A24\":\"HUI4 KUAI3 WAI4\",\"3A25\":\"NA4\",\"3A26\":\"SONG3\",\"3A27\":\"BEN4\",\"3A28\":\"LIU4\",\"3A29\":\"JIE2\",\"3A2A\":\"HUANG4\",\"3A2B\":\"LAN3\",\"3A2D\":\"HU4\",\"3A2E\":\"DOU1\",\"3A2F\":\"HUO4 KUO4\",\"3A30\":\"GE2 GUN3 HUN4 HUO4 JIE2\",\"3A31\":\"YAO2\",\"3A32\":\"CE4\",\"3A33\":\"GUI3\",\"3A34\":\"JIAN4\",\"3A35\":\"JIAN3\",\"3A36\":\"CHOU2 DAO3 ZHOU3 ZHOU4\",\"3A37\":\"JIN4\",\"3A38\":\"MA4\",\"3A39\":\"HUI4\",\"3A3A\":\"MEN2 MI4 MIAN3\",\"3A3B\":\"CAN2\",\"3A3C\":\"LVE4\",\"3A3D\":\"PI3 PI4 QIAO3\",\"3A3E\":\"YANG4\",\"3A3F\":\"JU4\",\"3A40\":\"JU4\",\"3A41\":\"QUE4\",\"3A44\":\"SHAI1\",\"3A46\":\"JIU4\",\"3A47\":\"HUA4 HUO4\",\"3A48\":\"XIAN4 YUN3\",\"3A49\":\"XIE2\",\"3A4B\":\"SU4\",\"3A4C\":\"FEI4\",\"3A4D\":\"CE4\",\"3A4E\":\"YE4\",\"3A52\":\"QIN2\",\"3A53\":\"HUI3\",\"3A54\":\"TUN2\",\"3A56\":\"QIANG2 TIAO2\",\"3A57\":\"XI2 XIE2\",\"3A58\":\"YI3\",\"3A5A\":\"MENG2\",\"3A5B\":\"TUAN2\",\"3A5C\":\"LAN3\",\"3A5D\":\"HAO2\",\"3A5E\":\"CI4\",\"3A5F\":\"ZHAI4\",\"3A60\":\"PIAO3\",\"3A61\":\"LUO3\",\"3A62\":\"MI2 MIE4\",\"3A66\":\"XIE2\",\"3A67\":\"BO2\",\"3A68\":\"HUI4\",\"3A69\":\"QI3 QING3\",\"3A6A\":\"XIE2 XIN4 YE2\",\"3A6D\":\"BO2 JIAO3 XIAO4\",\"3A6E\":\"QIAN2 XIAN2\",\"3A6F\":\"BAN3 PAN2 PO2\",\"3A70\":\"JIAO3 QIAO2 XIU3\",\"3A71\":\"JUE2\",\"3A72\":\"KUN3 QUAN2\",\"3A73\":\"SONG3\",\"3A74\":\"JU2\",\"3A75\":\"E4\",\"3A76\":\"NIE4 NING3\",\"3A78\":\"DIE2\",\"3A79\":\"DIE2 ZHA2\",\"3A7B\":\"GUI3\",\"3A7D\":\"QI2\",\"3A7E\":\"CHUI2\",\"3A80\":\"YU2\",\"3A81\":\"QIN2\",\"3A83\":\"KE3 KE4\",\"3A84\":\"FU2\",\"3A86\":\"DI3\",\"3A87\":\"XIAN4\",\"3A88\":\"GUI4\",\"3A89\":\"HE2\",\"3A8A\":\"QUN2\",\"3A8B\":\"HAN4\",\"3A8C\":\"TONG3 YU2 YU3\",\"3A8D\":\"BO2\",\"3A8E\":\"SHAN3\",\"3A8F\":\"BI3\",\"3A90\":\"LU4\",\"3A91\":\"YE4\",\"3A92\":\"NI2\",\"3A93\":\"CHUAI2\",\"3A94\":\"SAN4 TAN2\",\"3A95\":\"DIAO4\",\"3A96\":\"LU4\",\"3A97\":\"TOU3\",\"3A98\":\"LIAN3\",\"3A99\":\"KE3 KE4 KUO4\",\"3A9A\":\"SAN4\",\"3A9B\":\"ZHEN3\",\"3A9C\":\"CHUAI3\",\"3A9D\":\"LIAN4\",\"3A9E\":\"MAO4\",\"3AA0\":\"QIAN4\",\"3AA1\":\"KE3\",\"3AA2\":\"SHAO3\",\"3AA3\":\"QIAO4\",\"3AA4\":\"BI4\",\"3AA6\":\"YIN4\",\"3AA8\":\"SHAN4\",\"3AA9\":\"SU4\",\"3AAA\":\"SA4 XI3\",\"3AAB\":\"RUI4\",\"3AAC\":\"ZHUO2\",\"3AAD\":\"LU2\",\"3AAE\":\"LING2\",\"3AAF\":\"CHA2 JU3 QU2\",\"3AB1\":\"HUAN4\",\"3AB4\":\"JIA2\",\"3AB5\":\"BAN4\",\"3AB6\":\"HU2\",\"3AB7\":\"DOU3\",\"3AB9\":\"LOU3 LU4\",\"3ABB\":\"JUAN4\",\"3ABC\":\"KE3\",\"3ABD\":\"SUO3 SUO4\",\"3ABE\":\"GE2 LUO4\",\"3ABF\":\"ZHE2\",\"3AC0\":\"DING3\",\"3AC1\":\"DUAN4\",\"3AC2\":\"ZHU4\",\"3AC3\":\"YAN3\",\"3AC4\":\"PANG2\",\"3AC5\":\"CHA2 QI2 SHI2\",\"3ACA\":\"YI3\",\"3ACD\":\"YOU2\",\"3ACE\":\"GUN3 KUAI4\",\"3ACF\":\"YAO3\",\"3AD0\":\"YAO3\",\"3AD1\":\"SHI2 ZHI3\",\"3AD2\":\"GONG3\",\"3AD3\":\"QI3 QI4\",\"3AD4\":\"GEN4\",\"3AD7\":\"HOU4\",\"3AD8\":\"MI4 MIAN3\",\"3AD9\":\"FU2\",\"3ADA\":\"HU1\",\"3ADB\":\"GUANG4 KUANG2 KUANG4 MU3\",\"3ADC\":\"DAN4 TAN3\",\"3ADF\":\"YAN2\",\"3AE2\":\"QU4\",\"3AE4\":\"CHANG3 ZHAO4\",\"3AE5\":\"MING3\",\"3AE7\":\"BAO4\",\"3AEB\":\"XIAN3\",\"3AEF\":\"MAO4\",\"3AF0\":\"LANG3\",\"3AF1\":\"NAN3\",\"3AF2\":\"PEI4\",\"3AF3\":\"CHEN2\",\"3AF6\":\"COU3 ZHOU3\",\"3AF8\":\"QIE4\",\"3AF9\":\"DAI4 SHU4 YU2\",\"3AFB\":\"KUN4\",\"3AFC\":\"DIE2 ZHE2 ZHI4\",\"3AFD\":\"LU4\",\"3B02\":\"YU2\",\"3B03\":\"TAI2\",\"3B04\":\"CHAN4\",\"3B05\":\"MAN4\",\"3B06\":\"MIAN2 MIAN4 MIN3\",\"3B07\":\"HUAN4\",\"3B09\":\"NUAN3 RUO4\",\"3B0A\":\"HUAN3\",\"3B0B\":\"HOU2\",\"3B0C\":\"JING4\",\"3B0D\":\"BO2\",\"3B0E\":\"XIAN3\",\"3B0F\":\"LI4\",\"3B10\":\"JIN3 JIN4 XING2 YING3\",\"3B12\":\"MANG3 MAO4\",\"3B13\":\"PIAO4\",\"3B14\":\"HAO2\",\"3B15\":\"YANG2\",\"3B17\":\"XIAN4\",\"3B18\":\"SU4\",\"3B19\":\"WEI3\",\"3B1A\":\"CHE4\",\"3B1C\":\"JIN4\",\"3B1D\":\"CENG2\",\"3B1E\":\"HE4\",\"3B20\":\"SHAI4\",\"3B21\":\"LING2\",\"3B23\":\"DUI4\",\"3B25\":\"PU4\",\"3B26\":\"YUE4\",\"3B27\":\"BO2\",\"3B29\":\"HUI4\",\"3B2A\":\"DIE2 ZHI4\",\"3B2B\":\"YAN4\",\"3B2C\":\"JU4\",\"3B2D\":\"JIAO4 SHAN3 YAO3\",\"3B2E\":\"KUAI4 NAN4\",\"3B2F\":\"LIE4\",\"3B30\":\"YU2\",\"3B31\":\"TI4\",\"3B33\":\"WU3\",\"3B34\":\"HONG3\",\"3B35\":\"XIAO2\",\"3B36\":\"HAO4\",\"3B3B\":\"HUANG3\",\"3B3C\":\"FU4\",\"3B3F\":\"DUN4\",\"3B41\":\"RENG2\",\"3B42\":\"JIAO3\",\"3B44\":\"XIN4\",\"3B47\":\"YUAN4\",\"3B48\":\"JUE2 KUAI4\",\"3B49\":\"HUA2\",\"3B4B\":\"BANG4\",\"3B4C\":\"MOU2 YU2\",\"3B4F\":\"WEI3\",\"3B51\":\"MEI4\",\"3B52\":\"SI4\",\"3B53\":\"BIAN4\",\"3B54\":\"LU2\",\"3B58\":\"HE2\",\"3B59\":\"SHE2 ZHE2\",\"3B5A\":\"LV3\",\"3B5B\":\"PAI4\",\"3B5C\":\"RONG2\",\"3B5D\":\"QIU2\",\"3B5E\":\"LIE4\",\"3B5F\":\"GONG3\",\"3B60\":\"XIAN3\",\"3B61\":\"XI4 XIN4\",\"3B64\":\"NIAO3\",\"3B68\":\"XIE2 YE2\",\"3B69\":\"LEI4 LING2\",\"3B6B\":\"CUAN2 CUO2 ZHEN4\",\"3B6C\":\"ZHUO2\",\"3B6D\":\"FEI4\",\"3B6E\":\"ZUO4\",\"3B6F\":\"DIE2 NA4 ZHE2\",\"3B70\":\"JI4 JUE2 ZUI3\",\"3B71\":\"HE2 XIA2\",\"3B72\":\"JI2\",\"3B78\":\"TU2\",\"3B79\":\"XIAN2\",\"3B7A\":\"YAN3\",\"3B7B\":\"TANG2\",\"3B7C\":\"TA4\",\"3B7D\":\"DI3\",\"3B7E\":\"JUE2 YUE4\",\"3B7F\":\"ANG2\",\"3B80\":\"HAN2\",\"3B81\":\"YAO2\",\"3B82\":\"JU2\",\"3B83\":\"RUI2\",\"3B84\":\"BANG3 BI4 PENG2\",\"3B86\":\"NIE4\",\"3B87\":\"TIAN4\",\"3B88\":\"NAI4\",\"3B8B\":\"YOU3 YU4\",\"3B8C\":\"MIAN2 MIN3\",\"3B8F\":\"NAI4\",\"3B90\":\"XING3\",\"3B91\":\"QI4\",\"3B93\":\"GEN4\",\"3B94\":\"TONG2\",\"3B95\":\"ER2 RUAN3\",\"3B96\":\"JIA2\",\"3B97\":\"QIN2\",\"3B98\":\"MAO4\",\"3B99\":\"E4\",\"3B9A\":\"LI4\",\"3B9B\":\"CHI2\",\"3B9D\":\"HE2 LUO4\",\"3B9E\":\"JIE2 NI2 YA2\",\"3B9F\":\"JI2 NIAN3 NV4 PENG4 ROU4\",\"3BA1\":\"GUAN4\",\"3BA2\":\"HOU2\",\"3BA3\":\"GAI4 ZE2\",\"3BA5\":\"FEN4\",\"3BA6\":\"SE4 SUO3\",\"3BA8\":\"JI2 JI4\",\"3BAA\":\"QIONG2\",\"3BAB\":\"HE2\",\"3BAD\":\"XIAN2\",\"3BAE\":\"JIE2\",\"3BAF\":\"HUA2 HUN2 KUAN3\",\"3BB0\":\"BI2 PI2\",\"3BB3\":\"ZHEN4\",\"3BB6\":\"SHI4 SHUO4\",\"3BB8\":\"SONG4\",\"3BB9\":\"ZHI3\",\"3BBA\":\"BEN3\",\"3BBE\":\"LANG3\",\"3BBF\":\"BI4\",\"3BC0\":\"XIAN3 XUAN4\",\"3BC1\":\"BANG4\",\"3BC2\":\"DAI4\",\"3BC5\":\"PI2\",\"3BC6\":\"CHAN3\",\"3BC7\":\"BI4\",\"3BC8\":\"SU4\",\"3BC9\":\"HUO4\",\"3BCA\":\"HEN2\",\"3BCB\":\"YING3\",\"3BCC\":\"CHUAN2\",\"3BCD\":\"JIANG3\",\"3BCE\":\"NEN4\",\"3BCF\":\"GU3\",\"3BD0\":\"FANG3 TUO3\",\"3BD3\":\"TA4\",\"3BD4\":\"CUI4\",\"3BD6\":\"DE2\",\"3BD7\":\"RAN3 SHUN4 XIAN2 XIAN4\",\"3BD8\":\"KUAN3\",\"3BD9\":\"CHE4\",\"3BDA\":\"DA2\",\"3BDB\":\"HU2 HUO4\",\"3BDC\":\"CUI4\",\"3BDD\":\"LU4\",\"3BDE\":\"JUAN4 YUE4\",\"3BDF\":\"LU4\",\"3BE0\":\"QIAN4 XIAN4 XUN2\",\"3BE1\":\"PAO4\",\"3BE2\":\"ZHEN4\",\"3BE4\":\"LI4\",\"3BE5\":\"CAO2 ZHA2\",\"3BE6\":\"QI2\",\"3BE9\":\"TI4\",\"3BEA\":\"LING2\",\"3BEB\":\"QU2\",\"3BEC\":\"LIAN3\",\"3BED\":\"LU3\",\"3BEE\":\"SHU3\",\"3BEF\":\"GONG4\",\"3BF0\":\"ZHE2 ZHI2\",\"3BF1\":\"BIAO3 PIAO2\",\"3BF2\":\"JIN4\",\"3BF3\":\"QING2\",\"3BF6\":\"ZONG1\",\"3BF7\":\"PU2\",\"3BF8\":\"JIN3\",\"3BF9\":\"BIAO3\",\"3BFA\":\"JIAN4\",\"3BFB\":\"GUN3 HUN4\",\"3BFF\":\"LIE4\",\"3C00\":\"LI2\",\"3C01\":\"LUO3\",\"3C02\":\"SHEN3 SUN3\",\"3C03\":\"MIAN2\",\"3C04\":\"JIAN4\",\"3C05\":\"DI2\",\"3C06\":\"BEI4\",\"3C08\":\"LIAN3\",\"3C0A\":\"XUN2\",\"3C0B\":\"PIN2\",\"3C0C\":\"QUE4\",\"3C0D\":\"LONG2\",\"3C0E\":\"ZUI4\",\"3C10\":\"JUE2 KUI2 LEI3 TUI3 TUO3\",\"3C12\":\"SHE2 XUE2\",\"3C14\":\"XIE4\",\"3C16\":\"LAN3\",\"3C17\":\"CU4\",\"3C18\":\"YI2\",\"3C19\":\"NUO2\",\"3C1A\":\"LI2\",\"3C1B\":\"YUE4\",\"3C1D\":\"YI3\",\"3C1F\":\"JI4\",\"3C20\":\"KANG4\",\"3C21\":\"XIE4\",\"3C23\":\"ZI4\",\"3C24\":\"KE3 QIA4\",\"3C25\":\"HUI4\",\"3C26\":\"QU4\",\"3C2A\":\"WA2\",\"3C2C\":\"XUN2\",\"3C2E\":\"SHEN4\",\"3C2F\":\"KOU4\",\"3C30\":\"QIE4\",\"3C31\":\"SHA4\",\"3C32\":\"XU4 YU4\",\"3C33\":\"YA4\",\"3C34\":\"PO2 POU3\",\"3C35\":\"ZU2\",\"3C36\":\"YOU3\",\"3C37\":\"ZI4\",\"3C38\":\"LIAN3 LIAN4 LUAN3\",\"3C39\":\"JIN4\",\"3C3A\":\"XIA2\",\"3C3B\":\"YI3\",\"3C3C\":\"QIE4\",\"3C3D\":\"MI3 YAN4\",\"3C3E\":\"JIAO4\",\"3C40\":\"CHI3 CHUAI4\",\"3C41\":\"SHI4\",\"3C43\":\"YIN3\",\"3C44\":\"MO4\",\"3C45\":\"YI4\",\"3C47\":\"SE4\",\"3C48\":\"JIN4\",\"3C49\":\"YE4\",\"3C4B\":\"QUE4\",\"3C4C\":\"CHE4 YAN3 YE2\",\"3C4D\":\"LUAN2\",\"3C4F\":\"ZHENG4\",\"3C56\":\"CUI4\",\"3C58\":\"AN4 YAN3\",\"3C59\":\"XIU3\",\"3C5A\":\"CAN2 HAI4 SHAN4\",\"3C5B\":\"CHUAN3\",\"3C5C\":\"ZHA2\",\"3C5E\":\"JI2\",\"3C5F\":\"BO2 PI2 PI3\",\"3C62\":\"LANG2\",\"3C63\":\"TUI3\",\"3C65\":\"LING2\",\"3C66\":\"E4 GUI4 JI3\",\"3C67\":\"WO4\",\"3C68\":\"LIAN4\",\"3C69\":\"DU2\",\"3C6A\":\"MEN4\",\"3C6B\":\"LAN4\",\"3C6C\":\"WEI3\",\"3C6D\":\"DUAN4\",\"3C6E\":\"KUAI4 KUI4\",\"3C6F\":\"AI2 BEI4 JI4 JIAN4 SHAN3 SHEN4 YI3\",\"3C70\":\"ZAI3\",\"3C71\":\"HUI4 WU4 XI4\",\"3C72\":\"YI4\",\"3C73\":\"MO4\",\"3C74\":\"ZI4\",\"3C75\":\"BEN4 FEN4\",\"3C76\":\"BENG4 JIAO4 PENG2 QIAO3 RU4\",\"3C78\":\"BI4 BIE2\",\"3C79\":\"LI4 SUAN4 XIAN4\",\"3C7A\":\"LU2\",\"3C7B\":\"LUO3\",\"3C7D\":\"DAN4 QIN2\",\"3C7F\":\"QUE4\",\"3C80\":\"CHEN2\",\"3C82\":\"CHENG2\",\"3C83\":\"JIU4\",\"3C84\":\"KOU4\",\"3C85\":\"JI4\",\"3C86\":\"LING2\",\"3C88\":\"SHAO2\",\"3C89\":\"KAI4 KE2\",\"3C8A\":\"RUI4\",\"3C8B\":\"CHUO4 ZHUO2 ZU2\",\"3C8C\":\"NENG4\",\"3C8E\":\"LOU2\",\"3C8F\":\"BAO3 PIAO3 PIN2 PING4\",\"3C92\":\"BAO4\",\"3C93\":\"RONG2\",\"3C95\":\"LEI4\",\"3C98\":\"QU2\",\"3C9B\":\"ZHI3\",\"3C9C\":\"TAN2 TAN3\",\"3C9D\":\"RONG3\",\"3C9E\":\"ZU2\",\"3C9F\":\"YING3\",\"3CA0\":\"MAO2\",\"3CA1\":\"NAI4 NI4\",\"3CA2\":\"BIAN4 BIE2\",\"3CA5\":\"TANG2\",\"3CA6\":\"HAN4 HE3\",\"3CA7\":\"ZAO4\",\"3CA8\":\"RONG2\",\"3CAB\":\"PU2\",\"3CAD\":\"TAN3\",\"3CAF\":\"RAN2\",\"3CB0\":\"NING2\",\"3CB1\":\"LIE4\",\"3CB2\":\"DIE2 YI4\",\"3CB3\":\"DIE2\",\"3CB4\":\"ZHONG4 ZHOU4\",\"3CB6\":\"LV4\",\"3CB7\":\"DAN4\",\"3CB9\":\"GUI3 QIU2\",\"3CBA\":\"JI2 KE4 LEI2\",\"3CBB\":\"NI4\",\"3CBC\":\"YI4\",\"3CBD\":\"NIAN4 REN3 XIAN4\",\"3CBE\":\"YU3 YU4\",\"3CBF\":\"WANG3\",\"3CC0\":\"GUO4 KAI3 XI4\",\"3CC1\":\"ZE4\",\"3CC2\":\"YAN2\",\"3CC3\":\"CUI4\",\"3CC4\":\"XIAN2\",\"3CC5\":\"JIAO3 LIU2\",\"3CC6\":\"SHU3 TOU3\",\"3CC7\":\"FU4\",\"3CC8\":\"PEI4\",\"3CCD\":\"BU4\",\"3CCE\":\"BIAN4 FAN4\",\"3CCF\":\"CHI3 SHI4\",\"3CD0\":\"SA4 ZHA2 ZHA3\",\"3CD1\":\"YI4\",\"3CD2\":\"BIAN4 FA3\",\"3CD4\":\"DUI4\",\"3CD5\":\"LAN2\",\"3CD7\":\"CHAI4\",\"3CD9\":\"XUAN4\",\"3CDA\":\"YU4\",\"3CDB\":\"YU2\",\"3CE0\":\"TA4\",\"3CE5\":\"JU4 LONG4\",\"3CE6\":\"XIE4\",\"3CE7\":\"XI2\",\"3CE8\":\"JIAN3 ZA2 ZAN3\",\"3CEA\":\"PAN4 PI4\",\"3CEB\":\"TA4\",\"3CEC\":\"XUAN2\",\"3CED\":\"XIAN2\",\"3CEE\":\"NIAO4\",\"3CF4\":\"MI4\",\"3CF5\":\"JI4\",\"3CF6\":\"GOU4\",\"3CF7\":\"WEN3\",\"3CF9\":\"WANG3\",\"3CFA\":\"YOU2\",\"3CFB\":\"ZE2\",\"3CFC\":\"BI4\",\"3CFD\":\"MI3\",\"3CFF\":\"XIE4\",\"3D00\":\"FAN4\",\"3D01\":\"YI4\",\"3D03\":\"LEI4 LI4\",\"3D04\":\"YING2\",\"3D06\":\"JIN4 XING4\",\"3D07\":\"SHE4\",\"3D08\":\"YIN4\",\"3D09\":\"JI3\",\"3D0B\":\"SU4\",\"3D0F\":\"WANG3\",\"3D10\":\"MIAN4\",\"3D11\":\"SU4\",\"3D12\":\"YI4\",\"3D13\":\"ZAI3\",\"3D14\":\"SE4 YI4\",\"3D15\":\"JI2\",\"3D16\":\"LUO4\",\"3D18\":\"MAO4\",\"3D19\":\"ZHA2\",\"3D1A\":\"SUI4\",\"3D1B\":\"ZHI4\",\"3D1C\":\"BIAN4\",\"3D1D\":\"LI2\",\"3D25\":\"QIAO4\",\"3D26\":\"GUAN4\",\"3D28\":\"ZHEN4\",\"3D2A\":\"NIE4\",\"3D2B\":\"JUN4\",\"3D2C\":\"XIE4\",\"3D2D\":\"YAO3\",\"3D2E\":\"XIE4\",\"3D30\":\"NENG2\",\"3D33\":\"LONG3\",\"3D34\":\"CHEN2\",\"3D35\":\"MI4\",\"3D36\":\"QUE4\",\"3D38\":\"NA4 SHAN3 YE4\",\"3D3C\":\"SU4\",\"3D3D\":\"XIE4 YIN4\",\"3D3E\":\"BO2\",\"3D3F\":\"DING3\",\"3D40\":\"CUAN4 ZU2\",\"3D42\":\"CHUANG3 SHU4\",\"3D43\":\"CHE4 MANG2 SHE2 TAN2 TUO4 ZUI4\",\"3D44\":\"HAN4 QIA4 YU4\",\"3D45\":\"DAN4 TAN4\",\"3D46\":\"HAO4\",\"3D4A\":\"SHEN3 ZHE2\",\"3D4B\":\"MI4\",\"3D4C\":\"CHAN4 QIONG2 XUN2\",\"3D4D\":\"MEN4\",\"3D4E\":\"HAN3 JIAN4 KAN3\",\"3D4F\":\"CUI3\",\"3D50\":\"JUE2\",\"3D51\":\"HE4\",\"3D52\":\"FEI4\",\"3D53\":\"SHI2\",\"3D54\":\"CHE3 CHE4\",\"3D55\":\"SHEN4\",\"3D56\":\"NV4\",\"3D57\":\"FU4 PAN2 PING2\",\"3D58\":\"MAN4\",\"3D5D\":\"YI4\",\"3D5E\":\"CHOU2\",\"3D61\":\"BAO2\",\"3D62\":\"LEI2 LEI3\",\"3D63\":\"KE3 LUO3\",\"3D64\":\"DIAN4 SHA4 XIA2\",\"3D65\":\"BI4 MI4\",\"3D66\":\"SUI2\",\"3D67\":\"GE2\",\"3D68\":\"BI4 PI4\",\"3D69\":\"YI4\",\"3D6A\":\"XIAN2\",\"3D6B\":\"NI3 YI4\",\"3D6C\":\"YING2\",\"3D6D\":\"ZHU3\",\"3D6E\":\"CHUN2 WEN3\",\"3D6F\":\"FENG2\",\"3D70\":\"XU4\",\"3D71\":\"PIAO3\",\"3D72\":\"WU3\",\"3D73\":\"LIAO2 LIU2\",\"3D74\":\"CANG2\",\"3D75\":\"ZOU4\",\"3D77\":\"BIAN4\",\"3D78\":\"YAO4 YUE4\",\"3D79\":\"HUAN2\",\"3D7A\":\"PAI2 PAI4\",\"3D7B\":\"SOU4\",\"3D7D\":\"DUI4 LEI3\",\"3D7E\":\"JING4 QING4\",\"3D7F\":\"XI2\",\"3D81\":\"GUO2\",\"3D84\":\"YAN2\",\"3D85\":\"XUE2\",\"3D86\":\"CHU2\",\"3D87\":\"HENG2\",\"3D88\":\"YING2 YING4\",\"3D8C\":\"LIAN2\",\"3D8D\":\"XIAN3\",\"3D8E\":\"HUAN2\",\"3D91\":\"LIAN4\",\"3D92\":\"SHAN3 SHEN3 TAN4\",\"3D93\":\"CANG2\",\"3D94\":\"BEI4\",\"3D95\":\"JIAN3\",\"3D96\":\"SHU4\",\"3D97\":\"FAN4\",\"3D98\":\"DIAN4\",\"3D9A\":\"BA4\",\"3D9B\":\"YU2\",\"3D9E\":\"NANG3\",\"3D9F\":\"LEI3\",\"3DA0\":\"YI4\",\"3DA1\":\"DAI4 HUO3 ZUO2\",\"3DA3\":\"CHAN2\",\"3DA4\":\"CHAO3\",\"3DA6\":\"JIN4\",\"3DA7\":\"NEN4\",\"3DAB\":\"LIAO3 LIAO4\",\"3DAC\":\"MEI2 MO4\",\"3DAD\":\"JIU4 YOU3\",\"3DAF\":\"LIU4\",\"3DB0\":\"HAN2\",\"3DB2\":\"YONG4\",\"3DB3\":\"JIN4\",\"3DB4\":\"CHI3 SHI3\",\"3DB5\":\"REN4\",\"3DB6\":\"NONG2\",\"3DB9\":\"HONG4\",\"3DBA\":\"TIAN4\",\"3DBF\":\"BO2\",\"3DC0\":\"QIONG2\",\"3DC2\":\"SHU4\",\"3DC3\":\"CUI3\",\"3DC4\":\"HUI4\",\"3DC5\":\"CHAO3 MIAO3\",\"3DC6\":\"DOU4 FU4\",\"3DC7\":\"GUAI4 KUI2\",\"3DC8\":\"E4\",\"3DC9\":\"WEI4 YU4 YUN4\",\"3DCA\":\"FEN2\",\"3DCB\":\"TAN2 TAN3\",\"3DCD\":\"LUN2\",\"3DCE\":\"HE4 HONG2 XIE2\",\"3DCF\":\"YONG3\",\"3DD0\":\"HUI3\",\"3DD2\":\"YU2\",\"3DD3\":\"ZONG3\",\"3DD4\":\"YAN4\",\"3DD5\":\"QIU2\",\"3DD6\":\"ZHAO4\",\"3DD7\":\"JIONG3\",\"3DD8\":\"TAI2\",\"3DDF\":\"TUI4\",\"3DE0\":\"LIN2\",\"3DE1\":\"JIONG3\",\"3DE2\":\"ZHA3\",\"3DE4\":\"HE4 HU4 XUE4\",\"3DE6\":\"XU4\",\"3DEA\":\"CUI4 ZUAN3\",\"3DEB\":\"QING3\",\"3DEC\":\"MO4\",\"3DEF\":\"BENG4\",\"3DF0\":\"LI2\",\"3DF3\":\"YAN4\",\"3DF4\":\"GE2 LI4\",\"3DF5\":\"MO4\",\"3DF6\":\"BEI4 BI4\",\"3DF7\":\"JUAN3\",\"3DF8\":\"DIE2 YE4\",\"3DF9\":\"SHAO4\",\"3DFB\":\"WU2\",\"3DFC\":\"YAN4\",\"3DFE\":\"JUE2\",\"3E00\":\"TAI2\",\"3E01\":\"HAN3 HAN4\",\"3E03\":\"DIAN3\",\"3E04\":\"JI4 JIE2\",\"3E05\":\"JIE2\",\"3E09\":\"XIE4\",\"3E0A\":\"LA4 LAI4 LIE4\",\"3E0B\":\"FAN2\",\"3E0C\":\"HUO4\",\"3E0D\":\"XI4\",\"3E0E\":\"NIE4\",\"3E0F\":\"MI2\",\"3E10\":\"RAN2\",\"3E11\":\"CUAN4\",\"3E12\":\"YIN2\",\"3E13\":\"MI4\",\"3E15\":\"JUE2\",\"3E17\":\"TONG2\",\"3E18\":\"WAN4\",\"3E1A\":\"LI3\",\"3E1B\":\"SHAO2 SHUO4\",\"3E1C\":\"KONG4\",\"3E1D\":\"KAN3\",\"3E1E\":\"BAN3\",\"3E20\":\"TIAO3\",\"3E22\":\"BEI4\",\"3E23\":\"YE4 YI4\",\"3E24\":\"PIAN4\",\"3E25\":\"CHAN2\",\"3E26\":\"HU4\",\"3E27\":\"KEN4 YIN2\",\"3E29\":\"AN4\",\"3E2A\":\"CHUN2\",\"3E2B\":\"QIAN2\",\"3E2C\":\"BEI4 FEI4 PEI4\",\"3E2E\":\"FEN2\",\"3E30\":\"TUO2\",\"3E31\":\"TUO2\",\"3E32\":\"ZUO2 ZUO4\",\"3E33\":\"LING2\",\"3E35\":\"GUI3 WEI3\",\"3E37\":\"SHI4\",\"3E38\":\"HOU3 OU3\",\"3E39\":\"LIE4\",\"3E3B\":\"SI4\",\"3E3D\":\"BEI4\",\"3E3E\":\"REN4\",\"3E3F\":\"DU2\",\"3E40\":\"BO2\",\"3E41\":\"LIANG2\",\"3E42\":\"CI4 QIAN3\",\"3E43\":\"BI4 FEI4\",\"3E44\":\"JI4 QI4\",\"3E45\":\"ZONG3\",\"3E47\":\"HE2\",\"3E48\":\"LI2 MAO2\",\"3E49\":\"YUAN2\",\"3E4A\":\"YUE4\",\"3E4C\":\"CHAN3 SHENG4\",\"3E4D\":\"DI2 DU2\",\"3E4E\":\"LEI2\",\"3E4F\":\"JIN3\",\"3E50\":\"CHONG2 ZHOU4\",\"3E51\":\"SI4 YI2\",\"3E52\":\"PU3\",\"3E53\":\"YI4\",\"3E56\":\"HUAN4\",\"3E57\":\"TAO2\",\"3E58\":\"RU2 RU4 RUI2\",\"3E59\":\"YING2\",\"3E5A\":\"YING2\",\"3E5B\":\"RAO2\",\"3E5C\":\"YIN2\",\"3E5D\":\"SHI4\",\"3E5E\":\"YIN2 YIN3\",\"3E5F\":\"JUE2\",\"3E60\":\"TUN2\",\"3E61\":\"XUAN2 XUAN4\",\"3E64\":\"QIE4 QUE4\",\"3E65\":\"ZHU4\",\"3E68\":\"YOU4\",\"3E6B\":\"XI4 YI2\",\"3E6C\":\"SHI3\",\"3E6D\":\"YI4\",\"3E6E\":\"MO4\",\"3E71\":\"HU2 QUE4 RAN3\",\"3E72\":\"XIAO4\",\"3E73\":\"WU2\",\"3E75\":\"JING4\",\"3E76\":\"TING2\",\"3E77\":\"SHI3 XIN4\",\"3E78\":\"NI2\",\"3E7A\":\"TA4\",\"3E7C\":\"CHU3 JU2 YU4\",\"3E7D\":\"CHAN3 SHAN4\",\"3E7E\":\"PIAO3\",\"3E7F\":\"DIAO3 ZHAO4 ZHUO2\",\"3E80\":\"NAO2\",\"3E81\":\"NAO3\",\"3E82\":\"GAN3 JIAN4 YAN2\",\"3E83\":\"GOU3\",\"3E84\":\"YU3\",\"3E85\":\"HOU2\",\"3E89\":\"HU4\",\"3E8A\":\"YANG4\",\"3E8C\":\"XIAN4\",\"3E8E\":\"RONG2\",\"3E8F\":\"LOU2\",\"3E90\":\"ZHAO3\",\"3E91\":\"CAN2\",\"3E92\":\"LIAO4 YAO2\",\"3E93\":\"PIAO4\",\"3E94\":\"HAI4 WEI4\",\"3E95\":\"FAN2\",\"3E96\":\"HAN3\",\"3E97\":\"DAN4 YAN2\",\"3E98\":\"ZHAN4\",\"3E9A\":\"TA3\",\"3E9B\":\"ZHU4\",\"3E9C\":\"BAN3 NONG2 WAN4\",\"3E9D\":\"JIAN4\",\"3E9E\":\"YU2\",\"3E9F\":\"ZHUO2\",\"3EA0\":\"YOU4 YU4\",\"3EA1\":\"LI4\",\"3EA5\":\"CHAN2 TAN2\",\"3EA6\":\"LIAN2\",\"3EA9\":\"JIU4 SE4\",\"3EAA\":\"PU2\",\"3EAB\":\"QIU2\",\"3EAC\":\"GONG3\",\"3EAD\":\"ZI3\",\"3EAE\":\"YU2\",\"3EB1\":\"RENG2\",\"3EB2\":\"NIU3\",\"3EB3\":\"MEI2\",\"3EB5\":\"JIU2\",\"3EB7\":\"XU4\",\"3EB8\":\"PING2\",\"3EB9\":\"BIAN4\",\"3EBA\":\"MAO4\",\"3EBF\":\"YI2\",\"3EC0\":\"YOU2 YU2\",\"3EC2\":\"PING2\",\"3EC4\":\"BAO3\",\"3EC5\":\"HUI4 KUAI4\",\"3EC9\":\"BU4\",\"3ECA\":\"MANG2 MEN2 MENG4\",\"3ECB\":\"LA4 LEI4\",\"3ECC\":\"TU2\",\"3ECD\":\"WU2\",\"3ECE\":\"LI4 SE4\",\"3ECF\":\"LING2 LING3\",\"3ED1\":\"JI4\",\"3ED2\":\"JUN4\",\"3ED4\":\"DUO3 RUI4\",\"3ED5\":\"JUE2\",\"3ED6\":\"DAI4\",\"3ED7\":\"BEI4\",\"3EDD\":\"LA4\",\"3EDE\":\"BIAN4 FEN4 PIN4\",\"3EDF\":\"SUI2\",\"3EE0\":\"TU2\",\"3EE1\":\"DIE2 JUE2\",\"3EE7\":\"DUO4 HE2\",\"3EEA\":\"SUI4\",\"3EEB\":\"BI4\",\"3EEC\":\"TU2\",\"3EED\":\"SE4 ZE2\",\"3EEE\":\"CAN4\",\"3EEF\":\"TU2\",\"3EF0\":\"MIAN3 RE4 WEI4 YU4\",\"3EF2\":\"LV3\",\"3EF5\":\"ZHAN4\",\"3EF6\":\"BI3 BI4\",\"3EF7\":\"JI2\",\"3EF8\":\"CEN2 JIN4 XIN2\",\"3EFA\":\"LI4 LIE4\",\"3EFD\":\"SUI4\",\"3EFF\":\"SHU3\",\"3F02\":\"E2 WEN4 YUAN3\",\"3F07\":\"QIONG2\",\"3F08\":\"LUO2\",\"3F09\":\"YIN4 ZHEN4\",\"3F0A\":\"TUN2\",\"3F0B\":\"GU3 JIU3 MOU2 RU3\",\"3F0C\":\"YU3\",\"3F0D\":\"LEI3\",\"3F0E\":\"BEI4 BO2 KE3\",\"3F0F\":\"NEI3\",\"3F10\":\"PIAN2\",\"3F11\":\"LIAN4 LUAN2\",\"3F12\":\"QIU3 TANG3\",\"3F13\":\"LIAN2 LIAN3\",\"3F16\":\"LI4\",\"3F17\":\"DING3 TING2\",\"3F18\":\"WA3\",\"3F19\":\"ZHOU4\",\"3F1B\":\"XING2\",\"3F1C\":\"ANG4 POU2\",\"3F1D\":\"FAN4 WAN3\",\"3F1E\":\"PENG4\",\"3F1F\":\"BAI2\",\"3F20\":\"TUO2\",\"3F22\":\"E3 YI2\",\"3F23\":\"BAI3 BO2\",\"3F24\":\"QI4 QIE4 YA4\",\"3F25\":\"CHU2 KAO3 TOU3\",\"3F26\":\"GONG3\",\"3F27\":\"TONG2\",\"3F28\":\"HAN2\",\"3F29\":\"CHENG2\",\"3F2A\":\"JIA2\",\"3F2B\":\"HUAN4\",\"3F2C\":\"XING4\",\"3F2D\":\"DIAN4 NIAO3\",\"3F2E\":\"MAI2\",\"3F2F\":\"DONG4\",\"3F30\":\"E2 PI2\",\"3F31\":\"RUAN3\",\"3F32\":\"LIE4\",\"3F33\":\"SHENG3\",\"3F34\":\"OU3\",\"3F35\":\"DI4\",\"3F36\":\"YU2\",\"3F37\":\"CHUAN2\",\"3F38\":\"RONG2\",\"3F3A\":\"TANG2\",\"3F3B\":\"CONG2\",\"3F3C\":\"PIAO2\",\"3F3D\":\"SHUANG3\",\"3F3E\":\"LU4\",\"3F3F\":\"TONG2\",\"3F40\":\"ZHENG4\",\"3F41\":\"LI4\",\"3F42\":\"SA4\",\"3F47\":\"GUAI4 HU2 HUI2 MENG2 SE4\",\"3F48\":\"YI4\",\"3F49\":\"HAN3 JIAN4 XIAN4\",\"3F4A\":\"XIE4\",\"3F4B\":\"LUO2 LUO4\",\"3F4C\":\"LIU4\",\"3F4E\":\"DAN3 TAN2\",\"3F51\":\"TAN2\",\"3F55\":\"YOU2\",\"3F56\":\"NAN2\",\"3F58\":\"GANG3\",\"3F59\":\"JUN4\",\"3F5A\":\"CHI4\",\"3F5B\":\"KOU4 QU2\",\"3F5C\":\"WAN3\",\"3F5D\":\"LI4\",\"3F5E\":\"LIU2\",\"3F5F\":\"LIE4\",\"3F60\":\"XIA2\",\"3F62\":\"AN3 YE4\",\"3F63\":\"YU4\",\"3F64\":\"JU2\",\"3F65\":\"ROU2\",\"3F66\":\"XUN2\",\"3F68\":\"CUO2\",\"3F69\":\"CAN4 CAO4\",\"3F6A\":\"ZENG3 ZHA3\",\"3F6B\":\"YONG3\",\"3F6C\":\"FU4\",\"3F6D\":\"RUAN3\",\"3F6F\":\"XI2\",\"3F70\":\"SHU4\",\"3F71\":\"JIAO3\",\"3F72\":\"JIAO3\",\"3F73\":\"HAN4 XIE4 XU3 YU2\",\"3F74\":\"ZHANG4\",\"3F77\":\"SHUI4\",\"3F78\":\"CHEN2\",\"3F79\":\"FAN4 WAN3\",\"3F7A\":\"JI2\",\"3F7D\":\"GU4\",\"3F7E\":\"WU4\",\"3F80\":\"QIE4\",\"3F81\":\"SHU4\",\"3F83\":\"TUO2\",\"3F84\":\"DU2\",\"3F85\":\"SI4 ZHI4 ZI3\",\"3F86\":\"RAN2 SHAN3\",\"3F87\":\"MU4\",\"3F88\":\"FU4\",\"3F89\":\"LING2\",\"3F8A\":\"JI2\",\"3F8B\":\"XIU4\",\"3F8C\":\"XUAN3\",\"3F8D\":\"NAI2\",\"3F8F\":\"JIE4\",\"3F90\":\"LI4\",\"3F91\":\"DA2\",\"3F92\":\"JI4 RU2 RU4\",\"3F94\":\"LV3\",\"3F95\":\"SHEN3\",\"3F96\":\"LI3 LUO2\",\"3F97\":\"LANG3 LIANG4\",\"3F98\":\"GENG3\",\"3F99\":\"YIN3\",\"3F9B\":\"QIN3\",\"3F9C\":\"QIE4\",\"3F9D\":\"CHE4\",\"3F9E\":\"YOU3\",\"3F9F\":\"BU4\",\"3FA0\":\"HUANG2 KUANG2 KUI4\",\"3FA1\":\"QUE4\",\"3FA2\":\"LAI4\",\"3FA5\":\"XU4\",\"3FA6\":\"BANG4 PEI4 PEN2\",\"3FA7\":\"KE4\",\"3FA8\":\"QI3 YI3\",\"3FAA\":\"SHENG3\",\"3FAD\":\"ZHOU4\",\"3FAE\":\"HUANG2\",\"3FAF\":\"TUI2 WEI3\",\"3FB0\":\"HU2\",\"3FB1\":\"BEI4 FAN4 FEI4 FU2\",\"3FB5\":\"JI4\",\"3FB6\":\"GU3\",\"3FB8\":\"GAO3\",\"3FB9\":\"CHAI2\",\"3FBA\":\"MA4 MO4\",\"3FBB\":\"ZHU4\",\"3FBC\":\"TUI3\",\"3FBD\":\"TUI2 ZHUI4\",\"3FBE\":\"LIAN2\",\"3FBF\":\"LANG2 LANG3\",\"3FC3\":\"DAI4 ZHI4\",\"3FC4\":\"AI4\",\"3FC5\":\"XIAN3 XUAN3\",\"3FC7\":\"XI2 XI4\",\"3FC9\":\"TUI2\",\"3FCA\":\"CAN3\",\"3FCB\":\"SAO4\",\"3FCD\":\"JIE4\",\"3FCE\":\"FEN4\",\"3FCF\":\"QUN2\",\"3FD1\":\"YAO4\",\"3FD2\":\"DAO3\",\"3FD3\":\"JIA2\",\"3FD4\":\"LEI3\",\"3FD5\":\"YAN2\",\"3FD6\":\"LU2\",\"3FD7\":\"TUI2\",\"3FD8\":\"YING2\",\"3FD9\":\"PI4\",\"3FDA\":\"LUO4\",\"3FDB\":\"LI2 LI4\",\"3FDC\":\"BIE3\",\"3FDE\":\"MAO4\",\"3FDF\":\"BAI2 JIAO3\",\"3FE2\":\"YAO4 ZHUI4\",\"3FE3\":\"HE2 XIA2\",\"3FE4\":\"CHUN3\",\"3FE5\":\"HU2\",\"3FE6\":\"NING4\",\"3FE7\":\"CHOU2\",\"3FE8\":\"LI4\",\"3FE9\":\"TANG3\",\"3FEA\":\"HUAN2\",\"3FEB\":\"BI4\",\"3FED\":\"CHE4\",\"3FEE\":\"YANG4\",\"3FEF\":\"DA2\",\"3FF0\":\"AO2\",\"3FF1\":\"XUE2\",\"3FF5\":\"RAN3\",\"3FF7\":\"ZAO4\",\"3FF8\":\"WAN3\",\"3FF9\":\"TA4\",\"3FFA\":\"BAO2\",\"3FFC\":\"YAN2\",\"3FFE\":\"ZHU4\",\"3FFF\":\"YA3\",\"400A\":\"JIAO3\",\"400B\":\"YAN2\",\"400D\":\"KAN4\",\"400E\":\"MIAN3\",\"400F\":\"XIAN4\",\"401A\":\"ANG2\",\"401B\":\"MEI4 WU4\",\"401C\":\"GU3 MEI4 XUE2\",\"401F\":\"FAN2 FEI4 FEN4\",\"402A\":\"HANG2\",\"402B\":\"JIA2\",\"402C\":\"QUAN2\",\"402E\":\"MANG2\",\"402F\":\"BU3\",\"403B\":\"PIN4\",\"403C\":\"REN4 ZHEN3\",\"403D\":\"YAN2\",\"403E\":\"DU3\",\"403F\":\"DI4\",\"404A\":\"WO4\",\"404B\":\"SHE2\",\"404C\":\"YU4\",\"404D\":\"JIA4 KE4 QIA4\",\"404E\":\"CHENG2\",\"404F\":\"YAO3\",\"405A\":\"SUN3\",\"405B\":\"GUI3 GUI4 KUI4\",\"405C\":\"HUANG3 HUANG4\",\"405D\":\"YING2\",\"405E\":\"SHENG3\",\"405F\":\"CHA2 DUO2\",\"406A\":\"NAN3 ZHAN3\",\"406B\":\"HU2\",\"406C\":\"CENG2\",\"406E\":\"QIAN2\",\"406F\":\"SHE4 XIE2\",\"407A\":\"SHI4\",\"407B\":\"LI4 SHUO4\",\"407C\":\"MO4 MU4\",\"407D\":\"LIE4\",\"407E\":\"MIE4\",\"407F\":\"MO4\",\"408A\":\"YU4\",\"408D\":\"BO2\",\"408E\":\"ZUAN3\",\"409A\":\"YAO2 YOU2\",\"409B\":\"YU2\",\"409C\":\"BANG4 PEI2\",\"409D\":\"JIE2 ZE2 ZHE2\",\"409E\":\"ZHE4\",\"40A0\":\"SHE2 SHI3\",\"40A1\":\"DI3 ZHI3\",\"40A2\":\"DONG3\",\"40A3\":\"CI2\",\"40A4\":\"FU4 HAI2\",\"40A5\":\"MIN2\",\"40A6\":\"ZHEN3\",\"40A7\":\"ZHEN3\",\"40A9\":\"YAN4\",\"40AA\":\"DIAO4 TIAO3\",\"40AB\":\"HONG2\",\"40AC\":\"GONG3\",\"40AE\":\"LVE4\",\"40AF\":\"GUAI4 GUAN4\",\"40B0\":\"LA4\",\"40B1\":\"CUI4 RUI4\",\"40B2\":\"FA3\",\"40B3\":\"CUO3\",\"40B4\":\"YAN2\",\"40B6\":\"JIE2\",\"40B8\":\"GUO2 XU4\",\"40B9\":\"SUO3\",\"40BA\":\"WAN3 WO3\",\"40BB\":\"ZHENG4\",\"40BC\":\"NIE4\",\"40BD\":\"DIAO4 YI4\",\"40BE\":\"LAI3\",\"40BF\":\"TA4 TIE4\",\"40C0\":\"CUI4 XUN4\",\"40C2\":\"GUN3 GUN4\",\"40C7\":\"MIAN2\",\"40C9\":\"MIN2\",\"40CA\":\"JU3\",\"40CB\":\"YU2\",\"40CD\":\"ZHAO4 ZHUI4\",\"40CE\":\"ZE2 ZHA4\",\"40D1\":\"PAN2\",\"40D2\":\"HE2\",\"40D3\":\"GOU4\",\"40D4\":\"HONG2\",\"40D5\":\"LAO2 LUO4\",\"40D6\":\"WU4\",\"40D7\":\"CHUO4\",\"40D9\":\"LU4\",\"40DA\":\"CU4\",\"40DB\":\"LIAN2 QIAN4\",\"40DD\":\"QIAO4\",\"40DE\":\"SHU2 YI4\",\"40E1\":\"CEN2\",\"40E3\":\"HUI3\",\"40E4\":\"SU4\",\"40E5\":\"CHUANG2\",\"40E7\":\"LONG2\",\"40E9\":\"NAO2\",\"40EA\":\"TAN2\",\"40EB\":\"DAN3\",\"40EC\":\"WEI3\",\"40ED\":\"GAN3\",\"40EE\":\"DA2\",\"40EF\":\"LI4\",\"40F1\":\"XIAN4\",\"40F2\":\"PAN2 PAN4\",\"40F3\":\"LA4\",\"40F5\":\"NIAO3\",\"40F6\":\"HUAI2\",\"40F7\":\"YING2\",\"40F8\":\"XIAN4\",\"40F9\":\"LAN4 LANG3\",\"40FA\":\"MO2\",\"40FB\":\"BA4 PAI2\",\"40FD\":\"FU2 GUI3 SI4\",\"40FE\":\"BI3\",\"410B\":\"YAN3\",\"410C\":\"ZHUI4\",\"410D\":\"DU4 DUO2 ZHA4\",\"410E\":\"QI3\",\"410F\":\"YU2\",\"411A\":\"CAO2\",\"411B\":\"LOU2\",\"411C\":\"LI2\",\"411D\":\"CHUN3\",\"411F\":\"CUI4\",\"412A\":\"CHUO4 DIAO3\",\"412B\":\"QI3\",\"412C\":\"YI2\",\"412D\":\"NIAN2\",\"412F\":\"JIAN3 XIAN4\",\"413A\":\"ZHI4\",\"413B\":\"CHAO2 TAO2 ZHAO4\",\"413C\":\"TIAN3\",\"413D\":\"TIAN3\",\"413E\":\"ROU4\",\"413F\":\"YI4\",\"414A\":\"DU4\",\"414B\":\"WAN3\",\"414D\":\"DONG4 TING3\",\"414E\":\"YOU3\",\"414F\":\"HUI4 WEI4\",\"415A\":\"QIANG3 QUAN3 ZE2\",\"415C\":\"DUO4\",\"415E\":\"NA4 NAI4 NE4\",\"415F\":\"CAN3\",\"416A\":\"TUI2\",\"416C\":\"AI4 YAN3 YE4\",\"416D\":\"PANG2\",\"416E\":\"CANG4\",\"416F\":\"TANG2\",\"417A\":\"MIAO3\",\"417B\":\"LI2\",\"417C\":\"MAN2\",\"417D\":\"GU3\",\"417E\":\"CEN2 QIAN2 QIN2\",\"417F\":\"HUA2\",\"418A\":\"CUI4\",\"418B\":\"QIU1\",\"418D\":\"LONG2\",\"418F\":\"FEI4\",\"419A\":\"TONG2\",\"419B\":\"CHA2 ZHA4 ZHE2\",\"419C\":\"YOU4\",\"419D\":\"SHU4\",\"419E\":\"YAO3\",\"419F\":\"GE2\",\"41A0\":\"HUAN4\",\"41A1\":\"LANG2 LANG4\",\"41A2\":\"JUE2\",\"41A3\":\"CHEN2\",\"41A6\":\"SHEN4\",\"41A8\":\"MING2\",\"41A9\":\"MING2\",\"41AB\":\"CHUANG1 CONG1\",\"41AC\":\"YUN3\",\"41AE\":\"JIN4\",\"41AF\":\"CHUO4\",\"41B1\":\"TAN3\",\"41B3\":\"QIONG2 SUI4\",\"41B5\":\"CHENG2\",\"41B7\":\"YU4\",\"41B8\":\"CHENG2\",\"41B9\":\"TONG3\",\"41BB\":\"QIAO4\",\"41BD\":\"JU4 QU2 QUN2\",\"41BE\":\"LAN2\",\"41BF\":\"YI4\",\"41C0\":\"RONG2 RONG3\",\"41C3\":\"SI4 XIAO4\",\"41C5\":\"FA2\",\"41C7\":\"MENG2\",\"41C8\":\"GUI4 HUA4\",\"41CB\":\"HAI4 RAN3 XIE4\",\"41CC\":\"QIAO4\",\"41CD\":\"CHUO4\",\"41CE\":\"QUE4\",\"41CF\":\"DUI4\",\"41D0\":\"LI4\",\"41D1\":\"BA4\",\"41D2\":\"JIE4 QIN2 XIAN4\",\"41D4\":\"LUO4 NUO4\",\"41D6\":\"YUN3\",\"41D8\":\"HU4\",\"41D9\":\"YIN3\",\"41DB\":\"ZHI3 ZHI4\",\"41DC\":\"LIAN3\",\"41DE\":\"GAN3\",\"41DF\":\"JIAN4\",\"41E0\":\"ZHOU4 ZHU4\",\"41E1\":\"ZHU4\",\"41E2\":\"KU3\",\"41E3\":\"NA4 NEI4 YI3\",\"41E4\":\"DUI4 RUI4 SU4\",\"41E5\":\"ZE2 ZUO2\",\"41E6\":\"YANG3\",\"41E7\":\"ZHU4\",\"41E8\":\"GONG4 XIANG2\",\"41E9\":\"YI4\",\"41EC\":\"CHUANG3\",\"41ED\":\"LAO3\",\"41EE\":\"REN4\",\"41EF\":\"RONG2\",\"41F1\":\"NA4\",\"41F2\":\"CE4 JIA1\",\"41F5\":\"YI2\",\"41F6\":\"JUE2\",\"41F7\":\"BI3 BIE2\",\"41F8\":\"CHENG2 SHENG4 ZENG4\",\"41F9\":\"JUN4\",\"41FA\":\"CHOU2 DOU4\",\"41FB\":\"HUI4 KUI4 WEI3\",\"41FC\":\"CHI4 YI4\",\"41FD\":\"ZHI4\",\"41FE\":\"YAN2\",\"420A\":\"LING2\",\"420B\":\"TA4\",\"420D\":\"MANG2\",\"420E\":\"YE4\",\"420F\":\"BAO2\",\"421A\":\"TAI2\",\"421B\":\"KUAI4\",\"421C\":\"QIN4\",\"421E\":\"DU3\",\"421F\":\"CE4\",\"422A\":\"XI4\",\"422B\":\"NA4\",\"422C\":\"PU2\",\"422D\":\"HUAI2\",\"422E\":\"JU3 JU4 WAN3\",\"423B\":\"PU2\",\"423C\":\"MIE4\",\"423E\":\"SHUO4\",\"423F\":\"MAI4 MI4\",\"424A\":\"FAN4 FANG2\",\"424B\":\"MEI4\",\"424C\":\"SUI4\",\"424D\":\"JIAN3\",\"424E\":\"TANG2\",\"424F\":\"XIE4\",\"425A\":\"MENG2\",\"425B\":\"YU4\",\"425C\":\"ZHI4\",\"425D\":\"QI3\",\"425E\":\"DAN3\",\"425F\":\"HUO4\",\"426A\":\"LEI4\",\"426B\":\"LI2\",\"426C\":\"FEI4\",\"426D\":\"LIE4\",\"426E\":\"LIN4\",\"426F\":\"XIAN4\",\"427A\":\"HONG2\",\"427B\":\"QI2\",\"427C\":\"LIAO4\",\"427D\":\"BAN3\",\"427E\":\"MI4\",\"427F\":\"HU2 LUO4\",\"428A\":\"MEI4\",\"428D\":\"LI2\",\"428E\":\"QUAN3\",\"429B\":\"SA3\",\"429C\":\"TUAN2\",\"429D\":\"XIE4\",\"429E\":\"ZHE2\",\"429F\":\"MEN2\",\"42A0\":\"XI4\",\"42A1\":\"MAN2\",\"42A3\":\"HUANG2\",\"42A4\":\"TAN2\",\"42A5\":\"XIAO4\",\"42A6\":\"YA2 YE4\",\"42A7\":\"BI4\",\"42A8\":\"LUO2\",\"42A9\":\"FAN2 FAN4\",\"42AA\":\"LI4\",\"42AB\":\"CUI3 MI2\",\"42AC\":\"CHA4\",\"42AD\":\"CHOU2 DAO4\",\"42AE\":\"DI2 ZHE2 ZHE4\",\"42AF\":\"KUANG4\",\"42B0\":\"CHU3\",\"42B2\":\"CHAN3\",\"42B3\":\"MI2\",\"42B4\":\"QIAN4\",\"42B5\":\"QIU2\",\"42B6\":\"ZHEN4\",\"42BA\":\"GU3 HU4\",\"42BB\":\"YAN3\",\"42BC\":\"CHI3\",\"42BD\":\"GUAI4\",\"42BE\":\"MU4\",\"42BF\":\"BO2 KU4\",\"42C0\":\"KUA4\",\"42C1\":\"GENG3\",\"42C2\":\"YAO2\",\"42C3\":\"MAO4\",\"42C4\":\"WANG3\",\"42C8\":\"RU2\",\"42C9\":\"JUE2 KE3 XUE2\",\"42CB\":\"MIN2\",\"42CC\":\"JIANG3\",\"42CE\":\"ZHAN4\",\"42CF\":\"ZUO4\",\"42D0\":\"YUE4\",\"42D1\":\"BING3\",\"42D3\":\"ZHOU4\",\"42D4\":\"BI4\",\"42D5\":\"REN4\",\"42D6\":\"YU4\",\"42D8\":\"CHUO4 ZHUI4\",\"42D9\":\"ER3\",\"42DA\":\"YI4\",\"42DB\":\"MI2 MI3\",\"42DC\":\"QING4\",\"42DE\":\"WANG3\",\"42DF\":\"JI4\",\"42E0\":\"BU3\",\"42E2\":\"BIE4\",\"42E3\":\"FAN2 PAN2\",\"42E4\":\"YAO4 YUE4\",\"42E5\":\"LI2\",\"42E6\":\"FAN2\",\"42E7\":\"QU2\",\"42E8\":\"FU3\",\"42E9\":\"ER2\",\"42ED\":\"HUO4 YU4\",\"42EE\":\"JIN4 QIAN2\",\"42EF\":\"QI3 QING4\",\"42F0\":\"JU2\",\"42F1\":\"LAI2\",\"42F2\":\"CHE3 SHENG2 XING3 ZHE4\",\"42F3\":\"BEI4 MI4\",\"42F4\":\"NIU4 RONG3 ROU2 RU3\",\"42F5\":\"YI4\",\"42F6\":\"XU4\",\"42F7\":\"LIU2 MOU2\",\"42F8\":\"XUN2\",\"42F9\":\"FU2 FU4\",\"42FB\":\"NIN2\",\"42FC\":\"TING3 YING2\",\"42FD\":\"BENG3 PENG3\",\"42FE\":\"ZHA3\",\"430A\":\"YAO2 YOU2\",\"430C\":\"QI4 QIE4 QU3\",\"430D\":\"HAN4 JIN3\",\"430E\":\"LVE4\",\"430F\":\"MI4 MIAN4\",\"431A\":\"SU4\",\"431B\":\"YAO2\",\"431C\":\"NIE4\",\"431D\":\"JIN4\",\"431E\":\"LIAN3\",\"431F\":\"BI4\",\"432A\":\"YAN2\",\"432B\":\"LAN3\",\"432C\":\"CHONG2\",\"432F\":\"GUAN4 QUAN2\",\"433A\":\"ER3\",\"433B\":\"YI4\",\"433C\":\"RUI4\",\"433D\":\"CAI3\",\"433E\":\"REN2\",\"433F\":\"FU2\",\"434A\":\"JUE2\",\"434B\":\"CHUI2\",\"434C\":\"BU4 FU2\",\"434D\":\"GU3 GU4 GUANG4 KOU4\",\"434E\":\"CUN4\",\"435A\":\"LANG4\",\"435B\":\"GU4\",\"435C\":\"ZHAO4\",\"435D\":\"TA4 ZAN3\",\"435E\":\"YU4\",\"435F\":\"ZONG4\",\"436A\":\"KUI4 WA4\",\"436B\":\"TUO2\",\"436E\":\"ZHAO4\",\"436F\":\"GUI3 JI4\",\"437A\":\"HUAN2\",\"437B\":\"XUAN3\",\"437C\":\"CAN2\",\"437D\":\"LI4\",\"437E\":\"TUI2 YAN3\",\"437F\":\"HUANG2\",\"438A\":\"PO4\",\"438B\":\"HE4 KAO4\",\"438C\":\"CU4\",\"438E\":\"NA4\",\"438F\":\"AN4 HAN2\",\"439A\":\"GUAN4 HUI4\",\"439D\":\"CHU2 ZHU4\",\"439F\":\"ER2 NUO4\",\"43A0\":\"ER2\",\"43A1\":\"NUAN3 RUAN3\",\"43A2\":\"QI3\",\"43A3\":\"SI4 XIN4\",\"43A4\":\"CHU2 JU2\",\"43A6\":\"YAN3\",\"43A7\":\"BANG4 POU2\",\"43A8\":\"AN4 YE4\",\"43AA\":\"NE4\",\"43AB\":\"CHUANG4 ZONG3\",\"43AC\":\"BA4 PA2\",\"43AE\":\"TI4\",\"43AF\":\"HAN4\",\"43B0\":\"ZUO2\",\"43B1\":\"BA4 PA2\",\"43B2\":\"ZHE2\",\"43B3\":\"WA4 YUE4\",\"43B4\":\"SHENG4\",\"43B5\":\"BI4\",\"43B6\":\"ER4\",\"43B7\":\"ZHU4\",\"43B8\":\"WU4\",\"43B9\":\"WEN2\",\"43BA\":\"ZHI3 ZHI4\",\"43BB\":\"ZHOU3\",\"43BC\":\"LU4\",\"43BD\":\"WEN2 WEN4\",\"43BE\":\"GUN3\",\"43BF\":\"QIU2 XIONG4\",\"43C0\":\"LA4\",\"43C1\":\"ZAI3\",\"43C2\":\"SOU3\",\"43C3\":\"MIAN2\",\"43C4\":\"ZHI4\",\"43C5\":\"QI4\",\"43C6\":\"CAO2 CHUA4 QIAO2\",\"43C7\":\"PIAO4\",\"43C8\":\"LIAN2\",\"43CA\":\"LONG2\",\"43CB\":\"SU4\",\"43CC\":\"QI4 YI4\",\"43CD\":\"YUAN4\",\"43CE\":\"FENG2 HAN4\",\"43D0\":\"JUE2 ZHUO4\",\"43D1\":\"DI4 ZHI4\",\"43D2\":\"PIAN4\",\"43D3\":\"GUAN3\",\"43D4\":\"NIU3\",\"43D5\":\"REN3 RUN4\",\"43D6\":\"ZHEN4\",\"43D7\":\"GAI4 KUI4\",\"43D8\":\"PI3 PI4\",\"43D9\":\"TAN3\",\"43DA\":\"CHAO3\",\"43DB\":\"CHUN3\",\"43DD\":\"CHUN2 ZHUAN3\",\"43DE\":\"MO4\",\"43DF\":\"BIE4\",\"43E0\":\"QI4\",\"43E1\":\"SHI4\",\"43E2\":\"BI3\",\"43E3\":\"JUE2 QU4\",\"43E4\":\"SI4\",\"43E6\":\"HUA2 TIAN2 WAN3\",\"43E7\":\"NA2\",\"43E8\":\"HUI3\",\"43EA\":\"ER4\",\"43EC\":\"MOU2\",\"43EE\":\"XI2 XIE2\",\"43EF\":\"ZHI4\",\"43F0\":\"REN3\",\"43F1\":\"JU2\",\"43F2\":\"DIE2\",\"43F3\":\"ZHE4\",\"43F4\":\"SHAO4 SHE4\",\"43F5\":\"MENG3\",\"43F6\":\"BI4\",\"43F7\":\"HAN4\",\"43F8\":\"YU2\",\"43F9\":\"XIAN4\",\"43FB\":\"NENG2\",\"43FC\":\"CAN2\",\"43FD\":\"BU4\",\"43FF\":\"QI3\",\"440A\":\"DA2 HUN2 HUN4\",\"440C\":\"TIAN3 ZHOU4\",\"440D\":\"ZHOU4\",\"440F\":\"CHUN3\",\"441A\":\"JI2 JI4\",\"441D\":\"SUO3\",\"441E\":\"RUO4\",\"441F\":\"XIANG4\",\"442A\":\"FAN4 JUAN3\",\"442C\":\"CAO2\",\"442D\":\"ZHI4\",\"442E\":\"CHAN3\",\"442F\":\"LEI2\",\"443A\":\"TAN4\",\"443C\":\"XI4\",\"443D\":\"MAN2\",\"443E\":\"DUO2\",\"443F\":\"AO2 AO4 BI4\",\"444A\":\"WEI2 WEI4\",\"444B\":\"NAO2 RANG3\",\"444C\":\"LAN2\",\"444D\":\"YAN4 YING3\",\"444E\":\"CHAN3\",\"444F\":\"QUAN2\",\"445A\":\"TIAN2\",\"445B\":\"CHI3 SHI4 YI4\",\"445C\":\"TA4\",\"445D\":\"JIA3\",\"445E\":\"SHUN4\",\"445F\":\"HUANG2\",\"446A\":\"E4\",\"446C\":\"YAO4\",\"446D\":\"DI4 ZHI4\",\"446F\":\"DI4\",\"447B\":\"YOU2\",\"447D\":\"DA2 TA4\",\"447F\":\"SU4\",\"448B\":\"YANG3\",\"448C\":\"MING4\",\"448D\":\"PANG3\",\"448E\":\"MANG3\",\"449A\":\"SHAO3\",\"449B\":\"HENG2 HUAN4\",\"449C\":\"NIU2\",\"449D\":\"XIAO2\",\"449E\":\"CHEN2\",\"44A0\":\"FAN3 XIA2\",\"44A1\":\"YIN3\",\"44A2\":\"ANG2 YING4\",\"44A3\":\"RAN3\",\"44A4\":\"RI4\",\"44A5\":\"FA4 LIU3 MAN2\",\"44A6\":\"FAN4\",\"44A7\":\"QU4\",\"44A8\":\"SHI3\",\"44A9\":\"HE2 XIA2\",\"44AA\":\"BIAN4\",\"44AB\":\"DAI4\",\"44AC\":\"MO4\",\"44AD\":\"DENG3\",\"44B2\":\"CHA4\",\"44B3\":\"DUO3\",\"44B4\":\"YOU3\",\"44B5\":\"HAO4\",\"44B8\":\"XIAN2 XUE4 YUE4\",\"44B9\":\"LEI4\",\"44BA\":\"JIN3\",\"44BB\":\"QI3\",\"44BD\":\"MEI2 WANG3\",\"44C2\":\"YAN2\",\"44C3\":\"YI4\",\"44C4\":\"YIN2\",\"44C5\":\"QI2\",\"44C6\":\"ZHE2\",\"44C7\":\"XI4\",\"44C8\":\"YI4\",\"44C9\":\"YE2\",\"44CA\":\"E4 WU2 YU2\",\"44CC\":\"ZHI4\",\"44CD\":\"HAN3\",\"44CE\":\"CHUO4\",\"44D0\":\"CHUN2\",\"44D1\":\"BING3 PING2\",\"44D2\":\"KUAI3\",\"44D3\":\"CHOU2\",\"44D5\":\"TUO3 WEI3\",\"44D6\":\"QIONG2\",\"44D8\":\"JIU4\",\"44DA\":\"CU2\",\"44DB\":\"FU3 GU3\",\"44DD\":\"MENG2 MENG4\",\"44DE\":\"LI4\",\"44DF\":\"LIE4\",\"44E0\":\"TA4\",\"44E2\":\"GU4\",\"44E3\":\"LIANG3\",\"44E5\":\"LA4\",\"44E6\":\"DIAN3\",\"44E7\":\"CI4 JI2\",\"44EB\":\"JI4 QI2\",\"44ED\":\"CHA4\",\"44EE\":\"MAO4\",\"44EF\":\"DU2\",\"44F1\":\"CHAI2 ZHAI4\",\"44F2\":\"RUI4 SA4\",\"44F3\":\"HEN3\",\"44F4\":\"RUAN2 RUAN3\",\"44F6\":\"LAI4\",\"44F7\":\"XING4\",\"44F9\":\"YI4\",\"44FA\":\"MEI3 WEI4\",\"44FC\":\"HE4 MANG2\",\"44FD\":\"JI4\",\"44FF\":\"HAN3 HAN4\",\"450E\":\"SU4\",\"450F\":\"CHOU4\",\"451A\":\"CHUN2\",\"451B\":\"QING3\",\"451C\":\"NAN2\",\"451E\":\"LV4\",\"451F\":\"CHI2 CHI3 YI2\",\"452A\":\"DUI4 SHUANG3\",\"452C\":\"YI4\",\"452D\":\"NING4 ZHOU3\",\"452F\":\"HU2 HUA4 KU4\",\"453A\":\"WEI2\",\"453C\":\"SE4\",\"453D\":\"AI4\",\"453E\":\"E4 QI4 ZE4\",\"453F\":\"JIE4 ZUN3\",\"454A\":\"TAN2\",\"454B\":\"CHANG3 TANG2\",\"454C\":\"ZHI4\",\"454D\":\"YI4\",\"454E\":\"FU2\",\"454F\":\"E2\",\"455A\":\"KUI4\",\"455B\":\"JIA2\",\"455E\":\"LANG4 LIAO2\",\"456A\":\"ZE2\",\"456B\":\"KUI2\",\"456D\":\"QIAN2\",\"456E\":\"JU2\",\"456F\":\"PIAO2\",\"457A\":\"CONG2\",\"457B\":\"GE2 LI4\",\"457C\":\"NAN2 NAN4\",\"457D\":\"ZHU2\",\"457E\":\"YAN2 YIN2\",\"457F\":\"HAN4\",\"458A\":\"YI2 YI4\",\"458B\":\"NVE4\",\"458C\":\"QIN2 YA2 YI4\",\"458D\":\"QIAN2\",\"458E\":\"XIA2\",\"458F\":\"CHU3\",\"459B\":\"SUO3\",\"459C\":\"YIN2 YIN4\",\"459D\":\"CHONG2\",\"459E\":\"ZHOU3\",\"459F\":\"MANG3 MENG2\",\"45A0\":\"YUAN2\",\"45A1\":\"NV4\",\"45A2\":\"MIAO2\",\"45A3\":\"SAO4 YE4 ZAO3\",\"45A4\":\"WAN3 YUAN2\",\"45A5\":\"LI2 MAO2\",\"45A7\":\"NA4\",\"45A8\":\"SHI2\",\"45A9\":\"BI4 PI4\",\"45AA\":\"CI2\",\"45AB\":\"BANG4\",\"45AD\":\"JUAN4\",\"45AE\":\"XIANG3\",\"45AF\":\"GUI4 KUI2\",\"45B0\":\"PAI4\",\"45B2\":\"XUN2\",\"45B3\":\"ZHA4\",\"45B4\":\"YAO2\",\"45B8\":\"E2\",\"45B9\":\"YANG2\",\"45BA\":\"TIAO2 ZHAO4\",\"45BB\":\"YOU2\",\"45BC\":\"JUE2 XUE4\",\"45BD\":\"LI2\",\"45BF\":\"LI2\",\"45C1\":\"JI4\",\"45C2\":\"HU3\",\"45C3\":\"ZHAN4\",\"45C4\":\"FU3 PI4\",\"45C5\":\"CHANG2\",\"45C6\":\"GUAN3 WEI3\",\"45C7\":\"JU2 QU2\",\"45C8\":\"MENG2\",\"45CA\":\"CHENG2 TAN4\",\"45CB\":\"MOU2\",\"45CD\":\"LI3\",\"45D1\":\"YI4\",\"45D2\":\"BING4\",\"45D4\":\"HOU2\",\"45D5\":\"WAN3\",\"45D6\":\"CHI4 DI4 TI2 ZHE4\",\"45D8\":\"GE2 KE4\",\"45D9\":\"HAN2\",\"45DA\":\"BO2\",\"45DC\":\"LIU2\",\"45DD\":\"CAN2\",\"45DE\":\"CAN2 CHEN3 SHAN3 YIN3 ZAN4 ZHAN4\",\"45DF\":\"YI4\",\"45E0\":\"XUAN2\",\"45E1\":\"YAN2\",\"45E2\":\"SUO3 ZAO3\",\"45E3\":\"GAO3 HAN4\",\"45E4\":\"YONG2\",\"45E8\":\"YU2\",\"45EA\":\"ZHE4\",\"45EB\":\"MA2\",\"45EE\":\"SHUANG3\",\"45EF\":\"JIN4\",\"45F0\":\"GUAN4\",\"45F1\":\"PU2\",\"45F2\":\"LIN4\",\"45F4\":\"TING2\",\"45F6\":\"LA4 LI4\",\"45F7\":\"YI4\",\"45F9\":\"CI4\",\"45FA\":\"YAN3\",\"45FB\":\"JIE2\",\"45FD\":\"WEI4\",\"45FE\":\"XIAN3\",\"45FF\":\"NING2\",\"460A\":\"MIE4\",\"460C\":\"NI4\",\"460D\":\"CHAI4\",\"460F\":\"XU4\",\"461A\":\"ZHU2\",\"461D\":\"YI4\",\"462B\":\"NOU4 RU2\",\"462C\":\"RONG2\",\"462D\":\"DIE2 ZHI4\",\"462E\":\"SA4 SANG4 XI4\",\"463A\":\"ZHAN4\",\"463B\":\"SU4 YU4\",\"463C\":\"WAN3\",\"463D\":\"NI2 NI3 NI4\",\"463E\":\"GUAN3\",\"463F\":\"JUE2\",\"464A\":\"XIE4\",\"464C\":\"HUI4 KUI4\",\"464E\":\"XIE2\",\"464F\":\"BO2\",\"465A\":\"NIAO3\",\"465B\":\"GUAN4 GUN3\",\"465C\":\"FENG2\",\"465D\":\"XIE4\",\"465F\":\"DUO4 WEI2\",\"466A\":\"LONG2 MANG4 PAN4\",\"466C\":\"YING4\",\"466E\":\"GUAN4\",\"466F\":\"CU4 ZHUO2\",\"467A\":\"LIAN2 LIAN3 QIAN3\",\"467C\":\"SHAO4\",\"467D\":\"XI4 XIE2\",\"467F\":\"WEI4\",\"468B\":\"YUN4\",\"468D\":\"QI4\",\"468F\":\"LENG4 LI4 LIN4\",\"469A\":\"XIAN3\",\"469B\":\"HU2\",\"469D\":\"ZU2\",\"469E\":\"DAI3\",\"469F\":\"DAI3\",\"46A0\":\"HUN4\",\"46A2\":\"CHE4\",\"46A3\":\"TI2 TI4\",\"46A5\":\"NUO4\",\"46A6\":\"ZHI4\",\"46A7\":\"LIU2\",\"46A8\":\"FEI4\",\"46A9\":\"JIAO3 JIAO4\",\"46AB\":\"AO2 XI2\",\"46AC\":\"LIN2\",\"46AE\":\"RENG2\",\"46AF\":\"TAO3 ZHEN4\",\"46B0\":\"PI3\",\"46B1\":\"XIN4\",\"46B2\":\"SHAN4\",\"46B3\":\"XIE4 ZHI4\",\"46B4\":\"WA4\",\"46B5\":\"TAO3\",\"46B7\":\"XI4 YI3 YI4\",\"46B8\":\"XIE4\",\"46B9\":\"PI3\",\"46BA\":\"YAO2\",\"46BB\":\"YAO2\",\"46BC\":\"NV4\",\"46BD\":\"HAO4\",\"46BE\":\"NIN2 REN2\",\"46BF\":\"YIN4\",\"46C0\":\"FAN3\",\"46C1\":\"NAN2\",\"46C2\":\"CHI2 CHI3\",\"46C3\":\"WANG4\",\"46C4\":\"YUAN3\",\"46C5\":\"XIA2\",\"46C6\":\"ZHOU4\",\"46C7\":\"YUAN3\",\"46C8\":\"SHI4\",\"46C9\":\"MI4 MIAN4\",\"46CB\":\"GE2 JI4\",\"46CC\":\"PAO2 TAO2\",\"46CD\":\"FEI4\",\"46CE\":\"HU4 XUE4 YU4\",\"46CF\":\"NI2\",\"46D0\":\"CI2\",\"46D1\":\"MI4\",\"46D2\":\"BIAN4\",\"46D4\":\"NA2\",\"46D5\":\"YU4\",\"46D6\":\"E4 YI4\",\"46D7\":\"ZHI3\",\"46D8\":\"NIN2 REN2\",\"46D9\":\"XU4\",\"46DA\":\"LVE4\",\"46DB\":\"HUI4 QI4\",\"46DC\":\"XUN4\",\"46DD\":\"NAO2\",\"46DE\":\"HAN3 HAN4\",\"46DF\":\"JIA2\",\"46E0\":\"DOU4 XIANG2\",\"46E1\":\"HUA4\",\"46E4\":\"CU4\",\"46E5\":\"XI4\",\"46E6\":\"SONG4\",\"46E7\":\"MI2\",\"46E8\":\"XIN4\",\"46E9\":\"WU4\",\"46EA\":\"QIONG2 WEI3\",\"46EB\":\"ZHENG4\",\"46EC\":\"CHOU2 TAO2\",\"46ED\":\"XING4\",\"46EE\":\"JIU4\",\"46EF\":\"JU4\",\"46F0\":\"HUN2 HUN4\",\"46F1\":\"TI2\",\"46F2\":\"MAN2 MAN4\",\"46F3\":\"JIAN3 YAN4\",\"46F4\":\"QI3\",\"46F5\":\"SHOU4\",\"46F6\":\"LEI3\",\"46F7\":\"WAN3\",\"46F8\":\"CHE4 SHAN3\",\"46F9\":\"CAN4\",\"46FA\":\"JIE4\",\"46FB\":\"YOU4\",\"46FC\":\"HUI3\",\"46FD\":\"ZHA3\",\"46FE\":\"SU4\",\"46FF\":\"GE2\",\"470A\":\"ZAO4 ZUO4\",\"470B\":\"HUI4\",\"470C\":\"LUAN2\",\"470D\":\"LIAO2\",\"470E\":\"LAO2 LAO4\",\"471A\":\"TA4\",\"471B\":\"CHAN2 CHAN4\",\"471C\":\"WEI4\",\"471D\":\"TUAN3\",\"471E\":\"JI4\",\"471F\":\"CHEN2 CHEN4\",\"472A\":\"QIU2\",\"472B\":\"HONG2\",\"472C\":\"SONG3 XIU4\",\"472D\":\"JUN4\",\"472E\":\"LIAO2\",\"472F\":\"JU2\",\"473A\":\"CE4\",\"473B\":\"CHI3 SHI4\",\"473C\":\"GU2\",\"473D\":\"YU2\",\"474A\":\"SHA4\",\"474B\":\"ZONG4\",\"474C\":\"JUE2 JUN4\",\"474D\":\"JUN4\",\"474F\":\"LOU2 LOU3 LV2\",\"475A\":\"NI2\",\"475D\":\"YI3\",\"475E\":\"HAO4\",\"475F\":\"YA4 YE4\",\"476A\":\"SHU2 SHU3\",\"476B\":\"ZUO2\",\"476C\":\"ZHU4\",\"476D\":\"GOU4\",\"476E\":\"XUAN4\",\"476F\":\"YI4\",\"477A\":\"GUAN4\",\"477C\":\"QING2\",\"477D\":\"AI4\",\"477E\":\"FU4\",\"477F\":\"GUI4\",\"478A\":\"XUN4\",\"478B\":\"CHEN4\",\"478C\":\"SHE2\",\"478D\":\"QING2\",\"479A\":\"QI2\",\"479C\":\"FU4\",\"479D\":\"AO3 YU4\",\"479E\":\"FU2\",\"479F\":\"PO4\",\"47A1\":\"TAN3\",\"47A2\":\"ZHA4 ZUO2\",\"47A3\":\"CHE3\",\"47A4\":\"QU2\",\"47A5\":\"YOU4\",\"47A6\":\"HE2 JIE2\",\"47A7\":\"HOU4\",\"47A8\":\"GUI3\",\"47A9\":\"E4 RUI2\",\"47AA\":\"JIANG4\",\"47AB\":\"YUN3\",\"47AC\":\"TOU4\",\"47AD\":\"QIU3\",\"47AF\":\"FU4\",\"47B0\":\"ZUO2\",\"47B1\":\"HU2\",\"47B3\":\"BO2 FEI4\",\"47B5\":\"JUE3\",\"47B6\":\"DI4 TI4\",\"47B7\":\"JUE2\",\"47B8\":\"FU4\",\"47B9\":\"HUANG2\",\"47BB\":\"YONG3\",\"47BC\":\"CHUI3 CUAN4 JIAN4 MEI4\",\"47BD\":\"SUO3\",\"47BE\":\"CHI2\",\"47C2\":\"MAN2\",\"47C3\":\"CA4 ZAN4\",\"47C4\":\"QI4 ZUO2\",\"47C5\":\"JIAN4 ZAN4\",\"47C6\":\"BI4 BO2\",\"47C8\":\"ZHI2\",\"47C9\":\"ZHU2\",\"47CA\":\"QU2\",\"47CB\":\"ZHAN3 ZHAN4\",\"47CC\":\"JI2 JIE2\",\"47CD\":\"DIAN2\",\"47CF\":\"LI4\",\"47D0\":\"LI4\",\"47D1\":\"LA3 YUE4\",\"47D2\":\"QUAN2\",\"47D4\":\"FU4\",\"47D5\":\"CHA4\",\"47D6\":\"TANG4\",\"47D7\":\"SHI4\",\"47D8\":\"HANG4\",\"47D9\":\"QIE4\",\"47DA\":\"QI2\",\"47DB\":\"BO2\",\"47DC\":\"NA4\",\"47DD\":\"TOU4\",\"47DE\":\"CHU2\",\"47DF\":\"CU4\",\"47E0\":\"YUE4\",\"47E1\":\"DI4\",\"47E2\":\"CHEN2 JIAN4 NIAN3\",\"47E3\":\"CHU4\",\"47E4\":\"BI4\",\"47E5\":\"MANG2 MENG2\",\"47E6\":\"BA2 BO2 YUAN2\",\"47E7\":\"TIAN2\",\"47E8\":\"MIN2\",\"47E9\":\"LIE3\",\"47EA\":\"FENG3\",\"47EC\":\"QIU4\",\"47ED\":\"TIAO2\",\"47EE\":\"FU2\",\"47EF\":\"KUO4\",\"47F0\":\"JIAN3\",\"47F4\":\"ZHEN4\",\"47F5\":\"QIU2\",\"47F6\":\"CUO4 ZUO4\",\"47F7\":\"CHI4\",\"47F8\":\"KUI2\",\"47F9\":\"LIE4 LIN4\",\"47FA\":\"BANG3 BEI4 PEI4\",\"47FB\":\"DU4\",\"47FC\":\"WU3\",\"47FE\":\"JUE3 ZHUO2\",\"47FF\":\"LU4\",\"480A\":\"FEI4\",\"480B\":\"BI3 BI4 MA4\",\"480D\":\"QIA2\",\"480E\":\"WO4\",\"480F\":\"JI4\",\"481A\":\"WA4\",\"481B\":\"JIAO3 XIAO4 YAO2\",\"481C\":\"RONG2\",\"481E\":\"CU4 QI2\",\"481F\":\"DIE2 SHE4\",\"482A\":\"DUAN4\",\"482B\":\"ZOU4\",\"482C\":\"DENG4\",\"482D\":\"LAI2 LAI4\",\"482E\":\"TENG2\",\"482F\":\"YUE4\",\"483B\":\"QIONG2\",\"483C\":\"DIAO4 SHU4 XUE4 ZHU2\",\"483D\":\"HAI2\",\"483E\":\"SHAN3 SHAN4\",\"483F\":\"WAI4\",\"484A\":\"FAN2 FAN3 PEI4\",\"484B\":\"QI2\",\"484C\":\"HONG2\",\"484D\":\"FU2 FU3\",\"484E\":\"LU2\",\"484F\":\"HONG2\",\"485A\":\"MAO4\",\"485B\":\"YIN4\",\"485C\":\"LU4\",\"485D\":\"YUN3\",\"485E\":\"JU2\",\"485F\":\"PI4\",\"486A\":\"CHAN2 SHAN4\",\"486B\":\"PENG2\",\"486C\":\"MAN4\",\"486F\":\"SHUANG4 ZONG3\",\"487A\":\"WEI4\",\"487B\":\"MIN2\",\"487C\":\"LING2\",\"487E\":\"NEI4\",\"487F\":\"LING2\",\"488A\":\"YOU2\",\"488B\":\"JI4\",\"488C\":\"BO2\",\"488D\":\"FANG3 FEN4\",\"489A\":\"GONG4 HANG2\",\"489B\":\"JIONG3\",\"489D\":\"YA4\",\"489E\":\"NU4 SHU4\",\"489F\":\"YOU2\",\"48A0\":\"SONG4\",\"48A1\":\"XIE4\",\"48A2\":\"CANG4\",\"48A3\":\"YAO2\",\"48A4\":\"SHU4\",\"48A5\":\"YAN2 YAN4\",\"48A6\":\"SHUAI4\",\"48A7\":\"LIAO4 LIN3 QUE4\",\"48A9\":\"YU4\",\"48AA\":\"BO2 CUI4 JIAO3 NU3 QIAN2\",\"48AB\":\"SUI2\",\"48AD\":\"YAN4\",\"48AE\":\"LEI4\",\"48AF\":\"LIN2\",\"48B0\":\"TAI2 TI4\",\"48B1\":\"DU2 ZHA4\",\"48B2\":\"YUE4\",\"48B3\":\"JI3 JI4\",\"48B5\":\"YUN2\",\"48B9\":\"JU3\",\"48BB\":\"CHEN2 JIN4 TAN2\",\"48BD\":\"XIANG4\",\"48BE\":\"XIAN3\",\"48C0\":\"GUI3 WEI2\",\"48C1\":\"YU3\",\"48C2\":\"LEI3\",\"48C4\":\"TU2\",\"48C5\":\"CHEN2\",\"48C6\":\"XING2\",\"48C7\":\"QIU2\",\"48C8\":\"HANG4 LIAO2 XIANG4\",\"48CA\":\"DANG3\",\"48CB\":\"CAI3\",\"48CC\":\"DI3\",\"48CD\":\"YAN3\",\"48D1\":\"CHAN2\",\"48D3\":\"LI2\",\"48D4\":\"SUO3 SUO4\",\"48D5\":\"MA3\",\"48D6\":\"MA3\",\"48D8\":\"TANG2\",\"48D9\":\"PEI2\",\"48DA\":\"LOU2 LV2\",\"48DC\":\"CUO2\",\"48DD\":\"TU2\",\"48DE\":\"E4\",\"48DF\":\"CAN2\",\"48E0\":\"JIE2 TI4\",\"48E1\":\"TI2 YI2\",\"48E2\":\"JI2\",\"48E3\":\"DANG3 DAO4\",\"48E4\":\"JIAO4 JUE2\",\"48E5\":\"BI3 MI4\",\"48E6\":\"LEI4\",\"48E7\":\"YI4\",\"48E8\":\"CHUN2\",\"48E9\":\"CHUN2\",\"48EA\":\"PO4\",\"48EB\":\"LI2\",\"48EC\":\"ZAI3\",\"48ED\":\"TAI4\",\"48EE\":\"PO4\",\"48EF\":\"TIAN3\",\"48F0\":\"JU4 YUAN4\",\"48F1\":\"XU4 YI4\",\"48F2\":\"FAN4\",\"48F4\":\"XU4\",\"48F5\":\"ER4\",\"48F6\":\"HUO2 TIAN2\",\"48F8\":\"RAN3\",\"48F9\":\"FA2\",\"48FC\":\"LIANG2\",\"48FD\":\"TI3\",\"48FE\":\"MI4\",\"490A\":\"RONG2\",\"490B\":\"GUO2 YU4\",\"490D\":\"MI2\",\"490E\":\"JU2\",\"490F\":\"PI3\",\"491A\":\"LI3 LVE4\",\"491B\":\"QIU2\",\"491C\":\"DUN4\",\"491D\":\"YING4\",\"491E\":\"YUN3\",\"491F\":\"CHEN2\",\"492A\":\"DUO3\",\"492B\":\"CHAN2\",\"492D\":\"KUAN4 SHI4 SUI4 YI2\",\"492E\":\"SHE4\",\"492F\":\"XING2\",\"493A\":\"YIN3\",\"493B\":\"DUO4\",\"493C\":\"XIAN4\",\"493F\":\"QIE4\",\"494C\":\"ZHENG4\",\"494D\":\"ZHI4\",\"494E\":\"CHUN2\",\"494F\":\"YU3\",\"495B\":\"JIE2\",\"495C\":\"JIAN4\",\"495D\":\"AO2\",\"495E\":\"JIAO3\",\"495F\":\"YE4\",\"496A\":\"XIAN3\",\"496B\":\"TIE3\",\"496C\":\"BO2\",\"496D\":\"ZHENG4\",\"496E\":\"ZHU2\",\"496F\":\"BA4 BAI4\",\"497A\":\"YE2\",\"497E\":\"XIE3\",\"498A\":\"NIAO3\",\"498B\":\"AO2\",\"498C\":\"CHU4 PO4 RUI4\",\"498D\":\"WU4\",\"498E\":\"GUAN3\",\"498F\":\"XIE4\",\"499A\":\"HUO4 KUA3 KUA4\",\"499B\":\"ZHENG4 ZHI4\",\"499C\":\"WU2 WU4\",\"499E\":\"RUN4\",\"499F\":\"CHUAI4\",\"49A0\":\"SHI3\",\"49A1\":\"HUAN2\",\"49A2\":\"KUO4\",\"49A3\":\"FU4\",\"49A4\":\"CHUAI4 WEN3\",\"49A5\":\"XIAN2\",\"49A6\":\"QIN2\",\"49A7\":\"QIE2 XI4 YAN3\",\"49A8\":\"LAN2\",\"49AA\":\"YA4\",\"49AC\":\"QUE4\",\"49AE\":\"CHUN3\",\"49AF\":\"ZHI4\",\"49B1\":\"KUI3 WEI3\",\"49B2\":\"QIAN4 YAN2\",\"49B3\":\"HANG4 XIANG4\",\"49B4\":\"YI4\",\"49B5\":\"NI3\",\"49B6\":\"ZHENG4\",\"49B7\":\"CHUAI4 WEN3\",\"49B9\":\"SHI2\",\"49BB\":\"CI4 ZI3\",\"49BC\":\"JUE2\",\"49BD\":\"XU4\",\"49BE\":\"YUN3\",\"49C1\":\"CHU4 XU3\",\"49C2\":\"DAO4 TIAO3 ZHAO4\",\"49C3\":\"DIAN4 TIAN2\",\"49C4\":\"GE4\",\"49C5\":\"TI4 YA4 YI2\",\"49C6\":\"HONG2 KOU3 QIONG2\",\"49C7\":\"NI3 YI3\",\"49C9\":\"LI3\",\"49CB\":\"XIAN3\",\"49CD\":\"XI4\",\"49CE\":\"XUAN4\",\"49D2\":\"LAI2 LAN3\",\"49D4\":\"MU4 NIAN4\",\"49D5\":\"CHENG2 YU4\",\"49D6\":\"JIAN4\",\"49D7\":\"BI4\",\"49D8\":\"QI2 ZHUAN4\",\"49D9\":\"LING2\",\"49DA\":\"HAO4\",\"49DB\":\"BANG4\",\"49DC\":\"TANG2\",\"49DD\":\"DI4 YI2 ZHI4\",\"49DE\":\"FU4 MA4\",\"49DF\":\"XIAN4 XUAN4\",\"49E0\":\"SHUAN4\",\"49E4\":\"PU2\",\"49E5\":\"HUI4\",\"49E6\":\"WEI2\",\"49E7\":\"YI3\",\"49E8\":\"YE4\",\"49EA\":\"CHE4 ZHE2\",\"49EB\":\"HAO2\",\"49EE\":\"XIAN3 XIAN4\",\"49EF\":\"CHAN2 ZHAN4\",\"49F0\":\"HUN4\",\"49F2\":\"HAN4\",\"49F3\":\"CI2 CI3\",\"49F5\":\"QI2 SHEN3 ZHEN4\",\"49F6\":\"KUI2\",\"49F7\":\"ROU2\",\"49FA\":\"XIONG2\",\"49FC\":\"HU2\",\"49FD\":\"CUI3\",\"49FF\":\"QUE4\",\"4A00\":\"DI2 DI4\",\"4A01\":\"CHE4 WU4 YU4\",\"4A04\":\"YAN4\",\"4A05\":\"LIAO2\",\"4A06\":\"BI2 BI4 XU4\",\"4A0B\":\"NVE4\",\"4A0C\":\"BAO2 BO2\",\"4A0D\":\"YING3\",\"4A0E\":\"HONG2\",\"4A0F\":\"CI2\",\"4A10\":\"QIA4 XIA2\",\"4A11\":\"TI2\",\"4A12\":\"YU4\",\"4A13\":\"LEI2 LEI4\",\"4A14\":\"BAO2\",\"4A16\":\"JI4\",\"4A17\":\"FU2\",\"4A18\":\"XIAN4\",\"4A19\":\"CEN2 YA4 YIN2\",\"4A1B\":\"SE4\",\"4A1E\":\"YU3 YU4\",\"4A20\":\"AI3\",\"4A21\":\"HAN2\",\"4A22\":\"DAN4 DI2 GAO4 TAN2\",\"4A23\":\"GE2 GENG4\",\"4A24\":\"DI2\",\"4A25\":\"HU4 HUO4\",\"4A26\":\"PANG2\",\"4A29\":\"LING2\",\"4A2A\":\"MAI2\",\"4A2B\":\"MAI4 MAN4\",\"4A2C\":\"LIAN2\",\"4A2E\":\"XUE3\",\"4A2F\":\"ZHEN4\",\"4A30\":\"PO4\",\"4A31\":\"FU4\",\"4A32\":\"NOU2\",\"4A33\":\"XI4\",\"4A34\":\"DUI4 WENG4\",\"4A35\":\"DAN4\",\"4A36\":\"YUN3\",\"4A37\":\"XIAN4\",\"4A38\":\"YIN3\",\"4A3A\":\"DUI4 ZHUI4\",\"4A3B\":\"BENG4\",\"4A3C\":\"HU4\",\"4A3D\":\"FEI3\",\"4A3E\":\"FEI3\",\"4A3F\":\"QIAN2 ZA2\",\"4A40\":\"BEI4\",\"4A43\":\"SHI4\",\"4A44\":\"TIAN3\",\"4A45\":\"ZHAN3\",\"4A46\":\"JIAN3 ZHAN3\",\"4A48\":\"HUI4 WEI4 XUE3\",\"4A49\":\"FU3\",\"4A4A\":\"WAN3 WO4\",\"4A4B\":\"MO3\",\"4A4C\":\"QIAO2\",\"4A4D\":\"LIAO3\",\"4A4F\":\"MIE4\",\"4A50\":\"GE2 JI2\",\"4A51\":\"HONG2\",\"4A52\":\"YU2\",\"4A53\":\"QI2\",\"4A54\":\"DUO4\",\"4A55\":\"ANG2\",\"4A57\":\"BA4\",\"4A58\":\"DI4\",\"4A59\":\"XUAN4\",\"4A5A\":\"DI4 DIAN4\",\"4A5B\":\"BI4\",\"4A5C\":\"ZHOU4\",\"4A5D\":\"PAO2\",\"4A5E\":\"NIAN2 TIAN3 TIE2 WEI3\",\"4A5F\":\"YI2\",\"4A61\":\"JIA2\",\"4A62\":\"DA2 ZHI4\",\"4A63\":\"DUO3 TU2 TUI4\",\"4A64\":\"XI4 XIE2\",\"4A65\":\"DAN4\",\"4A66\":\"TIAO2 ZUO4\",\"4A67\":\"XIE4\",\"4A68\":\"CHANG4\",\"4A69\":\"YUAN3\",\"4A6A\":\"GUAN3\",\"4A6B\":\"LIANG3\",\"4A6C\":\"BENG3 FENG3\",\"4A6E\":\"LU4\",\"4A6F\":\"JI2\",\"4A70\":\"XUAN4\",\"4A71\":\"SHU4\",\"4A73\":\"SHU3 SU4\",\"4A74\":\"HU2\",\"4A75\":\"YUN4\",\"4A76\":\"CHAN3\",\"4A78\":\"RONG2 RONG3\",\"4A79\":\"E2\",\"4A7B\":\"BA4\",\"4A7C\":\"FENG2\",\"4A7E\":\"ZHE4\",\"4A7F\":\"FEN2\",\"4A80\":\"GUAN3 RUAN3\",\"4A81\":\"BU3\",\"4A82\":\"GE2\",\"4A84\":\"HUANG2\",\"4A85\":\"DU2\",\"4A86\":\"TI3\",\"4A87\":\"BO2\",\"4A88\":\"QIAN3 QIAN4\",\"4A89\":\"LA4 LIE4\",\"4A8A\":\"LONG2\",\"4A8B\":\"WEI4\",\"4A8C\":\"ZHAN4\",\"4A8D\":\"LAN2 LAN4\",\"4A8F\":\"NA4 NENG2\",\"4A90\":\"BI4 PI4\",\"4A91\":\"TUO2\",\"4A92\":\"JIAO4 ZHI4 ZHU4\",\"4A94\":\"BU3\",\"4A95\":\"JU2\",\"4A96\":\"PO4\",\"4A97\":\"XIA2\",\"4A98\":\"WEI3\",\"4A99\":\"FU2 PO4\",\"4A9A\":\"HE4 TA4\",\"4A9B\":\"FAN2\",\"4A9C\":\"CHAN4\",\"4A9D\":\"HU4\",\"4A9E\":\"ZA2\",\"4AA4\":\"FAN2\",\"4AA5\":\"DIE2 XIE4\",\"4AA6\":\"HONG2\",\"4AA7\":\"CHI2\",\"4AA8\":\"BAO2 QU2\",\"4AA9\":\"YIN2\",\"4AAC\":\"BO2 PU2\",\"4AAD\":\"RUAN3\",\"4AAE\":\"CHOU3\",\"4AAF\":\"YING2\",\"4AB1\":\"GAI3\",\"4AB3\":\"YUN3\",\"4AB4\":\"ZHEN3\",\"4AB5\":\"YA3\",\"4AB7\":\"HOU4\",\"4AB8\":\"MIN2\",\"4AB9\":\"PEI2\",\"4ABA\":\"GE2\",\"4ABB\":\"BIAN4\",\"4ABD\":\"HAO4\",\"4ABE\":\"MI2 ZHEN3\",\"4ABF\":\"SHENG3 XIN4\",\"4AC0\":\"GEN3\",\"4AC1\":\"BI4\",\"4AC2\":\"DUO3\",\"4AC3\":\"CHUN2\",\"4AC4\":\"CHUA4\",\"4AC5\":\"SAN4\",\"4AC6\":\"CHENG2 ZHENG4\",\"4AC7\":\"RAN2\",\"4AC8\":\"ZEN4\",\"4AC9\":\"MAO4\",\"4ACA\":\"BO2 PEI2\",\"4ACB\":\"TUI2\",\"4ACC\":\"PI3\",\"4ACD\":\"FU3\",\"4AD0\":\"LIN2\",\"4AD2\":\"MEN2\",\"4AD3\":\"WU2\",\"4AD4\":\"QI4 QIE4 XI4\",\"4AD5\":\"ZHI4\",\"4AD6\":\"CHEN3 HUI3 NOU4 SHEN4 TING2 YA4 ZHU4\",\"4AD7\":\"XIA2 XIA4\",\"4AD8\":\"HE2\",\"4AD9\":\"SANG3\",\"4ADB\":\"HOU2\",\"4ADD\":\"FU3 FU4\",\"4ADE\":\"RAO2\",\"4ADF\":\"HUN2 HUN4\",\"4AE0\":\"PEI2\",\"4AE1\":\"QIAN4 YAN2\",\"4AE3\":\"XI2\",\"4AE4\":\"MING2\",\"4AE5\":\"KUI3 WEI3\",\"4AE6\":\"GE2 KAI4\",\"4AE8\":\"AO4\",\"4AE9\":\"SAN3\",\"4AEA\":\"SHUANG3\",\"4AEB\":\"LOU2 LOU4\",\"4AEC\":\"ZHEN3\",\"4AED\":\"HUI4\",\"4AEE\":\"CAN2 CAN3 TI4\",\"4AF0\":\"LIN4\",\"4AF1\":\"NA2 RU2\",\"4AF2\":\"HAN4 KAN3\",\"4AF3\":\"DU2\",\"4AF4\":\"JIN4\",\"4AF5\":\"MIAN2\",\"4AF6\":\"FAN2\",\"4AF7\":\"E4\",\"4AF8\":\"NAO2\",\"4AF9\":\"HONG2\",\"4AFA\":\"HONG2 HOU4\",\"4AFB\":\"XUE2 YU4\",\"4AFC\":\"XUE4\",\"4AFE\":\"BI4\",\"4B00\":\"YOU3\",\"4B01\":\"YI2\",\"4B02\":\"XUE4 YUE4\",\"4B03\":\"SA4\",\"4B04\":\"YU4\",\"4B05\":\"LI4 XIE2\",\"4B06\":\"LI4\",\"4B07\":\"YUAN4\",\"4B08\":\"DUI4\",\"4B09\":\"HAO4\",\"4B0A\":\"QIE4 SHA4\",\"4B0B\":\"LENG2\",\"4B0E\":\"GUO2\",\"4B0F\":\"BU4 FOU3\",\"4B10\":\"WEI3\",\"4B11\":\"WEI4\",\"4B13\":\"AN4 ANG3\",\"4B14\":\"XU4 YU2\",\"4B15\":\"SHANG3\",\"4B16\":\"HENG2\",\"4B17\":\"YANG2\",\"4B19\":\"YAO2\",\"4B1B\":\"BI4 YU4\",\"4B1D\":\"HENG2 HONG4\",\"4B1E\":\"TAO2\",\"4B1F\":\"LIU2\",\"4B21\":\"ZHU4\",\"4B23\":\"QI4\",\"4B24\":\"CHAO2 ZAN4 ZUO4\",\"4B25\":\"YI4\",\"4B26\":\"DOU4\",\"4B27\":\"YUAN2\",\"4B28\":\"CU4 JIU4 ZU2\",\"4B2A\":\"BO2 FU4\",\"4B2B\":\"CAN3 TI2\",\"4B2C\":\"YANG3\",\"4B2E\":\"YI2\",\"4B2F\":\"NIAN2\",\"4B30\":\"SHAO4\",\"4B31\":\"BEN4\",\"4B33\":\"BAN3\",\"4B34\":\"MO4\",\"4B35\":\"AI4\",\"4B36\":\"EN4\",\"4B37\":\"SHE3\",\"4B39\":\"ZHI4\",\"4B3A\":\"YANG4\",\"4B3B\":\"JIAN4 KAN3\",\"4B3C\":\"YUAN4\",\"4B3D\":\"DUI4\",\"4B3E\":\"TI2\",\"4B3F\":\"WEI3 WEI4\",\"4B40\":\"XUN4\",\"4B41\":\"ZHI4\",\"4B42\":\"YI4\",\"4B43\":\"REN3\",\"4B44\":\"SHI4\",\"4B45\":\"HU2\",\"4B46\":\"NE4\",\"4B47\":\"YI4\",\"4B48\":\"JIAN4\",\"4B49\":\"SUI3\",\"4B4A\":\"YING3\",\"4B4B\":\"BAO3\",\"4B4C\":\"HU2\",\"4B4D\":\"HU2\",\"4B4E\":\"XIE2 YE4\",\"4B50\":\"YANG4\",\"4B51\":\"LIAN2\",\"4B53\":\"EN4\",\"4B55\":\"JIAN4 ZAN3\",\"4B56\":\"ZHU4\",\"4B57\":\"YING3\",\"4B58\":\"YAN4 YING3\",\"4B59\":\"JIN3\",\"4B5A\":\"CHUANG2 NE4\",\"4B5B\":\"DAN4\",\"4B5D\":\"KUAI4\",\"4B5E\":\"YI4\",\"4B5F\":\"YE4\",\"4B60\":\"JIAN3 QIAN4\",\"4B61\":\"EN4\",\"4B62\":\"NING2\",\"4B63\":\"CI2\",\"4B64\":\"QIAN3\",\"4B65\":\"XUE4 YANG4 YAO4 ZHOU4\",\"4B66\":\"BO2\",\"4B67\":\"MI3\",\"4B68\":\"SHUI4\",\"4B69\":\"MI4 MO2\",\"4B6A\":\"LIANG2\",\"4B6B\":\"QI3\",\"4B6C\":\"QI3\",\"4B6D\":\"SHOU3 SHU2 SHU4 TU4\",\"4B6E\":\"BI4 FU2\",\"4B6F\":\"BO2\",\"4B70\":\"BENG3 BENG4\",\"4B71\":\"BIE2\",\"4B72\":\"NI3 YI3\",\"4B73\":\"WEI4\",\"4B74\":\"HUAN2 YUAN4\",\"4B75\":\"FAN2\",\"4B76\":\"QI2\",\"4B77\":\"LIU2 MAO2\",\"4B78\":\"FU4\",\"4B79\":\"ANG2\",\"4B7A\":\"ANG2\",\"4B7C\":\"QI2\",\"4B7D\":\"QUN2\",\"4B7E\":\"TUO2\",\"4B7F\":\"YI4\",\"4B80\":\"BO2\",\"4B81\":\"PIAN2\",\"4B82\":\"BO2\",\"4B84\":\"XUAN2\",\"4B87\":\"YU4\",\"4B88\":\"CHI2\",\"4B89\":\"LU2 LV4\",\"4B8A\":\"YI2\",\"4B8B\":\"LI4 LIE4\",\"4B8D\":\"NIAO3 XING4\",\"4B8E\":\"XI4\",\"4B8F\":\"WU2\",\"4B91\":\"LEI4\",\"4B93\":\"ZHAO4\",\"4B94\":\"ZUI3\",\"4B95\":\"CHUO4\",\"4B97\":\"AN4 NIU4 YAN4\",\"4B98\":\"ER2 NI2 PAI4 PO2\",\"4B99\":\"YU4\",\"4B9A\":\"LENG4\",\"4B9B\":\"FU4\",\"4B9C\":\"SHA4 ZHA2\",\"4B9D\":\"HUAN2 HUAN3 HUN2\",\"4B9E\":\"CHU4 CHUN3\",\"4B9F\":\"SOU3\",\"4BA1\":\"BI4\",\"4BA2\":\"DIE2\",\"4BA4\":\"DI2 HE4\",\"4BA5\":\"LI4\",\"4BA7\":\"HAN2 HAN4\",\"4BA8\":\"ZAI3\",\"4BA9\":\"GU2 GU3\",\"4BAA\":\"CHENG2\",\"4BAB\":\"LOU2 LV2\",\"4BAC\":\"MO4\",\"4BAD\":\"MI4\",\"4BAE\":\"MAI4\",\"4BAF\":\"AO4\",\"4BB0\":\"DAN3 DAN4 ZHE2\",\"4BB1\":\"ZHU2\",\"4BB2\":\"HUANG2\",\"4BB3\":\"FAN2\",\"4BB4\":\"DENG4\",\"4BB5\":\"TONG2 YONG3\",\"4BB7\":\"DU2\",\"4BB8\":\"HU2 MU2 WO4\",\"4BB9\":\"WEI4\",\"4BBA\":\"JI4\",\"4BBB\":\"CHI4 DAO3 DAO4 DEI3\",\"4BBC\":\"LIN2\",\"4BBE\":\"PANG2\",\"4BBF\":\"JIAN3\",\"4BC0\":\"NIE4\",\"4BC1\":\"LUO2\",\"4BC2\":\"JI2\",\"4BC5\":\"NIE4\",\"4BC6\":\"YI4\",\"4BC8\":\"WAN2\",\"4BC9\":\"YA4\",\"4BCA\":\"QIA4\",\"4BCB\":\"BO2\",\"4BCD\":\"LING2\",\"4BCE\":\"GAN4\",\"4BCF\":\"HUO2\",\"4BD0\":\"HAI2\",\"4BD2\":\"HENG2\",\"4BD3\":\"KUI2\",\"4BD4\":\"CEN2 ZE2\",\"4BD6\":\"LANG2\",\"4BD7\":\"BI4\",\"4BD8\":\"HUAN4\",\"4BD9\":\"PO4\",\"4BDA\":\"OU3 YAO3\",\"4BDB\":\"JIAN3 WAN4\",\"4BDC\":\"TI4\",\"4BDD\":\"SUI3\",\"4BDF\":\"DUI4 XIA2\",\"4BE0\":\"AO3 AO4\",\"4BE1\":\"JIAN3 JIAN4 QIAN4\",\"4BE2\":\"MO2\",\"4BE3\":\"GUI4 KUI4\",\"4BE4\":\"KUAI4\",\"4BE5\":\"AN4 QI4\",\"4BE6\":\"MA4\",\"4BE7\":\"QING3\",\"4BE8\":\"FEN2 HE4\",\"4BEA\":\"KAO3\",\"4BEB\":\"HAO4 SHA4\",\"4BEC\":\"DUO3\",\"4BEE\":\"NAI2\",\"4BF0\":\"JIE4\",\"4BF1\":\"FU4\",\"4BF2\":\"PA2\",\"4BF4\":\"CHANG2\",\"4BF5\":\"NIE4\",\"4BF6\":\"MAN2\",\"4BF8\":\"CI4\",\"4BFA\":\"KUO4\",\"4BFC\":\"DI2\",\"4BFD\":\"FU3 POU2\",\"4BFE\":\"TIAO2\",\"4BFF\":\"ZU2 ZUO2\",\"4C00\":\"WO3\",\"4C01\":\"FEI4\",\"4C02\":\"CAI4\",\"4C03\":\"PENG2\",\"4C04\":\"SHI4\",\"4C06\":\"ROU2\",\"4C07\":\"QI2\",\"4C08\":\"CHA3 CUO2\",\"4C09\":\"PAN2 PAN4\",\"4C0A\":\"BO2\",\"4C0B\":\"MAN2\",\"4C0C\":\"ZONG3\",\"4C0D\":\"CI4 QI1\",\"4C0E\":\"GUI4 HUI3 KUI4\",\"4C0F\":\"JI4\",\"4C10\":\"LAN2\",\"4C12\":\"MENG2\",\"4C13\":\"MIAN2\",\"4C14\":\"PAN2\",\"4C15\":\"LU2\",\"4C16\":\"CUAN2\",\"4C18\":\"LIU2\",\"4C19\":\"YI3\",\"4C1A\":\"WEN2\",\"4C1B\":\"LI4\",\"4C1C\":\"LI4\",\"4C1D\":\"ZENG4\",\"4C1E\":\"ZHU3\",\"4C1F\":\"HUN2\",\"4C20\":\"SHEN2\",\"4C21\":\"CHI4\",\"4C22\":\"XING4\",\"4C23\":\"WANG3\",\"4C25\":\"HUO4 JI4 SHE4 YU4\",\"4C26\":\"PI3 PI4\",\"4C28\":\"MEI4\",\"4C29\":\"CHE3 CHI3\",\"4C2A\":\"MEI4\",\"4C2B\":\"CHAO2\",\"4C2C\":\"JU2\",\"4C2D\":\"NOU4 RU2\",\"4C2F\":\"NI3 RAN2 YI4\",\"4C30\":\"RU2\",\"4C31\":\"LING2\",\"4C32\":\"YA4\",\"4C34\":\"QI4 ZHI4\",\"4C37\":\"BANG4 BO2\",\"4C39\":\"ZE2\",\"4C3A\":\"JIE4\",\"4C3B\":\"YU2\",\"4C3C\":\"XIN2\",\"4C3D\":\"BEI4\",\"4C3E\":\"BA4\",\"4C3F\":\"TUO2\",\"4C41\":\"QIAO2\",\"4C42\":\"YOU3\",\"4C43\":\"DI3 ZHI4\",\"4C44\":\"JIE4\",\"4C45\":\"MO4\",\"4C46\":\"SHENG2\",\"4C47\":\"SHAN4 TAO2\",\"4C48\":\"QI2 YI4\",\"4C49\":\"SHAN4\",\"4C4A\":\"MI3\",\"4C4B\":\"DAN3 GONG3\",\"4C4C\":\"YI2\",\"4C4D\":\"GENG4\",\"4C4E\":\"GENG4\",\"4C4F\":\"TOU3\",\"4C51\":\"XUE2\",\"4C52\":\"YI4\",\"4C53\":\"TING2\",\"4C54\":\"TIAO2\",\"4C55\":\"MOU2\",\"4C56\":\"LIU2 LIU3\",\"4C58\":\"LI2\",\"4C5A\":\"LU4\",\"4C5B\":\"XU4\",\"4C5C\":\"CUO4 QUE4\",\"4C5D\":\"BA4 PAI2\",\"4C5E\":\"LIU2 NAI4 WEI3\",\"4C5F\":\"JU4\",\"4C60\":\"ZHAN4\",\"4C61\":\"JU2\",\"4C63\":\"ZU2\",\"4C64\":\"XIAN4\",\"4C65\":\"ZHI2 ZHI4\",\"4C68\":\"ZHI4\",\"4C6B\":\"LA4\",\"4C6D\":\"GENG4\",\"4C6E\":\"E2\",\"4C6F\":\"MU2\",\"4C70\":\"ZHONG4\",\"4C71\":\"DI4 TI2\",\"4C72\":\"YAN2\",\"4C74\":\"GENG4\",\"4C76\":\"LANG2\",\"4C77\":\"YU2\",\"4C79\":\"NA4 ZHA3\",\"4C7A\":\"HAI2\",\"4C7B\":\"HUA2\",\"4C7C\":\"ZHAN3\",\"4C7E\":\"LOU2 YU2\",\"4C7F\":\"CHAN4\",\"4C80\":\"DIE2 SUI4 ZHI4 ZOU4\",\"4C81\":\"WEI4\",\"4C82\":\"XUAN2\",\"4C83\":\"ZAO3\",\"4C84\":\"MIN2 MIN3\",\"4C8A\":\"TUO3\",\"4C8B\":\"CEN2\",\"4C8C\":\"KUAN3\",\"4C8D\":\"TENG2\",\"4C8E\":\"NEI3\",\"4C8F\":\"LAO2\",\"4C90\":\"LU3\",\"4C91\":\"YI2\",\"4C92\":\"XIE4\",\"4C93\":\"YAN3\",\"4C94\":\"QING2 QING4\",\"4C95\":\"PU3 PU4\",\"4C96\":\"CHOU2\",\"4C97\":\"XIAN2\",\"4C98\":\"GUAN3 KANG4 WEI2\",\"4C99\":\"JIE2\",\"4C9A\":\"LAI4 LAN4\",\"4C9B\":\"MENG2\",\"4C9C\":\"YE4\",\"4C9E\":\"LI4 LUO3\",\"4C9F\":\"YIN4\",\"4CA2\":\"TENG2\",\"4CA3\":\"YU2\",\"4CA6\":\"CHA2 DAI4 DI4 TUO3\",\"4CA7\":\"DU4 SHUI4\",\"4CA8\":\"HONG2\",\"4CAA\":\"XI4\",\"4CAC\":\"QI2\",\"4CAE\":\"YUAN2\",\"4CAF\":\"JI2\",\"4CB0\":\"YUN4\",\"4CB1\":\"FANG3\",\"4CB3\":\"HANG2\",\"4CB4\":\"ZHEN4\",\"4CB5\":\"HU4 QUE4\",\"4CB8\":\"JIE4\",\"4CB9\":\"PEI2\",\"4CBA\":\"GAN4\",\"4CBB\":\"XUAN2 YUAN2\",\"4CBD\":\"DAO3 SHI2\",\"4CBE\":\"QIAO3\",\"4CBF\":\"CI2\",\"4CC0\":\"DIE2\",\"4CC1\":\"BA2 BIN3 BO2 YUAN2\",\"4CC2\":\"TIAO2\",\"4CC3\":\"WAN3\",\"4CC4\":\"CI2\",\"4CC5\":\"ZHI3\",\"4CC6\":\"BAI2\",\"4CC7\":\"WU3\",\"4CC8\":\"BAO3\",\"4CC9\":\"DAN4\",\"4CCA\":\"BA2\",\"4CCB\":\"TONG2 ZHONG4\",\"4CCE\":\"JIU4\",\"4CCF\":\"GUI4\",\"4CD0\":\"CI4\",\"4CD1\":\"YOU3 YU4\",\"4CD2\":\"YUAN2\",\"4CD3\":\"LAO3\",\"4CD4\":\"JIU4 JU2\",\"4CD5\":\"FOU2\",\"4CD6\":\"NEI4 YE4\",\"4CD7\":\"E2\",\"4CD8\":\"E2\",\"4CD9\":\"XING3\",\"4CDA\":\"HE2 KAN3\",\"4CDB\":\"YAN4\",\"4CDC\":\"TU2\",\"4CDD\":\"BU4 DIAO4 FU3 POU3\",\"4CDE\":\"BENG3\",\"4CDF\":\"KOU4 MING2 MO3\",\"4CE0\":\"CHUI2 RUI4 ZHU4\",\"4CE2\":\"QI2\",\"4CE3\":\"YUAN2\",\"4CE7\":\"HOU2\",\"4CE8\":\"HUANG2\",\"4CEA\":\"JUAN4 TUAN2\",\"4CEB\":\"KUI2\",\"4CEC\":\"E4 YAO3 YI4\",\"4CED\":\"JI2\",\"4CEE\":\"MO4\",\"4CEF\":\"CHONG2 CHONG3\",\"4CF0\":\"BAO3\",\"4CF1\":\"WU4\",\"4CF2\":\"ZHEN4\",\"4CF3\":\"XU4\",\"4CF4\":\"DA2 TA4\",\"4CF5\":\"CHI4\",\"4CF7\":\"CONG2\",\"4CF8\":\"MA2 MAI2\",\"4CF9\":\"KOU4\",\"4CFA\":\"YAN4\",\"4CFB\":\"CAN2 CHAN2 DIE2 ZHAN4\",\"4CFD\":\"HE4\",\"4CFF\":\"LAN2 RAN2\",\"4D00\":\"TONG2\",\"4D01\":\"YU4\",\"4D02\":\"HANG4 XIANG4\",\"4D03\":\"NAO2\",\"4D04\":\"LI4 SHUN4\",\"4D05\":\"FEN2\",\"4D06\":\"PU2\",\"4D07\":\"LING2\",\"4D08\":\"AO3\",\"4D09\":\"XUAN2\",\"4D0A\":\"YI2\",\"4D0B\":\"XUAN2\",\"4D0C\":\"MENG2\",\"4D0E\":\"LEI3\",\"4D0F\":\"YAN4\",\"4D10\":\"BAO3\",\"4D11\":\"DIE2\",\"4D12\":\"LING2\",\"4D13\":\"SHI1\",\"4D14\":\"JIAO1\",\"4D15\":\"LIE4\",\"4D16\":\"JING1\",\"4D17\":\"JU2\",\"4D18\":\"TI1\",\"4D19\":\"PI4\",\"4D1A\":\"GANG3\",\"4D1B\":\"JIAO3 TU2 XI4 XIAO4 YIN2\",\"4D1C\":\"HUAI2\",\"4D1D\":\"BU4 CHUAI4\",\"4D1E\":\"DI2\",\"4D1F\":\"HUAN2 HUAN4\",\"4D20\":\"YAO3\",\"4D21\":\"LI4\",\"4D22\":\"MI2\",\"4D26\":\"REN2 YIN2\",\"4D29\":\"PIAO2\",\"4D2A\":\"LU4\",\"4D2B\":\"LING2\",\"4D2C\":\"YI4\",\"4D2D\":\"CAI2\",\"4D2E\":\"SHAN4\",\"4D30\":\"SHU2\",\"4D31\":\"TUO2\",\"4D32\":\"MO4\",\"4D33\":\"HE4 HUA2\",\"4D34\":\"TIE4\",\"4D35\":\"BING3 ZHUO2\",\"4D36\":\"PENG2\",\"4D37\":\"HUN2\",\"4D39\":\"GUO3\",\"4D3A\":\"BU4 CAI3 CHAN4\",\"4D3B\":\"LI2\",\"4D3C\":\"CHAN3 CHAN4\",\"4D3D\":\"BAI4 PI2\",\"4D3E\":\"CUO2 CUO4 YE4 ZHEN3 ZI3\",\"4D3F\":\"MENG2\",\"4D40\":\"SUO3\",\"4D41\":\"QIANG4\",\"4D42\":\"ZHI2\",\"4D43\":\"KUANG4\",\"4D44\":\"BI2 BO2 FENG4 PENG3\",\"4D45\":\"AO2\",\"4D46\":\"MENG2\",\"4D47\":\"XIAN4\",\"4D49\":\"TOU2\",\"4D4B\":\"WEI3\",\"4D4F\":\"LAO3\",\"4D50\":\"CHAN3 CHAN4\",\"4D51\":\"NI4\",\"4D52\":\"NI4\",\"4D53\":\"LI2\",\"4D54\":\"DONG3\",\"4D55\":\"JU4\",\"4D56\":\"JIAN4 QIAN4 XIAN4\",\"4D57\":\"FU2\",\"4D58\":\"SHA4 SHAI4\",\"4D59\":\"ZHA3\",\"4D5A\":\"TAO3\",\"4D5B\":\"JIAN4 XIAN4\",\"4D5C\":\"NONG3\",\"4D5D\":\"YA4 YI4\",\"4D5E\":\"JING4 QING2\",\"4D5F\":\"GAN3\",\"4D60\":\"DI2\",\"4D61\":\"JIAN3\",\"4D62\":\"MEI4 WEI4\",\"4D63\":\"DA2 ZHAN3\",\"4D64\":\"JIAN3\",\"4D65\":\"SHE4 WAN2 YING4 YU4\",\"4D66\":\"XIE4\",\"4D67\":\"ZAI4\",\"4D68\":\"MANG2\",\"4D69\":\"LI2\",\"4D6A\":\"GUN4\",\"4D6B\":\"YU4\",\"4D6C\":\"TA4\",\"4D6D\":\"ZHE4\",\"4D6E\":\"YANG4\",\"4D6F\":\"TUAN3\",\"4D71\":\"HE4 XI4\",\"4D72\":\"DIAO4\",\"4D73\":\"WEI4\",\"4D74\":\"YUN4 ZENG4\",\"4D75\":\"ZHA2 ZHUO2\",\"4D76\":\"QU2\",\"4D7A\":\"TING3\",\"4D7B\":\"GU3 HU2 HUI4\",\"4D7D\":\"CA4\",\"4D7E\":\"FU2\",\"4D7F\":\"TIE4\",\"4D80\":\"TA4\",\"4D81\":\"TA4\",\"4D82\":\"ZHUO2\",\"4D83\":\"HAN2\",\"4D84\":\"PING2\",\"4D85\":\"HE2\",\"4D87\":\"ZHOU4\",\"4D88\":\"BO2\",\"4D89\":\"LIU2\",\"4D8A\":\"NV4\",\"4D8C\":\"PAO4\",\"4D8D\":\"DI4 TI4\",\"4D8E\":\"SHA4\",\"4D8F\":\"TI3 TI4\",\"4D90\":\"KUAI4\",\"4D91\":\"TI4\",\"4D92\":\"QI2\",\"4D93\":\"JI4 QI4\",\"4D94\":\"CHI2 MIN2\",\"4D95\":\"PA2\",\"4D96\":\"JIN4 QIN2\",\"4D97\":\"KE4 QIA3 QIE4\",\"4D98\":\"LI4\",\"4D99\":\"JU4\",\"4D9A\":\"QU3\",\"4D9B\":\"LA4 LIE4\",\"4D9C\":\"GU4\",\"4D9D\":\"QIA4 XIA2\",\"4D9E\":\"QI2\",\"4D9F\":\"XIAN4\",\"4DA0\":\"JIAN3 XIAN2\",\"4DA1\":\"SHI2 ZE2 ZHI4\",\"4DA2\":\"XIAN2\",\"4DA3\":\"AI2\",\"4DA4\":\"HUA2\",\"4DA5\":\"JU3\",\"4DA6\":\"ZE2\",\"4DA7\":\"YAO3\",\"4DA9\":\"JI4\",\"4DAA\":\"CHA2\",\"4DAB\":\"KAN3 YAN2 YAN4\",\"4DAE\":\"YAN2 YAN3\",\"4DB1\":\"TONG2\",\"4DB2\":\"NAN2 NAN4 RAN2\",\"4DB3\":\"YUE4\",\"4DB5\":\"CHI2 SHI3\",\"4E00\":\"YI1\",\"4E01\":\"DING1 ZHENG1\",\"4E02\":\"KAO3 QIAO3 YU2\",\"4E03\":\"QI1\",\"4E04\":\"SHANG4 SHANG3\",\"4E05\":\"XIA4\",\"4E07\":\"WAN4 MO4\",\"4E08\":\"ZHANG4\",\"4E09\":\"SAN1 SAN4\",\"4E0A\":\"SHANG4\",\"4E0B\":\"XIA4\",\"4E0C\":\"JI1\",\"4E0D\":\"BU4 FOU3 FOU1\",\"4E0E\":\"YU3 YU4 YU2\",\"4E0F\":\"MIAN3\",\"4E10\":\"GAI4\",\"4E11\":\"CHOU3\",\"4E12\":\"CHOU3\",\"4E13\":\"ZHUAN1\",\"4E14\":\"QIE3 JU1\",\"4E15\":\"PI1\",\"4E16\":\"SHI4\",\"4E17\":\"SHI4\",\"4E18\":\"QIU1\",\"4E19\":\"BING3\",\"4E1A\":\"YE4\",\"4E1B\":\"CONG2\",\"4E1C\":\"DONG1\",\"4E1D\":\"SI1\",\"4E1E\":\"CHENG2\",\"4E1F\":\"DIU1\",\"4E20\":\"QIU1\",\"4E21\":\"LIANG3 LIANG4\",\"4E22\":\"DIU1\",\"4E23\":\"YOU3\",\"4E24\":\"LIANG3 LIANG4\",\"4E25\":\"YAN2\",\"4E26\":\"BING4 BANG4\",\"4E27\":\"SANG1 SANG4\",\"4E28\":\"GUN3\",\"4E29\":\"JIU1\",\"4E2A\":\"GE4 GE3\",\"4E2B\":\"YA1\",\"4E2C\":\"QIANG2\",\"4E2D\":\"ZHONG1 ZHONG4\",\"4E2E\":\"JI3\",\"4E2F\":\"JIE4\",\"4E30\":\"FENG1\",\"4E31\":\"GUAN4\",\"4E32\":\"CHUAN4 GUAN4\",\"4E33\":\"CHAN3\",\"4E34\":\"LIN2 LIN4\",\"4E35\":\"ZHUO3\",\"4E36\":\"ZHU3\",\"4E38\":\"WAN2\",\"4E39\":\"DAN1\",\"4E3A\":\"WEI4 WEI2\",\"4E3B\":\"ZHU3\",\"4E3C\":\"JING3\",\"4E3D\":\"LI4 LI2\",\"4E3E\":\"JU3\",\"4E3F\":\"PIE3\",\"4E40\":\"FU2\",\"4E41\":\"YI2\",\"4E42\":\"YI4\",\"4E43\":\"NAI3\",\"4E45\":\"JIU3\",\"4E46\":\"JIU3\",\"4E47\":\"ZHE2 NVE4 ZHE4 TUO1\",\"4E48\":\"YAO1 MO5 ME5 MA5 MO3\",\"4E49\":\"YI4\",\"4E4B\":\"ZHI1\",\"4E4C\":\"WU1 WU4\",\"4E4D\":\"ZHA4 ZUO4\",\"4E4E\":\"HU1 HU2\",\"4E4F\":\"FA2\",\"4E50\":\"LE4 YUE4 YAO4 LUO4 LIAO2\",\"4E51\":\"ZHONG4\",\"4E52\":\"PING1\",\"4E53\":\"PANG1 PANG5\",\"4E54\":\"QIAO2\",\"4E55\":\"HU3\",\"4E56\":\"GUAI1\",\"4E57\":\"CHENG2 SHENG4\",\"4E58\":\"CHENG2 SHENG4\",\"4E59\":\"YI3\",\"4E5A\":\"YIN3\",\"4E5C\":\"MIE1 NIE4\",\"4E5D\":\"JIU3\",\"4E5E\":\"QI3\",\"4E5F\":\"YE3\",\"4E60\":\"XI2\",\"4E61\":\"XIANG1 XIANG3 XIANG4\",\"4E62\":\"GAI4\",\"4E63\":\"JIU3\",\"4E66\":\"SHU1\",\"4E68\":\"SHI3\",\"4E69\":\"JI1\",\"4E6A\":\"NANG2\",\"4E6B\":\"JIA1\",\"4E6D\":\"SHI2\",\"4E70\":\"MAI3\",\"4E71\":\"LUAN4\",\"4E73\":\"RU3\",\"4E74\":\"XUE2\",\"4E75\":\"YAN3\",\"4E76\":\"FU3\",\"4E77\":\"SHA1\",\"4E78\":\"NA3\",\"4E79\":\"GAN1 QIAN2\",\"4E7E\":\"GAN1 QIAN2\",\"4E7F\":\"CHI4\",\"4E80\":\"GUI1\",\"4E81\":\"GAN1\",\"4E82\":\"LUAN4\",\"4E83\":\"LIN2\",\"4E84\":\"YI4\",\"4E85\":\"JUE2\",\"4E86\":\"LE5 LIAO3\",\"4E88\":\"YU2 YU3\",\"4E89\":\"ZHENG1 ZHENG4\",\"4E8A\":\"SHI4\",\"4E8B\":\"SHI4\",\"4E8C\":\"ER4\",\"4E8D\":\"CHU4\",\"4E8E\":\"YU2 XU1\",\"4E8F\":\"YU2 KUI1\",\"4E90\":\"YU2\",\"4E91\":\"YUN2\",\"4E92\":\"HU4\",\"4E93\":\"QI2\",\"4E94\":\"WU3\",\"4E95\":\"JING3\",\"4E96\":\"SI4\",\"4E97\":\"SUI4\",\"4E98\":\"GEN4 GENG4\",\"4E99\":\"GEN4 GENG4\",\"4E9A\":\"YA4 YA1\",\"4E9B\":\"XIE1 SUO4 SA1\",\"4E9C\":\"YA4\",\"4E9D\":\"QI2 ZHAI1 ZI1\",\"4E9E\":\"YA4 YA1\",\"4E9F\":\"JI2 QI4\",\"4EA0\":\"TOU2\",\"4EA1\":\"WANG2 WU2\",\"4EA2\":\"KANG4 GANG1\",\"4EA3\":\"TA4\",\"4EA4\":\"JIAO1\",\"4EA5\":\"HAI4\",\"4EA6\":\"YI4\",\"4EA7\":\"CHAN3\",\"4EA8\":\"HENG1 XIANG3 PENG1\",\"4EA9\":\"MU3\",\"4EAB\":\"XIANG3\",\"4EAC\":\"JING1\",\"4EAD\":\"TING2\",\"4EAE\":\"LIANG4\",\"4EAF\":\"XIANG3\",\"4EB0\":\"JING1\",\"4EB1\":\"YE4\",\"4EB2\":\"QIN1 XIN1 QING4\",\"4EB3\":\"BO2\",\"4EB4\":\"YOU4\",\"4EB5\":\"XIE4\",\"4EB6\":\"DAN3 DAN4\",\"4EB7\":\"LIAN2\",\"4EB8\":\"DUO3\",\"4EB9\":\"WEI3 MEN2\",\"4EBA\":\"REN2\",\"4EBB\":\"REN2\",\"4EBC\":\"JI2\",\"4EBE\":\"WANG2 WU2\",\"4EBF\":\"YI4\",\"4EC0\":\"SHI2 SHEN2\",\"4EC1\":\"REN2\",\"4EC2\":\"LE4\",\"4EC3\":\"DING1\",\"4EC4\":\"ZE4\",\"4EC5\":\"JIN3 JIN4\",\"4EC6\":\"PU1 FU4 PU2\",\"4EC7\":\"CHOU2 QIU2\",\"4EC8\":\"BA1\",\"4EC9\":\"ZHANG3\",\"4ECA\":\"JIN1\",\"4ECB\":\"JIE4\",\"4ECC\":\"BING1\",\"4ECD\":\"RENG2\",\"4ECE\":\"CONG2 ZONG4 ZONG1 CONG1\",\"4ECF\":\"FO2\",\"4ED0\":\"SAN3\",\"4ED1\":\"LUN2\",\"4ED3\":\"CANG1\",\"4ED4\":\"ZI3 ZAI3\",\"4ED5\":\"SHI4\",\"4ED6\":\"TA1\",\"4ED7\":\"ZHANG4\",\"4ED8\":\"FU4\",\"4ED9\":\"XIAN1\",\"4EDA\":\"XIAN1\",\"4EDB\":\"TUO1\",\"4EDC\":\"HONG2\",\"4EDD\":\"TONG2 TONG4\",\"4EDE\":\"REN4\",\"4EDF\":\"QIAN1\",\"4EE0\":\"GAN2\",\"4EE1\":\"YI4 GE1\",\"4EE2\":\"DI2\",\"4EE3\":\"DAI4\",\"4EE4\":\"LING4 LING2 LING3\",\"4EE5\":\"YI3\",\"4EE6\":\"CHAO4\",\"4EE7\":\"CHANG2 ZHANG3\",\"4EE8\":\"SA1\",\"4EEA\":\"YI2\",\"4EEB\":\"MU4\",\"4EEC\":\"MEN5\",\"4EED\":\"REN4\",\"4EEE\":\"JIA3 FAN3\",\"4EEF\":\"CHAO4\",\"4EF0\":\"YANG3 YANG4 ANG2\",\"4EF1\":\"QIAN2\",\"4EF2\":\"ZHONG4\",\"4EF3\":\"PI3 PI2\",\"4EF4\":\"WAN4\",\"4EF5\":\"WU3\",\"4EF6\":\"JIAN4\",\"4EF7\":\"JIA4 JIE4 JIE5\",\"4EF8\":\"YAO3\",\"4EF9\":\"FENG1\",\"4EFA\":\"CANG1\",\"4EFB\":\"REN4 REN2\",\"4EFC\":\"WANG2\",\"4EFD\":\"FEN4 BIN1\",\"4EFE\":\"DI1\",\"4EFF\":\"FANG3 PANG2\",\"4F00\":\"ZHONG1\",\"4F01\":\"QI3\",\"4F02\":\"PEI4\",\"4F03\":\"YU2\",\"4F04\":\"DIAO4\",\"4F05\":\"DUN4\",\"4F06\":\"WEN4\",\"4F07\":\"YI4\",\"4F08\":\"XIN3\",\"4F09\":\"KANG4\",\"4F0A\":\"YI1\",\"4F0B\":\"JI2\",\"4F0C\":\"AI4\",\"4F0D\":\"WU3\",\"4F0E\":\"JI4 QI2\",\"4F0F\":\"FU2\",\"4F10\":\"FA2\",\"4F11\":\"XIU1\",\"4F12\":\"JIN4\",\"4F13\":\"BEI1\",\"4F14\":\"DAN3 SHEN3\",\"4F15\":\"FU1\",\"4F16\":\"TANG3\",\"4F17\":\"ZHONG4\",\"4F18\":\"YOU1\",\"4F19\":\"HUO3 HUO5\",\"4F1A\":\"HUI4 KUAI4 GUI4\",\"4F1B\":\"YU3\",\"4F1C\":\"CUI4\",\"4F1D\":\"CHUAN2 YUN2\",\"4F1E\":\"SAN3\",\"4F1F\":\"WEI3\",\"4F20\":\"CHUAN2 ZHUAN4\",\"4F21\":\"CHE1\",\"4F22\":\"YA2\",\"4F23\":\"XIAN4\",\"4F24\":\"SHANG1\",\"4F25\":\"CHANG1\",\"4F26\":\"LUN2\",\"4F27\":\"CANG1 CHENG2\",\"4F28\":\"XUN4\",\"4F29\":\"XIN4\",\"4F2A\":\"WEI3 WEI4\",\"4F2B\":\"ZHU4\",\"4F2D\":\"XUAN2\",\"4F2E\":\"NU2\",\"4F2F\":\"BO2 BAI3 BA4\",\"4F30\":\"GU1 GU3 GU4\",\"4F31\":\"NI3\",\"4F32\":\"NI3 NI4\",\"4F33\":\"XIE4\",\"4F34\":\"BAN4 PAN4\",\"4F35\":\"XU4\",\"4F36\":\"LING2\",\"4F37\":\"ZHOU4\",\"4F38\":\"SHEN1\",\"4F39\":\"QU1\",\"4F3A\":\"SI4 CI4\",\"4F3B\":\"BENG1\",\"4F3C\":\"SI4 SHI4\",\"4F3D\":\"QIE2 JIA1\",\"4F3E\":\"PI1\",\"4F3F\":\"YI4\",\"4F40\":\"SI4 SHI4\",\"4F41\":\"AI3 YI3 CHI4 SI4\",\"4F42\":\"ZHENG1\",\"4F43\":\"DIAN4 TIAN2\",\"4F44\":\"HAN2\",\"4F45\":\"MAI4\",\"4F46\":\"DAN4\",\"4F47\":\"ZHU4\",\"4F48\":\"BU4\",\"4F49\":\"QU1\",\"4F4A\":\"BI3\",\"4F4B\":\"SHAO4\",\"4F4C\":\"CI3\",\"4F4D\":\"WEI4\",\"4F4E\":\"DI1\",\"4F4F\":\"ZHU4\",\"4F50\":\"ZUO3\",\"4F51\":\"YOU4\",\"4F52\":\"YANG1\",\"4F53\":\"TI3 BEN4 TI1\",\"4F54\":\"ZHAN4\",\"4F55\":\"HE2 HE4\",\"4F56\":\"BI4\",\"4F57\":\"TUO2 TUO1 TUO4 YI2\",\"4F58\":\"SHE2\",\"4F59\":\"YU2 XU2\",\"4F5A\":\"YI4 DIE2\",\"4F5B\":\"FO2 FU2\",\"4F5C\":\"ZUO4 ZUO1 ZUO2\",\"4F5D\":\"KOU4 GOU1\",\"4F5E\":\"NING4\",\"4F5F\":\"TONG2\",\"4F60\":\"NI3\",\"4F61\":\"XUAN1\",\"4F62\":\"QU2\",\"4F63\":\"YONG4 YONG1 YONG2\",\"4F64\":\"WA3\",\"4F65\":\"QIAN1\",\"4F67\":\"KA3\",\"4F69\":\"PEI4\",\"4F6A\":\"HUI2 HUAI2\",\"4F6B\":\"HE4\",\"4F6C\":\"LAO3\",\"4F6D\":\"XIANG2\",\"4F6E\":\"GE2\",\"4F6F\":\"YANG2\",\"4F70\":\"BAI3 BO2\",\"4F71\":\"FA3\",\"4F72\":\"MING2\",\"4F73\":\"JIA1 JIA5\",\"4F74\":\"ER4 NAI4 MI3\",\"4F75\":\"BING4\",\"4F76\":\"JI2\",\"4F77\":\"HEN3\",\"4F78\":\"HUO2\",\"4F79\":\"GUI3\",\"4F7A\":\"QUAN2\",\"4F7B\":\"TIAO1\",\"4F7C\":\"JIAO3 JIAO1\",\"4F7D\":\"CI4\",\"4F7E\":\"YI4\",\"4F7F\":\"SHI3 SHI4\",\"4F80\":\"XING2\",\"4F81\":\"SHEN1\",\"4F82\":\"TUO1\",\"4F83\":\"KAN3\",\"4F84\":\"ZHI2\",\"4F85\":\"GAI1\",\"4F86\":\"LAI2 LAI4\",\"4F87\":\"YI2\",\"4F88\":\"CHI3\",\"4F89\":\"KUA1 KUA3\",\"4F8A\":\"GUANG1\",\"4F8B\":\"LI4\",\"4F8C\":\"YIN1\",\"4F8D\":\"SHI4\",\"4F8E\":\"MI3 MEI3\",\"4F8F\":\"ZHU1\",\"4F90\":\"XU4\",\"4F91\":\"YOU4\",\"4F92\":\"AN1\",\"4F93\":\"LU4\",\"4F94\":\"MOU2\",\"4F95\":\"ER2\",\"4F96\":\"LUN2\",\"4F97\":\"TONG1 TONG2 TONG3 DONG4\",\"4F98\":\"CHA4\",\"4F99\":\"CHI4\",\"4F9A\":\"XUN4\",\"4F9B\":\"GONG1 GONG4\",\"4F9C\":\"ZHOU1\",\"4F9D\":\"YI1 YI3\",\"4F9E\":\"RU3\",\"4F9F\":\"JIAN4\",\"4FA0\":\"XIA2\",\"4FA1\":\"JIA4\",\"4FA2\":\"ZAI4\",\"4FA3\":\"LV3\",\"4FA5\":\"JIAO3\",\"4FA6\":\"ZHEN1 ZHENG1\",\"4FA7\":\"CE4 ZE4\",\"4FA8\":\"QIAO2\",\"4FA9\":\"KUAI4\",\"4FAA\":\"CHAI2\",\"4FAB\":\"NING4\",\"4FAC\":\"NONG2\",\"4FAD\":\"JIN3\",\"4FAE\":\"WU3\",\"4FAF\":\"HOU2 HOU4\",\"4FB0\":\"JIONG3\",\"4FB1\":\"CHENG3\",\"4FB2\":\"ZHEN4\",\"4FB3\":\"ZUO4 CUO4\",\"4FB4\":\"CHOU3\",\"4FB5\":\"QIN1\",\"4FB6\":\"LV3\",\"4FB7\":\"JU2\",\"4FB8\":\"SHU4\",\"4FB9\":\"TING3\",\"4FBA\":\"SHEN4\",\"4FBB\":\"TUO1\",\"4FBC\":\"BO2\",\"4FBD\":\"NAN2\",\"4FBE\":\"HAO1\",\"4FBF\":\"BIAN4 PIAN2\",\"4FC0\":\"TUI3\",\"4FC1\":\"YU3\",\"4FC2\":\"XI4\",\"4FC3\":\"CU4\",\"4FC4\":\"E2\",\"4FC5\":\"QIU2\",\"4FC6\":\"XU2 SHU1\",\"4FC7\":\"KUANG3 KUANG1 GUANG4\",\"4FC8\":\"KU4\",\"4FC9\":\"WU4\",\"4FCA\":\"JUN4\",\"4FCB\":\"YI4\",\"4FCC\":\"FU3\",\"4FCD\":\"LANG2\",\"4FCE\":\"ZU3\",\"4FCF\":\"QIAO4\",\"4FD0\":\"LI4\",\"4FD1\":\"YONG3\",\"4FD2\":\"HUN4\",\"4FD3\":\"JING4\",\"4FD4\":\"XIAN4\",\"4FD5\":\"SAN4\",\"4FD6\":\"PAI3\",\"4FD7\":\"SU2\",\"4FD8\":\"FU2\",\"4FD9\":\"XI1\",\"4FDA\":\"LI3\",\"4FDB\":\"FU3 MIAN3\",\"4FDC\":\"PING1\",\"4FDD\":\"BAO3\",\"4FDE\":\"YU2 SHU4\",\"4FDF\":\"SI4 QI2\",\"4FE0\":\"XIA2\",\"4FE1\":\"XIN4 SHEN1\",\"4FE2\":\"XIU1\",\"4FE3\":\"YU3\",\"4FE4\":\"TI4\",\"4FE5\":\"CHE1\",\"4FE6\":\"CHOU2\",\"4FE8\":\"YAN3\",\"4FE9\":\"LIA3 LIANG3\",\"4FEA\":\"LI4\",\"4FEB\":\"LAI2 LAI4\",\"4FED\":\"JIAN3\",\"4FEE\":\"XIU1\",\"4FEF\":\"FU3\",\"4FF0\":\"HE4\",\"4FF1\":\"JU4\",\"4FF2\":\"XIAO4\",\"4FF3\":\"PAI2\",\"4FF4\":\"JIAN4\",\"4FF5\":\"BIAO4\",\"4FF6\":\"CHU4 TI4\",\"4FF7\":\"FEI4\",\"4FF8\":\"FENG4\",\"4FF9\":\"YA4\",\"4FFA\":\"AN3\",\"4FFB\":\"BEI4\",\"4FFC\":\"YU4\",\"4FFD\":\"XIN1\",\"4FFE\":\"BI3\",\"4FFF\":\"JIAN4\",\"500A\":\"ZONG4\",\"500B\":\"GE4 GE3\",\"500C\":\"GUAN1\",\"500D\":\"BEI4\",\"500E\":\"TIAN1\",\"500F\":\"SHU1\",\"501A\":\"YI3\",\"501B\":\"QI1\",\"501C\":\"TI4\",\"501D\":\"GAN4\",\"501E\":\"JING4 LIANG4\",\"501F\":\"JIE4\",\"502A\":\"NI2 NI4\",\"502B\":\"LUN2\",\"502C\":\"ZHUO1\",\"502D\":\"WEI1 WO1 WO3\",\"502E\":\"LUO3\",\"502F\":\"SONG1\",\"503A\":\"ZHAI4\",\"503B\":\"YE1\",\"503C\":\"ZHI2 ZHI4\",\"503D\":\"SHA4\",\"503E\":\"QING1\",\"504A\":\"YU3 JU3\",\"504B\":\"BING3\",\"504C\":\"RUO4\",\"504D\":\"TI2\",\"504E\":\"WEI1\",\"504F\":\"PIAN1\",\"505A\":\"ZUO4\",\"505B\":\"CHA1\",\"505C\":\"TING2\",\"505D\":\"BEI4\",\"505E\":\"YE4\",\"505F\":\"HUANG2\",\"506A\":\"BI1\",\"506B\":\"ZHI4\",\"506C\":\"ZONG3\",\"506D\":\"MIAN3\",\"506E\":\"JI2\",\"506F\":\"YI3\",\"507A\":\"ZA2 ZAN2\",\"507B\":\"LV3 LOU2\",\"507C\":\"JIE2\",\"507D\":\"WEI3 WEI4\",\"507E\":\"FEN4\",\"507F\":\"CHANG2\",\"508A\":\"YUN3\",\"508B\":\"GOU4\",\"508C\":\"MA4\",\"508D\":\"BANG4 PANG2\",\"508E\":\"DIAN1\",\"508F\":\"TANG2\",\"509A\":\"XIAO4\",\"509B\":\"YONG3 RONG2\",\"509C\":\"YAO2\",\"509D\":\"TAN4 TA4\",\"509E\":\"SUO1\",\"509F\":\"YANG3\",\"50A0\":\"FA1\",\"50A1\":\"BING4\",\"50A2\":\"JIA1\",\"50A3\":\"DAI3\",\"50A4\":\"ZAI4\",\"50A5\":\"TANG3\",\"50A7\":\"BIN4\",\"50A8\":\"CHU3 CHU2\",\"50A9\":\"NUO2\",\"50AA\":\"CAN1\",\"50AB\":\"LEI3\",\"50AC\":\"CUI1\",\"50AD\":\"YONG1 YONG2\",\"50AE\":\"ZAO1 CAO2\",\"50AF\":\"ZONG3\",\"50B0\":\"PENG2\",\"50B1\":\"SONG3\",\"50B2\":\"AO4\",\"50B3\":\"CHUAN2 ZHUAN4\",\"50B4\":\"YU3\",\"50B5\":\"ZHAI4\",\"50B6\":\"COU4\",\"50B7\":\"SHANG1\",\"50B8\":\"QIANG3\",\"50B9\":\"JING4 JIANG1\",\"50BA\":\"CHI4\",\"50BB\":\"SHA3\",\"50BC\":\"HAN4\",\"50BD\":\"ZHANG1\",\"50BE\":\"QING1\",\"50BF\":\"YAN4\",\"50C0\":\"DI4\",\"50C1\":\"XI1\",\"50C2\":\"LV3 LOU2\",\"50C3\":\"BEI4\",\"50C4\":\"PIAO4\",\"50C5\":\"JIN3 JIN4\",\"50C6\":\"LIAN2 LIAN3 LIAN4\",\"50C7\":\"LU4\",\"50C8\":\"MAN4\",\"50C9\":\"QIAN1\",\"50CA\":\"XIAN1\",\"50CB\":\"TAN4\",\"50CC\":\"YING2\",\"50CD\":\"DONG4\",\"50CE\":\"ZHUAN4\",\"50CF\":\"XIANG4\",\"50D0\":\"SHAN4\",\"50D1\":\"QIAO2\",\"50D2\":\"JIONG3\",\"50D3\":\"TUI3 TUI2\",\"50D4\":\"ZUN3\",\"50D5\":\"PU2\",\"50D6\":\"XI1\",\"50D7\":\"LAO2\",\"50D8\":\"CHANG3\",\"50D9\":\"GUANG1\",\"50DA\":\"LIAO2\",\"50DB\":\"QI1\",\"50DC\":\"DENG4\",\"50DD\":\"CHAN2\",\"50DE\":\"WEI3 WEI4\",\"50DF\":\"JI1\",\"50E0\":\"FAN1\",\"50E1\":\"HUI4\",\"50E2\":\"CHUAN3\",\"50E3\":\"JIAN4\",\"50E4\":\"DAN4\",\"50E5\":\"JIAO3\",\"50E6\":\"JIU4\",\"50E7\":\"SENG1\",\"50E8\":\"FEN4\",\"50E9\":\"XIAN4\",\"50EA\":\"JUE2\",\"50EB\":\"E4\",\"50EC\":\"JIAO1 JIAO4\",\"50ED\":\"JIAN4\",\"50EE\":\"TONG2 ZHUANG4\",\"50EF\":\"LIN3\",\"50F0\":\"BO2\",\"50F1\":\"GU4\",\"50F3\":\"SU4\",\"50F4\":\"XIAN4\",\"50F5\":\"JIANG1\",\"50F6\":\"MIN3\",\"50F7\":\"YE4\",\"50F8\":\"JIN4\",\"50F9\":\"JIA4 JIE5\",\"50FA\":\"QIAO4\",\"50FB\":\"PI4\",\"50FC\":\"FENG1\",\"50FD\":\"ZHOU4\",\"50FE\":\"AI4\",\"50FF\":\"SAI4\",\"510A\":\"CHU4\",\"510B\":\"DAN1\",\"510C\":\"JIAO3 YAO2\",\"510D\":\"SHA3\",\"510E\":\"ZAI4\",\"511A\":\"MENG2\",\"511B\":\"WU3\",\"511C\":\"NING2\",\"511D\":\"QIONG2\",\"511E\":\"NI3 ER3 NAI3\",\"511F\":\"CHANG2\",\"512A\":\"YOU1\",\"512B\":\"HAO2\",\"512C\":\"CHEN4\",\"512D\":\"CHEN4\",\"512E\":\"LI4\",\"512F\":\"TENG2\",\"513A\":\"NUO2\",\"513B\":\"TANG3\",\"513C\":\"YAN3\",\"513D\":\"LEI3\",\"513E\":\"NANG4\",\"513F\":\"ER2 ER5\",\"514A\":\"DUI4\",\"514B\":\"KE4\",\"514C\":\"DUI4\",\"514D\":\"MIAN3\",\"514E\":\"TU4\",\"514F\":\"CHANG2\",\"515A\":\"DANG3\",\"515B\":\"QIAN1\",\"515C\":\"DOU1\",\"515D\":\"FEN1\",\"515E\":\"MAO2\",\"515F\":\"SHEN1\",\"516A\":\"YU2 SHU4\",\"516B\":\"BA1\",\"516C\":\"GONG1\",\"516D\":\"LIU4 LU4\",\"516E\":\"XI1\",\"517B\":\"YANG3 YANG4\",\"517C\":\"JIAN1\",\"517D\":\"SHOU4\",\"517E\":\"JI4\",\"517F\":\"YI4\",\"518A\":\"CE4\",\"518B\":\"JIONG1\",\"518C\":\"CE4\",\"518D\":\"ZAI4\",\"518E\":\"GUA3\",\"518F\":\"JIONG3\",\"519A\":\"KAN3\",\"519B\":\"JUN1\",\"519C\":\"NONG2\",\"519D\":\"YI2\",\"519E\":\"MI2\",\"519F\":\"SHI4\",\"51A0\":\"GUAN1 GUAN4\",\"51A1\":\"MENG2\",\"51A2\":\"ZHONG3\",\"51A3\":\"JU4\",\"51A4\":\"YUAN1\",\"51A5\":\"MING2\",\"51A6\":\"KOU4\",\"51A8\":\"FU4\",\"51A9\":\"XIE3\",\"51AA\":\"MI4\",\"51AB\":\"BING1\",\"51AC\":\"DONG1\",\"51AD\":\"TAI2\",\"51AE\":\"GANG1\",\"51AF\":\"FENG2 PING2\",\"51B0\":\"BING1 NING2\",\"51B1\":\"HU4\",\"51B2\":\"CHONG1\",\"51B3\":\"JUE2\",\"51B4\":\"HU4\",\"51B5\":\"KUANG4\",\"51B6\":\"YE3\",\"51B7\":\"LENG3\",\"51B8\":\"PAN4\",\"51B9\":\"FU2\",\"51BA\":\"MIN3\",\"51BB\":\"DONG4\",\"51BC\":\"XIAN3\",\"51BD\":\"LIE4\",\"51BE\":\"XIA2\",\"51BF\":\"JIAN1\",\"51C0\":\"JING4\",\"51C1\":\"SHU4\",\"51C2\":\"MEI3\",\"51C3\":\"TU2\",\"51C4\":\"QI1\",\"51C5\":\"GU4 HE2\",\"51C6\":\"ZHUN3\",\"51C7\":\"SONG1 SONG4\",\"51C8\":\"JING4\",\"51C9\":\"LIANG2 LIANG4\",\"51CA\":\"QING4\",\"51CB\":\"DIAO1\",\"51CC\":\"LING2\",\"51CD\":\"DONG4\",\"51CE\":\"GAN4\",\"51CF\":\"JIAN3\",\"51D0\":\"YIN1\",\"51D1\":\"COU4\",\"51D2\":\"YI2\",\"51D3\":\"LI4\",\"51D4\":\"CANG1\",\"51D5\":\"MING3\",\"51D7\":\"CUI2\",\"51D8\":\"SI1\",\"51D9\":\"DUO2\",\"51DA\":\"JIN4\",\"51DB\":\"LIN3\",\"51DC\":\"LIN3\",\"51DD\":\"NING2\",\"51DE\":\"XI1\",\"51DF\":\"DU2\",\"51E0\":\"JI1 JI3\",\"51E1\":\"FAN2\",\"51E2\":\"FAN2\",\"51E3\":\"FAN2\",\"51E4\":\"FENG4\",\"51E5\":\"JU1\",\"51E6\":\"CHU3 CHU4 JU4\",\"51E8\":\"FENG1 FENG3 FENG4\",\"51EB\":\"FU2\",\"51EC\":\"FENG1\",\"51ED\":\"PING2\",\"51EE\":\"FENG1\",\"51EF\":\"KAI3\",\"51F0\":\"HUANG2\",\"51F1\":\"KAI3\",\"51F2\":\"GAN1\",\"51F3\":\"DENG4\",\"51F4\":\"PING2\",\"51F5\":\"QU1\",\"51F6\":\"XIONG1\",\"51F7\":\"KUAI4\",\"51F8\":\"TU1\",\"51F9\":\"AO1 WA1\",\"51FA\":\"CHU1\",\"51FB\":\"JI2 JI1\",\"51FC\":\"DANG4\",\"51FD\":\"HAN2\",\"51FE\":\"HAN2\",\"51FF\":\"ZAO2 ZUO4\",\"520A\":\"KAN1\",\"520B\":\"QIAN4 KAN1\",\"520C\":\"CUN3\",\"520D\":\"CHU2\",\"520E\":\"WEN3\",\"520F\":\"JI1\",\"521A\":\"GANG1\",\"521B\":\"CHUANG4 CHUANG1\",\"521C\":\"FU2\",\"521D\":\"CHU1\",\"521E\":\"QU4\",\"521F\":\"JU1\",\"522A\":\"SHAN1\",\"522B\":\"BIE2 BIE4\",\"522C\":\"CHAN3\",\"522D\":\"JING3\",\"522E\":\"GUA1\",\"522F\":\"GEN1\",\"523A\":\"CI4 QI4\",\"523B\":\"KE4\",\"523C\":\"JIE2\",\"523D\":\"GUI4\",\"523E\":\"CI4 QI4\",\"523F\":\"GUI4\",\"524A\":\"XUE1 XIAO1\",\"524B\":\"KE4\",\"524C\":\"LA4 LA2\",\"524D\":\"QIAN2\",\"524E\":\"CHA4 SHA1\",\"524F\":\"CHUANG4 CHUANG1\",\"525A\":\"ZI4\",\"525B\":\"GANG1\",\"525C\":\"WAN1\",\"525D\":\"BO1 BAO1\",\"525E\":\"JI1\",\"525F\":\"DUO1\",\"526A\":\"JIAN3\",\"526B\":\"DUO2\",\"526C\":\"DUAN1 TUAN2 ZHI4\",\"526D\":\"WU1\",\"526E\":\"GUA3\",\"526F\":\"FU4\",\"527A\":\"LI2\",\"527B\":\"FOU2\",\"527C\":\"SHAN1\",\"527D\":\"PIAO4 PIAO1 PIAO2 BIAO3 BIAO1\",\"527E\":\"KOU1\",\"527F\":\"JIAO3 CHAO1\",\"528A\":\"GUI4\",\"528B\":\"JIAO3\",\"528C\":\"GUI4\",\"528D\":\"JIAN4\",\"528E\":\"JIAN4\",\"528F\":\"TANG1\",\"529A\":\"ZHU2\",\"529B\":\"LI4\",\"529C\":\"YA1\",\"529D\":\"QUAN4\",\"529E\":\"BAN4\",\"529F\":\"GONG1\",\"52A0\":\"JIA1\",\"52A1\":\"WU4\",\"52A2\":\"MAI4\",\"52A3\":\"LIE4\",\"52A4\":\"JIN4\",\"52A5\":\"KENG1\",\"52A6\":\"XIE2\",\"52A7\":\"ZHI3\",\"52A8\":\"DONG4\",\"52A9\":\"ZHU4\",\"52AA\":\"NU3\",\"52AB\":\"JIE2\",\"52AC\":\"QU2\",\"52AD\":\"SHAO4\",\"52AE\":\"YI4\",\"52AF\":\"ZHU1\",\"52B0\":\"MIAO3\",\"52B1\":\"LI4\",\"52B2\":\"JING4 JIN4\",\"52B3\":\"LAO2 LAO4\",\"52B4\":\"LAO2\",\"52B5\":\"JUAN4 QUAN4\",\"52B6\":\"KOU3\",\"52B7\":\"YANG2\",\"52B8\":\"WA1\",\"52B9\":\"XIAO4\",\"52BA\":\"MOU2\",\"52BB\":\"KUANG1\",\"52BC\":\"JIE2\",\"52BD\":\"LIE4\",\"52BE\":\"HE2\",\"52BF\":\"SHI4\",\"52C0\":\"KE4\",\"52C1\":\"JIN4 JING4\",\"52C2\":\"HAO2\",\"52C3\":\"BO2\",\"52C4\":\"MIN3\",\"52C5\":\"CHI4\",\"52C6\":\"LANG2\",\"52C7\":\"YONG3\",\"52C8\":\"YONG3\",\"52C9\":\"MIAN3\",\"52CA\":\"KE4\",\"52CB\":\"XUN1\",\"52CC\":\"JUAN4\",\"52CD\":\"QING2\",\"52CE\":\"LU4\",\"52CF\":\"POU3\",\"52D0\":\"MENG3\",\"52D1\":\"LAI4 CHI4\",\"52D2\":\"LE4 LEI1\",\"52D3\":\"KAI4\",\"52D4\":\"MIAN3\",\"52D5\":\"DONG4\",\"52D6\":\"XU4\",\"52D7\":\"XU4\",\"52D8\":\"KAN1 KAN4\",\"52D9\":\"WU4\",\"52DA\":\"YI4\",\"52DB\":\"XUN1\",\"52DC\":\"WENG3\",\"52DD\":\"SHENG4 SHENG1\",\"52DE\":\"LAO2 LAO4\",\"52DF\":\"MU4\",\"52E0\":\"LU4\",\"52E1\":\"PIAO4\",\"52E2\":\"SHI4\",\"52E3\":\"JI1\",\"52E4\":\"QIN2\",\"52E5\":\"QIANG3 JIANG4\",\"52E6\":\"JIAO3 CHAO1\",\"52E7\":\"QUAN4\",\"52E8\":\"YANG3\",\"52E9\":\"YI4\",\"52EA\":\"JUE2\",\"52EB\":\"FAN2\",\"52EC\":\"JUAN4\",\"52ED\":\"TONG2\",\"52EE\":\"JU4\",\"52EF\":\"DAN1\",\"52F0\":\"XIE2\",\"52F1\":\"MAI4\",\"52F2\":\"XUN1\",\"52F3\":\"XUN1\",\"52F4\":\"LV4\",\"52F5\":\"LI4\",\"52F6\":\"CHE4\",\"52F7\":\"RANG2 XIANG1\",\"52F8\":\"QUAN4\",\"52F9\":\"BAO1\",\"52FA\":\"SHAO2 ZHUO2\",\"52FB\":\"YUN2\",\"52FC\":\"JIU1\",\"52FD\":\"BAO4\",\"52FE\":\"GOU1 GOU4\",\"52FF\":\"WU4\",\"530A\":\"JU2\",\"530B\":\"TAO2\",\"530C\":\"GE2\",\"530D\":\"PU2\",\"530E\":\"AN4\",\"530F\":\"PAO2\",\"531A\":\"FANG1\",\"531B\":\"JIU4\",\"531C\":\"YI2\",\"531D\":\"ZA1\",\"531E\":\"JIANG4\",\"531F\":\"KANG4\",\"532A\":\"FEI3 FEI1\",\"532B\":\"HU1\",\"532C\":\"TOU2\",\"532D\":\"GUI3\",\"532E\":\"GUI4 KUI4\",\"532F\":\"HUI4\",\"533A\":\"QU1 OU1\",\"533B\":\"YI4 YI1\",\"533C\":\"QIA4 AN3 KE1\",\"533D\":\"YAN3\",\"533E\":\"BIAN3\",\"533F\":\"NI4\",\"534A\":\"BAN4\",\"534B\":\"SHI4\",\"534C\":\"XI4\",\"534D\":\"WAN4\",\"534E\":\"HUA2 HUA4 HUA1\",\"534F\":\"XIE2\",\"535A\":\"BO2\",\"535B\":\"SHUAI4\",\"535C\":\"BU3\",\"535D\":\"KUANG4\",\"535E\":\"BIAN4\",\"535F\":\"BU3\",\"536A\":\"JIE2\",\"536B\":\"WEI4\",\"536C\":\"ANG2 YANG3\",\"536D\":\"QIONG2\",\"536E\":\"ZHI1\",\"536F\":\"MAO3\",\"537A\":\"JIN3\",\"537B\":\"QUE4\",\"537C\":\"WU4\",\"537D\":\"JI2\",\"537E\":\"E4\",\"537F\":\"QING1\",\"538A\":\"YA3\",\"538B\":\"YA1 YA4\",\"538C\":\"YAN4 YA1 YAN1\",\"538D\":\"SHE4\",\"538E\":\"ZHI3\",\"538F\":\"ZHA3\",\"539A\":\"HOU4\",\"539B\":\"TING1\",\"539C\":\"ZUI1\",\"539D\":\"CUO4\",\"539E\":\"FEI4\",\"539F\":\"YUAN2 YUAN4\",\"53A0\":\"CE4\",\"53A1\":\"YUAN2\",\"53A2\":\"XIANG1\",\"53A3\":\"YAN3\",\"53A4\":\"LI4\",\"53A5\":\"JUE2\",\"53A6\":\"SHA4 XIA4\",\"53A7\":\"DIAN1\",\"53A8\":\"CHU2\",\"53A9\":\"JIU4\",\"53AA\":\"QIN2 JIN3\",\"53AB\":\"AO2\",\"53AC\":\"GUI3\",\"53AD\":\"YAN4 YA1 YAN1\",\"53AE\":\"SI1\",\"53AF\":\"LI4\",\"53B0\":\"CHANG3\",\"53B1\":\"LAN2 QIAN1\",\"53B2\":\"LI4\",\"53B3\":\"YAN2\",\"53B4\":\"YAN3\",\"53B5\":\"YUAN2\",\"53B6\":\"SI1 MOU3\",\"53B7\":\"GONG1\",\"53B8\":\"LIN2 MIAN3\",\"53B9\":\"QIU2\",\"53BA\":\"QU4\",\"53BB\":\"QU4\",\"53BD\":\"LEI3\",\"53BE\":\"DU1\",\"53BF\":\"XIAN4 XUAN2\",\"53C0\":\"ZHUAN1 HUI4\",\"53C1\":\"SAN1\",\"53C2\":\"CAN1 SAN1 SHEN1 DEN1 CEN1 SAN3\",\"53C3\":\"CAN1 SAN1 SHEN1 DEN1 CEN1\",\"53C4\":\"CAN1 CEN1 CAN4 SHEN1 SAN1 SAN3\",\"53C5\":\"CAN1 CAN4 CEN1\",\"53C6\":\"AI4\",\"53C7\":\"DAI4\",\"53C8\":\"YOU4\",\"53C9\":\"CHA1 CHA2 CHA3 CHA4 CHAI1 CHA5\",\"53CA\":\"JI2\",\"53CB\":\"YOU3\",\"53CC\":\"SHUANG1\",\"53CD\":\"FAN3 FAN1\",\"53CE\":\"SHOU1\",\"53CF\":\"GUAI4\",\"53D0\":\"BA2\",\"53D1\":\"FA1 FA4 FA3 BO1\",\"53D2\":\"RUO4\",\"53D3\":\"SHI4 LI4\",\"53D4\":\"SHU1\",\"53D5\":\"ZHUO2\",\"53D6\":\"QU3 QU1\",\"53D7\":\"SHOU4\",\"53D8\":\"BIAN4\",\"53D9\":\"XU4\",\"53DA\":\"JIA3 JIA4 XIA2\",\"53DB\":\"PAN4\",\"53DC\":\"SOU3\",\"53DD\":\"GAO4\",\"53DE\":\"WEI4\",\"53DF\":\"SOU3\",\"53E0\":\"DIE2\",\"53E1\":\"RUI4\",\"53E2\":\"CONG2\",\"53E3\":\"KOU3\",\"53E4\":\"GU3\",\"53E5\":\"JU4 GOU1\",\"53E6\":\"LING4\",\"53E7\":\"GUA3\",\"53E8\":\"TAO1 DAO1\",\"53E9\":\"KOU4\",\"53EA\":\"ZHI3 ZHI1\",\"53EB\":\"JIAO4\",\"53EC\":\"ZHAO4 SHAO4\",\"53ED\":\"BA1 BA5\",\"53EE\":\"DING1\",\"53EF\":\"KE3 KE4\",\"53F0\":\"TAI2 YI2 TAI1\",\"53F1\":\"CHI4\",\"53F2\":\"SHI3\",\"53F3\":\"YOU4\",\"53F4\":\"QIU2\",\"53F5\":\"PO3\",\"53F6\":\"XIE2 YE4 SHE4\",\"53F7\":\"HAO4 HAO2\",\"53F8\":\"SI1\",\"53F9\":\"TAN4\",\"53FA\":\"CHI3\",\"53FB\":\"LE4\",\"53FC\":\"DIAO1\",\"53FD\":\"JI1\",\"53FF\":\"HONG1\",\"540A\":\"DIAO4\",\"540B\":\"CUN4\",\"540C\":\"TONG2 TONG4\",\"540D\":\"MING2\",\"540E\":\"HOU4\",\"540F\":\"LI4\",\"541A\":\"YI1\",\"541B\":\"JUN1\",\"541C\":\"CHOU3\",\"541D\":\"LIN4\",\"541E\":\"TUN1\",\"541F\":\"YIN2\",\"542A\":\"E2\",\"542B\":\"HAN2\",\"542C\":\"TING1 TING4 YIN2\",\"542D\":\"HANG2 KENG1\",\"542E\":\"SHUN3\",\"542F\":\"QI3\",\"543A\":\"DOU1\",\"543B\":\"WEN3\",\"543C\":\"HOU3\",\"543D\":\"OU1 HONG1 HOU3 OU2\",\"543E\":\"WU2\",\"543F\":\"GAO4\",\"544A\":\"GAO4\",\"544B\":\"FU1\",\"544C\":\"JIAO4\",\"544D\":\"HONG1\",\"544E\":\"CHI3\",\"544F\":\"SHENG1\",\"545B\":\"QIANG1 QIANG4\",\"545C\":\"WU1\",\"545D\":\"E4\",\"545E\":\"SHI1 CHI1\",\"545F\":\"QUAN3\",\"546A\":\"ZHOU4\",\"546B\":\"TIE1 CHE4\",\"546C\":\"XI4\",\"546D\":\"YI4\",\"546E\":\"QI4\",\"546F\":\"PING2\",\"547A\":\"XIAO1 HAO2\",\"547B\":\"SHEN1\",\"547C\":\"HU1 XU1\",\"547D\":\"MING4\",\"547E\":\"DA2\",\"547F\":\"QU1\",\"548A\":\"HE2 HUO4 HUO2 HE4\",\"548B\":\"ZHA4 ZE2\",\"548C\":\"HE2 HUO4 HUO2 HE4\",\"548D\":\"HAI1\",\"548E\":\"JIU4 GAO1\",\"548F\":\"YONG3\",\"549A\":\"DONG1\",\"549B\":\"NING2\",\"549D\":\"SI1\",\"549E\":\"XIAN4 XIAN2\",\"549F\":\"HUO4\",\"54A0\":\"QI4\",\"54A1\":\"ER4\",\"54A2\":\"E4\",\"54A3\":\"GUANG1\",\"54A4\":\"ZHA4 CHA4 ZHA1\",\"54A5\":\"XI4 XI1 DIE2 ZHI4\",\"54A6\":\"YI2\",\"54A7\":\"LIE3 LIE5\",\"54A8\":\"ZI1\",\"54A9\":\"MIE1\",\"54AA\":\"MI1\",\"54AB\":\"ZHI3\",\"54AC\":\"YAO3 JIAO1\",\"54AD\":\"JI1\",\"54AE\":\"ZHOU4\",\"54AF\":\"GE1 KA3 LO5\",\"54B0\":\"SHUAI4\",\"54B1\":\"ZAN2 ZA2\",\"54B2\":\"XIAO4\",\"54B3\":\"KE2 HAI1 HAI2 KAI4\",\"54B4\":\"HUI1\",\"54B5\":\"KUA1\",\"54B6\":\"HUAI4 HUA2 SHI4\",\"54B7\":\"TAO2\",\"54B8\":\"XIAN2\",\"54B9\":\"E4\",\"54BA\":\"XUAN3 XUAN1\",\"54BB\":\"XIU1 XU3\",\"54BC\":\"WAI1\",\"54BD\":\"YAN1 YAN4 YE4\",\"54BE\":\"LAO3\",\"54BF\":\"YI1\",\"54C0\":\"AI1\",\"54C1\":\"PIN3\",\"54C2\":\"SHEN3\",\"54C3\":\"TONG2\",\"54C4\":\"HONG1 HONG3 HONG4\",\"54C5\":\"XIONG1\",\"54C6\":\"DUO1 CHI3\",\"54C7\":\"WA1 WA5\",\"54C8\":\"HA1 HA3 HA4\",\"54C9\":\"ZAI1\",\"54CA\":\"YU4\",\"54CB\":\"DI4 DEI1\",\"54CC\":\"PAI4\",\"54CD\":\"XIANG3\",\"54CE\":\"AI1\",\"54CF\":\"HEN3 GEN2\",\"54D0\":\"KUANG1\",\"54D1\":\"YA3 YA1 E4\",\"54D2\":\"DA1\",\"54D3\":\"XIAO1\",\"54D4\":\"BI4\",\"54D5\":\"YUE3 HUI4\",\"54D7\":\"HUA1 HUA2\",\"54D9\":\"KUAI4\",\"54DA\":\"DUO3\",\"54DC\":\"JI4\",\"54DD\":\"NONG2\",\"54DE\":\"MOU1\",\"54DF\":\"YO5\",\"54E0\":\"HAO4\",\"54E1\":\"YUAN2 YUN4\",\"54E2\":\"LONG4\",\"54E3\":\"POU3\",\"54E4\":\"MANG2\",\"54E5\":\"GE1\",\"54E6\":\"E2 O2 O4\",\"54E7\":\"CHI1\",\"54E8\":\"SHAO4\",\"54E9\":\"LI1 LI5 LI3\",\"54EA\":\"NA3 NEI3 NA5 NE2\",\"54EB\":\"ZU2\",\"54EC\":\"HE2\",\"54ED\":\"KU1\",\"54EE\":\"XIAO1\",\"54EF\":\"XIAN4\",\"54F0\":\"LAO2\",\"54F1\":\"BO1\",\"54F2\":\"ZHE2\",\"54F3\":\"ZHA1\",\"54F4\":\"LIANG4 LANG2\",\"54F5\":\"BA1\",\"54F6\":\"MIE1\",\"54F7\":\"LE4\",\"54F8\":\"SUI1\",\"54F9\":\"FOU2\",\"54FA\":\"BU3\",\"54FB\":\"HAN4\",\"54FC\":\"HENG1\",\"54FD\":\"GENG3\",\"54FE\":\"SHUO1\",\"54FF\":\"GE3 KE3\",\"550A\":\"JIA2 QIAN3\",\"550B\":\"TU3\",\"550C\":\"XIAN2 YAN2 DAN4\",\"550D\":\"HUAN3\",\"550E\":\"LI4 LI1\",\"550F\":\"XI1\",\"551A\":\"QIN4\",\"551B\":\"MA4\",\"551D\":\"HONG3 GONG4\",\"551E\":\"DOU3\",\"552A\":\"FENG3 BENG3\",\"552B\":\"YIN2\",\"552C\":\"HU3\",\"552D\":\"QI1\",\"552E\":\"SHOU4\",\"552F\":\"WEI2 WEI3\",\"553A\":\"TIAN3\",\"553B\":\"LAI3\",\"553C\":\"SHA4 ZA1 QIE4\",\"553D\":\"XI1\",\"553E\":\"TUO4\",\"553F\":\"HU1\",\"554A\":\"A5\",\"554B\":\"XIAO1\",\"554C\":\"XIANG1 QIANG1\",\"554D\":\"TUN1\",\"554E\":\"WU3\",\"554F\":\"WEN4\",\"555A\":\"BI3 TU2\",\"555B\":\"CUI4\",\"555C\":\"CHUO4\",\"555D\":\"HE2\",\"555E\":\"YA3 YA1 E4\",\"555F\":\"QI3\",\"556A\":\"PA1\",\"556B\":\"ZHE3\",\"556C\":\"SE4\",\"556D\":\"ZHUAN4\",\"556E\":\"NIE4\",\"556F\":\"GUO5\",\"557A\":\"TANG2\",\"557B\":\"CHI4\",\"557C\":\"TI2\",\"557D\":\"AN2\",\"557E\":\"JIU1\",\"557F\":\"DAN4\",\"558A\":\"HAN3\",\"558B\":\"DIE2 ZHA2\",\"558C\":\"ZHOU1\",\"558D\":\"CHAI2\",\"558E\":\"WAI1\",\"558F\":\"RE3 NUO4\",\"559A\":\"HUAN4\",\"559B\":\"HUAN4 YUAN2 XUAN3 HE2\",\"559C\":\"XI3\",\"559D\":\"HE1 HE4\",\"559E\":\"JI1\",\"559F\":\"KUI4\",\"55A0\":\"ZHONG3\",\"55A1\":\"WEI3\",\"55A2\":\"SHA4\",\"55A3\":\"XU3\",\"55A4\":\"HUANG2\",\"55A5\":\"DU4\",\"55A6\":\"NIE4\",\"55A7\":\"XUAN1 XUAN3\",\"55A8\":\"LIANG4\",\"55A9\":\"YU4\",\"55AA\":\"SANG1 SANG4\",\"55AB\":\"CHI1 JI1\",\"55AC\":\"QIAO2\",\"55AD\":\"YAN4\",\"55AE\":\"DAN1 SHAN4 CHAN2\",\"55AF\":\"PEN1\",\"55B0\":\"CAN1\",\"55B1\":\"LI2\",\"55B2\":\"YO5\",\"55B3\":\"ZHA1 CHA1\",\"55B4\":\"WEI1\",\"55B5\":\"MIAO1\",\"55B6\":\"YING2\",\"55B7\":\"PEN1 PEN4\",\"55B9\":\"KUI2\",\"55BA\":\"XI4\",\"55BB\":\"YU4 YU2\",\"55BC\":\"JIE2\",\"55BD\":\"LOU5 LOU2\",\"55BE\":\"KU4\",\"55BF\":\"SAO4\",\"55C0\":\"HUO4\",\"55C1\":\"TI2\",\"55C2\":\"YAO2\",\"55C3\":\"HE4 XIAO1 XIAO4\",\"55C4\":\"A2 SHA4\",\"55C5\":\"XIU4\",\"55C6\":\"QIANG1 QIANG4\",\"55C7\":\"SE4\",\"55C8\":\"YONG1\",\"55C9\":\"SU4\",\"55CA\":\"HONG3 GONG4\",\"55CB\":\"XIE2\",\"55CC\":\"YI4 AI4\",\"55CD\":\"SUO1\",\"55CE\":\"MA5 MA2 MA3\",\"55CF\":\"CHA1\",\"55D0\":\"HAI4\",\"55D1\":\"KE4 HE2\",\"55D2\":\"TA4\",\"55D3\":\"SANG3\",\"55D4\":\"TIAN2 CHEN1\",\"55D5\":\"RU4\",\"55D6\":\"SOU1\",\"55D7\":\"WA1\",\"55D8\":\"JI1\",\"55D9\":\"PANG3\",\"55DA\":\"WU1\",\"55DB\":\"XIAN2 QIAN4 QIAN3 QIE4\",\"55DC\":\"SHI4\",\"55DD\":\"GE2\",\"55DE\":\"ZI1\",\"55DF\":\"JIE1 JUE1\",\"55E0\":\"LUO4\",\"55E1\":\"WENG1\",\"55E2\":\"WA4\",\"55E3\":\"SI4\",\"55E4\":\"CHI1\",\"55E5\":\"HAO2\",\"55E6\":\"SUO1\",\"55E8\":\"HAI1 HAI3\",\"55E9\":\"SUO3\",\"55EA\":\"QIN2\",\"55EB\":\"NIE4\",\"55EC\":\"HE1\",\"55EE\":\"SAI4\",\"55F0\":\"GE4\",\"55F1\":\"NA2\",\"55F2\":\"DIA3\",\"55F3\":\"AI4 AI3 AI1\",\"55F5\":\"TONG1\",\"55F6\":\"BI4\",\"55F7\":\"AO2\",\"55F8\":\"AO2\",\"55F9\":\"LIAN2\",\"55FA\":\"CUI1\",\"55FB\":\"ZHE1\",\"55FC\":\"MO4\",\"55FD\":\"SOU4\",\"55FE\":\"SOU3\",\"55FF\":\"TAN3\",\"560A\":\"AI2\",\"560B\":\"XIAO1\",\"560C\":\"PIAO1 PIAO4\",\"560D\":\"LOU5 LOU2\",\"560E\":\"GA1 GA3\",\"560F\":\"GU3 JIA3\",\"561A\":\"DE2 DE1 DAI1\",\"561B\":\"MA5\",\"561C\":\"MA4\",\"561D\":\"HU2\",\"561E\":\"LEI5\",\"561F\":\"DU1\",\"562A\":\"MAI3\",\"562B\":\"RAN2\",\"562C\":\"ZUO1 CHUAI4\",\"562D\":\"PENG1\",\"562E\":\"LAO2\",\"562F\":\"XIAO4\",\"563A\":\"QIAO2\",\"563B\":\"XI1\",\"563C\":\"XIU4\",\"563D\":\"TAN1 CHAN3\",\"563E\":\"TAN2\",\"563F\":\"HEI1 MO4\",\"564A\":\"YU4\",\"564B\":\"TUN1 KUO4\",\"564C\":\"CHENG1 CENG1\",\"564D\":\"JIAO4 JIAO1\",\"564E\":\"YE1\",\"564F\":\"XI1\",\"565A\":\"XUN2\",\"565B\":\"NIE4\",\"565C\":\"LU1\",\"565D\":\"SI1\",\"565E\":\"YAN3\",\"565F\":\"YING4\",\"566A\":\"ZAO4\",\"566B\":\"YI1\",\"566C\":\"SHI4\",\"566D\":\"JIAO4\",\"566E\":\"YUAN1\",\"566F\":\"AI3 AI4 AI1\",\"567B\":\"SAI5\",\"567C\":\"PI1\",\"567D\":\"PI3\",\"567E\":\"YIN1\",\"567F\":\"ZUI3\",\"568A\":\"XI4\",\"568B\":\"CHOU2\",\"568C\":\"JI4\",\"568D\":\"JIN4\",\"568E\":\"HAO2\",\"568F\":\"TI4\",\"569A\":\"YIN2\",\"569B\":\"HU4\",\"569C\":\"MO4 ME5 MA5\",\"569D\":\"HUANG1\",\"569E\":\"ZHE2\",\"569F\":\"LI2\",\"56A0\":\"LIU2 LIU1\",\"56A2\":\"NANG2\",\"56A3\":\"XIAO1 AO2\",\"56A4\":\"MO2\",\"56A5\":\"YAN4\",\"56A6\":\"LI4\",\"56A7\":\"LU2\",\"56A8\":\"LONG2\",\"56A9\":\"FU2 PO2\",\"56AA\":\"DAN4\",\"56AB\":\"CHEN4\",\"56AC\":\"PIN2\",\"56AD\":\"PI3\",\"56AE\":\"XIANG4\",\"56AF\":\"HUO4\",\"56B0\":\"MO2\",\"56B1\":\"XI4\",\"56B2\":\"DUO3\",\"56B3\":\"KU4\",\"56B4\":\"YAN2\",\"56B5\":\"CHAN2\",\"56B6\":\"YING1\",\"56B7\":\"RANG3 RANG1\",\"56B8\":\"DIAN3\",\"56B9\":\"LA1\",\"56BA\":\"TA4\",\"56BB\":\"XIAO1\",\"56BC\":\"JIAO2 JUE2 JIAO4\",\"56BD\":\"CHUO4\",\"56BE\":\"HUAN1\",\"56BF\":\"HUO4\",\"56C0\":\"ZHUAN4\",\"56C1\":\"NIE4\",\"56C2\":\"XIAO1\",\"56C3\":\"CA4\",\"56C4\":\"LI2 LEI1\",\"56C5\":\"CHAN3\",\"56C6\":\"CHAI4\",\"56C7\":\"LI4\",\"56C8\":\"YI4\",\"56C9\":\"LUO1 LOU2\",\"56CA\":\"NANG2\",\"56CB\":\"ZAN4\",\"56CC\":\"SU1\",\"56CD\":\"XI3\",\"56CF\":\"JIAN1\",\"56D0\":\"ZA2 ZAN2\",\"56D1\":\"ZHU3\",\"56D2\":\"LAN2\",\"56D3\":\"NIE4\",\"56D4\":\"NANG1\",\"56D7\":\"WEI2\",\"56D8\":\"HUI2\",\"56D9\":\"YIN1\",\"56DA\":\"QIU2\",\"56DB\":\"SI4\",\"56DC\":\"NIN2\",\"56DD\":\"JIAN3 NAN1\",\"56DE\":\"HUI2\",\"56DF\":\"XIN4\",\"56E0\":\"YIN1\",\"56E1\":\"NAN1\",\"56E2\":\"TUAN2\",\"56E3\":\"TUAN2\",\"56E4\":\"DUN4 TUN2\",\"56E5\":\"KANG4\",\"56E6\":\"YUAN1\",\"56E7\":\"JIONG3\",\"56E8\":\"PIAN1\",\"56E9\":\"YUN4\",\"56EA\":\"CONG1 CHUANG1\",\"56EB\":\"HU2\",\"56EC\":\"HUI2\",\"56ED\":\"YUAN2\",\"56EE\":\"E2 YOU2\",\"56EF\":\"GUO2\",\"56F0\":\"KUN4\",\"56F1\":\"CONG1 CHUANG1\",\"56F2\":\"WEI2\",\"56F3\":\"TU2\",\"56F4\":\"WEI2\",\"56F5\":\"LUN2\",\"56F6\":\"GUO2\",\"56F7\":\"QUN1\",\"56F8\":\"RI4\",\"56F9\":\"LING2\",\"56FA\":\"GU4\",\"56FB\":\"GUO2\",\"56FC\":\"TAI1\",\"56FD\":\"GUO2\",\"56FE\":\"TU2\",\"56FF\":\"YOU4\",\"570A\":\"QING1\",\"570B\":\"GUO2\",\"570C\":\"CHUAN2 CHUI2\",\"570D\":\"WEI2\",\"570E\":\"YUAN2\",\"570F\":\"QUAN1\",\"571A\":\"HUI4\",\"571B\":\"YI4\",\"571C\":\"YUAN2 HUAN2\",\"571D\":\"LUAN2\",\"571E\":\"LUAN2\",\"571F\":\"TU3\",\"572A\":\"GE1\",\"572B\":\"YU4 AO4\",\"572C\":\"WU1\",\"572D\":\"GUI1\",\"572E\":\"PI3\",\"572F\":\"YI2\",\"573A\":\"CHANG2 CHANG3\",\"573B\":\"QI2 YIN2\",\"573C\":\"NIE4\",\"573D\":\"MO4\",\"573E\":\"JI2 JI1\",\"573F\":\"JIA2\",\"574A\":\"FANG1 FANG2\",\"574B\":\"FEN4\",\"574C\":\"BEN4\",\"574D\":\"TAN1\",\"574E\":\"KAN3\",\"574F\":\"HUAI4 PI1 PEI2\",\"575A\":\"JIAN1\",\"575B\":\"TAN2\",\"575C\":\"LI4\",\"575D\":\"BA4\",\"575E\":\"WU4\",\"575F\":\"FEN2\",\"576A\":\"PING2\",\"576B\":\"DIAN4\",\"576C\":\"GUA4\",\"576D\":\"NI2 NI4\",\"576E\":\"TAI2\",\"576F\":\"PI1\",\"577A\":\"BA2 BO1\",\"577B\":\"CHI2 DI3\",\"577C\":\"CHE4\",\"577D\":\"LING2\",\"577E\":\"ZHU4\",\"577F\":\"FU4\",\"578B\":\"XING2\",\"578C\":\"DONG4 TONG2\",\"578D\":\"JI4\",\"578E\":\"KE4\",\"578F\":\"LU4\",\"579A\":\"YAO2\",\"579B\":\"DUO3\",\"579C\":\"DUO3\",\"579D\":\"GUI3\",\"579E\":\"CHA2\",\"579F\":\"YANG2\",\"57A0\":\"YIN2\",\"57A1\":\"FA2\",\"57A2\":\"GOU4\",\"57A3\":\"YUAN2\",\"57A4\":\"DIE2\",\"57A5\":\"XIE2\",\"57A6\":\"KEN3\",\"57A7\":\"JIONG1 SHANG3\",\"57A8\":\"SHOU3\",\"57A9\":\"E4\",\"57AB\":\"DIAN4\",\"57AC\":\"HONG2\",\"57AD\":\"WU4 YA4\",\"57AE\":\"KUA3\",\"57B1\":\"DANG4\",\"57B2\":\"KAI3\",\"57B4\":\"NAO3\",\"57B5\":\"AN3\",\"57B6\":\"XING1\",\"57B7\":\"XIAN4\",\"57B8\":\"HUAN4\",\"57B9\":\"BANG1\",\"57BA\":\"PEI1 FU2 POU2\",\"57BB\":\"BA4\",\"57BC\":\"YI4\",\"57BD\":\"YIN4\",\"57BE\":\"HAN4\",\"57BF\":\"XU4\",\"57C0\":\"CHUI2 ZHUI4\",\"57C1\":\"CEN2\",\"57C2\":\"GENG3\",\"57C3\":\"AI1\",\"57C4\":\"PENG2\",\"57C5\":\"FANG2 FANG1 DI4\",\"57C6\":\"QUE4\",\"57C7\":\"YONG3\",\"57C8\":\"XUN4\",\"57C9\":\"JIA2\",\"57CA\":\"DI4\",\"57CB\":\"MAI2 MAN2\",\"57CC\":\"LANG4\",\"57CD\":\"XUAN4\",\"57CE\":\"CHENG2\",\"57CF\":\"YAN2 SHAN1\",\"57D0\":\"JIN1\",\"57D1\":\"ZHE2\",\"57D2\":\"LEI4\",\"57D3\":\"LIE4\",\"57D4\":\"PU3 BU4\",\"57D5\":\"CHENG2\",\"57D7\":\"BU4\",\"57D8\":\"SHI2\",\"57D9\":\"XUN1 XUAN1\",\"57DA\":\"GUO1\",\"57DB\":\"JIONG1\",\"57DC\":\"YE3\",\"57DD\":\"NIAN4\",\"57DE\":\"DI3\",\"57DF\":\"YU4\",\"57E0\":\"BU4\",\"57E1\":\"YA4\",\"57E2\":\"JUAN3\",\"57E3\":\"SUI4\",\"57E4\":\"PI2 BEI1 BI4\",\"57E5\":\"CHENG1\",\"57E6\":\"WAN3\",\"57E7\":\"JU4\",\"57E8\":\"LUN3 LUN4\",\"57E9\":\"ZHENG1\",\"57EA\":\"KONG1\",\"57EB\":\"CHONG3\",\"57EC\":\"DONG1\",\"57ED\":\"DAI4\",\"57EE\":\"TAN4\",\"57EF\":\"AN3\",\"57F0\":\"CAI4\",\"57F1\":\"SHU2\",\"57F2\":\"BENG3 BANG4\",\"57F3\":\"KAN3\",\"57F4\":\"ZHI2\",\"57F5\":\"DUO3\",\"57F6\":\"YI4 SHI4\",\"57F7\":\"ZHI2\",\"57F8\":\"YI4\",\"57F9\":\"PEI2 POU3\",\"57FA\":\"JI1\",\"57FB\":\"ZHUN3\",\"57FC\":\"QI2\",\"57FD\":\"SAO4 SAO3\",\"57FE\":\"JU4\",\"57FF\":\"NI2 BAN4\",\"580A\":\"E4\",\"580B\":\"PENG2 BENG4\",\"580C\":\"GU4\",\"580D\":\"TU4\",\"580E\":\"LENG4\",\"581A\":\"HUN2\",\"581B\":\"BI4\",\"581C\":\"LIAN4\",\"581D\":\"GUO1\",\"581E\":\"DIE2\",\"581F\":\"ZHUAN4\",\"582A\":\"KAN1\",\"582B\":\"ZONG1\",\"582C\":\"YU2\",\"582D\":\"HUANG2\",\"582E\":\"E4\",\"582F\":\"YAO2\",\"583A\":\"JIE4\",\"583B\":\"ZHEN1\",\"583C\":\"FENG1\",\"583D\":\"GANG1\",\"583E\":\"CHUAN3 CHUN3 CHUN1\",\"583F\":\"JIAN3\",\"584A\":\"KUAI4\",\"584B\":\"YING2\",\"584C\":\"TA1\",\"584D\":\"CHENG2\",\"584E\":\"YONG3\",\"584F\":\"KAI3\",\"585A\":\"ZHONG3\",\"585B\":\"LI4\",\"585C\":\"PENG2\",\"585D\":\"BANG4\",\"585E\":\"SAI1 SE4 SAI4\",\"585F\":\"ZANG4\",\"586A\":\"KAN3 XIAN4\",\"586B\":\"TIAN2\",\"586C\":\"YUAN2\",\"586D\":\"WEN1\",\"586E\":\"XIE4\",\"586F\":\"LIU4\",\"587A\":\"MEI2 MO4\",\"587B\":\"MO4\",\"587C\":\"ZHUAN1\",\"587D\":\"SHUANG3\",\"587E\":\"SHU2\",\"587F\":\"LOU3\",\"588A\":\"DIAN4\",\"588B\":\"CHEN3\",\"588C\":\"ZHI1\",\"588D\":\"XI4 JI4\",\"588E\":\"GUO1 GUO4\",\"588F\":\"QIANG3\",\"589A\":\"LIANG2\",\"589C\":\"ZHUI4\",\"589D\":\"QIAO1\",\"589E\":\"ZENG1\",\"589F\":\"XU1\",\"58A0\":\"SHAN4\",\"58A1\":\"SHAN4\",\"58A2\":\"BA2 FEI4 BO1\",\"58A3\":\"PU1 PU2\",\"58A4\":\"KUAI4 TUI2\",\"58A5\":\"DONG3\",\"58A6\":\"FAN2\",\"58A7\":\"QUE4 QIAO2\",\"58A8\":\"MO4\",\"58A9\":\"DUN1\",\"58AA\":\"DUN1\",\"58AB\":\"ZUN1 CUN2\",\"58AC\":\"DI4 DE5\",\"58AD\":\"SHENG4\",\"58AE\":\"DUO4 HUI1\",\"58AF\":\"DUO4 HUI1\",\"58B0\":\"TAN2\",\"58B1\":\"DENG4\",\"58B2\":\"WU3\",\"58B3\":\"FEN2\",\"58B4\":\"HUANG2\",\"58B5\":\"TAN2\",\"58B6\":\"DA1 DA5\",\"58B7\":\"YE4\",\"58BA\":\"AO4 YU4\",\"58BB\":\"QIANG2\",\"58BC\":\"JI1\",\"58BD\":\"QIAO1\",\"58BE\":\"KEN3\",\"58BF\":\"YI4\",\"58C0\":\"PI2 BI4 PI4 BEI1\",\"58C1\":\"BI4\",\"58C2\":\"DIAN4\",\"58C3\":\"JIANG1\",\"58C4\":\"YE3\",\"58C5\":\"YONG1 YONG3\",\"58C6\":\"BO2\",\"58C7\":\"TAN2\",\"58C8\":\"LAN3\",\"58C9\":\"JU4\",\"58CA\":\"HUAI4\",\"58CB\":\"DANG4\",\"58CC\":\"RANG3\",\"58CD\":\"QIAN4\",\"58CE\":\"XUN1 XUAN1\",\"58CF\":\"LAN4 HAN3\",\"58D0\":\"XI3\",\"58D1\":\"HE4 HUO4\",\"58D2\":\"AI4\",\"58D3\":\"YA1 YA4\",\"58D4\":\"DAO3\",\"58D5\":\"HAO2\",\"58D6\":\"RUAN2\",\"58D8\":\"LEI3 LEI4 LEI2 LV4\",\"58D9\":\"KUANG4\",\"58DA\":\"LU2\",\"58DB\":\"YAN2\",\"58DC\":\"TAN2\",\"58DD\":\"WEI2 WEI3\",\"58DE\":\"HUAI4\",\"58DF\":\"LONG3\",\"58E0\":\"LONG3\",\"58E1\":\"RUI4\",\"58E2\":\"LI4\",\"58E3\":\"LIN2\",\"58E4\":\"RANG3\",\"58E6\":\"XUN1 XUN4\",\"58E7\":\"YAN2\",\"58E8\":\"LEI2\",\"58E9\":\"BA4\",\"58EB\":\"SHI4\",\"58EC\":\"REN2\",\"58EE\":\"ZHUANG4\",\"58EF\":\"ZHUANG4\",\"58F0\":\"SHENG1\",\"58F1\":\"YI1\",\"58F2\":\"MAI4\",\"58F3\":\"KE2 QIAO4\",\"58F4\":\"ZHU3\",\"58F5\":\"ZHUANG4\",\"58F6\":\"HU2\",\"58F7\":\"HU2\",\"58F8\":\"KUN3\",\"58F9\":\"YI1 YI4\",\"58FA\":\"HU2\",\"58FB\":\"XU4\",\"58FC\":\"KUN3\",\"58FD\":\"SHOU4\",\"58FE\":\"MANG3\",\"58FF\":\"ZUN1 CUN1 ZUN3\",\"590A\":\"SUI1\",\"590B\":\"QUN1\",\"590C\":\"LING2\",\"590D\":\"FU4\",\"590E\":\"ZUO4\",\"590F\":\"XIA4 JIA3\",\"591A\":\"DUO1\",\"591B\":\"DUO1\",\"591C\":\"YE4\",\"591D\":\"QING2\",\"591F\":\"GOU4\",\"592A\":\"TAI4\",\"592B\":\"FU1 FU2\",\"592C\":\"GUAI4\",\"592D\":\"YAO1 WO4 WAI1 YAO3\",\"592E\":\"YANG1\",\"592F\":\"HANG1 BEN4\",\"593A\":\"DUO2\",\"593C\":\"KUANG3\",\"593D\":\"YUN4\",\"593E\":\"JIA1 JIA2\",\"593F\":\"PA1 BA1\",\"594A\":\"XIE2\",\"594B\":\"FEN4\",\"594C\":\"DIAN3\",\"594E\":\"KUI2\",\"594F\":\"ZOU4\",\"595A\":\"XI1 XI2\",\"595B\":\"XIANG3\",\"595C\":\"FEI3\",\"595D\":\"DIAO1\",\"595E\":\"XUN4\",\"595F\":\"KENG1\",\"596A\":\"DUO2\",\"596B\":\"YUN1\",\"596C\":\"JIANG3\",\"596D\":\"SHI4\",\"596E\":\"FEN4\",\"596F\":\"HUO4\",\"597A\":\"JIU3\",\"597B\":\"NAN2\",\"597C\":\"CHA4\",\"597D\":\"HAO3 HAO4\",\"597E\":\"XIAN1\",\"597F\":\"FAN4\",\"598A\":\"REN4\",\"598B\":\"FU1\",\"598C\":\"JING4\",\"598D\":\"YAN2\",\"598E\":\"XIE4\",\"598F\":\"WEN4\",\"599A\":\"PEI1\",\"599C\":\"YUE4\",\"599D\":\"ZHUANG1\",\"599E\":\"NIU1\",\"599F\":\"YAN4\",\"59A0\":\"NA4\",\"59A1\":\"XIN1\",\"59A2\":\"FEN2\",\"59A3\":\"BI3\",\"59A4\":\"YU2\",\"59A5\":\"TUO3\",\"59A6\":\"FENG1\",\"59A7\":\"YUAN2\",\"59A8\":\"FANG2 FANG1\",\"59A9\":\"WU3\",\"59AA\":\"YU4 YU3\",\"59AB\":\"GUI1\",\"59AC\":\"DU4\",\"59AD\":\"BA2\",\"59AE\":\"NI1 NI2\",\"59AF\":\"ZHOU2 ZHU2\",\"59B0\":\"ZHUO2\",\"59B1\":\"ZHAO1\",\"59B2\":\"DA2\",\"59B3\":\"NAI3 NI3\",\"59B4\":\"YUAN3\",\"59B5\":\"TOU3\",\"59B6\":\"XUAN2\",\"59B7\":\"ZHI2\",\"59B8\":\"E1\",\"59B9\":\"MEI4\",\"59BA\":\"MO4\",\"59BB\":\"QI1 QI4\",\"59BC\":\"BI4\",\"59BD\":\"SHEN1\",\"59BE\":\"QIE4\",\"59BF\":\"E1\",\"59C0\":\"HE2\",\"59C1\":\"XU3 XU1\",\"59C2\":\"FA2\",\"59C3\":\"ZHENG1\",\"59C4\":\"MIN2\",\"59C5\":\"BAN4\",\"59C6\":\"MU3\",\"59C7\":\"FU1\",\"59C8\":\"LING2\",\"59C9\":\"ZI3\",\"59CA\":\"ZI3\",\"59CB\":\"SHI3\",\"59CC\":\"RAN3\",\"59CD\":\"SHAN1\",\"59CE\":\"YANG1\",\"59CF\":\"MAN2\",\"59D0\":\"JIE3\",\"59D1\":\"GU1\",\"59D2\":\"SI4\",\"59D3\":\"XING4\",\"59D4\":\"WEI3 WEI1\",\"59D5\":\"ZI1\",\"59D6\":\"JU4\",\"59D7\":\"SHAN1\",\"59D8\":\"PIN1\",\"59D9\":\"REN4\",\"59DA\":\"YAO2\",\"59DB\":\"TONG3\",\"59DC\":\"JIANG1\",\"59DD\":\"SHU1\",\"59DE\":\"JI2\",\"59DF\":\"GAI1\",\"59E0\":\"SHANG4\",\"59E1\":\"KUO4\",\"59E2\":\"JUAN1\",\"59E3\":\"JIAO1 JIAO3 XIAO2\",\"59E4\":\"GOU4\",\"59E5\":\"MU3 LAO3\",\"59E6\":\"JIAN1\",\"59E7\":\"JIAN1\",\"59E8\":\"YI2\",\"59E9\":\"NIAN4\",\"59EA\":\"ZHI2\",\"59EB\":\"JI1\",\"59EC\":\"JI1\",\"59ED\":\"XIAN4\",\"59EE\":\"HENG2\",\"59EF\":\"GUANG1\",\"59F0\":\"JUN1\",\"59F1\":\"KUA1\",\"59F2\":\"YAN4\",\"59F3\":\"MING3\",\"59F4\":\"LIE4\",\"59F5\":\"PEI4\",\"59F6\":\"YAN3\",\"59F7\":\"YOU4\",\"59F8\":\"YAN2\",\"59F9\":\"CHA4\",\"59FA\":\"SHEN1 XIAN3 XIAN1\",\"59FB\":\"YIN1\",\"59FC\":\"CHI3\",\"59FD\":\"GUI3\",\"59FE\":\"QUAN1\",\"59FF\":\"ZI1\",\"5A00\":\"SONG1\",\"5A01\":\"WEI1\",\"5A02\":\"HONG2\",\"5A03\":\"WA2\",\"5A04\":\"LOU2\",\"5A05\":\"YA4\",\"5A06\":\"RAO3 RAO2\",\"5A07\":\"JIAO1\",\"5A08\":\"LUAN2 LIAN4\",\"5A09\":\"PING1\",\"5A0A\":\"XIAN4\",\"5A0B\":\"SHAO4\",\"5A0C\":\"LI3\",\"5A0D\":\"CHENG2\",\"5A0E\":\"XIAO4 XIE1\",\"5A0F\":\"MANG2\",\"5A11\":\"SUO1\",\"5A12\":\"WU3\",\"5A13\":\"WEI3\",\"5A14\":\"KE4\",\"5A15\":\"LAI4\",\"5A16\":\"CHUO4\",\"5A17\":\"DING4\",\"5A18\":\"NIANG2\",\"5A19\":\"XING2\",\"5A1A\":\"NAN2\",\"5A1B\":\"YU2\",\"5A1C\":\"NUO2 NA4\",\"5A1D\":\"PEI1\",\"5A1E\":\"NEI3\",\"5A1F\":\"JUAN1\",\"5A20\":\"SHEN1\",\"5A21\":\"ZHI4\",\"5A22\":\"HAN2\",\"5A23\":\"DI4\",\"5A24\":\"ZHUANG1\",\"5A25\":\"E2\",\"5A26\":\"PIN2\",\"5A27\":\"TUI4\",\"5A28\":\"HAN4\",\"5A29\":\"MIAN3 WAN3\",\"5A2A\":\"WU2\",\"5A2B\":\"YAN2\",\"5A2C\":\"WU3\",\"5A2D\":\"XI1 AI1\",\"5A2E\":\"YAN2\",\"5A2F\":\"YU2\",\"5A30\":\"SI4\",\"5A31\":\"YU2\",\"5A32\":\"WA1\",\"5A34\":\"XIAN2\",\"5A35\":\"JU1\",\"5A36\":\"QU3\",\"5A37\":\"SHUI4\",\"5A38\":\"QI1\",\"5A39\":\"XIAN2\",\"5A3A\":\"ZHUI1\",\"5A3B\":\"DONG1\",\"5A3C\":\"CHANG1\",\"5A3D\":\"LU4\",\"5A3E\":\"AI3\",\"5A3F\":\"E1\",\"5A40\":\"E1\",\"5A41\":\"LOU2\",\"5A42\":\"MIAN2\",\"5A43\":\"CONG2\",\"5A44\":\"POU3\",\"5A45\":\"JU2\",\"5A46\":\"PO2\",\"5A47\":\"CAI3\",\"5A48\":\"DING2\",\"5A49\":\"WAN3\",\"5A4A\":\"BIAO3\",\"5A4B\":\"XIAO1\",\"5A4C\":\"SHU3\",\"5A4D\":\"QI3\",\"5A4E\":\"HUI1\",\"5A4F\":\"FU4\",\"5A50\":\"E1 WO3\",\"5A51\":\"WO3\",\"5A52\":\"TAN2\",\"5A53\":\"FEI1\",\"5A55\":\"JIE2\",\"5A56\":\"TIAN1\",\"5A57\":\"NI2\",\"5A58\":\"QUAN2 JUAN4\",\"5A59\":\"JING4\",\"5A5A\":\"HUN1\",\"5A5B\":\"JING1\",\"5A5C\":\"QIAN1\",\"5A5D\":\"DIAN4\",\"5A5E\":\"XING4\",\"5A5F\":\"HU4\",\"5A60\":\"WA4 WAN1\",\"5A61\":\"LAI2\",\"5A62\":\"BI4\",\"5A63\":\"YIN1\",\"5A64\":\"ZHOU1 CHOU1\",\"5A65\":\"CHUO4\",\"5A66\":\"FU4\",\"5A67\":\"JING4\",\"5A68\":\"LUN2\",\"5A69\":\"YAN4\",\"5A6A\":\"LAN2\",\"5A6B\":\"KUN1\",\"5A6C\":\"YIN2\",\"5A6D\":\"YA4\",\"5A6F\":\"LI4\",\"5A70\":\"DIAN3\",\"5A71\":\"XIAN2\",\"5A73\":\"HUA4\",\"5A74\":\"YING1\",\"5A75\":\"CHAN2\",\"5A76\":\"SHEN3\",\"5A77\":\"TING2\",\"5A78\":\"DANG4\",\"5A79\":\"YAO3\",\"5A7A\":\"WU4\",\"5A7B\":\"NAN4\",\"5A7C\":\"RUO4 CHUO4\",\"5A7D\":\"JIA3\",\"5A7E\":\"TOU1 YU2\",\"5A7F\":\"XU4\",\"5A80\":\"YU2\",\"5A81\":\"WEI1\",\"5A82\":\"TI2\",\"5A83\":\"ROU2\",\"5A84\":\"MEI3\",\"5A85\":\"DAN1\",\"5A86\":\"RUAN3\",\"5A87\":\"QIN1\",\"5A89\":\"WU1\",\"5A8A\":\"QIAN2\",\"5A8B\":\"CHUN1\",\"5A8C\":\"MAO2 MIAO2\",\"5A8D\":\"FU4\",\"5A8E\":\"JIE3\",\"5A8F\":\"DUAN1\",\"5A90\":\"XI1\",\"5A91\":\"ZHONG4\",\"5A92\":\"MEI2\",\"5A93\":\"HUANG2\",\"5A94\":\"MIAN2\",\"5A95\":\"AN1\",\"5A96\":\"YING1\",\"5A97\":\"XUAN1\",\"5A99\":\"WEI1\",\"5A9A\":\"MEI4\",\"5A9B\":\"YUAN4 YUAN2\",\"5A9C\":\"ZHEN1\",\"5A9D\":\"QIU1\",\"5A9E\":\"TI2 DI4\",\"5A9F\":\"XIE4\",\"5AA0\":\"TUO3 DUO4\",\"5AA1\":\"LIAN4\",\"5AA2\":\"MAO4\",\"5AA3\":\"RAN3\",\"5AA4\":\"SI1\",\"5AA5\":\"PIAN1\",\"5AA6\":\"WEI4\",\"5AA7\":\"WA1\",\"5AA8\":\"JIU4\",\"5AA9\":\"HU2\",\"5AAA\":\"AO3\",\"5AAD\":\"XU1\",\"5AAE\":\"TOU1 YU2\",\"5AAF\":\"GUI1\",\"5AB0\":\"ZOU1\",\"5AB1\":\"YAO2\",\"5AB2\":\"PI4\",\"5AB3\":\"XI2\",\"5AB4\":\"YUAN2\",\"5AB5\":\"YING4\",\"5AB6\":\"RONG2\",\"5AB7\":\"RU4\",\"5AB8\":\"CHI1\",\"5AB9\":\"LIU2\",\"5ABA\":\"MEI3\",\"5ABB\":\"PAN2\",\"5ABC\":\"AO3\",\"5ABD\":\"MA1\",\"5ABE\":\"GOU4\",\"5ABF\":\"KUI4 GUI3\",\"5AC0\":\"QIN2\",\"5AC1\":\"JIA4\",\"5AC2\":\"SAO3\",\"5AC3\":\"ZHEN1\",\"5AC4\":\"YUAN2\",\"5AC5\":\"CHA1\",\"5AC6\":\"YONG2\",\"5AC7\":\"MING2\",\"5AC8\":\"YING1\",\"5AC9\":\"JI2\",\"5ACA\":\"SU4\",\"5ACB\":\"NIAO3\",\"5ACC\":\"XIAN2\",\"5ACD\":\"TAO1\",\"5ACE\":\"PANG2\",\"5ACF\":\"LANG2\",\"5AD0\":\"NAO3\",\"5AD1\":\"BAO2\",\"5AD2\":\"AI4\",\"5AD3\":\"PI4\",\"5AD4\":\"PIN2\",\"5AD5\":\"YI4\",\"5AD6\":\"PIAO4 PIAO2 BIAO1 PIAO1\",\"5AD7\":\"YU4 YU3\",\"5AD8\":\"LEI2\",\"5AD9\":\"XUAN2\",\"5ADA\":\"MAN4\",\"5ADB\":\"YI1\",\"5ADC\":\"ZHANG1\",\"5ADD\":\"KANG1\",\"5ADE\":\"YONG2\",\"5ADF\":\"NI4\",\"5AE0\":\"LI2\",\"5AE1\":\"DI2\",\"5AE2\":\"GUI1\",\"5AE3\":\"YAN1\",\"5AE4\":\"JIN4\",\"5AE5\":\"ZHUAN1\",\"5AE6\":\"CHANG2\",\"5AE7\":\"CE4\",\"5AE8\":\"HAN1\",\"5AE9\":\"NEN4 NUN4\",\"5AEA\":\"LAO4\",\"5AEB\":\"MO2\",\"5AEC\":\"ZHE1\",\"5AED\":\"HU4\",\"5AEE\":\"HU4\",\"5AEF\":\"AO4\",\"5AF0\":\"NEN4 NUN4\",\"5AF1\":\"QIANG2\",\"5AF3\":\"PIE4\",\"5AF4\":\"GU1\",\"5AF5\":\"WU3\",\"5AF6\":\"JIAO2\",\"5AF7\":\"TUO3\",\"5AF8\":\"ZHAN3\",\"5AF9\":\"MAO2\",\"5AFA\":\"XIAN2\",\"5AFB\":\"XIAN2\",\"5AFC\":\"MO4\",\"5AFD\":\"LIAO2\",\"5AFE\":\"LIAN2\",\"5AFF\":\"HUA4\",\"5B00\":\"GUI1\",\"5B01\":\"DENG1\",\"5B02\":\"ZHI1\",\"5B03\":\"XU1\",\"5B05\":\"HUA2\",\"5B06\":\"XI1\",\"5B07\":\"HUI4\",\"5B08\":\"RAO3 RAO2 YAO3\",\"5B09\":\"XI1\",\"5B0A\":\"YAN4\",\"5B0B\":\"CHAN2\",\"5B0C\":\"JIAO1\",\"5B0D\":\"MEI3\",\"5B0E\":\"FAN4\",\"5B0F\":\"FAN1\",\"5B10\":\"XIAN1\",\"5B11\":\"YI4\",\"5B12\":\"WEI4\",\"5B13\":\"JIAO4\",\"5B14\":\"FU4\",\"5B15\":\"SHI4\",\"5B16\":\"BI4\",\"5B17\":\"SHAN4\",\"5B18\":\"SUI4\",\"5B19\":\"QIANG2\",\"5B1A\":\"LIAN3\",\"5B1B\":\"HUAN2 QIONG2 YUAN1\",\"5B1D\":\"NIAO3\",\"5B1E\":\"DONG3\",\"5B1F\":\"YI4\",\"5B20\":\"CAN2\",\"5B21\":\"AI4\",\"5B22\":\"NIANG2\",\"5B23\":\"NENG2\",\"5B24\":\"MA1\",\"5B25\":\"TIAO3 TIAO2\",\"5B26\":\"CHOU2\",\"5B27\":\"JIN4\",\"5B28\":\"CI2\",\"5B29\":\"YU2\",\"5B2A\":\"PIN2\",\"5B2C\":\"XU1\",\"5B2D\":\"NAI3\",\"5B2E\":\"YAN1 YAN4\",\"5B2F\":\"TAI2\",\"5B30\":\"YING1\",\"5B31\":\"CAN2\",\"5B32\":\"NIAO3\",\"5B34\":\"YING2\",\"5B35\":\"MIAN2\",\"5B37\":\"MA1\",\"5B38\":\"SHEN3\",\"5B39\":\"XING4\",\"5B3A\":\"NI4\",\"5B3B\":\"DU2\",\"5B3C\":\"LIU3\",\"5B3D\":\"YUAN1\",\"5B3E\":\"LAN3\",\"5B3F\":\"YAN4\",\"5B40\":\"SHUANG1\",\"5B41\":\"LING2\",\"5B42\":\"JIAO3\",\"5B43\":\"NIANG2 NANG2 RANG2 RANG3\",\"5B44\":\"LAN3\",\"5B45\":\"XIAN1 QIAN1\",\"5B46\":\"YING1\",\"5B47\":\"SHUANG1\",\"5B48\":\"SHUAI1\",\"5B49\":\"QUAN2\",\"5B4A\":\"MI3\",\"5B4B\":\"LI2\",\"5B4C\":\"LUAN2 LIAN4\",\"5B4D\":\"YAN2\",\"5B4E\":\"ZHU3\",\"5B4F\":\"LAN3\",\"5B50\":\"ZI3 ZI5\",\"5B51\":\"JIE2\",\"5B52\":\"JUE2\",\"5B53\":\"JUE2\",\"5B54\":\"KONG3\",\"5B55\":\"YUN4\",\"5B56\":\"ZI1 MA1\",\"5B57\":\"ZI4\",\"5B58\":\"CUN2\",\"5B59\":\"SUN1 XUN4\",\"5B5A\":\"FU2 FU1\",\"5B5B\":\"BEI4 BO2\",\"5B5C\":\"ZI1\",\"5B5D\":\"XIAO4\",\"5B5E\":\"XIN4\",\"5B5F\":\"MENG4\",\"5B60\":\"SI4\",\"5B61\":\"TAI1\",\"5B62\":\"BAO1\",\"5B63\":\"JI4\",\"5B64\":\"GU1\",\"5B65\":\"NU2\",\"5B66\":\"XUE2\",\"5B68\":\"ZHUAN3\",\"5B69\":\"HAI2\",\"5B6A\":\"LUAN2\",\"5B6B\":\"SUN1 XUN4\",\"5B6C\":\"HUAI4 NAO1\",\"5B6D\":\"MIE1\",\"5B6E\":\"CONG2\",\"5B6F\":\"QIAN1\",\"5B70\":\"SHU2\",\"5B71\":\"CHAN2 CAN4\",\"5B72\":\"YA1\",\"5B73\":\"ZI1 ZI4\",\"5B74\":\"NI3\",\"5B75\":\"FU1\",\"5B76\":\"ZI1 ZI4\",\"5B77\":\"LI2\",\"5B78\":\"XUE2\",\"5B79\":\"BO4\",\"5B7A\":\"RU2 RU4\",\"5B7B\":\"LAI2\",\"5B7C\":\"NIE4\",\"5B7D\":\"NIE4\",\"5B7E\":\"YING1\",\"5B7F\":\"LUAN2\",\"5B80\":\"MIAN2\",\"5B81\":\"NING2 ZHU4 NING4\",\"5B82\":\"RONG3\",\"5B83\":\"TA1 TUO1\",\"5B84\":\"GUI3\",\"5B85\":\"ZHAI2\",\"5B86\":\"QIONG2\",\"5B87\":\"YU3\",\"5B88\":\"SHOU3 SHOU4\",\"5B89\":\"AN1\",\"5B8A\":\"TU2\",\"5B8B\":\"SONG4\",\"5B8C\":\"WAN2\",\"5B8D\":\"ROU4\",\"5B8E\":\"YAO3 YAO1 YAO4\",\"5B8F\":\"HONG2\",\"5B90\":\"YI2\",\"5B91\":\"JING3\",\"5B92\":\"ZHUN1\",\"5B93\":\"MI4 FU2\",\"5B94\":\"ZHU3\",\"5B95\":\"DANG4\",\"5B96\":\"HONG2\",\"5B97\":\"ZONG1\",\"5B98\":\"GUAN1\",\"5B99\":\"ZHOU4\",\"5B9A\":\"DING4\",\"5B9B\":\"WAN3 YUAN1\",\"5B9C\":\"YI2\",\"5B9D\":\"BAO3\",\"5B9E\":\"SHI2\",\"5B9F\":\"SHI2\",\"5BA0\":\"CHONG3\",\"5BA1\":\"SHEN3\",\"5BA2\":\"KE4\",\"5BA3\":\"XUAN1\",\"5BA4\":\"SHI4\",\"5BA5\":\"YOU4\",\"5BA6\":\"HUAN4\",\"5BA7\":\"YI2\",\"5BA8\":\"TIAO3\",\"5BA9\":\"SHI3\",\"5BAA\":\"XIAN4\",\"5BAB\":\"GONG1\",\"5BAC\":\"CHENG2\",\"5BAD\":\"QUN2\",\"5BAE\":\"GONG1\",\"5BAF\":\"XIAO1\",\"5BB0\":\"ZAI3\",\"5BB1\":\"ZHA4\",\"5BB2\":\"BAO3\",\"5BB3\":\"HAI4 HE2\",\"5BB4\":\"YAN4\",\"5BB5\":\"XIAO1\",\"5BB6\":\"JIA1 JIE5 GU1\",\"5BB7\":\"SHEN3\",\"5BB8\":\"CHEN2\",\"5BB9\":\"RONG2\",\"5BBA\":\"HUANG3\",\"5BBB\":\"MI4\",\"5BBC\":\"KOU4\",\"5BBD\":\"KUAN1\",\"5BBE\":\"BIN1 BIN4\",\"5BBF\":\"SU4 XIU3 XIU4\",\"5BC0\":\"CAI4\",\"5BC1\":\"ZAN3 JIE2\",\"5BC2\":\"JI4\",\"5BC3\":\"YUAN1\",\"5BC4\":\"JI4\",\"5BC5\":\"YIN2\",\"5BC6\":\"MI4\",\"5BC7\":\"KOU4\",\"5BC8\":\"QING1\",\"5BC9\":\"QUE4\",\"5BCA\":\"ZHEN1\",\"5BCB\":\"JIAN3\",\"5BCC\":\"FU4\",\"5BCD\":\"NING2 NING4\",\"5BCE\":\"BING4\",\"5BCF\":\"HUAN2\",\"5BD0\":\"MEI4\",\"5BD1\":\"QIN3\",\"5BD2\":\"HAN2\",\"5BD3\":\"YU4\",\"5BD4\":\"SHI2\",\"5BD5\":\"NING2 NING4\",\"5BD6\":\"JIN4 QIN4\",\"5BD7\":\"NING2 NING4\",\"5BD8\":\"ZHI4\",\"5BD9\":\"YU3\",\"5BDA\":\"BAO3\",\"5BDB\":\"KUAN1\",\"5BDC\":\"NING2 NING4\",\"5BDD\":\"QIN3\",\"5BDE\":\"MO4\",\"5BDF\":\"CHA2\",\"5BE0\":\"JU4 LOU2\",\"5BE1\":\"GUA3\",\"5BE2\":\"QIN3\",\"5BE3\":\"HU1\",\"5BE4\":\"WU4\",\"5BE5\":\"LIAO2\",\"5BE6\":\"SHI2\",\"5BE7\":\"NING2 NING4 ZHU4\",\"5BE8\":\"ZHAI4\",\"5BE9\":\"SHEN3\",\"5BEA\":\"WEI3\",\"5BEB\":\"XIE3\",\"5BEC\":\"KUAN1\",\"5BED\":\"HUI4\",\"5BEE\":\"LIAO2\",\"5BEF\":\"JUN4\",\"5BF0\":\"HUAN2\",\"5BF1\":\"YI4\",\"5BF2\":\"YI2\",\"5BF3\":\"BAO3\",\"5BF4\":\"QIN4\",\"5BF5\":\"CHONG3\",\"5BF6\":\"BAO3\",\"5BF7\":\"FENG1\",\"5BF8\":\"CUN4\",\"5BF9\":\"DUI4\",\"5BFA\":\"SI4\",\"5BFB\":\"XUN2 XIN2\",\"5BFC\":\"DAO3 DAO4\",\"5BFD\":\"LV4\",\"5BFE\":\"DUI4\",\"5BFF\":\"SHOU4\",\"5C00\":\"PO3\",\"5C01\":\"FENG1\",\"5C02\":\"ZHUAN1\",\"5C03\":\"FU1\",\"5C04\":\"SHE4 YI4 YE4\",\"5C05\":\"KE4\",\"5C06\":\"JIANG1 JIANG4 QIANG1\",\"5C07\":\"JIANG1 JIANG4 QIANG1\",\"5C08\":\"ZHUAN1\",\"5C09\":\"WEI4 YU4\",\"5C0A\":\"ZUN1\",\"5C0B\":\"XUN2 XIN2\",\"5C0C\":\"SHU4\",\"5C0D\":\"DUI4\",\"5C0E\":\"DAO3 DAO4\",\"5C0F\":\"XIAO3\",\"5C10\":\"JI1\",\"5C11\":\"SHAO3 SHAO4\",\"5C12\":\"ER3\",\"5C13\":\"ER3\",\"5C14\":\"ER3\",\"5C15\":\"GA3\",\"5C16\":\"JIAN1\",\"5C17\":\"SHU2\",\"5C18\":\"CHEN2\",\"5C19\":\"SHANG4 CHANG2\",\"5C1A\":\"SHANG4 CHANG2\",\"5C1C\":\"GA2\",\"5C1D\":\"CHANG2\",\"5C1E\":\"LIAO4 LIAO2\",\"5C1F\":\"XIAN3\",\"5C20\":\"XIAN3\",\"5C22\":\"WANG1 YOU2\",\"5C23\":\"WANG1\",\"5C24\":\"YOU2\",\"5C25\":\"LIAO4\",\"5C26\":\"LIAO4\",\"5C27\":\"YAO2\",\"5C28\":\"MANG2 MENG2 PANG2\",\"5C29\":\"WANG1\",\"5C2A\":\"WANG1\",\"5C2B\":\"WANG1\",\"5C2C\":\"GA4\",\"5C2D\":\"YAO2\",\"5C2E\":\"DUO4\",\"5C2F\":\"KUI4 KUI3\",\"5C30\":\"ZHONG3\",\"5C31\":\"JIU4\",\"5C32\":\"GAN1\",\"5C33\":\"GU3\",\"5C34\":\"GAN1\",\"5C35\":\"TUI2\",\"5C36\":\"GAN1\",\"5C37\":\"GAN1\",\"5C38\":\"SHI1\",\"5C39\":\"YIN3\",\"5C3A\":\"CHI3 CHE3\",\"5C3B\":\"KAO1\",\"5C3C\":\"NI2\",\"5C3D\":\"JIN3\",\"5C3E\":\"WEI3 YI3\",\"5C3F\":\"NIAO4 SUI1\",\"5C40\":\"JU2\",\"5C41\":\"PI4\",\"5C42\":\"CENG2\",\"5C43\":\"XI4\",\"5C44\":\"BI1\",\"5C45\":\"JU1 JI1\",\"5C46\":\"JIE4\",\"5C47\":\"TIAN2\",\"5C48\":\"QU1\",\"5C49\":\"TI4\",\"5C4A\":\"JIE4\",\"5C4B\":\"WU1\",\"5C4C\":\"DIAO3\",\"5C4D\":\"SHI1\",\"5C4E\":\"SHI3 XI1\",\"5C4F\":\"PING2 BING3 BING4\",\"5C50\":\"JI1\",\"5C51\":\"XIE4\",\"5C52\":\"CHEN2\",\"5C53\":\"XI4\",\"5C54\":\"NI2\",\"5C55\":\"ZHAN3\",\"5C56\":\"XI1\",\"5C58\":\"MAN3\",\"5C59\":\"E1\",\"5C5A\":\"LOU4\",\"5C5B\":\"PING2 BING3 BING4 BING1\",\"5C5C\":\"TI4\",\"5C5D\":\"FEI4\",\"5C5E\":\"SHU3 ZHU3\",\"5C5F\":\"XIE4\",\"5C60\":\"TU2\",\"5C61\":\"LV3\",\"5C62\":\"LV3\",\"5C63\":\"XI3\",\"5C64\":\"CENG2\",\"5C65\":\"LV3\",\"5C66\":\"JU4\",\"5C67\":\"XIE4\",\"5C68\":\"JU4\",\"5C69\":\"JUE1\",\"5C6A\":\"LIAO2\",\"5C6B\":\"JUE2\",\"5C6C\":\"SHU3 ZHU3\",\"5C6D\":\"XI4\",\"5C6E\":\"CHE4 CAO3\",\"5C6F\":\"TUN2 ZHUN1\",\"5C70\":\"NI4\",\"5C71\":\"SHAN1\",\"5C73\":\"XIAN1\",\"5C74\":\"LI4 LE4\",\"5C75\":\"XUE1\",\"5C78\":\"LONG2\",\"5C79\":\"YI4\",\"5C7A\":\"QI3\",\"5C7B\":\"REN4\",\"5C7C\":\"WU4\",\"5C7D\":\"HAN4\",\"5C7E\":\"SHEN1\",\"5C7F\":\"YU3 XU4\",\"5C80\":\"CHU1\",\"5C81\":\"SUI4\",\"5C82\":\"QI3 KAI3\",\"5C84\":\"YUE4\",\"5C85\":\"BAN3\",\"5C86\":\"YAO3\",\"5C87\":\"ANG2\",\"5C88\":\"YA2\",\"5C89\":\"WU4\",\"5C8A\":\"JIE2\",\"5C8B\":\"E4\",\"5C8C\":\"JI2\",\"5C8D\":\"QIAN1\",\"5C8E\":\"FEN1\",\"5C8F\":\"YUAN2\",\"5C90\":\"QI2\",\"5C91\":\"CEN2\",\"5C92\":\"QIAN2\",\"5C93\":\"QI2\",\"5C94\":\"CHA4\",\"5C95\":\"JIE4\",\"5C96\":\"QU1\",\"5C97\":\"GANG3 GANG1\",\"5C98\":\"XIAN4\",\"5C99\":\"AO4\",\"5C9A\":\"LAN2\",\"5C9B\":\"DAO3\",\"5C9C\":\"BA1\",\"5C9D\":\"ZUO4\",\"5C9E\":\"ZUO4\",\"5C9F\":\"YANG3\",\"5CA0\":\"JU4\",\"5CA1\":\"GANG1\",\"5CA2\":\"KE3\",\"5CA3\":\"GOU3\",\"5CA4\":\"XUE4\",\"5CA5\":\"BEI1 PO1 PI2\",\"5CA6\":\"LI4\",\"5CA7\":\"TIAO2\",\"5CA8\":\"JU1 JU3\",\"5CA9\":\"YAN2\",\"5CAA\":\"FU2\",\"5CAB\":\"XIU4\",\"5CAC\":\"JIA3\",\"5CAD\":\"LING2 LING3\",\"5CAE\":\"TUO2\",\"5CAF\":\"PEI1 PEI2\",\"5CB0\":\"YOU3\",\"5CB1\":\"DAI4\",\"5CB2\":\"KUANG4\",\"5CB3\":\"YUE4\",\"5CB4\":\"QU1\",\"5CB5\":\"HU4\",\"5CB6\":\"PO4\",\"5CB7\":\"MIN2\",\"5CB8\":\"AN4\",\"5CB9\":\"TIAO2\",\"5CBA\":\"LING2\",\"5CBB\":\"CHI2\",\"5CBD\":\"DONG1\",\"5CBF\":\"KUI1\",\"5CC0\":\"XIU4\",\"5CC1\":\"MAO3\",\"5CC2\":\"TONG2\",\"5CC3\":\"XUE2\",\"5CC4\":\"YI4\",\"5CC6\":\"HE1\",\"5CC7\":\"KE1 BA1\",\"5CC8\":\"LUO4\",\"5CC9\":\"E1 E4\",\"5CCA\":\"FU4 NIE4\",\"5CCB\":\"XUN2\",\"5CCC\":\"DIE2\",\"5CCD\":\"LU4\",\"5CCE\":\"AN1\",\"5CCF\":\"ER3\",\"5CD0\":\"GAI1\",\"5CD1\":\"QUAN2\",\"5CD2\":\"TONG2 DONG4\",\"5CD3\":\"YI2\",\"5CD4\":\"MU3\",\"5CD5\":\"SHI2\",\"5CD6\":\"AN1\",\"5CD7\":\"WEI2\",\"5CD8\":\"HU1 HUAN2\",\"5CD9\":\"ZHI4 SHI4\",\"5CDA\":\"MI4\",\"5CDB\":\"LI3\",\"5CDC\":\"JI1\",\"5CDD\":\"TONG2 DONG4\",\"5CDE\":\"WEI2\",\"5CDF\":\"YOU4\",\"5CE1\":\"XIA2\",\"5CE2\":\"LI3\",\"5CE3\":\"YAO2\",\"5CE4\":\"JIAO4 QIAO2\",\"5CE5\":\"ZHENG1\",\"5CE6\":\"LUAN2\",\"5CE7\":\"JIAO1\",\"5CE8\":\"E2\",\"5CE9\":\"E2\",\"5CEA\":\"YU4\",\"5CEB\":\"YE2\",\"5CEC\":\"BU1\",\"5CED\":\"QIAO4\",\"5CEE\":\"QUN1\",\"5CEF\":\"FENG1\",\"5CF0\":\"FENG1\",\"5CF1\":\"NAO2\",\"5CF2\":\"LI3\",\"5CF3\":\"YOU2\",\"5CF4\":\"XIAN4\",\"5CF5\":\"HONG2\",\"5CF6\":\"DAO3\",\"5CF7\":\"SHEN1\",\"5CF8\":\"CHENG2\",\"5CF9\":\"TU2\",\"5CFA\":\"GENG3\",\"5CFB\":\"JUN4\",\"5CFC\":\"HAO4\",\"5CFD\":\"XIA2\",\"5CFE\":\"YIN1 YIN2\",\"5CFF\":\"YU3 WU2\",\"5D00\":\"LANG4\",\"5D01\":\"KAN3\",\"5D02\":\"LAO2\",\"5D03\":\"LAI2\",\"5D04\":\"XIAN3\",\"5D05\":\"QUE4\",\"5D06\":\"KONG1\",\"5D07\":\"CHONG2\",\"5D08\":\"CHONG2\",\"5D09\":\"TA4\",\"5D0B\":\"HUA2\",\"5D0C\":\"JU1\",\"5D0D\":\"LAI2\",\"5D0E\":\"QI2\",\"5D0F\":\"MIN2\",\"5D10\":\"KUN1\",\"5D11\":\"KUN1\",\"5D12\":\"ZU2 CUI4\",\"5D13\":\"GU4\",\"5D14\":\"CUI1\",\"5D15\":\"YA2 YAI2\",\"5D16\":\"YA2 YAI2\",\"5D17\":\"GANG3 GANG1\",\"5D18\":\"LUN2\",\"5D19\":\"LUN2\",\"5D1A\":\"LENG2\",\"5D1B\":\"JUE2\",\"5D1C\":\"DUO1\",\"5D1D\":\"ZHENG1\",\"5D1E\":\"GUO1\",\"5D1F\":\"YIN2\",\"5D20\":\"DONG1 DONG4\",\"5D21\":\"HAN2\",\"5D22\":\"ZHENG1\",\"5D23\":\"WEI3\",\"5D24\":\"YAO2\",\"5D25\":\"PI3\",\"5D26\":\"YAN1\",\"5D27\":\"SONG1\",\"5D28\":\"JIE2\",\"5D29\":\"BENG1\",\"5D2A\":\"ZU2 CUI4\",\"5D2B\":\"JUE2\",\"5D2C\":\"DONG1\",\"5D2D\":\"ZHAN3\",\"5D2E\":\"GU4\",\"5D2F\":\"YIN2\",\"5D31\":\"ZE2 ZE4\",\"5D32\":\"HUANG2\",\"5D33\":\"YU2\",\"5D34\":\"WEI1\",\"5D35\":\"YANG2\",\"5D36\":\"FENG1\",\"5D37\":\"QIU2\",\"5D38\":\"DUN4\",\"5D39\":\"TI2\",\"5D3A\":\"YI3\",\"5D3B\":\"ZHI4\",\"5D3C\":\"SHI4\",\"5D3D\":\"ZAI3\",\"5D3E\":\"YAO3\",\"5D3F\":\"E4\",\"5D40\":\"ZHU4\",\"5D41\":\"KAN1\",\"5D42\":\"LV4\",\"5D43\":\"YAN3\",\"5D44\":\"MEI3\",\"5D45\":\"GAN1\",\"5D46\":\"JI1\",\"5D47\":\"JI1 XI2\",\"5D48\":\"HUAN3\",\"5D49\":\"TING2\",\"5D4A\":\"SHENG4\",\"5D4B\":\"MEI2\",\"5D4C\":\"QIAN4 QIAN1\",\"5D4D\":\"WU4\",\"5D4E\":\"YU2\",\"5D4F\":\"ZONG1\",\"5D50\":\"LAN2\",\"5D51\":\"JUE2 HE2 JIE2\",\"5D52\":\"YAN2\",\"5D53\":\"YAN2\",\"5D54\":\"WEI3 WEI4\",\"5D55\":\"ZONG1\",\"5D56\":\"CHA2\",\"5D57\":\"SUI4\",\"5D58\":\"RONG2\",\"5D5A\":\"QIN1\",\"5D5B\":\"YU2\",\"5D5D\":\"LOU3 LV3\",\"5D5E\":\"TU2\",\"5D5F\":\"DUI1\",\"5D60\":\"XI1 JI1 QI1\",\"5D61\":\"WENG1\",\"5D62\":\"CANG1\",\"5D63\":\"DANG1\",\"5D64\":\"HONG2\",\"5D65\":\"JIE2\",\"5D66\":\"AI2\",\"5D67\":\"LIU2\",\"5D68\":\"WU3\",\"5D69\":\"SONG1\",\"5D6A\":\"QIAO1\",\"5D6B\":\"ZI1\",\"5D6C\":\"WEI2\",\"5D6D\":\"BENG1\",\"5D6E\":\"DIAN1\",\"5D6F\":\"CUO2 CI1\",\"5D70\":\"QIAN3\",\"5D71\":\"YONG3\",\"5D72\":\"NIE4\",\"5D73\":\"CUO2 CI1\",\"5D74\":\"JI2\",\"5D77\":\"SONG3\",\"5D78\":\"ZONG1\",\"5D79\":\"JIANG4 QIANG2\",\"5D7A\":\"LIAO2\",\"5D7C\":\"CHAN3\",\"5D7D\":\"DIE2 DI4\",\"5D7E\":\"CEN1\",\"5D7F\":\"DING3\",\"5D80\":\"TU1\",\"5D81\":\"LOU3 LV3\",\"5D82\":\"ZHANG4\",\"5D83\":\"ZHAN3\",\"5D84\":\"ZHAN3\",\"5D85\":\"AO2\",\"5D86\":\"CAO2\",\"5D87\":\"QU1\",\"5D88\":\"QIANG1\",\"5D89\":\"ZUI1\",\"5D8A\":\"ZUI3\",\"5D8B\":\"DAO3\",\"5D8C\":\"DAO3\",\"5D8D\":\"XI2\",\"5D8E\":\"YU4\",\"5D8F\":\"BO2\",\"5D90\":\"LONG2\",\"5D91\":\"XIANG3\",\"5D92\":\"CENG2\",\"5D93\":\"BO1\",\"5D94\":\"QIN1\",\"5D95\":\"JIAO1\",\"5D96\":\"YAN3\",\"5D97\":\"LAO2\",\"5D98\":\"ZHAN4\",\"5D99\":\"LIN2\",\"5D9A\":\"LIAO2\",\"5D9B\":\"LIAO2\",\"5D9C\":\"JIN1\",\"5D9D\":\"DENG4\",\"5D9E\":\"DUO4\",\"5D9F\":\"ZUN1\",\"5DA0\":\"JIAO4 QIAO2\",\"5DA1\":\"GUI4\",\"5DA2\":\"YAO2\",\"5DA3\":\"QIAO2\",\"5DA4\":\"YAO2\",\"5DA5\":\"JUE2\",\"5DA6\":\"ZHAN1\",\"5DA7\":\"YI4\",\"5DA8\":\"XUE2\",\"5DA9\":\"NAO2\",\"5DAA\":\"YE4\",\"5DAB\":\"YE4\",\"5DAC\":\"YI2\",\"5DAD\":\"E4 NIE4\",\"5DAE\":\"XIAN3\",\"5DAF\":\"JI2\",\"5DB0\":\"XIE4\",\"5DB1\":\"KE3 GE2\",\"5DB2\":\"XI1\",\"5DB3\":\"DI4\",\"5DB4\":\"AO4\",\"5DB5\":\"ZUI3\",\"5DB7\":\"YI2 NI4\",\"5DB8\":\"RONG2\",\"5DB9\":\"DAO3\",\"5DBA\":\"LING3\",\"5DBB\":\"ZA2\",\"5DBC\":\"YU3 XU4\",\"5DBD\":\"YUE4\",\"5DBE\":\"YIN3\",\"5DC0\":\"JIE1\",\"5DC1\":\"LI4\",\"5DC2\":\"SUI3 GUI1\",\"5DC3\":\"LONG2\",\"5DC4\":\"LONG2\",\"5DC5\":\"DIAN1\",\"5DC6\":\"YING2\",\"5DC7\":\"XI1\",\"5DC8\":\"JU2\",\"5DC9\":\"CHAN2\",\"5DCA\":\"YING3\",\"5DCB\":\"KUI1\",\"5DCC\":\"YAN2\",\"5DCD\":\"WEI1 WEI2\",\"5DCE\":\"NAO2\",\"5DCF\":\"QUAN2\",\"5DD0\":\"CHAO3\",\"5DD1\":\"CUAN2\",\"5DD2\":\"LUAN2\",\"5DD3\":\"DIAN1\",\"5DD4\":\"DIAN1\",\"5DD6\":\"YAN2\",\"5DD7\":\"YAN2\",\"5DD8\":\"YAN3\",\"5DD9\":\"NAO2\",\"5DDA\":\"YAN3\",\"5DDB\":\"CHUAN1 KUN1\",\"5DDC\":\"GUI4 KUAI4\",\"5DDD\":\"CHUAN1\",\"5DDE\":\"ZHOU1\",\"5DDF\":\"HUANG1\",\"5DE0\":\"JING1\",\"5DE1\":\"XUN2\",\"5DE2\":\"CHAO2\",\"5DE3\":\"CHAO2\",\"5DE4\":\"LIE1\",\"5DE5\":\"GONG1\",\"5DE6\":\"ZUO3\",\"5DE7\":\"QIAO3\",\"5DE8\":\"JU4\",\"5DE9\":\"GONG3\",\"5DEB\":\"WU1 WU2\",\"5DEE\":\"CHA4 CHAI1\",\"5DEF\":\"QIU2\",\"5DF0\":\"QIU2\",\"5DF1\":\"JI3\",\"5DF2\":\"YI3\",\"5DF3\":\"SI4\",\"5DF4\":\"BA1\",\"5DF5\":\"ZHI1\",\"5DF6\":\"ZHAO1 ZHAO4\",\"5DF7\":\"XIANG4 HANG4\",\"5DF8\":\"YI2\",\"5DF9\":\"JIN3\",\"5DFA\":\"XUN4\",\"5DFB\":\"JUAN4 JUAN3\",\"5DFD\":\"XUN4\",\"5DFE\":\"JIN1\",\"5DFF\":\"FU2\",\"5E00\":\"ZA1\",\"5E01\":\"BI4\",\"5E02\":\"SHI4\",\"5E03\":\"BU4\",\"5E04\":\"DING1\",\"5E05\":\"SHUAI4 SHUO4\",\"5E06\":\"FAN1\",\"5E07\":\"NIE4\",\"5E08\":\"SHI1\",\"5E09\":\"FEN1\",\"5E0A\":\"PA4\",\"5E0B\":\"ZHI3\",\"5E0C\":\"XI1\",\"5E0D\":\"HU4\",\"5E0E\":\"DAN4\",\"5E0F\":\"WEI2\",\"5E10\":\"ZHANG4\",\"5E11\":\"TANG3 NU2\",\"5E12\":\"DAI4\",\"5E13\":\"MA4\",\"5E14\":\"PEI4\",\"5E15\":\"PA4 MO4\",\"5E16\":\"TIE1 TIE3 TIE4\",\"5E17\":\"FU2\",\"5E18\":\"LIAN2\",\"5E19\":\"ZHI4\",\"5E1A\":\"ZHOU3\",\"5E1B\":\"BO2\",\"5E1C\":\"ZHI4\",\"5E1D\":\"DI4\",\"5E1E\":\"MO4\",\"5E1F\":\"YI4\",\"5E20\":\"YI4\",\"5E21\":\"PING2\",\"5E22\":\"QIA4\",\"5E23\":\"JUAN4\",\"5E24\":\"RU2\",\"5E25\":\"SHUAI4 SHUO4\",\"5E26\":\"DAI4\",\"5E27\":\"ZHENG4\",\"5E28\":\"SHUI4\",\"5E29\":\"QIAO4\",\"5E2A\":\"ZHEN1\",\"5E2B\":\"SHI1\",\"5E2C\":\"QUN2\",\"5E2D\":\"XI2\",\"5E2E\":\"BANG1\",\"5E2F\":\"DAI4\",\"5E30\":\"GUI1\",\"5E31\":\"CHOU2 DAO4\",\"5E32\":\"PING2\",\"5E33\":\"ZHANG4\",\"5E34\":\"SHA1 JIAN1 JIAN3\",\"5E35\":\"WAN1\",\"5E36\":\"DAI4\",\"5E37\":\"WEI2\",\"5E38\":\"CHANG2\",\"5E39\":\"SHA4\",\"5E3A\":\"QI2\",\"5E3B\":\"ZE2\",\"5E3C\":\"GUO2\",\"5E3D\":\"MAO4\",\"5E3E\":\"DU3\",\"5E3F\":\"HOU2\",\"5E40\":\"ZHENG4\",\"5E41\":\"XU1\",\"5E42\":\"MI4\",\"5E43\":\"WEI2\",\"5E44\":\"WO4\",\"5E45\":\"FU2\",\"5E46\":\"YI4\",\"5E47\":\"BANG1\",\"5E48\":\"PING2\",\"5E4A\":\"GONG1\",\"5E4B\":\"PAN2\",\"5E4C\":\"HUANG3\",\"5E4D\":\"DAO1\",\"5E4E\":\"MI4\",\"5E4F\":\"JIA1 JIA4\",\"5E50\":\"TENG2\",\"5E51\":\"HUI1\",\"5E52\":\"ZHONG1\",\"5E53\":\"SHAN1\",\"5E54\":\"MAN4\",\"5E55\":\"MU4\",\"5E56\":\"BIAO1\",\"5E57\":\"GUO2\",\"5E58\":\"ZE2\",\"5E59\":\"MU4\",\"5E5A\":\"BANG1\",\"5E5B\":\"ZHANG4\",\"5E5C\":\"JIONG3 JING3\",\"5E5D\":\"CHAN3\",\"5E5E\":\"FU2\",\"5E5F\":\"ZHI4\",\"5E60\":\"HU1\",\"5E61\":\"FAN1\",\"5E62\":\"CHUANG2 ZHUANG4\",\"5E63\":\"BI4\",\"5E66\":\"MI4\",\"5E67\":\"QIAO1\",\"5E68\":\"CHAN1 CHAN4\",\"5E69\":\"FEN2\",\"5E6A\":\"MENG2 MENG3\",\"5E6B\":\"BANG1\",\"5E6C\":\"CHOU2 DAO4\",\"5E6D\":\"MIE4\",\"5E6E\":\"CHU2\",\"5E6F\":\"JIE2\",\"5E70\":\"XIAN3\",\"5E71\":\"LAN2\",\"5E72\":\"GAN1 GAN4 HAN2\",\"5E73\":\"PING2\",\"5E74\":\"NIAN2\",\"5E75\":\"QIAN1\",\"5E76\":\"BING4 BING1\",\"5E77\":\"BING4 BING1\",\"5E78\":\"XING4\",\"5E79\":\"GAN4 HAN2\",\"5E7A\":\"YAO1\",\"5E7B\":\"HUAN4\",\"5E7C\":\"YOU4 YAO4\",\"5E7D\":\"YOU1\",\"5E7E\":\"JI3 JI1\",\"5E7F\":\"YAN3 AN1 GUANG3\",\"5E80\":\"PI3\",\"5E81\":\"TING1\",\"5E82\":\"ZE4\",\"5E83\":\"GUANG3\",\"5E84\":\"ZHUANG1\",\"5E85\":\"MO5\",\"5E86\":\"QING4\",\"5E87\":\"BI4\",\"5E88\":\"QIN2\",\"5E89\":\"DUN4\",\"5E8A\":\"CHUANG2\",\"5E8B\":\"GUI3\",\"5E8C\":\"YA3\",\"5E8D\":\"BAI4\",\"5E8E\":\"JIE4\",\"5E8F\":\"XU4\",\"5E90\":\"LU2\",\"5E91\":\"WU3 WU2\",\"5E93\":\"KU4\",\"5E94\":\"YING4 YING1\",\"5E95\":\"DI3 DE5\",\"5E96\":\"PAO2\",\"5E97\":\"DIAN4\",\"5E98\":\"YA1\",\"5E99\":\"MIAO4\",\"5E9A\":\"GENG1\",\"5E9B\":\"CI1 CI4\",\"5E9C\":\"FU3\",\"5E9D\":\"TONG2\",\"5E9E\":\"PANG2\",\"5E9F\":\"FEI4\",\"5EA0\":\"XIANG2\",\"5EA1\":\"YI3\",\"5EA2\":\"ZHI4\",\"5EA3\":\"TIAO1\",\"5EA4\":\"ZHI4\",\"5EA5\":\"XIU1\",\"5EA6\":\"DU4 DUO2\",\"5EA7\":\"ZUO4\",\"5EA8\":\"XIAO1\",\"5EA9\":\"TU2\",\"5EAA\":\"GUI3 JI3\",\"5EAB\":\"KU4\",\"5EAC\":\"PANG2 MANG2\",\"5EAD\":\"TING2 TING4\",\"5EAE\":\"YOU3 YOU2\",\"5EAF\":\"BU1\",\"5EB0\":\"DING1\",\"5EB1\":\"CHENG3\",\"5EB2\":\"LAI2\",\"5EB3\":\"BEI1 BI3\",\"5EB4\":\"JI2\",\"5EB5\":\"AN1\",\"5EB6\":\"SHU4\",\"5EB7\":\"KANG1\",\"5EB8\":\"YONG1 YONG2\",\"5EB9\":\"TUO3\",\"5EBA\":\"SONG1\",\"5EBB\":\"SHU4 ZHU4 ZHE1\",\"5EBC\":\"QING3\",\"5EBD\":\"YU4\",\"5EBE\":\"YU3\",\"5EBF\":\"MIAO4\",\"5EC0\":\"SOU1\",\"5EC1\":\"CE4\",\"5EC2\":\"XIANG1\",\"5EC3\":\"FEI4\",\"5EC4\":\"JIU4\",\"5EC5\":\"HE2\",\"5EC6\":\"HUI4 GUI1 WEI3\",\"5EC7\":\"LIU4\",\"5EC8\":\"SHA4 XIA4\",\"5EC9\":\"LIAN2\",\"5ECA\":\"LANG2\",\"5ECB\":\"SOU1\",\"5ECC\":\"ZHI4\",\"5ECD\":\"POU3\",\"5ECE\":\"QING3\",\"5ECF\":\"JIU4\",\"5ED0\":\"JIU4\",\"5ED1\":\"JIN3 QIN2\",\"5ED2\":\"AO2\",\"5ED3\":\"KUO4\",\"5ED4\":\"LOU2\",\"5ED5\":\"YIN4 YIN1\",\"5ED6\":\"LIAO4\",\"5ED7\":\"DAI4\",\"5ED8\":\"LU4\",\"5ED9\":\"YI4\",\"5EDA\":\"CHU2\",\"5EDB\":\"CHAN2\",\"5EDC\":\"TU1\",\"5EDD\":\"SI1\",\"5EDE\":\"XIN1\",\"5EDF\":\"MIAO4\",\"5EE0\":\"CHANG3\",\"5EE1\":\"WU3 WU2\",\"5EE2\":\"FEI4\",\"5EE3\":\"GUANG3\",\"5EE5\":\"KUAI4\",\"5EE6\":\"BI4\",\"5EE7\":\"QIANG2\",\"5EE8\":\"XIE4 JIE4\",\"5EE9\":\"LIN3\",\"5EEA\":\"LIN3 BING3 LAN3\",\"5EEB\":\"LIAO2\",\"5EEC\":\"LU2\",\"5EEE\":\"YING2\",\"5EEF\":\"XIAN1\",\"5EF0\":\"TING1\",\"5EF1\":\"YONG1\",\"5EF2\":\"LI2\",\"5EF3\":\"TING1\",\"5EF4\":\"YIN3\",\"5EF5\":\"XUN2\",\"5EF6\":\"YAN2\",\"5EF7\":\"TING2\",\"5EF8\":\"DI2\",\"5EF9\":\"PO4 PAI3\",\"5EFA\":\"JIAN4\",\"5EFB\":\"HUI2\",\"5EFC\":\"NAI3\",\"5EFD\":\"HUI2\",\"5EFE\":\"GONG3 GONG4 NIAN4\",\"5EFF\":\"NIAN4\",\"5F00\":\"KAI1\",\"5F01\":\"BIAN4 PAN2\",\"5F02\":\"YI4\",\"5F03\":\"QI4\",\"5F04\":\"NONG4 LONG4\",\"5F05\":\"FEN2\",\"5F06\":\"JU3\",\"5F07\":\"YAN3 YAN1\",\"5F08\":\"YI4\",\"5F09\":\"ZANG4 ZHUANG3\",\"5F0A\":\"BI4\",\"5F0B\":\"YI4\",\"5F0C\":\"YI1\",\"5F0D\":\"ER4\",\"5F0E\":\"SAN1 SAN4\",\"5F0F\":\"SHI4\",\"5F10\":\"ER4\",\"5F11\":\"SHI4\",\"5F12\":\"SHI4\",\"5F13\":\"GONG1\",\"5F14\":\"DIAO4\",\"5F15\":\"YIN3\",\"5F16\":\"HU4\",\"5F17\":\"FU2\",\"5F18\":\"HONG2\",\"5F19\":\"WU1\",\"5F1A\":\"TUI2\",\"5F1B\":\"CHI2 SHI3\",\"5F1C\":\"JIANG4 QIANG2\",\"5F1D\":\"BA4\",\"5F1E\":\"SHEN3\",\"5F1F\":\"DI4 TI4\",\"5F20\":\"ZHANG1 ZHANG4\",\"5F21\":\"JUE2\",\"5F22\":\"TAO1\",\"5F23\":\"FU3\",\"5F24\":\"DI3\",\"5F25\":\"MI2\",\"5F26\":\"XIAN2\",\"5F27\":\"HU2\",\"5F28\":\"CHAO1\",\"5F29\":\"NU3\",\"5F2A\":\"JING4\",\"5F2B\":\"ZHEN3\",\"5F2C\":\"YI2\",\"5F2D\":\"MI3\",\"5F2E\":\"QUAN1\",\"5F2F\":\"WAN1\",\"5F30\":\"SHAO1\",\"5F31\":\"RUO4\",\"5F32\":\"XUAN1\",\"5F33\":\"JING4\",\"5F34\":\"DUN1\",\"5F35\":\"ZHANG1 ZHANG4\",\"5F36\":\"JIANG4\",\"5F37\":\"QIANG2 QIANG3 JIANG4\",\"5F38\":\"PENG2\",\"5F39\":\"DAN4 TAN2\",\"5F3A\":\"QIANG2 QIANG3 JIANG4\",\"5F3B\":\"BI4\",\"5F3C\":\"BI4\",\"5F3D\":\"SHE4\",\"5F3E\":\"DAN4\",\"5F3F\":\"JIAN3\",\"5F40\":\"GOU4\",\"5F42\":\"FA1 FA4 BO1\",\"5F43\":\"BI4\",\"5F44\":\"KOU1\",\"5F46\":\"BIE4\",\"5F47\":\"XIAO1\",\"5F48\":\"DAN4 TAN2\",\"5F49\":\"KUO4\",\"5F4A\":\"QIANG2 QIANG3 JIANG1 JIANG4\",\"5F4B\":\"HONG2\",\"5F4C\":\"MI2\",\"5F4D\":\"KUO4\",\"5F4E\":\"WAN1\",\"5F4F\":\"JUE2\",\"5F50\":\"JI4\",\"5F51\":\"JI4\",\"5F52\":\"GUI1 KUI4\",\"5F53\":\"DANG1 DANG4\",\"5F54\":\"LU4\",\"5F55\":\"LU4 LV4\",\"5F56\":\"TUAN4\",\"5F57\":\"HUI4 SUI4\",\"5F58\":\"ZHI4\",\"5F59\":\"HUI4 WEI4\",\"5F5A\":\"HUI4\",\"5F5B\":\"YI2\",\"5F5C\":\"YI2\",\"5F5D\":\"YI2\",\"5F5E\":\"YI2\",\"5F5F\":\"HUO4\",\"5F60\":\"HUO4\",\"5F61\":\"SHAN1 XIAN1\",\"5F62\":\"XING2\",\"5F63\":\"WEN2\",\"5F64\":\"TONG2\",\"5F65\":\"YAN4\",\"5F66\":\"YAN4\",\"5F67\":\"YU4\",\"5F68\":\"CHI1\",\"5F69\":\"CAI3\",\"5F6A\":\"BIAO1\",\"5F6B\":\"DIAO1\",\"5F6C\":\"BIN1\",\"5F6D\":\"PENG2\",\"5F6E\":\"YONG3\",\"5F6F\":\"PIAO1\",\"5F70\":\"ZHANG1\",\"5F71\":\"YING3\",\"5F72\":\"CHI1\",\"5F73\":\"CHI4\",\"5F74\":\"ZHUO2\",\"5F75\":\"TUO3\",\"5F76\":\"JI2\",\"5F77\":\"PANG2 FANG3\",\"5F78\":\"ZHONG1\",\"5F79\":\"YI4\",\"5F7A\":\"WANG2\",\"5F7B\":\"CHE4\",\"5F7C\":\"BI3\",\"5F7D\":\"CHI2\",\"5F7E\":\"LING3\",\"5F7F\":\"FU2\",\"5F80\":\"WANG3 WANG4\",\"5F81\":\"ZHENG1\",\"5F82\":\"CU2\",\"5F83\":\"WANG3 WANG4\",\"5F84\":\"JING4\",\"5F85\":\"DAI4 DAI1\",\"5F86\":\"XI1\",\"5F87\":\"XUN4 XUN2\",\"5F88\":\"HEN3\",\"5F89\":\"YANG2\",\"5F8A\":\"HUAI2 HUI2\",\"5F8B\":\"LV4\",\"5F8C\":\"HOU4\",\"5F8D\":\"WA1\",\"5F8E\":\"CHENG3\",\"5F8F\":\"ZHI4\",\"5F90\":\"XU2\",\"5F91\":\"JING4\",\"5F92\":\"TU2\",\"5F93\":\"CONG2\",\"5F95\":\"LAI2 LAI4\",\"5F96\":\"CONG2\",\"5F97\":\"DE2 DE5 DEI3\",\"5F98\":\"PAI2 PEI2\",\"5F99\":\"XI3\",\"5F9B\":\"QI4\",\"5F9C\":\"CHANG2\",\"5F9D\":\"ZHI4\",\"5F9E\":\"CONG2 ZONG4 ZONG1 CONG1\",\"5F9F\":\"ZHOU1\",\"5FA0\":\"LAI2 LAI4\",\"5FA1\":\"YU4 YA4\",\"5FA2\":\"XIE4\",\"5FA3\":\"JIE4\",\"5FA4\":\"JIAN4\",\"5FA5\":\"CHI2\",\"5FA6\":\"JIA3\",\"5FA7\":\"BIAN4\",\"5FA8\":\"HUANG2\",\"5FA9\":\"FU4 FOU4\",\"5FAA\":\"XUN2\",\"5FAB\":\"WEI3\",\"5FAC\":\"PANG2\",\"5FAD\":\"YAO2\",\"5FAE\":\"WEI1 WEI2\",\"5FAF\":\"XI1 XI2\",\"5FB0\":\"ZHENG1\",\"5FB1\":\"PIAO4 BIAO1\",\"5FB2\":\"CHI2\",\"5FB3\":\"DE2 DUO2\",\"5FB4\":\"ZHENG1\",\"5FB5\":\"ZHENG1 ZHI3\",\"5FB6\":\"BIE4\",\"5FB7\":\"DE2\",\"5FB8\":\"CHONG1\",\"5FB9\":\"CHE4\",\"5FBA\":\"JIAO3\",\"5FBB\":\"WEI4\",\"5FBC\":\"JIAO4 JIAO3 JIAO1 YAO1 YAO2\",\"5FBD\":\"HUI1\",\"5FBE\":\"MEI2\",\"5FBF\":\"LONG4\",\"5FC0\":\"XIANG1\",\"5FC1\":\"BAO4\",\"5FC2\":\"QU2\",\"5FC3\":\"XIN1\",\"5FC5\":\"BI4\",\"5FC6\":\"YI4\",\"5FC7\":\"LE4\",\"5FC8\":\"REN2\",\"5FC9\":\"DAO1\",\"5FCA\":\"DING4\",\"5FCB\":\"GAI3\",\"5FCC\":\"JI4\",\"5FCD\":\"REN3\",\"5FCE\":\"REN2\",\"5FCF\":\"CHAN4\",\"5FD0\":\"TAN3\",\"5FD1\":\"TE4\",\"5FD2\":\"TE4\",\"5FD3\":\"GAN1\",\"5FD4\":\"QI4 YI4\",\"5FD5\":\"SHI4 TAI4\",\"5FD6\":\"CUN3\",\"5FD7\":\"ZHI4\",\"5FD8\":\"WANG4 WANG2\",\"5FD9\":\"MANG2\",\"5FDA\":\"XI1\",\"5FDB\":\"FAN2\",\"5FDC\":\"YING1\",\"5FDD\":\"TIAN3\",\"5FDE\":\"MIN2\",\"5FDF\":\"MIN2\",\"5FE0\":\"ZHONG1\",\"5FE1\":\"CHONG1\",\"5FE2\":\"WU4\",\"5FE3\":\"JI2\",\"5FE4\":\"WU3\",\"5FE5\":\"XI4\",\"5FE6\":\"YE4\",\"5FE7\":\"YOU1\",\"5FE8\":\"WAN4\",\"5FE9\":\"CONG1\",\"5FEA\":\"ZHONG1 SONG1\",\"5FEB\":\"KUAI4\",\"5FEC\":\"YU4\",\"5FED\":\"BIAN4\",\"5FEE\":\"ZHI4\",\"5FEF\":\"QI2\",\"5FF0\":\"CUI4\",\"5FF1\":\"CHEN2\",\"5FF2\":\"TAI4\",\"5FF3\":\"TUN2 ZHUN1\",\"5FF4\":\"QIAN2\",\"5FF5\":\"NIAN4\",\"5FF6\":\"HUN2\",\"5FF7\":\"XIONG1\",\"5FF8\":\"NIU3 NV4\",\"5FF9\":\"WANG3\",\"5FFA\":\"XIAN1\",\"5FFB\":\"XIN1\",\"5FFC\":\"KANG1\",\"5FFD\":\"HU1\",\"5FFE\":\"KAI4\",\"5FFF\":\"FEN4\",\"600A\":\"CHAO1\",\"600B\":\"MIN2\",\"600C\":\"PEI1\",\"600D\":\"ZUO4\",\"600E\":\"ZEN3\",\"600F\":\"YANG4\",\"601A\":\"JU4\",\"601B\":\"DA2\",\"601C\":\"LIAN2\",\"601D\":\"SI1 SI4 SAI1\",\"601E\":\"CHOU1 YOU2\",\"601F\":\"DI4\",\"602A\":\"GUAI4\",\"602B\":\"FU2\",\"602C\":\"XI4\",\"602D\":\"BI4\",\"602E\":\"YOU1\",\"602F\":\"QIE4\",\"603B\":\"ZONG3 ZONG1\",\"603C\":\"DUI4\",\"603F\":\"YI4\",\"604A\":\"XIE2\",\"604B\":\"LIAN4\",\"604C\":\"TIAO1\",\"604D\":\"HUANG3\",\"604E\":\"DIE2\",\"604F\":\"HAO3\",\"605A\":\"HUI4\",\"605B\":\"HUI2\",\"605C\":\"CHI4\",\"605D\":\"JIA2\",\"605E\":\"YI2\",\"605F\":\"XIONG1\",\"606A\":\"KE4\",\"606B\":\"TONG1 DONG4\",\"606C\":\"TIAN2\",\"606D\":\"GONG1\",\"606E\":\"QUAN2\",\"606F\":\"XI1\",\"607A\":\"KAI3\",\"607B\":\"CE4\",\"607C\":\"NAO3\",\"607D\":\"YUN4\",\"607E\":\"MANG2\",\"607F\":\"YONG3\",\"608A\":\"ZHE2\",\"608B\":\"LIN4\",\"608C\":\"TI4\",\"608D\":\"HAN4\",\"608E\":\"HAO4\",\"608F\":\"QIE4\",\"609A\":\"SONG3\",\"609B\":\"QUAN1\",\"609C\":\"CHENG3\",\"609D\":\"KUI1 HUI1 LI3\",\"609E\":\"WU4\",\"609F\":\"WU4\",\"60A0\":\"YOU1\",\"60A1\":\"LI2\",\"60A2\":\"LIANG4\",\"60A3\":\"HUAN4\",\"60A4\":\"CONG1\",\"60A5\":\"YI4 YI1\",\"60A6\":\"YUE4\",\"60A7\":\"LI4\",\"60A8\":\"NIN2\",\"60A9\":\"NAO3\",\"60AA\":\"E4\",\"60AB\":\"QUE4\",\"60AC\":\"XUAN2\",\"60AD\":\"QIAN1\",\"60AE\":\"WU4\",\"60AF\":\"MIN3\",\"60B0\":\"CONG2\",\"60B1\":\"FEI3\",\"60B2\":\"BEI1\",\"60B3\":\"DUO2\",\"60B4\":\"CUI4\",\"60B5\":\"CHANG4\",\"60B6\":\"MEN4 MEN1\",\"60B7\":\"LI4\",\"60B8\":\"JI4\",\"60B9\":\"GUAN4\",\"60BA\":\"GUAN4\",\"60BB\":\"XING4\",\"60BC\":\"DAO4\",\"60BD\":\"QI1\",\"60BE\":\"KONG1\",\"60BF\":\"TIAN3\",\"60C0\":\"LUN2 LUN3\",\"60C1\":\"XI1\",\"60C2\":\"KAN3\",\"60C3\":\"KUN1\",\"60C4\":\"NI4\",\"60C5\":\"QING2\",\"60C6\":\"CHOU2\",\"60C7\":\"DUN1\",\"60C8\":\"GUO3\",\"60C9\":\"CHAN1 ZHAN1\",\"60CA\":\"LIANG2 JING1\",\"60CB\":\"WAN3\",\"60CC\":\"YUAN1 YU4\",\"60CD\":\"JIN1\",\"60CE\":\"JI4\",\"60CF\":\"LIN2 LAN2\",\"60D0\":\"YU4\",\"60D1\":\"HUO4\",\"60D2\":\"HE2\",\"60D3\":\"QUAN2\",\"60D4\":\"TAN2 DAN4\",\"60D5\":\"TI4\",\"60D6\":\"TI4\",\"60D7\":\"NIE1\",\"60D8\":\"WANG3\",\"60D9\":\"CHUO4\",\"60DA\":\"HU1 BU1\",\"60DB\":\"HUN1\",\"60DC\":\"XI1\",\"60DD\":\"CHANG3 TANG3\",\"60DE\":\"XIN1\",\"60DF\":\"WEI2\",\"60E0\":\"HUI4\",\"60E1\":\"E4 WU4 WU1\",\"60E2\":\"RUI3 SUO3\",\"60E3\":\"ZONG3\",\"60E4\":\"JIAN1\",\"60E5\":\"YONG3\",\"60E6\":\"DIAN4\",\"60E7\":\"JU4\",\"60E8\":\"CAN3\",\"60E9\":\"CHENG2\",\"60EA\":\"DE2\",\"60EB\":\"BEI4\",\"60EC\":\"QIE4\",\"60ED\":\"CAN2\",\"60EE\":\"DAN4\",\"60EF\":\"GUAN4\",\"60F0\":\"DUO4\",\"60F1\":\"NAO3\",\"60F2\":\"YUN4\",\"60F3\":\"XIANG3\",\"60F4\":\"ZHUI4\",\"60F5\":\"DIE4\",\"60F6\":\"HUANG2\",\"60F7\":\"CHUN3\",\"60F8\":\"QIONG2\",\"60F9\":\"RE3\",\"60FA\":\"XING1\",\"60FB\":\"CE4\",\"60FC\":\"BIAN3\",\"60FD\":\"HUN1\",\"60FE\":\"ZONG1\",\"60FF\":\"TI2\",\"610A\":\"BI4\",\"610B\":\"XUAN1\",\"610C\":\"HUAN4\",\"610D\":\"MIN3\",\"610E\":\"BI4\",\"610F\":\"YI4\",\"611A\":\"YU2\",\"611B\":\"AI4\",\"611C\":\"QIE4\",\"611D\":\"YAN3\",\"611E\":\"NUO4\",\"611F\":\"GAN3\",\"612A\":\"YUN2\",\"612B\":\"SU4\",\"612C\":\"SU4 SHUO4\",\"612D\":\"QI2\",\"612E\":\"YAO2\",\"612F\":\"SONG3\",\"613A\":\"CAO3\",\"613B\":\"SUN4 XUN4\",\"613C\":\"SHEN4\",\"613D\":\"BO2\",\"613E\":\"KAI4\",\"613F\":\"YUAN4\",\"614A\":\"QIAN4 QIE4\",\"614B\":\"TAI4\",\"614C\":\"HUANG1 HUANG3\",\"614D\":\"YUN4\",\"614E\":\"SHEN4\",\"614F\":\"MING3\",\"615A\":\"CAN2\",\"615B\":\"CUI2\",\"615C\":\"MIN3\",\"615D\":\"TE4 NI4\",\"615E\":\"ZHANG1\",\"615F\":\"TONG4\",\"616A\":\"OU4\",\"616B\":\"SONG3\",\"616C\":\"JIN3 JIN4 QIN2\",\"616D\":\"YIN4\",\"616E\":\"LV4\",\"616F\":\"SHANG1\",\"617A\":\"LOU2\",\"617B\":\"JUAN4\",\"617C\":\"QI1\",\"617D\":\"QI1\",\"617E\":\"YU4\",\"617F\":\"PING2\",\"618A\":\"BEI4\",\"618B\":\"BIE1\",\"618C\":\"CHUN2\",\"618D\":\"JIAO1\",\"618E\":\"ZENG1\",\"618F\":\"CHI4\",\"619A\":\"DAN4\",\"619B\":\"TAN2\",\"619C\":\"DUO3\",\"619D\":\"DUI4\",\"619E\":\"DUI4\",\"619F\":\"SU4\",\"61A0\":\"JUE2\",\"61A1\":\"CE4\",\"61A2\":\"XIAO1\",\"61A3\":\"FAN2 FAN1\",\"61A4\":\"FEN4\",\"61A5\":\"LAO2\",\"61A6\":\"LAO4\",\"61A7\":\"CHONG1\",\"61A8\":\"HAN1\",\"61A9\":\"QI4\",\"61AA\":\"XIAN2\",\"61AB\":\"MIN3\",\"61AC\":\"JING3\",\"61AD\":\"LIAO3 LIAO2\",\"61AE\":\"WU3\",\"61AF\":\"CAN3\",\"61B0\":\"JUE2\",\"61B1\":\"CU4\",\"61B2\":\"XIAN4\",\"61B3\":\"TAN3\",\"61B4\":\"SHENG2\",\"61B5\":\"PI1\",\"61B6\":\"YI4\",\"61B7\":\"CHU3\",\"61B8\":\"XIAN1\",\"61B9\":\"NAO2\",\"61BA\":\"DAN4\",\"61BB\":\"TAN3\",\"61BC\":\"JING3\",\"61BD\":\"SONG1\",\"61BE\":\"HAN4\",\"61BF\":\"JIAO1 JI1 JIAO3\",\"61C0\":\"WAI4\",\"61C1\":\"HUAN2 XUAN1\",\"61C2\":\"DONG3\",\"61C3\":\"QIN2\",\"61C4\":\"QIN2\",\"61C5\":\"QU2 JU4\",\"61C6\":\"CAO3\",\"61C7\":\"KEN3\",\"61C8\":\"XIE4\",\"61C9\":\"YING1 YING4\",\"61CA\":\"AO4\",\"61CB\":\"MAO4\",\"61CC\":\"YI4\",\"61CD\":\"LIN3\",\"61CE\":\"SE4\",\"61CF\":\"JUN4\",\"61D0\":\"HUAI2\",\"61D1\":\"MEN4\",\"61D2\":\"LAN3\",\"61D3\":\"AI4\",\"61D4\":\"LIN3\",\"61D5\":\"YAN1\",\"61D6\":\"GUA1\",\"61D7\":\"XIA4\",\"61D8\":\"CHI4\",\"61D9\":\"YU3 YU2\",\"61DA\":\"YIN4\",\"61DB\":\"DAI1\",\"61DC\":\"MENG4\",\"61DD\":\"AI4\",\"61DE\":\"MENG2\",\"61DF\":\"DUI4\",\"61E0\":\"QI2\",\"61E1\":\"MO3\",\"61E2\":\"LAN2\",\"61E3\":\"MEN4\",\"61E4\":\"CHOU2\",\"61E5\":\"ZHI4\",\"61E6\":\"NUO4\",\"61E7\":\"NUO4\",\"61E8\":\"YAN1\",\"61E9\":\"YANG3\",\"61EA\":\"BO2\",\"61EB\":\"ZHI2 ZHI4\",\"61EC\":\"KUANG4\",\"61ED\":\"KUANG4\",\"61EE\":\"YOU3 YOU1\",\"61EF\":\"FU1\",\"61F0\":\"LIU2\",\"61F1\":\"MIE4\",\"61F2\":\"CHENG2\",\"61F4\":\"CHAN4\",\"61F5\":\"MENG3 MENG2\",\"61F6\":\"LAN3\",\"61F7\":\"HUAI2\",\"61F8\":\"XUAN2\",\"61F9\":\"RANG4\",\"61FA\":\"CHAN4\",\"61FB\":\"JI4\",\"61FC\":\"JU4\",\"61FD\":\"HUAN1\",\"61FE\":\"SHE4 ZHE2\",\"61FF\":\"YI4\",\"620A\":\"WU4\",\"620B\":\"JIAN1\",\"620C\":\"XU1\",\"620D\":\"SHU4\",\"620E\":\"RONG2\",\"620F\":\"XI4 XI1 HU1 HUI1\",\"621A\":\"QI1\",\"621B\":\"JIA2\",\"621C\":\"DIE2\",\"621D\":\"ZEI2 ZE2\",\"621E\":\"JIA2\",\"621F\":\"JI3\",\"622A\":\"JIE2\",\"622B\":\"YU4\",\"622C\":\"JIAN3\",\"622D\":\"YAN3 YIN3\",\"622E\":\"LU4\",\"622F\":\"XI4 XI1 HU1 HUI1\",\"623A\":\"SHI4\",\"623B\":\"LI4\",\"623C\":\"MAO3\",\"623D\":\"HU4\",\"623E\":\"LI4 LIE4\",\"623F\":\"FANG2 PANG2\",\"624A\":\"YAN3\",\"624B\":\"SHOU3\",\"624D\":\"CAI2\",\"624E\":\"ZHA1 ZHA2 ZA1 ZHA3\",\"624F\":\"QIU2\",\"625A\":\"DIAO1\",\"625B\":\"KANG2 GANG1\",\"625C\":\"YU1\",\"625D\":\"KU1 WU1\",\"625E\":\"HAN4 GAN3\",\"625F\":\"SHEN1\",\"626A\":\"MEN2\",\"626B\":\"SAO3 SAO4\",\"626C\":\"YANG2\",\"626D\":\"NIU3\",\"626E\":\"BAN4\",\"626F\":\"CHE3\",\"627A\":\"ZHI3\",\"627B\":\"ZI4 JIE2 ZHI4\",\"627C\":\"E4\",\"627D\":\"DUN4 DEN4\",\"627E\":\"ZHAO3\",\"627F\":\"CHENG2 ZHENG3\",\"628A\":\"BA3 BA4\",\"628B\":\"QIN4\",\"628C\":\"ZHEN3 SHEN4\",\"628D\":\"ZHENG3\",\"628E\":\"YUN3\",\"628F\":\"WAN2 WAN4\",\"629A\":\"FU3 HU1\",\"629B\":\"PAO1\",\"629C\":\"BA2\",\"629D\":\"AO3 NIU4\",\"629E\":\"ZE2\",\"629F\":\"TUAN2 ZHUAN1\",\"62A0\":\"KOU1\",\"62A1\":\"LUN2 LUN1\",\"62A2\":\"QIANG3 QIANG1 CHENG1\",\"62A4\":\"HU4\",\"62A5\":\"BAO4\",\"62A6\":\"BING3\",\"62A7\":\"ZHI3\",\"62A8\":\"PENG1 BENG1\",\"62A9\":\"TAN1\",\"62AA\":\"PU1\",\"62AB\":\"PI1\",\"62AC\":\"TAI2\",\"62AD\":\"YAO3 YOU2\",\"62AE\":\"ZHEN3\",\"62AF\":\"ZHA1\",\"62B0\":\"YANG3\",\"62B1\":\"BAO4\",\"62B2\":\"HE1\",\"62B3\":\"NI3\",\"62B4\":\"YI4 YE4\",\"62B5\":\"DI3\",\"62B6\":\"CHI4\",\"62B7\":\"PI1\",\"62B8\":\"ZA1\",\"62B9\":\"MO3 MA1 MO4\",\"62BA\":\"MEI4\",\"62BB\":\"SHEN4 SHEN1 CHEN1\",\"62BC\":\"YA1 XIA2\",\"62BD\":\"CHOU1\",\"62BE\":\"QU1 JIE2\",\"62BF\":\"MIN3\",\"62C0\":\"CHU4\",\"62C1\":\"JIA1\",\"62C2\":\"FU2 BI4\",\"62C3\":\"ZHAN3 ZHA4\",\"62C4\":\"ZHU3\",\"62C5\":\"DAN4 DAN1 DAN3 QIE4\",\"62C6\":\"CHAI1 CA1 CHE4\",\"62C7\":\"MU3\",\"62C8\":\"NIAN2 NIAN1 NIAN3 DIAN1\",\"62C9\":\"LA1 LA2 LA3 LA4\",\"62CA\":\"FU3\",\"62CB\":\"PAO1\",\"62CC\":\"BAN4 PAN4\",\"62CD\":\"PAI1 BO2 PO4\",\"62CE\":\"LING1\",\"62CF\":\"NA2\",\"62D0\":\"GUAI3\",\"62D1\":\"QIAN2\",\"62D2\":\"JU4 JU3\",\"62D3\":\"TUO4 TA4 ZHI2\",\"62D4\":\"BA2 BEI4\",\"62D5\":\"TUO1\",\"62D6\":\"TUO1\",\"62D7\":\"AO3 AO4 NIU4\",\"62D8\":\"JU1 GOU1\",\"62D9\":\"ZHUO2 ZHUO1\",\"62DA\":\"PAN4 FAN1 FEN4 PIN1\",\"62DB\":\"ZHAO1 QIAO2 SHAO2\",\"62DC\":\"BAI4\",\"62DD\":\"BAI4\",\"62DE\":\"DI3\",\"62DF\":\"NI3\",\"62E0\":\"JU4\",\"62E1\":\"KUO4\",\"62E2\":\"LONG3\",\"62E3\":\"JIAN3\",\"62E5\":\"YONG3 YONG1\",\"62E6\":\"LAN2\",\"62E7\":\"NING2 NING3 NING4\",\"62E8\":\"BO1 FA2\",\"62E9\":\"ZE2 ZHAI2\",\"62EA\":\"QIAN1\",\"62EB\":\"HEN2\",\"62EC\":\"KUO4 GUA1\",\"62ED\":\"SHI4\",\"62EE\":\"JIE2 JIA2\",\"62EF\":\"ZHENG3\",\"62F0\":\"NIN3\",\"62F1\":\"GONG3\",\"62F2\":\"GONG3\",\"62F3\":\"QUAN2\",\"62F4\":\"SHUAN1\",\"62F5\":\"CUN2\",\"62F6\":\"ZAN3 ZA1\",\"62F7\":\"KAO3\",\"62F8\":\"CHI3 YI2\",\"62F9\":\"XIE2\",\"62FA\":\"CE4\",\"62FB\":\"HUI1\",\"62FC\":\"PIN1\",\"62FD\":\"YE4 ZHUAI4 ZHUAI1\",\"62FE\":\"SHI2 JIE4 SHE4\",\"62FF\":\"NA2\",\"630A\":\"NONG4\",\"630B\":\"ZHEN4\",\"630C\":\"GE2\",\"630D\":\"JIAO4\",\"630E\":\"KU1 KOU1 KUA4\",\"630F\":\"DONG4\",\"631A\":\"ZHI4\",\"631B\":\"LUAN2\",\"631C\":\"YA4\",\"631D\":\"ZHUA1 WO1\",\"631E\":\"TA4\",\"631F\":\"XIE2 JIA1 XIA2\",\"632A\":\"NUO2 RUO2\",\"632B\":\"CUO4\",\"632C\":\"BO2\",\"632D\":\"GENG3\",\"632E\":\"TI3\",\"632F\":\"ZHEN4 ZHEN1 ZHEN3\",\"633A\":\"TING3\",\"633B\":\"SHAN1\",\"633C\":\"NUO4 NUO2 RUO2\",\"633D\":\"WAN3\",\"633E\":\"XIE2 JIA1 XIA2\",\"633F\":\"CHA1 ZHA3\",\"634A\":\"POU2\",\"634B\":\"LE4 LV3 LUO1\",\"634C\":\"BA1\",\"634D\":\"HAN4\",\"634E\":\"SHAO1\",\"634F\":\"NIE1\",\"635A\":\"ZHAI1\",\"635B\":\"LV3\",\"635C\":\"SOU1\",\"635D\":\"TUO1\",\"635E\":\"LAO1\",\"635F\":\"SUN3\",\"636A\":\"MIN2\",\"636B\":\"MEN2\",\"636C\":\"FU3\",\"636D\":\"BAI3\",\"636E\":\"JU4 JU1\",\"636F\":\"DAO3 DAO2\",\"637A\":\"NA4\",\"637B\":\"NIAN3 NIE1\",\"637C\":\"NUO2 RUO2\",\"637D\":\"ZU2 ZUO2\",\"637E\":\"WO4\",\"637F\":\"XI1\",\"638A\":\"POU2 BAO4 FU4 POU3\",\"638B\":\"DI3\",\"638C\":\"ZHANG3\",\"638D\":\"GUN3 HUN3\",\"638E\":\"JI3\",\"638F\":\"TAO1\",\"639A\":\"LIANG3\",\"639B\":\"GUA4\",\"639C\":\"YI3 NI3 NIE4\",\"639D\":\"HUO4 XU4\",\"639E\":\"SHAN4 YAN4\",\"639F\":\"ZHENG3\",\"63A0\":\"LVE4 LVE3\",\"63A1\":\"CAI3\",\"63A2\":\"TAN4 TAN1\",\"63A3\":\"CHE4\",\"63A4\":\"BING1\",\"63A5\":\"JIE1\",\"63A6\":\"TI4\",\"63A7\":\"KONG4 QIANG1\",\"63A8\":\"TUI1\",\"63A9\":\"YAN3\",\"63AA\":\"CUO4 ZE2\",\"63AB\":\"ZOU1\",\"63AC\":\"JU2 JU1\",\"63AD\":\"TIAN4\",\"63AE\":\"QIAN2\",\"63AF\":\"KEN4\",\"63B0\":\"BAI1\",\"63B1\":\"SHOU3 PA2\",\"63B2\":\"JIE1 QI4\",\"63B3\":\"LU3\",\"63B4\":\"GUO2\",\"63B7\":\"ZHI2 ZHI1 ZHI4\",\"63B8\":\"DAN3 SHAN4 SHAN3 CHAN2\",\"63BA\":\"XIAN1 CHAN1 CAN4 SHAN3\",\"63BB\":\"SAO1\",\"63BC\":\"GUAN4\",\"63BD\":\"PENG4\",\"63BE\":\"YUAN4\",\"63BF\":\"NUO4\",\"63C0\":\"JIAN3\",\"63C1\":\"ZHEN1\",\"63C2\":\"JIU1\",\"63C3\":\"JIAN1 JIAN3\",\"63C4\":\"YU2 YOU2\",\"63C5\":\"YAN2\",\"63C6\":\"KUI2\",\"63C7\":\"NAN3\",\"63C8\":\"HONG1\",\"63C9\":\"ROU2\",\"63CA\":\"PI4\",\"63CB\":\"WEI1\",\"63CC\":\"SAI1\",\"63CD\":\"ZOU4 COU4\",\"63CE\":\"XUAN1 SHUAN1\",\"63CF\":\"MIAO2\",\"63D0\":\"TI2 DI1 DI3 SHI2\",\"63D1\":\"NIE1\",\"63D2\":\"CHA1\",\"63D3\":\"SHI4\",\"63D4\":\"ZONG3 ZONG1\",\"63D5\":\"ZHEN4\",\"63D6\":\"YI1 JI2\",\"63D7\":\"SHUN3\",\"63D8\":\"HENG2\",\"63D9\":\"BIAN4\",\"63DA\":\"YANG2\",\"63DB\":\"HUAN4\",\"63DC\":\"YAN3\",\"63DD\":\"ZUAN4\",\"63DE\":\"AN3\",\"63DF\":\"XU1\",\"63E0\":\"YA4\",\"63E1\":\"WO4\",\"63E2\":\"KE4\",\"63E3\":\"CHUAI3 CHUAI1 CHUAI4 TUAN2 ZHUI1\",\"63E4\":\"JI2\",\"63E5\":\"TI4 DI4\",\"63E6\":\"LA2\",\"63E7\":\"LA4\",\"63E8\":\"CHENG2\",\"63E9\":\"KAI1\",\"63EA\":\"JIU1\",\"63EB\":\"JIU1\",\"63EC\":\"TU2\",\"63ED\":\"JIE1\",\"63EE\":\"HUI1\",\"63EF\":\"GENG1\",\"63F0\":\"CHONG4\",\"63F1\":\"SHUO4 XIAO1\",\"63F2\":\"SHE2 TIE2 DIE2 YE4\",\"63F3\":\"XIE4 XIE2 JIA2 XIE1\",\"63F4\":\"YUAN2\",\"63F5\":\"QIAN2 JIAN4\",\"63F6\":\"YE2\",\"63F7\":\"CHA1\",\"63F8\":\"ZHA1\",\"63F9\":\"BEI1\",\"63FA\":\"YAO2\",\"63FD\":\"LAN3\",\"63FE\":\"WEN4\",\"63FF\":\"QIN4\",\"640A\":\"CHOU1\",\"640B\":\"CHI3 CHA1 CHUAI1\",\"640C\":\"ZHAN3\",\"640D\":\"SUN3\",\"640E\":\"SUN1\",\"640F\":\"BO2\",\"641A\":\"XIE2 LA1\",\"641B\":\"JIAN1\",\"641C\":\"SOU1\",\"641D\":\"QIU3\",\"641E\":\"GAO3\",\"641F\":\"XIAN3\",\"642A\":\"TANG2\",\"642B\":\"PAN2\",\"642C\":\"BAN1\",\"642D\":\"DA1 TA4\",\"642E\":\"LI4\",\"642F\":\"TAO1\",\"643A\":\"XI1 XI2 XIE2\",\"643B\":\"NUO4\",\"643C\":\"QUAN2\",\"643D\":\"CHA2\",\"643E\":\"ZHA4\",\"643F\":\"GE2\",\"644A\":\"TAN1\",\"644B\":\"SA4\",\"644C\":\"CHAN3\",\"644D\":\"SUO1\",\"644E\":\"LIAO2 JIU1 LIU2\",\"644F\":\"CHONG1\",\"645A\":\"TANG2\",\"645B\":\"CHI1 LI2\",\"645C\":\"GUAN4\",\"645D\":\"LU4\",\"645E\":\"LUO4 LUO2\",\"645F\":\"LOU3 LOU1 LOU2\",\"646A\":\"JIANG1\",\"646B\":\"GUI1\",\"646C\":\"YING4\",\"646D\":\"ZHI2 TUO4\",\"646E\":\"AO2\",\"646F\":\"ZHI4\",\"647A\":\"ZHE2 LA1\",\"647B\":\"SHAN3 CHAN1 SEN1 CAN4 XIAN1\",\"647C\":\"KENG1\",\"647D\":\"PIAO1 BIAO4 BIAO1 PAO1 PIAO3\",\"647E\":\"JIANG4\",\"647F\":\"YIN1\",\"648A\":\"XIAN4\",\"648B\":\"RUAN2 NUO2\",\"648C\":\"KUI4 GUI4\",\"648D\":\"ZAN3\",\"648E\":\"YI4\",\"648F\":\"XUN2 XIAN2\",\"649A\":\"NIAN3\",\"649B\":\"LIN3\",\"649C\":\"ZHENG3 CHENG2\",\"649D\":\"HUI1\",\"649E\":\"ZHUANG4 CHUANG2\",\"649F\":\"JIAO3\",\"64A0\":\"JI3\",\"64A1\":\"CAO1\",\"64A2\":\"DAN3 TAN4\",\"64A3\":\"DAN3 CHAN2 SHAN4\",\"64A4\":\"CHE4\",\"64A5\":\"BO1 FA2\",\"64A6\":\"CHE3\",\"64A7\":\"JUE2 JUE1\",\"64A8\":\"XIAO1\",\"64A9\":\"LIAO1 LIAO2 LIAO4\",\"64AA\":\"BEN4\",\"64AB\":\"FU3 HU1\",\"64AC\":\"QIAO4\",\"64AD\":\"BO1 BO4 BO3\",\"64AE\":\"CUO1 ZUO3\",\"64AF\":\"ZHUO2\",\"64B0\":\"ZHUAN4 SUAN4 XUAN3\",\"64B1\":\"TUO3\",\"64B2\":\"PU1\",\"64B3\":\"QIN4\",\"64B4\":\"DUN1\",\"64B5\":\"NIAN3\",\"64B7\":\"XIE2\",\"64B8\":\"LU3\",\"64B9\":\"JIAO3\",\"64BA\":\"CUAN1\",\"64BB\":\"TA4\",\"64BC\":\"HAN4\",\"64BD\":\"QIAO4\",\"64BE\":\"ZHUA1 WO1\",\"64BF\":\"JIAN3 LIAN4\",\"64C0\":\"GAN3 HAN4\",\"64C1\":\"YONG1 YONG3\",\"64C2\":\"LEI2 LEI4 LEI1\",\"64C3\":\"KUO3\",\"64C4\":\"LU3\",\"64C5\":\"SHAN4\",\"64C6\":\"ZHUO2\",\"64C7\":\"ZE2 ZHAI2\",\"64C8\":\"PU1 BU3\",\"64C9\":\"CHUO4 CHUO1\",\"64CA\":\"JI1 JI2 JI4 XI2\",\"64CB\":\"DANG3 DANG4 TANG3\",\"64CC\":\"SUO3\",\"64CD\":\"CAO1 CAO4\",\"64CE\":\"QING2\",\"64CF\":\"JING4 QING2\",\"64D0\":\"HUAN4 GUAN1 XUAN1\",\"64D1\":\"JIE1 XIE2 CHA1 SHA4\",\"64D2\":\"QIN2\",\"64D3\":\"KUAI3\",\"64D4\":\"DAN1 DAN4\",\"64D5\":\"XI1 XI2 XIE2\",\"64D6\":\"GE3 YE4\",\"64D7\":\"PI4 PI3\",\"64D8\":\"BO4\",\"64D9\":\"AO4\",\"64DA\":\"JU4\",\"64DB\":\"YE4\",\"64DE\":\"SOU3 SOU4\",\"64DF\":\"MI2\",\"64E0\":\"JI3\",\"64E1\":\"TAI2\",\"64E2\":\"ZHUO2\",\"64E3\":\"DAO3\",\"64E4\":\"XING3\",\"64E5\":\"LAN3\",\"64E6\":\"CA1\",\"64E7\":\"JU3\",\"64E8\":\"YE2\",\"64E9\":\"RU3 RUI4\",\"64EA\":\"YE4\",\"64EB\":\"YE4\",\"64EC\":\"NI3\",\"64ED\":\"WO4 HUO4 HU4\",\"64EE\":\"JI2\",\"64EF\":\"BIN4\",\"64F0\":\"NING2 NING3 NING4\",\"64F1\":\"GE1 GE2\",\"64F2\":\"ZHI4 ZHI2 ZHI1\",\"64F3\":\"JIE2\",\"64F4\":\"KUO4\",\"64F5\":\"MO2 MI2 MA1\",\"64F6\":\"JIAN4\",\"64F7\":\"XIE2\",\"64F8\":\"LIE4 LA4\",\"64F9\":\"TAN1\",\"64FA\":\"BAI3\",\"64FB\":\"SOU3 SOU4\",\"64FC\":\"LU3\",\"64FD\":\"LVE4 LI4 LUO4\",\"64FE\":\"RAO3 ROU2\",\"64FF\":\"ZHI2 TI4 ZHI4\",\"650A\":\"LI4\",\"650B\":\"LA4\",\"650C\":\"HAN4 HUAN3\",\"650D\":\"YING2\",\"650E\":\"LU2\",\"650F\":\"LONG3\",\"651B\":\"CUAN1\",\"651C\":\"XIE2 XI1 XI2\",\"651D\":\"SHE4 NIE4\",\"651E\":\"LUO3 LUO1 LV3\",\"651F\":\"JUN4\",\"652A\":\"JIAO3\",\"652B\":\"JUE2\",\"652C\":\"LAN3\",\"652D\":\"LI4\",\"652E\":\"NANG3\",\"652F\":\"ZHI1\",\"653A\":\"YI3\",\"653B\":\"GONG1\",\"653C\":\"GAN1\",\"653D\":\"BAN1 BIN1\",\"653E\":\"FANG4 FANG3\",\"653F\":\"ZHENG4 ZHENG1\",\"654A\":\"CHU4\",\"654B\":\"GE2 GUO2\",\"654C\":\"DI2\",\"654D\":\"XU4\",\"654E\":\"JIAO4 JIAO1\",\"654F\":\"MIN3\",\"655A\":\"DUO2\",\"655B\":\"LIAN4 LIAN3\",\"655C\":\"NIE4\",\"655D\":\"BI4\",\"655E\":\"CHANG3\",\"655F\":\"DIAN3\",\"656A\":\"DUO2\",\"656B\":\"JIAO4 JIAO3\",\"656C\":\"JING4\",\"656D\":\"YANG2\",\"656E\":\"XIA2 GUI1\",\"656F\":\"MIN2 HUN1\",\"657A\":\"QU1\",\"657B\":\"XIONG4\",\"657C\":\"XI3\",\"657D\":\"JIAO3\",\"657F\":\"JIAO3\",\"658A\":\"QI2\",\"658B\":\"ZHAI1\",\"658C\":\"BIN1\",\"658D\":\"JUE2\",\"658E\":\"ZHAI1\",\"659A\":\"JIA3\",\"659B\":\"HU2\",\"659C\":\"XIE2 XIA2 YE2\",\"659D\":\"JIA3\",\"659E\":\"YU3\",\"659F\":\"ZHEN1\",\"65A0\":\"JIAO4\",\"65A1\":\"WO4 GUAN3\",\"65A2\":\"TOU3\",\"65A3\":\"CHU4\",\"65A4\":\"JIN1\",\"65A5\":\"CHI4\",\"65A6\":\"YIN2\",\"65A7\":\"FU3\",\"65A8\":\"QIANG1\",\"65A9\":\"ZHAN3\",\"65AA\":\"QU2\",\"65AB\":\"ZHUO2\",\"65AC\":\"ZHAN3\",\"65AD\":\"DUAN4\",\"65AE\":\"ZHUO2\",\"65AF\":\"SI1\",\"65B0\":\"XIN1\",\"65B1\":\"ZHUO2\",\"65B2\":\"ZHUO2\",\"65B3\":\"QIN2\",\"65B4\":\"LIN2\",\"65B5\":\"ZHUO2\",\"65B6\":\"CHU4\",\"65B7\":\"DUAN4\",\"65B8\":\"ZHU3 ZHU2\",\"65B9\":\"FANG1 FENG1 PANG2 WANG3\",\"65BA\":\"XIE4\",\"65BB\":\"HANG2\",\"65BC\":\"YU2 YU1 WU1\",\"65BD\":\"SHI1 SHI3 YI2 YI4\",\"65BE\":\"PEI4\",\"65BF\":\"YOU2 LIU2\",\"65C1\":\"PANG2 BANG4\",\"65C2\":\"QI2\",\"65C3\":\"ZHAN1\",\"65C4\":\"MAO2\",\"65C5\":\"LV3\",\"65C6\":\"PEI4\",\"65C7\":\"PI1\",\"65C8\":\"LIU2\",\"65C9\":\"FU1\",\"65CA\":\"FANG3\",\"65CB\":\"XUAN2 XUAN4\",\"65CC\":\"JING1\",\"65CD\":\"JING1\",\"65CE\":\"NI3\",\"65CF\":\"ZU2 ZOU4 COU4\",\"65D0\":\"ZHAO4\",\"65D1\":\"YI3\",\"65D2\":\"LIU2\",\"65D3\":\"SHAO1\",\"65D4\":\"JIAN4\",\"65D6\":\"YI3\",\"65D7\":\"QI2\",\"65D8\":\"ZHI4\",\"65D9\":\"FAN1\",\"65DA\":\"PIAO1\",\"65DB\":\"FAN1\",\"65DC\":\"ZHAN1\",\"65DD\":\"GUAI4 KUAI4\",\"65DE\":\"SUI4\",\"65DF\":\"YU2\",\"65E0\":\"WU2 MO2\",\"65E1\":\"JI4\",\"65E2\":\"JI4 XI4\",\"65E3\":\"JI4 XI4\",\"65E4\":\"HUO4\",\"65E5\":\"RI4 MI4\",\"65E6\":\"DAN4\",\"65E7\":\"JIU4\",\"65E8\":\"ZHI3\",\"65E9\":\"ZAO3\",\"65EA\":\"XIE2\",\"65EB\":\"TIAO1\",\"65EC\":\"XUN2\",\"65ED\":\"XU4\",\"65EE\":\"XU4 GA1\",\"65EF\":\"XU4 LA2\",\"65F0\":\"GAN4 HAN4\",\"65F1\":\"HAN4\",\"65F2\":\"TAI2\",\"65F3\":\"DI4\",\"65F4\":\"XU1\",\"65F5\":\"CHAN3\",\"65F6\":\"SHI2\",\"65F7\":\"KUANG4\",\"65F8\":\"YANG2\",\"65F9\":\"SHI2\",\"65FA\":\"WANG4\",\"65FB\":\"MIN2\",\"65FC\":\"MIN2\",\"65FD\":\"TUN1\",\"65FE\":\"CHUN1 CHUN3\",\"65FF\":\"WU3\",\"660A\":\"HAO4\",\"660B\":\"GUI4\",\"660C\":\"CHANG1\",\"660D\":\"XUAN1\",\"660E\":\"MING2\",\"660F\":\"HUN1 MIN3\",\"661A\":\"SHEN4\",\"661B\":\"JU4\",\"661C\":\"YANG2\",\"661D\":\"ZAN3 CAN3\",\"661E\":\"BING3\",\"661F\":\"XING1\",\"662A\":\"BIAN4\",\"662B\":\"XU3 XU1 XU4\",\"662C\":\"HUN1 MIN3\",\"662D\":\"ZHAO1\",\"662E\":\"ZONG4\",\"662F\":\"SHI4\",\"663A\":\"BING3\",\"663B\":\"ANG2\",\"663C\":\"ZHOU4\",\"663D\":\"LONG2\",\"663E\":\"XIAN3\",\"663F\":\"KUANG4\",\"664A\":\"ZHI3\",\"664B\":\"JIN4\",\"664C\":\"SHANG3\",\"664D\":\"TONG2\",\"664E\":\"HONG3\",\"664F\":\"YAN4\",\"665A\":\"WAN3\",\"665B\":\"XIAN4\",\"665C\":\"KUN1\",\"665D\":\"ZHOU4\",\"665E\":\"XI1\",\"665F\":\"SHENG4 CHENG2 JING1\",\"666A\":\"TIAN3\",\"666B\":\"ZHUO2\",\"666C\":\"ZUI4\",\"666D\":\"ZHOU3\",\"666E\":\"PU3\",\"666F\":\"JING3 YING3\",\"667A\":\"ZHI4 ZHI1\",\"667B\":\"AN3 YAN3\",\"667C\":\"WAN3\",\"667D\":\"LIN2\",\"667E\":\"LIANG4\",\"667F\":\"CHANG1\",\"668A\":\"FU3\",\"668B\":\"MIN3 MIN2\",\"668C\":\"KUI2\",\"668D\":\"HE4 YE1\",\"668E\":\"YING4\",\"668F\":\"DU3\",\"669A\":\"YAO2\",\"669B\":\"SUO3\",\"669C\":\"JIN4\",\"669D\":\"MING2 MING3\",\"669E\":\"JIAO3\",\"669F\":\"KAI3\",\"66A0\":\"GAO3 HAO4\",\"66A1\":\"WENG3\",\"66A2\":\"CHANG4\",\"66A3\":\"QI4\",\"66A4\":\"HAO4\",\"66A5\":\"YAN4\",\"66A6\":\"LI4\",\"66A7\":\"AI4\",\"66A8\":\"JI4\",\"66A9\":\"GUI4\",\"66AA\":\"MEN3\",\"66AB\":\"ZAN4\",\"66AC\":\"XIE4\",\"66AD\":\"HAO4\",\"66AE\":\"MU4\",\"66AF\":\"MO4\",\"66B0\":\"CONG1\",\"66B1\":\"NI4\",\"66B2\":\"ZHANG1\",\"66B3\":\"HUI4\",\"66B4\":\"BAO4 PU4 BO2\",\"66B5\":\"HAN4\",\"66B6\":\"XUAN2\",\"66B7\":\"CHUAN2\",\"66B8\":\"LIAO2 LIAO3\",\"66B9\":\"XIAN1\",\"66BA\":\"DAN4\",\"66BB\":\"JING3\",\"66BC\":\"PIE1\",\"66BD\":\"LIN2\",\"66BE\":\"TUN1\",\"66BF\":\"XI3\",\"66C0\":\"YI4\",\"66C1\":\"JI4\",\"66C2\":\"HUANG4\",\"66C3\":\"TAI4 DAI4\",\"66C4\":\"YE4\",\"66C5\":\"YE4\",\"66C6\":\"LI4\",\"66C7\":\"TAN2\",\"66C8\":\"TONG2\",\"66C9\":\"XIAO3\",\"66CA\":\"FEI4\",\"66CB\":\"QIN3\",\"66CC\":\"ZHAO4\",\"66CD\":\"HAO4\",\"66CE\":\"YI4\",\"66CF\":\"XIANG4 SHANG3\",\"66D0\":\"XING1\",\"66D1\":\"SEN1\",\"66D2\":\"JIAO3\",\"66D3\":\"BAO4 BO2\",\"66D4\":\"JING4\",\"66D5\":\"YAN4\",\"66D6\":\"AI4\",\"66D7\":\"YE4\",\"66D8\":\"RU2\",\"66D9\":\"SHU4 SHU3\",\"66DA\":\"MENG2\",\"66DB\":\"XUN1\",\"66DC\":\"YAO4\",\"66DD\":\"PU4\",\"66DE\":\"LI4\",\"66DF\":\"CHEN2\",\"66E0\":\"KUANG4\",\"66E1\":\"DIE2\",\"66E3\":\"YAN4\",\"66E4\":\"HUO4\",\"66E5\":\"LU2\",\"66E6\":\"XI1\",\"66E7\":\"RONG2\",\"66E8\":\"LONG2\",\"66E9\":\"NANG3\",\"66EA\":\"LUO3\",\"66EB\":\"LUAN2\",\"66EC\":\"SHAI4\",\"66ED\":\"TANG3\",\"66EE\":\"YAN3\",\"66EF\":\"CHU2\",\"66F0\":\"YUE1\",\"66F1\":\"YUE1\",\"66F2\":\"QU1 QU3\",\"66F3\":\"YE4 YI4\",\"66F4\":\"GENG4 GENG1\",\"66F5\":\"YE4\",\"66F6\":\"HU1\",\"66F7\":\"HE2\",\"66F8\":\"SHU1\",\"66F9\":\"CAO2\",\"66FA\":\"CAO2\",\"66FC\":\"MAN4 MAN2\",\"66FD\":\"CENG1\",\"66FE\":\"CENG2 ZENG1\",\"66FF\":\"TI4\",\"670A\":\"RUAN3\",\"670B\":\"PENG2\",\"670C\":\"BAN1 FEN2\",\"670D\":\"FU2 FU4 BI4\",\"670E\":\"LING2\",\"670F\":\"FEI3 PEI4\",\"671A\":\"HUANG1\",\"671B\":\"WANG4\",\"671C\":\"TUN1\",\"671D\":\"ZHAO1 CHAO2 ZHU1\",\"671E\":\"JI1 QI2\",\"671F\":\"QI1 QI2 JI1\",\"672A\":\"WEI4\",\"672B\":\"MO4\",\"672C\":\"BEN3\",\"672D\":\"ZHA2\",\"672E\":\"SHU4 ZHU2\",\"672F\":\"ZHU2 SHU4\",\"673A\":\"JI1\",\"673B\":\"JIU1\",\"673C\":\"BI3\",\"673D\":\"XIU3\",\"673E\":\"TING2 TING1 CHENG2\",\"673F\":\"CI4\",\"674A\":\"XUN2\",\"674B\":\"FAN1\",\"674C\":\"WU4\",\"674D\":\"ZI3\",\"674E\":\"LI3\",\"674F\":\"XING4\",\"675A\":\"GU3\",\"675B\":\"GONG1\",\"675C\":\"DU4\",\"675D\":\"YI2 CHI3 LI2\",\"675E\":\"QI3\",\"675F\":\"SHU4\",\"676A\":\"MIAO3\",\"676B\":\"SI4\",\"676C\":\"YUAN2 WAN2\",\"676D\":\"HANG2 KANG1\",\"676E\":\"FEI4 BEI4\",\"676F\":\"BEI1\",\"677A\":\"XIN1\",\"677B\":\"CHOU3 NIU3\",\"677C\":\"ZHU4 SHU4\",\"677D\":\"CHOU3\",\"677E\":\"SONG1\",\"677F\":\"BAN3\",\"678A\":\"ANG4\",\"678B\":\"FANG1 BING4\",\"678C\":\"FEN2\",\"678D\":\"YI4\",\"678E\":\"FU2 FU1\",\"678F\":\"NAN2\",\"679A\":\"MEI2\",\"679B\":\"ZHAO4\",\"679C\":\"GUO3 KE4 LUO3 WO3\",\"679D\":\"ZHI1 QI2\",\"679E\":\"CONG1 ZONG1\",\"679F\":\"YUN4 YUN2\",\"67A1\":\"DOU3\",\"67A2\":\"SHU1\",\"67A3\":\"ZAO3\",\"67A5\":\"LI4\",\"67A7\":\"JIAN4 JIAN3\",\"67A8\":\"CHENG2\",\"67AA\":\"QIANG1 CHENG1\",\"67AB\":\"FENG1\",\"67AC\":\"NAN2\",\"67AD\":\"XIAO1\",\"67AE\":\"XIAN1\",\"67AF\":\"KU1\",\"67B0\":\"PING2\",\"67B1\":\"YI2 TAI2 SI4\",\"67B2\":\"XI3\",\"67B3\":\"ZHI1 ZHI2 ZHI3\",\"67B4\":\"GUAI3\",\"67B5\":\"XIAO1\",\"67B6\":\"JIA4\",\"67B7\":\"JIA1\",\"67B8\":\"JU3 GOU3 GOU1 QU2\",\"67B9\":\"FU1 BAO1 FU2\",\"67BA\":\"MO4\",\"67BB\":\"YI4\",\"67BC\":\"YE4\",\"67BD\":\"YE4\",\"67BE\":\"SHI4\",\"67BF\":\"NIE4\",\"67C0\":\"BI3\",\"67C1\":\"DUO4 TUO2 TUO3\",\"67C2\":\"YI2 DUO4\",\"67C3\":\"LING2\",\"67C4\":\"BING3 BING4\",\"67C5\":\"NI3\",\"67C6\":\"LA1\",\"67C7\":\"HE2\",\"67C8\":\"PAN2\",\"67C9\":\"FAN2\",\"67CA\":\"ZHONG1\",\"67CB\":\"DAI4\",\"67CC\":\"CI2\",\"67CD\":\"YANG1\",\"67CE\":\"FU1 FU3 FU4\",\"67CF\":\"BAI3 BO2 BO4\",\"67D0\":\"MOU3\",\"67D1\":\"GAN1 QIAN2\",\"67D2\":\"QI1\",\"67D3\":\"RAN3\",\"67D4\":\"ROU2\",\"67D5\":\"MAO4\",\"67D6\":\"ZHAO1\",\"67D7\":\"SONG1\",\"67D8\":\"ZHE4\",\"67D9\":\"XIA2 JIA3 YA1\",\"67DA\":\"YOU4 YOU2 ZHU2\",\"67DB\":\"SHEN1\",\"67DC\":\"GUI4 JU3\",\"67DD\":\"TUO4\",\"67DE\":\"ZUO4 ZE2 ZHA4\",\"67DF\":\"NAN2\",\"67E0\":\"NING2\",\"67E1\":\"YONG3\",\"67E2\":\"DI3\",\"67E3\":\"ZHI2 DIE2 ZHI4\",\"67E4\":\"ZHA1 JU1 ZU3\",\"67E5\":\"CHA2 ZHA1\",\"67E6\":\"DAN4\",\"67E7\":\"GU1\",\"67E9\":\"JIU4\",\"67EA\":\"AO1\",\"67EB\":\"FU2\",\"67EC\":\"JIAN3\",\"67ED\":\"BO1\",\"67EE\":\"DUO4\",\"67EF\":\"KE1\",\"67F0\":\"NAI4\",\"67F1\":\"ZHU4 ZHU3\",\"67F2\":\"BI4\",\"67F3\":\"LIU3\",\"67F4\":\"CHAI2 ZHAI4 ZI4\",\"67F5\":\"ZHA4 CE4 SHA4 SHAN1\",\"67F6\":\"SI4\",\"67F7\":\"ZHU4\",\"67F8\":\"PEI1\",\"67F9\":\"SHI4\",\"67FA\":\"GUAI3\",\"67FB\":\"CHA2 ZHA1\",\"67FC\":\"YAO3\",\"67FD\":\"JUE2 CHENG1\",\"67FE\":\"JIU4\",\"67FF\":\"SHI4\",\"680A\":\"LONG2\",\"680B\":\"DONG4\",\"680C\":\"LU2\",\"680E\":\"LI4 LAO2 YUE4\",\"680F\":\"LAN2 LIAN4\",\"681A\":\"ZHEN4\",\"681B\":\"LI4\",\"681C\":\"SU4 SHE4\",\"681D\":\"GUA1 KUAI4 KUO4 TIAN4\",\"681E\":\"KAN1\",\"681F\":\"BING1 BEN1\",\"682A\":\"ZHU1\",\"682B\":\"JIAN4\",\"682C\":\"ZUI4\",\"682D\":\"ER2\",\"682E\":\"ER3\",\"682F\":\"YOU3 YU4\",\"683A\":\"ZHI3\",\"683B\":\"SHI4 CHI4\",\"683C\":\"GE2 GE1\",\"683D\":\"ZAI1 ZAI4\",\"683E\":\"LUAN2\",\"683F\":\"FU2\",\"684A\":\"JUAN4 QUAN1 QUAN2\",\"684B\":\"YI2\",\"684C\":\"ZHUO1\",\"684D\":\"KU1\",\"684E\":\"ZHI4 ZHI2\",\"684F\":\"QIONG2\",\"685A\":\"ZAN3\",\"685C\":\"YING1\",\"685F\":\"ZHAN4\",\"686A\":\"XUN2 XIN2\",\"686B\":\"SUO1\",\"686C\":\"SHA1\",\"686D\":\"ZHEN1 CHEN2\",\"686E\":\"BEI1\",\"686F\":\"TING1 XING2\",\"687A\":\"LIU3\",\"687B\":\"FENG1\",\"687C\":\"QI1\",\"687D\":\"WEN3\",\"687E\":\"JUN1\",\"687F\":\"GAN3\",\"688A\":\"DI4\",\"688B\":\"XUAN1\",\"688C\":\"TU2\",\"688D\":\"ZAO4\",\"688E\":\"AO1 YOU4\",\"688F\":\"GU4 JUE2\",\"689A\":\"WAN3\",\"689B\":\"NUO2\",\"689C\":\"JIA2 JIA1\",\"689D\":\"TIAO2\",\"689E\":\"JI4\",\"689F\":\"XIAO1\",\"68A0\":\"LV3\",\"68A1\":\"HUN2 KUAN3\",\"68A2\":\"SHAO1 SHAO4 XIAO1\",\"68A3\":\"CEN2 CHEN2 QIN2\",\"68A4\":\"FEN2\",\"68A5\":\"SONG1\",\"68A6\":\"MENG4 MENG2\",\"68A7\":\"WU2 WU4 YU3\",\"68A8\":\"LI2\",\"68A9\":\"LI2 SI4\",\"68AA\":\"DOU4\",\"68AB\":\"CEN1 QIN1\",\"68AC\":\"YING3 CHENG3\",\"68AD\":\"SUO1 XUN4\",\"68AE\":\"JU2\",\"68AF\":\"TI1 TI2\",\"68B0\":\"XIE4 JIE4\",\"68B1\":\"KUN3\",\"68B2\":\"ZHUO2\",\"68B3\":\"SHU1\",\"68B4\":\"CHAN1\",\"68B5\":\"FAN4\",\"68B6\":\"WEI3\",\"68B7\":\"JING4\",\"68B8\":\"LI2\",\"68B9\":\"BING1 BIN1\",\"68BC\":\"TAO2 DAO3\",\"68BD\":\"ZHI4\",\"68BE\":\"LAI2\",\"68BF\":\"LIAN2\",\"68C0\":\"JIAN3\",\"68C1\":\"ZHUO2 TUO1\",\"68C2\":\"LING2\",\"68C3\":\"LI2\",\"68C4\":\"QI4\",\"68C5\":\"BING4\",\"68C6\":\"ZHUN1 LUN2\",\"68C7\":\"CONG1\",\"68C8\":\"QIAN4\",\"68C9\":\"MIAN2\",\"68CA\":\"QI2\",\"68CB\":\"QI2 JI1\",\"68CC\":\"CAI3\",\"68CD\":\"GUN4 HUN4 AO1 GUN3\",\"68CE\":\"CHAN2\",\"68CF\":\"TE4\",\"68D0\":\"FEI3\",\"68D1\":\"PAI2 BAI4\",\"68D2\":\"BANG4\",\"68D3\":\"POU3 BANG4 BEI4\",\"68D4\":\"HUN1\",\"68D5\":\"ZONG1\",\"68D6\":\"CHENG2\",\"68D7\":\"ZAO3\",\"68D8\":\"JI2\",\"68D9\":\"LI4\",\"68DA\":\"PENG2\",\"68DB\":\"YU4\",\"68DC\":\"YU4\",\"68DD\":\"GU4\",\"68DE\":\"HUN2\",\"68DF\":\"DONG4\",\"68E0\":\"TANG2\",\"68E1\":\"GANG1\",\"68E2\":\"WANG3\",\"68E3\":\"DI4 TI4 DAI4\",\"68E4\":\"XI2\",\"68E5\":\"FAN2\",\"68E6\":\"CHENG1\",\"68E7\":\"ZHAN4\",\"68E8\":\"QI3\",\"68E9\":\"YUAN1\",\"68EA\":\"YAN3\",\"68EB\":\"YU4\",\"68EC\":\"QUAN1 QUAN4\",\"68ED\":\"YI4\",\"68EE\":\"SEN1\",\"68EF\":\"REN3 NIAN4\",\"68F0\":\"CHUI2 DUO3\",\"68F1\":\"LENG2 LENG1 LING2 LENG4\",\"68F2\":\"QI1 XI1\",\"68F3\":\"ZHUO2\",\"68F4\":\"FU2\",\"68F5\":\"KE1 KUAN3 KE3\",\"68F6\":\"LAI2\",\"68F7\":\"ZOU1\",\"68F8\":\"ZOU1\",\"68F9\":\"ZHUO1 ZHAO4\",\"68FA\":\"GUAN1 GUAN4\",\"68FB\":\"FEN2 FEN1\",\"68FC\":\"FEN2 FEN1 FEN4\",\"68FD\":\"CHEN1 SHEN1\",\"68FE\":\"QIONG2\",\"68FF\":\"NIE4\",\"690A\":\"ZUO2\",\"690B\":\"LIANG2\",\"690C\":\"QIANG1\",\"690D\":\"ZHI2\",\"690E\":\"ZHUI1 CHUI2\",\"690F\":\"YA1 YA2\",\"691C\":\"JIAN3\",\"691D\":\"GUI1\",\"691E\":\"XI4\",\"691F\":\"DU2\",\"692A\":\"PENG4\",\"692B\":\"ZHAN3 SHAN4\",\"692D\":\"TUO3\",\"692E\":\"SEN1 SHEN1\",\"692F\":\"DUO2\",\"693A\":\"XI2\",\"693B\":\"YAN4\",\"693C\":\"YAN3\",\"693D\":\"CHUAN2\",\"693E\":\"ZHAN4 JIAN1\",\"693F\":\"CHUN1\",\"694A\":\"YANG2\",\"694B\":\"LA4\",\"694C\":\"YAN2\",\"694D\":\"BEN3\",\"694E\":\"HUN2 HUI1\",\"694F\":\"KUI2\",\"695A\":\"CHU3\",\"695B\":\"HU4 KU3\",\"695C\":\"HU2\",\"695D\":\"LIAN4\",\"695E\":\"LENG2 LENG4\",\"695F\":\"TING2\",\"696A\":\"YE4 DIE2\",\"696B\":\"JI2\",\"696C\":\"JIE2 QIA4\",\"696D\":\"YE4\",\"696E\":\"CHU3 ZHU1\",\"696F\":\"SHUN3\",\"697A\":\"ROU2\",\"697B\":\"HENG2\",\"697C\":\"LOU2\",\"697D\":\"LE4\",\"698D\":\"XIE4\",\"698E\":\"JIA3\",\"698F\":\"YI4\",\"699A\":\"YAO3\",\"699B\":\"ZHEN1\",\"699C\":\"BANG3 BANG4 BENG1 PANG2\",\"699D\":\"SHA1\",\"699E\":\"YUAN2\",\"699F\":\"ZI3\",\"69A0\":\"MING2\",\"69A1\":\"SU4\",\"69A2\":\"JIA4\",\"69A3\":\"YAO2\",\"69A4\":\"JIE2\",\"69A5\":\"HUANG3 HUANG4\",\"69A6\":\"GAN4 GAN1\",\"69A7\":\"FEI3\",\"69A8\":\"ZHA4\",\"69A9\":\"QIAN2\",\"69AA\":\"MA4 MA3\",\"69AB\":\"SUN3\",\"69AC\":\"YUAN2\",\"69AD\":\"XIE4\",\"69AE\":\"RONG2\",\"69AF\":\"SHI2\",\"69B0\":\"ZHI1\",\"69B1\":\"CUI1\",\"69B2\":\"YUN2\",\"69B3\":\"TING2\",\"69B4\":\"LIU2\",\"69B5\":\"RONG2\",\"69B6\":\"TANG2\",\"69B7\":\"QUE4\",\"69B8\":\"ZHAI1\",\"69B9\":\"SI1\",\"69BA\":\"SHENG4\",\"69BB\":\"TA4\",\"69BC\":\"KE4\",\"69BD\":\"XI1\",\"69BE\":\"GU4 GU3\",\"69BF\":\"QI1\",\"69C0\":\"KAO3 GAO3\",\"69C1\":\"GAO3 KAO4 GAO1\",\"69C2\":\"SUN1\",\"69C3\":\"PAN2\",\"69C4\":\"TAO1\",\"69C5\":\"GE2 HE2\",\"69C6\":\"XUN2\",\"69C7\":\"DIAN1\",\"69C8\":\"NOU4\",\"69C9\":\"JI2\",\"69CA\":\"SHUO4\",\"69CB\":\"GOU4\",\"69CC\":\"CHUI2 ZHUI4 DUI1\",\"69CD\":\"QIANG1 CHENG1\",\"69CE\":\"CHA2 CHA1 ZHA1\",\"69CF\":\"QIAN3\",\"69D0\":\"HUAI2\",\"69D1\":\"MEI2\",\"69D2\":\"XU4 CHU4\",\"69D3\":\"GANG4\",\"69D4\":\"GAO1\",\"69D5\":\"ZHUO2 ZHUO1\",\"69D6\":\"TUO4 TUO2\",\"69D8\":\"YANG4\",\"69D9\":\"DIAN1\",\"69DA\":\"JIA3\",\"69DB\":\"JIAN4 KAN3\",\"69DC\":\"ZUI4\",\"69DF\":\"BIN1 BING1\",\"69E0\":\"ZHU1\",\"69E2\":\"XI2\",\"69E3\":\"QI3\",\"69E4\":\"LIAN2\",\"69E5\":\"HUI4\",\"69E6\":\"YONG2\",\"69E7\":\"QIAN4\",\"69E8\":\"GUO3\",\"69E9\":\"GAI4\",\"69EA\":\"GAI4\",\"69EB\":\"TUAN2\",\"69EC\":\"HUA4\",\"69ED\":\"CU4 QI1 SE4\",\"69EE\":\"SEN1 SHEN1\",\"69EF\":\"CUI1\",\"69F0\":\"BENG4\",\"69F1\":\"YOU3 YOU2\",\"69F2\":\"HU2\",\"69F3\":\"JIANG3 JIANG1\",\"69F4\":\"HU4\",\"69F5\":\"HUAN4\",\"69F6\":\"KUI4\",\"69F7\":\"YI4 NIE4\",\"69F8\":\"NIE4\",\"69F9\":\"GAO1\",\"69FA\":\"KANG1\",\"69FB\":\"GUI1\",\"69FC\":\"GUI1\",\"69FD\":\"CAO2 ZAO1\",\"69FE\":\"MAN2 MAN4\",\"69FF\":\"JIN3 QIN2\",\"6A00\":\"DI4\",\"6A01\":\"ZHUANG1 CHONG1\",\"6A02\":\"LE4 YUE4 YAO4 LUO4 LIAO2\",\"6A03\":\"LANG2\",\"6A04\":\"CHEN2\",\"6A05\":\"CONG1 ZONG1\",\"6A06\":\"LI2\",\"6A07\":\"XIU1\",\"6A08\":\"QING2\",\"6A09\":\"SHUANG3\",\"6A0A\":\"FAN2 PAN2 FAN4\",\"6A0B\":\"TONG1\",\"6A0C\":\"GUAN4\",\"6A0D\":\"JI1\",\"6A0E\":\"SUO1\",\"6A0F\":\"LEI3 LEI2\",\"6A10\":\"LU3\",\"6A11\":\"LIANG2\",\"6A12\":\"MI4\",\"6A13\":\"LOU2 LV2\",\"6A14\":\"CHAO2 JIAO3\",\"6A15\":\"SU4\",\"6A16\":\"KE1\",\"6A17\":\"CHU1 SHU1\",\"6A18\":\"TANG2 CHENG1\",\"6A19\":\"BIAO1\",\"6A1A\":\"LU4\",\"6A1B\":\"JIU1\",\"6A1C\":\"SHU4\",\"6A1D\":\"ZHA1\",\"6A1E\":\"SHU1\",\"6A1F\":\"ZHANG1\",\"6A20\":\"MEN2 MAN2\",\"6A21\":\"MO2 MU2\",\"6A22\":\"NIAO3\",\"6A23\":\"YANG4 XIANG4\",\"6A24\":\"TIAO2\",\"6A25\":\"PENG2\",\"6A26\":\"ZHU4\",\"6A27\":\"SHA1\",\"6A28\":\"XI1\",\"6A29\":\"QUAN2\",\"6A2A\":\"HENG2 HENG4 GUANG1 HUANG2 HUANG4\",\"6A2B\":\"JIAN1\",\"6A2C\":\"CONG1 SONG1\",\"6A2F\":\"QIANG2\",\"6A31\":\"YING1\",\"6A32\":\"ER4\",\"6A33\":\"XIN2\",\"6A34\":\"ZHI2\",\"6A35\":\"QIAO2\",\"6A36\":\"ZUI1\",\"6A37\":\"CONG1 CONG2\",\"6A38\":\"PU2 PU3\",\"6A39\":\"SHU4\",\"6A3A\":\"HUA4\",\"6A3B\":\"KUI4\",\"6A3C\":\"ZHEN1\",\"6A3D\":\"ZUN1 ZUN3\",\"6A3E\":\"YUE4\",\"6A3F\":\"ZHAN3 SHAN4\",\"6A40\":\"XI1\",\"6A41\":\"XUN2 CHUN1\",\"6A42\":\"DIAN4\",\"6A43\":\"FA1\",\"6A44\":\"GAN3\",\"6A45\":\"MO2 MU2\",\"6A46\":\"WU3\",\"6A47\":\"QIAO1 QIAO4 CUI4\",\"6A48\":\"NAO2 RAO2\",\"6A49\":\"LIN4\",\"6A4A\":\"LIU2\",\"6A4B\":\"QIAO2\",\"6A4C\":\"XIAN4\",\"6A4D\":\"RUN4\",\"6A4E\":\"FAN2\",\"6A4F\":\"ZHAN3 SHAN3\",\"6A50\":\"TUO2 DU4 LUO4 TUO4\",\"6A51\":\"LAO3 LIAO2\",\"6A52\":\"YUN2\",\"6A53\":\"SHUN4\",\"6A54\":\"TUI2\",\"6A55\":\"CHENG1\",\"6A56\":\"TANG2\",\"6A57\":\"MENG2\",\"6A58\":\"JU2\",\"6A59\":\"CHENG2 CHEN2 DENG4\",\"6A5A\":\"SU4\",\"6A5B\":\"JUE2\",\"6A5C\":\"JUE2\",\"6A5D\":\"TAN1 TAN2\",\"6A5E\":\"HUI4\",\"6A5F\":\"JI1\",\"6A60\":\"NUO3\",\"6A61\":\"XIANG4\",\"6A62\":\"TUO3 DUO3\",\"6A63\":\"NING3\",\"6A64\":\"RUI3\",\"6A65\":\"ZHU1\",\"6A66\":\"CHUANG2 CHONG1 TONG2\",\"6A67\":\"ZENG1\",\"6A68\":\"FEN2\",\"6A69\":\"QIONG2\",\"6A6A\":\"RAN3\",\"6A6B\":\"HENG2 HENG4\",\"6A6C\":\"CEN2\",\"6A6D\":\"GU1\",\"6A6E\":\"LIU3\",\"6A6F\":\"LAO4\",\"6A70\":\"GAO1\",\"6A71\":\"CHU2\",\"6A76\":\"JI2\",\"6A77\":\"DOU1\",\"6A79\":\"LU3\",\"6A7C\":\"YUAN2\",\"6A7D\":\"TA4\",\"6A7E\":\"SHU1\",\"6A7F\":\"JIANG1\",\"6A80\":\"TAN2 SHAN4\",\"6A81\":\"LIN3\",\"6A82\":\"NONG2\",\"6A83\":\"YIN3\",\"6A84\":\"XI2\",\"6A85\":\"SUI4\",\"6A86\":\"SHAN1 SHA1\",\"6A87\":\"ZUI4\",\"6A88\":\"XUAN2\",\"6A89\":\"CHENG1\",\"6A8A\":\"GAN4\",\"6A8B\":\"JU1 JU2\",\"6A8C\":\"ZUI4\",\"6A8D\":\"YI4\",\"6A8E\":\"QIN2\",\"6A8F\":\"PU3 PU2\",\"6A90\":\"YAN2 DAN1\",\"6A91\":\"LEI2 LEI4\",\"6A92\":\"FENG1\",\"6A93\":\"HUI3\",\"6A94\":\"DANG4 DANG3\",\"6A95\":\"JI4 XI4\",\"6A96\":\"SUI4\",\"6A97\":\"BO4 BI4\",\"6A98\":\"BI4\",\"6A99\":\"DING3\",\"6A9A\":\"CHU3\",\"6A9B\":\"ZHUA1\",\"6A9C\":\"GUI4 KUAI4 HUI4\",\"6A9D\":\"JI2\",\"6A9E\":\"JIE3 XIE4\",\"6A9F\":\"JIA3\",\"6AA0\":\"QING2 JING4\",\"6AA1\":\"ZHE4 SHI4\",\"6AA2\":\"JIAN3\",\"6AA3\":\"QIANG2\",\"6AA4\":\"DAO4\",\"6AA5\":\"YI3\",\"6AA6\":\"BIAO3\",\"6AA7\":\"SONG1\",\"6AA8\":\"SHE1\",\"6AA9\":\"LIN3\",\"6AAB\":\"CHA2 SA4\",\"6AAC\":\"MENG2\",\"6AAD\":\"YIN2\",\"6AAE\":\"TAO2 DAO3\",\"6AAF\":\"TAI2\",\"6AB0\":\"MIAN2\",\"6AB1\":\"QI2 JI1\",\"6AB3\":\"BIN1 BING1\",\"6AB4\":\"HUO4\",\"6AB5\":\"JI4 QI3\",\"6AB6\":\"QIAN1\",\"6AB7\":\"MI2\",\"6AB8\":\"NING2\",\"6AB9\":\"YI1\",\"6ABA\":\"GAO3\",\"6ABB\":\"JIAN4 KAN3 XIAN3\",\"6ABC\":\"YIN4 YIN3\",\"6ABD\":\"ER2 NOU4\",\"6ABE\":\"QING3 JIONG3\",\"6ABF\":\"YAN3\",\"6AC0\":\"QI2\",\"6AC1\":\"MI4\",\"6AC2\":\"ZHAO4 ZHUO1\",\"6AC3\":\"GUI4\",\"6AC4\":\"CHUN1\",\"6AC5\":\"JI1\",\"6AC6\":\"KUI2\",\"6AC7\":\"PO2\",\"6AC8\":\"DENG4\",\"6AC9\":\"CHU2\",\"6ACB\":\"MIAN2\",\"6ACC\":\"YOU1\",\"6ACD\":\"ZHI4\",\"6ACE\":\"GUANG4 HUANG3\",\"6ACF\":\"QIAN1\",\"6AD0\":\"LEI3\",\"6AD1\":\"LEI3 LEI2\",\"6AD2\":\"SA4\",\"6AD3\":\"LU3\",\"6AD4\":\"LI4\",\"6AD5\":\"CUAN2\",\"6AD6\":\"LV2\",\"6AD7\":\"MIE4\",\"6AD8\":\"HUI4\",\"6AD9\":\"OU1\",\"6ADA\":\"LV2\",\"6ADB\":\"JIE2 ZHI4\",\"6ADC\":\"GAO1\",\"6ADD\":\"DU2\",\"6ADE\":\"YUAN2\",\"6ADF\":\"LI4 LAO2 YUE4\",\"6AE0\":\"FEI4\",\"6AE1\":\"ZHUO2 ZHU4\",\"6AE2\":\"SOU3\",\"6AE3\":\"LIAN2\",\"6AE5\":\"CHU2\",\"6AE7\":\"ZHU1\",\"6AE8\":\"LU2\",\"6AE9\":\"YAN2\",\"6AEA\":\"LI4\",\"6AEB\":\"ZHU1\",\"6AEC\":\"CHEN4 QIN4 GUAN4\",\"6AED\":\"JIE2 JI4\",\"6AEE\":\"E4\",\"6AEF\":\"SU1\",\"6AF0\":\"HUAI2\",\"6AF1\":\"NIE4\",\"6AF2\":\"YU4\",\"6AF3\":\"LONG2\",\"6AF4\":\"LAI4\",\"6AF6\":\"XIAN3\",\"6AF8\":\"JU3\",\"6AF9\":\"XIAO1\",\"6AFA\":\"LING2\",\"6AFB\":\"YING1\",\"6AFC\":\"JIAN1\",\"6AFD\":\"YIN3\",\"6AFE\":\"YOU2 YOU4\",\"6AFF\":\"YING2\",\"6B00\":\"XIANG1\",\"6B01\":\"NONG2\",\"6B02\":\"BO2\",\"6B03\":\"CHAN2\",\"6B04\":\"LAN2 LIAN4\",\"6B05\":\"JU3\",\"6B06\":\"SHUANG1\",\"6B07\":\"SHE4\",\"6B08\":\"WEI2\",\"6B09\":\"CONG4\",\"6B0A\":\"QUAN2\",\"6B0B\":\"QU2\",\"6B0E\":\"YU4\",\"6B0F\":\"LUO2 LUO3\",\"6B10\":\"LI3 LI4\",\"6B11\":\"ZAN4\",\"6B12\":\"LUAN2\",\"6B13\":\"DANG3\",\"6B14\":\"JUE2\",\"6B16\":\"LAN3\",\"6B17\":\"LAN2\",\"6B18\":\"ZHU3 ZHU2\",\"6B19\":\"LEI2\",\"6B1A\":\"LI3\",\"6B1B\":\"BA4\",\"6B1C\":\"NANG2\",\"6B1D\":\"YU4\",\"6B1E\":\"LING2\",\"6B20\":\"QIAN4 QUE1\",\"6B21\":\"CI4\",\"6B22\":\"HUAN1\",\"6B23\":\"XIN1\",\"6B24\":\"YU2\",\"6B25\":\"YU4\",\"6B26\":\"QIAN1\",\"6B27\":\"OU1 OU3\",\"6B28\":\"XU1\",\"6B29\":\"CHAO1\",\"6B2A\":\"CHU4\",\"6B2B\":\"CHI1\",\"6B2C\":\"KAI4 KE2\",\"6B2D\":\"YI4\",\"6B2E\":\"JUE2\",\"6B2F\":\"XI2\",\"6B30\":\"XU1\",\"6B31\":\"XIA4 HE1\",\"6B32\":\"YU4\",\"6B33\":\"KUAI4\",\"6B34\":\"LANG2\",\"6B35\":\"KUAN3\",\"6B36\":\"SHUO4\",\"6B37\":\"XI1\",\"6B38\":\"AI3 AI1 EI1 EI4\",\"6B39\":\"YI1 QI1\",\"6B3A\":\"QI1\",\"6B3B\":\"XU1 CHUA1 HU1\",\"6B3C\":\"CHI3\",\"6B3D\":\"QIN1 QIN4 YIN2\",\"6B3E\":\"KUAN3 XIN1\",\"6B3F\":\"KAN3\",\"6B40\":\"KUAN3\",\"6B41\":\"KAN3\",\"6B42\":\"CHUAN2 CHUAN3\",\"6B43\":\"SHA4 XIA2\",\"6B45\":\"YIN1 YAN1\",\"6B46\":\"XIN1\",\"6B47\":\"XIE1 YA4\",\"6B48\":\"YU2\",\"6B49\":\"QIAN4\",\"6B4A\":\"XIAO1\",\"6B4B\":\"YI2\",\"6B4C\":\"GE1\",\"6B4D\":\"WU1\",\"6B4E\":\"TAN4\",\"6B4F\":\"JIN4\",\"6B50\":\"OU1 OU3\",\"6B51\":\"HU1\",\"6B52\":\"TI4\",\"6B53\":\"HUAN1\",\"6B54\":\"XU1\",\"6B55\":\"PEN1 PEN4 FEN4\",\"6B56\":\"XI1\",\"6B57\":\"XIAO4\",\"6B58\":\"XU1 CHUA1\",\"6B59\":\"XI1 SHE4 XIE2 XI4\",\"6B5B\":\"HAN1 LIAN3 LIAN4\",\"6B5C\":\"CHU4\",\"6B5D\":\"YI4\",\"6B5E\":\"KAN3\",\"6B5F\":\"YU2\",\"6B60\":\"CHUO4\",\"6B61\":\"HUAN1\",\"6B62\":\"ZHI3\",\"6B63\":\"ZHENG4 ZHENG1\",\"6B64\":\"CI3\",\"6B65\":\"BU4\",\"6B66\":\"WU3\",\"6B67\":\"QI2\",\"6B68\":\"BU4\",\"6B69\":\"BU4\",\"6B6A\":\"WAI1 WAI3\",\"6B6B\":\"JU4\",\"6B6C\":\"QIAN2\",\"6B6D\":\"CHI2\",\"6B6E\":\"SE4\",\"6B6F\":\"CHI3\",\"6B70\":\"SE4 SHA4\",\"6B71\":\"ZHONG3\",\"6B72\":\"SUI4\",\"6B73\":\"SUI4\",\"6B74\":\"LI4\",\"6B75\":\"CUO4\",\"6B76\":\"YU2\",\"6B77\":\"LI4\",\"6B78\":\"GUI1 KUI4\",\"6B79\":\"DAI3 E4 DAI1\",\"6B7A\":\"DAI3\",\"6B7B\":\"SI3\",\"6B7C\":\"JIAN1\",\"6B7D\":\"ZHE2\",\"6B7E\":\"MO4 WEN3\",\"6B7F\":\"MO4\",\"6B80\":\"YAO3 YAO1\",\"6B81\":\"MO4 WEN3\",\"6B82\":\"CU2\",\"6B83\":\"YANG1\",\"6B84\":\"TIAN3\",\"6B85\":\"SHENG1\",\"6B86\":\"DAI4\",\"6B87\":\"SHANG1\",\"6B88\":\"XU4\",\"6B89\":\"XUN4\",\"6B8A\":\"SHU1\",\"6B8B\":\"CAN2\",\"6B8C\":\"JUE2\",\"6B8D\":\"PIAO3 BI4\",\"6B8E\":\"QIA4\",\"6B8F\":\"QIU4\",\"6B90\":\"SU4\",\"6B91\":\"QING2 JING4\",\"6B92\":\"YUN3\",\"6B93\":\"LIAN4\",\"6B94\":\"YI4\",\"6B95\":\"FOU3\",\"6B96\":\"ZHI2 SHI4\",\"6B97\":\"YE4\",\"6B98\":\"CAN2\",\"6B99\":\"HUN1\",\"6B9A\":\"DAN1\",\"6B9B\":\"JI2\",\"6B9C\":\"YE4 DIE2\",\"6B9E\":\"YUN3\",\"6B9F\":\"WEN1\",\"6BA0\":\"CHOU4\",\"6BA1\":\"BIN4\",\"6BA2\":\"TI4 NI4\",\"6BA3\":\"JIN4 JIN3\",\"6BA4\":\"SHANG1\",\"6BA5\":\"YIN2\",\"6BA6\":\"DIAO1\",\"6BA7\":\"CU4\",\"6BA8\":\"HUI4\",\"6BA9\":\"CUAN4\",\"6BAA\":\"YI4\",\"6BAB\":\"DAN1\",\"6BAC\":\"DU4\",\"6BAD\":\"JIANG1\",\"6BAE\":\"LIAN4\",\"6BAF\":\"BIN4\",\"6BB0\":\"DU2\",\"6BB2\":\"JIAN1\",\"6BB3\":\"SHU1\",\"6BB4\":\"OU1\",\"6BB5\":\"DUAN4\",\"6BB6\":\"ZHU4\",\"6BB7\":\"YIN1 YAN1 YIN3\",\"6BB8\":\"QING4\",\"6BB9\":\"YI4\",\"6BBA\":\"SHA1 SA4 SHAI4 SHE4\",\"6BBB\":\"QUE4 KE2 QIAO4\",\"6BBC\":\"KE2 QIAO4\",\"6BBD\":\"YAO2 XIAO2 XIAO4\",\"6BBE\":\"JUN4\",\"6BBF\":\"DIAN4\",\"6BC0\":\"HUI3 HUI4\",\"6BC1\":\"HUI3\",\"6BC2\":\"GU3\",\"6BC3\":\"QUE4\",\"6BC4\":\"JI1\",\"6BC5\":\"YI4\",\"6BC6\":\"OU1 KOU1 QU1\",\"6BC7\":\"HUI3\",\"6BC8\":\"DUAN4\",\"6BC9\":\"YI1\",\"6BCA\":\"XIAO1\",\"6BCB\":\"WU2 MOU2\",\"6BCC\":\"GUAN4\",\"6BCD\":\"MU3 MU2 WU3 WU2\",\"6BCE\":\"MEI3\",\"6BCF\":\"MEI3 MEI4\",\"6BD0\":\"AI3\",\"6BD1\":\"ZUO3 JIE3\",\"6BD2\":\"DU2 DAI4\",\"6BD3\":\"YU4\",\"6BD4\":\"BI3 BI4 PI2 PI3\",\"6BD5\":\"BI4\",\"6BD6\":\"BI4\",\"6BD7\":\"PI2\",\"6BD8\":\"PI2\",\"6BD9\":\"BI4\",\"6BDA\":\"CHAN2\",\"6BDB\":\"MAO2 MAO4\",\"6BDE\":\"PU2\",\"6BE0\":\"JIA1\",\"6BE1\":\"ZHAN1\",\"6BE2\":\"SAI1\",\"6BE3\":\"MU4 MAO4\",\"6BE4\":\"TUO4\",\"6BE5\":\"XUN2\",\"6BE6\":\"ER4 ER3\",\"6BE7\":\"RONG2\",\"6BE8\":\"XIAN3\",\"6BE9\":\"JU2\",\"6BEA\":\"MU2\",\"6BEB\":\"HAO2\",\"6BEC\":\"QIU2\",\"6BED\":\"DOU4\",\"6BEF\":\"TAN3\",\"6BF0\":\"PEI2\",\"6BF1\":\"JU2\",\"6BF2\":\"DUO2\",\"6BF3\":\"CUI4 QIAO1 XIA1\",\"6BF4\":\"BI1\",\"6BF5\":\"SAN1\",\"6BF7\":\"MAO4\",\"6BF8\":\"SUI1 SAI1\",\"6BF9\":\"SHU1 YU2 YU1\",\"6BFA\":\"YU1\",\"6BFB\":\"TUO4\",\"6BFC\":\"HE2\",\"6BFD\":\"JIAN4\",\"6BFE\":\"TA4\",\"6BFF\":\"SAN1\",\"6C00\":\"LV2\",\"6C01\":\"MU2\",\"6C02\":\"MAO2 LI2\",\"6C03\":\"TONG2\",\"6C04\":\"RONG3\",\"6C05\":\"CHANG3\",\"6C06\":\"PU3 BANG3\",\"6C07\":\"LUO2\",\"6C08\":\"ZHAN1\",\"6C09\":\"SAO4\",\"6C0A\":\"ZHAN1\",\"6C0B\":\"MENG2\",\"6C0C\":\"LUO2 LU3\",\"6C0D\":\"QU2\",\"6C0E\":\"DIE2\",\"6C0F\":\"SHI4 ZHI1 JING1\",\"6C10\":\"DI3 DI1 ZHI1\",\"6C11\":\"MIN2\",\"6C12\":\"JUE2\",\"6C13\":\"MANG2 MENG2\",\"6C14\":\"QI4\",\"6C15\":\"PIE1\",\"6C16\":\"NAI3\",\"6C17\":\"QI4\",\"6C18\":\"DAO1\",\"6C19\":\"XIAN1\",\"6C1A\":\"CHUAN1\",\"6C1B\":\"FEN1\",\"6C1C\":\"RI4\",\"6C1D\":\"NEI4\",\"6C1F\":\"FU2\",\"6C20\":\"SHEN1\",\"6C21\":\"DONG1\",\"6C22\":\"QING1\",\"6C23\":\"QI4 XI4\",\"6C24\":\"YIN1 YAN2\",\"6C25\":\"XI1\",\"6C26\":\"HAI4\",\"6C27\":\"YANG3\",\"6C28\":\"AN1\",\"6C29\":\"YA4\",\"6C2A\":\"KE4\",\"6C2B\":\"QING1\",\"6C2C\":\"YA4\",\"6C2D\":\"DONG1\",\"6C2E\":\"DAN4\",\"6C2F\":\"LV4\",\"6C30\":\"QING1 QING2\",\"6C31\":\"YANG3\",\"6C32\":\"YUN1\",\"6C33\":\"YUN1\",\"6C34\":\"SHUI3\",\"6C36\":\"ZHENG3\",\"6C37\":\"BING1\",\"6C38\":\"YONG3\",\"6C39\":\"DANG4\",\"6C3B\":\"LE4\",\"6C3C\":\"NI4\",\"6C3D\":\"TUN3 NIAO4 QIU2\",\"6C3E\":\"FAN4 FAN2 FENG3\",\"6C3F\":\"GUI3\",\"6C40\":\"TING1 DING4 TING4\",\"6C41\":\"ZHI1 XIE2 SHI1\",\"6C42\":\"QIU2\",\"6C43\":\"BIN1 PA4\",\"6C44\":\"ZE4\",\"6C45\":\"MIAN3\",\"6C46\":\"CUAN1\",\"6C47\":\"HUI4\",\"6C48\":\"DIAO1\",\"6C49\":\"YI4 HAN4\",\"6C4A\":\"CHA4\",\"6C4B\":\"ZHUO2 YUE4\",\"6C4C\":\"CHUAN4\",\"6C4D\":\"WAN2\",\"6C4E\":\"FAN4 FENG3\",\"6C4F\":\"DAI4 DA4 TAI4\",\"6C50\":\"XI4 XI1\",\"6C51\":\"TUO1\",\"6C52\":\"MANG2\",\"6C53\":\"QIU2\",\"6C54\":\"QI4\",\"6C55\":\"SHAN4 SHUAN4\",\"6C56\":\"PAI4\",\"6C57\":\"HAN4 HAN2 GAN1\",\"6C58\":\"QIAN1\",\"6C59\":\"WU1 WU4 WA1 YU1\",\"6C5A\":\"WU1 WU4 WA1 YU1\",\"6C5B\":\"XUN4\",\"6C5C\":\"SI4\",\"6C5D\":\"RU3\",\"6C5E\":\"GONG3\",\"6C5F\":\"JIANG1\",\"6C60\":\"CHI2 TUO2 CHE4\",\"6C61\":\"WU1 WU4 WA1 YU1\",\"6C64\":\"TANG1 TANG4 SHANG1 YANG2\",\"6C65\":\"ZHI1\",\"6C66\":\"CHI2\",\"6C67\":\"QIAN1\",\"6C68\":\"MI4\",\"6C69\":\"GU3 YU4 HU2\",\"6C6A\":\"WANG1 WANG3 HONG2\",\"6C6B\":\"QING4\",\"6C6C\":\"JING3\",\"6C6D\":\"RUI4\",\"6C6E\":\"JUN1\",\"6C6F\":\"HONG2\",\"6C70\":\"TAI4\",\"6C71\":\"QUAN3\",\"6C72\":\"JI2\",\"6C73\":\"BIAN4\",\"6C74\":\"BIAN4\",\"6C75\":\"GAN4\",\"6C76\":\"WEN4 MEN2 WEN2 MIN2\",\"6C77\":\"ZHONG1\",\"6C78\":\"FANG1\",\"6C79\":\"XIONG1\",\"6C7A\":\"JUE2\",\"6C7B\":\"HANG3\",\"6C7D\":\"QI4 GAI1 YI3\",\"6C7E\":\"FEN2 PEN2 FEN1\",\"6C7F\":\"XU4\",\"6C80\":\"XU4\",\"6C81\":\"QIN4\",\"6C82\":\"YI2 YIN2\",\"6C83\":\"WO4\",\"6C84\":\"YUN2\",\"6C85\":\"YUAN2\",\"6C86\":\"HANG2 HANG4 KANG4\",\"6C87\":\"YAN3\",\"6C88\":\"CHEN2 SHEN3 TAN2\",\"6C89\":\"CHEN2\",\"6C8A\":\"DAN4\",\"6C8B\":\"YOU2\",\"6C8C\":\"DUN4 TUN2 ZHUAN4 CHUN2\",\"6C8D\":\"HU4\",\"6C8E\":\"HUO4\",\"6C8F\":\"QI1 QIE1 QIE4\",\"6C90\":\"MU4\",\"6C91\":\"ROU2\",\"6C92\":\"MEI2 MO4\",\"6C93\":\"TA4 DA2\",\"6C94\":\"MIAN3\",\"6C95\":\"WU4 MI4\",\"6C96\":\"CHONG1\",\"6C97\":\"TIAN1\",\"6C98\":\"BI3\",\"6C99\":\"SHA1 SHA4 SUO1\",\"6C9A\":\"ZHI3\",\"6C9B\":\"PEI4\",\"6C9C\":\"PAN4\",\"6C9D\":\"ZHUI3\",\"6C9E\":\"ZA1\",\"6C9F\":\"GOU1\",\"6CA0\":\"LIU2\",\"6CA1\":\"MEI2 MO4 ME5\",\"6CA2\":\"ZE2\",\"6CA3\":\"FENG1\",\"6CA4\":\"OU4 OU1\",\"6CA5\":\"LI4\",\"6CA6\":\"LUN2\",\"6CA7\":\"CANG1\",\"6CA8\":\"FENG2 FENG1\",\"6CA9\":\"WEI2\",\"6CAA\":\"HU4\",\"6CAB\":\"MO4\",\"6CAC\":\"MEI4 HUI4\",\"6CAD\":\"SHU4\",\"6CAE\":\"JU1 JU4 JIAN1 ZU3 JU3\",\"6CAF\":\"ZAN3\",\"6CB0\":\"TUO1\",\"6CB1\":\"TUO2 DUO4 CHI2\",\"6CB2\":\"TUO2 DUO4\",\"6CB3\":\"HE2\",\"6CB4\":\"LI4\",\"6CB5\":\"MI3 MI2 NI3\",\"6CB6\":\"YI2\",\"6CB7\":\"FA1\",\"6CB8\":\"FEI4 FU2\",\"6CB9\":\"YOU2 YOU4\",\"6CBA\":\"TIAN2\",\"6CBB\":\"ZHI4 CHI2 YI2\",\"6CBC\":\"ZHAO3\",\"6CBD\":\"GU1 GU3\",\"6CBE\":\"ZHAN1 TIAN1 TIE1 DIAN4 CHAN1\",\"6CBF\":\"YAN2 YAN4\",\"6CC0\":\"SI1\",\"6CC1\":\"KUANG4\",\"6CC2\":\"JIONG3\",\"6CC3\":\"JU4 JU1\",\"6CC4\":\"XIE4 YI4\",\"6CC5\":\"QIU2 YOU1\",\"6CC6\":\"YI1 YI4\",\"6CC7\":\"JIA1\",\"6CC8\":\"ZHONG1\",\"6CC9\":\"QUAN2\",\"6CCA\":\"BO2 PO2 PO1 PO4\",\"6CCB\":\"HUI4\",\"6CCC\":\"MI4 BI4\",\"6CCD\":\"BEN1\",\"6CCE\":\"ZHUO2\",\"6CCF\":\"CHU4\",\"6CD0\":\"LE4\",\"6CD1\":\"YOU3 YOU1\",\"6CD2\":\"GU1\",\"6CD3\":\"HONG2\",\"6CD4\":\"GAN1 HAN4\",\"6CD5\":\"FA3\",\"6CD6\":\"MAO3 MAO2 LIU3\",\"6CD7\":\"SI4\",\"6CD8\":\"HU1\",\"6CD9\":\"PING2 PENG1\",\"6CDA\":\"CI3\",\"6CDB\":\"FAN4 FAN2 FENG3 FA2\",\"6CDC\":\"CHI2 ZHI1 DI4 ZHI4\",\"6CDD\":\"SU4\",\"6CDE\":\"NING4 ZHU3 ZHU4\",\"6CDF\":\"CHENG1\",\"6CE0\":\"LING2 LING3\",\"6CE1\":\"PAO4 PAO2 PAO1\",\"6CE2\":\"BO1 BEI1 BI4\",\"6CE3\":\"QI4 LI4 SE4\",\"6CE4\":\"SI4\",\"6CE5\":\"NI2 NI4 NI3 NIE4 NING4\",\"6CE6\":\"JU2\",\"6CE7\":\"YUE4\",\"6CE8\":\"ZHU4 ZHOU4\",\"6CE9\":\"SHENG1\",\"6CEA\":\"LEI4\",\"6CEB\":\"XUAN4 XUAN2 JUAN1\",\"6CEC\":\"XUE4 JUE2\",\"6CED\":\"FU1 FU2\",\"6CEE\":\"PAN4\",\"6CEF\":\"MIN3 MIAN4\",\"6CF0\":\"TAI4\",\"6CF1\":\"YANG1 YANG3\",\"6CF2\":\"JI3\",\"6CF3\":\"YONG3\",\"6CF4\":\"GUAN4\",\"6CF5\":\"BENG4 LIU2 PIN4\",\"6CF6\":\"XUE2\",\"6CF7\":\"LONG2 SHUANG1\",\"6CF8\":\"LU2\",\"6CFA\":\"BO2 LUO4 PO1\",\"6CFB\":\"XIE4\",\"6CFC\":\"PO1 BO1\",\"6CFD\":\"ZE2 DUO2 SHI4 YI4\",\"6CFE\":\"JING1\",\"6CFF\":\"YIN2\",\"6D00\":\"ZHOU1 PAN2\",\"6D01\":\"JI2 JIE2\",\"6D02\":\"YI4\",\"6D03\":\"HUI1\",\"6D04\":\"HUI2 HUI4\",\"6D05\":\"ZUI3\",\"6D06\":\"CHENG2\",\"6D07\":\"YIN1 YAN1 YE1\",\"6D08\":\"WEI2\",\"6D09\":\"HOU4\",\"6D0A\":\"JIAN4\",\"6D0B\":\"YANG2 XIANG2 YANG3\",\"6D0C\":\"LIE4\",\"6D0D\":\"SI4\",\"6D0E\":\"JI4\",\"6D0F\":\"ER2\",\"6D10\":\"XING2\",\"6D11\":\"FU2 FU4\",\"6D12\":\"SA3 CUI3 XI3 XIAN3 SEN3 XUN4\",\"6D13\":\"SUO3\",\"6D14\":\"ZHI3\",\"6D15\":\"YIN1\",\"6D16\":\"WU2\",\"6D17\":\"XI3 XIAN3\",\"6D18\":\"KAO3\",\"6D19\":\"ZHU1\",\"6D1A\":\"JIANG4 HONG2\",\"6D1B\":\"LUO4\",\"6D1D\":\"AN4\",\"6D1E\":\"DONG4 TONG2\",\"6D1F\":\"YI2 TI4\",\"6D20\":\"MOU2\",\"6D21\":\"LEI3\",\"6D22\":\"YI1\",\"6D23\":\"MI3\",\"6D24\":\"QUAN2\",\"6D25\":\"JIN1\",\"6D26\":\"MO4\",\"6D27\":\"WEI3\",\"6D28\":\"XIAO2\",\"6D29\":\"XIE4\",\"6D2A\":\"HONG2\",\"6D2B\":\"XU4 YI4\",\"6D2C\":\"SHUO4\",\"6D2D\":\"KUANG1\",\"6D2E\":\"TAO2 YAO2 DAO4 TAO1\",\"6D2F\":\"QIE4 JIE2\",\"6D30\":\"JU4\",\"6D31\":\"ER3\",\"6D32\":\"ZHOU1\",\"6D33\":\"RU4 RU2\",\"6D34\":\"PING2\",\"6D35\":\"XUN2 XUAN4\",\"6D36\":\"XIONG1\",\"6D37\":\"ZHI4\",\"6D38\":\"GUANG1 HUANG2\",\"6D39\":\"HUAN2\",\"6D3A\":\"MING2\",\"6D3B\":\"HUO2 GUO1\",\"6D3C\":\"WA1 GUI1\",\"6D3D\":\"QIA4 HE2 XIA2\",\"6D3E\":\"PAI4 MAI4 BAI4 PA1\",\"6D3F\":\"WU1\",\"6D40\":\"QU3\",\"6D41\":\"LIU2\",\"6D42\":\"YI4\",\"6D43\":\"JIA2 JIA1\",\"6D44\":\"JING4\",\"6D45\":\"QIAN3\",\"6D46\":\"JIANG1 JIANG4\",\"6D47\":\"JIAO1 AO4\",\"6D48\":\"CHENG2 ZHEN1\",\"6D49\":\"SHI1\",\"6D4A\":\"ZHUO2\",\"6D4B\":\"CE4\",\"6D4D\":\"KUAI4\",\"6D4E\":\"JI4 JI3\",\"6D4F\":\"LIU2\",\"6D50\":\"CHAN3\",\"6D51\":\"HUN2 HUN4 GUN3\",\"6D52\":\"HU3\",\"6D53\":\"NONG2\",\"6D54\":\"XUN2\",\"6D55\":\"JIN4\",\"6D56\":\"LIE4\",\"6D57\":\"QIU2\",\"6D58\":\"WEI3\",\"6D59\":\"ZHE4\",\"6D5A\":\"JUN4 XUN4 CUN2\",\"6D5B\":\"HAN4 HAN2\",\"6D5C\":\"BANG1 BIN1\",\"6D5D\":\"MANG2\",\"6D5E\":\"ZHUO2\",\"6D5F\":\"YOU2 DI2\",\"6D60\":\"XI1\",\"6D61\":\"BO2\",\"6D62\":\"DOU4\",\"6D63\":\"WAN3 GUAN3 HUAN4\",\"6D64\":\"HONG2\",\"6D65\":\"YI4 YA4\",\"6D66\":\"PU3\",\"6D67\":\"YING3\",\"6D68\":\"LAN3\",\"6D69\":\"HAO4 GE2 GAO3\",\"6D6A\":\"LANG4 LANG2\",\"6D6B\":\"HAN3\",\"6D6C\":\"LI3\",\"6D6D\":\"GENG1\",\"6D6E\":\"FU2\",\"6D6F\":\"WU2\",\"6D70\":\"LIAN4 LI4\",\"6D71\":\"CHUN2\",\"6D72\":\"FENG2\",\"6D73\":\"YI4\",\"6D74\":\"YU4\",\"6D75\":\"TONG2\",\"6D76\":\"LAO2\",\"6D77\":\"HAI3\",\"6D78\":\"JIN4 QIN1\",\"6D79\":\"JIA2 JIA1\",\"6D7A\":\"CHONG1\",\"6D7B\":\"WENG3\",\"6D7C\":\"MEI3\",\"6D7D\":\"SUI1\",\"6D7E\":\"CHENG1\",\"6D7F\":\"PEI4\",\"6D80\":\"XIAN4\",\"6D81\":\"SHEN4\",\"6D82\":\"TU2\",\"6D83\":\"KUN4\",\"6D84\":\"PIN1\",\"6D85\":\"NIE4\",\"6D86\":\"HAN4\",\"6D87\":\"JING1 QING3\",\"6D88\":\"XIAO1\",\"6D89\":\"SHE4 DIE2\",\"6D8A\":\"NIAN3 REN3 NIAN4 LIAN3\",\"6D8B\":\"TU1\",\"6D8C\":\"YONG3 CHONG1\",\"6D8D\":\"XIAO4\",\"6D8E\":\"XIAN2 YAN4 DIAN4\",\"6D8F\":\"TING3\",\"6D90\":\"E2\",\"6D91\":\"SU4 SOU1 SHU4\",\"6D92\":\"TUN1\",\"6D93\":\"JUAN1 YUAN4 XUAN4\",\"6D94\":\"CEN2 QIAN2 ZAN4\",\"6D95\":\"TI4\",\"6D96\":\"LI4\",\"6D97\":\"SHUI4\",\"6D98\":\"SI4\",\"6D99\":\"LEI4\",\"6D9A\":\"SHUI4\",\"6D9B\":\"TAO1 TAO2\",\"6D9C\":\"DU2\",\"6D9D\":\"LAO4 LAO2\",\"6D9E\":\"LAI2\",\"6D9F\":\"LIAN2\",\"6DA0\":\"WEI2\",\"6DA1\":\"WO1 GUO1\",\"6DA2\":\"YUN2\",\"6DA3\":\"HUAN4\",\"6DA4\":\"DI2\",\"6DA6\":\"RUN4\",\"6DA7\":\"JIAN4\",\"6DA8\":\"ZHANG3 ZHANG4\",\"6DA9\":\"SE4\",\"6DAA\":\"FU2 POU2\",\"6DAB\":\"GUAN4\",\"6DAC\":\"XING4\",\"6DAD\":\"SHOU4\",\"6DAE\":\"SHUAN4 SHUA1\",\"6DAF\":\"YA2\",\"6DB0\":\"CHUO4\",\"6DB1\":\"ZHANG4\",\"6DB2\":\"YE4 YI4 SHI4\",\"6DB3\":\"KONG1\",\"6DB4\":\"WO4 WAN3\",\"6DB5\":\"HAN2 HAN4\",\"6DB6\":\"TUO1\",\"6DB7\":\"DONG1 DONG4\",\"6DB8\":\"HE2 HAO4\",\"6DB9\":\"WO1\",\"6DBA\":\"JU1\",\"6DBB\":\"GAN4\",\"6DBC\":\"LIANG2 LIANG4\",\"6DBD\":\"HUN1\",\"6DBE\":\"TA4\",\"6DBF\":\"ZHUO1 ZHUO2\",\"6DC0\":\"DIAN4\",\"6DC1\":\"QIE4\",\"6DC2\":\"DE2\",\"6DC3\":\"JUAN4\",\"6DC4\":\"ZI1\",\"6DC5\":\"XI1\",\"6DC6\":\"YAO2 XIAO2\",\"6DC7\":\"QI2\",\"6DC8\":\"GU3\",\"6DC9\":\"GUO3\",\"6DCA\":\"HAN4 YAN1 YAN3 HAN2\",\"6DCB\":\"LIN2 LIN4\",\"6DCC\":\"TANG3 CHANG4 CHANG3\",\"6DCD\":\"ZHOU1\",\"6DCE\":\"PENG3\",\"6DCF\":\"HAO4\",\"6DD0\":\"CHANG1\",\"6DD1\":\"SHU2 SHU1 CHU4\",\"6DD2\":\"QI1\",\"6DD3\":\"FANG1\",\"6DD4\":\"CHI4\",\"6DD5\":\"LU4\",\"6DD6\":\"NAO4 CHUO4 ZHUO1 ZHAO4\",\"6DD7\":\"JU2\",\"6DD8\":\"TAO2\",\"6DD9\":\"CONG2 SHUANG4\",\"6DDA\":\"LEI4 LI4\",\"6DDB\":\"ZHI4 ZHE4\",\"6DDC\":\"PENG2 PING2\",\"6DDD\":\"FEI2\",\"6DDE\":\"SONG1 SONG4\",\"6DDF\":\"TIAN3\",\"6DE0\":\"PI4 PEI4\",\"6DE1\":\"DAN4 TAN2 YAN3 YAN4\",\"6DE2\":\"YU4 XU4\",\"6DE3\":\"NI2\",\"6DE4\":\"YU1\",\"6DE5\":\"LU4\",\"6DE6\":\"GAN4\",\"6DE7\":\"MI4\",\"6DE8\":\"JING4\",\"6DE9\":\"LING2\",\"6DEA\":\"LUN2 LUN3 GUAN1\",\"6DEB\":\"YIN2 YAN4 YAO2\",\"6DEC\":\"CUI4 ZU2\",\"6DED\":\"QU2\",\"6DEE\":\"HUAI2\",\"6DEF\":\"YU4\",\"6DF0\":\"NIAN3 SHEN3 NA4 NIAN4 LIAN3\",\"6DF1\":\"SHEN1\",\"6DF2\":\"PIAO2\",\"6DF3\":\"CHUN2 ZHUN1 ZHUN3\",\"6DF4\":\"WA4 HU1\",\"6DF5\":\"YUAN1\",\"6DF6\":\"LAI2\",\"6DF7\":\"HUN4 HUN3 HUN2 GUN3 KUN1\",\"6DF8\":\"QING1\",\"6DF9\":\"YAN1 YAN3\",\"6DFA\":\"QIAN3 JIAN1 JIAN4 CAN2 ZAN4\",\"6DFB\":\"TIAN1 TIAN4\",\"6DFC\":\"MIAO3\",\"6DFD\":\"ZHI3\",\"6DFE\":\"YIN3\",\"6DFF\":\"MI4\",\"6E00\":\"BEN1\",\"6E01\":\"YUAN1\",\"6E02\":\"WEN4\",\"6E03\":\"RE4 RUO4\",\"6E04\":\"FEI1\",\"6E05\":\"QING1 QING4\",\"6E06\":\"YUAN1\",\"6E07\":\"KE3\",\"6E08\":\"JI4\",\"6E09\":\"SHE4 DIE2\",\"6E0A\":\"YUAN1\",\"6E0C\":\"LU4\",\"6E0D\":\"ZI4\",\"6E0E\":\"DU2 DOU4\",\"6E10\":\"JIAN4 JIAN1 CHAN2 QIAN2\",\"6E11\":\"MIN3 MIAN3 SHENG2\",\"6E12\":\"PI4\",\"6E14\":\"YU2\",\"6E15\":\"YUAN1\",\"6E16\":\"SHEN3\",\"6E17\":\"SHEN4 QIN1\",\"6E18\":\"ROU2\",\"6E19\":\"HUAN4 HUI4\",\"6E1A\":\"ZHU3\",\"6E1B\":\"JIAN3\",\"6E1C\":\"NUAN3\",\"6E1D\":\"YU2\",\"6E1E\":\"QIU2\",\"6E1F\":\"TING2\",\"6E20\":\"QU2 JU4\",\"6E21\":\"DU4\",\"6E22\":\"FENG2 FENG1\",\"6E23\":\"ZHA1\",\"6E24\":\"BO2\",\"6E25\":\"WO4 OU4 WU1\",\"6E26\":\"WO1 GUO1\",\"6E27\":\"DI4\",\"6E28\":\"WEI1 WEI3\",\"6E29\":\"WEN1 YUN4\",\"6E2A\":\"RU2\",\"6E2B\":\"XIE4 DIE2 ZHA2 YI4 QIE4\",\"6E2C\":\"CE4\",\"6E2D\":\"WEI4\",\"6E2E\":\"GE1\",\"6E2F\":\"GANG3 HONG4\",\"6E30\":\"YAN3 YAN1\",\"6E31\":\"HONG2\",\"6E32\":\"XUAN4\",\"6E33\":\"MI3 ER3\",\"6E34\":\"KE3 HE2 JIE2 KAI4\",\"6E35\":\"MAO2\",\"6E36\":\"YING1\",\"6E37\":\"YAN3\",\"6E38\":\"YOU2 LIU2\",\"6E39\":\"HONG1 QING4\",\"6E3A\":\"MIAO3\",\"6E3B\":\"XING3 SHENG4\",\"6E3C\":\"MEI3\",\"6E3D\":\"ZAI1\",\"6E3E\":\"HUN2 HUN4 GUN3\",\"6E3F\":\"NAI4\",\"6E40\":\"KUI2\",\"6E41\":\"SHI2\",\"6E42\":\"E4\",\"6E43\":\"PAI4 BA2\",\"6E44\":\"MEI2\",\"6E45\":\"LIAN4\",\"6E46\":\"QI4\",\"6E47\":\"QI4\",\"6E48\":\"MEI2\",\"6E49\":\"TIAN2\",\"6E4A\":\"COU4\",\"6E4B\":\"WEI2\",\"6E4C\":\"CAN1\",\"6E4D\":\"TUAN1 ZHUAN1\",\"6E4E\":\"MIAN3\",\"6E4F\":\"HUI4\",\"6E50\":\"MO4\",\"6E51\":\"XU3 XU1\",\"6E52\":\"JI2\",\"6E53\":\"PEN2 PEN4\",\"6E54\":\"JIAN1 JIAN4 ZAN4 ZHAN3\",\"6E55\":\"JIAN3\",\"6E56\":\"HU2\",\"6E57\":\"FENG4\",\"6E58\":\"XIANG1\",\"6E59\":\"YI4\",\"6E5A\":\"YIN4\",\"6E5B\":\"ZHAN4 CHEN2 DAN1 JIAN1 TAN2 JIN4\",\"6E5C\":\"SHI2\",\"6E5D\":\"JIE1\",\"6E5E\":\"CHENG2 ZHEN1 CHENG1\",\"6E5F\":\"HUANG2 KUANG4\",\"6E60\":\"TAN4\",\"6E61\":\"YU2\",\"6E62\":\"BI4\",\"6E63\":\"MIN3 HUN1\",\"6E64\":\"SHI1\",\"6E65\":\"TU2\",\"6E66\":\"SHENG1\",\"6E67\":\"YONG3\",\"6E68\":\"QU4 JU2\",\"6E69\":\"ZHONG4 DONG4\",\"6E6B\":\"JIAO3 JIU4 JIU1 QIU1 QIU4\",\"6E6C\":\"JIAO3\",\"6E6E\":\"YIN1 YAN1\",\"6E6F\":\"TANG1 TANG4 SHANG1 YANG2\",\"6E70\":\"LONG2\",\"6E71\":\"HUO4\",\"6E72\":\"YUAN2\",\"6E73\":\"NAN3\",\"6E74\":\"BAN4\",\"6E75\":\"YOU3\",\"6E76\":\"QUAN2\",\"6E77\":\"CHUI2\",\"6E78\":\"LIANG4\",\"6E79\":\"CHAN2\",\"6E7A\":\"YAN2\",\"6E7B\":\"CHUN2 ZHUN1\",\"6E7C\":\"NIE4\",\"6E7D\":\"ZI1\",\"6E7E\":\"WAN1\",\"6E7F\":\"SHI1 QI4\",\"6E80\":\"MAN3\",\"6E81\":\"YING2\",\"6E83\":\"KUI4\",\"6E85\":\"JIAN4 JIAN1\",\"6E86\":\"XU4\",\"6E87\":\"LV3 LOU2\",\"6E88\":\"GUI1 WEI2\",\"6E89\":\"GAI4 XIE4\",\"6E8C\":\"PO1\",\"6E8D\":\"JIN4\",\"6E8E\":\"GUI4\",\"6E8F\":\"TANG2\",\"6E90\":\"YUAN2\",\"6E91\":\"SUO3\",\"6E92\":\"YUAN2\",\"6E93\":\"LIAN2 NIAN2 LIAN3\",\"6E94\":\"YAO3\",\"6E95\":\"MENG4\",\"6E96\":\"ZHUN3\",\"6E97\":\"SHENG2\",\"6E98\":\"KE4 KAI4\",\"6E99\":\"TAI4\",\"6E9A\":\"DA2\",\"6E9B\":\"WA1\",\"6E9C\":\"LIU1 LIU4 LIU2\",\"6E9D\":\"GOU1 GANG3 KOU4\",\"6E9E\":\"SAO1\",\"6E9F\":\"MING2 MING3 MI4\",\"6EA0\":\"ZHA4 ZHA1\",\"6EA1\":\"SHI2\",\"6EA2\":\"YI4\",\"6EA3\":\"LUN2\",\"6EA4\":\"MA3\",\"6EA5\":\"PU3 FU1 BU4 BO2 PO4\",\"6EA6\":\"WEI2\",\"6EA7\":\"LI4\",\"6EA8\":\"CAI2\",\"6EA9\":\"WU4\",\"6EAA\":\"XI1 QI1\",\"6EAB\":\"WEN1\",\"6EAC\":\"QIANG1\",\"6EAD\":\"ZE2 CE4\",\"6EAE\":\"SHI1\",\"6EAF\":\"SU4 SHUO4\",\"6EB0\":\"YI1\",\"6EB1\":\"ZHEN1 QIN2\",\"6EB2\":\"SOU1 SOU3 SHAO1\",\"6EB3\":\"YUN2\",\"6EB4\":\"XIU4\",\"6EB5\":\"YIN1\",\"6EB6\":\"RONG2\",\"6EB7\":\"HUN4 HUN2\",\"6EB8\":\"SU4\",\"6EB9\":\"SU4 SUO4\",\"6EBA\":\"NI4 NIAO4\",\"6EBB\":\"TA4 TA1\",\"6EBC\":\"SHI1 QI4\",\"6EBD\":\"RU4\",\"6EBE\":\"WEI1\",\"6EBF\":\"PAN4\",\"6EC0\":\"CHU4 XU4\",\"6EC1\":\"CHU2\",\"6EC2\":\"PANG1\",\"6EC3\":\"WENG3 WENG1\",\"6EC4\":\"CANG1\",\"6EC5\":\"MIE4\",\"6EC6\":\"HE2 GE2\",\"6EC7\":\"DIAN1 TIAN2 ZHEN1\",\"6EC8\":\"HAO4\",\"6EC9\":\"HUANG3 HUANG4\",\"6ECA\":\"XI4\",\"6ECB\":\"ZI1 CI2\",\"6ECC\":\"DI2\",\"6ECD\":\"ZHI3 ZHI4\",\"6ECE\":\"XING2 YING1 YING2\",\"6ECF\":\"FU3\",\"6ED0\":\"JIE2\",\"6ED1\":\"HUA2 GU3\",\"6ED2\":\"GE1\",\"6ED3\":\"ZI3\",\"6ED4\":\"TAO1\",\"6ED5\":\"TENG2\",\"6ED6\":\"SUI1\",\"6ED7\":\"BI3 BI4\",\"6ED8\":\"JIAO4\",\"6ED9\":\"HUI4\",\"6EDA\":\"GUN3\",\"6EDB\":\"YIN2 YAN4 YAO2\",\"6EDC\":\"GAO1 ZE4 HAO2\",\"6EDD\":\"LONG2 SHUANG1\",\"6EDE\":\"ZHI4\",\"6EDF\":\"YAN4\",\"6EE0\":\"SHE4\",\"6EE1\":\"MAN3 MEN4\",\"6EE2\":\"YING4 YING2\",\"6EE3\":\"CHUN2\",\"6EE4\":\"LV4\",\"6EE5\":\"LAN4\",\"6EE6\":\"LUAN2\",\"6EE8\":\"BIN1\",\"6EE9\":\"TAN1\",\"6EEA\":\"YU4\",\"6EEB\":\"SOU3 XIU1 XIU3\",\"6EEC\":\"HU4\",\"6EED\":\"BI4\",\"6EEE\":\"BIAO1\",\"6EEF\":\"ZHI4 CHI4\",\"6EF0\":\"JIANG3\",\"6EF1\":\"KOU4\",\"6EF2\":\"SHEN4 QIN1 SEN1 LIN2\",\"6EF3\":\"SHANG1\",\"6EF4\":\"DI1\",\"6EF5\":\"MI4\",\"6EF6\":\"AO2\",\"6EF7\":\"LU3\",\"6EF8\":\"HU3 XU3\",\"6EF9\":\"HU1 HU3\",\"6EFA\":\"YOU2 DI2\",\"6EFB\":\"CHAN3\",\"6EFC\":\"FAN4\",\"6EFD\":\"YONG2 RONG2\",\"6EFE\":\"GUN3\",\"6EFF\":\"MAN3 MEN4\",\"6F00\":\"QING4\",\"6F01\":\"YU2\",\"6F02\":\"PIAO1 PIAO3 PIAO4 BIAO1\",\"6F03\":\"JI2\",\"6F04\":\"YA2\",\"6F05\":\"JIAO3\",\"6F06\":\"QI1\",\"6F07\":\"XI3\",\"6F08\":\"JI4\",\"6F09\":\"LU4\",\"6F0A\":\"LV3 LOU2\",\"6F0B\":\"LONG2\",\"6F0C\":\"JIN3\",\"6F0D\":\"GUO2\",\"6F0E\":\"CONG2 SONG3\",\"6F0F\":\"LOU4 LOU2\",\"6F10\":\"ZHI2\",\"6F11\":\"GAI4\",\"6F12\":\"QIANG2\",\"6F13\":\"LI2\",\"6F14\":\"YAN3 YAN4\",\"6F15\":\"CAO2 CAO4\",\"6F16\":\"JIAO4\",\"6F17\":\"CONG1\",\"6F18\":\"CHUN2 QUN2\",\"6F19\":\"TUAN2\",\"6F1A\":\"OU4 OU1\",\"6F1B\":\"TENG2\",\"6F1C\":\"YE3\",\"6F1D\":\"XI2\",\"6F1E\":\"MI4\",\"6F1F\":\"TANG2\",\"6F20\":\"MO4\",\"6F21\":\"SHANG1\",\"6F22\":\"HAN4 TAN1\",\"6F23\":\"LIAN2 LAN2\",\"6F24\":\"LAN3\",\"6F25\":\"WA1\",\"6F26\":\"LI2\",\"6F27\":\"QIAN2 GAN1\",\"6F28\":\"FENG2\",\"6F29\":\"XUAN2 XUAN4\",\"6F2A\":\"YI1\",\"6F2B\":\"MAN4 MAN2\",\"6F2C\":\"ZI4 SE4 QI4\",\"6F2D\":\"MANG3\",\"6F2E\":\"KANG1\",\"6F2F\":\"TA4 LUO4 LEI3\",\"6F30\":\"PENG1\",\"6F31\":\"SHU4 SOU4\",\"6F32\":\"ZHANG3 ZHANG4 ZHANG1\",\"6F33\":\"ZHANG1\",\"6F34\":\"CHONG2\",\"6F35\":\"XU4\",\"6F36\":\"HUAN4\",\"6F37\":\"KUO4\",\"6F38\":\"JIAN4 CHAN2 JIAN1 QIAN2\",\"6F39\":\"YAN1\",\"6F3A\":\"CHUANG3\",\"6F3B\":\"LIAO2 LIU2\",\"6F3C\":\"CUI3\",\"6F3D\":\"TI2\",\"6F3E\":\"YANG4 YANG2\",\"6F3F\":\"JIANG1 JIANG4\",\"6F40\":\"CONG2\",\"6F41\":\"YING3\",\"6F42\":\"HONG2\",\"6F43\":\"XUN2\",\"6F44\":\"SHU4 SOU4\",\"6F45\":\"GUAN4 HUAN4\",\"6F46\":\"YING2\",\"6F47\":\"XIAO1\",\"6F4A\":\"XU4\",\"6F4B\":\"LIAN4\",\"6F4C\":\"ZHI4\",\"6F4D\":\"WEI2\",\"6F4E\":\"PI4 PIE1\",\"6F4F\":\"JUE2 YU4\",\"6F50\":\"JIAO4\",\"6F51\":\"PO1 BO1\",\"6F52\":\"DANG4\",\"6F53\":\"HUI4\",\"6F54\":\"JIE2\",\"6F55\":\"WU3\",\"6F56\":\"PA2\",\"6F57\":\"JI2\",\"6F58\":\"PAN1 PAN2 FAN1 PAN4 BO1\",\"6F59\":\"GUI2 WEI2 GUI1\",\"6F5A\":\"XIAO1\",\"6F5B\":\"QIAN2\",\"6F5C\":\"QIAN2\",\"6F5D\":\"XI1 XI4\",\"6F5E\":\"LU4\",\"6F5F\":\"XI4\",\"6F60\":\"SUN4 XUN4 XUAN4\",\"6F61\":\"DUN4\",\"6F62\":\"HUANG2 HUANG3 HUANG4 GUANG1\",\"6F63\":\"MIN3\",\"6F64\":\"RUN4\",\"6F65\":\"SU4\",\"6F66\":\"LAO3 LAO4 LAO2 LIAO2 LIAO3\",\"6F67\":\"ZHEN1\",\"6F68\":\"ZHONG1\",\"6F69\":\"YI4\",\"6F6A\":\"DI2\",\"6F6B\":\"WAN1\",\"6F6C\":\"DAN4 SHAN4\",\"6F6D\":\"TAN2 XUN2 YIN3 DAN4\",\"6F6E\":\"CHAO2\",\"6F6F\":\"XUN2 YIN2\",\"6F70\":\"KUI4 XIE4\",\"6F72\":\"SHAO4\",\"6F73\":\"TU2\",\"6F74\":\"ZHU1\",\"6F75\":\"SAN4 SA3\",\"6F76\":\"HEI1\",\"6F77\":\"BI3 BI4\",\"6F78\":\"SHAN1\",\"6F79\":\"CHAN2\",\"6F7A\":\"CHAN2\",\"6F7B\":\"SHU3\",\"6F7C\":\"TONG2 CHONG1 ZHONG1\",\"6F7D\":\"PU3\",\"6F7E\":\"LIN2\",\"6F7F\":\"WEI2\",\"6F80\":\"SE4\",\"6F81\":\"SE4\",\"6F82\":\"CHENG2\",\"6F83\":\"JIONG4\",\"6F84\":\"CHENG2 DENG4\",\"6F85\":\"HUA4\",\"6F86\":\"JIAO1 AO4 NAO4\",\"6F87\":\"LAO4 LAO2\",\"6F88\":\"CHE4\",\"6F89\":\"GAN3 HAN4\",\"6F8A\":\"CUN1\",\"6F8B\":\"HENG4 JING3\",\"6F8C\":\"SI1 XI1\",\"6F8D\":\"SHU4 ZHU4\",\"6F8E\":\"PENG2 PENG1\",\"6F8F\":\"HAN4\",\"6F90\":\"YUN2\",\"6F91\":\"LIU4 LIU1 LIU2\",\"6F92\":\"HONG4 HONG3 GONG3\",\"6F93\":\"FU2\",\"6F94\":\"HAO4\",\"6F95\":\"HE2\",\"6F96\":\"XIAN1\",\"6F97\":\"JIAN4\",\"6F98\":\"SHAN1\",\"6F99\":\"XI4\",\"6F9C\":\"LAN2\",\"6F9E\":\"YU2\",\"6F9F\":\"LIN3\",\"6FA0\":\"MIAN3 SHENG2 MIN3\",\"6FA1\":\"ZAO3 CAO1\",\"6FA2\":\"DANG1\",\"6FA3\":\"HUAN3 HUAN4 HAN4 WAN3 GUAN3\",\"6FA4\":\"ZE2 DUO2 SHI4 YI4\",\"6FA5\":\"XIE4\",\"6FA6\":\"YU4\",\"6FA7\":\"LI3\",\"6FA8\":\"SHI4\",\"6FA9\":\"XUE2 XIAO4\",\"6FAA\":\"LING2\",\"6FAB\":\"MAN4\",\"6FAC\":\"ZI1\",\"6FAD\":\"YONG1\",\"6FAE\":\"KUAI4 HUI4 HUA2\",\"6FAF\":\"CAN4\",\"6FB0\":\"LIAN4\",\"6FB1\":\"DIAN4\",\"6FB2\":\"YE4\",\"6FB3\":\"AO4 YU4\",\"6FB4\":\"HUAN2\",\"6FB5\":\"ZHEN1\",\"6FB6\":\"CHAN2 DAN4 ZHAN1\",\"6FB7\":\"MAN4\",\"6FB8\":\"DAN3\",\"6FB9\":\"DAN4 DAN2 SHAN4 TAN2 DAN1\",\"6FBA\":\"YI4\",\"6FBB\":\"SUI4\",\"6FBC\":\"PI4\",\"6FBD\":\"JU4\",\"6FBE\":\"TA4\",\"6FBF\":\"QIN2\",\"6FC0\":\"JI1 JIAO4 JIAO1\",\"6FC1\":\"ZHUO2\",\"6FC2\":\"LIAN2 XIAN3\",\"6FC3\":\"NONG2\",\"6FC4\":\"GUO1 WO1\",\"6FC5\":\"JIN4\",\"6FC6\":\"FEN2 FEN4 PEN1\",\"6FC7\":\"SE4\",\"6FC8\":\"JI2\",\"6FC9\":\"SUI1\",\"6FCA\":\"HUI4 HUO4 WEI4\",\"6FCB\":\"CHU3\",\"6FCC\":\"TA4\",\"6FCD\":\"SONG1\",\"6FCE\":\"DING3 TING4\",\"6FD0\":\"ZHU3\",\"6FD1\":\"LAI4\",\"6FD2\":\"BIN1\",\"6FD3\":\"LIAN2\",\"6FD4\":\"MI3 MI2 NI3\",\"6FD5\":\"SHI1 QI4 TA4 XI2\",\"6FD6\":\"SHU4\",\"6FD7\":\"MI4\",\"6FD8\":\"NING4 NING2 NI4\",\"6FD9\":\"YING2 YING4\",\"6FDA\":\"YING2\",\"6FDB\":\"MENG2\",\"6FDC\":\"JIN4\",\"6FDD\":\"QI2\",\"6FDE\":\"PI4 BI4\",\"6FDF\":\"JI4 JI3 QI2\",\"6FE0\":\"HAO2\",\"6FE1\":\"RU2 NUAN2 RUAN3 ER2 NUO4\",\"6FE2\":\"ZUI3\",\"6FE3\":\"WO4\",\"6FE4\":\"TAO1 TAO2 CHAO2 SHOU4 DAO4\",\"6FE5\":\"YIN4\",\"6FE6\":\"YIN3 XI1 YIN1\",\"6FE7\":\"DUI4\",\"6FE8\":\"CI2\",\"6FE9\":\"HUO4 HU4\",\"6FEA\":\"JING4\",\"6FEB\":\"LAN4 JIAN4 LAN3 LAN2\",\"6FEC\":\"JUN4\",\"6FED\":\"AI4\",\"6FEE\":\"PU2 PU1\",\"6FEF\":\"ZHUO2 ZHAO4 SHUO4\",\"6FF0\":\"WEI2\",\"6FF1\":\"BIN1\",\"6FF2\":\"GU3\",\"6FF3\":\"QIAN2\",\"6FF4\":\"XING2 YING2\",\"6FF6\":\"KUO4\",\"6FF7\":\"FEI4\",\"6FFA\":\"JIAN4 JIAN1 ZAN4\",\"6FFB\":\"WEI3 DUI4\",\"6FFC\":\"LUO4 BO2 PO1 LI4\",\"6FFD\":\"ZAN4 CUAN2 QIAN2 ZA1\",\"6FFE\":\"LV4\",\"6FFF\":\"LI4\",\"700A\":\"PAN2\",\"700B\":\"SHEN3 CHEN4 PAN2\",\"700C\":\"BIAO1\",\"700D\":\"CHAN2\",\"700E\":\"MO4\",\"700F\":\"LIU2 LIU1\",\"701A\":\"HAN4\",\"701B\":\"YING2\",\"701C\":\"YONG1 RONG2\",\"701D\":\"LI4\",\"701E\":\"JING4\",\"701F\":\"XIAO1\",\"702A\":\"FAN2\",\"702B\":\"HU2\",\"702C\":\"LAI4\",\"702F\":\"YING2\",\"703A\":\"CHAN2\",\"703B\":\"DAI4\",\"703C\":\"RANG2 RANG4\",\"703D\":\"JIAN3\",\"703E\":\"LAN2\",\"703F\":\"FAN2\",\"704A\":\"QIAN2\",\"704B\":\"FA3\",\"704C\":\"GUAN4 HUAN4\",\"704D\":\"QUE4\",\"704E\":\"YAN4\",\"704F\":\"HAO4\",\"705A\":\"JIAO3\",\"705B\":\"CHAN3\",\"705D\":\"HAO4\",\"705E\":\"BA4\",\"705F\":\"ZHU2\",\"706A\":\"YU4\",\"706B\":\"HUO3 HUO1\",\"706C\":\"BIAO1 HOU3\",\"706D\":\"MIE4\",\"706E\":\"GUANG1\",\"706F\":\"DENG1\",\"707A\":\"XIE4\",\"707B\":\"CHI4\",\"707C\":\"ZHUO2\",\"707D\":\"ZAI1\",\"707E\":\"ZAI1\",\"707F\":\"CAN4\",\"708A\":\"CHUI1\",\"708B\":\"PI1\",\"708C\":\"KAI4\",\"708D\":\"PAN4\",\"708E\":\"YAN2 YAN4 TAN2\",\"708F\":\"KAI4\",\"709B\":\"GUANG1 GUANG4\",\"709C\":\"WEI3\",\"709D\":\"QIANG4\",\"709F\":\"DA2\",\"70A0\":\"XIA2\",\"70A1\":\"ZHENG1\",\"70A2\":\"ZHU2\",\"70A3\":\"KE3\",\"70A4\":\"ZHAO4 ZHAO1\",\"70A5\":\"FU2\",\"70A6\":\"BA2\",\"70A7\":\"DUO4 XIE4\",\"70A8\":\"DUO4\",\"70A9\":\"LING4\",\"70AA\":\"ZHUO2\",\"70AB\":\"XUAN4\",\"70AC\":\"JU4\",\"70AD\":\"TAN4\",\"70AE\":\"PAO4 BAO1 PAO2\",\"70AF\":\"JIONG3\",\"70B0\":\"PAO2 PAO4\",\"70B1\":\"TAI2\",\"70B2\":\"TAI2\",\"70B3\":\"BING3\",\"70B4\":\"YANG3\",\"70B5\":\"TONG1\",\"70B6\":\"HAN1\",\"70B7\":\"ZHU4\",\"70B8\":\"ZHA4 ZHA2\",\"70B9\":\"DIAN3\",\"70BA\":\"WEI4 WEI2\",\"70BB\":\"SHI2\",\"70BC\":\"LIAN4\",\"70BD\":\"CHI4\",\"70BE\":\"HUANG3\",\"70C0\":\"HU1\",\"70C1\":\"SHUO4 LUO4\",\"70C2\":\"LAN4\",\"70C3\":\"JING3 TING1\",\"70C4\":\"JIAO3\",\"70C5\":\"XU4\",\"70C6\":\"XING2\",\"70C7\":\"QUAN4 QUAN3\",\"70C8\":\"LIE4\",\"70C9\":\"HUAN4\",\"70CA\":\"YANG2 YANG4\",\"70CB\":\"XIAO1 XIU1\",\"70CC\":\"XIU1\",\"70CD\":\"XIAN3\",\"70CE\":\"YIN2\",\"70CF\":\"WU1 WU4\",\"70D0\":\"ZHOU1\",\"70D1\":\"YAO2\",\"70D2\":\"SHI4\",\"70D3\":\"WEI1\",\"70D4\":\"TONG2\",\"70D5\":\"XUE4 MIE4\",\"70D6\":\"ZAI1\",\"70D7\":\"KAI4\",\"70D8\":\"HONG1\",\"70D9\":\"LUO4 LAO4 GE2\",\"70DA\":\"XIA2\",\"70DB\":\"ZHU2\",\"70DC\":\"XUAN3 HUI3 XUAN1\",\"70DD\":\"ZHENG1\",\"70DE\":\"PO4\",\"70DF\":\"YAN1 YIN1\",\"70E0\":\"HUI3\",\"70E1\":\"GUANG1\",\"70E2\":\"ZHE4\",\"70E3\":\"HUI1\",\"70E4\":\"KAO3\",\"70E6\":\"FAN2\",\"70E7\":\"SHAO1\",\"70E8\":\"YE4\",\"70E9\":\"HUI4\",\"70EB\":\"TANG4\",\"70EC\":\"JIN4\",\"70ED\":\"RE4\",\"70EF\":\"XI1\",\"70F0\":\"FU2\",\"70F1\":\"JIONG3\",\"70F2\":\"CHE4\",\"70F3\":\"PU3\",\"70F4\":\"JING3 TING1\",\"70F5\":\"ZHUO2\",\"70F6\":\"TING3\",\"70F7\":\"WAN2\",\"70F8\":\"HAI3\",\"70F9\":\"PENG1\",\"70FA\":\"LANG3\",\"70FB\":\"SHAN1 SHAN2 YAN4\",\"70FC\":\"HU1\",\"70FD\":\"FENG1\",\"70FE\":\"CHI4\",\"70FF\":\"RONG2\",\"710A\":\"HAN4\",\"710B\":\"ZHUANG4\",\"710C\":\"JUN4\",\"710D\":\"DI4\",\"710E\":\"XIE4\",\"710F\":\"JI2 QI4\",\"711A\":\"FEN2 FEN4\",\"711B\":\"LIN4\",\"711C\":\"KUN1 HUN3\",\"711D\":\"HUN4\",\"711E\":\"TUN1\",\"711F\":\"XI2\",\"712A\":\"QIONG1\",\"712B\":\"RUO4 RE4\",\"712C\":\"XI2\",\"712D\":\"QIONG2\",\"712E\":\"XIN4 XIN1\",\"712F\":\"ZHUO2 ZHUO1 CHUO4 CHAO1\",\"713A\":\"SHENG1\",\"713B\":\"CHANG4\",\"713C\":\"SHAO1\",\"714A\":\"XUAN1\",\"714B\":\"XING1\",\"714C\":\"HUANG2\",\"714D\":\"JIAO3\",\"714E\":\"JIAN1 JIAN3 JIAN4\",\"714F\":\"BI4\",\"715A\":\"JIONG3\",\"715B\":\"JIONG3\",\"715C\":\"YU4\",\"715D\":\"MEI4 MEI2\",\"715E\":\"SHA1 SHA4\",\"715F\":\"WEI4\",\"716A\":\"QIU2\",\"716B\":\"SUI4\",\"716C\":\"YANG2 YANG4\",\"716D\":\"LIE4\",\"716E\":\"ZHU3\",\"717A\":\"TUI4\",\"717B\":\"TANG2\",\"717C\":\"CHAO3\",\"717D\":\"SHAN1 SHAN4\",\"717E\":\"EN1 YUN1\",\"717F\":\"BO2\",\"718A\":\"XIONG2\",\"718B\":\"NAI2\",\"718C\":\"SHAN4\",\"718E\":\"YAO4\",\"718F\":\"XUN1 XUN4\",\"719A\":\"BI4\",\"719B\":\"BIAO1\",\"719C\":\"ZONG3\",\"719D\":\"LU4\",\"719E\":\"JIAN1\",\"719F\":\"SHU2 SHOU2\",\"71A0\":\"YI4\",\"71A1\":\"LOU2\",\"71A2\":\"FENG1\",\"71A3\":\"SUI1\",\"71A4\":\"YI4\",\"71A5\":\"TONG1\",\"71A6\":\"JUE2\",\"71A7\":\"ZONG1\",\"71A8\":\"YUN4 YU4 WEI4\",\"71A9\":\"HU4\",\"71AA\":\"YI2\",\"71AB\":\"ZHI4\",\"71AC\":\"AO2 AO1\",\"71AD\":\"WEI4\",\"71AE\":\"LIAO2\",\"71AF\":\"HAN4\",\"71B0\":\"OU1\",\"71B1\":\"RE4\",\"71B2\":\"JIONG3\",\"71B3\":\"MAN4\",\"71B5\":\"SHANG1\",\"71B6\":\"CUAN4\",\"71B7\":\"ZENG1\",\"71B8\":\"JIAN1\",\"71B9\":\"XI1\",\"71BA\":\"XI1\",\"71BB\":\"XI1\",\"71BC\":\"YI4\",\"71BD\":\"XIAO4\",\"71BE\":\"CHI4\",\"71BF\":\"HUANG2\",\"71C0\":\"CHAN3 DAN3\",\"71C1\":\"YE4\",\"71C2\":\"QIAN2 XUN2\",\"71C3\":\"RAN2\",\"71C4\":\"YAN4\",\"71C5\":\"XIAN2 QIAN2 XUN2\",\"71C6\":\"QIAO2\",\"71C7\":\"ZUN4\",\"71C8\":\"DENG1\",\"71C9\":\"DUN4 DUN1 TUN1 TUN2\",\"71CA\":\"SHEN1\",\"71CB\":\"JIAO1 QIAO2\",\"71CC\":\"FEN2 BEN4\",\"71CD\":\"SI1\",\"71CE\":\"LIAO3 LIAO2 LIAO4\",\"71CF\":\"YU4\",\"71D0\":\"LIN2\",\"71D1\":\"TONG2\",\"71D2\":\"SHAO1 SHAO4\",\"71D3\":\"FEN1\",\"71D4\":\"FAN2 FEN2\",\"71D5\":\"YAN4 YAN1\",\"71D6\":\"XUN2 QIAN2\",\"71D7\":\"LAN4\",\"71D8\":\"MEI3\",\"71D9\":\"TANG4 DANG4\",\"71DA\":\"YI1\",\"71DB\":\"JING3\",\"71DC\":\"MEN4\",\"71DF\":\"YING2 CUO1\",\"71E0\":\"YU4 AO4\",\"71E1\":\"YI4\",\"71E2\":\"XUE2\",\"71E3\":\"LAN2\",\"71E4\":\"TAI4\",\"71E5\":\"ZAO4 SAO4\",\"71E6\":\"CAN4\",\"71E7\":\"SUI4\",\"71E8\":\"XI1\",\"71E9\":\"QUE4\",\"71EA\":\"CONG1\",\"71EB\":\"LIAN2\",\"71EC\":\"HUI3\",\"71ED\":\"ZHU2\",\"71EE\":\"XIE4\",\"71EF\":\"LING2\",\"71F0\":\"WEI1\",\"71F1\":\"YI4\",\"71F2\":\"XIE2\",\"71F3\":\"ZHAO4\",\"71F4\":\"HUI4\",\"71F7\":\"LAN2\",\"71F8\":\"RU2\",\"71F9\":\"XIAN3 BING4\",\"71FA\":\"KAO3\",\"71FB\":\"XUN1\",\"71FC\":\"JIN4\",\"71FD\":\"CHOU2\",\"71FE\":\"DAO4 TAO1 CHOU2\",\"71FF\":\"YAO4 SHAO4 SHUO4\",\"720A\":\"AO2 AO1\",\"720B\":\"XUN4 XUN1\",\"720C\":\"KUANG4 HUANG4\",\"720D\":\"SHUO4 LUO4 YUE4\",\"720F\":\"LI4\",\"721A\":\"YUE4 SHUO4\",\"721B\":\"LAN4\",\"721C\":\"CONG2\",\"721D\":\"JUE2 JIAO4\",\"721E\":\"TONG2 CHONG2\",\"721F\":\"GUAN4\",\"722A\":\"ZHUA3 ZHAO3\",\"722C\":\"PA2\",\"722D\":\"ZHENG1 ZHENG4\",\"722E\":\"PAO2\",\"722F\":\"CHENG1\",\"723A\":\"YE2\",\"723B\":\"YAO2 XIAO4\",\"723C\":\"ZU3\",\"723D\":\"SHUANG3 SHUANG1\",\"723E\":\"ER3\",\"723F\":\"QIANG2 PAN2\",\"724A\":\"SHAO2\",\"724B\":\"JIAN1\",\"724C\":\"PAI2\",\"724D\":\"DU2\",\"724E\":\"CHUANG1 CONG1\",\"724F\":\"TOU2 YU2 ZHU4\",\"725A\":\"CHENG4 CHENG1\",\"725B\":\"NIU2\",\"725D\":\"PIN4\",\"725E\":\"JIU1\",\"725F\":\"MOU2 MU4 MAO4\",\"726A\":\"YAN4\",\"726B\":\"GE1\",\"726C\":\"BEI4\",\"726D\":\"SI4\",\"726E\":\"JIAN4\",\"726F\":\"GU3\",\"727A\":\"XI1 SUO1\",\"727B\":\"MANG2\",\"727C\":\"KENG1\",\"727D\":\"QIAN1 QIAN4\",\"727E\":\"WU2 WU3\",\"727F\":\"GU4\",\"728A\":\"DU2\",\"728B\":\"JU4\",\"728C\":\"JIA1\",\"728D\":\"JIAN1 QIAN2 JIAN3\",\"728E\":\"FENG1\",\"728F\":\"PIAN1\",\"729A\":\"WEI4\",\"729B\":\"LI2 MAO2\",\"729C\":\"DUN1\",\"729D\":\"TONG2\",\"729F\":\"JIANG4\",\"72A1\":\"LI4\",\"72A2\":\"DU2\",\"72A3\":\"LIE4\",\"72A4\":\"PI2 BEI1\",\"72A5\":\"PIAO3\",\"72A6\":\"BAO4 BO2\",\"72A7\":\"XI1 SUO1\",\"72A8\":\"CHOU1\",\"72A9\":\"WEI4 WEI2\",\"72AA\":\"KUI2\",\"72AB\":\"CHOU1\",\"72AC\":\"QUAN3\",\"72AE\":\"BA2\",\"72AF\":\"FAN4\",\"72B0\":\"QIU2\",\"72B1\":\"JI3\",\"72B2\":\"CAI2 CHAI2\",\"72B3\":\"CHUO2\",\"72B4\":\"AN4 HAN1 AN2 JIAN4\",\"72B5\":\"GE1 QI4 HE2 JIE2\",\"72B6\":\"ZHUANG4\",\"72B7\":\"GUANG3\",\"72B8\":\"MA4 MA3\",\"72B9\":\"YOU2\",\"72BA\":\"KANG4\",\"72BB\":\"BO2\",\"72BC\":\"HOU3\",\"72BD\":\"YA2\",\"72BE\":\"YIN2\",\"72BF\":\"HUAN1 FAN1\",\"72C0\":\"ZHUANG4\",\"72C1\":\"YUN3\",\"72C2\":\"KUANG2 JUE2\",\"72C3\":\"NIU3 NV4\",\"72C4\":\"DI2 TI4\",\"72C5\":\"QING1\",\"72C6\":\"ZHONG4\",\"72C7\":\"MU4\",\"72C8\":\"BEI4\",\"72C9\":\"PI1\",\"72CA\":\"JU2\",\"72CB\":\"NI2 YI2 YIN2\",\"72CC\":\"SHENG1 XING1\",\"72CD\":\"PAO2\",\"72CE\":\"XIA2\",\"72CF\":\"TUO2\",\"72D0\":\"HU2\",\"72D1\":\"LING2\",\"72D2\":\"FEI4\",\"72D3\":\"PI1\",\"72D4\":\"NI3\",\"72D5\":\"AO3\",\"72D6\":\"YOU4\",\"72D7\":\"GOU3\",\"72D8\":\"YUE4 XUE4\",\"72D9\":\"JU1\",\"72DA\":\"DAN4\",\"72DB\":\"PO4\",\"72DC\":\"GU3\",\"72DD\":\"XIAN3 MI2\",\"72DE\":\"NING2\",\"72DF\":\"HUAN2\",\"72E0\":\"HEN3 YIN2 YAN2 KEN3 HANG3\",\"72E1\":\"JIAO3 XIAO4\",\"72E2\":\"HE2\",\"72E3\":\"ZHAO4\",\"72E4\":\"JI2\",\"72E5\":\"XUN4 XUN2\",\"72E6\":\"SHAN1\",\"72E7\":\"TA4\",\"72E8\":\"RONG2\",\"72E9\":\"SHOU4\",\"72EA\":\"TONG1\",\"72EB\":\"LAO3\",\"72EC\":\"DU2\",\"72ED\":\"XIA2\",\"72EE\":\"SHI1\",\"72EF\":\"HUA2 KUAI4\",\"72F0\":\"ZHENG1\",\"72F1\":\"YU4\",\"72F2\":\"SUN1\",\"72F3\":\"YU2\",\"72F4\":\"BI4\",\"72F5\":\"MANG2\",\"72F6\":\"XI3 XI1\",\"72F7\":\"JUAN4\",\"72F8\":\"LI2 MAI2\",\"72F9\":\"XIA2\",\"72FA\":\"YIN2\",\"72FB\":\"SUAN1 XUN4 JUN4\",\"72FC\":\"LANG2 LANG4 LANG3 HANG3\",\"72FD\":\"BEI4\",\"72FE\":\"ZHI4\",\"72FF\":\"YAN2\",\"730A\":\"NI2\",\"730B\":\"BIAO1\",\"730C\":\"YIN4\",\"730D\":\"LAI2\",\"730E\":\"XI2 LIE4 QUE4\",\"730F\":\"JIAN1\",\"731A\":\"YA2\",\"731B\":\"MENG3\",\"731C\":\"CAI1\",\"731D\":\"CU4\",\"731E\":\"SHE4 SHE1\",\"732A\":\"ZHU1\",\"732B\":\"MAO1 MAO2 MIAO2\",\"732C\":\"WEI4\",\"732D\":\"YUAN2\",\"732E\":\"XIAN4\",\"732F\":\"TUAN1\",\"733A\":\"YAO2\",\"733B\":\"SUN1\",\"733C\":\"BO2 PO4\",\"733D\":\"MING2\",\"733E\":\"HUA2\",\"733F\":\"YUAN2\",\"734A\":\"CHUANG4 CANG1\",\"734B\":\"HAO2\",\"734C\":\"MAN4\",\"734D\":\"JING4\",\"734E\":\"JIANG3\",\"734F\":\"MU2 MO4\",\"735A\":\"HUANG2\",\"735B\":\"PU2\",\"735C\":\"LIN2\",\"735D\":\"YU4 XU4\",\"735E\":\"TONG2\",\"735F\":\"YAO4 XIAO1\",\"736A\":\"KUAI4 HUA2\",\"736B\":\"XIAN3\",\"736C\":\"XIE4 HA3 JIE3\",\"736D\":\"TA4 TA3\",\"736E\":\"XIAN3 MI2\",\"736F\":\"XUN1\",\"737A\":\"TA3 TA4\",\"737B\":\"XIAN4 SUO1 XI1\",\"737C\":\"MI2\",\"737D\":\"RANG2\",\"737E\":\"HUAN1 QUAN2\",\"737F\":\"NAO2\",\"738A\":\"SU4\",\"738B\":\"WANG2 WANG4 YU4\",\"738C\":\"QIU2\",\"738D\":\"GA3\",\"738E\":\"DING1\",\"738F\":\"LE4\",\"739A\":\"YANG2 CHANG4 DANG4\",\"739B\":\"MA3\",\"739C\":\"GONG1\",\"739D\":\"WU3\",\"739E\":\"FU1\",\"739F\":\"MIN2 WEN2\",\"73A0\":\"JIE4\",\"73A1\":\"YA4\",\"73A2\":\"BIN1 FEN1 FEN2\",\"73A3\":\"BIAN4\",\"73A4\":\"BANG4 BENG3\",\"73A5\":\"YUE4\",\"73A6\":\"JUE2\",\"73A7\":\"YUN3\",\"73A8\":\"JUE2\",\"73A9\":\"WAN2 WAN4\",\"73AA\":\"JIAN1\",\"73AB\":\"MEI2\",\"73AC\":\"DAN3\",\"73AD\":\"PI2 PIAN2 PIN2\",\"73AE\":\"WEI3\",\"73AF\":\"HUAN2\",\"73B0\":\"XIAN4\",\"73B1\":\"QIANG1\",\"73B2\":\"LING2\",\"73B3\":\"DAI4\",\"73B4\":\"YI4\",\"73B5\":\"AN2\",\"73B6\":\"PING2\",\"73B7\":\"DIAN4 DIAN1\",\"73B8\":\"FU2\",\"73B9\":\"XUAN2\",\"73BA\":\"XI3\",\"73BB\":\"BO1\",\"73BC\":\"CI3 CI1\",\"73BD\":\"GOU3\",\"73BE\":\"JIA3\",\"73BF\":\"SHAO2\",\"73C0\":\"PO4\",\"73C1\":\"CI2\",\"73C2\":\"KE1\",\"73C3\":\"RAN3\",\"73C4\":\"SHENG1\",\"73C5\":\"SHEN1\",\"73C6\":\"YI2\",\"73C7\":\"ZU3\",\"73C8\":\"JIA1\",\"73C9\":\"MIN2 WEN2\",\"73CA\":\"SHAN1\",\"73CB\":\"LIU3\",\"73CC\":\"BI4\",\"73CD\":\"ZHEN1\",\"73CE\":\"ZHEN1\",\"73CF\":\"JUE2\",\"73D0\":\"FA4\",\"73D1\":\"LONG2\",\"73D2\":\"JIN1\",\"73D3\":\"JIAO4\",\"73D4\":\"JIAN4\",\"73D5\":\"LI4\",\"73D6\":\"GUANG1\",\"73D7\":\"XIAN1\",\"73D8\":\"ZHOU1\",\"73D9\":\"GONG3\",\"73DA\":\"YAN1\",\"73DB\":\"XIU4\",\"73DC\":\"YANG2\",\"73DD\":\"XU3\",\"73DE\":\"LUO4 LI4\",\"73DF\":\"SU4\",\"73E0\":\"ZHU1\",\"73E1\":\"QIN2\",\"73E2\":\"KEN4\",\"73E3\":\"XUN2 XUAN1\",\"73E4\":\"BAO3\",\"73E5\":\"ER3\",\"73E6\":\"XIANG4\",\"73E7\":\"YAO2\",\"73E8\":\"XIA2\",\"73E9\":\"HENG2\",\"73EA\":\"GUI1\",\"73EB\":\"CHONG1\",\"73EC\":\"XU4\",\"73ED\":\"BAN1\",\"73EE\":\"PEI4\",\"73F0\":\"DANG1\",\"73F2\":\"HUN2 HUI1\",\"73F3\":\"WEN2\",\"73F4\":\"E2\",\"73F5\":\"CHENG2\",\"73F6\":\"DI4 TI2\",\"73F7\":\"WU3\",\"73F8\":\"WU2\",\"73F9\":\"CHENG2\",\"73FA\":\"JUN4\",\"73FB\":\"MEI2\",\"73FC\":\"BEI4\",\"73FD\":\"TING3\",\"73FE\":\"XIAN4\",\"73FF\":\"CHUO4\",\"740A\":\"YE2 YA2\",\"740B\":\"XI1\",\"740C\":\"LING2\",\"740D\":\"LI4 LI2\",\"740E\":\"JIN4 JIN1\",\"740F\":\"LIAN2 LIAN3\",\"741A\":\"JU1\",\"741B\":\"CHEN1\",\"741C\":\"LAI2\",\"741D\":\"WEN2\",\"741E\":\"SHENG4 WANG4\",\"741F\":\"WEI2\",\"742A\":\"QI2\",\"742B\":\"BENG3\",\"742C\":\"WAN3\",\"742D\":\"LU4\",\"742E\":\"CONG2\",\"742F\":\"GUAN3\",\"743A\":\"FA4\",\"743C\":\"QIONG2\",\"743D\":\"DU3\",\"743E\":\"JIE4\",\"743F\":\"HUN2 HUI1\",\"744A\":\"ZHEN1 JIAN1\",\"744B\":\"WEI3\",\"744C\":\"RUAN3\",\"744D\":\"HUAN4\",\"744E\":\"JIE1\",\"744F\":\"CHUAN1\",\"745A\":\"HU2\",\"745B\":\"YING1\",\"745C\":\"YU2\",\"745D\":\"HUANG2\",\"745E\":\"RUI4\",\"745F\":\"SE4\",\"746A\":\"MA3\",\"746B\":\"TAO1\",\"746C\":\"LIU2\",\"746D\":\"TANG2\",\"746E\":\"LI4\",\"746F\":\"LANG2\",\"747A\":\"CHANG2\",\"747B\":\"KUN1\",\"747C\":\"ZHUAN1\",\"747D\":\"CONG1\",\"747E\":\"JIN3 JIN4\",\"747F\":\"YI1\",\"748A\":\"MEN2 MAN2\",\"748B\":\"ZHANG1\",\"748C\":\"YIN2\",\"748E\":\"YING1\",\"748F\":\"ZHI4\",\"749A\":\"QIONG2 JUE2\",\"749B\":\"SU4\",\"749C\":\"HUANG2\",\"749D\":\"GUI1\",\"749E\":\"PU2\",\"749F\":\"JING3\",\"74A0\":\"FAN2\",\"74A1\":\"JIN4 JIN1\",\"74A2\":\"LIU2\",\"74A3\":\"JI1\",\"74A5\":\"JING3\",\"74A6\":\"AI4\",\"74A7\":\"BI4\",\"74A8\":\"CAN4\",\"74A9\":\"QU2\",\"74AA\":\"ZAO3\",\"74AB\":\"DANG1\",\"74AC\":\"JIAO3\",\"74AD\":\"GUN4\",\"74AE\":\"TAN3\",\"74AF\":\"HUI4\",\"74B0\":\"HUAN2 HUAN4\",\"74B1\":\"SE4\",\"74B2\":\"SUI4\",\"74B3\":\"TIAN2\",\"74B5\":\"YU2\",\"74B6\":\"JIN4\",\"74B7\":\"LU2\",\"74B8\":\"BIN1\",\"74B9\":\"SHOU4 SHU2\",\"74BA\":\"WEN4\",\"74BB\":\"ZUI3\",\"74BC\":\"LAN2\",\"74BD\":\"XI3\",\"74BE\":\"JI4\",\"74BF\":\"XUAN2\",\"74C0\":\"RUAN3\",\"74C1\":\"HUO4\",\"74C2\":\"GAI4\",\"74C3\":\"LEI2\",\"74C4\":\"DU2\",\"74C5\":\"LI4\",\"74C6\":\"ZHI2\",\"74C7\":\"ROU2\",\"74C8\":\"LI2\",\"74C9\":\"ZAN4\",\"74CA\":\"QIONG2 XUAN2\",\"74CB\":\"ZHE2\",\"74CC\":\"GUI1\",\"74CD\":\"SUI4\",\"74CE\":\"LA4\",\"74CF\":\"LONG2\",\"74D0\":\"LU2\",\"74D1\":\"LI4\",\"74D2\":\"ZAN4\",\"74D3\":\"LAN4\",\"74D4\":\"YING1\",\"74D5\":\"MI2\",\"74D6\":\"XIANG1\",\"74D7\":\"XI1\",\"74D8\":\"GUAN4\",\"74D9\":\"DAO4\",\"74DA\":\"ZAN4\",\"74DB\":\"HUAN2\",\"74DC\":\"GUA1\",\"74DD\":\"BO2\",\"74DE\":\"DIE2\",\"74DF\":\"BAO2 BO2\",\"74E0\":\"HU4 HU2 HUO4 GU1\",\"74E1\":\"ZHI2\",\"74E2\":\"PIAO2\",\"74E3\":\"BAN4\",\"74E4\":\"RANG2\",\"74E5\":\"LI4\",\"74E6\":\"WA3 WA4\",\"74E8\":\"JIANG1 HONG2\",\"74EA\":\"FAN3\",\"74EB\":\"PEN2\",\"74EC\":\"FANG3\",\"74ED\":\"DAN3\",\"74EE\":\"WENG4\",\"74EF\":\"OU1\",\"74F3\":\"HU2\",\"74F4\":\"LING2\",\"74F5\":\"YI2\",\"74F6\":\"PING2\",\"74F7\":\"CI2\",\"74F9\":\"JUAN4\",\"74FA\":\"CHANG2\",\"74FB\":\"CHI1\",\"74FD\":\"DANG4\",\"74FE\":\"MENG3\",\"74FF\":\"POU3 BU4\",\"750A\":\"LOU3\",\"750B\":\"DI4\",\"750C\":\"OU1 OU3\",\"750D\":\"MENG2\",\"750E\":\"ZHUAN1\",\"750F\":\"PENG4 BENG4\",\"751A\":\"SHEN2 SHI2 SHEN4\",\"751B\":\"TIAN2\",\"751C\":\"TIAN2\",\"751D\":\"HAN1 HAN2\",\"751E\":\"CHANG2\",\"751F\":\"SHENG1\",\"752A\":\"LU4\",\"752B\":\"FU3 PU4 PU3\",\"752C\":\"YONG3 DONG4\",\"752D\":\"BENG2 QI4\",\"752E\":\"FENG4\",\"752F\":\"NING2 NING4\",\"753A\":\"TING3 TING1 DING1 ZHENG4 TIAN3\",\"753B\":\"HUA4\",\"753C\":\"TING3\",\"753D\":\"QUAN3 ZHEN4\",\"753E\":\"ZI1 ZAI1\",\"753F\":\"MENG2\",\"754A\":\"GENG1\",\"754B\":\"TIAN2\",\"754C\":\"JIE4\",\"754D\":\"JIE4\",\"754E\":\"QUAN3\",\"754F\":\"WEI4 WEI1 WEI3\",\"755A\":\"BEN3\",\"755B\":\"ZHEN3\",\"755C\":\"CHU4 XU4\",\"755D\":\"MU3\",\"755E\":\"MU3\",\"755F\":\"CE4\",\"756A\":\"FAN1 PAN1 BO1 PO2 FAN2 PAN2 PI2\",\"756B\":\"HUA4\",\"756C\":\"YU2 SHE1\",\"756D\":\"YU2\",\"756E\":\"MU3\",\"756F\":\"JUN4\",\"757A\":\"JIANG1\",\"757B\":\"SHENG2\",\"757C\":\"CHANG4\",\"757D\":\"TUAN3\",\"757E\":\"LEI2\",\"757F\":\"JI1\",\"758A\":\"DIE2\",\"758B\":\"PI3 PI1 SHU1 YA3\",\"758C\":\"NIE4\",\"758D\":\"DAN4\",\"758E\":\"SHU1 SHU4\",\"758F\":\"SHU1 SHU4\",\"759A\":\"JIU4\",\"759B\":\"ZHOU3\",\"759C\":\"XIA4\",\"759D\":\"SHAN4\",\"759E\":\"XU1\",\"759F\":\"NVE4 YAO4\",\"75A0\":\"LI4\",\"75A1\":\"YANG2\",\"75A2\":\"CHEN4\",\"75A3\":\"YOU2 YOU4\",\"75A4\":\"BA1\",\"75A5\":\"JIE4\",\"75A6\":\"JUE2\",\"75A7\":\"ZHI1\",\"75A8\":\"XIA1\",\"75A9\":\"CUI4\",\"75AA\":\"BI4\",\"75AB\":\"YI4\",\"75AC\":\"LI4\",\"75AD\":\"ZONG4\",\"75AE\":\"CHUANG1\",\"75AF\":\"FENG1\",\"75B0\":\"ZHU4\",\"75B1\":\"PAO4\",\"75B2\":\"PI2\",\"75B3\":\"GAN1\",\"75B4\":\"KE1 E1 QIA4\",\"75B5\":\"CI1 ZI1 ZHAI4 JI4\",\"75B6\":\"XIE4\",\"75B7\":\"QI2\",\"75B8\":\"DAN3 DAN4 DA5\",\"75B9\":\"ZHEN3 CHEN4\",\"75BA\":\"FA2\",\"75BB\":\"ZHI3\",\"75BC\":\"TENG2\",\"75BD\":\"JU1 JU3\",\"75BE\":\"JI2\",\"75BF\":\"FEI4 FEI2\",\"75C0\":\"QU2 GOU1 JU1 YU3\",\"75C1\":\"DIAN4 SHAN1\",\"75C2\":\"JIA1\",\"75C3\":\"XIAN2\",\"75C4\":\"ZHA4 CHA2 ZHA3\",\"75C5\":\"BING4\",\"75C6\":\"NI4 NA4\",\"75C7\":\"ZHENG4 ZHENG1\",\"75C8\":\"YONG1\",\"75C9\":\"JING4\",\"75CA\":\"QUAN2\",\"75CB\":\"CHONG2\",\"75CC\":\"TONG1\",\"75CD\":\"YI2\",\"75CE\":\"KAI1 LIE1\",\"75CF\":\"WEI3\",\"75D0\":\"HUI2\",\"75D1\":\"DUO3\",\"75D2\":\"YANG3 YANG2\",\"75D3\":\"CHI4\",\"75D4\":\"ZHI4\",\"75D5\":\"HEN2 GEN4\",\"75D6\":\"YA3\",\"75D7\":\"MEI4\",\"75D8\":\"DOU4\",\"75D9\":\"JING4\",\"75DA\":\"XIAO1\",\"75DB\":\"TONG4\",\"75DC\":\"TU1\",\"75DD\":\"MANG2\",\"75DE\":\"PI3\",\"75DF\":\"XIAO1\",\"75E0\":\"SUAN1\",\"75E1\":\"PU1\",\"75E2\":\"LI4\",\"75E3\":\"ZHI4\",\"75E4\":\"CUO2\",\"75E5\":\"DUO2\",\"75E6\":\"WU4 PI1\",\"75E7\":\"SHA1\",\"75E8\":\"LAO2\",\"75E9\":\"SHOU4\",\"75EA\":\"HUAN4\",\"75EB\":\"XIAN2\",\"75EC\":\"YI4\",\"75ED\":\"PENG2\",\"75EE\":\"ZHANG4\",\"75EF\":\"GUAN3\",\"75F0\":\"TAN2\",\"75F1\":\"FEI4 FEI2 FEI3\",\"75F2\":\"MA2\",\"75F3\":\"LIN2\",\"75F4\":\"CHI1\",\"75F5\":\"JI4\",\"75F6\":\"DIAN3\",\"75F7\":\"AN1\",\"75F8\":\"CHI4\",\"75F9\":\"BI4\",\"75FA\":\"BI4 BEI1\",\"75FB\":\"MIN2\",\"75FC\":\"GU4 GU1\",\"75FD\":\"DUI1\",\"75FE\":\"E1 KE1\",\"75FF\":\"WEI3\",\"760A\":\"HOU2\",\"760B\":\"FENG1\",\"760C\":\"LA4\",\"760D\":\"YANG2 DANG4\",\"760E\":\"SHEN4\",\"760F\":\"TU2\",\"761A\":\"JUE2\",\"761B\":\"CHI4\",\"761C\":\"XI2\",\"761D\":\"GUAN1\",\"761E\":\"YI4\",\"761F\":\"WEN1 WO4 YUN1\",\"762A\":\"PIE1 BIE3 BIE1\",\"762B\":\"TAN1\",\"762C\":\"ZHANG4\",\"762D\":\"BIAO1\",\"762E\":\"SHEN4\",\"762F\":\"CU4\",\"763A\":\"LOU4\",\"763B\":\"LV2 LOU4\",\"763C\":\"MO4\",\"763D\":\"JIN4\",\"763E\":\"YIN3\",\"763F\":\"YING3\",\"764A\":\"YIN4\",\"764B\":\"HE4\",\"764C\":\"AI2 YAN2\",\"764D\":\"BAN1\",\"764E\":\"XIAN2\",\"764F\":\"GUAN1\",\"765A\":\"DAN4\",\"765B\":\"LIN3 BING3\",\"765C\":\"DIAN4\",\"765D\":\"LIN3 BING3\",\"765E\":\"LAI4 LA4\",\"765F\":\"BIE3 PIE1 BIE1\",\"766B\":\"DIAN1\",\"766C\":\"XUAN3 XIAN3\",\"766D\":\"YING3\",\"766E\":\"YIN3\",\"766F\":\"QU2\",\"767A\":\"FA1 FA4\",\"767B\":\"DENG1 DE2\",\"767C\":\"FA1 FA4 BO1\",\"767D\":\"BAI2 BO2\",\"767E\":\"BAI3 BO2 MO4\",\"767F\":\"QIE2\",\"768A\":\"LING2\",\"768B\":\"GAO1 GU1 HAO2\",\"768C\":\"MO4\",\"768D\":\"JI2\",\"768E\":\"JIAO3\",\"768F\":\"PENG3\",\"769A\":\"AI2\",\"769B\":\"JIONG3 JIAO3 XIAO3\",\"769C\":\"HAO4 GAO3\",\"769D\":\"HUANG3\",\"769E\":\"HAO4\",\"769F\":\"ZE2\",\"76A0\":\"CUI3 CUI4\",\"76A1\":\"HAO4\",\"76A2\":\"XIAO3\",\"76A3\":\"YE4\",\"76A4\":\"PO2 PAN2\",\"76A5\":\"HAO4\",\"76A6\":\"JIAO3\",\"76A7\":\"AI4\",\"76A8\":\"XING1\",\"76A9\":\"HUANG4\",\"76AA\":\"LI4\",\"76AB\":\"PIAO3\",\"76AC\":\"HE4 HE2\",\"76AD\":\"JIAO4\",\"76AE\":\"PI2\",\"76AF\":\"GAN3\",\"76B0\":\"PAO4\",\"76B1\":\"ZHOU4\",\"76B2\":\"JUN1\",\"76B3\":\"QIU2\",\"76B4\":\"CUN1\",\"76B5\":\"QUE4\",\"76B6\":\"ZHA1 CU3\",\"76B7\":\"GU3\",\"76B8\":\"JUN1\",\"76B9\":\"JUN1\",\"76BA\":\"ZHOU4 ZHOU1\",\"76BB\":\"ZHA1\",\"76BC\":\"GU3\",\"76BD\":\"ZHAN3\",\"76BE\":\"DU2\",\"76BF\":\"MIN3 MING3\",\"76C0\":\"QI3\",\"76C1\":\"YING2\",\"76C2\":\"YU2\",\"76C3\":\"BEI1\",\"76C4\":\"ZHAO1 DIAO4\",\"76C5\":\"ZHONG1 CHONG1\",\"76C6\":\"PEN2\",\"76C7\":\"HE2\",\"76C8\":\"YING2\",\"76C9\":\"HE2\",\"76CA\":\"YI4\",\"76CB\":\"BO1\",\"76CC\":\"WAN3\",\"76CD\":\"HE2 KE3\",\"76CE\":\"ANG4\",\"76CF\":\"ZHAN3\",\"76D0\":\"YAN2 YAN4\",\"76D1\":\"JIAN1 JIAN4\",\"76D2\":\"HE2 AN1\",\"76D3\":\"YU1\",\"76D4\":\"KUI1\",\"76D5\":\"FAN4\",\"76D6\":\"GAI4 GE3 HE2\",\"76D7\":\"DAO4\",\"76D8\":\"PAN2\",\"76D9\":\"FU3\",\"76DA\":\"QIU2\",\"76DB\":\"SHENG4 CHENG2\",\"76DC\":\"DAO4\",\"76DD\":\"LU4\",\"76DE\":\"ZHAN3\",\"76DF\":\"MENG2 MING2 MENG4\",\"76E0\":\"LI3\",\"76E1\":\"JIN4 JIN3\",\"76E2\":\"XU4\",\"76E3\":\"JIAN1 JIAN4 KAN4\",\"76E4\":\"PAN2 XUAN2\",\"76E5\":\"GUAN4\",\"76E6\":\"AN1\",\"76E7\":\"LU2\",\"76E8\":\"SHU3 XU3\",\"76E9\":\"ZHOU1 CHOU1\",\"76EA\":\"DANG4\",\"76EB\":\"AN1\",\"76EC\":\"GU3\",\"76ED\":\"LI4\",\"76EE\":\"MU4\",\"76EF\":\"DING1 CHENG2\",\"76F0\":\"GAN3\",\"76F1\":\"XU1\",\"76F2\":\"MANG2 WANG4\",\"76F3\":\"MANG2 WANG4\",\"76F4\":\"ZHI2\",\"76F5\":\"QI4\",\"76F6\":\"RUAN3\",\"76F7\":\"TIAN2 XUAN2\",\"76F8\":\"XIANG1 XIANG4\",\"76F9\":\"DUN3 DUN4 ZHUN1\",\"76FA\":\"XIN1\",\"76FB\":\"XI4\",\"76FC\":\"PAN4 FEN2\",\"76FD\":\"FENG1\",\"76FE\":\"DUN4 SHUN3 YUN3\",\"76FF\":\"MIN2\",\"770A\":\"MAO4\",\"770B\":\"KAN4 KAN1\",\"770C\":\"XIAN4\",\"770D\":\"OU1\",\"770E\":\"SHI4\",\"770F\":\"YANG1\",\"771A\":\"SHENG3\",\"771B\":\"MEI4\",\"771C\":\"MO4 MIE4\",\"771D\":\"ZHU4\",\"771E\":\"ZHEN1\",\"771F\":\"ZHEN1\",\"772A\":\"BING3\",\"772B\":\"MI3\",\"772C\":\"LONG2\",\"772D\":\"SUI1 GUI4 HUI1 XIE2 WEI4\",\"772E\":\"DONG4\",\"772F\":\"MI3 MI1 MI4 MI2\",\"773A\":\"TIAO4\",\"773B\":\"YANG2\",\"773C\":\"YAN3 WEN3\",\"773D\":\"MO4\",\"773E\":\"ZHONG4\",\"773F\":\"MAI4\",\"774A\":\"JUAN4\",\"774B\":\"E2\",\"774C\":\"WAN3\",\"774D\":\"XIAN4\",\"774E\":\"XI1\",\"774F\":\"KUN4\",\"775A\":\"YAI2 YA2\",\"775B\":\"JING1 JING3\",\"775C\":\"ZHENG1\",\"775D\":\"LI2\",\"775E\":\"LAI4\",\"775F\":\"SUI4\",\"776A\":\"YI4 GAO1 HAO4 ZE2\",\"776B\":\"JIE2 SHE4\",\"776C\":\"CAI3\",\"776D\":\"ZHOU3\",\"776E\":\"YU2\",\"776F\":\"HUN1\",\"777A\":\"HOU2\",\"777B\":\"XUAN1\",\"777C\":\"TI4\",\"777D\":\"KUI2 JI4\",\"777E\":\"GAO1 HAO4\",\"777F\":\"RUI4\",\"778A\":\"DANG4\",\"778B\":\"CHEN1\",\"778C\":\"KE1\",\"778D\":\"SOU3\",\"778E\":\"XIA1\",\"778F\":\"QIONG2\",\"779A\":\"SHUN4\",\"779B\":\"CONG1\",\"779C\":\"LOU1\",\"779D\":\"CHI1\",\"779E\":\"MAN2 MEN2 MEN4\",\"779F\":\"PIAO3 PIAO4 PIAO1\",\"77A0\":\"CHENG1 ZHENG4\",\"77A1\":\"JI4\",\"77A2\":\"MENG2 MENG4 MANG2\",\"77A4\":\"RUN2\",\"77A5\":\"PIE1 BI4\",\"77A6\":\"XI1\",\"77A7\":\"QIAO2\",\"77A8\":\"PU2\",\"77A9\":\"ZHU3\",\"77AA\":\"DENG4\",\"77AB\":\"SHEN3\",\"77AC\":\"SHUN4\",\"77AD\":\"LIAO3 LIAO4 YAO3\",\"77AE\":\"CHE4\",\"77AF\":\"XIAN2 JIAN4\",\"77B0\":\"KAN4\",\"77B1\":\"YE4\",\"77B2\":\"XU4 XUE4\",\"77B3\":\"TONG2\",\"77B4\":\"MOU2\",\"77B5\":\"LIN2 LIN4 LIAN2\",\"77B6\":\"KUI4 GUI4\",\"77B7\":\"XIAN2 JIAN4\",\"77B8\":\"YE4\",\"77B9\":\"AI4\",\"77BA\":\"HUI4\",\"77BB\":\"ZHAN1\",\"77BC\":\"JIAN3\",\"77BD\":\"GU3\",\"77BE\":\"ZHAO4\",\"77BF\":\"JU4 QU2 JI2 QU1\",\"77C0\":\"WEI2\",\"77C1\":\"CHOU3\",\"77C2\":\"SAO4\",\"77C3\":\"NING3\",\"77C4\":\"XUN1\",\"77C5\":\"YAO4\",\"77C6\":\"HUO4 XUE1\",\"77C7\":\"MENG2\",\"77C8\":\"MIAN2\",\"77C9\":\"BIN1 PIN2\",\"77CA\":\"MIAN2\",\"77CB\":\"LI4\",\"77CC\":\"KUANG4\",\"77CD\":\"JUE2\",\"77CE\":\"XUAN1\",\"77CF\":\"MIAN2\",\"77D0\":\"HUO4\",\"77D1\":\"LU2\",\"77D2\":\"MENG2 MANG2 MENG4\",\"77D3\":\"LONG2\",\"77D4\":\"GUAN4\",\"77D5\":\"MAN3\",\"77D6\":\"XI3\",\"77D7\":\"CHU4\",\"77D8\":\"TANG3\",\"77D9\":\"KAN4\",\"77DA\":\"ZHU3\",\"77DB\":\"MAO2\",\"77DC\":\"JIN1 GUAN1 QIN2\",\"77DD\":\"LIN2\",\"77DE\":\"YU4 JUE2 XU4\",\"77DF\":\"SHUO4\",\"77E0\":\"CE4\",\"77E1\":\"JUE2\",\"77E2\":\"SHI3\",\"77E3\":\"YI3 XIAN2\",\"77E4\":\"SHEN3\",\"77E5\":\"ZHI1 ZHI4\",\"77E6\":\"HOU2\",\"77E7\":\"SHEN3\",\"77E8\":\"YING3\",\"77E9\":\"JU3\",\"77EA\":\"ZHOU1\",\"77EB\":\"JIAO3 JIAO2 JIAO1\",\"77EC\":\"CUO2\",\"77ED\":\"DUAN3\",\"77EE\":\"AI3\",\"77EF\":\"JIAO3 JIAO1\",\"77F0\":\"ZENG1\",\"77F1\":\"HUO4 YUE1\",\"77F2\":\"BAI3\",\"77F3\":\"SHI2 DAN4\",\"77F4\":\"DING4\",\"77F5\":\"QI4 DIAO1\",\"77F6\":\"JI1\",\"77F7\":\"ZI3\",\"77F8\":\"GAN1 GAN4\",\"77F9\":\"WU4\",\"77FA\":\"TUO1\",\"77FB\":\"KU4 KU1 WU4\",\"77FC\":\"QIANG1 GANG1 KONG4\",\"77FD\":\"XI4 XI1\",\"77FE\":\"FAN2\",\"77FF\":\"KUANG4\",\"780A\":\"KANG4 KANG1\",\"780B\":\"ZHI3\",\"780C\":\"QI4 QIE4\",\"780D\":\"KAN3\",\"780E\":\"JIE4\",\"780F\":\"FEN1 PAN1\",\"781A\":\"YAN4\",\"781C\":\"FENG1\",\"781D\":\"FA2 FA3 JIE2 GE2\",\"781E\":\"MO4\",\"781F\":\"ZHA4 ZUO2 ZHA3 ZUO4\",\"782A\":\"MU3\",\"782B\":\"ZHU3 ZHU4\",\"782C\":\"LI4 LA2\",\"782D\":\"BIAN1\",\"782E\":\"NU3\",\"782F\":\"PING1\",\"783A\":\"LI4\",\"783B\":\"LONG2\",\"783C\":\"TONG2\",\"783E\":\"LI4\",\"784A\":\"WEI3\",\"784B\":\"AI4\",\"784C\":\"LUO4 LI4 GE4\",\"784D\":\"KEN4\",\"784E\":\"XING2 YAN2 KENG1\",\"784F\":\"YAN2\",\"785A\":\"QIAO2\",\"785C\":\"KENG1\",\"785D\":\"XIAO1 QIAO4\",\"785E\":\"QUE4\",\"785F\":\"CHAN4\",\"786A\":\"E2 WO4 YI3\",\"786B\":\"LIU2 CHU4\",\"786C\":\"YING4 GENG3\",\"786D\":\"MANG2\",\"786E\":\"QUE4\",\"786F\":\"YAN4\",\"787A\":\"ZHUO2\",\"787B\":\"KENG1\",\"787C\":\"PENG2 PENG1\",\"787D\":\"YAN3\",\"787E\":\"ZHUI4\",\"787F\":\"KONG1\",\"788A\":\"JIAN1\",\"788B\":\"HE4\",\"788C\":\"LU4 LIU4 LUO4\",\"788D\":\"AI4\",\"788E\":\"SUI4\",\"788F\":\"QUE4\",\"789A\":\"BEI4 PEI2\",\"789B\":\"QI4\",\"789C\":\"CHEN3\",\"789D\":\"RUAN3\",\"789E\":\"YAN2\",\"789F\":\"DIE2 SHE2\",\"78A0\":\"DING4\",\"78A1\":\"DU2 ZHOU2\",\"78A2\":\"TUO2\",\"78A3\":\"JIE2 KE4 YA4\",\"78A4\":\"YING1\",\"78A5\":\"BIAN3\",\"78A6\":\"KE4\",\"78A7\":\"BI4\",\"78A8\":\"WEI1 WEI3\",\"78A9\":\"SHUO4 SHI2\",\"78AA\":\"ZHEN1\",\"78AB\":\"DUAN4\",\"78AC\":\"XIA2\",\"78AD\":\"DANG4\",\"78AE\":\"TI2\",\"78AF\":\"NAO3\",\"78B0\":\"PENG4\",\"78B1\":\"JIAN3 XIAN2\",\"78B2\":\"DI4\",\"78B3\":\"TAN4\",\"78B4\":\"CHA2 ZHA1 ZHA3 CHA1\",\"78B6\":\"QI4\",\"78B8\":\"FENG1\",\"78B9\":\"XUAN4\",\"78BA\":\"QUE4\",\"78BB\":\"QUE4 QIAO1\",\"78BC\":\"MA3\",\"78BD\":\"GONG1\",\"78BE\":\"NIAN3 NIAN4 LIAN3\",\"78BF\":\"SU4\",\"78C0\":\"E2\",\"78C1\":\"CI2\",\"78C2\":\"LIU4\",\"78C3\":\"SI1\",\"78C4\":\"TANG2\",\"78C5\":\"BANG4 PANG4 PANG2 PANG1\",\"78C6\":\"HUA2\",\"78C7\":\"PI1\",\"78C8\":\"WEI3 KUI3\",\"78C9\":\"SANG3\",\"78CA\":\"LEI3\",\"78CB\":\"CUO1\",\"78CC\":\"ZHEN1 TIAN2\",\"78CD\":\"XIA2\",\"78CE\":\"QI1 XI1\",\"78CF\":\"LIAN2\",\"78D0\":\"PAN2\",\"78D1\":\"WEI4 AI2 WEI2\",\"78D2\":\"YUN3\",\"78D3\":\"DUI1\",\"78D4\":\"ZHE2\",\"78D5\":\"KE1 KE3\",\"78D6\":\"LA1 LA2\",\"78D8\":\"QING4\",\"78D9\":\"GUN3\",\"78DA\":\"ZHUAN1 TUAN2 TUO2\",\"78DB\":\"CHAN2\",\"78DC\":\"QI4\",\"78DD\":\"AO2\",\"78DE\":\"PENG1\",\"78DF\":\"LU4 LIU4\",\"78E0\":\"LU3\",\"78E1\":\"KAN4\",\"78E2\":\"QIANG3 CHUANG3\",\"78E3\":\"CHEN3 CA4\",\"78E4\":\"YIN3 YIN1\",\"78E5\":\"LEI3\",\"78E6\":\"BIAO1\",\"78E7\":\"QI4\",\"78E8\":\"MO2 MO4\",\"78E9\":\"QI1 QI4\",\"78EA\":\"CUI1\",\"78EB\":\"ZONG1\",\"78EC\":\"QING4 QING3\",\"78ED\":\"CHUO4\",\"78EF\":\"JI1\",\"78F0\":\"SHAN4\",\"78F1\":\"LAO2\",\"78F2\":\"QU2\",\"78F3\":\"ZENG1\",\"78F4\":\"DENG4 DENG1\",\"78F5\":\"JIAN4\",\"78F6\":\"XI4\",\"78F7\":\"LIN2 LIN4 LIN3 LING2\",\"78F8\":\"DING4\",\"78F9\":\"DIAN4\",\"78FA\":\"HUANG2 KUANG4\",\"78FB\":\"PAN2 BO1\",\"78FC\":\"ZA2\",\"78FD\":\"QIAO1 QIAO3 QIAO4 AO2\",\"78FE\":\"DI1\",\"78FF\":\"LI4\",\"790A\":\"HUO4\",\"790B\":\"ZHAI2 ZE2\",\"790C\":\"LEI4 LEI2 LEI3\",\"790D\":\"KE3\",\"790E\":\"CHU3\",\"790F\":\"JI2\",\"791A\":\"KAI4 KE1\",\"791B\":\"JIAN1 LAN2\",\"791C\":\"YU4\",\"791D\":\"RUAN3\",\"791E\":\"MENG2\",\"791F\":\"PAO4\",\"792A\":\"LI4\",\"792B\":\"LI4 LUO4\",\"792C\":\"FAN2\",\"792D\":\"QUE4\",\"792E\":\"PAO4\",\"792F\":\"YING1\",\"793A\":\"SHI4 QI1 ZHI4 SHI2\",\"793B\":\"SHI4\",\"793C\":\"LI3\",\"793D\":\"RENG2\",\"793E\":\"SHE4\",\"793F\":\"YUE4\",\"794A\":\"BENG1\",\"794B\":\"DUI4\",\"794C\":\"ZHONG4 ZHONG3\",\"794E\":\"YI1\",\"794F\":\"SHI2\",\"795A\":\"ZUO4\",\"795B\":\"QU1\",\"795C\":\"HU4\",\"795D\":\"ZHU4 ZHOU4 CHU4\",\"795E\":\"SHEN2 SHEN1\",\"795F\":\"SUI4\",\"796A\":\"GUI3\",\"796B\":\"XIA2\",\"796C\":\"ZHI1\",\"796D\":\"JI4 ZHAI4\",\"796E\":\"GAO4\",\"796F\":\"ZHEN1 ZHENG1\",\"797A\":\"QI2\",\"797B\":\"GU4\",\"797C\":\"GUAN4\",\"797D\":\"ZUI4\",\"797E\":\"LING2\",\"797F\":\"LU4\",\"798A\":\"XI4\",\"798B\":\"YIN1\",\"798C\":\"ZI1\",\"798D\":\"HUO4\",\"798E\":\"ZHEN1 ZHENG1\",\"798F\":\"FU2 FU4\",\"799A\":\"ZHUO2\",\"799B\":\"ZHEN1\",\"799C\":\"YONG3 YING2\",\"799D\":\"JI2\",\"799E\":\"GAO4\",\"799F\":\"TANG2\",\"79A0\":\"SI1\",\"79A1\":\"MA4\",\"79A2\":\"TA1\",\"79A4\":\"XUAN1\",\"79A5\":\"QI2\",\"79A6\":\"YU4\",\"79A7\":\"XI3 XI1\",\"79A8\":\"JI1 JI4\",\"79A9\":\"SI4\",\"79AA\":\"CHAN2 SHAN4 TAN2\",\"79AB\":\"TAN3 DAN4\",\"79AC\":\"KUAI4 GUI4 HUI4\",\"79AD\":\"SUI4\",\"79AE\":\"LI3\",\"79AF\":\"NONG2\",\"79B0\":\"NI3 MI2 XIAN3\",\"79B1\":\"DAO3\",\"79B2\":\"LI4\",\"79B3\":\"RANG2\",\"79B4\":\"YUE4\",\"79B5\":\"TI2\",\"79B6\":\"ZAN3\",\"79B7\":\"LEI4\",\"79B8\":\"ROU2\",\"79B9\":\"YU3\",\"79BA\":\"YU2 OU3 YU4\",\"79BB\":\"LI2 CHI1 LI4\",\"79BC\":\"XIE4\",\"79BD\":\"QIN2\",\"79BE\":\"HE2\",\"79BF\":\"TU1\",\"79C0\":\"XIU4\",\"79C1\":\"SI1\",\"79C2\":\"REN2\",\"79C3\":\"TU1\",\"79C4\":\"ZI3\",\"79C5\":\"CHA2\",\"79C6\":\"GAN3\",\"79C7\":\"YI4 ZHI2\",\"79C8\":\"XIAN1\",\"79C9\":\"BING3\",\"79CA\":\"NIAN2\",\"79CB\":\"QIU1\",\"79CC\":\"QIU1\",\"79CD\":\"ZHONG3 CHONG2 ZHONG4\",\"79CE\":\"FEN2\",\"79CF\":\"HAO4\",\"79D0\":\"YUN2\",\"79D1\":\"KE1 KE4\",\"79D2\":\"MIAO3\",\"79D3\":\"ZHI1\",\"79D4\":\"GENG1 JING1\",\"79D5\":\"BI3\",\"79D6\":\"ZHI1 ZHI3\",\"79D7\":\"YU4\",\"79D8\":\"MI4 BI4 BIE2\",\"79D9\":\"KU4\",\"79DA\":\"BAN4\",\"79DB\":\"PI1\",\"79DC\":\"NI2 LI2\",\"79DD\":\"LI4\",\"79DE\":\"YOU2\",\"79DF\":\"ZU1 JU1\",\"79E0\":\"PI1\",\"79E1\":\"BA2\",\"79E2\":\"LING2\",\"79E3\":\"MO4\",\"79E4\":\"CHENG4 CHENG1 CHEN4 PING2\",\"79E5\":\"NIAN2\",\"79E6\":\"QIN2\",\"79E7\":\"YANG1\",\"79E8\":\"ZUO2\",\"79E9\":\"ZHI4\",\"79EA\":\"ZHI1\",\"79EB\":\"SHU2 SHU4\",\"79EC\":\"JU4\",\"79ED\":\"ZI3\",\"79EE\":\"HUO2 KUO4\",\"79EF\":\"JI1\",\"79F0\":\"CHENG1 CHEN4 CHENG4\",\"79F1\":\"TONG2\",\"79F2\":\"ZHI4\",\"79F3\":\"HUO2\",\"79F4\":\"HE2\",\"79F5\":\"YIN1\",\"79F6\":\"ZI1 CI2 JI4\",\"79F7\":\"ZHI2\",\"79F8\":\"JIE1 JI2\",\"79F9\":\"REN3\",\"79FA\":\"DU4\",\"79FB\":\"YI2 CHI3 YI4\",\"79FC\":\"ZHU1\",\"79FD\":\"HUI4\",\"79FE\":\"NONG2\",\"79FF\":\"FU3\",\"7A00\":\"XI1\",\"7A01\":\"KAO3 KAO4 GAO4\",\"7A02\":\"LANG2\",\"7A03\":\"FU1 FU2\",\"7A04\":\"ZE4\",\"7A05\":\"SHUI4 TUAN4 TUI4 TUO1\",\"7A06\":\"LV3\",\"7A07\":\"KUN3\",\"7A08\":\"GAN3\",\"7A09\":\"GENG1 JING1\",\"7A0A\":\"TI2\",\"7A0B\":\"CHENG2\",\"7A0C\":\"TU2\",\"7A0D\":\"SHAO1 SHAO4\",\"7A0E\":\"SHUI4 TUAN4 TUI4 TUO1\",\"7A0F\":\"YA4\",\"7A10\":\"LUN3\",\"7A11\":\"LU4\",\"7A12\":\"GU4\",\"7A13\":\"ZUO2\",\"7A14\":\"REN3\",\"7A15\":\"ZHUN4\",\"7A16\":\"BANG4\",\"7A17\":\"BAI4\",\"7A18\":\"JI1\",\"7A19\":\"ZHI2\",\"7A1A\":\"ZHI4\",\"7A1B\":\"KUN3\",\"7A1C\":\"LENG2 LENG4 LING2\",\"7A1D\":\"PENG2\",\"7A1E\":\"KE1 HUA4\",\"7A1F\":\"BING3 LIN3\",\"7A20\":\"CHOU2 TIAO2 TIAO4 DIAO4\",\"7A21\":\"ZU2\",\"7A22\":\"YU4\",\"7A23\":\"SU1\",\"7A24\":\"LVE4 LVE3\",\"7A26\":\"YI1\",\"7A27\":\"XI4\",\"7A28\":\"BIAN1\",\"7A29\":\"JI4\",\"7A2A\":\"FU4\",\"7A2B\":\"BI1\",\"7A2C\":\"NUO4\",\"7A2D\":\"JIE1\",\"7A2E\":\"ZHONG3 ZHONG4 CHONG2\",\"7A2F\":\"ZONG1\",\"7A30\":\"XU1\",\"7A31\":\"CHENG1 CHENG4 CHEN4\",\"7A32\":\"DAO4\",\"7A33\":\"WEN3\",\"7A34\":\"LIAN2\",\"7A35\":\"ZI1 JIU1\",\"7A36\":\"YU4\",\"7A37\":\"JI4 ZE4\",\"7A38\":\"XU4\",\"7A39\":\"ZHEN3 ZHEN1 BIAN1\",\"7A3A\":\"ZHI4\",\"7A3B\":\"DAO4\",\"7A3C\":\"JIA4\",\"7A3D\":\"JI1 QI3\",\"7A3E\":\"GAO3\",\"7A3F\":\"GAO3\",\"7A40\":\"GU3 GOU4 NOU4\",\"7A41\":\"RONG2\",\"7A42\":\"SUI4\",\"7A44\":\"JI4\",\"7A45\":\"KANG1\",\"7A46\":\"MU4\",\"7A47\":\"SHAN1 CAN3\",\"7A48\":\"MEN2 MEI2\",\"7A49\":\"ZHI4\",\"7A4A\":\"JI4\",\"7A4B\":\"LU4\",\"7A4C\":\"SU1\",\"7A4D\":\"JI1\",\"7A4E\":\"YING3\",\"7A4F\":\"WEN3\",\"7A50\":\"QIU1\",\"7A51\":\"SE4\",\"7A53\":\"YI4\",\"7A54\":\"HUANG2\",\"7A55\":\"QIE4\",\"7A56\":\"JI3\",\"7A57\":\"SUI4\",\"7A58\":\"XIAO1\",\"7A59\":\"PU2\",\"7A5A\":\"JIAO1\",\"7A5B\":\"ZHUO1\",\"7A5C\":\"TONG2 ZHONG4\",\"7A5E\":\"LV3\",\"7A5F\":\"SUI4\",\"7A60\":\"NONG2\",\"7A61\":\"SE4\",\"7A62\":\"HUI4\",\"7A63\":\"RANG2\",\"7A64\":\"NUO4\",\"7A65\":\"YU4\",\"7A67\":\"JI4\",\"7A68\":\"TUI2\",\"7A69\":\"WEN3\",\"7A6A\":\"CHENG1\",\"7A6B\":\"HUO4\",\"7A6C\":\"GONG3 KUANG4\",\"7A6D\":\"LV3\",\"7A6E\":\"BIAO1\",\"7A70\":\"RANG2 RANG3 RENG2\",\"7A71\":\"ZHUO1\",\"7A72\":\"LI2\",\"7A73\":\"ZAN4\",\"7A74\":\"XUE2 JUE2 XUE4\",\"7A75\":\"WA1\",\"7A76\":\"JIU1 JIU4\",\"7A77\":\"QIONG2\",\"7A78\":\"XI4 XI1\",\"7A79\":\"QIONG2 QIONG1 KONG1\",\"7A7A\":\"KONG1 KONG4 KONG3\",\"7A7B\":\"YU1\",\"7A7C\":\"SEN1\",\"7A7D\":\"JING3\",\"7A7E\":\"YAO4\",\"7A7F\":\"CHUAN1\",\"7A80\":\"ZHUN1 TUN2\",\"7A81\":\"TU1 TU2\",\"7A82\":\"LAO2\",\"7A83\":\"QIE4\",\"7A84\":\"ZHAI3 ZE2\",\"7A85\":\"YAO3\",\"7A86\":\"BIAN3\",\"7A87\":\"BAO2\",\"7A88\":\"YAO3 YAO4\",\"7A89\":\"BING3\",\"7A8A\":\"WA1\",\"7A8B\":\"ZHU2 KU1\",\"7A8C\":\"JIAO4\",\"7A8D\":\"QIAO4\",\"7A8E\":\"DIAO4\",\"7A8F\":\"WU1\",\"7A90\":\"GUI1 WA1\",\"7A91\":\"YAO2\",\"7A92\":\"ZHI4 DIE2\",\"7A93\":\"CHUANG1 CONG1\",\"7A94\":\"YAO3 YAO4\",\"7A95\":\"TIAO3 TIAO1 YAO2\",\"7A96\":\"JIAO4 ZAO4\",\"7A97\":\"CHUANG1 CONG1\",\"7A98\":\"JIONG3\",\"7A99\":\"XIAO1\",\"7A9A\":\"CHENG2\",\"7A9B\":\"KOU4\",\"7A9C\":\"CUAN4\",\"7A9D\":\"WO1\",\"7A9E\":\"DAN4\",\"7A9F\":\"KU1\",\"7AA0\":\"KE1\",\"7AA1\":\"ZHUI4\",\"7AA2\":\"XU4\",\"7AA3\":\"SU4 SU1\",\"7AA5\":\"KUI1 KUI3\",\"7AA6\":\"DOU4\",\"7AA8\":\"YIN4 XUN1 YIN1\",\"7AA9\":\"WO1\",\"7AAA\":\"WA1\",\"7AAB\":\"YA4\",\"7AAC\":\"YU2 DOU4 DOU1\",\"7AAD\":\"JU4 LOU2\",\"7AAE\":\"QIONG2\",\"7AAF\":\"YAO2\",\"7AB0\":\"YAO2\",\"7AB1\":\"TIAO4 TIAO3\",\"7AB2\":\"CHAO2\",\"7AB3\":\"YU3 YU2\",\"7AB4\":\"TIAN2\",\"7AB5\":\"DIAO4\",\"7AB6\":\"JU4 LOU2\",\"7AB7\":\"LIAO2\",\"7AB8\":\"XI1\",\"7AB9\":\"WU4\",\"7ABA\":\"KUI1 KUI3\",\"7ABB\":\"CHUANG1\",\"7ABC\":\"ZHAO1 CONG1\",\"7ABE\":\"KUAN3\",\"7ABF\":\"LONG2\",\"7AC0\":\"CHENG1\",\"7AC1\":\"CUI4\",\"7AC2\":\"PIAO2\",\"7AC3\":\"ZAO4\",\"7AC4\":\"CUAN4 CUAN1\",\"7AC5\":\"QIAO4\",\"7AC6\":\"QIONG2\",\"7AC7\":\"DOU4 DU2\",\"7AC8\":\"ZAO4\",\"7AC9\":\"LONG3\",\"7ACA\":\"QIE4\",\"7ACB\":\"LI4 WEI4\",\"7ACC\":\"CHU4\",\"7ACE\":\"FOU4\",\"7AD0\":\"CHU4 QI4\",\"7AD1\":\"HONG2\",\"7AD2\":\"QI2\",\"7AD6\":\"SHU4\",\"7AD7\":\"MIAO4 MIAO3\",\"7AD8\":\"JU3 QU3\",\"7AD9\":\"ZHAN4 ZHAN1\",\"7ADA\":\"ZHU4\",\"7ADB\":\"LING2\",\"7ADC\":\"LONG2\",\"7ADD\":\"BING4 BANG4\",\"7ADE\":\"JING4\",\"7ADF\":\"JING4\",\"7AE0\":\"ZHANG1 ZHANG4\",\"7AE2\":\"SI4\",\"7AE3\":\"JUN4\",\"7AE4\":\"HONG2\",\"7AE5\":\"TONG2 ZHONG1\",\"7AE6\":\"SONG3\",\"7AE7\":\"JING4\",\"7AE8\":\"DIAO4\",\"7AE9\":\"YI4\",\"7AEA\":\"SHU4\",\"7AEB\":\"JING4\",\"7AEC\":\"QU3\",\"7AED\":\"JIE2\",\"7AEE\":\"PING2\",\"7AEF\":\"DUAN1\",\"7AF0\":\"SHAO2\",\"7AF1\":\"ZHUAN3\",\"7AF2\":\"CENG2\",\"7AF3\":\"DENG1\",\"7AF4\":\"CUI1\",\"7AF5\":\"HUAI1\",\"7AF6\":\"JING4\",\"7AF7\":\"KAN4\",\"7AF8\":\"JING4\",\"7AF9\":\"ZHU2\",\"7AFA\":\"ZHU2 DU3\",\"7AFB\":\"LE4\",\"7AFC\":\"PENG2\",\"7AFD\":\"YU2\",\"7AFE\":\"CHI2\",\"7AFF\":\"GAN1 GAN4 GAN3\",\"7B00\":\"MANG2\",\"7B01\":\"ZHU2\",\"7B03\":\"DU3\",\"7B04\":\"JI1\",\"7B05\":\"XIAO2\",\"7B06\":\"BA1\",\"7B07\":\"SUAN4\",\"7B08\":\"JI2\",\"7B09\":\"ZHEN3\",\"7B0A\":\"ZHAO4\",\"7B0B\":\"SUN3\",\"7B0C\":\"YA2\",\"7B0D\":\"ZHUI4\",\"7B0E\":\"YUAN2\",\"7B0F\":\"HU4 WEN3 WU4\",\"7B10\":\"GANG1 HANG4\",\"7B11\":\"XIAO4\",\"7B12\":\"CEN2\",\"7B13\":\"PI2\",\"7B14\":\"BI3\",\"7B15\":\"JIAN3\",\"7B16\":\"YI3\",\"7B17\":\"DONG1\",\"7B18\":\"SHAN1\",\"7B19\":\"SHENG1\",\"7B1A\":\"XIA2\",\"7B1B\":\"DI2\",\"7B1C\":\"ZHU2\",\"7B1D\":\"NA4\",\"7B1E\":\"CHI1\",\"7B1F\":\"GU1\",\"7B20\":\"LI4\",\"7B21\":\"QIE4\",\"7B22\":\"MIN3\",\"7B23\":\"BAO1\",\"7B24\":\"TIAO2 SHAO4\",\"7B25\":\"SI4\",\"7B26\":\"FU2\",\"7B27\":\"CE4\",\"7B28\":\"BEN4\",\"7B29\":\"PEI4\",\"7B2A\":\"DA2\",\"7B2B\":\"ZI3\",\"7B2C\":\"DI4\",\"7B2D\":\"LING2\",\"7B2E\":\"ZE2 ZUO2 ZHA4\",\"7B2F\":\"NU2\",\"7B30\":\"FU2\",\"7B31\":\"GOU3\",\"7B32\":\"FAN2 FAN1\",\"7B33\":\"JIA1\",\"7B34\":\"GE3 GAO3\",\"7B35\":\"FAN4\",\"7B36\":\"SHI3\",\"7B37\":\"MAO3\",\"7B38\":\"PO3\",\"7B3A\":\"JIAN1\",\"7B3B\":\"QIONG2\",\"7B3C\":\"LONG2 LONG3\",\"7B3E\":\"BIAN1\",\"7B3F\":\"LUO4\",\"7B40\":\"GUI4\",\"7B41\":\"QU3\",\"7B42\":\"CHI2\",\"7B43\":\"YIN1\",\"7B44\":\"YAO4\",\"7B45\":\"XIAN3\",\"7B46\":\"BI3\",\"7B47\":\"QIONG2\",\"7B48\":\"GUA1 KUO4\",\"7B49\":\"DENG3\",\"7B4A\":\"JIAO3\",\"7B4B\":\"JIN1 QIAN2\",\"7B4C\":\"QUAN2\",\"7B4D\":\"SUN3\",\"7B4E\":\"RU2\",\"7B4F\":\"FA2\",\"7B50\":\"KUANG1\",\"7B51\":\"ZHU2 ZHU4\",\"7B52\":\"TONG3 TONG2 DONG4\",\"7B53\":\"JI1\",\"7B54\":\"DA2 DA1\",\"7B55\":\"XING2 HANG2\",\"7B56\":\"CE4\",\"7B57\":\"ZHONG4\",\"7B58\":\"KOU4\",\"7B59\":\"LAI2\",\"7B5A\":\"BI4\",\"7B5B\":\"SHAI1\",\"7B5C\":\"DANG1\",\"7B5D\":\"ZHENG1\",\"7B5E\":\"CE4\",\"7B5F\":\"FU1\",\"7B60\":\"YUN2 JUN1\",\"7B61\":\"TU2\",\"7B62\":\"PA2\",\"7B63\":\"LI4\",\"7B64\":\"LANG2\",\"7B65\":\"JU3\",\"7B66\":\"GUAN3\",\"7B67\":\"JIAN3 JIAN4\",\"7B68\":\"HAN2\",\"7B69\":\"TONG3 YONG3 DONG4 TONG2\",\"7B6A\":\"XIA2\",\"7B6B\":\"ZHI4\",\"7B6C\":\"CHENG2\",\"7B6D\":\"SUAN4\",\"7B6E\":\"SHI4\",\"7B6F\":\"ZHU4\",\"7B70\":\"ZUO2\",\"7B71\":\"XIAO3\",\"7B72\":\"SHAO1\",\"7B73\":\"TING2\",\"7B74\":\"CE4 JIA1\",\"7B75\":\"YAN2\",\"7B76\":\"GAO3\",\"7B77\":\"KUAI4\",\"7B78\":\"GAN1\",\"7B79\":\"CHOU2\",\"7B7B\":\"GANG4\",\"7B7C\":\"YUN2\",\"7B7E\":\"QIAN1\",\"7B7F\":\"XIAO3\",\"7B80\":\"JIAN3\",\"7B81\":\"PU2\",\"7B82\":\"LAI2\",\"7B83\":\"ZOU1\",\"7B84\":\"BI4 BEI1 PAI2\",\"7B85\":\"BI4\",\"7B86\":\"BI4\",\"7B87\":\"GE4 GE3\",\"7B88\":\"CHI2 DAI4 TAI2\",\"7B89\":\"GUAI3\",\"7B8A\":\"YU1\",\"7B8B\":\"JIAN1\",\"7B8C\":\"ZHAO4\",\"7B8D\":\"GU1\",\"7B8E\":\"CHI2\",\"7B8F\":\"ZHENG1\",\"7B90\":\"JING1 QING4 QIANG1\",\"7B91\":\"SHA4 JIE2\",\"7B92\":\"ZHOU3\",\"7B93\":\"LU4\",\"7B94\":\"BO2\",\"7B95\":\"JI1\",\"7B96\":\"LIN2\",\"7B97\":\"SUAN4\",\"7B98\":\"JUN4\",\"7B99\":\"FU2\",\"7B9A\":\"ZHA2 DA2\",\"7B9B\":\"GU1\",\"7B9C\":\"KONG1\",\"7B9D\":\"QIAN2\",\"7B9E\":\"QUAN1\",\"7B9F\":\"JUN4\",\"7BA0\":\"CHUI2\",\"7BA1\":\"GUAN3\",\"7BA2\":\"YUAN1 WAN3\",\"7BA3\":\"CE4\",\"7BA4\":\"JU2\",\"7BA5\":\"BO3\",\"7BA6\":\"ZE2\",\"7BA7\":\"QIE4\",\"7BA8\":\"TUO4\",\"7BA9\":\"LUO2\",\"7BAA\":\"DAN1\",\"7BAB\":\"XIAO1 XIAO3\",\"7BAC\":\"RUO4 NA4\",\"7BAD\":\"JIAN4\",\"7BAF\":\"BIAN1\",\"7BB0\":\"SUN3\",\"7BB1\":\"XIANG1\",\"7BB2\":\"XIAN3\",\"7BB3\":\"PING2\",\"7BB4\":\"ZHEN1 JIAN3\",\"7BB5\":\"SHENG3 XING1 XING3\",\"7BB6\":\"HU2\",\"7BB7\":\"SHI1\",\"7BB8\":\"ZHU4 ZHUO2\",\"7BB9\":\"YUE1\",\"7BBA\":\"CHUN3\",\"7BBB\":\"LV4\",\"7BBC\":\"WU1\",\"7BBD\":\"DONG3\",\"7BBE\":\"SHUO4 XIAO1 QIAO4\",\"7BBF\":\"JI2\",\"7BC0\":\"JIE2 JIE1\",\"7BC1\":\"HUANG2\",\"7BC2\":\"XING1\",\"7BC3\":\"MEI2\",\"7BC4\":\"FAN4\",\"7BC5\":\"CHUI2 CHUAN2\",\"7BC6\":\"ZHUAN4\",\"7BC7\":\"PIAN1\",\"7BC8\":\"FENG1\",\"7BC9\":\"ZHU2 ZHU4\",\"7BCA\":\"HONG2\",\"7BCB\":\"QIE4\",\"7BCC\":\"HOU2\",\"7BCD\":\"QIU1\",\"7BCE\":\"MIAO3\",\"7BCF\":\"QIAN4\",\"7BD1\":\"KUI4\",\"7BD3\":\"LOU3\",\"7BD4\":\"YUN2\",\"7BD5\":\"HE2\",\"7BD6\":\"TANG2\",\"7BD7\":\"YUE4\",\"7BD8\":\"CHOU1\",\"7BD9\":\"GAO1\",\"7BDA\":\"FEI3\",\"7BDB\":\"RUO4\",\"7BDC\":\"ZHENG1\",\"7BDD\":\"GOU1\",\"7BDE\":\"NIE4\",\"7BDF\":\"QIAN4\",\"7BE0\":\"XIAO3\",\"7BE1\":\"CUAN4\",\"7BE2\":\"GONG1 LONG3\",\"7BE3\":\"PANG2 PENG2\",\"7BE4\":\"DU3\",\"7BE5\":\"LI4\",\"7BE6\":\"BI4 PI2\",\"7BE7\":\"ZHUO2\",\"7BE8\":\"CHU2\",\"7BE9\":\"SHAI1 SHI1\",\"7BEA\":\"CHI2\",\"7BEB\":\"ZHU2\",\"7BEC\":\"QIANG1\",\"7BED\":\"LONG2\",\"7BEE\":\"LAN2\",\"7BEF\":\"JIAN1\",\"7BF0\":\"BU4\",\"7BF1\":\"LI2\",\"7BF2\":\"HUI4 SUI4\",\"7BF3\":\"BI4\",\"7BF4\":\"DI2\",\"7BF5\":\"CONG1\",\"7BF6\":\"YAN1\",\"7BF7\":\"PENG2\",\"7BF8\":\"SEN1 CEN1 ZAN1\",\"7BF9\":\"ZHUAN4 SUAN3 ZUAN3 ZUAN4\",\"7BFA\":\"PAI2\",\"7BFB\":\"PIAO4 PIAO3\",\"7BFC\":\"DOU1\",\"7BFD\":\"YU3\",\"7BFE\":\"MIE4\",\"7BFF\":\"ZHUAN1 TUAN2\",\"7C00\":\"ZE2 ZHAI4\",\"7C01\":\"XI3\",\"7C02\":\"GUO2\",\"7C03\":\"YI2\",\"7C04\":\"HU4\",\"7C05\":\"CHAN3\",\"7C06\":\"KOU4\",\"7C07\":\"CU4 COU4 CHUO4\",\"7C08\":\"PING2\",\"7C09\":\"CHOU4 ZAO4\",\"7C0A\":\"JI1\",\"7C0B\":\"GUI3\",\"7C0C\":\"SU4\",\"7C0D\":\"LOU3 LV3 JU4\",\"7C0E\":\"ZHA4\",\"7C0F\":\"LU4\",\"7C10\":\"NIAN3\",\"7C11\":\"SUO1\",\"7C12\":\"CUAN4\",\"7C14\":\"SUO1\",\"7C15\":\"LE4\",\"7C16\":\"DUAN4\",\"7C18\":\"XIAO1 XIAO3\",\"7C19\":\"BO2\",\"7C1A\":\"MI4\",\"7C1B\":\"SI1\",\"7C1C\":\"DANG4\",\"7C1D\":\"LIAO2 LAO3\",\"7C1E\":\"DAN1\",\"7C1F\":\"DIAN4\",\"7C20\":\"FU3\",\"7C21\":\"JIAN3\",\"7C22\":\"MIN3\",\"7C23\":\"KUI4\",\"7C24\":\"DAI4\",\"7C25\":\"JIAO1 QIAO2\",\"7C26\":\"DENG1\",\"7C27\":\"HUANG2\",\"7C28\":\"SUN3\",\"7C29\":\"LAO2\",\"7C2A\":\"ZAN1 ZAN3\",\"7C2B\":\"XIAO1 XIAO3\",\"7C2C\":\"LU4 DU4\",\"7C2D\":\"SHI4\",\"7C2E\":\"ZAN1 ZAN3\",\"7C30\":\"PAI2 BEI1\",\"7C32\":\"PAI2\",\"7C33\":\"GAN4 GAN3\",\"7C34\":\"JU4\",\"7C35\":\"DU4 LU4\",\"7C36\":\"LU4\",\"7C37\":\"YAN2\",\"7C38\":\"BO4 BO3\",\"7C39\":\"DANG1\",\"7C3A\":\"SAI4\",\"7C3B\":\"KE1 ZHUA1\",\"7C3C\":\"LONG2\",\"7C3D\":\"QIAN1\",\"7C3E\":\"LIAN2\",\"7C3F\":\"BU4 BO2\",\"7C40\":\"ZHOU4\",\"7C41\":\"LAI4\",\"7C43\":\"LAN2\",\"7C44\":\"KUI4\",\"7C45\":\"YU2\",\"7C46\":\"YUE4\",\"7C47\":\"HAO2\",\"7C48\":\"ZHEN1\",\"7C49\":\"TAI2\",\"7C4A\":\"TI4 DI2\",\"7C4B\":\"MI2\",\"7C4C\":\"CHOU2 TAO2\",\"7C4D\":\"JI2 JIE4\",\"7C50\":\"TENG2\",\"7C51\":\"ZHUAN4 XUAN3\",\"7C52\":\"ZHOU4\",\"7C53\":\"FAN1 FAN2\",\"7C54\":\"SOU3 SHU4\",\"7C55\":\"ZHOU4\",\"7C57\":\"ZHUO2\",\"7C58\":\"TENG2\",\"7C59\":\"LU4\",\"7C5A\":\"LU2\",\"7C5B\":\"JIAN1\",\"7C5C\":\"TUO4\",\"7C5D\":\"YING2\",\"7C5E\":\"YU4\",\"7C5F\":\"LAI4\",\"7C60\":\"LONG2 LONG3\",\"7C62\":\"LIAN2\",\"7C63\":\"LAN2\",\"7C64\":\"QIAN1\",\"7C65\":\"YUE4\",\"7C66\":\"ZHONG1\",\"7C67\":\"QU2 JU3\",\"7C68\":\"LIAN2\",\"7C69\":\"BIAN1\",\"7C6A\":\"DUAN4\",\"7C6B\":\"ZUAN3\",\"7C6C\":\"LI2\",\"7C6D\":\"SI1\",\"7C6E\":\"LUO2\",\"7C6F\":\"YING2\",\"7C70\":\"YUE4\",\"7C71\":\"ZHUO2\",\"7C72\":\"YU4 XU1\",\"7C73\":\"MI3\",\"7C74\":\"DI2 ZA2\",\"7C75\":\"FAN2\",\"7C76\":\"SHEN1\",\"7C77\":\"ZHE2\",\"7C78\":\"SHEN1\",\"7C79\":\"NV3\",\"7C7A\":\"XIE2 HE2\",\"7C7B\":\"LEI4 LI4\",\"7C7C\":\"XIAN1\",\"7C7D\":\"ZI3\",\"7C7E\":\"NI2\",\"7C7F\":\"CUN4\",\"7C81\":\"QIAN1\",\"7C83\":\"BI3\",\"7C84\":\"BAN3\",\"7C85\":\"WU4\",\"7C86\":\"SHA1\",\"7C87\":\"KANG1\",\"7C88\":\"ROU3\",\"7C89\":\"FEN3\",\"7C8A\":\"BI4\",\"7C8B\":\"CUI4\",\"7C8D\":\"LI2\",\"7C8E\":\"CHI3\",\"7C91\":\"BA1\",\"7C92\":\"LI4\",\"7C93\":\"GAN1\",\"7C94\":\"JU4\",\"7C95\":\"PO4\",\"7C96\":\"MO4\",\"7C97\":\"CU1\",\"7C98\":\"NIAN2 LIAN1 ZHAN1\",\"7C99\":\"ZHOU4\",\"7C9A\":\"LI2\",\"7C9B\":\"SU4\",\"7C9C\":\"TIAO4\",\"7C9D\":\"LI4\",\"7C9E\":\"XI1 QI1\",\"7C9F\":\"SU4\",\"7CA0\":\"HONG2\",\"7CA1\":\"TONG2\",\"7CA2\":\"ZI1 CI2 JI4\",\"7CA3\":\"CE4 SAN3\",\"7CA4\":\"YUE4\",\"7CA5\":\"ZHOU1 YU4 ZHU4\",\"7CA6\":\"LIN4 LIN2\",\"7CA7\":\"ZHUANG1\",\"7CA8\":\"BAI3\",\"7CAA\":\"FEN4 SAN1\",\"7CAE\":\"LIANG2\",\"7CAF\":\"XIAN4\",\"7CB0\":\"FU2 FU1\",\"7CB1\":\"LIANG2\",\"7CB2\":\"CAN4\",\"7CB3\":\"GENG1 JING1\",\"7CB4\":\"LI3\",\"7CB5\":\"YUE4\",\"7CB6\":\"LU4\",\"7CB7\":\"JU2\",\"7CB8\":\"QI2\",\"7CB9\":\"CUI4 SUI4\",\"7CBA\":\"BAI4\",\"7CBB\":\"ZHANG1\",\"7CBC\":\"LIN2 LIN3\",\"7CBD\":\"ZONG4\",\"7CBE\":\"JING1 QING2 JING4\",\"7CBF\":\"GUO3\",\"7CC1\":\"SAN1 SAN3\",\"7CC2\":\"SAN3\",\"7CC3\":\"TANG2\",\"7CC4\":\"BIAN1\",\"7CC5\":\"ROU3 ROU2\",\"7CC6\":\"MIAN4\",\"7CC7\":\"HOU2\",\"7CC8\":\"XU3\",\"7CC9\":\"ZONG4\",\"7CCA\":\"HU2 HU1 HU4\",\"7CCB\":\"JIAN4\",\"7CCC\":\"ZAN2 ZAN1\",\"7CCD\":\"CI2 ZI1\",\"7CCE\":\"LI2\",\"7CCF\":\"XIE4\",\"7CD0\":\"FU1\",\"7CD1\":\"NI4\",\"7CD2\":\"BEI4\",\"7CD3\":\"GU3\",\"7CD4\":\"XIU3 XIU1\",\"7CD5\":\"GAO1\",\"7CD6\":\"TANG2\",\"7CD7\":\"QIU3\",\"7CD9\":\"CAO1\",\"7CDA\":\"ZHUANG1\",\"7CDB\":\"TANG2\",\"7CDC\":\"MI2 MEI2\",\"7CDD\":\"SAN3 SAN1\",\"7CDE\":\"FEN4\",\"7CDF\":\"ZAO1\",\"7CE0\":\"KANG1\",\"7CE1\":\"JIANG4\",\"7CE2\":\"MO2\",\"7CE3\":\"SAN3 SAN1\",\"7CE4\":\"SAN3\",\"7CE5\":\"NUO4\",\"7CE6\":\"XI1 CHI4\",\"7CE7\":\"LIANG2\",\"7CE8\":\"JIANG4 JIANG1\",\"7CE9\":\"KUAI4\",\"7CEA\":\"BO2\",\"7CEB\":\"HUAN2\",\"7CED\":\"ZONG4\",\"7CEE\":\"XIAN4\",\"7CEF\":\"NUO4\",\"7CF0\":\"TUAN2\",\"7CF1\":\"NIE4\",\"7CF2\":\"LI4\",\"7CF3\":\"ZUO4\",\"7CF4\":\"DI2\",\"7CF5\":\"NIE4\",\"7CF6\":\"TIAO4\",\"7CF7\":\"LAN2\",\"7CF8\":\"MI4 SI1\",\"7CF9\":\"SI1\",\"7CFA\":\"JIU1 JIU3 JIAO3\",\"7CFB\":\"XI4 JI4\",\"7CFC\":\"GONG1\",\"7CFD\":\"ZHENG3\",\"7CFE\":\"JIU1 JIU3\",\"7CFF\":\"YOU4\",\"7D00\":\"JI4 JI3\",\"7D01\":\"CHA4\",\"7D02\":\"ZHOU4\",\"7D03\":\"XUN2\",\"7D04\":\"YUE1 YAO1 YAO4 DI4\",\"7D05\":\"HONG2 GONG1 JIANG4\",\"7D06\":\"YU1 YU3 OU1\",\"7D07\":\"HE2 GE1 JIE2\",\"7D08\":\"WAN2\",\"7D09\":\"REN4\",\"7D0A\":\"WEN4 WEN3\",\"7D0B\":\"WEN2 WEN4\",\"7D0C\":\"QIU2\",\"7D0D\":\"NA4\",\"7D0E\":\"ZI1\",\"7D0F\":\"TOU3\",\"7D10\":\"NIU3\",\"7D11\":\"FOU2\",\"7D12\":\"JIE4 JI4\",\"7D13\":\"SHU1\",\"7D14\":\"CHUN2 QUAN2 TUN2 ZHUN1 ZHUN3 ZI1\",\"7D15\":\"PI1 PI2 BI3 BI1 BI4 CHI3\",\"7D16\":\"YIN3 ZHEN4\",\"7D17\":\"SHA1 MIAO3\",\"7D18\":\"HONG2\",\"7D19\":\"ZHI3\",\"7D1A\":\"JI2\",\"7D1B\":\"FEN1\",\"7D1C\":\"YUN2\",\"7D1D\":\"REN4 REN2\",\"7D1E\":\"DAN3\",\"7D1F\":\"JIN1 JIN4\",\"7D20\":\"SU4\",\"7D21\":\"FANG3 BANG3 FANG4\",\"7D22\":\"SUO3\",\"7D23\":\"CUI4 ZU2\",\"7D24\":\"JIU3\",\"7D25\":\"ZHA2 ZA1\",\"7D27\":\"JIN3\",\"7D28\":\"FU4\",\"7D29\":\"ZHI4\",\"7D2A\":\"CI3\",\"7D2B\":\"ZI3\",\"7D2C\":\"CHOU2 CHOU1\",\"7D2D\":\"HONG2\",\"7D2E\":\"ZA1 ZHA2 ZHA2\",\"7D2F\":\"LEI4 LEI3 LEI2 LV4 LIE4\",\"7D30\":\"XI4\",\"7D31\":\"FU2\",\"7D32\":\"XIE4 YI4\",\"7D33\":\"SHEN1\",\"7D34\":\"BEI4\",\"7D35\":\"ZHU4\",\"7D36\":\"QU3\",\"7D37\":\"LING2\",\"7D38\":\"ZHU4\",\"7D39\":\"SHAO4 CHAO1\",\"7D3A\":\"GAN4\",\"7D3B\":\"YANG1\",\"7D3C\":\"FU2 FEI4\",\"7D3D\":\"TUO2\",\"7D3E\":\"ZHEN3 TIAN3\",\"7D3F\":\"DAI4\",\"7D40\":\"CHU4 ZHUO2\",\"7D41\":\"SHI1\",\"7D42\":\"ZHONG1\",\"7D43\":\"XIAN2\",\"7D44\":\"ZU3 QU1\",\"7D45\":\"JIONG3\",\"7D46\":\"BAN4\",\"7D47\":\"JU4 QU2\",\"7D48\":\"MO4\",\"7D49\":\"SHU4\",\"7D4A\":\"ZUI4\",\"7D4C\":\"JING1\",\"7D4D\":\"REN2 REN4\",\"7D4E\":\"HENG4 HANG2\",\"7D4F\":\"XIE4 YI4\",\"7D50\":\"JIE2 JI4 JIE1\",\"7D51\":\"ZHU1\",\"7D52\":\"CHOU2\",\"7D53\":\"GUA4\",\"7D54\":\"BAI3\",\"7D55\":\"JUE2\",\"7D56\":\"KUANG4\",\"7D57\":\"HU2\",\"7D58\":\"CI4\",\"7D59\":\"GENG1\",\"7D5A\":\"GENG1 GENG4\",\"7D5B\":\"TAO1\",\"7D5C\":\"XIE2 JIE2\",\"7D5D\":\"KU4\",\"7D5E\":\"JIAO3 XIAO2 JIAO4\",\"7D5F\":\"QUAN1\",\"7D60\":\"GAI3\",\"7D61\":\"LUO4 LAO4\",\"7D62\":\"XUAN4 XUN2\",\"7D63\":\"BING1 BENG1\",\"7D64\":\"XIAN4\",\"7D65\":\"FU2 BEI4\",\"7D66\":\"GEI3 JI3 XIA2\",\"7D67\":\"TONG2\",\"7D68\":\"RONG2\",\"7D69\":\"TIAO4\",\"7D6A\":\"YIN1\",\"7D6B\":\"LEI3\",\"7D6C\":\"XIE4\",\"7D6D\":\"QUAN4 JUAN4\",\"7D6E\":\"XU4 NV4 QU4 CHU4 NA4\",\"7D6F\":\"GAI1\",\"7D70\":\"DIE2\",\"7D71\":\"TONG3\",\"7D72\":\"SI1\",\"7D73\":\"JIANG4\",\"7D74\":\"XIANG2\",\"7D75\":\"HUI4\",\"7D76\":\"JUE2\",\"7D77\":\"ZHI2\",\"7D78\":\"JIAN3\",\"7D79\":\"JUAN4 XUAN4\",\"7D7A\":\"CHI1\",\"7D7B\":\"MIAN3 WEN4\",\"7D7C\":\"ZHEN3 ZHI4\",\"7D7D\":\"LV3\",\"7D7E\":\"CHENG2\",\"7D7F\":\"QIU2\",\"7D80\":\"SHU1\",\"7D81\":\"BANG3\",\"7D82\":\"TONG3\",\"7D83\":\"XIAO1 SHAO1\",\"7D84\":\"WAN4 HUAN3\",\"7D85\":\"QIN1 XIAN1\",\"7D86\":\"GENG3 BING3\",\"7D87\":\"XIU3\",\"7D88\":\"TI2 TI4\",\"7D89\":\"XIU4 TOU4\",\"7D8A\":\"XIE2\",\"7D8B\":\"HONG2\",\"7D8C\":\"XI4\",\"7D8D\":\"FU2\",\"7D8E\":\"TING1 TING2\",\"7D8F\":\"SUI1 SUI2 SHUAI1 RUI2 TUO3\",\"7D90\":\"DUI4\",\"7D91\":\"KUN3\",\"7D92\":\"FU1\",\"7D93\":\"JING1 JING4\",\"7D94\":\"HU4\",\"7D95\":\"ZHI1\",\"7D96\":\"YAN2\",\"7D97\":\"JIONG3\",\"7D98\":\"FENG2\",\"7D99\":\"JI4\",\"7D9C\":\"ZONG1 ZONG4 ZENG4\",\"7D9D\":\"LIN2 CHEN1 SHEN1\",\"7D9E\":\"DUO3\",\"7D9F\":\"LI4\",\"7DA0\":\"LV4 LU4\",\"7DA1\":\"LIANG2\",\"7DA2\":\"CHOU2 TAO1 DIAO4\",\"7DA3\":\"QUAN3\",\"7DA4\":\"SHAO4\",\"7DA5\":\"QI4\",\"7DA6\":\"QI2\",\"7DA7\":\"ZHUN3\",\"7DA8\":\"QI2\",\"7DA9\":\"WAN3\",\"7DAA\":\"QIAN4 ZHENG1\",\"7DAB\":\"XIAN4\",\"7DAC\":\"SHOU4\",\"7DAD\":\"WEI2 YI2\",\"7DAE\":\"QI3 QING4\",\"7DAF\":\"TAO2 KU4\",\"7DB0\":\"WAN3\",\"7DB1\":\"GANG1\",\"7DB2\":\"WANG3\",\"7DB3\":\"BENG1 BENG3\",\"7DB4\":\"ZHUI4 CHUO4\",\"7DB5\":\"CAI3\",\"7DB6\":\"GUO3\",\"7DB7\":\"CUI4\",\"7DB8\":\"LUN2 GUAN1\",\"7DB9\":\"LIU3\",\"7DBA\":\"QI3 YI3\",\"7DBB\":\"ZHAN4\",\"7DBC\":\"BEI1 BI4\",\"7DBD\":\"CHUO4 CHAO1\",\"7DBE\":\"LING2\",\"7DBF\":\"MIAN2\",\"7DC0\":\"QI1\",\"7DC1\":\"QIE4 JI1 QI1 QI4\",\"7DC2\":\"TAN1 TIAN2\",\"7DC3\":\"ZONG1\",\"7DC4\":\"GUN3 HUN4 HUN2\",\"7DC5\":\"ZOU1\",\"7DC6\":\"YI4 XI4\",\"7DC7\":\"ZI1\",\"7DC8\":\"XING4\",\"7DC9\":\"LIANG3\",\"7DCA\":\"JIN3\",\"7DCB\":\"FEI1\",\"7DCC\":\"RUI2\",\"7DCD\":\"MIN2\",\"7DCE\":\"YU4\",\"7DCF\":\"ZONG3\",\"7DD0\":\"FAN2 PAN2 PO2\",\"7DD1\":\"LV4\",\"7DD2\":\"XU4\",\"7DD3\":\"YING1\",\"7DD4\":\"ZHANG4\",\"7DD6\":\"XU4\",\"7DD7\":\"XIANG1\",\"7DD8\":\"JIAN1\",\"7DD9\":\"KE4\",\"7DDA\":\"XIAN4\",\"7DDB\":\"RUAN3\",\"7DDC\":\"MIAN2\",\"7DDD\":\"JI1 QI4 QI1 JI2\",\"7DDE\":\"DUAN4\",\"7DDF\":\"ZHONG4\",\"7DE0\":\"DI4\",\"7DE1\":\"MIN2 MIN3 MIAN2 HUN2\",\"7DE2\":\"MIAO2\",\"7DE3\":\"YUAN2 YUAN4\",\"7DE4\":\"XIE4\",\"7DE5\":\"BAO3\",\"7DE6\":\"SI1\",\"7DE7\":\"QIU1\",\"7DE8\":\"BIAN1 BIAN4 BIAN3\",\"7DE9\":\"HUAN3\",\"7DEA\":\"GENG1 GENG4\",\"7DEB\":\"CONG1 ZONG1 ZONG3\",\"7DEC\":\"MIAN3\",\"7DED\":\"WEI4\",\"7DEE\":\"FU4\",\"7DEF\":\"WEI3\",\"7DF0\":\"YU2\",\"7DF1\":\"GOU1\",\"7DF2\":\"MIAO3\",\"7DF3\":\"XIE2\",\"7DF4\":\"LIAN4\",\"7DF5\":\"ZONG1 ZONG4\",\"7DF6\":\"BIAN4 PIAN2 BIAN3\",\"7DF7\":\"YUN4\",\"7DF8\":\"YIN1\",\"7DF9\":\"TI2\",\"7DFA\":\"GUA1 GUO1 WO1\",\"7DFB\":\"ZHI4\",\"7DFC\":\"YUN1\",\"7DFD\":\"CHENG1\",\"7DFE\":\"CHAN2\",\"7DFF\":\"DAI4\",\"7E00\":\"XIA2\",\"7E01\":\"YUAN2\",\"7E02\":\"ZONG3 ZONG1\",\"7E03\":\"XU1\",\"7E06\":\"GENG1\",\"7E08\":\"YING2\",\"7E09\":\"JIN4\",\"7E0A\":\"YI4\",\"7E0B\":\"ZHUI4\",\"7E0C\":\"NI4\",\"7E0D\":\"BANG1\",\"7E0E\":\"GU3\",\"7E0F\":\"PAN2\",\"7E10\":\"ZHOU4 CHAO4 CU4 ZHOU1\",\"7E11\":\"JIAN1\",\"7E12\":\"CUO3\",\"7E13\":\"QUAN3 QUAN4\",\"7E14\":\"SHUANG3\",\"7E15\":\"YUN1 YUN4\",\"7E16\":\"XIA2\",\"7E17\":\"CUI1 SUI1 SHUAI1\",\"7E18\":\"XI1\",\"7E19\":\"RONG2\",\"7E1A\":\"TAO1\",\"7E1B\":\"FU2\",\"7E1C\":\"YUN2\",\"7E1D\":\"CHEN1 ZHEN3 ZHEN1\",\"7E1E\":\"GAO3\",\"7E1F\":\"RU4 RONG3\",\"7E20\":\"HU2\",\"7E21\":\"ZAI3 ZAI4\",\"7E22\":\"TENG2\",\"7E23\":\"XIAN4 XUAN2\",\"7E24\":\"SU4\",\"7E25\":\"ZHEN3\",\"7E26\":\"ZONG4 CONG2 ZONG3\",\"7E27\":\"TAO1\",\"7E29\":\"CAI4\",\"7E2A\":\"BI4\",\"7E2B\":\"FENG2 FENG4\",\"7E2C\":\"CU4\",\"7E2D\":\"LI2\",\"7E2E\":\"SUO1 SU4\",\"7E2F\":\"YIN3 YAN3\",\"7E30\":\"XI3\",\"7E31\":\"ZONG4 ZONG3 SONG3 CONG2\",\"7E32\":\"LEI2\",\"7E33\":\"ZHUAN4\",\"7E34\":\"QIAN1 QIAN4\",\"7E35\":\"MAN4\",\"7E36\":\"ZHI2\",\"7E37\":\"LV3\",\"7E38\":\"MO4 MU4\",\"7E39\":\"PIAO3 PIAO1\",\"7E3A\":\"LIAN2\",\"7E3B\":\"MI2\",\"7E3C\":\"XUAN4\",\"7E3D\":\"ZONG3 ZONG1\",\"7E3E\":\"JI1\",\"7E3F\":\"SHAN1\",\"7E40\":\"SUI4\",\"7E41\":\"FAN2 PO2 PAN2\",\"7E42\":\"SHUAI4\",\"7E43\":\"BENG1 BENG3 BENG4\",\"7E44\":\"YI1\",\"7E45\":\"SAO1 ZAO3\",\"7E46\":\"MOU2 JIU1 LIAO3 MIAO4 MIU4 MU4\",\"7E47\":\"YAO2 YOU2 ZHOU4 YAO1\",\"7E48\":\"QIANG3 JIANG3\",\"7E49\":\"HUN2\",\"7E4B\":\"XI4\",\"7E4D\":\"XIU4\",\"7E4E\":\"RAN2\",\"7E4F\":\"XUAN4\",\"7E50\":\"SUI4 HUI4\",\"7E51\":\"QIAO1\",\"7E52\":\"ZENG1 CENG2 ZENG4\",\"7E53\":\"ZUO3\",\"7E54\":\"ZHI1 ZHI4\",\"7E55\":\"SHAN4\",\"7E56\":\"SAN3\",\"7E57\":\"LIN2\",\"7E58\":\"YU4 JU2\",\"7E59\":\"FAN1 FAN2\",\"7E5A\":\"LIAO2 RAO3\",\"7E5B\":\"CHUO4 CHAO1\",\"7E5C\":\"ZUN1 ZUN3\",\"7E5D\":\"JIAN4\",\"7E5E\":\"RAO4 RAO3\",\"7E5F\":\"CHAN3\",\"7E60\":\"RUI3\",\"7E61\":\"XIU4\",\"7E62\":\"HUI4 HUI2\",\"7E63\":\"HUA4\",\"7E64\":\"ZUAN3\",\"7E65\":\"XI1\",\"7E66\":\"QIANG3 JIANG3\",\"7E68\":\"DA2 DA5\",\"7E69\":\"SHENG2 MIN3 YING4 SHENG4\",\"7E6A\":\"HUI4 GUI4\",\"7E6B\":\"XI4 JI4\",\"7E6C\":\"SE4\",\"7E6D\":\"JIAN3\",\"7E6E\":\"JIANG1\",\"7E6F\":\"HUAN2 HUAN4\",\"7E70\":\"ZAO3 QIAO1 SAO1\",\"7E71\":\"CONG1\",\"7E72\":\"JIE4\",\"7E73\":\"JIAO3 ZHUO2 JIAO4 HE2\",\"7E74\":\"BO4 BI4\",\"7E75\":\"CHAN2\",\"7E76\":\"YI4\",\"7E77\":\"NAO2\",\"7E78\":\"SUI4\",\"7E79\":\"YI4 SHI4\",\"7E7A\":\"SHAI3\",\"7E7B\":\"XU1 RU2\",\"7E7C\":\"JI4\",\"7E7D\":\"BIN1\",\"7E7E\":\"QIAN3\",\"7E7F\":\"LAN2\",\"7E80\":\"PU2 BU2 FU2\",\"7E81\":\"XUN1\",\"7E82\":\"ZUAN3 ZUAN4\",\"7E83\":\"QI2\",\"7E84\":\"PENG2\",\"7E85\":\"LI4\",\"7E86\":\"MO4\",\"7E87\":\"LEI4\",\"7E88\":\"XIE2\",\"7E89\":\"ZUAN3\",\"7E8A\":\"KUANG4\",\"7E8B\":\"YOU1\",\"7E8C\":\"XU4\",\"7E8D\":\"LEI2 LEI4 LEI3\",\"7E8E\":\"XIAN1\",\"7E8F\":\"CHAN2\",\"7E91\":\"LU2\",\"7E92\":\"CHAN2\",\"7E93\":\"YING1\",\"7E94\":\"CAI2\",\"7E95\":\"XIANG1 RANG2\",\"7E96\":\"XIAN1 JIAN1\",\"7E97\":\"ZUI1\",\"7E98\":\"ZUAN3\",\"7E99\":\"LUO4\",\"7E9A\":\"XI3 LI2 LI3 SHAI3 SHI1 SHI3\",\"7E9B\":\"DAO4 DU2\",\"7E9C\":\"LAN4\",\"7E9D\":\"LEI2\",\"7E9E\":\"LIAN4\",\"7E9F\":\"SI1\",\"7EA0\":\"JIU1 JIU3 JIAO3\",\"7EA1\":\"YU1 YU3\",\"7EA2\":\"HONG2 HONG1 GONG1\",\"7EA3\":\"ZHOU4\",\"7EA4\":\"XIAN1 JIAN1 QIAN4\",\"7EA5\":\"HE2 GE1\",\"7EA6\":\"YUE1\",\"7EA7\":\"JI2\",\"7EA8\":\"WAN2\",\"7EA9\":\"KUANG4\",\"7EAA\":\"JI4 JI3\",\"7EAB\":\"REN4\",\"7EAC\":\"WEI3\",\"7EAD\":\"YUN2\",\"7EAE\":\"HONG2\",\"7EAF\":\"CHUN2 QUAN2 TUN2 ZHUN1 ZHUN3\",\"7EB0\":\"PI2 BI3 PI1\",\"7EB1\":\"SHA1\",\"7EB2\":\"GANG1\",\"7EB3\":\"NA4\",\"7EB4\":\"REN2 REN4\",\"7EB5\":\"ZONG4 ZONG3 SONG3\",\"7EB6\":\"LUN2 GUAN1\",\"7EB7\":\"FEN1\",\"7EB8\":\"ZHI3\",\"7EB9\":\"WEN2\",\"7EBA\":\"FANG3 BANG3\",\"7EBB\":\"ZHU4\",\"7EBC\":\"YIN3 ZHEN4\",\"7EBD\":\"NIU3\",\"7EBE\":\"SHU1\",\"7EBF\":\"XIAN4\",\"7EC0\":\"GAN4\",\"7EC1\":\"XIE4 YI4\",\"7EC2\":\"FU2\",\"7EC3\":\"LIAN4\",\"7EC4\":\"ZU3\",\"7EC5\":\"SHEN1\",\"7EC6\":\"XI4\",\"7EC7\":\"ZHI1 ZHI4\",\"7EC8\":\"ZHONG1\",\"7EC9\":\"ZHOU4\",\"7ECA\":\"BAN4\",\"7ECB\":\"FU2\",\"7ECC\":\"ZHUO2 CHU4\",\"7ECD\":\"SHAO4\",\"7ECE\":\"YI4\",\"7ECF\":\"JING1 JING4\",\"7ED0\":\"DAI4\",\"7ED1\":\"BANG3\",\"7ED2\":\"RONG2\",\"7ED3\":\"JIE2 JIE1 JI4\",\"7ED4\":\"KU4\",\"7ED5\":\"RAO4 RAO3\",\"7ED6\":\"DIE2\",\"7ED7\":\"HENG4 HANG2\",\"7ED8\":\"HUI4\",\"7ED9\":\"GEI3 JI3\",\"7EDA\":\"XUAN4\",\"7EDB\":\"JIANG4\",\"7EDC\":\"LUO4 LAO4\",\"7EDD\":\"JUE2\",\"7EDE\":\"JIAO3\",\"7EDF\":\"TONG3\",\"7EE0\":\"GENG3\",\"7EE1\":\"XIAO1\",\"7EE2\":\"JUAN4\",\"7EE3\":\"XIU4\",\"7EE4\":\"XI4\",\"7EE5\":\"SUI1 SUI2 TUO3\",\"7EE6\":\"TAO1\",\"7EE7\":\"JI4\",\"7EE8\":\"TI2 TI4\",\"7EE9\":\"JI1\",\"7EEA\":\"XU4\",\"7EEB\":\"LING2\",\"7EEC\":\"YING1\",\"7EED\":\"XU4\",\"7EEE\":\"QI3\",\"7EEF\":\"FEI1\",\"7EF0\":\"CHUO4 CHAO1\",\"7EF1\":\"ZHANG3\",\"7EF2\":\"GUN3\",\"7EF3\":\"SHENG2 MIN3 YING4\",\"7EF4\":\"WEI2\",\"7EF5\":\"MIAN2\",\"7EF6\":\"SHOU4\",\"7EF7\":\"BENG1 BENG3 BENG4\",\"7EF8\":\"CHOU2 TAO1\",\"7EF9\":\"TAO2 KU4\",\"7EFA\":\"LIU3\",\"7EFB\":\"QUAN3\",\"7EFC\":\"ZONG4 ZONG1 ZENG4\",\"7EFD\":\"ZHAN4\",\"7EFE\":\"WAN3\",\"7EFF\":\"LV4 LU4\",\"7F00\":\"ZHUI4 CHUO4\",\"7F01\":\"ZI1\",\"7F02\":\"KE4\",\"7F03\":\"XIANG1\",\"7F04\":\"JIAN1\",\"7F05\":\"MIAN3\",\"7F06\":\"LAN4\",\"7F07\":\"TI2\",\"7F08\":\"MIAO3\",\"7F09\":\"QI4 JI1 QI1\",\"7F0A\":\"YUN1 YUN4 WEN1\",\"7F0B\":\"HUI4\",\"7F0C\":\"SI1\",\"7F0D\":\"DUO3\",\"7F0E\":\"DUAN4\",\"7F0F\":\"BIAN4 PIAN2\",\"7F10\":\"XIAN4\",\"7F11\":\"GOU1\",\"7F12\":\"ZHUI4\",\"7F13\":\"HUAN3\",\"7F14\":\"DI4\",\"7F15\":\"LV3\",\"7F16\":\"BIAN1 BIAN4\",\"7F17\":\"MIN2\",\"7F18\":\"YUAN2 YUAN4\",\"7F19\":\"JIN4\",\"7F1A\":\"FU2\",\"7F1B\":\"RU4\",\"7F1C\":\"ZHEN1 ZHEN3\",\"7F1D\":\"FENG2 FENG4\",\"7F1E\":\"SHUAI1 CUI1\",\"7F1F\":\"GAO3\",\"7F20\":\"CHAN2\",\"7F21\":\"LI2\",\"7F22\":\"YI4\",\"7F23\":\"JIAN1\",\"7F24\":\"BIN1\",\"7F25\":\"PIAO3 PIAO1\",\"7F26\":\"MAN4\",\"7F27\":\"LEI2\",\"7F28\":\"YING1\",\"7F29\":\"SUO1 SU4\",\"7F2A\":\"MOU2 JIU1 LIAO3 MIAO4 MIU4 MU4\",\"7F2B\":\"SAO1 ZAO3\",\"7F2C\":\"XIE2\",\"7F2D\":\"LIAO2\",\"7F2E\":\"SHAN4\",\"7F2F\":\"ZENG1 CENG2\",\"7F30\":\"JIANG1\",\"7F31\":\"QIAN3\",\"7F32\":\"ZAO3 QIAO1 SAO1\",\"7F33\":\"HUAN2 HUAN4\",\"7F34\":\"JIAO3 ZHUO2\",\"7F35\":\"ZUAN3\",\"7F36\":\"FOU3 GUAN4\",\"7F37\":\"XIE4\",\"7F38\":\"GANG1 HONG2\",\"7F39\":\"FOU3\",\"7F3A\":\"QUE1\",\"7F3B\":\"FOU3\",\"7F3D\":\"BO1\",\"7F3E\":\"PING2\",\"7F3F\":\"HOU4 XIANG4\",\"7F41\":\"GANG1\",\"7F42\":\"YING1\",\"7F43\":\"YING1\",\"7F44\":\"QING4\",\"7F45\":\"XIA4\",\"7F46\":\"GUAN4\",\"7F47\":\"ZUN1\",\"7F48\":\"TAN2\",\"7F4A\":\"QI4\",\"7F4B\":\"WENG4\",\"7F4C\":\"YING1\",\"7F4D\":\"LEI2\",\"7F4E\":\"TAN2\",\"7F4F\":\"LU2\",\"7F50\":\"GUAN4\",\"7F51\":\"WANG3\",\"7F52\":\"WANG3\",\"7F53\":\"GANG1\",\"7F54\":\"WANG3 WANG2\",\"7F55\":\"HAN3 HAN4\",\"7F57\":\"LUO1 LUO2 LUO5\",\"7F58\":\"FU2 FU1\",\"7F59\":\"MI2 SHEN1\",\"7F5A\":\"FA2\",\"7F5B\":\"GU1\",\"7F5C\":\"ZHU3\",\"7F5D\":\"JU1 JIE1\",\"7F5E\":\"MAO2\",\"7F5F\":\"GU3\",\"7F60\":\"MIN2\",\"7F61\":\"GANG1\",\"7F62\":\"BA4 BA5 BAI3 PI2\",\"7F63\":\"GUA4\",\"7F64\":\"TI2\",\"7F65\":\"JUAN4\",\"7F66\":\"FU2 FU1\",\"7F67\":\"LIN2 SHEN1\",\"7F68\":\"YAN3\",\"7F69\":\"ZHAO4\",\"7F6A\":\"ZUI4\",\"7F6B\":\"GUA4 GUAI3 HUA4\",\"7F6C\":\"ZHUO2\",\"7F6D\":\"YU4\",\"7F6E\":\"ZHI4\",\"7F6F\":\"AN3\",\"7F70\":\"FA2\",\"7F71\":\"NAN3 LAN3\",\"7F72\":\"SHU3\",\"7F73\":\"SI1\",\"7F74\":\"PI2\",\"7F75\":\"MA4\",\"7F76\":\"LIU3\",\"7F77\":\"BA4 BA5 BAI3 PI2 PI4 BI3\",\"7F78\":\"FA2\",\"7F79\":\"LI2\",\"7F7A\":\"CHAO1\",\"7F7B\":\"WEI4 YU4\",\"7F7C\":\"BI4\",\"7F7D\":\"JI4\",\"7F7E\":\"ZENG1\",\"7F7F\":\"TONG2 CHONG1\",\"7F80\":\"LIU3\",\"7F81\":\"JI1\",\"7F82\":\"JUAN4\",\"7F83\":\"MI4\",\"7F84\":\"ZHAO4\",\"7F85\":\"LUO2 LUO1 LUO5\",\"7F86\":\"PI2\",\"7F87\":\"JI1\",\"7F88\":\"JI1\",\"7F89\":\"LUAN2\",\"7F8A\":\"YANG2\",\"7F8B\":\"MI3 MIE1\",\"7F8C\":\"QIANG1\",\"7F8D\":\"TA4 DA2\",\"7F8E\":\"MEI3\",\"7F8F\":\"YANG2\",\"7F90\":\"YOU3\",\"7F91\":\"YOU3\",\"7F92\":\"FEN2\",\"7F93\":\"BA1\",\"7F94\":\"GAO1\",\"7F95\":\"YANG4\",\"7F96\":\"GU3\",\"7F97\":\"QIANG1\",\"7F98\":\"ZANG1\",\"7F99\":\"GAO1\",\"7F9A\":\"LING2\",\"7F9B\":\"YI4 XI4\",\"7F9C\":\"ZHU4\",\"7F9D\":\"DI1 DI3\",\"7F9E\":\"XIU1\",\"7F9F\":\"QIAN1 QIANG3\",\"7FA0\":\"YI2\",\"7FA1\":\"XIAN4 YI2 YAN2\",\"7FA2\":\"RONG2\",\"7FA3\":\"QUN2\",\"7FA4\":\"QUN2\",\"7FA5\":\"QIANG3 QIAN1\",\"7FA6\":\"HUAN2\",\"7FA7\":\"SUO1 ZUI1\",\"7FA8\":\"XIAN4 YI2 YAN2\",\"7FA9\":\"YI4\",\"7FAB\":\"QIANG1\",\"7FAC\":\"XIAN2\",\"7FAD\":\"YU2\",\"7FAE\":\"GENG1 LANG2\",\"7FAF\":\"JIE2\",\"7FB0\":\"TANG1\",\"7FB1\":\"YUAN2\",\"7FB2\":\"XI1\",\"7FB3\":\"FAN2\",\"7FB4\":\"SHAN1\",\"7FB5\":\"FEN3\",\"7FB6\":\"SHAN1\",\"7FB7\":\"LIAN3\",\"7FB8\":\"LEI2 LIAN2\",\"7FB9\":\"GENG1 LANG2\",\"7FBA\":\"NOU2\",\"7FBB\":\"QIANG4\",\"7FBC\":\"CHAN4\",\"7FBD\":\"YU3 HU4\",\"7FBE\":\"GONG4\",\"7FBF\":\"YI4\",\"7FC0\":\"CHONG1 CHONG2\",\"7FC1\":\"WENG1 WENG3\",\"7FC2\":\"FEN1\",\"7FC3\":\"HONG2\",\"7FC4\":\"CHI4\",\"7FC5\":\"CHI4\",\"7FC6\":\"CUI4\",\"7FC7\":\"FU2\",\"7FC8\":\"XIA2\",\"7FC9\":\"PEN3\",\"7FCA\":\"YI4\",\"7FCB\":\"LA1 LA4\",\"7FCC\":\"YI4\",\"7FCD\":\"PI1\",\"7FCE\":\"LING2\",\"7FCF\":\"LIU4 LIAO4 LIU2\",\"7FD0\":\"ZHI4\",\"7FD1\":\"QU2\",\"7FD2\":\"XI2\",\"7FD3\":\"XIE2\",\"7FD4\":\"XIANG2\",\"7FD5\":\"XI4\",\"7FD6\":\"XI4\",\"7FD7\":\"QI2\",\"7FD8\":\"QIAO2 QIAO4\",\"7FD9\":\"HUI4\",\"7FDA\":\"HUI1\",\"7FDB\":\"XIAO1 SHU4\",\"7FDC\":\"SE4 SHA4\",\"7FDD\":\"HONG2\",\"7FDE\":\"JIANG1\",\"7FDF\":\"DI2 ZHAI2\",\"7FE0\":\"CUI4\",\"7FE1\":\"FEI3\",\"7FE2\":\"TAO1\",\"7FE3\":\"SHA4\",\"7FE4\":\"CHI4\",\"7FE5\":\"ZHU4\",\"7FE6\":\"JIAN3\",\"7FE7\":\"XUAN1\",\"7FE8\":\"SHI4 CHI4\",\"7FE9\":\"PIAN1\",\"7FEA\":\"ZONG1\",\"7FEB\":\"WAN4 WAN1\",\"7FEC\":\"HUI1\",\"7FED\":\"HOU2\",\"7FEE\":\"HE2 LI4\",\"7FEF\":\"HE4 HE2\",\"7FF0\":\"HAN4\",\"7FF1\":\"AO2\",\"7FF2\":\"PIAO1\",\"7FF3\":\"YI4\",\"7FF4\":\"LIAN2\",\"7FF5\":\"QU2\",\"7FF7\":\"LIN2\",\"7FF8\":\"PEN3\",\"7FF9\":\"QIAO2 QIAO4\",\"7FFA\":\"AO2\",\"7FFB\":\"FAN1\",\"7FFC\":\"YI4\",\"7FFD\":\"HUI4\",\"7FFE\":\"XUAN1\",\"7FFF\":\"DAO4\",\"800A\":\"DIE4\",\"800B\":\"DIE4\",\"800C\":\"ER2 NENG2\",\"800D\":\"SHUA3\",\"800E\":\"RUAN3\",\"800F\":\"ER2 NAI4\",\"801A\":\"PI1\",\"801B\":\"CHI2\",\"801C\":\"SI4\",\"801D\":\"CHU2\",\"801E\":\"JIA1\",\"801F\":\"JU4\",\"802A\":\"PANG3\",\"802B\":\"ZE2\",\"802C\":\"LOU2 LOU3\",\"802D\":\"JI1\",\"802E\":\"LAO4\",\"802F\":\"HUO4\",\"803A\":\"YUN2\",\"803B\":\"CHI3\",\"803C\":\"DAN1\",\"803D\":\"DAN1\",\"803E\":\"HONG2\",\"803F\":\"GENG3\",\"804A\":\"LIAO2 LIU2\",\"804B\":\"LONG2\",\"804C\":\"ZHI2 ZHI4\",\"804D\":\"NING2 NING3\",\"804E\":\"TIAO1\",\"804F\":\"ER2\",\"805A\":\"JU4\",\"805B\":\"BI4\",\"805C\":\"DI3\",\"805D\":\"GUO2\",\"805E\":\"WEN2 WEN4\",\"805F\":\"XU4\",\"806A\":\"CONG1\",\"806B\":\"LIAN2\",\"806C\":\"WENG3\",\"806D\":\"KUI4\",\"806E\":\"LIAN2\",\"806F\":\"LIAN2\",\"807B\":\"JI1 JI2 JIAN4\",\"807C\":\"TING1 TING4\",\"807D\":\"TING1 TING4\",\"807E\":\"LONG2\",\"807F\":\"YU4\",\"808A\":\"YI4\",\"808B\":\"LEI4 LE4 LE1 JIN1\",\"808C\":\"JI1 JI4\",\"808D\":\"QIU2\",\"808E\":\"KEN3\",\"808F\":\"CAO4\",\"809A\":\"DU4 DU3\",\"809B\":\"GANG1\",\"809C\":\"RONG2 CHEN1\",\"809D\":\"GAN1\",\"809E\":\"CHA1\",\"809F\":\"WO4\",\"80A0\":\"CHANG2\",\"80A1\":\"GU3\",\"80A2\":\"ZHI1 SHI4\",\"80A3\":\"HAN2\",\"80A4\":\"FU1\",\"80A5\":\"FEI2 BI3\",\"80A6\":\"FEN2 BAN1\",\"80A7\":\"PEI1\",\"80A8\":\"PANG4\",\"80A9\":\"JIAN1 XIAN2\",\"80AA\":\"FANG2\",\"80AB\":\"ZHUN1 CHUN2 TUN2 ZHUO1\",\"80AC\":\"YOU2\",\"80AD\":\"NA4 NV4\",\"80AE\":\"HANG2 GANG1 ANG1 KANG3\",\"80AF\":\"KEN3\",\"80B0\":\"RAN2\",\"80B1\":\"GONG1\",\"80B2\":\"YU4 YO1\",\"80B3\":\"WEN3\",\"80B4\":\"YAO2\",\"80B5\":\"JIN4 QI2\",\"80B6\":\"PI2\",\"80B7\":\"QIAN1 XU4 QIAN3\",\"80B8\":\"XI4 XI1 BI4\",\"80B9\":\"XI1 BI4\",\"80BA\":\"FEI4 PEI4\",\"80BB\":\"KEN3\",\"80BC\":\"JING3\",\"80BD\":\"TAI4\",\"80BE\":\"SHEN4\",\"80BF\":\"ZHONG3\",\"80C0\":\"ZHANG4\",\"80C1\":\"XIE2\",\"80C2\":\"SHEN1 SHEN4 CHEN1\",\"80C3\":\"WEI4\",\"80C4\":\"ZHOU4\",\"80C5\":\"DIE2\",\"80C6\":\"DAN3 TAN2 TAN3 DA2\",\"80C7\":\"FEI4\",\"80C8\":\"BA2\",\"80C9\":\"BO2\",\"80CA\":\"QU2\",\"80CB\":\"TIAN2\",\"80CC\":\"BEI4 BEI1\",\"80CD\":\"GUA1 GU1 HU4\",\"80CE\":\"TAI1\",\"80CF\":\"ZI3 FEI4\",\"80D0\":\"KU1 PEI2\",\"80D1\":\"ZHI1 ZHI2 ZHU1\",\"80D2\":\"NI4\",\"80D3\":\"PING2\",\"80D4\":\"ZI4\",\"80D5\":\"FU4 FU2 FU1\",\"80D6\":\"PANG4 PAN2 PAN4\",\"80D7\":\"ZHEN1 ZHEN3 ZHUN1\",\"80D8\":\"XIAN2\",\"80D9\":\"ZUO4\",\"80DA\":\"PEI1\",\"80DB\":\"JIA3\",\"80DC\":\"SHENG4 SHENG1\",\"80DD\":\"ZHI1 CHI1 DI4\",\"80DE\":\"BAO1 PAO2 PAO4\",\"80DF\":\"MU3\",\"80E0\":\"QU1\",\"80E1\":\"HU2\",\"80E2\":\"KE1\",\"80E3\":\"YI3 CHI3\",\"80E4\":\"YIN4\",\"80E5\":\"XU1 XU3\",\"80E6\":\"YANG1\",\"80E7\":\"LONG2\",\"80E8\":\"DONG4\",\"80E9\":\"KA3\",\"80EA\":\"LU2\",\"80EB\":\"JING4 KENG1\",\"80EC\":\"NU3 NU2\",\"80ED\":\"YAN1\",\"80EE\":\"PANG2\",\"80EF\":\"KUA4 KUA3\",\"80F0\":\"YI2\",\"80F1\":\"GUANG1\",\"80F2\":\"HAI3 GAI1 GAI3 GEI3\",\"80F3\":\"GE1 GE2 GA1\",\"80F4\":\"DONG4\",\"80F5\":\"ZHI4 CHI1\",\"80F6\":\"XIAO2 JIAO1 JIAO3\",\"80F7\":\"XIONG1\",\"80F8\":\"XIONG1\",\"80F9\":\"ER2\",\"80FA\":\"E4 AN4\",\"80FB\":\"XING2 HENG2\",\"80FC\":\"PIAN2\",\"80FD\":\"NENG2 NAI4 TAI2 TAI4 NAI2 XIONG2\",\"80FE\":\"ZI4\",\"810A\":\"JI2 JI3\",\"810D\":\"KUAI4\",\"810E\":\"SA4\",\"810F\":\"ZANG1 ZANG4 ZANG3\",\"811A\":\"JIAO3 JUE2\",\"811B\":\"JING4 KENG1\",\"811C\":\"ROU2\",\"811D\":\"HENG1\",\"811E\":\"CUO3 QIE1\",\"811F\":\"LIE4 LE4 LUAN2\",\"812A\":\"XIN4\",\"812B\":\"TUO1 TUI4\",\"812C\":\"PAO1 BAO1\",\"812D\":\"CHENG2\",\"812E\":\"NEI3\",\"812F\":\"FU3 PU2\",\"813A\":\"CUI4\",\"813B\":\"JIE2\",\"813C\":\"LIANG3\",\"813D\":\"ZHOU1 SHUI2\",\"813E\":\"PI2 PAI2 BI4 PI4\",\"813F\":\"BIAO1 BIAO4 BIAO3\",\"814A\":\"LA4 XI1\",\"814B\":\"YI4 YE4\",\"814C\":\"YAN1 A1 ANG1 AN1\",\"814D\":\"REN3 REN4\",\"814E\":\"SHEN4\",\"814F\":\"CHUO4 ZHUI4\",\"815A\":\"DING4\",\"815B\":\"WU1\",\"815C\":\"MEI2\",\"815D\":\"RUAN3 ER2 NAO4\",\"815E\":\"ZHUAN4 DUN4 TU2\",\"815F\":\"ZHI4\",\"816A\":\"YUN4\",\"816B\":\"ZHONG3\",\"816C\":\"ROU2\",\"816D\":\"E4\",\"816E\":\"SAI1\",\"816F\":\"TU2\",\"817A\":\"XIAN4\",\"817B\":\"NI4\",\"817C\":\"MIAN3\",\"817D\":\"WA4\",\"817E\":\"TENG2\",\"817F\":\"TUI3\",\"818A\":\"BO2 PO4 LIE4\",\"818B\":\"LIAO2\",\"818C\":\"JI2\",\"818D\":\"PI2\",\"818E\":\"XIE2\",\"818F\":\"GAO1 GAO4\",\"819A\":\"FU1\",\"819B\":\"TANG2 TANG1\",\"819C\":\"MO4 MO2\",\"819D\":\"XI1\",\"819E\":\"ZHUAN1 CHUN2\",\"819F\":\"LV4\",\"81A0\":\"JIAO1 JIAO3\",\"81A1\":\"YING4\",\"81A2\":\"LV2 LIU2 LOU2\",\"81A3\":\"ZHI4\",\"81A5\":\"CHUN1\",\"81A6\":\"LIAN3 LIN4\",\"81A7\":\"TONG2\",\"81A8\":\"PENG2 PENG4\",\"81A9\":\"NI4\",\"81AA\":\"ZHA4 ZHAI4\",\"81AB\":\"LIAO2\",\"81AC\":\"CUI4\",\"81AD\":\"GUI1\",\"81AE\":\"XIAO1\",\"81AF\":\"TENG1\",\"81B0\":\"FAN2\",\"81B1\":\"ZHI2 ZHU1\",\"81B2\":\"JIAO1\",\"81B3\":\"SHAN4\",\"81B4\":\"HU1 WU3 MEI2 WU2\",\"81B5\":\"CUI4\",\"81B6\":\"RUN4\",\"81B7\":\"XIANG1\",\"81B8\":\"SUI3\",\"81B9\":\"FEN4\",\"81BA\":\"YING1\",\"81BB\":\"DAN4 SHAN1 TAN3\",\"81BC\":\"ZHUA1\",\"81BD\":\"DAN3\",\"81BE\":\"KUAI4\",\"81BF\":\"NONG2\",\"81C0\":\"TUN2\",\"81C1\":\"LIAN2\",\"81C2\":\"BI4 BEI5 BEI4\",\"81C3\":\"YONG3 YONG1\",\"81C4\":\"JUE2\",\"81C5\":\"CHU4\",\"81C6\":\"YI4 YI3\",\"81C7\":\"JUAN3\",\"81C8\":\"LA4\",\"81C9\":\"LIAN3\",\"81CA\":\"SAO1 SAO4\",\"81CB\":\"TUN2\",\"81CC\":\"GU3\",\"81CD\":\"QI2\",\"81CE\":\"CUI4\",\"81CF\":\"BIN4\",\"81D0\":\"XUN1\",\"81D1\":\"RU2 ER2 NAO4\",\"81D2\":\"HUO4\",\"81D3\":\"ZANG4\",\"81D4\":\"XIAN4\",\"81D5\":\"BIAO1 PIAO3\",\"81D6\":\"XING4\",\"81D7\":\"KUAN1\",\"81D8\":\"LA4\",\"81D9\":\"YAN1\",\"81DA\":\"LU2 LV3\",\"81DB\":\"HUO4\",\"81DC\":\"ZANG1 ZA1 ZAN1\",\"81DD\":\"LUO3\",\"81DE\":\"QU2\",\"81DF\":\"ZANG4\",\"81E0\":\"LUAN2\",\"81E1\":\"NI2\",\"81E2\":\"ZANG1 ZA1 ZAN1\",\"81E3\":\"CHEN2\",\"81E4\":\"QIAN1\",\"81E5\":\"WO4\",\"81E6\":\"GUANG4\",\"81E7\":\"ZANG1 CANG2 ZANG4 ZANG2\",\"81E8\":\"LIN2 LIN4\",\"81E9\":\"GUANG4\",\"81EA\":\"ZI4\",\"81EB\":\"JIAO3\",\"81EC\":\"NIE4\",\"81ED\":\"CHOU4 XIU4\",\"81EE\":\"JI4\",\"81EF\":\"GAO1\",\"81F0\":\"CHOU4\",\"81F1\":\"MIAN2\",\"81F2\":\"NIE4\",\"81F3\":\"ZHI4 DIE2\",\"81F4\":\"ZHI4 ZHUI4\",\"81F5\":\"GE2\",\"81F6\":\"JIAN4 ZUN4\",\"81F7\":\"DIE2\",\"81F8\":\"ZHI4\",\"81F9\":\"XIU1\",\"81FA\":\"TAI2 YI2 TAI1\",\"81FB\":\"ZHEN1\",\"81FC\":\"JIU4\",\"81FD\":\"XIAN4\",\"81FE\":\"YU2 YONG3 YU3 KUI4\",\"81FF\":\"CHA1\",\"820A\":\"JIU4\",\"820B\":\"XIN4 WEN4\",\"820C\":\"SHE2 GUA1\",\"820D\":\"SHE4 SHE3 SHI4\",\"820F\":\"JIU3\",\"821A\":\"TAN1 TIAN4\",\"821B\":\"CHUAN3\",\"821C\":\"SHUN4\",\"821D\":\"XIA2\",\"821E\":\"WU3\",\"821F\":\"ZHOU1\",\"822A\":\"HANG2\",\"822B\":\"FANG3\",\"822C\":\"BAN1 BO1 PAN2 BAN3\",\"822D\":\"QUE4 BI3\",\"822F\":\"ZHONG1\",\"823A\":\"XIA2 JIA2 JIA3\",\"823B\":\"LU3 LU2\",\"823C\":\"HONG2\",\"823D\":\"PANG2\",\"823E\":\"XI1\",\"824A\":\"BO2\",\"824B\":\"MENG3\",\"824C\":\"NIAN4\",\"824D\":\"JU1\",\"824E\":\"HUANG2\",\"824F\":\"SHOU3\",\"825A\":\"CAO2\",\"825B\":\"LOU2\",\"825C\":\"DAI4\",\"825E\":\"YAO4\",\"825F\":\"TONG2 CHONG1 ZHUANG4\",\"826A\":\"LU3\",\"826B\":\"LU2 LU3\",\"826C\":\"CHAN2\",\"826D\":\"SHUANG1\",\"826E\":\"GEN4 GEN3 HEN2\",\"826F\":\"LIANG2 LIANG3\",\"827A\":\"YI4\",\"827B\":\"LE4 JI2\",\"827C\":\"TING1 DING3\",\"827D\":\"QIU2 JIU3 JIAO1\",\"827E\":\"AI4 YI4\",\"827F\":\"NAI3 RENG2 RENG4\",\"828A\":\"QIAN1 QIAN4\",\"828B\":\"YU4 HU1 XU1 YU3 YU2\",\"828C\":\"YU4 YU2 XU1 YU3\",\"828D\":\"SHAO2 XIAO4 QUE4 SHUO4 DI4\",\"828E\":\"QIONG1 XIONG1\",\"828F\":\"TU3 DU4\",\"829A\":\"TUN2 CHUN1\",\"829B\":\"WEI3\",\"829C\":\"WU2\",\"829D\":\"ZHI1\",\"829E\":\"QI3\",\"829F\":\"SHAN1 WEI3\",\"82A0\":\"WEN2\",\"82A1\":\"QIAN4\",\"82A2\":\"REN2\",\"82A3\":\"FU2 FOU3 FU1 FOU2\",\"82A4\":\"KOU1\",\"82A5\":\"JIE4 GAI4\",\"82A6\":\"LU2 LU3\",\"82A7\":\"XU4 ZHU4\",\"82A8\":\"JI2 JI1\",\"82A9\":\"QIN2 YIN2\",\"82AA\":\"QI2 CHI2\",\"82AB\":\"YUAN2 YAN2\",\"82AC\":\"FEN1 FEN2\",\"82AD\":\"BA1 PA1\",\"82AE\":\"RUI4 RUO4\",\"82AF\":\"XIN1 XIN4\",\"82B0\":\"JI4\",\"82B1\":\"HUA1\",\"82B2\":\"HUA1\",\"82B3\":\"FANG1\",\"82B4\":\"WU4 HU1\",\"82B5\":\"JUE2\",\"82B6\":\"GOU1\",\"82B7\":\"ZHI3\",\"82B8\":\"YUN2 YI4 YUN4\",\"82B9\":\"QIN2\",\"82BA\":\"AO3\",\"82BB\":\"CHU2\",\"82BC\":\"MAO4 MAO2\",\"82BD\":\"YA2\",\"82BE\":\"FEI4 FU4 FU2\",\"82BF\":\"RENG4\",\"82C0\":\"HANG2\",\"82C1\":\"CONG1\",\"82C2\":\"YIN2\",\"82C3\":\"YOU3\",\"82C4\":\"BIAN4\",\"82C5\":\"YI4\",\"82C7\":\"WEI3\",\"82C8\":\"LI4\",\"82C9\":\"PI3\",\"82CA\":\"E4\",\"82CB\":\"XIAN4 HUAN2\",\"82CC\":\"CHANG2\",\"82CD\":\"CANG1 CANG3\",\"82CE\":\"MENG2 ZHU4\",\"82CF\":\"SU1\",\"82D0\":\"YI2 TI2 DI4\",\"82D1\":\"YUAN4 YUAN3 YU4 YUN3 YUN1 YUAN1\",\"82D2\":\"RAN3\",\"82D3\":\"LING2 LIAN2\",\"82D4\":\"TAI2 TAI1\",\"82D5\":\"TIAO2 SHAO2\",\"82D6\":\"DI3\",\"82D7\":\"MIAO2\",\"82D8\":\"QIONG3 QING3\",\"82D9\":\"LI4\",\"82DA\":\"YONG4\",\"82DB\":\"KE1 HE1 HE2\",\"82DC\":\"MU4\",\"82DD\":\"PEI4\",\"82DE\":\"BAO1 PAO2 BIAO1\",\"82DF\":\"GOU3 GOU1\",\"82E0\":\"MIN2\",\"82E1\":\"YI3 SI4\",\"82E2\":\"YI3\",\"82E3\":\"JU4 QU3\",\"82E4\":\"PI1 PIE3 PI3\",\"82E5\":\"RUO4 RE3 RE2 RE4\",\"82E6\":\"KU3 GU3\",\"82E7\":\"ZHU4 NING2\",\"82E8\":\"NI3\",\"82E9\":\"BO2\",\"82EA\":\"BING3\",\"82EB\":\"SHAN1 SHAN4 TIAN1 CHAN1\",\"82EC\":\"QIU2\",\"82ED\":\"YAO3\",\"82EE\":\"XIAN1\",\"82EF\":\"BEN3\",\"82F0\":\"HONG2\",\"82F1\":\"YING1 YANG1\",\"82F2\":\"ZHA3 ZHA4 ZUO2\",\"82F3\":\"DONG1\",\"82F4\":\"JU1 CHA2 ZHA3 ZU1 JIE1 BAO1 XIE2\",\"82F5\":\"DIE2\",\"82F6\":\"NIE2\",\"82F7\":\"GAN1\",\"82F8\":\"HU1\",\"82F9\":\"PING2 PIN2 PENG1\",\"82FA\":\"MEI2 MEI4\",\"82FB\":\"FU2 PU2\",\"82FC\":\"SHENG1\",\"82FD\":\"GU1\",\"82FE\":\"BI4\",\"82FF\":\"WEI4\",\"830A\":\"ZI1 CI2\",\"830B\":\"DI3\",\"830C\":\"CHI2\",\"830D\":\"JI4\",\"830E\":\"JING1\",\"830F\":\"LONG2\",\"831A\":\"YIN4\",\"831B\":\"GEN4 JIAN4\",\"831C\":\"QIAN4 QIAN1 XI1\",\"831D\":\"CHAI3 ZHI3\",\"831E\":\"CHEN2\",\"831F\":\"YU4\",\"832A\":\"GUANG1\",\"832B\":\"MANG2 HUANG3\",\"832C\":\"CHI2 CHA2\",\"832D\":\"JIAO1 XIAO3 XIAO4 QIAO4\",\"832E\":\"JIAO1\",\"832F\":\"FU2\",\"833A\":\"CHONG1\",\"833B\":\"MANG3\",\"833C\":\"TONG2\",\"833D\":\"ZHONG4\",\"833F\":\"ZHU2\",\"834A\":\"JING1\",\"834B\":\"ER2\",\"834C\":\"AN4\",\"834D\":\"SHOU1 QIAO2\",\"834E\":\"CHI2\",\"834F\":\"REN3\",\"835A\":\"JIA2\",\"835B\":\"RAO2 YAO2\",\"835C\":\"BI4\",\"835D\":\"ZE2 CE4\",\"835E\":\"QIAO2 JIAO1\",\"835F\":\"HUI4\",\"836A\":\"SUN1\",\"836B\":\"YIN4 YIN1\",\"836C\":\"MAI3\",\"836D\":\"HONG2\",\"836E\":\"ZHOU4\",\"836F\":\"YAO4 YUE4\",\"837A\":\"YUN2 YUN3\",\"837B\":\"DI2\",\"837C\":\"TU2 CHA2 SHU1 YE2\",\"837D\":\"SUI1 WEI1 WEI3\",\"837E\":\"SUI1\",\"837F\":\"CHENG2\",\"838A\":\"ZHUANG1\",\"838B\":\"JI2 ZUO2\",\"838C\":\"DUO2 TUO4\",\"838D\":\"QIU2\",\"838E\":\"SHA1 SUO1 SUI1\",\"838F\":\"SUO1\",\"839A\":\"YAN2\",\"839B\":\"TING2 TING3\",\"839C\":\"DIAO4 YOU2 DI2\",\"839D\":\"CUO4\",\"839E\":\"GUAN1 GUAN3 WAN3\",\"839F\":\"HAN4\",\"83A0\":\"YOU3 XIU4\",\"83A1\":\"CUO4\",\"83A2\":\"JIA2\",\"83A3\":\"WANG2\",\"83A4\":\"YOU2\",\"83A5\":\"NIU3\",\"83A6\":\"SHAO1\",\"83A7\":\"XIAN4 HUAN2 WAN4\",\"83A8\":\"LANG2 LANG4 LIANG2\",\"83A9\":\"FU2 PIAO3\",\"83AA\":\"E2\",\"83AB\":\"MO4 MU4\",\"83AC\":\"WEN4 WAN3 MIAN3\",\"83AD\":\"JIE2\",\"83AE\":\"NAN2\",\"83AF\":\"MU4\",\"83B0\":\"KAN3\",\"83B1\":\"LAI2\",\"83B2\":\"LIAN2\",\"83B3\":\"SHI2 SHI4\",\"83B4\":\"WO1\",\"83B6\":\"LIAN3 LIAN2 XIAN1\",\"83B7\":\"HUO4\",\"83B8\":\"YOU2\",\"83B9\":\"YING2\",\"83BA\":\"YING1\",\"83BC\":\"CHUN2\",\"83BD\":\"MANG3 MANG2\",\"83BE\":\"MANG3\",\"83BF\":\"CI4\",\"83C0\":\"WAN3 YUAN4 YU4 YUN4\",\"83C1\":\"JING1\",\"83C2\":\"DI1 DI4\",\"83C3\":\"QU2\",\"83C4\":\"DONG1\",\"83C5\":\"JIAN1 GUAN1\",\"83C6\":\"ZOU1\",\"83C7\":\"GU1\",\"83C8\":\"LA1\",\"83C9\":\"LU4\",\"83CA\":\"JU2\",\"83CB\":\"WEI4\",\"83CC\":\"JUN1 JUN4\",\"83CD\":\"NIE4\",\"83CE\":\"KUN1 JUN4\",\"83CF\":\"HE2 GE1\",\"83D0\":\"PU2\",\"83D1\":\"ZI1 ZAI1 ZI4\",\"83D2\":\"GAO3\",\"83D3\":\"GUO3\",\"83D4\":\"FU2 BO2\",\"83D5\":\"LUN2 LUN4\",\"83D6\":\"CHANG1\",\"83D7\":\"CHOU2\",\"83D8\":\"SONG1\",\"83D9\":\"CHUI2\",\"83DA\":\"ZHAN4\",\"83DB\":\"MEN2\",\"83DC\":\"CAI4\",\"83DD\":\"BA2 BI4\",\"83DE\":\"LI2\",\"83DF\":\"TU4 TU2\",\"83E0\":\"BO1\",\"83E1\":\"HAN4\",\"83E2\":\"BAO4\",\"83E3\":\"QIN4\",\"83E4\":\"JUAN3\",\"83E5\":\"XI1 SI1\",\"83E6\":\"QIN2\",\"83E7\":\"DI3\",\"83E8\":\"JIE1\",\"83E9\":\"PU2 BEI4 BU4 BO2\",\"83EA\":\"DANG4\",\"83EB\":\"JIN3 JIN4 QIN2\",\"83EC\":\"ZHAO3\",\"83ED\":\"TAI2\",\"83EE\":\"GENG1\",\"83EF\":\"HUA2 HUA1 HUA4\",\"83F0\":\"GU1\",\"83F1\":\"LING2\",\"83F2\":\"FEI1 FEI3 FEI4\",\"83F3\":\"JIN1\",\"83F4\":\"AN1 AN3\",\"83F5\":\"WANG3\",\"83F6\":\"BENG3 PENG2\",\"83F7\":\"ZHOU3\",\"83F8\":\"YAN1 YU1 YU4\",\"83F9\":\"JU1 ZU1 JU4\",\"83FA\":\"JIAN1\",\"83FB\":\"LIN3 MA2\",\"83FC\":\"TAN3\",\"83FD\":\"SHU2 SHU1 JIAO1\",\"83FE\":\"TIAN2\",\"83FF\":\"DAO4\",\"840A\":\"LAI2\",\"840B\":\"QI1\",\"840C\":\"MENG2 MING2\",\"840D\":\"PING2\",\"840E\":\"WEI1 WEI3\",\"840F\":\"DAN4\",\"841A\":\"TUO4\",\"841B\":\"JIU1\",\"841C\":\"TIE1\",\"841D\":\"LUO2\",\"842A\":\"KE1\",\"842B\":\"XIANG4\",\"842C\":\"WAN4\",\"842D\":\"YU3 JU3\",\"842E\":\"YU4\",\"842F\":\"FU4\",\"843A\":\"MAO4\",\"843B\":\"AN1\",\"843C\":\"E4\",\"843D\":\"LUO4 LA4 LAO4 LUO1\",\"843E\":\"YING2\",\"843F\":\"HUO2\",\"844A\":\"AN1\",\"844B\":\"QU2\",\"844C\":\"JIAN1\",\"844D\":\"FU2\",\"844E\":\"LV4\",\"844F\":\"JING1\",\"845A\":\"SHEN4 REN4\",\"845B\":\"GE2 GE3\",\"845C\":\"JIE2 QIA1\",\"845D\":\"JING4\",\"845E\":\"MI3\",\"845F\":\"HUANG2\",\"846A\":\"JI4 JIE4\",\"846B\":\"HU2\",\"846C\":\"ZANG4\",\"846D\":\"JIA1 XIA2\",\"846E\":\"DUAN4\",\"846F\":\"YAO4 YUE4\",\"847A\":\"QI4\",\"847B\":\"LAN2\",\"847C\":\"ZONG1\",\"847D\":\"YAO1\",\"847E\":\"YUAN1\",\"847F\":\"MEI2\",\"848B\":\"JIANG3 JIANG1\",\"848C\":\"LOU2 LIU3\",\"848D\":\"WEI2 WEI3\",\"848E\":\"PAI4\",\"849A\":\"HE2\",\"849B\":\"QUE1\",\"849C\":\"SUAN4\",\"849D\":\"YUAN2\",\"849E\":\"LI4\",\"849F\":\"JU3\",\"84A0\":\"XI2 XI1\",\"84A1\":\"BANG4 PANG2\",\"84A2\":\"CHU2\",\"84A3\":\"XU2\",\"84A4\":\"TU2\",\"84A5\":\"LIU2\",\"84A6\":\"WO4 YUE1\",\"84A7\":\"ZHEN1 DIAN3\",\"84A8\":\"QIAN4\",\"84A9\":\"ZU1\",\"84AA\":\"PO4\",\"84AB\":\"CUO1\",\"84AC\":\"YUAN1\",\"84AD\":\"CHU2\",\"84AE\":\"YU4\",\"84AF\":\"KUAI3 KUAI4\",\"84B0\":\"PAN2\",\"84B1\":\"PU2\",\"84B2\":\"PU2 BO2\",\"84B3\":\"NA4\",\"84B4\":\"SHUO4\",\"84B5\":\"XI1 XI2 XI4\",\"84B6\":\"FEN2\",\"84B7\":\"YUN2\",\"84B8\":\"ZHENG1\",\"84B9\":\"JIAN1\",\"84BA\":\"JI2\",\"84BB\":\"RUO4\",\"84BC\":\"CANG1 CANG3\",\"84BD\":\"EN1\",\"84BE\":\"MI2\",\"84BF\":\"HAO1 GAO3\",\"84C0\":\"SUN1\",\"84C1\":\"ZHEN1 QIN2\",\"84C2\":\"MING2\",\"84C3\":\"HUO4\",\"84C4\":\"XU4\",\"84C5\":\"LIU2\",\"84C6\":\"XI2\",\"84C7\":\"GU3 GU1\",\"84C8\":\"LANG2\",\"84C9\":\"RONG2\",\"84CA\":\"WENG3 WENG4\",\"84CB\":\"GAI4 GE3 HE2\",\"84CC\":\"CUO4\",\"84CD\":\"SHI1\",\"84CE\":\"TANG2\",\"84CF\":\"LUO3\",\"84D0\":\"RU4\",\"84D1\":\"SUO1 SAI1 SUI1\",\"84D2\":\"XIAN1\",\"84D3\":\"BEI4\",\"84D4\":\"YAO3\",\"84D5\":\"GUI4\",\"84D6\":\"BI4 BI1\",\"84D7\":\"ZONG3\",\"84D8\":\"GUN3\",\"84DA\":\"XIU1\",\"84DB\":\"CE4\",\"84DD\":\"LAN2 LA5\",\"84DF\":\"JI4\",\"84E0\":\"LI2\",\"84E1\":\"CAN1 SHEN1\",\"84E2\":\"LANG2\",\"84E3\":\"YU4\",\"84E5\":\"YING4 YING2\",\"84E6\":\"MO4\",\"84E7\":\"DIAO4 TIAO1 TIAO2\",\"84E8\":\"TIAO1 TIAO2\",\"84E9\":\"MAO4\",\"84EA\":\"TONG1\",\"84EB\":\"ZHU2\",\"84EC\":\"PENG2 PENG4\",\"84ED\":\"AN1\",\"84EE\":\"LIAN2 LIAN3\",\"84EF\":\"CONG1\",\"84F0\":\"XI3\",\"84F1\":\"PING2\",\"84F2\":\"QIU1 XU1\",\"84F3\":\"JIN4\",\"84F4\":\"CHUN2\",\"84F5\":\"JIE2\",\"84F6\":\"WEI3\",\"84F7\":\"TUI1\",\"84F8\":\"CAO2\",\"84F9\":\"YU3\",\"84FA\":\"YI4\",\"84FB\":\"JI2\",\"84FC\":\"LIAO3 LU4 LAO3 LIU3\",\"84FD\":\"BI4\",\"84FE\":\"LU3\",\"84FF\":\"SU4 XU4\",\"850A\":\"HAN3 HAN4\",\"850B\":\"DI2\",\"850C\":\"SU4\",\"850D\":\"LU4\",\"850E\":\"SHE4\",\"850F\":\"SHANG1\",\"851A\":\"WEI4 YU4\",\"851B\":\"HU2\",\"851C\":\"AO2\",\"851D\":\"MI3\",\"851E\":\"LOU2 LIU3 JU4 LV3\",\"851F\":\"CU4 COU4 CHUO4\",\"852A\":\"JIAN4\",\"852B\":\"YAN1 NIAN1 YAN4\",\"852C\":\"SHU1 XU1 SHU3\",\"852D\":\"YIN4 YIN1\",\"852E\":\"KUI4\",\"852F\":\"CHEN2\",\"853A\":\"LIN4\",\"853B\":\"KOU4\",\"853C\":\"AI3\",\"853D\":\"BI4 FU4\",\"853E\":\"LI2\",\"853F\":\"WEI2\",\"854A\":\"RUI3 JUAN3\",\"854B\":\"RUI3\",\"854C\":\"LEI3\",\"854D\":\"YU2\",\"854E\":\"QIAO2 JIAO1\",\"854F\":\"CHU2 ZHU1 ZHA1\",\"855A\":\"E4\",\"855B\":\"TENG2 TI2\",\"855C\":\"FEI3\",\"855D\":\"JUE2 ZUI4\",\"855E\":\"ZUI4 JUE2 ZHUO2\",\"855F\":\"FA4 FEI4\",\"856A\":\"WU2 WU3\",\"856B\":\"TONG2 DONG3\",\"856C\":\"SI1\",\"856D\":\"XIAO1\",\"856E\":\"XI4\",\"856F\":\"LONG2\",\"857A\":\"JI2 QIE4\",\"857B\":\"HONG4 HONG2\",\"857C\":\"SI4\",\"857D\":\"NONG2\",\"857E\":\"LEI3\",\"857F\":\"XUAN1\",\"858A\":\"JI4\",\"858B\":\"CI1 CI2\",\"858C\":\"XIANG1 XIANG3\",\"858D\":\"LUAN4 WAN4\",\"858E\":\"MIE4\",\"858F\":\"YI4\",\"859A\":\"TANG2\",\"859B\":\"XUE1 XIE1\",\"859C\":\"BI4 BO4 BO2 BAI4 PI4\",\"859D\":\"ZHAN2\",\"859E\":\"SUN1\",\"859F\":\"LIAN3 LIAN2 XIAN1 YAN2 KAN4\",\"85A0\":\"FAN2\",\"85A1\":\"DING3\",\"85A2\":\"JIE1 XIE4\",\"85A3\":\"GU3\",\"85A4\":\"XIE4\",\"85A5\":\"SHU3\",\"85A6\":\"JIAN4\",\"85A7\":\"KAO3 HAO1\",\"85A8\":\"HONG1\",\"85A9\":\"SA4\",\"85AA\":\"XIN1\",\"85AB\":\"XUN1\",\"85AC\":\"YAO4\",\"85AE\":\"SOU3\",\"85AF\":\"SHU3\",\"85B0\":\"XUN1\",\"85B1\":\"DUI4\",\"85B2\":\"PIN2\",\"85B3\":\"WEI3\",\"85B4\":\"NENG2 NING4\",\"85B5\":\"CHOU2 ZHOU4\",\"85B6\":\"MAI2 LI2 WEI1 WO1\",\"85B7\":\"RU2\",\"85B8\":\"PIAO1\",\"85B9\":\"TAI2\",\"85BA\":\"CI2 JI4 QI4 QI2 QI5\",\"85BB\":\"ZAO3\",\"85BC\":\"CHEN2\",\"85BD\":\"ZHEN1\",\"85BE\":\"ER3\",\"85BF\":\"NI3\",\"85C0\":\"YING2\",\"85C1\":\"GAO3\",\"85C2\":\"CONG4 CONG2\",\"85C3\":\"XIAO1 HAO4\",\"85C4\":\"QI2\",\"85C5\":\"FA2\",\"85C6\":\"JIAN3\",\"85C7\":\"XU4 YU4\",\"85C8\":\"KUI1\",\"85C9\":\"JIE4 JI2\",\"85CA\":\"BIAN3\",\"85CB\":\"DIAO4 DI2\",\"85CC\":\"MI4\",\"85CD\":\"LAN2 LA5\",\"85CE\":\"JIN4\",\"85CF\":\"CANG2 ZANG4 ZANG1\",\"85D0\":\"MIAO3 MO4\",\"85D1\":\"QIONG2\",\"85D2\":\"QIE4\",\"85D3\":\"XIAN3\",\"85D5\":\"OU3\",\"85D6\":\"XIAN2\",\"85D7\":\"SU4\",\"85D8\":\"LV2\",\"85D9\":\"YI4\",\"85DA\":\"XU4\",\"85DB\":\"XIE3\",\"85DC\":\"LI2\",\"85DD\":\"YI4\",\"85DE\":\"LA3\",\"85DF\":\"LEI3\",\"85E0\":\"XIAO4 JIAO4\",\"85E1\":\"DI2\",\"85E2\":\"ZHI3\",\"85E3\":\"BEI1\",\"85E4\":\"TENG2\",\"85E5\":\"YAO4 YUE4 SHUO4 LVE4\",\"85E6\":\"MO4 MO2\",\"85E7\":\"HUAN3\",\"85E8\":\"BIAO1 PAO1 PIAO3\",\"85E9\":\"FAN2 FAN1\",\"85EA\":\"SOU3 SHU2 COU4\",\"85EB\":\"TAN2\",\"85EC\":\"TUI1\",\"85ED\":\"QIONG2\",\"85EE\":\"QIAO2\",\"85EF\":\"WEI4\",\"85F0\":\"LIU2\",\"85F1\":\"HUI4 HUI2\",\"85F3\":\"GAO3 KAO4 GAO4\",\"85F4\":\"YUN4\",\"85F6\":\"LI4\",\"85F7\":\"SHU3\",\"85F8\":\"CHU2\",\"85F9\":\"AI3\",\"85FA\":\"LIN4\",\"85FB\":\"ZAO3\",\"85FC\":\"XUAN1\",\"85FD\":\"CHEN4\",\"85FE\":\"LAI4\",\"85FF\":\"HUO4 HE2\",\"860A\":\"YUN4 WEN1\",\"860B\":\"PIN2 PING2\",\"860C\":\"YU3\",\"860D\":\"XUN1\",\"860E\":\"JI4\",\"860F\":\"JIONG1 JIONG3\",\"861A\":\"XIAN3\",\"861B\":\"YU2\",\"861C\":\"JU2\",\"861D\":\"LIAN4 LIAN3 LIAN2\",\"861E\":\"LIAN4 LIAN3 LIAN2 XIAN1\",\"861F\":\"YIN3\",\"862A\":\"MI2\",\"862B\":\"LAN2\",\"862C\":\"KUI1\",\"862D\":\"LAN2\",\"862E\":\"JI4\",\"862F\":\"DANG4\",\"863A\":\"LI2\",\"863B\":\"JI4\",\"863C\":\"MI2\",\"863D\":\"LEI3\",\"863E\":\"HUAI4\",\"863F\":\"LUO2\",\"864A\":\"LUAN2\",\"864B\":\"MEN2\",\"864C\":\"BIE1\",\"864D\":\"HU1\",\"864E\":\"HU3 HU4\",\"864F\":\"LU3\",\"865A\":\"XU1 QU1\",\"865B\":\"XU1\",\"865C\":\"LU3\",\"865D\":\"HU3\",\"865E\":\"YU2\",\"865F\":\"HAO4 HAO2\",\"866A\":\"SHU2 SHU1\",\"866B\":\"CHONG2 HUI3\",\"866C\":\"QIU2\",\"866D\":\"DIAO1\",\"866E\":\"JI1 JI3 QI2\",\"866F\":\"QIU2\",\"867A\":\"HUI3 HUI1\",\"867B\":\"MENG2\",\"867C\":\"GE4\",\"867D\":\"SUI1\",\"867E\":\"XIA1 HA2\",\"867F\":\"CHAI4\",\"868A\":\"WEN2\",\"868B\":\"RUI4\",\"868C\":\"BANG4 BENG4 PI2 FENG1\",\"868D\":\"BI3 PI2\",\"868E\":\"YUE4\",\"868F\":\"YUE4\",\"869A\":\"QI2\",\"869B\":\"ZHONG4\",\"869C\":\"YA2\",\"869D\":\"CI4 HAO2\",\"869E\":\"MU4\",\"869F\":\"WANG2\",\"86A0\":\"FEN2\",\"86A1\":\"FEN2\",\"86A2\":\"HANG2\",\"86A3\":\"GONG1 ZHONG1\",\"86A4\":\"ZAO3 ZHAO3\",\"86A5\":\"FU3\",\"86A6\":\"RAN2 TIAN4\",\"86A7\":\"JIE4\",\"86A8\":\"FU2\",\"86A9\":\"CHI1\",\"86AA\":\"DOU3\",\"86AB\":\"PIAO2\",\"86AC\":\"XIAN4 XIAN3\",\"86AD\":\"NI2\",\"86AE\":\"TE4\",\"86AF\":\"QIU1\",\"86B0\":\"YOU2 ZHU2\",\"86B1\":\"ZHA4\",\"86B2\":\"PING2\",\"86B3\":\"CHI2\",\"86B4\":\"YOU3 YOU4 NIU4 YOU1\",\"86B5\":\"HE2 KE4\",\"86B6\":\"HAN1\",\"86B7\":\"JU4 QU2\",\"86B8\":\"LI4\",\"86B9\":\"FU4\",\"86BA\":\"RAN2 TIAN4\",\"86BB\":\"ZHA2\",\"86BC\":\"GOU3\",\"86BD\":\"PI2\",\"86BE\":\"BO3\",\"86BF\":\"XIAN2\",\"86C0\":\"ZHU4\",\"86C1\":\"DIAO1\",\"86C2\":\"BIE3 BIE2\",\"86C3\":\"BING3\",\"86C4\":\"GU1 GU3\",\"86C5\":\"RAN2 ZHAN1\",\"86C6\":\"QU1 JU1\",\"86C7\":\"SHE2 YI2 TUO2 CHI2\",\"86C8\":\"TIE4\",\"86C9\":\"LING2\",\"86CA\":\"GU3\",\"86CB\":\"DAN4\",\"86CC\":\"GU3\",\"86CD\":\"YING2\",\"86CE\":\"LI4\",\"86CF\":\"CHENG1\",\"86D0\":\"QU1\",\"86D1\":\"MOU2\",\"86D2\":\"GE2\",\"86D3\":\"CI4\",\"86D4\":\"HUI2\",\"86D5\":\"HUI2\",\"86D6\":\"MANG2\",\"86D7\":\"FU4\",\"86D8\":\"YANG2 YANG3\",\"86D9\":\"WA1 JUE2\",\"86DA\":\"LIE4\",\"86DB\":\"ZHU1\",\"86DC\":\"YI1\",\"86DD\":\"XIAN2\",\"86DE\":\"KUO4 SHE2\",\"86DF\":\"JIAO1\",\"86E0\":\"LI4\",\"86E1\":\"YI4\",\"86E2\":\"PING2\",\"86E3\":\"JIE2 QIE4 JI1\",\"86E4\":\"HA2 GE2 HA1 E4\",\"86E5\":\"SHE2\",\"86E6\":\"YI2\",\"86E7\":\"WANG3\",\"86E8\":\"MO4\",\"86E9\":\"QIONG2 GONG3\",\"86EA\":\"QIE4\",\"86EB\":\"GUI3\",\"86EC\":\"GONG3 QIONG2\",\"86ED\":\"ZHI4\",\"86EE\":\"MAN2\",\"86F0\":\"ZHI2 ZHE2\",\"86F1\":\"JIA2\",\"86F2\":\"RAO2\",\"86F3\":\"SI1\",\"86F4\":\"QI2\",\"86F5\":\"XING1\",\"86F6\":\"LIE4\",\"86F7\":\"QIU2\",\"86F8\":\"SHAO1 XIAO1\",\"86F9\":\"YONG3\",\"86FA\":\"JIA2\",\"86FB\":\"TUI4 YUE4 SHUI4\",\"86FC\":\"CHE1\",\"86FD\":\"BAI4\",\"86FE\":\"E2 YI3\",\"86FF\":\"HAN4\",\"870A\":\"LI2\",\"870B\":\"LANG2\",\"870C\":\"BI4\",\"870D\":\"CHU2 SHU2 YU2\",\"870E\":\"YUAN1 XUAN1\",\"870F\":\"YOU3\",\"871A\":\"FEI1 FEI3 PEI4 BEI4\",\"871B\":\"JU1\",\"871C\":\"MI4\",\"871D\":\"QI2\",\"871E\":\"QI2\",\"871F\":\"YU4\",\"872A\":\"TAO1\",\"872B\":\"KUN1\",\"872C\":\"GAN1\",\"872D\":\"HAN4\",\"872E\":\"YU4 GUO1\",\"872F\":\"BANG4\",\"873A\":\"NI2\",\"873B\":\"QING1 JING1\",\"873C\":\"WEI4 WEI3\",\"873D\":\"LIANG3\",\"873E\":\"GUO3 LUO3\",\"873F\":\"WAN1 WAN3\",\"874B\":\"LA4\",\"874C\":\"KE1\",\"874D\":\"JI2\",\"874E\":\"HE2 XIE1\",\"874F\":\"TING2\",\"875A\":\"ROU2\",\"875B\":\"WEI1\",\"875C\":\"FU4\",\"875D\":\"YUAN2\",\"875E\":\"MEI4\",\"875F\":\"WEI4\",\"876A\":\"TANG1\",\"876B\":\"ZHU1\",\"876C\":\"ZONG1\",\"876D\":\"TI2\",\"876E\":\"FU4\",\"876F\":\"YUAN2\",\"877A\":\"JU3\",\"877B\":\"NAN3 AN2\",\"877C\":\"LOU2\",\"877D\":\"QUN3\",\"877E\":\"RONG2\",\"877F\":\"YING2\",\"878A\":\"LIAN2 XIAN2\",\"878B\":\"SOU1\",\"878C\":\"BAN1 PAN2\",\"878D\":\"RONG2\",\"878E\":\"RONG2\",\"878F\":\"JI2\",\"879A\":\"NAI4\",\"879B\":\"HE2\",\"879C\":\"HU2\",\"879D\":\"HUI4\",\"879E\":\"MA3 MA4 MA1\",\"879F\":\"MING2\",\"87A0\":\"YI4\",\"87A1\":\"WEN2\",\"87A2\":\"YING2\",\"87A3\":\"TENG2 TE4\",\"87A4\":\"YU3\",\"87A5\":\"CANG1\",\"87A8\":\"MAN3\",\"87AA\":\"SHANG1\",\"87AB\":\"SHI4 ZHE1\",\"87AC\":\"CAO2\",\"87AD\":\"CHI1\",\"87AE\":\"DI4\",\"87AF\":\"AO2\",\"87B0\":\"LU4\",\"87B1\":\"WEI4\",\"87B2\":\"ZHI4 DIE2\",\"87B3\":\"TANG2\",\"87B4\":\"CHEN2\",\"87B5\":\"PIAO1 PI2\",\"87B6\":\"QU2\",\"87B7\":\"PI2 BENG4 BI4\",\"87B8\":\"YU2\",\"87B9\":\"JIAN4 CHAN2\",\"87BA\":\"LUO2\",\"87BB\":\"LOU2\",\"87BC\":\"QIN3\",\"87BD\":\"ZHONG1\",\"87BE\":\"YIN3\",\"87BF\":\"JIANG1\",\"87C0\":\"SHUAI4\",\"87C1\":\"WEN2\",\"87C2\":\"JIAO1\",\"87C3\":\"WAN4\",\"87C4\":\"ZHE2 ZHI2\",\"87C5\":\"ZHE4\",\"87C6\":\"MA2 MO4\",\"87C7\":\"MA2\",\"87C8\":\"GUO1 YU4\",\"87C9\":\"LIU2 LIAO4\",\"87CA\":\"MAO2 MENG2\",\"87CB\":\"XI1\",\"87CC\":\"CONG1\",\"87CD\":\"LI2\",\"87CE\":\"MAN3\",\"87CF\":\"XIAO1\",\"87D1\":\"ZHANG1\",\"87D2\":\"MANG3 MENG3\",\"87D3\":\"XIANG4\",\"87D4\":\"MO4\",\"87D5\":\"ZUI1\",\"87D6\":\"SI1\",\"87D7\":\"QIU1\",\"87D8\":\"TE4\",\"87D9\":\"ZHI2\",\"87DA\":\"PENG2\",\"87DB\":\"PENG2\",\"87DC\":\"JIAO3\",\"87DD\":\"QU2\",\"87DE\":\"BIE2\",\"87DF\":\"LIAO2\",\"87E0\":\"PAN2 FAN2\",\"87E1\":\"GUI3\",\"87E2\":\"XI3\",\"87E3\":\"JI3 QI2\",\"87E4\":\"ZHUAN1\",\"87E5\":\"HUANG2\",\"87E6\":\"FEI4 BEN1\",\"87E7\":\"LAO2\",\"87E8\":\"JUE2\",\"87E9\":\"JUE2\",\"87EA\":\"HUI4\",\"87EB\":\"YIN2 TAN2 XUN2\",\"87EC\":\"CHAN2 SHAN4\",\"87ED\":\"JIAO1\",\"87EE\":\"SHAN4\",\"87EF\":\"RAO2 NAO2 RAO4\",\"87F0\":\"XIAO1\",\"87F1\":\"MOU2\",\"87F2\":\"CHONG2\",\"87F3\":\"XUN2\",\"87F4\":\"SI1\",\"87F6\":\"CHENG1\",\"87F7\":\"DANG1\",\"87F8\":\"LI3 LI2 LUO3 LUO2 LI4\",\"87F9\":\"XIE4\",\"87FA\":\"SHAN4 DAN4 CHAN2 TUO2\",\"87FB\":\"YI3 JI3\",\"87FC\":\"JING3\",\"87FD\":\"DA2\",\"87FE\":\"CHAN2\",\"87FF\":\"QI4 JI4\",\"880A\":\"LIAN2\",\"880B\":\"ZHU2\",\"880C\":\"ZE2\",\"880D\":\"XIE1\",\"880E\":\"MANG3 MENG3\",\"880F\":\"XIE4\",\"881A\":\"HE4 HE1 RUO4\",\"881B\":\"MIE4\",\"881C\":\"FAN2\",\"881D\":\"LEI2 LEI3\",\"881E\":\"JIE2\",\"881F\":\"LA4\",\"882A\":\"LONG2\",\"882B\":\"LI4 LI2\",\"882C\":\"LONG2\",\"882D\":\"FENG1\",\"882E\":\"YE1\",\"882F\":\"BENG4\",\"883A\":\"CAN2\",\"883B\":\"MAN2\",\"883C\":\"JUE2 QU2\",\"883D\":\"JIE2\",\"883E\":\"ZHU2\",\"883F\":\"ZHA2\",\"884A\":\"MIE4\",\"884B\":\"XI4\",\"884C\":\"XING2 HANG2 XING4 HANG4 HENG2\",\"884D\":\"YAN3 YAN2\",\"884E\":\"KAN4\",\"884F\":\"YUAN4\",\"885A\":\"HU2\",\"885B\":\"WEI4\",\"885C\":\"DAO4\",\"885D\":\"CHONG1 CHONG4\",\"885E\":\"WEI4\",\"885F\":\"DAO4\",\"886A\":\"YI3 YI4\",\"886B\":\"SHAN1\",\"886C\":\"CHEN4\",\"886D\":\"FU1\",\"886E\":\"GUN3\",\"886F\":\"FEN1\",\"887A\":\"XIE2\",\"887B\":\"RAN2\",\"887C\":\"ZHI1\",\"887D\":\"REN4\",\"887E\":\"QIN1\",\"887F\":\"JIN1 QIN4\",\"888A\":\"LING3\",\"888B\":\"DAI4\",\"888C\":\"BAO4\",\"888D\":\"PAO2 BAO4\",\"888E\":\"YAO4\",\"888F\":\"ZUO4\",\"889A\":\"BO1 FU2\",\"889B\":\"DI1\",\"889C\":\"WA4 MO4\",\"889D\":\"FU4\",\"889E\":\"GUN3\",\"889F\":\"ZHI4\",\"88A0\":\"ZHI4\",\"88A1\":\"RAN2\",\"88A2\":\"PAN4 FAN2\",\"88A3\":\"YI4\",\"88A4\":\"MAO4 MOU2\",\"88A6\":\"NA4\",\"88A7\":\"KOU1\",\"88A8\":\"XIAN4 XUAN4\",\"88A9\":\"CHAN1\",\"88AA\":\"QU1\",\"88AB\":\"BEI4 PI1 BI4 PI4\",\"88AC\":\"GUN3\",\"88AD\":\"XI2\",\"88AF\":\"BO2\",\"88B1\":\"FU2\",\"88B2\":\"YI2\",\"88B3\":\"CHI3 QI3 DUO3 NUO3\",\"88B4\":\"KU4\",\"88B5\":\"REN4\",\"88B6\":\"JIANG4\",\"88B7\":\"JIA2 JIE2\",\"88B8\":\"CUN2\",\"88B9\":\"MO4\",\"88BA\":\"JIE2\",\"88BB\":\"ER2\",\"88BC\":\"LUO4 GE1\",\"88BD\":\"RU2\",\"88BE\":\"ZHU1\",\"88BF\":\"GUI1\",\"88C0\":\"YIN1\",\"88C1\":\"CAI2\",\"88C2\":\"LIE4 LIE3\",\"88C5\":\"ZHUANG1\",\"88C6\":\"DANG1\",\"88C8\":\"KUN1\",\"88C9\":\"KEN4\",\"88CA\":\"NIAO3\",\"88CB\":\"SHU4\",\"88CC\":\"JIA2\",\"88CD\":\"KUN3\",\"88CE\":\"CHENG2 CHENG3\",\"88CF\":\"LI3\",\"88D0\":\"JUAN1\",\"88D1\":\"SHEN1\",\"88D2\":\"POU2 BAO1\",\"88D3\":\"GE2 JIE1\",\"88D4\":\"YI4\",\"88D5\":\"YU4\",\"88D6\":\"ZHEN3 ZHEN4\",\"88D7\":\"LIU2\",\"88D8\":\"QIU2\",\"88D9\":\"QUN2\",\"88DA\":\"JI4\",\"88DB\":\"YI4\",\"88DC\":\"BU3\",\"88DD\":\"ZHUANG1\",\"88DE\":\"SHUI4\",\"88DF\":\"SHA1\",\"88E0\":\"QUN2\",\"88E1\":\"LI3\",\"88E2\":\"LIAN2\",\"88E3\":\"LIAN4 LIAN3\",\"88E4\":\"KU4\",\"88E5\":\"JIAN3\",\"88E6\":\"FOU2\",\"88E7\":\"CHAN1\",\"88E8\":\"BI4 PI2\",\"88E9\":\"GUN1\",\"88EA\":\"TAO2\",\"88EB\":\"YUAN4\",\"88EC\":\"LING2\",\"88ED\":\"CHI3\",\"88EE\":\"CHANG1\",\"88EF\":\"CHOU2 DAO1\",\"88F0\":\"DUO2 DUO1\",\"88F1\":\"BIAO3\",\"88F2\":\"LIANG3\",\"88F3\":\"CHANG2 SHANG2\",\"88F4\":\"PEI2 FEI2\",\"88F5\":\"PEI2\",\"88F6\":\"FEI1\",\"88F7\":\"YUAN1 GUN3\",\"88F8\":\"LUO3\",\"88F9\":\"GUO3\",\"88FA\":\"YAN3\",\"88FB\":\"DU3 DU1\",\"88FC\":\"XI2 TI4 XI1\",\"88FD\":\"ZHI4\",\"88FE\":\"JU1 JU4\",\"88FF\":\"QI3\",\"890A\":\"BIAN3 PIAN1\",\"890B\":\"DIE2\",\"890C\":\"KUN1\",\"890D\":\"DUAN1\",\"890E\":\"XIU4 YOU4\",\"890F\":\"XIU4 YOU4\",\"891A\":\"CHU3 ZHE3 ZHU3\",\"891B\":\"LV3\",\"891E\":\"YUN3\",\"891F\":\"DA2\",\"892A\":\"TUN4 TUI4\",\"892B\":\"CHI3\",\"892C\":\"SANG3\",\"892D\":\"NIAO3\",\"892E\":\"YING1\",\"892F\":\"JIE4\",\"893A\":\"DIE2\",\"893B\":\"XIE4 DIE2\",\"893C\":\"XIAN1\",\"893D\":\"WEI4\",\"893E\":\"BIAO3\",\"893F\":\"CAO2\",\"894A\":\"ZUI4\",\"894B\":\"JI2\",\"894C\":\"DAN1\",\"894D\":\"ZA2\",\"894E\":\"FAN2\",\"894F\":\"BO2\",\"895A\":\"SUI4\",\"895B\":\"NONG2\",\"895C\":\"CHAN1\",\"895D\":\"LIAN4 LIAN3 CHAN1\",\"895E\":\"BI4\",\"895F\":\"JIN1\",\"896A\":\"WA4\",\"896B\":\"SHI4\",\"896C\":\"BAI3\",\"896D\":\"XIE2\",\"896E\":\"BO2\",\"896F\":\"CHEN4\",\"897A\":\"JIAN3\",\"897B\":\"PAN4\",\"897C\":\"YI4\",\"897E\":\"YA4 XI1\",\"897F\":\"XI1\",\"898A\":\"JI1\",\"898B\":\"JIAN4 XIAN4\",\"898C\":\"GUAN1 GUAN4\",\"898D\":\"BIAN4 PAN2\",\"898E\":\"YAN4\",\"898F\":\"GUI1 KUI1 XU4 GUI4\",\"899A\":\"JUE2\",\"899B\":\"MI4 MO4\",\"899C\":\"TIAO4\",\"899D\":\"LIAN2\",\"899E\":\"YAO4\",\"899F\":\"ZHI4\",\"89A0\":\"JUN1\",\"89A1\":\"XI2\",\"89A2\":\"SHAN3\",\"89A3\":\"WEI1\",\"89A4\":\"XI4\",\"89A5\":\"TIAN3\",\"89A6\":\"YU2\",\"89A7\":\"LAN3\",\"89A8\":\"E4\",\"89A9\":\"DU3\",\"89AA\":\"QIN1 QING4 XIN1\",\"89AB\":\"PANG3\",\"89AC\":\"JI4\",\"89AD\":\"MING2\",\"89AE\":\"YING2\",\"89AF\":\"GOU4\",\"89B0\":\"QU4\",\"89B1\":\"ZHAN4\",\"89B2\":\"JIN3 JIN4\",\"89B3\":\"GUAN1\",\"89B4\":\"DENG1\",\"89B5\":\"JIAN4\",\"89B6\":\"LUO2\",\"89B7\":\"QU4\",\"89B8\":\"JIAN4 XIAN2\",\"89B9\":\"WEI2\",\"89BA\":\"JUE2 JIAO4\",\"89BB\":\"QU4\",\"89BC\":\"LUO2\",\"89BD\":\"LAN3 LAN4\",\"89BE\":\"SHEN3\",\"89BF\":\"DI2 JI2\",\"89C0\":\"GUAN1 GUAN4\",\"89C1\":\"JIAN4 XIAN4\",\"89C2\":\"GUAN1 GUAN4\",\"89C3\":\"YAN4\",\"89C4\":\"GUI1\",\"89C5\":\"MI4\",\"89C6\":\"SHI4\",\"89C7\":\"ZHAN1 CHAN1\",\"89C8\":\"LAN3\",\"89C9\":\"JUE2 JIAO4\",\"89CA\":\"JI4\",\"89CB\":\"XI2\",\"89CC\":\"DI2\",\"89CD\":\"TIAN3\",\"89CE\":\"YU2\",\"89CF\":\"GOU4\",\"89D0\":\"JIN3\",\"89D1\":\"QU4\",\"89D2\":\"JIAO3 JUE2 GU3 LU4\",\"89D3\":\"JIU1 QIU2\",\"89D4\":\"JIN1\",\"89D5\":\"CU1\",\"89D6\":\"JUE2 KUI4 GUI4\",\"89D7\":\"ZHI4\",\"89D8\":\"CHAO4\",\"89D9\":\"JI2 FAN2\",\"89DA\":\"GU1\",\"89DB\":\"DAN4\",\"89DC\":\"ZI1 ZUI3\",\"89DD\":\"DI3\",\"89DE\":\"SHANG1\",\"89DF\":\"HUA4 XIE4\",\"89E0\":\"QUAN2\",\"89E1\":\"GE2\",\"89E2\":\"CHI4\",\"89E3\":\"JIE3 JIE4 XIE4\",\"89E4\":\"GUI3\",\"89E5\":\"GONG1\",\"89E6\":\"HONG2 CHU4\",\"89E7\":\"JIE3\",\"89E8\":\"HUN4\",\"89E9\":\"QIU2\",\"89EA\":\"XING1\",\"89EB\":\"SU4\",\"89EC\":\"NI2\",\"89ED\":\"JI1 QI3 QI2\",\"89EE\":\"LU4\",\"89EF\":\"ZHI4 ZHI1\",\"89F0\":\"ZHA1 DA3 ZHA3\",\"89F1\":\"BI4\",\"89F2\":\"XING1\",\"89F3\":\"HU2 JUE2 QUE4\",\"89F4\":\"SHANG1\",\"89F5\":\"GONG1\",\"89F6\":\"ZHI4 ZHI1\",\"89F7\":\"XUE2\",\"89F8\":\"CHU4\",\"89F9\":\"XI1 WEI2\",\"89FA\":\"YI2\",\"89FB\":\"LU4\",\"89FC\":\"JUE2\",\"89FD\":\"XI1\",\"89FE\":\"YAN4\",\"89FF\":\"XI1\",\"8A00\":\"YAN2 YAN4 YIN2\",\"8A02\":\"DING4\",\"8A03\":\"FU4\",\"8A04\":\"QIU2\",\"8A05\":\"QIU2\",\"8A06\":\"JIAO4\",\"8A07\":\"HONG1 JUN4 HENG1\",\"8A08\":\"JI4\",\"8A09\":\"FAN4\",\"8A0A\":\"XUN4\",\"8A0B\":\"DIAO4\",\"8A0C\":\"HONG2 HONG4\",\"8A0D\":\"CHA4\",\"8A0E\":\"TAO3\",\"8A0F\":\"XU1 XU3\",\"8A10\":\"JIE2 JI4\",\"8A11\":\"YI2 DAN4\",\"8A12\":\"REN4\",\"8A13\":\"XUN4\",\"8A14\":\"YIN2\",\"8A15\":\"SHAN4\",\"8A16\":\"QI4\",\"8A17\":\"TUO1\",\"8A18\":\"JI4\",\"8A19\":\"XUN4\",\"8A1A\":\"YIN2\",\"8A1B\":\"E2\",\"8A1C\":\"FEN1\",\"8A1D\":\"YA4\",\"8A1E\":\"YAO1\",\"8A1F\":\"SONG4 RONG2\",\"8A20\":\"SHEN3\",\"8A21\":\"YIN2 YIN3 JIN4\",\"8A22\":\"XIN1 XI1 YIN2\",\"8A23\":\"JUE2\",\"8A24\":\"XIAO2 NA2\",\"8A25\":\"NE4 NA4\",\"8A26\":\"CHEN2 SHEN2\",\"8A27\":\"YOU2\",\"8A28\":\"ZHI3\",\"8A29\":\"XIONG1\",\"8A2A\":\"FANG3\",\"8A2B\":\"XIN4\",\"8A2C\":\"CHAO1 MIAO3\",\"8A2D\":\"SHE4\",\"8A2E\":\"XIAN1\",\"8A2F\":\"SHA3\",\"8A30\":\"TUN2\",\"8A31\":\"XU3 HU3\",\"8A32\":\"YI4\",\"8A33\":\"YI4\",\"8A34\":\"SU4\",\"8A35\":\"CHI1\",\"8A36\":\"HE1\",\"8A37\":\"SHEN1\",\"8A38\":\"HE2\",\"8A39\":\"XU4\",\"8A3A\":\"ZHEN3\",\"8A3B\":\"ZHU4\",\"8A3C\":\"ZHENG4\",\"8A3D\":\"GOU4\",\"8A3E\":\"ZI3 ZI1 CI1\",\"8A3F\":\"ZI3 ZI1\",\"8A40\":\"ZHAN1 CHE4\",\"8A41\":\"GU3\",\"8A42\":\"FU4\",\"8A43\":\"QUAN3\",\"8A44\":\"DIE2\",\"8A45\":\"LING2\",\"8A46\":\"DI3 TI4\",\"8A47\":\"YANG4\",\"8A48\":\"LI4\",\"8A49\":\"NAO2\",\"8A4A\":\"PAN4\",\"8A4B\":\"ZHOU4\",\"8A4C\":\"GAN4\",\"8A4D\":\"YI4\",\"8A4E\":\"JU4\",\"8A4F\":\"AO4\",\"8A50\":\"ZHA4\",\"8A51\":\"TUO2\",\"8A52\":\"YI2 DAI4 TAI2\",\"8A53\":\"QU3\",\"8A54\":\"ZHAO4 ZHAO1\",\"8A55\":\"PING2\",\"8A56\":\"BI4\",\"8A57\":\"XIONG4\",\"8A58\":\"QU1 CHU4 QU4\",\"8A59\":\"BA2\",\"8A5A\":\"DA2\",\"8A5B\":\"ZU3\",\"8A5C\":\"TAO1\",\"8A5D\":\"ZHU3\",\"8A5E\":\"CI2\",\"8A5F\":\"ZHE2\",\"8A60\":\"YONG3\",\"8A61\":\"XU3\",\"8A62\":\"XUN2\",\"8A63\":\"YI4\",\"8A64\":\"HUANG3\",\"8A65\":\"HE2\",\"8A66\":\"SHI4\",\"8A67\":\"CHA2\",\"8A68\":\"JIAO1\",\"8A69\":\"SHI1\",\"8A6A\":\"HEN3\",\"8A6B\":\"CHA4 DU4\",\"8A6C\":\"GOU4 HOU4\",\"8A6D\":\"GUI3\",\"8A6E\":\"QUAN2\",\"8A6F\":\"HUI4\",\"8A70\":\"JIE2\",\"8A71\":\"HUA4\",\"8A72\":\"GAI1\",\"8A73\":\"XIANG2 YANG2\",\"8A74\":\"WEI1\",\"8A75\":\"SHEN1\",\"8A76\":\"CHOU2 ZHOU4\",\"8A77\":\"TONG2\",\"8A78\":\"MI2\",\"8A79\":\"ZHAN1 SHAN4 DAN4\",\"8A7A\":\"MING4\",\"8A7B\":\"E4 LUO4\",\"8A7C\":\"HUI1\",\"8A7D\":\"YAN2\",\"8A7E\":\"XIONG1\",\"8A7F\":\"GUA4\",\"8A80\":\"ER4\",\"8A81\":\"BENG3\",\"8A82\":\"TIAO3 DIAO4\",\"8A83\":\"CHI3 CHI2 YI2\",\"8A84\":\"LEI3\",\"8A85\":\"ZHU1\",\"8A86\":\"KUANG1 KUANG2 KUANG4\",\"8A87\":\"KUA1\",\"8A88\":\"WU2\",\"8A89\":\"YU4\",\"8A8A\":\"TENG2\",\"8A8B\":\"JI4\",\"8A8C\":\"ZHI4\",\"8A8D\":\"REN4\",\"8A8E\":\"SU4\",\"8A8F\":\"LANG3\",\"8A90\":\"E2\",\"8A91\":\"KUANG2 KUANG4\",\"8A92\":\"E4 AI1 EI1 EI2 EI3 EI4 XI1 YI4\",\"8A93\":\"SHI4\",\"8A94\":\"TING3\",\"8A95\":\"DAN4\",\"8A96\":\"BO2 BEI4\",\"8A97\":\"CHAN2\",\"8A98\":\"YOU4\",\"8A99\":\"HENG2 KENG1\",\"8A9A\":\"QIAO4\",\"8A9B\":\"QIN1\",\"8A9C\":\"SHUA4\",\"8A9D\":\"AN1\",\"8A9E\":\"YU3 YU4\",\"8A9F\":\"XIAO4\",\"8AA0\":\"CHENG2\",\"8AA1\":\"JIE4\",\"8AA2\":\"XIAN4\",\"8AA3\":\"WU1 WU2\",\"8AA4\":\"WU4\",\"8AA5\":\"GAO4\",\"8AA6\":\"SONG4\",\"8AA7\":\"PU3 BU1\",\"8AA8\":\"HUI4\",\"8AA9\":\"JING4\",\"8AAA\":\"SHUO1 SHUI4 YUE4 TUO1\",\"8AAB\":\"ZHEN4\",\"8AAC\":\"SHUO1 SHUI4 YUE4 TUO1\",\"8AAD\":\"DU2\",\"8AAF\":\"CHANG4\",\"8AB0\":\"SHUI2 SHEI2\",\"8AB1\":\"JIE2\",\"8AB2\":\"KE4\",\"8AB3\":\"QU1\",\"8AB4\":\"CONG2\",\"8AB5\":\"XIAO2\",\"8AB6\":\"SUI4\",\"8AB7\":\"WANG3\",\"8AB8\":\"XUAN2\",\"8AB9\":\"FEI3\",\"8ABA\":\"CHI1\",\"8ABB\":\"TA4\",\"8ABC\":\"YI4 YI2\",\"8ABD\":\"NA2\",\"8ABE\":\"YIN2\",\"8ABF\":\"DIAO4 TIAO4 TIAO2 ZHOU1\",\"8AC0\":\"PI3\",\"8AC1\":\"CHUO4\",\"8AC2\":\"CHAN3\",\"8AC3\":\"CHEN1\",\"8AC4\":\"ZHUN1 ZHUN4\",\"8AC5\":\"JI1\",\"8AC6\":\"QI1 JI1\",\"8AC7\":\"TAN2\",\"8AC8\":\"ZHUI4\",\"8AC9\":\"WEI3\",\"8ACA\":\"JU2\",\"8ACB\":\"QING3 QING4 QING1 QING2\",\"8ACC\":\"JIAN4 DONG3\",\"8ACD\":\"ZHENG1 ZHENG4\",\"8ACE\":\"ZE2\",\"8ACF\":\"ZOU1 ZHOU1\",\"8AD0\":\"QIAN1\",\"8AD1\":\"ZHUO2\",\"8AD2\":\"LIANG4 LIANG2\",\"8AD3\":\"JIAN4\",\"8AD4\":\"ZHU4\",\"8AD5\":\"HAO2 XIA4\",\"8AD6\":\"LUN4 LUN2\",\"8AD7\":\"SHEN3 NIE4\",\"8AD8\":\"BIAO3\",\"8AD9\":\"HUAI4\",\"8ADA\":\"PIAN2\",\"8ADB\":\"YU2\",\"8ADC\":\"DIE2 XIE4\",\"8ADD\":\"XU3\",\"8ADE\":\"PIAN3 PIAN2\",\"8ADF\":\"SHI4\",\"8AE0\":\"XUAN1 XUAN3\",\"8AE1\":\"SHI4\",\"8AE2\":\"HUN4\",\"8AE3\":\"HUA4\",\"8AE4\":\"E4\",\"8AE5\":\"ZHONG4\",\"8AE6\":\"DI4 TI2\",\"8AE7\":\"XIE2\",\"8AE8\":\"FU2\",\"8AE9\":\"PU3\",\"8AEA\":\"TING2\",\"8AEB\":\"JIAN4\",\"8AEC\":\"QI3\",\"8AED\":\"YU4 TOU3\",\"8AEE\":\"ZI1\",\"8AEF\":\"CHUAN2\",\"8AF0\":\"XI3\",\"8AF1\":\"HUI4\",\"8AF2\":\"YIN1\",\"8AF3\":\"AN1 TOU3\",\"8AF4\":\"XIAN2\",\"8AF5\":\"NAN2\",\"8AF6\":\"CHEN2 SHEN2\",\"8AF7\":\"FENG3 FENG1 FENG4\",\"8AF8\":\"ZHU1 CHU2\",\"8AF9\":\"YANG2\",\"8AFA\":\"YAN4\",\"8AFB\":\"HENG1\",\"8AFC\":\"XUAN1\",\"8AFD\":\"GE2\",\"8AFE\":\"NUO4\",\"8AFF\":\"QI4\",\"8B00\":\"MOU2\",\"8B01\":\"YE4\",\"8B02\":\"WEI4\",\"8B04\":\"TENG2\",\"8B05\":\"ZOU1 ZHOU1 CHAO3 CHOU1\",\"8B06\":\"SHAN4\",\"8B07\":\"JIAN3\",\"8B08\":\"BO2\",\"8B0A\":\"HUANG3\",\"8B0B\":\"HUO4\",\"8B0C\":\"GE1\",\"8B0D\":\"YING2 HONG1\",\"8B0E\":\"MI2 MEI4 MI4\",\"8B0F\":\"XIAO3\",\"8B10\":\"MI4\",\"8B11\":\"XI4 XI3\",\"8B12\":\"QIANG1\",\"8B13\":\"CHEN1\",\"8B14\":\"NVE4 XUE4\",\"8B15\":\"TI2\",\"8B16\":\"SU4\",\"8B17\":\"BANG4\",\"8B18\":\"CHI2\",\"8B19\":\"QIAN1 QIAN4 ZHAN4\",\"8B1A\":\"SHI4 YI4 XI4\",\"8B1B\":\"JIANG3\",\"8B1C\":\"YUAN4 QUAN2\",\"8B1D\":\"XIE4\",\"8B1E\":\"XUE4 XIAO4\",\"8B1F\":\"TAO1\",\"8B20\":\"YAO2\",\"8B21\":\"YAO2\",\"8B23\":\"YU2\",\"8B24\":\"BIAO1\",\"8B25\":\"CONG4\",\"8B26\":\"QING4 QING3\",\"8B27\":\"LI2\",\"8B28\":\"MO2\",\"8B29\":\"MO4 MO2\",\"8B2A\":\"SHANG1\",\"8B2B\":\"ZHE2 ZE2\",\"8B2C\":\"MIU4\",\"8B2D\":\"JIAN3\",\"8B2E\":\"ZE2\",\"8B2F\":\"JIE1 ZHA1 ZHA3 ZU3\",\"8B30\":\"LIAN2\",\"8B31\":\"LOU2 LV3\",\"8B32\":\"CAN1\",\"8B33\":\"OU1 XU2\",\"8B34\":\"GUAN4\",\"8B35\":\"XI2\",\"8B36\":\"ZHUO2\",\"8B37\":\"AO2 AO4\",\"8B38\":\"AO2 AO4\",\"8B39\":\"JIN3\",\"8B3A\":\"ZHE2\",\"8B3B\":\"YI2 CHI2\",\"8B3C\":\"HU4 HU1\",\"8B3D\":\"JIANG4\",\"8B3E\":\"MAN2 MAN4\",\"8B3F\":\"CHAO2 ZHAO1\",\"8B40\":\"HAN4\",\"8B41\":\"HUA2\",\"8B42\":\"CHAN3\",\"8B43\":\"XU1\",\"8B44\":\"ZENG1\",\"8B45\":\"SE4\",\"8B46\":\"XI1\",\"8B47\":\"SHE1\",\"8B48\":\"DUI4\",\"8B49\":\"ZHENG4\",\"8B4A\":\"NAO2\",\"8B4B\":\"LAN2\",\"8B4C\":\"E2\",\"8B4D\":\"YING4 YING2\",\"8B4E\":\"JUE2\",\"8B4F\":\"JI1\",\"8B50\":\"ZUN3\",\"8B51\":\"JIAO3\",\"8B52\":\"BO4\",\"8B53\":\"HUI4\",\"8B54\":\"ZHUAN4\",\"8B55\":\"MU2\",\"8B56\":\"ZEN4 JIAN4\",\"8B57\":\"ZHA2\",\"8B58\":\"SHI5 SHI4 SHI2 ZHI4\",\"8B59\":\"QIAO2 QIAO4\",\"8B5A\":\"TAN2\",\"8B5B\":\"ZEN4\",\"8B5C\":\"PU3\",\"8B5D\":\"SHENG2\",\"8B5E\":\"XUAN1\",\"8B5F\":\"ZAO4\",\"8B60\":\"TAN1\",\"8B61\":\"DANG3\",\"8B62\":\"SUI4\",\"8B63\":\"QIAN1\",\"8B64\":\"JI1\",\"8B65\":\"JIAO4\",\"8B66\":\"JING3\",\"8B67\":\"LIAN2\",\"8B68\":\"NOU2 NONG2\",\"8B69\":\"YI1\",\"8B6A\":\"AI4\",\"8B6B\":\"ZHAN1\",\"8B6C\":\"PI4\",\"8B6D\":\"HUI3\",\"8B6E\":\"HUA4\",\"8B6F\":\"YI4\",\"8B70\":\"YI4\",\"8B71\":\"SHAN4\",\"8B72\":\"RANG4\",\"8B73\":\"NOU4\",\"8B74\":\"QIAN3\",\"8B75\":\"ZHUI4\",\"8B76\":\"TA4\",\"8B77\":\"HU4\",\"8B78\":\"ZHOU1\",\"8B79\":\"HAO2 XIA4\",\"8B7A\":\"YE4\",\"8B7B\":\"YING1\",\"8B7C\":\"JIAN4 JIAN1 KAN4\",\"8B7D\":\"YU4\",\"8B7E\":\"JIAN3\",\"8B7F\":\"HUI4\",\"8B80\":\"DU2 DOU4\",\"8B81\":\"ZHE2\",\"8B82\":\"XUAN4\",\"8B83\":\"ZAN4\",\"8B84\":\"LEI3\",\"8B85\":\"SHEN3\",\"8B86\":\"WEI4\",\"8B87\":\"CHAN3\",\"8B88\":\"LI4\",\"8B89\":\"YI2\",\"8B8A\":\"BIAN4\",\"8B8B\":\"ZHE2 SHE4\",\"8B8C\":\"YAN4\",\"8B8D\":\"E4\",\"8B8E\":\"CHOU2\",\"8B8F\":\"WEI4\",\"8B90\":\"CHOU2\",\"8B91\":\"YAO4\",\"8B92\":\"CHAN2\",\"8B93\":\"RANG4\",\"8B94\":\"YIN3\",\"8B95\":\"LAN2\",\"8B96\":\"CHEN4 CHAN4\",\"8B97\":\"HUO4\",\"8B98\":\"ZHE2\",\"8B99\":\"HUAN1 XUAN1\",\"8B9A\":\"ZAN4\",\"8B9B\":\"YI4\",\"8B9C\":\"DANG3 DANG4\",\"8B9D\":\"ZHAN1\",\"8B9E\":\"YAN4\",\"8B9F\":\"DU2\",\"8BA0\":\"YAN2\",\"8BA1\":\"JI4\",\"8BA2\":\"DING4\",\"8BA3\":\"FU4\",\"8BA4\":\"REN4\",\"8BA5\":\"JI1\",\"8BA6\":\"JIE2\",\"8BA7\":\"HONG2 HONG4\",\"8BA8\":\"TAO3\",\"8BA9\":\"RANG4\",\"8BAA\":\"SHAN4\",\"8BAB\":\"QI4\",\"8BAC\":\"TUO1\",\"8BAD\":\"XUN4\",\"8BAE\":\"YI4\",\"8BAF\":\"XUN4\",\"8BB0\":\"JI4\",\"8BB1\":\"REN4\",\"8BB2\":\"JIANG3\",\"8BB3\":\"HUI4\",\"8BB4\":\"OU1\",\"8BB5\":\"JU4\",\"8BB6\":\"YA4\",\"8BB7\":\"NE4 NA4\",\"8BB8\":\"XU3 HU3\",\"8BB9\":\"E2\",\"8BBA\":\"LUN4 LUN2\",\"8BBB\":\"XIONG1\",\"8BBC\":\"SONG4 RONG2\",\"8BBD\":\"FENG1 FENG3 FENG4\",\"8BBE\":\"SHE4\",\"8BBF\":\"FANG3\",\"8BC0\":\"JUE2\",\"8BC1\":\"ZHENG4\",\"8BC2\":\"GU3\",\"8BC3\":\"HE1\",\"8BC4\":\"PING2\",\"8BC5\":\"ZU3\",\"8BC6\":\"SHI4 SHI2 ZHI4\",\"8BC7\":\"XIONG4\",\"8BC8\":\"ZHA4\",\"8BC9\":\"SU4\",\"8BCA\":\"ZHEN3\",\"8BCB\":\"DI3\",\"8BCC\":\"ZOU1 ZHOU1\",\"8BCD\":\"CI2\",\"8BCE\":\"QU4 QU1\",\"8BCF\":\"ZHAO4\",\"8BD0\":\"BI4\",\"8BD1\":\"YI4\",\"8BD2\":\"YI2\",\"8BD3\":\"KUANG1 KUANG2 KUANG4\",\"8BD4\":\"LEI3\",\"8BD5\":\"SHI4\",\"8BD6\":\"GUA4\",\"8BD7\":\"SHI1\",\"8BD8\":\"JIE2\",\"8BD9\":\"HUI1\",\"8BDA\":\"CHENG2\",\"8BDB\":\"ZHU1\",\"8BDC\":\"SHEN1\",\"8BDD\":\"HUA4\",\"8BDE\":\"DAN4\",\"8BDF\":\"GOU4\",\"8BE0\":\"QUAN2\",\"8BE1\":\"GUI3\",\"8BE2\":\"XUN2\",\"8BE3\":\"YI4\",\"8BE4\":\"ZHENG1 ZHENG4\",\"8BE5\":\"GAI1\",\"8BE6\":\"XIANG2 YANG2\",\"8BE7\":\"CHA4\",\"8BE8\":\"HUN4\",\"8BE9\":\"XU3\",\"8BEA\":\"ZHOU1\",\"8BEB\":\"JIE4\",\"8BEC\":\"WU2 WU1\",\"8BED\":\"YU3 YU4\",\"8BEE\":\"QIAO4\",\"8BEF\":\"WU4\",\"8BF0\":\"GAO4\",\"8BF1\":\"YOU4\",\"8BF2\":\"HUI4\",\"8BF3\":\"KUANG2 KUANG4\",\"8BF4\":\"SHUO1 SHUI4 TUO1 YUE4\",\"8BF5\":\"SONG4\",\"8BF6\":\"AI1 EI1 EI2 EI3 EI4 XI1\",\"8BF7\":\"QING3 QING4 QING1 QING2\",\"8BF8\":\"ZHU1\",\"8BF9\":\"ZOU1\",\"8BFA\":\"NUO4\",\"8BFB\":\"DU2 DOU4\",\"8BFC\":\"ZHUO2\",\"8BFD\":\"FEI3\",\"8BFE\":\"KE4\",\"8BFF\":\"WEI3\",\"8C00\":\"YU2\",\"8C01\":\"SHUI2 SHEI2\",\"8C02\":\"SHEN3\",\"8C03\":\"DIAO4 TIAO4 TIAO2 ZHOU1\",\"8C04\":\"CHAN3\",\"8C05\":\"LIANG4 LIANG2\",\"8C06\":\"ZHUN1 ZHUN4\",\"8C07\":\"SUI4\",\"8C08\":\"TAN2\",\"8C09\":\"SHEN3\",\"8C0A\":\"YI2 YI4\",\"8C0B\":\"MOU2\",\"8C0C\":\"CHEN2\",\"8C0D\":\"DIE2\",\"8C0E\":\"HUANG3\",\"8C0F\":\"JIAN4\",\"8C10\":\"XIE2\",\"8C11\":\"NVE4 XUE4\",\"8C12\":\"YE4\",\"8C13\":\"WEI4\",\"8C14\":\"E4\",\"8C15\":\"YU4\",\"8C16\":\"XUAN1\",\"8C17\":\"CHAN2\",\"8C18\":\"ZI1\",\"8C19\":\"AN1\",\"8C1A\":\"YAN4\",\"8C1B\":\"DI4 TI2\",\"8C1C\":\"MI2 MEI4 MI4\",\"8C1D\":\"PIAN2 PIAN3\",\"8C1E\":\"XU3\",\"8C1F\":\"MO2\",\"8C20\":\"DANG3\",\"8C21\":\"SU4\",\"8C22\":\"XIE4\",\"8C23\":\"YAO2\",\"8C24\":\"BANG4\",\"8C25\":\"SHI4\",\"8C26\":\"QIAN1 QIAN4\",\"8C27\":\"MI4\",\"8C28\":\"JIN3\",\"8C29\":\"MAN2 MAN4\",\"8C2A\":\"ZHE2\",\"8C2B\":\"JIAN3\",\"8C2C\":\"MIU4\",\"8C2D\":\"TAN2\",\"8C2E\":\"ZEN4 JIAN4\",\"8C2F\":\"QIAO2 QIAO4\",\"8C30\":\"LAN2\",\"8C31\":\"PU3\",\"8C32\":\"JUE2\",\"8C33\":\"YAN4\",\"8C34\":\"QIAN3\",\"8C35\":\"ZHAN1\",\"8C36\":\"CHEN4\",\"8C37\":\"GU3 YU4 LU4\",\"8C38\":\"QIAN1\",\"8C39\":\"HONG2\",\"8C3A\":\"XIA1\",\"8C3B\":\"JUE2\",\"8C3C\":\"HONG2\",\"8C3D\":\"HAN1\",\"8C3E\":\"HONG1\",\"8C3F\":\"XI1 QI1\",\"8C40\":\"XI1 XI2\",\"8C41\":\"HUO1 HUO4 HUA2\",\"8C42\":\"LIAO2\",\"8C43\":\"HAN3\",\"8C44\":\"DU2\",\"8C45\":\"LONG2\",\"8C46\":\"DOU4\",\"8C47\":\"JIANG1\",\"8C48\":\"QI3 KAI3\",\"8C49\":\"CHI3 SHI4\",\"8C4A\":\"LI3 FENG1\",\"8C4B\":\"DENG1\",\"8C4C\":\"WAN1\",\"8C4D\":\"BI1\",\"8C4E\":\"SHU4\",\"8C4F\":\"XIAN4\",\"8C50\":\"FENG1\",\"8C51\":\"ZHI4\",\"8C52\":\"ZHI4\",\"8C53\":\"YAN4\",\"8C54\":\"YAN4\",\"8C55\":\"SHI3\",\"8C56\":\"CHU4\",\"8C57\":\"HUI1\",\"8C58\":\"TUN2\",\"8C59\":\"YI4\",\"8C5A\":\"TUN2 DUN1\",\"8C5B\":\"YI4\",\"8C5C\":\"JIAN1\",\"8C5D\":\"BA1\",\"8C5E\":\"HOU4\",\"8C5F\":\"E4\",\"8C60\":\"CU2\",\"8C61\":\"XIANG4\",\"8C62\":\"HUAN4\",\"8C63\":\"JIAN1 YAN4\",\"8C64\":\"KEN3\",\"8C65\":\"GAI1\",\"8C66\":\"QU2\",\"8C67\":\"FU1\",\"8C68\":\"XI1\",\"8C69\":\"BIN1\",\"8C6A\":\"HAO2\",\"8C6B\":\"YU4 XU4\",\"8C6C\":\"ZHU1\",\"8C6D\":\"JIA1\",\"8C6E\":\"FEN2\",\"8C6F\":\"XI1\",\"8C70\":\"BO2 HU4 HUO4 GOU4\",\"8C71\":\"WEN1\",\"8C72\":\"HUAN2 YUAN2\",\"8C73\":\"BIN1\",\"8C74\":\"DI2\",\"8C75\":\"ZONG1\",\"8C76\":\"FEN2\",\"8C77\":\"YI4\",\"8C78\":\"ZHI4\",\"8C79\":\"BAO4\",\"8C7A\":\"CHAI2\",\"8C7B\":\"AN4 HAN4\",\"8C7C\":\"PI2\",\"8C7D\":\"NA4\",\"8C7E\":\"PI1\",\"8C7F\":\"GOU3\",\"8C80\":\"NA4\",\"8C81\":\"YOU4\",\"8C82\":\"DIAO1\",\"8C83\":\"MO4\",\"8C84\":\"SI4\",\"8C85\":\"XIU1\",\"8C86\":\"HUAN2 HUAN1\",\"8C87\":\"KUN1\",\"8C88\":\"HE2 HAO2 MA4 MO4\",\"8C89\":\"HE2 HAO2 MO4 MA4\",\"8C8A\":\"MO4\",\"8C8B\":\"HAN4\",\"8C8C\":\"MAO4\",\"8C8D\":\"LI2 MAI2\",\"8C8E\":\"NI2\",\"8C8F\":\"BI3\",\"8C90\":\"YU3\",\"8C91\":\"JIA1\",\"8C92\":\"TUAN1\",\"8C93\":\"MAO1\",\"8C94\":\"PI2\",\"8C95\":\"XI1\",\"8C96\":\"E4\",\"8C97\":\"JU4\",\"8C98\":\"MO4\",\"8C99\":\"CHU1\",\"8C9A\":\"TAN2\",\"8C9B\":\"HUAN1\",\"8C9C\":\"JUE2\",\"8C9D\":\"BEI4\",\"8C9E\":\"ZHEN1\",\"8C9F\":\"YUAN2 YUN2\",\"8CA0\":\"FU4\",\"8CA1\":\"CAI2\",\"8CA2\":\"GONG4\",\"8CA3\":\"TE4\",\"8CA4\":\"YI2 YI4\",\"8CA5\":\"HANG2\",\"8CA6\":\"WAN4\",\"8CA7\":\"PIN2\",\"8CA8\":\"HUO4\",\"8CA9\":\"FAN4\",\"8CAA\":\"TAN1\",\"8CAB\":\"GUAN4 WAN1\",\"8CAC\":\"ZE2 ZHAI4\",\"8CAD\":\"ZHI2\",\"8CAE\":\"ER4\",\"8CAF\":\"ZHU3 ZHU4\",\"8CB0\":\"SHI4\",\"8CB1\":\"BI4\",\"8CB2\":\"ZI1\",\"8CB3\":\"ER4\",\"8CB4\":\"GUI4\",\"8CB5\":\"PIAN3\",\"8CB6\":\"BIAN3\",\"8CB7\":\"MAI3\",\"8CB8\":\"DAI4 TE4\",\"8CB9\":\"SHENG4\",\"8CBA\":\"KUANG4\",\"8CBB\":\"FEI4 BI4\",\"8CBC\":\"TIE1\",\"8CBD\":\"YI2\",\"8CBE\":\"CHI2\",\"8CBF\":\"MAO4\",\"8CC0\":\"HE4\",\"8CC1\":\"BI4 BEN1 FEI2 FEN2 FEN4\",\"8CC2\":\"LU4\",\"8CC3\":\"LIN4 REN4\",\"8CC4\":\"HUI4\",\"8CC5\":\"GAI1\",\"8CC6\":\"PIAN2\",\"8CC7\":\"ZI1 ZI4\",\"8CC8\":\"JIA3 JIA4 GU3\",\"8CC9\":\"XU4\",\"8CCA\":\"ZEI2 ZE2\",\"8CCB\":\"JIAO3\",\"8CCC\":\"GAI4 GAI1\",\"8CCD\":\"ZANG1\",\"8CCE\":\"JIAN4\",\"8CCF\":\"YING4\",\"8CD0\":\"XUN4\",\"8CD1\":\"ZHEN4\",\"8CD2\":\"SHE1 SHA1\",\"8CD3\":\"BIN1 BIN4\",\"8CD4\":\"BIN1 BIN4\",\"8CD5\":\"QIU2\",\"8CD6\":\"SHE1\",\"8CD7\":\"CHUAN4\",\"8CD8\":\"ZANG1\",\"8CD9\":\"ZHOU1\",\"8CDA\":\"LAI4\",\"8CDB\":\"ZAN4\",\"8CDC\":\"CI4 SI4\",\"8CDD\":\"CHEN1\",\"8CDE\":\"SHANG3\",\"8CDF\":\"TIAN3\",\"8CE0\":\"PEI2\",\"8CE1\":\"GENG1\",\"8CE2\":\"XIAN2\",\"8CE3\":\"MAI4\",\"8CE4\":\"JIAN4\",\"8CE5\":\"SUI4\",\"8CE6\":\"FU4\",\"8CE7\":\"TAN4 TAN3\",\"8CE8\":\"CONG2\",\"8CE9\":\"CONG2\",\"8CEA\":\"ZHI4 ZHI2\",\"8CEB\":\"JI1 QI2\",\"8CEC\":\"ZHANG4\",\"8CED\":\"DU3\",\"8CEE\":\"JIN4\",\"8CEF\":\"XIONG1 MIN2\",\"8CF0\":\"SHUN3\",\"8CF1\":\"YUN3\",\"8CF2\":\"BAO3\",\"8CF3\":\"ZAI1\",\"8CF4\":\"LAI4\",\"8CF5\":\"FENG4\",\"8CF6\":\"CANG4\",\"8CF7\":\"JI1 QI2\",\"8CF8\":\"SHENG4\",\"8CF9\":\"AI4\",\"8CFA\":\"ZHUAN4 ZUAN4\",\"8CFB\":\"FU4\",\"8CFC\":\"GOU4\",\"8CFD\":\"SAI4\",\"8CFE\":\"ZE2\",\"8CFF\":\"LIAO2\",\"8D00\":\"WEI4\",\"8D01\":\"BAI4\",\"8D02\":\"CHEN3\",\"8D03\":\"ZHUAN4 ZUAN4\",\"8D04\":\"ZHI4 ZHI2\",\"8D05\":\"ZHUI4\",\"8D06\":\"BIAO1\",\"8D07\":\"YUN1\",\"8D08\":\"ZENG4\",\"8D09\":\"TAN3 DAN3 DAN4\",\"8D0A\":\"ZAN4\",\"8D0B\":\"YAN4\",\"8D0D\":\"SHAN4 DAN4\",\"8D0E\":\"WAN4\",\"8D0F\":\"YING2\",\"8D10\":\"JIN4\",\"8D11\":\"GAN3 GAN4 GONG4\",\"8D12\":\"XIAN2\",\"8D13\":\"ZANG1\",\"8D14\":\"BI4\",\"8D15\":\"DU2\",\"8D16\":\"SHU2 SHU4\",\"8D17\":\"YAN4\",\"8D19\":\"XUAN4\",\"8D1A\":\"LONG4\",\"8D1B\":\"GAN4 GONG4 ZHUANG4\",\"8D1C\":\"ZANG1\",\"8D1D\":\"BEI4\",\"8D1E\":\"ZHEN1\",\"8D1F\":\"FU4\",\"8D20\":\"YUAN2 YUN2\",\"8D21\":\"GONG4\",\"8D22\":\"CAI2\",\"8D23\":\"ZE2 ZHAI4\",\"8D24\":\"XIAN2\",\"8D25\":\"BAI4\",\"8D26\":\"ZHANG4\",\"8D27\":\"HUO4\",\"8D28\":\"ZHI2 ZHI4\",\"8D29\":\"FAN4\",\"8D2A\":\"TAN1\",\"8D2B\":\"PIN2\",\"8D2C\":\"BIAN3\",\"8D2D\":\"GOU4\",\"8D2E\":\"ZHU3 ZHU4\",\"8D2F\":\"GUAN4 WAN1\",\"8D30\":\"ER4\",\"8D31\":\"JIAN4\",\"8D32\":\"BI4 BEN1 FEI2 FEN2 FEN4\",\"8D33\":\"SHI4\",\"8D34\":\"TIE1\",\"8D35\":\"GUI4\",\"8D36\":\"KUANG4\",\"8D37\":\"DAI4 TE4\",\"8D38\":\"MAO4\",\"8D39\":\"FEI4 BI4\",\"8D3A\":\"HE4\",\"8D3B\":\"YI2\",\"8D3C\":\"ZEI2 ZE2\",\"8D3D\":\"ZHI4\",\"8D3E\":\"JIA3 GU3 JIA4\",\"8D3F\":\"HUI4\",\"8D40\":\"ZI1\",\"8D41\":\"REN4 LIN4\",\"8D42\":\"LU4\",\"8D43\":\"ZANG1\",\"8D44\":\"ZI1\",\"8D45\":\"GAI1\",\"8D46\":\"JIN4\",\"8D47\":\"QIU2\",\"8D48\":\"ZHEN4\",\"8D49\":\"LAI4\",\"8D4A\":\"SHE1 SHA1\",\"8D4B\":\"FU4\",\"8D4C\":\"DU3\",\"8D4D\":\"JI1 QI2\",\"8D4E\":\"SHU2\",\"8D4F\":\"SHANG3\",\"8D50\":\"SI4 CI4\",\"8D51\":\"BI4\",\"8D52\":\"ZHOU1\",\"8D53\":\"GENG1\",\"8D54\":\"PEI2\",\"8D55\":\"TAN4 TAN3\",\"8D56\":\"LAI4\",\"8D57\":\"FENG4\",\"8D58\":\"ZHUI4\",\"8D59\":\"FU4\",\"8D5A\":\"ZHUAN4\",\"8D5B\":\"SAI4\",\"8D5C\":\"ZE2\",\"8D5D\":\"YAN4\",\"8D5E\":\"ZAN4\",\"8D5F\":\"YUN1\",\"8D60\":\"ZENG4\",\"8D61\":\"SHAN4 DAN4\",\"8D62\":\"YING2\",\"8D63\":\"GAN4 GONG4\",\"8D64\":\"CHI4\",\"8D65\":\"XI4\",\"8D66\":\"SHE4 CE4\",\"8D67\":\"NAN3\",\"8D68\":\"XIONG2 TONG2\",\"8D69\":\"XI4\",\"8D6A\":\"CHENG1\",\"8D6B\":\"HE4 XI4 SHI4\",\"8D6C\":\"CHENG1\",\"8D6D\":\"ZHE3\",\"8D6E\":\"XIA2\",\"8D6F\":\"TANG2\",\"8D70\":\"ZOU3\",\"8D71\":\"ZOU3\",\"8D72\":\"LI4\",\"8D73\":\"JIU3 JIU1 JIU4\",\"8D74\":\"FU4\",\"8D75\":\"ZHAO4 TIAO3\",\"8D76\":\"GAN3 QIAN2\",\"8D77\":\"QI3\",\"8D78\":\"SHAN4\",\"8D79\":\"QIONG2\",\"8D7A\":\"QIN2\",\"8D7B\":\"XIAN3\",\"8D7C\":\"CI1\",\"8D7D\":\"JUE2\",\"8D7E\":\"QIN3\",\"8D7F\":\"CHI2 DI4\",\"8D80\":\"CI1\",\"8D81\":\"CHEN4 ZHEN1 CHEN2\",\"8D82\":\"CHEN4\",\"8D83\":\"DIE2\",\"8D84\":\"JU1 QIE4\",\"8D85\":\"CHAO1 CHAO3 CHAO4 TIAO4\",\"8D86\":\"DI1\",\"8D87\":\"SE4\",\"8D88\":\"ZHAN1\",\"8D89\":\"ZHU2\",\"8D8A\":\"YUE4 HUO2\",\"8D8B\":\"QU1 CU4\",\"8D8C\":\"JIE2\",\"8D8D\":\"CHI2 QU1\",\"8D8E\":\"CHU2\",\"8D8F\":\"GUA1\",\"8D90\":\"XUE4\",\"8D91\":\"CI1 ZI1 CI4\",\"8D92\":\"TIAO2\",\"8D93\":\"DUO3\",\"8D94\":\"LIE4\",\"8D95\":\"GAN3\",\"8D96\":\"SUO1\",\"8D97\":\"CU4\",\"8D98\":\"XI2\",\"8D99\":\"ZHAO4 TIAO3 DIAO4\",\"8D9A\":\"SU4\",\"8D9B\":\"YIN3\",\"8D9C\":\"JU2\",\"8D9D\":\"JIAN4\",\"8D9E\":\"QUE4\",\"8D9F\":\"TANG4 CHENG1 TANG1 ZHENG1 ZHENG4\",\"8DA0\":\"CHUO4 CHAO4\",\"8DA1\":\"CUI3\",\"8DA2\":\"LU4\",\"8DA3\":\"QU4 CU4 QU1 COU3 ZOU1\",\"8DA4\":\"DANG4\",\"8DA5\":\"QIU1\",\"8DA6\":\"ZI1\",\"8DA7\":\"TI2\",\"8DA8\":\"QU1 CU4 QU4 COU3\",\"8DA9\":\"CHI4\",\"8DAA\":\"HUANG2\",\"8DAB\":\"QIAO2\",\"8DAC\":\"QIAO2 QIAO1\",\"8DAD\":\"YAO4 JIAO4\",\"8DAE\":\"ZAO4\",\"8DAF\":\"TI4 YUE4\",\"8DB1\":\"ZAN3\",\"8DB2\":\"ZAN3 ZAN4 ZU1\",\"8DB3\":\"ZU2 JU4\",\"8DB4\":\"PA1\",\"8DB5\":\"BAO4 ZHI1 BO1 ZHUO2 PAO2\",\"8DB6\":\"KU4\",\"8DB7\":\"KE1\",\"8DB8\":\"DUN3\",\"8DB9\":\"JUE2 GUI4\",\"8DBA\":\"FU1\",\"8DBB\":\"CHEN3\",\"8DBC\":\"JIAN3 YAN4\",\"8DBD\":\"FANG4\",\"8DBE\":\"ZHI3\",\"8DBF\":\"SA4 TA1 QI4\",\"8DC0\":\"YUE4\",\"8DC1\":\"PA2\",\"8DC2\":\"QI2 QI3 QI4\",\"8DC3\":\"YUE4\",\"8DC4\":\"QIANG1 QIANG4\",\"8DC5\":\"TUO4\",\"8DC6\":\"TAI2\",\"8DC7\":\"YI4\",\"8DC8\":\"NIAN3 JIAN4\",\"8DC9\":\"LING2\",\"8DCA\":\"MEI4\",\"8DCB\":\"BA2 BEI4\",\"8DCC\":\"DIE1 DIE2 TU2\",\"8DCD\":\"KU1\",\"8DCE\":\"TUO2\",\"8DCF\":\"JIA1\",\"8DD0\":\"CI3 CAI3\",\"8DD1\":\"PAO3 PAO2 BO2\",\"8DD2\":\"QIA3\",\"8DD3\":\"ZHU4\",\"8DD4\":\"JU1\",\"8DD5\":\"DIE2 TIE1\",\"8DD6\":\"ZHI2 ZHI1\",\"8DD7\":\"FU1\",\"8DD8\":\"PAN2\",\"8DD9\":\"JU3\",\"8DDA\":\"SHAN1\",\"8DDB\":\"BO3 BI4 PO1\",\"8DDC\":\"NI2\",\"8DDD\":\"JU4\",\"8DDE\":\"LI4 LUO4\",\"8DDF\":\"GEN1\",\"8DE0\":\"YI2\",\"8DE1\":\"JI1\",\"8DE2\":\"DAI4\",\"8DE3\":\"XIAN3 XIAN1 SUN3\",\"8DE4\":\"JIAO1 QIAO1\",\"8DE5\":\"DUO4\",\"8DE6\":\"ZHU1\",\"8DE7\":\"QUAN2 ZUN1 ZHUAN1\",\"8DE8\":\"KUA4 KU4 KUA1 KUA3\",\"8DE9\":\"ZHUAI3 SHI4\",\"8DEA\":\"GUI4\",\"8DEB\":\"QIONG2 QIONG1 QIANG1\",\"8DEC\":\"KUI3 XIE4\",\"8DED\":\"XIANG2\",\"8DEE\":\"CHI4 DIE2\",\"8DEF\":\"LU4 LUO4\",\"8DF0\":\"BENG4 PIAN2\",\"8DF1\":\"ZHI4 SHI4\",\"8DF2\":\"JIA2\",\"8DF3\":\"TIAO4 TIAO2 TAO2 DIAO4\",\"8DF4\":\"CAI3\",\"8DF5\":\"JIAN4\",\"8DF6\":\"TA4 DA5\",\"8DF7\":\"QIAO1\",\"8DF8\":\"BI4\",\"8DF9\":\"XIAN1\",\"8DFA\":\"DUO4\",\"8DFB\":\"JI1\",\"8DFC\":\"JU2\",\"8DFD\":\"JI4\",\"8DFE\":\"SHU2\",\"8DFF\":\"TU2\",\"8E00\":\"CHU4\",\"8E01\":\"JING4\",\"8E02\":\"NIE4\",\"8E03\":\"XIAO1\",\"8E04\":\"BO2\",\"8E05\":\"CHI4 XUE2\",\"8E06\":\"QUN1 CUN1 CUN2\",\"8E07\":\"MOU3\",\"8E08\":\"SHU1\",\"8E09\":\"LANG2 LIANG2 LIANG4 LANG4\",\"8E0A\":\"YONG3\",\"8E0B\":\"JIAO3 JUE2\",\"8E0C\":\"CHOU2\",\"8E0D\":\"QIAO1\",\"8E0F\":\"TA4 TA1\",\"8E10\":\"JIAN4\",\"8E11\":\"QI2 JI1\",\"8E12\":\"WO1\",\"8E13\":\"WEI3\",\"8E14\":\"ZHUO2 CHUO1 DIAO4 ZHUO1 TIAO4\",\"8E15\":\"JIE2\",\"8E16\":\"JI2\",\"8E17\":\"NIE1\",\"8E18\":\"JU2 JU1\",\"8E19\":\"JU1\",\"8E1A\":\"LUN2\",\"8E1B\":\"LU4\",\"8E1C\":\"LENG4\",\"8E1D\":\"HUAI2 HUA4\",\"8E1E\":\"JU4\",\"8E1F\":\"CHI2\",\"8E20\":\"WAN3\",\"8E21\":\"QUAN2\",\"8E22\":\"TI1 DIE2\",\"8E23\":\"BO2 POU4\",\"8E24\":\"ZU2 CUI4\",\"8E25\":\"QIE4\",\"8E26\":\"JI3 JI1 QI1 YI3\",\"8E27\":\"CU4 DI2\",\"8E28\":\"ZONG1\",\"8E29\":\"CAI3 KUI2\",\"8E2A\":\"ZONG1\",\"8E2B\":\"PENG4\",\"8E2C\":\"ZHI4\",\"8E2D\":\"ZHENG1\",\"8E2E\":\"DIAN3\",\"8E2F\":\"ZHI2\",\"8E30\":\"YU2\",\"8E31\":\"DUO4 DUO2 CHUO4\",\"8E32\":\"DUN4\",\"8E33\":\"CHUN3\",\"8E34\":\"YONG3\",\"8E35\":\"ZHONG3 ZHONG4\",\"8E36\":\"DI4 CHI2 TI2 ZHI4\",\"8E37\":\"ZHE3\",\"8E38\":\"CHEN3\",\"8E39\":\"CHUAI4 SHUAN4 DUAN4\",\"8E3A\":\"JIAN4\",\"8E3B\":\"GUA1\",\"8E3C\":\"TANG2\",\"8E3D\":\"JU3\",\"8E3E\":\"FU2\",\"8E3F\":\"ZU2\",\"8E40\":\"DIE2\",\"8E41\":\"PIAN2\",\"8E42\":\"ROU2\",\"8E43\":\"NUO4\",\"8E44\":\"TI2 DI4\",\"8E45\":\"CHA3\",\"8E46\":\"TUI3\",\"8E47\":\"JIAN3 QIAN1\",\"8E48\":\"DAO3 DAO4\",\"8E49\":\"CUO1 CHUAI4\",\"8E4A\":\"XI1 QI1 XI2\",\"8E4B\":\"TA4\",\"8E4C\":\"QIANG1 QIANG4\",\"8E4D\":\"ZHAN3 NIAN3\",\"8E4E\":\"DIAN1\",\"8E4F\":\"TI2 DI4\",\"8E50\":\"JI2\",\"8E51\":\"NIE4\",\"8E52\":\"MAN2 PAN2\",\"8E53\":\"LIU1 LIU4\",\"8E54\":\"ZHAN4 ZAN4\",\"8E55\":\"BI4\",\"8E56\":\"CHONG1\",\"8E57\":\"LU4\",\"8E58\":\"LIAO2\",\"8E59\":\"CU4\",\"8E5A\":\"TANG1\",\"8E5B\":\"DAI4 ZHI4\",\"8E5C\":\"SUO1 SU4\",\"8E5D\":\"XI3\",\"8E5E\":\"KUI3\",\"8E5F\":\"JI1\",\"8E60\":\"ZHI2\",\"8E61\":\"QIANG1 QIANG4\",\"8E62\":\"DI2 ZHI2\",\"8E63\":\"PAN2 MAN2 LIANG3\",\"8E64\":\"ZONG1\",\"8E65\":\"LIAN2\",\"8E66\":\"BENG4\",\"8E67\":\"ZAO1\",\"8E68\":\"NIAN3\",\"8E69\":\"BIE2\",\"8E6A\":\"TUI2\",\"8E6B\":\"JU2\",\"8E6C\":\"DENG4 DENG1\",\"8E6D\":\"CENG4 CENG2\",\"8E6E\":\"XIAN1\",\"8E6F\":\"FAN2 FAN1\",\"8E70\":\"CHU2\",\"8E71\":\"ZHONG1\",\"8E72\":\"DUN1 DUN2 CUN2 ZUN1 CUN3 CUAN2\",\"8E73\":\"BO1\",\"8E74\":\"CU4 ZU2\",\"8E75\":\"ZU2 CU4\",\"8E76\":\"JUE2 JUE3 GUI4\",\"8E77\":\"JUE2\",\"8E78\":\"LIN4\",\"8E79\":\"TA4\",\"8E7A\":\"QIAO1 QIAO4\",\"8E7B\":\"QIAO1 JUE2\",\"8E7C\":\"PU2 PU3\",\"8E7D\":\"LIAO1\",\"8E7E\":\"DUN1\",\"8E7F\":\"CUAN1\",\"8E80\":\"KUANG4\",\"8E81\":\"ZAO4\",\"8E82\":\"TA4 DA5\",\"8E83\":\"BI4\",\"8E84\":\"BI4\",\"8E85\":\"ZHU2 ZHUO2\",\"8E86\":\"JU4\",\"8E87\":\"CHU2 CHUO4\",\"8E88\":\"QIAO4\",\"8E89\":\"DUN3\",\"8E8A\":\"CHOU2\",\"8E8B\":\"JI1\",\"8E8C\":\"WU3\",\"8E8D\":\"YUE4 TI4\",\"8E8E\":\"NIAN3\",\"8E8F\":\"LIN4\",\"8E90\":\"LIE4\",\"8E91\":\"ZHI2\",\"8E92\":\"LI4 LUO4 YUE4\",\"8E93\":\"ZHI4 ZHI1\",\"8E94\":\"CHAN2 ZHAN4\",\"8E95\":\"CHU2\",\"8E96\":\"DUAN4\",\"8E97\":\"WEI4\",\"8E98\":\"LONG2\",\"8E99\":\"LIN4\",\"8E9A\":\"XIAN1\",\"8E9B\":\"WEI4\",\"8E9C\":\"ZUAN1\",\"8E9D\":\"LAN2\",\"8E9E\":\"XIE4\",\"8E9F\":\"RANG2\",\"8EA0\":\"XIE3 SA3 XIE4\",\"8EA1\":\"NIE4\",\"8EA2\":\"TA4\",\"8EA3\":\"QU2\",\"8EA4\":\"JIE4 JI2\",\"8EA5\":\"CUAN1\",\"8EA6\":\"ZUAN1 CUO2\",\"8EA7\":\"XI3\",\"8EA8\":\"KUI2\",\"8EA9\":\"JUE2\",\"8EAA\":\"LIN4\",\"8EAB\":\"SHEN1 YUAN2 JUAN1\",\"8EAC\":\"GONG1\",\"8EAD\":\"DAN1\",\"8EAF\":\"QU1\",\"8EB0\":\"TI3\",\"8EB1\":\"DUO3\",\"8EB2\":\"DUO3\",\"8EB3\":\"GONG1\",\"8EB4\":\"LANG2\",\"8EB6\":\"LUO3\",\"8EB7\":\"AI3\",\"8EB8\":\"JI1\",\"8EB9\":\"JU2\",\"8EBA\":\"TANG3\",\"8EBD\":\"YAN3\",\"8EBF\":\"KANG1\",\"8EC0\":\"QU1\",\"8EC1\":\"LOU2\",\"8EC2\":\"LAO4\",\"8EC3\":\"TUO3 DUO3\",\"8EC4\":\"ZHI2\",\"8EC6\":\"TI3\",\"8EC7\":\"DAO4\",\"8EC9\":\"YU4\",\"8ECA\":\"CHE1 JU1\",\"8ECB\":\"YA4 GA2 ZHA2\",\"8ECC\":\"GUI3\",\"8ECD\":\"JUN1\",\"8ECE\":\"WEI4\",\"8ECF\":\"YUE4\",\"8ED0\":\"XIN4 XIAN4\",\"8ED1\":\"DI4 DAI4\",\"8ED2\":\"XUAN1 XIAN3 XIAN4 HAN3 JIAN1\",\"8ED3\":\"FAN4\",\"8ED4\":\"REN4\",\"8ED5\":\"SHAN1\",\"8ED6\":\"QIANG2\",\"8ED7\":\"SHU1\",\"8ED8\":\"TUN2\",\"8ED9\":\"CHEN2 QI2\",\"8EDA\":\"DAI4\",\"8EDB\":\"E4\",\"8EDC\":\"NA4\",\"8EDD\":\"QI2\",\"8EDE\":\"MAO2\",\"8EDF\":\"RUAN3\",\"8EE0\":\"REN4\",\"8EE1\":\"FAN3\",\"8EE2\":\"ZHUAN3\",\"8EE3\":\"HONG1\",\"8EE4\":\"HU1\",\"8EE5\":\"QU2 GOU1 JU1\",\"8EE6\":\"HUANG4\",\"8EE7\":\"DI3\",\"8EE8\":\"LING2\",\"8EE9\":\"DAI4\",\"8EEA\":\"AO1\",\"8EEB\":\"ZHEN3\",\"8EEC\":\"FAN4 BEN4\",\"8EED\":\"KUANG1\",\"8EEE\":\"ANG3 YANG3\",\"8EEF\":\"PENG1\",\"8EF0\":\"BEI4\",\"8EF1\":\"GU1\",\"8EF2\":\"KU1\",\"8EF3\":\"PAO2\",\"8EF4\":\"ZHU4\",\"8EF5\":\"RONG3 FU3\",\"8EF6\":\"E4\",\"8EF7\":\"BA2\",\"8EF8\":\"ZHOU2 ZHU2 ZHOU4\",\"8EF9\":\"ZHI3\",\"8EFA\":\"YAO2 DIAO1\",\"8EFB\":\"KE1\",\"8EFC\":\"YI4 DIE2 ZHE2\",\"8EFD\":\"QING1\",\"8EFE\":\"SHI4\",\"8EFF\":\"PING2 PENG1\",\"8F00\":\"ER2\",\"8F01\":\"QIONG2 GONG3\",\"8F02\":\"JU2\",\"8F03\":\"JIAO4 JUE2 XIAO4\",\"8F04\":\"GUANG1\",\"8F05\":\"LU4 YA4 HE2\",\"8F06\":\"KAI3\",\"8F07\":\"QUAN2 CHUN1\",\"8F08\":\"ZHOU1\",\"8F09\":\"ZAI4 ZAI3 DAI4 ZAI1 ZI1\",\"8F0A\":\"ZHI4\",\"8F0B\":\"SHE1\",\"8F0C\":\"LIANG4\",\"8F0D\":\"YU4\",\"8F0E\":\"SHAO1\",\"8F0F\":\"YOU2\",\"8F10\":\"HUAN3 WAN4\",\"8F11\":\"YUN3\",\"8F12\":\"ZHE2\",\"8F13\":\"WAN3\",\"8F14\":\"FU3\",\"8F15\":\"QING1 QING4\",\"8F16\":\"ZHOU1\",\"8F17\":\"NI2\",\"8F18\":\"LING2 LENG2\",\"8F19\":\"ZHE2\",\"8F1A\":\"ZHAN4\",\"8F1B\":\"LIANG4\",\"8F1C\":\"ZI1 ZI4\",\"8F1D\":\"HUI1\",\"8F1E\":\"WANG3\",\"8F1F\":\"CHUO4\",\"8F20\":\"GUO3 GUO1 HUA4 HUI4\",\"8F21\":\"KAN3\",\"8F22\":\"YI3\",\"8F23\":\"PENG2\",\"8F24\":\"QIAN4\",\"8F25\":\"GUN3\",\"8F26\":\"NIAN3\",\"8F27\":\"PIAN2 PING2\",\"8F28\":\"GUAN3\",\"8F29\":\"BEI4\",\"8F2A\":\"LUN2\",\"8F2B\":\"PAI2 PEI2\",\"8F2C\":\"LIANG2\",\"8F2D\":\"RUAN3\",\"8F2E\":\"ROU2 ROU3\",\"8F2F\":\"JI2\",\"8F30\":\"YANG2\",\"8F31\":\"XIAN2\",\"8F32\":\"CHUAN2\",\"8F33\":\"COU4\",\"8F34\":\"CHUN1 SHUN1 QUN1\",\"8F35\":\"GE2\",\"8F36\":\"YOU2\",\"8F37\":\"HONG1\",\"8F38\":\"SHU1 SHU4\",\"8F39\":\"FU4\",\"8F3A\":\"ZI1 ZI4\",\"8F3B\":\"FU2\",\"8F3C\":\"WEN1\",\"8F3D\":\"BEN4\",\"8F3E\":\"ZHAN3 NIAN3\",\"8F3F\":\"YU2 YU4\",\"8F40\":\"WEN1\",\"8F41\":\"TAO1 KAN3\",\"8F42\":\"GU3 GU1\",\"8F43\":\"ZHEN1\",\"8F44\":\"XIA2 HE2\",\"8F45\":\"YUAN2\",\"8F46\":\"LU4\",\"8F47\":\"JIU1 JIAO1\",\"8F48\":\"CHAO2\",\"8F49\":\"ZHUAN3 ZHUAN4\",\"8F4A\":\"WEI4\",\"8F4B\":\"HUN2\",\"8F4D\":\"CHE4 ZHE2\",\"8F4E\":\"JIAO4\",\"8F4F\":\"ZHAN4\",\"8F50\":\"PU2 BU2\",\"8F51\":\"LAO3 LAO2 LIAO3\",\"8F52\":\"FEN2\",\"8F53\":\"FAN1\",\"8F54\":\"LIN2 LIN4\",\"8F55\":\"GE2\",\"8F56\":\"SE4\",\"8F57\":\"KAN3\",\"8F58\":\"HUAN4 HUAN2\",\"8F59\":\"YI3\",\"8F5A\":\"JI2\",\"8F5B\":\"DUI4\",\"8F5C\":\"ER2\",\"8F5D\":\"YU2\",\"8F5E\":\"XIAN4\",\"8F5F\":\"HONG1\",\"8F60\":\"LEI3 LEI2\",\"8F61\":\"PEI4\",\"8F62\":\"LI4\",\"8F63\":\"LI4\",\"8F64\":\"LU2\",\"8F65\":\"LIN4\",\"8F66\":\"CHE1 JU1\",\"8F67\":\"YA4 GA2 ZHA2\",\"8F68\":\"GUI3\",\"8F69\":\"XUAN1\",\"8F6A\":\"DI4 DAI4\",\"8F6B\":\"REN4\",\"8F6C\":\"ZHUAN3 ZHUAN4\",\"8F6D\":\"E4\",\"8F6E\":\"LUN2\",\"8F6F\":\"RUAN3\",\"8F70\":\"HONG1\",\"8F71\":\"KU1\",\"8F72\":\"KE1\",\"8F73\":\"LU2\",\"8F74\":\"ZHOU2 ZHU2\",\"8F75\":\"ZHI3\",\"8F76\":\"YI4 DIE2\",\"8F77\":\"HU1\",\"8F78\":\"ZHEN3\",\"8F79\":\"LI4\",\"8F7A\":\"YAO2\",\"8F7B\":\"QING1\",\"8F7C\":\"SHI4\",\"8F7D\":\"ZAI4 ZAI3\",\"8F7E\":\"ZHI4\",\"8F7F\":\"JIAO4\",\"8F80\":\"ZHOU1\",\"8F81\":\"QUAN2\",\"8F82\":\"LU4 YA4\",\"8F83\":\"JIAO4 JUE2\",\"8F84\":\"ZHE2\",\"8F85\":\"FU3\",\"8F86\":\"LIANG4\",\"8F87\":\"NIAN3\",\"8F88\":\"BEI4\",\"8F89\":\"HUI1\",\"8F8A\":\"GUN3\",\"8F8B\":\"WANG3\",\"8F8C\":\"LIANG2\",\"8F8D\":\"CHUO4\",\"8F8E\":\"ZI1\",\"8F8F\":\"COU4\",\"8F90\":\"FU2\",\"8F91\":\"JI2\",\"8F92\":\"WEN1\",\"8F93\":\"SHU1\",\"8F94\":\"PEI4\",\"8F95\":\"YUAN2\",\"8F96\":\"XIA2\",\"8F97\":\"ZHAN3 NIAN3\",\"8F98\":\"LU4\",\"8F99\":\"CHE4 ZHE2\",\"8F9A\":\"LIN2 LIN4\",\"8F9B\":\"XIN1\",\"8F9C\":\"GU1\",\"8F9D\":\"CI2\",\"8F9E\":\"CI2\",\"8F9F\":\"PI4 PI1 BI4 MI3\",\"8FA0\":\"ZUI4\",\"8FA1\":\"BIAN4\",\"8FA2\":\"LA4\",\"8FA3\":\"LA4\",\"8FA4\":\"CI2\",\"8FA5\":\"XUE1\",\"8FA6\":\"BAN4\",\"8FA7\":\"BIAN4\",\"8FA8\":\"BIAN4 BAN1 BAN4 BIAN3 PIAN4\",\"8FA9\":\"BIAN4 PIAN2\",\"8FAB\":\"BIAN4\",\"8FAC\":\"BAN1\",\"8FAD\":\"CI2\",\"8FAE\":\"BIAN4\",\"8FAF\":\"BIAN4 PIAN2 BIAN3 BAN4\",\"8FB0\":\"CHEN2\",\"8FB1\":\"RU3 RU4\",\"8FB2\":\"NONG2\",\"8FB3\":\"NONG2\",\"8FB4\":\"ZHEN3\",\"8FB5\":\"CHUO4\",\"8FB6\":\"CHUO4\",\"8FB8\":\"RENG2\",\"8FB9\":\"BIAN1 BIAN5\",\"8FBA\":\"BIAN1\",\"8FBD\":\"LIAO2\",\"8FBE\":\"DA2 TI4 TA4\",\"8FBF\":\"CHAN1\",\"8FC0\":\"GAN1\",\"8FC1\":\"QIAN1 GAN1\",\"8FC2\":\"YU1 YU4\",\"8FC3\":\"YU1\",\"8FC4\":\"QI4\",\"8FC5\":\"XUN4\",\"8FC6\":\"YI3 YI2\",\"8FC7\":\"GUO4 GUO1\",\"8FC8\":\"MAI4\",\"8FC9\":\"QI2\",\"8FCA\":\"ZA1\",\"8FCB\":\"WANG4 GUANG3 GUANG4 KUANG2\",\"8FCD\":\"ZHUN1 TUN2\",\"8FCE\":\"YING2 YING4\",\"8FCF\":\"TI4\",\"8FD0\":\"YUN4\",\"8FD1\":\"JIN4 JI4\",\"8FD2\":\"HANG2\",\"8FD3\":\"YA4\",\"8FD4\":\"FAN3\",\"8FD5\":\"WU4 WU3\",\"8FD6\":\"DA2 TI4 TA4\",\"8FD7\":\"E2\",\"8FD8\":\"HUAN2 HAI2 XUAN2\",\"8FD9\":\"ZHE4 ZHEI4\",\"8FDB\":\"JIN4\",\"8FDC\":\"YUAN3 YUAN4\",\"8FDD\":\"WEI2\",\"8FDE\":\"LIAN2\",\"8FDF\":\"CHI2 ZHI2\",\"8FE0\":\"CHE4\",\"8FE1\":\"NI4\",\"8FE2\":\"TIAO2\",\"8FE3\":\"ZHI4 CHI4 LI4\",\"8FE4\":\"YI3 TUO1 YI2 TUO2\",\"8FE5\":\"JIONG3\",\"8FE6\":\"JIA1 XIE4\",\"8FE7\":\"CHEN2 ZHEN4\",\"8FE8\":\"DAI4\",\"8FE9\":\"ER3\",\"8FEA\":\"DI2\",\"8FEB\":\"PO4 PAI3\",\"8FEC\":\"WANG3\",\"8FED\":\"DIE2\",\"8FEE\":\"ZE2 ZUO4\",\"8FEF\":\"TAO2\",\"8FF0\":\"SHU4\",\"8FF1\":\"TUO2\",\"8FF3\":\"JING4\",\"8FF4\":\"HUI2\",\"8FF5\":\"TONG2\",\"8FF6\":\"YOU4\",\"8FF7\":\"MI2 MEI4 MI4\",\"8FF8\":\"BENG4 BING3 PENG1\",\"8FF9\":\"JI1\",\"8FFA\":\"NAI3\",\"8FFB\":\"YI2\",\"8FFC\":\"JIE2\",\"8FFD\":\"ZHUI1 DUI1 TUI1\",\"8FFE\":\"LIE4\",\"8FFF\":\"XUN4\",\"900A\":\"XUN4\",\"900B\":\"BU1\",\"900C\":\"YOU2\",\"900D\":\"XIAO1\",\"900E\":\"QIU2\",\"900F\":\"TOU4 SHU1\",\"901A\":\"TONG1 TONG4\",\"901B\":\"GUANG4 KUANG2\",\"901C\":\"WU4\",\"901D\":\"SHI4\",\"901E\":\"CHENG3 YING2\",\"901F\":\"SU4\",\"902A\":\"CUO4\",\"902B\":\"JUE2\",\"902C\":\"BENG4\",\"902D\":\"HUAN4\",\"902E\":\"DAI4 DAI3 DI4\",\"902F\":\"LU4 DAI4\",\"903A\":\"YUAN3 YUAN4\",\"903B\":\"LUO2 LUO4\",\"903C\":\"BI1\",\"903D\":\"NUO4\",\"903E\":\"YU2 DOU4\",\"903F\":\"DANG4 TANG2\",\"904A\":\"YOU2\",\"904B\":\"YUN4\",\"904C\":\"E4\",\"904D\":\"BIAN4\",\"904E\":\"GUO4 GUO5 GUO1 HUO4\",\"904F\":\"E4\",\"905A\":\"CHU4\",\"905B\":\"LIU2 LIU4\",\"905C\":\"XUN4\",\"905D\":\"TA4 DAI4\",\"905E\":\"DI4 DAI4\",\"905F\":\"CHI2 ZHI4 XI1\",\"906A\":\"CE4\",\"906B\":\"CHI4\",\"906C\":\"SU4\",\"906D\":\"ZAO1\",\"906E\":\"ZHE1\",\"906F\":\"DUN4\",\"907A\":\"YI2 WEI4 SUI2\",\"907B\":\"WU4 E4\",\"907C\":\"LIAO2\",\"907D\":\"JU4 QU2\",\"907E\":\"SHI4\",\"907F\":\"BI4\",\"908A\":\"BIAN1\",\"908B\":\"LA2 LA1 LIE4\",\"908C\":\"LI2\",\"908D\":\"YUAN2\",\"908E\":\"YAO2\",\"908F\":\"LUO2 LUO4\",\"909A\":\"RU2\",\"909B\":\"QIONG2\",\"909D\":\"KUANG4\",\"909E\":\"FU1\",\"909F\":\"KANG4 KANG2\",\"90A0\":\"BIN1\",\"90A1\":\"FANG1 FANG3 FANG4\",\"90A2\":\"XING2 GENG3\",\"90A3\":\"NA4 NEI4 NA1 NA3 NE2 NEI3 NUO2 NUO4\",\"90A5\":\"SHEN3\",\"90A6\":\"BANG1\",\"90A7\":\"YUAN2\",\"90A8\":\"CUN1\",\"90A9\":\"HUO3\",\"90AA\":\"XIE2 XU2 YA2 YE2 YU2 SHE2\",\"90AB\":\"BANG1\",\"90AC\":\"WU1\",\"90AD\":\"JU4\",\"90AE\":\"YOU2\",\"90AF\":\"HAN2 HAN4\",\"90B0\":\"TAI2\",\"90B1\":\"QIU1\",\"90B2\":\"BI4\",\"90B3\":\"PEI2 PI1\",\"90B4\":\"BING3\",\"90B5\":\"SHAO4\",\"90B6\":\"BEI4\",\"90B7\":\"WA3\",\"90B8\":\"DI3\",\"90B9\":\"ZOU1\",\"90BA\":\"YE4\",\"90BB\":\"LIN2\",\"90BC\":\"KUANG1\",\"90BD\":\"GUI1\",\"90BE\":\"ZHU1\",\"90BF\":\"SHI1\",\"90C0\":\"KU1\",\"90C1\":\"YU4\",\"90C2\":\"GAI1\",\"90C3\":\"HE2 XIA2 GE2\",\"90C4\":\"XI4 QUE4\",\"90C5\":\"ZHI4 ZHI1 JI2\",\"90C6\":\"JI2\",\"90C7\":\"XUN2 HUAN2\",\"90C8\":\"HOU4\",\"90C9\":\"XING2\",\"90CA\":\"JIAO1\",\"90CB\":\"XI2 XI1\",\"90CC\":\"GUI1\",\"90CD\":\"NUO2\",\"90CE\":\"LANG2 LANG4\",\"90CF\":\"JIA2\",\"90D0\":\"KUAI4\",\"90D1\":\"ZHENG4\",\"90D3\":\"YUN4\",\"90D4\":\"YAN2\",\"90D5\":\"CHENG2\",\"90D6\":\"DOU1 DOU4\",\"90D7\":\"CHI1 XI1\",\"90D8\":\"LV3\",\"90D9\":\"FU3\",\"90DA\":\"WU2\",\"90DB\":\"FU2\",\"90DC\":\"GAO4\",\"90DD\":\"HAO3 SHI4\",\"90DE\":\"LANG2 LANG4\",\"90DF\":\"JIA2\",\"90E0\":\"GENG3\",\"90E1\":\"JUN4\",\"90E2\":\"YING3 CHENG2\",\"90E3\":\"BO2\",\"90E4\":\"XI4\",\"90E5\":\"BEI4\",\"90E6\":\"LI4 ZHI2\",\"90E7\":\"YUN2\",\"90E8\":\"BU4 POU3\",\"90E9\":\"XIAO2\",\"90EA\":\"QI1 CI1\",\"90EB\":\"PI2\",\"90EC\":\"QING1\",\"90ED\":\"GUO1 GUO2\",\"90EF\":\"TAN2\",\"90F0\":\"ZOU1\",\"90F1\":\"PING2\",\"90F2\":\"LAI2\",\"90F3\":\"NI2\",\"90F4\":\"CHEN1 LAN2\",\"90F5\":\"YOU2 CHUI2\",\"90F6\":\"BU4\",\"90F7\":\"XIANG1\",\"90F8\":\"DAN1\",\"90F9\":\"JU2\",\"90FA\":\"YONG1\",\"90FB\":\"QIAO1\",\"90FC\":\"YI1\",\"90FD\":\"DU1 DOU1\",\"90FE\":\"YAN3 YAN1\",\"90FF\":\"MEI2 FEI2\",\"910A\":\"XIANG1\",\"910B\":\"SOU1\",\"910C\":\"TANG2\",\"910D\":\"MING2\",\"910E\":\"XI4\",\"910F\":\"RU4 RU3\",\"911A\":\"MO4\",\"911B\":\"CHAO2\",\"911C\":\"FU1\",\"911D\":\"LIAO3\",\"911E\":\"YIN2\",\"911F\":\"ZHUAN1\",\"912A\":\"BI4\",\"912B\":\"CENG2 ZENG1\",\"912C\":\"WEI2\",\"912D\":\"ZHENG4\",\"912E\":\"MAO4\",\"912F\":\"SHAN4\",\"913A\":\"KUANG4 KUO4\",\"913B\":\"LIAN3 LIAN2\",\"913C\":\"ZAN4 CUO2\",\"913D\":\"CHAN2\",\"913E\":\"YOU1\",\"913F\":\"QI2\",\"914A\":\"DING3 DING1\",\"914B\":\"QIU2\",\"914C\":\"ZHUO2\",\"914D\":\"PEI4\",\"914E\":\"ZHOU4\",\"914F\":\"YI2 HU4 TUO2 YI3\",\"915A\":\"FEN1\",\"915D\":\"YUN4\",\"915E\":\"TAI4\",\"915F\":\"TIAN1\",\"916A\":\"LAO4 LUO4 LU4\",\"916B\":\"CHUO4\",\"916C\":\"CHOU2\",\"916D\":\"YOU4\",\"916E\":\"TONG2 DONG4 CHONG2\",\"916F\":\"ZHI3\",\"917A\":\"PU2\",\"917B\":\"ZUI4\",\"917C\":\"HAI3\",\"917D\":\"YAN4\",\"917E\":\"XI3 LI2 SHAI1 SHI1\",\"917F\":\"NIANG4 NIANG2\",\"918A\":\"CHUO4 ZHUI1\",\"918B\":\"CU4\",\"918C\":\"KUN1\",\"918D\":\"TI2 TI3\",\"918E\":\"MIAN2\",\"918F\":\"DU1\",\"919A\":\"MI2\",\"919B\":\"QUAN2 CHUO4\",\"919C\":\"CHOU3\",\"919D\":\"CUO2 CUO1\",\"919E\":\"YUN4\",\"919F\":\"YONG4 YONG3\",\"91A0\":\"ANG4\",\"91A1\":\"ZHA4\",\"91A2\":\"HAI3\",\"91A3\":\"TANG2\",\"91A4\":\"JIANG4\",\"91A5\":\"PIAO3\",\"91A6\":\"SHAN3\",\"91A7\":\"YU4\",\"91A8\":\"LI2\",\"91A9\":\"ZAO2 ZAO1\",\"91AA\":\"LAO2\",\"91AB\":\"YI1\",\"91AC\":\"JIANG4\",\"91AD\":\"BU2 PU1 PU2\",\"91AE\":\"JIAO4 QIAO2 ZHAN4\",\"91AF\":\"XI1\",\"91B0\":\"TAN2\",\"91B1\":\"PO4 PO1\",\"91B2\":\"NONG2\",\"91B3\":\"YI4 SHI4\",\"91B4\":\"LI3\",\"91B5\":\"JU4\",\"91B6\":\"JIAO4\",\"91B7\":\"YI4\",\"91B8\":\"NIANG4\",\"91B9\":\"RU2\",\"91BA\":\"XUN1\",\"91BB\":\"CHOU2\",\"91BC\":\"YAN4\",\"91BD\":\"LING2\",\"91BE\":\"MI2\",\"91BF\":\"MI2\",\"91C0\":\"NIANG4 NIANG2\",\"91C1\":\"XIN4\",\"91C2\":\"JIAO4\",\"91C3\":\"XI3 LI2 SHAI1 SHI1\",\"91C4\":\"MI2\",\"91C5\":\"YAN4\",\"91C6\":\"BIAN4 CAI3\",\"91C7\":\"CAI3 CAI4\",\"91C8\":\"SHI4\",\"91C9\":\"YOU4\",\"91CA\":\"SHI4 YI4\",\"91CB\":\"SHI4 YI4\",\"91CC\":\"LI3\",\"91CD\":\"ZHONG4 CHONG2 TONG2\",\"91CE\":\"YE3\",\"91CF\":\"LIANG4 LIANG2\",\"91D0\":\"LI2 XI1\",\"91D1\":\"JIN1 JIN4\",\"91D3\":\"GA2 QIU2\",\"91D4\":\"YI3\",\"91D5\":\"LIAO3 LIAO4 DIAO3\",\"91D6\":\"DAO1\",\"91D7\":\"ZHAO1\",\"91D8\":\"DING1 DING4 LING2\",\"91D9\":\"PO4 PO1\",\"91DA\":\"QIU2\",\"91DB\":\"HE2\",\"91DC\":\"FU3\",\"91DD\":\"ZHEN1\",\"91DE\":\"ZHI2\",\"91DF\":\"BA1\",\"91E0\":\"LUAN4\",\"91E1\":\"FU3\",\"91E2\":\"NAI2\",\"91E3\":\"DIAO4\",\"91E4\":\"SHAN4 SHAN1 XIAN1\",\"91E5\":\"QIAO3\",\"91E6\":\"KOU4\",\"91E7\":\"CHUAN4\",\"91E8\":\"ZI3\",\"91E9\":\"FAN2 FAN3 FAN4\",\"91EA\":\"YU2\",\"91EB\":\"HUA2\",\"91EC\":\"HAN4 GAN1\",\"91ED\":\"GANG1 GONG1\",\"91EE\":\"QI2\",\"91EF\":\"MANG2\",\"91F0\":\"RI4\",\"91F1\":\"DI4 DAI4\",\"91F2\":\"SI4\",\"91F3\":\"XI4\",\"91F4\":\"YI4\",\"91F5\":\"CHAI1 CHA1\",\"91F6\":\"SHI1 SHE2\",\"91F7\":\"TU3\",\"91F8\":\"XI4\",\"91F9\":\"NV3\",\"91FA\":\"QIAN1\",\"91FC\":\"JIAN4\",\"91FD\":\"PI1 PI4\",\"91FE\":\"YE2\",\"91FF\":\"YIN2 JIN1\",\"920A\":\"XIN1\",\"920B\":\"E2\",\"920C\":\"JUE2\",\"920D\":\"DUN4\",\"920E\":\"GOU1\",\"920F\":\"YIN3\",\"921A\":\"PI2 PI1\",\"921B\":\"GUO1\",\"921C\":\"HONG2\",\"921D\":\"YIN2\",\"921E\":\"JUN1\",\"921F\":\"SHI1\",\"922C\":\"DUO2\",\"922D\":\"ZI1\",\"922E\":\"NI2 NI3\",\"922F\":\"TU2\",\"923A\":\"YU4\",\"923B\":\"SI4\",\"923C\":\"ZUO2\",\"923D\":\"BU4 BU1\",\"923E\":\"YOU2 ZHOU4\",\"923F\":\"DIAN4 TIAN2\",\"924A\":\"ZHAO1\",\"924B\":\"BAO4 PAO2\",\"924C\":\"HE2\",\"924D\":\"BI4 SE4\",\"924E\":\"SHENG1\",\"924F\":\"CHU2 JU3 XU2\",\"925A\":\"LIU3 MAO3\",\"925B\":\"QIAN1 YAN2\",\"925C\":\"FU2\",\"925D\":\"LI4\",\"925E\":\"YUE4 HUI4\",\"925F\":\"PI1\",\"926A\":\"DI4\",\"926B\":\"JIA1\",\"926C\":\"MU4\",\"926D\":\"DAN4 TAN3\",\"926E\":\"SHEN1 SHEN2\",\"926F\":\"YI3\",\"927A\":\"ER3 ER4 KENG1\",\"927B\":\"GE4 GE2 LUO4 GE1\",\"927C\":\"BING3\",\"927D\":\"SHI4\",\"927E\":\"MOU2\",\"927F\":\"HA1 JIA1 GE1 KE1 JIA2\",\"928A\":\"XU4\",\"928B\":\"REN2\",\"928C\":\"ZUN4\",\"928D\":\"ZHI4\",\"928E\":\"QIONG1 QIONG2\",\"928F\":\"SHAN4\",\"929A\":\"YAO2 DIAO4 TIAO2 QIAO1 YAO4\",\"929B\":\"XIAN1\",\"929C\":\"XIAN2\",\"929D\":\"XIU1\",\"929E\":\"JUN1\",\"929F\":\"CHA1\",\"92A0\":\"LAO3\",\"92A1\":\"JI2\",\"92A2\":\"PI3\",\"92A3\":\"RU2 RU3\",\"92A4\":\"MI3\",\"92A5\":\"YI1 YI3\",\"92A6\":\"YIN1\",\"92A7\":\"GUANG1\",\"92A8\":\"AN3 AN1\",\"92A9\":\"DIU1\",\"92AA\":\"YOU3\",\"92AB\":\"SE4\",\"92AC\":\"KAO4\",\"92AD\":\"QIAN2\",\"92AE\":\"LUAN2\",\"92B0\":\"AI1\",\"92B1\":\"DIAO4\",\"92B2\":\"HAN4\",\"92B3\":\"RUI4 DUI4 YUE4\",\"92B4\":\"SHI4\",\"92B5\":\"KENG1\",\"92B6\":\"QIU2\",\"92B7\":\"XIAO1\",\"92B8\":\"ZHE2\",\"92B9\":\"XIU4\",\"92BA\":\"ZANG4\",\"92BB\":\"TI1 TI2 TI4\",\"92BC\":\"CUO4\",\"92BD\":\"GUA1\",\"92BE\":\"GONG3\",\"92BF\":\"ZHONG1 YONG1\",\"92C0\":\"DOU4\",\"92C1\":\"LV3 LV4\",\"92C2\":\"MEI2\",\"92C3\":\"LANG2\",\"92C4\":\"WAN3 WAN4\",\"92C5\":\"XIN1 ZI3\",\"92C6\":\"YUN2\",\"92C7\":\"BEI4\",\"92C8\":\"WU4\",\"92C9\":\"SU4\",\"92CA\":\"YU4\",\"92CB\":\"CHAN2 YAN2\",\"92CC\":\"TING3 DING4\",\"92CD\":\"BO2\",\"92CE\":\"HAN4\",\"92CF\":\"JIA2\",\"92D0\":\"HONG2\",\"92D1\":\"CUAN1\",\"92D2\":\"FENG1\",\"92D3\":\"CHAN1\",\"92D4\":\"WAN3\",\"92D5\":\"ZHI4\",\"92D6\":\"SI1\",\"92D7\":\"XUAN1 JUAN1\",\"92D8\":\"WU2 HUA2\",\"92D9\":\"WU2 YU3\",\"92DA\":\"TIAO2\",\"92DB\":\"GONG3\",\"92DC\":\"ZHUO2\",\"92DD\":\"LVE4\",\"92DE\":\"XING2\",\"92DF\":\"QIAN1 QIN3 QIN1 JIN4\",\"92E0\":\"SHEN4\",\"92E1\":\"HAN2\",\"92E2\":\"LVE4\",\"92E3\":\"XIE2 YE2\",\"92E4\":\"CHU2 JU3\",\"92E5\":\"ZHENG4 ZENG4\",\"92E6\":\"JU1 JU2\",\"92E7\":\"XIAN4\",\"92E8\":\"TIE3 E2\",\"92E9\":\"MANG2\",\"92EA\":\"PU1 PU4\",\"92EB\":\"LI2\",\"92EC\":\"PAN4\",\"92ED\":\"RUI4 DUI4\",\"92EE\":\"CHENG2\",\"92EF\":\"GAO4\",\"92F0\":\"LI3\",\"92F1\":\"TE4\",\"92F3\":\"ZHU4\",\"92F5\":\"TU1\",\"92F6\":\"LIU3\",\"92F7\":\"ZUI4\",\"92F8\":\"JU4 JU1\",\"92F9\":\"CHANG3\",\"92FA\":\"YUAN1\",\"92FB\":\"JIAN4\",\"92FC\":\"GANG1 GANG4\",\"92FD\":\"DIAO4\",\"92FE\":\"TAO2\",\"92FF\":\"CHANG2\",\"930A\":\"ZUI4\",\"930B\":\"PENG2 BENG4\",\"930C\":\"AN4\",\"930D\":\"PI2 PI1\",\"930E\":\"XIAN4\",\"930F\":\"YA4\",\"931A\":\"ZHENG1\",\"931B\":\"BEN1\",\"931C\":\"NIE1 NIE4\",\"931D\":\"CONG2\",\"931E\":\"DUI4 CHUN2 DUO4 QUN2\",\"931F\":\"TAN2 XIAN1 YAN3\",\"932A\":\"TIAN3\",\"932B\":\"XI2 XI1 TI4\",\"932C\":\"LIAN4\",\"932D\":\"TAO2 DIAO1\",\"932E\":\"GU4\",\"932F\":\"CUO4 CU4 XI1\",\"933C\":\"NAI4\",\"933D\":\"WAN3 WAN4\",\"933E\":\"ZAN4\",\"934A\":\"LIAN4\",\"934B\":\"GUO1 GUO3\",\"934C\":\"XIAN3\",\"934D\":\"DU4\",\"934E\":\"TU2\",\"934F\":\"WEI2\",\"935A\":\"YANG2\",\"935B\":\"DUAN4\",\"935C\":\"XIA1 XIA2\",\"935D\":\"YU2\",\"935E\":\"KENG1\",\"935F\":\"XING1\",\"936A\":\"MOU2\",\"936B\":\"QIAO1\",\"936C\":\"QIAO1\",\"936D\":\"HOU2\",\"936E\":\"TOU1\",\"936F\":\"CONG1\",\"937A\":\"ZHE3 DUO3 DU3\",\"937B\":\"JIE2\",\"937C\":\"ZHEN1 QIAN2\",\"937D\":\"BIAN1\",\"937E\":\"ZHONG1\",\"937F\":\"ZI1\",\"938A\":\"BANG4 PANG1\",\"938B\":\"XIA2\",\"938C\":\"LIAN2\",\"938D\":\"SUO3\",\"938E\":\"XI4\",\"938F\":\"LIU2\",\"939A\":\"CHUI2\",\"939B\":\"BO2\",\"939C\":\"PAN2\",\"939D\":\"SA4 DA1\",\"939E\":\"BI4 BI1 PI1\",\"939F\":\"SANG3\",\"93A0\":\"GANG1\",\"93A1\":\"ZI1\",\"93A2\":\"WU1 WU4\",\"93A3\":\"YING4 YING2 JIONG3\",\"93A4\":\"HUANG3\",\"93A5\":\"TIAO2\",\"93A6\":\"LIU2 LIU4\",\"93A7\":\"KAI3\",\"93A8\":\"SUN3\",\"93A9\":\"SHA1 SHI4 SE4\",\"93AA\":\"SOU1\",\"93AB\":\"WAN4 JIAN3\",\"93AC\":\"HAO4 GAO3\",\"93AD\":\"ZHEN4 ZHEN1 TIAN2\",\"93AE\":\"ZHEN4 ZHEN1 TIAN2\",\"93AF\":\"LUO3 LANG2\",\"93B0\":\"YI4\",\"93B1\":\"YUAN2\",\"93B2\":\"TANG3\",\"93B3\":\"NIE4\",\"93B4\":\"XI2\",\"93B5\":\"JIA1\",\"93B6\":\"GE1\",\"93B7\":\"MA3\",\"93B8\":\"JUAN1\",\"93BB\":\"SUO3\",\"93BF\":\"NA2\",\"93C0\":\"LU3\",\"93C1\":\"SUO3\",\"93C2\":\"OU1 KOU1\",\"93C3\":\"ZU2 CHUO4\",\"93C4\":\"TUAN2\",\"93C5\":\"XIU1\",\"93C6\":\"GUAN4\",\"93C7\":\"XUAN4 XUAN2\",\"93C8\":\"LIAN4 LIAN2\",\"93C9\":\"SHOU4\",\"93CA\":\"AO2 AO4\",\"93CB\":\"MAN3\",\"93CC\":\"MO4\",\"93CD\":\"LUO2\",\"93CE\":\"BI4\",\"93CF\":\"WEI4\",\"93D0\":\"LIU2\",\"93D1\":\"DI2 DI1\",\"93D2\":\"QIAO1\",\"93D3\":\"CONG1 SONG3\",\"93D4\":\"YI2\",\"93D5\":\"LU4\",\"93D6\":\"AO2 BIAO1\",\"93D7\":\"KENG1\",\"93D8\":\"QIANG1\",\"93D9\":\"CUI1\",\"93DA\":\"QI4 QI1\",\"93DB\":\"CHANG2\",\"93DC\":\"TANG1 TANG2\",\"93DD\":\"MAN4\",\"93DE\":\"YONG1\",\"93DF\":\"CHAN3\",\"93E0\":\"FENG1\",\"93E1\":\"JING4\",\"93E2\":\"BIAO1\",\"93E3\":\"SHU4\",\"93E4\":\"LOU4 LV2\",\"93E5\":\"XIU4\",\"93E6\":\"CONG1\",\"93E7\":\"LONG2\",\"93E8\":\"ZAN4 JIAN4\",\"93E9\":\"JIAN4\",\"93EA\":\"CAO2\",\"93EB\":\"LI2\",\"93EC\":\"XIA4\",\"93ED\":\"XI1\",\"93EE\":\"KANG1\",\"93F0\":\"BENG4\",\"93F3\":\"ZHENG1\",\"93F4\":\"LU4\",\"93F5\":\"HUA2\",\"93F6\":\"JI2\",\"93F7\":\"PU2\",\"93F8\":\"HUI4\",\"93F9\":\"QIANG1 QIANG3\",\"93FA\":\"PO1\",\"93FB\":\"LIN2\",\"93FC\":\"SUO3\",\"93FD\":\"XIU4\",\"93FE\":\"SAN3 XIAN4\",\"93FF\":\"CHENG1\",\"940A\":\"YANG2\",\"940B\":\"TANG4 TANG1\",\"940C\":\"XIANG4\",\"940D\":\"JUE2\",\"940E\":\"JIAO1\",\"940F\":\"ZUN1\",\"941A\":\"YA4\",\"941B\":\"YING4\",\"941C\":\"DUI4\",\"941D\":\"JUE2\",\"941E\":\"NOU4\",\"941F\":\"TI4\",\"942A\":\"LU3\",\"942B\":\"JUAN1\",\"942C\":\"HUI4\",\"942D\":\"YU4\",\"942E\":\"LIAN2\",\"942F\":\"ZHUO2 ZHUO1\",\"943A\":\"DANG1 CHENG1 TANG1\",\"943B\":\"JU4 QU2\",\"943C\":\"FEN2 BEN1\",\"943D\":\"DA2\",\"943E\":\"BEI4 BI4\",\"943F\":\"YI4\",\"944A\":\"HUO4\",\"944B\":\"QING4 QING1\",\"944C\":\"BIN1\",\"944D\":\"YING1\",\"944E\":\"KUI4\",\"944F\":\"NING2\",\"945A\":\"ZUAN4 ZUAN1\",\"945B\":\"KUANG4\",\"945C\":\"SHANG4\",\"945D\":\"PENG2\",\"945E\":\"LA4\",\"945F\":\"DU2\",\"946A\":\"LU2\",\"946B\":\"XIN1 XUN4\",\"946C\":\"JIAN4\",\"946D\":\"LAN2 LAN4\",\"946E\":\"BO2\",\"946F\":\"JIAN1\",\"947A\":\"QU2\",\"947B\":\"PAN4\",\"947C\":\"LUO2\",\"947D\":\"ZUAN1 ZUAN4\",\"947E\":\"LUAN2\",\"947F\":\"ZAO2 ZUO4 ZU2 ZAO4\",\"948A\":\"ZHAO1\",\"948B\":\"PO4\",\"948C\":\"DIAO3 LIAO3\",\"948D\":\"TU3\",\"948E\":\"QIAN1\",\"948F\":\"CHUAN4\",\"949A\":\"BU4\",\"949B\":\"TAI4\",\"949C\":\"JU4\",\"949D\":\"DUN4\",\"949E\":\"CHAO1 MIAO3\",\"949F\":\"ZHONG1\",\"94A0\":\"NA4\",\"94A1\":\"BEI4\",\"94A2\":\"GANG1 GANG4\",\"94A3\":\"BAN3\",\"94A4\":\"QIAN2\",\"94A5\":\"YAO4 YUE4\",\"94A6\":\"QIN1\",\"94A7\":\"JUN1\",\"94A8\":\"WU4 WU1\",\"94A9\":\"GOU1\",\"94AA\":\"KANG4\",\"94AB\":\"FANG1\",\"94AC\":\"HUO2 HUO3\",\"94AD\":\"TOU3\",\"94AE\":\"NIU3\",\"94AF\":\"BA3 PA2\",\"94B0\":\"YU4\",\"94B1\":\"QIAN2 JIAN3\",\"94B2\":\"ZHENG1\",\"94B3\":\"QIAN2\",\"94B4\":\"GU1 GU2 GU3\",\"94B5\":\"BO1\",\"94B6\":\"E1 KE1\",\"94B7\":\"PO1 PO3\",\"94B8\":\"BU4\",\"94B9\":\"BA2 BO2\",\"94BA\":\"YUE4 HUI4\",\"94BB\":\"ZUAN4 ZUAN1\",\"94BC\":\"MU4\",\"94BD\":\"DAN4 TAN3\",\"94BE\":\"JIA3 HE2\",\"94BF\":\"DIAN4 TIAN2\",\"94C0\":\"YOU2\",\"94C1\":\"TIE3\",\"94C2\":\"BO2\",\"94C3\":\"LING2\",\"94C4\":\"SHUO4\",\"94C5\":\"QIAN1 YAN2\",\"94C6\":\"LIU3 MAO3\",\"94C7\":\"BAO4\",\"94C8\":\"SHI4\",\"94C9\":\"XUAN4\",\"94CA\":\"SHE2 SHI1 TA1 TUO2\",\"94CB\":\"BI4\",\"94CC\":\"NI3\",\"94CD\":\"PI1 PI2\",\"94CE\":\"DUO2\",\"94CF\":\"XING2\",\"94D0\":\"KAO4\",\"94D1\":\"LAO3\",\"94D2\":\"ER4\",\"94D3\":\"MANG2\",\"94D4\":\"YA4\",\"94D5\":\"YOU3\",\"94D6\":\"CHENG2\",\"94D7\":\"JIA2\",\"94D8\":\"YE2\",\"94D9\":\"NAO2\",\"94DA\":\"ZHI4\",\"94DB\":\"DANG1 CHENG1\",\"94DC\":\"TONG2\",\"94DD\":\"LV3\",\"94DE\":\"DIAO4\",\"94DF\":\"YIN1\",\"94E0\":\"KAI3\",\"94E1\":\"ZHA2\",\"94E2\":\"ZHU1\",\"94E3\":\"XIAN3 XI3\",\"94E4\":\"TING3\",\"94E5\":\"DIU1\",\"94E6\":\"XIAN1\",\"94E7\":\"HUA2\",\"94E8\":\"QUAN2\",\"94E9\":\"SHA1\",\"94EA\":\"JIA2 HA1 JIA1 KE1\",\"94EB\":\"YAO2 TIAO2\",\"94EC\":\"GE4 GE2 LUO4\",\"94ED\":\"MING2\",\"94EE\":\"ZHENG1\",\"94EF\":\"SE4\",\"94F0\":\"JIAO3\",\"94F1\":\"YI3 YI1\",\"94F2\":\"CHAN3\",\"94F3\":\"CHONG4\",\"94F4\":\"TANG4\",\"94F5\":\"AN1\",\"94F6\":\"YIN2\",\"94F7\":\"RU3 RU2\",\"94F8\":\"ZHU4\",\"94F9\":\"LAO2\",\"94FA\":\"PU1 PU4\",\"94FB\":\"WU2 YU3\",\"94FC\":\"LAI2\",\"94FD\":\"TE4\",\"94FE\":\"LIAN4\",\"94FF\":\"KENG1\",\"950A\":\"LVE4\",\"950B\":\"FENG1\",\"950C\":\"XIN1\",\"950D\":\"LIU3\",\"950E\":\"KAI1\",\"950F\":\"JIAN3 JIAN4\",\"951A\":\"MAO2\",\"951B\":\"BEN1\",\"951C\":\"QI2 YI3\",\"951D\":\"DE2\",\"951E\":\"KUA3 KE4\",\"951F\":\"KUN1\",\"952A\":\"HUO1 HUO4\",\"952B\":\"POU2 PEI2\",\"952C\":\"TAN2 XIAN1\",\"952D\":\"DING4\",\"952E\":\"JIAN4\",\"952F\":\"JU4 JU1\",\"953A\":\"ZHONG1\",\"953B\":\"DUAN4\",\"953C\":\"SOU1\",\"953D\":\"HUANG2\",\"953E\":\"HUAN2\",\"953F\":\"AI1\",\"954A\":\"NIE4\",\"954B\":\"TANG3\",\"954C\":\"JUAN1\",\"954D\":\"NIE4\",\"954E\":\"NA2\",\"954F\":\"LIU2 LIU4\",\"955A\":\"BENG4\",\"955B\":\"YONG1\",\"955C\":\"JING4\",\"955D\":\"DI2 DI1\",\"955E\":\"ZU2\",\"955F\":\"XUAN4\",\"956A\":\"QIANG1 QIANG3\",\"956B\":\"DENG1 DENG4\",\"956C\":\"HUO4\",\"956D\":\"LEI2\",\"956E\":\"HUAN2\",\"956F\":\"ZHUO2\",\"957A\":\"AO3 AO4\",\"957B\":\"DIE2\",\"957C\":\"QU1 JUE2\",\"957D\":\"LIAO3\",\"957E\":\"MI2\",\"957F\":\"CHANG2 ZHANG3 ZHANG4\",\"958B\":\"KAI1\",\"958C\":\"KANG4 KANG1\",\"958D\":\"BENG1\",\"958E\":\"HONG2\",\"958F\":\"RUN4\",\"959B\":\"PENG1\",\"959C\":\"XIA3 XIA4 KE3\",\"959D\":\"LING2\",\"959E\":\"BIAN4\",\"959F\":\"BI4\",\"95A0\":\"RUN4\",\"95A1\":\"HE2 GAI1 AI4 HAI4 KAI3\",\"95A2\":\"GUAN1 WAN1 WAN3\",\"95A3\":\"GE2\",\"95A4\":\"GE2 HE2\",\"95A5\":\"FA2\",\"95A6\":\"CHU4\",\"95A7\":\"HONG4 HONG3\",\"95A8\":\"GUI1\",\"95A9\":\"MIN3\",\"95AB\":\"KUN3\",\"95AC\":\"LANG3 DU1\",\"95AD\":\"LV2\",\"95AE\":\"TING2\",\"95AF\":\"SHA4\",\"95B0\":\"JU2\",\"95B1\":\"YUE4\",\"95B2\":\"YUE4\",\"95B3\":\"CHAN3\",\"95B4\":\"QU4\",\"95B5\":\"LIN4\",\"95B6\":\"CHANG1 TANG1\",\"95B7\":\"SHAI4 SHA1\",\"95B8\":\"KUN3\",\"95B9\":\"YAN1\",\"95BA\":\"WEN2 MIN2\",\"95BB\":\"YAN2 YAN4 YAN3\",\"95BC\":\"E4 YAN1 YU4 YE4\",\"95BD\":\"HUN1\",\"95BE\":\"YU4\",\"95BF\":\"WEN2\",\"95C0\":\"XIANG4\",\"95C1\":\"BAO1\",\"95C2\":\"XIANG4\",\"95C3\":\"QU4\",\"95C4\":\"YAO3\",\"95C5\":\"WEN2\",\"95C6\":\"BAN3\",\"95C7\":\"AN4 AN1 YAN3\",\"95C8\":\"WEI2\",\"95C9\":\"YIN1\",\"95CA\":\"KUO4\",\"95CB\":\"QUE4 JUE2 KUI2\",\"95CC\":\"LAN2 LAN4\",\"95CD\":\"DU1 SHE2\",\"95D0\":\"TIAN2\",\"95D1\":\"NIE4\",\"95D2\":\"TA4\",\"95D3\":\"KAI3 KAI1\",\"95D4\":\"HE2 GE2\",\"95D5\":\"QUE4 QUE1 JUE2\",\"95D6\":\"CHUANG3 CHEN4\",\"95D7\":\"GUAN1\",\"95D8\":\"DOU4\",\"95D9\":\"QI3\",\"95DA\":\"KUI1 KUI3\",\"95DB\":\"TANG2 CHANG1 TANG1\",\"95DC\":\"GUAN1\",\"95DD\":\"PIAO2\",\"95DE\":\"KAN4 HAN3 XIAN4\",\"95DF\":\"XI4 TA4 SA4\",\"95E0\":\"HUI4\",\"95E1\":\"CHAN3\",\"95E2\":\"PI4\",\"95E3\":\"DANG4\",\"95E4\":\"HUAN2\",\"95E5\":\"TA4\",\"95E6\":\"WEN2\",\"95E8\":\"MEN2\",\"95E9\":\"SHUAN1\",\"95EA\":\"SHAN3\",\"95EB\":\"YAN4\",\"95EC\":\"HAN4\",\"95ED\":\"BI4\",\"95EE\":\"WEN4\",\"95EF\":\"CHUANG3 CHEN4\",\"95F0\":\"RUN4\",\"95F1\":\"WEI2\",\"95F2\":\"XIAN2\",\"95F3\":\"HONG2\",\"95F4\":\"JIAN1 JIAN4\",\"95F5\":\"MIN3\",\"95F6\":\"KANG4 KANG1\",\"95F7\":\"MEN4 MEN1\",\"95F8\":\"ZHA2\",\"95F9\":\"NAO4\",\"95FA\":\"GUI1\",\"95FB\":\"WEN2 WEN4\",\"95FC\":\"TA4\",\"95FD\":\"MIN3\",\"95FE\":\"LV2\",\"95FF\":\"KAI3 KAI1\",\"960A\":\"CHANG1\",\"960B\":\"XI4\",\"960C\":\"WEN2\",\"960D\":\"HUN1\",\"960E\":\"YAN2 YAN4\",\"960F\":\"E4 YAN1 YU4\",\"961A\":\"KAN4\",\"961B\":\"HUAN2\",\"961C\":\"FU4\",\"961D\":\"FU4 YI4\",\"961E\":\"LE4\",\"961F\":\"DUI4 SUI4 ZHUI4\",\"962A\":\"BAN3\",\"962B\":\"PEI2 PEI1\",\"962C\":\"KENG1 GANG1\",\"962D\":\"YUN3\",\"962E\":\"RUAN3 JUAN4 YUAN2\",\"962F\":\"ZHI3\",\"963A\":\"DI3\",\"963B\":\"ZU3 ZHU4\",\"963C\":\"ZUO4\",\"963D\":\"DIAN4 YAN2\",\"963E\":\"LING3\",\"963F\":\"A1 A4 A5 E1 E3 A3\",\"964A\":\"DUO4\",\"964B\":\"LOU4\",\"964C\":\"MO4\",\"964D\":\"JIANG4 XIANG2 XIANG4\",\"964E\":\"SHU1\",\"964F\":\"DUO4\",\"965A\":\"FU4\",\"965B\":\"BI4\",\"965C\":\"XIA2 SHAN3\",\"965D\":\"SHAN3\",\"965E\":\"SHENG1\",\"965F\":\"ZHI4 DE2\",\"966A\":\"PEI2\",\"966B\":\"PEI2 FEI3\",\"966C\":\"ZOU1 ZHE2\",\"966D\":\"YI1 QI1 YI4\",\"966E\":\"DUI3\",\"966F\":\"LUN2\",\"967A\":\"XIAN3\",\"967B\":\"YIN1\",\"967C\":\"ZHU3 DU3\",\"967D\":\"YANG2\",\"967E\":\"RENG2\",\"967F\":\"SHAN3 XIA2\",\"968A\":\"DUI4 SUI4 ZHUI4\",\"968B\":\"SUI2 DUO4 TUO3 TUO1\",\"968C\":\"AN3\",\"968D\":\"HUANG2\",\"968E\":\"JIE1\",\"968F\":\"SUI2\",\"969A\":\"TANG2\",\"969B\":\"JI4\",\"969C\":\"ZHANG4 ZHANG1\",\"969D\":\"DAO3\",\"969E\":\"AO2\",\"969F\":\"XI4\",\"96A0\":\"YIN3\",\"96A2\":\"RAO4\",\"96A3\":\"LIN2\",\"96A4\":\"TUI2\",\"96A5\":\"DENG4\",\"96A6\":\"PI3\",\"96A7\":\"SUI4 ZHUI4\",\"96A8\":\"SUI2\",\"96A9\":\"YU4 AO4\",\"96AA\":\"XIAN3 YAN2 JIAN3\",\"96AB\":\"FEN1 FEN2\",\"96AC\":\"NI3\",\"96AD\":\"ER2\",\"96AE\":\"JI1\",\"96AF\":\"DAO3\",\"96B0\":\"XI2 XIE4\",\"96B1\":\"YIN3 YIN4\",\"96B2\":\"E2\",\"96B3\":\"HUI1\",\"96B4\":\"LONG3\",\"96B5\":\"XI1\",\"96B6\":\"LI4 DAI4 YI4 DI4\",\"96B7\":\"LI4\",\"96B8\":\"LI4\",\"96B9\":\"ZHUI1 CUI1 WEI2\",\"96BA\":\"HE4\",\"96BB\":\"ZHI1\",\"96BC\":\"ZHUN3 SUN3\",\"96BD\":\"JUN4 JUAN4\",\"96BE\":\"NAN2 NAN4 NUO2\",\"96BF\":\"YI4\",\"96C0\":\"QUE4 QIAO1 QIAO3\",\"96C1\":\"YAN4\",\"96C2\":\"QIN2 QIAN2\",\"96C3\":\"YA3\",\"96C4\":\"XIONG2\",\"96C5\":\"YA3 YA1 YA2\",\"96C6\":\"JI2\",\"96C7\":\"GU4\",\"96C8\":\"HUAN2\",\"96C9\":\"ZHI4 KAI3 YI3 SI4\",\"96CA\":\"GOU4\",\"96CB\":\"JUN4 JUAN4\",\"96CC\":\"CI2 CI1\",\"96CD\":\"YONG1\",\"96CE\":\"JU1\",\"96CF\":\"CHU2\",\"96D0\":\"HU1\",\"96D1\":\"ZA2\",\"96D2\":\"LUO4\",\"96D3\":\"YU2\",\"96D4\":\"CHOU2\",\"96D5\":\"DIAO1\",\"96D6\":\"SUI1\",\"96D7\":\"HAN4\",\"96D8\":\"HUO4\",\"96D9\":\"SHUANG1\",\"96DA\":\"GUAN4\",\"96DB\":\"CHU2 JU2 JU4\",\"96DC\":\"ZA2\",\"96DD\":\"YONG1\",\"96DE\":\"JI1\",\"96DF\":\"XI1 SUI3\",\"96E0\":\"CHOU2\",\"96E1\":\"LIU4\",\"96E2\":\"LI2 LI4 LI3 CHI1 GU3\",\"96E3\":\"NAN2 NAN4 NUO2\",\"96E4\":\"XUE2\",\"96E5\":\"ZA2\",\"96E6\":\"JI2\",\"96E7\":\"JI2\",\"96E8\":\"YU3 YU4\",\"96E9\":\"YU2 YU4 XU1\",\"96EA\":\"XUE3\",\"96EB\":\"NA3\",\"96EC\":\"FOU3\",\"96ED\":\"SE4\",\"96EE\":\"MU4\",\"96EF\":\"WEN2\",\"96F0\":\"FEN1\",\"96F1\":\"PANG2\",\"96F2\":\"YUN2\",\"96F3\":\"LI4\",\"96F4\":\"LI4\",\"96F5\":\"ANG3\",\"96F6\":\"LING2 LIAN2\",\"96F7\":\"LEI2 LEI4\",\"96F8\":\"AN2\",\"96F9\":\"BAO2 BO2\",\"96FA\":\"MENG2\",\"96FB\":\"DIAN4\",\"96FC\":\"DANG4\",\"96FD\":\"XING2\",\"96FE\":\"WU4\",\"96FF\":\"ZHAO4\",\"970A\":\"LING2\",\"970B\":\"QI1\",\"970C\":\"CHOU1\",\"970D\":\"HUO4 HE4 SUO3\",\"970E\":\"SHA4\",\"970F\":\"FEI1\",\"971A\":\"WU4\",\"971B\":\"LING2\",\"971C\":\"SHUANG1\",\"971D\":\"LING2 LING4\",\"971E\":\"XIA2\",\"971F\":\"HONG2\",\"972A\":\"YIN2\",\"972B\":\"XI2\",\"972C\":\"YI4\",\"972D\":\"AI3\",\"972E\":\"DAN4\",\"972F\":\"DENG4\",\"973A\":\"WEI2\",\"973C\":\"XI3 XI4\",\"973D\":\"JI4\",\"973E\":\"MAI2 LI2\",\"973F\":\"MENG4 MENG2 MOU4\",\"974A\":\"FENG1\",\"974B\":\"LI4\",\"974C\":\"BAO3\",\"974E\":\"HE4\",\"974F\":\"HE4\",\"975A\":\"JING4 LIANG4\",\"975B\":\"DIAN4\",\"975C\":\"JING4\",\"975D\":\"TIAN1\",\"975E\":\"FEI1 FEI3\",\"975F\":\"FEI1\",\"976A\":\"DING1\",\"976B\":\"CHA1 CHAI1\",\"976C\":\"JIAN1\",\"976D\":\"REN4\",\"976E\":\"DI2\",\"976F\":\"DU4\",\"977A\":\"MO4\",\"977B\":\"ZU3\",\"977C\":\"DA2\",\"977D\":\"BAN4\",\"977E\":\"YI4 XIE4\",\"977F\":\"YAO4\",\"978A\":\"JI2\",\"978B\":\"XIE2 WA1\",\"978C\":\"AN1\",\"978D\":\"AN1\",\"978E\":\"HEN2\",\"978F\":\"GONG3\",\"979A\":\"KONG4\",\"979B\":\"BENG3\",\"979C\":\"TA4\",\"979D\":\"ZHANG3\",\"979E\":\"BING3 BI3 PI2\",\"979F\":\"KUO4\",\"97A0\":\"JU1 JU2 QU1 QIONG1\",\"97A1\":\"LA5\",\"97A2\":\"XIE4\",\"97A3\":\"ROU2\",\"97A4\":\"BANG1\",\"97A5\":\"YI4 ENG1\",\"97A6\":\"QIU1\",\"97A7\":\"QIU1\",\"97A8\":\"HE2 MO4\",\"97A9\":\"XIAO4\",\"97AA\":\"MU4 MOU2\",\"97AB\":\"JU2 JU1 QU1\",\"97AC\":\"JIAN1 JIAN4\",\"97AD\":\"BIAN1\",\"97AE\":\"DI1\",\"97AF\":\"JIAN1\",\"97B1\":\"TAO1\",\"97B2\":\"GOU1\",\"97B3\":\"TA4\",\"97B4\":\"BEI4 BU4 FU2 BAI4\",\"97B5\":\"XIE2\",\"97B6\":\"PAN2\",\"97B7\":\"GE2\",\"97B8\":\"BI4\",\"97B9\":\"KUO4\",\"97BB\":\"LOU2 LV3\",\"97BC\":\"GUI4\",\"97BD\":\"QIAO2\",\"97BE\":\"XUE1\",\"97BF\":\"JI1\",\"97C0\":\"JIAN1\",\"97C1\":\"JIANG1\",\"97C2\":\"CHAN4\",\"97C3\":\"DA2 TA4\",\"97C4\":\"HUO4 HU4\",\"97C5\":\"XIAN3\",\"97C6\":\"QIAN1\",\"97C7\":\"DU2\",\"97C8\":\"WA4\",\"97C9\":\"JIAN1\",\"97CA\":\"LAN2\",\"97CB\":\"WEI2 HUI2\",\"97CC\":\"REN4\",\"97CD\":\"FU2\",\"97CE\":\"MEI4\",\"97CF\":\"JUAN4\",\"97D0\":\"GE2\",\"97D1\":\"WEI3\",\"97D2\":\"QIAO4\",\"97D3\":\"HAN2\",\"97D4\":\"CHANG4\",\"97D6\":\"ROU2\",\"97D7\":\"XUN4 YUN4\",\"97D8\":\"SHE4\",\"97D9\":\"WEI3\",\"97DA\":\"GE2\",\"97DB\":\"BEI4\",\"97DC\":\"TAO1 TAO4\",\"97DD\":\"GOU1\",\"97DE\":\"YUN4 WEN1\",\"97E0\":\"BI4\",\"97E1\":\"WEI3\",\"97E2\":\"HUI4\",\"97E3\":\"DU2\",\"97E4\":\"WA4\",\"97E5\":\"DU2\",\"97E6\":\"WEI2\",\"97E7\":\"REN4\",\"97E8\":\"FU2\",\"97E9\":\"HAN2\",\"97EA\":\"WEI3\",\"97EB\":\"YUN4\",\"97EC\":\"TAO1\",\"97ED\":\"JIU3\",\"97EE\":\"JIU3\",\"97EF\":\"XIAN1\",\"97F0\":\"XIE4\",\"97F1\":\"XIAN1\",\"97F2\":\"JI1\",\"97F3\":\"YIN1 YIN4\",\"97F4\":\"ZA2\",\"97F5\":\"YUN4\",\"97F6\":\"SHAO2\",\"97F7\":\"LE4\",\"97F8\":\"PENG2\",\"97F9\":\"HENG2\",\"97FA\":\"YING1\",\"97FB\":\"YUN4\",\"97FC\":\"PENG2\",\"97FD\":\"YIN1 AN1\",\"97FE\":\"YIN1\",\"97FF\":\"XIANG3\",\"980A\":\"XU4\",\"980B\":\"GU4\",\"980C\":\"SONG4 RONG2\",\"980D\":\"KUI3\",\"980E\":\"QI2 KEN3\",\"980F\":\"HANG2 GANG1 HANG4\",\"981A\":\"JING3\",\"981B\":\"LEI3\",\"981C\":\"HE2 HAN4 GE2 HAN2 QIN1\",\"981D\":\"QIAO1\",\"981E\":\"E4\",\"981F\":\"E2\",\"982A\":\"LEI4\",\"982B\":\"FU3 TIAO4\",\"982C\":\"JIA2\",\"982D\":\"TOU2 TOU5\",\"982E\":\"HUI4\",\"982F\":\"KUI2 QIU2\",\"983A\":\"TUI2\",\"983B\":\"PIN2 BIN1\",\"983C\":\"LAI4\",\"983D\":\"TUI2\",\"983E\":\"ZI1\",\"983F\":\"ZI1\",\"984A\":\"YI2\",\"984B\":\"SAI1\",\"984C\":\"TI2 DI4\",\"984D\":\"E2\",\"984E\":\"E4\",\"984F\":\"YAN2 YA2\",\"985A\":\"DIAN1\",\"985B\":\"DIAN1 TIAN2\",\"985C\":\"JIANG3 JIAO4\",\"985D\":\"KU1\",\"985E\":\"LEI4 LI4\",\"985F\":\"LIAO2\",\"986A\":\"HUI1 HUI4\",\"986B\":\"ZHAN4 CHAN4 SHAN1\",\"986C\":\"RU2\",\"986D\":\"HONG1\",\"986E\":\"BIN1\",\"986F\":\"XIAN3\",\"987A\":\"SHUN4\",\"987B\":\"XU1\",\"987C\":\"XU4\",\"987D\":\"WAN2\",\"987E\":\"GU4\",\"987F\":\"DUN4 DU2 ZHUN1\",\"988A\":\"JIA2\",\"988B\":\"TIAN5 TING3\",\"988C\":\"HAN4 GE2 HE2\",\"988D\":\"YING3\",\"988E\":\"JIONG3\",\"988F\":\"HAI2 KE1 KE2\",\"989A\":\"E4\",\"989B\":\"ZHUAN1\",\"989C\":\"YAN2\",\"989D\":\"E2\",\"989E\":\"NIE4\",\"989F\":\"MAN2 MAN1\",\"98A0\":\"DIAN1 TIAN2\",\"98A1\":\"SANG3\",\"98A2\":\"HAO4\",\"98A3\":\"LEI4\",\"98A4\":\"ZHAN4 CHAN4 SHAN1\",\"98A5\":\"RU2\",\"98A6\":\"PIN2\",\"98A7\":\"QUAN2\",\"98A8\":\"FENG1 FENG3 FENG4\",\"98A9\":\"BIAO1 DIU1\",\"98AB\":\"FU2\",\"98AC\":\"XIA1\",\"98AD\":\"ZHAN3\",\"98AE\":\"BIAO1 PAO2\",\"98AF\":\"SA4 LI4\",\"98B0\":\"BA2\",\"98B1\":\"TAI2\",\"98B2\":\"LIE4\",\"98B3\":\"GUA1\",\"98B4\":\"XUAN4\",\"98B5\":\"SHAO4\",\"98B6\":\"JU4\",\"98B7\":\"BI1\",\"98B8\":\"SI1\",\"98B9\":\"WEI3\",\"98BA\":\"YANG2\",\"98BB\":\"YAO2\",\"98BC\":\"SOU1\",\"98BD\":\"KAI3\",\"98BE\":\"SAO1\",\"98BF\":\"FAN2 FAN1 FAN4\",\"98C0\":\"LIU2\",\"98C1\":\"XI2\",\"98C2\":\"LIAO2 LIU2 LIU4\",\"98C3\":\"PIAO1\",\"98C4\":\"PIAO1\",\"98C5\":\"LIU2\",\"98C6\":\"BIAO1\",\"98C7\":\"BIAO1\",\"98C8\":\"BIAO3 BIAO1\",\"98C9\":\"LIAO2\",\"98CB\":\"SE4\",\"98CC\":\"FENG1\",\"98CD\":\"BIAO1 XIU1\",\"98CE\":\"FENG1 FENG3 FENG4\",\"98CF\":\"YANG2\",\"98D0\":\"ZHAN3\",\"98D1\":\"BIAO1\",\"98D2\":\"SA4\",\"98D3\":\"JU4\",\"98D4\":\"SI1\",\"98D5\":\"SOU1\",\"98D6\":\"YAO2\",\"98D7\":\"LIU2\",\"98D8\":\"PIAO1\",\"98D9\":\"BIAO1\",\"98DA\":\"BIAO1\",\"98DB\":\"FEI1\",\"98DC\":\"FAN1\",\"98DD\":\"FEI1\",\"98DE\":\"FEI1\",\"98DF\":\"SHI2 SI4 YI4\",\"98E0\":\"SHI2\",\"98E1\":\"CAN1 SUN1\",\"98E2\":\"JI1\",\"98E3\":\"DING4\",\"98E4\":\"SI4\",\"98E5\":\"TUO1\",\"98E6\":\"ZHAN1\",\"98E7\":\"SUN1\",\"98E8\":\"XIANG3\",\"98E9\":\"TUN2 TUN5 ZHUN4\",\"98EA\":\"REN4\",\"98EB\":\"YU4\",\"98EC\":\"JUAN4 YANG3\",\"98ED\":\"CHI4 SHI4\",\"98EE\":\"YIN3\",\"98EF\":\"FAN4\",\"98F0\":\"FAN4\",\"98F1\":\"SUN1\",\"98F2\":\"YIN3 YIN4\",\"98F3\":\"ZHU4\",\"98F4\":\"YI2 SI4\",\"98F5\":\"ZHAI3 ZUO4\",\"98F6\":\"BI4\",\"98F7\":\"JIE3\",\"98F8\":\"TAO1\",\"98F9\":\"LIU3\",\"98FA\":\"CI2\",\"98FB\":\"TIE4\",\"98FC\":\"SI4\",\"98FD\":\"BAO3\",\"98FE\":\"SHI4 CHI4\",\"98FF\":\"DUO4\",\"990A\":\"YANG3 YANG4\",\"990B\":\"YANG3\",\"990C\":\"ER3\",\"990D\":\"YAN4\",\"990E\":\"LE5\",\"990F\":\"YI1\",\"991A\":\"YAO2\",\"991B\":\"HUN2 KUN1\",\"991C\":\"GUO3\",\"991D\":\"SHI4\",\"991E\":\"JIAN4\",\"991F\":\"ZHUI4\",\"992A\":\"NUAN3\",\"992B\":\"HUN2 YUN4\",\"992C\":\"HU2\",\"992D\":\"HUANG2\",\"992E\":\"TIE4\",\"992F\":\"HUI4\",\"993A\":\"BO2\",\"993B\":\"GAO1\",\"993C\":\"XI4\",\"993D\":\"KUI4\",\"993E\":\"LIU4 LIU2\",\"993F\":\"SOU1\",\"994A\":\"SAN3\",\"994B\":\"KUI4 TUI2\",\"994C\":\"ZHUAN4 XUAN3\",\"994D\":\"SHAN4\",\"994E\":\"CHI4 XI1\",\"994F\":\"DAN4\",\"995A\":\"HAI4\",\"995B\":\"MENG2\",\"995C\":\"YAN4\",\"995D\":\"MO2\",\"995E\":\"CHAN2\",\"995F\":\"XIANG3\",\"996A\":\"REN4\",\"996B\":\"YU4\",\"996C\":\"CHI4\",\"996D\":\"FAN4\",\"996E\":\"YIN3 YIN4\",\"996F\":\"JIAN4\",\"997A\":\"JIAO3\",\"997B\":\"YI1\",\"997C\":\"BING3\",\"997D\":\"BO2 BO1\",\"997E\":\"DOU4\",\"997F\":\"E4\",\"998A\":\"SOU1\",\"998B\":\"CHAN2\",\"998C\":\"YE4\",\"998D\":\"MO2\",\"998E\":\"BO2\",\"998F\":\"LIU4 LIU2\",\"999A\":\"FEN2\",\"999B\":\"BA2\",\"999C\":\"NI3\",\"999D\":\"BI4\",\"999E\":\"BO2\",\"999F\":\"TU2\",\"99A0\":\"HAN1\",\"99A1\":\"FEI1\",\"99A2\":\"JIAN1\",\"99A3\":\"AN1\",\"99A4\":\"AI3\",\"99A5\":\"FU4 BI4\",\"99A6\":\"XIAN1\",\"99A7\":\"WEN1\",\"99A8\":\"XIN1 XING1\",\"99A9\":\"FEN2\",\"99AA\":\"BIN1\",\"99AB\":\"XING1\",\"99AC\":\"MA3\",\"99AD\":\"YU4\",\"99AE\":\"FENG2 PING2\",\"99AF\":\"HAN4 HAN2\",\"99B0\":\"DI4\",\"99B1\":\"TUO2 DUO4 DAI4\",\"99B2\":\"TUO1\",\"99B3\":\"CHI2\",\"99B4\":\"XUN2 XUN4\",\"99B5\":\"ZHU4\",\"99B6\":\"ZHI1\",\"99B7\":\"PEI4\",\"99B8\":\"XIN4\",\"99B9\":\"RI4\",\"99BA\":\"SA4\",\"99BB\":\"YIN3\",\"99BC\":\"WEN2\",\"99BD\":\"ZHI2\",\"99BE\":\"DAN4\",\"99BF\":\"LV2\",\"99C0\":\"YOU2\",\"99C1\":\"BO2\",\"99C2\":\"BAO3\",\"99C3\":\"KUAI4 JUE2\",\"99C4\":\"TUO2\",\"99C5\":\"YI4\",\"99C6\":\"QU1\",\"99C8\":\"QU1\",\"99C9\":\"JIONG1\",\"99CA\":\"BO3 PO3\",\"99CB\":\"ZHAO1\",\"99CC\":\"YUAN1\",\"99CD\":\"PENG1\",\"99CE\":\"ZHOU4\",\"99CF\":\"JU4\",\"99D0\":\"ZHU4\",\"99D1\":\"NU2\",\"99D2\":\"JU1 JU4\",\"99D3\":\"PI1 PI2\",\"99D4\":\"ZANG3 ZU3 ZU4\",\"99D5\":\"JIA4 JIA1\",\"99D6\":\"LING2\",\"99D7\":\"ZHEN1\",\"99D8\":\"TAI2 DAI4 ZHAI4 TAI1\",\"99D9\":\"FU4\",\"99DA\":\"YANG3\",\"99DB\":\"SHI3\",\"99DC\":\"BI4\",\"99DD\":\"TUO2\",\"99DE\":\"TUO2\",\"99DF\":\"SI4\",\"99E0\":\"LIU2\",\"99E1\":\"MA4\",\"99E2\":\"PIAN2\",\"99E3\":\"TAO2\",\"99E4\":\"ZHI4\",\"99E5\":\"RONG2 XUE4\",\"99E6\":\"TENG2\",\"99E7\":\"DONG4\",\"99E8\":\"XUN2\",\"99E9\":\"QUAN2\",\"99EA\":\"SHEN1\",\"99EB\":\"JIONG1\",\"99EC\":\"ER3\",\"99ED\":\"HAI4\",\"99EE\":\"BO2\",\"99F0\":\"YIN1\",\"99F1\":\"LUO4 JIA4\",\"99F3\":\"DAN4\",\"99F4\":\"XIE4\",\"99F5\":\"LIU2\",\"99F6\":\"JU2\",\"99F7\":\"SONG3\",\"99F8\":\"QIN1\",\"99F9\":\"MANG2\",\"99FA\":\"LIANG2\",\"99FB\":\"HAN4\",\"99FC\":\"TU2\",\"99FD\":\"XUAN4 XUAN1\",\"99FE\":\"TUI4\",\"99FF\":\"JUN4\",\"9A00\":\"E2 E3\",\"9A01\":\"CHENG3\",\"9A02\":\"XING1\",\"9A03\":\"AI2 DAI1\",\"9A04\":\"LU4\",\"9A05\":\"ZHUI1\",\"9A06\":\"ZHOU1\",\"9A07\":\"SHE3 SHE4\",\"9A08\":\"PIAN2\",\"9A09\":\"KUN1\",\"9A0A\":\"TAO2\",\"9A0B\":\"LAI2\",\"9A0C\":\"ZONG1\",\"9A0D\":\"KE4\",\"9A0E\":\"QI2 JI4\",\"9A0F\":\"QI2\",\"9A10\":\"YAN4\",\"9A11\":\"FEI1\",\"9A12\":\"SAO1\",\"9A13\":\"YAN3\",\"9A14\":\"JIE2\",\"9A15\":\"YAO3\",\"9A16\":\"WU4\",\"9A17\":\"PIAN4\",\"9A18\":\"CONG1\",\"9A19\":\"PIAN4\",\"9A1A\":\"QIAN2\",\"9A1B\":\"FEI1\",\"9A1C\":\"HUANG2\",\"9A1D\":\"JIAN1\",\"9A1E\":\"HUO4 HUO1\",\"9A1F\":\"YU4\",\"9A20\":\"TI2\",\"9A21\":\"QUAN2\",\"9A22\":\"XIA2\",\"9A23\":\"ZONG1\",\"9A24\":\"KUI2\",\"9A25\":\"ROU2\",\"9A26\":\"SI1\",\"9A27\":\"GUA1\",\"9A28\":\"TUO2\",\"9A29\":\"KUI4 GUI1\",\"9A2A\":\"SOU1\",\"9A2B\":\"QIAN1 JIAN3\",\"9A2C\":\"CHENG2\",\"9A2D\":\"ZHI4\",\"9A2E\":\"LIU2\",\"9A2F\":\"PANG2\",\"9A30\":\"TENG2\",\"9A31\":\"XI1\",\"9A32\":\"CAO3\",\"9A33\":\"DU2\",\"9A34\":\"YAN4\",\"9A35\":\"YUAN2\",\"9A36\":\"ZOU1 ZHOU4 ZHU1 QU1\",\"9A37\":\"SAO1 SAO3 XIAO1\",\"9A38\":\"SHAN4\",\"9A39\":\"LI2 QI2\",\"9A3A\":\"ZHI4\",\"9A3B\":\"SHUANG3 SHUANG1\",\"9A3C\":\"LU4\",\"9A3D\":\"XI2\",\"9A3E\":\"LUO2\",\"9A3F\":\"ZHANG1\",\"9A40\":\"MO4 MA4\",\"9A41\":\"AO4 AO2 YAO4\",\"9A42\":\"CAN1\",\"9A43\":\"PIAO4 BIAO1\",\"9A44\":\"CONG1\",\"9A45\":\"QU1\",\"9A46\":\"BI4\",\"9A47\":\"ZHI4\",\"9A48\":\"YU4\",\"9A49\":\"XU1\",\"9A4A\":\"HUA2\",\"9A4B\":\"BO1\",\"9A4C\":\"SU4\",\"9A4D\":\"XIAO1\",\"9A4E\":\"LIN2\",\"9A4F\":\"CHAN3 ZHAN4\",\"9A50\":\"DUN1\",\"9A51\":\"LIU2\",\"9A52\":\"TUO2\",\"9A53\":\"ZENG1\",\"9A54\":\"TAN2 DIAN4\",\"9A55\":\"JIAO1 XIAO1 JU1 QIAO2\",\"9A56\":\"TIE3\",\"9A57\":\"YAN4\",\"9A58\":\"LUO2\",\"9A59\":\"ZHAN1\",\"9A5A\":\"JING1\",\"9A5B\":\"YI4\",\"9A5C\":\"YE4\",\"9A5D\":\"TUO1\",\"9A5E\":\"BIN1\",\"9A5F\":\"ZOU4 ZHOU4\",\"9A60\":\"YAN4\",\"9A61\":\"PENG2\",\"9A62\":\"LV2\",\"9A63\":\"TENG2\",\"9A64\":\"XIANG1\",\"9A65\":\"JI4\",\"9A66\":\"SHUANG1\",\"9A67\":\"JU2\",\"9A68\":\"XI1\",\"9A69\":\"HUAN1\",\"9A6A\":\"LI2 CHI2\",\"9A6B\":\"BIAO1\",\"9A6C\":\"MA3\",\"9A6D\":\"YU4\",\"9A6E\":\"TUO2 DUO4\",\"9A6F\":\"XUN2 XUN4\",\"9A70\":\"CHI2\",\"9A71\":\"QU1\",\"9A72\":\"RI4\",\"9A73\":\"BO2\",\"9A74\":\"LV2\",\"9A75\":\"ZANG3 ZU3 ZU4\",\"9A76\":\"SHI3\",\"9A77\":\"SI4\",\"9A78\":\"FU4\",\"9A79\":\"JU1\",\"9A7A\":\"ZOU1 ZHOU4\",\"9A7B\":\"ZHU4\",\"9A7C\":\"TUO2\",\"9A7D\":\"NU2\",\"9A7E\":\"JIA4\",\"9A7F\":\"YI4\",\"9A80\":\"TAI2\",\"9A81\":\"XIAO1\",\"9A82\":\"MA4\",\"9A83\":\"YIN1\",\"9A84\":\"JIAO1 XIAO1\",\"9A85\":\"HUA2\",\"9A86\":\"LUO4\",\"9A87\":\"HAI4\",\"9A88\":\"PIAN2\",\"9A89\":\"BIAO1\",\"9A8A\":\"LI2\",\"9A8B\":\"CHENG3\",\"9A8C\":\"YAN4\",\"9A8D\":\"XIN1\",\"9A8E\":\"QIN1\",\"9A8F\":\"JUN4\",\"9A90\":\"QI2\",\"9A91\":\"QI2 JI4\",\"9A92\":\"KE4\",\"9A93\":\"ZHUI1\",\"9A94\":\"ZONG1\",\"9A95\":\"SU4\",\"9A96\":\"CAN1\",\"9A97\":\"PIAN4\",\"9A98\":\"ZHI4\",\"9A99\":\"KUI2\",\"9A9A\":\"SAO1 SAO3\",\"9A9B\":\"WU4\",\"9A9C\":\"AO2 AO4\",\"9A9D\":\"LIU2\",\"9A9E\":\"QIAN1\",\"9A9F\":\"SHAN4\",\"9AA0\":\"PIAO4 BIAO1\",\"9AA1\":\"LUO2\",\"9AA2\":\"CONG1\",\"9AA3\":\"CHAN3 ZHAN4\",\"9AA4\":\"ZOU4 ZHOU4\",\"9AA5\":\"JI4\",\"9AA6\":\"SHUANG1\",\"9AA7\":\"XIANG1\",\"9AA8\":\"GU3 GU1 GU2\",\"9AA9\":\"WEI3\",\"9AAA\":\"WEI3\",\"9AAB\":\"WEI3\",\"9AAC\":\"YU2\",\"9AAD\":\"GAN4\",\"9AAE\":\"YI4\",\"9AAF\":\"ANG1 KANG3\",\"9AB0\":\"TOU2 GU3\",\"9AB1\":\"XIE4 GA4 JIE4 JIA2\",\"9AB2\":\"BAO1\",\"9AB3\":\"BI4 BEI4\",\"9AB4\":\"CHI1 CI1\",\"9AB5\":\"TI3 TI1\",\"9AB6\":\"DI3\",\"9AB7\":\"KU1\",\"9AB8\":\"HAI2 GAI1\",\"9AB9\":\"QIAO1 XIAO1\",\"9ABA\":\"GOU4 HOU2\",\"9ABB\":\"KUA4\",\"9ABC\":\"GE2\",\"9ABD\":\"TUI3\",\"9ABE\":\"GENG3\",\"9ABF\":\"PIAN2\",\"9AC0\":\"BI4\",\"9AC1\":\"KE1 KUA4\",\"9AC2\":\"KA4 QIA4 GE2\",\"9AC3\":\"YU2\",\"9AC4\":\"SUI3\",\"9AC5\":\"LOU2\",\"9AC6\":\"BO2\",\"9AC7\":\"XIAO1\",\"9AC8\":\"PANG2 BANG3\",\"9AC9\":\"BO1\",\"9ACA\":\"CI1\",\"9ACB\":\"KUAN1\",\"9ACC\":\"BIN4\",\"9ACD\":\"MO2\",\"9ACE\":\"LIAO2\",\"9ACF\":\"LOU2\",\"9AD0\":\"NAO2 XIAO1\",\"9AD1\":\"DU2\",\"9AD2\":\"ZANG1 ZANG3\",\"9AD3\":\"SUI3\",\"9AD4\":\"TI3 TI1\",\"9AD5\":\"BIN4\",\"9AD6\":\"KUAN1\",\"9AD7\":\"LU2\",\"9AD8\":\"GAO1 GAO4\",\"9AD9\":\"GAO1\",\"9ADA\":\"QIAO4\",\"9ADB\":\"KAO1\",\"9ADC\":\"QIAO1\",\"9ADD\":\"LAO4\",\"9ADE\":\"ZAO4\",\"9ADF\":\"BIAO1 SHAN1 PIAO4\",\"9AE0\":\"KUN1\",\"9AE1\":\"KUN1\",\"9AE2\":\"TI4 DI2 DI4\",\"9AE3\":\"FANG3\",\"9AE4\":\"XIU1\",\"9AE5\":\"RAN2\",\"9AE6\":\"MAO2 LI2\",\"9AE7\":\"DAN4\",\"9AE8\":\"KUN1\",\"9AE9\":\"BIN4\",\"9AEA\":\"FA4\",\"9AEB\":\"TIAO2\",\"9AEC\":\"PI1\",\"9AED\":\"ZI1\",\"9AEE\":\"FA4 FA3\",\"9AEF\":\"RAN2\",\"9AF0\":\"TI4\",\"9AF1\":\"PAO4\",\"9AF2\":\"PI1 BI4\",\"9AF3\":\"MAO2\",\"9AF4\":\"FU2 FEI4\",\"9AF5\":\"ER2\",\"9AF6\":\"RONG2\",\"9AF7\":\"QU1\",\"9AF9\":\"XIU1\",\"9AFA\":\"GUA4 KUO4\",\"9AFB\":\"JI4 JIE2\",\"9AFC\":\"PENG2\",\"9AFD\":\"ZHUA1\",\"9AFE\":\"SHAO1\",\"9AFF\":\"SHA1 SUO1\",\"9B00\":\"TI4\",\"9B01\":\"LI4\",\"9B02\":\"BIN4\",\"9B03\":\"ZONG1\",\"9B04\":\"TI4 DI2 DI4\",\"9B05\":\"PENG2\",\"9B06\":\"SONG1\",\"9B07\":\"ZHENG1\",\"9B08\":\"QUAN2\",\"9B09\":\"ZONG1\",\"9B0A\":\"SHUN4\",\"9B0B\":\"JIAN1 JIAN3\",\"9B0C\":\"DUO3\",\"9B0D\":\"HU2\",\"9B0E\":\"LA4\",\"9B0F\":\"JIU1\",\"9B10\":\"QI2\",\"9B11\":\"LIAN2\",\"9B12\":\"ZHEN3\",\"9B13\":\"BIN4\",\"9B14\":\"PENG2\",\"9B15\":\"MO4\",\"9B16\":\"SAN1\",\"9B17\":\"MAN4\",\"9B18\":\"MAN2\",\"9B19\":\"SENG1\",\"9B1A\":\"XU1\",\"9B1B\":\"LIE4\",\"9B1C\":\"QIAN1\",\"9B1D\":\"QIAN1\",\"9B1E\":\"NONG2\",\"9B1F\":\"HUAN2\",\"9B20\":\"KUAI4 KUO4\",\"9B21\":\"NING2\",\"9B22\":\"BIN4\",\"9B23\":\"LIE4\",\"9B24\":\"RANG2\",\"9B25\":\"DOU4\",\"9B26\":\"DOU4\",\"9B27\":\"NAO4\",\"9B28\":\"HONG4 XIANG4 HONG1 HONG3\",\"9B29\":\"XI4 HE4\",\"9B2A\":\"DOU4\",\"9B2B\":\"HAN3 KAN3 KAN4\",\"9B2C\":\"DOU4\",\"9B2D\":\"DOU4\",\"9B2E\":\"JIU1\",\"9B2F\":\"CHANG4\",\"9B30\":\"YU4\",\"9B31\":\"YU4\",\"9B32\":\"LI4 GE2 E4\",\"9B33\":\"JUAN4\",\"9B34\":\"FU3\",\"9B35\":\"QIAN2 XIN2\",\"9B36\":\"GUI1\",\"9B37\":\"ZONG1\",\"9B38\":\"LIU4\",\"9B39\":\"GUI1\",\"9B3A\":\"SHANG1\",\"9B3B\":\"YU4 ZHOU1 ZHU3 ZHU4 JU1\",\"9B3C\":\"GUI3\",\"9B3D\":\"MEI4\",\"9B3E\":\"JI4\",\"9B3F\":\"QI2\",\"9B40\":\"JIE4\",\"9B41\":\"KUI2 KUI3 KUAI4\",\"9B42\":\"HUN2\",\"9B43\":\"BA2\",\"9B44\":\"PO4 BO2 TUO4\",\"9B45\":\"MEI4\",\"9B46\":\"XU4 XU1\",\"9B47\":\"YAN3\",\"9B48\":\"XIAO1\",\"9B49\":\"LIANG3\",\"9B4A\":\"YU4\",\"9B4B\":\"TUI2 CHUI2 ZHUI1\",\"9B4C\":\"QI1\",\"9B4D\":\"WANG3\",\"9B4E\":\"LIANG3\",\"9B4F\":\"WEI4 WEI2 WEI1\",\"9B50\":\"JIAN1\",\"9B51\":\"CHI1\",\"9B52\":\"PIAO1\",\"9B53\":\"BI4\",\"9B54\":\"MO2\",\"9B55\":\"JI3\",\"9B56\":\"XU1\",\"9B57\":\"CHOU3 CHOU2\",\"9B58\":\"YAN3\",\"9B59\":\"ZHAN3 JIAN4\",\"9B5A\":\"YU2\",\"9B5B\":\"DAO1\",\"9B5C\":\"REN2\",\"9B5D\":\"JI4\",\"9B5F\":\"GONG1 HONG2\",\"9B60\":\"TUO2 TUO1\",\"9B61\":\"DIAO4\",\"9B62\":\"JI3\",\"9B63\":\"XU4 YU2\",\"9B64\":\"E2\",\"9B65\":\"E4\",\"9B66\":\"SHA1\",\"9B67\":\"HANG2\",\"9B68\":\"TUN2\",\"9B69\":\"MO4\",\"9B6A\":\"JIE4\",\"9B6B\":\"SHEN3\",\"9B6C\":\"FAN3 BAN3\",\"9B6D\":\"YUAN2 WAN3\",\"9B6E\":\"BI2 PI2\",\"9B6F\":\"LU3 LV3\",\"9B70\":\"WEN2\",\"9B71\":\"HU2\",\"9B72\":\"LU2\",\"9B73\":\"ZA2\",\"9B74\":\"FANG2\",\"9B75\":\"FEN2\",\"9B76\":\"NA4\",\"9B77\":\"YOU2\",\"9B7A\":\"HE2\",\"9B7B\":\"XIA2\",\"9B7C\":\"QU1\",\"9B7D\":\"HAN1\",\"9B7E\":\"PI2 PI1\",\"9B7F\":\"LING2\",\"9B80\":\"TUO2\",\"9B81\":\"BO1 BA4\",\"9B82\":\"QIU2\",\"9B83\":\"PING2\",\"9B84\":\"FU2\",\"9B85\":\"BI4\",\"9B86\":\"JI4\",\"9B87\":\"WEI4\",\"9B88\":\"JU1\",\"9B89\":\"DIAO1\",\"9B8A\":\"BO2 BA4\",\"9B8B\":\"YOU2\",\"9B8C\":\"GUN3\",\"9B8D\":\"PI1 PI2\",\"9B8E\":\"NIAN2\",\"9B8F\":\"XING1\",\"9B90\":\"TAI2\",\"9B91\":\"BAO4 BAO1 PAO1\",\"9B92\":\"FU4\",\"9B93\":\"ZHA3 ZHA4\",\"9B94\":\"JU4\",\"9B95\":\"GU1\",\"9B99\":\"TA4\",\"9B9A\":\"JIE2 QIA4\",\"9B9B\":\"SHU4 SHU1\",\"9B9C\":\"HOU4\",\"9B9D\":\"XIANG3 ZHEN4\",\"9B9E\":\"ER2\",\"9B9F\":\"AN4 YAN3\",\"9BA0\":\"WEI2\",\"9BA1\":\"TIAO1 ZHAO4\",\"9BA2\":\"ZHU1\",\"9BA3\":\"YIN4\",\"9BA4\":\"LIE4\",\"9BA5\":\"LUO4\",\"9BA6\":\"TONG2 ZHOU4\",\"9BA7\":\"YI2 TI2\",\"9BA8\":\"QI2 YI4 ZHI1\",\"9BA9\":\"BING4\",\"9BAA\":\"WEI3\",\"9BAB\":\"JIAO1 JIAO3\",\"9BAC\":\"BU4 KU1\",\"9BAD\":\"GUI1 WA1 XIE2 KUI2 HUA4\",\"9BAE\":\"XIAN1 XIAN3 XIAN4\",\"9BAF\":\"GE2\",\"9BB0\":\"HUI2\",\"9BB3\":\"KAO3 KAO4\",\"9BB5\":\"DUO2\",\"9BB6\":\"JUN1\",\"9BB7\":\"TI2\",\"9BB8\":\"MIAN3 MAN3\",\"9BB9\":\"XIAO1\",\"9BBA\":\"ZA3\",\"9BBB\":\"SHA1\",\"9BBC\":\"QIN1\",\"9BBD\":\"YU2\",\"9BBE\":\"NEI3\",\"9BBF\":\"ZHE2\",\"9BC0\":\"GUN3\",\"9BC1\":\"GENG3\",\"9BC3\":\"WU2\",\"9BC4\":\"QIU2\",\"9BC5\":\"TING2 TING3 SHAN1\",\"9BC6\":\"FU3 PU1\",\"9BC7\":\"WAN3 HUAN4\",\"9BC8\":\"TIAO2 YOU2 CHOU2\",\"9BC9\":\"LI3\",\"9BCA\":\"SHA1\",\"9BCB\":\"SHA1\",\"9BCC\":\"GAO4\",\"9BCD\":\"MENG2\",\"9BD2\":\"YONG3\",\"9BD3\":\"NI2\",\"9BD4\":\"ZI1\",\"9BD5\":\"QI2\",\"9BD6\":\"QING1 ZHENG1\",\"9BD7\":\"XIANG3\",\"9BD8\":\"NEI3\",\"9BD9\":\"CHUN2\",\"9BDA\":\"JI4\",\"9BDB\":\"DIAO1\",\"9BDC\":\"QIE4\",\"9BDD\":\"GU4\",\"9BDE\":\"ZHOU3\",\"9BDF\":\"DONG1\",\"9BE0\":\"LAI2\",\"9BE1\":\"FEI1 FEI4\",\"9BE2\":\"NI2\",\"9BE3\":\"YI4\",\"9BE4\":\"KUN1\",\"9BE5\":\"LU4\",\"9BE6\":\"JIU4\",\"9BE7\":\"CHANG1\",\"9BE8\":\"JING1 QING2\",\"9BE9\":\"LUN2\",\"9BEA\":\"LING2\",\"9BEB\":\"ZOU1\",\"9BEC\":\"LI2\",\"9BED\":\"MENG3\",\"9BEE\":\"ZONG1\",\"9BEF\":\"ZHI4\",\"9BF0\":\"NIAN2\",\"9BF4\":\"SHI1\",\"9BF5\":\"SHEN1\",\"9BF6\":\"HUN3 HUAN4\",\"9BF7\":\"SHI4 TI2\",\"9BF8\":\"HOU2\",\"9BF9\":\"XING1 ZHENG1\",\"9BFA\":\"ZHU1\",\"9BFB\":\"LA4\",\"9BFC\":\"ZONG1\",\"9BFD\":\"JI4 ZEI2\",\"9BFE\":\"BIAN1\",\"9BFF\":\"BIAN1\",\"9C00\":\"HUAN4\",\"9C01\":\"QUAN2\",\"9C02\":\"ZE2\",\"9C03\":\"WEI1\",\"9C04\":\"WEI1\",\"9C05\":\"YU2\",\"9C06\":\"QUN1 CHUN1\",\"9C07\":\"ROU2\",\"9C08\":\"DIE2 QIE4 ZHA2\",\"9C09\":\"HUANG2\",\"9C0A\":\"LIAN4\",\"9C0B\":\"YAN3\",\"9C0C\":\"QIU2 QIU1\",\"9C0D\":\"QIU1\",\"9C0E\":\"JIAN4\",\"9C0F\":\"BI4 BI1\",\"9C10\":\"E4\",\"9C11\":\"YANG2\",\"9C12\":\"FU4\",\"9C13\":\"SAI1 XI3\",\"9C14\":\"JIAN3\",\"9C15\":\"XIA2 XIA1\",\"9C16\":\"TUO3 WEI3\",\"9C17\":\"HU2\",\"9C19\":\"RUO4\",\"9C1B\":\"WEN1\",\"9C1C\":\"JIAN1\",\"9C1D\":\"HAO4\",\"9C1E\":\"WU1\",\"9C1F\":\"FANG2 PANG2\",\"9C20\":\"SAO1\",\"9C21\":\"LIU2\",\"9C22\":\"MA3\",\"9C23\":\"SHI2\",\"9C24\":\"SHI1\",\"9C25\":\"GUAN1 GUAN4 KUN1 GUN3 YIN2\",\"9C27\":\"TENG2\",\"9C28\":\"TA4 TA3 DIE2\",\"9C29\":\"YAO2\",\"9C2A\":\"GE2\",\"9C2B\":\"RONG2 YONG2\",\"9C2C\":\"QIAN2\",\"9C2D\":\"QI2\",\"9C2E\":\"WEN1\",\"9C2F\":\"RUO4\",\"9C31\":\"LIAN2\",\"9C32\":\"AO2\",\"9C33\":\"LE4\",\"9C34\":\"HUI1\",\"9C35\":\"MIN3\",\"9C36\":\"JI4\",\"9C37\":\"TIAO2\",\"9C38\":\"QU1\",\"9C39\":\"JIAN1\",\"9C3A\":\"SAO1 SHEN1 CAN1\",\"9C3B\":\"MAN2\",\"9C3C\":\"XI2\",\"9C3D\":\"QIU2\",\"9C3E\":\"BIAO4\",\"9C3F\":\"JI1 JI2\",\"9C40\":\"JI4\",\"9C41\":\"ZHU2\",\"9C42\":\"JIANG1\",\"9C43\":\"QIU1\",\"9C44\":\"ZHUAN1 TUAN2\",\"9C45\":\"YONG2 YONG1\",\"9C46\":\"ZHANG1\",\"9C47\":\"KANG1\",\"9C48\":\"XUE3\",\"9C49\":\"BIE1\",\"9C4A\":\"JUE2 YU4\",\"9C4B\":\"QU1\",\"9C4C\":\"XIANG4\",\"9C4D\":\"BO1\",\"9C4E\":\"JIAO3\",\"9C4F\":\"XUN2\",\"9C50\":\"SU4\",\"9C51\":\"HUANG2\",\"9C52\":\"ZUN4 ZUN1\",\"9C53\":\"SHAN4 TUO2\",\"9C54\":\"SHAN4\",\"9C55\":\"FAN1\",\"9C56\":\"GUI4 JUE2\",\"9C57\":\"LIN2\",\"9C58\":\"XUN2\",\"9C59\":\"MIAO2\",\"9C5A\":\"XI3\",\"9C5D\":\"FEN4\",\"9C5E\":\"GUAN1\",\"9C5F\":\"HOU4\",\"9C60\":\"KUAI4\",\"9C61\":\"ZEI2\",\"9C62\":\"SAO1\",\"9C63\":\"ZHAN1 SHAN4\",\"9C64\":\"GAN3\",\"9C65\":\"GUI4\",\"9C66\":\"SHENG2\",\"9C67\":\"LI3\",\"9C68\":\"CHANG2\",\"9C6C\":\"RU2\",\"9C6D\":\"JI4\",\"9C6E\":\"XU4\",\"9C6F\":\"HUO4 HU4\",\"9C71\":\"LI4\",\"9C72\":\"LIE4\",\"9C73\":\"LI4\",\"9C74\":\"MIE4\",\"9C75\":\"ZHEN1\",\"9C76\":\"XIANG3\",\"9C77\":\"E4\",\"9C78\":\"LU2\",\"9C79\":\"GUAN4\",\"9C7A\":\"LI2 LI3\",\"9C7B\":\"XIAN1\",\"9C7C\":\"YU2\",\"9C7D\":\"DAO1\",\"9C7E\":\"JI3\",\"9C7F\":\"YOU2\",\"9C80\":\"TUN2\",\"9C81\":\"LU3\",\"9C82\":\"FANG2\",\"9C83\":\"BA1 BA4\",\"9C84\":\"HE2\",\"9C85\":\"BO1 BA4\",\"9C86\":\"PING2\",\"9C87\":\"NIAN2\",\"9C88\":\"LU2\",\"9C89\":\"YOU2\",\"9C8A\":\"ZHA3 ZHA4\",\"9C8B\":\"FU4\",\"9C8C\":\"BO2 BA4\",\"9C8D\":\"BAO4\",\"9C8E\":\"HOU4\",\"9C8F\":\"PI1 PI2 JU4\",\"9C90\":\"TAI2\",\"9C91\":\"GUI1 WA1 XIE2\",\"9C92\":\"JIE2\",\"9C93\":\"KAO3 KAO4\",\"9C94\":\"WEI3\",\"9C95\":\"ER2\",\"9C96\":\"TONG2 ZHOU4\",\"9C97\":\"ZE2\",\"9C98\":\"HOU4\",\"9C99\":\"KUAI4\",\"9C9A\":\"JI4\",\"9C9B\":\"JIAO3 JIAO1\",\"9C9C\":\"XIAN1 XIAN3 XIAN4\",\"9C9D\":\"ZA3\",\"9C9E\":\"XIANG3\",\"9C9F\":\"XUN2\",\"9CA0\":\"GENG3\",\"9CA1\":\"LI2\",\"9CA2\":\"LIAN2\",\"9CA3\":\"JIAN1\",\"9CA4\":\"LI3\",\"9CA5\":\"SHI2\",\"9CA6\":\"TIAO2\",\"9CA7\":\"GUN3\",\"9CA8\":\"SHA1\",\"9CA9\":\"WAN3 HUAN4\",\"9CAA\":\"JUN1\",\"9CAB\":\"JI4\",\"9CAC\":\"YONG3\",\"9CAD\":\"QING1 ZHENG1\",\"9CAE\":\"LING2\",\"9CAF\":\"QI2\",\"9CB0\":\"ZOU1\",\"9CB1\":\"FEI1\",\"9CB2\":\"KUN1\",\"9CB3\":\"CHANG1\",\"9CB4\":\"GU4\",\"9CB5\":\"NI2\",\"9CB6\":\"NIAN2\",\"9CB7\":\"DIAO1\",\"9CB8\":\"JING1 QING2\",\"9CB9\":\"SHEN1\",\"9CBA\":\"SHI1\",\"9CBB\":\"ZI1\",\"9CBC\":\"FEN4\",\"9CBD\":\"DIE2\",\"9CBE\":\"BI4 BI1\",\"9CBF\":\"CHANG2\",\"9CC0\":\"SHI4 TI2\",\"9CC1\":\"WEN1\",\"9CC2\":\"WEI1\",\"9CC3\":\"SAI1 XI3\",\"9CC4\":\"E4\",\"9CC5\":\"QIU1\",\"9CC6\":\"FU4\",\"9CC7\":\"HUANG2\",\"9CC8\":\"QUAN2\",\"9CC9\":\"JIANG1\",\"9CCA\":\"BIAN1\",\"9CCB\":\"SAO1\",\"9CCC\":\"AO2\",\"9CCD\":\"QI2\",\"9CCE\":\"TA4 TA3 DIE2\",\"9CCF\":\"YIN2 GUAN1\",\"9CD0\":\"YAO2\",\"9CD1\":\"FANG2 PANG2\",\"9CD2\":\"JIAN1\",\"9CD3\":\"LE4\",\"9CD4\":\"BIAO4\",\"9CD5\":\"XUE3\",\"9CD6\":\"BIE1\",\"9CD7\":\"MAN2\",\"9CD8\":\"MIN3\",\"9CD9\":\"YONG2 YONG1\",\"9CDA\":\"WEI4\",\"9CDB\":\"XI2\",\"9CDC\":\"JUE2 GUI4\",\"9CDD\":\"SHAN4\",\"9CDE\":\"LIN2\",\"9CDF\":\"ZUN4 ZUN1\",\"9CE0\":\"HUO4 HU4\",\"9CE1\":\"GAN3\",\"9CE2\":\"LI3\",\"9CE3\":\"ZHAN1 SHAN4\",\"9CE4\":\"GUAN3\",\"9CE5\":\"NIAO3 DIAO3 DAO3 QUE4\",\"9CE6\":\"YI3 YI4\",\"9CE7\":\"FU2\",\"9CE8\":\"LI4\",\"9CE9\":\"JIU1 QIU2 ZHI4\",\"9CEA\":\"BU3\",\"9CEB\":\"YAN4\",\"9CEC\":\"FU2\",\"9CED\":\"DIAO1 ZHAO1\",\"9CEE\":\"JI1\",\"9CEF\":\"FENG4\",\"9CF1\":\"GAN1 HAN4\",\"9CF2\":\"SHI1\",\"9CF3\":\"FENG4\",\"9CF4\":\"MING2\",\"9CF5\":\"BAO3\",\"9CF6\":\"YUAN1\",\"9CF7\":\"ZHI1\",\"9CF8\":\"HU4\",\"9CF9\":\"QIN2\",\"9CFA\":\"FU1\",\"9CFB\":\"FEN1\",\"9CFC\":\"WEN2\",\"9CFD\":\"JIAN1\",\"9CFE\":\"SHI1\",\"9CFF\":\"YU4\",\"9D00\":\"FOU3 FOU2\",\"9D01\":\"YAO1 AO3\",\"9D02\":\"JUE4 JUE2\",\"9D03\":\"JUE2\",\"9D04\":\"PI1\",\"9D05\":\"HUAN1\",\"9D06\":\"ZHEN4\",\"9D07\":\"BAO3\",\"9D08\":\"YAN4\",\"9D09\":\"YA1 YA3\",\"9D0A\":\"ZHENG4\",\"9D0B\":\"FANG1\",\"9D0C\":\"FENG4\",\"9D0D\":\"WEN2\",\"9D0E\":\"OU1\",\"9D0F\":\"TE4\",\"9D10\":\"JIA1\",\"9D11\":\"NU2\",\"9D12\":\"LING2\",\"9D13\":\"MIE4\",\"9D14\":\"FU2\",\"9D15\":\"TUO2\",\"9D16\":\"WEN2\",\"9D17\":\"LI4\",\"9D18\":\"BIAN4\",\"9D19\":\"ZHI4\",\"9D1A\":\"GE1 JIA1\",\"9D1B\":\"YUAN1\",\"9D1C\":\"ZI1\",\"9D1D\":\"QU2 GOU1 GOU4\",\"9D1E\":\"XIAO1\",\"9D1F\":\"CHI1 ZHI1\",\"9D20\":\"DAN4\",\"9D21\":\"JU1\",\"9D22\":\"YOU4\",\"9D23\":\"GU1\",\"9D24\":\"ZHONG1\",\"9D25\":\"YU4\",\"9D26\":\"YANG1\",\"9D27\":\"RONG4\",\"9D28\":\"YA1\",\"9D29\":\"TIE3 HU2\",\"9D2A\":\"YU4\",\"9D2C\":\"YING1\",\"9D2D\":\"ZHUI1\",\"9D2E\":\"WU1\",\"9D2F\":\"ER2\",\"9D30\":\"GUA1\",\"9D31\":\"AI4\",\"9D32\":\"ZHI1\",\"9D33\":\"YAN4\",\"9D34\":\"HENG2 HANG2\",\"9D35\":\"JIAO1\",\"9D36\":\"JI2\",\"9D37\":\"LIE4\",\"9D38\":\"ZHU1\",\"9D39\":\"REN2\",\"9D3A\":\"YI2\",\"9D3B\":\"HONG2 HONG4\",\"9D3C\":\"LUO4\",\"9D3D\":\"RU2\",\"9D3E\":\"MOU2\",\"9D3F\":\"GE1\",\"9D40\":\"REN4 REN2\",\"9D41\":\"JIAO1\",\"9D42\":\"XIU1\",\"9D43\":\"ZHOU1 ZHAO1\",\"9D44\":\"ZHI1 CHI1\",\"9D45\":\"LUO4\",\"9D49\":\"LUAN2\",\"9D4A\":\"JIA2\",\"9D4B\":\"JI4\",\"9D4C\":\"YU2 TU2\",\"9D4D\":\"HUAN1\",\"9D4E\":\"TUO3\",\"9D4F\":\"BU1 BU3\",\"9D50\":\"WU2\",\"9D51\":\"JUAN1\",\"9D52\":\"YU4\",\"9D53\":\"BO2\",\"9D54\":\"XUN4 JUN4\",\"9D55\":\"XUN4\",\"9D56\":\"BI4 BI1\",\"9D57\":\"XI1\",\"9D58\":\"JUN4\",\"9D59\":\"JU2\",\"9D5A\":\"TU2\",\"9D5B\":\"JING1\",\"9D5C\":\"TI2 TI1\",\"9D5D\":\"E2\",\"9D5E\":\"E2\",\"9D5F\":\"KUANG2\",\"9D60\":\"HU2 GU3 HE4\",\"9D61\":\"WU3\",\"9D62\":\"SHEN1\",\"9D63\":\"LAI4 CHI4\",\"9D66\":\"LU4\",\"9D67\":\"PING2 BING4\",\"9D68\":\"SHU1\",\"9D69\":\"FU2\",\"9D6A\":\"AN1 YAN4 YA1\",\"9D6B\":\"ZHAO4\",\"9D6C\":\"PENG2 FENG4\",\"9D6D\":\"QIN2\",\"9D6E\":\"QIAN1\",\"9D6F\":\"BEI1\",\"9D70\":\"DIAO1\",\"9D71\":\"LU4\",\"9D72\":\"QUE4\",\"9D73\":\"JIAN1\",\"9D74\":\"JU2\",\"9D75\":\"TU4\",\"9D76\":\"YA1\",\"9D77\":\"YUAN1\",\"9D78\":\"QI2\",\"9D79\":\"LI2\",\"9D7A\":\"YE4\",\"9D7B\":\"ZHUI1\",\"9D7C\":\"KONG1\",\"9D7D\":\"ZHUI4 DUO4 ZHUA1\",\"9D7E\":\"KUN1\",\"9D7F\":\"SHENG1\",\"9D80\":\"QI2\",\"9D81\":\"JING1\",\"9D82\":\"YI4\",\"9D83\":\"YI4\",\"9D84\":\"JING1\",\"9D85\":\"ZI1\",\"9D86\":\"LAI2\",\"9D87\":\"DONG1\",\"9D88\":\"QI1\",\"9D89\":\"CHUN2 TUAN2\",\"9D8A\":\"GENG1\",\"9D8B\":\"JU1\",\"9D8C\":\"QU1 JU1\",\"9D8F\":\"JI1\",\"9D90\":\"SHU4\",\"9D92\":\"CHI4\",\"9D93\":\"MIAO2\",\"9D94\":\"ROU2\",\"9D95\":\"AN1 YA1\",\"9D96\":\"QIU1\",\"9D97\":\"TI2\",\"9D98\":\"HU2\",\"9D99\":\"TI2\",\"9D9A\":\"E4\",\"9D9B\":\"JIE1\",\"9D9C\":\"MAO2\",\"9D9D\":\"FU2\",\"9D9E\":\"CHUN1\",\"9D9F\":\"TU2\",\"9DA0\":\"YAN3\",\"9DA1\":\"HE2 JIE4\",\"9DA2\":\"YUAN2\",\"9DA3\":\"PIAN1\",\"9DA4\":\"YUN4 KUN1\",\"9DA5\":\"MEI2\",\"9DA6\":\"HU2\",\"9DA7\":\"YING1\",\"9DA8\":\"DUN4\",\"9DA9\":\"WU4 MU4\",\"9DAA\":\"JU2\",\"9DAC\":\"CANG1 QIANG1\",\"9DAD\":\"FANG3\",\"9DAE\":\"GU4\",\"9DAF\":\"YING1\",\"9DB0\":\"YUAN2\",\"9DB1\":\"XUAN1 XIAN1\",\"9DB2\":\"WENG1\",\"9DB3\":\"SHI1\",\"9DB4\":\"HE4\",\"9DB5\":\"CHU2\",\"9DB6\":\"TANG2\",\"9DB7\":\"XIA4\",\"9DB8\":\"RUO4\",\"9DB9\":\"LIU2\",\"9DBA\":\"JI2\",\"9DBB\":\"GU2 HU2 GU3\",\"9DBC\":\"JIAN1 QIAN1\",\"9DBD\":\"ZHUN3 SUN3\",\"9DBE\":\"HAN4\",\"9DBF\":\"ZI1 CI2\",\"9DC0\":\"ZI1 CI2\",\"9DC1\":\"NI4 YI4\",\"9DC2\":\"YAO4 YAO2\",\"9DC3\":\"YAN4\",\"9DC4\":\"JI1\",\"9DC5\":\"LI4\",\"9DC6\":\"TIAN2 ZHEN1\",\"9DC7\":\"KOU4 GOU4\",\"9DC8\":\"TI1\",\"9DC9\":\"TI1\",\"9DCA\":\"NI4 YI4\",\"9DCB\":\"TU2\",\"9DCC\":\"MA3\",\"9DCD\":\"JIAO1\",\"9DCE\":\"GAO1\",\"9DCF\":\"TIAN2 ZHEN1\",\"9DD0\":\"CHEN2\",\"9DD1\":\"LI4\",\"9DD2\":\"ZHUAN1\",\"9DD3\":\"ZHE4\",\"9DD4\":\"AO2\",\"9DD5\":\"YAO3 WEI3\",\"9DD6\":\"YI1\",\"9DD7\":\"OU1\",\"9DD8\":\"CHI4\",\"9DD9\":\"ZHI4 ZHE2\",\"9DDA\":\"LIAO2 LIU4\",\"9DDB\":\"RONG2 YONG2\",\"9DDC\":\"LOU2\",\"9DDD\":\"BI4\",\"9DDE\":\"SHUANG1\",\"9DDF\":\"ZHUO2\",\"9DE0\":\"YU2\",\"9DE1\":\"WU2\",\"9DE2\":\"JUE2\",\"9DE3\":\"YIN2\",\"9DE4\":\"QUAN2 TI2\",\"9DE5\":\"SI1\",\"9DE6\":\"JIAO1\",\"9DE7\":\"YI4\",\"9DE8\":\"HUA1\",\"9DE9\":\"BI4 BIE1 CHANG3\",\"9DEA\":\"YING1\",\"9DEB\":\"SU4\",\"9DEC\":\"HUANG2\",\"9DED\":\"FAN2\",\"9DEE\":\"JIAO1\",\"9DEF\":\"LIAO2\",\"9DF0\":\"YAN4 YAN1\",\"9DF1\":\"KAO1\",\"9DF2\":\"JIU4\",\"9DF3\":\"XIAN2\",\"9DF4\":\"XIAN2\",\"9DF5\":\"TU2\",\"9DF6\":\"MAI3\",\"9DF7\":\"ZUN1\",\"9DF8\":\"YU4 SHU4\",\"9DF9\":\"YING1\",\"9DFA\":\"LU4\",\"9DFB\":\"TUAN2\",\"9DFC\":\"XIAN2\",\"9DFD\":\"XUE2\",\"9DFE\":\"YI4\",\"9DFF\":\"PI4\",\"9E00\":\"SHU2 SHU3 ZHU2 ZHUO2\",\"9E01\":\"LUO2\",\"9E02\":\"QI1 XI1\",\"9E03\":\"YI2\",\"9E04\":\"JI2\",\"9E05\":\"ZHE2\",\"9E06\":\"YU2\",\"9E07\":\"ZHAN1\",\"9E08\":\"YE4\",\"9E09\":\"YANG2\",\"9E0A\":\"PI4 BI4\",\"9E0B\":\"NING2\",\"9E0C\":\"HUO4 HU4\",\"9E0D\":\"MI2\",\"9E0E\":\"YING1\",\"9E0F\":\"MENG2\",\"9E10\":\"DI2\",\"9E11\":\"YUE4\",\"9E12\":\"YU2 YU4\",\"9E13\":\"LEI3\",\"9E14\":\"BAO4\",\"9E15\":\"LU2\",\"9E16\":\"HE4\",\"9E17\":\"LONG2\",\"9E18\":\"SHUANG1\",\"9E19\":\"YUE4\",\"9E1A\":\"YING1\",\"9E1B\":\"GUAN4 HUAN1 QUAN2\",\"9E1C\":\"QU2\",\"9E1D\":\"LI2\",\"9E1E\":\"LUAN2\",\"9E1F\":\"NIAO3 DIAO3\",\"9E20\":\"JIU1\",\"9E21\":\"JI1\",\"9E22\":\"YUAN1\",\"9E23\":\"MING2\",\"9E24\":\"SHI1\",\"9E25\":\"OU1\",\"9E26\":\"YA1\",\"9E27\":\"CANG1 QIANG1\",\"9E28\":\"BAO3\",\"9E29\":\"ZHEN4\",\"9E2A\":\"GU1\",\"9E2B\":\"DONG1\",\"9E2C\":\"LU2\",\"9E2D\":\"YA1\",\"9E2E\":\"XIAO1\",\"9E2F\":\"YANG1\",\"9E30\":\"LING2\",\"9E31\":\"ZHI1\",\"9E32\":\"QU2\",\"9E33\":\"YUAN1\",\"9E34\":\"XUE2\",\"9E35\":\"TUO2\",\"9E36\":\"SI1\",\"9E37\":\"ZHI4\",\"9E38\":\"ER2\",\"9E39\":\"GUA1\",\"9E3A\":\"XIU1\",\"9E3B\":\"HENG2 HANG2\",\"9E3C\":\"ZHOU1 ZHAO1\",\"9E3D\":\"GE1\",\"9E3E\":\"LUAN2\",\"9E3F\":\"HONG2\",\"9E40\":\"WU2\",\"9E41\":\"BO2\",\"9E42\":\"LI2\",\"9E43\":\"JUAN1\",\"9E44\":\"HU2 GU3\",\"9E45\":\"E2\",\"9E46\":\"YU4\",\"9E47\":\"XIAN2\",\"9E48\":\"TI2\",\"9E49\":\"WU3\",\"9E4A\":\"QUE4\",\"9E4B\":\"MIAO2\",\"9E4C\":\"AN1 YAN4\",\"9E4D\":\"KUN1\",\"9E4E\":\"BEI1\",\"9E4F\":\"PENG2\",\"9E50\":\"QIAN1\",\"9E51\":\"CHUN2 TUAN2\",\"9E52\":\"GENG1\",\"9E53\":\"YUAN1\",\"9E54\":\"SU4\",\"9E55\":\"HU2\",\"9E56\":\"HE2 JIE4\",\"9E57\":\"E4\",\"9E58\":\"GU2 HU2\",\"9E59\":\"QIU1\",\"9E5A\":\"ZI1 CI2\",\"9E5B\":\"MEI2\",\"9E5C\":\"MU4\",\"9E5D\":\"NI4 YI4\",\"9E5E\":\"YAO4 YAO2\",\"9E5F\":\"WENG1\",\"9E60\":\"LIU2\",\"9E61\":\"JI2\",\"9E62\":\"NI4 YI4\",\"9E63\":\"JIAN1\",\"9E64\":\"HE4\",\"9E65\":\"YI1\",\"9E66\":\"YING1\",\"9E67\":\"ZHE4\",\"9E68\":\"LIAO2\",\"9E69\":\"LIAO2\",\"9E6A\":\"JIAO1\",\"9E6B\":\"JIU4\",\"9E6C\":\"YU4\",\"9E6D\":\"LU4\",\"9E6E\":\"XUAN2\",\"9E6F\":\"ZHAN1\",\"9E70\":\"YING1\",\"9E71\":\"HUO4 HU4\",\"9E72\":\"MENG2\",\"9E73\":\"GUAN4\",\"9E74\":\"SHUANG1\",\"9E75\":\"LU3\",\"9E76\":\"JIN1\",\"9E77\":\"LING2\",\"9E78\":\"JIAN3\",\"9E79\":\"XIAN2\",\"9E7A\":\"CUO2\",\"9E7B\":\"JIAN3\",\"9E7C\":\"JIAN3\",\"9E7D\":\"YAN2 YAN4\",\"9E7E\":\"CUO2\",\"9E7F\":\"LU4 LV2\",\"9E80\":\"YOU1\",\"9E81\":\"CU1\",\"9E82\":\"JI3\",\"9E83\":\"BIAO1 PAO2 PIAO3\",\"9E84\":\"CU1\",\"9E85\":\"BIAO1 PAO2\",\"9E86\":\"ZHU4 CHU2\",\"9E87\":\"JUN1 KUN3 QUN2\",\"9E88\":\"ZHU3\",\"9E89\":\"JIAN1\",\"9E8A\":\"MI2\",\"9E8B\":\"MI2\",\"9E8C\":\"WU2 YU3\",\"9E8D\":\"LIU2\",\"9E8E\":\"CHEN2\",\"9E8F\":\"JUN1\",\"9E90\":\"LIN2\",\"9E91\":\"NI2 MI2\",\"9E92\":\"QI2\",\"9E93\":\"LU4\",\"9E94\":\"JIU4\",\"9E95\":\"JUN1 QUN2\",\"9E96\":\"JING1\",\"9E97\":\"LI4 LI2\",\"9E98\":\"XIANG1\",\"9E99\":\"YAN2\",\"9E9A\":\"JIA1\",\"9E9B\":\"MI2\",\"9E9C\":\"LI4\",\"9E9D\":\"SHE4\",\"9E9E\":\"ZHANG1\",\"9E9F\":\"LIN2\",\"9EA0\":\"JING1\",\"9EA1\":\"JI1\",\"9EA2\":\"LING2\",\"9EA3\":\"YAN2\",\"9EA4\":\"CU1\",\"9EA5\":\"MAI4\",\"9EA6\":\"MAI4\",\"9EA7\":\"GE1 HE2\",\"9EA8\":\"CHAO3\",\"9EA9\":\"FU1\",\"9EAA\":\"MIAN3 MIAN4\",\"9EAB\":\"MIAN3 MIAN4\",\"9EAC\":\"FU1\",\"9EAD\":\"PAO4\",\"9EAE\":\"QU4\",\"9EAF\":\"QU2 QU1\",\"9EB0\":\"MOU2\",\"9EB1\":\"FU1\",\"9EB2\":\"XIAN4\",\"9EB3\":\"LAI2\",\"9EB4\":\"QU2 QU1\",\"9EB5\":\"MIAN4\",\"9EB7\":\"FENG1\",\"9EB8\":\"FU1\",\"9EB9\":\"QU2\",\"9EBA\":\"MIAN4\",\"9EBB\":\"MA2 MA1\",\"9EBC\":\"ME5 MO5 MO3 MA5\",\"9EBD\":\"MO5 MO3 MA5 ME5\",\"9EBE\":\"HUI1\",\"9EC0\":\"ZOU1\",\"9EC1\":\"NEN1 NUN2\",\"9EC2\":\"FEN2\",\"9EC3\":\"HUANG2\",\"9EC4\":\"HUANG2\",\"9EC5\":\"JIN1\",\"9EC6\":\"GUANG1\",\"9EC7\":\"TIAN1\",\"9EC8\":\"TOU3\",\"9EC9\":\"HENG2 HONG2\",\"9ECA\":\"XI1\",\"9ECB\":\"KUANG3 KUANG4\",\"9ECC\":\"HENG2 HONG2\",\"9ECD\":\"SHU3\",\"9ECE\":\"LI2\",\"9ECF\":\"NIAN2 NIAN1 ZHAN1\",\"9ED0\":\"CHI1 LI2\",\"9ED1\":\"HEI1 HE4\",\"9ED2\":\"HEI1\",\"9ED3\":\"YI4\",\"9ED4\":\"QIAN2\",\"9ED5\":\"DAN1 DAN3\",\"9ED6\":\"XI4\",\"9ED7\":\"TUAN3\",\"9ED8\":\"MO4\",\"9ED9\":\"MO4\",\"9EDA\":\"QIAN2\",\"9EDB\":\"DAI4\",\"9EDC\":\"CHU4\",\"9EDD\":\"YOU3 YI1\",\"9EDE\":\"DIAN3 ZHAN1 DUO4\",\"9EDF\":\"YI1\",\"9EE0\":\"XIA2\",\"9EE1\":\"YAN3\",\"9EE2\":\"QU1 QU4\",\"9EE3\":\"MEI3\",\"9EE4\":\"YAN3\",\"9EE5\":\"QING2 JING1\",\"9EE6\":\"YU4 YUE4\",\"9EE7\":\"LI2 LAI2\",\"9EE8\":\"DANG3 ZHANG3\",\"9EE9\":\"DU2\",\"9EEA\":\"CAN3\",\"9EEB\":\"YIN1 YAN1\",\"9EEC\":\"AN4\",\"9EED\":\"YAN1 YAN3\",\"9EEE\":\"TAN3 DAN3 SHEN4 DAN4\",\"9EEF\":\"AN4 AN1\",\"9EF0\":\"ZHEN3\",\"9EF1\":\"DAI4\",\"9EF2\":\"CAN3\",\"9EF3\":\"YI1\",\"9EF4\":\"MEI2\",\"9EF5\":\"DAN3\",\"9EF6\":\"YAN3\",\"9EF7\":\"DU2\",\"9EF8\":\"LU2\",\"9EF9\":\"ZHI3 XIAN4\",\"9EFA\":\"FEN3\",\"9EFB\":\"FU2 FU4\",\"9EFC\":\"FU3\",\"9EFD\":\"MIN3 MENG2 MENG3 MIAN3\",\"9EFE\":\"MIN3 MENG2 MENG3 MIAN3\",\"9EFF\":\"YUAN2\",\"9F00\":\"CU4\",\"9F01\":\"QU4\",\"9F02\":\"CHAO2 ZHAO1\",\"9F03\":\"WA1\",\"9F04\":\"ZHU1\",\"9F05\":\"ZHI1\",\"9F06\":\"MANG2 MENG3\",\"9F07\":\"AO2\",\"9F08\":\"BIE1\",\"9F09\":\"TUO2\",\"9F0A\":\"BI4\",\"9F0B\":\"YUAN2\",\"9F0C\":\"CHAO2 ZHAO1\",\"9F0D\":\"TUO2\",\"9F0E\":\"DING3 ZHEN1\",\"9F0F\":\"MI4\",\"9F10\":\"NAI4\",\"9F11\":\"DING3 ZHEN1\",\"9F12\":\"ZI1\",\"9F13\":\"GU3\",\"9F14\":\"GU3\",\"9F15\":\"DONG1 TONG2\",\"9F16\":\"FEN2\",\"9F17\":\"TAO2\",\"9F18\":\"YUAN1\",\"9F19\":\"PI2\",\"9F1A\":\"CHANG1\",\"9F1B\":\"GAO1\",\"9F1C\":\"QI4\",\"9F1D\":\"YUAN1\",\"9F1E\":\"TANG1\",\"9F1F\":\"TENG1\",\"9F20\":\"SHU3\",\"9F21\":\"SHU3\",\"9F22\":\"FEN2\",\"9F23\":\"FEI4\",\"9F24\":\"WEN2\",\"9F25\":\"BA2\",\"9F26\":\"DIAO1\",\"9F27\":\"TUO2\",\"9F28\":\"TONG2 ZHONG1\",\"9F29\":\"QU2\",\"9F2A\":\"SHENG1\",\"9F2B\":\"SHI2\",\"9F2C\":\"YOU4\",\"9F2D\":\"SHI2\",\"9F2E\":\"TING2\",\"9F2F\":\"WU2\",\"9F30\":\"NIAN4\",\"9F31\":\"JING1\",\"9F32\":\"HUN2\",\"9F33\":\"JU2\",\"9F34\":\"YAN3\",\"9F35\":\"TU2 TU1\",\"9F36\":\"TI2 SI1\",\"9F37\":\"XI1 XI2\",\"9F38\":\"XIAN3\",\"9F39\":\"YAN3\",\"9F3A\":\"LEI2\",\"9F3B\":\"BI2\",\"9F3C\":\"YAO3\",\"9F3D\":\"QIU2\",\"9F3E\":\"HAN1\",\"9F3F\":\"WU1\",\"9F40\":\"WU4\",\"9F41\":\"HOU1 HOU2\",\"9F42\":\"XI4\",\"9F43\":\"GE2 E4\",\"9F44\":\"ZHA1\",\"9F45\":\"XIU4\",\"9F46\":\"WENG4\",\"9F47\":\"ZHA1\",\"9F48\":\"NONG2\",\"9F49\":\"NANG4\",\"9F4A\":\"QI2 JI1 JI4 JIAN3 ZHAI1 ZI1\",\"9F4B\":\"ZHAI1\",\"9F4C\":\"JI4 QI1\",\"9F4D\":\"ZI1\",\"9F4E\":\"JI1 QI2\",\"9F4F\":\"JI1\",\"9F50\":\"QI2 JI1 JI4 JIAN3 ZHAI1 ZI1\",\"9F51\":\"JI1\",\"9F52\":\"CHI3\",\"9F53\":\"CHEN4\",\"9F54\":\"CHEN4\",\"9F55\":\"HE2\",\"9F56\":\"YA2\",\"9F57\":\"KEN3 YIN2\",\"9F58\":\"XIE4\",\"9F59\":\"PAO2\",\"9F5A\":\"CUO4 ZE2\",\"9F5B\":\"SHI4\",\"9F5C\":\"ZI1 CHAI2\",\"9F5D\":\"CHI1\",\"9F5E\":\"NIAN4 YAN4\",\"9F5F\":\"JU3 ZHA1\",\"9F60\":\"TIAO2\",\"9F61\":\"LING2\",\"9F62\":\"LING2\",\"9F63\":\"CHU1\",\"9F64\":\"QUAN2\",\"9F65\":\"XIE4\",\"9F66\":\"KEN3 YIN2 QIAN3\",\"9F67\":\"NIE4\",\"9F68\":\"JIU4\",\"9F69\":\"YAO3 JIAO1 YAO1\",\"9F6A\":\"CHUO4\",\"9F6B\":\"KUN3\",\"9F6C\":\"YU3 WU2\",\"9F6D\":\"CHU3\",\"9F6E\":\"YI3\",\"9F6F\":\"NI2\",\"9F70\":\"CUO4 ZE2\",\"9F71\":\"ZOU1 CHUO4\",\"9F72\":\"QU3\",\"9F73\":\"NEN3 KUN3 YUN3\",\"9F74\":\"XIAN3 YAN3\",\"9F75\":\"OU2 YU2\",\"9F76\":\"E4\",\"9F77\":\"WO4\",\"9F78\":\"YI4\",\"9F79\":\"CHUO1\",\"9F7A\":\"ZOU1\",\"9F7B\":\"DIAN1\",\"9F7C\":\"CHU3\",\"9F7D\":\"JIN4\",\"9F7E\":\"YA4\",\"9F7F\":\"CHI3\",\"9F80\":\"CHEN4\",\"9F81\":\"HE2\",\"9F82\":\"KEN3 YIN2\",\"9F83\":\"JU3\",\"9F84\":\"LING2\",\"9F85\":\"PAO2\",\"9F86\":\"TIAO2\",\"9F87\":\"ZI1\",\"9F88\":\"KEN3 YIN2\",\"9F89\":\"YU3\",\"9F8A\":\"CHUO4\",\"9F8B\":\"QU3\",\"9F8C\":\"WO4\",\"9F8D\":\"LONG2 LONG3 MANG2\",\"9F8E\":\"PANG2\",\"9F8F\":\"GONG1\",\"9F90\":\"PANG2\",\"9F91\":\"YAN3\",\"9F92\":\"LONG2\",\"9F93\":\"LONG2\",\"9F94\":\"GONG1\",\"9F95\":\"KAN1 KE4\",\"9F96\":\"TA4\",\"9F97\":\"LING2\",\"9F98\":\"TA4\",\"9F99\":\"LONG2 LONG3 MANG2\",\"9F9A\":\"GONG1\",\"9F9B\":\"KAN1\",\"9F9C\":\"GUI1 JUN1 QIU1\",\"9F9D\":\"QIU1\",\"9F9E\":\"BIE1\",\"9F9F\":\"GUI1 JUN1 QIU1\",\"9FA0\":\"YUE4\",\"9FA1\":\"CHUI4\",\"9FA2\":\"HE2 HE4 HUO4\",\"9FA3\":\"JUE2\",\"9FA4\":\"XIE2\",\"9FA5\":\"YU4\",\"F90E\":\"LA4\",\"FA0C\":\"WU4\",\"FA0D\":\"HUO4\",\"FA10\":\"ZHONG3\",\"FA12\":\"QING2\",\"FA15\":\"XI1\",\"FA16\":\"ZHU1\",\"FA17\":\"YI4\",\"FA18\":\"LI3\",\"FA19\":\"SHEN2\",\"FA1A\":\"XIANG2\",\"FA1B\":\"FU2\",\"FA1C\":\"JING4\",\"FA1D\":\"JING1\",\"FA1E\":\"YU3\",\"FA22\":\"ZHU1\",\"FA25\":\"YI4\",\"FA26\":\"DU1 DOU1\",\"FA2A\":\"FAN4\",\"FA2B\":\"SI4\",\"FA2C\":\"GUAN3\",\"FA2D\":\"HE4\",\"2000D\":\"SHI4\",\"200A2\":\"PAI4\",\"200A4\":\"DUI1\",\"2018C\":\"YONG1\",\"202A7\":\"BING4\",\"2053B\":\"ZHENG4\",\"205A5\":\"CHONG3\",\"205E6\":\"PING2\",\"206B9\":\"SHAN1\",\"206BA\":\"SHA4\",\"2070E\":\"XIAN4\",\"2073C\":\"QIA1\",\"207B0\":\"JIAO3\",\"208A4\":\"JUE4\",\"209E9\":\"HUI3\",\"20A7A\":\"LI2\",\"20B1B\":\"MO4\",\"20B36\":\"JIN4\",\"20B74\":\"ZHUO1\",\"20CBF\":\"SHU4\",\"20F3B\":\"JI1\",\"210D6\":\"LE1\",\"2145E\":\"SUI4 ZHUI4\",\"215D7\":\"PENG3\",\"217BE\":\"NEN4\",\"21A04\":\"XIA3\",\"21BA6\":\"ZAO1\",\"21C46\":\"SHU3\",\"21C95\":\"TI4\",\"21F71\":\"JIE4\",\"21FFA\":\"NAO3\",\"2214F\":\"LIAN2\",\"2219E\":\"JIAN3\",\"223F3\":\"BENG1\",\"2272B\":\"XING1\",\"2272C\":\"DUO4\",\"2295E\":\"CHONG1\",\"2298F\":\"ZAI1\",\"22B46\":\"CHOU1\",\"22CB7\":\"SOU1\",\"22D91\":\"NIAO3\",\"22DA3\":\"DIE2\",\"22E23\":\"NIAO3\",\"233B4\":\"DUN3\",\"23AA0\":\"JI1 JI4 QI4\",\"2418D\":\"CHI4\",\"241FE\":\"YING4\",\"243B1\":\"ZUAN3\",\"243F2\":\"ZHOU4\",\"2456D\":\"JIANG1 JIANG4 QIANG1\",\"2456F\":\"JIANG1\",\"2486E\":\"RAN2\",\"248AA\":\"LIE4\",\"24BAD\":\"CHAN4\",\"24E93\":\"BIE1\",\"2521F\":\"SOU3\",\"252CC\":\"SA2\",\"252DF\":\"XI1\",\"2546A\":\"NAO2\",\"254FF\":\"TUO2\",\"2570C\":\"AO3\",\"2579B\":\"DUO4\",\"25A72\":\"HAI4\",\"25B2F\":\"KAO3 KAO4\",\"267A3\":\"SAO1 SAO4\",\"267E4\":\"XIU1\",\"2690E\":\"GAO1\",\"2696F\":\"XUE2\",\"269C5\":\"WENG4\",\"26A88\":\"AO2\",\"26C56\":\"FU4\",\"26DB2\":\"KOU4\",\"26DDD\":\"CHU2\",\"272CD\":\"ZHE2\",\"27C0A\":\"TIAN2\",\"27D2A\":\"SUO3\",\"27D73\":\"SHE2\",\"27E16\":\"ZHUAN4\",\"27F2E\":\"TANG1\",\"27F78\":\"JUE2\",\"282EF\":\"ZHUAI3\",\"288A5\":\"MI2\",\"28E1A\":\"JI2\",\"28E2C\":\"ZHEN4\",\"28EB9\":\"JIAO1\",\"28EF2\":\"XIA4\",\"292D8\":\"XIE2 WA1\",\"292E7\":\"XIE2 KAI4\",\"2956D\":\"GAI4\",\"29A2D\":\"QUE1\",\"29A97\":\"JUE2\",\"29E28\":\"YI2\",\"29F08\":\"AO4 YOU3\",\"2A0CF\":\"MEI2\",\"2A0FF\":\"GE1\",\"2A378\":\"QU2\",\"2A3D9\":\"HUANG2\",\"2A502\":\"DING3\",\"2A599\":\"HOU1\"}");

/***/ }),
/* 10 */
/***/ (function(module) {

module.exports = JSON.parse("{\"3431\":\"tsyinX\",\"3444\":\"mjuX\",\"3547\":\"lop\",\"3559\":\"tshwin tswinH\",\"3563\":\"ywenX\",\"3583\":\"xuwH xuwX\",\"3687\":\"tsuwng tsuwngH\",\"3694\":\"nrjep\",\"3745\":\"kuwH\",\"3754\":\"ew\",\"3771\":\"mjungH\",\"3795\":\"set\",\"3831\":\"giX\",\"3846\":\"mang xwang\",\"3899\":\"gjion\",\"3904\":\"phajH\",\"3925\":\"hojH\",\"3976\":\"sok\",\"4007\":\"kuX\",\"4020\":\"kjuH\",\"4022\":\"sywinH\",\"4175\":\"kowk tsyak\",\"4185\":\"dzij\",\"4343\":\"yew\",\"4356\":\"bjuw\",\"4439\":\"sjuwk srjuw\",\"4442\":\"yoX\",\"4496\":\"sinH\",\"4569\":\"lawX\",\"4592\":\"xje\",\"4612\":\"tswoj\",\"4633\":\"kim\",\"4793\":\"trhjeng\",\"4813\":\"tshjuwk\",\"4823\":\"sjwenH\",\"4831\":\"drjowk\",\"4836\":\"zyaeH zyek yek\",\"4845\":\"trhwin\",\"4848\":\"kaewk\",\"4885\":\"dzyin zyin\",\"4894\":\"hop\",\"5000\":\"trhaeng trhjang\",\"5005\":\"tshwojH\",\"5009\":\"tshang\",\"5012\":\"tawH tawX\",\"5013\":\"dam damH\",\"5014\":\"gjut\",\"5016\":\"heangX\",\"5017\":\"bong\",\"5018\":\"thang thangX tsyhangX\",\"5019\":\"huwH\",\"5021\":\"tsyhangH\",\"5026\":\"gjwenH\",\"5028\":\"kjoH\",\"5029\":\"tshenH\",\"5032\":\"tuwng\",\"5041\":\"tsyhing\",\"5043\":\"jonX\",\"5044\":\"nwanH\",\"5045\":\"tsyowngH\",\"5047\":\"kaeX kaeX\",\"5048\":\"kjot\",\"5049\":\"hjwiojX\",\"5053\":\"aewk\",\"5055\":\"keaj\",\"5061\":\"dreamX\",\"5065\":\"gjonH\",\"5069\":\"bjuwX\",\"5072\":\"si\",\"5074\":\"tsrik\",\"5075\":\"trhjeng trhjengH trjeng\",\"5076\":\"nguwH nguwX\",\"5077\":\"thuw\",\"5080\":\"kwoj\",\"5081\":\"suwX\",\"5085\":\"bjuH pjuH\",\"5091\":\"gjet\",\"5093\":\"syenH\",\"5099\":\"bijH\",\"5100\":\"ngje\",\"5101\":\"tswinH\",\"5103\":\"dzyen thanX\",\"5104\":\"ik\",\"5106\":\"gjaeng gjaengH kjaengX kjiengX\",\"5107\":\"xjwien\",\"5109\":\"gjemX\",\"5110\":\"pjinH\",\"5111\":\"ngom\",\"5112\":\"nyu\",\"5114\":\"drjuw\",\"5115\":\"dzreaj\",\"5117\":\"ngiX\",\"5120\":\"ljep\",\"5121\":\"lwoj lwojX\",\"5122\":\"ljoX\",\"5125\":\"yuwk\",\"5126\":\"pjew\",\"5132\":\"drjo\",\"5133\":\"dzraem dzreamH dzreamX tsrhaemH\",\"5135\":\"dzyuwk\",\"5137\":\"lejH\",\"5140\":\"ngwot\",\"5141\":\"ywinX\",\"5143\":\"ngjwon\",\"5144\":\"xjwaeng\",\"5145\":\"tsyhuwng\",\"5146\":\"drjewX\",\"5147\":\"xjowng\",\"5148\":\"sen senH\",\"5149\":\"kwang\",\"5152\":\"nye\",\"5153\":\"tsim\",\"5154\":\"thuH\",\"5155\":\"zijX\",\"5157\":\"ywenX\",\"5162\":\"ging king\",\"5165\":\"nyip\",\"5167\":\"nop nwojH\",\"5168\":\"dzjwen\",\"5169\":\"ljangH ljangX\",\"5171\":\"gjowngH\",\"5175\":\"pjaeng\",\"5176\":\"gi ki kiH\",\"5177\":\"gjuH\",\"5178\":\"tenX\",\"5180\":\"kijH\",\"5184\":\"nyemX\",\"5189\":\"nyemX\",\"5191\":\"drjuwH\",\"5192\":\"mawH mok\",\"5193\":\"kuwH\",\"5194\":\"xjuX\",\"5195\":\"mjenX\",\"5198\":\"yim\",\"5200\":\"taw tew\",\"5203\":\"nyinH\",\"5206\":\"pjun bjunH\",\"5207\":\"tshet\",\"5208\":\"ngjojH\",\"5209\":\"kjiojH\",\"5211\":\"heng\",\"5212\":\"hwae\",\"5213\":\"ngwan\",\"5216\":\"ngjwot ngwaet\",\"5217\":\"ljet\",\"5224\":\"phanH\",\"5227\":\"kjaep\",\"5229\":\"lijH\",\"5230\":\"tawH\",\"5232\":\"khwej\",\"5233\":\"khuH\",\"5235\":\"nyiH\",\"5236\":\"tsyejH\",\"5237\":\"srjwet srwaet\",\"5238\":\"khjwonH\",\"5244\":\"kengX\",\"5247\":\"tsok\",\"5249\":\"tshwaH\",\"5254\":\"thek\",\"5255\":\"bjiojH\",\"5256\":\"phuwX\",\"5257\":\"tsrheanX\",\"5261\":\"yemX\",\"5272\":\"kat\",\"5275\":\"tsrhjang tsrhjangH\",\"5278\":\"dwan\",\"5280\":\"kweat\",\"5287\":\"gjaek\",\"5289\":\"ljuw\",\"5291\":\"dzejH tsje\",\"5293\":\"ngijH\",\"5299\":\"lejH lejX\",\"5303\":\"kajH kat\",\"5305\":\"paew\",\"5306\":\"tsrhaewng\",\"5308\":\"xjowng\",\"5310\":\"bjuwk bok\",\"5313\":\"kjuwH\",\"5315\":\"pjijH\",\"5316\":\"xwaeH\",\"5317\":\"pok\",\"5320\":\"dzjangH\",\"5321\":\"khjwang\",\"5323\":\"haep\",\"5327\":\"khep\",\"5330\":\"tan\",\"5331\":\"gwijH\",\"5334\":\"swanX\",\"5335\":\"duwk\",\"5336\":\"gjuwH\",\"5339\":\"phjit\",\"5340\":\"uw khju\",\"5341\":\"dzyip\",\"5342\":\"sinH\",\"5343\":\"tshen\",\"5347\":\"sying\",\"5348\":\"nguX\",\"5349\":\"xjwiojH\",\"5351\":\"pjie\",\"5352\":\"tshwot tswit tswot\",\"5353\":\"traewk\",\"5354\":\"hep\",\"5357\":\"nom\",\"5360\":\"tsyem\",\"5363\":\"yuw yuwX\",\"5366\":\"kweaH\",\"5370\":\"jinH\",\"5371\":\"ngjwe\",\"5372\":\"dzyewX\",\"5373\":\"tsik\",\"5374\":\"khjak\",\"5375\":\"lwaX lwanX\",\"5377\":\"kjwenX gjwen\",\"5378\":\"sjaeH\",\"5379\":\"swot\",\"5382\":\"xanH\",\"5384\":\"eak\",\"5388\":\"tsyhek\",\"5393\":\"ngea kweaH\",\"5396\":\"maewng\",\"5401\":\"xju\",\"5403\":\"kjiot\",\"5404\":\"kak\",\"5408\":\"hop\",\"5409\":\"kjit\",\"5410\":\"thuH thuX\",\"5411\":\"xjangH\",\"5420\":\"bjojH\",\"5421\":\"phjieX\",\"5426\":\"bijX pijX pjuwX\",\"5433\":\"ngu\",\"5436\":\"nrjwet nrwaet nywet\",\"5437\":\"xjwiet xwet\",\"5438\":\"xip\",\"5439\":\"tsyhweH tsyhweH\",\"5442\":\"ljoX\",\"5448\":\"drjeng\",\"5465\":\"nyem\",\"5466\":\"jiw\",\"5468\":\"tsyuw tsyuwX\",\"5471\":\"ku\",\"5473\":\"mjiojH\",\"5474\":\"xju xjuH\",\"5475\":\"xa\",\"5476\":\"nraew\",\"5480\":\"dzjoX\",\"5484\":\"twot\",\"5485\":\"phuwH\",\"5488\":\"bjut\",\"5501\":\"ngjenH\",\"5505\":\"hom\",\"5508\":\"op\",\"5509\":\"oj\",\"5510\":\"dang\",\"5531\":\"tsyhangH\",\"5532\":\"nye\",\"5536\":\"tsjaeH\",\"5541\":\"traew trjuw\",\"5544\":\"traewk tuwk\",\"5546\":\"syang\",\"5550\":\"tshwojH\",\"5556\":\"damH damX\",\"5557\":\"damH damX\",\"5580\":\"khaek\",\"5581\":\"ngjowng ngju nguwX\",\"5584\":\"dzyenX\",\"5588\":\"keaj\",\"5589\":\"huw\",\"5591\":\"im imH\",\"5593\":\"jiew\",\"5594\":\"aewk\",\"5598\":\"tsyhwenX\",\"5599\":\"tsyhwejH xjwojH\",\"5602\":\"kewH\",\"5605\":\"khojH\",\"5606\":\"than thanH\",\"5609\":\"kae\",\"5610\":\"xaew\",\"5611\":\"xu\",\"5612\":\"xwejH\",\"5614\":\"uw uwX\",\"5615\":\"xjen\",\"5616\":\"dzreak\",\"5617\":\"dzyang\",\"5635\":\"xew\",\"5636\":\"sej\",\"5642\":\"tswonX\",\"5646\":\"tshomX tsop\",\"5651\":\"haw\",\"5653\":\"xjo xjoH\",\"5661\":\"tsyem\",\"5663\":\"tuwH\",\"5664\":\"gimH gimX\",\"5665\":\"nowng\",\"5666\":\"jwet jwot xwajH\",\"5668\":\"khijH\",\"5669\":\"ngak\",\"5672\":\"khwaejH kwajH kwat\",\"5673\":\"ngjuX\",\"5674\":\"phwon phwonH\",\"5682\":\"xamX\",\"5683\":\"thop\",\"5686\":\"xaew xaewH\",\"5687\":\"xaeH xaek\",\"5697\":\"paewk\",\"5702\":\"hwonH\",\"5703\":\"puH puX\",\"5704\":\"ngjoX\",\"5705\":\"heam hom\",\"5708\":\"gjwenX gjwonH khjwonX kjwonX\",\"5709\":\"ngjoH ngjoX\",\"5712\":\"hjwon\",\"5713\":\"hjwen\",\"5716\":\"du\",\"5718\":\"dwan\",\"5728\":\"dzojX\",\"5729\":\"u\",\"5730\":\"dijH\",\"5741\":\"tsyeX\",\"5745\":\"khimX ngimX\",\"5747\":\"kjwin\",\"5750\":\"dzwaX dzwaH\",\"5751\":\"khaeng\",\"5752\":\"bjijH\",\"5764\":\"khwon\",\"5766\":\"thanX\",\"5770\":\"kweng\",\"5773\":\"aew\",\"5774\":\"ljuwk\",\"5776\":\"mjuwk\",\"5782\":\"dzywe\",\"5793\":\"koj\",\"5794\":\"jin\",\"5797\":\"drjewX\",\"5800\":\"khwot\",\"5801\":\"khwaH\",\"5802\":\"dang\",\"5805\":\"ken\",\"5806\":\"twoj\",\"5807\":\"gin\",\"5819\":\"in\",\"5824\":\"dej\",\"5831\":\"pawH\",\"5832\":\"tsit\",\"5834\":\"drjang\",\"5835\":\"tuX\",\"5848\":\"gijH xijH xjiojH\",\"5852\":\"dzyi\",\"5853\":\"mek\",\"5857\":\"du\",\"5858\":\"dang\",\"5864\":\"xjwon\",\"5874\":\"pongH\",\"5875\":\"drin\",\"5879\":\"tshjem\",\"5880\":\"drij\",\"5881\":\"man\",\"5883\":\"kjaengX\",\"5886\":\"dejH det\",\"5889\":\"yowng\",\"5890\":\"ginH\",\"5893\":\"muH\",\"5906\":\"bjowng phjowng\",\"5914\":\"gwij\",\"5915\":\"zjek\",\"5916\":\"ngwajH\",\"5917\":\"jwonX\",\"5919\":\"sjuwk\",\"5922\":\"mjuwngH muwng\",\"5924\":\"yin\",\"5927\":\"daH dajH\",\"5928\":\"tsrik\",\"5929\":\"then\",\"5931\":\"syit\",\"5937\":\"yij\",\"5938\":\"khwae\",\"5944\":\"jemX\",\"5947\":\"gje kje\",\"5948\":\"najH\",\"5949\":\"bjowngX phjowngX\",\"5950\":\"xwanH\",\"5951\":\"khejH khet sjet\",\"5953\":\"trae\",\"5954\":\"pwon\",\"5955\":\"yek\",\"5960\":\"deng dengH denH\",\"5962\":\"syae\",\"5967\":\"awH juwk\",\"5970\":\"biH bijH\",\"5973\":\"nrjoX nrjoH\",\"5974\":\"nu\",\"5978\":\"kan\",\"5980\":\"kiX\",\"5981\":\"dzyak\",\"5982\":\"nyo\",\"5983\":\"phjioj phwojH\",\"5984\":\"mjangH\",\"5990\":\"tsyowng\",\"5992\":\"tuH\",\"5996\":\"jew\",\"5998\":\"hjun\",\"5999\":\"mjiewH\",\"6010\":\"khuw\",\"6012\":\"nuH nuX\",\"6013\":\"nraew\",\"6015\":\"phaeH phaek\",\"6016\":\"phuH\",\"6017\":\"thep tsyhem\",\"6019\":\"huX\",\"6020\":\"dojX\",\"6021\":\"yi\",\"6025\":\"kip\",\"6026\":\"pheang\",\"6027\":\"sjengH\",\"6028\":\"jwon jwonH\",\"6029\":\"nrij\",\"6031\":\"tshuwng\",\"6032\":\"pjaengH pjaengX\",\"6034\":\"xjwit\",\"6035\":\"trhwit\",\"6040\":\"tseyX\",\"6041\":\"nyim\",\"6042\":\"swin swinH\",\"6043\":\"dzyiX\",\"6046\":\"hong\",\"6048\":\"mjuw\",\"6050\":\"khjowngX\",\"6051\":\"kjweX\",\"6054\":\"haewH\",\"6055\":\"syoH\",\"6059\":\"yangH\",\"6062\":\"khwoj\",\"6063\":\"tsijH\",\"6064\":\"swit\",\"6065\":\"trhiX\",\"6068\":\"honH\",\"6069\":\"on\",\"6081\":\"jwien\",\"6083\":\"khwonX\",\"6084\":\"tshjewX\",\"6085\":\"ywet\",\"6086\":\"yoH\",\"6089\":\"sit\",\"6090\":\"thek\",\"6092\":\"ip\",\"6094\":\"xwojH xwojX\",\"6095\":\"xjioj\",\"6096\":\"bwojH bwot\",\"6097\":\"man mwonX\",\"6100\":\"dzjuwX tshjewX\",\"6101\":\"dzrjuw\",\"6103\":\"xjwonX\",\"6105\":\"keak\",\"6106\":\"khjen\",\"6108\":\"yuX\",\"6109\":\"yu\",\"6112\":\"khajH khjejH khjet\",\"6113\":\"dangX syang\",\"6114\":\"jim\",\"6115\":\"ngak\",\"6116\":\"dzyim\",\"6119\":\"khak\",\"6127\":\"kwijH\",\"6128\":\"khaewk\",\"6134\":\"tsrhjangH\",\"6135\":\"nek\",\"6137\":\"khojX\",\"6141\":\"hwonH\",\"6144\":\"lit\",\"6145\":\"saw sawX tshawX\",\"6146\":\"thaw\",\"6147\":\"jion\",\"6148\":\"dzi\",\"6149\":\"xjuwk\",\"6155\":\"muH\",\"6158\":\"tshomX\",\"6159\":\"dzam\",\"6162\":\"maenH manH\",\"6163\":\"kwaenH\",\"6164\":\"khaewk\",\"6165\":\"tshawH\",\"6167\":\"hwejH\",\"6168\":\"khojH\",\"6170\":\"jwiojH\",\"6171\":\"dwan\",\"6174\":\"tsyep\",\"6176\":\"khjaengH\",\"6177\":\"khangX\",\"6179\":\"nep tsyep tsyip\",\"6182\":\"juw\",\"6183\":\"syowng trhaewng trhjowngH\",\"6190\":\"len\",\"6191\":\"bing\",\"6192\":\"kwojH\",\"6194\":\"dzjew\",\"6196\":\"nginH\",\"6197\":\"nginH\",\"6198\":\"xiX\",\"6200\":\"ljwenH\",\"6201\":\"nraenX\",\"6204\":\"xjwak\",\"6207\":\"xuwngH\",\"6208\":\"kwa\",\"6209\":\"hjwot\",\"6210\":\"dzyeng\",\"6211\":\"ngaX\",\"6212\":\"keajH\",\"6214\":\"dzan dzen\",\"6215\":\"dzjang\",\"6216\":\"hwik hwok\",\"6220\":\"tsyik\",\"6221\":\"khom\",\"6222\":\"tsrip\",\"6223\":\"gwij\",\"6229\":\"tsinX\",\"6230\":\"tsyenH\",\"6232\":\"xjeH\",\"6234\":\"tojH\",\"6236\":\"huX\",\"6239\":\"eak\",\"6240\":\"srjoX xjoX\",\"6241\":\"penX\",\"6243\":\"kweng kwengX\",\"6246\":\"jiojX\",\"6247\":\"syenH\",\"6248\":\"huX\",\"6249\":\"pjioj\",\"6250\":\"lok\",\"6251\":\"phuwk\",\"6254\":\"nying\",\"6261\":\"tha\",\"6262\":\"xjiot\",\"6263\":\"khuwH khuwX\",\"6264\":\"ngwot\",\"6271\":\"tsrheap\",\"6273\":\"paen\",\"6276\":\"bju phu pju\",\"6279\":\"bet phej\",\"6280\":\"gjeX\",\"6283\":\"bjenH\",\"6286\":\"mjunH mjunX\",\"6288\":\"ngjwot\",\"6289\":\"wet\",\"6291\":\"ik\",\"6292\":\"zyoX\",\"6293\":\"tsraew tsraewH tsraewX\",\"6294\":\"buw\",\"6295\":\"duw\",\"6297\":\"khangH\",\"6298\":\"dejH dzyet tsyet\",\"6301\":\"dri\",\"6302\":\"kweaH\",\"6303\":\"trit\",\"6307\":\"tsyijX\",\"6308\":\"khet\",\"6309\":\"anH\",\"6310\":\"nrae\",\"6311\":\"dewX thaw thew\",\"6328\":\"eajX ojX\",\"6329\":\"thwat\",\"6336\":\"kjowk\",\"6339\":\"jip\",\"6342\":\"nguH\",\"6344\":\"gjuw\",\"6346\":\"khwonX\",\"6349\":\"tsraewk\",\"6350\":\"ywen\",\"6355\":\"buH\",\"6358\":\"tswojH tswonH\",\"6365\":\"wanH\",\"6367\":\"phjowngX\",\"6368\":\"syaeX\",\"6372\":\"gjwen\",\"6376\":\"tsyweX\",\"6377\":\"dzjep\",\"6380\":\"xjon\",\"6383\":\"sawH sawX\",\"6384\":\"lwon\",\"6387\":\"trjwet twat\",\"6388\":\"dzyuwH\",\"6389\":\"dewH dewX nraewk\",\"6392\":\"beaj\",\"6394\":\"khen\",\"6396\":\"yek\",\"6398\":\"gjut gjwot\",\"6406\":\"kuwH\",\"6409\":\"kaewk\",\"6414\":\"saw\",\"6416\":\"yew\",\"6422\":\"tsinH\",\"6424\":\"eak\",\"6430\":\"khwot\",\"6434\":\"kjenX\",\"6436\":\"tshjang tshjangX tsrhjangX\",\"6437\":\"den\",\"6439\":\"keak\",\"6453\":\"bjowng\",\"6458\":\"thek treak\",\"6461\":\"kojH xjiojH\",\"6466\":\"hwaeH\",\"6467\":\"dzwoj\",\"6469\":\"ma\",\"6470\":\"nget\",\"6472\":\"sraem\",\"6473\":\"khju khuw\",\"6476\":\"dwan\",\"6485\":\"kjwejH\",\"6493\":\"nraewX xaw\",\"6495\":\"sej\",\"6499\":\"tswonX\",\"6500\":\"phaen\",\"6504\":\"trhjo\",\"6513\":\"kjenX kjonX\",\"6515\":\"sream\",\"6516\":\"jieng\",\"6517\":\"kjunH\",\"6518\":\"nyang nyangX\",\"6520\":\"mje\",\"6522\":\"dzwanH\",\"6523\":\"ljwen\",\"6524\":\"than\",\"6526\":\"lejH\",\"6529\":\"thangX\",\"6532\":\"khje kje\",\"6536\":\"syuw\",\"6537\":\"khawX\",\"6538\":\"yuw\",\"6539\":\"kojX\",\"6542\":\"khuwH khuwX\",\"6543\":\"minX\",\"6544\":\"mjuH mjuX\",\"6545\":\"kuH\",\"6548\":\"haewH\",\"6549\":\"mjieX\",\"6551\":\"kjuwH\",\"6553\":\"dwat\",\"6554\":\"ngjoX\",\"6555\":\"trhik\",\"6556\":\"ngaw\",\"6557\":\"baejH paejH\",\"6558\":\"zjoX\",\"6559\":\"kaewH\",\"6562\":\"kamX\",\"6563\":\"sanX sanH\",\"6566\":\"twoj twon twojH dwan\",\"6574\":\"tsyengX\",\"6575\":\"dek\",\"6576\":\"drin drinH\",\"6577\":\"phju\",\"6578\":\"sraewk tshjowk\",\"6579\":\"lew\",\"6580\":\"traewk\",\"6581\":\"duH tuH yek\",\"6582\":\"ljemX ljemH\",\"6583\":\"bjiejH\",\"6584\":\"li\",\"6586\":\"haewH\",\"6587\":\"mjun\",\"6590\":\"phjiojX\",\"6591\":\"paen\",\"6594\":\"yuX\",\"6597\":\"tsyuX tuwX\",\"6599\":\"lew lewH\",\"6602\":\"ngang\",\"6603\":\"tsrik\",\"6604\":\"baenX paenX\",\"6606\":\"kwon\",\"6607\":\"sying\",\"6609\":\"pjangX\",\"6613\":\"yeH yek\",\"6614\":\"sjek\",\"6615\":\"xjion\",\"6625\":\"tsyhwin\",\"6627\":\"mwojH\",\"6628\":\"dzak\",\"6632\":\"phjiojH\",\"6634\":\"maewX\",\"6635\":\"nrit\",\"6642\":\"dzyi\",\"6645\":\"xjwon xjwonX\",\"6648\":\"kewX\",\"6649\":\"tsinH\",\"6650\":\"koj\",\"6662\":\"tsyejH tsyet\",\"6663\":\"tsyejH tsyet\",\"6664\":\"nguH\",\"6666\":\"xwojH\",\"6667\":\"kawX\",\"6668\":\"dzyin zyin\",\"6673\":\"sek\",\"6675\":\"khejX\",\"6676\":\"tsjeng\",\"6687\":\"haeH\",\"6688\":\"hjunH\",\"6689\":\"xjwioj\",\"6691\":\"syoX\",\"6696\":\"xjwon xjwonX\",\"6697\":\"omH\",\"6698\":\"yang\",\"6700\":\"tswajH\",\"6701\":\"tshomX\",\"6703\":\"hwajH kwajH\",\"6705\":\"khjet khjot\",\"6708\":\"ngjwot\",\"6709\":\"hjuwX\",\"6714\":\"sraewk\",\"6715\":\"drimX drinX\",\"6717\":\"langX\",\"6718\":\"tswoj\",\"6722\":\"mjangH\",\"6726\":\"muwng muwngX\",\"6727\":\"luwng\",\"6728\":\"muwk\",\"6731\":\"tsyu\",\"6734\":\"phaewk\",\"6735\":\"twaX\",\"6736\":\"twaX\",\"6740\":\"tshajH\",\"6745\":\"hju\",\"6747\":\"u\",\"6750\":\"dzoj\",\"6753\":\"dzyak\",\"6755\":\"dejH\",\"6756\":\"drjangH drjangX\",\"6759\":\"yik\",\"6760\":\"kaewng\",\"6771\":\"tuwng\",\"6772\":\"kawX\",\"6773\":\"ewX\",\"6775\":\"tsyhoX\",\"6776\":\"trhwin\",\"6781\":\"gjep\",\"6785\":\"kej ken\",\"6787\":\"pjijX\",\"6789\":\"jwangX\",\"6790\":\"sek\",\"6791\":\"huH\",\"6793\":\"tsyuX\",\"6795\":\"tsyimH tsyimX\",\"6796\":\"jew\",\"6797\":\"lim\",\"6798\":\"nywejH\",\"6805\":\"tsrheak\",\"6816\":\"sej\",\"6817\":\"lit\",\"6821\":\"haew haewH haewX kaewH kaewX\",\"6829\":\"xjuX\",\"6832\":\"khawX\",\"6835\":\"ljejH ljet\",\"6838\":\"heak\",\"6839\":\"kon\",\"6840\":\"gjet kjet\",\"6841\":\"haeng hang\",\"6842\":\"kwejH\",\"6843\":\"daw\",\"6848\":\"anH\",\"6850\":\"duwng\",\"6851\":\"sang\",\"6853\":\"hwan\",\"6854\":\"ket\",\"6874\":\"phju\",\"6876\":\"thuwngX\",\"6877\":\"kaewk\",\"6879\":\"lang\",\"6881\":\"ljang\",\"6883\":\"dengX\",\"6884\":\"yuwH yuwX\",\"6885\":\"mwoj\",\"6890\":\"bejX\",\"6893\":\"tsiX\",\"6897\":\"kaengX\",\"6900\":\"wanX\",\"6901\":\"kwak\",\"6904\":\"tsjep\",\"6905\":\"je\",\"6907\":\"kjuX\",\"6908\":\"kjuwk\",\"6910\":\"khjo kjoH\",\"6911\":\"bej\",\"6912\":\"tsew tsjew\",\"6913\":\"traewk\",\"6936\":\"tsuwng\",\"6938\":\"ye\",\"6939\":\"trim\",\"6940\":\"kjuX\",\"6942\":\"tsrae\",\"6944\":\"ben\",\"6945\":\"pik pjuwk\",\"6953\":\"pjuwng\",\"6954\":\"set\",\"6956\":\"tsrit\",\"6957\":\"gjonX kjonX\",\"6958\":\"muwk\",\"6959\":\"maw\",\"6963\":\"mij\",\"6966\":\"xjwonH\",\"6968\":\"trjeng\",\"6969\":\"bjenH bjien\",\"6970\":\"yuX\",\"6975\":\"gik\",\"6977\":\"kheajX\",\"6978\":\"tshjuw\",\"6979\":\"yeng\",\"6982\":\"kojH\",\"6986\":\"yu\",\"6991\":\"bju\",\"6996\":\"kuwk\",\"6998\":\"kjuX\",\"7000\":\"juw\",\"7006\":\"duwk\",\"7009\":\"sjaeX\",\"7011\":\"bawH\",\"7017\":\"xjonH\",\"7021\":\"sjweH\",\"7023\":\"heajH\",\"7026\":\"trjo\",\"7028\":\"lajH\",\"7030\":\"mejX mjie mjieX\",\"7037\":\"yik\",\"7038\":\"tsjem\",\"7039\":\"yak\",\"7042\":\"tsjewH\",\"7051\":\"sreaH sreaX\",\"7053\":\"lwan\",\"7055\":\"lje\",\"7058\":\"than\",\"7070\":\"xwoj\",\"7076\":\"tsawH\",\"7077\":\"yingH\",\"7078\":\"kjuwH kjuwX\",\"7099\":\"tsyaeH tsyek\",\"7102\":\"dzyuwk\",\"7104\":\"xjun\",\"7109\":\"hjen jen\",\"7120\":\"tshwojH\",\"7121\":\"mju\",\"7126\":\"tsjew\",\"7136\":\"nyen\",\"7141\":\"dzyim\",\"7147\":\"hjunH\",\"7151\":\"tsyoX\",\"7152\":\"hjwiojX\",\"7156\":\"xjwon\",\"7157\":\"nwanX\",\"7159\":\"en\",\"7162\":\"gjwieng\",\"7164\":\"mwoj\",\"7165\":\"xwanH\",\"7166\":\"xjuH xjuX\",\"7167\":\"tsyewH\",\"7168\":\"woj\",\"7169\":\"bjon\",\"7184\":\"sik\",\"7187\":\"xak xowk\",\"7191\":\"lem ljem\",\"7192\":\"hweng hwengH hwengX\",\"7199\":\"xi\",\"7207\":\"nywet\",\"7210\":\"lu\",\"7213\":\"yemH zim\",\"7217\":\"hip hjep\",\"7224\":\"lanH\",\"7228\":\"tshwanH\",\"7230\":\"hjwon\",\"7232\":\"hjwe hjweH\",\"7235\":\"tsjak\",\"7236\":\"bjuX pjuX\",\"7240\":\"dzrjang\",\"7242\":\"tsang\",\"7244\":\"tshjang\",\"7246\":\"dzjang\",\"7247\":\"phenH\",\"7248\":\"paenX\",\"7249\":\"phan phanH\",\"7252\":\"dep\",\"7256\":\"yuwX\",\"7258\":\"duwk\",\"7259\":\"ngae\",\"7261\":\"muwX\",\"7262\":\"law\",\"7263\":\"nyinH\",\"7265\":\"pjang\",\"7267\":\"mjuwk\",\"7269\":\"mjut\",\"7272\":\"sraeng\",\"7277\":\"dzjwen\",\"7279\":\"dok\",\"7280\":\"sej\",\"7281\":\"lej lij\",\"7285\":\"kang\",\"7286\":\"dok drik\",\"7287\":\"pwon\",\"7289\":\"nywin\",\"7292\":\"khawH\",\"7295\":\"bijH\",\"7297\":\"kaejH\",\"7312\":\"jiem jiemH\",\"7316\":\"dzyang tsyhang\",\"7317\":\"aX je jeX\",\"7318\":\"kjejH\",\"7325\":\"wojX\",\"7328\":\"hjwon\",\"7329\":\"seng sraeng\",\"7331\":\"naw\",\"7332\":\"xjot\",\"7334\":\"huw\",\"7335\":\"pen phjienH\",\"7336\":\"yuw\",\"7337\":\"yuw\",\"7340\":\"srjuw\",\"7344\":\"ngjowk\",\"7350\":\"tsyang\",\"7352\":\"ngaw\",\"7356\":\"bwonH\",\"7358\":\"bjiejH\",\"7360\":\"lew\",\"7367\":\"kwenH\",\"7368\":\"duwk\",\"7372\":\"hweak\",\"7375\":\"ljep\",\"7376\":\"naw\",\"7377\":\"kwaengX\",\"7378\":\"syuwH\",\"7381\":\"xjemX\",\"7383\":\"kjwak\",\"7384\":\"hwen\",\"7386\":\"tsi\",\"7387\":\"lwit lwijH srwijH srwit\",\"7388\":\"lu\",\"7389\":\"ngjowk\",\"7395\":\"kan\",\"7396\":\"kjuwX\",\"7397\":\"hju\",\"7401\":\"zjwen\",\"7403\":\"gjuw\",\"7405\":\"lang\",\"7406\":\"liX\",\"7407\":\"sjuwH yuwX\",\"7416\":\"tsreanX\",\"7422\":\"traewk\",\"7425\":\"xuX\",\"7426\":\"gje\",\"7428\":\"kwon\",\"7430\":\"yemX\",\"7431\":\"tew\",\"7433\":\"lim\",\"7434\":\"gim\",\"7441\":\"mawH\",\"7449\":\"min\",\"7451\":\"drjwenX\",\"7455\":\"hae\",\"7457\":\"hjwenH hjwonH\",\"7463\":\"swaX swaeX\",\"7464\":\"yew\",\"7469\":\"wengH hjwaeng\",\"7470\":\"kwoj\",\"7471\":\"thenH trinH\",\"7472\":\"tshjang\",\"7473\":\"tshaX\",\"7474\":\"kaewk\",\"7482\":\"gi\",\"7486\":\"gjiw\",\"7487\":\"zjwen\",\"7489\":\"ljenX\",\"7490\":\"luH\",\"7497\":\"dangX\",\"7500\":\"drjwe drjweH\",\"7503\":\"tsrjuwH\",\"7504\":\"kjien tsyin tsyinH\",\"7510\":\"linH\",\"7511\":\"tsingH\",\"7512\":\"mjuX\",\"7513\":\"bek bjieH\",\"7514\":\"tam\",\"7515\":\"uwngH\",\"7517\":\"ngjenH ngjon\",\"7518\":\"kam\",\"7521\":\"srin\",\"7522\":\"sreanX\",\"7525\":\"sraeng\",\"7528\":\"yowngH\",\"7530\":\"den denH\",\"7531\":\"yuw\",\"7532\":\"kaep\",\"7533\":\"syin\",\"7537\":\"nom\",\"7538\":\"denH dzyingH\",\"7539\":\"pheng\",\"7540\":\"pjijH\",\"7547\":\"swin ywin zwin\",\"7550\":\"bjuwk\",\"7554\":\"banH\",\"7559\":\"ljuw\",\"7562\":\"pjit\",\"7564\":\"driX\",\"7565\":\"ljak\",\"7566\":\"hwej\",\"7570\":\"yiH\",\"7571\":\"ljuw\",\"7576\":\"tang tangH\",\"7577\":\"trjwejH trjwet\",\"7578\":\"kje\",\"7579\":\"jwonX\",\"7586\":\"kjang\",\"7587\":\"drjuw\",\"7588\":\"peak\",\"7590\":\"tejH trijH\",\"7591\":\"ngi ngik\",\"7592\":\"nreak\",\"7595\":\"phjieX phjijX pjijX\",\"7600\":\"joH\",\"7601\":\"dzwijH\",\"7603\":\"trjowk\",\"7608\":\"kjiejH tsyejH\",\"7609\":\"yuX\",\"7616\":\"im\",\"7620\":\"dzjek\",\"7621\":\"tsrhjang\",\"7623\":\"hwojX\",\"7625\":\"dza tsjae\",\"7626\":\"srjuwH\",\"7627\":\"ngjak\",\"7628\":\"ten\",\"7633\":\"lew trhjuw\",\"7635\":\"tsreajH\",\"7642\":\"ljewH\",\"7643\":\"ljuwng\",\"7649\":\"tanX taH\",\"7658\":\"ljejH\",\"7659\":\"syoX\",\"7660\":\"dzej dzejH dzejX\",\"7662\":\"yangX\",\"7670\":\"jowng\",\"7676\":\"pat\",\"7678\":\"kjwijX\",\"7679\":\"bat\",\"7680\":\"xjang\",\"7681\":\"dzawX\",\"7682\":\"dzawX\",\"7683\":\"maewH\",\"7686\":\"keaj\",\"7687\":\"hwang\",\"7690\":\"kaw\",\"7693\":\"kawX\",\"7699\":\"sek\",\"7701\":\"sjengX\",\"7702\":\"dzyijH dzyijX\",\"7704\":\"menH menX\",\"7707\":\"mjiewX\",\"7708\":\"tom tomX\",\"7709\":\"mij mjiojX\",\"7714\":\"dop\",\"7715\":\"tsyinX\",\"7718\":\"dzyenH\",\"7719\":\"dringH trhiH\",\"7720\":\"men menX\",\"7721\":\"dzyijH dzyijX\",\"7722\":\"wan\",\"7723\":\"det trhit\",\"7725\":\"dzejH dzjeH\",\"7729\":\"hwen hwenH\",\"7732\":\"nreak nyiH\",\"7734\":\"swin sywinH xwenH\",\"7736\":\"khjwang\",\"7737\":\"kjwenH\",\"7738\":\"mjuw\",\"7745\":\"hwaenX\",\"7746\":\"hwaenX\",\"7747\":\"dejH thej\",\"7757\":\"syek\",\"7758\":\"gjwieng hwaen\",\"7760\":\"kjwenH\",\"7761\":\"dzyweH\",\"7762\":\"xjwij\",\"7763\":\"towk\",\"7766\":\"mjuwk\",\"7768\":\"ngejH ngejX\",\"7769\":\"luwk\",\"7779\":\"tuX\",\"7780\":\"maewk muwH\",\"7782\":\"bjot\",\"7791\":\"men meng menH\",\"7809\":\"xwaek xwek\",\"7814\":\"ngen\",\"7820\":\"tshjo\",\"7825\":\"tsyijX\",\"7830\":\"pheang\",\"7834\":\"phaH\",\"7869\":\"trhjet\",\"7891\":\"pje\",\"7919\":\"ngojH\",\"7928\":\"lwojX\",\"7931\":\"luwng\",\"7934\":\"bak\",\"7940\":\"ziX\",\"7941\":\"gij\",\"7946\":\"jew\",\"7947\":\"gjie tsye\",\"7948\":\"gjioj\",\"7949\":\"trhiX\",\"7950\":\"hjuwH hjuwX\",\"7953\":\"phjut pjojH\",\"7954\":\"bjuH\",\"7955\":\"pijH\",\"7956\":\"tsuX\",\"7957\":\"tsyij\",\"7958\":\"swanH\",\"7960\":\"zi\",\"7961\":\"dzrea\",\"7965\":\"zjang\",\"7967\":\"thew\",\"7968\":\"phjiew\",\"7972\":\"tsim tsimH\",\"7980\":\"limX pimX\",\"7981\":\"kim kimH\",\"7982\":\"tawX\",\"7993\":\"syang\",\"7994\":\"dej dzye tsye\",\"7995\":\"je\",\"7996\":\"mwoj\",\"7998\":\"dejH\",\"8000\":\"yewH\",\"8001\":\"lawX\",\"8003\":\"khawX\",\"8005\":\"tsyaeX\",\"8006\":\"gij tsyijX\",\"8007\":\"kuwX\",\"8010\":\"nojH\",\"8011\":\"twan\",\"8012\":\"lwijH lwojH\",\"8014\":\"tsiX\",\"8015\":\"keang\",\"8017\":\"xawH\",\"8018\":\"hjun\",\"8019\":\"bae baeH\",\"8021\":\"dzrjo dzrjoH\",\"8024\":\"dzjek\",\"8026\":\"nguwX\",\"8028\":\"nuwH\",\"8030\":\"juw\",\"8033\":\"nyiX\",\"8034\":\"trjep\",\"8036\":\"yae\",\"8043\":\"nam tham\",\"8052\":\"kwat\",\"8056\":\"syengH\",\"8058\":\"pjiengH\",\"8070\":\"tshuwng\",\"8072\":\"syeng\",\"8073\":\"sjowngX\",\"8075\":\"ngweajH\",\"8076\":\"nrjep tsyep\",\"8077\":\"tsyik\",\"8082\":\"sijH yijH\",\"8084\":\"yijH\",\"8085\":\"sjuwk\",\"8086\":\"sijH\",\"8087\":\"drjewX\",\"8089\":\"nyuwH nyuwk\",\"8093\":\"xwang\",\"8095\":\"nyinH\",\"8096\":\"sjew sjewH\",\"8098\":\"trjuwX\",\"8099\":\"wen\",\"8100\":\"tsying\",\"8102\":\"tsyij\",\"8103\":\"tshjwejH\",\"8104\":\"mwoj mwojH\",\"8105\":\"xjaep\",\"8106\":\"tshjwejH\",\"8108\":\"meak\",\"8109\":\"meak\",\"8115\":\"mjonX\",\"8117\":\"minX mjunX\",\"8121\":\"thengX\",\"8122\":\"mwoj mwojH\",\"8123\":\"zywin\",\"8124\":\"dzyinX\",\"8129\":\"sjuw yuw yuwX\",\"8130\":\"duwH\",\"8146\":\"thenX\",\"8150\":\"bjuX\",\"8152\":\"gjo kjo\",\"8153\":\"bjioj\",\"8155\":\"wanH\",\"8160\":\"tshuwH\",\"8162\":\"ngju ngjuwX\",\"8165\":\"seng sengH\",\"8166\":\"nawX\",\"8170\":\"jiew\",\"8171\":\"gjonH kjon\",\"8173\":\"kjak\",\"8174\":\"yu\",\"8176\":\"twanH\",\"8177\":\"bik\",\"8178\":\"drjang\",\"8179\":\"pjuwk\",\"8182\":\"ljoX\",\"8187\":\"drjweH\",\"8188\":\"keak\",\"8189\":\"jiek\",\"8195\":\"kweak\",\"8200\":\"yewX yuw yuwX\",\"8201\":\"yoX\",\"8202\":\"syowng\",\"8204\":\"sjek tshjak\",\"8205\":\"gjuwX\",\"8207\":\"yo yoH yoX\",\"8208\":\"xing xingH\",\"8209\":\"kjoX\",\"8210\":\"zyeX\",\"8212\":\"syo\",\"8232\":\"leng\",\"8235\":\"da\",\"8239\":\"zywen\",\"8245\":\"yo\",\"8271\":\"kean\",\"8272\":\"srik\",\"8274\":\"bwot phjut\",\"8278\":\"tshawX\",\"8283\":\"buwng\",\"8284\":\"hwan\",\"8290\":\"haeH huX\",\"8291\":\"khiX\",\"8292\":\"mang mjang xwang xwangX\",\"8298\":\"bjij\",\"8299\":\"bju\",\"8300\":\"phjut pjut\",\"8301\":\"tsrjwet tsrweat\",\"8302\":\"muwH\",\"8303\":\"bjomX\",\"8305\":\"maew\",\"8306\":\"ljuwX maewX\",\"8307\":\"bat pat\",\"8319\":\"nyuwng\",\"8320\":\"xaw\",\"8322\":\"ljet\",\"8326\":\"tshjeH\",\"8328\":\"dzij\",\"8332\":\"tsi\",\"8335\":\"jin\",\"8337\":\"bajH\",\"8338\":\"nyowng nyowngX\",\"8339\":\"nyo nyoH nyoX\",\"8340\":\"swin\",\"8341\":\"hwan\",\"8342\":\"khwae xju\",\"8343\":\"tshjwen\",\"8345\":\"top\",\"8347\":\"haengX\",\"8349\":\"tshawX\",\"8350\":\"dzenH dzwonH\",\"8351\":\"dej yij\",\"8352\":\"xwang\",\"8353\":\"beng pheang\",\"8354\":\"lejH ljeH\",\"8377\":\"ha\",\"8385\":\"lijH\",\"8386\":\"pjuX\",\"8392\":\"kjoX\",\"8396\":\"heang\",\"8398\":\"srin\",\"8401\":\"gi ki\",\"8403\":\"dzwijH\",\"8407\":\"drjang\",\"8408\":\"hwan\",\"8411\":\"hwan\",\"8429\":\"tshjuw\",\"8439\":\"pen penX phjien\",\"8446\":\"pawX\",\"8449\":\"yep\",\"8451\":\"phjowng\",\"8457\":\"drjak trjak trjoH\",\"8458\":\"tsri tsriH\",\"8462\":\"hap kajH\",\"8463\":\"tuwngX\",\"8466\":\"hjwiojX\",\"8469\":\"phae\",\"8471\":\"tshuwng\",\"8475\":\"gjwij\",\"8477\":\"xjun\",\"8478\":\"siX\",\"8479\":\"sye\",\"8490\":\"srjuw\",\"8499\":\"muwng\",\"8500\":\"buwX phuwX\",\"8506\":\"ling\",\"8507\":\"gijH kjiojH\",\"8509\":\"kwonX\",\"8511\":\"met\",\"8513\":\"mjonH\",\"8514\":\"bok\",\"8515\":\"tejH\",\"8521\":\"tshajH\",\"8523\":\"tsjang\",\"8525\":\"tshuwng tsrhaewng\",\"8526\":\"tewH tewX\",\"8543\":\"bjon pjon\",\"8546\":\"trhjenX\",\"8549\":\"tsjew\",\"8551\":\"kean\",\"8555\":\"yuw\",\"8558\":\"nyew\",\"8559\":\"hwejH\",\"8561\":\"bjun\",\"8562\":\"gwijH\",\"8563\":\"sywinH\",\"8564\":\"nywij\",\"8568\":\"kjwot\",\"8569\":\"dangH dangX\",\"8580\":\"won\",\"8581\":\"juwk\",\"8584\":\"bak phak\",\"8585\":\"xaw\",\"8586\":\"ojH\",\"8587\":\"mjioj\",\"8588\":\"wajH\",\"8591\":\"kjang\",\"8596\":\"khwa\",\"8599\":\"drijX thejH zijX\",\"8600\":\"thak\",\"8601\":\"ngak nguH\",\"8604\":\"gjioj\",\"8605\":\"haeng\",\"8607\":\"su\",\"8609\":\"mang\",\"8622\":\"ljowng luwng\",\"8626\":\"leng\",\"8627\":\"gjo\",\"8629\":\"bjon\",\"8646\":\"lwa\",\"8650\":\"ngjak\",\"8652\":\"sje\",\"8653\":\"xaew\",\"8654\":\"gjen\",\"8655\":\"tsyhoX tsyhoH\",\"8656\":\"hu\",\"8658\":\"dzu\",\"8661\":\"gjoX\",\"8662\":\"kwaek\",\"8663\":\"bawH\",\"8667\":\"khjwe\",\"8669\":\"xjaek\",\"8677\":\"han\",\"8679\":\"huwng kaewngH\",\"8688\":\"khen\",\"8689\":\"mjun\",\"8693\":\"yinX\",\"8700\":\"dzyowk\",\"8702\":\"phjowng\",\"8703\":\"dzyinX\",\"8707\":\"trjet\",\"8709\":\"bjuw\",\"8713\":\"dengX denX\",\"8715\":\"thwajH\",\"8718\":\"trje\",\"8721\":\"dzraeH tshjoH\",\"8723\":\"khjang\",\"8729\":\"dew\",\"8731\":\"bea\",\"8733\":\"twon\",\"8734\":\"yek\",\"8737\":\"gjwen\",\"8739\":\"nywejH nywet\",\"8740\":\"tuwng\",\"8743\":\"tejH\",\"8753\":\"yu zyu\",\"8755\":\"zyik\",\"8757\":\"hwaeng hwang\",\"8758\":\"enX\",\"8760\":\"pjuwk\",\"8761\":\"nywenX\",\"8763\":\"yuw\",\"8764\":\"dzjuw\",\"8765\":\"mjuw\",\"8766\":\"hae\",\"8768\":\"srit\",\"8771\":\"maeng\",\"8776\":\"dep\",\"8778\":\"kwae lwa\",\"8793\":\"dzin\",\"8797\":\"dang\",\"8798\":\"ngjiojX\",\"8803\":\"lwaX\",\"8805\":\"ying\",\"8806\":\"trhaejH\",\"8810\":\"dzej\",\"8813\":\"muwng muwngX\",\"8815\":\"nywenX\",\"8816\":\"wak\",\"8819\":\"ben bjin\",\"8821\":\"lejX lwaX\",\"8822\":\"tsyhwinX\",\"8823\":\"ljejH\",\"8825\":\"ngjet\",\"8828\":\"sew\",\"8831\":\"kuX\",\"8832\":\"kiwen\",\"8835\":\"hwej\",\"8836\":\"dzom\",\"8838\":\"gjwen\",\"8839\":\"tuH\",\"8840\":\"xwet\",\"8841\":\"xwang\",\"8845\":\"xinH xjionH\",\"8848\":\"nyiH\",\"8852\":\"hwenH\",\"8853\":\"zywit\",\"8857\":\"kea\",\"8859\":\"ngae ngjo\",\"8861\":\"haeng\",\"8862\":\"gju\",\"8863\":\"jioj jiojH\",\"8868\":\"pjewX\",\"8870\":\"srwij swa tshwoj tsrhjwe\",\"8875\":\"nyit\",\"8877\":\"trjuwng\",\"8880\":\"kjwin\",\"8881\":\"hjwon\",\"8882\":\"kwet mjiejH\",\"8892\":\"danX\",\"8896\":\"zjuwH\",\"8897\":\"tsyinX\",\"8898\":\"ye\",\"8907\":\"pjuwk\",\"8910\":\"hat\",\"8913\":\"pawX\",\"8916\":\"thwanH\",\"8918\":\"xjwioj\",\"8927\":\"khwengX\",\"8930\":\"khjen\",\"8931\":\"hweaj\",\"8936\":\"dep\",\"8941\":\"kjangX\",\"8943\":\"paw pawH\",\"8944\":\"sjang\",\"8953\":\"nyew\",\"8958\":\"kwajH\",\"8961\":\"duwk\",\"8962\":\"danX trjenH trjenX\",\"8966\":\"nyu\",\"8972\":\"zip\",\"8981\":\"jiew jiewH\",\"8983\":\"dom yemX\",\"8986\":\"phjuwk\",\"8988\":\"heak\",\"8995\":\"bet\",\"8996\":\"dzyijH dzyijX\",\"8998\":\"trhjem trhjemH\",\"9000\":\"thwojH\",\"9001\":\"suwngH\",\"9003\":\"daw\",\"9005\":\"huwH\",\"9006\":\"ngjaek\",\"9010\":\"drjuwk\",\"9011\":\"gjuw\",\"9014\":\"du\",\"9015\":\"kengH\",\"9016\":\"thek\",\"9020\":\"dzawX tshawH\",\"9021\":\"swinH\",\"9022\":\"bjowng buwng\",\"9023\":\"ljen ljenX\",\"9028\":\"loj\",\"9032\":\"tsinH\",\"9034\":\"trhaewk\",\"9035\":\"gwij\",\"9036\":\"jwe\",\"9037\":\"thek\",\"9038\":\"yit\",\"9041\":\"dwonH dwonX\",\"9042\":\"zwijH\",\"9044\":\"dzywen\",\"9047\":\"ngjuH\",\"9050\":\"hae\",\"9051\":\"hwang\",\"9052\":\"tsjuw\",\"9053\":\"dawX dawH\",\"9054\":\"dat that\",\"9055\":\"hjwioj\",\"9058\":\"kuwH\",\"9059\":\"yew\",\"9060\":\"hjwonH hjwonX\",\"9061\":\"suH\",\"9063\":\"khjenH khjenX\",\"9068\":\"ngaw\",\"9069\":\"syek tsyek\",\"9070\":\"dejH dzyejH\",\"9072\":\"drijH drij\",\"9074\":\"linH\",\"9075\":\"tswin\",\"9077\":\"tshjen\",\"9078\":\"sjwenH sjwenX\",\"9079\":\"ywit\",\"9080\":\"kew\",\"9081\":\"maejH\",\"9082\":\"heaH\",\"9083\":\"swijH\",\"9084\":\"hwaen zjwen\",\"9085\":\"drjenX trjenX\",\"9087\":\"nyeX\",\"9088\":\"maewk\",\"9091\":\"ip\",\"9095\":\"jowng\",\"9097\":\"han\",\"9100\":\"nyak\",\"9102\":\"ngak\",\"9109\":\"xjang xjangH xjangX\",\"9112\":\"tsrjuw\",\"9119\":\"pijX\",\"9123\":\"tsyang\",\"9124\":\"manH\",\"9126\":\"xjoX\",\"9127\":\"dongH\",\"9130\":\"lin\",\"9132\":\"tan\",\"9147\":\"tswanX\",\"9149\":\"yuwX\",\"9152\":\"tsjuwX\",\"9153\":\"jiemX\",\"9156\":\"drimH\",\"9157\":\"xjuH\",\"9162\":\"dzak\",\"9163\":\"ham\",\"9164\":\"huX\",\"9172\":\"drjeng trhjeng\",\"9173\":\"yinH\",\"9177\":\"khowk\",\"9178\":\"swan\",\"9186\":\"tsrjenX\",\"9187\":\"dzywin\",\"9189\":\"tswijH\",\"9192\":\"seng sengH sengX\",\"9193\":\"thomX\",\"9199\":\"srjuwX\",\"9203\":\"heng\",\"9207\":\"pju pjuX\",\"9211\":\"paenX\",\"9214\":\"mjiewX\",\"9217\":\"ywinX\",\"9234\":\"leng\",\"9236\":\"ziX\",\"9239\":\"phje\",\"9245\":\"gjoX\",\"9248\":\"syae\",\"9249\":\"hwenX\",\"9252\":\"trjuH\",\"9257\":\"gjem\",\"9264\":\"kuw\",\"9265\":\"zywit\",\"9266\":\"tsyeng\",\"9276\":\"heng\",\"9280\":\"ngin\",\"9285\":\"duwng\",\"9291\":\"senX\",\"9293\":\"tshjwen\",\"9296\":\"dzyu\",\"9298\":\"meng\",\"9304\":\"ljowk\",\"9310\":\"tsywij\",\"9315\":\"kwon\",\"9318\":\"drjwe drjweH\",\"9319\":\"tsri\",\"9321\":\"gje gjeX ngjeX\",\"9322\":\"dzjen tsjenX\",\"9323\":\"trjwejH trwaet\",\"9326\":\"kimX\",\"9327\":\"kwanH kwanX\",\"9354\":\"ngak\",\"9356\":\"trhimX\",\"9365\":\"khet\",\"9370\":\"hwaen\",\"9371\":\"yep\",\"9374\":\"twan\",\"9375\":\"gjenX\",\"9396\":\"swaX\",\"9403\":\"nraew\",\"9408\":\"gjew\",\"9413\":\"dwojH dwojX dzywin\",\"9414\":\"dom yim zim\",\"9415\":\"tsom\",\"9418\":\"tsyowng\",\"9419\":\"tong\",\"9432\":\"draewk\",\"9435\":\"thet\",\"9436\":\"hwaen\",\"9438\":\"dak\",\"9443\":\"dewH\",\"9444\":\"tsyuH\",\"9451\":\"haemH\",\"9455\":\"tsyit\",\"9460\":\"syak\",\"9462\":\"ljoH\",\"9463\":\"pjew\",\"9471\":\"dzraem dzraemH\",\"9474\":\"hwej xjwie\",\"9483\":\"trjowk\",\"9577\":\"drjang drjangH trjangX\",\"9580\":\"mwon\",\"9588\":\"hanH\",\"9589\":\"pejH\",\"9591\":\"hean\",\"9593\":\"kean hean keanH\",\"9594\":\"minX\",\"9621\":\"tshen\",\"9622\":\"ngwot\",\"9624\":\"drjeX\",\"9628\":\"eaH eak\",\"9631\":\"dzjengX\",\"9632\":\"bjang\",\"9638\":\"eaH eak\",\"9640\":\"da\",\"9642\":\"pje\",\"9644\":\"bjuH\",\"9650\":\"heanX\",\"9654\":\"koj\",\"9658\":\"heng\",\"9662\":\"hjwenH\",\"9663\":\"drinH\",\"9664\":\"drjo drjoH\",\"9670\":\"im imH\",\"9672\":\"dzywe\",\"9673\":\"drin drinH\",\"9674\":\"bjie\",\"9675\":\"ling\",\"9676\":\"daw dawH yew\",\"9677\":\"heamH\",\"9678\":\"ljuwk\",\"9684\":\"tej\",\"9685\":\"ngju\",\"9686\":\"ljuwng\",\"9688\":\"woj\",\"9689\":\"nget\",\"9693\":\"dwaX\",\"9694\":\"keak\",\"9695\":\"hwinX\",\"9697\":\"ngjwioj\",\"9698\":\"eaH eak\",\"9699\":\"khjaek\",\"9700\":\"sju\",\"9702\":\"muwk\",\"9704\":\"sjew\",\"9706\":\"deng\",\"9707\":\"tsyinH\",\"9711\":\"trjem\",\"9713\":\"ngej\",\"9716\":\"lim\",\"9722\":\"meak\",\"9723\":\"hwinX\",\"9724\":\"ljuwH\",\"9727\":\"mjuH\",\"9730\":\"senH\",\"9732\":\"luH\",\"9738\":\"paeH phaek\",\"9741\":\"lwoj\",\"9743\":\"xwak\",\"9748\":\"leng\",\"9752\":\"tseng tsheng\",\"9756\":\"dzjengX\",\"9761\":\"mje mjeX\",\"9762\":\"mjienH\",\"9766\":\"thenX\",\"9767\":\"xwojH\",\"9769\":\"keak\",\"9772\":\"gim\",\"9773\":\"kjionH\",\"9777\":\"yinH\",\"9780\":\"daw\",\"9781\":\"bjeH\",\"9782\":\"keat\",\"9783\":\"khwong kwong\",\"9784\":\"baew baewH baewX phaewk\",\"9785\":\"jangX\",\"9788\":\"keap\",\"9789\":\"daw\",\"9794\":\"man\",\"9799\":\"hwenX\",\"9802\":\"tengX\",\"9803\":\"khjwieng khjwiengX\",\"9804\":\"gjuw\",\"9805\":\"haewngX\",\"9806\":\"zywinH\",\"9808\":\"sju\",\"9811\":\"ngwaen ngwean\",\"9812\":\"paen bjun\",\"9813\":\"twonH\",\"9816\":\"phanH\",\"9817\":\"pha\",\"9818\":\"ljengX\",\"9821\":\"het\",\"9824\":\"yi\",\"9829\":\"pheng phengX\",\"9830\":\"kep\",\"9835\":\"win khwin\",\"9837\":\"homX ngomX\",\"9838\":\"gjieng kjiengX\",\"9839\":\"dwoj\",\"9840\":\"drwij\",\"9845\":\"khaen khen\",\"9847\":\"dzwijH\",\"9848\":\"khwengX\",\"9849\":\"ngom\",\"9851\":\"khomX xomH\",\"9852\":\"ngjowng\",\"9858\":\"ngjwonH\",\"9859\":\"sangX\",\"9863\":\"tshek tsjuwk\",\"9865\":\"hawX\",\"9867\":\"kuH\",\"9871\":\"lu\",\"9874\":\"gjwen\",\"9908\":\"dzij\",\"9909\":\"syangH\",\"9910\":\"tshan\",\"9912\":\"nwojX\",\"9913\":\"ngaH\",\"9914\":\"pu\",\"9915\":\"tswinH\",\"9917\":\"suwk\",\"9918\":\"yo\",\"9924\":\"dam yem\",\"9926\":\"trjang\",\"9927\":\"jweH\",\"9928\":\"kwanH\",\"9930\":\"khjen\",\"9931\":\"huw\",\"9932\":\"aejH at jejH\",\"9933\":\"dang\",\"9934\":\"pjun\",\"9941\":\"hjep\",\"9947\":\"juH\",\"9949\":\"ginH\",\"9950\":\"ijH\",\"9951\":\"kjioj\",\"9952\":\"nyew\",\"9954\":\"jowng\",\"9955\":\"thaw\",\"9957\":\"xjangX\",\"9958\":\"tsyen tsyenX\",\"9959\":\"pjun\",\"9996\":\"syuwH syuwX\",\"9997\":\"gwij\",\"9998\":\"kweak\",\"9999\":\"xjang\",\"6D89\":\"dzyep\",\"4F0A\":\"jij\",\"7F95\":\"yangH\",\"4E9F\":\"khiH kik\",\"6D1E\":\"duwngH\",\"5AA7\":\"kwae\",\"9DA9\":\"muwk\",\"6CB3\":\"ha\",\"8AC7\":\"dam\",\"53CD\":\"baenX pjonX\",\"59D1\":\"ku\",\"5FD5\":\"dzyejH\",\"7E54\":\"tsyiH tsyik\",\"77E5\":\"trje\",\"7DE9\":\"hwanX\",\"9C68\":\"dzyang\",\"5F6A\":\"pjiw\",\"89F1\":\"hjut pjit\",\"6B72\":\"sjwejH\",\"58FB\":\"sejH\",\"700B\":\"tsyhimX\",\"D863\":\"nuwX nying\",\"528C\":\"kjwejH\",\"760F\":\"du\",\"958E\":\"hweang\",\"9B92\":\"bjuH\",\"6A9C\":\"kwajH kwat\",\"8E1F\":\"drje\",\"76A4\":\"ba\",\"9A27\":\"kwae kwea\",\"5D29\":\"pong\",\"82AC\":\"phjun\",\"51B6\":\"yaeX\",\"57BA\":\"phju phjuw phwoj\",\"9ABC\":\"kaek kak khaeH\",\"504B\":\"bjiengH\",\"6FCA\":\"jwojH xwat\",\"564F\":\"xip\",\"9F55\":\"het hot\",\"6E5F\":\"hwang\",\"7A67\":\"dzejH tsejH\",\"5CE8\":\"nga\",\"62EC\":\"kwat\",\"866F\":\"gjiw kjiw\",\"D84A\":\"khom\",\"4F75\":\"bengX pjiengH\",\"6EF4\":\"tek\",\"9E7F\":\"luwk\",\"8D08\":\"dzongH\",\"4E0A\":\"dzyangH dzyangX\",\"540E\":\"huwH huwX\",\"7E95\":\"sjang\",\"9F14\":\"kuX\",\"90A1\":\"pjang\",\"96A5\":\"tongH\",\"61AB\":\"minX\",\"7E2A\":\"pjit\",\"67AF\":\"khu\",\"D84B\":\"mjioj\",\"4F34\":\"banX phanH\",\"73B7\":\"temH temX\",\"79BB\":\"trhje\",\"85C3\":\"xaewk xawH\",\"91CB\":\"syek\",\"52CD\":\"gjaeng\",\"58D1\":\"xak\",\"5ED5\":\"imH\",\"7F54\":\"mjangX\",\"6ADD\":\"duwk\",\"76E5\":\"kwanH kwanX\",\"5E6A\":\"muwngX\",\"646E\":\"ngaw\",\"D845\":\"mjiet\",\"53F7\":\"hawH\",\"59FB\":\"jin\",\"9AFD\":\"tsrwae\",\"5FFF\":\"phjunH phjunX\",\"8E8A\":\"drjuw\",\"7D13\":\"syo zyoX\",\"8F1F\":\"trjwet\",\"71A0\":\"yip\",\"8FB4\":\"trhij trhinX\",\"7A3D\":\"kej\",\"62C2\":\"phjut\",\"514B\":\"khok\",\"574F\":\"bwoj\",\"80D6\":\"ban phanH\",\"695B\":\"huX\",\"6F5F\":\"sjek\",\"8CDE\":\"syang syangX\",\"51E0\":\"kijX\",\"57E4\":\"bjie bjieX\",\"98E6\":\"kan kjon\",\"5DE8\":\"gjoX kjuX\",\"816B\":\"tsyowngX\",\"8D73\":\"kjiwX\",\"D844\":\"kean\",\"900C\":\"yuw\",\"93A1\":\"tsi\",\"7B26\":\"bju\",\"62AB\":\"phje phjeH\",\"D85F\":\"hjwon\",\"872E\":\"hwik hwok\",\"7ABB\":\"tsrhaewng\",\"9F3E\":\"xan\",\"51CD\":\"tuwngH\",\"704C\":\"kwanH\",\"7C54\":\"srjuX suwk\",\"67D9\":\"haep\",\"4F5E\":\"nengH\",\"7FE9\":\"phjien\",\"81ED\":\"tsyhuwH\",\"4EF3\":\"bijX bjij phjijX\",\"757A\":\"kjang\",\"99FD\":\"xwen xwenH\",\"7F7E\":\"tsong\",\"8B86\":\"hjwejH\",\"4E88\":\"yo yoX\",\"8D8A\":\"hjwot hwat\",\"7E13\":\"tshjwen tshjwenH\",\"8A1B\":\"ngwa\",\"689C\":\"kaep kep\",\"5F29\":\"nuX\",\"80AC\":\"hjuw\",\"8AB0\":\"dzywij\",\"6D35\":\"swin xwen\",\"8CB4\":\"kjwiojH\",\"53B6\":\"kwong\",\"96B8\":\"lejH\",\"6BC6\":\"uwX\",\"8F49\":\"trjwenX\",\"524B\":\"khok\",\"6DCA\":\"homX\",\"914D\":\"phwojH\",\"9B51\":\"trhje\",\"D85E\":\"mjangH\",\"83D6\":\"tsyhang\",\"6A5B\":\"gjwot\",\"85DA\":\"zjowk\",\"6C5F\":\"kaewng\",\"52E0\":\"ljuw ljuwH ljuwk\",\"54E4\":\"maewng\",\"846F\":\"aewk\",\"76F8\":\"sjang sjangH\",\"597D\":\"xawH xawX\",\"6BD4\":\"bjij bjijH pjijH pjijX\",\"6E89\":\"kojH\",\"8F08\":\"trjuw\",\"9B10\":\"gij\",\"3F93\":\"jwien\",\"7C95\":\"phak\",\"641A\":\"lop\",\"57A3\":\"hjwon\",\"63AB\":\"tsju tsuw\",\"7C2A\":\"tsom tsrim\",\"65AF\":\"sje sjeH\",\"6FB3\":\"awH\",\"7DBF\":\"mjien\",\"714C\":\"hwang\",\"7B50\":\"khjwang\",\"66D9\":\"dzyoH\",\"895C\":\"tsyhem\",\"4E5E\":\"khjiot\",\"72E1\":\"kaewX\",\"5A66\":\"bjuwX\",\"666E\":\"phuX\",\"8AF1\":\"xjwiojH\",\"4FF3\":\"beaj\",\"8CF5\":\"phjuwngH\",\"51F7\":\"khwojH\",\"96F9\":\"baewk\",\"98FD\":\"paewX\",\"5DFF\":\"pjut\",\"7E7E\":\"khjenX\",\"4F88\":\"tsyheX\",\"730B\":\"pjiew\",\"8C8A\":\"maek\",\"518C\":\"tsrheak\",\"968E\":\"keaj\",\"5D94\":\"khim\",\"D842\":\"thaw\",\"699C\":\"paengH\",\"7FA8\":\"dzjenH yen zjenH\",\"602D\":\"bjit\",\"81AC\":\"tshjwet\",\"54BA\":\"xjwonX\",\"5EBE\":\"yuX\",\"6CCA\":\"bak\",\"904D\":\"penH\",\"554F\":\"mjunH\",\"76CE\":\"angH\",\"78D2\":\"hwinX\",\"9AE6\":\"maw\",\"5FE8\":\"ngwan ngwanH\",\"61EC\":\"khangX khwangH khwangX\",\"77F8\":\"kan\",\"778D\":\"suwX\",\"5F12\":\"syiH\",\"7B95\":\"ki\",\"95A1\":\"ngojH\",\"64AB\":\"phjuX\",\"62AF\":\"dzjaeX tsjaeX tsrae\",\"8F32\":\"dzywen\",\"7CBB\":\"trjang\",\"80C3\":\"hjwiojH\",\"92CF\":\"kep\",\"8E5C\":\"srjuwk\",\"75E1\":\"phju phu\",\"D855\":\"paeng\",\"73E5\":\"nyiH\",\"79E9\":\"drit\",\"D850\":\"xjwiojX\",\"616E\":\"ljoH\",\"8DF1\":\"driX\",\"56F7\":\"khwin\",\"5CFB\":\"swinH\",\"737A\":\"that trhaet\",\"8B8A\":\"pjenH\",\"568C\":\"dzejH\",\"3D11\":\"suH\",\"5C90\":\"gje gjie\",\"6E9C\":\"ljuwH\",\"8A1F\":\"zjowng zjowngH\",\"74A0\":\"bjon\",\"672D\":\"eat tsreat\",\"8CB0\":\"syejH\",\"4FB2\":\"tsyinH\",\"90B8\":\"tejX\",\"59BE\":\"tshjep\",\"4E47\":\"traek\",\"71CE\":\"lewH\",\"7FD2\":\"zip\",\"6A5F\":\"kjioj\",\"52E4\":\"gjion\",\"9DE6\":\"tsjew\",\"846B\":\"hu\",\"9BEA\":\"ling\",\"826F\":\"ljang\",\"6CF0\":\"thajH\",\"9C7B\":\"sjen\",\"D865\":\"pjun\",\"7A95\":\"dewX thew\",\"621A\":\"tshek\",\"681E\":\"khan\",\"5FA7\":\"penH\",\"65AB\":\"tsyak\",\"77B7\":\"hean\",\"7DBB\":\"dreanH\",\"5F3C\":\"bit\",\"95CB\":\"khwet\",\"7D50\":\"ket\",\"99D3\":\"phij\",\"7B54\":\"top\",\"60D9\":\"trjwet\",\"72E5\":\"zwin zwinH\",\"5A6A\":\"lom\",\"6E72\":\"hjwen\",\"57F7\":\"tsyip\",\"9EFD\":\"meangX\",\"787E\":\"drjweH\",\"8C86\":\"xjwon xwan hwan\",\"730F\":\"ken\",\"9E92\":\"gi\",\"8B1F\":\"thaw\",\"79A8\":\"kjioj kjiojH\",\"662D\":\"dzyew tsyew tsyewX\",\"87AC\":\"dzaw\",\"6A35\":\"dzjew\",\"54B6\":\"zyeX\",\"7E3D\":\"tsuwngX\",\"58BE\":\"khonX\",\"4F47\":\"drjoX\",\"6CC6\":\"det yit\",\"964D\":\"haewng kaewngH\",\"9A55\":\"khjew xjew\",\"6B5F\":\"yo\",\"96E2\":\"lje ljeH\",\"53E4\":\"kuX\",\"59E8\":\"yij\",\"67EC\":\"keanX\",\"6DF0\":\"syimX\",\"4A75\":\"hjunH xjwonH\",\"9D7B\":\"tsywij\",\"5E7D\":\"jiw\",\"7FFC\":\"yik\",\"6B89\":\"zwinH\",\"8A08\":\"kejH\",\"7F91\":\"yuwX\",\"5D12\":\"dzwit tswit\",\"4E9B\":\"saH\",\"611A\":\"ngju\",\"66AB\":\"dzamH\",\"792A\":\"ljejH\",\"4E30\":\"phjowng\",\"5C3C\":\"nejH nrij\",\"8CC7\":\"tsij\",\"6A48\":\"nraewH nyew\",\"96CB\":\"dzjwenX\",\"744C\":\"nywen nywenX\",\"7E50\":\"sjwejH\",\"9AD3\":\"sjweX\",\"71E5\":\"sawH sawX\",\"596A\":\"dwajH dwat\",\"636E\":\"kjo\",\"89F5\":\"kwaeng\",\"5EFB\":\"hwoj\",\"9DFD\":\"aewk haewk\",\"548C\":\"hwa hwaH\",\"700F\":\"ljuw ljuwX\",\"D847\":\"ywinX\",\"70A4\":\"tsyewH\",\"7AA8\":\"imH\",\"652D\":\"lejH lejX lje\",\"6F31\":\"suwH\",\"88B4\":\"khuH\",\"7D3D\":\"da\",\"65C2\":\"gjioj\",\"6FC6\":\"bjun\",\"8B49\":\"tsyingH\",\"D84D\":\"thak\",\"504F\":\"phjien\",\"7DD2\":\"zjoX\",\"6E5B\":\"dreamX drim tom tsjem\",\"81DA\":\"ljo\",\"56E0\":\"jin\",\"95E2\":\"bjiek\",\"50E4\":\"tanX\",\"7C67\":\"gjo kjoX\",\"866B\":\"drjuwng\",\"99EA\":\"srin\",\"64EC\":\"ngiX\",\"806F\":\"ljen\",\"6EF0\":\"gjangX\",\"8A73\":\"zjang\",\"72F8\":\"li\",\"6A89\":\"trhjeng\",\"378B\":\"nrjenX\",\"520E\":\"mjunX\",\"7E91\":\"lu\",\"9F10\":\"nojX\",\"4F9B\":\"kjowng kjowngH\",\"8C9D\":\"pajH\",\"6A1E\":\"uw tsyhu\",\"61AF\":\"tshomX\",\"6BB3\":\"dzyu\",\"75B7\":\"tejX\",\"79BF\":\"thuwk\",\"9A3E\":\"lwa\",\"6B48\":\"duw\",\"97CB\":\"hjwioj\",\"754C\":\"keajH\",\"91CF\":\"ljang ljangH\",\"58D5\":\"haw\",\"62D9\":\"tsywet\",\"6CDD\":\"suH\",\"76E1\":\"dzinX\",\"5E66\":\"mek\",\"626E\":\"bjun bjunX\",\"8EF1\":\"ku\",\"6C72\":\"kip\",\"55F7\":\"ngaw\",\"5FFB\":\"xjion\",\"7A7E\":\"ew ewH ewX\",\"770B\":\"khan khanH\",\"5F90\":\"zjo\",\"8F1B\":\"ljangH\",\"77A0\":\"trhaeng\",\"5A29\":\"mjenX mjonX\",\"8FB0\":\"zyin\",\"56B6\":\"eang\",\"50BA\":\"trhjejH\",\"5ABE\":\"kuwH\",\"68CA\":\"gi\",\"72CE\":\"haep\",\"6F5B\":\"dzjem dzjemH\",\"8ADE\":\"bjienH bjienX\",\"98EA\":\"nyimH\",\"65EC\":\"zwin\",\"816F\":\"dwot\",\"9F7B\":\"ten\",\"7DFC\":\"jun junH junX won\",\"388B\":\"tsyheX\",\"8D99\":\"dewX drjewX\",\"6F1A\":\"uw uwH\",\"95A9\":\"min mjun\",\"5C38\":\"syij\",\"76BF\":\"mjaengX\",\"8CC3\":\"nrimH\",\"4FC5\":\"gjuw\",\"6E44\":\"mij\",\"5BCD\":\"neng\",\"7A4C\":\"su\",\"4F5A\":\"yit\",\"6D6E\":\"bjuw\",\"81F1\":\"mjien\",\"9DF9\":\"ing\",\"50FB\":\"phjiek\",\"56FF\":\"hjuwH hjuwk\",\"757E\":\"lwijX lwoj\",\"8B82\":\"xwenH\",\"D853\":\"kwenX\",\"7E0F\":\"ban\",\"8A17\":\"thak\",\"7D39\":\"dzyewX\",\"8F45\":\"hjwon\",\"61C6\":\"tshawX\",\"584B\":\"yweng\",\"7DCE\":\"xwik\",\"9BE2\":\"ngej\",\"3F65\":\"nyuw\",\"91E6\":\"khuwX\",\"54E8\":\"tshjewH\",\"6AEC\":\"tsrhinH\",\"8E6F\":\"bjon\",\"60F0\":\"dwaH dwaX\",\"66F4\":\"kaeng kaengH\",\"907B\":\"nguH\",\"537D\":\"tsik tsit\",\"72FC\":\"lang\",\"9B0C\":\"drjwe dwaX twaX\",\"5C0E\":\"dawH\",\"8C99\":\"trhju\",\"6E1A\":\"tsyoX\",\"829D\":\"tsyi\",\"9EA5\":\"meak\",\"77BF\":\"gju\",\"83C7\":\"ku\",\"7B4C\":\"tshjwen\",\"50D1\":\"gjew\",\"95D3\":\"khoj khojX\",\"78E1\":\"khomH\",\"5A62\":\"bjieX\",\"8AED\":\"yuH\",\"4FEF\":\"pjuX\",\"747E\":\"ginH\",\"8A82\":\"dewX\",\"868A\":\"mjun\",\"5B8C\":\"hwan\",\"8B17\":\"pangH\",\"6D98\":\"dzriX\",\"811B\":\"hengH\",\"639C\":\"ngejH ngejX\",\"5E25\":\"srwijH srwit\",\"81B0\":\"bjon\",\"87B4\":\"drin\",\"6AC2\":\"draewH\",\"60C6\":\"trhjuw\",\"6B57\":\"sewH\",\"675F\":\"syowk\",\"7D63\":\"peang\",\"9AE2\":\"dejH\",\"5FE4\":\"nguH\",\"896B\":\"syek\",\"96EA\":\"sjwet\",\"61F0\":\"ljuwX\",\"67F4\":\"dzjeH dzrea tsjeH\",\"527D\":\"phjiew phjiewH phjiewX\",\"8A00\":\"ngjion ngjon\",\"6D85\":\"net\",\"798D\":\"hwaX\",\"980C\":\"zjowngH\",\"6D1A\":\"naewng howng huwng kaewngH\",\"819D\":\"sit\",\"D848\":\"jiw juw\",\"671E\":\"ki\",\"8F2E\":\"nyuwH nyuwX\",\"5E38\":\"dzyang\",\"503C\":\"driH\",\"74BF\":\"zwin\",\"973E\":\"meaj\",\"7BE1\":\"tsrhwaenH\",\"77E9\":\"kjuX\",\"89ED\":\"khje\",\"6F6E\":\"drjew\",\"83F1\":\"ling\",\"52FB\":\"ywin\",\"7D7A\":\"trhij\",\"54FF\":\"kaX\",\"7A0B\":\"drjeng\",\"6E98\":\"khap khop\",\"821B\":\"tsyhwenX\",\"4FAE\":\"mjuX\",\"82B0\":\"gjeH\",\"5BB6\":\"kae\",\"8B41\":\"xwae\",\"4E43\":\"nojX\",\"63C6\":\"gjwijX\",\"65CA\":\"pjangX\",\"5C4F\":\"beng pjieng pjiengH pjiengX\",\"71D2\":\"syew\",\"4ED8\":\"pjuH\",\"645F\":\"luw\",\"5AE0\":\"li\",\"7E63\":\"hweaH xweak\",\"99E2\":\"ben beng\",\"8A6B\":\"trhaeH\",\"68EC\":\"khjwen kwenH\",\"64F4\":\"khwak\",\"5F79\":\"ywek\",\"947F\":\"dzak\",\"8B00\":\"mjuw\",\"8D04\":\"tsyijH\",\"990C\":\"nyiH\",\"809D\":\"ka\",\"459F\":\"maeng\",\"96A9\":\"awH juwk\",\"6BAB\":\"tan\",\"742A\":\"gi\",\"6DAF\":\"ngea\",\"67B3\":\"kjieX tsyeX\",\"9A36\":\"dzrjuwH tsrjuw\",\"513C\":\"ngjaemX\",\"81C7\":\"tsjwenX\",\"52D1\":\"lojH\",\"97D3\":\"han\",\"8F58\":\"hwaenH\",\"60DD\":\"tsyhangX\",\"76E9\":\"trjuw\",\"6E6E\":\"in\",\"82F1\":\"jaeng\",\"7A76\":\"kjuwH\",\"9EF9\":\"trijX\",\"90FD\":\"tu\",\"55FF\":\"thomX\",\"767E\":\"paek\",\"598C\":\"dzjengX\",\"4E19\":\"pjaengX\",\"851F\":\"tshuwH tshuwk\",\"7BA0\":\"tsyweX\",\"682D\":\"nyi\",\"89AC\":\"kijH\",\"4EAE\":\"ljangH\",\"7E39\":\"phjiewX\",\"56BE\":\"xwanH\",\"4F43\":\"den denH\",\"64CA\":\"kek\",\"8AD6\":\"lwon lwonH\",\"4FD8\":\"phju\",\"8CDA\":\"lojH\",\"D856\":\"phjuwH\",\"5BE0\":\"gjuX\",\"98E2\":\"kij\",\"5DE4\":\"ljep\",\"69EC\":\"hwaeH\",\"D857\":\"kjuwk\",\"5E79\":\"kanH\",\"71FC\":\"dzinH\",\"879D\":\"hwojH kwij kwijH\",\"9DA1\":\"hat khat\",\"58A3\":\"phaewk phuwk\",\"6CAB\":\"mat majH\",\"72BF\":\"phjon\",\"6C40\":\"theng\",\"86C7\":\"ye zyae\",\"5FCD\":\"nyinX\",\"9ACF\":\"luw\",\"55D1\":\"xaep\",\"53D5\":\"trjwejH\",\"67DD\":\"thak\",\"865C\":\"luX\",\"7DE1\":\"min minX\",\"5F62\":\"heng\",\"8FED\":\"det\",\"696E\":\"trhjoX tuX\",\"5EF7\":\"deng dengH\",\"7D76\":\"dzjwet\",\"99F9\":\"maewng\",\"97FD\":\"om\",\"52FF\":\"mjut\",\"7C0B\":\"kwijX\",\"838A\":\"tsrjang\",\"5E8C\":\"ngaeX\",\"669C\":\"thejH\",\"821F\":\"tsyuw\",\"8EAC\":\"kjuwng\",\"82B4\":\"mjut xwot\",\"98B8\":\"tsrhi\",\"96BC\":\"swinX\",\"65C6\":\"bajH\",\"5C4B\":\"uwk\",\"63CA\":\"phik\",\"9F4D\":\"tsij\",\"3ECC\":\"thu\",\"79CE\":\"bjunH\",\"8DD6\":\"tsyek\",\"81DE\":\"gju gjuH\",\"50E8\":\"pjun pjunH\",\"8C6B\":\"yoH\",\"3BFA\":\"haemX\",\"76FC\":\"pheanH\",\"4E02\":\"khawX\",\"7E8D\":\"lwij\",\"4F97\":\"duwng duwngX thuwng thuwngH\",\"59A3\":\"pjijH pjijX\",\"7E22\":\"dong\",\"6DAB\":\"kwanH\",\"722A\":\"tsraewX\",\"6BAF\":\"pjinH\",\"9A3A\":\"trijH\",\"573C\":\"net\",\"903E\":\"yu\",\"40C9\":\"min\",\"7F4C\":\"eang\",\"52D5\":\"duwngX\",\"66DD\":\"bawH\",\"9D60\":\"howk kowk\",\"5E62\":\"draewng\",\"7AE5\":\"duwng\",\"526A\":\"tsjenX\",\"686E\":\"pwoj\",\"7A7A\":\"khuwng khuwngH khuwngX\",\"707E\":\"tsoj\",\"828A\":\"tshen\",\"5F8C\":\"huwH huwX\",\"7B0F\":\"xwot\",\"8F17\":\"ngej\",\"679C\":\"khwaX kwaX\",\"7DA0\":\"ljowk\",\"5A25\":\"nga\",\"D85C\":\"sjet\",\"7D9C\":\"tsowngH\",\"85B0\":\"xjun\",\"5ABA\":\"mijX\",\"97BC\":\"gwijH\",\"50BE\":\"khjwieng\",\"8C41\":\"xwat\",\"6EC2\":\"phang\",\"62CA\":\"phjuX\",\"8CD6\":\"syae\",\"80DE\":\"paew phaew\",\"5DE0\":\"keng\",\"5BE4\":\"nguH\",\"8D6B\":\"xaek\",\"92EA\":\"phju phu\",\"6FEC\":\"swinH\",\"65F0\":\"kanH\",\"63F4\":\"hjwenH hjwon\",\"79F8\":\"keat\",\"77FC\":\"kaewng khuwngH\",\"937F\":\"tsri\",\"7D8D\":\"pjut\",\"9C0C\":\"tshjuw\",\"8B99\":\"xwan\",\"7D22\":\"sak sraek\",\"6EAB\":\"won\",\"68AF\":\"thej\",\"4FC1\":\"ngjuX\",\"49C5\":\"yij\",\"5DCD\":\"ngjwioj\",\"7C4C\":\"drjuw\",\"8A58\":\"khjut\",\"65DD\":\"kwajH\",\"7FE1\":\"bjiojH\",\"73E9\":\"haeng\",\"5CF7\":\"srin\",\"7F76\":\"ljuwX\",\"797A\":\"gi\",\"D859\":\"lwa\",\"7E0B\":\"drjweH\",\"818A\":\"phak\",\"5C8C\":\"ngip\",\"801F\":\"gjoX\",\"72A8\":\"tsyhuw\",\"8CAC\":\"tsreaH tsreak\",\"80B4\":\"haew\",\"9AB8\":\"heaj\",\"753D\":\"kwenX\",\"584F\":\"khojX\",\"75D2\":\"yang yangX zjang\",\"6C57\":\"hanH\",\"665B\":\"henH nenH\",\"89DA\":\"ku\",\"58E4\":\"nyang nyangX\",\"6CEC\":\"xwet\",\"66F0\":\"hjwot\",\"60F4\":\"tsyhwenX tsyweH\",\"967B\":\"in\",\"907F\":\"bjieH\",\"D860\":\"bjomX\",\"8A99\":\"heang\",\"681A\":\"drimX\",\"5BA3\":\"sjwen\",\"55A7\":\"xjwonX\",\"77BB\":\"tsyem\",\"4EC1\":\"nyin\",\"85C7\":\"yoX zjoX\",\"50D5\":\"bowk buwk phuwk\",\"4E56\":\"kweajH\",\"8B58\":\"syik\",\"5C62\":\"ljuH\",\"72E9\":\"syuwH\",\"506A\":\"pjuwk pik\",\"5DF7\":\"haewngH\",\"7E76\":\"ik\",\"9AF9\":\"xjuw\",\"4F80\":\"heng\",\"6B03\":\"dzream\",\"8C82\":\"tew\",\"D84C\":\"gi\",\"6B98\":\"dzan\",\"9B23\":\"ljep\",\"D841\":\"tsyhowng\",\"81B4\":\"mju xjuX xu\",\"5EB6\":\"syoH tsyoH\",\"7A39\":\"denH tsyin tsyinX\",\"95BC\":\"at\",\"52BE\":\"hojH hok\",\"6CC2\":\"hwengX\",\"66C6\":\"lek\",\"594F\":\"tsuwH\",\"615F\":\"duwngH\",\"82DE\":\"bjewX paew\",\"5FE0\":\"trjuwng\",\"59E4\":\"kuwH\",\"53E8\":\"thaw\",\"6DEC\":\"tshwojH\",\"67F0\":\"najH\",\"9D77\":\"jwon\",\"547D\":\"mjaengH\",\"5F0A\":\"bjiejH\",\"820C\":\"kwat\",\"8E14\":\"trhaewk\",\"771A\":\"srjengX\",\"7D1E\":\"tamX\",\"8DA9\":\"trhik\",\"70AB\":\"hwenH\",\"76AF\":\"kanX\",\"9B32\":\"keak lek\",\"5E34\":\"dzjenX tsjen\",\"873A\":\"ngej nget\",\"57C5\":\"bjang\",\"8CD3\":\"pjin pjinH\",\"6E54\":\"tsjen\",\"7BDD\":\"kuw\",\"6DE9\":\"ling\",\"8C68\":\"xjioj xjiojX\",\"756E\":\"muwX\",\"99F1\":\"lak\",\"7B72\":\"sraew\",\"85F9\":\"ajH\",\"D852\":\"kam\",\"4EFF\":\"phjangX\",\"7A07\":\"khwonX\",\"660F\":\"xwon\",\"6C13\":\"meang\",\"8B92\":\"dzraem dzraemH dzream\",\"4E94\":\"nguX\",\"60A0\":\"yuw\",\"55AE\":\"tan tanX\",\"9EB4\":\"khjuwk\",\"84B8\":\"tsying\",\"6B3D\":\"khim\",\"8ABC\":\"ngjeH\",\"79C6\":\"kanX\",\"7FCA\":\"yik\",\"834D\":\"gjiew\",\"65CE\":\"nrjeX\",\"6BD2\":\"dowk\",\"7E5F\":\"tsyhenX\",\"6A67\":\"tsong\",\"906B\":\"suwk\",\"8FEA\":\"dek\",\"64F8\":\"ljep\",\"887B\":\"nyem\",\"7C89\":\"pjunX\",\"9D08\":\"ngaenH\",\"628D\":\"sying tsyingX\",\"8F14\":\"bjuX\",\"7C1E\":\"tan\",\"80A1\":\"kuX\",\"8CA9\":\"pjonH\",\"95C3\":\"khwek\",\"81CB\":\"dwon\",\"4ED5\":\"dzriX\",\"6F54\":\"ket\",\"7ADD\":\"bengX\",\"60E1\":\"ak u uH\",\"8D68\":\"downg\",\"746E\":\"lit\",\"5DF3\":\"ziX\",\"667A\":\"trjeH\",\"8A92\":\"xi\",\"4F94\":\"mjuw muw\",\"722D\":\"tsreang\",\"93AC\":\"hawX\",\"54AE\":\"trjuwH tuwH\",\"7E35\":\"manH\",\"6A3D\":\"tswon\",\"72C2\":\"gjwang\",\"9C49\":\"pjiet\",\"64CE\":\"gjaeng\",\"8E55\":\"pjit\",\"795B\":\"khjo\",\"96DA\":\"kwanH\",\"7F5F\":\"kuX\",\"82E2\":\"yiX\",\"6B67\":\"gjie\",\"526D\":\"uwk\",\"5E75\":\"ken\",\"6BFC\":\"hat\",\"618D\":\"kjew\",\"800C\":\"nyi\",\"8A10\":\"kjejH kjet kjot\",\"6D95\":\"thejH thejX\",\"5A9B\":\"hjwenH hjwon\",\"751A\":\"dzyimH dzyimX\",\"72AB\":\"tsyhuw\",\"6D2A\":\"huwng\",\"502C\":\"traewk\",\"60B7\":\"lejH\",\"6ABB\":\"haemX hamX\",\"6CBF\":\"ywen\",\"8F3E\":\"trjenX\",\"55C5\":\"xjuwH\",\"D85D\":\"mek\",\"5FC9\":\"taw\",\"7E48\":\"kjangX\",\"604C\":\"thew\",\"84CF\":\"lwaX\",\"6A50\":\"thak\",\"8ED3\":\"bjomX\",\"6C54\":\"xjiot\",\"77D9\":\"khamH\",\"555A\":\"pijX\",\"79DD\":\"lek\",\"63E1\":\"aewk\",\"65E5\":\"nyit\",\"6FE9\":\"huH hwak\",\"87F9\":\"heaX\",\"657A\":\"khju khjuH\",\"58EB\":\"dzriX\",\"640F\":\"pak pjuH\",\"64A4\":\"drjet trhjet\",\"7B31\":\"kuwX\",\"7D35\":\"drjoX\",\"693D\":\"drjwen\",\"88BC\":\"kaek kak\",\"71C2\":\"dom dzjem zjem\",\"7BC6\":\"drjwenX\",\"7DCA\":\"kjinX\",\"814D\":\"nyimX\",\"67CE\":\"bjuX buwX pju\",\"8B51\":\"kjewX\",\"7A5B\":\"tsraewk\",\"95DA\":\"khjwie\",\"7C5F\":\"lajH\",\"42E0\":\"puX\",\"8DEA\":\"gjweX khjweX\",\"516D\":\"ljuwk\",\"5B71\":\"dzrean dzrjen\",\"7CF4\":\"dek\",\"66F8\":\"trjak\",\"8A7B\":\"ngaek\",\"68FC\":\"bjun\",\"5C0A\":\"tswon\",\"608D\":\"hanH\",\"8B10\":\"mjit\",\"5B9B\":\"jwonX\",\"741A\":\"kjo\",\"7E1E\":\"kawX\",\"82A1\":\"gjaemH gjemH gjemX\",\"8EA9\":\"khjwak kjwak\",\"73AB\":\"mwoj\",\"5B30\":\"jieng\",\"5D34\":\"weaj\",\"6DBF\":\"traewk\",\"8E3E\":\"pjuwk phik bik\",\"52C1\":\"kjiengH\",\"5EC9\":\"ljem\",\"614C\":\"xwangX\",\"85CF\":\"dzang dzangH\",\"8FD3\":\"ngaeH\",\"995C\":\"jemH\",\"64E5\":\"lamX\",\"4A66\":\"dew\",\"D854\":\"wat\",\"90ED\":\"kwak\",\"5FF3\":\"dwon\",\"86F9\":\"yowngX\",\"647A\":\"tsyep\",\"88FD\":\"tsyejH\",\"5F88\":\"honX\",\"630B\":\"tsyinH\",\"6F13\":\"lje\",\"799C\":\"hjwaeng hjwaengH\",\"9D1F\":\"tsyhij\",\"63A0\":\"ljak ljangH\",\"65A4\":\"kjion kjionH\",\"4E29\":\"kjiw kjiwX\",\"6FA8\":\"dzyejH\",\"91AC\":\"tsjangH\",\"56AE\":\"xjangH\",\"7A31\":\"tsyhingH\",\"7C35\":\"luH\",\"9DB4\":\"haewk hak\",\"683D\":\"dzojH tsoj\",\"7AC6\":\"gjuwng\",\"7CCA\":\"hu\",\"8C55\":\"syeX\",\"59DC\":\"kjang\",\"9EDE\":\"temX\",\"8AE6\":\"tejH\",\"8CEA\":\"trijH tsyit\",\"506D\":\"mjienX\",\"71EC\":\"xjweX\",\"7DF4\":\"lenH\",\"89A9\":\"tuX\",\"562C\":\"tsrhwaejH tsrhweajH\",\"72AF\":\"bjomX\",\"5C30\":\"dzyowngX\",\"6CBB\":\"dri driH\",\"4E3C\":\"tsjengX\",\"6ABF\":\"jiemX\",\"55C1\":\"dej\",\"59C9\":\"tsijX\",\"84CB\":\"hap kajH\",\"88D3\":\"koj kok\",\"535A\":\"pak\",\"65E1\":\"kjiojH\",\"63E5\":\"tejH thejH\",\"54EB\":\"tsjowk\",\"97ED\":\"kjuwX\",\"716E\":\"tsyoX\",\"7F72\":\"dzyoH\",\"8FFD\":\"trwij\",\"8E27\":\"dek tsjuwk\",\"68A8\":\"lij\",\"7D31\":\"pjut\",\"9AB4\":\"dzje dzjeH\",\"7DC6\":\"sek thejH\",\"38C8\":\"sijH\",\"874D\":\"tsik\",\"8B55\":\"mju\",\"95D6\":\"trhimH\",\"93DA\":\"tshek\",\"7A5F\":\"zwijH\",\"6E67\":\"yowngX\",\"8DE6\":\"trju\",\"76EC\":\"kuX\",\"60F8\":\"gjwieng\",\"8C7B\":\"nganH\",\"4F7D\":\"tshijH\",\"668D\":\"jot\",\"8D10\":\"dzinH\",\"8B14\":\"xjak\",\"721A\":\"yak\",\"9E9D\":\"dzyaeH\",\"3F1C\":\"angH\",\"84A1\":\"bang paeng\",\"82A5\":\"kaejH keajH\",\"75AB\":\"yek\",\"902E\":\"dejH dojH\",\"79B3\":\"nyang\",\"5B34\":\"yeng\",\"67B7\":\"kae kaeH\",\"4F3C\":\"ziX\",\"6BBF\":\"denH tenH\",\"54C1\":\"phimX\",\"91C3\":\"srje srjo\",\"52C5\":\"trhik\",\"85CB\":\"dewH\",\"674C\":\"ngwot\",\"89D3\":\"gjiw\",\"6B54\":\"xjo xjoH\",\"70D9\":\"lak\",\"525A\":\"tsriH\",\"3BDF\":\"luwk\",\"585E\":\"sojH sok\",\"53EF\":\"khaX\",\"7E72\":\"keaH\",\"80F9\":\"nyi\",\"627A\":\"tsyeX\",\"808E\":\"khongX\",\"8E92\":\"lek\",\"9D1B\":\"jwon\",\"5E1D\":\"tejH\",\"7F9C\":\"drjoX\",\"63A4\":\"ping\",\"97AC\":\"kjon\",\"50AE\":\"tsaw\",\"76C2\":\"hju\",\"7ACA\":\"tshet\",\"864D\":\"xu\",\"60CE\":\"giH\",\"51D8\":\"sje\",\"92DA\":\"dew\",\"929A\":\"dew thew tshjew\",\"8CE6\":\"pjuH\",\"566D\":\"kek kewH\",\"5C71\":\"srean\",\"7BF4\":\"dek\",\"61F8\":\"hwen\",\"6FFC\":\"lowk\",\"8B7F\":\"hwejH\",\"590A\":\"swij\",\"840C\":\"meang\",\"8E10\":\"dzjenX\",\"5E9B\":\"tshjeH\",\"711A\":\"bjun\",\"9D9D\":\"pjuwk bik\",\"589F\":\"khjo\",\"7B1E\":\"trhi\",\"6F26\":\"zri\",\"76AB\":\"phjewX\",\"932E\":\"kuH\",\"7AB3\":\"yuX\",\"8B3E\":\"maenH man manH mjen\",\"7A48\":\"mwon\",\"80CF\":\"tsrijX\",\"4FD1\":\"yowngX\",\"8AD3\":\"dzjenH dzjenX\",\"7DDD\":\"tship tsip\",\"61E5\":\"trhijH tsyijH\",\"736E\":\"sjenX\",\"7D72\":\"si\",\"99F5\":\"ljuw\",\"83F9\":\"tsrjo\",\"4EFB\":\"nyimH\",\"8DFD\":\"giX\",\"6B7E\":\"mwot\",\"D84E\":\"tsyowngX\",\"600F\":\"jangH jangX\",\"838E\":\"srae swa\",\"6A13\":\"luw\",\"9E1B\":\"kwanH\",\"981F\":\"ngaek\",\"66A0\":\"kawX\",\"60A4\":\"tshuwng\",\"9EB0\":\"mjuw\",\"82B8\":\"hjun hjunH\",\"6D3D\":\"heap\",\"6DD2\":\"tshej\",\"52D8\":\"khomH\",\"6C67\":\"khen khenH\",\"8FE6\":\"kja\",\"966B\":\"bjiojH bjiojX\",\"89EA\":\"sjeng\",\"74EC\":\"pjangX\",\"906F\":\"dwonH dwonX\",\"5F71\":\"jaengX\",\"62F8\":\"trhjeX\",\"8E7B\":\"gjak kjak kjewX\",\"887F\":\"gimH kim\",\"5E06\":\"bjom\",\"9B08\":\"gjwen khjwen\",\"580A\":\"ak\",\"850C\":\"suwk\",\"8F10\":\"hwanH ngwanH ngwanX\",\"599F\":\"aenH\",\"80A5\":\"bjioj\",\"682A\":\"trju\",\"71AF\":\"nyenX xanX\",\"65B7\":\"twanX twanH dwanX\",\"8A3E\":\"tsje tsjeX zje\",\"93C3\":\"tsuwk\",\"50C5\":\"ginH\",\"9DC7\":\"khuwH\",\"5AC9\":\"dzijH\",\"87CB\":\"sit srit\",\"81CF\":\"binX\",\"6F50\":\"tsjewH\",\"72D9\":\"tshjo\",\"7CDD\":\"somX\",\"9D5C\":\"dej\",\"5A5E\":\"hengX\",\"66E1\":\"dep\",\"7C72\":\"yuH\",\"82F9\":\"beng bjaeng\",\"3A09\":\"min\",\"5B88\":\"syuwH syuwX\",\"670B\":\"bong\",\"610F\":\"iH\",\"4F90\":\"xwijH xwik\",\"9F1B\":\"kaw\",\"61A4\":\"bjunX\",\"742D\":\"luwk\",\"95AC\":\"lang langH\",\"7E31\":\"tsjowngH tsuwngX\",\"99B4\":\"zwin\",\"8DBC\":\"kenX\",\"78CA\":\"lwojX\",\"844D\":\"pjuwk\",\"96D6\":\"swij\",\"7F5B\":\"ku\",\"795F\":\"swijH\",\"8EE6\":\"xjwangH\",\"7FF0\":\"hanH\",\"6DFC\":\"mjiewX\",\"897F\":\"sej\",\"7F85\":\"la\",\"6B8D\":\"bjewX phju\",\"8A0C\":\"huwng\",\"751E\":\"dzyang\",\"89A1\":\"hek\",\"8FA5\":\"sjet\",\"672A\":\"mjiojH\",\"8F3A\":\"tsri\",\"66BF\":\"xi\",\"853E\":\"lij\",\"59C1\":\"xjuX\",\"5FC5\":\"pjit\",\"7E44\":\"ej\",\"88CB\":\"dzyuX\",\"8ECF\":\"ngjwot ngwot\",\"555E\":\"aek aeX\",\"8E64\":\"tsjowng\",\"65E9\":\"tsawX\",\"7D6E\":\"sjoH trhjoH\",\"91F1\":\"dajH dejH\",\"54F3\":\"traet\",\"6F7A\":\"dzrjen\",\"83FD\":\"syuwk\",\"5D19\":\"lwon\",\"531D\":\"tsop\",\"68A0\":\"ljoX\",\"7B2D\":\"leng\",\"5DAE\":\"xjemX\",\"53B2\":\"ljejH\",\"96B4\":\"ljowngX\",\"6D39\":\"hwan\",\"8CB8\":\"thojH\",\"82BC\":\"mawH\",\"4E4F\":\"bjop\",\"63D2\":\"tsrheap\",\"7A57\":\"zwijH\",\"95DE\":\"khamH xaemX xamX xeamX\",\"4EE4\":\"ljeng ljengH\",\"986B\":\"syen\",\"87EA\":\"hwejH\",\"76F4\":\"driH drik\",\"8A77\":\"duwng\",\"9F04\":\"trju\",\"6A8D\":\"ik\",\"8B0C\":\"ka\",\"5B97\":\"tsowng\",\"88A1\":\"nyem\",\"84A9\":\"tsu\",\"79AB\":\"domX\",\"6BB7\":\"ean jion jionX\",\"67BF\":\"ngat\",\"58C1\":\"pek\",\"9DC3\":\"aenH\",\"7F44\":\"khengH\",\"54C9\":\"tsoj\",\"6B4C\":\"ka\",\"64E9\":\"nywet\",\"9AED\":\"tsje\",\"82FD\":\"ku\",\"7D03\":\"zwin zywin\",\"968A\":\"drwijH dwojH\",\"6F0F\":\"luwH\",\"521D\":\"tsrhjo\",\"6FA4\":\"draek syek yek\",\"65A8\":\"tshjang\",\"4EBA\":\"nyin\",\"76CA\":\"jiek\",\"8A4D\":\"yejH\",\"4F4F\":\"drjuH\",\"62D2\":\"gjoX kjuX\",\"3C59\":\"xjuwX\",\"5DD8\":\"ngjenX ngjonX\",\"53DC\":\"suwX\",\"775F\":\"swijH\",\"6D63\":\"hwanX\",\"8B77\":\"huH\",\"7D85\":\"sjem tshim tsim\",\"4F0E\":\"gjeX gjie\",\"529B\":\"lik\",\"7D1A\":\"kip\",\"652A\":\"kaewX\",\"4E38\":\"hwan\",\"873E\":\"kwaX\",\"5BC1\":\"dzjep\",\"7A40\":\"kuwk\",\"9EC3\":\"hwang\",\"8ACB\":\"dzjeng tshjengX\",\"905C\":\"swonH\",\"8A60\":\"hjwaengH\",\"8C64\":\"khonX\",\"67E9\":\"gjuwH\",\"5AEB\":\"mu\",\"99ED\":\"heajX\",\"7F6E\":\"triH\",\"8FF9\":\"tsjek\",\"81FD\":\"heamH\",\"677E\":\"zjowng\",\"6C0F\":\"dzyeX\",\"7E98\":\"tswanX\",\"6AA0\":\"gjaeng\",\"8E23\":\"bok phuwH\",\"66A8\":\"gijH\",\"5FAE\":\"mjioj\",\"9B41\":\"khwoj\",\"5E43\":\"hjwioj\",\"75CA\":\"tshjwen\",\"3F59\":\"ywinX\",\"725B\":\"ngjuw\",\"745F\":\"srit\",\"97DE\":\"junH junX\",\"9A6B\":\"pjiew pjiw\",\"85EA\":\"suwX\",\"596D\":\"xik\",\"78EC\":\"khengH\",\"4F79\":\"kjweX\",\"6EF8\":\"xuX\",\"60FC\":\"pjienX\",\"7A81\":\"dwot thwot\",\"7C1A\":\"mek\",\"559F\":\"khweajH khwijH\",\"761E\":\"jejH\",\"8AA1\":\"keajH\",\"86A9\":\"tsyhi\",\"592C\":\"kwaejH kwet\",\"7DAF\":\"daw\",\"77B3\":\"thuwng\",\"8A36\":\"xa\",\"4F38\":\"syin\",\"65BF\":\"yuw\",\"5AC1\":\"kaeH\",\"7D44\":\"tsuX\",\"91C7\":\"tshojX\",\"9F58\":\"heajH\",\"70DD\":\"tsying\",\"6CE5\":\"nej\",\"8D64\":\"tshjek tsyhek\",\"66E9\":\"nangX\",\"5BEB\":\"sjaeX\",\"98ED\":\"trhik\",\"57F3\":\"khomX\",\"8EF9\":\"tsyeX\",\"6C7A\":\"kwet xwet\",\"80FD\":\"noj nong\",\"501D\":\"kanH\",\"6BA0\":\"xjuwX\",\"3B2B\":\"enH\",\"99AC\":\"maeX\",\"5EAE\":\"yuw yuwX\",\"93B0\":\"yit\",\"50B2\":\"ngaw ngawH\",\"9A41\":\"ngaw\",\"5F43\":\"pjit\",\"74CA\":\"gjwieng\",\"884D\":\"yenH yenX\",\"5FD8\":\"mjang mjangH\",\"755F\":\"tsik tsrhik\",\"96DE\":\"kej\",\"82E6\":\"khuX kuX\",\"79EC\":\"gjoX\",\"837B\":\"dek\",\"61FC\":\"gjuH\",\"5F02\":\"yiH\",\"530A\":\"kjuwk\",\"7D16\":\"drinX\",\"529F\":\"kuwng\",\"711E\":\"thwoj thwon\",\"8DA1\":\"tshwijX\",\"6F22\":\"xanH\",\"81A9\":\"nrijH\",\"7AAF\":\"yew\",\"992E\":\"thet\",\"70B3\":\"pjaengX\",\"6EB7\":\"hwonH\",\"64BB\":\"that\",\"813E\":\"bjie\",\"5BC5\":\"yij yin\",\"7A44\":\"tsjejH\",\"96C7\":\"kuH\",\"4FCD\":\"langH ljang\",\"8ACF\":\"tsju\",\"5B5A\":\"phju\",\"6DE1\":\"damH damX\",\"4EF7\":\"keajH\",\"6B7A\":\"ngat\",\"617E\":\"yowk\",\"4E8C\":\"nyijH\",\"769C\":\"kawX\",\"673D\":\"xjuwX\",\"86BC\":\"xuwX\",\"7FC2\":\"pjun\",\"9B45\":\"mijH\",\"8F4D\":\"drjet\",\"69CE\":\"dzrae dzraeX\",\"D869\":\"tsrhjoX\",\"9DD6\":\"ej\",\"58D8\":\"lwijX\",\"725F\":\"mjuw\",\"5F6D\":\"baeng bang pang\",\"66FC\":\"manH mjonH\",\"827F\":\"nying\",\"5E02\":\"dzyiX\",\"7A85\":\"ewX\",\"9B04\":\"dejH sjek thejH thek\",\"520A\":\"khan\",\"5F97\":\"tok\",\"7A1A\":\"drijH\",\"539F\":\"ngjwon\",\"8CA1\":\"dzoj\",\"6E22\":\"bjuwng\",\"8AA5\":\"kawH\",\"80A9\":\"hen hon ken\",\"7DAB\":\"sjenH\",\"622A\":\"dzet\",\"982E\":\"xwojH\",\"8A3A\":\"drinH tsyinX\",\"7D40\":\"trwit\",\"97C7\":\"duwk\",\"50C9\":\"tshjem\",\"8DCB\":\"bat\",\"4ECD\":\"nying\",\"5C56\":\"sej\",\"5A5A\":\"xwon\",\"76DD\":\"luwk\",\"975C\":\"dzjengX\",\"505E\":\"yep\",\"9B74\":\"bjang\",\"5DEB\":\"mju\",\"9EED\":\"amX\",\"786E\":\"haewk\",\"6C76\":\"mjunH mwon\",\"88F9\":\"kwaX\",\"5B84\":\"kwijX\",\"6D0B\":\"yang\",\"4F8C\":\"im\",\"9F17\":\"daw\",\"6BA4\":\"syang\",\"7E2D\":\"lje\",\"58AE\":\"dwaX xjwie\",\"9A45\":\"khju khjuH\",\"72CA\":\"kwek\",\"8E4D\":\"nrjenX\",\"755B\":\"tsyin tsyinH tsyinX\",\"57DC\":\"yaeX\",\"5E6D\":\"met\",\"7FEC\":\"xjwiojH\",\"9B6F\":\"luX\",\"8FA1\":\"pjenX\",\"83A9\":\"bjewX phju\",\"8F36\":\"yuw\",\"9AC3\":\"ngju ngjuwX\",\"8ECB\":\"eat\",\"88CF\":\"liX\",\"82D3\":\"leng\",\"5F56\":\"thwanH\",\"595A\":\"hej\",\"535E\":\"bjenH\",\"6FE1\":\"nyu\",\"8E60\":\"tsyek\",\"63E9\":\"keat\",\"58EF\":\"tsrjangH\",\"7B6E\":\"dzyejH\",\"97F1\":\"sjem\",\"52F3\":\"xjun\",\"5E80\":\"phjieX phjijX\",\"9D82\":\"ngek\",\"8B8E\":\"dzyuw\",\"5B19\":\"dzjang\",\"7A98\":\"gwinX\",\"749C\":\"hwang\",\"901F\":\"suwk\",\"8A23\":\"kwet\",\"382F\":\"yiX\",\"5BAE\":\"kjuwng\",\"96B0\":\"zip\",\"90B4\":\"pjaengX\",\"4FB6\":\"ljoX\",\"8AB8\":\"hen\",\"84BC\":\"tshang\",\"4E4B\":\"tsyi\",\"65D2\":\"ljuw\",\"93DE\":\"yowng\",\"81EA\":\"dzijH\",\"986F\":\"xenX\",\"807F\":\"ywit\",\"7E81\":\"xjun\",\"9F00\":\"tshjuwk\",\"6C8D\":\"huH\",\"8EA1\":\"nrjep\",\"82A9\":\"gim\",\"602A\":\"kweajH\",\"9A2E\":\"ljuw\",\"6DB7\":\"tuwngH\",\"8E36\":\"dejH drjeX\",\"67BB\":\"yejH\",\"5EC1\":\"tsrhiH\",\"58C5\":\"jowng jowngH jowngX\",\"95C7\":\"omH\",\"52C9\":\"mjenX\",\"8FCB\":\"gjwangX hjwangH hjwangX kjwangH kjwangX\",\"68E5\":\"bjon\",\"5FEB\":\"khwaejH\",\"7A6E\":\"pjew\",\"96F1\":\"phang\",\"53F3\":\"hjuwH hjuwX\",\"90F5\":\"hjuw\",\"687A\":\"ljuwX\",\"5F80\":\"hjwangX\",\"908A\":\"pen\",\"8A8E\":\"tshjowk\",\"7B98\":\"gwinX khwin\",\"541D\":\"linH\",\"63A8\":\"thwoj tsyhwij\",\"7C2D\":\"dzyejH\",\"9DAC\":\"tshang tshjang\",\"5AAE\":\"thuw\",\"91B4\":\"lejX\",\"4EB6\":\"tanX\",\"6A39\":\"dzyuH dzyuX\",\"D868\":\"nan nanH\",\"7CC2\":\"somX\",\"76C6\":\"bwon\",\"64D2\":\"gim\",\"5BD8\":\"tsyeH\",\"55DC\":\"dzyijH\",\"4FE0\":\"hep\",\"6B63\":\"tsyeng tsyengH\",\"8CE2\":\"hen henH\",\"7DEC\":\"mjienX\",\"77F0\":\"tsong\",\"8D77\":\"khiX\",\"8A87\":\"khwae\",\"908B\":\"ljep\",\"6E9F\":\"meng\",\"74A3\":\"kjioj\",\"8FB5\":\"trhjaek\",\"6E34\":\"gjet khat\",\"95B9\":\"jem\",\"58BB\":\"dzjang\",\"7A3C\":\"kaeH\",\"5EBF\":\"mjewH\",\"61C1\":\"hwaen xjwien xwenH\",\"67C5\":\"nrijH nrijX\",\"73CD\":\"trin tsyin\",\"524C\":\"lat\",\"79D1\":\"khwa\",\"7FD5\":\"xip\",\"5E54\":\"manH\",\"82D7\":\"mjew\",\"8EDF\":\"nywenX\",\"51E1\":\"bjom\",\"9AE7\":\"domX\",\"7F6A\":\"dzwojX\",\"6CF3\":\"hjwaengH\",\"8E74\":\"dzjuwk tshjuwk tsjuwk\",\"72F7\":\"kjwienH\",\"577A\":\"bat bjot\",\"6C88\":\"drim drimH syimX tshyhimX\",\"500B\":\"kaH\",\"560F\":\"kaeX\",\"8D9E\":\"tshjak\",\"5CA8\":\"tshjo\",\"65AE\":\"tsrjak\",\"6BB2\":\"tsjem\",\"814A\":\"sjek\",\"34B8\":\"zwijH\",\"983B\":\"bjin\",\"9D1E\":\"yew\",\"86C4\":\"ku\",\"8CC8\":\"kaeH kuX\",\"704B\":\"pjop\",\"4FCA\":\"tswinH\",\"92CC\":\"thengX\",\"5BD2\":\"han\",\"9ED4\":\"gim gjem\",\"64D8\":\"peak\",\"6ADC\":\"kaw\",\"4E5F\":\"yaeX\",\"76E4\":\"ban\",\"636D\":\"peaX\",\"9DFE\":\"iH\",\"8B87\":\"trhjemX\",\"918B\":\"dzak\",\"528D\":\"kjaemH kjomH\",\"978F\":\"kjowngX\",\"5E95\":\"tejX\",\"699B\":\"tsrin\",\"8B1C\":\"ngjwon\",\"4C1E\":\"tsyoX\",\"75A3\":\"hjuw\",\"41AB\":\"tsrhaewng\",\"82AD\":\"pae\",\"53B7\":\"kwong\",\"59BB\":\"tshej tshejH\",\"6CC9\":\"dzjwen\",\"8E4A\":\"hej\",\"9A52\":\"da dan ten\",\"5F54\":\"luwk\",\"665A\":\"mjonX\",\"61EB\":\"trhijH tsyijH\",\"7E6A\":\"hwajH\",\"67EF\":\"ka\",\"6DF3\":\"tsywin tsywinX dzywin\",\"79FB\":\"ye yeH\",\"7FFF\":\"daw dawH\",\"6D88\":\"sjew\",\"510B\":\"tam tamH\",\"920D\":\"dwonH\",\"7F94\":\"kaw\",\"6A1D\":\"tsrae\",\"8C9E\":\"trjeng\",\"51A0\":\"kwan kwanH\",\"57A4\":\"det\",\"812B\":\"dwajH dwat thwat\",\"872F\":\"baewngX\",\"64AE\":\"tshwat tswajH\",\"76BA\":\"tsrjuw\",\"7CBE\":\"tsjeng\",\"81C0\":\"dwon\",\"87C4\":\"drip\",\"6B47\":\"xjot\",\"8DC8\":\"denX nenX\",\"4ECA\":\"kim\",\"7D53\":\"kweaH\",\"71E0\":\"juwk\",\"77E4\":\"syinX\",\"7DE8\":\"pjien benX pen\",\"84EE\":\"len\",\"4FF4\":\"dzjenX\",\"55F8\":\"ngaw\",\"7A7D\":\"dzjengX\",\"6D0A\":\"dzenH\",\"518D\":\"tsojH\",\"9E93\":\"luwk\",\"78A7\":\"pjaek\",\"4EB3\":\"bak\",\"6C34\":\"sywijX\",\"50B7\":\"syang\",\"97B9\":\"khwak\",\"99BD\":\"trip\",\"65C5\":\"ljoX\",\"8B46\":\"xi\",\"5A50\":\"waX\",\"8ADB\":\"yu\",\"6F5E\":\"luH\",\"53E1\":\"ywejH\",\"96E3\":\"nan nanH\",\"98E7\":\"swon\",\"7B66\":\"kwanX\",\"7D6A\":\"jin\",\"64EF\":\"pjinH\",\"8A70\":\"khjit\",\"8F09\":\"dzojH tsojH tsojX\",\"540F\":\"liH\",\"7A90\":\"kwej wae\",\"7C94\":\"gjoX\",\"52A0\":\"kae\",\"91A2\":\"xojX\",\"54A4\":\"traeH\",\"822B\":\"pangH pjangH\",\"9DAA\":\"kwek\",\"842F\":\"bjuwX\",\"84C4\":\"trhjuwk xjuwk\",\"57CE\":\"dzyeng\",\"9AD0\":\"khew\",\"59D2\":\"ziX\",\"68DC\":\"joH\",\"89F2\":\"sjeng\",\"58FC\":\"khwonX\",\"3C7F\":\"khaewk\",\"508D\":\"bang bangH\",\"958F\":\"nywinH\",\"760E\":\"dzyim\",\"6B9B\":\"kik\",\"4E1E\":\"dzying\",\"5C2A\":\"wang\",\"612C\":\"suH\",\"6D34\":\"beng\",\"51B7\":\"lengX\",\"96B9\":\"tsywij\",\"64C5\":\"dzyenH\",\"8A46\":\"dej tejX\",\"8C4A\":\"lejX\",\"514C\":\"dwajH thwajH\",\"7AD1\":\"hweang\",\"5B50\":\"tsiX\",\"97E3\":\"duwk dzyowk tsyowk\",\"54E5\":\"ka\",\"5EE9\":\"limX\",\"63EB\":\"dzjuw\",\"8B70\":\"ngjeH\",\"8D74\":\"phjuH\",\"547A\":\"xjew\",\"5E7E\":\"gjioj kjioj kjiojX\",\"6F88\":\"drjet\",\"530B\":\"daw\",\"900D\":\"sjew\",\"9A11\":\"phjioj pjioj\",\"5F13\":\"kjuwng\",\"681D\":\"kwat\",\"55A4\":\"hwaeng xwaeng\",\"5FA8\":\"hwang\",\"832B\":\"mang\",\"66AE\":\"muH\",\"68B2\":\"tsywet\",\"9B3B\":\"tsyuwk yuwk\",\"83C0\":\"jut\",\"40C2\":\"kwonX\",\"91CC\":\"liX\",\"754F\":\"jwiojH\",\"67D8\":\"tsyaeH\",\"885D\":\"tsyhowng\",\"73E0\":\"tsyu\",\"75E4\":\"dzwa\",\"7FE8\":\"kjieH syeH\",\"606D\":\"kjowng kuwng\",\"57F8\":\"yek\",\"8E87\":\"drjo trhjak\",\"6B0A\":\"gjwen\",\"5B95\":\"dangH\",\"6C9B\":\"pajH phajH\",\"6A9F\":\"kaeX\",\"5B2A\":\"bjin\",\"87AD\":\"trhje\",\"662C\":\"xwon\",\"6A34\":\"dok tsyik\",\"91B9\":\"nyu nyuX\",\"5ABF\":\"kwijH\",\"65C1\":\"bang paeng\",\"8B4A\":\"nraew\",\"77CD\":\"kjwak xjwak\",\"914E\":\"drjuwX\",\"5C50\":\"gjaek\",\"9F52\":\"tsyhiX\",\"8CDB\":\"tsanH\",\"4FDD\":\"pawX\",\"8ADF\":\"dzyeX\",\"53E5\":\"kjuH kuw\",\"9EE7\":\"lej\",\"7D66\":\"kip\",\"62EF\":\"tsyingX\",\"76F7\":\"hwen\",\"7CFB\":\"hejH\",\"7AFF\":\"kan\",\"970D\":\"xwak\",\"7A94\":\"ewH\",\"54A0\":\"tship tsip\",\"58A8\":\"mok\",\"9BAA\":\"hwijX\",\"472D\":\"swinH\",\"61AE\":\"mjuX xu\",\"79BE\":\"hwa\",\"84C0\":\"swon\",\"6E47\":\"khip\",\"744B\":\"hwjiojX\",\"96CC\":\"tshje\",\"5FD2\":\"thok\",\"9AD4\":\"thejX\",\"D858\":\"that\",\"74E0\":\"hu huH\",\"78E8\":\"ma maH\",\"676D\":\"hang\",\"7F7D\":\"kjejH\",\"5EFC\":\"nojX\",\"99FE\":\"dwajH thwajH\",\"958B\":\"khoj kojX\",\"6A0A\":\"bjon\",\"5C91\":\"ngimX\",\"8F1C\":\"tsri\",\"481E\":\"tsjuwk\",\"672C\":\"pwonX\",\"9EBD\":\"maX\",\"5BBF\":\"sjuwH sjuwk\",\"64C1\":\"jowngX\",\"62C5\":\"tanX\",\"8C46\":\"duwH\",\"76CD\":\"hap\",\"904E\":\"kwa kwaH\",\"5B54\":\"khuwngX\",\"8DDB\":\"paX pjeH\",\"4EDD\":\"dzjwen\",\"54E1\":\"hjun hjwen\",\"91E3\":\"tewH\",\"8D70\":\"tsuwX\",\"8B74\":\"khjenH\",\"7BFF\":\"tsywen\",\"587E\":\"dzyuwk\",\"530F\":\"baew\",\"829A\":\"dwon\",\"6E1D\":\"yu\",\"4F9C\":\"trjuw\",\"889E\":\"kwonX\",\"53A4\":\"lek\",\"59A8\":\"phjang\",\"6EB2\":\"srjuw\",\"9D3B\":\"huwng\",\"5E3D\":\"mawH\",\"754B\":\"den denH\",\"50CE\":\"tswin\",\"61D8\":\"tsyhejH\",\"5F67\":\"juwk\",\"7E7D\":\"phjin\",\"5FFC\":\"khangH khangX\",\"98FE\":\"syik\",\"6F06\":\"tshit\",\"968B\":\"sjweH thwaX xjwieH\",\"340C\":\"tha\",\"5F91\":\"kengH\",\"3E10\":\"nyen\",\"7D12\":\"kejH\",\"689F\":\"kew\",\"5F26\":\"hen\",\"592A\":\"thajH\",\"642C\":\"pan\",\"8FB1\":\"nyowk\",\"6E30\":\"jaemX jemX\",\"54B7\":\"daw thewH\",\"75CD\":\"yij\",\"9D52\":\"yowk\",\"79D5\":\"pjijX\",\"8EDB\":\"eak\",\"9CE7\":\"bju\",\"7F66\":\"phju\",\"5BE9\":\"syimX\",\"846C\":\"tsangH\",\"78FF\":\"lek\",\"500F\":\"dzyuwk\",\"5A13\":\"mjiojX\",\"819A\":\"pju\",\"8B9E\":\"ngjenH ngjet\",\"6DB2\":\"yek\",\"71BA\":\"xi\",\"983F\":\"tsje\",\"7BBE\":\"sew sraewk\",\"80C4\":\"drjuwH\",\"8AC8\":\"trjweH\",\"5DD2\":\"lwan\",\"62D8\":\"gju kju kuw\",\"5C67\":\"sep\",\"4EF0\":\"ngjangX\",\"8DF2\":\"gjaep keap kjaep\",\"97F6\":\"dzyew\",\"52F8\":\"khjwonH\",\"387F\":\"tsyhek\",\"548D\":\"xoj\",\"9B28\":\"haewngH huwngH\",\"582A\":\"khom\",\"652C\":\"lamX\",\"88B5\":\"nyimH nyimX\",\"7D3C\":\"pjut\",\"60C5\":\"dzjeng\",\"9C52\":\"dzwonH dzwonX\",\"78D5\":\"khaejH khap\",\"605A\":\"jwieH\",\"50E5\":\"kewX ngew\",\"6BF3\":\"thjwejH tsrhjwejH\",\"6B88\":\"xjwiek xwek\",\"570B\":\"kwok\",\"940D\":\"kwet\",\"758C\":\"dzjep\",\"9E11\":\"ngaewk\",\"809A\":\"tuX duX\",\"8A9E\":\"ngjoX ngjoH\",\"57A0\":\"ngjion\",\"51A4\":\"jwon\",\"812F\":\"pjuX\",\"4E31\":\"kwaenH\",\"8B33\":\"uw\",\"9F3B\":\"bjijH\",\"7ABE\":\"khwanX\",\"87C0\":\"srwit\",\"81C4\":\"gjak\",\"4EC6\":\"bok phjuH phjuwH phuwH\",\"774B\":\"nga\",\"95CC\":\"lan\",\"99D4\":\"dzuX tsangX\",\"4F5B\":\"bjut\",\"8C5D\":\"pae\",\"77E0\":\"dzreak\",\"9A69\":\"xwan\",\"7BE8\":\"drjo\",\"646D\":\"tsyek\",\"96F6\":\"leng\",\"53F8\":\"si\",\"4F85\":\"koj ngojH\",\"9E8F\":\"kwin\",\"609B\":\"tshjwen\",\"821C\":\"sywinH\",\"72A7\":\"xje\",\"572A\":\"ngjiot xjiot\",\"81B1\":\"tsyik\",\"7C38\":\"paH paX\",\"69C1\":\"kawX khawX\",\"65C9\":\"phju\",\"D84F\":\"ljuw\",\"8AD7\":\"syimX\",\"86DF\":\"kaew\",\"655E\":\"tsyhangX\",\"68EB\":\"hwik\",\"776A\":\"yek\",\"8A6C\":\"khuwH kuwX\",\"6EEF\":\"drjejH\",\"557E\":\"tsjuw\",\"8F05\":\"haek luH ngaeH\",\"580B\":\"pongH\",\"7A8C\":\"kaewH phaewH\",\"58A0\":\"dzyenX\",\"5EA4\":\"driX\",\"54A8\":\"tsij\",\"9A37\":\"saw\",\"533D\":\"jonH jonX\",\"963F\":\"a\",\"75BE\":\"dzit\",\"8EC4\":\"tsyik\",\"784B\":\"ngojH\",\"62DC\":\"peajH\",\"5C63\":\"srjeX\",\"37EA\":\"jwiojX wojX\",\"83F2\":\"bjiojH phjioj phjiojX\",\"7D79\":\"kjwienH\",\"6A02\":\"lak ljewH ngaewH ngaewk\",\"660A\":\"hawX\",\"9F8F\":\"kjuwng\",\"7C0E\":\"tsrhaek\",\"7DA3\":\"khjwonH khjwonX\",\"6B2C\":\"khojH\",\"4FAF\":\"huw\",\"80B1\":\"kwong\",\"6EC5\":\"mjiet\",\"64C9\":\"tsrhaewk\",\"5B4C\":\"ljwenX ljwenH\",\"81DB\":\"xowk\",\"7A62\":\"jwojH\",\"5EE5\":\"kwajH\",\"8B6C\":\"phjieH\",\"6FEF\":\"draewH draewk\",\"65F3\":\"tek\",\"71FB\":\"xjun\",\"5E7A\":\"ew\",\"937C\":\"tsyim\",\"6F84\":\"dring\",\"590B\":\"tshwin\",\"5F0F\":\"syik\",\"8E9A\":\"sjen\",\"849E\":\"lijH\",\"90A6\":\"paewng\",\"892B\":\"drje drjeX trhjeX\",\"96AA\":\"xjaemX xjemX\",\"8F2F\":\"dzip tsrip\",\"6CAE\":\"dzjoX tsjoH\",\"9B37\":\"tsuwng\",\"5C39\":\"ywinX\",\"89C0\":\"kwan kwanH\",\"8FC4\":\"xjiot\",\"794B\":\"twajH\",\"91D0\":\"li\",\"52D2\":\"lok\",\"97D4\":\"trhjangH\",\"8C59\":\"ngjiojH\",\"63DC\":\"jemX\",\"79E0\":\"phij phjuw\",\"6A6D\":\"khu ku\",\"8CEE\":\"dzinH\",\"98F6\":\"bet bjit\",\"7C79\":\"nrjoX\",\"5DF8\":\"yi\",\"727D\":\"khen\",\"8E83\":\"pjiek\",\"598D\":\"ngen\",\"8E18\":\"kjuwk\",\"801C\":\"ziX\",\"649F\":\"kjewX\",\"D867\":\"jut\",\"552A\":\"buwngX puwngX\",\"54BF\":\"jij\",\"6DC5\":\"sek\",\"854A\":\"nyweX nywijX\",\"9F4E\":\"tsej\",\"75D5\":\"hon\",\"82DB\":\"ha\",\"6D5A\":\"swinH\",\"675E\":\"khiX\",\"5BE1\":\"kwaeX\",\"5DE5\":\"kuwng\",\"756A\":\"pa phjon\",\"6CEF\":\"mjin mjinX\",\"66F3\":\"yejH\",\"78F7\":\"linH\",\"72FB\":\"swan\",\"907C\":\"lew\",\"74FF\":\"buwX\",\"8B01\":\"jot\",\"6A80\":\"dan\",\"4E03\":\"tshit\",\"8D05\":\"tsywejH\",\"5C0F\":\"sjewX\",\"6F19\":\"dwan\",\"4E98\":\"hwan sjwen kongH\",\"5AA0\":\"dwaH thwaX\",\"6FAE\":\"kwajH\",\"61B2\":\"xjonH\",\"7DBA\":\"khjeX\",\"513D\":\"lwojH\",\"8CC4\":\"xwojX\",\"7A4B\":\"ljuwk\",\"98CC\":\"pjuwng\",\"60DC\":\"sjek\",\"9B61\":\"tewH\",\"7AE0\":\"tsyang\",\"5E63\":\"bjiejH\",\"76E8\":\"sjuX\",\"696D\":\"ngjaep\",\"8FEE\":\"tsak\",\"81F2\":\"nget\",\"7F79\":\"lje\",\"9DFA\":\"luH\",\"717D\":\"syenH\",\"639B\":\"kweaH\",\"659F\":\"tsyim\",\"9B20\":\"hwat kwajH\",\"7FA3\":\"gjun\",\"542A\":\"ngwa\",\"82B1\":\"xwae\",\"53BB\":\"khjoH khjoX\",\"55BF\":\"sawH\",\"6CC5\":\"zjuw\",\"66C9\":\"xewX\",\"4ED9\":\"sjen\",\"85DF\":\"lwijX\",\"665E\":\"xjioj\",\"5AE1\":\"tek\",\"6BEB\":\"haw\",\"67F3\":\"ljuwX\",\"5C7A\":\"khiX\",\"75FF\":\"jwe\",\"6B80\":\"jewX\",\"5B0B\":\"dzyen\",\"980D\":\"khjwieX\",\"8A96\":\"bwojH bwot\",\"6E19\":\"xwanH\",\"4F98\":\"trhaeH\",\"601D\":\"si siH soj\",\"8B2B\":\"dreak treak\",\"60B2\":\"pij\",\"7AB6\":\"gjuX\",\"7CBA\":\"beaH\",\"87C8\":\"kweak\",\"7B4B\":\"kjion\",\"7D4F\":\"sjet\",\"93D0\":\"ljiw ljuw\",\"95D4\":\"hap\",\"8E59\":\"tsjuwk\",\"6FD8\":\"nengH\",\"805D\":\"kweak\",\"7BE0\":\"sewX\",\"7DE4\":\"sjet\",\"80F2\":\"koj\",\"7E79\":\"yek\",\"5FF8\":\"nrjuwk\",\"707D\":\"tsoj\",\"6F02\":\"phjiew\",\"861C\":\"kjuwk\",\"78A3\":\"gjet\",\"5F22\":\"thaw\",\"9A24\":\"gjwij\",\"532A\":\"pjiojX\",\"8FAD\":\"zi ziH\",\"6E2C\":\"tsrhik\",\"5EB7\":\"khang\",\"99B9\":\"nyit\",\"54BB\":\"xjuw\",\"763C\":\"mak\",\"8F42\":\"kuwk\",\"6BC5\":\"ngjiojH\",\"61C9\":\"ing ingH\",\"834A\":\"kjaeng\",\"994E\":\"tsyhiH\",\"75D1\":\"taH tha\",\"82DF\":\"kuwX\",\"5DE1\":\"zwin\",\"5BE5\":\"lew\",\"6CEB\":\"hwenX\",\"60F3\":\"sjangX\",\"5B7A\":\"nyuH\",\"967C\":\"tsyoX\",\"517E\":\"kijH\",\"5C0B\":\"zim\",\"7E8C\":\"zjowk\",\"8B9A\":\"tsanH\",\"671D\":\"drjew trjew\",\"819E\":\"dzywen dzywenX dzywin tsywinX\",\"7D21\":\"phjangX\",\"9FA2\":\"hwa\",\"7B25\":\"siH\",\"69AE\":\"hjwaeng\",\"67B2\":\"siX\",\"943B\":\"kjoH\",\"71BE\":\"tsyhiH\",\"8CC0\":\"haH\",\"4FC2\":\"kejH\",\"8AC4\":\"tsywin\",\"80C8\":\"pat\",\"57D2\":\"ljwet\",\"68D8\":\"kik\",\"875D\":\"ywen\",\"66DC\":\"yewH\",\"9D61\":\"mjuX\",\"7CE0\":\"khang\",\"6F6D\":\"dom\",\"87F2\":\"drjuwng\",\"777D\":\"khwej\",\"4A85\":\"dzyowk tsyowk\",\"620A\":\"muwH\",\"6F97\":\"kaenH\",\"659B\":\"huwk\",\"871C\":\"mjit\",\"9D20\":\"tanH\",\"6F2C\":\"dzjeH\",\"84B1\":\"bu\",\"5FB7\":\"tok\",\"55BB\":\"yuH\",\"773C\":\"ngeanX ngonX\",\"6CC1\":\"xjwangH\",\"8E42\":\"nyuw nyuwH nyuwX\",\"5F4C\":\"mjie mjieX\",\"83DF\":\"du\",\"99E3\":\"daw dawX\",\"7E62\":\"hwojH\",\"50E9\":\"heanX\",\"6DEB\":\"yim\",\"D849\":\"srin\",\"5A7A\":\"mjuH\",\"6B84\":\"denX\",\"7F8C\":\"khjang\",\"8A9A\":\"dzjewH\",\"7C21\":\"keanX\",\"5DA0\":\"gjew gjewH\",\"5BA4\":\"syit\",\"4E2D\":\"trjuwng trjuwngH\",\"68AE\":\"kjowk\",\"9F37\":\"hej\",\"7ABA\":\"khjwie\",\"563D\":\"than tsyhenX\",\"37BC\":\"dzying\",\"8DC0\":\"ngjwot\",\"4EC2\":\"lik lok\",\"8E77\":\"gjwot kjwejH kjwot\",\"58CE\":\"xjwon\",\"95D0\":\"den\",\"4F57\":\"da thaH\",\"67DC\":\"kjuX\",\"7DE0\":\"dej dejH\",\"9A65\":\"kijH\",\"7BE4\":\"towk\",\"9CF6\":\"ywen\",\"357B\":\"phuwH\",\"9AFA\":\"kwat\",\"767D\":\"baek\",\"90FE\":\"jonH\",\"4F81\":\"srin\",\"8A83\":\"drje tsyheX\",\"9E8B\":\"mij\",\"610A\":\"phik\",\"8A18\":\"kiH\",\"609F\":\"nguH\",\"5D22\":\"dzreang\",\"74A7\":\"pjiek\",\"4EAB\":\"xaeng\",\"512A\":\"juw\",\"7A38\":\"trhjuwk xjuwk\",\"95BD\":\"xwon\",\"6FC1\":\"traewk\",\"63C9\":\"nyuw nyuwH\",\"71D5\":\"en enH\",\"86DB\":\"trju\",\"695A\":\"tsrhjoX\",\"5FE1\":\"trhjuwng\",\"3E60\":\"dwon\",\"9AE3\":\"phjangX\",\"7D62\":\"swin xwenH\",\"53E9\":\"khuwH khuwX\",\"6EEB\":\"sjuwX\",\"8C6C\":\"trjo\",\"62F3\":\"gjwen\",\"5F76\":\"kip\",\"76FB\":\"hejH ngejH\",\"8F01\":\"gjowng kjowngX\",\"651D\":\"syep\",\"839E\":\"kwan\",\"5EA0\":\"zjang\",\"91AA\":\"law\",\"882F\":\"beangX bjie\",\"65B2\":\"traewk\",\"9C37\":\"dew\",\"7FB6\":\"syen\",\"963B\":\"tsrjoX\",\"79BA\":\"ngju ngjuH\",\"34BC\":\"man\",\"8EC0\":\"khju khjuH\",\"784F\":\"ngen ngenH\",\"55D2\":\"thap thop\",\"8B59\":\"dzjew\",\"855D\":\"tsjwejH tsjwet\",\"9F61\":\"leng\",\"5A63\":\"jin\",\"757D\":\"thwanX\",\"6C02\":\"li\",\"600A\":\"trhjew tsyhew\",\"6D97\":\"sywejH tshjwejH\",\"4E16\":\"syejH\",\"9F20\":\"syoX\",\"75A7\":\"gjie\",\"502A\":\"ngej\",\"80B5\":\"gjioj\",\"5DB7\":\"ngi\",\"9AB9\":\"khaew\",\"68C5\":\"pjaengH\",\"62C9\":\"lop\",\"804A\":\"lew\",\"70D5\":\"xjwiet\",\"8DD7\":\"pju\",\"6E56\":\"hu\",\"625E\":\"hanH\",\"5EE1\":\"mjuX\",\"52E9\":\"yejH\",\"6FEB\":\"hamH lamX\",\"8D6C\":\"trhjeng\",\"5E76\":\"pjiengH\",\"587A\":\"maH\",\"71FF\":\"yewH\",\"5F0B\":\"yik\",\"7D8C\":\"khjaek\",\"590F\":\"haeH haeX\",\"6A19\":\"pjiew\",\"5FA0\":\"loj\",\"90AA\":\"zjae yae zjo\",\"6AAE\":\"daw\",\"64B2\":\"phuwk\",\"78BA\":\"khaewk\",\"6B43\":\"sreap srjep\",\"7F4B\":\"jowng jowngH\",\"794F\":\"dzyek\",\"97D0\":\"keap kop\",\"65DC\":\"tsyen\",\"7FE0\":\"tshwijH\",\"5B63\":\"kjwijH\",\"6C6D\":\"nywejH\",\"8AEE\":\"tsij\",\"7A79\":\"khjuwng\",\"5BF8\":\"tshwonH\",\"55FC\":\"maek\",\"8C93\":\"maew mjew\",\"6B12\":\"lwan\",\"5CB3\":\"ngaewk\",\"42B7\":\"tsri\",\"71C1\":\"hip hjep yep\",\"34C3\":\"tuH\",\"5C48\":\"khjut\",\"9F4A\":\"tsij dzej\",\"8B52\":\"paH\",\"6FD5\":\"khip syip tsrhip\",\"98DB\":\"pjioj\",\"775A\":\"ngeaH\",\"7D5E\":\"haew kaewX\",\"8AE7\":\"heaj\",\"6EFF\":\"manX\",\"9D09\":\"ae\",\"628C\":\"tomX\",\"8F15\":\"khjieng khjiengH\",\"83A2\":\"kep\",\"89A6\":\"yu yuH\",\"6D29\":\"yejH\",\"4CA8\":\"huwng\",\"532D\":\"kwijX\",\"5F35\":\"trjang trjangH\",\"61B6\":\"ik\",\"883B\":\"maen\",\"96C4\":\"hjuwng\",\"59C6\":\"muwX\",\"664F\":\"aenH anH enH\",\"8ED4\":\"nyinH\",\"74D8\":\"kwanH\",\"5E5F\":\"syiH syik tsyhiH\",\"60E0\":\"hwejH\",\"6CE8\":\"trjuH tsyuH\",\"7F75\":\"maeH maeX\",\"87FA\":\"dzyenX\",\"818B\":\"lew\",\"7E0A\":\"ejH jieH\",\"4E95\":\"tsjengX\",\"5C1E\":\"ljewH\",\"51AB\":\"ping\",\"4E2A\":\"kaH kanH\",\"84B9\":\"kem\",\"4FBF\":\"bjienH bjien bjienX\",\"76C5\":\"drjuwng trhjuwng\",\"62CD\":\"phaek pak\",\"8A52\":\"dojX yi\",\"6ED5\":\"dong\",\"4F54\":\"trhjem\",\"93D7\":\"kheang\",\"77EF\":\"kjewX\",\"7DF3\":\"het khet\",\"7D88\":\"dej\",\"820D\":\"syaeH syaeX\",\"638C\":\"tsyangX\",\"D862\":\"ye\",\"5B9C\":\"ngje\",\"39B0\":\"tsjem\",\"9D33\":\"aenH\",\"60B6\":\"mwon\",\"893B\":\"sjet\",\"8F3F\":\"yo\",\"6CBE\":\"trjem\",\"91C0\":\"nyangH\",\"97C4\":\"hweak\",\"614B\":\"thojH\",\"5ECA\":\"lang\",\"83CC\":\"gwinX\",\"674F\":\"haengX\",\"8FD4\":\"pjonX\",\"61E0\":\"dzej dzejH\",\"67E4\":\"tsrae\",\"6DE8\":\"dzjengH\",\"53EC\":\"drjewH dzyewX\",\"8CFE\":\"dzreak\",\"7B06\":\"bae\",\"5F89\":\"yang\",\"828B\":\"hjuH\",\"7D0A\":\"mjunH\",\"8E93\":\"trijH\",\"7C9F\":\"sjowk\",\"68A7\":\"ngu\",\"52AB\":\"kjaep\",\"372E\":\"lamH\",\"7A30\":\"sjoX\",\"5EB3\":\"bjieX\",\"9DB5\":\"dzrju\",\"89BD\":\"lamX\",\"683C\":\"haek kaek\",\"75C5\":\"bjaengH\",\"61CD\":\"limX\",\"874E\":\"hat\",\"755A\":\"pwonX\",\"59DD\":\"tsyhu\",\"86E3\":\"khjit\",\"88E7\":\"tsyhem\",\"6B66\":\"mjuX\",\"6D6A\":\"lang langH\",\"3BF1\":\"bjew\",\"60F7\":\"tsyhwinX\",\"4F7E\":\"yet\",\"9F09\":\"da dan\",\"608C\":\"dejH\",\"8B11\":\"hej hejX\",\"6A90\":\"yem\",\"6C94\":\"mjienX\",\"589C\":\"drwijH\",\"81A2\":\"lju luw\",\"4EA8\":\"phaeng xaeng xjangX\",\"8A3B\":\"trjuH tsyuH\",\"5BC6\":\"mit\",\"9EC8\":\"thuwX\",\"624B\":\"syuwX\",\"80CC\":\"bwojH pwojH\",\"644F\":\"syowng\",\"8AD0\":\"khjen khjenH\",\"50EC\":\"dzjew tsjewH\",\"97EE\":\"kjuwX\",\"83F6\":\"puwngX\",\"85FA\":\"linH\",\"838B\":\"dzak\",\"660E\":\"mjaeng\",\"7B30\":\"pjut\",\"86B9\":\"bjuH\",\"88BD\":\"nrjo\",\"72C1\":\"ywinX\",\"5F48\":\"dan danH\",\"864E\":\"xuX\",\"6CD5\":\"pjop\",\"91D7\":\"kew tsyew\",\"745A\":\"hu\",\"58DD\":\"ywij ywijX\",\"7E5E\":\"nyewH nyewX\",\"87E3\":\"kjiojX\",\"6C6A\":\"wang\",\"916C\":\"dzyuw\",\"75EF\":\"kwanX\",\"566E\":\"wenH\",\"7FF3\":\"ej ejH\",\"61F7\":\"hweaj\",\"4E7E\":\"gjen kan\",\"7F88\":\"kje\",\"8A11\":\"tha thwa ye\",\"80A2\":\"tsye\",\"8AA6\":\"zjowngH\",\"932B\":\"sek\",\"8CAA\":\"thom\",\"502D\":\"jwe\",\"76AE\":\"bje\",\"62B6\":\"trhit\",\"50C2\":\"ljuX luw\",\"634B\":\"lwat\",\"654F\":\"minX\",\"77D8\":\"thangX\",\"5B5B\":\"bwojH bwot\",\"63E0\":\"eat\",\"65E4\":\"hwaX\",\"8E69\":\"bet\",\"356F\":\"nrjwet nwaet nwot nywet\",\"7A71\":\"tsraewk\",\"5BF0\":\"hwaen\",\"98F2\":\"imH\",\"5DF4\":\"pae\",\"82F6\":\"nep\",\"84FA\":\"ngjejH\",\"8EFE\":\"syik\",\"9E87\":\"khwinX\",\"7D06\":\"ju\",\"610E\":\"bik\",\"531A\":\"pjang\",\"9E1C\":\"gju\",\"7A9F\":\"khwot\",\"60A3\":\"hwaenH\",\"54AB\":\"tsyeX\",\"97AD\":\"pjien\",\"58B3\":\"bjun bjunX\",\"75C1\":\"syem syemH temH\",\"79C9\":\"pjaengX\",\"814E\":\"dzyinX\",\"6DD1\":\"dzyuwk\",\"8F52\":\"bjun bjunX\",\"5FDD\":\"themH themX\",\"9ADF\":\"pjiew pjiw sraem\",\"795E\":\"zyin\",\"80E3\":\"yeX\",\"6D66\":\"phuX\",\"966C\":\"tsju tsuw\",\"516E\":\"hej\",\"66F7\":\"hat\",\"6C90\":\"muwk\",\"5E9C\":\"pjuX\",\"87A2\":\"hweng\",\"942B\":\"tsjwen\",\"572D\":\"kwej\",\"922F\":\"khjut\",\"71AE\":\"ljewH\",\"7FB2\":\"xje\",\"4F3D\":\"gja\",\"8A3F\":\"tsje tsjeX zje\",\"7E47\":\"drjuwH yew\",\"644B\":\"sat\",\"8AD4\":\"tsyhuwk\",\"70D8\":\"xuwng\",\"64E0\":\"tsej tsejH tsejX\",\"7D71\":\"thowngH\",\"7B75\":\"yen\",\"858B\":\"dzij\",\"7A0A\":\"dej\",\"9F1C\":\"tshek\",\"581E\":\"dep\",\"55AB\":\"kheaH\",\"7D30\":\"sejH\",\"7B34\":\"kanX kaX\",\"6F3C\":\"tshwojX\",\"9A4A\":\"hwae\",\"6AD5\":\"dzwan\",\"97D7\":\"hjunH xjwonH\",\"5EDD\":\"sje\",\"9BDF\":\"tuwng\",\"81E3\":\"dzyin\",\"9D70\":\"tew\",\"5E72\":\"kan\",\"D846\":\"neng\",\"67F7\":\"tsyhuwk tsyuwk\",\"5F07\":\"kom\",\"678C\":\"bjun\",\"8A15\":\"sraen sraenH\",\"6B94\":\"sijH yijH\",\"D864\":\"im\",\"7E1D\":\"tsyin tsyinX\",\"8AAA\":\"sywejH sywet\",\"932F\":\"tshak\",\"70AE\":\"baew\",\"5C31\":\"dzjuwH\",\"5A35\":\"tsju\",\"56C2\":\"xjew\",\"8DD0\":\"tshjeX\",\"5B5F\":\"maengH\",\"65E0\":\"mju\",\"69E8\":\"kwak\",\"766D\":\"jiengX\",\"57EC\":\"tuwng\",\"5BF4\":\"tshin\",\"88FE\":\"kjo\",\"5B89\":\"an\",\"868B\":\"nywejH\",\"630E\":\"khu\",\"4F91\":\"hjuwH\",\"8A93\":\"dzyejH\",\"6D12\":\"sejX sreajX senX\",\"7E9B\":\"dawH dowk\",\"95AD\":\"ljo\",\"742C\":\"jwonX wanH\",\"7E30\":\"srjeX\",\"99B5\":\"tsyuH\",\"71C5\":\"zjem\",\"7BC9\":\"trjuwk\",\"9EDB\":\"dojH\",\"5DDD\":\"tsyhwen\",\"98DF\":\"zijH zyik\",\"6F66\":\"lawX\",\"536E\":\"tsye\",\"64F7\":\"het\",\"5C07\":\"tshjang tsjang tsjangH\",\"7A88\":\"ewX\",\"400F\":\"hwen\",\"6E90\":\"ngjwon\",\"7D1D\":\"nrim nyim\",\"9B9E\":\"nyi nyuwk\",\"8FA6\":\"beanH\",\"962B\":\"phwoj\",\"89AA\":\"tshin\",\"5F31\":\"nyak\",\"7DB2\":\"mjangX\",\"61BA\":\"damH damX\",\"96C0\":\"tsjak\",\"90C4\":\"khjaek\",\"59CA\":\"tsijX\",\"84CC\":\"tsraeH tswaH\",\"88D4\":\"yejH\",\"72D8\":\"xjwot\",\"7CDC\":\"mje\",\"66E0\":\"khwangH\",\"6AE8\":\"lu\",\"58F4\":\"trjuH\",\"81FA\":\"doj\",\"818F\":\"kaw kawH\",\"620E\":\"nyuwng\",\"4E91\":\"hjun\",\"8B93\":\"nyangH\",\"6C12\":\"kjwot\",\"501A\":\"jeX\",\"63A3\":\"tsyhejH tsyhet\",\"4E26\":\"bengX\",\"8B28\":\"mu\",\"752C\":\"yowngX\",\"5BB3\":\"hajH hat\",\"82B9\":\"gjion\",\"8CBD\":\"yi\",\"6D3C\":\"wej\",\"64CD\":\"tshawH tshawX\",\"6ED1\":\"hweat\",\"4F50\":\"tsaH\",\"8C52\":\"drit\",\"52D9\":\"mjuH\",\"99DF\":\"sijH\",\"7BF3\":\"pjit\",\"5D07\":\"dzrjuwng\",\"7B88\":\"dojX\",\"840D\":\"beng\",\"7C1D\":\"law lew\",\"88AA\":\"khjo\",\"72AE\":\"bat\",\"9B33\":\"ngjonH\",\"7CB2\":\"tshanH\",\"8F3B\":\"pjuwk\",\"6ABE\":\"khjwiengX khwengX\",\"54C2\":\"syinX\",\"7D47\":\"gju\",\"7DDC\":\"mjien\",\"8A69\":\"syi\",\"6BE8\":\"senX\",\"9CF2\":\"syij\",\"8AFE\":\"nak\",\"5F85\":\"dojX\",\"888B\":\"dojH\",\"770A\":\"maewk mak mawH\",\"6D0E\":\"gijH\",\"7A97\":\"tsrhaewng\",\"769F\":\"tsrheak\",\"9BAD\":\"hwae kwej hea\",\"54B3\":\"hoj khojH\",\"8DB9\":\"kwet\",\"6C38\":\"hjwaengX\",\"83BD\":\"mangX\",\"79C1\":\"sij\",\"9B42\":\"hwon\",\"7FC5\":\"syeH\",\"5E44\":\"aewk\",\"6BCD\":\"muwX\",\"90DB\":\"phju\",\"8CE3\":\"meaH\",\"6B62\":\"tsyiX\",\"676A\":\"mjiewX\",\"5D6E\":\"den\",\"8C78\":\"drjeX\",\"60FB\":\"tsrhik\",\"66FF\":\"thejH\",\"5C03\":\"phju\",\"8B0D\":\"yweng\",\"4E0F\":\"menX\",\"7D19\":\"tsyeX\",\"4EA4\":\"kaew\",\"982B\":\"thewH\",\"5B2D\":\"nejX\",\"7DAE\":\"khejX\",\"73B2\":\"leng\",\"69B6\":\"dang\",\"863F\":\"la\",\"7C43\":\"lam\",\"5BC2\":\"dzek\",\"684B\":\"yij\",\"80D0\":\"phjiojX phwot\",\"86D4\":\"hwoj\",\"9D59\":\"kwek\",\"D85A\":\"dej\",\"7B6D\":\"swanH\",\"9DEE\":\"gjew kjew\",\"89F6\":\"tsye tsyeH\",\"6D79\":\"tsep\",\"8FFA\":\"nojX\",\"637D\":\"dzwot\",\"85FE\":\"lajH lat\",\"7A02\":\"lang\",\"898B\":\"kenH henH keanH\",\"7B97\":\"swanH swanX\",\"719B\":\"pjiew\",\"5E1A\":\"tsyuwX\",\"541E\":\"then thon\",\"8F24\":\"tshenH\",\"7B2C\":\"dejH\",\"5FAF\":\"hejX\",\"6D38\":\"kwang\",\"82BD\":\"ngae\",\"9A42\":\"tshom\",\"74C9\":\"dzanX\",\"964A\":\"drjeX\",\"8C4E\":\"dzyuX\",\"60D1\":\"hwok\",\"5CD9\":\"driX\",\"7E5A\":\"lewX ljewX\",\"52DD\":\"sying syingH\",\"745E\":\"dzyweH\",\"8DE3\":\"senX\",\"6A62\":\"thwaX\",\"4EE5\":\"yiX\",\"79EB\":\"zywit\",\"7FEF\":\"haewk xaewk\",\"5C6E\":\"tshawX\",\"837C\":\"drae du syo\",\"67FF\":\"dzrijX\",\"4F0F\":\"bjuwH bjuwk\",\"7C19\":\"pak\",\"721D\":\"dzjak\",\"6E25\":\"aewk uwH\",\"80A6\":\"paen bjun\",\"992B\":\"hjunH\",\"5A2D\":\"xi\",\"7CAE\":\"ljang\",\"8B37\":\"ngaew ngaw ngawH\",\"6EBA\":\"nek newH\",\"7D43\":\"hen xwenH\",\"5AC2\":\"sawX\",\"95C8\":\"hjwioj\",\"56CA\":\"nang\",\"6F4F\":\"kwet\",\"81D0\":\"xjun\",\"5B57\":\"dziH\",\"7DD8\":\"keam\",\"34DE\":\"kheat\",\"65E8\":\"tsyijX\",\"5BEC\":\"khwan\",\"51F0\":\"hwang\",\"57F4\":\"dzyik\",\"8EFA\":\"yew\",\"5B81\":\"drjo drjoX\",\"9E83\":\"baew pjew\",\"8A8B\":\"giH\",\"5B16\":\"pejH\",\"729B\":\"maew li loj\",\"99AD\":\"ngjoH\",\"56B3\":\"khowk\",\"6E38\":\"yuw\",\"81BD\":\"tamX\",\"7BC1\":\"hwang\",\"7DC5\":\"tsjuH tsuw\",\"77C9\":\"bjin\",\"69CD\":\"tshjang\",\"7B56\":\"tsrheak\",\"5FD9\":\"mang\",\"7D5A\":\"kong\",\"51DD\":\"nging\",\"7AEB\":\"dzjengX\",\"89E9\":\"gjuw\",\"68F7\":\"suwX\",\"64FF\":\"drjek\",\"7A80\":\"dwon trwin\",\"5E03\":\"puH\",\"890D\":\"twan\",\"688C\":\"du\",\"9D9A\":\"ngak\",\"509C\":\"yew\",\"979E\":\"pengX pjieX\",\"6B21\":\"tshijH\",\"89A2\":\"syemX\",\"6D25\":\"tsin\",\"9A2B\":\"kjonX\",\"85AA\":\"sin\",\"592D\":\"awX jewX\",\"71B2\":\"kwengX\",\"9AC0\":\"bejX pjieX\",\"7E43\":\"peang\",\"6A4B\":\"gjew kjewH kjewX\",\"6C4F\":\"dajH thajH that\",\"4FCE\":\"tsrjoX\",\"525B\":\"kang\",\"70DC\":\"xjweX\",\"796D\":\"tsjejH tsreajH\",\"58EC\":\"nyim\",\"5C1A\":\"dzyangH\",\"8B20\":\"yew\",\"6FA3\":\"hwanX\",\"61A7\":\"draewngH tsyhowng\",\"6F38\":\"dzjemX dzraem tsjem\",\"7AC1\":\"tshjwejH tsyhwejH tsyhwenH\",\"5B40\":\"srjang\",\"7CC5\":\"nrjuwH\",\"76C9\":\"hwa\",\"944A\":\"hwak\",\"8E4E\":\"ten\",\"62D1\":\"gjem\",\"7A56\":\"kjiojX\",\"5ED9\":\"yiH yik\",\"50DD\":\"dzreanX dzrjwenH\",\"95DF\":\"xip\",\"81E7\":\"tsang\",\"7DEF\":\"hjwiojH hjwiojX\",\"77F3\":\"dzyek\",\"69F7\":\"nget\",\"9A01\":\"trhjengX\",\"5F98\":\"bwoj\",\"6A21\":\"mu\",\"88A2\":\"bjon\",\"D861\":\"kwak\",\"9D2F\":\"nyi\",\"4E39\":\"tan\",\"66BE\":\"thwon\",\"9BC0\":\"kwon\",\"9DC4\":\"kej\",\"97C8\":\"mjot\",\"4ECE\":\"dzjowng\",\"83D0\":\"buwk\",\"905D\":\"dop\",\"555F\":\"khejX\",\"8A61\":\"xjuX\",\"59EC\":\"ki\",\"9EEE\":\"domX thomX\",\"53F0\":\"thoj yi\",\"8AF6\":\"dzyim\",\"4FF8\":\"bjowngH\",\"86FE\":\"nga ngjeX\",\"5B85\":\"draek\",\"730A\":\"ngej\",\"4F8D\":\"dzyiH\",\"690E\":\"drwij\",\"5D16\":\"ngea\",\"961C\":\"bjuwX\",\"95B1\":\"ywet\",\"50B3\":\"drjwen drjwenH trjwenH\",\"87BD\":\"tsyuwng\",\"5C40\":\"gjowk\",\"63A7\":\"khaewngH khuwngH\",\"934A\":\"lenH\",\"63D5\":\"trimH\",\"7D56\":\"khwangH\",\"59D9\":\"nyimH\",\"92DF\":\"tshimX tshjem tsjem\",\"6F62\":\"hwang\",\"86E7\":\"mjangX\",\"7AEF\":\"twan\",\"596E\":\"pjunH\",\"9D96\":\"tshjuw\",\"56F1\":\"tsrhaewng\",\"6B25\":\"yit\",\"85A6\":\"tsenH\",\"83AA\":\"nga\",\"5F2D\":\"mjieX\",\"9A2F\":\"baeng bang\",\"79AE\":\"lejX\",\"77B2\":\"xwet xwijH\",\"6BBA\":\"sreat sreajH\",\"61BE\":\"homH\",\"6C4B\":\"tsyak yak\",\"53CA\":\"gip\",\"8ECC\":\"kwijX\",\"84D0\":\"nyowk\",\"47D2\":\"gjwen\",\"76DC\":\"dawH\",\"525F\":\"trjwet twat\",\"6CE0\":\"leng\",\"7F6D\":\"hwik\",\"5EEC\":\"ljo\",\"99EE\":\"paewk\",\"81FE\":\"yu\",\"5A85\":\"tom\",\"759B\":\"trjuwX\",\"971C\":\"srjang\",\"739F\":\"min\",\"501E\":\"ljangH\",\"69A3\":\"yew\",\"673C\":\"pjijX\",\"7AC5\":\"khewH\",\"924A\":\"tsyew\",\"4F4C\":\"tshjeX\",\"884E\":\"khanH\",\"62D5\":\"tha thaH\",\"58D9\":\"khwangH\",\"4CE1\":\"tsywij\",\"89E3\":\"heaX keaH keaX\",\"6E62\":\"pik\",\"7DEB\":\"tsuwng tsuwngX\",\"65FB\":\"min\",\"407E\":\"met\",\"9A05\":\"tsywij\",\"761D\":\"kwean\",\"84A6\":\"hweak\",\"5E2D\":\"zjek\",\"9B2F\":\"trhjangH\",\"60BE\":\"khaewng khuwng khuwngH\",\"54C6\":\"tsyhaeX\",\"85D0\":\"maewk\",\"5F57\":\"zjwejH zwijH\",\"77DC\":\"gin king\",\"535F\":\"kej kejX\",\"8C61\":\"zjangX\",\"93D1\":\"tek\",\"7E6D\":\"kenX\",\"96F2\":\"hjun\",\"53F4\":\"gjuw\",\"8AFA\":\"ngjenH\",\"80FE\":\"tsriH\",\"5F81\":\"tsyeng\",\"8E8B\":\"tsej tsejH\",\"7C97\":\"tshu dzuX\",\"591A\":\"ta\",\"5EAB\":\"khuH\",\"7C2C\":\"luH\",\"91B5\":\"gjak gjo gjoH\",\"6A38\":\"buwk phuwk puwk\",\"3AC3\":\"jonX\",\"9D42\":\"xjuw\",\"79C5\":\"drae tuH\",\"73C9\":\"min\",\"8B4E\":\"kwet\",\"67D1\":\"gjem\",\"96DB\":\"dzrju\",\"795A\":\"dzuH\",\"90DF\":\"keap\",\"4FE1\":\"sinH\",\"84E7\":\"dek\",\"78EF\":\"kjioj\",\"4F76\":\"git\",\"4E0B\":\"haeH haeX\",\"8D0D\":\"dzyemH\",\"6C8C\":\"dwonX\",\"7B19\":\"sraeng\",\"982F\":\"gwij khwijX\",\"75B2\":\"bje\",\"8C37\":\"kuwk\",\"6FB6\":\"danH\",\"803F\":\"keangX\",\"5DC2\":\"hwej\",\"98C4\":\"phjiew\",\"92C8\":\"owk\",\"51CA\":\"tshjengH\",\"80D4\":\"dzjeH\",\"7AD8\":\"khjuX khuwX\",\"74DC\":\"kwae\",\"505F\":\"hwang\",\"8F61\":\"pijH\",\"56F0\":\"khwonH\",\"6B79\":\"ngat\",\"89FA\":\"ngi ngik\",\"898F\":\"kjwie\",\"5E16\":\"thep\",\"719F\":\"dzyuwk\",\"8F20\":\"hwaeX hwanX hwojX\",\"6BA3\":\"ginH\",\"65A7\":\"pjuX\",\"59AF\":\"drjuw trhjuw\",\"96B1\":\"jionH jionX\",\"8AB9\":\"pjioj pjiojH\",\"6B38\":\"oj\",\"5F40\":\"kuwH\",\"904A\":\"yuw\",\"8A4E\":\"gjoH gjoX\",\"60D5\":\"thek\",\"5AD9\":\"zjwen\",\"4EE1\":\"ngjiot xjiot\",\"7FEB\":\"ngwanH\",\"606A\":\"khak\",\"9D6C\":\"bong\",\"6DF7\":\"kwon hwonX kwonX\",\"8B78\":\"trjuw\",\"857C\":\"sijH\",\"61FF\":\"ijH\",\"5B03\":\"sju\",\"6D8C\":\"yowngX\",\"7A19\":\"trik\",\"5B98\":\"kwan\",\"559C\":\"xiX\",\"6E21\":\"duH\",\"8CA2\":\"kuwngH\",\"9F2B\":\"dzyek\",\"7AAE\":\"gjuwng\",\"74B2\":\"zwijH\",\"6EB6\":\"yowng\",\"873B\":\"tsheng\",\"50CA\":\"sjen\",\"8DCC\":\"det\",\"9AEE\":\"pjot\",\"8EF6\":\"eak\",\"647D\":\"bjiewX phaew phew phjiew pjiew\",\"82FE\":\"bet bjit\",\"8F0A\":\"trijH\",\"520C\":\"tshwonX\",\"9B12\":\"tsyinX\",\"7C28\":\"swinX\",\"822C\":\"ban pan\",\"69B1\":\"srwij\",\"75B9\":\"trhinH\",\"56CF\":\"kean\",\"754E\":\"kwenX\",\"99D1\":\"nu\",\"7B52\":\"duwng\",\"4A5C\":\"drjuwH\",\"5C68\":\"kjuH\",\"5BFD\":\"lwit\",\"7A7C\":\"syim\",\"9EFF\":\"ngjwon ngwan\",\"4F8A\":\"kwaeng kwang\",\"679A\":\"mwoj\",\"8B1D\":\"zjaeH\",\"36A4\":\"yik\",\"79A6\":\"ngjoX\",\"602B\":\"bjiojH bjut\",\"662F\":\"dzyeX\",\"54B8\":\"heam\",\"5ABC\":\"awX\",\"9DBE\":\"han\",\"60C0\":\"lwin lwonX\",\"904B\":\"hjunH\",\"72CC\":\"sjengH\",\"78D0\":\"ban\",\"9C53\":\"da dan\",\"8ADC\":\"dep\",\"53E2\":\"dzuwng\",\"59E6\":\"kaen\",\"8E0A\":\"yowngX\",\"778F\":\"gjwieng hwaen\",\"7D93\":\"keng\",\"D866\":\"mjuw\",\"5F14\":\"tek tewH\",\"899B\":\"meak mek\",\"8F9F\":\"bek bjiek pjiek\",\"95A3\":\"kak\",\"56A5\":\"enH\",\"68B1\":\"khwonX\",\"8F34\":\"trhwin\",\"9B3C\":\"kjwiojX\",\"5C3E\":\"mjiojX\",\"51CB\":\"tew\",\"6E4A\":\"tshuwH\",\"57CF\":\"syen\",\"9ED5\":\"tomX\",\"63D7\":\"zwin zywinH zywinX\",\"6FDF\":\"tsejH tsejX\",\"87EF\":\"nyew\",\"8DF3\":\"dew\",\"4EF5\":\"nguH nguX\",\"720D\":\"syak\",\"938C\":\"ljem\",\"370F\":\"hjun\",\"548E\":\"gjuwX kaw\",\"5A92\":\"mwoj\",\"9F94\":\"kjuwng\",\"8A1D\":\"ngaeH\",\"72A2\":\"duwk\",\"9C29\":\"yew\",\"6D33\":\"nyo nyoH\",\"8AB2\":\"khwaH\",\"96BA\":\"howk\",\"67C4\":\"pjaengH\",\"6DC8\":\"hwot kwot\",\"914B\":\"dzjuw\",\"524D\":\"dzen\",\"73CC\":\"pjit\",\"5E55\":\"mak\",\"7FD4\":\"zjang\",\"85D8\":\"ljo\",\"52E2\":\"syejH\",\"97E4\":\"mjot\",\"7C69\":\"pjien\",\"8E75\":\"tshjuwk tsjuwk\",\"597B\":\"nwaen nwaenH\",\"5F7F\":\"phjut\",\"7CFE\":\"gjiewX kjiwX\",\"4E08\":\"drjangX\",\"8D0A\":\"tsanH\",\"500C\":\"kwaenH kwan\",\"7E93\":\"jieng\",\"96A3\":\"lin\",\"5FA9\":\"bjuwH bjuwk\",\"61AD\":\"lew\",\"6DB5\":\"hom\",\"79BD\":\"gim\",\"83C1\":\"tseng tsjeng\",\"6B46\":\"xim\",\"91CD\":\"drjowng drjowngX\",\"774E\":\"xjioj\",\"5ED3\":\"khwak\",\"9DD5\":\"ywijX\",\"6ADB\":\"tsrit\",\"76E3\":\"kaem kaemH\",\"5E68\":\"tsyhem tsyhemH\",\"82EB\":\"syem syemH\",\"606C\":\"dem\",\"57F9\":\"bwoj\",\"9AFB\":\"kejH ket\",\"6F09\":\"luwk\",\"578E\":\"haek\",\"7B11\":\"sjewH\",\"7D15\":\"bjie bjijH pej phjie phjij\",\"7DAA\":\"tshenH tsreang\",\"642F\":\"thaw\",\"6E33\":\"mjieX\",\"89B2\":\"ginH\",\"7A3B\":\"dawX\",\"7C3F\":\"buX\",\"514D\":\"mjenX mjunH\",\"5B51\":\"kjet\",\"7CD4\":\"sjuwX\",\"88DC\":\"puX\",\"4FDE\":\"yu\",\"5BE6\":\"zyit\",\"7F69\":\"traewH\",\"9EE8\":\"tangX\",\"4E73\":\"nyuX\",\"7FFE\":\"xjwien\",\"8A06\":\"kewH\",\"738B\":\"hjwang hjwangH\",\"758F\":\"srjo\",\"5D14\":\"dzwoj\",\"54A5\":\"det\",\"993C\":\"xjiojH\",\"5E3E\":\"tuX\",\"53CB\":\"hjuwX\",\"9AD1\":\"duwk\",\"5FD3\":\"kan\",\"6BDB\":\"maw\",\"845A\":\"dzyimX zyimX\",\"77E3\":\"hiX\",\"616C\":\"gjion\",\"6D74\":\"yowk\",\"56F9\":\"leng\",\"58FD\":\"dzyuwH dzyuwX\",\"797C\":\"kwanH\",\"7A11\":\"ljuwk\",\"632B\":\"tswaH\",\"652F\":\"tsye\",\"92B6\":\"gjuw\",\"57B8\":\"hwan\",\"7D3F\":\"dojX\",\"9EBE\":\"xjwe\",\"63C0\":\"keanX\",\"65C4\":\"maw\",\"6FC8\":\"tsrip\",\"504D\":\"dej\",\"5C55\":\"trjenH trjenX\",\"87D8\":\"dok\",\"89DC\":\"tsje tsjwe\",\"4EDE\":\"nyinH\",\"7E69\":\"yingH zying\",\"8A71\":\"hwaejH\",\"4F73\":\"kea\",\"68F2\":\"sej\",\"8C75\":\"tsuwng\",\"72F6\":\"xjioj xjiojX\",\"748B\":\"tsyang\",\"560C\":\"phjiew\",\"9F12\":\"tsi\",\"4F9D\":\"jioj jiojX\",\"6E1C\":\"nwanH nwanX\",\"90A3\":\"na\",\"53A5\":\"kjwot\",\"6BB5\":\"dwanH thwanH twanH\",\"8A34\":\"suH\",\"71B9\":\"xi\",\"7FBD\":\"hjuX\",\"593E\":\"keap kep\",\"85C1\":\"kawX\",\"83C5\":\"kaen\",\"4EC7\":\"gjuw\",\"97CD\":\"pjut\",\"714E\":\"tsjen\",\"58D3\":\"aep\",\"6CDB\":\"phjomH\",\"6ADF\":\"lek\",\"84EB\":\"drjuwk trhjuwk\",\"6C70\":\"dajH thajH that\",\"88F3\":\"dzyang\",\"96F7\":\"lwoj\",\"5FFD\":\"xwot\",\"7E7C\":\"kejH\",\"7D11\":\"phjuw phjuwX\",\"5F92\":\"du\",\"8F1D\":\"xjwioj\",\"77A2\":\"mjuwng mong\",\"7DA6\":\"gi giH\",\"81AE\":\"xew xewX\",\"8FB2\":\"nowng\",\"95B6\":\"tsyhang\",\"7A3F\":\"kawX\",\"62C4\":\"trjuX\",\"8E47\":\"kjenX kjonX\",\"944B\":\"khengH khjieng\",\"76CC\":\"wanX\",\"924F\":\"dzrjoX\",\"5B55\":\"yingH\",\"6F5D\":\"xip\",\"8EDC\":\"nop\",\"92E4\":\"dzrjo\",\"5DE6\":\"tsaH tsaX\",\"876D\":\"dej\",\"61EE\":\"juwX\",\"758B\":\"srjo\",\"8A0A\":\"sinH\",\"5D10\":\"kwon\",\"9E12\":\"yoH\",\"8D9B\":\"ngimX\",\"8B9F\":\"duwk\",\"54A1\":\"nyi nyiX\",\"66AD\":\"hawX\",\"6CB1\":\"da\",\"4E32\":\"kwaenH\",\"37B7\":\"hjwangX\",\"523A\":\"tshjeH tshjek\",\"84C1\":\"tsrin\",\"4FC7\":\"gjwangX\",\"55CB\":\"xjaep\",\"96CD\":\"jowng jowngX\",\"374C\":\"kjuwH\",\"59D3\":\"sjengH\",\"7E52\":\"dzing tsong\",\"9AD5\":\"bjinX\",\"4F5C\":\"tsak\",\"9A6A\":\"lej lje\",\"83EF\":\"xwae hwae hwaeH\",\"89F3\":\"haewk huwk khaewk\",\"50F9\":\"kaeH\",\"7F7C\":\"pjit\",\"760D\":\"yang\",\"508E\":\"ten\",\"7C11\":\"swa\",\"8E1D\":\"hwaeX\",\"5F27\":\"hu\",\"7CA6\":\"lin linH\",\"652B\":\"kjwak\",\"7AAA\":\"wae\",\"632F\":\"tsyin tsyinH\",\"5FBC\":\"kew kewH\",\"63C4\":\"duwX yu\",\"69C8\":\"nuwH\",\"564D\":\"dzjewH tsjew tsjuw\",\"5C51\":\"set\",\"7DD0\":\"bjonH\",\"81D8\":\"lap\",\"6E5D\":\"heaj\",\"93E4\":\"luwH\",\"8A75\":\"srin\",\"74F6\":\"beng\",\"72FA\":\"ngjion\",\"9E7D\":\"yem yemH\",\"5B7F\":\"srwaenH srjwenH\",\"6C87\":\"ywenX\",\"768B\":\"kaw\",\"890A\":\"pjienX\",\"540C\":\"duwng\",\"930E\":\"heamX\",\"9D12\":\"leng\",\"8E9B\":\"xweajH\",\"51A5\":\"meng mengX\",\"842C\":\"mjonH\",\"8E30\":\"yu\",\"513A\":\"na naX\",\"7DBD\":\"tsyhak\",\"81C5\":\"tsyhowk\",\"694A\":\"yang\",\"95CD\":\"dzyae tu\",\"50CF\":\"zjangX\",\"6DE0\":\"phejH phjiejH\",\"99D5\":\"kaeH\",\"64D7\":\"bjiek\",\"68DF\":\"tuwngH\",\"7CE7\":\"ljang\",\"9F66\":\"ngjion\",\"4FF1\":\"kju\",\"9EFB\":\"pjut\",\"5DFD\":\"swonH\",\"4F86\":\"loj\",\"750D\":\"meang xweang\",\"538E\":\"tsyijX\",\"619A\":\"danH\",\"6B9E\":\"hwinX\",\"75A2\":\"trhinH\",\"9B29\":\"xek\",\"79AA\":\"dzyenH\",\"602F\":\"khjaep\",\"97B6\":\"ban\",\"66C0\":\"ejH\",\"60C4\":\"nek\",\"964B\":\"luwH\",\"554D\":\"dwon thwon\",\"74CC\":\"kwoj\",\"904F\":\"at\",\"78D4\":\"traek\",\"8CDC\":\"sjeH\",\"90E4\":\"khjaek\",\"7B69\":\"duwng\",\"59EA\":\"det drit\",\"856D\":\"sew\",\"63EE\":\"xjwioj\",\"5E7B\":\"hweanH\",\"587F\":\"luwX\",\"7BFE\":\"met\",\"6D87\":\"keng\",\"8E06\":\"dzwon\",\"778B\":\"tsyhin\",\"718F\":\"xjun\",\"8F9B\":\"sin\",\"64AD\":\"paH\",\"852C\":\"srjo\",\"6EB1\":\"tsrin\",\"9D3C\":\"lak\",\"8AC9\":\"nrjweH\",\"57CB\":\"meaj\",\"9ED1\":\"xok\",\"5BD3\":\"ngjuH\",\"65D7\":\"gi\",\"6FDB\":\"muwng\",\"805A\":\"dzjuH dzjuX\",\"8A5E\":\"zi\",\"7DE7\":\"tshjuw\",\"986A\":\"xjwojH\",\"656C\":\"kjaengH\",\"6F70\":\"hwojH\",\"7D7C\":\"drinX\",\"99FF\":\"tswinH\",\"9F90\":\"luwng\",\"609A\":\"sjowngX\",\"5D27\":\"sjuwng\",\"672B\":\"mat\",\"78AA\":\"trim yim\",\"82AE\":\"nywejH\",\"8CB2\":\"tsje\",\"96B6\":\"dojH yijH\",\"793F\":\"yak\",\"914F\":\"ye\",\"7FD0\":\"drit\",\"6C5D\":\"nyoX\",\"97E0\":\"pjit\",\"9BE8\":\"gjaeng\",\"846D\":\"kae\",\"62EE\":\"ket kjit\",\"7AFE\":\"drje\",\"6C83\":\"owk\",\"8B02\":\"hjwiojH\",\"7E8F\":\"drjen\",\"67B5\":\"xjew\",\"5F3A\":\"gjang gjangX\",\"553E\":\"thwaH\",\"8FC5\":\"swinH\",\"85C9\":\"dzjaeH dzjek\",\"91D1\":\"kim\",\"60DB\":\"xwon\",\"8F5A\":\"kejH\",\"855E\":\"dzwajH\",\"84F3\":\"kjionH kjionX\",\"727C\":\"heang kheang\",\"8E84\":\"pjiek\",\"8D19\":\"hiwenH hiwenX\",\"831D\":\"tsyhiX tsyiX\",\"659E\":\"yuX\",\"682B\":\"dzenH\",\"8DAE\":\"tsawH\",\"7A37\":\"tsik\",\"5CB8\":\"nganH\",\"52BC\":\"kheat\",\"95BE\":\"hwik xwik\",\"6EC4\":\"tshang\",\"5BE2\":\"tshimX\",\"6DEE\":\"hweaj\",\"63F2\":\"sep syet yep zyet\",\"798B\":\"jin\",\"860A\":\"junH junX\",\"879F\":\"meng\",\"93A7\":\"khojH khojX\",\"8B2C\":\"mjiwH\",\"60B1\":\"phjiojX\",\"66B5\":\"xanH xanX\",\"7CB9\":\"swijH\",\"543E\":\"ngu\",\"88C1\":\"dzoj\",\"84C9\":\"yowng\",\"59CB\":\"syiX\",\"96D5\":\"tew\",\"6BD7\":\"bjij\",\"7DE3\":\"ywen ywenH\",\"5F64\":\"dung\",\"73E7\":\"yew\",\"966A\":\"bwoj\",\"9BF7\":\"dej dejH dzyeX\",\"97FF\":\"xjangX\",\"6E05\":\"tshjeng\",\"7A0D\":\"sraewH\",\"9B8C\":\"kwonX\",\"821D\":\"haet\",\"649E\":\"draewng draewngH\",\"7AA2\":\"hwik xwik\",\"5DB8\":\"hjwaeng hweang\",\"69C0\":\"kawX khawX\",\"4E45\":\"kjuwk\",\"994B\":\"gwijH\",\"9F4F\":\"tsej\",\"71D0\":\"lin linH\",\"6C59\":\"wae\",\"83DC\":\"tshojH\",\"99E0\":\"ljuw\",\"3D63\":\"khat\",\"8A6D\":\"kjweX\",\"4F6F\":\"yang\",\"6CEE\":\"phanH\",\"62F2\":\"kjowk kjowngX\",\"5B77\":\"li\",\"577F\":\"bjuH\",\"9F0E\":\"tengX\",\"4F99\":\"trhik\",\"7A20\":\"drjuw\",\"69AD\":\"zjaeH\",\"7FB9\":\"kaeng\",\"903C\":\"pik\",\"573E\":\"ngip\",\"5ACB\":\"newX\",\"95D5\":\"khjwot\",\"68D7\":\"tsawX\",\"8B56\":\"tsrimH\",\"4E58\":\"zying zyingH\",\"62DB\":\"tsyew\",\"5A60\":\"weat\",\"5C64\":\"dzong\",\"8AEB\":\"kaenH\",\"51FD\":\"heam hom\",\"707C\":\"tsyak\",\"6B96\":\"dzyik\",\"9D25\":\"ywit\",\"73A6\":\"kwet\",\"5EB8\":\"yowng\",\"723B\":\"haew\",\"6CC4\":\"sjet\",\"78CC\":\"tsyin\",\"9C4F\":\"yim zim\",\"72D0\":\"hu\",\"8ED8\":\"dwon\",\"615D\":\"thok\",\"96E8\":\"hjuX hjuH\",\"896D\":\"het\",\"61F2\":\"dring\",\"547F\":\"khjo khjoH\",\"840A\":\"loj lojH\",\"590C\":\"ling\",\"7D8F\":\"sjwe swij thwaX\",\"4E99\":\"kongH\",\"6F18\":\"zywin\",\"839B\":\"deng\",\"611C\":\"khep\",\"7B20\":\"lip\",\"4E2E\":\"kjaek\",\"62B1\":\"bawX\",\"5A36\":\"tshjuH\",\"9F38\":\"hemX\",\"5C3A\":\"tsyhek\",\"563E\":\"domX\",\"4FC3\":\"tshjowk\",\"8CC5\":\"koj\",\"86C9\":\"leng\",\"8A56\":\"pje pjeH\",\"63DB\":\"hwanH\",\"8C5A\":\"dwon dwonX\",\"65DF\":\"yo\",\"865E\":\"ngju\",\"7FE3\":\"sraep\",\"71E7\":\"zwijH\",\"946A\":\"lu\",\"696C\":\"gjet khaet\",\"8DEF\":\"luH\",\"99F7\":\"suwH suwX\",\"8B80\":\"duwk\",\"6A96\":\"zwijH\",\"6C9A\":\"tsyiX\",\"5F23\":\"phjuX\",\"9C25\":\"kwean\",\"74AA\":\"tsawX\",\"80B2\":\"yuwk\",\"753F\":\"meang\",\"6BC0\":\"xjweX\",\"67C8\":\"ban\",\"584D\":\"zying\",\"75D4\":\"driX\",\"7A61\":\"srik\",\"7C65\":\"yak\",\"52E6\":\"dzraew tsjewX\",\"4B6B\":\"khejX\",\"6EEE\":\"bjiw pjiw\",\"7AF6\":\"gjaengH\",\"9E79\":\"heam\",\"537B\":\"khjak\",\"7CFA\":\"kjiwX\",\"907D\":\"gjoH\",\"76FE\":\"dwonX zywinX\",\"8F02\":\"kjowk\",\"5E0C\":\"xjioj\",\"8E97\":\"hwaejH\",\"661C\":\"yang\",\"829F\":\"sraem\",\"5DA1\":\"kjwejH\",\"7C20\":\"pju pjuH pjuX\",\"5BA5\":\"hjuwH\",\"96A7\":\"zwijH\",\"79B9\":\"hjuX\",\"77BD\":\"kuX\",\"963C\":\"dzuH\",\"634A\":\"baew\",\"95D1\":\"nget ngjet\",\"50D3\":\"xweajH\",\"8B5A\":\"dom\",\"815E\":\"trhjwenX\",\"5C60\":\"du\",\"5A64\":\"tsyuw\",\"76E7\":\"lu\",\"936A\":\"mjuw\",\"8AEF\":\"dzywen tsyhwenH\",\"80F3\":\"kaek kak\",\"9EF7\":\"duwk\",\"57FD\":\"sawH sawX\",\"767C\":\"pat pjot\",\"8A84\":\"lwijX\",\"9E8C\":\"ngjuX\",\"6D96\":\"lijH\",\"9D21\":\"tshjo\",\"9B25\":\"tuwH\",\"3AA4\":\"pjit\",\"4EAC\":\"kjaeng\",\"7E37\":\"ljuX\",\"723F\":\"tshjang\",\"88D8\":\"gjuw\",\"675D\":\"drjeX ye\",\"7D61\":\"lak\",\"7B65\":\"kjoX\",\"90E8\":\"buwX\",\"53EA\":\"tsyeX\",\"69EE\":\"srim tsrhim\",\"67F2\":\"pijH pit\",\"547B\":\"syin\",\"977D\":\"panH\",\"71FE\":\"dawH\",\"8E02\":\"nrjep\",\"820A\":\"gjuwH\",\"980E\":\"khonX gjioj\",\"5CA1\":\"kang\",\"7D20\":\"suH\",\"62B5\":\"tejX\",\"76BD\":\"trjenX tsyenX\",\"8CC1\":\"pwon pjeH bjun\",\"8AC5\":\"giH\",\"80C9\":\"phak\",\"5DCB\":\"khwij khwijX\",\"9ECD\":\"syoX\",\"5BCF\":\"hwan\",\"784E\":\"heng\",\"8C56\":\"trhjowk\",\"65DB\":\"phjon\",\"805E\":\"mjun mjunH\",\"79E3\":\"mat\",\"5B64\":\"ku\",\"77E7\":\"syinX\",\"8DEB\":\"gjowng khaewng\",\"81F3\":\"tsyijH\",\"58F9\":\"jit\",\"4E82\":\"lwanH\",\"6A05\":\"tshjowng tsjowng\",\"8B84\":\"lwijX\",\"6C96\":\"drjuwng\",\"609E\":\"nguH\",\"6D2B\":\"xwik\",\"57BC\":\"yek\",\"733F\":\"hjwen\",\"90BE\":\"trju\",\"6BC4\":\"khek\",\"61C8\":\"keaH\",\"7FCC\":\"yik\",\"9B4F\":\"ngjwioj ngjwiojH\",\"665D\":\"trjuwH\",\"5EE2\":\"pjojH pjot\",\"9BE4\":\"kwon\",\"68EE\":\"srim\",\"66F2\":\"khjowk\",\"5F77\":\"bang\",\"7CF6\":\"thewH\",\"557B\":\"syeH\",\"7AFA\":\"towk\",\"967D\":\"yang\",\"537F\":\"khjaeng\",\"4E00\":\"jit\",\"6A83\":\"jionX\",\"7E8B\":\"juw\",\"810A\":\"dzjek tsjek\",\"5C0C\":\"dzyuH\",\"641C\":\"srjuw suwX\",\"5FA1\":\"ngjoH\",\"7E20\":\"huwk\",\"59A5\":\"thwaX\",\"75BD\":\"tshjo\",\"83C9\":\"ljowk\",\"5ECB\":\"srjuw\",\"614A\":\"khemX khep\",\"58CF\":\"haemX\",\"6CD7\":\"sijH\",\"895A\":\"zwijH\",\"60DF\":\"ywij\",\"5E60\":\"xu\",\"7AE3\":\"tshwin\",\"8EEB\":\"tsyinX\",\"916A\":\"lak\",\"88EF\":\"drjuw\",\"7A78\":\"zjek\",\"96FB\":\"denH\",\"55FD\":\"suwH\",\"6F01\":\"ngjo\",\"7D0D\":\"nop\",\"5B8E\":\"ewX\",\"8B19\":\"khem\",\"639E\":\"yemX\",\"5A23\":\"dejH dejX\",\"7DA2\":\"drjuw\",\"6E2B\":\"sjet\",\"763B\":\"lju\",\"54BC\":\"kwaeX\",\"4F41\":\"trhiH yiX\",\"6EC0\":\"trhjuwk\",\"68C4\":\"khjijH\",\"62C8\":\"nem\",\"984F\":\"ngaen\",\"6B59\":\"xip\",\"655D\":\"bjiejH\",\"9EE0\":\"heat\",\"5DE2\":\"dzraew\",\"98E4\":\"ziH\",\"8D6D\":\"tsyaeX\",\"7FF6\":\"ngaw\",\"73FE\":\"henH\",\"6B83\":\"jang\",\"800A\":\"det\",\"798F\":\"pjuwk\",\"9A0E\":\"gje\",\"6B18\":\"trjowk\",\"651C\":\"hwej\",\"819F\":\"lwit\",\"95A7\":\"haewngH huwngH\",\"52A9\":\"dzrjoH\",\"66B1\":\"nrik\",\"60B5\":\"trhjangH\",\"5E36\":\"tajH\",\"74BD\":\"sjeX\",\"6C42\":\"gjuw\",\"7A4E\":\"kjwiengX kwengX ywengX\",\"61DF\":\"drwijH\",\"5F60\":\"jwak\",\"9C62\":\"saw\",\"8FEB\":\"paek\",\"4CED\":\"tsik tsjek\",\"54FD\":\"kaengX\",\"757C\":\"trhjangH\",\"91FF\":\"kjion\",\"6E96\":\"tsywinX\",\"5B23\":\"nreang\",\"7CA2\":\"dzejH tsij\",\"39A4\":\"ijH\",\"76A6\":\"kewX\",\"6F2B\":\"maenH manH\",\"84B2\":\"bu\",\"5BB8\":\"dzyin\",\"98BA\":\"yang\",\"6FC0\":\"kek kewH\",\"9F4B\":\"tsreaj\",\"5C4D\":\"syij\",\"7DCC\":\"nywij\",\"71D4\":\"bjon\",\"4ED6\":\"tha\",\"645D\":\"luwk\",\"85DC\":\"lej\",\"7E61\":\"sjuwH\",\"50EA\":\"gjwit\",\"8C6D\":\"kae\",\"577B\":\"drij\",\"947D\":\"tswan tswanH\",\"72FE\":\"tsyejH\",\"5C08\":\"tsywen\",\"6C93\":\"dop\",\"4E14\":\"tshjaeX tshjo tsjo\",\"9E9F\":\"lin\",\"552E\":\"dzyuwH\",\"79B1\":\"tawH tawX\",\"7FB5\":\"bjun\",\"65B9\":\"bang pjang pjangX\",\"6BBD\":\"haew\",\"8A3C\":\"tsyengH\",\"91C1\":\"xjionH\",\"97C5\":\"xenX\",\"8FD5\":\"nguH\",\"72D7\":\"kuwX\",\"975A\":\"dzjengX\",\"9D5E\":\"nga\",\"64E3\":\"drjuwH tawX\",\"59F1\":\"khwae\",\"9CF3\":\"bjuwngH\",\"5FF5\":\"nemH\",\"88FB\":\"sowk towk\",\"7D09\":\"nrin nyin\",\"5F8A\":\"hwoj\",\"630D\":\"kaewH\",\"6F15\":\"dzaw dzawH\",\"8E94\":\"drjen\",\"581B\":\"phik\",\"779A\":\"sywinH\",\"5E1F\":\"yek\",\"63A2\":\"thom\",\"69A6\":\"kanH\",\"52AC\":\"gju\",\"762F\":\"tshuwk\",\"7C33\":\"kanX\",\"87BA\":\"lwa\",\"8DBE\":\"tsyiX\",\"76C4\":\"tsyew\",\"7CC8\":\"srjoX\",\"62CC\":\"phan\",\"68D0\":\"pjiojX\",\"8C53\":\"yemH\",\"4F55\":\"ha haX\",\"6ED4\":\"daw thaw\",\"385B\":\"mang\",\"5DDE\":\"tsyuw\",\"80E0\":\"khjaep\",\"86E4\":\"kop\",\"6D69\":\"hawX\",\"506B\":\"driX\",\"936D\":\"huw huwH\",\"7BF2\":\"zjwejH zwijH\",\"9F75\":\"ngju nguw\",\"8B7D\":\"yo yoH\",\"618B\":\"phjiet\",\"678F\":\"nom\",\"840E\":\"jwe\",\"6D93\":\"kwen\",\"8A12\":\"nyinH\",\"542E\":\"zywinX\",\"90C1\":\"juwk\",\"55C3\":\"xaewk xak\",\"96C5\":\"ngaeX\",\"5BC7\":\"khuwH\",\"47CF\":\"syak\",\"644E\":\"kjiw ljuw\",\"5B5C\":\"tsi\",\"7FDF\":\"dek\",\"8FFF\":\"swinH zwin\",\"7C09\":\"tsrhjuwH\",\"620D\":\"syuH\",\"9A1D\":\"gjen kjon\",\"5F1F\":\"dejH dejX\",\"712B\":\"nywejH nywet\",\"6EAA\":\"khej khej\",\"772F\":\"mejX\",\"7D33\":\"syin\",\"6F3F\":\"tsjang\",\"71C0\":\"tsyhenX tsyenX\",\"814B\":\"yek\",\"69D0\":\"hweaj hwoj\",\"6FD4\":\"nejX\",\"395B\":\"kik\",\"56DA\":\"zjuw\",\"81E0\":\"ljwenX\",\"6C69\":\"hwit hwot mek kwot\",\"8DE8\":\"khuH khwaeH\",\"516B\":\"peat\",\"74EE\":\"uwngH\",\"9E75\":\"luX\",\"60F6\":\"hwang\",\"4F7F\":\"sriH sriX\",\"870E\":\"jwienX wen gjwienX\",\"6E93\":\"lem nrjem\",\"599D\":\"tsrjang\",\"88A7\":\"khuw\",\"572E\":\"bijX\",\"7BB1\":\"sjang\",\"9A30\":\"dong\",\"67B9\":\"bjuw\",\"4F3E\":\"phij\",\"71A8\":\"jut jwiojH\",\"58C7\":\"dan\",\"7B46\":\"pit\",\"81CD\":\"dzej\",\"674E\":\"liX\",\"7CDF\":\"tsaw\",\"68E7\":\"dzraenH dzreanX dzrjenX\",\"8B66\":\"kjaengX kjiengX\",\"51ED\":\"bing bingH\",\"7A70\":\"nyang nyangX\",\"80F7\":\"xjowng\",\"687C\":\"tshit\",\"610D\":\"minX\",\"808C\":\"kij\",\"6B11\":\"dzwan\",\"8A90\":\"nga\",\"8C94\":\"bjij\",\"5A1B\":\"ngju\",\"759A\":\"kjuwH\",\"5C1F\":\"sjenX\",\"7F9E\":\"sjuw\",\"50AC\":\"tshwoj\",\"742F\":\"kwanX\",\"97AE\":\"dej tej tejX\",\"7E33\":\"drjwenX\",\"85BA\":\"dzejX\",\"6C3F\":\"kwijX\",\"72C0\":\"dzrjangH\",\"60CC\":\"jwonX\",\"6AD0\":\"lwijX\",\"6CD4\":\"kam\",\"53D6\":\"tshuwX tshjuX tshjuH\",\"96D8\":\"wak\",\"55DA\":\"u\",\"795D\":\"tsyuwH tsyuwk\",\"5FDE\":\"min\",\"8EE8\":\"leng\",\"526B\":\"dak\",\"5E73\":\"beanH ben bjaeng\",\"5F08\":\"yek\",\"589D\":\"khaew khewX\",\"87A3\":\"dok dong\",\"70AD\":\"thanH\",\"7CB5\":\"hjwot\",\"57C3\":\"oj\",\"7A46\":\"mjuwk\",\"7C4A\":\"dek thek\",\"8AD1\":\"traewk\",\"4FD3\":\"ngeang\",\"8CD5\":\"gjuw\",\"8A66\":\"syiH\",\"8C6A\":\"haw\",\"50ED\":\"tsemH\",\"716C\":\"yangH\",\"7B70\":\"dzak\",\"7E09\":\"tsinH\",\"600D\":\"dzak\",\"8B6F\":\"yek\",\"5B1B\":\"gjwieng\",\"51AC\":\"towng\",\"96AE\":\"tsej tsejH\",\"5BB0\":\"tsojX\",\"84BA\":\"dzit\",\"6D3F\":\"u\",\"61CC\":\"yek\",\"8F53\":\"pjon\",\"52D6\":\"xjowk\",\"97D8\":\"syep\",\"99DC\":\"bit\",\"5EDE\":\"xim\",\"6E69\":\"trjowngH tuwngH\",\"8FE8\":\"dojX\",\"906D\":\"tsaw\",\"76EE\":\"mjuwk\",\"887D\":\"nyimH nyimX\",\"7E87\":\"lwojH\",\"9D06\":\"drimH\",\"9B0A\":\"sywinH\",\"8F12\":\"tep trjep\",\"7E1C\":\"hwin\",\"8EA7\":\"srjeX\",\"77AD\":\"lew lewX\",\"962C\":\"khaeng\",\"7DB1\":\"kang\",\"99C9\":\"kweng\",\"614E\":\"dzyinH\",\"935A\":\"yang\",\"7ADF\":\"kjaengH kjaengX\",\"8D66\":\"syaeH\",\"766C\":\"sjenX\",\"5DF1\":\"kiX\",\"5BF5\":\"trhjowngX\",\"7A74\":\"hwet\",\"8CFB\":\"bjuH\",\"670D\":\"bjuwk bjuwX\",\"868C\":\"baewngX\",\"742B\":\"puwngX\",\"6BAA\":\"ejH\",\"56AC\":\"bin\",\"722F\":\"tsyhing\",\"91AE\":\"tsjewH\",\"6A3F\":\"dzyenH tsyenX\",\"74C0\":\"nywen nywenX\",\"72C4\":\"dek\",\"6CD0\":\"lok\",\"90D8\":\"ljoX\",\"53DA\":\"kaeX\",\"7F5D\":\"tsjae\",\"9EDC\":\"trhwit\",\"59DE\":\"git\",\"88E8\":\"bjie pjie pjie\",\"546B\":\"thep\",\"526F\":\"phik phjuwH\",\"71EE\":\"sep\",\"7F87\":\"kje\",\"470C\":\"lwan\",\"800E\":\"nywenX\",\"8E12\":\"wa waH\",\"8FA7\":\"beanH bjenX\",\"502E\":\"lwaX\",\"7CB1\":\"ljang\",\"9B34\":\"bjuX\",\"6EBD\":\"nyowk\",\"68E0\":\"dang\",\"8CD1\":\"tsyinH\",\"985E\":\"lwijH\",\"61E3\":\"manX mwonH mwonX\",\"8C66\":\"gjo gjoH\",\"56ED\":\"ngwan\",\"7D70\":\"det\",\"7B74\":\"tsrheak\",\"4EFD\":\"pin\",\"6C11\":\"mjin\",\"4E92\":\"huH\",\"6A15\":\"suwk\",\"789E\":\"ngeam\",\"66A2\":\"trhjangH\",\"752B\":\"pjuX\",\"5BB4\":\"enH\",\"6D3B\":\"hwat kwat\",\"6B3F\":\"khomX\",\"88BE\":\"tsyhu tsyu\",\"75C0\":\"kju\",\"3ACA\":\"aX jeX\",\"834F\":\"nyimX\",\"58DE\":\"hweajH hwojX kweajH\",\"966D\":\"je\",\"536F\":\"maewX\",\"668B\":\"min minX xwon\",\"990A\":\"yangH yangX\",\"9E9B\":\"mej\",\"7C1C\":\"dangX\",\"82A3\":\"bjuw\",\"8CA7\":\"bin\",\"6DBD\":\"xwon\",\"52C3\":\"bwot\",\"9BC9\":\"liX\",\"794A\":\"paeng\",\"85CD\":\"lam\",\"634E\":\"sew\",\"8FD1\":\"gjionH gjionX\",\"89D5\":\"tshu\",\"5FF1\":\"dzyim\",\"7E70\":\"tsawX\",\"84F7\":\"thwoj tsyhwij\",\"598A\":\"nyimH\",\"8E90\":\"ljep\",\"5E1B\":\"baek\",\"9D1D\":\"gju\",\"54AC\":\"aew aew kaew kaew ngaewX\",\"93AE\":\"trin trinH trinX\",\"81BA\":\"ing\",\"70C4\":\"kaewX\",\"804F\":\"nyi\",\"4F51\":\"hjuwH\",\"7D5D\":\"khuH\",\"5BDE\":\"mak\",\"80E4\":\"yinH\",\"566B\":\"eajH i\",\"506F\":\"jiojX\",\"73EE\":\"bwojH\",\"67F6\":\"sijH\",\"678B\":\"pjaengH pjang\",\"980A\":\"xjowk\",\"4F10\":\"bjot\",\"522E\":\"kwaet\",\"6CBD\":\"ku\",\"96C1\":\"ngaenH\",\"53C3\":\"syim tshom tsrhim\",\"7E46\":\"mjiw\",\"84CD\":\"syij\",\"8ED1\":\"dajH dejH\",\"6C52\":\"mang\",\"88D5\":\"yuH\",\"75D7\":\"mwojH xwojH\",\"7FDB\":\"sew syuwk\",\"79DF\":\"tsu\",\"63E3\":\"tsrhjweX tsyhwenX twaX\",\"54ED\":\"khuwk\",\"756C\":\"yo\",\"5EF1\":\"jowng\",\"7F70\":\"bjot\",\"8FFB\":\"ye\",\"6D7C\":\"mwojX\",\"89FF\":\"hwej xjwie\",\"588A\":\"temH\",\"640D\":\"swonX\",\"858C\":\"xjang\",\"5F1B\":\"sye syeX\",\"7A9E\":\"domX\",\"64A2\":\"thom\",\"8A29\":\"xjowng\",\"55AC\":\"gjew khjew kjew\",\"6F3B\":\"lew\",\"80BA\":\"bajH phajH phjojH\",\"693F\":\"trhwin\",\"8ABE\":\"ngin\",\"71C4\":\"yemH yemX\",\"5A49\":\"jwonX\",\"65CC\":\"tsjeng\",\"8B53\":\"hwejH\",\"93D8\":\"tshjang\",\"50DA\":\"lew lewX\",\"87E0\":\"ban\",\"81E4\":\"hen khanH khean kheang khjinH\",\"576B\":\"temH\",\"35EC\":\"trhae\",\"5B73\":\"dziH\",\"7CF2\":\"lajH lat ljejH\",\"4F7B\":\"dew dewX thew\",\"6AFE\":\"yuw\",\"7C83\":\"pjijX\",\"909B\":\"gjowng\",\"539D\":\"tshak\",\"8CA3\":\"dok thok\",\"82A7\":\"zjoX\",\"7BAD\":\"tsjenH\",\"71B1\":\"nyet\",\"4F3A\":\"si siH\",\"99C1\":\"paewk\",\"52C7\":\"yowngX\",\"95C9\":\"jin\",\"774A\":\"kwen kwenH\",\"81D1\":\"nyu\",\"76DF\":\"mjaeng\",\"6CE3\":\"khip\",\"98EB\":\"joH\",\"51F1\":\"khojX\",\"57F5\":\"twaX\",\"8AF7\":\"pjuwngH\",\"6C78\":\"phang\",\"627C\":\"eak\",\"5B82\":\"nyowngX\",\"8A8C\":\"tsyiH\",\"501B\":\"khi\",\"8F25\":\"kwonX\",\"50B0\":\"bong\",\"56B4\":\"ngjaem\",\"85BE\":\"net\",\"884B\":\"xik\",\"735D\":\"gjwit\",\"55DE\":\"tsi\",\"84E8\":\"thek\",\"586B\":\"den denX\",\"9B6D\":\"ngjwon ngwan\",\"6FFA\":\"tsen tsjenH\",\"7D83\":\"sew sjew\",\"9A02\":\"sjeng\",\"5F04\":\"luwngH\",\"7D18\":\"hweang\",\"731C\":\"tshoj\",\"979F\":\"khwak\",\"8DA3\":\"tshjowk tshjuH\",\"4EA5\":\"hojX\",\"83A7\":\"heanH hwaenX\",\"70B1\":\"doj\",\"6CB9\":\"yuw\",\"62BD\":\"trhjuw\",\"4FCF\":\"tshjewH\",\"6C4E\":\"bjuwng phjomH\",\"80D1\":\"tsye\",\"535C\":\"puwk\",\"8A62\":\"swin\",\"6D78\":\"tsimH\",\"81FB\":\"tsrin\",\"42FD\":\"paewngX puwngX\",\"8B8C\":\"enH\",\"511B\":\"mjuX\",\"7E9A\":\"lje sreaX srjeX\",\"571F\":\"duX thuX\",\"749E\":\"phaewk\",\"6AA2\":\"kjemX\",\"8E25\":\"tshjep\",\"792B\":\"lek\",\"51B0\":\"ping\",\"6B37\":\"xjioj\",\"613B\":\"swonH\",\"673F\":\"tshjeH\",\"79C0\":\"sjuwH\",\"5E45\":\"pjuwk pik\",\"894B\":\"kik\",\"8F4F\":\"dzraenX dzreanX\",\"67D4\":\"nyuw\",\"5EDA\":\"drju\",\"725D\":\"bjijX bjinX\",\"93DC\":\"thang\",\"8FE4\":\"ye\",\"8C79\":\"paewH\",\"6EFA\":\"yuw\",\"827D\":\"gjuw\",\"64FE\":\"nyewX\",\"5C04\":\"dzyek zyaeH\",\"5F99\":\"sjeX\",\"929B\":\"sjem\",\"6A20\":\"man manH mjon mwon\",\"8EA3\":\"gju\",\"75B5\":\"dzje\",\"6FB9\":\"damH damX\",\"8E38\":\"trhimX\",\"803C\":\"nam tham\",\"9BC1\":\"kaengX\",\"50C7\":\"ljuwk\",\"83D1\":\"tsri\",\"5E58\":\"tsreak tsrheak\",\"505C\":\"deng\",\"975E\":\"pjioj\",\"856A\":\"mju\",\"786C\":\"ngeangH\",\"53F1\":\"tsyhit\",\"88F7\":\"jwonX khjwonX\",\"7D05\":\"huwng\",\"690D\":\"driH dzyik\",\"4F8E\":\"mjieX\",\"9F19\":\"bej\",\"541F\":\"ngim\",\"779E\":\"man\",\"7A2B\":\"phik\",\"91B2\":\"nrjowng nuwng\",\"87BE\":\"yinX\",\"7AC0\":\"trhjeng\",\"76C8\":\"yeng\",\"64D4\":\"dzyem tamH dzyemH\",\"5BD6\":\"tsim tsimH\",\"9ED8\":\"mok\",\"90DC\":\"kawH kowk\",\"6B61\":\"xwan\",\"8AE0\":\"xjwon\",\"6D65\":\"ip\",\"8CE4\":\"dzjenH\",\"5C6F\":\"dwon trwin\",\"7FEE\":\"heak\",\"6DFA\":\"tsen tshjenX\",\"5B00\":\"kjwe\",\"D851\":\"kaewH\",\"939B\":\"pak\",\"711C\":\"kwon hwonX\",\"959F\":\"pijH\",\"4AA1\":\"tsej\",\"6B20\":\"khjaemH khjomH\",\"78AD\":\"dangH\",\"992C\":\"hu\",\"74B5\":\"yo\",\"8F38\":\"syu\",\"60BD\":\"tshej\",\"9AC1\":\"hwaeX\",\"5FC3\":\"sim\",\"96C9\":\"drijX\",\"6E4E\":\"mjienX\",\"82D1\":\"jwonX jut hjunX\",\"9A56\":\"det thet\",\"5F58\":\"drjejH\",\"515C\":\"tuw\",\"75DF\":\"sjew\",\"965E\":\"sying\",\"9DEF\":\"lew\",\"52F1\":\"maejH\",\"97F3\":\"im\",\"6F78\":\"sraen sraenX srean\",\"617C\":\"tshek\",\"85FF\":\"xwak\",\"4E8E\":\"hju\",\"7A96\":\"kaewH\",\"901D\":\"dzyejH\",\"769E\":\"hawX\",\"68A2\":\"sraew\",\"7B2B\":\"tsrijX\",\"59AC\":\"tuH\",\"7D2F\":\"ljweH ljweX lwaX\",\"9EAE\":\"khjoH khjoX\",\"8AB6\":\"dzwit swijH swojH\",\"633B\":\"syen\",\"8CBA\":\"xjwangH\",\"653F\":\"tsyengH\",\"5A41\":\"lju ljuX luw luwX\",\"7BC0\":\"dzet tset\",\"5C45\":\"kjo kjoH\",\"7DC4\":\"kwonX\",\"63D0\":\"dej dzye tejX\",\"7E59\":\"bjon phjon\",\"91DC\":\"bjuX\",\"355F\":\"khweajH\",\"56DE\":\"hwoj\",\"6A61\":\"zjangX\",\"5B6B\":\"swon\",\"807D\":\"theng thengH\",\"66FE\":\"dzong tsong\",\"9F02\":\"drjew\",\"890E\":\"yuwH zjuwH\",\"9E97\":\"lejH\",\"579D\":\"kjweX\",\"7FAD\":\"yu\",\"592E\":\"jaeng jang\",\"9DC1\":\"ngek\",\"58C3\":\"kjang\",\"694E\":\"xjwiojH\",\"39D9\":\"bit\",\"9B5A\":\"ngjo\",\"72DF\":\"hwan\",\"68E3\":\"dejH\",\"8F62\":\"lak lek\",\"9AEF\":\"nyem nyemH\",\"90F3\":\"ngej\",\"8EF7\":\"bajH bat\",\"49F9\":\"ing\",\"84FB\":\"tsip\",\"667C\":\"jwonX\",\"5F82\":\"dzu\",\"5E17\":\"phjut\",\"7D96\":\"yan\",\"541B\":\"kjun\",\"971D\":\"leng\",\"7C2B\":\"sew\",\"63AA\":\"tshuH\",\"7A2F\":\"tsuwng\",\"99AE\":\"bing bingH\",\"623F\":\"bjang\",\"81BE\":\"kwajH\",\"5D41\":\"kheam khom ngom\",\"5B45\":\"sjem\",\"7AC4\":\"tshwanH\",\"70C8\":\"ljet\",\"8C4B\":\"tong\",\"4F4D\":\"hwijH\",\"6ECC\":\"dek\",\"64D0\":\"hwaenH\",\"62D4\":\"bajH bat beat\",\"5DD6\":\"ngaem\",\"96DC\":\"dzop\",\"6D61\":\"bwot\",\"6B65\":\"buH\",\"8AE4\":\"ngak\",\"61FE\":\"tsyep\",\"60D8\":\"mjangX\",\"9F2C\":\"yuwH\",\"873C\":\"lwijX ywijH\",\"7E42\":\"lwit\",\"8ECD\":\"kjun\",\"684E\":\"tsyit\",\"84D1\":\"swa\",\"82D5\":\"dew\",\"75DB\":\"thuwngH\",\"9A5A\":\"kjaeng\",\"905E\":\"dejH dejX\",\"8E62\":\"tek drjek\",\"52F5\":\"ljejH\",\"8FF7\":\"mej\",\"85FB\":\"tsawX\",\"677C\":\"drjoX zyoH zyoX\",\"83FF\":\"tawH\",\"7C01\":\"srje srjeX\",\"7A05\":\"sywejH thwajH\",\"5F17\":\"bjut pjut\",\"6EA2\":\"yit\",\"8A25\":\"nwot\",\"7D2B\":\"tsjeX\",\"5FAC\":\"bang\",\"7B2F\":\"nrae nu nuH\",\"8CB6\":\"pjaemX pjemX\",\"653B\":\"kuwng\",\"7DC0\":\"tshej\",\"7BC4\":\"bjomX\",\"71C8\":\"tong\",\"4E4D\":\"dzraeH\",\"8B4F\":\"kjioj\",\"65D0\":\"drjewX\",\"63D4\":\"tsuwng tsuwngX\",\"99D8\":\"doj dojX\",\"5ADA\":\"maenH\",\"97DC\":\"thaw\",\"50DE\":\"ngjweH\",\"6C61\":\"u wae\",\"81E8\":\"lim limH\",\"76F2\":\"maeng\",\"4F77\":\"honX\",\"60FE\":\"tsuwng\",\"5E00\":\"tsop\",\"688F\":\"kowk\",\"5B99\":\"drjuwH\",\"7A18\":\"ki\",\"969B\":\"tsjejH\",\"559D\":\"aejH xat\",\"6E20\":\"gjo\",\"8AA3\":\"mju\",\"7DAD\":\"ywij\",\"4F36\":\"leng\",\"6BB9\":\"ejH\",\"65BD\":\"sye yeH\",\"7D42\":\"tsyuwng\",\"54C7\":\"hwea hweaH\",\"4ECB\":\"keajH keat\",\"6B4E\":\"than thanH\",\"7CD7\":\"khjuwX\",\"76DB\":\"dzyeng dzyengH\",\"70DF\":\"en\",\"7C6C\":\"lje\",\"98EF\":\"bjonH bjonX\",\"86FB\":\"sywejH thwaH thwajH ywet\",\"45FD\":\"ywijH\",\"9E80\":\"juw\",\"8C8C\":\"maewH\",\"5C17\":\"syuwk\",\"7F96\":\"kuX\",\"501F\":\"tsjaeH tsjek\",\"D843\":\"drjuw\",\"7E2B\":\"bjowng bjowngH\",\"9BAE\":\"sjen sjenX\",\"50B4\":\"juX\",\"89BA\":\"kaewH kaewk\",\"8E4B\":\"dap\",\"6CCC\":\"pijH\",\"66D0\":\"seng\",\"60D4\":\"dam\",\"5FD6\":\"tshwonX\",\"9AD8\":\"kaw\",\"59DA\":\"yew\",\"755D\":\"muwX\",\"5E6B\":\"pang\",\"4C77\":\"ngjo\",\"8B79\":\"haw\",\"8A0E\":\"thawX\",\"979B\":\"puwngX\",\"751C\":\"dem\",\"4EA1\":\"mjang\",\"6F20\":\"mak\",\"85A7\":\"khawX\",\"64BD\":\"khek khewH\",\"55C7\":\"srik\",\"80D5\":\"bjuH\",\"5B58\":\"dzwon\",\"77DB\":\"mjuw muw\",\"555C\":\"dzywejH trjwet tsyhwet\",\"71DF\":\"yweng\",\"925E\":\"hjwot\",\"8C62\":\"hwaenH\",\"5CED\":\"tshjewH\",\"50F5\":\"gjang kjang\",\"6B78\":\"kjwioj\",\"87FB\":\"ngjeX\",\"81FF\":\"tsrheap\",\"7E96\":\"sjem\",\"9A19\":\"phjienH\",\"571B\":\"yek\",\"511F\":\"dzyang dzyangH\",\"88BA\":\"keat ket\",\"613F\":\"ngjwonH\",\"82BE\":\"pajH pjiojH\",\"9B43\":\"bat\",\"73C8\":\"kae\",\"894F\":\"pat\",\"67D0\":\"muwX\",\"58DA\":\"lu\",\"95DC\":\"waen kwaen\",\"52DE\":\"law lawH\",\"5F6B\":\"tew\",\"8A79\":\"tsyem\",\"68FA\":\"kwan kwanH\",\"847D\":\"jiew\",\"62FE\":\"dzyip gjaep\",\"6C08\":\"tsyen\",\"568F\":\"tejH\",\"871A\":\"bjiojH pjiojX\",\"5C28\":\"maewng\",\"80AB\":\"dzywin tsywin\",\"9F2A\":\"sjengH\",\"86AF\":\"khjuw\",\"49B1\":\"hjweX\",\"8CB3\":\"nyijH\",\"6B32\":\"yowk\",\"4FB5\":\"tshim\",\"92B7\":\"sjew\",\"773A\":\"thewH\",\"7D3E\":\"drjenX dzyenX trjenX tsyinX\",\"8C48\":\"kjiojX khojX\",\"70CB\":\"xaew\",\"554E\":\"nguH\",\"85D9\":\"ngjiojH\",\"6A5C\":\"gjwot\",\"9DE9\":\"pjiejH pjiet\",\"63ED\":\"gjet gjot khjejH khjet kjot\",\"69F1\":\"yuwH yuwX\",\"5A7C\":\"trhjak\",\"9D7E\":\"kwon\",\"8A07\":\"xweang\",\"900B\":\"pu\",\"530D\":\"bu\",\"758E\":\"srjo\",\"7B92\":\"tsyuwX\",\"5F15\":\"yinX yinH\",\"96A4\":\"dwoj\",\"5FAA\":\"zwin\",\"832D\":\"kaew\",\"68B0\":\"heajH\",\"9B3D\":\"mijH\",\"52CC\":\"gjwenH\",\"7F55\":\"xanX\",\"61D6\":\"kwat\",\"885B\":\"hjwejH\",\"67DA\":\"drjuwk yuwH\",\"8E5F\":\"tsjek\",\"79E6\":\"dzin\",\"5D69\":\"sjuwng\",\"606B\":\"thuwng thuwngH\",\"666F\":\"kjaengX\",\"51F6\":\"xjowng\",\"57FA\":\"ki\",\"5DFE\":\"kin\",\"8C89\":\"hak maek\",\"518B\":\"kweng\",\"928D\":\"trit\",\"9E95\":\"kwin\",\"6A9D\":\"tsjep\",\"81AB\":\"lew\",\"87AF\":\"ngaw\",\"48B1\":\"duwk\",\"8DB3\":\"tsjowk tsjuH\",\"6A32\":\"nyijH\",\"7C3E\":\"ljem\",\"65C3\":\"tsyen\",\"71CB\":\"tsjak tsraewk\",\"9F54\":\"tsyhinH\",\"4FDF\":\"dzriX zriX\",\"90E1\":\"gjunH\",\"55E3\":\"ziH\",\"5BE7\":\"neng\",\"9CE9\":\"kjuw\",\"62ED\":\"syik\",\"8A72\":\"koj\",\"4F74\":\"nyiH\",\"39FB\":\"traewk\",\"7AFD\":\"hju\",\"5B7C\":\"ngjet\",\"8B07\":\"kjenX\",\"970F\":\"phjioj\",\"7A92\":\"det tet trit\",\"63AC\":\"kjuwk\",\"8E35\":\"tsyowngX\",\"8ECA\":\"tsyhae kjo\",\"7E55\":\"dzyenH\",\"895B\":\"nrjowng nyowng\",\"72E2\":\"maek\",\"5C69\":\"kjak\",\"676F\":\"pwoj\",\"8FF4\":\"hwoj\",\"56FA\":\"kuH\",\"7F7F\":\"duwng tsyhowng\",\"918D\":\"thejX\",\"700C\":\"pjew\",\"548F\":\"hjwaengH\",\"370E\":\"hej\",\"9B91\":\"baewX\",\"851A\":\"jut jwioj jwiojH\",\"75A5\":\"keajH\",\"7FA9\":\"ngjeH\",\"5E28\":\"sywejH tshjwejH\",\"82AB\":\"ngjwon\",\"84AF\":\"khweajH\",\"672E\":\"zywit\",\"8EB3\":\"kjuwng\",\"753A\":\"dengX thengX\",\"7F3E\":\"beng\",\"66C3\":\"thojH\",\"8E48\":\"dawH\",\"904C\":\"ngak\",\"574E\":\"khomX\",\"93E1\":\"kjaengH\",\"95E5\":\"that\",\"876E\":\"phjuwk\",\"6DF5\":\"wen\",\"6B86\":\"dojX\",\"4F09\":\"khangH\",\"940F\":\"dzwonH\",\"6A1B\":\"kjiw\",\"51A2\":\"trjowngX\",\"5BA6\":\"hwaenH\",\"6CB4\":\"lejH\",\"993D\":\"gwijH\",\"81C2\":\"pjieH\",\"7B51\":\"trjuwk\",\"99D2\":\"kju\",\"63D6\":\"tsip jip\",\"8A5B\":\"tsrjoH\",\"5F69\":\"tshojX\",\"7DEA\":\"kongH\",\"646F\":\"tsyijH\",\"8AF0\":\"siX\",\"8CF4\":\"lajH\",\"53F6\":\"hep\",\"908D\":\"ngjwon\",\"710C\":\"tswinH tswonH\",\"7D14\":\"dwon dwonX dzywin tsi tsywinH tsywinX\",\"689D\":\"dew thew\",\"8E1E\":\"kjoH\",\"5F28\":\"tsyhew tsyhewX\",\"83AB\":\"maek mak muH\",\"8FB3\":\"nowng\",\"91B7\":\"ik iX\",\"7E3E\":\"tsek\",\"914C\":\"tsyak\",\"75CF\":\"hwijX\",\"564E\":\"et\",\"86D9\":\"wea\",\"88DD\":\"tsrjang tsrjangH\",\"59E7\":\"kan\",\"6AF1\":\"ngjet\",\"78FD\":\"khaew khewX\",\"4E09\":\"sam samH\",\"500D\":\"bwojX\",\"768E\":\"kewX\",\"5A11\":\"sa\",\"9F13\":\"kuX\",\"899C\":\"thewH\",\"6D1F\":\"thejH yij\",\"4E9E\":\"aeH\",\"95A4\":\"kop\",\"5AA6\":\"hjwiojH\",\"61AC\":\"kjwaengX\",\"8A31\":\"xjoX xuX\",\"6BB0\":\"duwk\",\"5B3B\":\"duwk\",\"8AC6\":\"khi ki\",\"8CCA\":\"dzok\",\"51CC\":\"ling\",\"96CE\":\"tshjo\",\"5BD0\":\"mjijH\",\"5DD4\":\"ten\",\"62D6\":\"daX tha thaH\",\"64DA\":\"kjoH\",\"485D\":\"jun jwon\",\"8A27\":\"hjuw\",\"7AE6\":\"sjowngX\",\"5E69\":\"bjun phjun\",\"636B\":\"mwon\",\"81EC\":\"nget\",\"54FA\":\"buH\",\"7D7F\":\"gjuw\",\"5EFE\":\"kjowngX\",\"548B\":\"dzraeH\",\"7A14\":\"nyimX\",\"9D26\":\"ang jang\",\"5FBD\":\"xjwioj\",\"9ABF\":\"ben\",\"793E\":\"dzyaeX\",\"964C\":\"maek\",\"9C50\":\"sjuwk srjuw\",\"9A54\":\"demX\",\"6E5C\":\"dzyik\",\"95E1\":\"tsyhenX\",\"5EE7\":\"dzjang\",\"6DF1\":\"syim syimH\",\"7FFD\":\"xwajH\",\"5E7C\":\"jiwH\",\"6B8A\":\"dzyu\",\"570D\":\"hjwioj\",\"6C1B\":\"bjun\",\"6A1F\":\"tsyang\",\"57A2\":\"kuwX\",\"98A8\":\"pjuwng pjuwngH\",\"66AC\":\"sjet\",\"8B35\":\"zip\",\"5C3B\":\"khaw\",\"9F3D\":\"gjuw\",\"774D\":\"henX\",\"91CE\":\"yaeX\",\"63DA\":\"yang\",\"34E0\":\"temH temX\",\"77E2\":\"syij syijX\",\"7DE6\":\"si\",\"7BEA\":\"drje\",\"8AF4\":\"heam\",\"9EFC\":\"pjuX\",\"7A7F\":\"tsyhwen\",\"4F87\":\"yij\",\"968D\":\"hwang\",\"7D10\":\"nrjuwX\",\"3E12\":\"yim\",\"6E9D\":\"kuw\",\"72A5\":\"phjewX\",\"78A9\":\"dzyek\",\"9DBB\":\"hweat hwot kwot\",\"61C3\":\"gjion\",\"504E\":\"woj\",\"9B54\":\"ma\",\"80D9\":\"dzuH\",\"8EDD\":\"gjie\",\"66ED\":\"thangX\",\"6CF1\":\"jang\",\"8E72\":\"dzwon tshwin\",\"70F9\":\"phaeng\",\"5F7C\":\"pjeX\",\"8F07\":\"dzywen\",\"6C86\":\"hangX\",\"708E\":\"dam hjem yemH\",\"5C11\":\"syewH syewX\",\"6D1B\":\"lak\",\"8F9C\":\"ku\",\"99A8\":\"xeng\",\"862D\":\"lan\",\"71B8\":\"tsjem\",\"57CC\":\"langH\",\"90CE\":\"lang\",\"5BD4\":\"dzyik\",\"62DA\":\"phjon pjunH\",\"4E5D\":\"kjuwX\",\"8B5F\":\"sawH\",\"9F67\":\"nget\",\"7CE6\":\"tsyhiH\",\"656B\":\"kewX\",\"87EC\":\"dzyen\",\"8DF0\":\"ben\",\"4EF2\":\"drjuwngH\",\"7D7B\":\"mjunH\",\"52FA\":\"dzyak tsyak\",\"7E10\":\"tsrjuwH\",\"811A\":\"kjak\",\"8B1E\":\"xaewH\",\"77A1\":\"kjwie\",\"80AF\":\"khongX\",\"8AB3\":\"khjut\",\"6D32\":\"tsyuw\",\"53B9\":\"gjuw\",\"9EBB\":\"mae\",\"5DBD\":\"ngaewk\",\"4F46\":\"danX\",\"8A48\":\"ljeH\",\"70CF\":\"u\",\"83D9\":\"dzyweX\",\"8DDD\":\"gjoX\",\"6C5C\":\"ziX\",\"97E1\":\"hjwiojX\",\"7A68\":\"dwoj\",\"65ED\":\"xjowk\",\"6FF1\":\"pjin\",\"34F7\":\"ngjejH\",\"917A\":\"bu buH\",\"6F86\":\"kew\",\"6E1B\":\"heamX keamX\",\"7C27\":\"hwang\",\"9AA8\":\"kwot\",\"852D\":\"imH\",\"68B4\":\"trhjen\",\"9D3D\":\"nyo\",\"7CBC\":\"lin linH\",\"8FC6\":\"ye\",\"6B49\":\"kheamH kheamX khem khemX\",\"7F51\":\"mjangX\",\"9C67\":\"lejX\",\"7FE6\":\"tsjenX\",\"5B69\":\"hoj\",\"84EC\":\"buwng\",\"606F\":\"sik\",\"57F6\":\"ngjejH syejH\",\"92F8\":\"kjoH\",\"7E7B\":\"nyu sju\",\"51FA\":\"tsyhwijH tsyhwit\",\"750C\":\"uw\",\"9E91\":\"mej mjie ngej\",\"5B93\":\"mit\",\"8A1E\":\"jew\",\"76A1\":\"hawX\",\"87AB\":\"syek\",\"622E\":\"ljuwk\",\"95B7\":\"sreat\",\"52B9\":\"haewH\",\"7A3E\":\"kawX\",\"63C3\":\"tsjenX\",\"8B48\":\"dwojH\",\"82D9\":\"gip lip\",\"4FDB\":\"mjenX\",\"53E3\":\"khuwX\",\"5DE7\":\"khaewH khaewX\",\"64ED\":\"waek\",\"826E\":\"konH\",\"8C72\":\"hwan\",\"72F9\":\"heap\",\"907A\":\"ywij ywijH\",\"540D\":\"mjieng\",\"5E11\":\"nu\",\"3F90\":\"ljejH\",\"7C92\":\"lip\",\"97A0\":\"kjuwk\",\"54A2\":\"ngak\",\"5EA6\":\"dak duH\",\"9BA8\":\"gij\",\"842D\":\"kjuX\",\"65AC\":\"tsreamX\",\"7DBC\":\"bek bjie bjiek bjit\",\"55CC\":\"jiek\",\"7E51\":\"khjew\",\"59D4\":\"jwe jweH jweX\",\"66D6\":\"ojH\",\"8F5B\":\"trwijH twojH\",\"60DA\":\"xwot\",\"895F\":\"kim\",\"74E2\":\"bjiew\",\"8FF0\":\"zywit\",\"89F4\":\"syang\",\"7F7B\":\"jwiojH\",\"797F\":\"luwk\",\"7A0C\":\"duX thu thuX\",\"5E8F\":\"zjoX\",\"851E\":\"lju ljuX luw\",\"79A1\":\"maeH\",\"9B22\":\"pjinH\",\"5E24\":\"nrjo\",\"88AB\":\"bjeH bjeX phje phjeH\",\"8B1B\":\"kaewngX\",\"6D2E\":\"thaw\",\"7F3A\":\"khwet khjwiet\",\"753E\":\"tsri\",\"8E44\":\"dej\",\"62C7\":\"muwX\",\"78CB\":\"tsha\",\"5D4E\":\"ngju\",\"61F1\":\"met\",\"7DF9\":\"dej thegX\",\"9F7A\":\"tsrjuw\",\"73FD\":\"theng thengX\",\"6B82\":\"dzu\",\"6A17\":\"trhjo\",\"601B\":\"tat\",\"4F9A\":\"zwinH\",\"661F\":\"dzjeng seng\",\"7C23\":\"khweajH\",\"5BA2\":\"khaek\",\"9EA4\":\"tshu\",\"66B4\":\"bawH buwk\",\"563F\":\"mok\",\"35BE\":\"ngak\",\"4EC4\":\"tsrik\",\"81C6\":\"ik\",\"87CA\":\"mjuw\",\"7B4D\":\"swinX\",\"5ACC\":\"hem\",\"865F\":\"haw\",\"65DE\":\"zwijH\",\"9C63\":\"trjen\",\"5F65\":\"ngjenH\",\"6E6F\":\"syang thang\",\"9CF8\":\"huX\",\"92FC\":\"kang kangH\",\"55FE\":\"tshuwH\",\"8E85\":\"drjowk\",\"6C99\":\"srae\",\"9A22\":\"hae\",\"5F24\":\"tejX\",\"962A\":\"baenX pjonX\",\"8FAF\":\"bjenX\",\"91BB\":\"dzyuw\",\"97BF\":\"kjioj\",\"8F44\":\"haet\",\"79CB\":\"tshjuw\",\"7FCF\":\"ljewH ljiwH ljuwH\",\"5C4E\":\"syijX\",\"8CD9\":\"tsyuw\",\"6D58\":\"mjiojX\",\"9EE5\":\"gjaeng\",\"366A\":\"ejH\",\"9E7A\":\"dza\",\"537C\":\"ngwot\",\"947E\":\"lwan\",\"9F0F\":\"mek\",\"611B\":\"ojH\",\"839C\":\"dewH\",\"671F\":\"gi\",\"5AA2\":\"mawH\",\"95A8\":\"kwej\",\"8A2D\":\"syet\",\"6BAC\":\"tuH\",\"4F2F\":\"paek\",\"61B0\":\"kwet\",\"7DB8\":\"lwin\",\"513B\":\"thangX\",\"73BC\":\"tshejX tshjeX\",\"8AC2\":\"trhjemX\",\"6E45\":\"lenH\",\"4FC4\":\"nga\",\"7A4D\":\"tsjeH tsjek\",\"5BCC\":\"pjuwH\",\"92D2\":\"phjowng\",\"68D6\":\"draeng\",\"815B\":\"aewk\",\"875F\":\"hjwiojH\",\"7AE2\":\"dzriX\",\"696B\":\"tsjep\",\"76EA\":\"dangX thangH\",\"9DF8\":\"ywit\",\"5EFA\":\"kjonH\",\"8B81\":\"dreak treak\",\"8D85\":\"trhjew\",\"6C04\":\"nyowng\",\"8B16\":\"srjuwk\",\"4E18\":\"khjuw\",\"619D\":\"dwojH\",\"7BA1\":\"kwanX\",\"5A20\":\"syin tsyinH\",\"5C24\":\"hjuw\",\"8CAF\":\"trjoX\",\"86B3\":\"drij\",\"5FB9\":\"drjet trhjet\",\"7D3A\":\"kom\",\"51BD\":\"ljet\",\"773E\":\"tsyuwngH\",\"60C7\":\"tsywin\",\"7ACB\":\"lip\",\"984C\":\"dej dejH\",\"6E58\":\"sjang\",\"81DD\":\"lwaX\",\"7A60\":\"nrjowng nyowng\",\"5EE3\":\"kwangH kwangX\",\"50E7\":\"song\",\"63F1\":\"sew sraew sraewk\",\"7FF9\":\"gjiew\",\"5E78\":\"heangX\",\"977E\":\"sjet\",\"9A0B\":\"loj\",\"590D\":\"bjuwk\",\"7F8E\":\"mijX\",\"621B\":\"keat\",\"809C\":\"yuwng\",\"7E23\":\"hwenH hwen\",\"53A6\":\"haeX\",\"96A8\":\"zjwe\",\"55AA\":\"sang sangH\",\"523B\":\"khok\",\"6B41\":\"khomX khop\",\"4AC0\":\"konX\",\"4CC4\":\"tshje\",\"83C6\":\"dzwan\",\"6BD6\":\"pijH\",\"4F59\":\"yo\",\"6DDA\":\"lwijH\",\"67DE\":\"dzak tsak tsraek\",\"6A6B\":\"hwaeng kwangH\",\"4FEE\":\"sjuw\",\"5BF6\":\"pawX\",\"4F83\":\"khanH khanX\",\"8C85\":\"xjuw\",\"6D04\":\"hwoj\",\"5B8B\":\"sowngH\",\"8A16\":\"kjiot xjiojH\",\"861E\":\"ljem ljemX\",\"7CA5\":\"tsyuwk\",\"8DAF\":\"thek\",\"87B3\":\"dang\",\"6FC3\":\"nrjowng nuwng\",\"7BCB\":\"khep\",\"994C\":\"dzrjwenH\",\"5E4E\":\"mek\",\"6F58\":\"phan\",\"80DD\":\"trij\",\"9AE1\":\"khwon\",\"7B60\":\"hjwin\",\"9CE5\":\"tewX\",\"96E9\":\"hju\",\"62F1\":\"kjowngX\",\"70FD\":\"phjowng\",\"517C\":\"kem kemH\",\"967E\":\"nying\",\"8F03\":\"kaewk\",\"9B0B\":\"tsjen tsjenH\",\"648A\":\"haenX\",\"819C\":\"mu\",\"651F\":\"kjunH\",\"52A6\":\"hep\",\"69AC\":\"hjwon\",\"7FB8\":\"ljwe\",\"533B\":\"ejH\",\"6A41\":\"swin trhwin\",\"88C2\":\"ljet\",\"59CC\":\"nemX nyemX\",\"9ECE\":\"lej\",\"55D4\":\"den\",\"4E59\":\"it\",\"6CDA\":\"tshejX tshjeX\",\"5C65\":\"lijX\",\"737B\":\"sa xjonH\",\"757F\":\"gjioj\",\"9F8D\":\"ljowng maewng\",\"8D16\":\"dzyowk zyowk\",\"679D\":\"tsye\",\"811E\":\"tshwaX\",\"8CAB\":\"kwan kwanH kwaenH\",\"9EB7\":\"phjuwng\",\"59B9\":\"mwojH\",\"8C40\":\"hej\",\"68C3\":\"lij\",\"594E\":\"khwej\",\"7C60\":\"luwng luwngX ljowng\",\"56E7\":\"kjwaengX\",\"896E\":\"pak powk\",\"65F1\":\"hanX\",\"63F5\":\"gjonX kjonX\",\"9C0B\":\"jonX\",\"638A\":\"phuwX puwX\",\"5F0D\":\"nyijH\",\"9A0F\":\"gi\",\"798E\":\"trjeng\",\"621F\":\"kjaek\",\"8F2D\":\"nywenX\",\"64B0\":\"dzrjwenX\",\"62B4\":\"yejH yet\",\"5E37\":\"hwij\",\"543B\":\"mjunX\",\"973D\":\"tsejH\",\"6D41\":\"ljuw\",\"8FC2\":\"ju hju\",\"83CA\":\"kjuwk\",\"7F4D\":\"lwoj\",\"6DD6\":\"nraewH\",\"845B\":\"kat\",\"6BDA\":\"dzraem dzream\",\"5B65\":\"nu\",\"73EA\":\"kwej\",\"84F0\":\"sjeX\",\"82F4\":\"tshjo tsjo tsraeX\",\"5BFA\":\"ziH\",\"727F\":\"kowk\",\"8A85\":\"trju\",\"6B04\":\"lenH\",\"5B8F\":\"hweang\",\"5D20\":\"tuwng\",\"8DAB\":\"gjew\",\"4EAD\":\"deng\",\"81B3\":\"dzyenH\",\"95BB\":\"yem\",\"7A3A\":\"drijH\",\"703E\":\"lan lanH\",\"69C3\":\"ban\",\"4E42\":\"ngjojH\",\"4FD7\":\"zjowk\",\"88D9\":\"gjun\",\"675C\":\"duX\",\"59E3\":\"haew\",\"7B64\":\"lang\",\"886E\":\"kwonX\",\"577C\":\"trhaek\",\"628A\":\"paeX\",\"788E\":\"swojH\",\"91A8\":\"lje\",\"65B0\":\"sin\",\"5F37\":\"gjang gjangX\",\"963D\":\"yem\",\"533F\":\"nrik\",\"6C41\":\"tsyip\",\"84C6\":\"zjek\",\"5FCC\":\"giH kiH\",\"96D2\":\"lak\",\"53D4\":\"syuwk\",\"74E6\":\"ngwaeX\",\"7F77\":\"beaX bje\",\"5CF6\":\"tawX\",\"99F8\":\"tshim tsrhim\",\"50FE\":\"jiojX ojH\",\"8F16\":\"tsyuw\",\"891A\":\"trjoX\",\"659D\":\"kaeX\",\"831E\":\"dzyin\",\"7FA1\":\"yij zjenH yenH\",\"5E20\":\"ngjejH\",\"3AA3\":\"khaew khaewH\",\"73A9\":\"ngwanH\",\"8EAB\":\"syin\",\"6B2E\":\"kjwot\",\"82B3\":\"phjang\",\"7F36\":\"pjuwX\",\"5BB9\":\"yowng\",\"96BB\":\"tsyek\",\"793A\":\"zyijH\",\"90BF\":\"syi\",\"733E\":\"hweat\",\"8E40\":\"dep\",\"6AC3\":\"gwijH\",\"64C7\":\"draek\",\"78CF\":\"ljem\",\"6A58\":\"kjwit\",\"85DD\":\"ngjejH\",\"645C\":\"kwaenH\",\"7E60\":\"nyweX nywijX\",\"67F1\":\"drjuX\",\"7BF9\":\"swanX\",\"547C\":\"xu xuH\",\"937E\":\"tsyowng\",\"4F01\":\"khjieH khjieX\",\"8A03\":\"phjuH\",\"6D82\":\"du\",\"618A\":\"beajH\",\"980F\":\"hang\",\"4F96\":\"lwin\",\"8A98\":\"yuwX\",\"849C\":\"swanH\",\"51AA\":\"mek\",\"6CAC\":\"mwojH\",\"60B4\":\"dzwijH\",\"563B\":\"xi\",\"4EC0\":\"dzyip\",\"8DC2\":\"gjie\",\"48C4\":\"zjo\",\"87C6\":\"mae\",\"81CA\":\"saw\",\"7D4D\":\"nrim nyim\",\"50D4\":\"tswonX\",\"865B\":\"khjo xjo\",\"5F61\":\"yuwng\",\"6E6B\":\"tsewX tsjuw\",\"686F\":\"yeng\",\"767B\":\"tong\",\"59FA\":\"sejX senX\",\"8E81\":\"tsawH\",\"5F8B\":\"lwit\",\"3A0E\":\"nywet\",\"8E16\":\"dzjek tshjak tshjek tsjek\",\"649D\":\"xjwe\",\"821E\":\"mjuX\",\"3BA3\":\"kojH\",\"902A\":\"tshak\",\"89AF\":\"kuwH\",\"7E36\":\"trip\",\"97BB\":\"kjuH ljuH luw\",\"54BD\":\"en enH in wen\",\"723E\":\"nejX nyeX\",\"8F40\":\"won\",\"79CF\":\"xawH\",\"655C\":\"nep\",\"92E9\":\"mjang\",\"6CED\":\"phju\",\"7AF9\":\"trjuwk\",\"5B78\":\"haewk\",\"557C\":\"dej\",\"4E01\":\"teng treang\",\"608A\":\"trjet\",\"5C0D\":\"twojH\",\"6D17\":\"sejX senX\",\"8B98\":\"nyep\",\"671B\":\"mjangH\",\"859C\":\"bejH\",\"611F\":\"komX\",\"9FA0\":\"yak\",\"6DAC\":\"hengX\",\"7BB8\":\"drjoH\",\"573B\":\"ngjion gjioj\",\"8CC2\":\"luH\",\"86C6\":\"tsjo\",\"80CA\":\"gju\",\"7C4D\":\"dzjek\",\"51D4\":\"tshang tsrhjangH\",\"68DA\":\"bong\",\"5E61\":\"phjon\",\"8DEC\":\"khjwieX\",\"696F\":\"dwonX dzywinX\",\"81F4\":\"trijH\",\"5EF6\":\"yen\",\"58FA\":\"hu\",\"9D89\":\"dwan dzywin\",\"620C\":\"swit\",\"7B9D\":\"gjem\",\"8F2A\":\"lwin\",\"53AD\":\"eamX jiem jiep\",\"7B32\":\"bjenH bjon\",\"5FB5\":\"dring tring triX\",\"82B7\":\"tsyiX\",\"673A\":\"kijX\",\"7AC7\":\"duwH\",\"3DC9\":\"jwiojH\",\"5F4A\":\"gjang gjangX kjang\",\"66CF\":\"syangH syangX xjangH xjangX\",\"8E54\":\"dzamH\",\"58DB\":\"yem\",\"7A5C\":\"drjowng duwng\",\"5EDF\":\"mjewH\",\"81E1\":\"na nej\",\"73ED\":\"paen\",\"526C\":\"tsywenX twan\",\"5E74\":\"nen\",\"65F9\":\"dzyi\",\"3C88\":\"dzyew\",\"7F8A\":\"yang\",\"7E1F\":\"nyowk\",\"5D9E\":\"dwaX\",\"86A4\":\"tsawX\",\"6A27\":\"sreat srjet\",\"8CA8\":\"xwaH\",\"502B\":\"lwin\",\"932D\":\"tew\",\"72AC\":\"khwenX\",\"562F\":\"sewH\",\"634D\":\"hanH\",\"85CE\":\"dzinH\",\"4ED4\":\"tsi tsiX\",\"985B\":\"den ten\",\"5B5D\":\"xaewH\",\"7DDE\":\"dwanX\",\"706B\":\"xwaX\",\"7C73\":\"mejX\",\"8AFC\":\"xjwon\",\"5B87\":\"hjuX\",\"7D08\":\"hwan\",\"8E95\":\"drju\",\"6F14\":\"yenX\",\"91AB\":\"i\",\"742E\":\"dzowng\",\"6C3E\":\"bjomH phjomH\",\"7BC7\":\"phjien\",\"61CB\":\"muwH\",\"67CF\":\"paek\",\"8F54\":\"lin\",\"53D7\":\"dzyuwX\",\"80E1\":\"hu\",\"536C\":\"ngang ngjangX\",\"867A\":\"xjwiojX xweaj xwoj\",\"5C09\":\"jwiojH\",\"7E8A\":\"khwangH\",\"8D13\":\"tsang\",\"4E15\":\"phij\",\"791B\":\"kaem\",\"569A\":\"ngin\",\"81A0\":\"kaew kaewX\",\"48A6\":\"swrit\",\"8DA8\":\"tsrhju\",\"79B0\":\"nejX\",\"7FB4\":\"syen\",\"65B8\":\"trjowk\",\"8A3D\":\"huwH xuwH xuwX\",\"6BBC\":\"khaewk\",\"92C2\":\"mwoj\",\"624D\":\"dzoj\",\"8AD2\":\"ljangH\",\"4FD4\":\"henX khenH\",\"70D6\":\"tsoj\",\"995B\":\"muwng\",\"7CDE\":\"pjunH\",\"54EE\":\"xaew xaewH\",\"99F0\":\"in jin\",\"7E08\":\"jwieng\",\"818D\":\"bej bjij\",\"6C14\":\"khjiojH\",\"63A1\":\"tshojX\",\"65A5\":\"tsyhek\",\"8B26\":\"khengX\",\"8ABB\":\"dop\",\"8CBF\":\"mjuwH muwH\",\"6F3E\":\"yangH\",\"8A50\":\"tsraeH\",\"8C54\":\"yemH\",\"97D9\":\"hjwiojX\",\"355A\":\"tsraewX\",\"785C\":\"kheang\",\"83E1\":\"homX\",\"85E5\":\"yak\",\"71ED\":\"tsyowk\",\"976E\":\"tek\",\"67F9\":\"dzrijX\",\"7C5A\":\"lu\",\"840F\":\"domX\",\"678E\":\"bju\",\"7A1B\":\"kjunH\",\"7C1F\":\"demX\",\"5F9E\":\"dzjowng dzjowngH tshjowng tsjowng tsuwngX\",\"522B\":\"bjet pjet\",\"912D\":\"drjengH\",\"542F\":\"khejX\",\"9B31\":\"jut\",\"7AB0\":\"yew\",\"5E33\":\"trjangH\",\"893D\":\"jwiojH\",\"91C2\":\"tsjewH\",\"5EC8\":\"haeX\",\"9DCA\":\"ngek\",\"614D\":\"junH\",\"89D2\":\"kaewk\",\"9A5B\":\"yek\",\"4F69\":\"bwojH\",\"6DEA\":\"lwin\",\"7E73\":\"tsyak\",\"9CF4\":\"mjaeng\",\"86F8\":\"sraew\",\"88FC\":\"sek thejH\",\"4FFE\":\"pjieX\",\"8A91\":\"kjwangH\",\"6B10\":\"lejH\",\"6D14\":\"tsyiX\",\"591C\":\"yaeH\",\"9E1E\":\"lwan\",\"64A5\":\"pat\",\"50AD\":\"trhjowng yowng\",\"5AB1\":\"yew\",\"3B30\":\"gwijH\",\"5CB5\":\"huX\",\"81B7\":\"xjang\",\"6E3E\":\"hwon\",\"5A46\":\"ba\",\"65CF\":\"dzuwk\",\"96D9\":\"sraewng\",\"795C\":\"huX\",\"5DDF\":\"xwang\",\"82E1\":\"yiX\",\"6F68\":\"dzowng dzuwng tsyuwng\",\"516C\":\"kuwng\",\"966E\":\"dwojX\",\"7AF1\":\"tsywenX twan\",\"5B70\":\"dzyuwk\",\"66F9\":\"dzaw\",\"847A\":\"tship\",\"7A86\":\"pjemH pongH\",\"8F13\":\"mjonX\",\"7D1F\":\"gimH\",\"83A0\":\"yuwX\",\"85A4\":\"heajH\",\"8FA8\":\"bjenX\",\"902D\":\"hwanH\",\"71AC\":\"ngaw\",\"552F\":\"tshwijX ywij ywijX\",\"7BB0\":\"swinX\",\"7DB4\":\"trjwet\",\"67B8\":\"kjuX\",\"69BC\":\"khap\",\"53C0\":\"hwejH\",\"55C4\":\"eajH sraeH\",\"604D\":\"xwangX\",\"6A51\":\"lawX lew\",\"88D2\":\"buw\",\"6C55\":\"sraenH\",\"72D6\":\"yuwH\",\"74DA\":\"dzanX\",\"736B\":\"ljem ljemH ljemX\",\"91EC\":\"kan hanH\",\"756F\":\"tswinH\",\"6B7B\":\"sijX\",\"89FC\":\"kwet\",\"5E87\":\"pjij pjijH\",\"878D\":\"yuwng\",\"660C\":\"tsyhang\",\"6C10\":\"tej tejX\",\"8B95\":\"lan lanX\",\"7F9D\":\"tej\",\"991E\":\"dzjenH dzjenX\",\"65A1\":\"wat kwanH kwanX\",\"63A5\":\"tsjep\",\"712E\":\"xjionH\",\"5BB5\":\"sjew\",\"86B7\":\"gjo\",\"8CBB\":\"phjiojH\",\"633A\":\"dengX thengX\",\"8ABF\":\"dew\",\"864C\":\"pjiet\",\"62CF\":\"nrae\",\"8C50\":\"phjowng phjuwng\",\"68D3\":\"buw phuwX\",\"4F52\":\"jangX jangH\",\"8A54\":\"tsyewH\",\"7E5C\":\"tswon\",\"77ED\":\"twanX\",\"566C\":\"dzyejH\",\"5C70\":\"ngjaek\",\"53EB\":\"kewH\",\"897E\":\"xaeX\",\"9E07\":\"tsyen\",\"7D86\":\"pjiengX\",\"840B\":\"tshej\",\"618E\":\"tsong\",\"539A\":\"huwX\",\"7A1F\":\"limX pimX\",\"542B\":\"hom homH\",\"9B35\":\"dzim dzjem\",\"7AB4\":\"denH\",\"60B8\":\"gjwijH\",\"6EBC\":\"syip\",\"54C0\":\"oj\",\"9BCA\":\"srae\",\"6B55\":\"phwon phwonH\",\"5F5D\":\"yij\",\"9A5F\":\"dzrjuwH\",\"67E2\":\"tej tejH tejX\",\"726F\":\"kuX\",\"9AF4\":\"phjut\",\"80F8\":\"xjowng\",\"8EFC\":\"det yit\",\"5F87\":\"zwin zwinH\",\"670C\":\"bjun\",\"8A95\":\"danX\",\"921A\":\"bjij\",\"5F1C\":\"pit\",\"981E\":\"at\",\"68A9\":\"li\",\"8A2A\":\"phjangH\",\"5CB1\":\"dojH\",\"99B3\":\"drje\",\"7E32\":\"lwij\",\"5AB5\":\"yingH\",\"8DBB\":\"trhimX\",\"623A\":\"dzriX\",\"71C3\":\"nyen\",\"5C46\":\"keajH\",\"65CB\":\"zjwen zjwenH\",\"818C\":\"dzjek\",\"8B54\":\"dzrjwenH dzrjwenX tshjwen\",\"5DDB\":\"khwon\",\"9EDD\":\"jiwX\",\"7F5C\":\"tsyuH\",\"5BDF\":\"tsrheat\",\"82E5\":\"nyak nyaX\",\"76ED\":\"lejH\",\"906E\":\"tsyae\",\"7CF1\":\"ngjet\",\"4F7C\":\"kaewX\",\"887E\":\"khim\",\"9F07\":\"ngaw\",\"850B\":\"dek\",\"7D1B\":\"phjun\",\"9F9C\":\"kjuw kwij\",\"589E\":\"tsong\",\"6F27\":\"kan\",\"552B\":\"gimX khim ngim\",\"77AC\":\"sywinH\",\"532F\":\"hwojX\",\"9A35\":\"ngjwon\",\"7BB4\":\"tsyim\",\"61B8\":\"sjem tshjem tshjemX\",\"8E3D\":\"kjuX\",\"6FBC\":\"phek\",\"55C0\":\"xaewk xuwk\",\"9ACA\":\"dzjeH\",\"80CE\":\"thoj\",\"8ED2\":\"xjon\",\"5E5D\":\"tsyhenX\",\"756B\":\"hweaH hweak\",\"736F\":\"xjun\",\"50EE\":\"duwng\",\"81F8\":\"nyit\",\"6B7F\":\"mwot\",\"8F26\":\"ljenX\",\"55AD\":\"nganH\",\"7D32\":\"sjet\",\"6B3E\":\"khwanX\",\"72C3\":\"nrjuwX\",\"9A48\":\"ywit\",\"60CF\":\"lom\",\"8E50\":\"tsjek\",\"6AD3\":\"luX\",\"4D52\":\"nrit\",\"5EDB\":\"drjen\",\"58DF\":\"ljowngX\",\"81E5\":\"ngwaH\",\"9D72\":\"tshjak\",\"7F86\":\"pje\",\"5B09\":\"xi\",\"860B\":\"bjin\",\"638E\":\"kjeX\",\"4F11\":\"xjuw\",\"8A13\":\"xjunH\",\"7E1B\":\"bjak\",\"8AA8\":\"xwojH\",\"4E3B\":\"tsyuX\",\"6CBC\":\"tsyewX\",\"50C4\":\"phjiew phjiewH\",\"7B49\":\"tojX tongX\",\"65E2\":\"kjiojH\",\"9EF0\":\"tsyinX\",\"5DF2\":\"yiX\",\"98F4\":\"yi\",\"8CFC\":\"kuwH\",\"7B08\":\"gjep\",\"8E91\":\"drjek\",\"901A\":\"thuwng\",\"8E26\":\"khje kjeX ngjeX\",\"97AB\":\"kjuwk\",\"882A\":\"luwng\",\"91AF\":\"xej\",\"89BF\":\"dek\",\"7DC7\":\"tsri\",\"584A\":\"khweajH khwojH\",\"8F50\":\"puwk\",\"6BD3\":\"yuwk\",\"92D9\":\"ngjo ngjoX\",\"7D5C\":\"het ket\",\"59DF\":\"koj\",\"80E5\":\"sjo\",\"5F70\":\"tsyang\",\"62F9\":\"xjaep\",\"4D7C\":\"syang\",\"9D07\":\"pawX\",\"7E86\":\"mok\",\"5A09\":\"phjiengH\",\"870B\":\"lang\",\"628E\":\"hjunX\",\"4E11\":\"trhjuwX\",\"6C92\":\"mwot\",\"509A\":\"haewH\",\"5A9E\":\"dej\",\"6D27\":\"hwijX\",\"4EA6\":\"yek\",\"79B4\":\"yak\",\"4F3B\":\"peang\",\"6DBC\":\"ljang\",\"7A49\":\"drijH\",\"6E51\":\"sjoX\",\"8CD2\":\"syae\",\"5C5D\":\"bjiojH\",\"995F\":\"syang syangH syangX\",\"64E2\":\"draewk\",\"8D67\":\"nraenX\",\"776B\":\"tsjep\",\"7B73\":\"deng\",\"99F4\":\"heajH\",\"83F8\":\"jo\",\"8DFC\":\"gjowk\",\"521C\":\"phjut\",\"86BF\":\"hen\",\"653E\":\"pjangH pjangX\",\"68CB\":\"gi\",\"574A\":\"bjang\",\"5AD7\":\"juH juX\",\"9DD9\":\"tsyijH\",\"50DB\":\"khi\",\"89E1\":\"kaek\",\"85E9\":\"pjon\",\"6DF9\":\"jem\",\"5F05\":\"bjunX\",\"880B\":\"dzyowk\",\"7A17\":\"beaH\",\"701B\":\"yeng\",\"929C\":\"haem\",\"88A0\":\"drit\",\"6C23\":\"khjiojH xjiojH\",\"9B2D\":\"tuwH\",\"7AAC\":\"duw yu\",\"6CB8\":\"pjiojH pjut\",\"62BC\":\"aep\",\"3C43\":\"imX\",\"5EC4\":\"kjuwH\",\"91C6\":\"beanH ben\",\"4ACC\":\"phejX\",\"9A57\":\"ngjemH\",\"965F\":\"trik\",\"8C63\":\"ken\",\"61E6\":\"nwaH nyu\",\"7E6F\":\"hwenX\",\"5DEE\":\"tsha tsrhae tsrhea tsrhje\",\"53F2\":\"sriX\",\"8CF8\":\"yingH\",\"3A02\":\"tuwngX\",\"8A8D\":\"nyinH\",\"4F8F\":\"tsyu\",\"5D18\":\"lwon\",\"9E1A\":\"eang\",\"531C\":\"ye\",\"68A1\":\"khwanX\",\"8A22\":\"xjion\",\"6EA5\":\"pak phuX\",\"862A\":\"mij\",\"81BB\":\"syen\",\"6E3A\":\"mjiewX\",\"69CB\":\"kuwH\",\"8B4C\":\"ngwa\",\"7D58\":\"tshijH\",\"92DD\":\"ljwet\",\"735C\":\"lin\",\"57DF\":\"hwik\",\"345E\":\"yingH\",\"8EE5\":\"gju\",\"6F64\":\"nywinH\",\"7AED\":\"gjet\",\"9C6E\":\"zjoX\",\"9D03\":\"kwet\",\"890B\":\"dep\",\"9D98\":\"hu\",\"711B\":\"linH\",\"5E9A\":\"kaeng\",\"771F\":\"tsyin\",\"85A8\":\"xwong\",\"592B\":\"pju bju\",\"9A2D\":\"tsyit\",\"7BAC\":\"nyak\",\"6DB8\":\"xak\",\"7E45\":\"saw\",\"96CA\":\"kuwH\",\"9B57\":\"dzyuw\",\"525D\":\"paewk\",\"74DE\":\"det\",\"796B\":\"heap\",\"6B77\":\"lek\",\"83FC\":\"thamX\",\"677F\":\"paenX\",\"501C\":\"thek\",\"971E\":\"hae\",\"9AAB\":\"jweX\",\"852A\":\"dzjemX\",\"96B3\":\"xjwie\",\"88B7\":\"kjaep\",\"6B36\":\"sraewk\",\"82BB\":\"tsrhju\",\"84BF\":\"xaw\",\"9C44\":\"dzywenX tsywen tsywenX\",\"6ACB\":\"mjien\",\"884C\":\"haeng haengH hang hangH\",\"4F4E\":\"tej\",\"7E58\":\"kjwit ywit\",\"4EE3\":\"dojH\",\"87E9\":\"kjwot\",\"79ED\":\"tsijX\",\"61FD\":\"xwan\",\"758A\":\"dep\",\"721B\":\"lanH\",\"8AA0\":\"dzyeng\",\"992D\":\"hwang\",\"8F39\":\"bjuwk\",\"60BC\":\"dawH\",\"7D45\":\"khwengX\",\"56C8\":\"ngjejH\",\"95CA\":\"khwat\",\"8FCE\":\"ngjaeng ngjaengH\",\"5F59\":\"hjwiojH\",\"925B\":\"ywen\",\"7DDA\":\"sjenH\",\"77DE\":\"ywit\",\"69E2\":\"zip\",\"7A6B\":\"hwak\",\"5FEE\":\"tsyeH\",\"8EF8\":\"drjuwk\",\"80FC\":\"ben\",\"7D04\":\"jak jiewH\",\"888D\":\"baw bawH\",\"690C\":\"khaewng\",\"9A16\":\"mjuH\",\"5F18\":\"hwong\",\"961E\":\"lok\",\"6AA1\":\"syek draek\",\"9BAB\":\"kaew\",\"9DAF\":\"eang\",\"7E2E\":\"srjuwk\",\"4EB9\":\"mwon\",\"85BF\":\"ngik ngiX\",\"6BCB\":\"mju\",\"544A\":\"kawH kowk\",\"894C\":\"tan\",\"4E4E\":\"hu\",\"67D3\":\"nyemH nyemX\",\"7F58\":\"bjuw\",\"53DB\":\"banH\",\"55DF\":\"tsjae\",\"8AE1\":\"zyijH\",\"6B60\":\"tsyhwet\",\"86E9\":\"gjowng\",\"596C\":\"tsjangX\",\"4F78\":\"hwat\",\"8C7A\":\"dzreaj\",\"60FD\":\"xwon\",\"5A01\":\"jwioj\",\"9F03\":\"wae wea hwae hwea\",\"5C05\":\"khok\",\"8B0B\":\"xaek\",\"748A\":\"mwon\",\"8D0F\":\"yeng\",\"731B\":\"maengX\",\"919C\":\"tsyhuwX\",\"751F\":\"sraeng srjaeng\",\"6F23\":\"ljen\",\"982D\":\"duw\",\"79AC\":\"hwajH kwajH\",\"8E39\":\"tsrhjweH\",\"803D\":\"tom\",\"61BC\":\"gjaengX kjaengX kjiengX\",\"98C2\":\"ljuw\",\"935B\":\"twanH\",\"505D\":\"bwojH\",\"76DE\":\"tsreanX\",\"64EA\":\"jiemX\",\"7D6F\":\"heajX koj\",\"8FF8\":\"peangH\",\"81FC\":\"gjuwX\",\"657F\":\"kjewX\",\"7C00\":\"tsreak\",\"3E97\":\"trhean\",\"9B1A\":\"sju\",\"8F22\":\"jeX\",\"61A9\":\"khjejH\",\"5FAD\":\"yew\",\"6D36\":\"xjowng xjowngX\",\"84BB\":\"nyak\",\"6B3A\":\"khi\",\"82BF\":\"nying\",\"613E\":\"xjiojH\",\"76C7\":\"hap\",\"534A\":\"panH\",\"8E4C\":\"tshjang\",\"99D9\":\"bjuH\",\"52DF\":\"muH\",\"8DE1\":\"tsjek\",\"6C60\":\"drje\",\"7FED\":\"huw\",\"5E6C\":\"daw dawH drjuw\",\"75F1\":\"bjioj bwojX bjiojH\",\"73F5\":\"drjeng\",\"69F9\":\"kaw\",\"4F0D\":\"nguX\",\"8A0F\":\"xju\",\"7E17\":\"tshwoj\",\"741B\":\"trhim\",\"5B9A\":\"dengH tengH\",\"371D\":\"ngomX\",\"969C\":\"tsyang tsyangH\",\"721F\":\"kwanH\",\"519E\":\"mjie\",\"8CA0\":\"bjuwX\",\"8AA4\":\"nguH\",\"74B0\":\"hwaen\",\"72B4\":\"nganH\",\"873D\":\"ljangX\",\"50C8\":\"maenH\",\"7BDA\":\"pjiojX\",\"65E6\":\"tanH\",\"9EEC\":\"eamX keam\",\"88F8\":\"lwaX\",\"647B\":\"sream sreamX\",\"627F\":\"dzying\",\"7D00\":\"kiX\",\"7B04\":\"kej\",\"8E8D\":\"yak\",\"571C\":\"hjwen\",\"901E\":\"trhjengX\",\"4D20\":\"awX\",\"5EAD\":\"deng thengH\",\"782E\":\"nu nuX\",\"91B3\":\"yek\",\"6C36\":\"dzying\",\"85BB\":\"tsawX\",\"6A3A\":\"hwaeH\",\"9B44\":\"phaek\",\"77C7\":\"muwng\",\"6DCB\":\"lim\",\"524A\":\"sjak sjewH sraewH\",\"6BCF\":\"mwoj mwojH mwojX\",\"5FD7\":\"tsyiH\",\"55DB\":\"hemX khemX\",\"96DD\":\"jowng\",\"53DF\":\"suwX\",\"8CE1\":\"kaeng kaengH\",\"6B64\":\"tshjeX\",\"5F6C\":\"pin\",\"703C\":\"nyang\",\"8C76\":\"bjun\",\"807E\":\"luwng\",\"5C01\":\"pjowng\",\"7E82\":\"tswanX\",\"4E0D\":\"pjuw pjuwX\",\"8B0F\":\"sewX\",\"5A9A\":\"mijH\",\"509E\":\"sa tsha\",\"8DA0\":\"trhaewk\",\"4EA2\":\"kang khangH\",\"38AE\":\"syeX\",\"67BC\":\"yep\",\"7A45\":\"khang\",\"5BC4\":\"kjeH\",\"6E4D\":\"thwan\",\"88CE\":\"drjeng\",\"39D8\":\"dzrea\",\"7ADA\":\"drjoX\",\"89F8\":\"tsyhowk\",\"657B\":\"xjwiengH xwenH\",\"4E8B\":\"dzriH\",\"8D8D\":\"drje\",\"9F16\":\"bjun\",\"7B99\":\"bjuwk\",\"931E\":\"dwojH dwojX dzywin\",\"6FA1\":\"tsawX\",\"63A9\":\"jaemX jemX\",\"98AF\":\"sop\",\"7B2E\":\"tsraek\",\"92B3\":\"dwajH ywejH\",\"51B5\":\"xjwangX\",\"8CB7\":\"meaX\",\"633E\":\"hep\",\"6ECB\":\"tsi\",\"62D3\":\"thak\",\"56DB\":\"sijH\",\"745C\":\"yu\",\"89E5\":\"kwaeng\",\"5C6C\":\"dzyowk tsyowk\",\"897A\":\"kenX\",\"5F01\":\"bjenH\",\"718A\":\"hjuwng\",\"701F\":\"sew\",\"539E\":\"bjiojH\",\"8EA0\":\"sat set\",\"5E2B\":\"srij\",\"582F\":\"ngew\",\"8B39\":\"kjionX\",\"853D\":\"pjiejH\",\"9DC2\":\"yewH\",\"9C57\":\"lin\",\"965B\":\"bejX\",\"905F\":\"drij\",\"73DE\":\"lak lek\",\"8A63\":\"ngejH\",\"6DE2\":\"xwik\",\"7E6B\":\"hejH kejH\",\"786F\":\"ngenH\",\"5BEE\":\"lew lewX\",\"96F0\":\"phjun\",\"4FF6\":\"tsyhuwk\",\"8AF8\":\"tsyo\",\"667B\":\"jemX omH omX\",\"84FC\":\"lewX ljuwk\",\"5B83\":\"tha\",\"4F8B\":\"ljejH\",\"8C8D\":\"li\",\"6D0C\":\"ljet\",\"921E\":\"kjwin\",\"99AF\":\"hanH\",\"7A2E\":\"tsyowngH tsyowngX\",\"87BB\":\"luw luwH\",\"81BF\":\"nowng\",\"623E\":\"lejH let\",\"504A\":\"hjuX\",\"3E56\":\"hwanH\",\"755C\":\"trhjuwH trhjuwk xjuwH xjuwk\",\"5D6C\":\"ngwoj ngwojX\",\"76F1\":\"xju\",\"8E76\":\"gjwot kjwejH kjwot\",\"887A\":\"zjae\",\"827E\":\"ngajH ngjojH\",\"708A\":\"tsyhwe\",\"890F\":\"yuwH\",\"5E96\":\"baew\",\"8FA0\":\"dzwojH\",\"6B23\":\"xjion\",\"89A4\":\"xjaek\",\"9C2D\":\"gij\",\"7DAC\":\"dzyuwX\",\"8A39\":\"swit\",\"6BB8\":\"khengH\",\"843D\":\"lak\",\"65BC\":\"jo joH u\",\"7E41\":\"ban bjon\",\"96C6\":\"dzip\",\"53C8\":\"hjuwH\",\"90CA\":\"kaew\",\"8B63\":\"sjem tshjem tshjemX\",\"6CE2\":\"pa\",\"54F2\":\"trjet\",\"6D77\":\"xojX\",\"677B\":\"nrjuwX\"}");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var reader_1 = __webpack_require__(5);
var utils_1 = __webpack_require__(1);
function extractMacros(src, options) {
    var lib = options.lib, lang = options.lang, importOptions = options.importOptions;
    function getImports() {
        var imports = [];
        var qlvl = 0;
        for (var i = 0; i < src.length; i++) {
            if (src[i] == "「") {
                qlvl++;
            }
            else if (src[i] == "」") {
                qlvl--;
            }
            else if (src[i] == "『") {
                qlvl += 2;
            }
            else if (src[i] == "』") {
                qlvl -= 2;
            }
            if (qlvl != 0) {
                continue;
            }
            if (utils_1.match(src, i, "吾嘗觀")) {
                var imp = src
                    .slice(i + 3)
                    .split("之書")[0]
                    .split("中")
                    .map(function (x) { return x.replace(/[「」『』]/g, ""); })
                    .join("/");
                imports.push(imp);
            }
        }
        return imports;
    }
    function getMacros() {
        var macros = [];
        var qlvl = 0;
        for (var i = 0; i < src.length; i++) {
            if (src[i] == "「") {
                qlvl++;
            }
            else if (src[i] == "」") {
                qlvl--;
            }
            else if (src[i] == "『") {
                qlvl += 2;
            }
            else if (src[i] == "』") {
                qlvl -= 2;
            }
            if (qlvl != 0) {
                continue;
            }
            if (src[i] == "或" && src[i + 1] == "云") {
                var grabLit = function () {
                    var lvl = 0;
                    var s = "";
                    while (true) {
                        if (src[j] == "「") {
                            lvl++;
                        }
                        else if (src[j] == "」") {
                            lvl--;
                        }
                        else if (src[j] == "『") {
                            lvl += 2;
                        }
                        else if (src[j] == "』") {
                            lvl -= 2;
                        }
                        s += src[j];
                        j++;
                        if (lvl == 0) {
                            break;
                        }
                        if (j >= src.length) {
                            return s;
                        }
                    }
                    return s;
                };
                var j = i + 2;
                var s0 = grabLit();
                while (!(src[j] == "蓋" && src[j + 1] == "謂")) {
                    j++;
                    if (j >= src.length) {
                        return macros;
                    }
                }
                j += 2;
                var s1 = grabLit();
                var stripQuotes = function (s) {
                    if (s[0] == "「") {
                        s = s.slice(2);
                    }
                    else {
                        s = s.slice(1);
                    }
                    if (s[s.length - 1] == "」") {
                        s = s.slice(0, -2);
                    }
                    else {
                        s = s.slice(0, -1);
                    }
                    return s;
                };
                s0 = stripQuotes(s0);
                s1 = stripQuotes(s1);
                var ins = s0.match(/「[甲乙丙丁戊己庚辛壬癸]」/g);
                var ous = s1.match(/「[甲乙丙丁戊己庚辛壬癸]」/g);
                if (ins !== null && ous !== null) {
                    for (var k = 0; k < ous.length; k++) {
                        var ii = ins.indexOf(ous[k]);
                        if (ii >= 0) {
                            s1 = s1.replace(new RegExp(ous[k], "g"), "$" + (ii + 1));
                        }
                    }
                }
                s0 = s0.replace(/「[甲乙丙丁戊己庚辛壬癸]」/g, "(.+?)");
                macros.push([s0, s1]);
                i = j;
            }
        }
        return macros;
    }
    var imports = getImports();
    var macros = getMacros();
    reader_1.bundleImports(imports, { lib: lib, lang: lang }, importOptions).forEach(function (_a) {
        var src = _a.src, entry = _a.entry;
        var moduleMacros = extractMacros(src, __assign(__assign({}, options), { importOptions: __assign(__assign({}, importOptions), { entryFilepath: entry }) }));
        macros.push.apply(macros, moduleMacros);
    });
    return macros;
}
exports.extractMacros = extractMacros;
function calcBracketStarts(src) {
    var starts = [];
    var level = 0;
    for (var i = 0; i < src.length; i++) {
        var c = src[i];
        if (c == "「") {
            level++;
        }
        else if (c == "」") {
            level--;
        }
        else if (c == "『") {
            level += 2;
        }
        else if (c == "』") {
            level -= 2;
        }
        if (level > 0)
            starts.push(i);
    }
    return starts;
}
function expandMacros(src, macros) {
    var _loop_1 = function (from, to) {
        var re = new RegExp(from);
        var expand = function (ntxt) {
            var starts = calcBracketStarts(ntxt);
            var idx = ntxt.search(re);
            if (idx == -1) {
                return ntxt;
            }
            if (starts.includes(idx)) {
                // console.log("refused to expand macro inside string")
                var nxtend = idx + 1;
                while (starts.includes(nxtend) && nxtend < starts.length) {
                    nxtend++;
                }
                nxtend++;
                ntxt = ntxt.slice(0, nxtend) + expand(ntxt.slice(nxtend));
            }
            else {
                ntxt = expand(ntxt.replace(re, to));
            }
            return ntxt;
        };
        src = expand(src);
    };
    for (var _i = 0, macros_1 = macros; _i < macros_1.length; _i++) {
        var _a = macros_1[_i], from = _a[0], to = _a[1];
        _loop_1(from, to);
    }
    return src;
}
exports.expandMacros = expandMacros;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var version = __webpack_require__(13).version;
exports.version = version;


/***/ }),
/* 13 */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"wenyanlang\",\"description\":\"文言 A programming language for the ancient Chinese\",\"version\":\"0.3.4\",\"author\":\"LingDong <lingdong0618@hotmail.com>\",\"private\":true,\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/LingDong-/wenyan-lang.git\"},\"license\":\"MIT\",\"keywords\":[\"wenyan\",\"wenyan-lang\",\"compiler\",\"ancient-chinese\",\"classical-chinese\"],\"homepage\":\"https://github.com/LingDong-/wenyan-lang\",\"scripts\":{\"build\":\"npm run clear && npm run build:type && webpack --mode production\",\"build:dev\":\"npm run clear && npm run build:type && webpack --mode development\",\"build:site\":\"webpack --mode production --config webpack.site.config.js\",\"build:docs\":\"node ./tools/make_examples_readme.js\",\"build:wiki\":\"node ./tools/wiki/update.js\",\"build:type\":\"tsc --emitDeclarationOnly --declaration --declarationDir ./typings && move-cli ./typings/package.d.ts ./typings/package.json.d.ts\",\"dev:site\":\"webpack --mode development --config webpack.site.config.js --watch\",\"dev\":\"npm run clear && npm run build:type && webpack --mode development --watch\",\"cli\":\"ts-node ./src/cli.ts\",\"clear\":\"rimraf dist typings\",\"publish\":\"bump --commit && node ./tools/publish.js\",\"publish:ci\":\"node ./tools/publish.js\",\"update:wiki\":\"node ./tools/wiki/update.js --push\",\"release\":\"bump --commit --tag && git push --follow-tags\",\"test\":\"jest\",\"test:update\":\"jest --updateSnapshot\",\"lint:fix\":\"npm run lint -- --fix\",\"lint\":\"eslint {src,tools,test}/**/*.{js,ts}\",\"prettify\":\"prettier {src,tools,test}/**/*.{js,ts} --write --quote-props preserve\"},\"husky\":{\"hooks\":{\"pre-commit\":\"lint-staged\"}},\"lint-staged\":{\"{src,tools,test}/**/*.{js,ts}\":[\"prettier --write\",\"eslint --fix\",\"git add\"],\"static/assets/js/**/*.js\":[\"prettier --write\",\"eslint --fix\",\"git add\"]},\"devDependencies\":{\"@types/jest\":\"^24.9.0\",\"@types/node\":\"^13.1.7\",\"@types/webpack-env\":\"^1.15.0\",\"@typescript-eslint/eslint-plugin\":\"^2.16.0\",\"@typescript-eslint/parser\":\"^2.16.0\",\"commander\":\"^4.0.1\",\"consola\":\"^2.11.3\",\"dts-bundle\":\"^0.7.3\",\"eslint\":\"^6.7.2\",\"eslint-config-prettier\":\"^6.7.0\",\"eslint-plugin-babel\":\"^5.3.0\",\"eslint-plugin-html\":\"^6.0.0\",\"eslint-plugin-jest\":\"^23.6.0\",\"eslint-plugin-prettier\":\"^3.1.2\",\"find-up\":\"^4.1.0\",\"fs-extra\":\"^8.1.0\",\"husky\":\"^3.1.0\",\"jest\":\"^24.9.0\",\"lint-staged\":\"^9.5.0\",\"markdown-toc\":\"^1.2.0\",\"move-cli\":\"^1.2.1\",\"nodemon\":\"^2.0.2\",\"prettier\":\"^1.19.1\",\"raw-loader\":\"^4.0.0\",\"remove-strict-webpack-plugin\":\"^0.1.2\",\"rimraf\":\"^3.0.0\",\"set-tz\":\"^0.2.0\",\"ts-jest\":\"^24.3.0\",\"ts-loader\":\"^6.2.1\",\"ts-node\":\"^8.6.2\",\"typescript\":\"^3.7.4\",\"version-bump-prompt\":\"^5.0.6\",\"webpack\":\"^4.41.4\",\"webpack-cli\":\"^3.3.10\",\"webpack-shell-plugin\":\"^0.5.0\"},\"dependencies\":{\"xmlhttprequest\":\"^1.8.0\"}}");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
function loadStdlib() {
    var STDLIB = {};
    try {
        var raw_1 = __webpack_require__(15);
        raw_1.keys().forEach(function (key) {
            var parts = key.slice(2, -3).split("/");
            var data = raw_1(key).default;
            var sublib = STDLIB;
            for (var _i = 0, _a = parts.slice(0, -1); _i < _a.length; _i++) {
                var part = _a[_i];
                if (!sublib[part])
                    sublib[part] = {};
                sublib = sublib[part];
            }
            sublib[parts[parts.length - 1]] = data;
        });
    }
    catch (e) { } // ignore "require.context" error for testing
    return STDLIB;
}
exports.STDLIB = loadStdlib();


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./js/位經.wy": 16,
	"./js/天地經.wy": 17,
	"./js/格物.wy": 18,
	"./js/畫譜.wy": 19,
	"./js/西曆法.wy": 20,
	"./py/位經.wy": 21,
	"./py/天地經.wy": 22,
	"./py/西曆法.wy": 23,
	"./rb/天地經.wy": 24,
	"./列經.wy": 25,
	"./易經.wy": 26,
	"./曆法.wy": 27,
	"./曆表.wy": 28,
	"./渾沌經.wy": 29,
	"./算經.wy": 30,
	"./籌經.wy": 31
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 15;

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

;
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("疏曰「「左移。同犀之x<<y也。」」\n今有一術。名之曰「左移」。欲行是術。必先得二數。曰「甲」。曰「乙」。乃行是術曰。\n\t施「(x=>y=>(x<<y))」於「甲」。於「乙」。名之曰「丙」。乃得「丙」。\n是謂「左移」之術也。\n\n疏曰「「右移。同犀之x>>y也。」」\n今有一術。名之曰「右移」。欲行是術。必先得二數。曰「甲」。曰「乙」。乃行是術曰。\n\t施「(x=>y=>(x>>y))」於「甲」。於「乙」。名之曰「丙」。乃得「丙」。\n是謂「右移」之術也。\n\n疏曰「「補零右移。同犀之x>>>y也。」」\n今有一術。名之曰「補零右移」。欲行是術。必先得二數。曰「甲」。曰「乙」。乃行是術曰。\n\t施「(x=>y=>(x>>>y))」於「甲」。於「乙」。名之曰「丙」。乃得「丙」。\n是謂「補零右移」之術也。\n\n疏曰「「位與。同犀之x&y也。」」\n今有一術。名之曰「位與」。欲行是術。必先得二數。曰「甲」。曰「乙」。乃行是術曰。\n\t施「(x=>y=>(x&y))」於「甲」。於「乙」。名之曰「丙」。乃得「丙」。\n是謂「位与」之術也。\n\n疏曰「「位或。同犀之x|y也。」」\n今有一術。名之曰「位或」。欲行是術。必先得二數。曰「甲」。曰「乙」。乃行是術曰。\n\t施「(x=>y=>(x|y))」於「甲」。於「乙」。名之曰「丙」。乃得「丙」。\n是謂「位或」之術也。\n\n疏曰「「異或。同犀之x^y也。」」\n今有一術。名之曰「異或」。欲行是術。必先得二數。曰「甲」。曰「乙」。乃行是術曰。\n\t施「(x=>y=>(x^y))」於「甲」。於「乙」。名之曰「丙」。乃得「丙」。\n是謂「异或」之術也。\n\n疏曰「「與非。同犀之~(x&y)也。」」\n今有一術。名之曰「與非」。欲行是術。必先得二數。曰「甲」。曰「乙」。乃行是術曰。\n\t施「(x=>y=>(~(x&y)))」於「甲」。於「乙」。名之曰「丙」。乃得「丙」。\n是謂「与非」之術也。\n\n疏曰「「位變。同犀之~x也。」」\n今有一術。名之曰「位變」。欲行是術。必先得一數。曰「甲」。乃行是術曰。\n\t施「(x=>(~x))」於「甲」。名之曰「乙」。乃得「乙」。\n是謂「位變」之術也。\n");

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

;
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("今有一言。曰「「犀」」。名之曰「境」。\n\n注曰「「鑒。同Javascript之eval也。」」\n今有一術。名之曰「鑒」。欲行是術。必先得一言。曰「言」。乃行是術曰。\n\t施「eval」於「言」。乃得矣。\n是謂「鑒」之術也。");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

;
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n今有一術。名之曰「取物」。欲行是術。必先得一物曰「物」。一言曰「端」。乃行是術曰。\n\t施「(obj=>x=>obj[x])」於「物」於「端」。乃得矣。\n是謂「取物」之術也。\n\n今有一術。名之曰「置物」。欲行是術。必先得一物曰「物」。一言曰「端」。一元曰「實」。乃行是術曰。\n\t施「(obj=>x=>v=>{obj[x]=v})」於「物」於「端」於「實」。\n是謂「置物」之術也。\n\n今有一術。名之曰「列物之端」。欲行是術。必先得一物曰「物」。乃行是術曰。\n\t施「Object.keys」於「物」乃得矣。\n是謂「列物之端」之術也。\n\n今有一術。名之曰「識類」。欲行是術。必先得一元曰「元」。乃行是術曰。\n\t施「(x=>((x instanceof Array)?\"列\":({\"number\":\"數\",\"boolean\":\"爻\",\"string\":\"言\",\"function\":\"術\",\"object\":\"物\"}[(typeof x)])))」於「元」乃得矣。\n是謂「識類」之術也。\n");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

;
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("吾有一列。名之曰「色表」。充「色表」\n以「「黑」」。\t以「「#000000」」。\n以「「鈦白」」。\t以「「#ffffff」」。\n以「「藤黃」」。\t以「「#faea56」」。\n以「「硃磦」」。\t以「「#d44906」」。\n以「「硃砂」」。\t以「「#c0927b」」。\n以「「胭脂」」。\t以「「#491817」」。\n以「「曙紅」」。\t以「「#c72c35」」。\n以「「赭石」」。\t以「「#522d14」」。\n以「「大紅」」。\t以「「#b91c1b」」。\n以「「花青」」。\t以「「#141931」」。\n以「「三綠」」。\t以「「#afceb5」」。\n以「「酞青藍」」。\t以「「#1e2867」」。\n以「「三青」」。\t以「「#acc8d4」」。\n\n\n今有一術。名之曰「備紙」。欲行是術。必先得二數。曰「寬」。曰「高」。乃行是術曰。\n\t施「document.createElement」於「「canvas」」。名之曰「canv」。\n\t施「canv.getContext」於「「2d」」。名之曰「ctx」。\n\t昔之「canv」之「「width」」者。今「寬」是矣。\n\t昔之「canv」之「「height」」者。今「高」是矣。\n\t昔之「ctx.lineJoin」者。今「「round」」是矣。\n\t昔之「ctx.lineCap」者。今「「round」」是矣。\n\t乃得「canv」。\n是謂「備紙」之術也。\n\n今有一術。名之曰「裱畫」。欲行是術。必先得一物。曰「紙」。一言。曰「壁」。乃行是術曰。\n\t施「document.getElementById」於「壁」。名之曰「div」。\n\t施「div.appendChild」於「紙」。\n是謂「裱畫」之術也。\n\n\n今有一術。名之曰「落筆」。欲行是術。必先得一物。曰「紙」。二數。曰「東」曰「南」。乃行是術曰。\n\t有物「紙」。名之曰「canv」。施「canv.getContext」於「「2d」」。名之曰「ctx」。\n\t施「ctx.beginPath」。\n\t施「(x=>y=>ctx.moveTo(x,y))」於「東」於「南」。\n是謂「落筆」之術也。\n\n今有一術。名之曰「運筆」。欲行是術。必先得一物。曰「紙」。二數。曰「東」曰「南」。乃行是術曰。\n\t有物「紙」。名之曰「canv」。施「canv.getContext」於「「2d」」。名之曰「ctx」。\n\t施「(x=>y=>ctx.lineTo(x,y))」於「東」於「南」。\n是謂「運筆」之術也。\n\n吾有一術。名之曰「取十六進制色」。欲行是術。必先得一言。曰「色」。乃行是術曰。\n\t有數一。名之曰「戊」。恆為是。若「戊」大於「色表」之長者乃止也。\n\t\t若「色表」之「戊」等於「色」者。\n\t\t\t加「戊」以一。名之曰「色數」。\n\t\t\t夫「色表」之「色數」。乃得矣。\n\t\t\t乃止。\n\t\t云云。\n\t加二以「戊」。昔之「戊」者。今其是矣。云云。\n是謂「取十六進制色」之術也。\n\n今有一術。名之曰「蘸色」。欲行是術。必先得一物。曰「紙」。一言。曰「色」。乃行是術曰。\n\t有物「紙」。名之曰「canv」。施「canv.getContext」於「「2d」」。名之曰「ctx」。\n\t昔之「ctx.globalAlpha」者。今一是矣。\n\t\n\t施「取十六進制色」於「色」。名之曰「十六進制色」。\n\t昔之「ctx.strokeStyle」者。今「十六進制色」是矣。\n\t昔之「ctx.fillStyle」者。今「十六進制色」是矣。\n是謂「蘸色」之術也。\n\n今有一術。名之曰「調色」。欲行是術。必先得一物曰「紙」。一言曰「色」。一數曰「分」。乃行是術曰。\n\t有物「紙」。名之曰「canv」。施「canv.getContext」於「「2d」」。名之曰「ctx」。\n\t昔之「ctx.globalAlpha」者。今一是矣。\n\t\n\t施「取十六進制色」於「色」。名之曰「col」。\n\t夫「分」。名之曰「t」。\n\t\n\t夫「parseInt(ctx.fillStyle.slice(1),16)」。名之曰「rgb0」。\n\t夫「parseInt(col.slice(1),16)」。名之曰「rgb1」\n\t夫「Math.floor((rgb0>>>16)*(1-t)+(rgb1>>>16)*t)」名之曰「r」\n\t夫「Math.floor(((rgb0>>8)&0xff)*(1-t)+((rgb1>>8)&0xff)*t)」名之曰「g」\n\t夫「Math.floor((rgb0&0xff)*(1-t)+(rgb1&0xff)*t)」名之曰「b」\n\t夫「r.toString(16).padStart(2,'0')」名之曰「R」。\n\t夫「g.toString(16).padStart(2,'0')」名之曰「G」。\n\t夫「b.toString(16).padStart(2,'0')」名之曰「B」。\n\t夫「\"#\"+R+G+B」。名之曰「十六進制色」。\n\t昔之「ctx.strokeStyle」者。今「十六進制色」是矣。\n\t昔之「ctx.fillStyle」者。今「十六進制色」是矣。\n\n是謂「調色」之術也。\n\n今有一術。名之曰「蘸水」。欲行是術。必先得一物曰「紙」。一數曰「分」。乃行是術曰。\n\t有物「紙」。名之曰「canv」。施「canv.getContext」於「「2d」」。名之曰「ctx」。\n\t減「分」於一。昔之「ctx.globalAlpha」者。今其是矣。\n是謂「蘸水」之術也。\n\n今有一術。名之曰「擇筆」。欲行是術。必先得一物。曰「紙」。一數。曰「號」。乃行是術曰。\n\t有物「紙」。名之曰「canv」。施「canv.getContext」於「「2d」」。名之曰「ctx」。\n\t昔之「ctx.lineWidth」者。今「號」是矣。\n是謂「擇筆」之術也。\n\n今有一術。名之曰「提筆」。欲行是術。必先得一物。曰「紙」。乃行是術曰。\n\t有物「紙」。名之曰「canv」。施「canv.getContext」於「「2d」」。名之曰「ctx」。\n\t施「ctx.stroke」。\n是謂「提筆」之術也。\n\n今有一術。名之曰「設色」。欲行是術。必先得一物。曰「紙」。乃行是術曰。\n\t有物「紙」。名之曰「canv」。施「canv.getContext」於「「2d」」。名之曰「ctx」。\n\t施「ctx.fill」。\n是謂「設色」之術也。");

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

;
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("今有一術。名之曰「紀元時」。是術曰。\n\t施「(()=>new Date().getTime()/1000)」。乃得矣。\n是謂「紀元時」之術也。\n\n今有一術。名之曰「時差」。欲行是術。必先得一數。曰「時」。乃行是術曰。\n\t施「(x => 0 - new Date(x * 1000).getTimezoneOffset() * 60)」於「時」。乃得矣。\n是謂「時差」之術也。\n");

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

;
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("今有一術。名之曰「左移」。欲行是術。必先得二數。曰「甲」。曰「乙」。乃行是術曰。\n\t吾有一術。名之曰\n\t施「(lambda x: lambda y : x<<y)」於「甲」。於「乙」。名之曰「丙」。乃得「丙」。\n是謂「左移」之術也。\n\n今有一術。名之曰「右移」。欲行是術。必先得二數。曰「甲」。曰「乙」。乃行是術曰。\n\t施「(lambda x: lambda y : x>>y)」於「甲」。於「乙」。名之曰「丙」。乃得「丙」。\n是謂「右移」之術也。\n\n今有一術。名之曰「補零右移」。欲行是術。必先得二數。曰「甲」。曰「乙」。乃行是術曰。\n\t施「(lambda x: lambda y : return (x % 0x100000000) >> y)」於「甲」。於「乙」。名之曰「丙」。乃得「丙」。\n是謂「補零右移」之術也。\n\n今有一術。名之曰「位与」。欲行是術。必先得二數。曰「甲」。曰「乙」。乃行是術曰。\n\t施「(lambda x: lambda y : x&y)」於「甲」。於「乙」。名之曰「丙」。乃得「丙」。\n是謂「位与」之術也。\n\n今有一術。名之曰「位或」。欲行是術。必先得二數。曰「甲」。曰「乙」。乃行是術曰。\n\t施「(lambda x: lambda y : x|y)」於「甲」。於「乙」。名之曰「丙」。乃得「丙」。\n是謂「位或」之術也。\n\n今有一術。名之曰「异或」。欲行是術。必先得二數。曰「甲」。曰「乙」。乃行是術曰。\n\t施「(lambda x: lambda y : x^y)」於「甲」。於「乙」。名之曰「丙」。乃得「丙」。\n是謂「异或」之術也。\n\n今有一術。名之曰「与非」。欲行是術。必先得二數。曰「甲」。曰「乙」。乃行是術曰。\n\t施「(lambda x: lambda y : ~(x&y))」於「甲」。於「乙」。名之曰「丙」。乃得「丙」。\n是謂「与非」之術也。\n\n今有一術。名之曰「位變」。欲行是術。必先得一數。曰「甲」。乃行是術曰。\n\t施「(lambda x: ~x」於「甲」。名之曰「乙」。乃得「乙」。\n是謂「位變」之術也。\n");

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

;
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("今有一言。曰「「蟒」」。名之曰「境」。\n\n今有一術。名之曰「鑒」。欲行是術。必先得一言。曰「言」。乃行是術曰。\n\t施「eval」於「言」。乃得矣。\n是謂「鑒」之術也。");

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

;
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n今有一術。名之曰「紀元時」。是術曰。\n\t施「__import__」於「「time」」。名之曰「time」。\n\t施「time.time」。乃得矣。\n是謂「紀元時」之術也。\n\n今有一術。名之曰「時差」。欲行是術。必先得一數。曰「時」。乃行是術曰。\n\t施「__import__」於「「time」」。名之曰「time」。\n\t施「(lambda x: time.localtime(x).tm_gmtoff)」於「時」。乃得矣。\n是謂「時差」之術也。\n");

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

;
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("今有一言。曰「「鑽」」。名之曰「境」。\n\n今有一術。名之曰「鑒」。欲行是術。必先得一言。曰「言」。乃行是術曰。\n\t施「eval」於「言」。乃得矣。\n是謂「鑒」之術也。");

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

;
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("或云「「凡「甲」皆「乙」其上者」」。\n蓋謂「「施「遍施」於「乙」於「甲」」」\n\n或云「「唯「甲」中得「乙」者」」\n蓋謂「「施「篩剔」於「乙」於「甲」」」\n\n或云「「併「甲」於「乙」以「丙」者」」\n蓋謂「「施「左併」於「丙」於「乙」於「甲」」」\n\n注曰「「遍施。同Javascript之Array.forEach也。」」\n今有一術。名之曰「遍施」。欲行是術。必先得一術。曰「甲」。一列。曰「乙」。乃行是術曰。\n\t吾有一列。名之曰「丙」。\n\t凡「乙」中之「丁」。\n\t\t施「甲」於「丁」。充「丙」以其也。\n\t乃得「丙」。\n是謂「遍施」之術也。\n\n注曰「「篩剔。同Javascript之Array.filter也。」」\n今有一術。名之曰「篩剔」。欲行是術。必先得一術。曰「甲」。一列。曰「乙」。乃行是術曰。\n\t吾有一列。名之曰「丙」。\n\t凡「乙」中之「丁」。\n\t\t施「甲」於「丁」。\n\t\t若其者。充「丙」以「丁」也。\n\t云云。\n\t乃得「丙」。\n是謂「篩剔」之術也。\n\n今有一術。名之曰「左併」。欲行是術。必先得一術。曰「甲」。一元。曰「乙」。一列。曰「丙」。乃行是術曰。\n\t吾有一元曰「乙」。名之曰「丁」。\n\t凡「丙」中之「戊」。\n\t\t施「甲」於「丁」於「戊」。\n\t\t昔之「丁」者。今其是矣。\n\t云云。\n\t乃得「丁」。\n是謂「左併」之術也。\n\n\n今有一術。名之曰「右併」。欲行是術。必先得一術。曰「甲」。一元。曰「乙」。一列。曰「丙」。乃行是術曰。\n\t吾有一元曰「乙」。名之曰「丁」。\n\t夫「丙」之長。名之曰「戊」。\n\t恆為是。若「戊」小於一者乃止也。\n\t\t夫「丙」之「戊」。夫「丁」。取二以施「甲」。\n\t\t昔之「丁」者。今其是矣。\n\t減「戊」以一。昔之「戊」者。今其是矣。云云。\n\t乃得「丁」。\n是謂「右併」之術也。\n\n注曰「「排序。同Javascript之Array.sort也。」」\n今有一術。名之曰「排序」。欲行是術。必先得一術。曰「甲」。一列。曰「乙」。乃行是術曰。\n\n\t若「乙」之長不大於一者。乃得「乙」也。\n\t吾有三列。名之曰「首」。曰「頷」。曰「尾」。\n\n\t夫「乙」之一。名之曰「乙一」。\n\t充「頷」以「乙一」。\n\t夫「乙」之其餘。名之曰「乙餘」。\n\n\t凡「乙餘」中之「丁」。\n\t\t施「甲」於「丁」於「乙一」。\n\t\t若其小於零者。\n\t\t\t充「首」以「丁」。\n\t\t若非。\n\t\t\t充「尾」以「丁」\n\t\t也。\n\t云云。\n\t施「排序」於「甲」於「首」。昔之「首」者。今其是矣。\n\t施「排序」於「甲」於「尾」。昔之「尾」者。今其是矣。\n\n\t銜「首」以「頷」以「尾」。名之曰「丙」。\n\t乃得「丙」。\n\n是謂「排序」之術也。\n\n注曰「「倒序。同Javascript之Array.reverse也。」」\n今有一術。名之曰「倒序」。欲行是術。必先得一列。曰「甲」。乃行是術曰。\n\t吾有一列。名之曰「乙」。\n\t夫「甲」之長。名之曰「戊」。\n\t恆為是。若「戊」小於一者乃止也。\n\t\t夫「甲」之「戊」。充「乙」以其。\n\t減「戊」以一。昔之「戊」者。今其是矣。云云。\n\t乃得「乙」。\n是謂「倒序」之術也。\n\n注曰「「擷取。同Javascript之Array.slice也。」」\n今有一術。名之曰「擷取」。欲行是術。必先得一列。曰「甲」。二數。曰「乙」曰「丙」。乃行是術曰。\n\t吾有一列。名之曰「丁」。\n\t吾有一數。曰「乙」。名之曰「戊」。\n\t若「丙」小於零者。夫「甲」之長。加其以「丙」。昔之「丙」者。今其是矣。云云。\n\n\t恆為是。若「戊」大於「丙」者乃止也。\n\t\t夫「甲」之「戊」。充「丁」以其。\n\t加「戊」以一。昔之「戊」者。今其是矣。云云。\n\t乃得「丁」。\n是謂「擷取」之術也。\n\n\n今有一術。名之曰「製列」。欲行是術。必先得一數。曰「甲」。一術。曰「乙」。一列。曰「丙」。乃行是術曰。\n\t吾有一列。名之曰「丁」。\n\t吾有一數曰一。名之曰「戊」。\n\n\t恆為是。若「戊」大於「甲」者乃止也。\n\t\t施「乙」於「戊」。充「丁」以其。\n\t加「戊」以一。昔之「戊」者。今其是矣。云云。\n\t乃得「丁」。\n是謂「製列」之術也。\n\n\n今有一術。名之曰「索一」。欲行是術。必先得一列。曰「甲」。一元。曰「乙」。乃行是術曰。\n\t吾有一數曰一。名之曰「戊」。\n\t恆為是。若「戊」大於「甲」之長者乃止也。\n\t\t若「乙」等於「甲」之「戊」者。乃得「戊」也。\n\t加「戊」以一。昔之「戊」者。今其是矣。云云。\n\t乃得零。\n是謂「索一」之術也。\n\n\n\n");

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

;
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("吾有一數。曰四十二。名之曰「運數」。\n\n注曰「「運。同Javascript之set random seed也。」」\n今有一術。名之曰「運」。欲行是術。必先得一數。曰「甲」。乃行是術曰。\n\t注曰「「運者。隨機種子也」」\n\t昔之「運數」者。今「甲」是矣。\n是謂「運」之術也。\n\n注曰「「占。同Javascript之Math.random也。」」\n今有一術。名之曰「占」。是術曰。\n\t注曰「「線性同餘方法所得隨機數也」」\n\t有數四十二億九千四百九十六萬七千二百九十六。名之曰「模」。\n\t注曰「「有數二千二百六十九萬五千四百七十七。名之曰「倍」。」」\n\t有數二千二百六十七萬五千四百五十六。名之曰「上倍」。有數二萬零二十一。名之曰「下倍」。\n\t有數一。名之曰「增」。\n\t乘「上倍」於「運數」。除其以「模」。所餘幾何。名之曰「上餘」。\n\t乘「下倍」於「運數」。加其於「上餘」。加其以「增」。除其以「模」。所餘幾何。昔之「運數」者。今其是矣。\n\t除「運數」以「模」。名之曰「卦」。\n\t乃得「卦」。\n是謂「占」之術也。\n");

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

;
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("吾嘗觀「「西曆法」」之書。方悟「紀元時」「時差」之義。\n吾嘗觀「「曆表」」之書。方悟「始曆月」「曆月表」「始閏月」「閏月表」之義。\n吾嘗觀「「算經」」之書。方悟「取底除」「取整除」「取底」「取頂」「取整」之義。\n\n注曰「「今之年月日時刻者。當以紀元時(Unix timestamp)推算之。」」\n疏曰「「格林威治平時西曆一九七〇年一月一日木曜日〇時即西元一九六九年己酉年十一月二十四日辛巳日子正起所積秒數也。」」\n疏曰「「日八萬六千四百秒。」」\n\n注曰「「今何紀元時。同Javascript之Date.now() / 1000也。」」\n今有一術。名之曰「今何紀元時」。是術曰。\n\t施「紀元時」。乃得矣。\n是謂「今何紀元時」之術也。\n\n注曰「「言今之日時。同Javascript之new Date().toString(), in Chinese calendar也。」」\n今有一術。名之曰「言今之日時」。是術曰。\n\t施「紀元時」。取一以施「言彼之日時」。乃得矣。\n是謂「言今之日時」之術也。\n\n注曰「「言今之年月日。同Javascript之new Date().toDateString(), in Chinese calendar也。」」\n今有一術。名之曰「言今之年月日」。是術曰。\n\t施「紀元時」。取一以施「言彼之年月日」。乃得矣。\n是謂「言今之年月日」之術也。\n\n注曰「「言今之時刻。同Javascript之new Date().toTimeString(), in Chinese calendar也。」」\n今有一術。名之曰「言今之時刻」。是術曰。\n\t施「紀元時」。取一以施「言彼之時刻」。乃得矣。\n是謂「言今之時刻」之術也。\n\n注曰「「今年何年號。同Javascript之\"西元\" for modern dates也。」」\n今有一術。名之曰「今年何年號」。是術曰。\n\t施「紀元時」。取一以施「彼年何年號」。乃得矣。\n是謂「今年何年號」之術也。\n\n注曰「「今年何年。同Javascript之new Date().getFullYear() for modern dates, in Chinese calendar也。」」\n今有一術。名之曰「今年何年」。是術曰。\n\t注曰「「年者。或以西元。或以帝王年號紀之。」」\n\t施「紀元時」。取一以施「彼年何年」。乃得矣。\n是謂「今年何年」之術也。\n\n注曰「「今年何干支。同Javascript之Get index (1 to 60) of this year in the 60-year cycle也。」」\n今有一術。名之曰「今年何干支」。是術曰。\n\t注曰「「甲子得一。乙丑得二。乃至癸亥得六十也。」」\n\t施「紀元時」。取一以施「彼年何干支」。乃得矣。\n是謂「今年何干支」之術也。\n\n注曰「「今年積何年。同Javascript之new Date().getFullYear() + 2697, in Chinese calendar也。」」\n今有一術。名之曰「今年積何年」。是術曰。\n\t注曰「「米制公約訂立年積四千五百七十二年。」」\n\t注曰「「紀元年積四千六百六十六年。」」\n\t施「紀元時」。取一以施「彼年積何年」。乃得矣。\n是謂「今年積何年」之術也。\n\n注曰「「今月何月。同Javascript之new Date().getMonth() + 1, N + 0.5 for leap months, in Chinese calendar也。」」\n今有一術。名之曰「今月何月」。是術曰。\n\t注曰「「月者。正月至臘月也。」」\n\t注曰「「正月得一。二月得二。乃至十二月得十二也。閏月者。加半於前月數。」」\n\t施「紀元時」。取一以施「彼月何月」。乃得矣。\n是謂「今月何月」之術也。\n\n注曰「「今月積何月。同Javascript之Get continuously counting month number of this month也。」」\n今有一術。名之曰「今月積何月」。是術曰。\n\t注曰「「米制公約訂立月積五萬六千五百五十一月。」」\n\t注曰「「紀元月積五萬七千七百二十一月。」」\n\t施「紀元時」。取一以施「彼月積何月」。乃得矣。\n是謂「今月積何月」之術也。\n\n注曰「「今日何日。同Javascript之new Date().getDate(), in Chinese calendar也。」」\n今有一術。名之曰「今日何日」。是術曰。\n\t批曰「「古有越人歌。曰。今日何日兮，得與王子同舟。」」\n\t注曰「「初一日得一。初二日得二。乃至三十日得三十也。」」\n\t施「紀元時」。取一以施「彼日何日」。乃得矣。\n是謂「今日何日」之術也。\n\n注曰「「今日何干支。同Javascript之Get index (1 to 60) of today in the 60-day cycle也。」」\n今有一術。名之曰「今日何干支」。是術曰。\n\t注曰「「甲子得一。乙丑得二。乃至癸亥得六十也。」」\n\t施「紀元時」。取一以施「彼日何干支」。乃得矣。\n是謂「今日何干支」之術也。\n\n注曰「「今日積何日。同Javascript之Get continuously counting day number of today也。」」\n今有一術。名之曰「今日積何日」。是術曰。\n\t注曰「「米制公約訂立日積一百六十六萬九千九百九十九日。」」\n\t注曰「「紀元日積一百七十〇萬四千五百五十八日。」」\n\t施「紀元時」。取一以施「彼日積何日」。乃得矣。\n是謂「今日積何日」之術也。\n\n注曰「「今時何時。同Javascript之Get index (1 to 12) of current time in the 12 divisions of day也。」」\n今有一術。名之曰「今時何時」。是術曰。\n\t注曰「「時者。子丑寅卯辰巳午未申酉戌亥。」」\n\t注曰「「子時得一。丑時得二。乃至亥時得十二也。」」\n\t施「紀元時」。取一以施「彼時何時」。乃得矣。\n是謂「今時何時」之術也。\n\n注曰「「今時何小時。同Javascript之new Date().getHours()也。」」\n今有一術。名之曰「今時何小時」。是術曰。\n\t注曰「「小時者。子丑寅卯辰巳午未申酉戌亥。各分初正。」」\n\t注曰「「子正得〇。丑初得一。乃至子初得二十三也。」」\n\t施「紀元時」。取一以施「彼時何小時」。乃得矣。\n是謂「今時何小時」之術也。\n\n注曰「「今刻何刻。同Javascript之Math.floor(new Date().getMinutes() / 15)也。」」\n今有一術。名之曰「今刻何刻」。是術曰。\n\t注曰「「說文解字曰。晝夜百刻。後世改為九十六、百八、百二十刻。未知孰為可法。」」\n\t注曰「「初刻得〇。一刻得一。二刻得二。三刻得三。古法四刻得四。」」\n\t施「紀元時」。取一以施「彼刻何刻」。乃得矣。\n是謂「今刻何刻」之術也。\n\n注曰「「今分何分。同Javascript之new Date().getMinutes() % 15也。」」\n今有一術。名之曰「今分何分」。是術曰。\n\t施「紀元時」。取一以施「彼分何分」。乃得矣。\n是謂「今分何分」之術也。\n\n注曰「「今秒何秒。同Javascript之new Date().getSeconds()也。」」\n今有一術。名之曰「今秒何秒」。是術曰。\n\t施「紀元時」。取一以施「彼秒何秒」。乃得矣。\n是謂「今秒何秒」之術也。\n\n注曰「「既知某一紀元時。乃得其年月日時刻。故謂之彼。」」\n\n吾有一列。名之曰「天干」。充「天干」。\n\t以「「甲」」以「「乙」」以「「丙」」以「「丁」」以「「戊」」。\n\t以「「己」」以「「庚」」以「「辛」」以「「壬」」以「「癸」」。\n吾有一列。名之曰「地支」。充「地支」。\n\t以「「子」」以「「丑」」以「「寅」」以「「卯」」以「「辰」」以「「巳」」。\n\t以「「午」」以「「未」」以「「申」」以「「酉」」以「「戌」」以「「亥」」。\n吾有一列。名之曰「數字」。充「數字」。\n\t以「「〇」」以「「一」」以「「二」」以「「三」」以「「四」」。\n\t以「「五」」以「「六」」以「「七」」以「「八」」以「「九」」。\n\n吾有一術。名之曰「言序數」。欲行是術。必先得一數。曰「甲」。乃行是術曰。\n\t夫「甲」。夫十。取二以施「取底除」。名之曰「乙」。\n\t夫「乙」之「「餘」」。加其以一。夫「數字」之其。名之曰「數」。\n\t恆為是。\n\t\t夫「乙」之「「商」」。夫十。取二以施「取底除」。昔之「乙」者。今其是矣。\n\t\t夫「乙」之「「餘」」。加其以一。夫「數字」之其。加其以「數」。昔之「數」者。今其是矣。\n\t\t若「乙」之「「商」」等於零者。\n\t\t\t乃得「數」也。\n\t云云。\n是謂「言序數」之術也。\n\n吾有一術。名之曰「言百內數」。欲行是術。必先得一數。曰「甲」。乃行是術曰。\n\t夫「甲」。夫十。取二以施「取底除」。名之曰「乙」。\n\t夫「乙」之「「商」」。若其等於零者。\n\t\t夫「乙」之「「餘」」。加其以一。夫「數字」之其。乃得矣。云云。\n\t吾有一言。名之曰「數」。\n\t夫「乙」之「「商」」。若其等於一者。\n\t\t昔之「數」者。今「「十」」是矣。\n\t若非\n\t\t夫「乙」之「「商」」。加其以一。夫「數字」之其。加其以「「十」」。昔之「數」者。今其是矣。云云。\n\t夫「乙」之「「餘」」。若其大於零者。\n\t\t夫「乙」之「「餘」」。加其以一。夫「數字」之其。加「數」以其。昔之「數」者。今其是矣。云云。\n\t乃得「數」。\n是謂「言百內數」之術也。\n\n吾有一術。名之曰「言年月日」。欲行是術。必先得一數。曰「積日」。乃行是術曰。\n\t夫「積日」。取一以施「日積何月」。名之曰「積月」。\n\t夫「積月」。取一以施「月積何閏月」。名之曰「積閏月」。\n\t減「積月」以「積閏月」。除其以十二。取一以施「取底」。名之曰「積年」。\n\t有言「「西元」」。名之曰「年號」。\n\t減「積年」以二六九七。名之曰「年」。\n\t減「積月」以「積閏月」。除其以十二。所餘幾何。加其於一。名之曰「月」。\n\t有爻陰。名之曰「閏」。\n\t夫「積閏月」。取一以施「閏月積何月」。若其等於「積月」者。\n\t\t昔之「閏」者。今陽是矣。云云。\n\t夫「積月」。取一以施「月積何日」。減其於「積日」。加其以一。名之曰「日」。\n\n\t有言「年號」。名之曰「年月日」。\n\t若「年」不大於零者。\n\t\t加「年號」以「「前」」。昔之「年月日」者。今其是矣。\n\t\t減「年」於一。昔之「年」者。今其是矣。\n\t云云。\n\t若「年」不大於一百者。\n\t\t夫「年」。取一以施「言百內數」。加其以「「年」」。加「年月日」以其。昔之「年月日」者。今其是矣。\n\t若非。\n\t\t夫「年」。取一以施「言序數」。加其以「「年」」。加「年月日」以其。昔之「年月日」者。今其是矣。\n\t云云。\n\t減一於「積年」。除其以十。所餘幾何。加其以一。夫「天干」之其。加「年月日」以其。昔之「年月日」者。今其是矣。\n\t減一於「積年」。除其以十二。所餘幾何。加其以一。夫「地支」之其。加「年月日」以其。昔之「年月日」者。今其是矣。\n\t加「年月日」以「「年」」。昔之「年月日」者。今其是矣。\n\n\t若「閏」者。\n\t\t加「年月日」以「「閏」」。昔之「年月日」者。今其是矣。云云。\n\t若「月」等於一者。\n\t\t加「年月日」以「「正月」」。昔之「年月日」者。今其是矣。\n\t若非。\n\t\t夫「月」。取一以施「言百內數」。加其以「「月」」。加「年月日」以其。昔之「年月日」者。今其是矣。\n\t云云。\n\n\t若「日」不大於十者。\n\t\t加「年月日」以「「初」」。昔之「年月日」者。今其是矣。云云。\n\t夫「日」。取一以施「言百內數」。加其以「「日」」。加「年月日」以其。昔之「年月日」者。今其是矣。\n\t減一於「積日」。除其以十。所餘幾何。加其以一。夫「天干」之其。加「年月日」以其。昔之「年月日」者。今其是矣。\n\t減一於「積日」。除其以十二。所餘幾何。加其以一。夫「地支」之其。加「年月日」以其。昔之「年月日」者。今其是矣。\n\t加「年月日」以「「日」」。昔之「年月日」者。今其是矣。\n\t乃得「年月日」。\n是謂「言年月日」之術也。\n\n吾有一術。名之曰「言時刻」。欲行是術。必先得一數。曰「日內秒」。乃行是術曰。\n\t夫「日內秒」。夫三千六百。取二以施「取底除」。名之曰「甲」。\n\t夫「甲」之「「商」」。除其以二。取一以施「取頂」。加其以一。名之曰「乙」。\n\t若「乙」大於十二者。\n\t\t減十二於「乙」。昔之「乙」者。今其是矣。云云。\n\t夫「地支」之「乙」。名之曰「時刻」。\n\n\t夫「甲」之「「商」」。除其以二。所餘幾何。若其等於零者。\n\t\t加「時刻」以「「正」」。昔之「時刻」者。今其是矣。\n\t若非。\n\t\t加「時刻」以「「初」」。昔之「時刻」者。今其是矣。云云。\n\n\t夫「甲」之「「餘」」。夫九百。取二以施「取底除」。名之曰「丙」。\n\t夫「丙」之「「商」」。若其等於零者。\n\t\t加「時刻」以「「初刻」」。昔之「時刻」者。今其是矣。\n\t若非。\n\t\t夫「丙」之「「商」」。取一以施「言百內數」。加其以「「刻」」。\n\t\t加「時刻」以其。昔之「時刻」者。今其是矣。\n\t云云。\n\n\t夫「丙」之「「餘」」。夫六十。取二以施「取底除」。名之曰「丁」。\n\t夫「丁」之「「商」」。若其等於零者。\n\t\t夫「丁」之「「餘」」。若其大於零者。\n\t\t\t加「時刻」以「「零」」。昔之「時刻」者。今其是矣。云云。\n\t若非。\n\t\t夫「丁」之「「商」」。取一以施「言百內數」。加其以「「分」」。\n\t\t加「時刻」以其。昔之「時刻」者。今其是矣。\n\t云云。\n\n\t夫「丁」之「「餘」」。若其大於零者。\n\t\t夫「丁」之「「餘」」。取一以施「言百內數」。加其以「「秒」」。\n\t\t加「時刻」以其。昔之「時刻」者。今其是矣。\n\t云云。\n\t乃得「時刻」。\n是謂「言時刻」之術也。\n\n注曰「「言彼之日時。同Javascript之new Date(x * 1000).toString(), in Chinese calendar也。」」\n今有一術。名之曰「言彼之日時」。欲行是術。必先得一數。曰「時」。乃行是術曰。\n\t施「時差」於「時」。加其於「時」。名之曰「甲」。\n\t夫「甲」。夫八萬六千四百。取二以施「取底除」。名之曰「乙」。\n\t夫「乙」之「「商」」。加其以一七〇四五五八。取一以施「言年月日」。名之曰「年月日」。\n\t夫「乙」之「「餘」」。取一以施「取底」。取一以施「言時刻」。名之曰「時刻」。\n\t加「年月日」以「時刻」。乃得矣。\n是謂「言彼之日時」之術也。\n\n注曰「「言彼之年月日。同Javascript之new Date(x * 1000).toDateString(), in Chinese calendar也。」」\n今有一術。名之曰「言彼之年月日」。欲行是術。必先得一數。曰「時」。乃行是術曰。\n\t施「時差」於「時」。加其於「時」。名之曰「甲」。\n\t夫「甲」。夫八萬六千四百。取二以施「取底除」。名之曰「乙」。\n\t夫「乙」之「「商」」。加其以一七〇四五五八。取一以施「言年月日」。乃得矣。\n是謂「言彼之年月日」之術也。\n\n注曰「「言彼之時刻。同Javascript之new Date(x * 1000).toTimeString(), in Chinese calendar也。」」\n今有一術。名之曰「言彼之時刻」。欲行是術。必先得一數。曰「時」。乃行是術曰。\n\t施「時差」於「時」。加其於「時」。名之曰「甲」。\n\t夫「甲」。夫八萬六千四百。取二以施「取底除」。名之曰「乙」。\n\t夫「乙」之「「餘」」。取一以施「取底」。取一以施「言時刻」。乃得矣。\n是謂「言彼之時刻」之術也。\n\n注曰「「彼年何年號。同Javascript之\"西元\" for modern dates也。」」\n今有一術。名之曰「彼年何年號」。欲行是術。必先得一數。曰「時」。乃行是術曰。\n\t乃得「「西元」」。\n是謂「彼年何年號」之術也。\n\n注曰「「彼年何年。同Javascript之new Date(x * 1000).getFullYear() for modern dates, in Chinese calendar也。」」\n今有一術。名之曰「彼年何年」。欲行是術。必先得一數。曰「時」。乃行是術曰。\n\t施「彼年積何年」於「時」。減其以二六九七。乃得矣。\n是謂「彼年何年」之術也。\n\n注曰「「彼年何干支。同Javascript之Get index (1 to 60) in the 60-year cycle也。」」\n今有一術。名之曰「彼年何干支」。欲行是術。必先得一數。曰「時」。乃行是術曰。\n\t施「彼年積何年」於「時」。減其以一。夫六十。取二以施「取底除」。\n\t夫其之「「餘」」。加其以一。乃得矣。\n是謂「彼年何干支」之術也。\n\n注曰「「彼年積何年。同Javascript之new Date(x * 1000).getFullYear() + 2697, in Chinese calendar也。」」\n今有一術。名之曰「彼年積何年」。欲行是術。必先得一數。曰「時」。乃行是術曰。\n\t施「彼月積何月」於「時」。名之曰「積月」。\n\t夫「積月」。取一以施「月積何閏月」。名之曰「積閏月」。\n\t減「積月」以「積閏月」。除其以十二。取一以施「取底」。乃得矣。\n是謂「彼年積何年」之術也。\n\n注曰「「彼月何月。同Javascript之new Date(x * 1000).getMonth() + 1, N + 0.5 for leap months, in Chinese calendar也。」」\n今有一術。名之曰「彼月何月」。欲行是術。必先得一數。曰「時」。乃行是術曰。\n\t施「彼月積何月」於「時」。名之曰「積月」。\n\t夫「積月」。取一以施「月積何閏月」。名之曰「積閏月」。\n\t減「積月」以「積閏月」。除其以十二。所餘幾何。加其於一。名之曰「月」。\n\t夫「積閏月」。取一以施「閏月積何月」。若其等於「積月」者。\n\t\t加五分於「月」。乃得矣。\n\t若非。\n\t\t乃得「月」也。\n是謂「彼月何月」之術也。\n\n注曰「「彼月積何月。同Javascript之Get continuously counting month number也。」」\n今有一術。名之曰「彼月積何月」。欲行是術。必先得一數。曰「時」。乃行是術曰。\n\t施「彼日積何日」於「時」。取一以施「日積何月」。乃得矣。\n是謂「彼月積何月」之術也。\n\n注曰「「彼日何日。同Javascript之new Date(x * 1000).getDate(), in Chinese calendar也。」」\n今有一術。名之曰「彼日何日」。欲行是術。必先得一數。曰「時」。乃行是術曰。\n\t施「彼日積何日」於「時」。名之曰「積日」。\n\t夫「積日」。取一以施「日積何月」。取一以施「月積何日」。減其於「積日」。加其以一。乃得矣。\n是謂「彼日何日」之術也。\n\n注曰「「彼日何干支。同Javascript之Get index (1 to 60) in the 60-day cycle也。」」\n今有一術。名之曰「彼日何干支」。欲行是術。必先得一數。曰「時」。乃行是術曰。\n\t施「彼日積何日」於「時」。減其以一。夫六十。取二以施「取底除」。\n\t夫其之「「餘」」。加其以一。乃得矣。\n是謂「彼日何干支」之術也。\n\n注曰「「彼日積何日。同Javascript之Get continuously counting day number也。」」\n今有一術。名之曰「彼日積何日」。欲行是術。必先得一數。曰「時」。乃行是術曰。\n\t施「時差」於「時」。加其於「時」。名之曰「甲」。\n\t夫「甲」。夫八萬六千四百。取二以施「取底除」。\n\t夫其之「「商」」。加其以一七〇四五五八。乃得矣。\n是謂「彼日積何日」之術也。\n\n注曰「「彼時何時。同Javascript之Get index (1 to 12) in the 12 divisions of day也。」」\n今有一術。名之曰「彼時何時」。欲行是術。必先得一數。曰「時」。乃行是術曰。\n\t施「彼時何小時」於「時」。除其以二。取一以施「取頂」。加其以一。名之曰「甲」。\n\t若「甲」大於十二者。\n\t\t減十二於「甲」。乃得矣。\n\t若非。\n\t\t乃得「甲」也。\n是謂「彼時何時」之術也。\n\n注曰「「彼時何小時。同Javascript之new Date(x * 1000).getHours()也。」」\n今有一術。名之曰「彼時何小時」。欲行是術。必先得一數。曰「時」。乃行是術曰。\n\t施「時差」於「時」。加其於「時」。名之曰「甲」。\n\t夫「甲」。夫八萬六千四百。取二以施「取底除」。\n\t夫其之「「餘」」。夫三千六百。取二以施「取底除」。\n\t夫其之「「商」」。乃得矣。\n是謂「彼時何小時」之術也。\n\n注曰「「彼刻何刻。同Javascript之Math.floor(new Date(x * 1000).getMinutes() / 15)也。」」\n今有一術。名之曰「彼刻何刻」。欲行是術。必先得一數。曰「時」。乃行是術曰。\n\t施「時差」於「時」。加其於「時」。名之曰「甲」。\n\t夫「甲」。夫三千六百。取二以施「取底除」。\n\t夫其之「「餘」」。夫九百。取二以施「取底除」。\n\t夫其之「「商」」。乃得矣。\n是謂「彼刻何刻」之術也。\n\n注曰「「彼分何分。同Javascript之new Date(x * 1000).getMinutes() % 15也。」」\n今有一術。名之曰「彼分何分」。欲行是術。必先得一數。曰「時」。乃行是術曰。\n\t施「時差」於「時」。加其於「時」。名之曰「甲」。\n\t夫「甲」。夫九百。取二以施「取底除」。\n\t夫其之「「餘」」。夫六十。取二以施「取底除」。\n\t夫其之「「商」」。乃得矣。\n是謂「彼分何分」之術也。\n\n注曰「「彼秒何秒。同Javascript之new Date(x * 1000).getSeconds()也。」」\n今有一術。名之曰「彼秒何秒」。欲行是術。必先得一數。曰「時」。乃行是術曰。\n\t施「時差」於「時」。加其於「時」。名之曰「甲」。\n\t夫「甲」。夫六十。取二以施「取底除」。\n\t夫其之「「餘」」。取一以施「取底」。乃得矣。\n是謂「彼秒何秒」之術也。\n\n吾有一術。名之曰「月積何日」。欲行是術。必先得一數。曰「積月」。乃行是術曰。\n\t減「積月」以「始曆月」。加其以一。名之曰「引」。\n\t若「引」小於一者。\n\t\t嗚呼。「「越界」」之禍。乃歸空無也。\n\t夫「曆月表」之長。若「引」大於其者。\n\t\t嗚呼。「「越界」」之禍。乃歸空無也。\n\t夫「曆月表」之「引」。名之曰「校」。\n\t乘「積月」以二五一〇一。除其以八五〇。減其以一。取一以施「取頂」。加其以「校」。乃得矣。\n是謂「月積何日」之術也。\n\n吾有一術。名之曰「日積何月」。欲行是術。必先得一數。曰「積日」。乃行是術曰。\n\t加「積日」以一。乘其以八五〇。除其以二五一〇一。取一以施「取整」。名之曰「積月」。\n\t施「月積何日」於「積月」。名之曰「初日」。\n\t若「積日」小於「初日」者。\n\t\t減一於「積月」。乃得矣。\n\t若非。\n\t\t乃得「積月」也。\n是謂「日積何月」之術也。\n\n吾有一術。名之曰「閏月積何月」。欲行是術。必先得一數。曰「積閏月」。乃行是術曰。\n\t減「積閏月」以「始閏月」。加其以一。名之曰「引」。\n\t若「引」小於一者。\n\t\t若「引」等於零者。\n\t\t\t乃得負一京。\n\t\t若非。\n\t\t\t嗚呼。「「越界」」之禍。乃歸空無也。\n\t云云。\n\t夫「閏月表」之長。若「引」大於其者。\n\t\t夫「閏月表」之長。加其以一。若「引」等於其者。\n\t\t\t乃得一京。\n\t\t若非。\n\t\t\t嗚呼。「「越界」」之禍。乃歸空無也。\n\t云云。\n\t夫「閏月表」之「引」。名之曰「校」。\n\t乘「積閏月」以三一五七。除其以九四。減其以二七。取一以施「取頂」。加其以「校」。乃得矣。\n是謂「閏月積何月」之術也。\n\n吾有一術。名之曰「月積何閏月」。欲行是術。必先得一數。曰「積月」。乃行是術曰。\n\t加「積月」以二七。乘其以九四。除其以三一五七。取一以施「取整」。名之曰「積閏月」。\n\t施「閏月積何月」於「積閏月」。名之曰「閏月」。\n\t若「積月」小於「閏月」者。\n\t\t減一於「積閏月」。乃得矣。\n\t若非。\n\t\t乃得「積閏月」也。\n是謂「月積何閏月」之術也。\n");

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

;
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("注曰「「此文程式之作文也。勿施以修訂。」」\n注曰「「程式書於文 tools/make_calendar.js 」」\n\n今有一數。曰五七一〇五。名之曰「始曆月」。\n今有一列。名之曰「曆月表」。\n今有一數。曰一七〇一。名之曰「始閏月」。\n今有一列。名之曰「閏月表」。\n\n充「曆月表」。\n\t以一以一以一以一以〇以一以〇以〇以〇以負一以〇以〇以一以一以一。\n\t以一以一以〇以一以〇以〇以〇以〇以〇以一以一以〇以一以一以一以〇以一以〇以〇以〇。\n\t以〇以〇以一以〇以一以一以一以一以〇以一以〇以〇以〇以〇以〇以〇以〇以一以〇以一。\n\t以一以一以一以〇以一以〇以〇以〇以〇以〇以〇以〇以一以〇以一以一以一以一以一以一。\n\t以〇以〇以〇以〇以〇以〇以〇以一以〇以一以一以一以一以一以〇以一以〇以〇以〇以〇。\n\t以〇以〇以一以一以一以一以一以〇以一以〇以〇以〇以負一以〇以〇以一以一以一以一以一。\n\t以〇以一以〇以〇以〇以〇以〇以一以一以〇以一以一以一以〇以一以〇以〇以〇以〇以〇。\n\t以一以〇以一以一以一以一以〇以一以〇以〇以〇以〇以〇以〇以〇以一以一以一以一以一。\n\t以一以〇以〇以〇以〇以〇以〇以〇以一以〇以一以一以一以一以一以一以一以〇以〇以〇。\n\t以〇以〇以〇以一以〇以一以〇以一以一以一以一以一以〇以一以〇以〇以〇以〇以一以〇。\n\t以一以一以一以一以一以〇以一以〇以〇以〇以〇以〇以〇以一以一以一以一以一以〇以一。\n\t以〇以〇以〇以〇以〇以一以一以〇以一以一以一以〇以一以〇以〇以〇以〇以〇以一以〇。\n\t以一以一以二以一以〇以一以〇以〇以〇以〇以〇以〇以〇以一以一以一以一以一以一以〇。\n\t以〇以〇以〇以〇以〇以〇以一以〇以一以一以一以一以一以〇以一以〇以〇以〇以〇以〇。\n\t以〇以一以〇以一以〇以一以〇以一以〇以一以〇以一以〇以〇以〇以〇以一以〇以一以〇。\n\t以一以〇以一以〇以一以〇以一以〇以〇以〇以〇以一以〇以一以一以一以〇以一以〇以〇。\n\t以〇以〇以〇以一以一以〇以一以一以一以〇以一以〇以〇以〇以〇以〇以一以〇以一以一。\n\t以二以一以〇以一以〇以〇以〇以〇以〇以〇以〇以一以一以一以一以一以一以〇以〇以〇。\n\t以〇以〇以〇以〇以一以〇以一以一以一以一以一以〇以一以〇以〇以〇以〇以〇以〇以一。\n\t以〇以一以一以一以〇以一以〇以一以〇以一以〇以〇以一以〇以一以〇以一以〇以一以〇。\n\t以一以〇以一以〇以一以〇以〇以〇以〇以一以〇以一以〇以一以〇以一以〇以〇以〇以一。\n\t以〇以一以一以〇以一以〇以一以〇以一以〇以〇以〇以〇以〇以一以〇以一以一以一以一。\n\t以〇以一以〇以〇以〇以〇以〇以〇以〇以一以一以一以一以一以一以〇以〇以〇以〇以〇。\n\t以〇以〇以一以一以一以一以一以一以一以〇以一以〇以〇以〇以〇以〇以〇以一以一以一。\n\t以一以一以〇以一以〇以一以〇以一以〇以〇以一以〇以一以〇以一以〇以一以〇以一以〇。\n\t以一以〇以一以〇以〇以一以〇以一以〇以一以〇以一以〇以一以〇以一以〇以一以〇以一。\n\t以一以〇以一以〇以一以〇以一以〇以〇以〇以〇以〇以一以〇以一以一以一以一以〇以一。\n\t以〇以〇以〇以〇以〇以〇以〇以一以一以一以一以一以一以〇以〇以〇以〇以〇以〇以〇。\n\t以一以一以一以一以一以一以一以〇以一以〇以負一以〇以〇以〇以〇以一以一以一以一以一。\n\t以〇以一以〇以〇以〇以一以〇以〇以一以〇以一以一以一以〇以一以〇以一以〇以一以〇。\n\t以一以〇以〇以一以〇以一以〇以一以〇以一以〇以一以〇以一以〇以一以〇以一以一以〇。\n\t以一以〇以一以〇以一以〇以〇以〇以〇以〇以一以〇以一以一以一以一以〇以一以〇以〇。\n\t以〇以〇以〇以〇以〇以一以一以一以一以一以一以〇以〇以〇以〇以〇以〇以〇以一以〇。\n\t以一以一以一以一以一以〇以一以〇以負一以〇以〇以〇以〇以一以一以一以一以一以〇以一。\n\t以〇以〇以〇以一以〇以〇以一以一以一以一以一以〇以一以〇以〇以〇以〇以〇以一以一。\n\t以一以一以〇以一以〇以一以〇以〇以〇以〇以〇以一以〇以一以一以一以一以〇以一以〇。\n\t以一以〇以〇以〇以〇以〇以一以〇以一以一以一以一以一以一以〇以一以〇以〇以〇以〇。\n\t以〇以一以〇以一以一以一以一以一以一以一以〇以〇以〇以〇以〇以〇以一以〇以一以一。\n\t以一以一以一以〇以一以〇以負一以〇以〇以〇以〇以一以一以一以一以一以〇以一以〇以〇。\n\t以〇以〇以〇以〇以一以一以一以一以一以〇以一以〇以〇以〇以〇以〇以一以一以一以一。\n\t以一以一以〇以一以〇以〇以〇以〇以〇以一以〇以一以一以一以一以〇以一以〇以〇以〇。\n\t以〇以〇以〇以〇以一以〇以一以一以一以一以一以一以〇以〇以〇以〇以〇以〇以〇以一。\n\t以〇以一以一以一以一以一以〇以一以〇以〇以〇以〇以〇以〇以一以〇以一以一以一以一。\n\t以一以〇以一以〇以〇以〇以〇以〇以〇以一以一以一以一以一以〇以一以〇以〇以〇以〇。\n\t以〇以〇以一以一以一以一以一以〇以一以〇以〇以〇以〇以〇以一以一以一以一以一以一。\n\t以〇以一以〇以〇以〇以〇以〇以一以〇以一以一以一以一以〇以一以〇以〇以〇以〇以〇。\n\t以〇以〇以一以一以一以一以一以一以一以〇以〇以〇以〇以〇以〇以一以〇以一以〇以一。\n\t以一以一以〇以一以〇以一以〇以〇以〇以〇以一以〇以一以〇以一以一以一以〇以一以〇。\n\t以一以〇以〇以〇以〇以一以〇以一以一以一以一以一以〇以一以〇以〇以〇以一以〇以〇。\n\t以一以〇以一以一以一以〇以一以〇以〇以〇以〇以〇以一以一以一以一以一以一以〇以一。\n\t以〇以〇以〇以〇以〇以一以〇以一以一以一以一以〇以一以〇以〇以〇以〇以〇以〇以〇。\n\t以一以一以一以一以一以一以一以〇以〇以〇以〇以〇以〇以一以〇以一以一以一以一以一。\n\t以〇以一以〇以一以〇以〇以〇以〇以一以〇以一以〇以一以〇以一以〇以一以〇以一以〇。\n\t以〇以〇以〇以一以〇以一以〇以一以〇以一以〇以一以〇以一以〇以一以〇以〇以一以〇。\n\t以一以一以一以〇以一以〇以〇以〇以〇以〇以一以一以一以一以一以一以〇以一以〇以〇。\n\t以〇以〇以〇以一以〇以一以一以二以一以〇以一以〇以〇以〇以〇以〇以〇以〇以一以一。\n\t以一以一以一以一以一以〇以〇以〇以〇以〇以〇以一以〇以一以一以一以一以一以〇以一。\n\t以〇以一以〇以〇以〇以〇以一以〇以一以〇以一以〇以一以〇以一以〇以一以〇以〇以〇。\n\t以〇以一以〇以一以〇以一以〇以一以〇以一以〇以一以〇以一以〇以〇以一以〇以一以〇。\n\t以一以〇以一以〇以〇以〇以〇以〇以一以一以一以一以〇以一以〇以一以〇以〇以〇以〇。\n\t以〇以一以〇以一以一以一以一以〇以一以〇以〇以〇以〇以〇以〇以〇以一以一以一以一。\n\t以一以一以一以〇以〇以〇以〇以〇以〇以一以一以一以一以一以一以一以〇以一以〇以〇。\n\t以〇以〇以〇以〇以一以一以一以一以一以〇以一以〇以一以〇以一以〇以〇以一以〇以一。\n\t以〇以一以〇以一以〇以一以〇以一以〇以一以〇以一以一以〇以一以〇以一以〇以一以〇。\n\t以一以〇以〇以〇以一以〇以一以一以一以一以〇以一以〇以一以〇以〇以〇以〇以〇以一。\n\t以〇以一以一以一以一以〇以一以〇以〇以〇以〇以〇以〇以〇以一以一以一以一以一以一。\n\t以一以〇以〇以〇以負一以〇以〇以一以〇以一以一以一以一以一以〇以一以〇以〇以〇以〇。\n\t以〇以〇以一以一以一以一以一以〇以一以〇以〇以〇以一以〇以〇以一以〇以一以〇以一。\n\t以〇以一以〇以〇以〇以一以〇以一以〇以一以一以〇以一以〇以一以〇以一以〇以〇以〇。\n\t以一以〇以一以〇以一以一以一以一以〇以一以〇以一以〇以〇以〇以〇以〇以一以〇以一。\n\t以一以一以一以〇以一以〇以〇以〇以〇以〇以〇以〇以一以一以一以一以一以一以一以〇。\n\t以〇以〇以〇以〇以〇以一以〇以一以一以一以一以一以〇以一以〇以〇以〇以〇以〇以〇。\n\t以一以一以一以一以一以〇以一以〇以〇以〇以〇以〇以〇以一以一以一以一以一以〇以一。\n\t以〇以〇以〇以〇以〇以一以一以一以一以〇以一以〇以一以〇以〇以〇以〇以〇以一以〇。\n\t以一以一以一以一以一以一以〇以一以〇以〇以〇以〇以〇以一以〇以一以〇以一以一以一。\n\t以一以〇以〇以〇以〇以〇以〇以〇以一以〇以一以一以一以一以一以一以一以〇以〇以〇。\n\t以〇以〇以〇以一以〇以一以一以一以一以一以〇以一以〇以〇以〇以〇以〇以〇以一以一。\n\t以一以一以一以〇以一以〇以〇以〇以〇以〇以一以一以一以一以一以一以〇以一以〇以〇。\n\t以〇以〇以〇以一以一以一以一以〇以一以〇以一以〇以〇以〇以〇以〇以一以〇以一以一。\n\t以一以一以一以一以〇以〇以〇以〇以〇以〇以〇以一以〇以一以一以一以一以一以〇以一。\n\t以〇以〇以〇以〇以〇以〇以一以〇以一以一以一以一以一以〇以一以〇以〇以〇以〇以〇。\n\t以〇以一以〇以一以一以一以一以一以〇以一以〇以〇以〇以〇以〇以〇以一以一以一以一。\n\t以一以〇以一以〇以〇以〇以〇以〇以一以一以一以一以一以一以〇以一以〇以〇以〇以〇。\n\t以〇以一以一以一以一以一以一以〇以一以〇以〇以〇以〇以〇以一以〇以一以一以一以一。\n\t以一以一以〇以〇以〇以〇以〇以〇以〇以一以一以一以一以一以一以一以〇以一以〇以〇。\n\t以〇以〇以一以〇以一以〇以一以一以一以〇以一以〇以一以〇以〇以〇以〇以〇以〇以一。\n\t以〇以一以一以一以〇以一以〇以一以〇以一以〇以〇以〇以〇以一以一以一以一以一以〇。\n\t以一以〇以〇以〇以〇以〇以一以一以〇以一以一以一以〇以一以〇以〇以〇以〇以〇以一。\n\t以一以一以一以一以一以〇以一以〇以〇以〇以〇以〇以一以〇以一以一以一以一以一以一。\n\t以〇以〇以〇以〇以〇以〇以〇以一以一以一以一以一以一以一以〇以一以〇以〇以〇以〇。\n\t以一以〇以一以一以一以一以一以〇以一以〇以一以〇以〇以〇以〇以一以〇以一以〇以一。\n\t以〇以一以〇以一以〇以一以〇以一以〇以〇以一以〇以一以〇以一以〇以一以〇以一以〇。\n\t以〇以〇以一以〇以一以一以〇以一以〇以一以〇以一以〇以〇以〇以〇以〇以一以一以一。\n\t以一以〇以一以〇以一以〇以〇以〇以〇以〇以一以〇以一以一以一以一以一以一以〇以〇。\n\t以〇以〇以〇以〇以〇以一以一以一以一以一以一以一以〇以一以〇以〇以〇以〇以一以〇。\n\t以一以一以一以一以一以〇以一以〇以一以〇以〇以〇以〇以一以〇以一以〇以一以〇以一。\n\t以〇以一以〇以一以〇以一以〇以〇以一以〇以一以〇以一以〇以一以〇以一以〇以一以〇。\n\t以一以〇以一以一以〇以一以〇以一以〇以一以〇以〇以〇以〇以〇以一以一以一以一以〇。\n\t以一以〇以一以〇以〇以〇以〇以〇以一以〇以一以一以一以一以一以一以〇以〇以〇以〇。\n\t以〇以〇以〇以一以一以一以一以一以一以一以〇以一以〇以負一以〇以〇以一以〇以一以一。\n\t以一以一以一以〇以一以〇以〇以〇以〇以〇以〇以一以一以一以〇以一以〇以一以〇以〇。\n\t以〇以一以〇以一以一以〇以一以〇以一以〇以一以〇以一以〇以一以〇以一以〇以一以一。\n\t以一以一以〇以一以〇以一以〇以一以〇以〇以〇以一以〇以一以一以一以一以〇以一以〇。\n\t以一以〇以〇以〇以〇以〇以一以〇以一以一以一以一以一以一以〇以〇以〇以〇以〇以〇。\n\t以〇以一以一以一以一以一以一以一以〇以一以〇以負一以〇以〇以一以〇以一以一以一以一。\n\t以一以〇以〇以〇以〇以〇以〇以〇以〇以一以一以一以一以一以〇以一以〇以〇以〇以一。\n\t以〇以一以一以〇以一以〇以一以〇以一以〇以〇以〇以〇以〇以一以〇以一以一以一以一。\n\t以〇以一以〇以一以〇以〇以〇以一以〇以一以〇以一以一以一以一以〇以一以〇以〇以〇。\n\t以〇以〇以〇以〇以一以〇以一以一以一以一以一以一以〇以〇以〇以〇以〇以〇以〇以一。\n\t以一以一以一以一以一以一以〇以一以〇以負一以〇以〇以一以〇以一以一以一以一以一以〇。\n\t以一以〇以〇以〇以〇以〇以〇以一以一以一以一以一以〇以〇以〇以〇以〇以〇以〇以一。\n\t以一以〇以一以一以一以〇以一以〇以〇以〇以〇以〇以一以一以一以一以一以一以〇以一。\n\t以〇以〇以〇以〇以〇以一以〇以一以一以一以一以一以一以〇以〇以〇以〇以〇以〇以〇。\n\t以一以〇以一以〇以一以一以一以一以一以〇以〇以〇以〇以〇以〇以〇以〇以一以一以一。\n\t以一以一以一以一以〇以一以〇以〇以〇以〇以一以〇以一以一以一以一以一以〇以一以〇。\n\t以〇以〇以〇以〇以〇以一以一以一以一以一以〇以一以〇以〇以〇以〇以〇以一以一以一。\n\t以一以一以一以〇以一以〇以〇以〇以〇以〇以一以一以一以一以一以一以〇以一以〇以〇。\n\t以〇以〇以〇以一以〇以一以一以一以一以一以一以〇以〇以〇以〇以〇以〇以〇以一以〇。\n\t以一以一以一以一以一以〇以一以〇以〇以〇以〇以〇以〇以一以〇以一以〇以一以一以一。\n\t以〇以一以〇以一以〇以〇以〇以〇以一以〇以一以一以一以一以一以〇以一以〇以〇以〇。\n\t以一以〇以〇以一以一以一以一以一以〇以一以〇以〇以〇以〇以〇以一以一以〇以一以一。\n\t以一以〇以一以〇以〇以〇以〇以〇以一以一以一以一以一以一以〇以一以〇以〇以〇以〇。\n\t以〇以一以〇以一以一以一以一以一以一以一以〇以〇以〇以〇以〇以〇以一以〇以一以一。\n\t以一以一以一以〇以一以〇以〇以〇以〇以一以〇以一以〇以一以〇以一以〇以一以〇以一。\n\t以〇以一以〇以〇以〇以〇以一以〇以一以〇以一。\n\n充「閏月表」。\n\t以負三以負一以一以二以負二以〇以二以負三以〇以一以二以負一以〇以二以負二以負一以一以三以負一。\n\t以〇以三以負二以負一以一以負二以負二以〇以一以負二以負二以一以二以負一以〇以二以負一以負一以一以二。\n\t以負三以〇以一以一以負一以一以二以負二以〇以一以負二以負一以〇以三以負二以〇以二以負三以負一以〇。\n\t以三以負二以〇以二以負三以負一以〇以二以負二以負一以二以負二以負一以〇以三以負二。\n");

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

;
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("吾嘗觀「「格物」」之書。方悟「取物」「置物」「列物之端」「識類」之義。\n\n吾有一言。曰「「「」」」。名之曰「引號」。\n夫「引號」之一。名之曰「引起」。\n夫「引號」之二。名之曰「引迄」。\n吾有一列。名之曰「位名」。充「位名」\n以「「〇」」以「「一」」以「「二」」以「「三」」以「「四」」\n以「「五」」以「「六」」以「「七」」以「「八」」以「「九」」。\n\n吾有一術。名之曰「斬渾沌」。欲行是術。必先得一言。曰「渾沌語」。乃行是術曰。\n\t吾有一列。名之曰「諸咒」。充「諸咒」以「「物」」以「「言」」以「「數」」以「「爻」」以「「列」」以「「之」」以「「也」」。\n\t吾有一列。名之曰「渾沌碎」。\n\t有數一。名之曰「讀」。\n\t有數零。名之曰「層」。\n\t吾有一言。名之曰「辭」。\n\n\t恆為是。若「讀」大於「渾沌語」之長者乃止也。\n\t\t若「渾沌語」之「讀」等於「引起」者。\n\t\t\t若「層」不等於零者。\n\t\t\t\t夫「渾沌語」之「讀」。加其於「辭」。昔之「辭」者。今其是矣。\n\t\t\t云云。\n\t\t\t加「層」以一。昔之「層」者。今其是矣。\n\t\t或若「渾沌語」之「讀」等於「引迄」者。\n\t\t\t減「層」以一。昔之「層」者。今其是矣。\n\t\t\t若「層」等於零者。\n\t\t\t\t充「渾沌碎」以「辭」。\n\t\t\t\t昔之「辭」者。今「「」」是矣。\n\t\t\t若非。\n\t\t\t\t夫「渾沌語」之「讀」。加其於「辭」。昔之「辭」者。今其是矣。\n\t\t\t云云。\n\t\t或若「層」大於零者。\n\t\t\t夫「渾沌語」之「讀」。加其於「辭」。昔之「辭」者。今其是矣。\n\t\t若非。\n\t\t\t凡「諸咒」中之「咒」。\n\t\t\t\t若「渾沌語」之「讀」等於「咒」者\n\t\t\t\t\t充「渾沌碎」以「咒」。\n\t\t\t\t乃止也。\n\t\t\t云云。\n\t\t云云。\n\t加一以「讀」。昔之「讀」者。今其是矣云云。\n\t乃得「渾沌碎」。\n是謂「斬渾沌」之術也。\n\n吾有一術。名之曰「食數」。欲行是術。必先得一言。曰「數名」。乃行是術曰。\n\t吾有一數。曰一。名之曰「正負」。\n\t夫「數名」之一。若其等於「「負」」者。\n\t\t夫「數名」之其餘。昔之「數名」者。今其是矣。\n\t\t昔之「正負」者。今負一是矣。\n\t云云。\n\t吾有二數。名之曰「整」曰「小」。\n\t吾有二數。曰一曰一。名之曰「讀」曰「小長」。\n\t有爻陰。名之曰「小耶」。\n\t恆為是。若「讀」大於「數名」之長者乃止也。\n\t\t若「讀」等於「「·」」者\n\t\t\t昔之「小耶」者。今陽是矣。\n\t\t若非。\n\t\t\t有數一。名之曰「位」\n\t\t\t恆為是。若「位」大於「位名」之長者乃止也。\n\t\t\t\t若「位名」之「位」等於「數名」之「讀」者乃止也。\n\t\t\t加一以「位」。昔之「位」者。今其是矣云云。\n\t\t\t減「位」以一。昔之「位」者。今其是矣。\n\n\t\t\t若「小耶」者。\n\t\t\t\t乘「小」以十。加其以「位」。昔之「小」者。今其是矣。\n\t\t\t\t加「小長」以一。昔之「小長」者。今其是矣。\n\t\t\t若非。\n\t\t\t\t乘「整」以十。加其以「位」。昔之「整」者。今其是矣。\n\t\t\t云云。\n\t\t云云。\n\t加一以「讀」。昔之「讀」者。今其是矣云云。\n\t為是「小長」遍。乘「小」以零又一分。昔之「小」者。今其是矣。云云。\n\t加「整」以「小」。乘其以「正負」。乃得矣。\n是謂「食數」之術也。\n\n吾有一術名之曰「食列」。欲行是術。必先得一列。曰「渾沌碎」。乃行是術曰。\n\t吾有一列。名之曰「渾沌列」。\n\t有數一。名之曰「讀」。\n\t恆為是。若「讀」大於「渾沌碎」之長者乃止也。\n\t\t夫「渾沌碎」之「讀」。名之曰「類」\n\t\t若「類」等於「「數」」者。\n\t\t\t加「讀」以一。夫「渾沌碎」之其。取一以施「食數」。充「渾沌列」以其。\n\t\t\t加「讀」以二。昔之「讀」者。今其是矣。\n\t\t或若「類」等於「「言」」者。\n\t\t\t加「讀」以一。夫「渾沌碎」之其。充「渾沌列」以其。\n\t\t\t加「讀」以二。昔之「讀」者。今其是矣。\n\t\t或若「類」等於「「爻」」者。\n\t\t\t加「讀」以一。夫「渾沌碎」之其。\n\t\t\t若其等於「「陰」」者。充「渾沌列」以陰。\n\t\t\t若非。充「渾沌列」以陽也。\n\t\t\t加「讀」以二。昔之「讀」者。今其是矣。\n\t\t若非\n\t\t\t吾有一數。名之曰「層」。\n\t\t\t加「讀」以一。名之曰「次讀」。\n\t\t\t吾有一列。名之曰「句」。\n\t\t\t恆為是。若「次讀」大於「渾沌碎」之長者乃止也。\n\t\t\t\t若「渾沌碎」之「次讀」等於「「物」」者。\n\t\t\t\t\t加「層」以一。昔之「層」者。今其是矣。\n\t\t\t\t或若「渾沌碎」之「次讀」等於「「列」」者。\n\t\t\t\t\t加「層」以一。昔之「層」者。今其是矣。\n\t\t\t\t或若「渾沌碎」之「次讀」等於「「也」」者。\n\t\t\t\t\t若「層」等於零者。\n\t\t\t\t\t\t若「類」等於「「物」」者。\n\t\t\t\t\t\t\t施「食物」於「句」。充「渾沌列」以其。\n\t\t\t\t\t\t若非。\n\t\t\t\t\t\t\t施「食列」於「句」。充「渾沌列」以其。\n\t\t\t\t\t\t云云。\n\t\t\t\t\t乃止也。\n\t\t\t\t\t減「層」以一。昔之「層」者。今其是矣。\n\t\t\t\t云云。\n\t\t\t\t夫「渾沌碎」之「次讀」。充「句」以其。\n\t\t\t加「次讀」以一。昔之「次讀」者。今其是矣云云。\n\t\t\t加「次讀」以一。昔之「讀」者。今其是矣\n\t\t云云。\n\t云云。\n\t乃得「渾沌列」。\n是謂「食列」之術也。\n\n吾有一術名之曰「食物」。欲行是術。必先得一列。曰「渾沌碎」。乃行是術曰。\n\t吾有一物。名之曰「渾沌物」。\n\t有數二。名之曰「讀」。\n\t恆為是。若「讀」大於「渾沌碎」之長者乃止也。\n\t\t夫「渾沌碎」之「讀」。名之曰「端」。\n\t\t加「讀」以一。夫「渾沌碎」之其。名之曰「類」。\n\n\t\t若「類」等於「「數」」者。\n\t\t\t加「讀」以二。夫「渾沌碎」之其。取一以施「食數」。施「置物」於「渾沌物」於「端」於其。\n\t\t\t加「讀」以四。昔之「讀」者。今其是矣。\n\t\t或若「類」等於「「言」」者。\n\t\t\t加「讀」以二。夫「渾沌碎」之其。施「置物」於「渾沌物」於「端」於其。\n\t\t\t加「讀」以四。昔之「讀」者。今其是矣。\n\t\t或若「類」等於「「爻」」者。\n\t\t\t加「讀」以二。夫「渾沌碎」之其。\n\t\t\t若其等於「「陰」」者。施「置物」於「渾沌物」於「端」於陰。\n\t\t\t若非。施「置物」於「渾沌物」於「端」於陽也。\n\t\t\t加「讀」以四。昔之「讀」者。今其是矣。\n\t\t若非\n\t\t\t吾有一數。名之曰「層」。\n\t\t\t加「讀」以二。名之曰「次讀」。\n\t\t\t吾有一列。名之曰「句」。\n\t\t\t恆為是。若「次讀」大於「渾沌碎」之長者乃止也。\n\t\t\t\t若「渾沌碎」之「次讀」等於「「物」」者。\n\t\t\t\t\t加「層」以一。昔之「層」者。今其是矣。\n\t\t\t\t或若「渾沌碎」之「次讀」等於「「列」」者。\n\t\t\t\t\t加「層」以一。昔之「層」者。今其是矣。\n\t\t\t\t或若「渾沌碎」之「次讀」等於「「也」」者。\n\t\t\t\t\t若「層」等於零者。\n\t\t\t\t\t\t若「類」等於「「物」」者。\n\t\t\t\t\t\t\t施「食物」於「句」。施「置物」於「渾沌物」於「端」於其。\n\t\t\t\t\t\t若非。\n\t\t\t\t\t\t\t施「食列」於「句」。施「置物」於「渾沌物」於「端」於其。\n\t\t\t\t\t\t云云。\n\t\t\t\t\t乃止也。\n\t\t\t\t\t減「層」以一。昔之「層」者。今其是矣。\n\t\t\t\t云云。\n\t\t\t\t夫「渾沌碎」之「次讀」。充「句」以其。\n\t\t\t加「次讀」以一。昔之「次讀」者。今其是矣云云。\n\t\t\t加「次讀」以二。昔之「讀」者。今其是矣\n\t\t云云。\n\t云云。\n\t乃得「渾沌物」。\n是謂「食物」之術也。\n\n今有一術。名之曰「食渾沌」。欲行是術。必先得一言。曰「渾沌語」。乃行是術曰。\n\t施「斬渾沌」於「渾沌語」。名之曰「渾沌碎」。\n\t夫「渾沌碎」之其餘。取一以施「食物」。乃得矣。\n是謂「食渾沌」之術也。\n\n今有一術。名之曰「食諸渾沌」。欲行是術。必先得一言。曰「渾沌語」。乃行是術曰。\n\t施「斬渾沌」於「渾沌語」。名之曰「渾沌碎」。\n\t夫「渾沌碎」之其餘。取一以施「食列」。乃得矣。\n是謂「食諸渾沌」之術也。\n\n\n吾有一言。曰「「　」」名之曰「挪符」。\n吾有一言。曰「「\\n」」名之曰「抬符」。\n吾有一術。名之曰「包數」。欲行是術。必先得一數曰「甲」。乃行是術曰。\n\t吾有一言。名之曰「正負」。\n\t若「甲」小於零者。\n\t\t乘「甲」以負一。昔之「甲」者。今其是矣。\n\t\t昔之「正負」者。今「「負」」是矣。\n\t云云。\n\t除「甲」以一。所餘幾何。名之曰「小數」\n\t減「小數」於「甲」。名之曰「整數」。\n\t吾有二言。名之曰「小」曰「整」。\n\t恆為是。若「整數」不大於零者乃止也。\n\t\t除「整數」以十。所餘幾何。名之曰「位」。\n\t\t加「位」以一。夫「位名」之其。加其以「整」。昔之「整」者。今其是矣。\n\t\t減「整數」以「位」。除其以十。昔之「整數」者。今其是矣。\n\t云云。\n\t恆為是。若「小數」不大於零者乃止也。\n\t\t乘「小數」以十。昔之「小數」者。今其是矣。\n\t\t除「小數」以一。所餘幾何。名之曰「位」。\n\t\t加「位」以一。夫「位名」之其。加其於「小」。昔之「小」者。今其是矣。\n\t\t減「小數」以「位」。昔之「小數」者。今其是矣。\n\t云云。\n\t加「正負」以「整」。昔之「整」者。今其是矣。\n\t夫「小」之長。若其然者。\n\t\t加「整」以「「·」」。加其以「小」。乃得矣。\n\t云云。\n\t乃得「整」。\n是謂「包數」之術也。\n\n吾有一術。名之曰「暗包渾沌」。欲行是術。必先得一言曰「類」。一元曰「實」。一數曰「挪抬」。乃行是術曰。\n\t吾有一言。名之曰「渾沌語」。\n\t若「類」等於「「物」」者。\n\t\t加「渾沌語」以「抬符」昔之「渾沌語」者。今其是矣。\n\t\t夫「實」。加「挪抬」以一。取二以施「包物」。加其於「渾沌語」。昔之「渾沌語」者。今其是矣。\n\t\t為是「挪抬」遍。加「渾沌語」以「挪符」。昔之「渾沌語」者。今其是矣也。\n\t\t加「渾沌語」以「「也」」加其以「抬符」。昔之「渾沌語」者。今其是矣。\n\n\t或若「類」等於「「列」」者。\n\t\t加「渾沌語」以「抬符」昔之「渾沌語」者。今其是矣。\n\t\t夫「實」。加「挪抬」以一。取二以施「包列」。加其於「渾沌語」。昔之「渾沌語」者。今其是矣。\n\t\t為是「挪抬」遍。加「渾沌語」以「挪符」。昔之「渾沌語」者。今其是矣也。\n\t\t加「渾沌語」以「「也」」加其以「抬符」。昔之「渾沌語」者。今其是矣。\n\n\t或若「類」等於「「言」」者。\n\t\t加「渾沌語」以「引起」加其以「實」加其以「引迄」。加其以「抬符」昔之「渾沌語」者。今其是矣。\n\t或若「類」等於「「爻」」者。\n\t\t吾有一言。曰「「陽」」。名之曰「爻名」\n\t\t夫「實」。若其不然者。昔之「爻名」者。今「「陰」」是矣也。\n\t\t加「渾沌語」以「引起」加其以「爻名」加其以「引迄」。加其以「抬符」昔之「渾沌語」者。今其是矣。\n\t或若「類」等於「「數」」者。\n\t\t施「包數」於「實」。名之曰「數名」。\n\t\t加「渾沌語」以「引起」加其以「數名」加其以「引迄」。加其以「抬符」昔之「渾沌語」者。今其是矣。\n\t云云。\n\t乃得「渾沌語」\n是謂「暗包渾沌」之術也。\n\n吾有一術。名之曰「包列」。欲行是術。必先得一列曰「渾沌列」。一數曰「挪抬」。乃行是術曰。\n\t吾有一言。名之曰「渾沌語」。\n\t凡「渾沌列」中之「實」\n\t\t施「識類」於「實」。名之曰「類」。\n\n\t\t為是「挪抬」遍。加「渾沌語」以「挪符」。昔之「渾沌語」者。今其是矣也。\n\t\t加「渾沌語」以「類」。\n\t\t昔之「渾沌語」者。今其是矣。\n\n\t\t施「暗包渾沌」於「類」於「實」於「挪抬」。加其於「渾沌語」。昔之「渾沌語」者。今其是矣。\n\t云云。\n\t乃得「渾沌語」\n是謂「包列」之術也。\n\n吾有一術。名之曰「包物」。欲行是術。必先得一物曰「渾沌物」。一數曰「挪抬」。乃行是術曰。\n\n\t吾有一言。名之曰「渾沌語」。\n\n\t施「列物之端」於「渾沌物」。名之曰「諸端」。\n\n\t凡「諸端」中之「端」\n\t\t施「取物」於「渾沌物」於「端」。名之曰「實」。\n\t\t施「識類」於「實」。名之曰「類」。\n\n\t\t為是「挪抬」遍。加「渾沌語」以「挪符」。昔之「渾沌語」者。今其是矣也。\n\t\t加「渾沌語」以「「之」」。加其以「引起」。加其以「端」。加其以「引迄」。加其以「類」。\n\t\t昔之「渾沌語」者。今其是矣。\n\n\t\t施「暗包渾沌」於「類」於「實」於「挪抬」。加其於「渾沌語」。昔之「渾沌語」者。今其是矣。\n\t云云。\n\t乃得「渾沌語」\n是謂「包物」之術也。\n\n\n今有一術。名之曰「包渾沌」。欲行是術。必先得一物。曰「渾沌物」。乃行是術曰。\n\t施「包物」於「渾沌物」於一。名之曰「餛飩語」。\n\t加「抬符」以「餛飩語」。加其於「「物」」。加其以「「也」」。乃得矣。\n是謂「包渾沌」之術也。\n\n\n今有一術。名之曰「包諸渾沌」。欲行是術。必先得一列。曰「渾沌列」。乃行是術曰。\n\t施「包列」於「渾沌列」於一。名之曰「餛飩語」。\n\t加「抬符」以「餛飩語」。加其於「「列」」。加其以「「也」」。乃得矣。\n是謂「包諸渾沌」之術也。\n\n");

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

;
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("吾有二數。曰一。曰一。名之曰「進制」。曰「退制」。\n吾有三數。曰零。曰一。曰一。名之曰「總算位」。曰「上位冪」。曰「下位冪」。\n吾有三數。曰零。曰一。曰一。名之曰「至大指」。曰「巨位冪」。曰「至巨數」。\n吾有三數。曰零。曰一。曰一。名之曰「至小指」。曰「微位冪」。曰「至微數」。\n吾有一數。曰一。名之曰「位極差」。\n吾有二數。曰零。曰一。名之曰「浮點零」。曰「浮點一」。\n\n吾有一術。名之曰「試界」。欲行是術。必先得三數。曰「限」。曰「元」。曰「基」。二術。曰「合」。曰「據」。乃行是術曰。\n\t吾有一術。名之曰「造表列」。欲行是術。必先得二數。曰「引」。曰「實」。乃行是術曰。\n\t\t吾有一物。名之曰「表列」。其物如是。\n\t\t\t物之「「引」」者。數曰「引」。\n\t\t\t物之「「實」」者。數曰「實」。\n\t\t是謂「表列」之物也。\n\t\t乃得「表列」。\n\t是謂「造表列」之術也。\n\t吾有一術。名之曰「新據」。欲行是術。必先得二數。曰「引」。曰「實」。乃行是術曰。\n\t\t若「引」不小於「限」者。乃得陽也。\n\t\t施「據」於「實」。若其然者。乃得陽也。\n\t\t乃得陰。\n\t是謂「新據」之術也。\n\n\t施「新據」於零。於「元」。若其然者。夫零。夫「元」。取二以施「造表列」。乃得矣。云云。\n\t施「新據」於一。於「基」。若其然者。夫一。夫「基」。取二以施「造表列」。乃得矣。云云。\n\t吾有二數。曰一。曰「基」。名之曰「引」。曰「實」。\n\t吾有一列。名之曰「記表列」。\n\t恆為是。\n\t\t加「引」於「引」。名之曰「新引」。\n\t\t夫「實」。夫「實」。取二以施「合」。名之曰「新實」。\n\t\t施「新據」於「新引」。於「新實」。若其然者。乃止也。\n\t\t夫「引」。夫「實」。取二以施「造表列」。充「記表列」以其。\n\t\t昔之「引」者。今「新引」是矣。\n\t\t昔之「實」者。今「新實」是矣。\n\t云云。\n\t夫「記表列」之長。名之曰「甲」。\n\t恆為是。\n\t\t若「甲」等於零者。乃止也。\n\t\t夫「記表列」之「甲」。名之曰「表列」。\n\t\t夫「表列」之「「引」」。加其於「引」。名之曰「新引」。\n\t\t夫「表列」之「「實」」。夫「實」。取二以施「合」。名之曰「新實」。\n\t\t施「新據」於「新引」。於「新實」。若其不然者。\n\t\t\t昔之「引」者。今「新引」是矣。\n\t\t\t昔之「實」者。今「新實」是矣。\n\t\t云云。\n\t\t減一於「甲」。昔之「甲」者。今其是矣。\n\t云云。\n\t加一於「引」。夫「基」。夫「實」。取二以施「合」。取二以施「造表列」。乃得矣。\n是謂「試界」之術也。\n\n吾有一術。名之曰「盤古」。乃行是術曰。\n\t除一於三。若其等於零者。\n\t\t噫。夫「「告。計算機除不盡而捨餘者。不可行本算經之術。」」。書之。\n\t\t乃歸空無也。\n\n\t有數五分。名之曰「寅」。減「寅」以「寅」。名之曰「卯」。乘「卯」以「卯」。昔之「浮點零」者。今其是矣。\n\t加一於「浮點零」。昔之「浮點一」者。今其是矣。\n\n\t吾有一列。名之曰「素數」。充「素數」以二。以三。以五。以七。以十一。以十三。\n\t有數零。名之曰「進制素因數」。\n\t昔之「進制」者。今「浮點一」是矣。\n\t凡「素數」中之「法」。\n\t\t加一於「法」。除其以「法」。減其以一。乘其以「法」。名之曰「餘」。\n\t\t若「餘」等於一者。\n\t\t\t乘「法」於「進制」。昔之「進制」者。今其是矣。\n\t\t\t加一於「進制素因數」。昔之「進制素因數」者。今其是矣。\n\t\t云云。\n\t\t若「餘」等於零者。\n\t\t\t噫。夫「「告。計算機除不盡而不得分釐者。不可行本算經之術。」」。書之。\n\t\t\t乃歸空無也。\n\t云云。\n\t若「進制素因數」大於二者。\n\t\t噫。夫「「告。計算機掩絲毫之瑕而求整者。不可行本算經之術。」」。書之。\n\t\t乃歸空無也。\n\t若「進制」不等於二者。\n\t\t噫。夫「「告。計算機非二進者。不可行本算經之術。」」。書之。\n\t\t乃歸空無也。\n\t除「進制」於一。昔之「退制」者。今其是矣。\n\n\t吾有一術。名之曰「加」。欲行是術。必先得二數。曰「甲」。曰「乙」。乃行是術曰。\n\t\t加「甲」於「乙」。乃得矣。\n\t是謂「加」之術也。\n\t吾有一術。名之曰「乘」。欲行是術。必先得二數。曰「甲」。曰「乙」。乃行是術曰。\n\t\t乘「甲」於「乙」。乃得矣。\n\t是謂「乘」之術也。\n\t吾有一術。名之曰「位溢乎」。欲行是術。必先得一數。曰「甲」。乃行是術曰。\n\t\t乘「甲」以「進制」。名之曰「乙」。\n\t\t加一於「乙」。減其以「乙」。若其等於一者。乃得陰。若非。乃得陽也。\n\t是謂「位溢乎」之術也。\n\n\t有數一萬。名之曰「試位限」。\n\t施「試界」於「試位限」。於「浮點一」。於「進制」。於「乘」。於「位溢乎」。名之曰「算限表」。\n\t夫「算限表」之「「引」」。若其不小於「試位限」者。\n\t\t噫。夫「「告。計算機算位無限者。不可行本算經之術。」」。書之。\n\t\t乃歸空無也。\n\t夫「算限表」之「「引」」。加其以一。昔之「總算位」者。今其是矣。\n\t夫「算限表」之「「實」」。昔之「上位冪」者。今其是矣。\n\t除一以「上位冪」。昔之「下位冪」者。今其是矣。\n\t加一以「下位冪」。減其以一。若其不等於「下位冪」者。\n\t\t噫。夫「「告。計算機非二進者。不可行本算經之術。」」。書之。\n\t\t乃歸空無也。\n\n\t吾有一術。名之曰「上溢乎」。欲行是術。必先得一數。曰「甲」。乃行是術曰。\n\t\t乘「甲」以「進制」。名之曰「乙」。\n\t\t乘「乙」以「進制」。若其大於「乙」者。乃得陰。若非。乃得陽也。\n\t是謂「上溢乎」之術也。\n\t吾有一術。名之曰「下溢乎」。欲行是術。必先得一數。曰「甲」。乃行是術曰。\n\t\t乘「甲」以「退制」。名之曰「乙」。\n\t\t若「乙」等於零者。乃得陽也。\n\t\t若「乙」小於「甲」者。乃得陰也。\n\t\t乃得陽。\n\t是謂「下溢乎」之術也。\n\n\t有數一億。名之曰「試指限」。\n\t施「試界」於「試指限」。於「浮點一」。於「進制」。於「乘」。於「上溢乎」。名之曰「上限表」。\n\t夫「上限表」之「「引」」。昔之「至大指」者。今其是矣。\n\t夫「上限表」之「「實」」。昔之「巨位冪」者。今其是矣。\n\t減「進制」以「下位冪」。乘其以「巨位冪」。昔之「至巨數」者。今其是矣。\n\n\t施「試界」於「試指限」。於「浮點一」。於「退制」。於「乘」。於「下溢乎」。名之曰「下限表」。\n\t夫「下限表」之「「引」」。減其於「總算位」。減其以一。昔之「至小指」者。今其是矣。\n\t夫「下限表」之「「實」」。昔之「至微數」者。今其是矣。\n\t乘「至微數」以「上位冪」。昔之「微位冪」者。今其是矣。\n\t減「總算位」於「至小指」。減其於「至大指」。昔之「位極差」者。今其是矣。\n\n\t注曰「「以上驗算制。」」\n是謂「盤古」之術也。\n施「盤古」。\n\n注曰「「圓周率。同Javascript之Math.PI也。」」\n今有一數。曰三·一四一五九二六五三五八九七九三二三八四六二六四三三八三二七九五〇二八八四一九七。名之曰「圓周率」。\n注曰「「倍圓周率。同Javascript之Math.PI * 2也。」」\n今有一數。曰六·二八三一八五三〇七一七九五八六四七六九二五二八六七六六五五九〇〇五七六八三九四。名之曰「倍圓周率」。\n注曰「「半圓周率。同Javascript之Math.PI / 2也。」」\n今有一數。曰一·五七〇七九六三二六七九四八九六六一九二三一三二一六九一六三九七五一四四二〇九九。名之曰「半圓周率」。\n注曰「「四分圓周率。同Javascript之Math.PI / 4也。」」\n今有一數。曰〇·七八五三九八一六三三九七四四八三〇九六一五六六〇八四五八一九八七五七二一〇四九三。名之曰「四分圓周率」。\n注曰「「自然常數。同Javascript之Math.E也。」」\n今有一數。曰二·七一八二八一八二八四五九〇四五二三五三六〇二八七四七一三五二六六二四九七七五七。名之曰「自然常數」。\n注曰「「歐拉常數。同Javascript之0.5772156649015329也。」」\n今有一數。曰〇·五七七二一五六六四九〇一五三二八六〇六〇六五一二〇九〇〇八二四〇二四三一〇四二二。名之曰「歐拉常數」。\n注曰「「黃金分割數。同Javascript之1.618033988749895也。」」\n今有一數。曰一·六一八〇三三九八八七四九八九四八四八二〇四五八六八三四三六五六三八一一七七二〇。名之曰「黃金分割數」。\n注曰「「二之平方根。同Javascript之Math.SQRT2也。」」\n今有一數。曰一·四一四二一三五六二三七三〇九五〇四八八〇一六八八七二四二〇九六九八〇七八五七〇。名之曰「二之平方根」。\n注曰「「二之對數。同Javascript之Math.LN2也。」」\n今有一數。曰〇·六九三一四七一八〇五五九九四五三〇九四一七二三二一二一四五八一七六五六八〇七五五。名之曰「二之對數」。\n注曰「「十之對數。同Javascript之Math.LN10也。」」\n今有一數。曰二·三〇二五八五〇九二九九四〇四五六八四〇一七九九一四五四六八四三六四二〇七六〇一。名之曰「十之對數」。\n\n注曰「「不可算數乎。同Javascript之Number.isNaN也。」」\n今有一術。名之曰「不可算數乎」。欲行是術。必先得一數。曰「甲」。乃行是術曰。\n\t若「甲」等於「甲」者。乃得陰。\n\t若非。乃得陽也。\n是謂「不可算數乎」之術也。\n\n吾有一術。名之曰「下溢」。欲行是術。必先得一數。曰「符」。乃行是術曰。\n\t乘「符」以「微位冪」。乘其以「至微數」。乃得矣。\n是謂「下溢」之術也。\n\n吾有一術。名之曰「上溢」。欲行是術。必先得一數。曰「符」。乃行是術曰。\n\t乘「符」以「至巨數」。乘其以「至巨數」。乃得矣。\n是謂「上溢」之術也。\n\n吾有一術。名之曰「除以零」。欲行是術。必先得一數。曰「符」。乃行是術曰。\n\t除「符」以「浮點零」。乃得矣。\n是謂「除以零」之術也。\n\n吾有一術。名之曰「不可算」。乃行是術曰。\n\t除「浮點零」於「浮點零」。乃得矣。\n是謂「不可算」之術也。\n\n吾有一術。名之曰「求進冪」。欲行是術。必先得一數。曰「位」。乃行是術曰。\n\t吾有一術。名之曰「吾之冪」。欲行是術。必先得二數。曰「底」。曰「指」。乃行是術曰。\n\t\t有數「底」。名之曰「甲」。\n\t\t有數「浮點一」。名之曰「冪」。\n\t\t恆為是。\n\t\t\t若「指」等於零者。乃止也。\n\t\t\t除「指」以二。所餘幾何。名之曰「餘」。\n\t\t\t若「餘」大於零者。乘「甲」於「冪」。昔之「冪」者。今其是矣。云云。\n\t\t\t乘「甲」於「甲」。昔之「甲」者。今其是矣。\n\t\t\t減「餘」於「指」。除其以二。昔之「指」者。今其是矣。\n\t\t云云。\n\t\t乃得「冪」。\n\t是謂「吾之冪」之術也。\n\t若「位」小於零者。\n\t\t夫「退制」。減零以「位」。取二以施「吾之冪」。乃得矣。\n\t若非。\n\t\t夫「進制」。夫「位」。取二以施「吾之冪」。乃得矣。\n\t云云。\n是謂「求進冪」之術也。\n\n吾有三數。名之曰「取位常數甲」。曰「取位常數乙」。曰「取位上溢限」。\n吾有三數。名之曰「分算常數」。曰「分算上溢限甲」。曰「分算上溢限乙」。\n\n吾有一術。名之曰「伏羲」。乃行是術曰。\n\t加一於「上位冪」。昔之「取位常數甲」者。今其是矣。\n\t除二於「下位冪」。減其於一。昔之「取位常數乙」者。今其是矣。\n\t除「上位冪」於「巨位冪」。昔之「取位上溢限」者。今其是矣。\n\n\t加一於「總算位」。名之曰「甲」。\n\t除二於「甲」。所餘幾何。減其於「甲」。除其以二。名之曰「半算位」。\n\t施「求進冪」於「半算位」。名之曰「半位冪」。\n\t加一於「半位冪」。昔之「分算常數」者。今其是矣。\n\t除「半位冪」於「巨位冪」。昔之「分算上溢限甲」者。今其是矣。\n\t乘「半位冪」於「下位冪」。減其於「進制」。乘其以「巨位冪」。昔之「分算上溢限乙」者。今其是矣。\n是謂「伏羲」之術也。\n施「伏羲」。\n\n吾有一術。名之曰「取本位冪」。欲行是術。必先得一數。曰「甲」。乃行是術曰。\n\t注曰「「二進者方可施是術。」」\n\t施「絕對」於「甲」。名之曰「乙」。\n\t若「乙」小於「取位上溢限」者。\n\t\t乘「乙」以「取位常數甲」。名之曰「丙」。\n\t\t乘「丙」以「取位常數乙」。名之曰「丁」。\n\t\t減「丁」於「丙」。乃得矣。\n\t若非。\n\t\t乘「乙」以「下位冪」。乘其以「下位冪」。名之曰「丙」。\n\t\t若「丙」小於「取位上溢限」者。\n\t\t\t施「取本位冪」於「丙」。乘其以「上位冪」。乘其以「上位冪」。乃得矣。\n\t\t若非。\n\t\t\t乃得「乙」也。\n\t云云。\n是謂「取本位冪」之術也。\n\n吾有一術。名之曰「取內鄰數」。欲行是術。必先得一數。曰「甲」。乃行是術曰。\n\t注曰「「二進者方可施是術。」」\n\t乘「甲」以「取位常數乙」。名之曰「乙」。\n\t若「乙」不等於「甲」者。\n\t\t乃得「乙」也。\n\t若「甲」等於零者。\n\t\t乃得「甲」也。\n\t施「正負」於「甲」。名之曰「符」。乘「符」於「甲」。名之曰「丙」。\n\t若「丙」大於「至巨數」者。\n\t\t乘「符」於「至巨數」。乃得矣。云云。\n\t減「至微數」於「丙」。乘其以「符」。乃得矣。\n是謂「取內鄰數」之術也。\n\n吾有一術。名之曰「取外鄰數」。欲行是術。必先得一數。曰「甲」。乃行是術曰。\n\t注曰「「二進者方可施是術。」」\n\t施「正負」於「甲」。名之曰「符」。\n\t施「取本位冪」於「甲」。乘其以「下位冪」。乘其以「符」。加其以「甲」。名之曰「乙」。\n\t若「乙」不等於「甲」者。\n\t\t乃得「乙」也。\n\t若「甲」等於零者。\n\t\t乃得「至微數」也。\n\t乘「符」於「甲」。加其以「至微數」。乘其以「符」。乃得矣。\n是謂「取外鄰數」之術也。\n\n吾有一術。名之曰「分算」。欲行是術。必先得一數。曰「甲」。乃行是術曰。\n\t注曰「「分算者。其位上下二分。借二算布之也。」」\n\t吾有一列。名之曰「二算」。\n\t施「絕對」於「甲」。名之曰「乙」。\n\t若「乙」小於「分算上溢限甲」者。\n\t\t乘「甲」以「分算常數」。名之曰「丙」。\n\t\t減「丙」於「甲」。名之曰「丁」。\n\t\t加「丁」於「丙」。名之曰「上甲」。\n\t\t充「二算」以「上甲」。\n\t\t減「甲」以「上甲」。充「二算」以其。\n\t若非。\n\t\t若「乙」小於「分算上溢限乙」者。\n\t\t\t乘「甲」以「下位冪」。名之曰「丙」。\n\t\t\t施「分算」於「丙」。名之曰「丁」。\n\t\t\t凡「丁」中之「戊」。\n\t\t\t\t乘「戊」以「上位冪」。充「二算」以其。\n\t\t\t云云。\n\t\t若非。\n\t\t\t減「乙」以「分算上溢限乙」。名之曰「丙」。\n\t\t\t若「丙」小於「分算上溢限乙」者。\n\t\t\t\t施「正負」於「甲」。名之曰「符」。\n\t\t\t\t乘「符」於「分算上溢限乙」。充「二算」以其。\n\t\t\t\t乘「符」於「丙」。充「二算」以其。\n\t\t\t若非。\n\t\t\t\t充「二算」以「甲」。以「甲」。\n\t\t\t云云。\n\t\t云云。\n\t云云。\n\t乃得「二算」。\n是謂「分算」之術也。\n\n吾有一術。名之曰「造雙數」。欲行是術。必先得二數。曰「上」。曰「下」。乃行是術曰。\n\t注曰「「雙數者。以二算布一數。其位倍之。」」\n\t吾有一列。名之曰「雙」。充「雙」以「上」。以「下」。乃得「雙」。\n是謂「造雙數」之術也。\n\n吾有一術。名之曰「雙數取反」。欲行是術。必先得一列。曰「甲」。乃行是術曰。\n\t夫「甲」之一。乘其以負一。名之曰「上」。\n\t夫「甲」之二。乘其以負一。名之曰「下」。\n\t施「造雙數」於「上」。於「下」。乃得矣。\n是謂「雙數取反」之術也。\n\n吾有一術。名之曰「以小加大得雙」。欲行是術。必先得二數。曰「小」。曰「大」。乃行是術曰。\n\t注曰「「大小者。二數移位之大小也。或前小而後大。或同。不可反之。」」\n\t加「小」於「大」。名之曰「上和」。\n\t減「大」於「上和」。名之曰「丙」。\n\t減「丙」於「小」。名之曰「下和」。\n\t施「造雙數」於「上和」。於「下和」。乃得矣。\n是謂「以小加大得雙」之術也。\n\n吾有一術。名之曰「相加得雙」。欲行是術。必先得二數。曰「甲」。曰「乙」。乃行是術曰。\n\t加「甲」於「乙」。名之曰「上和」。\n\t減「乙」於「上和」。名之曰「丙」。\n\t減「丙」於「上和」。名之曰「丁」。\n\t減「丙」於「甲」。名之曰「戊」。\n\t減「丁」於「乙」。名之曰「己」。\n\t加「戊」於「己」。名之曰「下和」。\n\t施「造雙數」於「上和」。於「下和」。乃得矣。\n是謂「相加得雙」之術也。\n\n吾有一術。名之曰「加單於雙」。欲行是術。必先得一數。曰「甲」。一列。曰「乙」。乃行是術曰。\n\t夫「乙」之一。名之曰「上乙」。夫「乙」之二。名之曰「下乙」。\n\t施「相加得雙」於「甲」。於「上乙」。名之曰「丙」。\n\t夫「丙」之二。加其於「下乙」。夫「丙」之一。取二以施「以小加大得雙」。乃得矣。\n是謂「加單於雙」之術也。\n\n吾有一術。名之曰「以單減雙得單」。欲行是術。必先得一數。曰「甲」。一列。曰「乙」。是術曰。\n\t夫「乙」之一。名之曰「上乙」。夫「乙」之二。名之曰「下乙」。\n\t減「甲」於「上乙」。加其以「下乙」。乃得矣。\n是謂「以單減雙得單」之術也。\n\n吾有一術。名之曰「加雙於雙」。欲行是術。必先得二列。曰「甲」。曰「乙」。乃行是術曰。\n\t夫「甲」之一。夫「乙」之一。取二以施「相加得雙」。名之曰「丙」。\n\t夫「甲」之二。夫「乙」之二。取二以施「相加得雙」。名之曰「丁」。\n\t夫「丙」之一。名之曰「上丙」。\n\t夫「丙」之二。名之曰「下丙」。\n\t夫「丁」之一。加其於「下丙」。夫「上丙」。取二以施「以小加大得雙」。名之曰「戊」。\n\t夫「戊」之一。名之曰「上戊」。\n\t夫「戊」之二。名之曰「下戊」。\n\t夫「丁」之二。加其於「下戊」。夫「上戊」。取二以施「以小加大得雙」。乃得矣。\n是謂「加雙於雙」之術也。\n\n吾有一術。名之曰「自乘得雙」。欲行是術。必先得一數。曰「甲」。乃行是術曰。\n\t乘「甲」以「甲」。名之曰「上方」。\n\t施「分算」於「甲」。名之曰「分甲」。\n\t夫「分甲」之一。名之曰「上甲」。\n\t夫「分甲」之二。名之曰「下甲」。\n\t乘「上甲」於「上甲」。減其以「上方」。名之曰「丙」。\n\t乘「上甲」於「下甲」。乘其以二。加其於「丙」。名之曰「丁」。\n\t乘「下甲」於「下甲」。加其於「丁」。名之曰「下方」。\n\t施「造雙數」於「上方」。於「下方」。乃得矣。\n是謂「自乘得雙」之術也。\n\n吾有一術。名之曰「相乘得雙」。欲行是術。必先得二數。曰「甲」。曰「乙」。乃行是術曰。\n\t乘「甲」以「乙」。名之曰「上積」。\n\t施「分算」於「甲」。名之曰「分甲」。\n\t夫「分甲」之一。名之曰「上甲」。\n\t夫「分甲」之二。名之曰「下甲」。\n\t施「分算」於「乙」。名之曰「分乙」。\n\t夫「分乙」之一。名之曰「上乙」。\n\t夫「分乙」之二。名之曰「下乙」。\n\t乘「上甲」於「上乙」。減其以「上積」。名之曰「丙」。\n\t乘「上甲」於「下乙」。加其於「丙」。名之曰「丁」。\n\t乘「下甲」於「上乙」。加其於「丁」。名之曰「戊」。\n\t乘「下甲」於「下乙」。加其於「戊」。名之曰「下積」。\n\t施「造雙數」於「上積」。於「下積」。乃得矣。\n是謂「相乘得雙」之術也。\n\n吾有一術。名之曰「乘單於雙」。欲行是術。必先得一數。曰「甲」。一列。曰「乙」。是術曰。\n\t夫「乙」之一。名之曰「上乙」。\n\t夫「乙」之二。名之曰「下乙」。\n\t施「相乘得雙」於「甲」於「上乙」。名之曰「丙」。\n\t乘「甲」於「下乙」。名之曰「丁」。\n\t夫「丙」之二。加其以「丁」。夫「丙」之一。取二以施「以小加大得雙」。乃得矣。\n是謂「乘單於雙」之術也。\n\n吾有一術。名之曰「雙數自乘」。欲行是術。必先得一列。曰「甲」。乃行是術曰。\n\t夫「甲」之一。名之曰「上甲」。\n\t夫「甲」之二。名之曰「下甲」。\n\t施「自乘得雙」於「上甲」。名之曰「乙」。\n\t乘「上甲」於「下甲」。乘其以二。名之曰「丙」。\n\t夫「乙」之二。加其以「丙」。夫「乙」之一。取二以施「以小加大得雙」。乃得矣。\n是謂「雙數自乘」之術也。\n\n吾有一術。名之曰「乘雙於雙」。欲行是術。必先得二列。曰「甲」。曰「乙」。是術曰。\n\t夫「甲」之一。名之曰「上甲」。\n\t夫「甲」之二。名之曰「下甲」。\n\t夫「乙」之一。名之曰「上乙」。\n\t夫「乙」之二。名之曰「下乙」。\n\t施「相乘得雙」於「上甲」於「上乙」。名之曰「丙」。\n\t乘「上甲」於「下乙」。名之曰「丁」。\n\t乘「下甲」於「上乙」。加其於「丁」。名之曰「戊」。\n\t夫「丙」之二。加其以「戊」。夫「丙」之一。取二以施「以小加大得雙」。乃得矣。\n是謂「乘雙於雙」之術也。\n\n吾有一術。名之曰「求多項式」。欲行是術。必先得一列。曰「式」。一數。曰「甲」。乃行是術曰。\n\t有數零。名之曰「解」。\n\t夫「式」之長。名之曰「引」。\n\t恆為是。\n\t\t若「引」等於零者。乃得「解」也。\n\t\t乘「解」以「甲」。名之曰「乙」。\n\t\t夫「式」之「引」。加其於「乙」。昔之「解」者。今其是矣。\n\t\t減一於「引」。昔之「引」者。今其是矣。\n\t云云。\n是謂「求多項式」之術也。\n\n注曰「「浮點移位。同Javascript之x * Math.pow(2, y), y is integer也。」」\n今有一術。名之曰「浮點移位」。欲行是術。必先得二數。曰「本」。曰「位」。乃行是術曰。\n\t注曰「「位正則進位。負則退位。」」\n\t若「位」不大於「至大指」者。若「位」不小於「至小指」者。\n\t\t施「求進冪」於「位」。乘其於「本」。乃得矣。\n\t云云。云云。\n\n\t施「不可算數乎」於「本」。若其然者。\n\t\t乃得「本」也。\n\t施「不可算數乎」於「位」。若其然者。\n\t\t乃得「位」也。\n\t若「位」大於零者。\n\t\t加二於「位極差」。名之曰「限」。\n\t\t若「位」不大於「限」者。\n\t\t\t夫「本」。減「位」以「至大指」。取二以施「浮點移位」。乘其以「巨位冪」。乃得矣。云云。\n\t\t若「位」不大於「至巨數」者。\n\t\t\t夫「本」。減「限」以「至大指」。取二以施「浮點移位」。乘其以「巨位冪」。乃得矣。云云。\n\t\t若「本」不等於零者。\n\t\t\t施「正負」於「本」。取一以施「上溢」。乃得矣。\n\t\t若非。\n\t\t\t施「不可算」。乃得矣。\n\t\t云云。\n\t若非。\n\t\t減負二以「位極差」。名之曰「限」。\n\t\t若「位」不小於「限」者。\n\t\t\t夫「本」。減「位」以「至小指」。取二以施「浮點移位」。乘其以「微位冪」。乃得矣。云云。\n\t\t乘負一於「至巨數」。若「位」不小於其者。\n\t\t\t夫「本」。減「限」以「至小指」。取二以施「浮點移位」。乘其以「微位冪」。乃得矣。云云。\n\t\t施「絕對」於「本」。若其不大於「至巨數」者。\n\t\t\t乘「本」以「浮點零」。乃得矣。\n\t\t若非。\n\t\t\t施「不可算」。乃得矣。\n\t\t云云。\n\t云云。\n是謂「浮點移位」之術也。\n\n注曰「「析浮點數。同Javascript之N/A也。」」\n今有一術。名之曰「析浮點數」。欲行是術。必先得一數。曰「甲」。乃行是術曰。\n\t注曰「「是術得一物。物有三數。曰符。曰位。曰本。符者。正負也。位者。進退位也。本者。本數也。」」\n\t注曰「「設計算機二進。若施是術於負六。乃得符負一。位二。本一又五分。」」\n\t吾有一術。名之曰「造析」。欲行是術。必先得三數。曰「符」。曰「位」。曰「本」。乃行是術曰。\n\t\t吾有一物。名之曰「析」。其物如是。\n\t\t\t物之「「符」」者。數曰「符」。\n\t\t\t物之「「位」」者。數曰「位」。\n\t\t\t物之「「本」」者。數曰「本」。\n\t\t是謂「析」之物也。\n\t\t乃得「析」。\n\t是謂「造析」之術也。\n\n\t吾有一術。名之曰「乘」。欲行是術。必先得二數。曰「丙」。曰「丁」。乃行是術曰。\n\t\t乘「丙」於「丁」。乃得矣。\n\t是謂「乘」之術也。\n\n\t施「正負」於「甲」。名之曰「符」。乘「符」於「甲」。名之曰「乙」。\n\t若「甲」等於零者。\n\t\t夫「符」。施「除以零」於負一。夫「乙」。取三以施「造析」。乃得矣。云云。\n\t施「不可算數乎」於「甲」。若其然者。\n\t\t夫「符」。夫「甲」。夫「乙」。取三以施「造析」。乃得矣。云云。\n\t若「乙」大於「至巨數」者。\n\t\t夫「符」。夫「乙」。夫「乙」。取三以施「造析」。乃得矣。云云。\n\n\t若「乙」不小於一者。\n\t\t吾有一術。名之曰「據」。欲行是術。必先得一數。曰「丙」。乃行是術曰。\n\t\t\t乘「丙」以「進制」。若其大於「乙」者。乃得陽。若非。乃得陰也。\n\t\t是謂「據」之術也。\n\t\t夫「至大指」。夫「浮點一」。夫「進制」。夫「乘」。夫「據」。取五以施「試界」。名之曰「位表」。\n\t\t夫「位表」之「「引」」。名之曰「位」。\n\t\t夫「位表」之「「實」」。除其於「乙」。名之曰「本」。\n\t\t夫「符」。夫「位」。夫「本」。取三以施「造析」。乃得矣。\n\t若非。\n\t\t吾有一術。名之曰「據」。欲行是術。必先得一數。曰「丙」。乃行是術曰。\n\t\t\t若「丙」不大於「乙」者。乃得陽。若非。乃得陰也。\n\t\t是謂「據」之術也。\n\t\t減「至小指」於「總算位」。夫「浮點一」。夫「退制」。夫「乘」。夫「據」。取五以施「試界」。名之曰「位表」。\n\t\t夫「位表」之「「引」」。減其於零。名之曰「位」。\n\t\t夫「位表」之「「實」」。除其於「乙」。名之曰「本」。\n\t\t夫「符」。夫「位」。夫「本」。取三以施「造析」。乃得矣。\n\t云云。\n是謂「析浮點數」之術也。\n\n除「上位冪」以四。名之曰「整除大數限」。\n\n注曰「「取底除。同Javascript之{ 商: Math.floor(x / y), 餘: x - y * quo }也。」」\n今有一術。名之曰「取底除」。欲行是術。必先得二數曰「實」。曰「法」。是術曰。\n\t施「正負」於「法」。名之曰「法符」。乘「法」以「法符」。名之曰「法值」。乘「實」以「法符」。名之曰「乙」。\n\t施「正負」於「乙」。名之曰「乙符」。乘「乙」以「乙符」。名之曰「實值」。\n\t除「法值」於「實值」。所餘幾何。名之曰「餘」。\n\t減「餘」於「實值」。除其以「法值」。取一以施「取整」。名之曰「商」。\n\t若「乙符」小於零者。若「餘」不等於零者。\n\t\t減「商」於負一。昔之「商」者。今其是矣。\n\t\t減「餘」於「法值」。昔之「餘」者。今其是矣。\n\t云云。云云。\n\t吾有一物。名之曰「商餘」。其物如是。\n\t\t物之「「商」」者。數曰「商」。\n\t\t物之「「餘」」者。數曰「餘」。\n\t是謂「商餘」之物也。\n\t乃得「商餘」。\n是謂「取底除」之術也。\n\n注曰「「取整除。同Javascript之{ 商: Math.round(x / y), 餘: x - y * quo }也。」」\n今有一術。名之曰「取整除」。欲行是術。必先得二數曰「實」。曰「法」。是術曰。\n\t施「正負」於「法」。名之曰「法符」。乘「法」以「法符」。名之曰「法值」。\n\t施「正負」於「實」。名之曰「實符」。乘「實」以「實符」。名之曰「實值」。\n\t乘「法符」於「實符」名之曰「符」。\n\t除「法值」於「實值」。所餘幾何。名之曰「餘」。\n\t減「餘」於「實值」。除其以「法值」。取一以施「取整」。名之曰「商」。\n\t除「法值」以二。若「餘」不小於其者。\n\t\t加「商」以一。昔之「商」者。今其是矣。\n\t\t減「餘」以「法值」。昔之「餘」者。今其是矣。\n\t云云。\n\t乘「商」以「符」。昔之「商」者。今其是矣。\n\t乘「餘」以「符」。昔之「餘」者。今其是矣。\n\t吾有一物。名之曰「商餘」。其物如是。\n\t\t物之「「商」」者。數曰「商」。\n\t\t物之「「餘」」者。數曰「餘」。\n\t是謂「商餘」之物也。\n\t乃得「商餘」。\n是謂「取整除」之術也。\n\n吾有一列。名之曰「半圓周率密率」。\n\t施「浮點移位」於八八四二七九七一九〇〇三五五五。於負四十九。充「半圓周率密率」以其。\n\t施「浮點移位」於四九六七七五七六〇〇〇二一五一一。於負一百零六。充「半圓周率密率」以其。\n\n吾有一術。名之曰「分四象」。欲行是術。必先得二數曰「甲」。曰「上限」。是術曰。\n\t注曰「「甲須為有限非零數。」」\n\t注曰「「術尚不精。當以極密率除之。」」\n\t夫「甲」。夫「半圓周率密率」之一。取二以施「取整除」。名之曰「乙」。\n\t夫「乙」之「「商」」。名之曰「商」。夫「乙」之「「餘」」。名之曰「餘」。\n\t注曰「「半圓周率弧度即一象。」」\n\t施「絕對」於「商」。若其不小於「整除大數限」者。\n\t\t注曰「「商甚大。或算位不足而謬之。」」\n\t\t有數四。名之曰「移位」。\n\t\t夫「甲」。減零以「移位」。取二以施「浮點移位」。夫「上限」。取二以施「分四象」。\n\t\t夫其之「「角」」。夫「移位」。取二以施「浮點移位」。夫「上限」。取二以施「分四象」。乃得矣。\n\t云云。\n\t施「取底除」於「商」。於四。夫其之「「餘」」。名之曰「象」。\n\t夫「半圓周率密率」之二。乘其以「商」。減其於「餘」。昔之「餘」者。今其是矣。\n\t施「絕對」於「餘」。若其大於「上限」者。\n\t\t施「分四象」於「餘」。於「上限」。名之曰「解」。\n\t\t夫「解」之「「象」」。加其於「象」。夫四。取二以施「取底除」。\n\t\t夫其之「「餘」」。昔之「解」之「「象」」者。今其是矣。\n\t\t乃得「解」。\n\t若非。\n\t\t吾有一物。名之曰「解」。其物如是。\n\t\t\t物之「「角」」者。數曰「餘」。\n\t\t\t物之「「象」」者。數曰「象」。\n\t\t是謂「解」之物也。\n\t\t乃得「解」。\n\t云云。\n是謂「分四象」之術也。\n\n有數七分九釐。名之曰「正餘弦角限」。注曰「「略大於四十五度。」」\n\n吾有一列。名之曰「正弦多項式」。\n\t除負一以六。充「正弦多項式」以其。\n\t除一以一二〇。充「正弦多項式」以其。\n\t除負一以五〇四〇。充「正弦多項式」以其。\n\t除一以三六二八八〇。充「正弦多項式」以其。\n\t除負一以三九九一六八〇〇。充「正弦多項式」以其。\n\t除一以六二二七〇二〇八〇〇。充「正弦多項式」以其。\n\t除負一以一三〇七六七四三六八〇〇〇。充「正弦多項式」以其。\n\t除一以三五五六八七四二八〇九六〇〇〇。充「正弦多項式」以其。\n\n吾有一列。名之曰「餘弦多項式」。\n\t除負一以二。充「餘弦多項式」以其。\n\t除一以二四。充「餘弦多項式」以其。\n\t除負一以七二〇。充「餘弦多項式」以其。\n\t除一以四〇三二〇。充「餘弦多項式」以其。\n\t除負一以三六二八八〇〇。充「餘弦多項式」以其。\n\t除一以四七九〇〇一六〇〇。充「餘弦多項式」以其。\n\t除負一以八七一七八二九一二〇〇。充「餘弦多項式」以其。\n\t除一以二〇九二二七八九八八八〇〇〇。充「餘弦多項式」以其。\n\n注曰「「正弦。同Javascript之Math.sin也。」」\n今有一術。名之曰「正弦」。欲行是術。必先得一數曰「甲」。乃行是術曰。\n\t注曰「「數小甚矣。乃得其身。否則以泰勒展開求之。復以週期性得其餘。」」\n\n\t施「絕對」於「甲」。名之曰「乙」。\n\t若「乙」小於「下位冪」者。\n\t\t乃得「甲」也。\n\t若「乙」小於「正餘弦角限」者。\n\t\t乘「甲」於「甲」。名之曰「二次冪」。\n\t\t施「求多項式」於「正弦多項式」。於「二次冪」。乘其以「二次冪」。乘其以「甲」。加其於「甲」。乃得矣。云云。\n\t若「乙」不大於「至巨數」者。\n\t\t施「分四象」於「甲」。於「正餘弦角限」。名之曰「丙」。\n\t\t夫「丙」之「「角」」。名之曰「丁」。夫「丙」之「「象」」。名之曰「象」。\n\t\t乘「丁」於「丁」。名之曰「二次冪」。\n\t\t若「象」等於零者。\n\t\t\t施「求多項式」於「正弦多項式」。於「二次冪」。乘其以「二次冪」。乘其以「丁」。加其於「丁」。乃得矣。云云。\n\t\t若「象」等於一者。\n\t\t\t施「求多項式」於「餘弦多項式」。於「二次冪」。乘其以「二次冪」。加其於一。乃得矣。云云。\n\t\t若「象」等於二者。\n\t\t\t施「求多項式」於「正弦多項式」。於「二次冪」。乘其以「二次冪」。乘其以「丁」。加其於「丁」。\n\t\t\t乘其以負一。乃得矣。云云。\n\t\t若「象」等於三者。\n\t\t\t施「求多項式」於「餘弦多項式」。於「二次冪」。乘其以「二次冪」。減其於負一。乃得矣。云云。\n\t云云。\n\t施「不可算數乎」於「甲」。若其然者。\n\t\t乃得「甲」也。\n\t施「不可算」。乃得矣。\n是謂「正弦」之術也。\n\n注曰「「餘弦。同Javascript之Math.cos也。」」\n今有一術。名之曰「餘弦」。欲行是術。必先得一數曰「甲」。乃行是術曰。\n\t注曰「「餘弦者。蓋正弦之變化所得。」」\n\n\t施「絕對」於「甲」。名之曰「乙」。\n\t若「乙」小於「下位冪」者。\n\t\t乃得一也。\n\t若「乙」小於「正餘弦角限」者。\n\t\t乘「甲」於「甲」。名之曰「二次冪」。\n\t\t施「求多項式」於「餘弦多項式」。於「二次冪」。乘其以「二次冪」。加其以一。乃得矣。云云。\n\t若「乙」不大於「至巨數」者。\n\t\t施「分四象」於「甲」。於「正餘弦角限」。名之曰「丙」。\n\t\t夫「丙」之「「角」」。名之曰「丁」。夫「丙」之「「象」」。名之曰「象」。\n\t\t乘「丁」於「丁」。名之曰「二次冪」。\n\t\t若「象」等於零者。\n\t\t\t施「求多項式」於「餘弦多項式」。於「二次冪」。乘其以「二次冪」。加其於一。乃得矣。云云。\n\t\t若「象」等於一者。\n\t\t\t施「求多項式」於「正弦多項式」。於「二次冪」。乘其以「二次冪」。乘其以「丁」。加其於「丁」。\n\t\t\t乘其以負一。乃得矣。云云。\n\t\t若「象」等於二者。\n\t\t\t施「求多項式」於「餘弦多項式」。於「二次冪」。乘其以「二次冪」。減其於負一。乃得矣。云云。\n\t\t若「象」等於三者。\n\t\t\t施「求多項式」於「正弦多項式」。於「二次冪」。乘其以「二次冪」。乘其以「丁」。加其於「丁」。乃得矣。云云。\n\t云云。\n\t施「不可算數乎」於「甲」。若其然者。\n\t\t乃得「甲」也。\n\t施「不可算」。乃得矣。\n是謂「餘弦」之術也。\n\n吾有一列。名之曰「反正弦多項式」。\n\t充「反正弦多項式」以〇·一六六六六六六六六六六六六六六四六。\n\t充「反正弦多項式」以〇·〇七五〇〇〇〇〇〇〇〇〇二三一八五三。\n\t充「反正弦多項式」以〇·〇四四六四二八五七〇九九五一八七七六。\n\t充「反正弦多項式」以〇·〇三〇三八一九四七六一二五八八一八八。\n\t充「反正弦多項式」以〇·〇二二三七二〇三九七二四〇六七九九六。\n\t充「反正弦多項式」以〇·〇一七三五五四〇八四二九六九九一六八。\n\t充「反正弦多項式」以〇·〇一三九二七九一六二七八〇七六一四〇。\n\t充「反正弦多項式」以〇·〇一一八八八五三〇五一〇五三八八〇九。\n\t充「反正弦多項式」以〇·〇〇七七四〇一二四四一八〇六六九〇三三。\n\t充「反正弦多項式」以〇·〇一六二二三四二二六二三一八二五六二。\n\t充「反正弦多項式」以負〇·〇一一〇六六五二一五七八〇七三九七〇。\n\t充「反正弦多項式」以〇·〇二八四〇〇七四九二〇一四五一九六二。\n\n注曰「「反正弦。同Javascript之Math.asin也。」」\n今有一術。名之曰「反正弦」。欲行是術。必先得一數曰「甲」。乃行是術曰。\n\t注曰「「小於五分者。以多項式求之。其餘以三角恆等式變化可得。」」\n\t施「正負」於「甲」。名之曰「符」。乘「符」於「甲」。名之曰「乙」。\n\t有爻陽。名之曰「非常」。\n\t若「乙」大於零者。若「乙」不大於一者。\n\t\t昔之「非常」者。今陰是矣。\n\t云云。云云。\n\t若「非常」者。\n\t\t若「甲」等於零者。乃得「甲」也。\n\t\t施「不可算數乎」於「甲」。若其然者。乃得「甲」也。\n\t\t施「不可算」。乃得矣。\n\t云云。\n\n\t若「乙」大於五分者。\n\t\t減「乙」於一。除其以二。名之曰「丙」。\n\t\t施「平方根」於「丙」。乘其以二。名之曰「丁」。\n\t\t施「求多項式」於「反正弦多項式」。於「丙」。乘其以「丙」。乘其以「丁」。加其以「丁」。名之曰「戊」。\n\t\t夫「半圓周率密率」之二。減其以「戊」。名之曰「己」。\n\t\t夫「半圓周率密率」之一。加其於「己」。乘其以「符」。乃得矣。\n\t若非。\n\t\t乘「乙」於「乙」。名之曰「丙」。\n\t\t施「求多項式」於「反正弦多項式」。於「丙」。乘其以「丙」。乘其以「甲」。加其於「甲」。乃得矣。\n\t云云。\n是謂「反正弦」之術也。\n\n注曰「「反餘弦。同Javascript之Math.acos也。」」\n今有一術。名之曰「反餘弦」。欲行是術。必先得一數曰「甲」。乃行是術曰。\n\t注曰「「反餘弦者。蓋反正弦之變化所得。」」\n\t施「絕對」於「甲」。名之曰「乙」。\n\t有爻陽。名之曰「非常」。\n\t若「乙」不大於一者。\n\t\t昔之「非常」者。今陰是矣。\n\t云云。\n\t若「非常」者。\n\t\t施「不可算數乎」於「甲」。若其然者。乃得「甲」也。\n\t\t施「不可算」。乃得矣。\n\t云云。\n\n\t若「乙」大於五分者。\n\t\t減「乙」於一。除其以二。名之曰「丙」。\n\t\t施「平方根」於「丙」。乘其以二。名之曰「丁」。\n\t\t施「求多項式」於「反正弦多項式」。於「丙」。乘其以「丙」。乘其以「丁」。加其以「丁」。名之曰「戊」。\n\t\t若「甲」大於零者。\n\t\t\t乃得「戊」。\n\t\t若非。\n\t\t\t夫「半圓周率密率」之二。乘其以二。減其以「戊」。名之曰「己」。\n\t\t\t夫「半圓周率密率」之一。乘其以二。加其於「己」。乃得矣。\n\t\t云云。\n\t若非。\n\t\t乘「乙」於「乙」。名之曰「丙」。\n\t\t施「求多項式」於「反正弦多項式」。於「丙」。乘其以「丙」。乘其以「甲」。加其於「甲」。名之曰「戊」。\n\t\t夫「半圓周率密率」之二。減其以「戊」。名之曰「己」。\n\t\t夫「半圓周率密率」之一。加其於「己」。乃得矣。\n\t云云。\n是謂「反餘弦」之術也。\n\n注曰「「正切。同Javascript之Math.tan也。」」\n今有一術。名之曰「正切」。欲行是術。必先得一數曰「甲」。乃行是術曰。\n\t注曰「「數小甚矣。乃得其身。其餘或以三角恆等式。或以週期性可得。」」\n\n\t施「絕對」於「甲」。名之曰「乙」。\n\t若「乙」小於「下位冪」者。\n\t\t乃得「甲」也。\n\t若「乙」小於「正餘弦角限」者。\n\t\t乘「甲」於「甲」。名之曰「二次冪」。\n\t\t施「求多項式」於「正弦多項式」。於「二次冪」。乘其以「二次冪」。乘其以「甲」。加其於「甲」。名之曰「勾」。\n\t\t施「求多項式」於「餘弦多項式」。於「二次冪」。乘其以「二次冪」。加其以一。名之曰「股」。\n\t\t除「勾」以「股」。乃得矣。云云。\n\t若「乙」不大於「至巨數」者。\n\t\t施「分四象」於「甲」。於「正餘弦角限」。名之曰「丙」。\n\t\t夫「丙」之「「角」」。名之曰「丁」。夫「丙」之「「象」」。名之曰「象」。\n\t\t乘「丁」於「丁」。名之曰「二次冪」。\n\t\t若「象」等於零者。\n\t\t\t施「求多項式」於「正弦多項式」。於「二次冪」。乘其以「二次冪」。乘其以「丁」。加其於「丁」。名之曰「勾」。\n\t\t\t施「求多項式」於「餘弦多項式」。於「二次冪」。乘其以「二次冪」。加其於一。名之曰「股」。\n\t\t\t除「勾」以「股」。乃得矣。云云。\n\t\t若「象」等於一者。\n\t\t\t施「求多項式」於「餘弦多項式」。於「二次冪」。乘其以「二次冪」。加其於一。名之曰「勾」。\n\t\t\t施「求多項式」於「正弦多項式」。於「二次冪」。乘其以「二次冪」。乘其以「丁」。加其於「丁」。\n\t\t\t乘其以負一。名之曰「股」。\n\t\t\t除「勾」以「股」。乃得矣。云云。\n\t\t若「象」等於二者。\n\t\t\t施「求多項式」於「正弦多項式」。於「二次冪」。乘其以「二次冪」。乘其以「丁」。加其於「丁」。\n\t\t\t乘其以負一。名之曰「勾」。\n\t\t\t施「求多項式」於「餘弦多項式」。於「二次冪」。乘其以「二次冪」。減其於負一。名之曰「股」。\n\t\t\t除「勾」以「股」。乃得矣。云云。\n\t\t若「象」等於三者。\n\t\t\t施「求多項式」於「餘弦多項式」。於「二次冪」。乘其以「二次冪」。減其於負一。名之曰「勾」。\n\t\t\t施「求多項式」於「正弦多項式」。於「二次冪」。乘其以「二次冪」。乘其以「丁」。加其於「丁」。名之曰「股」。\n\t\t\t除「勾」以「股」。乃得矣。云云。\n\t云云。\n\t施「不可算數乎」於「甲」。若其然者。\n\t\t乃得「甲」也。\n\t施「不可算」。乃得矣。\n是謂「正切」之術也。\n\n吾有一列。名之曰「反正切多項式」。\n\t充「反正切多項式」以負〇·三三三三三三三三三三三三三三三二六。\n\t充「反正切多項式」以〇·一九九九九九九九九九九九九二二六八。\n\t充「反正切多項式」以負〇·一四二八五七一四二八四二一〇九五七。\n\t充「反正切多項式」以〇·一一一一一一一〇九九六五六八一〇三。\n\t充「反正切多項式」以負〇·〇九〇九〇九〇四五七三六一九二八〇九。\n\t充「反正切多項式」以〇·〇七六九二二〇二二一一〇八五〇六九六。\n\t充「反正切多項式」以負〇·〇六六六五〇九六二七三七〇九三七五五。\n\t充「反正切多項式」以〇·〇五八六六八一九一二四六一七二三一三。\n\t充「反正切多項式」以負〇·〇五一五九〇五五四五〇八四〇七四八七。\n\t充「反正切多項式」以〇·〇四二八八一四六一二三五七三四五六〇。\n\t充「反正切多項式」以負〇·〇二九〇三〇一七〇一六〇九七五七五一。\n\t充「反正切多項式」以〇·〇一一二〇八四九一一九三〇八七七九二。\n\n注曰「「反正切。同Javascript之Math.atan也。」」\n今有一術。名之曰「反正切」。欲行是術。必先得一數曰「甲」。乃行是術曰。\n\t注曰「「小於五分者。以多項式求之。其餘以三角恆等式變化可得。」」\n\t施「正負」於「甲」。名之曰「符」。乘「符」於「甲」。名之曰「乙」。\n\t有爻陽。名之曰「非常」。\n\t若「乙」大於零者。若「乙」不大於「至巨數」者。\n\t\t昔之「非常」者。今陰是矣。\n\t云云。云云。\n\t若「非常」者。\n\t\t若「乙」等於零者。乃得「甲」也。\n\t\t若「乙」大於「至巨數」者。乘「符」於「半圓周率」。乃得矣。云云。\n\t\t乃得「甲」。\n\t云云。\n\n\t若「乙」小於五分者。\n\t\t乘「乙」於「乙」。名之曰「丙」。\n\t\t施「求多項式」於「反正切多項式」。於「丙」。乘其以「丙」。乘其以「甲」。加其於「甲」。乃得矣。\n\t或若「乙」大於二者。\n\t\t除「乙」於一。名之曰「丁」。\n\t\t乘「丁」於「丁」。名之曰「丙」。\n\t\t施「求多項式」於「反正切多項式」。於「丙」。乘其以「丙」。乘其以「丁」。加其於「丁」。名之曰「戊」。\n\t\t夫「半圓周率密率」之二。減其以「戊」。名之曰「己」。\n\t\t夫「半圓周率密率」之一。加其於「己」。乘其以「符」。乃得矣。\n\t若非。\n\t\t減「乙」以一。名之曰「庚」。加「乙」於一。除其於「庚」。名之曰「丁」。\n\t\t乘「丁」於「丁」。名之曰「丙」。\n\t\t施「求多項式」於「反正切多項式」。於「丙」。乘其以「丙」。乘其以「丁」。加其於「丁」。名之曰「戊」。\n\t\t夫「半圓周率密率」之二。除其以二。加其於「戊」。名之曰「己」。\n\t\t夫「半圓周率密率」之一。除其以二。加其於「己」。乘其以「符」。乃得矣。\n\t云云。\n是謂「反正切」之術也。\n\n\n注曰「「勾股求角。同Javascript之Math.atan2也。」」\n今有一術。名之曰「勾股求角」。欲行是術。必先得二數曰「甲」。曰「乙」。乃行是術曰。\n\t注曰「「反正切之分類討論也」」\n\t施「絕對」於「甲」。若其大於「至巨數」者。\n\t\t施「絕對」於「乙」。若其大於「至巨數」者。\n\t\t\t施「正負」於「甲」。施「正負」於「乙」。取二以施「勾股求角」。乃得矣。\n\t\t云云。\n\t云云。\n\n\t若「乙」等於零者。\n\t\t若「甲」大於零者。乃得「半圓周率」也。\n\t\t若「甲」小於零者。減零以「半圓周率」乃得其也。\n\t\t乃得零也。\n\n\t除「甲」以「乙」。取一以施「反正切」。名之曰「丙」。\n\t若「乙」大於零者。乃得「丙」也。\n\t若「甲」不小於零者。加「丙」以「圓周率」。乃得矣。云云。\n\n\t減「丙」以「圓周率」。乃得矣。\n\n是謂「勾股求角」之術也。\n\n\n除五〇六二九七三以二〇九七一五二。名之曰「勾股求弦常數上」。\n有數負〇·〇〇〇〇〇〇〇九五〇〇六〇五五三四一八二三三一一二七五七九〇三〇一九二一四三〇三二八一二四六二。\n\t名之曰「勾股求弦常數下」。\n注曰「「加二之平方根於一也。」」\n\n注曰「「勾股求弦。同Javascript之Math.hypot也。」」\n今有一術。名之曰「勾股求弦」。欲行是術。必先得二數曰「勾」。曰「股」。乃行是術曰。\n\t施「絕對」於「勾」。名之曰「甲」。\n\t施「絕對」於「股」。名之曰「乙」。\n\t若「甲」等於零者。乃得「乙」也。\n\t若「乙」等於零者。乃得「甲」也。\n\t若「甲」大於「至巨數」者。乃得「甲」也。\n\t若「乙」大於「至巨數」者。乃得「乙」也。\n\t施「不可算數乎」於「甲」。若其然者。乃得「甲」也。\n\t施「不可算數乎」於「乙」。若其然者。乃得「乙」也。\n\t若「乙」大於「甲」者。\n\t\t有數「甲」。名之曰「借」。\n\t\t昔之「甲」者。今「乙」是矣。\n\t\t昔之「乙」者。今「借」是矣。\n\t云云。\n\n\t減「乙」於「甲」。名之曰「丙」。\n\t若「丙」等於「甲」者。\n\t\t乃得「甲」。\n\t或若「丙」大於「乙」者。\n\t\t除「乙」於「甲」。名之曰「丁」。\n\t\t乘「丁」於「丁」。加其於一。取一以施「平方根」。加其於「丁」。\n\t\t除其於「乙」。加其於「甲」。乃得矣。\n\t若非。\n\t\t除「乙」於「丙」。名之曰「戊」。\n\t\t加「戊」於二。乘其以「戊」。名之曰「己」。\n\t\t加「己」於二。取一以施「平方根」。加其於「二之平方根」。除其於「己」。名之曰「庚」。\n\t\t加「庚」於「勾股求弦常數下」。加其於「戊」。加其於「勾股求弦常數上」。\n\t\t除其於「乙」。加其於「甲」。乃得矣。\n\t云云。\n是謂「勾股求弦」之術也。\n\n除一百四十五萬三千六百三十五以二百零九萬七千一百五十二。名之曰「二之對數上」。\n有數負〇·〇〇〇〇〇〇〇〇一九〇四六五四二九九九五七七六七八七八五四一八二三四三一九二四四九九八六五六四〇。\n\t名之曰「二之對數下」。\n\n吾有一列。名之曰「對數多項式甲」。\n\t除一以三。充「對數多項式甲」以其。\n\t除一以五。充「對數多項式甲」以其。\n\t除一以七。充「對數多項式甲」以其。\n\t除一以九。充「對數多項式甲」以其。\n\t除一以十一。充「對數多項式甲」以其。\n\t除一以十三。充「對數多項式甲」以其。\n\t除一以十五。充「對數多項式甲」以其。\n\t除一以十七。充「對數多項式甲」以其。\n\t除一以十九。充「對數多項式甲」以其。\n注曰「「 x^2 * f(x^2) = atanh(x)/x - 1 」」\n\n注曰「「對數。同Javascript之Math.log也。」」\n今有一術。名之曰「對數」。欲行是術。必先得一數曰「甲」。乃行是術曰。\n\t注曰「「自然對數。」」\n\t有爻陽。名之曰「非常」。\n\t若「甲」大於零者。若「甲」不大於「至巨數」者。\n\t\t昔之「非常」者。今陰是矣。\n\t云云。云云。\n\t若「非常」者。\n\t\t若「甲」等於零者。\n\t\t\t施「除以零」於負一。乃得矣。云云。\n\t\t若「甲」小於零者。\n\t\t\t施「不可算」。乃得矣。云云。\n\t\t乃得「甲」。\n\t云云。\n\n\t注曰「「以對數屬性佐泰勒展開」」\n\t施「析浮點數」於「甲」。名之曰「析甲」。\n\t夫「析甲」之「「位」」。名之曰「位」。\n\t夫「析甲」之「「本」」。名之曰「本」。\n\t若「本」大於「二之平方根」者。\n\t\t加一於「位」。昔之「位」者。今其是矣。\n\t\t除二於「本」。昔之「本」者。今其是矣。\n\t云云。\n\t乘「二之對數」於「位」。名之曰「乙」。\n\t減「本」以一。名之曰「分子」。加「本」以一。除其於「分子」。名之曰「丙」。\n\t乘「丙」以「丙」。名之曰「二次冪」。\n\t施「求多項式」於「對數多項式甲」。於「二次冪」。乘其以「二次冪」。乘其以「丙」。加其於「丙」。\n\t乘其以二。加其以「乙」。乃得矣。\n\n是謂「對數」之術也。\n\n加二於「至大指」。乘其以「二之對數」。名之曰「指數上溢限」。\n減「至小指」以「總算位」。減其以一。乘其以「二之對數」。名之曰「指數下溢限」。\n\n吾有一列。名之曰「指數多項式甲」。\n\t除一以三。充「指數多項式甲」以其。\n\t除負一以四十五。充「指數多項式甲」以其。\n\t除二以九百四十五。充「指數多項式甲」以其。\n\t除負一以四千七百二十五。充「指數多項式甲」以其。\n\t除二以九萬三千五百五十五。充「指數多項式甲」以其。\n\t除負一千三百八十二以六億三千八百五十一萬二千八百七十五。充「指數多項式甲」以其。\n注曰「「 x^2 * f(x^2) = x/tanh(x) - 1 」」\n\n注曰「「指數。同Javascript之Math.exp也。」」\n今有一術。名之曰「指數」。欲行是術。必先得一數曰「甲」。乃行是術曰。\n\t注曰「「自然指數。」」\n\t有爻陽。名之曰「非常」。\n\t若「甲」小於「指數上溢限」者。若「甲」大於「指數下溢限」者。\n\t\t昔之「非常」者。今陰是矣。\n\t云云。云云。\n\t若「非常」者。\n\t\t施「不可算數乎」於「甲」。若其然者。\n\t\t\t乃得「甲」也。\n\t\t若「甲」大於零者。\n\t\t\t若「甲」大於「至巨數」者。\n\t\t\t\t乃得「甲」。\n\t\t\t若非。\n\t\t\t\t施「上溢」於一。乃得矣。\n\t\t\t云云。\n\t\t若非。\n\t\t\t乘負一於「至巨數」。若「甲」小於其者。\n\t\t\t\t乃得「浮點零」。\n\t\t\t若非。\n\t\t\t\t施「下溢」於一。乃得矣。\n\t\t\t云云。\n\t\t云云。\n\t云云。\n\n\t除「甲」以「二之對數」。取一以施「取整」。名之曰「移位數」。\n\t乘「二之對數上」於「移位數」。減其於「甲」。名之曰「乙」。\n\t乘「二之對數下」於「移位數」。減其於「乙」。名之曰「丙」。\n\t注曰「「除二之對數於甲。其餘者丙。以密率求之。」」\n\t除二於「丙」。名之曰「丁」。\n\t乘「丁」於「丁」。名之曰「戊」。\n\t施「求多項式」於「指數多項式甲」。於「戊」。乘其以「戊」。減其於「丁」。名之曰「己」。\n\t減「己」於一。除其於「丙」。加其於一。名之曰「庚」。\n\t施「浮點移位」於「庚」。於「移位數」。乃得矣。\n是謂「指數」之術也。\n\n吾有一列。名之曰「對數多項式乙上」。充「對數多項式乙上」。\n\t以〇·三三三三一七二四二二九四七八五六五三九一一〇五。\n\t以〇·二〇四三一三三七三七九六七九〇〇七〇九三五三六。\n吾有一列。名之曰「對數多項式乙下」。充「對數多項式乙下」。\n\t以〇·〇〇〇〇一六〇九一〇三八五四七六七九四三一。\n\t以負〇·〇〇四三一三三七三七九六七九〇一〇六七。\n\t以〇·一四二八五七一四二八五七一七六四六。\n\t以〇·一一一一一一一一一〇九九二五〇七五。\n\t以〇·〇九〇九〇九〇九二九八八二一八〇一八。\n\t以〇·〇七六九二二八七三三〇三六九五五四四。\n\t以〇·〇六六六七八三二一八五七九三二五一五。\n\t以〇·〇五八四三七二六四一三一四六七八六七。\n\t以〇·〇五九四四三八八四三七八七五一四八四。\n注曰「「 x^2 * (f0(x^2) + f1(x^2)) = atanh(x)/x - 1 」」\n\n吾有一術。名之曰「正數之冪」。欲行是術。必先得二數。曰「底」。曰「指」。是術曰。\n\t注曰「「底為有限正數。指為有限數。」」\n\n\t注曰「「以下求底之對數。」」\n\t施「析浮點數」於「底」。名之曰「析底」。\n\t夫「析底」之「「位」」。名之曰「位」。\n\t夫「析底」之「「本」」。名之曰「本」。\n\t若「本」大於「二之平方根」者。\n\t\t加一於「位」。昔之「位」者。今其是矣。\n\t\t除二於「本」。昔之「本」者。今其是矣。\n\t云云。\n\t減「本」以一。名之曰「丙」。\n\t加「本」以一。名之曰「丁」。\n\t除「丁」於「丙」。名之曰「戊」。\n\t夫「戊」。夫「戊」。夫「本」。取二以施「相乘得雙」。取二以施「加單於雙」。名之曰「己」。\n\t夫「丙」。夫「己」。取二以施「以單減雙得單」。乘其以負一。除其以「丁」。\n\t\t夫「戊」。取二以施「以小加大得雙」。名之曰「庚」。\n\t施「雙數自乘」於「庚」。名之曰「辛」。\n\t夫「對數多項式乙下」。夫「辛」之一。取二以施「求多項式」。\n\t\t夫「對數多項式乙上」之二。夫「辛」。取二以施「乘單於雙」。取二以施「加單於雙」。名之曰「壬」。\n\t夫「對數多項式乙上」之一。夫「壬」。取二以施「加單於雙」。夫「辛」。取二以施「乘雙於雙」。\n\t\t夫「庚」。取二以施「乘雙於雙」。夫「庚」。取二以施「加雙於雙」。名之曰「癸」。\n\t夫「癸」之一。乘其以二。乘「位」於「二之對數上」。取二以施「相加得雙」。名之曰「子」。\n\t夫「癸」之二。乘其以二。名之曰「丑」。\n\t夫「子」之二。加其以「丑」。名之曰「寅」。\n\t乘「位」於「二之對數下」。加其以「寅」。夫「子」之一。取二以施「以小加大得雙」。名之曰「底之對數」。\n\n\t注曰「「以下求冪之對數。」」\n\t夫「底之對數」之一。乘其以「指」。名之曰「卯」。\n\t若「卯」大於「指數上溢限」者。施「上溢」於一。乃得矣。\n\t或若「卯」小於「指數下溢限」者。施「下溢」於一。乃得矣。云云。\n\n\t夫「指」。夫「底之對數」。取二以施「乘單於雙」。名之曰「冪之對數」。\n\t夫「冪之對數」之一。除其以「二之對數」。取一以施「取整」。名之曰「移位數」。\n\t乘「移位數」以「二之對數下」。乘「移位數」以「二之對數上」。取二以施「以小加大得雙」。\n\t\t取一以施「雙數取反」。夫「冪之對數」。取二以施「加雙於雙」。名之曰「辰」。\n\t夫「辰」之一。取一以施「指數」。夫「移位數」。取二以施「浮點移位」。乃得矣。\n是謂「正數之冪」之術也。\n\n注曰「「冪。同Javascript之Math.pow也。」」\n今有一術。名之曰「冪」。欲行是術。必先得二數。曰「底」。曰「指」。乃行是術曰。\n\t若「指」等於零者。乃得一。\n\t或若「指」等於一者。乃得「底」。\n\t或若「指」等於二者。乘「底」於「底」。乃得矣。\n\t或若「指」等於負一者。除「底」於一。乃得矣。\n\t或若「指」等於五分者。施「平方根」於「底」。乃得矣。\n\t或若「指」等於三者。乘「底」於「底」。乘其於「底」。乃得矣。\n\t或若「指」等於負二者。除「底」於一。除其以「底」。乃得矣。\n\t或若「指」等於負五分者。施「平方根」於「底」。除其於一。乃得矣。\n\t云云。\n\n\t若「底」等於一者。乃得一也。\n\n\t施「不可算數乎」於「底」。若其然者。乃得「底」也。\n\t施「不可算數乎」於「指」。若其然者。乃得「指」也。\n\n\t施「絕對」於「底」。名之曰「甲」。\n\t施「絕對」於「指」。名之曰「乙」。\n\t若「乙」大於「至巨數」者。\n\t\t若「甲」等於一者。\n\t\t\t乃得一。\n\t\t或若「甲」小於一者。\n\t\t\t若「指」大於零者。乃得「浮點零」。\n\t\t\t若非。乃得「乙」也。\n\t\t若非。\n\t\t\t若「指」大於零者。乃得「乙」。\n\t\t\t若非。乃得「浮點零」也。\n\t\t云云。\n\t云云。\n\n\t吾有三爻。名之曰「指為偶數」。曰「指為奇數」。曰「指非整數」。\n\t除二於「乙」。所餘幾何。名之曰「丙」。\n\t若「丙」等於零者。昔之「指為偶數」者。今陽是矣。\n\t或若「丙」等於一者。昔之「指為奇數」者。今陽是矣。\n\t若非。昔之「指非整數」者。今陽是矣。\n\t云云。\n\n\t若「底」等於零者。\n\t\t若「指」小於零者。\n\t\t\t若「指為奇數」者。除「底」於一。乃得矣。\n\t\t\t若非。除「甲」於一。乃得矣。云云。\n\t\t若非。\n\t\t\t若「指為奇數」者。乃得「底」。\n\t\t\t若非。乃得「甲」也。\n\t\t云云。\n\t或若「甲」大於「至巨數」者。\n\t\t若「指」小於零者。\n\t\t\t若「指為奇數」者。施「正負」於「底」。乘其於「浮點零」。乃得矣。\n\t\t\t若非。乃得「浮點零」也。\n\t\t若非。\n\t\t\t若「指為奇數」者。乃得「底」。\n\t\t\t若非。乃得「甲」也。\n\t\t云云。\n\t或若「底」小於零者。\n\t\t若「指非整數」者。\n\t\t\t施「不可算」。乃得矣。\n\t\t或若「指為奇數」者。\n\t\t\t施「正數之冪」於「甲」於「指」。乘其以負一。乃得矣。\n\t\t云云。\n\t云云。\n\n\t施「正數之冪」於「甲」於「指」。乃得矣。\n是謂「冪」之術也。\n\n有數四分一釐七毫三絲一忽九微。名之曰「平方根常數甲」。\n注曰「「 (2^0.5 - 1) * sqrt((2^0.25 + 2^-0.25) / 2) 」」\n減一於「二之平方根」。乘其以二。名之曰「平方根常數乙」。\n乘「上位冪」於「微位冪」。乘其以「進制」。乘其以「進制」。名之曰「平方根下溢界」。\n\n注曰「「平方根。同Javascript之Math.sqrt也。」」\n今有一術。名之曰「平方根」。欲行是術。必先得一數曰「甲」。乃行是術曰。\n\t有爻陽。名之曰「非常」。\n\t若「甲」不小於「平方根下溢界」者。若「甲」小於「巨位冪」者。\n\t\t昔之「非常」者。今陰是矣。\n\t云云。云云。\n\t若「非常」者。\n\t\t若「甲」等於零者。\n\t\t\t乃得「浮點零」也。\n\t\t施「不可算數乎」於「甲」。若其然者。\n\t\t\t乃得「甲」也。\n\t\t若「甲」大於「至巨數」者。\n\t\t\t乃得「甲」也。\n\t\t若「甲」小於零者。\n\t\t\t施「不可算」。乃得矣。云云。\n\t\t若「甲」不大於「平方根下溢界」者。\n\t\t\t乘「甲」以「上位冪」。乘其以「上位冪」。乘其以「進制」。乘其以「進制」。取一以施「平方根」。\n\t\t\t乘其以「下位冪」。乘其以「退制」。乃得矣。\n\t\t云云。\n\t\t若「甲」不小於「巨位冪」者。\n\t\t\t乘「甲」以「退制」。乘其以「退制」。取一以施「平方根」。\n\t\t\t乘其以「進制」。乃得矣。\n\t\t云云。\n\t云云。\n\n\t施「析浮點數」於「甲」。名之曰「析甲」。\n\t夫「析甲」之「「位」」。除其以二。名之曰「半位」。\n\t施「取底」於「半位」。名之曰「整半位」。\n\t夫「析甲」之「「本」」。加其以「二之平方根」。乘其以「平方根常數甲」。名之曰「丁」。\n\t減「半位」以「整半位」。乘其以「平方根常數乙」。加其以一。乘其以「丁」。名之曰「戊」。\n\t施「求進冪」於「整半位」。名之曰「己」。\n\t乘「己」於「戊」。名之曰「乙」。\n\t注曰「「以上求疏根」」\n\n\t批曰「「蓋用牛頓法耳」」\n\t為是三遍。\n\t\t除「甲」以「乙」。加其以「乙」。除其以二。名之曰「丙」。\n\t\t昔之「乙」者。今「丙」是矣。\n\t云云。\n\n\t注曰「「以下校末位。」」\n\t乘「己」以「下位冪」。名之曰「庚」。\n\t減「庚」於「乙」。名之曰「下數」。\n\t施「相乘得雙」於「乙」。於「下數」。名之曰「下積」。\n\t夫「下積」之一。若其大於「甲」者。\n\t\t乃得「下數」也。\n\t夫「下積」之一。若其等於「甲」者。夫「下積」之二。若其不小於零者。\n\t\t乃得「下數」。\n\t云云。云云。\n\t注曰「「若甲等於中數乘下數者。其平方根不足下半間數。捨餘得下數也。」」\n\n\t加「庚」於「乙」。名之曰「上數」。\n\t施「相乘得雙」於「乙」。於「上數」。名之曰「上積」。\n\t夫「上積」之一。若其小於「甲」者。\n\t\t乃得「上數」也。\n\t夫「上積」之一。若其等於「甲」者。夫「上積」之二。若其小於零者。\n\t\t乃得「上數」。\n\t云云。云云。\n\t注曰「「若甲等於中數乘上數者。其平方根不足上半間數。捨餘得中數也。」」\n\n\t乃得「乙」。\n是謂「平方根」之術也。\n\n注曰「「絕對。同Javascript之Math.abs也。」」\n今有一術。名之曰「絕對」。欲行是術。必先得一數。曰「甲」。乃行是術曰。\n\t施「正負」於「甲」。名之曰「符」。乘「符」於「甲」。乃得矣。\n是謂「絕對」之術也。\n\n注曰「「取頂。同Javascript之Math.ceil也。」」\n今有一術。名之曰「取頂」。欲行是術。必先得一數。曰「甲」。乃行是術曰。\n\t乘負一於「甲」。取一以施「取底」。乘其以負一。乃得矣。\n是謂「取頂」之術也。\n\n注曰「「取底。同Javascript之Math.floor也。」」\n今有一術。名之曰「取底」。欲行是術。必先得一數。曰「甲」。乃行是術曰。\n\t施「正負」於「甲」。名之曰「符」。乘「符」於「甲」。名之曰「乙」。\n\t注曰「「JavaScript者。除負以正。所餘負也。Python者。除負以正。所餘正也。」」\n\t除「乙」以一。所餘幾何。名之曰「丙」。\n\t若「丙」大於零者。\n\t\t減「丙」於「乙」。乘其以「符」。名之曰「丁」。\n\t\t若「符」小於零者。\n\t\t\t減一於「丁」。乃得矣。\n\t\t若非。\n\t\t\t乃得「丁」也。\n\t若非。\n\t\t乃得「甲」也。\n是謂「取底」之術也。\n\n注曰「「取整。同Javascript之Math.round, but rounded away from zero when the fractional part is exactly 0.5也。」」\n今有一術。名之曰「取整」。欲行是術。必先得一數。曰「甲」。乃行是術曰。\n\t施「正負」於「甲」。名之曰「符」。乘「符」於「甲」。名之曰「乙」。\n\t除「乙」以一。所餘幾何。名之曰「丙」。\n\t若「丙」等於「丙」者。\n\t\t若「丙」小於五分者。\n\t\t\t減「丙」於「乙」。乘其以「符」。乃得矣。\n\t\t若非。\n\t\t\t減「丙」於「乙」。加其以一。乘其以「符」。乃得矣。\n\t\t云云。\n\t若非。\n\t\t乃得「甲」也。\n是謂「取整」之術也。\n\n注曰「「捨餘。同Javascript之Math.trunc也。」」\n今有一術。名之曰「捨餘」。欲行是術。必先得一數。曰「甲」。乃行是術曰。\n\t施「正負」於「甲」。名之曰「符」。乘「符」於「甲」。名之曰「乙」。\n\t除「乙」以一。所餘幾何。名之曰「丙」。\n\t若「丙」等於「丙」者。\n\t\t減「丙」於「乙」。乘其以「符」。乃得矣。\n\t若非。\n\t\t乃得「甲」也。\n是謂「捨餘」之術也。\n\n注曰「「正負。同Javascript之Math.sign也。」」\n今有一術。名之曰「正負」。欲行是術。必先得一數。曰「甲」。乃行是術曰。\n\t若「甲」大於零者。乃得一也。\n\t若「甲」小於零者。乃得負一也。\n\t乃得「甲」。\n是謂「正負」之術也。\n");

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

;
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("注曰「「求和。同Javascript之reduce((a,b)=>a+b)也。」」\n今有一術。名之曰「求和」。欲行是術。必先得一列。曰「列」。乃行是術曰。\n吾有一數。曰零。名之曰「和」。凡「列」中之「數」。加「和」以「數」。\n名之曰「和」。云云。乃得「和」。是謂「求和」之術也。\n\n今有一術。名之曰「算術平均」。欲行是術。必先得一列。曰「列」。乃行是術曰。\n施「求和」於「列」。名之曰「和」。夫「列」之長。名之曰「長」。除「和」以「長」。\n名之曰「算術平均數」。乃得「算術平均數」。是謂「算術平均」之術也。\n\n今有一術。名之曰「方差」。欲行是術。必先得一列。曰「列」。乃行是術曰。\n施「算術平均」於「列」。名之曰「算術平均數」。夫「列」之長。名之曰「長」。\n吾有一數。曰零。名之曰「平方和」。凡「列」中之「數」。減「數」以「算術平均數」。\n名之曰「偏差」。乘「偏差」以「偏差」。名之曰「偏差之平方」。\n加「偏差之平方」以「平方和」。名之曰「平方和」。云云。除「平方和」以「長」。\n名之曰「方差之數」。乃得「方差之數」。是謂「方差」之術也。\n");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(33);
var utils_1 = __webpack_require__(1);
function printType(t, n, d) {
    if (n === void 0) { n = 0; }
    if (d === void 0) { d = 0; }
    if (d > 100) {
        return "...";
    }
    if (t.type == "any") {
        var abc = "abcdefghijklmnopqrstuvwxyz";
        if (n < 26) {
            return "'" + abc[n];
        }
        else {
            return "'" + abc[Math.floor(n / 26)] + abc[n % 26];
        }
    }
    if (t.type == "arr") {
        return "(" + printType(t.element, n, d + 1) + ") arr";
    }
    if (t.type == "fun") {
        return ("(" +
            printType(t.in, n, d + 1) +
            ") -> (" +
            printType(t.out, n + 1, d + 1) +
            ")");
    }
    if (t.type == "obj") {
        var s = "{ ";
        var m = 0;
        for (var k in t.fields) {
            s += k + " : (" + printType(t.fields[k], n + m, d + 1) + "), ";
            m++;
        }
        if (s.length > 2) {
            s = s.slice(0, -2);
        }
        s += " }";
        return s;
    }
    return t.type;
}
exports.printType = printType;
function printSignature(signature) {
    var s = "";
    signature = signature.filter(function (x) { return Object.keys(x[1]).length; });
    signature.sort(function (x, y) { return x[0][0] - y[0][0]; });
    for (var i = 0; i < signature.length; i++) {
        for (var j = signature.length - 1; j >= 0; j--) {
            if (signature[j][0][1] <= signature[i][0][0]) {
                signature[j][0][1] = 1 / 0;
                s += "  ".repeat(signature[j][0][2]) + "}\n";
            }
        }
        s +=
            "  ".repeat(signature[i][0][2]) +
                ("[" + signature[i][0][0] + "-" + signature[i][0][1] + "] {\n");
        for (var k in signature[i][1]) {
            s +=
                "  ".repeat(signature[i][0][2] + 1) +
                    k +
                    " : " +
                    printType(signature[i][1][k]) +
                    "\n";
        }
    }
    for (var j = signature.length - 1; j >= 0; j--) {
        if (signature[j][0][1] < 1 / 0) {
            s += "  ".repeat(signature[j][0][2]) + "}\n";
        }
    }
    return s;
}
exports.printSignature = printSignature;
function typecheck(asc, assert) {
    if (assert === void 0) { assert = utils_1.defaultAssert(); }
    var imported = [];
    var strayvar = [];
    var scope = [{}];
    var scopestarts = [{ pos: 0, op: "global" }];
    var signature = [];
    var funstack = [];
    var funretcnt = [];
    var prevobj = "";
    var took = 0;
    function checkscopei(i, name) {
        if (scope[i][name]) {
            return scope[i][name];
        }
        if (!scope[i - 1]) {
            return;
        }
        for (var j = funstack.length - 1; j >= 0; j--) {
            if (scope[i - 1][funstack[j]]) {
                var ptr_1 = scope[i - 1][funstack[j]];
                while (ptr_1.type == "fun") {
                    if (ptr_1.in.name == name) {
                        return ptr_1.in;
                    }
                    ptr_1 = ptr_1.out;
                }
            }
        }
    }
    function checkscopeall(name) {
        for (var i = scope.length - 1; i >= 0; i--) {
            var b = checkscopei(i, name);
            if (b) {
                return b;
            }
        }
        if (imported.includes(name)) {
            return inittype("any"); //for now
        }
        if (utils_1.isRoman(name)) {
            //backdoor for native code
            return inittype("any");
        }
        return undefined;
    }
    function checkscopethis(name, pos) {
        assert("Scope stack depleted, possibly due to extraneous end-block statement.", pos, scope.length);
        return checkscopei(scope.length - 1, name);
    }
    function inittype(type) {
        if (type == "any") {
            return { type: "any" };
        }
        if (type == "nil") {
            return { type: "nil" };
        }
        var x = { type: type };
        if (type == "fun") {
            x.in = { type: "any" };
            x.out = { type: "any" };
        }
        else if (type == "obj") {
            x.fields = {};
        }
        else if (type == "arr") {
            x.element = { type: "any" };
        }
        return x;
    }
    function gettype(tok) {
        if (tok[0] == "lit") {
            return inittype("str");
        }
        else if (tok[0] == "bool") {
            return inittype("bol");
        }
        else if (tok[0] == "num") {
            return inittype("num");
        }
        else if (tok[0] == "iden") {
            return checkscopeall(tok[1]);
        }
        else if (tok[0] == "ans") {
            var s = strayvar[strayvar.length - 1];
            // strayvar = [];
            return s;
        }
        assert("[Type] Expecting value, found '" + tok[0] + "'", tok[2], false);
    }
    function objfield(t, x) {
        if (t.isarg) {
            t.fields[x] = inittype("any");
        }
        return t.fields[x];
    }
    function scopepush(node) {
        scope.push({});
        scopestarts.push(node);
    }
    function scopepop(node) {
        var acceptScopeStartOps = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            acceptScopeStartOps[_i - 1] = arguments[_i];
        }
        var ss = scopestarts.pop();
        var s = scope.pop();
        assert("[Type] Unexpected '" + node.op + "' in '" + ss.op + "' block", node.pos, acceptScopeStartOps.indexOf(ss.op) >= 0);
        signature.push([[ss.pos, node.pos, scope.length], s]);
    }
    function logscope() {
        console.dir(scope, { depth: null, maxArrayLength: null });
    }
    function typeEqual(a, b) {
        var _a, _b;
        if (a.type == "any") {
            return b;
        }
        if (b.type == "any") {
            return a;
        }
        if (a.type != b.type) {
            return false;
        }
        if (a.type == b.type) {
            if (a.type == "arr") {
                if (typeEqual(a.element, b.element)) {
                    return a;
                }
                if (b.element) {
                    return b;
                }
                if (a.element) {
                    return a;
                }
            }
            if (a.type == "obj") {
                var x;
                var y;
                if (Object.keys(a.fields).length > Object.keys(b.fields).length) {
                    _a = [b, a], x = _a[0], y = _a[1];
                }
                else {
                    _b = [a, b], x = _b[0], y = _b[1];
                }
                for (var k in x.fields) {
                    if (!typeEqual(x.fields[k], y.fields[k])) {
                        return false;
                    }
                }
                return y;
            }
            return a;
        }
        return false;
    }
    function typeassert(who, want, got, pos) {
        var t = gettype(got);
        assert("[Type] Undeclared variable '" + got[1] + "'", pos, t);
        var ok = false;
        var ut = [];
        for (var i = 0; i < want.length; i++) {
            ut.push("(" + printType(want[i]) + ")");
            if (typeEqual(want[i], t)) {
                ok = true;
                break;
            }
        }
        assert("[Type] " + who + " expecting " + ut.join("|") + ", found '" + got[1] + "' : " + printType(t), pos, ok);
    }
    for (var i = 0; i < asc.length; i++) {
        var a = asc[i];
        // console.log(',,,,,,,',a)
        if (a.op == "var") {
            // console.log(a)
            for (var j = 0; j < a.count; j++) {
                if (j >= a.names.length) {
                    strayvar.push(inittype(a.type));
                    continue;
                }
                assert("[Type] Variable '" + a.names[j] + "' redeclared in the same scope", a.pos, !checkscopethis(a.names[j], a.pos));
                scope[scope.length - 1][a.names[j]] = inittype(a.type);
                if (a.type == "fun") {
                    funstack.push(a.names[j]);
                    funretcnt.push(0);
                }
                else if (a.type == "obj") {
                    prevobj = a.names[j];
                }
            }
        }
        else if (a.op == "print") {
            //pass
        }
        else if (a.op == "fun") {
            var ptr_2 = scope[scope.length - 1][funstack[funstack.length - 1]];
            for (var j = 0; j < a.arity; j++) {
                ptr_2.in = inittype(a.args[j].type);
                if (a.args[j].type == "obj") {
                    ptr_2.in.isarg = true;
                }
                ptr_2.in.name = a.args[j].name;
                if (j != a.arity - 1) {
                    ptr_2.out = inittype("fun");
                    ptr_2 = ptr_2.out;
                }
            }
        }
        else if (a.op == "funbody") {
            if (asc[i - 1].op != "fun") {
                var ptr_3 = scope[scope.length - 1][funstack[funstack.length - 1]];
                ptr_3.in = inittype("nil");
            }
            scopepush(a);
        }
        else if (a.op == "funend") {
            var f = funstack.pop();
            var n = funretcnt.pop();
            scopepop(a, "funbody");
            if (n == 0) {
                var ptr = scope[scope.length - 1][f];
                while (ptr.out.type == "fun") {
                    ptr = ptr.out;
                }
                ptr.out = inittype("nil");
            }
        }
        else if (a.op == "objend") {
            //pass
        }
        else if (a.op == "objbody") {
            //pass
        }
        else if (a.op == "prop") {
            scope[scope.length - 1][prevobj].fields[a.name.slice(1, -1)] = inittype(a.type);
        }
        else if (a.op == "end") {
            scopepop(a, "if", "else", "for", "whiletrue", "whilen");
        }
        else if (a.op == "if") {
            if (a.elseif) {
                scopepop(a, "if");
            }
            scopepush(a);
        }
        else if (a.op == "else") {
            scopepop(a, "if");
            scopepush(a);
        }
        else if (a.op == "return") {
            funretcnt[funretcnt.length - 1]++;
            var ptr_4 = void 0;
            for (var j = 1; j < scope.length; j++) {
                ptr_4 = scope[scope.length - 1 - j][funstack[funstack.length - 1]];
                if (ptr_4) {
                    break;
                }
            }
            while (ptr_4.out.type == "fun") {
                ptr_4 = ptr_4.out;
            }
            if (a.value == undefined) {
                ptr_4.out = inittype("nil");
            }
            else {
                var ty = gettype(a.value);
                // console.log(strayvar)
                // console.log(funstack[funstack.length-1],ty,ptr)
                if (ptr_4.out.type == "any" || ptr_4.out.type == "nil") {
                    ptr_4.out = Object.assign({}, ty);
                    delete ptr_4.out.name;
                }
                else {
                    // console.log(ptr.out.type,ty.type)
                    typeassert("Function return", [ptr_4.out], a.value, a.pos);
                    ptr_4.out = typeEqual(ptr_4.out, gettype(a.value));
                }
            }
        }
        else if (types_1.isASCNodeOperator(a)) {
            var op = a.op.slice(2);
            var otype = void 0;
            if (op == "+") {
                typeassert(op + " operator", [inittype("num"), inittype("str")], a.lhs, a.pos);
                typeassert(op + " operator", [inittype("num"), inittype("str")], a.rhs, a.pos);
                otype = Object.assign({}, typeEqual(gettype(a.lhs), gettype(a.rhs)));
            }
            else if (["-", "*", "/", "%"].includes(op)) {
                typeassert(op + " operator", [inittype("num")], a.lhs, a.pos);
                typeassert(op + " operator", [inittype("num")], a.rhs, a.pos);
                otype = inittype("num");
            }
            else if (["||", "&&"].includes(op)) {
                typeassert(op + " operator", [inittype("bol")], a.lhs, a.pos);
                typeassert(op + " operator", [inittype("bol")], a.rhs, a.pos);
                otype = inittype("bol");
            }
            strayvar.push(otype);
            // console.log(strayvar)
        }
        else if (a.op == "name") {
            for (var j = a.names.length - 1; j >= 0; j--) {
                scope[scope.length - 1][a.names[j]] = strayvar.pop();
            }
        }
        else if (a.op == "call") {
            var ty = gettype(a.fun);
            if (ty == undefined) {
                // damn hoisting
                strayvar.push(inittype("any"));
            }
            else {
                typeassert("Call function", [inittype("fun")], a.fun, a.pos);
                var args = [];
                if (a.args) {
                    args = a.args.slice();
                }
                if (a.pop) {
                    for (var j = 0; j < took; j++) {
                        args.unshift(strayvar.pop());
                    }
                }
                var ptr_5 = ty;
                for (var j = 0; j < args.length; j++) {
                    if (ptr_5.type == "any") {
                        ptr_5 = inittype("fun");
                    }
                    var ta = ptr_5.in;
                    if (a.pop) {
                        assert("Function argument expecting " + printType(ta) + ", found " + printType(args[j]), a.pos, typeEqual(args[j], ta));
                    }
                    else {
                        typeassert("Function argument", [ta], args[j], a.pos);
                    }
                    ptr_5 = ptr_5.out;
                }
                if (args.length == 0 && ptr_5.type == "fun") {
                    ptr_5 = ptr_5.out;
                }
                strayvar.push(Object.assign({}, ptr_5));
            }
        }
        else if (a.op == "subscript") {
            // typeassert(`Subscript operator LHS`,[inittype('arr'),inittype('obj')],a.container,a.pos)
            if (a.value[0] == "ctnr" && a.value[1] == "rest") {
                typeassert("Subscript operator LHS", [inittype("arr"), inittype("str")], a.container, a.pos);
                var ty = gettype(a.container);
                strayvar.push(Object.assign({}, ty));
            }
            else {
                typeassert("Subscript operator RHS", [inittype("num"), inittype("str")], a.value, a.pos);
                if (gettype(a.value).type == "str") {
                    typeassert("Subscript operator LHS", [inittype("obj")], a.container, a.pos);
                    var ty = gettype(a.container);
                    if (ty.type == "any") {
                        ty.type = "obj";
                        ty.fields = {};
                        ty.fields[a.value[1].slice(1, -1)] = inittype("any");
                        ty.isarg = true;
                    }
                    assert("[Type] Property " + a.value[1] + " does not exist in obj " + printType(ty), a.pos, objfield(ty, a.value[1].slice(1, -1)));
                    strayvar.push(Object.assign({}, ty.fields[a.value[1].slice(1, -1)]));
                }
                else {
                    typeassert("Subscript operator LHS", [inittype("arr"), inittype("str")], a.container, a.pos);
                    var ty = gettype(a.container);
                    if (ty.type == "str") {
                        strayvar.push(inittype("str"));
                    }
                    else {
                        if (ty.type == "any") {
                            // ty = inittype('arr')
                            ty.type = "arr";
                            ty.element = { type: "any" };
                            // console.log(gettype(a.container))
                            // console.log(ty)
                            // process.exit()
                            // strayvar.push(inittype('any'))
                        }
                        strayvar.push(Object.assign({}, ty.element));
                    }
                }
            }
        }
        else if (a.op == "cat") {
            typeassert("Concat", [inittype("arr")], a.containers[0], a.pos);
            var typ = gettype(a.containers[0]);
            var olt = typ;
            for (var j = 1; j < a.containers.length; j++) {
                typ = typeEqual(typ, gettype(a.containers[j]));
                if (!typ) {
                    typeassert("Concat", [olt], a.containers[j], a.pos);
                }
                olt = typ;
            }
            strayvar.push(Object.assign({}, typ));
        }
        else if (a.op == "push") {
            typeassert("Push LHS", [inittype("arr")], a.container, a.pos);
            var typy = gettype(a.container);
            var typ = typy.element;
            if ((typy.type = "any")) {
                typ = inittype("any");
            }
            var olt = typ;
            for (var j = 0; j < a.values.length; j++) {
                // console.log(a.values[j],gettype(a.values[j]))
                typ = typeEqual(typ, gettype(a.values[j]));
                if (!typ) {
                    typeassert("Push RHS", [olt], a.values[j], a.pos);
                }
                olt = typ;
            }
            gettype(a.container).element = Object.assign({}, typ);
        }
        else if (a.op == "for") {
            scopepush(a);
            typeassert("For-each LHS", [inittype("arr")], a.container, a.pos);
            scope[scope.length - 1][a.iterator] =
                gettype(a.container).element || inittype("any");
        }
        else if (a.op == "whiletrue") {
            scopepush(a);
        }
        else if (a.op == "whilen") {
            scopepush(a);
        }
        else if (a.op == "break") {
            //pass
        }
        else if (a.op == "continue") {
            //pass
        }
        else if (a.op == "not") {
            strayvar.push(inittype("bol"));
        }
        else if (a.op == "reassign") {
            var tl = gettype(a.lhs);
            var tlv = tl;
            if (a.lhssubs) {
                var tls = gettype(a.lhssubs);
                typeassert("Reassignment LHS subscript", [inittype("str"), inittype("num")], a.lhssubs, a.pos);
                if (tls.type == "str") {
                    typeassert("Reassignment LHS container", [inittype("obj")], a.lhs, a.pos);
                    if (tl.type == "any") {
                        tlv = inittype("any");
                    }
                    else {
                        tlv = objfield(tl, a.lhssubs[1].slice(1, -1));
                    }
                }
                else {
                    typeassert("Reassignment LHS container", [inittype("arr")], a.lhs, a.pos);
                    if (tl.type == "any") {
                        tlv = inittype("any");
                    }
                    else {
                        tlv = tl.element;
                    }
                }
            }
            if (a.del) {
            }
            else {
                var tr = gettype(a.rhs);
                var trv = tr;
                if (a.rhssubs) {
                    var trs = gettype(a.rhssubs);
                    typeassert("Reassignment RHS subscript", [inittype("str"), inittype("num")], a.rhssubs, a.pos);
                    if (trs.type == "str") {
                        typeassert("Reassignment RHS container", [inittype("obj")], a.rhs, a.pos);
                        if (tr.type == "any") {
                            trv = inittype("any");
                        }
                        else {
                            trv = objfield(tr, a.rhssubs[1].slice(1, -1));
                        }
                    }
                    else {
                        typeassert("Reassignment RHS container", [inittype("arr")], a.rhs, a.pos);
                        if (tr.type == "any") {
                            trv = inittype("any");
                        }
                        else {
                            trv = tr.element;
                        }
                    }
                }
                assert("[Type] Reassignment LHS is not declared", a.pos, tlv);
                assert("[Type] Reassignment RHS is not declared", a.pos, trv);
                // console.log(a,tlv,trv,tl,tr)
                var typ = typeEqual(tlv, trv);
                // console.log(a.lhs,a.rhs,gettype(a.rhs),tl,tr,tlv,trv)
                assert("[Type] Reassignment type mismatch: LHS:" + printType(tlv) + " RHS:" + printType(trv), a.pos, typ);
            }
        }
        else if (a.op == "length") {
            typeassert("Length operator", [inittype("arr"), inittype("str")], a.container, a.pos);
            strayvar.push(inittype("num"));
        }
        else if (a.op == "temp") {
            strayvar.push(gettype(a.iden));
        }
        else if (a.op == "discard") {
            strayvar = [];
        }
        else if (a.op == "take") {
            took = a.count;
        }
        else if (a.op == "import") {
            imported = imported.concat(a.iden);
        }
        else if (a.op == "try") {
            scopepush(a);
        }
        else if (a.op == "catch") {
            scopepop(a, "try");
            scopepush(a);
        }
        else if (a.op == "catcherr") {
            scopepop(a, "catch", "catcherr");
            scopepush(a);
            if (a.name != undefined) {
                var x = inittype("any");
                x.fields = {
                    名: inittype("str"),
                    文: inittype("str"),
                    蹤: inittype("str")
                };
                scope[scope.length - 1][a.name] = x;
            }
        }
        else if (a.op == "tryend") {
            scopepop(a, "catch", "catcherr");
        }
        else if (a.op == "throw") {
        }
        else if (a.op == "comment") {
            //pass
        }
        else {
        }
    }
    if (a) {
        scopepop({ pos: a.pos, op: "EOF" }, "global");
    }
    // console.log(scope.length)
    // console.dir(signature,{maxArrayLength:null,depth:null})
    // console.log(printSignature(signature))
    // process.exit()
    return signature;
}
exports.typecheck = typecheck;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function isASCNodeOperator(node) {
    return node.op.startsWith("op");
}
exports.isASCNodeOperator = isASCNodeOperator;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var js_1 = __importDefault(__webpack_require__(35));
var py_1 = __importDefault(__webpack_require__(36));
var rb_1 = __importDefault(__webpack_require__(37));
var transpilers = {
    js: js_1.default,
    py: py_1.default,
    rb: rb_1.default
};
exports.default = transpilers;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = __webpack_require__(2);
var JSCompiler = /** @class */ (function (_super) {
    __extends(JSCompiler, _super);
    function JSCompiler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JSCompiler.prototype.moduleWrapper = function (_b) {
        var src = _b.src, scopeName = _b.scopeName, markerStart = _b.markerStart, markerEnd = _b.markerEnd;
        return markerStart + " var " + scopeName + " = new function(){ " + src + " };" + markerEnd;
    };
    JSCompiler.prototype.transpile = function (options) {
        if (options === void 0) { options = {}; }
        var imports = options.imports || [];
        var js = ""; //'"use strict";'; (strict mode currently broken)
        var prevfun = "";
        var prevfunpublic = false;
        var prevobj = "";
        var prevobjpublic = false;
        var previsfun = false;
        var curlvl = 0;
        var strayvar = [];
        var took = 0;
        var errcurlvls = [];
        function getval(x) {
            if (x === undefined) {
                return "";
            }
            if (x[0] == "ans") {
                var ans = strayvar[strayvar.length - 1];
                strayvar = [];
                return ans;
            }
            return x[1];
        }
        for (var _i = 0, _b = this.asc; _i < _b.length; _i++) {
            var a = _b[_i];
            if (a.op == "var") {
                for (var j = 0; j < a.count; j++) {
                    if (a.values[j] === undefined) {
                        a.values[j] = [];
                    }
                    var name_1 = a.names[j];
                    var value = a.values[j][1];
                    if (name_1 === undefined) {
                        name_1 = this.nextTmpVar();
                        strayvar.push(name_1);
                    }
                    if (value === undefined) {
                        if (a.type == "arr") {
                            value = "[]";
                        }
                        else if (a.type == "num") {
                            value = "0";
                        }
                        else if (a.type == "str") {
                            value = "\"\"";
                        }
                        else if (a.type == "bol") {
                            value = "false";
                        }
                        else if (a.type == "fun") {
                            value = "_=>{}";
                            prevfun = name_1;
                            prevfunpublic = a.public;
                        }
                        else if (a.type == "obj") {
                            value = "{}";
                            prevobj = name_1;
                            prevobjpublic = a.public;
                        }
                        else if (a.type == "any") {
                            value = "void 0";
                        }
                    }
                    js += "var " + name_1 + "=" + (a.public ? "this." + name_1 + "=" : "") + value + ";";
                }
            }
            else if (a.op == "print") {
                js += "console.log(" + strayvar.join(",") + ");";
                strayvar = [];
            }
            else if (a.op == "fun") {
                js += prevfun + "=" + (prevfunpublic ? "this." + prevfun + "=" : "") + (a.args.length == 0
                    ? "()=>"
                    : a.args.map(function (arg) { return arg.name + "=>"; }).join("")) + "{";
                curlvl++;
            }
            else if (a.op == "funbody") {
                if (!previsfun) {
                    js += prevfun + "=" + (prevfunpublic ? "this." + prevfun + "=" : "") + "()=>{";
                    curlvl++;
                }
            }
            else if (a.op == "funend") {
                js += "};";
                curlvl--;
            }
            else if (a.op == "objend") {
                js += "};";
                curlvl--;
            }
            else if (a.op == "objbody") {
                js += "" + (prevobjpublic ? prevobj + " = this." : "") + prevobj + "={";
                curlvl++;
            }
            else if (a.op == "prop") {
                js += a.name + ":" + a.value[1] + ",";
            }
            else if (a.op == "end") {
                js += "};";
                curlvl--;
            }
            else if (a.op == "if") {
                if (a.elseif) {
                    js += "}else ";
                    curlvl--;
                }
                js += "if (";
                if (a.not) {
                    js += "!(";
                }
                var j = 0;
                while (j < a.test.length) {
                    if (a.test[j][0] == "cmp") {
                        js += a.test[j][1];
                    }
                    else if (a.test[j][0] == "ctnr") {
                        if (a.test[j][1] == "subs") {
                            if (a.test[j + 1][1] == "rest") {
                                js += ".slice(1)";
                            }
                            else {
                                if (a.test[j + 1][0] == "lit") {
                                    js += "[" + a.test[j + 1][1] + "]";
                                }
                                else {
                                    js += "[" + a.test[j + 1][1] + "-1]";
                                }
                            }
                            j++;
                        }
                        else if (a.test[j][1] == "len") {
                            js += ".length";
                        }
                    }
                    else {
                        js += getval(a.test[j]);
                    }
                    j++;
                }
                if (a.not) {
                    js += ")";
                }
                js += "){";
                curlvl++;
            }
            else if (a.op == "else") {
                js += "}else{";
            }
            else if (a.op == "return") {
                js += "return " + getval(a.value) + ";";
            }
            else if (a.op.startsWith("op")) {
                var _a = a;
                var lhs = getval(_a.lhs);
                var rhs = getval(_a.rhs);
                var vname = this.nextTmpVar();
                js += "const " + vname + "=" + lhs + a.op.slice(2) + rhs + ";";
                strayvar.push(vname);
            }
            else if (a.op == "name") {
                for (var j = 0; j < a.names.length; j++) {
                    js += "var " + a.names[j] + "=" + strayvar[strayvar.length - a.names.length + j] + ";";
                }
                strayvar = strayvar.slice(0, strayvar.length - a.names.length);
            }
            else if (a.op == "call") {
                if (a.pop) {
                    var jj = "";
                    for (var j = 0; j < took; j++) {
                        jj += "(" + strayvar[strayvar.length - took + j] + ")";
                    }
                    strayvar = strayvar.slice(0, strayvar.length - took);
                    took = 0;
                    var vname = this.nextTmpVar();
                    if (!jj.length) {
                        jj = "()";
                    }
                    js += "const " + vname + "=" + getval(a.fun) + jj + ";";
                    strayvar.push(vname);
                }
                else {
                    var vname = this.nextTmpVar();
                    js += "const " + vname + "=" + getval(a.fun) + "(" + a.args
                        .map(function (x) { return getval(x); })
                        .join(")(") + ");";
                    strayvar.push(vname);
                }
            }
            else if (a.op == "subscript") {
                var idx = getval(a.value);
                if (idx == "rest") {
                    var vname = this.nextTmpVar();
                    js += "const " + vname + "=" + getval(a.container) + ".slice(1);";
                    strayvar.push(vname);
                }
                else {
                    var vname = this.nextTmpVar();
                    js += "const " + vname + "=" + getval(a.container) + "[" + idx + (a.value[0] == "lit" ? "" : "-1") + "];";
                    strayvar.push(vname);
                }
            }
            else if (a.op == "cat") {
                var vname = this.nextTmpVar();
                js += "const " + vname + "=" + getval(a.containers[0]) + ".concat(" + a.containers
                    .slice(1)
                    .map(function (x) { return x[1]; })
                    .join(").concat(") + ");";
                strayvar.push(vname);
            }
            else if (a.op == "push") {
                js += getval(a.container) + ".push(" + a.values
                    .map(function (x) { return getval(x); })
                    .join(",") + ");";
            }
            else if (a.op == "for") {
                js += "for(let " + a.iterator + " of " + getval(a.container) + "){";
                curlvl++;
            }
            else if (a.op == "whiletrue") {
                js += "while(true){";
                curlvl++;
            }
            else if (a.op == "whilen") {
                var v = this.randVar();
                js += "for(let " + v + "=0;" + v + "<" + getval(a.value) + ";" + v + "++){";
                curlvl++;
            }
            else if (a.op == "break") {
                js += "break;";
            }
            else if (a.op == "continue") {
                js += "continue;";
            }
            else if (a.op == "not") {
                var v = getval(a.value);
                var vname = this.nextTmpVar();
                js += "const " + vname + "=!" + v + ";";
                strayvar.push(vname);
            }
            else if (a.op == "reassign") {
                if (a.del == true) {
                    var lhs = getval(a.lhs);
                    js += "delete " + lhs + "[" + a.lhssubs[1] + (a.lhssubs[0] == "lit" ? "" : "-1") + "];";
                }
                else {
                    var rhs = getval(a.rhs);
                    var lhs = getval(a.lhs);
                    if (a.lhssubs) {
                        lhs += "[" + a.lhssubs[1] + (a.lhssubs[0] == "lit" ? "" : "-1") + "]";
                    }
                    if (a.rhssubs) {
                        rhs += "[" + a.rhssubs[1] + (a.rhssubs[0] == "lit" ? "" : "-1") + "]";
                    }
                    js += lhs + "=" + rhs + ";";
                }
            }
            else if (a.op == "length") {
                var vname = this.nextTmpVar();
                js += "const " + vname + "=" + getval(a.container) + ".length;";
                strayvar.push(vname);
            }
            else if (a.op == "temp") {
                var vname = this.nextTmpVar();
                js += "const " + vname + "=" + a.iden[1] + ";";
                strayvar.push(vname);
            }
            else if (a.op == "discard") {
                strayvar = [];
            }
            else if (a.op == "take") {
                took = a.count;
            }
            else if (a.op == "import") {
                var f = a.file.replace(/"/g, "");
                for (var _c = 0, _d = a.iden; _c < _d.length; _c++) {
                    var id = _d[_c];
                    js += "var " + id + "=" + f + "." + id + ";";
                }
                imports.push(f);
            }
            else if (a.op == "try") {
                js += "try{";
                curlvl++;
            }
            else if (a.op == "catch") {
                var r = this.randVar();
                errcurlvls.push([curlvl, r]);
                js += "}catch(" + r + "){";
                js += r + "['\u540D']=({'SyntaxError':'\u6587\u6CD5','RangeError':'\u903E\u754C','TypeError':'\u7570\u985E','ReferenceError':'\u865B\u6307'}[" + r + ".name])||" + r + ".name;";
                js += r + "['\u6587']=" + r + ".message; " + r + "['\u8E64']=" + r + ".stack;";
                strayvar = [];
            }
            else if (a.op == "catcherr") {
                var ec = errcurlvls[errcurlvls.length - 1];
                if (a.error === undefined) {
                    if (curlvl != ec[0]) {
                        js += "}else{";
                    }
                }
                else {
                    if (curlvl != ec[0]) {
                        js += "}else ";
                        curlvl--;
                    }
                    js += "if (" + ec[1] + ".name===" + a.error[1] + "||" + ec[1] + "['\u540D']===" + a.error[1] + "){";
                    curlvl++;
                }
                if (a.name != undefined) {
                    js += "const " + a.name + "=" + ec[1] + ";";
                }
            }
            else if (a.op == "tryend") {
                var ec = errcurlvls.pop();
                if (curlvl != ec[0]) {
                    js += "}";
                    curlvl--;
                }
                js += "}";
                curlvl--;
                strayvar = [];
            }
            else if (a.op == "throw") {
                var r = this.randVar();
                js += "{const " + r + " = new Error(); " + r + ".name=" + a.error[1] + "; " + r + ".message=" + (a.message ? getval(a.message) : '""') + "; throw " + r + ";}";
            }
            else if (a.op == "comment") {
                js += "/*" + getval(a.value) + "*/";
            }
            else {
                console.log(a.op);
            }
            previsfun = a.op == "fun";
        }
        return { result: js, imports: imports };
    };
    return JSCompiler;
}(base_1.BaseTranspiler));
exports.default = JSCompiler;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = __webpack_require__(2);
var PythonTranspiler = /** @class */ (function (_super) {
    __extends(PythonTranspiler, _super);
    function PythonTranspiler() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lib = "# -*- coding: utf-8 -*-\nclass Ctnr:\n  def __init__(self):self.dict = dict();self.length = 0;self.it = -1;\n  def push(self,*args):\n    for arg in args:\n      self.dict[str(self.length)]=arg; self.length+=1\n  def __getitem__(self,i):\n    try: return self.dict[str(i)]\n    except: return None\n  def __setitem__(self,i,x):\n    self.dict[str(i)]=x\n    inti = None\n    try:\n      inti = int(i)\n      if (abs(inti - float(i))>0.0001): inti=None\n    except: pass\n    if (inti != None):\n      self.length=inti+1\n      for j in range(0,self.length):\n        try:  self.dict[str(j)]\n        except: self.dict[str(j)]=None\n  def slice(self,i):\n    ret = Ctnr();\n    for i in range(i,self.length): ret.push(self[i])\n    return ret\n  def concat(self,other):\n    ret = Ctnr();\n    for i in range(0,self.length): ret.push(self[i])\n    for i in range(0,other.length): ret.push(other[i])\n    return ret\n  def __str__(self):\n    if (len(self.dict.keys())==self.length):\n      ret = \"[\"\n      for k in range(0,self.length):\n        v = self[k]\n        if (isinstance(v,Ctnr)): ret += v.__str__()\n        else: ret += str(v)\n        ret+=\",\"\n      ret += \"]\"\n      return ret;\n    else:\n      ret = \"{\"\n      for k in self.dict.keys():\n        ret += str(k)+\":\"\n        v = self.dict[k]\n        if (isinstance(v,Ctnr)): ret += v.__str__()\n        else: ret += str(v)\n        ret+=\",\"\n      ret += \"}\"\n      return ret;\n  def __repr__(self):\n    return self.__str__()\n  def __iter__(self):\n    self.it = -1;\n    return self\n  def __next__(self):\n    self.it += 1\n    if (self.it >= self.length): raise StopIteration()\n    return self[self.it]\nglobals()['Ctnr']=Ctnr;\nclass JSON:\n  @staticmethod\n  def stringify(x):\n    return x;\n#####\n";
        return _this;
    }
    PythonTranspiler.prototype.moduleWrapper = function (_b) {
        var src = _b.src, markerStart = _b.markerStart, markerEnd = _b.markerEnd;
        return "#" + markerStart + "\n" + src + "\n#" + markerEnd + "\n";
    };
    PythonTranspiler.prototype.transpile = function (options) {
        if (options === void 0) { options = {}; }
        var imports = options.imports || [];
        var lop = {
            "||": " or ",
            "&&": " and "
        };
        var py = this.lib;
        var prevfun = "";
        var prevobj = "";
        var prevobjpublic = false;
        var curlvl = 0;
        var strayvar = [];
        var funcurlvls = [];
        var funcurnames = [];
        var took = 0;
        var globals = [];
        var locals = [];
        var funargs = [];
        var getval = function (x) {
            if (x === undefined) {
                return "";
            }
            if (x[0] == "ans") {
                var ans = strayvar[strayvar.length - 1];
                strayvar = [];
                return ans;
            }
            if (x[1] === undefined) {
                return undefined;
            }
            if (x[1].toString() == "true") {
                return "True";
            }
            if (x[1].toString() == "false") {
                return "False";
            }
            return x[1];
        };
        for (var i = 0; i < this.asc.length; i++) {
            var a = this.asc[i];
            if (a.op == "var") {
                for (var j = 0; j < a.count; j++) {
                    if (a.values[j] === undefined) {
                        a.values[j] = [];
                    }
                    var name = a.names[j];
                    var value = getval(a.values[j]);
                    if (name === undefined) {
                        name = this.nextTmpVar();
                        strayvar.push(name);
                    }
                    if (value === undefined) {
                        if (a.type == "arr") {
                            value = "Ctnr()";
                        }
                        else if (a.type == "num") {
                            value = "0";
                        }
                        else if (a.type == "str") {
                            value = "\"\"";
                        }
                        else if (a.type == "bol") {
                            value = "False";
                        }
                        else if (a.type == "fun") {
                            value = "lambda _:0";
                            prevfun = name;
                        }
                        else if (a.type == "obj") {
                            value = "{}";
                            prevobj = name;
                            prevobjpublic = a.public;
                        }
                    }
                    py += "\t".repeat(curlvl);
                    py += name + "=" + value + "\n";
                    if (name[0] != "_") {
                        if (curlvl == 0) {
                            globals.push(name);
                        }
                        else {
                            if (!locals.length) {
                                locals.push([]);
                            }
                            locals[locals.length - 1].push(name);
                        }
                    }
                }
            }
            else if (a.op == "print") {
                py += "\t".repeat(curlvl);
                py += "print(";
                for (var j = 0; j < strayvar.length; j++) {
                    py += "" + strayvar[j];
                    if (j != strayvar.length - 1) {
                        py += ",";
                    }
                }
                py += ");\n";
                strayvar = [];
            }
            else if (a.op == "fun") {
                funcurlvls.push(curlvl);
                py += "\t".repeat(curlvl);
                py += "def " + prevfun + " (";
                for (var j = 0; j < a.arity; j++) {
                    curlvl++;
                    py += a.args[j].name + "):\n";
                    funargs.push(a.args[j].name);
                    if (j != a.arity - 1) {
                        py += "\t".repeat(curlvl);
                        var r = this.randVar();
                        py += "def " + r + "(";
                        funcurnames.push(r);
                    }
                }
                for (var j = 0; j < a.arity - 1; j++) {
                    py += "\t".repeat(curlvl);
                    py += "nonlocal " + a.args[j].name + ";\n";
                }
            }
            else if (a.op == "funbody") {
                if (this.asc[i - 1].op != "fun") {
                    funcurlvls.push(curlvl);
                    py += "\t".repeat(curlvl);
                    py += "def " + prevfun + "():\n";
                    curlvl++;
                }
                // py += "):\n";
                for (var j = 0; j < globals.length; j++) {
                    if (funargs.includes(globals[j])) {
                        continue;
                    }
                    py += "\t".repeat(curlvl);
                    py += "global " + globals[j] + ";\n";
                }
                if (locals.length) {
                    for (var j = 0; j < locals[locals.length - 1].length; j++) {
                        py += "\t".repeat(curlvl);
                        py += "nonlocal " + locals[locals.length - 1][j] + ";\n";
                    }
                }
                locals.push([]);
                funargs = [];
            }
            else if (a.op == "funend") {
                var cl = funcurlvls.pop();
                var n = curlvl - cl - 1;
                for (var j = 0; j < n; j++) {
                    curlvl--;
                    py += "\t".repeat(curlvl);
                    py += "return " + funcurnames.pop() + ";\n";
                }
                locals.pop();
                py += "\n";
                curlvl--;
            }
            else if (a.op == "objend") {
                py += "};\n";
            }
            else if (a.op == "objbody") {
                py += "\t".repeat(curlvl);
                py += "" + (prevobjpublic ? prevobj + " = this." : "") + prevobj + "={";
            }
            else if (a.op == "prop") {
                py += a.name + ":" + a.value[1] + ",";
            }
            else if (a.op == "end") {
                py += "\n";
                curlvl--;
            }
            else if (a.op == "if") {
                py += "\n";
                py += "\t".repeat(curlvl);
                py += "if ";
                var j = 0;
                while (j < a.test.length) {
                    if (a.test[j][0] == "cmp") {
                        py += a.test[j][1];
                    }
                    else if (a.test[j][0] == "ctnr") {
                        if (a.test[j][1] == "subs") {
                            if (a.test[j + 1][1] == "rest") {
                                py += ".slice(1)";
                            }
                            else {
                                if (a.test[j + 1][0] == "lit") {
                                    py += "[" + a.test[j + 1][1] + "]";
                                }
                                else {
                                    py += "[" + a.test[j + 1][1] + "-1]";
                                }
                            }
                            j++;
                        }
                        else if (a.test[j][1] == "len") {
                            py += ".length";
                        }
                    }
                    else {
                        py += getval(a.test[j]);
                    }
                    j++;
                }
                py += ":\n";
                curlvl++;
            }
            else if (a.op == "else") {
                py += "\n";
                py += "\t".repeat(curlvl - 1);
                py += "else:\n";
            }
            else if (a.op == "return") {
                py += "\t".repeat(curlvl);
                py += "return " + getval(a.value) + "\n";
            }
            else if (a.op.startsWith("op")) {
                var _a = a;
                py += "\t".repeat(curlvl);
                var lhs = getval(_a.lhs);
                var rhs = getval(_a.rhs);
                var vname = this.nextTmpVar();
                py += vname + "=" + lhs + (lop[a.op.slice(2)] ? lop[a.op.slice(2)] : a.op.slice(2)) + rhs + ";\n";
                strayvar.push(vname);
            }
            else if (a.op == "name") {
                for (var j = 0; j < a.names.length; j++) {
                    py += "\n";
                    py += "\t".repeat(curlvl);
                    py += a.names[j] + "=" + strayvar[strayvar.length - a.names.length + j] + ";\n";
                }
                strayvar = strayvar.slice(0, strayvar.length - a.names.length);
            }
            else if (a.op == "call") {
                py += "\t".repeat(curlvl);
                if (a.pop) {
                    var jj = "";
                    for (var j = 0; j < took; j++) {
                        jj += "(" + strayvar[strayvar.length - took + j] + ")";
                    }
                    strayvar = strayvar.slice(0, strayvar.length - took);
                    took = 0;
                    var vname = this.nextTmpVar();
                    if (!jj.length) {
                        jj = "()";
                    }
                    py += vname + "=" + getval(a.fun) + jj + ";\n";
                    strayvar.push(vname);
                }
                else {
                    var vname = this.nextTmpVar();
                    py += vname + "=" + getval(a.fun) + "(" + a.args
                        .map(function (x) { return getval(x); })
                        .join(")(") + ");\n";
                    strayvar.push(vname);
                }
            }
            else if (a.op == "subscript") {
                var idx = getval(a.value);
                var vname = this.nextTmpVar();
                py += "\t".repeat(curlvl);
                if (idx == "rest") {
                    py += vname + "=" + getval(a.container) + ".slice(1);\n";
                }
                else {
                    py += vname + "=" + getval(a.container) + "[" + idx + (a.value[0] == "lit" ? "" : "-1") + "];\n";
                }
                strayvar.push(vname);
            }
            else if (a.op == "cat") {
                var vname = this.nextTmpVar();
                py += "\t".repeat(curlvl);
                py +=
                    vname + "=" + getval(a.containers[0]) + ".concat(" +
                        a.containers
                            .slice(1)
                            .map(function (x) { return x[1]; })
                            .join(").concat(") +
                        ");\n";
                strayvar.push(vname);
            }
            else if (a.op == "push") {
                py += "\t".repeat(curlvl);
                py += getval(a.container) + ".push(" + a.values
                    .map(function (x) { return getval(x); })
                    .join(",") + ")\n";
            }
            else if (a.op == "for") {
                py += "\t".repeat(curlvl);
                py += "for " + a.iterator + " in " + getval(a.container) + ":\n";
                curlvl++;
            }
            else if (a.op == "whiletrue") {
                py += "\t".repeat(curlvl);
                py += "while (True):\n";
                curlvl++;
            }
            else if (a.op == "whilen") {
                py += "\t".repeat(curlvl);
                var v_1 = this.randVar();
                py += "for " + v_1 + " in range(" + getval(a.value) + "):\n";
                curlvl++;
            }
            else if (a.op == "break") {
                py += "\t".repeat(curlvl);
                py += "break\n";
            }
            else if (a.op == "not") {
                py += "\t".repeat(curlvl);
                var v = getval(a.value);
                var vname = this.nextTmpVar();
                py += vname + "=not " + v + ";";
                strayvar.push(vname);
            }
            else if (a.op == "reassign") {
                py += "\n";
                py += "\t".repeat(curlvl);
                if (a.del == true) {
                    var lhs = getval(a.lhs);
                    py += "del " + lhs + "[" + a.lhssubs[1] + (a.lhssubs[0] == "lit" ? "" : "-1") + "];\n";
                }
                else {
                    var rhs = getval(a.rhs);
                    var lhs = getval(a.lhs);
                    if (a.lhssubs) {
                        lhs += "[" + a.lhssubs[1] + (a.lhssubs[0] == "lit" ? "" : "-1") + "]";
                    }
                    if (a.rhssubs) {
                        rhs += "[" + a.rhssubs[1] + (a.rhssubs[0] == "lit" ? "" : "-1") + "]";
                    }
                    py += lhs + "=" + rhs + ";\n";
                }
            }
            else if (a.op == "temp") {
                py += "\t".repeat(curlvl);
                var vname = this.nextTmpVar();
                py += vname + "=" + a.iden[1] + ";\n";
                strayvar.push(vname);
            }
            else if (a.op == "discard") {
                strayvar = [];
            }
            else if (a.op == "take") {
                took = a.count;
            }
            else if (a.op == "import") {
                var f = a.file.replace(/"/g, "");
                for (var j = 0; j < a.iden.length; j++) {
                    py += a.iden[j] + "=" + a.iden[j] + ";";
                }
                imports.push(f);
            }
            else if (a.op == "length") {
                py += "\t".repeat(curlvl);
                var vname = this.nextTmpVar();
                var val = getval(a.container);
                py += vname + "=" + val + ".length if type(" + val + ") != str else len(" + val + ");";
                strayvar.push(vname);
            }
            else if (a.op == "comment") {
                py += "\t".repeat(curlvl);
                py += "\"\"\" " + getval(a.value) + " \"\"\"\n";
            }
            else {
                console.log(a.op);
            }
            // py+="\n"
        }
        return { result: py, imports: imports };
    };
    return PythonTranspiler;
}(base_1.BaseTranspiler));
exports.default = PythonTranspiler;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = __webpack_require__(2);
var RubyCompiler = /** @class */ (function (_super) {
    __extends(RubyCompiler, _super);
    function RubyCompiler() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lib = "# encoding: UTF-8\nrequire 'forwardable'\nclass Ctnr\n  extend Forwardable\n  attr_accessor :dict, :length, :it\n  def initialize()\n    @dict = {}\n    @length = 0\n    @it = -1\n  end\n  def push(*args)\n    args.each do |arg|\n      @dict[@length.to_s] = arg\n      @length += 1\n    end\n  end\n  def [](i)\n    @dict[i.to_s]\n  end\n  def []=(i,x)\n    @dict[i.to_s] = x\n  end\n  def slice(i)\n    result = Ctnr.new;\n    i.times {|index| result.push(self[index])}\n    return result\n  end\n  def concat(other)\n    other.length.times {|i| push(other[i]) }\n    self\n  end\n  def values\n    @dict.values\n  end\n  def to_s\n    \"[#{@dict.values.join(\", \")}]\"\n  end\n  def_delegators :values, :each\nend\nmodule Math\n  def self.random(*args)\n    rand(*args)\n  end\n  def self.floor(number)\n    number.floor\n  end\nend\n#####\n";
        return _this;
    }
    RubyCompiler.prototype.moduleWrapper = function (_b) {
        var src = _b.src, markerStart = _b.markerStart, markerEnd = _b.markerEnd;
        return "#" + markerStart + "\n" + src + "\n#" + markerEnd + "\n";
    };
    RubyCompiler.prototype.rename = function (name) {
        return name && "" + name.toLowerCase();
    };
    RubyCompiler.prototype.lowerAllPinYinAndMakeItGlobal = function (asc) {
        var _this = this;
        var _loop_1 = function (i) {
            var item = asc[i];
            switch (item.op) {
                case "var":
                case "name":
                    item.names = item.names.map(function (e) { return _this.rename(e); });
                    break;
                case "call":
                    if (item.fun[0] == "iden") {
                        item.fun[1] = this_1.rename(item.fun[1]);
                    }
                    item.args = item.args.map(function (arg) {
                        if (arg[0] == "iden")
                            arg[1] = _this.rename(arg[1]);
                        return arg;
                    });
                    break;
                case "fun":
                    item.args = item.args.map(function (arg) {
                        arg.name = _this.rename(arg.name);
                        return arg;
                    });
                    break;
                case "return":
                    if (item.value[0] == "iden")
                        item.value[1] = this_1.rename(item.value[1]);
                    break;
                case "cat":
                    item.containers = item.containers.map(function (e) { return _this.rename(e); });
                    break;
                case "for":
                    if (item.container[0] == "iden") {
                        item.container[1] = this_1.rename(item.container[1]);
                    }
                    item.iterator = this_1.rename(item.iterator);
                    break;
                case "push":
                case "length":
                    if (item.container[0] == "iden") {
                        item.container[1] = this_1.rename(item.container[1]);
                    }
                    break;
                case "subscript":
                    if (item.container[0] == "iden") {
                        item.container[1] = this_1.rename(item.container[1]);
                    }
                    if (item.value[0] == "iden")
                        this_1.rename(item.value[1]);
                    break;
                case "if":
                    item.test = item.test.map(function (condition) {
                        if (condition[0] == "iden")
                            condition[1] = _this.rename(condition[1]);
                        return condition;
                    });
                default:
                    break;
            }
            if (item.values) {
                item.values.forEach(function (value) {
                    if (value[0] == "iden")
                        value[1] = _this.rename(value[1]);
                });
            }
            ["rhs", "lhs", "lhssubs", "value"].forEach(function (key) {
                if (item[key] && item[key][0] == "iden")
                    item[key][1] = _this.rename(item[key][1]);
            });
        };
        var this_1 = this;
        for (var i = 0; i < asc.length; i++) {
            _loop_1(i);
        }
        return asc;
    };
    RubyCompiler.prototype.transpile = function (options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var imports = options.imports || [];
        var asc = this.asc;
        var lop = {
            "||": " or ",
            "&&": " and "
        };
        var rb = this.lib;
        var prevfun = "";
        var prevobj = "";
        var prevobjpublic = false;
        var curlvl = 0;
        var strayvar = [];
        var lambdaList = [];
        var methodIndex = 0;
        var took = 0;
        asc = this.lowerAllPinYinAndMakeItGlobal(asc);
        var getval = function (x) {
            if (!x)
                return "";
            if (x[0] == "ans") {
                var ans = strayvar[strayvar.length - 1];
                strayvar = [];
                return ans;
            }
            if (x[0] == "iden")
                return _this.rename(x[1]);
            if (x[1] === undefined)
                return "nil";
            return x[1];
        };
        for (var i = 0; i < asc.length; i++) {
            var a = asc[i];
            if (a.op == "var") {
                for (var j_1 = 0; j_1 < a.count; j_1++) {
                    if (a.values[j_1] === undefined) {
                        a.values[j_1] = [];
                    }
                    var name_1 = a.names[j_1];
                    if (a.type == "fun") {
                        prevfun = name_1;
                        continue;
                    }
                    var value = getval(a.values[j_1]);
                    if (name_1 === undefined) {
                        name_1 = this.nextTmpVar();
                        strayvar.push(name_1);
                    }
                    if ([undefined, "nil"].includes(value)) {
                        if (a.type == "arr") {
                            value = "Ctnr.new";
                        }
                        else if (a.type == "num") {
                            value = "0";
                        }
                        else if (a.type == "str") {
                            value = "\"\"";
                        }
                        else if (a.type == "bol") {
                            value = "false";
                        }
                    }
                    rb += "\t".repeat(curlvl);
                    rb += name_1 + "=" + value + "\n";
                }
            }
            else if (a.op == "print") {
                rb += "\t".repeat(curlvl);
                rb += "p([";
                rb += strayvar.join(", ");
                rb += "].join)\n";
                strayvar = [];
            }
            else if (a.op == "fun") {
                rb += "\t".repeat(curlvl);
                var argsStr = a.args.map(function (arg) { return arg.name; }).join(",");
                if (methodIndex == 0) {
                    rb += "def " + prevfun + "(" + argsStr + ")";
                }
                else {
                    lambdaList.push(prevfun);
                    rb += prevfun + " = proc {|" + argsStr + "|";
                }
                methodIndex++;
            }
            else if (a.op == "funbody") {
                rb += "\t".repeat(curlvl);
                if (asc[i - 1].op != "fun") {
                    if (methodIndex == 0) {
                        rb += "def " + prevfun + "()";
                    }
                    else {
                        lambdaList.push(prevfun);
                        rb += prevfun + " = proc {|_|";
                    }
                    methodIndex++;
                }
                rb += "\n";
                curlvl++;
            }
            else if (a.op == "funend") {
                curlvl--;
                methodIndex--;
                if (methodIndex == 0) {
                    rb += "\t".repeat(curlvl) + "end\n";
                }
                else {
                    rb += "\t".repeat(curlvl) + "}";
                }
                rb += "\n";
            }
            else if (a.op == "end") {
                curlvl--;
                rb += "\t".repeat(curlvl) + "end \n";
            }
            else if (a.op == "if") {
                rb += "\t".repeat(curlvl);
                rb += "if ";
                var j_2 = 0;
                while (j_2 < a.test.length) {
                    if (a.test[j_2][0] == "cmp") {
                        rb += a.test[j_2][1];
                    }
                    else if (a.test[j_2][0] == "ctnr") {
                        if (a.test[j_2][1] == "subs") {
                            if (a.test[j_2 + 1][1] == "rest") {
                                rb += ".slice(1)";
                            }
                            else {
                                if (a.test[j_2 + 1][0] == "lit") {
                                    rb += "[" + a.test[j_2 + 1][1] + "]";
                                }
                                else {
                                    rb += "[" + a.test[j_2 + 1][1] + "-1]";
                                }
                            }
                            j_2++;
                        }
                        else if (a.test[j_2][1] == "len") {
                            rb += ".length";
                        }
                    }
                    else {
                        rb += a.test[j_2][1];
                    }
                    j_2++;
                }
                rb += "\n";
                curlvl++;
            }
            else if (a.op == "else") {
                rb += "\t".repeat(curlvl - 1);
                rb += "else\n";
            }
            else if (a.op == "return") {
                rb += "\t".repeat(curlvl);
                rb += "return " + getval(a.value) + "\n";
            }
            else if (a.op.startsWith("op")) {
                rb += "\t".repeat(curlvl);
                var _a = a;
                var lhs = getval(_a.lhs);
                var rhs = getval(_a.rhs);
                var vname = this.nextTmpVar();
                rb += vname + "=" + lhs + a.op.slice(2) + rhs + ";";
                strayvar.push(vname);
            }
            else if (a.op == "name") {
                for (var j = 0; j < a.names.length; j++) {
                    rb += "\n";
                    rb += "\t".repeat(curlvl);
                    rb += a.names[j] + "=" + strayvar[strayvar.length - a.names.length + j] + ";";
                }
                strayvar = strayvar.slice(0, strayvar.length - a.names.length);
            }
            else if (a.op == "call") {
                rb += "\t".repeat(curlvl);
                if (a.pop) {
                    var jj = "";
                    for (var j = 0; j < took; j++) {
                        jj += "(" + strayvar[strayvar.length - took + j] + ")";
                    }
                    strayvar = strayvar.slice(0, strayvar.length - took);
                    took = 0;
                    var vname = this.nextTmpVar();
                    if (!jj.length) {
                        jj = "()";
                    }
                    rb += vname + "=" + getval(a.fun) + jj + ";";
                    strayvar.push(vname);
                }
                else {
                    var vname = this.nextTmpVar();
                    rb += vname + "=" + getval(a.fun) + "(" + a.args
                        .map(function (x) { return getval(x); })
                        .join(")(") + ");";
                    strayvar.push(vname);
                }
            }
            else if (a.op == "subscript") {
                var idx = getval(a.value);
                var vname = this.nextTmpVar();
                if (idx == "rest") {
                    rb += vname + "=" + getval(a.container) + ".slice(1);";
                }
                else {
                    rb += vname + "=" + getval(a.container) + "[" + idx + (a.value[0] == "lit" ? "" : "-1") + "];";
                }
                strayvar.push(vname);
            }
            else if (a.op == "cat") {
                var vname = this.nextTmpVar();
                rb +=
                    vname + "=" + getval(a.containers[0]) + ".concat(" +
                        a.containers
                            .slice(1)
                            .map(function (x) { return x[1]; })
                            .join(").concat(") +
                        ");";
                strayvar.push(vname);
            }
            else if (a.op == "push") {
                rb += "\t".repeat(curlvl);
                rb += getval(a.container) + ".push(" + a.values
                    .map(function (x) { return getval(x); })
                    .join(",") + ")\n";
            }
            else if (a.op == "for") {
                rb += "\t".repeat(curlvl);
                rb += getval(a.container) + ".each do |" + a.iterator.toLowerCase() + "|\n";
                curlvl++;
            }
            else if (a.op == "whiletrue") {
                rb += "\t".repeat(curlvl);
                rb += "while true do\n";
                curlvl++;
            }
            else if (a.op == "whilen") {
                rb += "\t".repeat(curlvl);
                var v_1 = this.randVar();
                rb += getval(a.value) + ".times do |" + v_1 + "|\n";
                curlvl++;
            }
            else if (a.op == "break") {
                rb += "\t".repeat(curlvl);
                rb += "break\n";
            }
            else if (a.op == "not") {
                rb += "\t".repeat(curlvl);
                var v = getval(a.value);
                var vname = this.nextTmpVar();
                rb += vname + "=!" + v + ";";
                strayvar.push(vname);
            }
            else if (a.op == "reassign") {
                rb += "\t".repeat(curlvl);
                var rhs_1 = getval(a.rhs);
                var lhs_1 = getval(a.lhs);
                if (a.lhssubs) {
                    lhs_1 += "[" + a.lhssubs[1] + (a.lhssubs[0] == "lit" ? "" : "-1") + "]";
                }
                rb += lhs_1 + "=" + rhs_1 + "\n";
            }
            else if (a.op == "temp") {
                var vname = this.nextTmpVar();
                rb += vname + "=" + a.iden[1] + ";";
                strayvar.push(vname);
            }
            else if (a.op == "discard") {
                strayvar = [];
            }
            else if (a.op == "take") {
                took = a.count;
            }
            else if (a.op == "import") {
                var f = a.file.replace(/"/g, "");
                for (var j = 0; j < a.iden.length; j++) {
                    rb += a.iden[j] + "=" + f + "." + a.iden[j] + ";";
                }
                imports.push(f);
            }
            else if (a.op == "length") {
                var vname = this.nextTmpVar();
                rb += vname + "=" + getval(a.container) + ".length;";
                strayvar.push(vname);
            }
            else if (a.op == "comment") {
                rb += "\t".repeat(curlvl);
                rb += "# " + getval(a.value) + "\n";
                rb += "\t".repeat(curlvl);
            }
            else {
            }
        }
        return { result: rb, imports: imports };
    };
    return RubyCompiler;
}(base_1.BaseTranspiler));
exports.default = RubyCompiler;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var parser_1 = __webpack_require__(4);
function isLangSupportedForEval(lang) {
    if (lang !== "js")
        throw new Error("Executing for target language \"" + lang + "\" is not supported in current environment");
    return true;
}
exports.isLangSupportedForEval = isLangSupportedForEval;
function hanzinizeOuput(value) {
    if (typeof value == "number") {
        return parser_1.num2hanzi(value);
    }
    else if (typeof value == "boolean") {
        return parser_1.bool2hanzi(value);
    }
    else if (Array.isArray(value)) {
        return value.map(function (i) { return hanzinizeOuput(i); }).join("。");
    }
    else {
        return value;
    }
}
function outputHanziWrapper(log, outputHanzi) {
    return function output() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        log.apply(void 0, args.map(function (i) { return (outputHanzi ? hanzinizeOuput(i) : i); }));
    };
}
exports.outputHanziWrapper = outputHanziWrapper;
function evalCompiled(compiledCode, options) {
    var _this = this;
    if (options === void 0) { options = {}; }
    var _a = options.outputHanzi, outputHanzi = _a === void 0 ? true : _a, _b = options.scoped, scoped = _b === void 0 ? false : _b, _c = options.lang, lang = _c === void 0 ? "js" : _c, _d = options.output, output = _d === void 0 ? console.log : _d;
    isLangSupportedForEval(lang);
    var code = compiledCode;
    (function () {
        var _console_log = console.log;
        console.log = outputHanziWrapper(output, outputHanzi);
        try {
            if (!scoped && "window" in _this) {
                window.eval(code);
            }
            else {
                eval(code);
            }
        }
        catch (e) {
            throw e;
        }
        finally {
            console.log = _console_log;
        }
    })();
}
exports.evalCompiled = evalCompiled;


/***/ })
/******/ ]);
});
//# sourceMappingURL=render.js.map