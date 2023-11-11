import React from "react";
import SelectType from "../components/SelectType";
import { useSelector } from "react-redux";
import MediaCard from "../components/MediaCard";

function AlbumsRating() {
  const [selectedUserInAlbum, setSelectedUserInAlbum] = React.useState("");
  const users = useSelector((store) => store.user);
  const artistAlbumData = useSelector((store) => store.album);
  return (
    <div>
      <SelectType
        setSelectedUserInAlbum={setSelectedUserInAlbum}
        selectedUserInAlbum={selectedUserInAlbum}
        users={users}
        type="album"
      />
      <div style={{display:"flex"}}>
        {artistAlbumData
          .filter((data) => data.user === selectedUserInAlbum)
          .map((data) => (
            <MediaCard key={data.id} album={data.userName} artist={data.artist} user={data.user} rating={data.rating} id={data.id}></MediaCard>
          ))}
      </div>
    </div>
  );
}

export default AlbumsRating;
