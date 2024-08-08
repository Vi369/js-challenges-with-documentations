// import './style.css'

const input = document.querySelector('#movieInput')
const container = document.querySelector('#movie-info-container')
const form = document.querySelector('#form')

// get movie info function
async function getMovieInfo(query){
    try {
        const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
        return res.json();
    } catch (error) {
        console.log(error.message)
    }
}

    // show more info movie function
    async function showMoreInfo(showId){
        try {
            const res = await fetch(`https://api.tvmaze.com/shows/${showId}?embed=cast`)
            const result = await res.json()
            console.log(result)
            displayMovieInfo(result);
            return;
        } catch (error) {
            console.log(error.message)
        }
    }

// movie details show function
function showIncontainer(movies){
    for (const movie of movies) {
        let title = movie.show?.name;
        let poster = movie.show?.image?.medium;
        let realeseYear = movie.show?.premiered;
        let rating = movie.show.rating.average;
        let id = movie.show?.id
        // console.log(id)

        //  <span><a href="#movie-detail" id ="moreInfo">More-info</a></span>
        const div = document.createElement('div');
        div.classList.add("movie-details");
        div.innerHTML = `
            <img class="movie-poster" src="${poster}" alt="Movie Poster">
            <div class = "movie-some-info"> 
            <h4>${title} <span class="more-info-btn" data-id="${id}">More-Info</span></h4>    
                <span><strong>Release Year:</strong> ${realeseYear}</span>
                <span><strong>Rating:</strong> ${rating}</span>
            </div>
        `;
        container.appendChild(div);
    }
}

 
container.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('more-info-btn')) {
        const showId = e.target.getAttribute('data-id');
        showMoreInfo(showId);
    }
});

// display movie info
function displayMovieInfo(movieInfo){
    console.log(movieInfo);
}

form.addEventListener('submit', async function(e){
    e.preventDefault();
    if(!input.value){
        alert('Please provide movies or show name!')
    }
    const result = await getMovieInfo(input.value);
    // console.log(result);
    showIncontainer(result)
})

// TODO: more info page add and their own style and css and js file
