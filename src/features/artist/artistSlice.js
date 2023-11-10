
const intialStateArtist = [];

export default function artistReducer(state = intialStateArtist, action) {
    switch (action.type) {
        case 'artist/addArtists':
            return [...state, { id: Date.now(), userName: action.payload }];

        case 'artist/editArtists':
            state.splice(state.indexOf(...state.filter((data) => data.id === action.payload.id)), 1, {
                id: action.payload.id,
                userName: action.payload.userName
            });
            return state;
        case "artist/deleteArtists":
            let updated = [...state]
            updated.splice(state.indexOf(...state.filter((data) => data.id === action.payload)), 1);
            return updated;
        default: return state;
    }

}

export function addArtists(userName) {
    return { type: 'artist/addArtists', payload: userName }
}

export function editArtists(id, userName) {
    return { type: 'artist/editArtists', payload: { id: id, userName: userName } }
}
export function deleteArtists(id) {
    return { type: 'artist/deleteArtists', payload: id }
}