import React from "react";
import useFetchRestaurantDetail from "../hooks/useFetchRestaurantDetail";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU_IMAGE_URI } from "../utils/constants";
import ItemCategories from "./ItemCategories";

const RestaurantDetail = () => {
  const params = useParams();
  const { loading, error, titleDetails, offersDetails, restaurantMenuDetails } =
    useFetchRestaurantDetail(params.id);
  const { info } = titleDetails;
  const { offers } = offersDetails;

 

  if (
    loading ||
    !info ||
    info.length === 0 ||
    !offers ||
    offers.length === 0 ||
    restaurantMenuDetails.length === 0 ||
    !restaurantMenuDetails
  ) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <p className="text-red-500">{error}</p>;
  }
  return (
    <main>
      <img
        src={RESTAURANT_MENU_IMAGE_URI + info.cloudinaryImageId}
        alt={info.name}
        loading="lazy"
        className="w-full object-cover h-60"
      />
      <section className="mx-5 my-5 md:mx-72 md:my-10 lg:mx-72 lg:my-10 xl:mx-72 xl:my-10">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-gray-900">{info.name}</h1>
            <h2 className="text-gray-600 text-sm mt-2">
              {info.cuisines.join(", ")}
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              {info.areaName} - {info.locality}
            </p>
          </div>
          <div>
            <h1 className="text-3xl font-semibold text-yellow-500">
              {info.avgRating}
            </h1>
            <h2 className="text-gray-600 text-sm mt-2">
              {info.totalRatingsString}
            </h2>
          </div>
        </div>
        <hr className="mt-3 border border-dotted" />
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-between mt-3">
          {offers.map((offer) => {
            return (
              <div
                key={offer.offerIds}
                className="border border-gray-500 text-center md:text-left lg:text-left xl:text-left rounded-lg p-2 mt-3 md:mt-0 lg:mt-0 xl:mt-0"
              >
                <p className="text-xs">{offer.info.header}</p>
                <p className="text-xs">
                  {offer.info.couponCode} | {offer.info.description}
                </p>
              </div>
            );
          })}
        </div>
        <hr className="mt-3 border border-dotted" />
        <div className="mt-3">
          {restaurantMenuDetails.map((menuDetails) => {
            return (
              <div key={menuDetails.card.card.title}>
                <h1 className="font-bold text-lg">
                  {menuDetails.card.card.title}
                </h1>
                <ItemCategories info={menuDetails.card.card} />
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default RestaurantDetail;
