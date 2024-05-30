// Function to fetch data from URL
function fetchData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

// Function to display daily cat facts
function displayCatFacts() {
    fetchData('https://cat-fact.herokuapp.com/facts')
        .then(data => {
            const catFactsDiv = document.getElementById('catFacts');
            catFactsDiv.innerHTML = '<h2>Daily Cat Facts</h2>';
            // Displaying random cat facts
            for (let i = 0; i < 5; i++) {
                const fact = data.all[Math.floor(Math.random() * data.all.length)].text;
                catFactsDiv.innerHTML += `<p>${fact}</p>`;
            }
        })
        .catch(error => console.error('Error fetching cat facts:', error));
}

// Calling function on page load
window.onload = function() {
    displayCatFacts();
};
