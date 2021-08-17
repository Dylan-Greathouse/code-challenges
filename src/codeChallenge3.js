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
    
}

export function sortedArraysByValuesLength(obj) {

}