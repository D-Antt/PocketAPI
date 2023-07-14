const imgContainer = document.querySelector("#pokeCon img");
const pokeName = document.getElementById("name");
const pokeSpecies = document.getElementById("species");
const pokeWeight = document.getElementById("weight");
const pokeHeight = document.getElementById("height");
const abilitiesList = document.getElementById("abilitiesList");
const getPokeButton = document.getElementById("getPokeButton");
//utility functions
function setImgSrcAndAlt(imgNode, imgSrc, imgAlt){
    imgNode.src = imgSrc;
    imgNode.alt = imgAlt;
}

function setNodeText(domNode,text){
    domNode.innerText = text;
}

//project-specific function
function setPokeBasics(pokemon) {
    setNodeText(pokeName,`NAME: ${pokemon.name}`);
    setNodeText(pokeSpecies,`SPECIES: ${pokemon.species.name}`);
    setNodeText(pokeWeight, `HEIGHT: ${pokemon.height}`);
    setNodeText(pokeHeight, `WEIGHT: ${pokemon.weight}`);
}

function setPokeAbilities(pokemon) {
    let htmlString = '';
    pokemon.abilities.forEach((item)=>{
        htmlString += `<li>${item.ability.name}</li>`;
    });
    abilitiesList.innerHTML = htmlString;
}

function createPokeProfile(pokemon){
    const imgSrc = pokemon.sprites.other["official-artwork"].front_default;
    setImgSrcAndAlt(imgContainer, imgSrc, pokemon.name);
    setPokeBasics(pokemon);
    setPokeAbilities(pokemon);
}

function getRandomPokemon(){
    const randomPokeId = Math.floor(Math.random() * 1000 +1);
    console.log(randomPokeId);
    //get the data from API
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokeId}`)
    .then((res) => res.json())
    .then((json) => {
        const pokemon = json;
        createPokeProfile(pokemon)
    })
    .catch((err) => console.log(err));
}

getPokeButton.addEventListener("click", function () {
    getRandomPokemon();
});

getRandomPokemon();
