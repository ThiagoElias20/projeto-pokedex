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
        <p>Peso: ${data.weight / 10}kg</p>
        <p>Tipo: ${data.types[0].type.name}</p>
        <p id="alturaPokemon">Altura: ${data.height / 10} metros</p>
        <label><strong>Sprite:</strong></label>
        <div>
        <img src="${data.sprites.front_default}" alt="sprite">
      </div>  
      <h1>Habilidades</h1>
        <ul>
          <li>${data.abilities[0].ability.name}</li>
          <li>${data.abilities[1].ability.name}</li>
        </ul>
        
        <h1>Ataques iniciais</h1>
        <ul>
        <li id="movespoke">${data.moves[0].move.name}</li>

        ${data.moves.length > 1 ? 
        `<li id="movespoke">${data.moves[1].move.name}</li>` +
        `<li id="movespoke">${data.moves[2].move.name}</li>` +
        `<li id="movespoke">${data.moves[3].move.name}</li>`
         : ''}
        </ul>
      </div>
      `;
    })
    .catch((err) => {
      console.error("Pokemon not found", err);
    });

}