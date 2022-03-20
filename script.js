
const getAllGames = async () => {
  try {
    const response = await fetch('https://cs-steam-api.herokuapp.com/games?limit=25');
    const allGames = await response.json();
    return allGames;
  } catch (err) {
    console.log(err)
  }
}

const renderAllGames = async () => {
  try {
    const allGames = await getAllGames();
    const showGames = document.querySelector(".showGames");
    allGames.data.forEach((game, index) => {
      const app = allGames.data[index].appid;
      const appid = document.createElement("div");
      appid.innerHTML = `<div class="background">
                       <div class="game_wrapper">
                         <div class="cover">
                           <img src="${game.header_image}">
                           <div class="game_info">
                             <p>${game.name}</p>
                             <p>${game.price} $</p>
                           </div>
                         </div>
                       </div>
                     </div>`;
      showGames.appendChild(appid);
      appid.addEventListener("click", () => {
        renderDetailGame(app);
      })
    })
  } catch (err) {
    console.log(err);
  }
}
renderAllGames();

const renderDetailGame = async (app) => {
  try {
    const number = parseInt(app);
    const url = `https://cs-steam-api.herokuapp.com/single-game/${number}`;
    const resp = await fetch(url);
    const detailGames = await resp.json();
    const showGames = document.querySelector(".showGames");
    showGames.innerHTML = "";
    showGames.innerHTML = `<div class="showDetailGame" style="background-image: url(${detailGames.data.background})">
            <div class="detail">
              <div class="name">
                <h2>${detailGames.data.name}</h2>
                <p>Price:${detailGames.data.price}</p>
              </div>
              <div class="picture">
                <div class="img">
                  <img src="${detailGames.data.header_image}" alt="picture">
                </div>
                <div class="text">
                  <p>${detailGames.data.description}</p>
                  
                </div>
              </div>
              <div class="seeMore">
                <a href="">About more</a>
                <a href="">Get</a>
              </div>
            </div>
        </div>
      </div> `
  } catch (err) {
    console.log(err);
  }
}

const button = document.querySelector('#btn');
button.addEventListener('click', () => {
  renderListGamesToInput();
});

const renderListGamesToInput = async () => {
  try {
    const input = document.querySelector("#searchForm");
    const inputValue = input.value;
    const url = `https://cs-steam-api.herokuapp.com/games?q=${inputValue}&limit=25`
    const res = await fetch(url);
    const listGames = await res.json();
    const showGames = document.querySelector(".showGames");
    showGames.innerHTML = "";
    listGames.data.forEach((game, index) => {
      const app = listGames.data[index].appid;
      const div = document.createElement("div");
      div.innerHTML = `<div class="background">
                       <div class="game_wrapper">
                         <div class="cover">
                           <img src="${game.header_image}">
                           <div class="game_info">
                             <p>${game.name}</p>
                             <p>${game.price} $</p>
                           </div>
                         </div>
                       </div>
                     </div>`;
      showGames.appendChild(div);
      div.addEventListener("click", () => {
        renderDetailGame(app);
      })
    })
  } catch (err) {
    console.log(err);
  }
}


const liGenres = document.querySelectorAll(".genres");
console.log(liGenres);

liGenres.forEach((e, index) => {
  e.addEventListener("click", () => {
    renderListGamesToGenres(index);
  })
})

const renderListGamesToGenres = async (index) => {
  try {
    const genres = liGenres[index].innerHTML.toLowerCase();
    // console.log(genres)
    const url = `https://cs-steam-api.herokuapp.com/games?genres=${genres}&limit=25`;
    const res = await fetch(url);
    const listGames = await res.json();
    // console.log(listGames);
    const showGames = document.querySelector(".showGames");
    showGames.innerHTML = "";
    listGames.data.forEach((game) => {
      const app = listGames.data[index].appid;
      const div = document.createElement("div");
      div.innerHTML = `<div class="background">
                        <div class="game_wrapper">
                           <div class="cover">
                             <img src="${game.header_image}">
                             <div class="game_info">
                                <p>${game.name}</p>
                                <p>${game.price} $</p>
                             </div>
                          </div>
                       </div>
                     </div>`;
      showGames.appendChild(div);
      div.addEventListener("click", () => {
        renderDetailGame(app);
      })
    })
  } catch (err) {
    console.log(err);
  }
}


