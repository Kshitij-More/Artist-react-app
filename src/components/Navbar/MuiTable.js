import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, TextField } from "@mui/material";
import { editUsers, deleteUsers } from "../../features/users/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { deleteArtists, editArtists } from "../../features/artist/artistSlice";
import { deleteAlbums, editAlbums } from "../../features/albums/albumSlice";

export default function MuiTable({ users, type }) {
  const dispatch = useDispatch();
  const album = useSelector((store) => store.album);
  const [editUser, setEditUser] = React.useState({ userName: "" });

  const [updateName, setUpdateName] = React.useState("");
  console.log("album", users);
  function editHandler(id) {
    let name = users.filter((user) => user.id == id)[0].userName;
    setEditUser((prevState) => {
      // console.log("name", name);
      return { ...prevState, userName: name, id: id };
    });
    setUpdateName(name);
  }

  function handleSave(id, userName, user, artist) {
    if (type === "album") {
      dispatch(editAlbums(id, updateName, artist, user));
    } else if (type === "artist") {
      const albumData = album.filter((data) => data.artist === userName)[0];
      // console.log("Album Data", album);
      // console.log("artist", userName);

      // console.log("Album DATATA:", albumData);

      dispatch(editArtists(id, updateName));
      dispatch(editAlbums(id, albumData.userName, updateName, user));
    } else {
      dispatch(editUsers(id, updateName));
    }
    setEditUser("");
    console.log("Update", users);
  }

  function deleteHandler(id) {
    if (type === "album") {
      dispatch(deleteAlbums(id, updateName));
    } else if (type === "artist") {
      dispatch(deleteArtists(id));
    } else {
      dispatch(deleteUsers(id));
    }
    console.log("Delete", users);
  }

  return (
    <TableContainer
      component={Paper}
      style={{ marginLeft: "50px", marginTop: "20px", width: "700px" }}
    >
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead
          style={{
            backgroundColor: "#101F33",
            color: "rgba(255, 255, 255, 0.7)",
          }}
        >
          <TableRow>
            <TableCell style={{ color: "rgba(255, 255, 255, 0.7)" }}>
              {type} Id
            </TableCell>
            <TableCell
              align="center"
              style={{ color: "rgba(255, 255, 255, 0.7)" }}
            >
              {type} Name
            </TableCell>
            {type === "album" && (
              <TableCell
                align="center"
                style={{ color: "rgba(255, 255, 255, 0.7)" }}
              >
                Artist Name
              </TableCell>
            )}
            <TableCell
              align="center"
              style={{ color: "rgba(255, 255, 255, 0.7)" }}
            >
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.length > 0 &&
            users.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">U{row.id}</TableCell>
                <TableCell align="center" component="th" scope="row">
                  {editUser.hasOwnProperty("id") && editUser.id === row.id ? (
                    <>
                      <TextField
                        type="text"
                        value={updateName}
                        onChange={(e) => setUpdateName(e.target.value)}
                        size="small"
                        margin="none"
                      />
                      <Button
                        variant="contained"
                        onClick={(e) => {
                          handleSave(
                            row.id,
                            row.userName,
                            row.user,
                            row.artist
                          );
                        }}
                      >
                        Save
                      </Button>
                    </>
                  ) : (
                    row.userName
                  )}
                </TableCell>
                {type === "album" && (
                  <TableCell align="center">{row.artist}</TableCell>
                )}
                <TableCell align="center">
                  <Button
                    variant="contained"
                    style={{ marginRight: "2px" }}
                    onClick={(e) => editHandler(row.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    onClick={(e) => {
                      deleteHandler(row.id);
                    }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
