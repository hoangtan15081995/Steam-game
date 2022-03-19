const getGenresList = async () => {
  try {
    const response = await fetch('https://cs-steam-api.herokuapp.com/genres');
    const genres = await response.json();
    // console.log(genres.data);
    // genres.data.forEach((e) => console.log(e.name));
    return genres;
  } catch (err) {
    console.log(err)
  }
}
getGenresList();

const renderGenresList = async () => {
  try {
    const genres = await getGenresList();
    // console.log(genres);
    const ulGenresList = document.querySelector(".categoryGroup");
    
    // const GenresList = document.querySelector(".category");
    // const ulGenresList = GenresList.children[1];
    console.log(ulGenresList);
  genres.data.forEach((gen) => {
    const li = document.createElement("li");
    li.innerHTML = `${gen.name.toUpperCase()}`;
    ulGenresList.appendChild(li);
  })
  } catch (err) {
    console.log(err);
  }
}
renderGenresList();


