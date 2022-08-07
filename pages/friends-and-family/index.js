import React, { useState } from "react";

const FriendsAndFamily = () => {
  const [borderBottom, setborderBottom] = useState(true);
  return (
    <div className="familyContainer">
      <div className="profileHeading">
        <h5 className={borderBottom && "orangeBottomBorder"}>
          My Profile
        </h5>
        <h5
          className={!borderBottom && "orangeBottomBorder"}
          //   onClick={setborderBottom(false)}
        >
          Order History
        </h5>
        
      </div>
    </div>
  );
};

export default FriendsAndFamily;
