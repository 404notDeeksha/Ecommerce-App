import React from "react";
export const Skeleton = ({ Component, repeatations }) => {
  return (
    <>
      {[...Array(repeatations)].map((_, i) => {
        return <Component key={i} />;
      })}
    </>
  );
};
