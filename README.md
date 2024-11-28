# Pokedex Project

## Description
This project is an interactive Pokedex that displays the first 151 Pokémon of the first generation. The application allows users to view information about each Pokémon, including types, size, weight, and images. The Pokedex is built with JavaScript and uses the [PokéAPI](https://pokeapi.co) for Pokémon data.

## Features
- Display of the first 151 Pokémon with image, name, and types.
- Ability to click on a Pokémon to get detailed information.
- Popup window with detailed information, including types, size, and weight.
- Caching of Pokémon data to avoid unnecessary API requests and reduce loading time.

## Technologies
- **HTML, CSS**: For the layout and styling of the user interface.
- **JavaScript**: Mainly for logic, data processing, and interaction with the API.
- **PokéAPI**: A free API that provides information about all Pokémon.

## Installation
1. **Clone the repository**
   ```bash
   git clone <repository-url>
   ```
2. **Navigate to the directory**
   ```bash
   cd pokedex-project
   ```
3. **Start**
   Open the `index.html` file in your browser to view the Pokedex.

## Usage
- **View Pokémon**: All first-generation Pokémon are displayed in a list.
- **Get more details**: Click on a Pokémon to see more information. A popup will show additional details such as types, size, and weight.
- **Close popup**: Use the "Close" button to close the popup.

## Caching
To improve efficiency, the Pokedex caches the Pokémon data that has already been fetched. This means that if a Pokémon has been retrieved before, it will be loaded directly from the cache without making a new request.

## API
The project uses the [PokéAPI](https://pokeapi.co) for data. This includes basic Pokémon information (name, URL) as well as detailed data such as types, size, and weight.

## Improvements
- **Add more generations**: Currently, only the first 151 Pokémon are displayed. The project could be expanded to include later generations.
- **Search and filter**: Add a search or filter function to make it easier to find specific Pokémon.
- **Design improvements**: The layout and styling of the Pokedex could be improved to enhance the user experience.

## License
This project is licensed under the MIT License. For more information, see the `LICENSE` file.

## Acknowledgments
A big thank you to the developers of [PokéAPI](https://pokeapi.co) for providing the data that made this project possible.

