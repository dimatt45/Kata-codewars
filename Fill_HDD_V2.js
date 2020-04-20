function save(sizes, hd) {
    var usedSize = sizes[0];
    var nbFichiers = 0;
    while (usedSize <= hd) {
        nbFichiers++;
        usedSize += sizes[nbFichiers];
    }
    return nbFichiers;
}
console.log(save([4, 4, 4, 3, 3], 12));
console.log(save([13], 250));
//# sourceMappingURL=Fill_HDD_V2.js.map