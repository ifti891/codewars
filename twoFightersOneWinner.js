// Two fighters, one winner.

// Create a function that returns the name of the winner in a fight between two fighters.

//Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

//Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

//Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.
//Example:

//  declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"

//Lew attacks Harry; Harry now has 3 health.
// Harry attacks Lew; Lew now has 6 health.
// Lew attacks Harry; Harry now has 1 health.
// Harry attacks Lew; Lew now has 2 health.
// Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.

function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function () { return this.name; }
}


// my stupid solution

function declareWinner(fighter1, fighter2, firstAttacker) {

  const iftikhar = [fighter1, fighter2].find((winner) => winner.name === firstAttacker);
  const bilal = [fighter1, fighter2].find((winner) => winner.name !== firstAttacker);

  return Math.ceil(bilal.health / iftikhar.damagePerAttack) <= Math.ceil(iftikhar.health / bilal.damagePerAttack) ? iftikhar.name : bilal.name;

}


// Some wonderful olutions

function declareWinner(fighter1, fighter2, firstAttacker) {
  var fac1 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
  var fac2 = Math.ceil(fighter2.health / fighter1.damagePerAttack);
  if (fac1 < fac2) {
    return fighter2.name;
  } else if (fac2 < fac1) {
    return fighter1.name;
  } else {
    return firstAttacker;
  }
}


function declareWinner(fighter1, fighter2, firstAttacker) {
  while (fighter1.health > 0 && fighter2.health > 0) {
    fighter2.health -= fighter1.damagePerAttack;
    fighter1.health -= fighter2.damagePerAttack;
  }

  if (fighter1.health <= 0 && fighter2.health <= 0)
    return firstAttacker;
  else if (fighter1.health <= 0)
    return fighter2.name;
  else
    return fighter1.name;
}


