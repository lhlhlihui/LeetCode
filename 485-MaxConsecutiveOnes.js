// var findMaxConsecutiveOnes = function(nums) {
//     var lastZero = nums.indexOf(0);

//     if (lastZero === -1) return nums.length;

//     var result = lastZero;
//     for (var i = lastZero; i < nums.length; i++) {
//         if (nums[i] === 0) {
//             result = Math.max(i - lastZero - 1, result);
//             lastZero = i;
//         }

//         if (i === nums.length - 1) {
//             result = Math.max(i - lastZero, result);
//         }
//     }

//     return result;
// };

var findMaxConsecutiveOnes = function(nums) {
    return Math.max(...nums.join('').split('0').map((str) => str.length));
};
