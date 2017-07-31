import {Animal} from "./animal";
import {Monkey} from "./monkey";
import {Tiger} from "./tiger";

let t1:Tiger = new Tiger("Bengal Tiger");
t1.move(100);
t1.makeSound("Roar");
t1.move(340);
t1.huntPray("Deer");
t1.makeSound("Roar");

let m1:Monkey = new Monkey("Gorila");
m1.makeSound("Whoop");
m1.move(250);
m1.climbTree("Neem");
m1.makeSound("Screech");

