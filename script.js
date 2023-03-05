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

      <div class="nome-tipo"> 
      <h1 class="nome-poke">${data.name}</h1>
      <p class="tipo1">${data.types[0].type.name} </p>
      
      </div>

      <div class="poke-imgs">
        <img src="${data.sprites.other['official-artwork'].front_default}" alt="pokemon" class="poke-foto">
        <div class="poke-sprite">
        <label><strong>Sprite:</strong></label>
        <img src="${data.sprites.front_default}" alt="sprite">
      </div> 
      </div>
      <div class="infoPokemon">

        <div class="poke-descri-sprite"> 
        <div class="poke-descricoes">
        <h1>Descrição</h1>
        <p>Peso: ${data.weight / 10}kg</p>
        <p>Tipo: ${data.types[0].type.name}</p>
        <p id="alturaPokemon">Altura: ${data.height / 10} metros</p> 

        <p>Habilidades:</p>
        <ul>
          <li>${data.abilities[0].ability.name}</li>
          ${data.abilities.length > 1 ? 
        `<li id="movespoke">${data.abilities[1].ability.name}</li>` : ''}
        </ul>
        </div>

         
        
        
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
      `;
      
      if (data.types[0].type.name === 'normal') {
        document.querySelector('.tipo1').style.backgroundColor = '#A4ACAF'
      } else if (data.types[0].type.name === 'bug') {
        document.querySelector('.tipo1').style.backgroundColor = '#89940A'
      } else if (data.types[0].type.name === 'dark') {
        document.querySelector('.tipo1').style.backgroundColor = '#3E2D23'
      } else if (data.types[0].type.name === 'dragon') {
        document.querySelector('.tipo1').style.backgroundColor = '#6756B5'
      } else if (data.types[0].type.name === 'electric') {
        document.querySelector('.tipo1').style.backgroundColor = '#F9B718'
      } else if (data.types[0].type.name === 'fairy') {
        document.querySelector('.tipo1').style.backgroundColor = '#F0ABEE'
      } else if (data.types[0].type.name === 'fighting') {
        document.querySelector('.tipo1').style.backgroundColor = '#141640'
      } else if (data.types[0].type.name === 'fire') {
        document.querySelector('.tipo1').style.backgroundColor = '#C72101'
      } else if (data.types[0].type.name === 'flying') {
        document.querySelector('.tipo1').style.backgroundColor = '#8D9EE8'
      } else if (data.types[0].type.name === 'ghost') {
        document.querySelector('.tipo1').style.backgroundColor = '#474896'
      } else if (data.types[0].type.name === 'grass') {
        document.querySelector('.tipo1').style.backgroundColor = '#2B570E'
      } else if (data.types[0].type.name === 'ground') {
        document.querySelector('.tipo1').style.backgroundColor = '#D2AF55'
      } else if (data.types[0].type.name === 'ice') {
        document.querySelector('.tipo1').style.backgroundColor = '#EA467F'
      } else if (data.types[0].type.name === 'poison') {
        document.querySelector('.tipo1').style.backgroundColor = '#752C77'
      } else if (data.types[0].type.name === 'psychic') {
        document.querySelector('.tipo1').style.backgroundColor = '#E64078'
      } else if (data.types[0].type.name === 'rock') {
        document.querySelector('.tipo1').style.backgroundColor = '#9B8638'
      } else if (data.types[0].type.name === 'steel') {
        document.querySelector('.tipo1').style.backgroundColor = '#8F8EA0'
      } else if (data.types[0].type.name === 'water') {
        document.querySelector('.tipo1').style.backgroundColor = '#1574CF'
      }     
    

      data.sprites.other['official-artwork'].front_default.classList.add("fotopoke");
    })
    .catch((err) => {
      console.error("Pokemon not found", err);
    });

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

 //Proximo passo é ordenar a listagem

}

//Comentei e estou estilizando