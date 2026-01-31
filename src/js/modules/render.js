

export function renderization(id, namePokemon, typePokemon) {
    const olMain = document.querySelector('.container-pokemons-ol');

    const li = document.createElement('li');
    li.classList.add('container-pokemon-li');

    const span1 = document.createElement('span');
    span1.classList.add('number-pokemon');
    span1.textContent = id;

    const span2 = document.createElement('span');
    span2.classList.add('name-pokemon');
    span2.textContent = namePokemon

    const div = document.createElement('div');
    div.classList.add('datails');

    const ol = document.createElement('ol');
    ol.classList.add('types');

    const li2 = document.createElement('li');
    li2.classList.add('type');
    li2.textContent = typePokemon;

    const img = document.createElement('img');
    img.classList.add('image'); //Get image with obj.id
    img.setAttribute('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`);

    // Agrup elements
    ol.append(li2);
    div.append(ol, img);
    li.append(span1, span2, div);
    // Add element in DOM
    olMain.append(li);
}