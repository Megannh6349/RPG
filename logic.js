// Base stats for player and enemies

let PlayerStats = {
  strength: 5,
  // defense: 5,
  // accuracy: 5,
  // evasion: 5,
  // critChance: 5,
  totalHitPoints: 20,
  currentHitPoints: 20,
};

const EnemyOneStats = {
  strength: 1,
  // defense: 1,
  // accuracy: 1,
  // evasion: 1,
  // critChance: 1,
  totalHitPoints: 10,
  currentHitPoints: 10,
};

// Fight mechanics

function playerAttack() {
  var newEnemy1HP = (EnemyOneStats.currentHitPoints -= PlayerStats.strength);
  EnemyOneStats.currentHitPoints = newEnemy1HP;
}

function enemyAttack() {
  var newPlayer1HP = (PlayerStats.currentHitPoints -= EnemyOneStats.strength);
  PlayerStats.currentHitPoints = newPlayer1HP;
}

// Checking for function
// console.log(EnemyOneStats.currentHitPoints);
// console.log(PlayerStats.currentHitPoints);
// playerAttack();
// enemyAttack();
// console.log(EnemyOneStats.currentHitPoints);
// console.log(PlayerStats.currentHitPoints);

// Simulate fight
function playerAttackSim() {
  console.log("Player attacks!");
  playerAttack();
  console.log("Enemys HP:  " + EnemyOneStats.currentHitPoints);
}

function enemyAttackSim() {
  console.log("Enemy attacks!");
  enemyAttack();
  console.log("Players HP:  " + PlayerStats.currentHitPoints);
}
console.log("3... 2... 1... Fight!");

// This makes the enemy go twice. Find a way to alternate between player
// and enemy and break when victory conditions are met
function fightTest() {
  playerAttackSim();
  if (EnemyOneStats.currentHitPoints > 0) {
    enemyAttackSim();
  } else if ((EnemyOneStats.currentHitPoints = 0)) {
    console.log("Enemy fainted. Player Wins!");
  } else if (EnemyOneStats.currentHitPoints < 0) {
    console.log("Enemy fainted. Player Wins!");
  }
  enemyAttackSim();
  if (PlayerStats.currentHitPoints > 0) {
    playerAttackSim();
  } else if ((PlayerStats.currentHitPoints = 0)) {
    console.log("Player fained. Enemy wins.");
  } else if (PlayerStats.currentHitPoints < 0) {
    console.log("Player fained. Enemy wins.");
  }
}

fightTest();
