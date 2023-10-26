export default (async function() {
	if (!window.location.pathname.includes("index.html")) return // guard clause
	const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
	const pokemon = await response.json()

    localStorage.setItem("pokemon", JSON.stringify(pokemon))
const savedPokemon = JSON.parse(localStorage.getItem("pokemon"))

console.log(pokemon)

document.querySelector(".hent").innerHTML = `
<h1>${savedPokemon.name}<h1>
<h2>Weight:${savedPokemon.weight}<h2>
<h3>${savedPokemon.abilities[0].ability.name}
`
})()