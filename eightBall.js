// Eight Ball 

// step one
let userName = 'Jhonny';

// step two
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// step three
let userQuestion = 'How the day is today?'

//step four
console.log(userQuestion);

// step five
let randomNumber = Math.floor(Math.random() * 8)
// console.log(randomNumber);

// step six
let eightBall = '';

// step seven
switch (randomNumber) {
  case 0:
    console.log('It is certain');
    break;
  case 1:
    console.log('It is decidedly so');
    break;
  case 2:
    console.log('Reply hazy try again');
    break;
  case 3:
    console.log('Cannot predict now');
    break
  case 4:
    console.log('Do not count on it')
    break;
  case 5:
    console.log('My sources say no')
    break;
  case 6:
    console.log('Outlook not so good')
    break;
  case  7:
    console.log('Signs point to yes')
    break;
  default:
    console.log(`Sorry, im out of balls.`);
    break;
}

console.log(`${eightBall}`);
