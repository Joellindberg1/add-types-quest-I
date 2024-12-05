//Importera datatyper för som används i arrayen "Arr"
import {userPerson} from "./datatyper";


export const averageAge = (allUsers:userPerson[]):number => {
	let allAges = 0;
	allUsers.forEach((u) => {
		allAges += u.age;
	});
	return allAges / allUsers.length;
};

export const averageNumberOfHobbies = (allUsers:userPerson[]):number => {
	let AllHobbies = 0;
	allUsers.forEach((u) => {
		AllHobbies += u.hobby.length;
	});
	return AllHobbies / allUsers.length;
};

export const mostHobbiesCount = (allUsers: userPerson[]): number => {
    const personWithMostHobbies = allUsers.reduce((mostHobbiesUser, currentUser) => {
        // Jämför antalet hobbies direkt från arrayen
        if (currentUser.hobby.length > mostHobbiesUser.hobby.length) {
            return currentUser;  // Om nuvarande användare har fler hobbies, returnera den
        }
        return mostHobbiesUser;  // Annars behåll den som har flest hobbies hittills
    });

    // Returnera antalet hobbies för användaren med flest hobbies
    return personWithMostHobbies.hobby.length;
};

export const oldestAge = (allUsers: userPerson[]): userPerson => {
    return allUsers.reduce((oldest, currentUser) => {
        return currentUser.age > oldest.age ? currentUser : oldest;
    });
};

export const youngestPerson = (allUsers: userPerson[]): userPerson => {
    return allUsers.reduce((youngest, currentUser) => {
        return currentUser.age < youngest.age ? currentUser : youngest;
    });
};