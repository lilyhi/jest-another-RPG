const Potion = require('./Potion');

function Enemy(name, weapon) {
    this.name = name;
    this.weapon = weapon;
    this.potion = new Potion();

    this.health = Math.floor(Math.random() * 10 + 85);
    this.strength = Math.floor(Math.random() * 5 + 5);
    this.agility = Math.floor(Math.random() * 5 + 5);
}

// returns enemy's health
Enemy.prototype.getHealth = function() {
    return `${this.name}'s health is now ${this.health}!`;
};

// returns if enemy is alive or not
Enemy.prototype.isAlive = function() {
    if (this.health === 0) {
        return false;
    }
    return true;
};

// returns enemy's attack value
Enemy.prototype.getAttackValue = function() {
    const min = this.strength - 5;
    const max = this.strength + 5;

    return Math.floor(Math.random() * (max - min) + min);
};

// reduces enemy's health, returns 0 if less than 0
Enemy.prototype.reduceHealth = function(health) {
    this.health -= health;

    if (this.health < 0) {
        this.health = 0;
    }
};

// returns a description of the enemy
Enemy.prototype.getDescription = function() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
};

module.exports = Enemy;
