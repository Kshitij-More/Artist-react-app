import React from "react";
import { useSelector } from "react-redux";

const AllUsersRating = (albumName) => {
  const albums = useSelector((store) => store.album);
  const albumData = albums.filter(
    (albums) => albums.userName === albumName.albumName
  );
  console.log("album DAta", albumData);
  //   console.log("album DAtass", albumName);
  let ratingData = albumData.reduce(
    (acc, data) => {
      if (data.rating === 0) {
        return { ...acc };
      } else if (data.rating === 1) {
        return { ...acc, rating1: acc.rating1 + 1 };
      } else if (data.rating === 2) {
        return { ...acc, rating2: acc.rating2 + 1 };
      } else if (data.rating === 3) {
        return { ...acc, rating3: acc.rating3 + 1 };
      } else if (data.rating === 4) {
        return { ...acc, rating4: acc.rating4 + 1 };
      } else if (data.rating === 5) {
        return { ...acc, rating5: acc.rating5 + 1 };
      }
    },
    { rating1: 0, rating2: 0, rating3: 0, rating4: 0, rating5: 0 }
  );
  //   console.log("RAting Data",ratingData);
  const { rating1, rating2, rating3, rating4, rating5 } = ratingData;
  let reviews = rating1 + rating2 + rating3 + rating4 + rating5;
  if(reviews===0){
    reviews=1;
  }
  //(1/revievs)*100
  // const value=(1/reviews)*100;
  const rating1Percent = (rating1 / reviews) * 100;
  const rating2Percent = (rating2 / reviews) * 100;
  const rating3Percent = (rating3 / reviews) * 100;
  const rating4Percent = (rating4 / reviews) * 100;
  const rating5Percent = (rating5 / reviews) * 100;
  return (
    <>
      <div style={{ marginLeft: 10, height: 200, marginTop: 10 }}>
        <div>
          <span>Users rating</span> <br></br>
          <span>{reviews} reviews</span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span>1Star</span>

          <div
            style={{
              width: 500,
              height: 30,
              backgroundColor: "grey",
              display: "inline-block",
              marginTop: 10,
              marginBottom: 0,
              marginLeft: 10,
              borderRadius: 30,
            }}
          >
            <div
              style={{
                backgroundColor: "blue",
                width: `${rating1Percent}%`,
                height: 30,
                textAlign: "center",
                borderRadius: 20,
              }}
            >
              {rating1Percent.toFixed(2)}%
            </div>
          </div>
          <p style={{ marginLeft: 15 }}>{rating1}</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 0,
          }}
        >
          <span>2Star</span>

          <div
            style={{
              width: 500,
              height: 30,
              backgroundColor: "grey",
              display: "inline-block",
              marginTop: 10,
              marginLeft: 10,
              borderRadius: 30,
            }}
          >
            <div
              style={{
                backgroundColor: "blue",
                width: `${rating2Percent}%`,
                height: 30,
                textAlign: "center",
                borderRadius: 20,
              }}
            >
             {rating2Percent.toFixed(2)}%
            </div>
          </div>
          <p style={{ marginLeft: 15 }}>{rating2}</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 0,
          }}
        >
          <span>3Star</span>

          <div
            style={{
              width: 500,
              height: 30,
              backgroundColor: "grey",
              display: "inline-block",
              marginTop: 10,
              marginLeft: 10,
              borderRadius: 30,
            }}
          >
            <div
              style={{
                backgroundColor: "blue",
                width: `${rating3Percent}%`,
                height: 30,
                textAlign: "center",
                borderRadius: 20,
              }}
            >
             {rating3Percent.toFixed(2)}%
            </div>
          </div>
          <p style={{ marginLeft: 15 }}>{rating3}</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 0,
          }}
        >
          <span>4Star</span>

          <div
            style={{
              width: 500,
              height: 30,
              backgroundColor: "grey",
              display: "inline-block",
              marginTop: 10,
              marginLeft: 10,
              borderRadius: 30,
            }}
          >
            <div
              style={{
                backgroundColor: "blue",
                width: `${rating4Percent}%`,
                height: 30,
                textAlign: "center",
                borderRadius: 20,
              }}
            >
             {rating4Percent.toFixed(2)}%
            </div>
          </div>
          <p style={{ marginLeft: 15 }}>{rating4}</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 0,
          }}
        >
          <span>5Star</span>

          <div
            style={{
              width: 500,
              height: 30,
              backgroundColor: "grey",
              display: "inline-block",
              marginTop: 10,
              marginLeft: 10,
              borderRadius: 30,
            }}
          >
            <div
              style={{
                backgroundColor: "blue",
                width: `${rating5Percent}%`,
                height: 30,
                textAlign: "center",
                borderRadius: 20,
              }}
            >
              {rating5Percent.toFixed(2)}%
            </div>
          </div>
          <p style={{ marginLeft: 15 }}>{rating5}</p>
        </div>
      </div>
    </>
  );
};

export default AllUsersRating;
