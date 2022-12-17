import axios from "axios";
import { useEffect, useState } from "react";
import Places from "./Places";
import React from "react";
import TextField from "@mui/material/TextField";

const PlacesList = () => {
  const baseUrl = "http://localhost:8080/toVisit/place/list";

  const [places, setPlacesList] = useState([]);

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setPlacesList(response.data);
      // console.log(response.data);
      // console.log(places);
    });
  }, []);

  const updateList = () => {
    axios.get(baseUrl).then((response) => {
      setPlacesList(response.data);
    });
  };

  const [searchCity, setSearchCity] = useState("");

  const filteredPlacesList = places.filter((place) =>
    searchCity
      ? place.city.toLowerCase().indexOf(searchCity.toLowerCase()) >= 0
      : true
  );

  const OnChangeHandler = (event) => {
    var city = event.target.value.toLowerCase();
    setSearchCity(city);
    // console.log("searched " + city);
    // console.log("filteredPlacesList length " + filteredPlacesList.length);
  };

  return (
    <div>
      <div style={{ float: "right", marginRight: 10 }}>
        <TextField
          style={{ margin: 10 }}
          id="outlined-basic"
          label="City"
          variant="outlined"
          placeholder="Search by city"
          onChange={OnChangeHandler}
        />
      </div>
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
    </div>
  );
};
export default PlacesList;
