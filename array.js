
const arr = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

const arr3 = [...arr, ...arr2];
const arr4 = arr.concat(arr2);
console.log(arr3);
console.log(arr4);


const names = ['John', 'Jane', 'Jack', 'Jill'];
const names2 = ['Alice', 'Bob', 'Charlie', 'Dave'];
const names3 = [...names, ...names2];
console.log(names3);
const names4 = names.concat(names2);
console.log(names4);


