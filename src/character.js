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

// Get random items from list
function getRandomItems(data, maxItems) {
    const randomItems = [];
    while (randomItems.length < maxItems && randomItems.length < data.length) {
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomItem = data[randomIndex].name;
        if (!randomItems.includes(randomItem)) {
            randomItems.push(randomItem);
        }
    }
    return randomItems;
}

// Random data variables with let
let randomRaceData, randomClassData, randomSkillsData, randomEquipmentData, randomAlignmentData, randomLanguageData, randomProficiencyData, randomAbilityScoreData;

