"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animal_1 = require("./animal");
class Tiger extends animal_1.Animal {
    constructor(name) {
        super(name);
    }
    huntPray(prey) {
        console.log(`Hunted: ${prey}`);
    }
}
exports.Tiger = Tiger;
