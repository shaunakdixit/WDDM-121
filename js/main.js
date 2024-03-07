$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
        let searchText = $('#searchText').val();
        getMovies(searchText);
        e.preventDefault();
    });
});

function movieSelected(id) {
    sessionStorage.setItem('imdbID', id);
    window.location = 'movie.html';
    return false;
}