import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Ratings from "./Ratings";
import image from "./movie_image.jpg";
export default function MediaCard({ album, artist ,user,id, rating }) {
  return (
    <Card
      sx={{
        marginLeft: 5,
        marginTop: 5,
        maxWidth: 345,
        minWidth: 200,
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {album}
        </Typography>
      </CardContent>
      <CardMedia
        sx={{ height: 130 }}
        image={image}
        title="green iguana"
      />
      <CardContent>
        <Ratings  album={album} artist={artist} user={user} id={id} rating={rating} ></Ratings>
        <Typography variant="body2" color="text.secondary">
          {artist}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}
