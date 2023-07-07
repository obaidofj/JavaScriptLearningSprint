let charsList = document.getElementById('charsList');

async function fetchChars() {
  try {
    const res = await fetch('https://rickandmortyapi.com/api/character?status=alive');
    if (!res.ok) {
      throw new Error('Error fetching characters data.');
    }

    const data = await res.json();
    
    let characters = data.results.filter(obj=> obj.status=="Alive").slice(0, 50);; 

    characters.forEach(character => {
      const li = document.createElement('li');
      li.innerHTML = `
        <img src="${character.image}" alt="${character.name}">
        <div class="character-details">
          <h2>${character.name}</h2>
          <p><strong>Location:</strong> ${character.location.name}</p>
          <p><strong>Species:</strong> ${character.species}</p>
          <p><strong>Gender:</strong> ${character.gender}</p>
        </div>
      `;
      charsList.appendChild(li);
    });
  } catch (error) {
    charsList.innerHTML = '<p>Error fetching characters data.</p>';
  }
}

fetchChars();
