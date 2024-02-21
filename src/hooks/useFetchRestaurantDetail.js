import React, { useState, useEffect } from "react";
import axios from "axios";
import { RESTAURANT_DETAIL_URI } from "../utils/constants";

const useFetchRestaurantDetail = (id) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [titleDetails, setTitleDetails] = useState([]);
  const [offersDetails, setOffersDetails] = useState([]);
  const [restaurantMenuDetails, setRestaurantMenuDetails] = useState([]);
  const fetchRestaurantDetails = async () => {
    setLoading(true);
    try {
      const response = await axios.get(RESTAURANT_DETAIL_URI + id);
      // Uncomment the following code for previous api calls
      // setTitleDetails(response.data.data.cards[0].card.card);
      // setOffersDetails(
      //   response.data.data.cards[1].card.card.gridElements.infoWithStyle
      // );
      // setRestaurantMenuDetails(
      //   response.data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.slice(
      //     1
      //   )
      // );
      setTitleDetails(response.data.data.cards[2].card.card);
       setOffersDetails(
        response.data.data.cards[3].card.card.gridElements.infoWithStyle
      );
       setRestaurantMenuDetails(
        response.data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.slice(
          1
        )
      );
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchRestaurantDetails();
  }, []);
  return { loading, error, titleDetails, offersDetails, restaurantMenuDetails };
};

export default useFetchRestaurantDetail;
