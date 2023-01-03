const input = document.getElementById("input");
const img = document.querySelector("img");
const button = document.getElementById("btn");
const container = document.getElementById("container")
const h3 = document.querySelectorAll("h3");
const ulStats = document.getElementById("pokemon_stats");
const ulAbilties = document.getElementById("pokemon_abilties");
const h1 = document.getElementById("pokemon_name");


button.onclick = () => {
    if(input.value.trim().length === 0){
       return alert("Write the name of the Pokemon");     
       // do createElement DIV!!!!   
    }
    container.classList.add("card");
    
    async function findPokemon() {
    const data = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${input.value.toLowerCase()}/`
    );
    const result = await data.json();

    // Name of Pokemon
    const pokemonName = result.species.name;
    h1.innerText = ` ${
      pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)
    }`;
 
    // Stats
    const stats = result.stats;
    stats.map((e) => {
      const liElem = document.createElement("li");
      liElem.innerText = `${e.stat.name}`;
      h3[0].innerText = "Stats:";
      ulStats.append(liElem);
    });

    //abilities
    const abilities = result.abilities;
    abilities.map((e) => {
      const liElem = document.createElement("li");
      liElem.innerText = `${e.ability.name}`;
      h3[1].innerText = "Abilities:";
      ulAbilties.append(liElem);
    });

    // Foto
    const spritesOther = result.sprites.other;
    const imgAddres = Object.values(spritesOther);
    imgAddres.map((e) => {
      img.src = e.front_default;
    });
  }
  findPokemon();
  input.value = "";
};
