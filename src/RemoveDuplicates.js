
// //method 1
// const arr1 = [1, 1, 2, 3, 3, 3];

// const newSet = [...new Set(arr1)];
// console.log(newSet);

// //Method 2
// const arr2 = [1, 1, 2, 3, 3, 3];

// const noDup = arr2.filter((ele,index, array) => array.indexOf(ele) === index)
// console.log(noDup);

// //Method 3
// const arr3 = [1, 1, 2, 3, 3, 3];

// const noDuplicate = [];
// for(let ele of arr3){
//   if(!noDuplicate.includes(ele)){
//     noDuplicate.push(ele)
//   }
// }
// console.log(noDuplicate)