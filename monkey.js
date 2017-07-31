"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animal_1 = require("./animal");
class Monkey extends animal_1.Animal {
    constructor(name) {
        super(name);
    }
    climbTree(tree) {
        console.log(`Climbing tree: ${tree}`);
    }
}
exports.Monkey = Monkey;
