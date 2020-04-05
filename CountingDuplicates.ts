function duplicateCount(word: string) {
    let compteur: number;
    let result: string = "";

    word = word.toLowerCase();


    for (let i = 0; i < word.length; i++) {
        compteur = 0;
        for (let j = 0; j < word.length; j++) {
            if (word[i] == word[j]) {
                compteur ++;
            }
        }
        if (compteur > 1 && result.search(word[i]) < 0) {
            result = result + word[i]
        }
      

    }

    return result.length;
}

console.log(duplicateCount("matthieuollivier"));