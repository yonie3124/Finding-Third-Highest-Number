

const arr =  [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31];
const findThirdMax = (arr = []) => {
   const map = {};
   let j = 0;
   for (let i = 0, l = arr.length; i < l; i++) {
      if(!map[arr[i]]){
         map[arr[i]] = true;
      }else{
         continue;
      };
      arr[j++] = arr[i];
   };
   arr.length = j;
   let result = -Infinity;
   if (j < 3) {
      for (let i = 0; i < j; ++i) {
         result = Math.max(result, arr[i]);
      }
      return result;
   } else {
      arr.sort(function (prev, next) {
         if (next >= prev) return -1;
         return 1;
      });
      return arr[j - 3]
   };
};
console.log(findThirdMax(arr));