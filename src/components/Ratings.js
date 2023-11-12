import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { changeRating } from "../features/albums/albumSlice";

export default function Ratings({ album, artist, user, id, rating }) {
  const [value, setValue] = React.useState(rating);
  const dispatch = useDispatch();
  function handleChangeRating(event, newValue) {
    setValue(newValue);
    dispatch(changeRating(id, newValue, album, user, artist));
    console.log("id,rating,album,user,artist", id, rating, album, user, artist);
  }
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
        marginLeft: -1,
        // backgroundColor: "rgba(255, 255, 255, 0.7)",
        borderColor: "rgba(255, 255, 255, 0.7)",
        
        '& .MuiRating-iconFilled': {
          color: 'yellow',
        },
        '& .MuiRating-iconEmpty':{
          color:"white"
        }
      }}
    >
      <Rating
        name="simple-controlled"
        value={value}
        defaultValue={0}
        onChange={handleChangeRating}
      />
    </Box>
  );
}
