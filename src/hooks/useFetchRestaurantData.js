import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { SWIGGY_API_URI } from '../utils/constants';

const useFetchRestaurantData = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [categories, setCategories] = useState([]);
    const [popularRestaurants, setPopularRestaurants] = useState([]);
    const [restaurantData, setRestaurantData] = useState([]);
    const fetchRestaurantData = async () => {
        setLoading(true);
        try {
            const response = await axios.get(SWIGGY_API_URI);
            setCategories(response.data.data.cards[0].card.card.gridElements.infoWithStyle);
            setPopularRestaurants(response.data.data.cards[1].card.card.gridElements.infoWithStyle);
            setRestaurantData(response.data.data.cards[4].card.card.gridElements.infoWithStyle);
            setLoading(false);
        } catch (error) {
            setError(error)
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchRestaurantData()
    },[])
  return {loading,error,categories,popularRestaurants,restaurantData}
}

export default useFetchRestaurantData