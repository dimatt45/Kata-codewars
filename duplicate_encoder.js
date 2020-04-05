function duplicateEncode(word) {
    var compteur;
    var lettre;
    word = word.toLowerCase();
    var result = "";
    for (var i = 0; i < word.length; i++) {
        compteur = 0;
        for (var j = 0; j < word.length; j++) {
            if (word[i] == word[j]) {
                compteur++;
            }
        }
        if (compteur > 1) {
            lettre = ')';
        }
        else {
            lettre = '(';
        }
        result = result + lettre;
    }
    return result;
}
console.log(duplicateEncode("RR)bRJmeRRRvRORRR"));
