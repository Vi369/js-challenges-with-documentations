// import './style.css'

const input = document.querySelector('#movieInput')
const container = document.querySelector('#movie-info-container')
const form = document.querySelector('#form')
const detailContainer = document.querySelector('#movie-detail-container');
// get movie info function
async function getMovieInfo(query){
    try {
        const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
        return res.json();
    } catch (error) {
        console.log(error)
        console.log(error.message)
    }
}

    // show more info movie function
    async function showMoreInfo(showId){
        try {
            const res = await fetch(`https://api.tvmaze.com/shows/${showId}?embed=cast`)
            const result = await res.json()
            // console.log(result)
            displayMovieInfo(result);
            return;
        } catch (error) {
            console.log(error.message)
        }
    }

// movie details show function
function showIncontainer(movies){
    container.innerHTML = ''; // reset privious content so new appear proper way
    detailContainer.innerHTML = ''; // reset privious content so new appear proper way
    for (const movie of movies) {
        let title = movie.show?.name;
        let poster = movie.show?.image?.medium;
        let releaseYear = movie.show?.premiered;
        let rating = movie.show.rating.average;
        let id = movie.show?.id
        // console.log(id)

        //  <span><a href="#movie-detail" id ="moreInfo">More-info</a></span>
        const container = document.getElementById('movie-info-container');

        // Create the main div element
        const div = document.createElement('div');
        div.classList.add('movie-details');
    
        // Create and append the movie poster image
        const img = document.createElement('img');
        img.classList.add('movie-poster');
        img.src = poster;
        img.alt = 'Movie Poster';
        div.appendChild(img);
    
        // Create the movie info container
        const infoDiv = document.createElement('div');
        infoDiv.classList.add('movie-some-info');
    
        // Create and append the title and more-info button
        const h4 = document.createElement('h4');
        const titleText = document.createTextNode(title);
        const moreInfoSpan = document.createElement('a');
        moreInfoSpan.classList.add('more-info-btn');
        moreInfoSpan.setAttribute('data-id', id);
        moreInfoSpan.setAttribute('href', '#movie-detail-container')
        moreInfoSpan.textContent = 'More-Info';
        h4.appendChild(titleText);
        h4.appendChild(moreInfoSpan);
        infoDiv.appendChild(h4);
    
        // Create and append the release year
        const releaseYearSpan = document.createElement('span');
        releaseYearSpan.innerHTML = `<strong>Release Year:</strong> ${releaseYear}`;
        infoDiv.appendChild(releaseYearSpan);
    
        // Create and append the rating
        const ratingSpan = document.createElement('span');
        ratingSpan.innerHTML = `<strong>Rating:</strong> ${rating}`;
        infoDiv.appendChild(ratingSpan);
    
        // Append the info container to the main div
        div.appendChild(infoDiv);
    
        // Append the main div to the container
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
function displayMovieInfo(movieInfo) {
    detailContainer.innerHTML = ''; // reset privious content so new appear proper way

    if (!detailContainer) {
        console.error('Container element not found');
        return;
    }

    const movieName = movieInfo.name || 'Unknown Movie';
    const language = movieInfo.language || 'Unknown Language';
    const castList = movieInfo._embedded?.cast || [];
    const knowMore = movieInfo?.url || '#';
    const showSummary = movieInfo.summary || 'No summary available.';
    const imgSrc = movieInfo.image?.medium || ''; // Use a default image if none is provided

    // Create list items for the cast
    const castListItem = castList.map(castMember => {
        const characterName = castMember?.character?.name || 'Unknown Character';
        const originalName = castMember?.person?.name || 'Unknown Actor';
        const personImage = castMember?.person?.image?.medium || 'default-image.jpg'; // Default image for cast members

        return `
            <li class="cast-member">
                <img src="${personImage}" alt="${originalName}" class="cast-image"/>
                <div class="cast-info">
                    <p><strong>Character Name:</strong> ${characterName}</p>
                    <p><strong>Original Name:</strong> ${originalName}</p>
                    <p>Know more <a href="${castMember?.person?.url || '#'}" target="_blank">click here</a></p>
                </div>
            </li>`;
    }).join('');

    // Create movie details HTML
    const movieDetails = `
        <div class="movie-pop-up-card">
            <img src="${imgSrc}" alt="Poster of ${movieName}" class="movie-poster"/>
            <div class="movie-details">
                <h2>${movieName}</h2>
                <p>Language: ${language}</p>
                <p>Summary: ${showSummary}</p>
                <ul>
                    ${castListItem}
                </ul>
            </div>
            <p id="moreAboutMovie">Know More About Movie & Cast: <a href="${knowMore}" target="_blank">click here</a></p>
        </div>`;

    // Set innerHTML of the detail container
    detailContainer.innerHTML = movieDetails;
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

