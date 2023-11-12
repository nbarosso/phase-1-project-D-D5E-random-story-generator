// D&D5E API Search functionality build-out

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const categorySelect = document.getElementById('categorySelect');
const searchResults = document.getElementById('searchResults');
const selectedInfo = document.getElementById('selectedInfo');

searchButton.addEventListener('click', performSearch);

async function performSearch() {
}

async function displaySelectedItem(url) {
    try {
        const response = await fetch(`https://www.dnd5eapi.co${url}`);
        const data = await response.json();

        // Create HTML element to show the selected item's info
        const selectedItemDiv = document.createElement('div');

        // Create a definition list/DL for the key/value pairs
        const dl = document.createElement('dl');
        
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const value = data[key];

                // Create a definition term/DT for the key
                const dt = document.createElement('dt');
                dt.textContent = key;
                dl.appendChild(dt);

                // Create a definition description/DD for the value
                const dd = document.createElement('dd');

                if (Array.isArray(value)) {
                    if (key === "desc") {
                        dd.innerHTML = value.map((descItem, index) => `${index + 1}. ${descItem}`).join('<br>');
                    } else if (value.length > 0) {
                        const values = value.map(item => {
                            if (typeof item === 'object') {
                                return item.name;
                            }
                            return item;
                        }).join(', ');
                        dd.textContent = values;
                    }
                } else if (typeof value === 'object') {
                    // Handle objects
                    const subProperties = Object.keys(value)
                        .map(subKey => {
                            if (typeof value[subKey] === 'object') {
                                return `${subKey}: ${JSON.stringify(value[subKey])}`;
                            }
                            return `${subKey}: ${value[subKey]}`;
                        })
                        .join(', ');
                    dd.textContent = `{ ${subProperties} }`;
                } else {
                    dd.textContent = value;
                }

                dl.appendChild(dd);
            }
        }

        // Append the definition list to the selected item's div
        selectedItemDiv.appendChild(dl);

        // Display the selected item's information
        selectedInfo.innerHTML = '';
        selectedInfo.appendChild(selectedItemDiv);
    } catch (error) {
        console.error('Error fetching or processing data:', error);
    }
}