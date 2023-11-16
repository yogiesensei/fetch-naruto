const container = document.getElementById('container')

const templateCharacter = (item) => {
    return `
    <div class='character-container'>
    <p>Name:${item.character.name}</p>
    <img src=${item.character.images.webp.image_url} />
    </div>
    `
}

const fetchCharacters = () => {
    fetch('https://api.jikan.moe/v4/manga/11/characters')
        .then(data => data.json())
        .then(item => {
            let content = ''

            // get all character
            // item.data.map(characterData => content += templateCharacter(characterData))
            // container.innerHTML = content

            // show only main characters
            let main = item.data.filter(data => data.role === 'Main')
            main.map(characterData => content+= templateCharacter(characterData))
            container.innerHTML = content
        })
}

fetchCharacters()