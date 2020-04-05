"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Kata = /** @class */ (function () {
    function Kata() {
    }
    Kata.disemvowel = function (str) {
        var result = "";
        for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
            var e = str_1[_i];
            if (e != "a" && e != "e" && e != "i" && e != "o" && e != "u") {
                result = result + e;
            }
        }
        return result;
    };
    return Kata;
}());
exports.Kata = Kata;
console.log(Kata.disemvowel("matthieu"));
