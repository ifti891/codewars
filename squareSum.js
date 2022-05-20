// Square(n) Sum

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

//For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

//my Solution 

function squareSum(number) {

  // squares each number
  // sums results

  let sum = 0;

  for (let i = 0; i < number.length; i++) {

    sum += number[i] ** 2
  }

  return sum

}

squareSum(2, 2, 2)


//other interesting solutions

// 1
function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}

// 2
function squareSum(numbers){
  return numbers.reduce((sum,num) => sum + (num * num), 0);
}



// MDN explaination

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);