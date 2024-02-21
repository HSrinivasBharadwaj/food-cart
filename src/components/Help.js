import React, { useState } from "react";
import useFetchHelpDetails from "../hooks/useFetchHelpDetails";
import Shimmer from "./Shimmer";

const Help = () => {
  const { partnerOnboardingDetails, loading, error, legalDetails, faqDetails } =
    useFetchHelpDetails();
  const [selectedTitle, setSelectedTitle] = useState(null);

  if (loading || error) {
    return <Shimmer />;
  }

  const handleTitleClick = (title) => {
    setSelectedTitle(title);
  };

  return (
    <main className="flex bg-[#37718e]">
      <aside className="w-20 p-2 md:w-32 lg:w-32 xl:w-32 bg-white md:p-4 lg:p-4 xl:p-4">
        <div className="flex flex-col space-y-4">
          <h1
            className="text-lg cursor-pointer hover:text-blue-500"
            onClick={() => handleTitleClick("onboarding")}
          >
            OnBoarding
          </h1>
          <h1
            className="text-lg cursor-pointer hover:text-blue-500"
            onClick={() => handleTitleClick("legal")}
          >
            Legal Issues
          </h1>
          <h1
            className="text-lg cursor-pointer hover:text-blue-500"
            onClick={() => handleTitleClick("faq")}
          >
            FAQ
          </h1>
        </div>
      </aside>
      <section className="p-5">
        <h1 className="text-3xl font-bold text-white mb-2">Help & Support</h1>
        <h2 className="text-lg text-white mb-4">
          Let's take a step ahead and help you better.
        </h2>
        <div className="flex bg-white rounded-md p-5 mt-5">
          <div className="flex flex-col">
            {/* Render data based on the selected title */}
            {selectedTitle === "onboarding" &&
              partnerOnboardingDetails.data.map((item) => (
                <>
                  <div key={item.id}>
                    <h1 className="mt-2">{item.title}</h1>
                    <h1 className="mt-2">{item.description}</h1>
                  </div>
                  <hr className="mt-2 border-dotted border-gray-700" />
                </>
              ))}
            {selectedTitle === "legal" &&
              legalDetails.data.map((item) => (
                <>
                  <div key={item.id}>
                    <h1 className="mt-2">{item.title}</h1>
                    <h1 className="mt-2">{item.description}</h1>
                  </div>
                  <hr className="mt-2 border-dotted" />
                </>
              ))}
            {selectedTitle === "faq" &&
              faqDetails.data.map((item) => (
                <>
                  <div key={item.id}>
                    <h1 className="mt-2">{item.title}</h1>
                    <h1 className="mt-2">{item.description}</h1>
                  </div>
                  <hr className="mt-2 border-dotted" />
                </>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Help;
