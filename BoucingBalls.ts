function bouncingBall(h: number, bounce: number, window: number): number {
    let nbView : number=1;
    if (bounce <= 0 || bounce >= 1 || h <= window){
        return -1;
    }
    if (h < window){
        return 0;
    }
 
    h = h*bounce;
    while(h > window){
       nbView = nbView+2;
       h = h*bounce;
    }
    return nbView;

}

  



console.log(bouncingBall(3.0, 0.66, 1.5)) // 3;
