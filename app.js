const options = {
	method: 'GET',
	headers: {
		'app_token': '46w8lq34g5efg6xcnpsulgok0',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};

fetch('https://open-weather13.p.rapidapi.com/city/landon', options)
.then((res) => res.json())
.then((response) => {
  /* console.log(response); */
  response.forEach((element) => {
    const article = document.createRange().createContextualFragment(
      `
      <div class="card" style="width: 18rem;">
                  <img src="${element.thumbnail}" class="card-img-top" alt="${game.title}">
                      <div class="card-body">
                      <h5 class="card-title">${game.title}</h5>
                      <p class="card-text">Platform: ${game.platform}</p>
                      <p class="card-text">Genre: ${game.genre}</p>
                      <p class="card-text">Developer: ${game.developer}</p>
                      <button class="btn btn-secondary" type="button">add to cart</button>
                  </div>
                  </div>
              </div>
      `
      );
      const main = document.querySelector("main");

      main.append(article);
  });
});