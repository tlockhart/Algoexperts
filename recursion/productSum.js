function productSum(array, level=1) {
    let sum = 0;
    console.log("we are at level: " + level);
    for (let element of array) {
        if (typeof element == "number") {
            console.log("Summing value:" + element);
            sum += element;
        }
        else {
            console.log("We are about to recurse!!!");
            sum += productSum(element, level + 1);
        }
    }
    console.log("The sum total is: " + sum);
    console.log("The sum multiplied by " + level + " turns out to be: " +(sum * level));
    return sum * level;
}

array =[5, 2, [7, -1], 3, [6, [-13, 8], 4]];
productSum(array);