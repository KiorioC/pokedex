class Pokemon {
    constructor(data, details) {
        this.name = data.name;
        this.id = details.id;
        this.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`;
        this.types = details.types;
        this.height = details.height;
        this.weight = details.weight;
    }

    getTypeImages() {
        const typeIds = this.types.map((type) => {
            const urlParts = type.type.url.split('/');
            return urlParts[urlParts.length - 2];
        });

        return typeIds.map(id => `
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/omega-ruby-alpha-sapphire/${id}.png"/>
        `).join(' ');
    }

    getList() {
        return `
            <li class="card" onclick="pokedex.selectPokemon(${this.id})">
                <img class="card-image" src="${this.image}"/>
                <h2 class="card-title">${this.id}. ${this.name}</h2>
                <p>Types: ${this.getTypeImages()}</p>
            </li>
        `;
    }

    getPopup() {
        return `
            <div class="popup">
                <button id="closeBtn" onclick="pokedex.closePopup()">Close</button>
                <div class="card">
                    <img class="card-image" src="${this.image}"/>
                    <h2 class="card-title">${this.name}</h2>
                    <p>Type: ${this.getTypeImages()} | Height: ${this.height} | Weight: ${this.weight}</p>
                </div>
            </div>
        `;
    }
}

class Pokedex {
    constructor() {
        this.pokedexElement = document.getElementById('pokedex');
        this.cachedPokemon = {};
        console.log("Pokedex initialized");
        this.fetchPokemon();
    }

    async fetchPokemon() {
        console.log("Fetching Pokemon list...");
        const url = `https://pokeapi.co/api/v2/pokemon?limit=151`;
        const res = await fetch(url);
        const data = await res.json();

        const pokemonList = await Promise.all(
            data.results.map(async (data, index) => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${index + 1}`);
                const pokemonDetails = await res.json();
                console.log(`Fetched details for Pokemon: ${data.name}`);
                return new Pokemon(data, pokemonDetails);
            })
        );

        pokemonList.forEach(pokemon => {
            this.cachedPokemon[pokemon.id] = pokemon;
        });

        console.log("All Pokemon fetched and cached.");
        this.displayPokemon(pokemonList);
    }

    displayPokemon(pokemonList) {
        console.log("Displaying Pokemon list...");
        const pokemonHtmlString = pokemonList.map((pokemon) => pokemon.getList()).join('');
        this.pokedexElement.innerHTML = pokemonHtmlString;
    }

    selectPokemon(id) {
        console.log(`Selected Pokemon ID: ${id}`);
        if (this.cachedPokemon[id]) {
            this.displayPokemonPopup(this.cachedPokemon[id]);
        } else return console.error("Selected Pokemon not Cached!");
    }

    displayPokemonPopup(pokemon) {
        console.log(`Displaying popup for Pokemon: ${pokemon.name}`);
        const htmlString = pokemon.getPopup();
        this.pokedexElement.innerHTML = htmlString + this.pokedexElement.innerHTML;
    }

    closePopup() {
        console.log("Closing popup...");
        const popup = document.querySelector('.popup');
        if (popup) {
            popup.parentElement.removeChild(popup);
        }
    }
}

const pokedex = new Pokedex();
