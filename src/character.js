// Random hero generator


// Limiter on certain attributes to make sense through the game
const numRandomSkills = Math.floor(Math.random() * 4) + 2
const maxRandomLanguages = Math.floor(Math.random() * 2) + 1
const maxRandomProficiencies = 6;
const maxRandomEquipment = 3;

// Async function to fetch data from the API

async function getRandomData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}