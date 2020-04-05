function duplicateEncode(word: string) {
    let compteur: number;
    let lettre: string;
    word = word.toLowerCase();
    let result: string ="";

    for (let i = 0; i < word.length; i++) {
        compteur = 0;
        for (let j = 0; j < word.length; j++) {
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
        result = result + lettre  ;
    }
    return result;
}

console.log(duplicateEncode("RR)bRJmeRRRvRORRR"));

