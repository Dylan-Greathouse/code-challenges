// filter method
export function fiveAndGreaterOnly(arr) {
    return arr.filter((num) => num > 5)
}

export function evensOnly(arr){
    return arr.filter((num) => num % 2 === 0)
}

export function fiveCharactersOrFewerOnly(arr){
 return arr.filter((item) => item.length <= 5) 
}

export function peopleWhoBelongToTheIlluminati(arr){
  return arr.filter((item) => item.member === true);
}

export function ofAge(arr){
  return arr.filter((item) => item.age > 18);
}
