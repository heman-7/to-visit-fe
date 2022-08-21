import axios from "axios";
import { useEffect, useState } from "react";
import Places from "./Places";

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

  return (
    <div>
      {places.length > 0
        ? places.map((place) => (
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
  );
};
export default PlacesList;
