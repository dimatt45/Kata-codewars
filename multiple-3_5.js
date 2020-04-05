var Challenge = /** @class */ (function () {
    function Challenge() {
    }
    Challenge.solution = function (number) {
        var sum = 0;
        for (var i = 1; i < number; i++) {
            if (i % 3 == 0) {
                sum += i;
            }
            else if (i % 5 == 0) {
                sum += i;
            }
        }
        return sum;
    };
    return Challenge;
}());
console.log(Challenge.solution(100));
