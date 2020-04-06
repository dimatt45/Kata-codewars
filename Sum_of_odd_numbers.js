function rowSumOddNumbers(n) {
    var sum = 1;
    var valeurDebut = 1;
    var valeur = 0;
    for (var j = 1; j < n; j++) {
        for (var i = 0; i < j; i++) {
            valeurDebut = valeurDebut + 2;
        }
    }
    sum = valeurDebut;
    valeur = valeurDebut;
    for (var k = 1; k < n; k++) {
        valeur = valeur + 2;
        sum += valeur;
    }
    return sum;
}
console.log(rowSumOddNumbers(1));
console.log(rowSumOddNumbers(2));
console.log(rowSumOddNumbers(3));
console.log(rowSumOddNumbers(4));
