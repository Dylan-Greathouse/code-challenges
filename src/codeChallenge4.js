export function getHouses(obj){
const key = Object.values(obj);
return key.map((item) => item.house);
}

export function updateNumbers(obj) {
    const key = Object.entries(obj);
    return key.map((item) => item.toString())

}

export function totalCharacters(arr) {
    const key = Object.values(arr);
   let count = Object.values.(arr).length;
   console.log(count);
    
}