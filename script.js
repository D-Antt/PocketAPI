//this is cheaper computationally
const imgContainer = document.querySelector("#main-image-container img ");

//here is where we put the caption
const caption = document.getElementById("poke-img-caption");

//get the data from API
fetch("https://pokeapi.co/api/v2/pokemon/56")
.then((res) => res.json())
.then((json) => {
    const pokemon = json;
    const name = pokemon.name;
    const imgSrc = pokemon.sprites.other["official-artwork"].front_default;
    caption.innerText = name;
    imgContainer.src = imgSrc;
    imgContainer.alt = name;
})
.catch((err) => console.log(err));
