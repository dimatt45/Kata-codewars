function rowSumOddNumbers(n: number) {
    let sum:number =1;
    let valeurDebut: number =1;
     let valeur: number=0;
    
    for (let j = 1; j < n; j++){
        for (let i = 0; i < j; i++){
            valeurDebut = valeurDebut+2;
        }
    }
    sum = valeurDebut;
    valeur = valeurDebut;
    for (let k = 1 ; k < n; k++){

        valeur = valeur+2;
        sum += valeur;
    }
        

 
    return sum;
  }

  console.log(rowSumOddNumbers(1));
  console.log(rowSumOddNumbers(2));
  console.log(rowSumOddNumbers(3));
  console.log(rowSumOddNumbers(4));