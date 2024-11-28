# Pokedex Projekt

## Beschreibung
Dieses Projekt ist ein interaktives Pokedex, das die ersten 151 Pokémon der ersten Generation anzeigt. Die Anwendung ermöglicht es, Informationen über jedes Pokémon abzurufen, darunter Typen, Größe, Gewicht und Bilder. Das Pokedex ist in JavaScript erstellt und nutzt die [PokéAPI](https://pokeapi.co) für die Pokémon-Daten.

## Features
- Anzeige der ersten 151 Pokémon mit Bild, Name und Typen.
- Möglichkeit, auf ein Pokémon zu klicken, um detaillierte Informationen zu erhalten.
- Popup-Fenster mit detaillierten Informationen, einschließlich der Typen, Größe und Gewicht.
- Caching der Pokémon-Daten, um unnötige API-Abfragen zu vermeiden und die Ladezeit zu verkürzen.

## Technologien
- **HTML, CSS**: Für das Layout und die Gestaltung der Benutzeroberfläche.
- **JavaScript**: Hauptsächlich für die Logik, Datenverarbeitung und die Interaktion mit der API.
- **PokéAPI**: Eine kostenlose API, die Informationen zu allen Pokémon bereitstellt.

## Installation
1. **Klonen des Repositories**
   ```bash
   git clone <repository-url>
   ```
2. **In das Verzeichnis wechseln**
   ```bash
   cd pokedex-projekt
   ```
3. **Starten**
   Öffne die `index.html` Datei im Browser, um das Pokedex zu sehen.

## Verwendung
- **Pokémon ansehen**: Alle Pokémon der ersten Generation werden in einer Liste dargestellt.
- **Mehr Details abrufen**: Klicke auf ein Pokémon, um weitere Informationen anzuzeigen. Ein Popup zeigt zusätzliche Details wie Typen, Größe und Gewicht.
- **Popup schließen**: Benutze den "Close"-Button, um das Popup zu schließen.

## Caching
Um die Effizienz zu erhöhen, speichert das Pokedex die bereits abgerufenen Pokémon-Daten im Cache. Das bedeutet, dass wenn ein Pokémon bereits einmal abgerufen wurde, es ohne eine neue Anfrage direkt aus dem Cache geladen wird.

## API
Das Projekt nutzt die [PokéAPI](https://pokeapi.co) für die Daten. Dies umfasst die grundlegenden Pokémon-Informationen (Name, URL) sowie detaillierte Daten wie Typen, Größe und Gewicht.

## Verbesserungsvorschläge
- **Weitere Generationen hinzufügen**: Aktuell werden nur die ersten 151 Pokémon angezeigt. Es wäre möglich, das Projekt zu erweitern, um auch spätere Generationen einzubeziehen.
- **Suche und Filter**: Hinzufügen einer Such- oder Filterfunktion, um das Finden eines bestimmten Pokémon zu erleichtern.
- **Design-Verbesserungen**: Das Layout und das Styling des Pokedex könnten noch verbessert werden, um die Benutzererfahrung zu steigern.

## Lizenz
Dieses Projekt ist unter der MIT-Lizenz lizenziert. Weitere Informationen findest du in der `LICENSE` Datei.

## Danksagung
Ein großes Dankeschön an die Entwickler von [PokéAPI](https://pokeapi.co) für die Bereitstellung der Daten, die dieses Projekt ermöglicht haben.

