function processMovies(input) {
    const movies = [];

    function findMovieIndex(movieName) {
        return movies.findIndex((movie) => movie.name === movieName);
    }

    function printValidMovies() {
        for (const movie of movies) {
            if (movie.name && movie.director && movie.date) {
                const formattedDirector = movie.director.replace(/\n/g, " ");
                console.log(
                    `{"name":"${movie.name}","director":"${formattedDirector}","date":"${movie.date}"}`
                );
            }
        }
    }

    for (const line of input) {
        if (line.startsWith("addMovie")) {
            const movieName = line.substring(9);
            if (!movies.some((movie) => movie.name === movieName)) {
                movies.push({ name: movieName });
            }
        } else {
            const [movieName, command, ...params] = line.split(" ");
            const movieIndex = findMovieIndex(movieName);

            if (movieIndex !== -1) {
                if (command === "directedBy") {
                    const director = params.join(" ");
                    movies[movieIndex].director = director;
                } else if (command === "onDate") {
                    const date = params.join(" ");
                    movies[movieIndex].date = date;
                }
            }
        }
    }

    printValidMovies();
}