function save(sizes, hd) {
    var dispo = hd;
    var nbFichiers = 0;
    for (var i = 0; i < sizes.length; i++) {
        if (sizes[i] <= dispo) {
            nbFichiers++;
            dispo -= sizes[i];
        }
        else {
            return nbFichiers;
        }
    }
    return nbFichiers;
}
console.log(save([4, 4, 4, 3, 3], 11));
console.log(save([1, 2, 3, 4], 250));
