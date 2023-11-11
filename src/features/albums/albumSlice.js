const intialStateAlbums = [];

export default function albumReducer(state = intialStateAlbums, action) {
  switch (action.type) {
    case "album/addAlbums":
      return [
        ...state,
        {
          id: Date.now(),
          userName: action.payload.album,
          user: action.payload.user,
          artist: action.payload.artist,
          rating: 0,
        },
      ];

    case "album/editAlbums":
      state.splice(
        state.indexOf(...state.filter((data) => data.id === action.payload.id)),
        1,
        {
          id: action.payload.id,
          userName: action.payload.userName,
        }
      );
      return state;
    case "album/deleteAlbums":
      let updated = [...state];
      updated.splice(
        state.indexOf(...state.filter((data) => data.id === action.payload)),
        1
      );
      return updated;
    case "album/changeRating":
      let updateds = [...state];
      updateds.splice(
        state.indexOf(...state.filter((data) => data.id === action.payload.id)),
        1,
        {
          id: action.payload.id,
          userName: action.payload.album,
          user: action.payload.user,
          artist: action.payload.artist,
          rating: action.payload.rating,
        }
      );
      return updateds;
    default:
      return state;
  }
}

export function addAlbums(userName, user, artist) {
  return {
    type: "album/addAlbums",
    payload: { album: userName, user: user, artist: artist },
  };
}

export function editAlbums(id, userName) {
  return { type: "album/editAlbums", payload: { id: id, userName: userName } };
}
export function deleteAlbums(id) {
  return { type: "album/deleteAlbums", payload: id };
}

export function changeRating(id, rating, album, user, artist) {
  return {
    type: "album/changeRating",
    payload: {
      id: id,
      rating: rating,
      album: album,
      user: user,
      artist: artist,
    },
  };
}
