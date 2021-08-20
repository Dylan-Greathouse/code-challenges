export function getHouses(obj){
const key = Object.values(obj);
return key.map((item) => item.house);
}

export function updateNumbers(obj) {
    const key = Object.entries(obj);
    return key.map((item) => item.toString())

}

export function totalCharacters(arr) {
   let charCount = 0;
   const key = Object.values(arr);
   key.forEach(arr => {
       charCount++;
       charCount += arr.children.length;
       if (arr.spouse){
        charCount++;
       } 
    });
    return charCount;
}

export function hasChildrenEntries(arr, character) {
    const entry = Object.entries(arr, character);
    const bool = entry.map((item) => {
        if(item.spouse === null) {
            return true;
        } else if (item.spouse !== null) {
            return false;
        }
    })
    return bool;
};