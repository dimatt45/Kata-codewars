function hydrate(drinkString : string) {
        let sum : number = 0;
        let tabSplit = drinkString.split(", ");
        if (tabSplit.length == 1){
            tabSplit = drinkString.split("and ");
        }
        let mot : string;

        for (let i = 0; i < tabSplit.length ; i++){
            mot = tabSplit[i];
            sum += parseInt(mot[0]);

        }
        if (sum > 1){
            return sum + " glasses of water";}
            else {
            return sum + " glass of water"
        }
    }

console.log(hydrate("1 beer"));
console.log(hydrate("2 glasses of wine and 1 shot"));
console.log(hydrate("1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"));

