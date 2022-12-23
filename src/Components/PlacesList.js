import axios from "axios";
import { useEffect, useState } from "react";
import Places from "./Places";
import React from "react";
import TextField from "@mui/material/TextField";
import { CircularProgress } from "@mui/material";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";

const PlacesList = () => {
  const fetchPlacesUrl = "http://localhost:8080/toVisit/place/list";
  const searchPlacesUrl = "http://localhost:8080/toVisit/place/search";

  const [places, setPlacesList] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(fetchPlacesUrl).then((response) => {
      setIsLoading(false);
      setPlacesList(response.data);
      // console.log(response.data);
      // console.log(places);
    });
  }, []);

  const updateList = () => {
    axios.get(fetchPlacesUrl).then((response) => {
      setPlacesList(response.data);
    });
  };

  const [searchCity, setSearchCity] = useState("");

  const filteredPlacesList = places.filter((place) =>
    searchCity
      ? place.city.toLowerCase().indexOf(searchCity.toLowerCase()) >= 0
      : true
  );

  //to ensure api is called after 1.5 sec delay of the last keystroke
  const [timer, setTimer] = useState(null);

  const OnChangeHandler = (event) => {
    var city = event.target.value.toLowerCase();
    setSearchCity(city);
    // console.log("searched " + city);
    // console.log("filteredPlacesList length " + filteredPlacesList.length);

    clearTimeout(timer);

    const newTimer = setTimeout(() => {
      if (filteredPlacesList.length === 1) {
        axios.get(searchPlacesUrl, {
          params: { place: filteredPlacesList[0].city },
        });
      }
    }, 1500);

    setTimer(newTimer);
  };

  const handleClear = () => {
    setSearchCity("");
  };

  return (
    <div style={{ position: "relative", minHeight: "101vh" }}>
      <div style={{ float: "right", marginRight: 10 }}>
        <TextField
          style={{ margin: 10 }}
          id="outlined-basic"
          label="City"
          variant="outlined"
          placeholder="Search by city"
          onChange={OnChangeHandler}
          value={searchCity}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),

            endAdornment: searchCity && (
              <IconButton onClick={handleClear}>
                <CancelRoundedIcon />
              </IconButton>
            ),
          }}
        />
      </div>

      {isLoading ? (
        <CircularProgress color="inherit" />
      ) : (
        <div style={{ paddingTop: 70 }}>
          {filteredPlacesList.length > 0
            ? filteredPlacesList.map((place) => (
                <Places
                  key={place.id}
                  id={place.id}
                  city={place.city}
                  attraction={place.attraction}
                  month={place.month}
                  update={updateList}
                />
              ))
            : "No places added yet"}
        </div>
      )}
    </div>
  );
};
export default PlacesList;
