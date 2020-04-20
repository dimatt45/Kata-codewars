function dirReduc(chemin : string[]){
    let check:number;
    check = 1;

    do{
    check = 0    
        for (let i = 0; i < chemin.length; i++){

            if (chemin[i+1] == opposite (chemin[i])){
             chemin.splice(i,2);
             check = 1;
            } 
        }
    }while (check >0)

    return chemin;
}

function opposite(direction: string) {
    switch (direction) {
        case "NORTH":
            return "SOUTH";
            break;
        case "SOUTH":
            return "NORTH";
            break;
        case "EAST":
            return "WEST";
            break;
        case "WEST":
            return "EAST";
            break;
    }
}


console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));
console.log(dirReduc(["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH"]));


// mesPoissons est ["scalaire", "clown", "tambour", "mandarin", "chirurgien"]
// enleves est [], aucun élément supprimé

// supprime 1 élément à partir de l'index 3
// enleves = mesPoissons.splice(3, 1);
// mesPoissons est ["scalaire", "clown", "tambour", "chirurgien"]
// enleves est ["mandarin"]