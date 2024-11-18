let array = [1,2,3,4,5];

let arrayCopy = [...array];

let a = arrayCopy.reduce((prev, curr) => {
  return prev+curr
}, 0);

console.log(a);