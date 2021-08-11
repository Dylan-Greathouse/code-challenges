export function doubleNumbers(arr) {
    return arr.map((num) => num * 2);
}

export function stringItUp(arr) {
    return arr.map((num) => num.toString());
}

export function capitalizeNames(arr) {
    // console.log(arr);
    return arr.map((name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
}

export function namesOnly(arr) {
    return arr.map((item) => item.name);
    
}

export function makeStrings(arr){
    return arr.map((item) => {
        if(item.age < 80){
            return item.name.toString() +  ' is under age!!';
        } else {
            return item.name.toString() + ' can go to The Matrix';
        }
    });
}

// export function readyToPutInTheDOM(arr) {
//     return
// }