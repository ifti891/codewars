// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s){
  //#Happy Coding! ^_^
 let convertH = h * 60 * 60 * 1000;
  let convertM = m * 60 *  1000;
  let convertS = s *  1000;
  let time = convertH + convertM + convertS;
  
  return time;
}