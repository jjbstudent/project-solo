// The Movie Database (TMDb) API key
const apiKey = '?api_key=1cb8e391f5f9c28f849e9c93f9388447';

// various API URLS
const popular = `https://api.themoviedb.org/3/movie/popular${apiKey}`;
const nowPlaying = `https://api.themoviedb.org/3/movie/now_playing${apiKey}`;
const topRated = `https://api.themoviedb.org/3/movie/top_rated${apiKey}`;
const upComing = `https://api.themoviedb.org/3/movie/upcoming${apiKey}`;


// Fetch data from TMDb
fetch(popular)
    .then(response => {
        // Check if the request was successful
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Parse the JSON response
        return response.json();
    })
    .then(data => {
        // Log the response data to the console
        console.log('TMDb Response:', data);
    })
    .catch(error => {
        // Log any errors to the console
        console.error('Error fetching data:', error.message);
    });