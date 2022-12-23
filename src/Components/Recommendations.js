import React, { useEffect, useState } from "react";
import axios from "axios";
import Recommendation from "./Recommendation";
import Typography from "@mui/material/Typography";
import { CircularProgress } from "@mui/material";

const Recommendations = () => {
  const fetchRecommendationsUrl =
    "http://localhost:8080/toVisit/place/recommendations";

  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(fetchRecommendationsUrl).then((response) => {
      console.log(" response " + JSON.stringify(response.data));
      console.log(" length " + response.data.length);
      setIsLoading(false);
      setRecommendations(response.data);
    });
  }, []);

  return (
    <div>
      <div style={{ margin: 10 }}>
        <Typography style={{ marginBottom: 20 }}>Recommended Places</Typography>

        {isLoading ? (
          <CircularProgress color="inherit" />
        ) : (
          <div style={{ display: "flex", flexDirection: "row" }}>
            {recommendations.length > 0
              ? recommendations.map((recommendation) => (
                  <Recommendation
                    key={recommendation.id}
                    city={recommendation.place.city}
                    attraction={recommendation.place.attraction}
                    month={recommendation.place.month}
                  />
                ))
              : "No recommendations found"}
          </div>
        )}
      </div>
    </div>
  );
};

export default Recommendations;
