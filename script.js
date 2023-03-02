document.querySelector('#pesquisa').addEventListener('click', pokeapi);

function pokeapi(e) {
  const nome = document.querySelector('#nomePokemon').value;
  e.preventDefault();

    fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Pokemon não encontrado');
      }
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
          ${data.abilities.length > 1 ? 
        `<li id="movespoke">${data.abilities[1].ability.name}</li>` : ''}
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

    for (let i = 1; i < 200; i++) {
      (function (i) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error('Pokemon not found');
            }
            return response.json();
          })
          .then((data) => {
            let listul = document.querySelector('.listagemPokemon');
            let listli = document.createElement('li');
            let img = document.createElement('img');

            img.src = data.sprites.front_default;
            img.alt = data.name;
            listli.appendChild(img);
            listul.appendChild(listli);
          })
          .catch((err) => {
            console.error(err);
          });
      })(i);
    }

    /*
    for (let i = 1; i < 200; i++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Pokemon not found');
        }
        return response.json();
      }) .then((data) => {
        let listul = document.querySelector('.listagemPokemon');
        let listli = document.createElement('li');

        listli.appendChild(document.createTextNode(`https://pokeapi.co/api/v2/pokemon/${i}`))
        listul.appendChild(listli);
      }).catch((err) => {
        console.error(err);
      });
    }
    */
}

//Comentei e estou estilizando