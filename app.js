// const axios = require('axios');
// const arr = [];

// axios.get("https://umdearborn.campuslabs.com/engage/api/discovery/event/search?endsAfter=2024-10-22T18%3A04%3A48-04%3A00&orderByField=endsOn&orderByDirection=ascending&status=Approved&take=15&benefitNames%5B0%5D=FreeFood&query=").then(function (response) {
//     console.log(typeof response.data['value']);
//     response.data['value'].forEach(el => {
//         arr.push(
//             el
//         );
//     });
//     console.log(arr);
//     // content.innerHTML = arr;
//     window.document.createElement('a');
// }).catch(function (error) {
//     console.log(error);
// });

// URL of the public API
// const url = 'https://jsonplaceholder.typicode.com/posts/1';
const requestOptions = {
    method: 'GET',
    headers: {
        'Access-Control-Allow-Origin': '*'
    },
    redirect: 'follow',
};
const url = 'https://umdearborn.campuslabs.com/engage/api/discovery/event/search?endsAfter=2024-10-22T18%3A04%3A48-04%3A00&orderByField=endsOn&orderByDirection=ascending&status=Approved&take=15&benefitNames%5B0%5D=FreeFood&query='
// Function to call the public URL and display the result
function fetchData() {
    fetch(url, requestOptions)
        .then(response => {
            console.log(response);
            response.json()
        }) // Parse the response as JSON
        .then(data => {
            console.log(data);
            // Access the HTML element where the result will be displayed
            const outputArea = document.getElementById("apiOutput");

            // Display the API response (for this example, title and body)
            outputArea.innerHTML = `<h3>${data.title}</h3><p>${data.body}</p>`;
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            const outputArea = document.getElementById("apiOutput");
            outputArea.textContent = "Failed to fetch data";
        });
}

// Call the function when the page loads
window.onload = fetchData;