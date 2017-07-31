import {Animal} from "./animal";

export class Tiger extends Animal{
    constructor(name){
        super(name);
    }

    huntPray(prey: string): void{
        console.log(`Hunted: ${prey}`);
    }
}