export function returnTen(str) {
   const chars = str.slice(str.length - 10);
   return chars.split('');
}

export function findMax(matrix) {
   const max = [].concat.apply([], matrix);
   return Math.max.apply(Math, max);
}

export function totalSum(matrix) {
   const arr = [].concat.apply([], matrix);
   let sum =0;
   for (let i = 0; i < arr.length; i++){
      sum += arr[i];
   }
   return sum;
}

export function grandTotal(stores){
  
}

export function salesData(hours, data){
  
}