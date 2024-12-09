import React from "react";
import BaicCard from "./BaicCard";
import SecondCard from "./SecondCard";
import ThirdCard from "./ThirdCard";
const Header = () => {
  return (
    <div className="header">
      <BaicCard />
      <SecondCard />
      <ThirdCard />
    </div>
  );
};

export default Header;
