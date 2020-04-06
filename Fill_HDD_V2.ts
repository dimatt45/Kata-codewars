function save(sizes: number[], hd: number) {
    let usedSize: number = sizes[0];
    let nbFichiers: number = 0;

    while (usedSize <= hd){
        nbFichiers++;
        usedSize += sizes[nbFichiers];
    }
    return nbFichiers;
}

console.log(save([4, 4, 4, 3, 3], 12));
console.log(save([13], 250));
