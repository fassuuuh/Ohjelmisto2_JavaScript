'use strict';

// Select the form element
const tvForm = document.querySelector('#tv');

// Select the results container
const resultsElem = document.querySelector('#results');

// Add an event listener to handle form submission
tvForm.addEventListener('submit', async function (evt) {
    evt.preventDefault(); // Prevent the form's default behavior

    // Get the user's search query from the input field
    const query = document.querySelector('input[name=q]').value;

    try {
        // Fetch the data from the TVmaze API
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
        const jsonData = await response.json(); // Parse the response as JSON

        // Clear the previous results
        resultsElem.innerHTML = "";

        // Iterate through the fetched shows
        for (const tvShow of jsonData) {
            // Create an article element for each show
            const articleElem = document.createElement('article');

            // Add the name in an <h2> element
            const h2Elem = document.createElement('h2');
            h2Elem.innerText = tvShow.show.name;
            articleElem.appendChild(h2Elem);

            // Add the image or a default image
            const imgElem = document.createElement('img');
            imgElem.src = tvShow.show.image
                ? tvShow.show.image.medium
                : "https://via.placeholder.com/210x295?text=Not%20Found";
            imgElem.alt = tvShow.show.name;
            articleElem.appendChild(imgElem);

            // Add the link to the details in an <a> element
            const linkElem = document.createElement('a');
            linkElem.href = tvShow.show.url;
            linkElem.target = "_blank";
            linkElem.innerText = "More details";
            linkElem.style.display = "block"; // Ensure it takes full width
            articleElem.appendChild(linkElem);

            // Add the summary in a <div> element
            if (tvShow.show.summary) {
                const summaryElem = document.createElement('div');
                summaryElem.innerHTML = tvShow.show.summary; // summary contains HTML
                articleElem.appendChild(summaryElem);
            }

            // Append the article to the results container
            resultsElem.appendChild(articleElem);
        }

    } catch (error) {
        console.error("Error fetching TV shows:", error.message);
    }
});
