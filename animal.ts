export class Animal{
    
    private _name : string;
    public get name() : string {
        return this._name;
    }
    
    private _distance : number;
    public get distance() : number {
        return this._distance;
    }

    constructor(name: string){
        this._name = name;
        this._distance = 0;
    }

    public move(dist: number): void{
        this._distance += dist;
        console.log(`Total distance covered by: ${this._name} is: ${this._distance}`);
    }    

    public makeSound(sound: string){
        console.log(`${this._name} is making: ${sound}`);
    }
}
