import React from "react";
import SelectType from "../components/SelectType";
import { useSelector } from "react-redux";
import MediaCard from "../components/MediaCard";
import { Box } from "@mui/system";
import { Grid, Stack } from "@mui/material";
function AlbumsRating() {
  const [selectedUserInAlbum, setSelectedUserInAlbum] = React.useState("");
  const users = useSelector((store) => store.user);
  const artistAlbumData = useSelector((store) => store.album);
  return (
    <>
      <div style={{ height: 60, width:1000 ,marginLeft: 320}}>
        <SelectType
          setSelectedUserInAlbum={setSelectedUserInAlbum}
          selectedUserInAlbum={selectedUserInAlbum}
          users={users}
          type="album"
        />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", marginLeft: 320 }}>
        {artistAlbumData
          .filter((data) => data.user === selectedUserInAlbum)
          .map((data) => (
            <MediaCard
              key={data.id}
              album={data.userName}
              artist={data.artist}
              user={data.user}
              rating={data.rating}
              id={data.id}
            ></MediaCard>
          ))}
      </div>
    </>
  );
}

export default AlbumsRating;
