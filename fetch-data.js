// Define an async function to fetch and display user data
async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Get the container element where data will be displayed
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);

        // Check if the response is okay
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON response
        const users = await response.json();

        // Clear the "Loading" message
        dataContainer.innerHTML = '';

        // Create a <ul> element
        const userList = document.createElement('ul');

        // Loop through the users and create <li> elements
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Set the user's name as text
            userList.appendChild(listItem); // Append the <li> to the <ul>
        });

        // Append the <ul> to the data container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Handle errors by showing an error message
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error(error);
    }
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);

