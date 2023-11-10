import React, { useState } from "react";
import {
  TextField,
  Button,
  Stack,
  Card,
  CardContent,
  Container,
} from "@mui/material";
import MuiTable from "../components/Navbar/MuiTable";
import { useDispatch, useSelector } from "react-redux";
import { addArtists } from "../features/artist/artistSlice";

const Artist = () => {
  const [addArtist, setAddArtist] = useState("");
  const artist = useSelector((store) => store.artist);
  const dispatch = useDispatch();
  function addHandler() {
    if (addArtist !== "") {
      dispatch(addArtists(addArtist));
      setAddArtist("");
    }
  }

  return (
    <Container style={{ marginLeft: "320px" }}>
      <Card style={{ marginLeft: "50px", marginTop: "50px" }} color="primary">
        <CardContent>
          <form noValidate>
            <Stack spacing={2} width={700}>
              <h1>Artist's Details</h1>
              <TextField
                label={"Artist Id"}
                value={artist.length + 1}
                disabled
              />
              <TextField
                label={"Artist Name"}
                value={addArtist}
                onChange={(e) => setAddArtist(e.target.value)}
              />
              <Button variant="contained" color="primary" onClick={addHandler}>
                Add{" "}
              </Button>
            </Stack>
          </form>
        </CardContent>
      </Card>
      <MuiTable users={artist} type="artist" />
    </Container>
  );
};

export default Artist;
