document.querySelector('#pesquisa').addEventListener('click', pokeapi);

function pokeapi(e) {
  const nome = document.querySelector('#nomePokemon').value;
  e.preventDefault();

    fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
    .then((response) => {
      return response.json();
    }).then((data) => {
      document.querySelector('#caixaPokemon').innerHTML = `
      <div>
        <img src="${data.sprites.other['official-artwork'].front_default}" alt="pokemon">
      </div>
      <div class="infoPokemon">
        <h1>${data.name}</h1>
        <p>Peso: ${data.weight}</p>
        <p>Tipo: ${data.types[0].type.name}</p>
      </div>
      `;
    })
    .catch((err) => {
      console.log("Pokemon not found", err);
    });

}