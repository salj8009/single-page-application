import getHash from '../utils/GetHash';
import getData from '../utils/getData';

const Character = async () => {

    const id = getHash();
    const character = await getData(id);

    const view = `
    <div class="Character-inner">
        <article class="Characters-card">
            <img src="${character.image}" alt="${character.name}">
        </article>
        <h2>${character.name}</h2>

        <article class="Character-card">
            <h3>Episode:<span>${character.episode.length}</span></h3>
            <h3>Status:<span>${character.status}</span></h3>
            <h3>Species:<span>${character.species}</span></h3>
            <h3>Gender:<span>${character.gender}</span></h3>
            <h3>Origin:<span>${character.origin.name}</span></h3>
            <h3>Last Location:<span>${character.location.name}</span></h3>
        </article>
    </div>
    
    `
    return view;
}

export default Character;