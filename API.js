// run script only once full page has loaded
document.addEventListener('DOMContentLoaded', function() {

    // free response input is submitted as a fetch request only once adjacent search button is clicked
    document.querySelector("#search").addEventListener("click", getPokemon);
  
    // this is the function used to draw data from the API by Pokemon ID (int) or name (string)
    function data() {
      fetch(`https://pokeapi.co/api/v2/pokemon/${arguments[0]}`)
        .then((response) => response.json())
        .then((data) => {
          document.querySelector(".pokeName").innerHTML = `${capitalizeFirstLetter(data.name)}`;
          document.querySelector(".statshead").innerHTML = `STATS`;
          document.querySelector(".ID").innerHTML = `ID: ${data.id}`;
          document.querySelector(".Weight").innerHTML = `Weight: ${data.weight}`;
          document.querySelector(".Height").innerHTML = `Height: ${data.height}`;
          document.querySelector(".Base_Experience").innerHTML = `Base Experience: ${data.base_experience}`;
          document.querySelector(".imageBox").innerHTML =
            `<img
              src="${data.sprites.other["official-artwork"].front_default}"
              alt="Pokemon name"
            />`;
          document.querySelector(".shiny").innerHTML = `SHINY`;
          document.querySelector(".shinyBox").innerHTML =
          `<img
              src="${data.sprites.front_shiny}"
              alt="Pokemon home"
            />`;
      });
    }
  
    // this runs a second fetch and is used as a secondary function to catch inputs that cannot fetch any data held by the API and deliver an error instead
    function error() {
      fetch(`https://pokeapi.co/api/v2/pokemon/${arguments[0]}`)
        .then((response) => response.json())
        .catch((err) => {
          document.querySelector(".pokeName").innerHTML = `Pokemon not found`;
          document.querySelector(".statshead").innerHTML = ` `;
          document.querySelector(".ID").innerHTML = ` `;
          document.querySelector(".Weight").innerHTML = ` `;
          document.querySelector(".Height").innerHTML = ` `;
          document.querySelector(".Base_Experience").innerHTML = ` `;
          document.querySelector(".imageBox").innerHTML =
          `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png" alt="Poké Ball icon.svg"></a>
          <a href="https://commons.wikimedia.org/w/index.php?curid=52462734"></a>`;
          document.querySelector(".shiny").innerHTML = ` `;
          document.querySelector(".shinyBox").innerHTML = ` `;
      });
    }
  
    // this is a list of short functions that use the data function above
    // they allow the red top header Pokemon labelled buttons to directly fetch details of that Pokemon
    // this is the first method the user may interact with the API
    charizard.addEventListener("click", function getpokes() {
      data(6);
    })
  
    gardevoir.addEventListener("click", function getpokes() {
      data(282);
    })
  
    sylveon.addEventListener("click", function getpokes() {
      data(700);
    })
  
    lucario.addEventListener("click", function getpokes() {
      data(448);
    })
  
    gengar.addEventListener("click", function getpokes() {
      data(94);
    })
  
    umbreon.addEventListener("click", function getpokes() {
      data(197);
    })
  
    garchomp.addEventListener("click", function getpokes() {
      data(445);
    })
  
    mimikyu.addEventListener("click", function getpokes() {
      data(778);
    })
  
    rayquaza.addEventListener("click", function getpokes() {
      data(384);
    })
  
    greninja.addEventListener("click", function getpokes() {
      data(658);
    })
  
    // these functions ensure that the free response input box is not case sensitive
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    function lowerCaseName(string) {
      return string.toLowerCase();
    }
  
    // this is the function used to fetch data from the API based on string input (Pokemon Name or ID as typed in by the user)
    // this is the second method that the user may use to interact with the API
    // if the user types in a string which is not recognised as one of the first 150 original Pokemon, it will return an error message ("Pokemon not found")
    // and defualt the image back to the Pokeball, whilst clearing other data fields
    function getPokemon() {
      const name = document.querySelector("#pokemonName").value;
      const pokemonName = lowerCaseName(name);
      data(pokemonName);
      error(pokemonName);
      }
  
    // this function iterates across all 150 of the Pokemon ID buttons by also using the data function above
    // this is the third method that the user may interact with the API
    for (let i = 1; i <= 150; i++) {
      const btn = document.createElement('numberbutton');
      const textnode = document.createTextNode([i]);
      btn.appendChild(textnode);
      document.getElementById("butbox").appendChild(btn);
      btn.addEventListener('click', () => {
          data(i);
      });
    }
  });
