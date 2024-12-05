//utöka så alla egenskaper för monstret skrivs ut
import {userMonsters} from "./datatyper";

export const averageAgeMonster = (allUsers:userMonsters[]):number => {
	let allAges = 0;
	allUsers.forEach((u) => {
		allAges += u.age;
	});
	return allAges / allUsers.length;
};

export const averageNumberOfTentacles = (allUsers:userMonsters[]):number => {
	let allTentacles = 0;
	allUsers.forEach((u) => {
		allTentacles += u.tentacles;
	});
	return allTentacles / allUsers.length;
};

export const wingStatistics = (monsters: userMonsters[]) => {
	let withWings = 0;  // Antal monster med vingar
	let withoutWings = 0;  // Antal monster utan vingar
	let noWingsName:string[] = [];
	// Räkna monster med och utan vingar
	monsters.forEach(monster => {
	  if (monster.hasWings) {
		withWings++;
	  } else {
		withoutWings++;
		noWingsName.push(monster.name);
	  }
	});
  
	// Returnera resultatet
	return {
	  withWings,
	  withoutWings,
	  noWingsName
	};
  };

  export const prettyPrintMonsters = (monsters: userMonsters[]) => {
	monsters.forEach((monster) => {
	  console.log(`Monster: ${monster.name}`);
	});
  };



