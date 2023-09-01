
// Define the API endpoint URL
const apiUrl = 'http://localhost:3000/todos';

// Make a GET request using the fetch API
fetch(apiUrl)
  .then(response => {
    // Check if the response status is OK (status code 200)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the response as JSON
    return response.json();
  })
  .then(data => {
    // Handle the JSON data returned by the API
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('Fetch error:', error);
  });
