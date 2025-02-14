// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let allDirectors = moviesArray.map( (movie) => {
        return movie.director
    })

    let allDirectorsFilter = [];
    allDirectors.forEach( (director) => {
        if(allDirectorsFilter.includes(director) === false) {
            allDirectorsFilter.push(director)
        }    
    })
    return allDirectorsFilter 
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let spielbergMovies = moviesArray.filter( (movie) => {
        if (movie.director === 'Steven Spielberg' && movie.genre.includes("Drama")) {
            return movie.director
        }
    })
    return spielbergMovies.length

};

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0) {
        return 0
    }
    let sumScores = moviesArray.reduce( (acc, movie) => {
        if (movie.score === undefined){
            return acc
        } else {
            return acc + movie.score
        }
    }, 0)
    return Number((sumScores / moviesArray.length).toFixed(2))
};

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    
    let dramaMovies = moviesArray.filter( (movie) => {
        if (movie.genre.includes("Drama")) {
            return movie
        }
    });
    if(dramaMovies.length === 0) {
        return 0
    }
    let totalDramaScore = dramaMovies.reduce( (acc, movie) => {
        if (movie.score === undefined){
            return acc
        } else {
            return acc + movie.score
        }
    }, 0);
    return Number((totalDramaScore / dramaMovies.length).toFixed(2))
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let arrClone = structuredClone(moviesArray);
    arrClone.sort( (elem2,elem1) => {
        if(elem2.year > elem1.year) {
            return 1
        } else if (elem2.year < elem1.year) {
            return -1
        } else {
            if(elem2.title > elem1.title) {
                return 1
            } else if (elem2.title < elem1.title) {
                return -1
            } else {
                return 0
            }
        }
    } )
    return arrClone
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let arrClone = structuredClone(moviesArray);
    arrClone.sort( (elem2,elem1) => {
        if(elem2.title > elem1.title) {
            return 1
        } else if (elem2.title < elem1.title) {
            return -1
        } else {
            return 0
        }
    })
    let titleString = [];
    arrClone.forEach( (movie) => {
        titleString.push(movie.title)
    });
    return titleString.slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

}
