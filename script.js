const getGenresList = async () => {
  try {
    const response = await fetch('https://cs-steam-api.herokuapp.com/genres');
    const genres = await response.json();
    return genres;
  } catch (err) {
    console.log(err)
  }
}
getGenresList();

// const renderGenresList = async () => {
//   try {
//     const genres = await getGenresList();
//     const ulGenresList = document.querySelector(".categoryGroup");
//     ulGenresList.innerHTML = "";
//   genres.data.forEach((gen) => {
//     const li = document.createElement("li");
//     li.innerHTML = `${gen.name.toUpperCase()}`;
//     ulGenresList.appendChild(li);
//   })
//   } catch (err) {
//     console.log(err);
//   }
// }
// renderGenresList();


const getAllGames = async () => {
  try {
    const response = await fetch('https://cs-steam-api.herokuapp.com/games?limit=25');
    const allGames = await response.json();
    return allGames;
  } catch (err) {
    console.log(err)
  }
}
getGenresList();

const renderAllGames = async () => {
  try {
    const allGames = await getAllGames();
    const showGames = document.querySelector(".showGames");
    
  allGames.data.forEach((game) => {
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
  })
  } catch (err) {
    console.log(err);
  }
}
renderAllGames();


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
      listGames.data.forEach((game) => {
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
      })
    } catch (err) {
      console.log(err);
    }
}
// const ulGenresList = document.querySelector(".categoryGroup");
// const liGenres = ulGenresList.children[1];
const liGenres = document.querySelectorAll(".genres");
console.log(liGenres);

liGenres[0].addEventListener("click", () => {
  console.log("hehe");
})
liGenres[1].addEventListener("click", () => {
  console.log("ahaa");
})
liGenres[2].addEventListener("click", () => {
  console.log("hehe");
})
liGenres[3].addEventListener("click", () => {
  console.log("hehe");
})
liGenres[4].addEventListener("click", () => {
  console.log("hehe");
})
liGenres[5].addEventListener("click", () => {
  console.log("hehe");
})
liGenres[6].addEventListener("click", () => {
  console.log("hehe");
})
liGenres[7].addEventListener("click", () => {
  console.log("hehe");
})
liGenres[8].addEventListener("click", () => {
  console.log("hehe");
})
liGenres[9].addEventListener("click", () => {
  console.log("hehe");
})
