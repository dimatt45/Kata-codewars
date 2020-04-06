function digitalRoot(n) {
    var sum = n;
    var i = 0;
    do {
        n = sum;
        sum = 0;
        while (n >= 1) {
            sum += n % 10;
            n = (n - n % 10) / 10;
            i++;
        }
    } while (sum > 10);
    return (sum);
}
console.log(digitalRoot(1258793));
