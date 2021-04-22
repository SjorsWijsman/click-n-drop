# Human Centered Design @cmda-minor-web 2021
Test Links: https://sjorswijsman.github.io/human-centered-design-2021/

## Week 1: User Tests
### Voorbereide Tests
Het doel van deze week was een goede nulmeting maken en Marijn leren kennen. Om een goed idee te krijgen van de problemen die Marijn ondervindt bij het gebruiken van een typisch Drag & Drop systeem hebben we als groep een test voorbereid. Vervolgens heb ik op basis van deze test (Keyboard Only) nog 3 andere tests uitgewerkt. Deze tests zijn hier te vinden:

1. [Drag & Drop](https://sjorswijsman.github.io/human-centered-design-2021/week-1/drag-and-drop/)
2. [Click & Drop](https://sjorswijsman.github.io/human-centered-design-2021/week-1/click-and-drop/)
3. [Keyboard Only](https://sjorswijsman.github.io/human-centered-design-2021/week-1/keyboard-only/)
4. [Buttons](https://sjorswijsman.github.io/human-centered-design-2021/week-1/button-move/)  

Deze 4 tests hebben alle 4 een andere manier om te interacteren met een Trello-achtig Kanban board. De eerste (Drag & Drop) is bedoeld als nulmeting om een goed idee te krijgen van de huidige situatie. Nummer twee (Click & Drop) is een variatie op de Drag & Drop waarbij de muis niet ingedrukt gehouden hoeft te worden. De laatste twee zijn meer experimenteel. De Keyboard Only oplossing laat de gebruiker met de pijltjes de kaartjes rondbewegen en met tab door de kaartjen heen navigeren. Het laatste concept laat de gebruiker door middel van joystick knopjes de kaartjes rondbewegen.

### Verwachtingen
Doordat de case beschreef dat Marijn vooral met het toetsenbord navigeert gingen we er van uit dat het Keyboard Only concept het beste zou werken. Daarnaast verwachtte we dat de Click & Drop beter zou werken voor Marijn dan Drag & Drop.

### Resultaten
**Test Resultaten**  
1. Drag & Drop
  - Ging verrassend soepel. Maakt gebruik van de trackpad met 1 hand.
  - Het kaartje verder slepen over het scherm is soms lastig.
2. Click & Drop
  - Klikken ging makkelijker voor Marijn dan het Drag systeem, zoals verwacht.
  - Verder slepen gaat hierdoor ook makkelijker omdat Marijn de knop los kan laten om zijn hand opnieuw te positioneren.
  - Marijn probeerde ook de kaarten opnieuw te ordenen, nieuwe kolommen aan te maken, en andere functionaliteiten die je vaak bij dit soort apps ziet.
  - Mogelijk meerder kaarten tegelijk oppakken en verplaatsen?
3. Keyboard Only
  - Selecteren van de kaartjes gaat op zich goed, echter lastiger voor Marijn om terug te gaan met shift + tab.
  - Verplaatsen van de kaarten gaat ook goed, functionaliteit kan beter door de kaartjes bijvoorbeeld "rond" te laten gaan.
  - Selectie kan niet unselected worden.
4. Buttons
  - Het is niet duidelijk geneog waar een kaart heen verplaatst is.
  - Om de kaart meerdere rijen te verplaatsen is een hoop klik- en muiswerk nodig.
  - Tabben is nog steeds geen geweldige interactie voor Marijn.

**Marijns Persoonlijkheid & Beperking**  
We hebben Marijn ook een aantal persoonlijke vragen gesteld om erachter te komen wat zijn persoonlijkheid is en hoe hij met zijn computer/laptop omgaat. Marijn heeft een gezin met twee kinderen (beide jongens) en werkt als technische chief architect. Hij zorgt ervoor dat onderandere de metadata van muziek klopt. Hij luistert voornamelijk naar "takkeherrie" (lees: metal) en heeft geen favoriete kleur; hij gebruikt wel altijd dark mode. 

Hij bestuurt zijn computer met 3 beeldschermen voornamelijk doormiddel van een trackpad. Dit trackpad gebruikt hij met 1 hand (voornamelijk zijn duim) dit is makkelijker voor hem dan gebruik maken van een keyboard omdat het gebruik van een trackpad minder fijne motoriek vereist. Het valt op dat zijn hele lichaam veel beweegt tijdens het gebruik van zijn computer. Toetsen die ver weg zitten van het trackpad of ver uit elkaar zitten zijn lastig voor Marijn om snel te bereiken; hij bereikt ze echter wel altijd!

### Conclusie
De test met click & drop werkte veruit het beste voor Marijn. Hieruit kan een conclusie getrokken worden dat Marijn vooral zijn trackpad wilt gebruiken om een app te besturen. Ik ga me dus richten op het verder uitwerken van dit concept met een grote focus op het zo makkelijk mogelijk maken van het besturen met een trackpad.

### Doel voor volgende week
- [x] Herordenen van kaartjes
- [x] Toevoegen van kaartjes
- [x] Marijns interesse in metal implementeren
- [x] Nonsense toevoegen


## Week 2: Eerste Concept
### Voorbereide Test
Deze week heb ik het Click & Drop concept verder uitgewerkt en Marijns interesse in "takkeherrie" terug laten komen. Door alle kaartjes titels van Metal nummers te geven heeft Marijn ook meteen een doel in het gebruik van de app; het zetten van alle kaartjes op de goede plek. Wanneer alle kaartjes op de goede plek staan wordt de gebruiker beloont met een speciale "Fire Mode". Het resultaat hiervan is hier te vinden:
- [Click 'n Drop](https://sjorswijsman.github.io/human-centered-design-2021/week-2/).

### Verwachtingen
Mijn verwachting is dat het nog steeds fijn te gebruiken is voor Marijn omdat ik qua interactie niet bijzonder veel heb toegevoegd. Ik was vooral benieuwd naar hoe snel hij de app door zou hebben zonder instructies en wat hij ermee zal proberen te doen. (Bijvoorbeeld gebruik van keyboard)

### Resultaten
Helaas was Marijn de afspraak vergeten en hebben we dus getest met Vasilis. Vasilis vertelde dat hij meteen begon met het uitproberen van het rondbewegen met het keyboard. Daarnaast vond hij dat de selected state nog niet duidelijk genoeg was. Een aantal songs kwamen toevallig meteen in de goede kolom wat het een stuk makkelijker maakte voor Vasilis om de kaarten op de goede plek te krijgen. Hij miste een indicatie waar de kaart komt te staan wanneer hij klikt. Daarnaast viel het me op dat hij probeerde om het kaartje in de fik te zetten.

### Conclusie
Er zijn een aantal heel duidelijke resultaten uitgekomen die ik ook al een beetje zag aankomen, zoals 'feedforward' waar de kaart komt te staan. Over het algemeen ben ik wel tevreden met het product, er mist alleen nog een extra laag om het wat specialer te maken; het is nog een beetje te braaf. De to-do's die ik uit deze resultaten gehaald heb zijn hieronder te zien:

### Doel voor volgende week
Must Have:
- [x] Betere selected state
- [x] 'Ghost' waar het kaartje komt te staan
- [x] Kaartjes laten branden in het vuur
- [x] Betere plek voor de "Fire Mode" counter (verwijderd lol)

Could Have:
- [ ] Interactie met Keyboard
- [ ] Nieuwe songs niet in de juiste kolom neerzetten
- [x] Delete animatie
- [x] Fix Fire.gif tiling issue
- [ ] Lasers? - Destroy mode


## Week 3: Verbetering Concept
### Voorbereide test
Na vorige week ben ik verder gegaan met het verder uitwerken van het concept week. Ik heb de selected state verbeterd, 'ghosts' toegevoegd waar het kaartje komt te staan als de gebruiker nog eens klikt en de kaartjes gaan nu ook in de fik wanneer de gebruiker het kaartje in het vuur houdt. Daarnaast heb ik een kleine explosie toegevoegd wanneer kaartjes verwijderd worden. Ik hoop met deze kleine toevoegingen het concept leuker en duidelijker is om te gebruiken. Het testconcept is [hier te vinden](https://sjorswijsman.github.io/human-centered-design-2021/week-3/)

### Verwachtingen
Doordat we vorige week niet hebben kunnen testen met Marijn ben ik vooral benieuwd naar wat Marijn er zelf van vindt. Qua gemak heb ik deze week weinig veranderd omdat ik benieuwd ben naar hoe Marijn het concept nu gebruikt. Aan de hand daarvan wil ik nog aanpassingen maken voor het eindproduct.

### Resultaten
Hij zei het zelf niet maar ik merkte dat de Delete knop soms erg ver zit van het kaartje dat hij selecteert. Daarnaast gaat er soms wat fout bij het verplaatsen van de kaartjes onderling (mogelijk te fixen met een soort delay?). Daarnaast kent hij de nummers van Iron Maiden niet zo goed om de nummers op de goede plek te krijgen. Hij noemde zelf ook dat wanneer hij een kaart ver weg van de sections probeert te plaatsen hij verwacht dat de kaart terug gaat naar z'n startpositie.

### Conclusie
Ik heb weer wat extra dingen om uit te werken voor het eindconcept. Hij noemde dat "het werkt zoals een drag & drop hoor te werken". Mogelijk wil ik dus nog een totaal andere (optionele) manier uitwerken om de kaartjes te verplaatsen.

Beweging van boven naar benden lijkt beter te gaan dan van links naar rechts - misschien dat ik er dus voor kan zorgen dat de delete knop er altijd onder staat.

### Doel voor volgende week
Must Have:
- [ ] Interactie met Keyboard
- [ ] Lasers? - Destroy mode
- [ ] Terugzetten wanneer er ver buiten sections geklikt wordt
- [ ] Iron Maiden vervangen
- [ ] Makkelijker verwijderen van kaartjes (dichterbij)

Could Have:
- [ ] Alternatieve interactiemanier
- [ ] Nieuwe songs niet in de juiste kolom neerzetten
- [ ] Meerdere kaartjes oppakken