// Oude stijl: loops

// While Loop:

var colors = ["yellow", "blue", "red", "orange"];

var i = 0;
while (i < colors.length) {
    console.log(colors[i]);
    i++;
}

// For Loop:

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// Nieuwe Stijl: Array Methods

colors.forEach(array => console.log(array));

/*
1.      Hoeveel regels neemt mijn for loop en mijn while loop in beslag?
            For Loop: Inclusief regel5, neemt mijn for loop 4 regels in beslag.
            While Loop: Inclusief regel5, neemt mijn while loop 6 regels in beslag.
2.      Hoeveel regels neemt mijn forEach method in beslag?
            Inclusief regel5, neemt mijn forEach method 2 regels in beslag.
3a.     Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? 
            - minder foutgevoelig
            - korter in regel
3b.     Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
            Met schrijven gaat mijn voorlopige voorkeur uit naar de for-loop. Dan staat alles bijelkaar tussen
            de parameters en kan ik niet een regel of een stap vergeten.
            Maar de while-loop is prettiger om te lezen omdat dan de stappen onder elkaar staan.
4.      Kun je een array method gebruiken op een object? Het antwoord is nee.
        Stel je hebt een object met 45 properties. 
        Probeer eens uit te zoeken (gebruik Google) hoe je tóch die 45 properties kunt console.loggen met een loop: 
        Looping through the properties of an object.
        Probeer dit stukje code uit en gebruik hier een object met 5 properties voor. Ben je nu aan het itereren?

*/