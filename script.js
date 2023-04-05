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
      <div class="container-caixaPokemon">
 
      <div class="poke-tipo-nome-imgs">
      <div class="poke-imgs">
      <div class="backpoke-imgs"></div>
      <img src="${data.sprites.other['official-artwork'].front_default}" alt="pokemon" class="poke-foto">
      </div>
      <div class="cabec-poke"> 
      <h1 class="nome-poke">${data.name}</h1>
      <div class="id-poke">${data.id < 10 ? `<p>#000${data.id}</p>` 
      : data.id < 100 && data.id >= 10  ? `<p>#00${data.id}</p>` 
      : data.id >= 100 && data.id <= 999 ? `<p>#0${data.id}</p>` 
      : data.id >= 1000 ? `<p>#${data.id}</p>` : `<p>Sem ID</p>`}
      </div>

      </div>
      </div>
      <div class="poke-tipos">
      ${data.types.length > 1 ? 
        `<p class="tipo1">${data.types[0].type.name} </p>` 
        + `<p class="tipo2">${data.types[1].type.name} </p>` 
        : `<p class="tipo1">${data.types[0].type.name} </p>`
      }
      </div>
      <div class="infoPokemon">

        <div class="poke-descri-sprite"> 
        <div class="poke-descricoes">
        <p id="textosabor"></p>
        <hr>
        <p>Peso: ${data.weight / 10}kg</p>
        <p id="alturaPokemon">Altura: ${data.height / 10}m</p>

        <div class="habil-ataqs">
        <div class="div-habil">
        <p>Habilidades:</p>
        <ul>
          <li>${data.abilities[0].ability.name}</li>
          ${data.abilities.length > 1 ? 
        `<li id="movespoke">${data.abilities[1].ability.name}</li>` : ''}
        </ul>
        </div>
        <div class="poke-ataques">
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
        
        
        
        
        </div>
        </div>

         
        
        
        </div>
         


        <div class="container-sprite">
        <h1 class="sprite-nome">Sprite</h1>
        <hr>
        <div class="div-sprite">
        <div class="poke-sprite">
           <img src="${data.sprites.front_default}" alt="sprite">
        </div>
        <div class="div-id-nome-sprite">
        <p class="id-nome-poke">${data.name}</p>
        <div class="id-nome-poke2">${data.id < 10 ? `<p>#000${data.id}</p>` 
      : data.id < 100 && data.id >= 10  ? `<p>#00${data.id}</p>` 
      : data.id >= 100 && data.id <= 999 ? `<p>#0${data.id}</p>` 
      : data.id >= 1000 ? `<p>#${data.id}</p>` : `<p>Sem ID</p>`}
       </div>
        </div>
        
        
        
        
        </div>
        </div>
      </div>
    </div>
      `;
      
      if (data.types[0].type.name === 'normal') {
        let tipo1 = document.querySelector(".backpoke-imgs");
        tipo1.style.backgroundColor = 'rgb(168, 167, 122)';
      } else if (data.types[0].type.name === 'fighting') {
        let tipo1 = document.querySelector(".backpoke-imgs");
        tipo1.style.backgroundColor = 'rgb(191, 48, 34)';
      } else if (data.types[0].type.name === 'flying') {
        let tipo1 = document.querySelector(".backpoke-imgs");
        tipo1.style.backgroundColor = 'rgb(155, 197, 218)';
      } else if (data.types[0].type.name === 'poison') {
        let tipo1 = document.querySelector(".backpoke-imgs");
        tipo1.style.backgroundColor = 'rgb(160, 64, 160)';
      } else if (data.types[0].type.name === 'ground') {
        let tipo1 = document.querySelector(".backpoke-imgs");
        tipo1.style.backgroundColor = 'rgb(226, 191, 101)';
      } else if (data.types[0].type.name === 'rock') {
        let tipo1 = document.querySelector(".backpoke-imgs");
        tipo1.style.backgroundColor = 'rgb(182, 161, 54)';
      } else if (data.types[0].type.name === 'bug') {
        let tipo1 = document.querySelector(".backpoke-imgs");
        tipo1.style.backgroundColor = 'rgb(141, 168, 47)';
      } else if (data.types[0].type.name === 'ghost') {
        let tipo1 = document.querySelector(".backpoke-imgs");
        tipo1.style.backgroundColor = 'rgb(100, 78, 136)';
      } else if (data.types[0].type.name === 'steel') {
        let tipo1 = document.querySelector(".backpoke-imgs");
        tipo1.style.backgroundColor = 'rgb(183, 183, 206)';
      } else if (data.types[0].type.name === 'fire') {
        let tipo1 = document.querySelector(".backpoke-imgs");
        tipo1.style.backgroundColor = 'rgb(253, 127, 44)';
      } else if (data.types[0].type.name === 'water') {
        let tipo1 = document.querySelector(".backpoke-imgs");
        tipo1.style.backgroundColor = 'rgb(84, 160, 255)';
      } else if (data.types[0].type.name === 'grass') {
        let tipo1 = document.querySelector(".backpoke-imgs");
        tipo1.style.backgroundColor = 'rgb(121, 196, 81)';
      } else if (data.types[0].type.name === 'electric') {
        let tipo1 = document.querySelector(".backpoke-imgs");
        tipo1.style.backgroundColor = 'rgb(255, 225, 73)';
      } else if (data.types[0].type.name === 'psychic') {
        let tipo1 = document.querySelector(".backpoke-imgs");
        tipo1.style.backgroundColor = 'rgb(253, 85, 145)';
      } else if (data.types[0].type.name === 'ice') {
        let tipo1 = document.querySelector(".backpoke-imgs");
        tipo1.style.backgroundColor = 'rgb(113, 209, 225)';
      } else if (data.types[0].type.name === 'dragon') {
        let tipo1 = document.querySelector(".backpoke-imgs");
        tipo1.style.backgroundColor = 'rgb(117, 103, 243)';
      } else if (data.types[0].type.name === 'fairy') {
        let tipo1 = document.querySelector(".backpoke-imgs");
        tipo1.style.backgroundColor = 'rgb(233, 141, 243)';
      } else if (data.types[0].type.name === 'dark') {
         let tipo1 = document.querySelector(".backpoke-imgs");
        tipo1.style.backgroundColor = 'rgb(64, 40, 64)';
      }






      if (data.types[0].type.name === 'normal') {
        let tipo1 = document.querySelector(".tipo1");
        tipo1.style.backgroundColor = 'rgb(168, 167, 122)';
      } else if (data.types[0].type.name === 'fighting') {
        let tipo1 = document.querySelector(".tipo1");
        tipo1.style.backgroundColor = 'rgb(191, 48, 34)';
      } else if (data.types[0].type.name === 'flying') {
        let tipo1 = document.querySelector(".tipo1");
        tipo1.style.backgroundColor = 'rgb(155, 197, 218)';
      } else if (data.types[0].type.name === 'poison') {
        let tipo1 = document.querySelector(".tipo1");
        tipo1.style.backgroundColor = 'rgb(160, 64, 160)';
      } else if (data.types[0].type.name === 'ground') {
        let tipo1 = document.querySelector(".tipo1");
        tipo1.style.backgroundColor = 'rgb(226, 191, 101)';
      } else if (data.types[0].type.name === 'rock') {
        let tipo1 = document.querySelector(".tipo1");
        tipo1.style.backgroundColor = 'rgb(182, 161, 54)';
      } else if (data.types[0].type.name === 'bug') {
        let tipo1 = document.querySelector(".tipo1");
        tipo1.style.backgroundColor = 'rgb(141, 168, 47)';
      } else if (data.types[0].type.name === 'ghost') {
        let tipo1 = document.querySelector(".tipo1");
        tipo1.style.backgroundColor = 'rgb(100, 78, 136)';
      } else if (data.types[0].type.name === 'steel') {
        let tipo1 = document.querySelector(".tipo1");
        tipo1.style.backgroundColor = 'rgb(183, 183, 206)';
      } else if (data.types[0].type.name === 'fire') {
        let tipo1 = document.querySelector(".tipo1");
        tipo1.style.backgroundColor = 'rgb(253, 127, 44)';
      } else if (data.types[0].type.name === 'water') {
        let tipo1 = document.querySelector(".tipo1");
        tipo1.style.backgroundColor = 'rgb(84, 160, 255)';
      } else if (data.types[0].type.name === 'grass') {
        let tipo1 = document.querySelector(".tipo1");
        tipo1.style.backgroundColor = 'rgb(121, 196, 81)';
      } else if (data.types[0].type.name === 'electric') {
        let tipo1 = document.querySelector(".tipo1");
        tipo1.style.backgroundColor = 'rgb(255, 225, 73)';
      } else if (data.types[0].type.name === 'psychic') {
        let tipo1 = document.querySelector(".tipo1");
        tipo1.style.backgroundColor = 'rgb(253, 85, 145)';
      } else if (data.types[0].type.name === 'ice') {
        let tipo1 = document.querySelector(".tipo1");
        tipo1.style.backgroundColor = 'rgb(113, 209, 225)';
      } else if (data.types[0].type.name === 'dragon') {
        let tipo1 = document.querySelector(".tipo1");
        tipo1.style.backgroundColor = 'rgb(117, 103, 243)';
      } else if (data.types[0].type.name === 'fairy') {
        let tipo1 = document.querySelector(".tipo1");
        tipo1.style.backgroundColor = 'rgb(233, 141, 243)';
      } else if (data.types[0].type.name === 'dark') {
         let tipo1 = document.querySelector(".tipo1");
        tipo1.style.backgroundColor = 'rgb(64, 40, 64)';
      }
     //Tipos2 abaixo

      if (data.types[1].type.name === 'normal') {
        let tipo2 = document.querySelector(".tipo2");
        tipo2.style.backgroundColor = 'rgb(168, 167, 122)';
      } else if (data.types[1].type.name === 'fighting') {
        let tipo2 = document.querySelector(".tipo2");
        tipo2.style.backgroundColor = 'rgb(191, 48, 34)';
      } else if (data.types[1].type.name === 'flying') {
        let tipo2 = document.querySelector(".tipo2");
        tipo2.style.backgroundColor = 'rgb(155, 197, 218)';
      } else if (data.types[1].type.name === 'poison') {
        let tipo2 = document.querySelector(".tipo2");
        tipo2.style.backgroundColor = 'rgb(160, 64, 160)';
      } else if (data.types[1].type.name === 'ground') {
        let tipo2 = document.querySelector(".tipo2");
        tipo2.style.backgroundColor = 'rgb(226, 191, 101)';
      } else if (data.types[1].type.name === 'rock') {
        let tipo2 = document.querySelector(".tipo2");
        tipo2.style.backgroundColor = 'rgb(182, 161, 54)';
      } else if (data.types[1].type.name === 'bug') {
        let tipo2 = document.querySelector(".tipo2");
        tipo2.style.backgroundColor = 'rgb(141, 168, 47)';
      } else if (data.types[1].type.name === 'ghost') {
        let tipo2 = document.querySelector(".tipo2");
        tipo2.style.backgroundColor = 'rgb(100, 78, 136)';
      } else if (data.types[1].type.name === 'steel') {
        let tipo2 = document.querySelector(".tipo2");
        tipo2.style.backgroundColor = 'rgb(183, 183, 206)';
      } else if (data.types[1].type.name === 'fire') {
        let tipo2 = document.querySelector(".tipo2");
        tipo2.style.backgroundColor = 'rgb(253, 127, 44)';
      } else if (data.types[1].type.name === 'water') {
        let tipo2 = document.querySelector(".tipo2");
        tipo2.style.backgroundColor = 'rgb(84, 160, 255)';
      } else if (data.types[1].type.name === 'grass') {
        let tipo2 = document.querySelector(".tipo2");
        tipo2.style.backgroundColor = 'rgb(121, 196, 81)';
      } else if (data.types[1].type.name === 'electric') {
        let tipo2 = document.querySelector(".tipo2");
        tipo2.style.backgroundColor = 'rgb(255, 225, 73)';
      } else if (data.types[1].type.name === 'psychic') {
        let tipo2 = document.querySelector(".tipo2");
        tipo2.style.backgroundColor = 'rgb(253, 85, 145)';
      } else if (data.types[1].type.name === 'ice') {
        let tipo2 = document.querySelector(".tipo2");
        tipo2.style.backgroundColor = 'rgb(113, 209, 225)';
      } else if (data.types[1].type.name === 'dragon') {
        let tipo2 = document.querySelector(".tipo2");
        tipo2.style.backgroundColor = 'rgb(117, 103, 243)';
      } else if (data.types[1].type.name === 'dark') {
        let tipo2 = document.querySelector(".tipo2");
        tipo2.style.backgroundColor = 'rgb(85, 76, 66)';
      } else if (data.types[1].type.name === 'fairy') {
        let tipo2 = document.querySelector(".tipo2");
        tipo2.style.backgroundColor = 'rgb(232, 145, 218)';
      } else if (data.types[1].type.name === 'shadow') {
        let tipo2 = document.querySelector(".tipo2");
        tipo2.style.backgroundColor = 'rgb(77, 77, 77)';
      }
    })

    .catch((err) => {
      console.error("Pokemon not found", err);
    });

    fetch(`https://pokeapi.co/api/v2/pokemon-species/${nome}`)
    .then(response => response.json())
    .then(data => {
      let textosabor = document.getElementById("textosabor").innerHTML = `
      <p id="textosabor">${data.flavor_text_entries[1].flavor_text}</p>
      `
    })   
    /*PARA EDIÇÃO---------------------------------------------------------------------------------------
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${nome}`;
    fetch(pokemonUrl)
    .then(response => response.json())
    .then(data => {
    // Pegar o número do Pokémon a partir da URL
    const pokemonNumber = data.id;

    // Montar a URL da imagem usando o número do Pokémon
    const pokemonImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`;

    // Fazer o fetch da imagem e definir como plano de fundo
      fetch(pokemonImageUrl)
      .then(response => response.blob())
      .then(blob => {
        const imagemBlobUrl = URL.createObjectURL(blob);
        document.querySelector(".poke-foto").style.backgroundImage = `url('${imagemBlobUrl}')`;
      });
  })
  .catch(error => console.error(error));
  PARA EDIÇÃO----------------------------------------------------------------------------------------------

  */
    /* Comentando por enquanto
    for (let i = 1; i < 200; i++) {
      (function (i) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error('Pokemon não encontrado');
            }
            return response.json();
          })
          .then((data) => {
            let listul = document.querySelector('.listul');
            let listli = document.createElement('li');
            let img = document.createElement('img');
            let label = document.createElement('label');

            listli.classList.add("listli");

            label.innerHTML = data.name;
            img.src = data.sprites.front_default;
            img.alt = data.name;
            listli.appendChild(img);
            listli.appendChild(label);
            listul.appendChild(listli);
          })
          .catch((err) => {
            console.error(err);
          });
      })(i);


    }
*/
 //Proximo passo é ordenar a listagem

}

//Comentei e estou estilizando