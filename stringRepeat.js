// String Repeat

function repeatStr (n, s) {
  let newStr = '';
  for(let i = 0; i < n; i++){
    newStr += s;
  }
  return newStr;
}


// but look at this codewars solution, this is the level i want to be

// One
repeatStr = (n, s) => s.repeat(n)

// two
const repeatStr = (n,s) => s.repeat(n) ;