function compareArrays(arr1, arr2) {
  let result;

  if (arr1.every((n, i) => n === arr2[i])) { 
  result = true;
   } else {
    result = false;
   }

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  resultArr = arr
  .filter((element) => element > 0)
  .filter((element) => element % 3 === 0)
  .map((element) => element * 10);


  return resultArr; // array
}