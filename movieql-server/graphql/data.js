import axios from 'axios';
const HITOMI_CHAN_GALLERIES = "http://192.167.0.167:4000/api/gallery";
const HITOMI_CHAN_THUMB = "http://192.167.0.167:4000/api/thumbs/big/";
const HITOMI_CHAN_READ = "http://192.167.0.167:4000/gallery/read/";

export const getMangas = (name) => {
    return axios.get(`${HITOMI_CHAN_GALLERIES}?n=${name}`)
        .then(res => res.data.data)
        .catch(e => console.log(e));
};

export const getThumbUrl = (id) => {
    return HITOMI_CHAN_THUMB + id;
};

export const getReadUrl = (id) => {
    return HITOMI_CHAN_READ + id;
};