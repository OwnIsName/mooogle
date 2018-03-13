
const cardSeries = document.getElementById('movie-card-series').textContent.trim();
const compiledCardSeries = _.template(cardSeries);

var error = function () {
    console.log(arguments);
};

theMovieDb.movies.getUpcoming({ "language": "ru-RUS"  },  upcommingFilm, error);
theMovieDb.movies.getNowPlaying({ "language": "ru-RUS"  }, PlayingFilm, error);
theMovieDb.movies.getTopRated({ "language": "ru-RUS"  }, TopFilm, error);
theMovieDb.tv.getOnTheAir({ "language": "ru-RUS"  }, upcommingSeries, error);
 theMovieDb.tv.getAiringToday({ "language": "ru-RUS"  }, PlayingSeries, error);
 theMovieDb.tv.getTopRated({ "language": "ru-RUS"  }, TopSeries, error);

const upcommingFilmWrapper = document.getElementById('upcoming_film');
const TopFilmWrapper = document.getElementById('top_rated_film');
const PlayingFilmWrapper = document.getElementById('now_playing_film');
const upcommingSeriesWrapper = document.getElementById('upcoming_series');
const TopSeriesWrapper = document.getElementById('top_rated_series');
const PlayingSeriesWrapper = document.getElementById('now_playing_series');
function prepareResult (res, count) {

    const data = JSON.parse(res);
    return data.results.splice(0, count);
}

function upcommingFilm (res){

    const toShow = prepareResult(res, 6);
  
    toShow.forEach((item, i) => {
        upcommingFilmWrapper.insertAdjacentHTML('beforeend', compiledCard({item}));
    });
}

function TopFilm (res){

    const toShow = prepareResult(res, 6);

    toShow.forEach((item, i) => {
        TopFilmWrapper.insertAdjacentHTML('beforeend', compiledCard({item}));
    });
}

function PlayingFilm (res){

    const toShow = prepareResult(res, 6);

    toShow.forEach((item, i) => {
        PlayingFilmWrapper.insertAdjacentHTML('beforeend', compiledCard({item}));
    });
}

function upcommingSeries (res){

    const toShow = prepareResult(res, 6);

    toShow.forEach((item, i) => {
        upcommingSeriesWrapper.insertAdjacentHTML('beforeend', compiledCardSeries({item}));
    });
}

function TopSeries (res){

    const toShow = prepareResult(res, 6);

    toShow.forEach((item, i) => {
        TopSeriesWrapper.insertAdjacentHTML('beforeend', compiledCardSeries({item}));
    });
}

function PlayingSeries (res){

    const toShow = prepareResult(res, 6);

    toShow.forEach((item, i) => {
        PlayingSeriesWrapper.insertAdjacentHTML('beforeend', compiledCardSeries({item}));
    });
}

