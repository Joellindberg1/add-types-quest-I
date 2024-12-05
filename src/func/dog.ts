import {userDogs} from "./datatyper";

export const colorStatistics = (dogs: userDogs[]) => {
    const uniqueColors = [...new Set(dogs.map(dog => dog.color))]; // Unika färger
    const colorCount: { [key: string]: number } = {}; // Objekt för att hålla koll på färgantal
  
    // Räkna upp antalet hundar per färg
    dogs.forEach(dog => {
      colorCount[dog.color] = (colorCount[dog.color] || 0) + 1;
    });
  
    // Hitta den vanligaste färgen
    const mostCommonColor = Object.keys(colorCount).reduce((a, b) =>
      colorCount[a] > colorCount[b] ? a : b
    );
  
    // Sammanställning av färger och deras antal
    const colorSummary = Object.entries(colorCount)
      .map(([color, count]) => `${color}: ${count} hund(ar)`)
      .join("\n");
  
    // Returnera statistik om färger
    return {
      uniqueColors: uniqueColors.length, // Antal unika färger
      mostCommonColor,
      colorSummary
    };
  };

