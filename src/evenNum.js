var nums = [1,3,2,4,9,64,12,10,11];
var evens = [];
var odds = [];
var sum =0;

var evenNumbers = function(nums) {
    for (var i = 0; i < nums.length; i++) {

        if ((nums[i] % 2) != 1) {
            evens.push(nums[i]);
                console.log(evens);
        }
        else {
            odds.push(nums[i]);
            sum +=nums[i];
                console.log(odds);
        }
    }
    console.log(sum);
return sum;
};

evenNumbers(nums);
console.log(odds);
console.log(sum);