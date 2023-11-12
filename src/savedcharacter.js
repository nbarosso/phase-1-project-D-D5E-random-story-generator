function displaySavedCharacterAsCard(characterData) {
    const savedCharacterList = document.getElementById('savedCharacterList');
    const card = document.createElement('div');
    card.classList.add('character-card');

    // Remove the "Re-Roll" buttons from the attributes when nonfunc
    const attributesWithoutReRoll = characterData.attributes.replace(/<button.*?Re-Roll<\/button>/g, '');

    card.innerHTML = `
        <h3>${characterData.name}</h3>
        <div class="attributes">
            ${attributesWithoutReRoll}
        </div>
        <button class="deleteCharacterButton" data-id="${characterData.id}">Delete</button>
    `;

    card.querySelector('.deleteCharacterButton').addEventListener('click', () => {
        deleteCharacter(characterData.id);
        card.remove();
    });


    savedCharacterList.appendChild(card);
}