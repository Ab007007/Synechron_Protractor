import { person } from "./script.mjs";

const person3 = {
    born: 1922
}
person3.printYearofBorn = person.printYearofBorn;
person3.printYearofBorn();