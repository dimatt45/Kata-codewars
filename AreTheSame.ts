function comp(a1: number[] | null, a2: number[] | null) {
    let trouve : boolean;
    let tabSquare : Array<number>;
    tabSquare = [];
    console.log("a1 : " + a1);
    console.log("a2 : " + a2);

    if (a1 == null || a2 == null ) {
        return false;
    }

    if (a2.length == 0 && a1.length == 0){
        return true;
    }
    else {
        for (let i = 0; i < a1.length ; i++){
            tabSquare[i] = a1[i]*a1[i];
        }
        tabSquare = tabSquare.sort();
        a2 = a2.sort();
        console.log("a2 :" + a2);
        console.log("tabsquare :" + tabSquare)
        for (let j = 0; j < a2.length ; j++){

            if (tabSquare.indexOf(a2[j]) < 0){
                return false;
            }

            if ( tabSquare.indexOf(a2[j]) != a2.indexOf(tabSquare[j])){
                
                return false;
                }

            }
    }
    return true;

}


let tab1 : Array<number>;
let tab2 : Array<number>;
tab1 = [3,4];
tab2 = [0,25];
console.log(comp(tab1,tab2));

