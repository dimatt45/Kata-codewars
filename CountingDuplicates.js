function duplicateCount(word) {
    var compteur;
    var result = "";
    word = word.toLowerCase();
    for (var i = 0; i < word.length; i++) {
        compteur = 0;
        for (var j = 0; j < word.length; j++) {
            if (word[i] == word[j]) {
                compteur++;
            }
        }
        if (compteur > 1 && result.search(word[i]) < 0) {
            result = result + word[i];
        }
    }
    return result.length;
}
console.log(duplicateCount("matthieuollivier"));
