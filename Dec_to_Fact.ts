class G964 {
  
    public static dec2FactString = (nb: number): string => {
        let factor = 2;
        let calcul : number = nb;
        let modulo : number = 0;
        let result : string = "0";
        let code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        
        do{
            modulo = calcul % factor; 
            if (modulo >= 10){
                result = result.concat(code.charAt(modulo - 10));
            }
            else {
                result = result.concat(modulo.toString());
            }
            calcul = Math.floor(calcul / factor);
            factor ++;

        }while (calcul != 0);
        return result.split("").reverse().join("");
    }
 
    public static factString2Dec = (str: string): number => {
        
        let tabStr = str.split("").reverse();
        let code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let nb : number = 0;
        let result : number = 0;
        for ( let index = 1; index < tabStr.length ; index ++ ){
            if (code.search(tabStr[index])== -1){
            nb = +tabStr[index];}
            else { 
            nb = code.indexOf(tabStr[index]) + 10;
            }
            let f : number =1;
            for(let j = 1; j <= index; j++){  
            f = f * j;   // ou f *= i;
            }  
            result += nb *f;
        }
        return result;
    }
}

console.log(G964.dec2FactString(36288000));
console.log(G964.factString2Dec("A0000000000"));
                                    