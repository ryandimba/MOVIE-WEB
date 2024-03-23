document.addEventListener("DOMContentLoaded", () => {
    const apiKey = 'YOUR_API_KEY'; // Replace with your API key
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const movies = data.results;
            const movieList = document.getElementById('movie-list');

            movies.forEach(movie => {
                const movieCard = document.createElement('div');
                movieCard.classList.add('movie-card');

                const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
                const image = document.createElement('img');
                image.src = imageUrl;
                image.alt = movie.title;

                const title = document.createElement('h2');
                title.textContent = movie.title;

                const overview = document.createElement('p');
                overview.textContent = movie.overview;

                movieCard.appendChild(image);
                movieCard.appendChild(title);
                movieCard.appendChild(overview);

                movieList.appendChild(movieCard);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
