

function App() {

    // Schritt 1: Verdopple alle Zahlen im Array mit der Funktion ".map"
    const zahlenArray = [1, 2, 3, 4, 5];
    const verdoppeltesArray = zahlenArray.map(zahl => zahl * 2);
    console.log(verdoppeltesArray);

// Schritt 2: Wähle nur Wörter aus, die länger als 5 Buchstaben sind mit der Funktion ".filter"
    const woerterArray = ["Apfel", "Banane", "Kirsche", "Erdbeere", "Mango"];
    const langeWoerterArray = woerterArray.filter(wort => wort.length > 5);
    console.log(langeWoerterArray);

// Schritt 3: Berechne die Summe aller Zahlen im Array mit der Funktion ".reduce"
    const summeArray = [1, 2, 3, 4, 5];
    const summe = summeArray.reduce((accumulator, zahl) => accumulator + zahl, 0);
    console.log(summe);

// Schritt 4: Überprüfe, ob mindestens eine Zahl größer als 10 ist mit der Funktion ".some"
    const zahlenArray2 = [5, 8, 12, 3, 6];
    const mindestensEineZahlGroesserAls10 = zahlenArray2.some(zahl => zahl > 10);
    console.log(mindestensEineZahlGroesserAls10);
}

export default App
