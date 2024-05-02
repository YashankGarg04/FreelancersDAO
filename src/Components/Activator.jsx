import React from "react";
import Button from "./Button";

function ActivateWithActivator() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div className="header" style={{ color: "#333", textAlign: "center" }}>
        Activator is a decentralized app on Near Protocol that rewards users for
        active participation in the Near ecosystem. It uses a leaderboard to
        track users' contributions and boost community engagement.
      </div>
      <div style={{ marginTop: "20px" }}>
        {/* Pass onClick prop to the Button component */}
        <Button onClick={handleClick}>Soon..</Button>
      </div>
    </div>
  );
}

export default ActivateWithActivator;
