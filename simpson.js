  document.querySelector("#myBtn").addEventListener("click", function fetchPokemonJSON() {
    // Feel free to download this HTML and edit it, to use another Pokemon ID
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
    axios.get(url)
      .then(function(response) {
        return response.data; // response.data instead of response.json() with fetch
      })
      .then(function(simpson) {
        console.log('data decoded from JSON:', simpson);
        
        
        // Build a block of HTML
        const simpsonHtml = `
          <p><strong>${simpson[0].character}</strong></p>
          <img src="${simpson[0].image}" />
          <p><strong>${simpson[0].quote}<strong/></p>
        `;
        document.querySelector('#simpson').innerHTML = simpsonHtml;
      });
  });
  