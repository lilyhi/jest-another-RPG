const Potion = require('./Potion');
const Character = require('./Character');

class Enemy extends Character {
    constructor(name, weapon) {
        // call parent constructor here:
        super(name);

        // this.name = name;
        this.weapon = weapon;
        this.potion = new Potion();
    }

    // returns enemy's health
    getHealth() {
        return `${this.name}'s health is now ${this.health}!`;
    };

    // returns if enemy is alive or not
    isAlive() {
        if (this.health === 0) {
            return false;
        }
        return true;
    }

    // returns enemy's attack value
    getAttackValue() {
        const min = this.strength - 5;
        const max = this.strength + 5;

        return Math.floor(Math.random() * (max - min) + min);
    }

    // reduces enemy's health, returns 0 if less than 0
    reduceHealth(health) {
        this.health -= health;

        if (this.health < 0) {
            this.health = 0;
        }
    }

    // returns a description of the enemy
    getDescription() {
        return `A ${this.name} holding a ${this.weapon} has appeared!`;
    }
};

module.exports = Enemy;
