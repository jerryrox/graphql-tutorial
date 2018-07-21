let nextId = 0;
const anime = [];

export const getAnime = () => anime;

export const getById = id => {
    return anime.filter(a => a.id === id)[0];
};

export const deleteAnime = (id) => {
    for(let i=anime.length-1; i>=0; i--) {
        if(anime[i].id === id) {
            anime.splice(i, 1);
            return true;
        }
    }
    return false;
};

export const addAnime = (name, score) => {
    let newAnime = {
        id: nextId++,
        name,
        score
    };
    anime.push(newAnime);
    return newAnime;
};

// Add default anime
addAnime("Gochuumon wa Usagi desu ka?", 5);
addAnime("Gochuumon wa Usagi desu ka??", 5);
addAnime("Kin'iro Mosaic", 4);
addAnime("Kono Subarashii Sekai ni Shukufuku wo!", 4.7);
addAnime("Amagi Brilliant Park", 4.6);
addAnime("Kimi no na wa", 4.2);