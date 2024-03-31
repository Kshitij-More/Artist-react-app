import React from "react";
import CardRatings from "../components/CardRatings";
import { useSelector } from "react-redux";
import AllUsersRating from "../components/AllUsersRating";

function UsersRating() {
  const albums = useSelector((store) => store.album);
  console.log("albums fromUserRating", albums);

  const albumsNames = albums.map((album) => album.userName);

  const uniqAlbums = albumsNames.filter((album, index) => {
    return albumsNames.indexOf(album) === index;
  });

  // console.log("albums albumsNames", albumsNames);
  // console.log("albums albumsNames uniqAlbums", uniqAlbums);

  // function allRating(uniqAlbums, albums){

  //   const Ans = uniqAlbums.map((uniqAlbum)=>{
  //     return albums.filter((album)=>{
  //       return album.userName===uniqAlbum;
  //     })
  //   })
  //   console.log("Ans", ...Ans);
  // }
  // allRating(uniqAlbums, albums);

  return (
    <div>
      {uniqAlbums.map((album) => {
        return (
          <div style={{ display: "flex", marginTop: 55 }}>
            <CardRatings  albumName={album} />
            <AllUsersRating albumName={album}/>
          </div>
        );
      })}
    </div>
  );
}

export default UsersRating;
