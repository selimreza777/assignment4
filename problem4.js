function isSame(arr1, arr2) {
  // You have to write your code here
  // valdation: arr1,arr2 must array otherswise Invalid 
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid";
  }
  // check: length are must be same  
  if (arr1.length !== arr2.length) {
    return false;
  }
  // conditiaon 
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false; //not same index return false
    }

  }
  return true; // all item and length same return true

}
console.log(isSame([1, 2, 3], [1, 2, 3]))
console.log(isSame([34, 5, 7, 9], [34, 5, 7]))
console.log(isSame([1, undefined, 3], [1, null, 3]))
console.log(isSame([1, 4, 5], [1, 4, 5]))
console.log(isSame([1, "4", 4], [1, 4, 4]))
console.log(isSame([2, 5, 6], 256))
console.log(isSame({ data: [2, 5, 6] }, [2, 5, 6]))
