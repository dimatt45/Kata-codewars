var G964 = /** @class */ (function () {
    function G964() {
    }
    G964.dec2FactString = function (nb) {
        var factor = 2;
        var calcul = nb;
        var modulo = 0;
        var result = "0";
        var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        do {
            modulo = calcul % factor;
            if (modulo >= 10) {
                result = result.concat(code.charAt(modulo - 10));
            }
            else {
                result = result.concat(modulo.toString());
            }
            calcul = Math.floor(calcul / factor);
            factor++;
        } while (calcul != 0);
        return result.split("").reverse().join("");
    };
    G964.factString2Dec = function (str) {
        var tabStr = str.split("").reverse();
        var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var nb = 0;
        var result = 0;
        for (var index = 1; index < tabStr.length; index++) {
            if (code.search(tabStr[index]) == -1) {
                nb = +tabStr[index];
            }
            else {
                nb = code.indexOf(tabStr[index]) + 10;
            }
            var f = 1;
            for (var j = 1; j <= index; j++) {
                f = f * j; // ou f *= i;
            }
            result += nb * f;
        }
        return result;
    };
    return G964;
}());
console.log(G964.dec2FactString(36288000));
console.log(G964.factString2Dec("A0000000000"));
//# sourceMappingURL=Dec_to_Fact.js.map