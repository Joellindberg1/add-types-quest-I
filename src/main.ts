import "./styles.css";
import { averageAge, averageNumberOfHobbies, mostHobbiesCount, youngestPerson, oldestAge} from "./func/user-functions";
import {
	averageAgeMonster,
	averageNumberOfTentacles,
	wingStatistics,
	prettyPrintMonsters,
} from "./func/monster";
import { colorStatistics} from "./func/dog";
import {userPerson} from "./func/datatyper"
import {userDogs} from "./func/datatyper";
import {userMonsters} from "./func/datatyper";

// Fixa så funktionen gör det den ska
const printSum = (a:number, b:number) => {
	console.log(a+b);
};

printSum(1, 2);
printSum(5, 12);

export const arr: userPerson[] = [
	{
		name: "Stina",
		hobby: ["läsa böcker"],
		age: 67,
	},
	{
		name: "Lisa",
		hobby: ["åka skidor"],
		age: 26,
	},
	{
		name: "Mio",
		hobby: ["spela rollspel", "spela brädspel"],
		age: 22,
	},
	{
		name: "Olle",
		hobby: ["sportklättring", "vandra", "sticka", "virka"],
		age: 38,
	},
	{
		name: "Leo",
		hobby: ["matlagning", "bakning"],
		age: 17,
	},
];

console.log(`Vi har ${arr.length} stycken användare.`);
console.log(`Medelåldern på alla användare är ${averageAge(arr)}`);
console.log(`Medelantalet hobbies per användare är ${averageNumberOfHobbies(arr)}`);
console.log(`Den personen med flest hobbys har ${mostHobbiesCount(arr)}st`);
console.log(`Den yngsta personen är ${youngestPerson(arr).name} och den äldsta personen är ${oldestAge(arr).name}.`);



export const dogs: userDogs[] = [
	{ name: "Nisse", color: "brown" },
	{ name: "Fiffi", color: "white" },
	{ name: "Fluffe", color: "black" },
	{ name: "Hoppe", color: "beige" },
	{ name: "Pluto", color: "gray" },
	{ name: "Winter", color: "gray" },
	{ name: "Rolf", color: "gray" },
	{ name: "Benny", color: "brown" },
	{ name: "Krister", color: "brown" },
];

console.log(`Vi har ${dogs.length} stycken hundar.`);
console.log(`Hundarna har ${colorStatistics(dogs).uniqueColors} antal unika färger.`);
console.log(`Den vanligaste färgen bland alla hundar är: ${colorStatistics(dogs).mostCommonColor}.`);
console.log("Sammanställning av alla hundfärger:");
console.log(colorStatistics(dogs).colorSummary);

export const monsters: userMonsters[] = [
	{ name: "Florg", age: 1266, tentacles: 29, eyes: 666, hasWings: true },
	{ name: "Smirch", age: 78, tentacles: 68, eyes: 2, hasWings: false },
	{ name: "Gorge", age: 25, tentacles: 2, eyes: 2, hasWings: false },
	{ name: "Fioliviargh", age: 478, tentacles: 6, eyes: 1, hasWings: true },
	{ name: "Snorla", age: 42, tentacles: 9, eyes: 9456, hasWings: false },
	{ name: "Oligarnaclech", age: 36, tentacles: 675, eyes: 148, hasWings: true,},
	{ name: "Milowarg", age: 78, tentacles: 2, eyes: 12, hasWings: false },
	{ name: "Znawrl", age: 456, tentacles: 8, eyes: 6, hasWings: true },
	{ name: "Welff", age: 6548, tentacles: 34, eyes: 4, hasWings: true },
	{ name: "Ulf", age: 56, tentacles: 4, eyes: 2, hasWings: false },
	{ name: "Ellorn", age: 423, tentacles: 2, eyes: 2, hasWings: false },
];

console.log(`Vi har ${monsters.length} stycken monster.`);
console.log(`Medelåldern på alla monster är ${averageAgeMonster(monsters)}`);
console.log(`Medelantalet tentakler för alla monster är ${averageNumberOfTentacles(monsters)}`);
// loopa igenom alla monster och skriv ut dem med prettyPrintMonster
prettyPrintMonsters(monsters);
console.log(monsters.map(user => user.name).join(", "));

console.log(`Antalet monster som har vingar är ${wingStatistics(monsters).withWings}`);

const noWingedMonster = wingStatistics(monsters).noWingsName;
console.log(noWingedMonster);
