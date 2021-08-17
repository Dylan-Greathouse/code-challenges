export function capitalizeObjectKeys(obj) {
    const cap = Object.keys(obj);
   return cap.map((item) => item.toUpperCase());
  
}
   

export function sortedKeys(obj) {
    const key = Object.keys(obj);
    return key.sort((a, b) => a.length - b.length);
}

export function getFilteredKey(obj) {
    const key = Object.keys(obj);
    return key.filter((item) => item.length <= 3); 
}

export function getArrayOfKeysAndValues(obj){
    const key = Object.entries(obj);
    return key;
}

export function sortedArraysByValuesLength(obj) {
    const key = Object.entries(obj);
    return key.reverse((a, b) => a-b);
}