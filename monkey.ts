import {Animal} from "./animal";

export class Monkey extends Animal{
    constructor(name){
        super(name);
    }  

    climbTree(tree: string)  : void{
        console.log(`Climbing tree: ${tree}`);        
    }
}