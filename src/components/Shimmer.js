import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Shimmer = () => {
  return (
    <main>
      <section className="flex justify-between items-center">
        <Skeleton width={100} />
        <div className="flex items-center">
          <Skeleton circle height={30} width={30} className="mx-5" />
          <Skeleton circle height={30} width={30} className="mx-5" />
        </div>
      </section>
      <section className="mt-2 flex justify-between overflow-x-hidden">
        {/* Create a cards */}
        {Array.from({ length: 8 }).map((_, index) => {
          return (
            <div key={index}>
              <Skeleton height={200} width={200} className="mr-5"/>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Shimmer;
