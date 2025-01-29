document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.querySelector(".botaoAdicionar");

    if (addButton) {
        addButton.addEventListener("click", () => {
            const movieTitle = document.querySelector("h1").textContent;

            const watchedMovies = JSON.parse(localStorage.getItem("watchedMovies")) || [];

            if (!watchedMovies.includes(movieTitle)) {
                watchedMovies.push(movieTitle);
                localStorage.setItem("watchedMovies", JSON.stringify(watchedMovies));
                alert(`${movieTitle} foi adicionado à lista!`);
            } else {
                alert(`${movieTitle} já está na sua lista.`);
            }
   
        });
    }
});
