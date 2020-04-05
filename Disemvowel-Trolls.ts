export class Kata {
    static disemvowel(str: string) {
    let result : string = "";
    for (let e of str){
        if ( e != "a" && e != "e" && e != "i" && e != "o" && e != "u" ){
            result = result + e;
        }
    }
    return result;
    }
}

console.log(Kata.disemvowel("matthieu"))

