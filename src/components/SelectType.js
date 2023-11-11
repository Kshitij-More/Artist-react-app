import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";

export default function SelectType({
  users,
  type,
  setSelectedUser,
  selectedUser,
  setSelectedUserInAlbum,
  setSelectedArtist,
}) {
  // console.log("select", users);

  const handleChange = (event) => {
    console.log("HandleChange", event.target.value);

    if (type === "user") {
      setSelectedUser(() => event.target.value);
    } else if (type==="artist"){
      setSelectedArtist(() => event.target.value);
    }else{
      setSelectedUserInAlbum(()=>event.target.value);
    }
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Select {type}</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={selectedUser}
        label="Age"
        onChange={handleChange}
      >
        {users.map((user) => {
          return <MenuItem value={user.userName}>{user.userName}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
}
