// The Movie Database (TMDb) API key
const apiKey = '1cb8e391f5f9c28f849e9c93f9388447';

// fetching popular movies from TMDb
const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

// Fetch data from TMDb
fetch(apiUrl)
    .then(response => {
        // Check if the request was successful (status code 200)
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