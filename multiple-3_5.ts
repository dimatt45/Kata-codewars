class Challenge {
    static solution(number) {
    let sum : number = 0;
    for (let i = 1; i < number; i++ ){
        if (i % 3 ==0){
            sum += i;
        }
        else if (i % 5 == 0){
            sum +=i;
        }
        }
    return sum ;
    }
}

console.log(Challenge.solution(100))


