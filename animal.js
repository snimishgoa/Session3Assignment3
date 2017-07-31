"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    get name() {
        return this._name;
    }
    get distance() {
        return this._distance;
    }
    constructor(name) {
        this._name = name;
        this._distance = 0;
    }
    move(dist) {
        this._distance += dist;
        console.log(`Total distance covered by: ${this._name} is: ${this._distance}`);
    }
    makeSound(sound) {
        console.log(`${this._name} is making: ${sound}`);
    }
}
exports.Animal = Animal;
